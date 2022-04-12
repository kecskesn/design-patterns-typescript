import { Car } from './abstract-car-part';
import { PrintPartsVisitor, TotalPriceVisitor } from './ivisitor';

let car = new Car('DeLorean');

car.accept(new PrintPartsVisitor());

const TOTAL_PRICE_VISITOR = new TotalPriceVisitor();
car.accept(TOTAL_PRICE_VISITOR);
console.log(`Total Price = ${TOTAL_PRICE_VISITOR.totalPrice}`);
