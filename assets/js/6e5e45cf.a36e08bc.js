(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[944],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?l.createElement(k,i(i({ref:t},c),{},{components:n})):l.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7044:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var l=n(2122),a=n(9756),r=(n(7294),n(3905)),i=["components"],o={},s={unversionedId:"js/js-dev-note",id:"js/js-dev-note",isDocsHomePage:!1,title:"Javascript Dev Notes",description:"1. Trace Call Stack",source:"@site/docs/js/3-js-dev-note.md",sourceDirName:"js",slug:"/js/js-dev-note",permalink:"/js/js-dev-note",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/js/3-js-dev-note.md",version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Immutability",permalink:"/js/js-immutability"},next:{title:"Functional Programming",permalink:"/js/js-fp"}},p=[{value:"1. Trace Call Stack",id:"1-trace-call-stack",children:[]},{value:"2. <code>console.log</code> an Object is pass by reference",id:"2-consolelog-an-object-is-pass-by-reference",children:[]},{value:"3. Initializing 2D array with <code>Array.fill</code>",id:"3-initializing-2d-array-with-arrayfill",children:[]},{value:"4. Deep Copy v.s. Shallow Copy",id:"4-deep-copy-vs-shallow-copy",children:[]},{value:"5. Manipulating with floating-point number",id:"5-manipulating-with-floating-point-number",children:[]},{value:"6. Function arguments are pass-by-reference",id:"6-function-arguments-are-pass-by-reference",children:[]},{value:"7. Key order of <code>Object.keys(obj)</code>?",id:"7-key-order-of-objectkeysobj",children:[]},{value:"8. Remove Duplicate Element in Array",id:"8-remove-duplicate-element-in-array",children:[]},{value:"9.DOM Element",id:"9dom-element",children:[{value:"DOM Element is a special object",id:"dom-element-is-a-special-object",children:[]},{value:"DOM Element will produce global variable",id:"dom-element-will-produce-global-variable",children:[]}]},{value:"10. symlink",id:"10-symlink",children:[{value:"Example",id:"example",children:[]}]},{value:"Reference",id:"reference",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-trace-call-stack"},"1. Trace Call Stack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"this is useful especially in developing / debugging multi-repo")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},'console.log((new Error()).stack.split("\\n"))')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"arguments.callee.caller.toString()")," (not work in strict mode)")),(0,r.kt)("h2",{id:"2-consolelog-an-object-is-pass-by-reference"},"2. ",(0,r.kt)("inlineCode",{parentName:"h2"},"console.log")," an Object is pass by reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"object is pass by reference"),(0,r.kt)("li",{parentName:"ul"},"object may have changed when log shows")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Don't use console.log(obj), use console.log(JSON.parse(JSON.stringify(obj))).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This way you are sure you are seeing the value of obj at the moment you log it. Otherwise, many browsers provide a live view that constantly updates as values change. This may not be what you want.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"reference: ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/log#logging_objects"},"Logging objects"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-initializing-2d-array-with-arrayfill"},"3. Initializing 2D array with ",(0,r.kt)("inlineCode",{parentName:"h2"},"Array.fill")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if filled value is Object, Array or function, e.g. pass by reference, they will reference to the same object.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const list = new Array(3).fill(new Array(4).fill(1));\nconst list2 = new Array(3).fill(null).map(() => new Array(4).fill(1));\n\nlist[1][2] = 2;\nlist2[1][2] = 2;\nconsole.log(list);\n// false\n//[\n//  [ 1, 1, 2, 1 ],\n//  [ 1, 1, 2, 1 ],\n//  [ 1, 1, 2, 1 ]\n//]\nconsole.log(list2);\n// correct\n//[\n//  [ 1, 1, 1, 1 ],\n//  [ 1, 1, 2, 1 ],\n//  [ 1, 1, 1, 1 ]\n//]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"list1 filled each row with ",(0,r.kt)("inlineCode",{parentName:"li"},"same reference")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"new Array(4).fill(1)"),". if modified ",(0,r.kt)("inlineCode",{parentName:"li"},"list[1][2]"),", every row of index 2 will also be modified."),(0,r.kt)("li",{parentName:"ul"},"list two is creating 2D array of each different row.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"4-deep-copy-vs-shallow-copy"},"4. Deep Copy v.s. Shallow Copy"),(0,r.kt)("h4",{id:"shallow-copy"},"Shallow Copy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Array.prototype.slice()"),(0,r.kt)("li",{parentName:"ol"},"Object.assign({}, obj);"),(0,r.kt)("li",{parentName:"ol"},"Spread Syntax: A2 = {...A1}")),(0,r.kt)("h4",{id:"deep-copy"},"Deep Copy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"JSON.parse(JSON.stringify(object))"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you do not use ",(0,r.kt)("inlineCode",{parentName:"li"},"circular reference"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Dates"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"functions"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Infinity"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"RegExps"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Maps"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Sets"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Blobs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"FileLists"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ImageDatas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"sparse Arrays"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Typed Arrays")," or other complex types within your object, it is a very simple one liner to deep clone an object.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"with library: ",(0,r.kt)("a",{parentName:"li",href:"https://lodash.com/docs#cloneDeep"},"lodash - cloneDeep"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"5-manipulating-with-floating-point-number"},"5. Manipulating with floating-point number"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JavaScript has a single and unpredictable number type, 64-bit floating point.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"0.1 + 0.2 === 0.3; // false\n\nfunction numbersCloseEnoughToEqual(n1, n2) {\n  return Math.abs(n1 - n2) < Number.EPSILON;\n}\n\nnumbersCloseEnoughToEqual(0.1 + 0.2, 0.3);\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"6-function-arguments-are-pass-by-reference"},"6. Function arguments are pass-by-reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function foo(x) {\n  x.push(4);\n  x; // [1,2,3,4]\n  x = [4, 5, 6]; //re-assign, reference changed\n  x.push(7);\n  x; // [4,5,6,7]\n}\nvar a = [1, 2, 3];\nfoo(a);\na; // [1,2,3,4]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"7-key-order-of-objectkeysobj"},"7. Key order of ",(0,r.kt)("inlineCode",{parentName:"h2"},"Object.keys(obj)"),"?"),(0,r.kt)("h4",{id:"es5"},"ES5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"depend on browser"),(0,r.kt)("li",{parentName:"ul"},"ref: ",(0,r.kt)("a",{parentName:"li",href:"https://262.ecma-international.org/5.1/#sec-15.2.3.14"},"ECMA 5.0 Object.keys (O)"))),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote",start:5},(0,r.kt)("li",{parentName:"ol"},"For each own enumerable property of O whose name String is P")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Call the [","[DefineOwnProperty]","] internal method of array with arguments ToString(index), the PropertyDescriptor {[","[Value]","]: P, [","[Writable]","]: true, [","[Enumerable]","]: true, [","[Configurable]","]: true}, and false.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Increment index by 1."))),(0,r.kt)("p",{parentName:"blockquote"},"If an implementation defines a specific order of enumeration for the for-in statement, that same enumeration order must be used in step 5 of this algorithm.")),(0,r.kt)("h4",{id:"es6"},"ES6:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"depend on ",(0,r.kt)("a",{parentName:"li",href:"https://262.ecma-international.org/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys"},(0,r.kt)("inlineCode",{parentName:"a"},"OwnPropertyKeys"))," method"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Reflect.ownKeys")," also depend on ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnPropertyKeys")),(0,r.kt)("li",{parentName:"ul"},"Order",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"integers"),": in numeric order"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"strings"),": in chronological order"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Symbols"),": in chronological order"))),(0,r.kt)("li",{parentName:"ul"},"ref: ",(0,r.kt)("a",{parentName:"li",href:"https://262.ecma-international.org/6.0/#sec-object.keys"},"ECMA 6.0 Object.keys ( O )"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const obj = {\n  2: "integer: 2",\n  foo: "string: foo",\n  "01": "string: 01",\n  1: "integer: 1",\n  [Symbol("first")]: "symbol: first",\n};\n\nobj["0"] = "integer: 0";\nobj[Symbol("last")] = "symbol: last";\nobj["veryLast"] = "string: very last";\n\nconsole.log(Reflect.ownKeys(obj));\n// [ "0", "1", "2", "foo", "01", "veryLast", Symbol(first), Symbol(last) ]\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"8-remove-duplicate-element-in-array"},"8. Remove Duplicate Element in Array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const chars = ["A", "B", "A", "C", "B"];\n\nconst uniqueChars = chars.filter((c, index) => chars.indexOf(c) === index);\n//[ \'A\', \'B\', \'C\' ]\n')),(0,r.kt)("h2",{id:"9dom-element"},"9.DOM Element"),(0,r.kt)("h3",{id:"dom-element-is-a-special-object"},"DOM Element is a special object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var a = document.createElement("div");\ntypeof a; // "object"\nObject.prototype.toString.call(a); // "[object HTMLDivElement]"\na.tagName; // "DIV"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cannot call some built-in methods such as ",(0,r.kt)("inlineCode",{parentName:"li"},"toString()")),(0,r.kt)("li",{parentName:"ul"},"Cannot be overwritten / override some properties such as ",(0,r.kt)("inlineCode",{parentName:"li"},"this"))),(0,r.kt)("h3",{id:"dom-element-will-produce-global-variable"},"DOM Element will produce global variable"),(0,r.kt)("p",null,"be careful for duplicate naming."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div id="foo"></div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(foo); // HTML Element\n")),(0,r.kt)("h2",{id:"10-symlink"},"10. symlink"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"especially useful when developing multi-repo")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"repo A use repo B as dependency")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"root-folder\n\u251c\u2500\u2500 repo-A\n|       \u2514\u2500\u2500node_modules\n|               \u2514\u2500\u2500repo-B\n\u251c\u2500\u2500 repo-B\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"in ",(0,r.kt)("inlineCode",{parentName:"li"},"repo-B")," ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build"),", assume output is ",(0,r.kt)("inlineCode",{parentName:"li"},"/dist")),(0,r.kt)("li",{parentName:"ol"},"in ",(0,r.kt)("inlineCode",{parentName:"li"},"repo-A/node_modules"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rm -rf repo-B")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ln -s root-folder/repo-B/dist ./repo-B")," to create Symlink"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ls -al")," to check, we should see Symlink ",(0,r.kt)("inlineCode",{parentName:"li"},"repo-B -> /root-folder/repo-B/dist"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By this way we can see effect on repo-A after modifying repo-B and rebuild ",(0,r.kt)("strong",{parentName:"li"},"simply on local"),"."),(0,r.kt)("li",{parentName:"ul"},"For better dev experience, use ",(0,r.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/watch/"},"webpack watch")," to auto rebuild on change.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You Don't Know JS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.stefanjudis.com/today-i-learned/property-order-is-predictable-in-javascript-objects-since-es2015/"},"Property order is predictable in JavaScript objects since ES2015"))))}u.isMDXComponent=!0}}]);