# Immutability

## Introduction

- Javascript reference data type `Object` has mutable characteristics. The benefit of mutability is memory-saving. However in frontend scenario, the disadvantage of side effect often outweigh the advantage.
- Without immutability, you might have to pass an object around between different scopes, and you do not know beforehand if and when the object will be changed. The code becomes unpredictable and is difficult to debug.
- Immutability in Javascript means we cannot update variable by reference. Whenever we want to update a variable, we create a new reference.

---

## Benefits of Immutability

- `Predictability`
  Mutation hides change, which create (unexpected) side effects, which can cause nasty bugs. When you enforce immutability you can keep your application architecture and mental model simple.

- `Mutation Tracking`
  Immutability allows you to optimize your application by making use of reference and value equality. This makes it really easy to see if anything has changed.

- `Boost performance (indirectly)`
  When facing mutable data structure, we want to know if object change by iterating through all properties. In contrast, facing immutable data structure, we only have to check equality of reference.

- Reduce the need of lock when `concurrent programming` (not completely)
  The core problem of multi thread programming is race condition. We need to ensure atomic characteristic inside critical operation by some methods such as lock.

## How immutability boosts React performance

### Background

- React maintains an internal representation of the UI, the so-called `virtual DOM`.
- When a property or the state of a component changes, this virtual DOM is updated to reflect those changes. Manipulating the virtual DOM is easier and faster because nothing is changed in the UI.
- Then, React compares the virtual DOM with a version before the update in order to know what changed. This is the reconciliation process.

### When we want to avoid unnecessary re-render

- React in default re-render components whenever `state` or `props` change.
- Sometimes knowing what changes could be very difficult when props is deep nested object.
- If the props are guaranteed the immutability characteristic, we can simply know `wether the props change` by performing simple equality check without dive into nested object and compare values respectively.

```javascript
class MyComponent extends Component {
  // ...
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }
    return false;
  }
  // ...
}
```

---

## How to implement immutability?

To clarify before we start, when talking about `create a new reference when updating a variable`, we do not refer to performs deep copy operation `JSON.parse(JSON.stringify(obj))` because it simply recreate all properties even of those not changed. This actually hurt performance.

### Persistent data structures

Persistent data structures enforces a constraint that all operations will return a newer version of that data structure and `keep the original structure intact`,e.g. reusing existing nodes as much as possible.

### Spread Operator (ES6) (without Library)

When perform state update in React, we often need to do operations such as `modify a properties in Object`, `append element to array`, and`insert array`. Thanks to [Spread Operator](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in Javascript ES6, we can only update the specific property and keep other references intact. Rect officially recommend this way to do state update, [The Power Of Not Mutating Data](https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data).

1. modify a properties in Object

```javascript
const [myData, setMyData] = useState({ myName: "Howard", myPhoneNum: "0912345678" });
setMyData((prevState) => {
  return { ...prevState, myName: "Cool Howard" };
});
// { myName: "Cool Howard", myPhoneNum: "0912345678" }
```

2. append element to array

```javascript
const [sentence, setSentence] = useState(["You", "are", "an", "awesome"]);
setSentence((prevState) => [...prevState, "programmer"]);
// ["You", "are", "an","awesome", "programmer"]
```

3. insert array

```javascript
const [sentence, setSentence] = useState(["You", "are", "awesome", "programmer"]);
setSentence((prevState) => [...prevState.slice(0, 2), "an", ...prevState.slice(2)]);
// ["You", "are", "an","awesome", "programmer"]
```

---

## [Immutable.js](https://immutable-js.github.io/immutable-js/) library

Nowadays, [Immutable.js](https://immutable-js.github.io/immutable-js/) is the most famous library.

- It implements fully persistent data structures including: `List`, `Stack`, `Map`, `OrderedMap`, `Set`, `OrderedSet` and `Record`.
- It provides mutative API to update data in an `efficient` and `immutable` way.

### Behind the scene

- [How Immutable Data Structures (E.g. Immutable.js) are Optimized](https://hackernoon.com/how-immutable-data-structures-e-g-immutable-js-are-optimized-using-structural-sharing-e4424a866d56)
- [Immutable.js, persistent data structures and structural sharing](https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2)

These articles illustrated how to implement object into immutable as well as persistent data structure using [Trie](https://en.wikipedia.org/wiki/Trie)

### When to use immutable library?

> Please don’t take this article to mean “you should always use Immutable.js.” No, I’m just trying to highlight its benefits in this article and explain why it’s recommended a lot.

There are still drawbacks using immutable library:

1. We will couple the most basic data structure with a library.
2. The size of package increase.
3. When frequently communicating with server, we will have to convert the data structure between library and native Javascript.

---

## Reference

- [Immutable Data Structures and JavaScript](https://archive.jlongster.com/Using-Immutable-Data-Structures-in-JavaScript)
- [Immutability in React: There’s nothing wrong with mutating objects](https://blog.logrocket.com/immutability-in-react-ebe55253a1cc/)
- [Immutable.js](https://immutable-js.github.io/immutable-js/)
- [Immutable 详解及 React 中实践 #3](https://github.com/camsong/blog/issues/3)
- [Immutable.js, persistent data structures and structural sharing](https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2)
- [Persistent Data Structure](https://fuzhe1989.github.io/2017/11/07/persistent-data-structure/)
