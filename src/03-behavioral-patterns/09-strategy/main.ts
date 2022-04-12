import GameCharacter from "./game-character";
import { Crawling, Sprinting, Walking } from "./move";

let gameCharacter = new GameCharacter();

gameCharacter.move(new Walking());
// Character sees the enemy
gameCharacter.move(new Sprinting());
// Character finds a small cave to hide in
gameCharacter.move(new Crawling());
