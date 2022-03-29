import { Application } from './application';
import { IGUIFactory, MacFactory, WinFactory } from './gui-factory';

enum OS {
  WIN,
  MAC,
}

function getOS() {
  return OS.WIN;
}

let factory: IGUIFactory;

if (getOS() === OS.WIN) {
  factory = new WinFactory();
} else {
  factory = new MacFactory();
}

let application = new Application(factory);

application.render();
