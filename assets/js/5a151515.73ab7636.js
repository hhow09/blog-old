(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[4116],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5720:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={},u={unversionedId:"js/js-closure",id:"js/js-closure",isDocsHomePage:!1,title:"Closure",description:"Intro",source:"@site/docs/js/1-js-closure.md",sourceDirName:"js",slug:"/js/js-closure",permalink:"/js/js-closure",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/js/1-js-closure.md",version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React v.s. Vue",permalink:"/react/react-vs-vue"},next:{title:"Immutability",permalink:"/js/js-immutability"}},c=[{value:"Intro",id:"intro",children:[]},{value:"Definition",id:"definition",children:[]},{value:"Example",id:"example",children:[]},{value:"\u7279\u6027",id:"\u7279\u6027",children:[{value:"\u9589\u5305 + \u51fd\u5f0f\u53ef\u88ab\u56de\u50b3",id:"\u9589\u5305--\u51fd\u5f0f\u53ef\u88ab\u56de\u50b3",children:[]},{value:"\u9589\u5305 + \u51fd\u5f0f\u53ef\u88ab\u56de\u50b3 + Lexical Environment",id:"\u9589\u5305--\u51fd\u5f0f\u53ef\u88ab\u56de\u50b3--lexical-environment",children:[]},{value:"\u4e00\u5b9a\u8981<code>return</code>?",id:"\u4e00\u5b9a\u8981return",children:[]}]},{value:"Reference",id:"reference",children:[]}],s={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"\u7db2\u8def\u4e0a\u8a31\u591a\u9589\u5305\u7684\u6559\u5b78\u90fd\u6c92\u6709\u76f4\u63a5\u660e\u78ba\u7684\u5b9a\u7fa9\uff0c\u53ea\u77e5\u9053 use case \u548c\u9577\u4ec0\u9ebc\u6a23\u5b50\u3002\u76f4\u5230\u770b\u5230\u9019\u7bc7",(0,i.kt)("a",{parentName:"p",href:"https://shubo.io/javascript-closure/"},"[\u6559\u5b78] JavaScript Closure (\u9589\u5305)\u3001\u51fd\u5f0f\u8207\u8a9e\u5f59\u74b0\u5883"),"\uff0c\u642d\u914d",(0,i.kt)("a",{parentName:"p",href:"https://github.com/getify/You-Dont-Know-JS"},"You-Dont-Know-JS"),"\u4e00\u8d77\u8b80\u624d\u8c41\u7136\u958b\u6717\u3002"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"},"MDN/Closures"),"\u7684\u5b9a\u7fa9"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A closure is the combination of a function and the Lexical Environment within which that function was declared.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JavaScript \u4e2d\u7684 Closure \u662f\u51fd\u5f0f\u4ee5\u53ca\u5176\u8a9e\u5f59\u74b0\u5883 (Lexical Environment) \u7684\u7d44\u5408\u3002"),(0,i.kt)("li",{parentName:"ul"},"Closure \u662f\u4e00\u500b\u51fd\u5f0f\u80fd\u5920\u5b58\u53d6\u81ea\u5df1\u88ab\u5ba3\u544a\u6642\u7684\u74b0\u5883\u4e2d\u7684\u8b8a\u6578\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u8655\u7406\u51fd\u6578\uff0c\u5247 Closure \u4e0d\u9069\u7528\u3002\u4e00\u500b Object \u4e0d\u80fd\u6709 Closure \uff0c\u4e00\u500b Clas \u4e5f\u4e0d\u80fd\u6709\u9589\u5305\u3002")),(0,i.kt)("p",null,"Lexical Environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8a5e\u6cd5\u4f5c\u7528\u57df\u662f\u4e00\u5957\u95dc\u65bc\u5f15\u64ce\u5982\u4f55\u5c0b\u627e\u8b8a\u91cf\u4ee5\u53ca\u6703\u5728\u4f55\u8655\u627e\u5230\u8b8a\u91cf\u7684\u898f\u5247\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8a5e\u6cd5\u4f5c\u7528\u57df\u6700\u91cd\u8981\u7684\u7279\u5fb5\u662f\u5b83\u7684\u5b9a\u7fa9\u904e\u7a0b\u767c\u751f\u5728\u4ee3\u78bc\u7684\u66f8\u5beb\u968e\u6bb5\u3002")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function makeFunc() {\n  // 1\n  let name = "John"; // 2\n  function displayName() {\n    // 3\n    console.log(name);\n  }\n  return displayName; // 4\n}\n\nlet func1 = makeFunc(); // 5\nfunc1();\n')),(0,i.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,i.kt)("h3",{id:"\u9589\u5305--\u51fd\u5f0f\u53ef\u88ab\u56de\u50b3"},"\u9589\u5305 + \u51fd\u5f0f\u53ef\u88ab\u56de\u50b3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7d50\u679c: \u51fd\u5f0f\u53ef\u4ee5\u5728\u4f5c\u7528\u57df\u4ee5\u5916\u4e4b\u8655\u57f7\u884c")),(0,i.kt)("h3",{id:"\u9589\u5305--\u51fd\u5f0f\u53ef\u88ab\u56de\u50b3--lexical-environment"},"\u9589\u5305 + \u51fd\u5f0f\u53ef\u88ab\u56de\u50b3 + Lexical Environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u539f\u56e0: \u5728 JavaScript \u4e2d\uff0c\u5373\u4f7f\u5728\u5916\u5c64\u5340\u584a(makeFunc)\u5df2\u7d93\u56de\u50b3\u7684\u72c0\u6cc1\u4e0b\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u7531\u65bc\u5167\u90e8\u4f5c\u7528\u57df(displayName)\u4f9d\u7136\u5b58\u5728"),"\uff0c\u53ea\u8981\u5167\u5c64\u5340\u584a\u9084\u4fdd\u7559\u8457\u4e00\u4efd\u53c3\u8003\uff0c\u90a3\u9ebd\u5916\u5c64\u5340\u584a\u7684\u74b0\u5883",(0,i.kt)("strong",{parentName:"li"},"\u4e0d\u6703\u96a8\u8457\u56de\u50b3\u800c\u88ab\u5783\u573e\u56de\u6536\u6a5f\u5236\u56de\u6536"),"\uff0c\u6211\u5011\u4f9d\u7136\u53ef\u4ee5\u5b58\u53d6\u5916\u5c64\u74b0\u5883\u4e2d\u7684\u8b8a\u6578(//5)\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7d50\u679c: \u9589\u5305 (closure) \u53ef\u4ee5\u300c\u4fdd\u7559\u300d\u51fd\u6578\u5ba3\u544a\u7684\u74b0\u5883\u3002")),(0,i.kt)("h3",{id:"\u4e00\u5b9a\u8981return"},"\u4e00\u5b9a\u8981",(0,i.kt)("inlineCode",{parentName:"h3"},"return"),"?"),(0,i.kt)("p",null,"\u5373\u4f7f displayName \u53ea\u6709\u88ab\u57f7\u884c\u6c92\u6709 return\uff0c\u4e5f\u53ef\u4ee5\u7a31\u4f5c\u9589\u5305\u3002\u4f46\u5982\u679c\u4e0d return\uff0c\u5c31\u7121\u6cd5",(0,i.kt)("strong",{parentName:"p"},"\u4f7f\u7528"),"\u9019\u500b\u9589\u5305\u3002return \u76ee\u7684\u53ea\u662f\u8981\u8b93\u4f5c\u7528\u57df\u5916\u5225\u7684\u51fd\u5f0f\u53ef\u4ee5\u8a2a\u554f\u5230\u9019\u500b displayName \u51fd\u5f0f\uff0c\u56e0\u6b64 return \u8207\u5426\uff0c\u8207\u662f\u5426\u662f\u9589\u5305\u7121\u95dc\u3002"),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/getify/You-Dont-Know-JS"},"You-Dont-Know-JS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"},"MDN/Closures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shubo.io/javascript-closure/"},"[\u6559\u5b78] JavaScript Closure (\u9589\u5305)\u3001\u51fd\u5f0f\u8207\u8a9e\u5f59\u74b0\u5883")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.techbridge.cc/2018/12/08/javascript-closure/"},"\u6240\u6709\u7684\u51fd\u5f0f\u90fd\u662f\u9589\u5305\uff1a\u8ac7 JS \u4e2d\u7684\u4f5c\u7528\u57df\u8207 Closure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10214185"},"Day6 [JavaScript \u57fa\u790e] \u5783\u573e\u56de\u6536\u6a5f\u5236"))))}p.isMDXComponent=!0}}]);