import { DevelopmentManager, HiringManager, HumanResourceManager } from './hiring-manager';

const developerManager: HiringManager = new DevelopmentManager();
console.log(developerManager.takeInterview());

const humanResourceManager: HiringManager = new HumanResourceManager();
console.log(humanResourceManager.takeInterview());
