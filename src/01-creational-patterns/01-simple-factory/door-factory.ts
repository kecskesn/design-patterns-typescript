import { IDoor, WoodenDoor } from "./door";

export default class DoorFactory {
  static makeDoor(width: number, height: number): IDoor {
      return new WoodenDoor(width, height);
  }
}
