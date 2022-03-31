import { WordsCollection } from "./aggregator";

export interface IIterator<T> {
  current(): T;
  next(): T;
  key(): number;
  hasNext(): boolean;
  rewind(): void;
}

export class AlphabeticalOrderIterator implements IIterator<string> {
  private collection: WordsCollection;
  private position: number = 0;
  private reverse: boolean = false;

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public current(): string {
    return this.collection.getItems()[this.position];
  }

  public next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  public key(): number {
    return this.position;
  }

  public hasNext(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }

  public rewind() {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }
}
