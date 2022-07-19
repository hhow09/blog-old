# Props Drilling and State Management

## What is Prop Drilling?

- Many articles see prop drilling is a problem.
- But it is actually an design pattern.
- Remind that when we first learn React, we learned: [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
  > Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.
- This is one of the design patterns for state management

## Pros of Prop Drilling

- good for reusing UI
- no extra abundance
- easy for pros tracing

<!-- ![Prop Drilling](/img/react/react-prop-drilling.jpg) -->

---

## Why is Prop Drilling a Problem

Think about below scenario.

- `ComponentNeedingProps` is the component who really need `content`
- `ComponentNeedingProps` is deeply nested inside `FirstComponent`, `SecondComponent` and `ThirdComponent` while they three don't actually need `content`
- When there are more of these kind of prop, it brings difficulties on maintaining code.

```jsx
export default function App() {
  return (
    <div className="App">
      <FirstComponent content="Who needs me?" />
    </div>
  );
}

function FirstComponent({ content }) {
  return (
    <div>
      <h3>I am the first component</h3>;
      <SecondComponent content={content} />|
    </div>
  );
}

function SecondComponent({ content }) {
  return (
    <div>
      <h3>I am the second component</h3>;
      <ThirdComponent content={content} />
    </div>
  );
}

function ThirdComponent({ content }) {
  return (
    <div>
      <h3>I am the third component</h3>;
      <ComponentNeedingProps content={content} />
    </div>
  );
}

function ComponentNeedingProps({ content }) {
  return <h3>{content}</h3>;
}
```

## Solutions

### 1. Pass component in `props.children`

- `props.children` is an attribute returns by `React.createElement`​. It refers to child node.
- We can pass contents like `HTML tag`、`component` down to child component
- we just `hide the pros drilling inside children`.
- Reference: [Children in JSX](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

```jsx
function App() {
  const content = "Who needs me?";
  return (
  <div className="App">
    <FirstComponent>
      <SecondComponent>
        <ThirdComponent>
          <ComponentNeedingProps content={content}  />
        <ThirdComponent>
      </SecondComponent>
    </FirstComponent>
  </div>
  );
}
//rewrite

function FirstComponent({ content }) {
  return (
    <div>
      <h3>I am the first component</h3>;
      {children}
    </div>
  );
}
```

### 2. Context API

- Using `Context API` to Context.Consumer and render it with [render props](https://zh-hant.reactjs.org/docs/render-props.html)方式接收。
- Another design pattern: [Provider Pattern](https://mortenbarklund.com/blog/react-architecture-provider-pattern/)。

```jsx
export default function App() {
  return (
    <div className="App">
      <Context.Provider value={content}>
        <FirstComponent content="Who needs me?" />
      </Context.Provider>
    </div>
  );
}
function ComponentNeedingProps() {
  const content = Context.Consumer;
  return <Context.Consumer>{(content) => <h3>{content}</h3>}</Context.Consumer>;
}
```

### 3. State management tools ex.Redux, Mobx...

---

## Redux v.s. Context API

> Why don't we just replace Redux with native Context?

### Same

- both are for `state management`
- both to avoid `props drilling`

### [Redux](https://react-redux.js.org/)

- Redux construct an global 的 `store` to store all state.
- Redux is single data flow (FLUX)
- Redux update store with action(constant) and reducer (pure function)
- react-redux: every component inside Provider can use `connect` HOF or `useSelector` hook to subscribe to some part of the state.

#### Pros

- provide middleware-friendly API to `let you do something between action and reducer`, (ex. redux-thunk, redux-saga)
- good definition based on FLUX: `store`/`reducer`/`action`
- [useSelector](https://react-redux.js.org/api/hooks#useselector) hook to subscribe state change。

#### Cons

- more dependency
- more definition and naming (action,reducer)

### [React Context API](https://zh-hant.reactjs.org/docs/context.html)

#### hooks: createContext, useContext

#### Pros

- native in React, no extra dependency
- flexible
- can use multiple Provider state

#### Cons

- too little definition, may cause difference in codes.
- When a context value is changed, all components that useContext will re-render.

> When the nearest `MyContext.Provider` above the component updates, this Hook will trigger a re-render with the latest context value passed to that MyContext provider.
> Even if an ancestor uses React.memo or shouldComponentUpdate, a re-render will still happen starting at the component itself using useContext.

#### Update 2021: [use-context-selector](https://github.com/dai-shi/use-context-selector)

- is currently developing
- useContextSelector:
  - This hook returns context selected value by selector.
  - It will only accept context created by createContext. It will trigger re-render if only the selected value is referentially changed.

### Conclusion

- Redux is still an popular state management solution for large applications.
- if in smaller application or performance is not an issue, Context could be a good solution too.
- they can be used together

---

## reference

- [How To Avoid Prop Drilling in React Using Component Composition](https://medium.com/javascript-in-plain-english/how-to-avoid-prop-drilling-in-react-using-component-composition-c42adfcdde1b)
- [React 狀態管理模式](https://jasonlam-swatow.github.io/posts/react-state-patterns/)
