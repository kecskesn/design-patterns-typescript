import { Dog, Lion, Monkey } from './visitable';

export interface IVisitor {
  visitMonkey(monkey: Monkey): void;
  visitLion(lion: Lion): void;
  visitDog(dog: Dog): void;
}

export class Speak implements IVisitor {
  visitMonkey(monkey: Monkey): void {
    monkey.shout();
  }

  visitLion(lion: Lion): void {
    lion.roar();
  }

  visitDog(dog: Dog): void {
    dog.bark();
  }
}

export class Jump implements IVisitor {
  visitMonkey(_: Monkey): void {
    console.log('Jumped 6 meters high on to the tree!');
  }

  visitLion(_: Lion): void {
    console.log('Jumped 7 feet! Back on the ground!');
  }

  visitDog(_: Dog): void {
    console.log('Jumped around a bit cuz Im a happy boi!');
  }
}