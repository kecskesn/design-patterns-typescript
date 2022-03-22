import { IButton } from "./button";
import { ICheckbox } from "./checkbox";
import { IGUIFactory } from "./gui-factory";

export class Application {
    private factory: IGUIFactory;
    private button: IButton;
    private checkBox: ICheckbox;

    constructor(factory: IGUIFactory) {
        this.factory = factory;
        this.button = this.factory.createButton();
        this.checkBox = this.factory.createCheckBox();
    }

    public render() {
        console.log(this.button.render());
        console.log(this.checkBox.render());
    }
}