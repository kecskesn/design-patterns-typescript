// Factory Use Case Example Code
import DoorFactory from './door-factory'

const DOOR = DoorFactory.makeDoor(90, 210);
console.log(DOOR.getDimensions())
console.log(DOOR.getMaterial())
