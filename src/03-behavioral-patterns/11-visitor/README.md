# Visitor

## Real world example

> Imagine a seasoned insurance agent who’s eager to get new customers. He can visit every building in a neighborhood, trying to sell insurance to everyone he meets. Depending on the type of organization that occupies the building, he can offer specialized insurance policies:

> - If it’s a residential building, he sells medical insurance.
> - If it’s a bank, he sells theft insurance.
> - If it’s a restaurant, he sells fire and flood insurance.

## In plain words

> Visitor pattern lets you add further operations to objects without having to modify them.

## When to use?

Use the Visitor when you need to perform an operation on all elements of a complex object structure (for example, an object tree).

> The Visitor pattern lets you execute an operation over a set of objects with different classes by having a visitor object implement several variants of the same operation, which correspond to all target classes.

Use the Visitor to clean up the business logic of auxiliary behaviors.

> The pattern lets you make the primary classes of your app more focused on their main jobs by extracting all other behaviors into a set of visitor classes.

Use the pattern when a behavior makes sense only in some classes of a class hierarchy, but not in others.

> You can extract this behavior into a separate visitor class and implement only those visiting methods that accept objects of relevant classes, leaving the rest empty.