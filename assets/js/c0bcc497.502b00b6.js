(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[437],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},706:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],l={},c={unversionedId:"react/react-dev-detail",id:"react/react-dev-detail",isDocsHomePage:!1,title:"React Dev Notes",description:"1. reducer of useReducer and updater function of setState will be called twice in strict mode.",source:"@site/docs/react/4-react-dev-detail.md",sourceDirName:"react",slug:"/react/react-dev-detail",permalink:"/react/react-dev-detail",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/react/4-react-dev-detail.md",version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3 Ways To Pass Values From Child to Parent",permalink:"/react/react-parent-child-pass-value"},next:{title:"Design React Custom Hook",permalink:"/react/react-custom-hook"}},u=[{value:"1. <code>reducer</code> of <code>useReducer</code> and <code>updater function</code> of setState will be called twice in strict mode.",id:"1-reducer-of-usereducer-and-updater-function-of-setstate-will-be-called-twice-in-strict-mode",children:[]},{value:"2. previous state of <code>useReducer</code> reducer and updater function of setState IS PASS BY REFERENCE.",id:"2-previous-state-of-usereducer-reducer-and-updater-function-of-setstate-is-pass-by-reference",children:[]},{value:"3. reducer should remain constant reference",id:"3-reducer-should-remain-constant-reference",children:[]},{value:"4. return a function in useCallback",id:"4-return-a-function-in-usecallback",children:[]}],d={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-reducer-of-usereducer-and-updater-function-of-setstate-will-be-called-twice-in-strict-mode"},"1. ",(0,a.kt)("inlineCode",{parentName:"h3"},"reducer")," of ",(0,a.kt)("inlineCode",{parentName:"h3"},"useReducer")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"updater function")," of setState will be called twice in strict mode."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"reference: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/react/issues/12856"},"React.StrictMode causes setState to fire twice #12856")),(0,a.kt)("li",{parentName:"ul"},"should not perform side effect inside updater function")),(0,a.kt)("h3",{id:"2-previous-state-of-usereducer-reducer-and-updater-function-of-setstate-is-pass-by-reference"},"2. previous state of ",(0,a.kt)("inlineCode",{parentName:"h3"},"useReducer")," reducer and updater function of setState IS PASS BY REFERENCE."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Don't directly modify previous state"),(0,a.kt)("li",{parentName:"ul"},"Deep copy previous state if you want to yous.")),(0,a.kt)("h3",{id:"3-reducer-should-remain-constant-reference"},"3. reducer should remain constant reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Not working example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const reducer = (state,action)=>{...}\nconst getReducer = (someProps) => reducer;\nconst [state, dispatch] = (getReducer(props), initialState);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"props should by pass into reducer with ",(0,a.kt)("inlineCode",{parentName:"li"},"action"))),(0,a.kt)("h3",{id:"4-return-a-function-in-usecallback"},"4. return a function in useCallback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Purpose: Try to memoize the callback function ",(0,a.kt)("inlineCode",{parentName:"li"},"getOnClick")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"Child"),"."),(0,a.kt)("li",{parentName:"ul"},"Assume We need information of ",(0,a.kt)("inlineCode",{parentName:"li"},"index")," to get the real onClick callback.")),(0,a.kt)("h4",{id:"not-working-example"},"Not working example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"only ",(0,a.kt)("inlineCode",{parentName:"li"},"(idx)=>{...}")," is memoized, but not ",(0,a.kt)("inlineCode",{parentName:"li"},"(e)=>{...}")," ."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Child")," is still getting newly created ",(0,a.kt)("inlineCode",{parentName:"li"},"(e)=>{...}")," on every render.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const getOnClick = useCallback((idx)=>(e)=>{...},[...]);\nconst List = list.map((el,idx)=><Child onClick={getOnClick(idx)}/>);\n")),(0,a.kt)("h4",{id:"working-example"},"Working example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"we can generate pass ",(0,a.kt)("inlineCode",{parentName:"li"},"idx")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Child"),", than ",(0,a.kt)("inlineCode",{parentName:"li"},"(e)=>{...}")," is actually generated inside Child."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getOnClick")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"Child")," is memoized by useCallback.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const getOnClick = useCallback((idx)=>(e)=>{...},[...]);\nconst List = list.map((el,idx)=><Child getOnClick={getOnClick)} idx={idx}/>);\nconst Child = ({getOnClick, idx})=>{<div onClick={getOnclick(idx)}>...</div>}\n")))}s.isMDXComponent=!0}}]);