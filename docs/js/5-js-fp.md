# Functional Programming
## Concepts

### Side Effect

- 函數影響或修改到`其他作用域`的值，稱作 Side Effect
- pure function 沒有 Side Effect

### Referential transparency

- pure function 的必要條件，也就是所有pure function必須是 `referentially transparent` 的。
- 給定一個 function 和一個 input 值，始終會收到相同的 out。 也就是說**函數中沒有使用外部狀態**。

### Immutability

- 在 Javascript 中，objct 是通過 pass by reference 的，因此我們可以直接修改(mutate) Object。
- 在 Functional Programming 中每當我們處理一個 Obect 時，我們都會回傳 new Object 而不是修改/污染原 Object，即 Immutability。

### Declarative 宣告式 vs. Imperative 命令式

#### Imperative

- 通常用在 OOP
- 著重在 HOW，具體表達程式碼該做什麼才能達到目標，程式一步一步按著順序照著你給他指示執行。
- 比較常運用 Statement ，也就是 if , while , for , switch 等。

#### Declarative

- 通常用在 FP
- 著重在該做什麼 `WHAT` ，並採取抽象化流程。
- 比較常運用表達式 expression，表達式特色是單純運算並一定會有返回值。

### Point free function

通過刪除不必要的參數 mapping 來提供整潔性。

### Compose v.s. Pipe

- `compose(fn2, fn1) = fn2( fn1() )`: 從右到左
- `pipe(fn2, fn1) equals to fn1( fn2() )`: 從左到右

```javascript
const pipe = reverseArgs(compose);
```

---

## Functional Programming 的基本技巧

### Closure

- JavaScript 中的 Closure 是函式以及其語彙環境 (Lexical Environment) 的組合。
- Closure 是一個函式能夠存取自己被宣告時的環境中的變數。
- 如果不處理函數，則 Closure 不適用。一個 Object 不能有 Closure ，一個 Class 也不能有閉包。
- Closures 在 runtime 時 function 建立後才誕生。

### Curry

- Curry/Currying 是一種將帶有多個參數的 function 轉換為一系列**一元函數**的技術，每個一元函數都只有一個參數。
- Currying 和 `partial application`相關但不相同。

#### Example: Hard Coded Currying

```javascript
const add3Args = (a, b, c) => a + b + c;
const addCurried = (a) => (b) => (c) => a + b + c;

add(2, 3, 6); //11
addCurried(2)(3)(6); //11
```

### Composition

Curried function 非常適合 function 組合。
function 的組合：每個 function 都接收上一個 function 的返回值。

```
// in algrebra

 f . g . h = f(g(h(x)))
```

```javascript
//in Javascript
const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);
```

---

## Interview Problem: Implement Currying

```javascript
const add3Args = (a, b, c) => a + b + c; // args長度固定
const add = (...args) => args.reduce((result, arg) => result + arg); // args 長度不固定

const curry = (fn, arity = fn.length) =>
  (function nextCurried(prevArgs) {
    return (nextArg) => {
      const args = [...prevArgs, nextArg];

      if (args.length >= arity) {
        return fn(...args);
      } else {
        return nextCurried(args);
      }
    };
  })([]);

curry(add3Args)(1)(3)(7); // 11
curry(add, 3)(1)(3)(7); // 11
```

- `arity`: 預計傳入參數數量，如果長度不固定需要 specify。
- 初始 `[]` 做為 prevArgs，收集已傳入的參數。
- 接每一次傳入的實際參數 `nextArg` 與 `prevArgs` 合併成 `args`。
- 當 `args` 長度小於 `arity` 時，return nextCurried(prevArgs)，prevArgs 也就是下一輪的 `prevArgs`。
- 當 `args` 長度大於 `arity` 時，代表已收集到足夠的 args，就利用這些 args，呼叫原函數 fn。

- reference: [第 15 题：实现 add(1)(2)(3) #21](https://github.com/lgwebdream/FE-Interview/issues/21)


---

## Interview Problem: Sum of Arguments
### Problem

Create a sum function that will calculate the sum of arguments.
if there aren’t any arguments, return the result,
if there are any arguments, return a function that can be used for the next calculation.

**Example**

```
sum() // return 0;
sum(1)() // return 1;
sum(1, 1, 1)() // return 3;
sum(1)(1)(1)() // return 3;
sum(1)(1, 1, 1, 1)(1)() // return 6
sum(1) // return a function
sum(1)…….(1, 1, 1,…1) // return a function
```

### Solution 

```javascript
function sum(...args) {
  let sum = 0;
  sum += args.reduce((res, el) => res + el, 0);

  function f(...fArgs) {
    if (fArgs.length === 0) return sum;
    sum += fArgs.reduce((res, el) => res + el, 0);

    return (...newArgs) => f(...newArgs);
  }

  return (...newArgs) => f(...newArgs);
}
```
---

## Javascript Functional Libraries

1. [Lodash](https://lodash.com/)
2. [Underscore.js](https://underscorejs.org/)
3. [lazyJS](http://danieltao.com/lazy.js/)
4. [Ramda](https://ramdajs.com/)
