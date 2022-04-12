import { Dog, Lion, Monkey } from "./visitable";
import { Jump, Speak } from "./visitor";

let monkey = new Monkey();
let lion = new Lion();
let dog = new Dog();

let speak = new Speak();

monkey.accept(speak);
lion.accept(speak);
dog.accept(speak);

// let jump = new Jump();
// monkey.accept(jump);
// lion.accept(jump);
// dog.accept(jump);