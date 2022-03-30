# Composite

## Real world example

> Imagine the file system in a computer: there are leafs (files) and composites (folder). Both behave similarly (you can rename, delete, move, etc.). A folder can contain other folders, but files can't have child in the hierarchy.

## In plain words

> Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects. 

## When to use??

Use the Composite pattern when you have to implement a tree-like object structure.

The Composite pattern provides you with two basic element types that share a common interface: simple leaves and complex containers. A container can be composed of both leaves and other containers. This lets you construct a nested recursive object structure that resembles a tree.

Use the pattern when you want the client code to treat both simple and complex elements uniformly.

All elements defined by the Composite pattern share a common interface. Using this interface, the client doesn’t have to worry about the concrete class of the objects it works with.
