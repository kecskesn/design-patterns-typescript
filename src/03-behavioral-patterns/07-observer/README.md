# Observer

## Real world example

> If you subscribe to a newspaper or magazine, you no longer need to go to the store to check if the next issue is available. Instead, the publisher sends new issues directly to your mailbox right after publication or even in advance.

> The publisher maintains a list of subscribers and knows which magazines they’re interested in. Subscribers can leave the list at any time when they wish to stop the publisher sending new magazine issues to them.

## In plain words

> Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

## When to use?

Use the Observer pattern when changes to the state of one object may require changing other objects, and the actual set of objects is unknown beforehand or changes dynamically.

## Ok, now im confused! Chain of Responsibility, Command, Mediator and Observer are all about sending and receiving requests. How can I tell them apart???

 * **Chain of Responsibility:** passes a request sequentially along a dynamic chain of potential receivers until one of them handles it.
 * **Command:** establishes unidirectional connections between senders and receivers.
 * **Mediator:** eliminates direct connections between senders and receivers, forcing them to communicate indirectly via a mediator object.
 * **Observer:** lets receivers dynamically subscribe to and unsubscribe from receiving requests.