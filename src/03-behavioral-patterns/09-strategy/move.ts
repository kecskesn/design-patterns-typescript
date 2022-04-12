export interface IMove {
  move(position: [number, number]): void;
}

export class Walking implements IMove {
  move(position: [number, number]) {
    position[0] += 1;
    console.log(`I am Walking. New position = ${position}`);
  }
}

export class Sprinting implements IMove {
  move(position: [number, number]) {
    position[0] += 2;
    console.log(`I am Sprinting. New position = ${position}`);
  }
}

export class Crawling implements IMove {
  move(position: [number, number]) {
    position[0] += 0.5;
    console.log(`I am Crawling. New position = ${position}`);
  }
}
