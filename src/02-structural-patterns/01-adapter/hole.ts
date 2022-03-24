import { IRound } from "./tube";

export default class RoundHole {
  constructor(private radius: number) {
    this.radius = radius;
  }

  public getRadius() {
    return this.radius;
  }

  public fits(tube: IRound) {
    return this.radius >= tube.getRadius();
  }
}
