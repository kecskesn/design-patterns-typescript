import { Developer, President } from './worker';

let developer1 = new Developer();
let developer2 = new Developer();

console.log('Are developers the same?');
console.log(developer1 === developer2);

developer1.logDailyWork('pdp');
developer2.logDailyWork('programming');

console.log('Daily work of devs:');
console.log(developer1.getDailyWork());
console.log(developer2.getDailyWork());

console.log();

let president1 = President.getInstance();
let president2 = President.getInstance();

console.log('Are presidents the same?');
console.log(president1 === president2);

president1.logDailyWork('signing papers');
president2.logDailyWork('meeting');

console.log('Daily work of presidents:');
console.log(president1.getDailyWork());
console.log(president2.getDailyWork());
