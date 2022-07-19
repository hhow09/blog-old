(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[8952],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6224:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=t(2122),r=t(9756),l=(t(7294),t(3905)),i=["components"],o={},s={unversionedId:"programming/js-dev-note",id:"programming/js-dev-note",isDocsHomePage:!1,title:"Javascript Dev Notes",description:"1. Trace Call Stack",source:"@site/docs/programming/14-js-dev-note.md",sourceDirName:"programming",slug:"/programming/js-dev-note",permalink:"/programming/js-dev-note",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/programming/14-js-dev-note.md",version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Functional Programming",permalink:"/programming/js-fp"},next:{title:"Node.js Event Loop",permalink:"/programming/js-event-loop"}},c=[{value:"1. Trace Call Stack",id:"1-trace-call-stack",children:[]},{value:"2. <code>console.log</code> an Object is pass by reference",id:"2-consolelog-an-object-is-pass-by-reference",children:[]},{value:"3. Initializing 2D array with <code>Array.fill</code>",id:"3-initializing-2d-array-with-arrayfill",children:[]},{value:"4. Deep Copy v.s. Shallow Copy",id:"4-deep-copy-vs-shallow-copy",children:[]},{value:"5. Manipulating with floating-point number",id:"5-manipulating-with-floating-point-number",children:[]},{value:"6. Function arguments are pass-by-reference",id:"6-function-arguments-are-pass-by-reference",children:[]},{value:"7. Key order of <code>Object.keys(obj)</code>?",id:"7-key-order-of-objectkeysobj",children:[]},{value:"8. Remove Duplicate Element in Array",id:"8-remove-duplicate-element-in-array",children:[]},{value:"9.DOM Element",id:"9dom-element",children:[{value:"DOM Element is a special object",id:"dom-element-is-a-special-object",children:[]},{value:"DOM Element will produce global variable",id:"dom-element-will-produce-global-variable",children:[]}]},{value:"10. using <code>await</code> inside <code>setInterval</code> is pointless",id:"10-using-await-inside-setinterval-is-pointless",children:[]},{value:"Reference",id:"reference",children:[]}],p={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-trace-call-stack"},"1. Trace Call Stack"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"this is useful especially in developing / debugging multi-repo")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},'console.log((new Error()).stack.split("\\n"))')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"arguments.callee.caller.toString()")," (not work in strict mode)")),(0,l.kt)("h2",{id:"2-consolelog-an-object-is-pass-by-reference"},"2. ",(0,l.kt)("inlineCode",{parentName:"h2"},"console.log")," an Object is pass by reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"object is pass by reference"),(0,l.kt)("li",{parentName:"ul"},"object may have changed when log shows")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Don't use console.log(obj), use console.log(JSON.parse(JSON.stringify(obj))).")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This way you are sure you are seeing the value of obj at the moment you log it. Otherwise, many browsers provide a live view that constantly updates as values change. This may not be what you want.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"reference: ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/log#logging_objects"},"Logging objects"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"3-initializing-2d-array-with-arrayfill"},"3. Initializing 2D array with ",(0,l.kt)("inlineCode",{parentName:"h2"},"Array.fill")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"if filled value is Object, Array or function, e.g. pass by reference, they will reference to the same object.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const list = new Array(3).fill(new Array(4).fill(1));\nconst list2 = new Array(3).fill(null).map(() => new Array(4).fill(1));\n\nlist[1][2] = 2;\nlist2[1][2] = 2;\nconsole.log(list);\n// false\n//[\n//  [ 1, 1, 2, 1 ],\n//  [ 1, 1, 2, 1 ],\n//  [ 1, 1, 2, 1 ]\n//]\nconsole.log(list2);\n// correct\n//[\n//  [ 1, 1, 1, 1 ],\n//  [ 1, 1, 2, 1 ],\n//  [ 1, 1, 1, 1 ]\n//]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"list1 filled each row with ",(0,l.kt)("inlineCode",{parentName:"li"},"same reference")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"new Array(4).fill(1)"),". if modified ",(0,l.kt)("inlineCode",{parentName:"li"},"list[1][2]"),", every row of index 2 will also be modified."),(0,l.kt)("li",{parentName:"ul"},"list two is creating 2D array of each different row.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"4-deep-copy-vs-shallow-copy"},"4. Deep Copy v.s. Shallow Copy"),(0,l.kt)("h4",{id:"shallow-copy"},"Shallow Copy"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Array.prototype.slice()"),(0,l.kt)("li",{parentName:"ol"},"Object.assign({}, obj);"),(0,l.kt)("li",{parentName:"ol"},"Spread Syntax: A2 = {...A1}")),(0,l.kt)("h4",{id:"deep-copy"},"Deep Copy"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"JSON.parse(JSON.stringify(object))"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you do not use ",(0,l.kt)("inlineCode",{parentName:"li"},"circular reference"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Dates"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"functions"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Infinity"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"RegExps"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Maps"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Sets"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Blobs"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"FileLists"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"ImageDatas"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"sparse Arrays"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Typed Arrays")," or other complex types within your object, it is a very simple one liner to deep clone an object.")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"with library: ",(0,l.kt)("a",{parentName:"li",href:"https://lodash.com/docs#cloneDeep"},"lodash - cloneDeep"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"5-manipulating-with-floating-point-number"},"5. Manipulating with floating-point number"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JavaScript has a single and unpredictable number type, 64-bit floating point.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"0.1 + 0.2 === 0.3; // false\n\nfunction numbersCloseEnoughToEqual(n1, n2) {\n  return Math.abs(n1 - n2) < Number.EPSILON;\n}\n\nnumbersCloseEnoughToEqual(0.1 + 0.2, 0.3);\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"6-function-arguments-are-pass-by-reference"},"6. Function arguments are pass-by-reference"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function foo(x) {\n  x.push(4);\n  x; // [1,2,3,4]\n  x = [4, 5, 6]; //re-assign, reference changed\n  x.push(7);\n  x; // [4,5,6,7]\n}\nvar a = [1, 2, 3];\nfoo(a);\na; // [1,2,3,4]\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"7-key-order-of-objectkeysobj"},"7. Key order of ",(0,l.kt)("inlineCode",{parentName:"h2"},"Object.keys(obj)"),"?"),(0,l.kt)("h4",{id:"es5"},"ES5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"depend on browser"),(0,l.kt)("li",{parentName:"ul"},"ref: ",(0,l.kt)("a",{parentName:"li",href:"https://262.ecma-international.org/5.1/#sec-15.2.3.14"},"ECMA 5.0 Object.keys (O)"))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote",start:5},(0,l.kt)("li",{parentName:"ol"},"For each own enumerable property of O whose name String is P")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Call the [","[DefineOwnProperty]","] internal method of array with arguments ToString(index), the PropertyDescriptor {[","[Value]","]: P, [","[Writable]","]: true, [","[Enumerable]","]: true, [","[Configurable]","]: true}, and false.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Increment index by 1."))),(0,l.kt)("p",{parentName:"blockquote"},"If an implementation defines a specific order of enumeration for the for-in statement, that same enumeration order must be used in step 5 of this algorithm.")),(0,l.kt)("h4",{id:"es6"},"ES6:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"depend on ",(0,l.kt)("a",{parentName:"li",href:"https://262.ecma-international.org/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys"},(0,l.kt)("inlineCode",{parentName:"a"},"OwnPropertyKeys"))," method"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Reflect.ownKeys")," also depend on ",(0,l.kt)("inlineCode",{parentName:"li"},"OwnPropertyKeys")),(0,l.kt)("li",{parentName:"ul"},"Order",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"integers"),": in numeric order"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"strings"),": in chronological order"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Symbols"),": in chronological order"))),(0,l.kt)("li",{parentName:"ul"},"ref: ",(0,l.kt)("a",{parentName:"li",href:"https://262.ecma-international.org/6.0/#sec-object.keys"},"ECMA 6.0 Object.keys ( O )"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const obj = {\n  2: "integer: 2",\n  foo: "string: foo",\n  "01": "string: 01",\n  1: "integer: 1",\n  [Symbol("first")]: "symbol: first",\n};\n\nobj["0"] = "integer: 0";\nobj[Symbol("last")] = "symbol: last";\nobj["veryLast"] = "string: very last";\n\nconsole.log(Reflect.ownKeys(obj));\n// [ "0", "1", "2", "foo", "01", "veryLast", Symbol(first), Symbol(last) ]\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"8-remove-duplicate-element-in-array"},"8. Remove Duplicate Element in Array"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const chars = ["A", "B", "A", "C", "B"];\n\nconst uniqueChars = chars.filter((c, index) => chars.indexOf(c) === index);\n//[ \'A\', \'B\', \'C\' ]\n')),(0,l.kt)("h2",{id:"9dom-element"},"9.DOM Element"),(0,l.kt)("h3",{id:"dom-element-is-a-special-object"},"DOM Element is a special object"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'var a = document.createElement("div");\ntypeof a; // "object"\nObject.prototype.toString.call(a); // "[object HTMLDivElement]"\na.tagName; // "DIV"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cannot call some built-in methods such as ",(0,l.kt)("inlineCode",{parentName:"li"},"toString()")),(0,l.kt)("li",{parentName:"ul"},"Cannot be overwritten / override some properties such as ",(0,l.kt)("inlineCode",{parentName:"li"},"this"))),(0,l.kt)("h3",{id:"dom-element-will-produce-global-variable"},"DOM Element will produce global variable"),(0,l.kt)("p",null,"be careful for duplicate naming."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div id="foo"></div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(foo); // HTML Element\n")),(0,l.kt)("h2",{id:"10-using-await-inside-setinterval-is-pointless"},"10. using ",(0,l.kt)("inlineCode",{parentName:"h2"},"await")," inside ",(0,l.kt)("inlineCode",{parentName:"h2"},"setInterval")," is pointless"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"since interval won't wait for ",(0,l.kt)("inlineCode",{parentName:"li"},"await"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'async function getData (){\n  return fetch("url...")\n}\nconst timer = setInterval(\n  await getData();\n,1000)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"can change into")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'async function getData() {\n  return fetch("https://google.com");\n}\n\nasync function sleep(ms) {\n  return await new Promise((resolve) => setTimeout(resolve, ms));\n}\n\nfunction periodicGetData() {\n  return new Promise(async (resolve, reject) => {\n    if (some_condition) {\n      resolve();\n    }\n    const res = await getData();\n    if (res instanceof Error) {\n      reject(res);\n    }\n    console.log("res", res);\n    await sleep(1000);\n    return periodicGetData();\n  });\n}\nperiodicGetData();\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You Don't Know JS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.stefanjudis.com/today-i-learned/property-order-is-predictable-in-javascript-objects-since-es2015/"},"Property order is predictable in JavaScript objects since ES2015"))))}u.isMDXComponent=!0}}]);