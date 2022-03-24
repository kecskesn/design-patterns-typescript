export interface IRound {
  getRadius(): number;
}

export class RoundTube implements IRound {
  constructor(private radius: number) {
    this.radius = radius;
  }

  public getRadius() {
    return this.radius;
  }
}

export class SquareTube {
  constructor(private width: number) {
    this.width = width;
  }

  public getWidth() {
    return this.width;
  }
}
