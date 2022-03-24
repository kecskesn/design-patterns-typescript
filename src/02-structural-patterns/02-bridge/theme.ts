export interface ITheme {
  getColor(): string;
}

export class DarkTheme implements ITheme {
  getColor(): string {
    return "Dark Black";
  }
}

export class LightTheme implements ITheme {
  getColor(): string {
    return "White";
  }
}

export class AquaTheme implements ITheme {
  getColor(): string {
    return "Light blue";
  }
}
