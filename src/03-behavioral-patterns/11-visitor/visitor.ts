import { Bank, Company, Resident, Restaurant } from './visitable';

export interface IVisitor {
  visitResident(client: Resident): void;
  visitCompany(client: Company): void;
  visitBank(client: Bank): void;
  visitRestaurant(client: Restaurant): void;
}

export class InsuranceMessagingVisitor implements IVisitor {
  visitResident(client: Resident): void {
    console.log(`Sending medical insurance mail to ${client.getEmail()}!`);
  }

  visitCompany(client: Company): void {
    console.log(`Sending employee and equipment insurance mail to ${client.getEmail()}!`);
  }

  visitBank(client: Bank): void {
    console.log(`Sending theft insurance mail to ${client.getEmail()}!`);
  }

  visitRestaurant(client: Restaurant): void {
    console.log(`Sending fire and flood insurance mail to ${client.getEmail()}!`);
  }
}
