# Singleton

## Real world example

> There can only be one president of a country at a time. The same president has to be brought to action, whenever duty calls. President here is singleton.

## In plain words

> Ensures that only one object of a particular class is ever created.

## When to use??

Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program.

The Singleton pattern disables all other means of creating objects of a class except for the special creation method. This method either creates a new object or returns an existing one if it has already been created.