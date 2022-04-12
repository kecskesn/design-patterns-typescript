# Decorator

## Real world example

> Imagine you run a coffee shop. First you sold simple coffee, but later you added milk coffee, vanilla coffee, whip coffee to the drinks. These got extra ingridients and are more expensive because of that. But a customer walks in and wants a milk coffee with whip. You can create a lot of subclasses, and mix and match every possible scenario but the code will get pretty messy as you go. Other solution is to use the decator design pattern.

## In plain words

> Decorator pattern lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.

## When to use??

Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.

The Decorator lets you structure your business logic into layers, create a decorator for each layer and compose objects with various combinations of this logic at runtime. The client code can treat all these objects in the same way, since they all follow a common interface.

Use the pattern when it’s awkward or not possible to extend an object’s behavior using inheritance.
