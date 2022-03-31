import { AlphabeticalOrderIterator, IIterator } from "./iterator";

interface Aggregator {
  getIterator(): IIterator<string>;
}

export class WordsCollection implements Aggregator {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): IIterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  public getReverseIterator(): IIterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}
