import { IDoor } from './door';
import DoorFactory, { DoorStregth } from './door-factory';

const door: IDoor = DoorFactory.makeDoor(DoorStregth.NORMAL, 90, 210);
console.log(door.getDimensions());
console.log(door.getMaterial());
