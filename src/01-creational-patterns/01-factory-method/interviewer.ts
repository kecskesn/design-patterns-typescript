export interface IInterviewer {
  askQuestions(): string;
}

export class Developer implements IInterviewer {
  public askQuestions(): string {
    return 'Can you tell me about design patterns?';
  }
}

export class HumanResource implements IInterviewer {
  public askQuestions(): string {
    return 'What is your expected salary?';
  }
}
