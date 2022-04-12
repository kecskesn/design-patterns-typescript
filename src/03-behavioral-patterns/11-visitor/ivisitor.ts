import { AbstractCarPart } from './abstract-car-part';

export interface IVisitor {
  // An interface that custom Visitors should implement
  visit(abstractCarPart: AbstractCarPart): void;
}

export class PrintPartsVisitor implements IVisitor {
  // Print out the part name and sku
  visit(abstractCarPart: AbstractCarPart) {
    if (abstractCarPart.getSerial() !== undefined) {
      console.log(
        `${abstractCarPart.getName()}\t:${abstractCarPart.getSerial()}\t:${abstractCarPart.getPrice()}`,
      );
    }
  }
}

export class TotalPriceVisitor implements IVisitor {
  // Print out the total cost of the parts in the car
  totalPrice = 0;

  visit(abstractCarPart: AbstractCarPart) {
    if (abstractCarPart.getPrice() !== undefined) {
      this.totalPrice += abstractCarPart.getPrice() as number;
    }
  }
}
