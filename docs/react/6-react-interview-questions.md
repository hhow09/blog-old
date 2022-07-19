# React Interview Questions

## Basic
### 1. What is the difference between writing React vs pure javascript
We can definitely output some elements with javascript then append them to the DOM element. However, when talking to `update` and `re-render`, manipulating DOM is an expensive operation. React maintain a `virtual DOM` and do batch update to `real DOM` after calculating diff in Virtual DOM.

### 2. explain Class component vs Functional Component

- Class component is `stateful`, Functional Component is  `stateless` (natively)
- `Debug` with Functional Component is easier.
- Functional Component has more concise code.
- Functional Component is more suitable for reusing UI.
- Class component has more live cycle
- Memoize Class component with `React.PureComponent`
- Memoize Functional Component via the `memo` HOC

### 3. Explain when will Component re-render?
- when the `reference` of props changed
- if props is a nested object and only **inner part** change, component will not rerender.


### 4. `useMemo` v.s. `useCallback` ?
check [Performance Optimization of React](./react/8-react-performance-optimization.md)

## State Management / Redux

### 4. React.Context v.s. Redux, why don't just use Context
- Mainly is because of **performance** concern.
- Redux has its own `bailout reconciliation mechanism` to skip the re-rendering of a component.

#### Context
- Context doesn't allow us to [use selectors](https://react-redux.js.org/api/hooks#useselector) and bailout of rendering. 
- This makes it hard to reduce unnecessary renders and forces you to bend the architecture and reshape the providers all the time.
- When updating Context, React will recreate new context with `Object.assign()`, which will never bailout.
- Every `Consumer` or component that `useContext` **will be update since the Context is always a new Object**.
- The reason why React does not do reference check of a Context value is, React `cannot` ensure that developer **is using immutable way to update Context**.

## Memoization
check [Performance Optimization of React](./react/8-react-performance-optimization.md)

#### Reference
- [RFC: Context selectors #119](https://github.com/reactjs/rfcs/pull/119)
- [深入 React Reconciliation Bailout 機制](https://blog.wuct.me/react-internal-reconciliation-bailout-587695eb05a8)