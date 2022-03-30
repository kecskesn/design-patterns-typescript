interface IDoor {
  open(password: string): void;
  close(): void;
}

export class LabDoor implements IDoor {
  open(_: string): void {
    console.log('Opening lab door!');
  }

  close(): void {
    console.log('Closing lab door!');
  }
}

export class SecuredDoor implements IDoor {
    constructor(private door: IDoor) {
        this.door = door;
    }

    open(password: string): void {
        if (this.authenticate(password)) {
            this.door.open('');
        } else {
            console.log("Big no! It ain't possible.");
        }
    }

    close(): void {
        this.door.close();
    }

    private authenticate(password: string) {
        return password === '$ecr@t';
    }
}
