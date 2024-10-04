import { Developer, HumanResource, IInterviewer } from './interviewer';

export abstract class HiringManager {
  // factory method
  abstract makeInterviewer(): IInterviewer;

  takeInterview(): string {
    let interviewer: IInterviewer = this.makeInterviewer();
    return interviewer.askQuestions();
  }
}

export class DevelopmentManager extends HiringManager {
  makeInterviewer(): IInterviewer {
    return new Developer();
  }
}

export class HumanResourceManager extends HiringManager {
  makeInterviewer(): IInterviewer {
    return new HumanResource();
  }
}
