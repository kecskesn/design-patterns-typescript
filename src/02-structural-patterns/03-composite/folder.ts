import IComponent from './icomponent';

export default class Folder implements IComponent {
  name: string;
  referenceToParent?: Folder = undefined;
  components: IComponent[];

  constructor(name: string) {
    this.name = name;
    this.components = [];
  }

  dir(indent: string): void {
    console.log(`${indent}<DIR>  ${this.name}`);

    this.components.forEach(component => {
      component.dir(indent + '..');
    });
  }

  attach(component: IComponent): void {
    component.detach();
    component.referenceToParent = this;
    this.components.push(component);
  }

  detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
      this.referenceToParent = undefined;
    }
  }

  delete(component: IComponent): void {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }
}
