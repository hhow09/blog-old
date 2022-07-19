# Compound Component

## Intro

真實工作上遇到的問題，父組件是一個 `Filter` ，內部子組件依不同情況會有不同數量的 Input / Select / Radio / CheckBox，並且父組件要能控制子組件的內容(ex.重設等等)，原本的同事是利用 props 傳入 array 去決定 render 什麼內容，但這種方法一來在閱讀上有困難，二來會造成 props 這條路徑同時乘載 UI 內容和資料內容，這樣其實數量多起來閱讀會很混亂，開始思考要如何設計更好。

## What is Compound Component?

> Compound components is a pattern where components are used together such that they share an implicit state that lets them communicate with each other in the background. A compound component is composed of a subset of child components that all work in tandem to produce some functionality.

Compound component 的目的是提供一個更具表現力和靈活的 API，提供了一種表達組件之間關係的好方法。
白話一點來說，也是運用到`props.children`，父組件只要預設好子組件有哪些(甚至不用)，父組件不需要明確的表達子組件的內容。而是使用時，依不同情境去引入 chidren 的內容即可。

實際上有名的 [Material UI](https://material-ui.com/guides/composition/)和 [Semantic UI](https://react.semantic-ui.com/modules/modal/#types-modal)也都採用了這種 UI 設計方法。

這個教學[React Hooks: Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks)介紹了基本的 Compound Component 設計。

```jsx
<Toggle onToggle={(on) => console.log(on)}>
  <Toggle.On>The button is on</Toggle.On>
  <Toggle.Off>The button is off</Toggle.Off>
  <Toggle.Button />
</Toggle>
```

## Compound Component 實作: PopupFilter

現在我們要建立一個 PopupFilter 有以下需求。

- 我們可以在不同情況下增減子組件。
- 每個子組件都有自己的狀態。
- 要能夠取得/管理子組件的狀態（defaultValue, reset, submit)。

檔案結構：

```
|── PopupFilter
    ├── index.js
    ├── components
        ├── Header
        └── Footer
        └── DateRange
        └── Select
        └── Checkboxes
        └── index.js
```

```jsx
// PopupFilter/index.js
import React from 'react';
import { Popper, Grow } from '@material-ui/core';
import { ClickAwayListener } from '@material-ui/core';
import {Header,Select,DateRange,Checkboxes,Footer} from './components';

const PopupFilter = ({ open, anchorEl, children, onClose }) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      transition
    >
    <div>{children}</div>
    </Popper>
  );
};

PopupFilter.Header = Header;
PopupFilter.Footer = Footer;
PopupFilter.Select = Select;
PopupFilter.DateRange = DateRange;
PopupFilter.Checkboxes = Checkboxes;

export default PopupFilter;

//Page.js
const Page=()=>{
  const [open,setOpen]=React.useState(false);
  const handleClose=()=>setOpen(false);
  return(
<PopupFilter open={open} onClose={handleClose}>
    <PopupFilter.Header />
    <PopupFilter.Checkboxes label={'CheckBox'} options={...} />
    // ...
    <PopupFilter.Select label={'Select1'} options={...} />
    <PopupFilter.Select label={'Select2'} options={...} />
    <PopupFilter.DateRange label={'DateRange'} />
    <PopupFilter.Footer />
    <OtherChildren/>
</PopupFilter>)
}
```

好了，看起來其實很簡單，也是使用到 children，讓不同使用情境自行增減，但目前都還沒有考慮到狀態管理的問題。

## 狀態管理 State Management

現在，子組件並未受到父組件控制。 我們要如何管理子組件的 state（ex. defaultValue，handleChange，handleReset，getResult ...）？因為這種做法父組件不會**提前**知道子組件有什麼內容，所以也無法**預設**有多少個子組件的 state 要管理。其實是比父組件更上層的頁面組件才會知道當下子組件有多少個。

### 1. 把 state 都放在頁面組件裡

這是最直覺的，lift state up，但是當組件增加時頁面就會變得混亂。結果將會出現一堆狀態和 handleChange。

#### 2. Custom hook

將 state / update/ reset 的邏輯放在 hook 裡，我們將其稱為 usePopupFilter。
那回到剛剛的問題，要如何**動態的**幫子組件建立 state 呢？我們可以讓 usePopupFilter return 一個 `register` 的方法 ，每個需要控制狀態的子組件提供不重複的 key，使用 register 來**註冊**自己在 state 中的位置。
在頁面中，我們只是**使用 custom hook 取得結果的最新狀態**，保持頁面的簡潔和可讀性，既優雅又簡潔。

```jsx
//usePopupFilter.js
import { useState, useEffect, useCallback } from "react";
import { useImmer } from "use-immer";

const usePopupFilter = ({ defaultValue }) => {
  const [state, setState] = useState({ data: { ...defaultValue } });
  const { data } = state;

  //提供子組件「註冊」一個state Object的key欄位，並回傳子組件需要的prop
  const register = useCallback(
    (key) => ({
      value: data[key],
      defaultValue: defaultValue[key],
      onChange: (value) => setState((state) => (state.data[key] = value)),
    }),
    [data]
  );

  //提供onSubmit傳入並讀取data
  const handleSubmit = useCallback(
    (onSubmit) => () => {
      onSubmit(data);
    },
    [data]
  );

  const reset = useCallback(() => {
    setState((state) => (state.data = defaultValue));
  }, []);

  return { state, register, handleSubmit, reset };
};

export default usePopupFilter;
```

### 實際使用

```jsx
import React, { useState, useEffect } from 'react';
import PopupFilter from './PopupFilter';
import usePopupFilter from 'Hooks/usePopupFilter';

export const PopupFilterDemo = () => {
  const [open, setOpen] = useState(false);

  const { state, register, handleSubmit, reset } = usePopupFilter({
    defaultValue: {
      checkbox: [options1[1]],
    },
    ...
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => setOpen(false);

  const onFilter = data => {
    handleClose();
    handleSubmit_();
  };
  const handleSubmit_=()=>{
    ...
  }
  return (
    <div >
        <button onClick={handleOpen}>OpenFilter</button>
        <PopupFilter open={open} onClose={handleClose}>
          <PopupFilter.Header onClick={reset} />
          <PopupFilter.Checkboxes
            label={'CheckBox'}
            options={options1}
            {...register('checkbox')}
          />
          <PopupFilter.Select
            label={'Select'}
            options={options2}
            {...register('select')}
          />
          <PopupFilter.Select
            label={'Select2'}
            options={options2}
            {...register('select2')}
          />
          <PopupFilter.DateRange label={'DateRange'} {...register('DateRange')} />
          <PopupFilter.Footer onClick={handleSubmit(onFilter)} />
        </PopupFilter>
    </div>
  );
};
const options1 = [
  { value: '1', label: 'option1' },
  { value: '2', label: 'option2' },
  { value: '3', label: 'option3' },
];

const options2 = [
  { value: '1', label: 'select1' },
  { value: '2', label: 'select2' },
  { value: '3', label: 'select3' },
];
```

## Reference

- [React Hooks: Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks)
- [Master the Compound Component Pattern](https://medium.com/better-programming/mastering-the-compound-component-pattern-cd0e56937fc3)
- [React.js Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)
