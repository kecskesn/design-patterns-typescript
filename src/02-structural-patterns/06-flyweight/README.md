# Flyweight

## Real world example

> You are creating a video game where at one point you render 1000 trees on a field. During rendering it crashes your computer because you are out of RAM. The main problem is how you created the tree system. Each tree was represented by a separate object containing plenty of data. On closer inspeciton you realize that the trees contain a lot of identical data, like the type of tree, which can be a seperate object, and shouldn't be initiated 1000 times. Applying the flyweight design pattern comes into play and solves this issue.

## In plain words

> It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.

## When to use?

Use the Flyweight pattern only when your program must support a huge number of objects which barely fit into available RAM.

The benefit of applying the pattern depends heavily on how and where it’s used. It’s most useful when:

 * an application needs to spawn a huge number of similar objects
 * this drains all available RAM on a target device
 * the objects contain duplicate states which can be extracted and shared between multiple objects
