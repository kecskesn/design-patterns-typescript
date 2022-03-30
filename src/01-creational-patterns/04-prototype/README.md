# Prototype

## Real world example

> Well, not really a real world example, because this design pattern is not meant to solve one, instead it meant to solve a problem that comes up in programming. Instead let's take a look at the problem we are trying to solve, and see the solution.

Problem

> Say you have an object, and you want to create an exact copy of it. How would you do it? First, you have to create a new object of the same class. Then you have to go through all the fields of the original object and copy their values over to the new object.

> Nice! But there’s a catch. Not all objects can be copied that way because some of the object’s fields may be private and not visible from outside of the object itself.

> There’s one more problem with the direct approach. Since you have to know the object’s class to create a duplicate, your code becomes dependent on that class. If the extra dependency doesn’t scare you, there’s another catch. Sometimes you only know the interface that the object follows, but not its concrete class, when, for example, a parameter in a method accepts any objects that follow some interface.

Solution

> The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. 

## In plain words

> Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

## When to use??

When an object is required that is similar to existing object or when the creation would be expensive as compared to cloning.

This happens a lot when your code works with objects passed to you from 3rd-party code via some interface. The concrete classes of these objects are unknown, and you couldn’t depend on them even if you wanted to.

The Prototype pattern provides the client code with a general interface for working with all objects that support cloning. This interface makes the client code independent from the concrete classes of objects that it clones.