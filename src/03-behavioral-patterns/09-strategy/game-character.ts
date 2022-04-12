import { IMove } from "./move";

export default class GameCharacter {
  private position: [number, number] = [0, 0];

  move(movementStyle: IMove) {
    movementStyle.move(this.position);
  }
}
