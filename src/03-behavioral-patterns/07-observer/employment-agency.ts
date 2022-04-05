import { IObserver } from './job-seeker';

export interface IObservable {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notify(data: string): void;
}

export class EmploymentAgency implements IObservable {
  private observers: Set<IObserver>;

  constructor() {
    this.observers = new Set();
  }

  subscribe(observer: IObserver): void {
    this.observers.add(observer);
  }

  unsubscribe(observer: IObserver): void {
    this.observers.delete(observer);
  }

  notify(data: string): void {
    this.observers.forEach(observer => {
      observer.notify(data);
    });
  }

  addJobAdvertisement(data: string) {
    // Business logic here
    this.notify(data);
  }
}
