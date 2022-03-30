import Light from './light';

export interface ISwitchCommand {
  execute(): void;
}

//Command objects
export class SwitchOffCommand implements ISwitchCommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}

export class SwitchOnCommand implements ISwitchCommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}
