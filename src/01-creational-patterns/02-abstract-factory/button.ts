export interface IButton {
  render(): string;
}

export class WinButton implements IButton {
  public render(): string {
    return 'Windows button rendered!';
  }
}

export class MacButton implements IButton {
  public render(): string {
    return 'Mac button rendered!';
  }
}
