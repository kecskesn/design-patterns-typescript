export interface ICheckbox {
  render(): string;
}

export class WinCheckbox implements ICheckbox {
  public render(): string {
    return 'Windows checkbox rendered!';
  }
}

export class MacCheckbox implements ICheckbox {
  public render(): string {
    return 'Mac checkbox rendered!';
  }
}

export class LinuxCheckbox implements ICheckbox {
  public render(): string {
    return 'Linux checkbox rendered!';
  }
}
