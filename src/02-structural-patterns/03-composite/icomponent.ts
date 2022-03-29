import Folder from './folder';

export default interface IComponent {
  name: string;
  referenceToParent?: Folder;

  dir(indent: string): void;
  detach(): void;
}
