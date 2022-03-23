import { Developer, President } from "./worker";

const DEVELOPER1 = new Developer();
const DEVELOPER2 = new Developer();

console.log("Are developers the same?");
console.log(DEVELOPER1 === DEVELOPER2);

DEVELOPER1.logDailyWork('pdp');
DEVELOPER2.logDailyWork('programming');

console.log("Daily work of devs:");
console.log(DEVELOPER1.getDailyWork());
console.log(DEVELOPER2.getDailyWork());

console.log();

const PRESIDENT1 = President.getInstance();
const PRESIDENT2 = President.getInstance();

console.log("Are presidents the same?");
console.log(PRESIDENT1 === PRESIDENT2);

PRESIDENT1.logDailyWork('signing papers');
PRESIDENT2.logDailyWork('meeting');

console.log("Daily work of presidents:");
console.log(PRESIDENT1.getDailyWork());
console.log(PRESIDENT2.getDailyWork());