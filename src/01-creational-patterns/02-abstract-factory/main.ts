import { Application } from './application';
import { IGUIFactory, LinuxFactory, MacFactory, WinFactory } from './gui-factory';

enum OS {
  WIN,
  MAC,
  LINUX
}

function getOS() {
  return OS.LINUX;
}

let factory: IGUIFactory;

if (getOS() === OS.WIN) {
  factory = new WinFactory();
} else if (getOS() === OS.MAC) {
  factory = new MacFactory();
} else {
  factory = new LinuxFactory();
}

const application = new Application(factory);

application.render();
