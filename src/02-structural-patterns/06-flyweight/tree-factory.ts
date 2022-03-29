import TreeType from './tree-type';

export default class TreeFactory {
  static treeTypes: { [name: string]: TreeType } = {};

  static getTreeType(name: string, color: string, texture: string): TreeType {
    if (!(name in TreeFactory.treeTypes)) {
      TreeFactory.treeTypes[name] = new TreeType(name, color, texture);
    }
    return TreeFactory.treeTypes[name];
  }

  static getCount(): number {
    return Object.keys(TreeFactory.treeTypes).length;
  }
}
