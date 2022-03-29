import { dimension } from './dimension';

export interface IDoor {
  width: number;
  height: number;
  material: string;
  getDimensions(): dimension;
  getMaterial(): string;
}

export class WoodenDoor implements IDoor {
  width: number;
  height: number;
  material: string;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.material = 'Wood';
  }

  getDimensions(): dimension {
    return {
      width: this.width,
      height: this.height,
    };
  }

  getMaterial(): string {
    return this.material;
  }
}

export class IronDoor implements IDoor {
  width: number;
  height: number;
  material: string;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.material = 'Iron';
  }

  getDimensions(): dimension {
    return {
      width: this.width,
      height: this.height,
    };
  }

  getMaterial(): string {
    return this.material;
  }
}
