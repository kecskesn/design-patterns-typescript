import { DevelopmentManager, HumanResourceManager } from "./hiring-manager";

const DEVELOPER_MANAGER = new DevelopmentManager();
console.log(DEVELOPER_MANAGER.takeInterview());

const HUMAN_RESOURCE_MANAGER = new HumanResourceManager();
console.log(HUMAN_RESOURCE_MANAGER.takeInterview());