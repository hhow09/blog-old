
# 3 Ways To Pass Values From Child to Parent
## Intro

雖然 React 鼓勵我們[提升 state](https://reactjs.org/docs/lifting-state-up.html) ，[將 UI 拆解為小組件](https://zh-hant.reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy)，並使用 props 從父組件到子組件傳遞數據。

延伸閱讀: [從 React Prop Drilling 來看 Design Pattern](https://hhow09.github.io/2020/11/04/Prop-Drilling-in-React/)

但在設計流程上，提升 state 其實是有點反設計直覺的，已經設計好的子組件會放到不同父組件內，但總不會一直花時間把它的 state 提升到 Parent，不合成本也會造成 code 的重複，也不會全部 UI state 都交給 redux 處理，總會遇到需要把 state 放在 children，需要再從 children 把更新的資料傳回 parent 的時候，也就是[加入反向的資料流](https://zh-hant.reactjs.org/docs/thinking-in-react.html#step-5-add-inverse-data-flow)，例如[這個例子](https://uros-randelovic.medium.com/how-to-update-the-state-and-pass-data-from-child-to-parent-in-react-hooks-56ca26626c31)。

簡單記錄幾個用過的方法。

### 1. Callback Function

這個方法每次 onChange 都會執行一次。
但要注意如果在 Parent 有執行 `setState` 的話，Child 也會每次 onChange 就被重新 render，如果考慮到效能的話可以考慮使用第 2 種方法。

```jsx
const Parent = () => {
  const [childState,setChildState]=useState(null)
  const getValue = (v) => {setChildState(v)};
  return <Child getValue={getValue} />;
};
const Child = ({ getValue }) => {
  const handleChange=(e)=>{
    someThingElse(e);
    getValue(e.target.value);
  }
  return(
  <input
    onChange={handleChange}
  />
)};
}
```

### 2. Pass Ref to Child

當我們只想要在某些情況(ex.提交表單)時取得 Child 的值，我們可以傳遞 ref 給 Child，需要使用時再從 ref 的 callback `ref.current` 取得最新的值。這樣不會像第 1 種方法造成 Child 重新 render。

```jsx
const Parent = () => {
  const childRef = useRef(null);
  return (
    <>
      <Child ref={childRef} type='input' />
      <button onClick={() => {
          alert(childRef.current.value);
        }}
      >
        Click Input
      </button>
      <Child ref={childRef} type='checkbox'/>
      <button onClick={() => {
          alert(childRef.current.checked);
        }}
      >
        Click checkbox
      </button>
      <Child ref={childRef} type='select'/>
      <button onClick={() => {
          alert(childRef.current);
        }}
      >
        Click checkbox
      </button>
      ...
    </>
  );
};
const Child = ({ ref,type}) => {
  switch (type){
    case 'input':
    return <input ref={ref} />

    case 'checkbox':
    return <checkbox ref={ref} />

    case 'select':
    return <select onChange={(v)=>{ref.current=v}} />
    ...
  }
}
```

### 3. 使用 useImperativeHandle 命令式(不常見)

React 官網介紹: [Reac.js useImperativeHandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)

> **useImperativeHandle** customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases. useImperativeHandle should be used with forwardRef

其實不確定 React 為什麼不建議使用。

這個方法的使用時機是，當 Parent 需要**控制 Child 內部的 function**，Child 可以把**想要對 Parent 暴露**的 funciton 放在 useImperativeHandle 中給 Parent 使用。常見用法例如使 Child `focus`、`blur`、`reset`等等。比較不常用在取得 value，不過要用也是可以用，因此也列出來。

[codeSandbox](https://codesandbox.io/s/useimperativehandle-5pko6)

```jsx
import React,{useImperativeHandle,forwardRef,useRef} from "react";

const Child = forwardRef((props, ref) => {
  const childRef = useRef(null);
  useImperativeHandle(ref, () => ({
    forceBlur: () => {
      inputRef.current.blur();
    },
    forceReset()=>{
      //...
    },
    getValue:()=>childRef.current.value
  }));

  return <input ref={childRef} />;
});

const Parent = () => {
  const childRef = useRef();

  return (
    <>
      <Child ref={childRef} />
      <button
        onClick={() => {
          childRef.current.forceBlur();
          alert(childRef.current.getValue());
        }}
      >
        Click
      </button>
    </>
  );
};

```
