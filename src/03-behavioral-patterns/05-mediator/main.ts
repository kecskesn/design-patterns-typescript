import { Component } from './component';
import Mediator from './mediator';

let mediator = new Mediator();

let malwareDatabase = new Component(mediator, 'malwareDatabase');
let serverProtection = new Component(mediator, 'serverProtection');

mediator.add(malwareDatabase);
mediator.add(serverProtection);

malwareDatabase.notify('New malware published!');
serverProtection.notify('A malware got quarantined!');
