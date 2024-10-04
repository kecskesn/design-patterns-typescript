import { IButton, LinuxButton, MacButton, WinButton } from './button';
import { ICheckbox, LinuxCheckbox, MacCheckbox, WinCheckbox } from './checkbox';

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

export class LinuxFactory implements IGUIFactory {
  createButton(): IButton {
    return new LinuxButton();
  }
  createCheckBox(): ICheckbox {
    return new LinuxCheckbox();
  }
}
