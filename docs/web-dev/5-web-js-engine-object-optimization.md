# JS engine: Optimizing of Object

## TL;DR

- Javascript objects are `dictionaries` essentially, but engines use `Shape` internally to optimize it.
- Prototypes are just objects, but Javascript Engine treate them specially.
- Do not mess with Prototypes, it hurts performance because the.

## JavaScript’s object model

### How JavaScript defines objects.

![object-model](/img/web-dev/5-web-js-engine-object-optimization/object-model.png)

- The [ECMAScript specification](https://tc39.es/ecma262/#sec-property-attributes) essentially defines all objects as `dictionaries`, with string keys mapping to property attributes.
- `[[Writable]]`: whether the property can be reassigned to.
- `[[Enumerable]]`: whether the property shows up in for-in loops.
- `[[Configurable]]`:whether the property can be deleted.

- We can see these properties with

```javascript
const object = { foo: 42 };
Object.getOwnPropertyDescriptor(object, "foo");
// → { value: 42, writable: true, enumerable: true, configurable: true }
```

---

### How are these these property attributes actually stored in memory?

### Shape as Optimization

> If we assume that we’ll be seeing more objects with this shape later, then it’s wasteful to store the full dictionary containing the property names and attributes on the JSObject itself, as the property names are repeated for all objects with the same shape. That’s a lot of duplication and unnecessarily memory usage. As an optimization, engines store the Shape of the object separately.

> No matter how many objects there are, as long as they have the same shape, we only have to store the shape and property information once!

![Shape as Optimization](/img/web-dev/5-web-js-engine-object-optimization/shape-as-optimization.png)

- This Shape contains all the `property names` and the `attributes`, except for their `[[Value]]`s.
- Every JSObject with this same shape points to exactly this Shape instance.
- `Offset`: record the offset of the values inside of the JSObject so JavaScript engine knows where to find the values.

### Naming

- All JavaScript engines use shapes as an optimization, but they don’t all call them shapes.
- Academic papers: `Hidden Classes` (confusing w.r.t. JavaScript `classes`)
- V8: `Maps` (confusing w.r.t. JavaScript `Maps`)
- Chakra: `Types` (confusing w.r.t. JavaScript’s `dynamic types` and `typeof`)
- JavaScriptCore:`Structures`
- SpiderMonkey:`Shapes`

---

### What happens if you have an object with a certain shape, but then you add a property to it?

### Transition Chain

- The shapes form so-called transition chains in the JavaScript engine.

```javascript
const object = {};
object.x = 5;
object.y = 6;
```

![Transition Chain](/img/web-dev/5-web-js-engine-object-optimization/transition-chain.png)

- `Transition Chains` are link list, every Shape links back to its previous shape.
- Every time we add new properties in `Object`, JavaScript engine transitions to a new shape which `only needs to know about the new property it introduces`. In this case the Shape(x,y) point
- The order in which properties are added impacts the shape. For example, `{ x: 4, y: 5 }` results in a different shape than `{ y: 5, x: 4 }`

---

### Inline Caches (ICs)

- ICs: memorize information on where to find properties on objects, to reduce the number of expensive lookups.
- ICs are the key ingredient to making JavaScript run fast!

## Note

1. Initialize object props with sensible values.
2. always initialize objecs in the same way.
3. type checking is about developer productivity but not about engine performance

## Reference

- [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes)
- [JavaScript engine fundamentals: Shapes and Inline Caches](https://mathiasbynens.be/notes/shapes-ics)
- [Mathias B, Benedikt M - JS Engine fundamentals [AgentConf]](https://youtu.be/0I0d8LkDqyc)
- [The story of a V8 performance cliff in React](https://v8.dev/blog/react-cliff)
