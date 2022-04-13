import { IVisitor } from './visitor';

export default interface IVisitable {
  accept(visitor: IVisitor): void;
}

abstract class Client {
  constructor(
    private name: string,
    private address: string,
    private email: string,
  ) {
    this.name = name;
    this.address = address;
    this.email = email;
  }

  getEmail() {
    return this.email;
  }
}

export class Resident extends Client implements IVisitable {
  constructor(
    name: string,
    address: string,
    email: string,
    private insuranceClass: string,
  ) {
    super(name, address, email);
    this.insuranceClass = insuranceClass;
  }

  accept(visitor: IVisitor): void {
    visitor.visitResident(this);
  }
}

export class Company extends Client implements IVisitable {
  constructor(
    name: string,
    address: string,
    email: string,
    private nbrOfEmployees: number,
  ) {
    super(name, address, email);
    this.nbrOfEmployees = nbrOfEmployees;
  }

  accept(visitor: IVisitor): void {
    visitor.visitCompany(this);
  }
}

export class Bank extends Client implements IVisitable {
  constructor(
    name: string,
    address: string,
    email: string,
    private branchesInsured: number,
  ) {
    super(name, address, email);
    this.branchesInsured = branchesInsured;
  }

  accept(visitor: IVisitor): void {
    visitor.visitBank(this);
  }
}

export class Restaurant extends Client implements IVisitable {
  constructor(
    name: string,
    address: string,
    email: string,
    private availableAbroad: boolean,
  ) {
    super(name, address, email);
    this.availableAbroad = availableAbroad;
  }
  
  accept(visitor: IVisitor): void {
    visitor.visitRestaurant(this);
  }
}
