import TreeType from './tree-type';

export default class Tree {
  constructor(private x: number, private y: number, private type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  drawTree(): void {
    console.log(this);
  }
}
