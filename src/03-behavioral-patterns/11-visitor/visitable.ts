import { IVisitor } from './visitor';

export default interface IVisitable {
  accept(visitor: IVisitor): void;
}

export class Monkey implements IVisitable {
  shout() {
    console.log('Ooh oo aa aa!');
  }

  accept(visitor: IVisitor): void {
    visitor.visitMonkey(this);
  }
}

export class Lion implements IVisitable {
  roar() {
    console.log('Roaaar!');
  }

  accept(visitor: IVisitor): void {
    visitor.visitLion(this);
  }
}

export class Dog implements IVisitable {
  bark() {
    console.log('Wuuuuf wuuf!');
  }

  accept(visitor: IVisitor): void {
    visitor.visitDog(this);
  }
}
