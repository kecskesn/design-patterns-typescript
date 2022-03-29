import File from './file';
import Folder from './folder';

let fileSystem = new Folder('root');
let folderA = new Folder('folder_a');
let folderB = new Folder('folder_b');
let file1 = new File('abc.txt');
let file2 = new File('123.txt');
let file3 = new File('xyz.txt');
let file4 = new File('456.txt');
fileSystem.attach(file1);
fileSystem.attach(file2);
fileSystem.attach(folderA);
fileSystem.attach(folderB);
folderA.attach(file3);
folderB.attach(file4);
fileSystem.dir('');

console.log('=================');
folderB.attach(folderA);
fileSystem.dir('');
