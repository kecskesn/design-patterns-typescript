# Builder

Real world example

> Let’s think about how to create a House object. To build a simple house, you need to construct four walls and a floor, install a door, fit a pair of windows, and build a roof. But what if you want a bigger, brighter house, with a backyard and other goodies (like a heating system, plumbing, and electrical wiring)? Maybe you want an iglo, which has no windows, no electrical wiring, no swimming pool in the backyard.

> One is to extend the base House class and create a set of subclasses to cover all combinations of the parameters. But eventually you’ll end up with a considerable number of subclasses. Any new parameter, such as the garden style, will require growing this hierarchy even more.

> There’s another approach that doesn’t involve breeding subclasses. You can create a giant constructor right in the base House class with all possible parameters that control the house object. While this approach indeed eliminates the need for subclasses, it creates another problem.

> In most cases most of the parameters will be unused, making the constructor calls pretty ugly. For instance, only a fraction of houses have swimming pools, so the parameters related to swimming pools will be useless nine times out of ten.

In plain words

> Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.

Wikipedia says

> The builder pattern is an object creation software design pattern with the intentions of finding a solution to the telescoping constructor anti-pattern.

Let's see an anti-pattern first. At one point or the other we have all seen a constructor like below:

```typescript
constructor(doors, windows, wallMaterial, buildingType, hasSwimmingPool, HasGarage, HasGarden, ...)
{
}
constructor(doors, wallMaterial, buildingType, hasSwimmingPool, HasGarage, HasGarden, ...)
{
}
constructor(doors, windows, wallMaterial, buildingType, ...)
{
}
```

When to use?

When there could be several flavors of an object and to avoid the constructor telescoping. The key difference from the factory pattern is that; factory pattern is to be used when the creation is a one step process while builder pattern is to be used when the creation is a multi step process.