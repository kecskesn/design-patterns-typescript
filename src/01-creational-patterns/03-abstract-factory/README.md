# Abstract Factory

Real world example

> Imagine there is an application that renders a ui, but this ui elements are a bit different on windows and mac. When the application launches it checks the type of the operating system. It uses this information to create a factory object. The rest of the code uses this factory to create the UI elements. This prevents the wrong elements from being created.

In plain words

> A factory of factories; a factory that groups the individual but related/dependent factories together without specifying their concrete classes.

Wikipedia says

> The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes

When to use?

When there are interrelated dependencies with not-that-simple creation logic involved