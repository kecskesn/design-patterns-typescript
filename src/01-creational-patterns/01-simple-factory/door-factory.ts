import { IDoor, IronDoor, WoodenDoor } from "./door";

export enum DoorStregth {
  NORMAL,
  STRONG
}

export default class DoorFactory {
  static makeDoor(doorStregth: DoorStregth, width: number, height: number): IDoor {
    if (doorStregth === DoorStregth.NORMAL) {
      return new WoodenDoor(width, height);
    } else {
      return new IronDoor(width, height)
    }
  }
}
