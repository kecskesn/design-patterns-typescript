import GameCharacter from './game-character';
import Memento from './memento';

export default class CareTaker {
  private mementos: Memento[];

  constructor(private originator: GameCharacter) {
    this.originator = originator;
    this.mementos = [];
  }

  save(): void {
    console.log('CareTaker: Game Save');
    const memento = this.originator.memento;
    this.mementos.push(memento);
  }

  restore(index: number): void {
    console.log('CareTaker: Loading Save...');
    const memento = this.mementos[index];
    this.originator.memento = memento;
  }
}
