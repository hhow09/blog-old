# Closure

## Intro

網路上許多閉包的教學都沒有直接明確的定義，只知道 use case 和長什麼樣子。直到看到這篇[[教學] JavaScript Closure (閉包)、函式與語彙環境](https://shubo.io/javascript-closure/)，搭配[You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)一起讀才豁然開朗。

## Definition

[MDN/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)的定義

> A closure is the combination of a function and the Lexical Environment within which that function was declared.

- JavaScript 中的 Closure 是函式以及其語彙環境 (Lexical Environment) 的組合。
- Closure 是一個函式能夠存取自己被宣告時的環境中的變數。
- 如果不處理函數，則 Closure 不適用。一個 Object 不能有 Closure ，一個 Clas 也不能有閉包。

Lexical Environment

- 詞法作用域是一套關於引擎如何尋找變量以及會在何處找到變量的規則。
- 詞法作用域最重要的特徵是它的定義過程發生在代碼的書寫階段。

## Example

```javascript
function makeFunc() {
  // 1
  let name = "John"; // 2
  function displayName() {
    // 3
    console.log(name);
  }
  return displayName; // 4
}

let func1 = makeFunc(); // 5
func1();
```

## 特性

### 閉包 + 函式可被回傳

- 結果: 函式可以在作用域以外之處執行

### 閉包 + 函式可被回傳 + Lexical Environment

- 原因: 在 JavaScript 中，即使在外層區塊(makeFunc)已經回傳的狀況下，**由於內部作用域(displayName)依然存在**，只要內層區塊還保留著一份參考，那麽外層區塊的環境**不會隨著回傳而被垃圾回收機制回收**，我們依然可以存取外層環境中的變數(//5)。
- 結果: 閉包 (closure) 可以「保留」函數宣告的環境。

### 一定要`return`?

即使 displayName 只有被執行沒有 return，也可以稱作閉包。但如果不 return，就無法**使用**這個閉包。return 目的只是要讓作用域外別的函式可以訪問到這個 displayName 函式，因此 return 與否，與是否是閉包無關。

## Reference

- [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
- [MDN/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [[教學] JavaScript Closure (閉包)、函式與語彙環境](https://shubo.io/javascript-closure/)
- [所有的函式都是閉包：談 JS 中的作用域與 Closure](https://blog.techbridge.cc/2018/12/08/javascript-closure/)
- [Day6 [JavaScript 基礎] 垃圾回收機制](https://ithelp.ithome.com.tw/articles/10214185)
