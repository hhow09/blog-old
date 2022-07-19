# Design React Custom Hook

## Intro

從 React 開始力推 Functional Component 和 Hook 的搭配寫法後，貫徹了 Functional Programming 的思想，我們的 code 可讀性更高了，以下條列 Hook 的一些優點。

- brings state(`useState`) and lifecycle(`useEffect`) features to functional component.
- separate functional logic from UI logic.
- composable with other hooks

除了原生的 hook（ex. useState，useEffect，useContext，useMemo，useCallback）之外，React 鼓勵我們寫 custom hook，**方便我們把原生的 Hook 結合商業邏輯再次封裝，以便複用**。

Custom hook 是一個很好的概念。 但是如何寫一個好的 Custom hook 呢？

## 1. Naming Rule

以`use`開頭，來被 React Linter 檢查使用方式。

> Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, **it’s just like a normal function**. Its name should always start with use so that you can tell at a glance that the [rules of Hooks](https://reactjs.org/docs/hooks-rules.html) apply to it.

## 2. Scenario

### UI hooks - 把邏輯和 UI 分開

- 保持 UI 組件 `stateless` / `controlled`
- 把原生 useState, useEffect 封裝在 custom hook 裡並提供更方便的 API。
- ex. useInput, usePagination

```javascript
export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const [focus, setFocus] = useState(false);

  return {
    value,
    focus,
    onChange: (e) => setValue(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
  };
};

//...
//in Input
const { value, setValue, focus } = useInput("textInitial");
return <input value={value} onChange={setValue(e.target.value)} />;
```

### Page hooks

- 用 Custom Hook 分離 function / state / effect / API 呼叫等流程或商業邏輯保持頁面整潔
- ex. useYourPageNAme ...

### Pure Function

也可以用 hook 封裝，但沒有必要。

### 3. Generalized

例如，如果要寫一個 Countdown 組件，寫了只能接收時間參數的 hook。
但 useInterval 可以讓 hook 更廣泛地被使用，只要傳入任何 callback 做一些事就好。

```javascript
//1. useTimer
const useTimer=(seconds)=>{
  ...
  return {leftSecond}
}
//2. useInterval wins
const useInterval = (callback, delay) => {
  ...
  return;
};

//usage
useEffect(
    useInterval(setCurrTime,1000),[]
);
```

### 4. 適當的使用 useCallback

如果 custom hook 會被多處、多次使用，那添加 useCallback，避免不必要的 Function 多次宣告。下方以[useHooks.com/useAsync](https://usehooks.com/useAsync/)為例。

```javascript
const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  //4.適當的使用 useCallback
  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setValue(response);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  //5. 小心陳舊的閉包(Stale Closure)

  return { execute, status, value, error };
};
```

### 5. 小心陳舊的閉包(Stale Closure)

同見上例，在 Custom Hooks 裡使用原生的 Hook 時一樣要小心 stale closure，`useEffect` 和 `useCallback` 的 dependency array 要正確的添加，才不會引用到過時的 state 或 function。

### 6. 不要重複造輪子

可以先參考別人寫好的 Hook Library

- [useHooks.com](https://useHooks.com)
- [react-use](https://github.com/streamich/react-use)

## Reference

-[How Are Function Components Different from Classes?](https://overreacted.io/how-are-function-components-different-from-classes/)

-[為什麼 Hook API 要有 dependencyArray：了解 hook Api 裡最要注意的 stale closure 的問題](https://www.morrisctech.com/content/2019/12/15/why_hooks_stale_closure/)
