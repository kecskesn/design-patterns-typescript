import IVisitable from './ivisitable';
import { IVisitor } from './ivisitor';

export abstract class AbstractCarPart implements IVisitable {
  private name: string;
  private serial: string | undefined;
  private price: number | undefined;

  constructor(name: string, serial?: string, price?: number) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getSerial(): string | undefined {
    return this.serial;
  }

  public setSerial(serial: string | undefined) {
    this.serial = serial;
  }

  public getPrice(): number | undefined {
    return this.price;
  }

  public setPrice(price: number | undefined) {
    this.price = price;
  }

  accept(visitor: IVisitor): void {
    visitor.visit(this);
  }
}

class CarBody extends AbstractCarPart {}

class Engine extends AbstractCarPart {}

class Wheel extends AbstractCarPart {}

export class Car extends AbstractCarPart {
  parts: AbstractCarPart[];

  constructor(name: string) {
    super(name);
    this.parts = [
      new CarBody('Utility Body', 'ABC-123-21', 1001),
      new Engine('V8 engine', 'DEF-456-21', 2555),
      new Wheel('FrontLeft', 'GHI-789FL-21', 136),
      new Wheel('FrontRight', 'GHI-789FR-21', 136),
      new Wheel('BackLeft', 'GHI-789BL-21', 152),
      new Wheel('BackRight', 'GHI-789BR-21', 152),
    ];
  }

  accept(visitor: IVisitor) {
    this.parts.forEach(part => {
      part.accept(visitor);
    });
    visitor.visit(this);
  }
}
