interface IWorker {
  dailyWork: string[];

  logDailyWork(work: string): void;
  getDailyWork(): void;
}

export class President implements IWorker {
  private static instance: President;
  dailyWork: string[] = [];

  private constructor() {}

  public static getInstance() {
    if (!President.instance) {
      President.instance = new President();
    }
    return President.instance;
  }

  logDailyWork(work: string): void {
    this.dailyWork.push(work);
  }

  getDailyWork(): string[] {
    return this.dailyWork;
  }
}

export class Developer implements IWorker {
  dailyWork: string[];

  constructor() {
    this.dailyWork = [];
  }

  logDailyWork(work: string): void {
    this.dailyWork.push(work);
  }

  getDailyWork(): string[] {
    return this.dailyWork;
  }
}
