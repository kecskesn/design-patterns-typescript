import { MilkCoffee, SimpleCoffee, VanillaCoffee, WhipCoffee } from './coffee';

let customCoffee = new SimpleCoffee();
console.log(customCoffee.getCost());
console.log(customCoffee.getDescription());
console.log('========');

customCoffee = new MilkCoffee(customCoffee);
console.log(customCoffee.getCost());
console.log(customCoffee.getDescription());
console.log('========');

customCoffee = new WhipCoffee(customCoffee);
console.log(customCoffee.getCost());
console.log(customCoffee.getDescription());
console.log('========');

customCoffee = new VanillaCoffee(customCoffee);
console.log(customCoffee.getCost());
console.log(customCoffee.getDescription());
