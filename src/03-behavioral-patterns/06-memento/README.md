# Memento

## Real world example

> Imagine you are playing a video game and you are before a very hard boss battle. What are you doing? Saving the game! Memento design pattern is all about that.

## In plain words

> Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

## When to use?

Use the Memento pattern when you want to produce snapshots of the object’s state to be able to restore a previous state of the object.

> The Memento pattern lets you make full copies of an object’s state, including private fields, and store them separately from the object. While most people remember this pattern thanks to the “undo” use case, it’s also indispensable when dealing with transactions (i.e., if you need to roll back an operation on error).

Use the pattern when direct access to the object’s fields/getters/setters violates its encapsulation.

> The Memento makes the object itself responsible for creating a snapshot of its state. No other object can read the snapshot, making the original object’s state data safe and secure.
