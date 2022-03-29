import { DevelopmentManager, HumanResourceManager } from './hiring-manager';

let developerManager = new DevelopmentManager();
console.log(developerManager.takeInterview());

let humanResourceManager = new HumanResourceManager();
console.log(humanResourceManager.takeInterview());
