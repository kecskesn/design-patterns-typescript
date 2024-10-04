// A sample document to be used in the Prototype example
import IProtoType from './iprototype';

export default class Document implements IProtoType {
  constructor(private name: string) {
    this.name = name;
  }

  public set documentName(name: string) {
    this.name = name;
  }

  clone(): Document {
    return new Document(this.name);
  }
}
