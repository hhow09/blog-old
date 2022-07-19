(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[6705],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8431:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),c=["components"],l={},i={unversionedId:"react/react-parent-child-pass-value",id:"react/react-parent-child-pass-value",isDocsHomePage:!1,title:"3 Ways To Pass Values From Child to Parent",description:"Intro",source:"@site/docs/react/3-react-parent-child-pass-value.md",sourceDirName:"react",slug:"/react/react-parent-child-pass-value",permalink:"/react/react-parent-child-pass-value",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/react/3-react-parent-child-pass-value.md",version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compound Component",permalink:"/react/react-compund-component"},next:{title:"React Dev Notes",permalink:"/react/react-dev-detail"}},u=[{value:"Intro",id:"intro",children:[{value:"1. Callback Function",id:"1-callback-function",children:[]},{value:"2. Pass Ref to Child",id:"2-pass-ref-to-child",children:[]},{value:"3. \u4f7f\u7528 useImperativeHandle \u547d\u4ee4\u5f0f(\u4e0d\u5e38\u898b)",id:"3-\u4f7f\u7528-useimperativehandle-\u547d\u4ee4\u5f0f\u4e0d\u5e38\u898b",children:[]}]}],s={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"\u96d6\u7136 React \u9f13\u52f5\u6211\u5011",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/lifting-state-up.html"},"\u63d0\u5347 state")," \uff0c",(0,o.kt)("a",{parentName:"p",href:"https://zh-hant.reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy"},"\u5c07 UI \u62c6\u89e3\u70ba\u5c0f\u7d44\u4ef6"),"\uff0c\u4e26\u4f7f\u7528 props \u5f9e\u7236\u7d44\u4ef6\u5230\u5b50\u7d44\u4ef6\u50b3\u905e\u6578\u64da\u3002"),(0,o.kt)("p",null,"\u5ef6\u4f38\u95b1\u8b80: ",(0,o.kt)("a",{parentName:"p",href:"https://hhow09.github.io/2020/11/04/Prop-Drilling-in-React/"},"\u5f9e React Prop Drilling \u4f86\u770b Design Pattern")),(0,o.kt)("p",null,"\u4f46\u5728\u8a2d\u8a08\u6d41\u7a0b\u4e0a\uff0c\u63d0\u5347 state \u5176\u5be6\u662f\u6709\u9ede\u53cd\u8a2d\u8a08\u76f4\u89ba\u7684\uff0c\u5df2\u7d93\u8a2d\u8a08\u597d\u7684\u5b50\u7d44\u4ef6\u6703\u653e\u5230\u4e0d\u540c\u7236\u7d44\u4ef6\u5167\uff0c\u4f46\u7e3d\u4e0d\u6703\u4e00\u76f4\u82b1\u6642\u9593\u628a\u5b83\u7684 state \u63d0\u5347\u5230 Parent\uff0c\u4e0d\u5408\u6210\u672c\u4e5f\u6703\u9020\u6210 code \u7684\u91cd\u8907\uff0c\u4e5f\u4e0d\u6703\u5168\u90e8 UI state \u90fd\u4ea4\u7d66 redux \u8655\u7406\uff0c\u7e3d\u6703\u9047\u5230\u9700\u8981\u628a state \u653e\u5728 children\uff0c\u9700\u8981\u518d\u5f9e children \u628a\u66f4\u65b0\u7684\u8cc7\u6599\u50b3\u56de parent \u7684\u6642\u5019\uff0c\u4e5f\u5c31\u662f",(0,o.kt)("a",{parentName:"p",href:"https://zh-hant.reactjs.org/docs/thinking-in-react.html#step-5-add-inverse-data-flow"},"\u52a0\u5165\u53cd\u5411\u7684\u8cc7\u6599\u6d41"),"\uff0c\u4f8b\u5982",(0,o.kt)("a",{parentName:"p",href:"https://uros-randelovic.medium.com/how-to-update-the-state-and-pass-data-from-child-to-parent-in-react-hooks-56ca26626c31"},"\u9019\u500b\u4f8b\u5b50"),"\u3002"),(0,o.kt)("p",null,"\u7c21\u55ae\u8a18\u9304\u5e7e\u500b\u7528\u904e\u7684\u65b9\u6cd5\u3002"),(0,o.kt)("h3",{id:"1-callback-function"},"1. Callback Function"),(0,o.kt)("p",null,"\u9019\u500b\u65b9\u6cd5\u6bcf\u6b21 onChange \u90fd\u6703\u57f7\u884c\u4e00\u6b21\u3002\n\u4f46\u8981\u6ce8\u610f\u5982\u679c\u5728 Parent \u6709\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"setState")," \u7684\u8a71\uff0cChild \u4e5f\u6703\u6bcf\u6b21 onChange \u5c31\u88ab\u91cd\u65b0 render\uff0c\u5982\u679c\u8003\u616e\u5230\u6548\u80fd\u7684\u8a71\u53ef\u4ee5\u8003\u616e\u4f7f\u7528\u7b2c 2 \u7a2e\u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const Parent = () => {\n  const [childState,setChildState]=useState(null)\n  const getValue = (v) => {setChildState(v)};\n  return <Child getValue={getValue} />;\n};\nconst Child = ({ getValue }) => {\n  const handleChange=(e)=>{\n    someThingElse(e);\n    getValue(e.target.value);\n  }\n  return(\n  <input\n    onChange={handleChange}\n  />\n)};\n}\n")),(0,o.kt)("h3",{id:"2-pass-ref-to-child"},"2. Pass Ref to Child"),(0,o.kt)("p",null,"\u7576\u6211\u5011\u53ea\u60f3\u8981\u5728\u67d0\u4e9b\u60c5\u6cc1(ex.\u63d0\u4ea4\u8868\u55ae)\u6642\u53d6\u5f97 Child \u7684\u503c\uff0c\u6211\u5011\u53ef\u4ee5\u50b3\u905e ref \u7d66 Child\uff0c\u9700\u8981\u4f7f\u7528\u6642\u518d\u5f9e ref \u7684 callback ",(0,o.kt)("inlineCode",{parentName:"p"},"ref.current")," \u53d6\u5f97\u6700\u65b0\u7684\u503c\u3002\u9019\u6a23\u4e0d\u6703\u50cf\u7b2c 1 \u7a2e\u65b9\u6cd5\u9020\u6210 Child \u91cd\u65b0 render\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const Parent = () => {\n  const childRef = useRef(null);\n  return (\n    <>\n      <Child ref={childRef} type='input' />\n      <button onClick={() => {\n          alert(childRef.current.value);\n        }}\n      >\n        Click Input\n      </button>\n      <Child ref={childRef} type='checkbox'/>\n      <button onClick={() => {\n          alert(childRef.current.checked);\n        }}\n      >\n        Click checkbox\n      </button>\n      <Child ref={childRef} type='select'/>\n      <button onClick={() => {\n          alert(childRef.current);\n        }}\n      >\n        Click checkbox\n      </button>\n      ...\n    </>\n  );\n};\nconst Child = ({ ref,type}) => {\n  switch (type){\n    case 'input':\n    return <input ref={ref} />\n\n    case 'checkbox':\n    return <checkbox ref={ref} />\n\n    case 'select':\n    return <select onChange={(v)=>{ref.current=v}} />\n    ...\n  }\n}\n")),(0,o.kt)("h3",{id:"3-\u4f7f\u7528-useimperativehandle-\u547d\u4ee4\u5f0f\u4e0d\u5e38\u898b"},"3. \u4f7f\u7528 useImperativeHandle \u547d\u4ee4\u5f0f(\u4e0d\u5e38\u898b)"),(0,o.kt)("p",null,"React \u5b98\u7db2\u4ecb\u7d39: ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#useimperativehandle"},"Reac.js useImperativeHandle")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"useImperativeHandle")," customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases. useImperativeHandle should be used with forwardRef")),(0,o.kt)("p",null,"\u5176\u5be6\u4e0d\u78ba\u5b9a React \u70ba\u4ec0\u9ebc\u4e0d\u5efa\u8b70\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u9019\u500b\u65b9\u6cd5\u7684\u4f7f\u7528\u6642\u6a5f\u662f\uff0c\u7576 Parent \u9700\u8981",(0,o.kt)("strong",{parentName:"p"},"\u63a7\u5236 Child \u5167\u90e8\u7684 function"),"\uff0cChild \u53ef\u4ee5\u628a",(0,o.kt)("strong",{parentName:"p"},"\u60f3\u8981\u5c0d Parent \u66b4\u9732"),"\u7684 funciton \u653e\u5728 useImperativeHandle \u4e2d\u7d66 Parent \u4f7f\u7528\u3002\u5e38\u898b\u7528\u6cd5\u4f8b\u5982\u4f7f Child ",(0,o.kt)("inlineCode",{parentName:"p"},"focus"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"blur"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"reset"),"\u7b49\u7b49\u3002\u6bd4\u8f03\u4e0d\u5e38\u7528\u5728\u53d6\u5f97 value\uff0c\u4e0d\u904e\u8981\u7528\u4e5f\u662f\u53ef\u4ee5\u7528\uff0c\u56e0\u6b64\u4e5f\u5217\u51fa\u4f86\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/useimperativehandle-5pko6"},"codeSandbox")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React,{useImperativeHandle,forwardRef,useRef} from "react";\n\nconst Child = forwardRef((props, ref) => {\n  const childRef = useRef(null);\n  useImperativeHandle(ref, () => ({\n    forceBlur: () => {\n      inputRef.current.blur();\n    },\n    forceReset()=>{\n      //...\n    },\n    getValue:()=>childRef.current.value\n  }));\n\n  return <input ref={childRef} />;\n});\n\nconst Parent = () => {\n  const childRef = useRef();\n\n  return (\n    <>\n      <Child ref={childRef} />\n      <button\n        onClick={() => {\n          childRef.current.forceBlur();\n          alert(childRef.current.getValue());\n        }}\n      >\n        Click\n      </button>\n    </>\n  );\n};\n\n')))}p.isMDXComponent=!0}}]);