import CareTaker from './caretaker';
import GameCharacter from './game-character';

const GAME_CHARACTER = new GameCharacter();
const CARETAKER = new CareTaker(GAME_CHARACTER);

GAME_CHARACTER.registerKill();
GAME_CHARACTER.moveForward(1);
GAME_CHARACTER.addInventory('Dragonbone Sword');
GAME_CHARACTER.registerKill();
GAME_CHARACTER.addInventory('Health Potion');
GAME_CHARACTER.moveForward(1);
console.log(GAME_CHARACTER.status());
CARETAKER.save();
console.log();

GAME_CHARACTER.registerKill();
GAME_CHARACTER.moveForward(1);
GAME_CHARACTER.progressToNextLevel();
GAME_CHARACTER.registerKill();
GAME_CHARACTER.addInventory('Iron Chestplate');
GAME_CHARACTER.moveForward(10);
GAME_CHARACTER.registerKill();
console.log(GAME_CHARACTER.status());
CARETAKER.save();
console.log();

GAME_CHARACTER.moveForward(1);
GAME_CHARACTER.progressToNextLevel();
GAME_CHARACTER.registerKill();
GAME_CHARACTER.addInventory('Cursed Amulet of Death');
console.log(GAME_CHARACTER.status());
console.log();

CARETAKER.restore(0);
console.log(GAME_CHARACTER.status());
console.log();

CARETAKER.restore(1);
console.log(GAME_CHARACTER.status());