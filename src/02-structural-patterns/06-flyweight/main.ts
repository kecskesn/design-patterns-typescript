import Tree from './tree';
import TreeFactory from './tree-factory';

let trees: Tree[] = [];

for (let index = 0; index < 1000; index++) {
  let type = TreeFactory.getTreeType(
    'browntree',
    'brown',
    'daw2d35w3dffa3fdf3',
  );
  trees.push(new Tree(Math.random(), Math.random(), type));
}

trees[0].drawTree();
console.log(`Created ${trees.length} trees`);
console.log(`TreeFactory has ${TreeFactory.getCount()} treeTypes`);
