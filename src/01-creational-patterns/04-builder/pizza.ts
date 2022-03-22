import {
  CheeseType,
  PizzaSize,
  SauceType,
} from "./pizza-builder";

export class Pizza {
  constructor(
    private size: PizzaSize,
    private isThin: boolean,
    private sauceType: SauceType,
    private cheeseType: CheeseType,
    private cheeseCrust: boolean,
    private toppings: string[]
  ) {
    this.size = size;
    this.isThin = isThin;
    this.sauceType = sauceType;
    this.cheeseType = cheeseType;
    this.cheeseCrust = cheeseCrust;
    this.toppings = toppings;
  }

  public eat(): void {
    console.log('YUUUUUM!');
  }
}
