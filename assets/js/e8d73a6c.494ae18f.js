(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[972],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2110:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],l={},s={unversionedId:"web-dev/web-js-engine-object-optimization",id:"web-dev/web-js-engine-object-optimization",isDocsHomePage:!1,title:"JS engine: Optimizing of Object",description:"TL;DR",source:"@site/docs/web-dev/5-web-js-engine-object-optimization.md",sourceDirName:"web-dev",slug:"/web-dev/web-js-engine-object-optimization",permalink:"/web-dev/web-js-engine-object-optimization",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/web-dev/5-web-js-engine-object-optimization.md",version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JS engine: Introduction",permalink:"/web-dev/web-js-engine-introduction"},next:{title:"Clean Code - Object Oriented Design",permalink:"/general/clean-code-note"}},p=[{value:"TL;DR",id:"tldr",children:[]},{value:"JavaScript\u2019s object model",id:"javascripts-object-model",children:[{value:"How JavaScript defines objects.",id:"how-javascript-defines-objects",children:[]},{value:"How are these these property attributes actually stored in memory?",id:"how-are-these-these-property-attributes-actually-stored-in-memory",children:[]},{value:"Shape as Optimization",id:"shape-as-optimization",children:[]},{value:"Naming",id:"naming",children:[]},{value:"What happens if you have an object with a certain shape, but then you add a property to it?",id:"what-happens-if-you-have-an-object-with-a-certain-shape-but-then-you-add-a-property-to-it",children:[]},{value:"Transition Chain",id:"transition-chain",children:[]},{value:"Inline Caches (ICs)",id:"inline-caches-ics",children:[]}]},{value:"Note",id:"note",children:[]},{value:"Reference",id:"reference",children:[]}],c={toc:p};function u(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Javascript objects are ",(0,r.kt)("inlineCode",{parentName:"li"},"dictionaries")," essentially, but engines use ",(0,r.kt)("inlineCode",{parentName:"li"},"Shape")," internally to optimize it."),(0,r.kt)("li",{parentName:"ul"},"Prototypes are just objects, but Javascript Engine treate them specially."),(0,r.kt)("li",{parentName:"ul"},"Do not mess with Prototypes, it hurts performance because the.")),(0,r.kt)("h2",{id:"javascripts-object-model"},"JavaScript\u2019s object model"),(0,r.kt)("h3",{id:"how-javascript-defines-objects"},"How JavaScript defines objects."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"object-model",src:n(633).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-property-attributes"},"ECMAScript specification")," essentially defines all objects as ",(0,r.kt)("inlineCode",{parentName:"p"},"dictionaries"),", with string keys mapping to property attributes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[[Writable]]"),": whether the property can be reassigned to.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[[Enumerable]]"),": whether the property shows up in for-in loops.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[[Configurable]]"),":whether the property can be deleted.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We can see these properties with"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const object = { foo: 42 };\nObject.getOwnPropertyDescriptor(object, "foo");\n// \u2192 { value: 42, writable: true, enumerable: true, configurable: true }\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"how-are-these-these-property-attributes-actually-stored-in-memory"},"How are these these property attributes actually stored in memory?"),(0,r.kt)("h3",{id:"shape-as-optimization"},"Shape as Optimization"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If we assume that we\u2019ll be seeing more objects with this shape later, then it\u2019s wasteful to store the full dictionary containing the property names and attributes on the JSObject itself, as the property names are repeated for all objects with the same shape. That\u2019s a lot of duplication and unnecessarily memory usage. As an optimization, engines store the Shape of the object separately.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No matter how many objects there are, as long as they have the same shape, we only have to store the shape and property information once!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shape as Optimization",src:n(2273).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This Shape contains all the ",(0,r.kt)("inlineCode",{parentName:"li"},"property names")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"attributes"),", except for their ",(0,r.kt)("inlineCode",{parentName:"li"},"[[Value]]"),"s."),(0,r.kt)("li",{parentName:"ul"},"Every JSObject with this same shape points to exactly this Shape instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Offset"),": record the offset of the values inside of the JSObject so JavaScript engine knows where to find the values.")),(0,r.kt)("h3",{id:"naming"},"Naming"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All JavaScript engines use shapes as an optimization, but they don\u2019t all call them shapes."),(0,r.kt)("li",{parentName:"ul"},"Academic papers: ",(0,r.kt)("inlineCode",{parentName:"li"},"Hidden Classes")," (confusing w.r.t. JavaScript ",(0,r.kt)("inlineCode",{parentName:"li"},"classes"),")"),(0,r.kt)("li",{parentName:"ul"},"V8: ",(0,r.kt)("inlineCode",{parentName:"li"},"Maps")," (confusing w.r.t. JavaScript ",(0,r.kt)("inlineCode",{parentName:"li"},"Maps"),")"),(0,r.kt)("li",{parentName:"ul"},"Chakra: ",(0,r.kt)("inlineCode",{parentName:"li"},"Types")," (confusing w.r.t. JavaScript\u2019s ",(0,r.kt)("inlineCode",{parentName:"li"},"dynamic types")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"typeof"),")"),(0,r.kt)("li",{parentName:"ul"},"JavaScriptCore:",(0,r.kt)("inlineCode",{parentName:"li"},"Structures")),(0,r.kt)("li",{parentName:"ul"},"SpiderMonkey:",(0,r.kt)("inlineCode",{parentName:"li"},"Shapes"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"what-happens-if-you-have-an-object-with-a-certain-shape-but-then-you-add-a-property-to-it"},"What happens if you have an object with a certain shape, but then you add a property to it?"),(0,r.kt)("h3",{id:"transition-chain"},"Transition Chain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The shapes form so-called transition chains in the JavaScript engine.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const object = {};\nobject.x = 5;\nobject.y = 6;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transition Chain",src:n(7864).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Transition Chains")," are link list, every Shape links back to its previous shape."),(0,r.kt)("li",{parentName:"ul"},"Every time we add new properties in ",(0,r.kt)("inlineCode",{parentName:"li"},"Object"),", JavaScript engine transitions to a new shape which ",(0,r.kt)("inlineCode",{parentName:"li"},"only needs to know about the new property it introduces"),". In this case the Shape(x,y) point"),(0,r.kt)("li",{parentName:"ul"},"The order in which properties are added impacts the shape. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"{ x: 4, y: 5 }")," results in a different shape than ",(0,r.kt)("inlineCode",{parentName:"li"},"{ y: 5, x: 4 }"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inline-caches-ics"},"Inline Caches (ICs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ICs: memorize information on where to find properties on objects, to reduce the number of expensive lookups."),(0,r.kt)("li",{parentName:"ul"},"ICs are the key ingredient to making JavaScript run fast!")),(0,r.kt)("h2",{id:"note"},"Note"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initialize object props with sensible values."),(0,r.kt)("li",{parentName:"ol"},"always initialize objecs in the same way."),(0,r.kt)("li",{parentName:"ol"},"type checking is about developer productivity but not about engine performance")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mathiasbynens.be/notes/prototypes"},"JavaScript engine fundamentals: optimizing prototypes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mathiasbynens.be/notes/shapes-ics"},"JavaScript engine fundamentals: Shapes and Inline Caches")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/0I0d8LkDqyc"},"Mathias B, Benedikt M - JS Engine fundamentals [AgentConf]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://v8.dev/blog/react-cliff"},"The story of a V8 performance cliff in React"))))}u.isMDXComponent=!0},633:function(e,t,n){"use strict";t.Z=n.p+"assets/images/object-model-9b34f398f0acb4cae0bfc3959fd98a26.png"},2273:function(e,t,n){"use strict";t.Z=n.p+"assets/images/shape-as-optimization-fed52af2773d0d3f5fb716adb88d6fae.png"},7864:function(e,t,n){"use strict";t.Z=n.p+"assets/images/transition-chain-3c93a13761401dda30519fd5dd00607b.png"}}]);