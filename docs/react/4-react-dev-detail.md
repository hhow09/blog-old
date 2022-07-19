# React Dev Notes

### 1. `reducer` of `useReducer` and `updater function` of setState will be called twice in strict mode.

-   reference: [React.StrictMode causes setState to fire twice #12856](https://github.com/facebook/react/issues/12856)
-   should not perform side effect inside updater function

### 2. previous state of `useReducer` reducer and updater function of setState IS PASS BY REFERENCE.

-   Don't directly modify previous state
-   Deep copy previous state if you want to yous.

### 3. reducer should remain constant reference

-   Not working example

```jsx
const reducer = (state,action)=>{...}
const getReducer = (someProps) => reducer;
const [state, dispatch] = (getReducer(props), initialState);
```

-   props should by pass into reducer with `action`

### 4. return a function in useCallback

-   Purpose: Try to memoize the callback function `getOnClick` for `Child`.
-   Assume We need information of `index` to get the real onClick callback.

#### Not working example

-   only `(idx)=>{...}` is memoized, but not `(e)=>{...}` .
-   `Child` is still getting newly created `(e)=>{...}` on every render.

```jsx
const getOnClick = useCallback((idx)=>(e)=>{...},[...]);
const List = list.map((el,idx)=><Child onClick={getOnClick(idx)}/>);
```

#### Working example:

-   we can generate pass `idx` to `Child`, than `(e)=>{...}` is actually generated inside Child.
-   `getOnClick` of `Child` is memoized by useCallback.

```jsx
const getOnClick = useCallback((idx)=>(e)=>{...},[...]);
const List = list.map((el,idx)=><Child getOnClick={getOnClick)} idx={idx}/>);
const Child = ({getOnClick, idx})=>{<div onClick={getOnclick(idx)}>...</div>}
```

### 5. [React.cloneElement](https://reactjs.org/docs/react-api.html#cloneelement) to pass some props to `props.children`

-   The resulting element will have the original element’s props with the new props merged in shallowly.
-   original `key` and `ref` will be preserved

```jsx
const Wrapper = ({ children }) => {
    const wrappedChildren = React.cloneElement(children, { ...newProps });
    return <>{wrappedChildren}</>;
};
```
