# Redux and Flux

## Flux

- Video [Hacker Way: Rethinking Web App Development at Facebook](https://youtu.be/nYkdrAPrdcw)
- Flux is more an application architecture / design pattern than a framework.
- Redux is one kind of implementation of Flux.

### Flux Architecture

![Flux Architecture](/img/react/7-redux-flux/flux-architecture.png)

### Flux and Redux

![Flux v.s. Redux](/img/react/7-redux-flux/redux-vs-flux.png)

### Why Flux?
- MVC doesn't scale, it becomes unpredictable when scaling because:
    - data flow in MVC tend to be difficult to understand, to trace bug
- Flux use unidirectional data flow: `action` -> `store` -> `view` for more understandable mental model than MVC.
- Flux internalize the control into view: so that **state is very next to the logic of state update**, easier to maintain consistency.
- Flux structure helps separate **view state** from **data**

### Benefits of Flux
- Improve data consistency
- Easier to pinpoint a bug

### Stores
- Do: 
    - listen to action ( `bindListeners` in alt.js)
    - performs state update based on action payload (`reducer` in redux)
    - manage the state of many objects
    - broadcast an event declaring that their state has changed

### Controller-Views
- Do: 
    - listen to the changes from store and re-render
    - get the data from the stores
    - pass this data down the chain of its descendants


---

## Extension

### Store: Singleton Pattern

> Singleton Pattern is a design pattern that restricts the instantiation of a class to one object.

- There is only one state tree known as `Store` in Redux.
- Store is Single source of truth.

### Connect/Selector: Observer Pattern

> An object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes.

### applyMiddleware: Decorator Pattern / HOF

> designed to enhance functionality, but does not change the interface

## Reference
- [Flux](https://facebook.github.io/flux/)
- [An introduction to the Flux architectural pattern](https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/)
- [An Obsession with Design Patterns: Redux](https://engineering.zalando.com/posts/2016/08/design-patterns-redux.html?gh_src=4n3gxh1?gh_src=4n3gxh1)
- [Difference between redux and flux](https://enappd.com/blog/difference-between-redux-and-flux/106/)
