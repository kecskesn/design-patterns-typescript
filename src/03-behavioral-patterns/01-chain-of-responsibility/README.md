# Proxy

## Real world example

> For example, you have three payment methods (A, B and C) setup in your account; each having a different amount in it. A has 100 USD, B has 300 USD and C having 1000 USD and the preference for payments is chosen as A then B then C. You try to purchase something that is worth 210 USD. Using Chain of Responsibility, first of all account A will be checked if it can make the purchase, if yes purchase will be made and the chain will be broken. If not, request will move forward to account B checking for amount if yes chain will be broken otherwise the request will keep forwarding till it finds the suitable handler. Here A, B and C are links of the chain and the whole phenomenon is Chain of Responsibility.

## In plain words

> It helps building a chain of objects. Request enters from one end and keeps going from object to object till it finds the suitable handler.

## When to use?

Use the Chain of Responsibility pattern when your program is expected to process different kinds of requests in various ways, but the exact types of requests and their sequences are unknown beforehand.

> The pattern lets you link several handlers into one chain and, upon receiving a request, “ask” each handler whether it can process it. This way all handlers get a chance to process the request.

Use the pattern when it’s essential to execute several handlers in a particular order.

> Since you can link the handlers in the chain in any order, all requests will get through the chain exactly as you planned.

Use the CoR pattern when the set of handlers and their order are supposed to change at runtime.

> If you provide setters for a reference field inside the handler classes, you’ll be able to insert, remove or reorder handlers dynamically.