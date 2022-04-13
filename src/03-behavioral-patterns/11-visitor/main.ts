import { Bank, Company, Resident, Restaurant } from "./visitable";
import { InsuranceMessagingVisitor } from "./visitor";

let clients = [
    new Resident('John Doe', '810 Lake Ave Clark, New Jersey(NJ), 07066', 'john.doe99@gmail.com', 'Life Insurance'),
    new Company('Musico Ltd', '12018 Maidstone Ave Norwalk, California(CA), 90650', 'info@musico.com', 134),
    new Bank('Bank of California', '20181 Hudson St Burney, California(CA), 96013', 'info@bankofcalifornia.org', 15),
    new Restaurant('Pizza italia', '38 Fairview Ave Naugatuck, Connecticut(CT), 06770', 'pizza.italia@gmail.com', true),
]

let insuranceMessagingVisitor = new InsuranceMessagingVisitor();

clients.forEach(client => {
    client.accept(insuranceMessagingVisitor);
});