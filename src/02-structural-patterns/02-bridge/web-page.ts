import { ITheme } from './theme';

interface IWebPage {
  getContent(): string;
}

export class About implements IWebPage {
  constructor(private theme: ITheme) {
    this.theme = theme;
  }

  getContent(): string {
    return 'About page is in ' + this.theme.getColor();
  }
}

export class Careers implements IWebPage {
  constructor(private theme: ITheme) {
    this.theme = theme;
  }

  getContent(): string {
    return 'Careers page is in ' + this.theme.getColor();
  }
}
