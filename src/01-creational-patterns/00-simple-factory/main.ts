import DoorFactory, { DoorStregth } from './door-factory';

let door = DoorFactory.makeDoor(DoorStregth.STRONG, 90, 210);
console.log(door.getDimensions());
console.log(door.getMaterial());
