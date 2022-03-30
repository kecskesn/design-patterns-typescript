export interface IAccount {
  nextSuccessor(successor: IAccount): void;
  getBalance(): number;
  getName(): string;
  pay(amount: number): void;
}

export class Account implements IAccount {
  private successor: IAccount | undefined;

  constructor(private balance: number, private name: string) {
    this.balance = balance;
    this.name = name;
  }

  nextSuccessor(successor: IAccount): void {
    this.successor = successor;
  }

  getBalance(): number {
    return this.balance;
  }

  getName(): string {
    return this.name;
  }

  pay(amount: number): void {
    if (this.canPay(amount)) {
      console.log(`Paid ${amount} using ${this.name} account!`);
    } else if (this.successor) {
      console.log(`Cannot pay ${amount} using ${this.name} account! Proceeding to use ${this.successor.getName()}!`);
      this.successor.pay(amount);
    } else {
      console.log('Unable to pay! Non of your account have enough balance!');
    }
  }

  private canPay(amount: number): boolean {
    return this.balance >= amount;
  }
}
