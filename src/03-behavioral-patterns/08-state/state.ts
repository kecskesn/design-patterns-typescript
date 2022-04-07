export enum State {
  INITIALIZING = 'Initializing',
  STARTED = 'Started',
  RUNNING = 'Running',
  FINISHED = 'Finished',
}

interface IState {
  request(): void;
}

export class StateContext implements IState {
  private state: State;

  constructor() {
    this.state = State.INITIALIZING;
  }

  public getState() {
    return this.state;
  }

  public setState(value: State) {
    switch (value) {
      case State.STARTED:
        this.request = Started.prototype.request;
        break;
      case State.RUNNING:
        this.request = Running.prototype.request;
        break;
      case State.FINISHED:
        this.request = Finished.prototype.request;
        break;
    }
    this.state = value;
  }

  request() {
    // Does nothing until state changes, when then
    // this method handle is reassigned to a different
    // concrete states request method
  }
}

class Started implements IState {
  request() {
    console.log(`I am now Started`);
  }
}

class Running implements IState {
  request() {
    console.log(`I am now Running`);
  }
}

class Finished implements IState {
  request() {
    console.log(`I am now Finished`);
  }
}
