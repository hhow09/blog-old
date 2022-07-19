# Performance Optimization of React

## Keeping component state local where necessary

## Memoization
Reduce unnecessary re-render of a component

### Why do they need to memo?

If **component is large** or **there is heavy computation in component**, re-render becomes expensive. We already know Reat

### What do they memo?
#### HOF
1. [memo](https://reactjs.org/docs/react-api.html#reactmemo): a (wrapped) Component 
2. [PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent): a class component

#### Hook
3. [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback): a function (in component)
4. [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo): a value (in component)
5. [useRef](https://reactjs.org/docs/hooks-reference.html#useref): a value (in component)

### When do they trigger re-render?

1. `memo`: only when `equality` function returns `true`
2. `PureComponent`: when previous `prop` does not equal to next `prop` with **shallow comparison**.
3. `useCallback`: only when dependency list change
4. `useMemo`: only when dependency list change
5. `useRef`: will not trigger re-render


### Ways to Memoize a constant / Object

1. declare outside component
   If the value is irrelevant to props, just declare outside component.
2. `useMemo`: `const memoizedValue = useMemo(objFromProps,[dependencies])`
3. `useRef`: `const memoizedValue = useRef(objFromProps)`
   p.s. `useMemo(initialValue,[])` works same as `useRef(initialValue)`

### Ways to Memoize a function

1. declare outside component
   If the function is irrelevant to props, just declare outside component.
2. `const memoizedFunction = useCallback(funcFromProps,[dependencies])`

### How to Prevent unnecessary re-render of a component

1. `useCallback` in parent to memoize `method props`.
2. `useMemo` to memoize `non-primitive-type value`.
3. Wrap component with `React.memo` and check the equality of props.
4. Use `PureComponent` for class component

### Declare function & constant outside vs inside component ?

- Outside component: will `not` be re-created on every render.
- Inside component: will be re-created on every render.

## Code-splitting in React using dynamic `import()`

```jsx
const Home = React.lazy(() => import("./components/Home"));

<React.Suspense fallback={<p>Loading page...</p>}>
  <Route path="/" exact>
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
</React.Suspense>
```

---

## How to Inspect performance ?

### [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/)


### [React Profiler](https://zh-hant.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)

- Install [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- Open Chrome Devtools -> [Profiler] Tab
- Settings -> General -> [v] Highlight updates when components render.

### [Profiler API](https://zh-hant.reactjs.org/docs/profiler.html)

```jsx
import React, { Profiler } from "react";
const CustomStockChart = (props) => {
  // ...

  return (
    <Profiler id="StockChart" onRender={logTimes}>
      <StockChart>{/* ... */}</StockChart>
    </Profiler>
  );
};

const logTimes = (id, phase, actualTime, baseTime, startTime, commitTime) => {
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual time: ${actualTime}`);
  console.log(`Base time: ${baseTime}`);
  console.log(`Start time: ${startTime}`);
  console.log(`Commit time: ${commitTime}`);
};

export default CustomStockChart;
```

### [Meaning of Profiling value](https://reactjs.org/docs/profiler.html#onrender-callback)

- id: string - The id prop of the Profiler tree that has just committed. This can be used to identify which part of the tree was committed if you are using multiple profilers.

- phase: "mount" | "update" - Identifies whether the tree has just been mounted for the first time or re-rendered due to a change in props, state, or hooks.

- actualDuration: number - Time spent rendering the Profiler and its descendants for the current update. This indicates how well the subtree makes use of memoization (e.g. React.memo, useMemo, shouldComponentUpdate). Ideally this value should decrease significantly after the initial mount as many of the descendants will only need to re-render if their specific props change.

- baseDuration: number - Duration of the most recent render time for each individual component within the Profiler tree. This value estimates a worst-case cost of rendering (e.g. the initial mount or a tree with no memoization).

## Reference

- [A Closer Look at React Memoize Hooks: useRef, useCallback, and useMemo](https://www.codebeast.dev/react-memoize-hooks-useRef-useCallback-useMemo/)
- [Introducing the React Profiler](https://zh-hant.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
- [使用 React Profiler 來觀察 React Web App 的渲染狀況並進行效能優化](https://medium.com/botbonnie/%E4%BD%BF%E7%94%A8-react-profiler-%E4%BE%86%E8%A7%80%E5%AF%9F-react-web-app-%E7%9A%84%E6%B8%B2%E6%9F%93%E7%8B%80%E6%B3%81%E4%B8%A6%E9%80%B2%E8%A1%8C%E6%95%88%E8%83%BD%E5%84%AA%E5%8C%96-bde15fe3d267)
- [Chrome: Performance features reference](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/)

