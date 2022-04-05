export interface IObserver {
  notify(data: string): void;
}

export class JobSeeker implements IObserver {
  constructor(private name: string) {
    this.name = name;
  }

  notify(data: string): void {
    // Business logic here
    console.log(`Dear ${this.name}, There is a new ${data} job open!`);
  }
}
