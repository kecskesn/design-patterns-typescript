import { IRound, SquareTube } from './tube';

export default class SquareTubeAdapter implements IRound {
  constructor(private tube: SquareTube) {
    this.tube = tube;
  }

  getRadius(): number {
    return (this.tube.getWidth() * Math.SQRT2) / 2;
  }
}
