export interface ICoffee {
  getCost(): number;
  getDescription(): string;
}

export class SimpleCoffee implements ICoffee {
  getCost(): number {
    return 150;
  }

  getDescription(): string {
    return 'Simple coffee';
  }
}

export class MilkCoffee implements ICoffee {
  constructor(private coffee: ICoffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 50;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ', milk';
  }
}

export class VanillaCoffee implements ICoffee {
  constructor(private coffee: ICoffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 50;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ', vanilla';
  }
}

export class WhipCoffee implements ICoffee {
  constructor(private coffee: ICoffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 20;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ', whip';
  }
}
