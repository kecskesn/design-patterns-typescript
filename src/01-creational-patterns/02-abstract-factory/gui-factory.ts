import { IButton, MacButton, WinButton } from './button';
import { ICheckbox, MacCheckbox, WinCheckbox } from './checkbox';

// absctarct factory
export interface IGUIFactory {
  createButton(): IButton;
  createCheckBox(): ICheckbox;
}

export class WinFactory implements IGUIFactory {
  createButton(): IButton {
    return new WinButton();
  }
  createCheckBox(): ICheckbox {
    return new WinCheckbox();
  }
}

export class MacFactory implements IGUIFactory {
  createButton(): IButton {
    return new MacButton();
  }
  createCheckBox(): ICheckbox {
    return new MacCheckbox();
  }
}
