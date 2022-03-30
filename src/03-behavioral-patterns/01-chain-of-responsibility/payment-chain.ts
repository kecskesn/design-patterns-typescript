import { Account, IAccount } from './account';

export default class PaymentChain {
  bank: IAccount;
  paypal: IAccount;
  bitcoin: IAccount;

  constructor() {
    this.bank = new Account(100, 'bank');
    this.paypal = new Account(300, 'paypal');
    this.bitcoin = new Account(1000, 'bitcoin');
    this.bank.nextSuccessor(this.paypal);
    this.paypal.nextSuccessor(this.bitcoin);
  }
}
