(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[415],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1196:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],c={},l={unversionedId:"react/redux-design-patterns",id:"react/redux-design-patterns",isDocsHomePage:!1,title:"Design Patterns in Redux",description:"Flux",source:"@site/docs/react/7-redux-design-patterns.md",sourceDirName:"react",slug:"/react/redux-design-patterns",permalink:"/react/redux-design-patterns",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/react/7-redux-design-patterns.md",version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Interview Questions",permalink:"/react/react-interview-questions"},next:{title:"React v.s. Vue",permalink:"/react/react-vs-vue"}},u=[{value:"Flux",id:"flux",children:[{value:"Flux Architecture",id:"flux-architecture",children:[]},{value:"Flux v.s. Redux",id:"flux-vs-redux",children:[]}]},{value:"Extension",id:"extension",children:[{value:"Store: Singleton Pattern",id:"store-singleton-pattern",children:[]},{value:"Connect/Selector: Observer Pattern",id:"connectselector-observer-pattern",children:[]},{value:"applyMiddleware: Decorator Pattern / HOF",id:"applymiddleware-decorator-pattern--hof",children:[]}]},{value:"Reference",id:"reference",children:[]}],s={toc:u};function p(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"flux"},"Flux"),(0,i.kt)("h3",{id:"flux-architecture"},"Flux Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flux Architecture",src:r(6178).Z})),(0,i.kt)("h3",{id:"flux-vs-redux"},"Flux v.s. Redux"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flux v.s. Redux",src:r(5709).Z})),(0,i.kt)("p",null,"//TODO"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"extension"},"Extension"),(0,i.kt)("h3",{id:"store-singleton-pattern"},"Store: Singleton Pattern"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Singleton Pattern is a design pattern that restricts the instantiation of a class to one object.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There is only one state tree known as ",(0,i.kt)("inlineCode",{parentName:"li"},"Store")," in Redux."),(0,i.kt)("li",{parentName:"ul"},"Store is Single source of truth.")),(0,i.kt)("h3",{id:"connectselector-observer-pattern"},"Connect/Selector: Observer Pattern"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"An object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes.")),(0,i.kt)("h3",{id:"applymiddleware-decorator-pattern--hof"},"applyMiddleware: Decorator Pattern / HOF"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"designed to enhance functionality, but does not change the interface")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/"},"An introduction to the Flux architectural pattern")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.zalando.com/posts/2016/08/design-patterns-redux.html?gh_src=4n3gxh1?gh_src=4n3gxh1"},"An Obsession with Design Patterns: Redux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://enappd.com/blog/difference-between-redux-and-flux/106/"},"Difference between redux and flux"))))}p.isMDXComponent=!0},6178:function(e,t,r){"use strict";t.Z=r.p+"assets/images/flux-architecture-a3da32d398373d681f1412562a2b2ad6.png"},5709:function(e,t,r){"use strict";t.Z=r.p+"assets/images/redux-vs-flux-1cb43a228f61fcfcd1103c3c148b970e.png"}}]);