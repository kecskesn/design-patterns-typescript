import DoorFactory, { DoorStregth } from "./door-factory";

const DOOR = DoorFactory.makeDoor(DoorStregth.STRONG, 90, 210);
console.log(DOOR.getDimensions());
console.log(DOOR.getMaterial());
