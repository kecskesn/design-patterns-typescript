import { WordsCollection } from "./aggregator";

let collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

let iterator = collection.getIterator();

console.log('===Key of current element and the current element===');
console.log(iterator.key());
console.log(iterator.current());
console.log();

console.log('===Straight traversal===');
while (iterator.hasNext()) {
    console.log(iterator.next());
}
console.log();

console.log('===Use the iterator again===');
while (iterator.hasNext()) {
    console.log(iterator.next());
}
console.log();

console.log('===Use the iterator again after a rewind===');
iterator.rewind();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
console.log();

console.log('===Key of current element and the current element===');
console.log(iterator.key());
console.log(iterator.current());
console.log();

console.log('===Reverse traversal===');
let reverseIterator = collection.getReverseIterator();
while (reverseIterator.hasNext()) {
    console.log(reverseIterator.next());
}
console.log();