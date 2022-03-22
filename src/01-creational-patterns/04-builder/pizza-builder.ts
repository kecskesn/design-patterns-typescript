import { Pizza } from "./pizza";

export enum PizzaSize {
  SMALL = 30,
  MEDIUM = 40,
  BIG = 50,
}

export enum SauceType {
  TOMATO,
  SOUR_CREAM,
  MUSTARD,
  BOLOGNESE,
}

export enum CheeseType {
  PARMESAN,
  MOZZARELLA,
}

export class PizzaBuilder {
  private size: PizzaSize;

  private isThin = true;
  private sauceType = SauceType.TOMATO;
  private cheeseType = CheeseType.MOZZARELLA;
  private cheeseCrust = false;
  private toppings = Array<string>();

  constructor(size: PizzaSize) {
    this.size = size;
  }

  public isCrustThin(isThin: boolean): PizzaBuilder {
    this.isThin = isThin;
    return this;
  }

  public setSauceType(sauceType: SauceType): PizzaBuilder {
    this.sauceType = sauceType;
    return this;
  }

  public setCheeseType(cheeseType: CheeseType): PizzaBuilder {
    this.cheeseType = cheeseType;
    return this;
  }

  public hasCheeseCrust(hasCheeseCrust: boolean): PizzaBuilder {
    this.cheeseCrust = hasCheeseCrust;
    return this;
  }

  public addTopping(topping: string): PizzaBuilder {
    this.toppings.push(topping);
    return this;
  }

  public buildPizza(): Pizza {
    return new Pizza(
      this.size,
      this.isThin,
      this.sauceType,
      this.cheeseType,
      this.cheeseCrust,
      this.toppings
    );
  }
}
