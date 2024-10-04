import { Developer, IWorker, President } from './worker';

const developer1: IWorker = new Developer();
const developer2: IWorker = new Developer();

console.log('Are developers the same?');
console.log(developer1 === developer2);

developer1.logDailyWork('pdp');
developer2.logDailyWork('programming');

console.log('Daily work of devs:');
console.log(developer1.getDailyWork());
console.log(developer2.getDailyWork());

console.log();

// This code will not work because the constructor is private
// const president: IWorker = new President();

const president1: IWorker = President.getInstance();
const president2: IWorker = President.getInstance();

console.log('Are presidents the same?');
console.log(president1 === president2);

president1.logDailyWork('signing papers');
president2.logDailyWork('meeting');

console.log('Daily work of presidents:');
console.log(president1.getDailyWork());
console.log(president2.getDailyWork());
