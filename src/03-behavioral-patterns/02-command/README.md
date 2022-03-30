# Proxy

## Real world example

> A generic example would be you ordering food at a restaurant. You (i.e. Client) ask the waiter (i.e. Invoker) to bring some food (i.e. Command) and waiter simply forwards the request to Chef (i.e. Receiver) who has the knowledge of what and how to cook. Another example would be you (i.e. Client) switching on (i.e. Command) the television (i.e. Receiver) using a remote control (Invoker).

## In plain words

> Allows you to encapsulate actions in objects. The key idea behind this pattern is to provide the means to decouple client from receiver.

## When to use?

Use the Chain of Responsibility pattern when your program is expected to process different kinds of requests in various ways, but the exact types of requests and their sequences are unknown beforehand.

> The pattern lets you link several handlers into one chain and, upon receiving a request, “ask” each handler whether it can process it. This way all handlers get a chance to process the request.

Use the pattern when it’s essential to execute several handlers in a particular order.

> Since you can link the handlers in the chain in any order, all requests will get through the chain exactly as you planned.

Use the CoR pattern when the set of handlers and their order are supposed to change at runtime.

> If you provide setters for a reference field inside the handler classes, you’ll be able to insert, remove or reorder handlers dynamically.