import Mediator from './mediator'

export interface IComponent {
    notify(message: string): void
    receive(message: string): void
}

export class Component implements IComponent {
    #mediator: Mediator
    #name: string

    constructor(mediator: Mediator, name: string) {
        this.#mediator = mediator
        this.#name = name
    }

    notify(message: string): void {
        console.log(this.#name + ': >>> Out >>> : ' + message)
        this.#mediator.notify(message, this)
    }

    receive(message: string): void {
        console.log(this.#name + ': <<< In <<< : ' + message)
    }
}
