import GameCharacter from "./game-character";
import { Crawling, Sprinting, Walking } from "./move";

const GAME_CHARACTER = new GameCharacter();

GAME_CHARACTER.move(new Walking());
// Character sees the enemy
GAME_CHARACTER.move(new Sprinting());
// Character finds a small cave to hide in
GAME_CHARACTER.move(new Crawling());
