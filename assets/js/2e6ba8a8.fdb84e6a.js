(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[8505],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4665:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={},c={unversionedId:"react/react-interview-questions",id:"react/react-interview-questions",isDocsHomePage:!1,title:"React Interview Questions",description:"React",source:"@site/docs/react/6-react-interview-questions.md",sourceDirName:"react",slug:"/react/react-interview-questions",permalink:"/react/react-interview-questions",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/react/6-react-interview-questions.md",version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Design React Custom Hook",permalink:"/react/react-custom-hook"},next:{title:"Design Patterns in Redux",permalink:"/react/redux-design-patterns"}},u=[{value:"React",id:"react",children:[{value:"1. What is the difference between writing React vs pure javascript",id:"1-what-is-the-difference-between-writing-react-vs-pure-javascript",children:[]},{value:"2. explain Class component vs Functional Component",id:"2-explain-class-component-vs-functional-component",children:[]},{value:"3. Explain when will Component re-render?",id:"3-explain-when-will-component-re-render",children:[]}]},{value:"State Management / Redux",id:"state-management--redux",children:[{value:"4. React.Context v.s. Redux, why don&#39;t just use Context",id:"4-reactcontext-vs-redux-why-dont-just-use-context",children:[]}]}],s={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"react"},"React"),(0,i.kt)("h3",{id:"1-what-is-the-difference-between-writing-react-vs-pure-javascript"},"1. What is the difference between writing React vs pure javascript"),(0,i.kt)("p",null,"We can definitely output some elements with javascript then append them to the DOM element. However, when talking to ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"re-render"),", manipulating DOM is an expensive operation. React maintain a ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual DOM")," and do batch update to ",(0,i.kt)("inlineCode",{parentName:"p"},"real DOM")," after calculating diff in Virtual DOM."),(0,i.kt)("h3",{id:"2-explain-class-component-vs-functional-component"},"2. explain Class component vs Functional Component"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class component is ",(0,i.kt)("inlineCode",{parentName:"li"},"stateful"),", Functional Component is  ",(0,i.kt)("inlineCode",{parentName:"li"},"stateless")," (natively)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Debug")," with Functional Component is easier."),(0,i.kt)("li",{parentName:"ul"},"Functional Component has more concise code."),(0,i.kt)("li",{parentName:"ul"},"Functional Component is more suitable for reusing UI."),(0,i.kt)("li",{parentName:"ul"},"Class component has more live cycle"),(0,i.kt)("li",{parentName:"ul"},"Memoize Class component with ",(0,i.kt)("inlineCode",{parentName:"li"},"React.PureComponent")),(0,i.kt)("li",{parentName:"ul"},"Memoize Functional Component via the ",(0,i.kt)("inlineCode",{parentName:"li"},"memo")," HOC")),(0,i.kt)("h3",{id:"3-explain-when-will-component-re-render"},"3. Explain when will Component re-render?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"when the ",(0,i.kt)("inlineCode",{parentName:"li"},"reference")," of props changed")),(0,i.kt)("h2",{id:"state-management--redux"},"State Management / Redux"),(0,i.kt)("h3",{id:"4-reactcontext-vs-redux-why-dont-just-use-context"},"4. React.Context v.s. Redux, why don't just use Context"),(0,i.kt)("p",null,"//TODO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mainly is because of ",(0,i.kt)("strong",{parentName:"li"},"performance")," concern."),(0,i.kt)("li",{parentName:"ul"},"React has its own ",(0,i.kt)("inlineCode",{parentName:"li"},"bailout reconciliation mechanism")," to skip the re-rendering of a component.")),(0,i.kt)("h4",{id:"context"},"Context"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When using Context, React will pass props implicitly to all nodes of subtree."),(0,i.kt)("li",{parentName:"ul"},"When updating Context, React will recreate new context with ",(0,i.kt)("inlineCode",{parentName:"li"},"Object.assign()"),", which will never bailout."),(0,i.kt)("li",{parentName:"ul"},"Every ",(0,i.kt)("inlineCode",{parentName:"li"},"Consumer")," or component that ",(0,i.kt)("inlineCode",{parentName:"li"},"useContext")," ",(0,i.kt)("strong",{parentName:"li"},"will be update since the Context is always a new Object"),"."),(0,i.kt)("li",{parentName:"ul"},"The reason why React does not do reference check of a Context value is, React ",(0,i.kt)("inlineCode",{parentName:"li"},"cannot")," ensure that developer ",(0,i.kt)("strong",{parentName:"li"},"is using immutable way to update Context"),".")),(0,i.kt)("h4",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/rfcs/pull/119"},"RFC: Context selectors #119")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.wuct.me/react-internal-reconciliation-bailout-587695eb05a8"},"\u6df1\u5165 React Reconciliation Bailout \u6a5f\u5236"))))}p.isMDXComponent=!0}}]);