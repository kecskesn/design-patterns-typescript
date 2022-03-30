import Computer from './computer';

export default class ComputerFacade {
  private computer;

  constructor() {
    this.computer = new Computer();
  }

  turnOn(): void {
      this.computer.getElectricShock();
      this.computer.makeSound();
      this.computer.showLoadingScreen();
      this.computer.bam();
  }

  turnOff(): void {
    this.computer.closeEverything();
    this.computer.pullCurrent();
    this.computer.sooth();
  }
}
