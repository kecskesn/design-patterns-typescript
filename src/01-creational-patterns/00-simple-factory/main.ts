import DoorFactory, { DoorStregth } from './door-factory';

let door = DoorFactory.makeDoor(DoorStregth.NORMAL, 90, 210);
console.log(door.getDimensions());
console.log(door.getMaterial());
