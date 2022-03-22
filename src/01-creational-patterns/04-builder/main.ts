import { PizzaBuilder, PizzaSize, SauceType } from "./pizza-builder";

let pizza = new PizzaBuilder(PizzaSize.BIG)
  .setSauceType(SauceType.BOLOGNESE)
  .hasCheeseCrust(true)
  .addTopping("pepperoni")
  .addTopping("tomato")
  .addTopping("egg")
  .buildPizza();

console.log(pizza);
pizza.eat();
