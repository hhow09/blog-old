(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[6273],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=l,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5219:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=t(2122),l=t(9756),r=(t(7294),t(3905)),i=["components"],o={},c={unversionedId:"general/clean-code-note",id:"general/clean-code-note",isDocsHomePage:!1,title:"Clean Code - Object Oriented Design",description:"\u524d\u8a00",source:"@site/docs/general/1-clean-code-note.md",sourceDirName:"general",slug:"/general/clean-code-note",permalink:"/general/clean-code-note",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/general/1-clean-code-note.md",version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JS engine: Optimizing of Object",permalink:"/web-dev/web-js-engine-object-optimization"},next:{title:"Concurrency vs. Parallelism v.s. Coroutine",permalink:"/general/concurrent-vs-parallelism"}},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"Inheritance \u7e7c\u627f",id:"inheritance-\u7e7c\u627f",children:[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",children:[]},{value:"\u512a\u9ede",id:"\u512a\u9ede",children:[]},{value:"\u7f3a\u9ede",id:"\u7f3a\u9ede",children:[]},{value:"\u4f7f\u7528\u7e7c\u627f\u7684\u6642\u6a5f:",id:"\u4f7f\u7528\u7e7c\u627f\u7684\u6642\u6a5f",children:[]}]},{value:"Composition \u8907\u5408",id:"composition-\u8907\u5408",children:[{value:"\u512a\u9ede",id:"\u512a\u9ede-1",children:[]},{value:"\u7f3a\u9ede",id:"\u7f3a\u9ede-1",children:[]},{value:"\u4f7f\u7528\u6642\u6a5f",id:"\u4f7f\u7528\u6642\u6a5f",children:[]}]},{value:"Law of Demeter",id:"law-of-demeter",children:[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9-1",children:[]},{value:"\u5982\u4f55\u4e0d\u9055\u53cd",id:"\u5982\u4f55\u4e0d\u9055\u53cd",children:[]}]},{value:"Inversion of Control (IoC)",id:"inversion-of-control-ioc",children:[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9-2",children:[]},{value:"\u6982\u5ff5\u8209\u4f8b",id:"\u6982\u5ff5\u8209\u4f8b",children:[]}]},{value:"Dependency Injection(DI)",id:"dependency-injectiondi",children:[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9-3",children:[]},{value:"\u76f8\u95dc\u539f\u5247",id:"\u76f8\u95dc\u539f\u5247",children:[]},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[]},{value:"Dependency Injection vs Composition",id:"dependency-injection-vs-composition",children:[]},{value:"Dependency Injection v.s. Functional Programming",id:"dependency-injection-vs-functional-programming",children:[]}]},{value:"\u5be6\u884c Inversion of Control \u7684\u5be6\u969b\u6b65\u9a5f",id:"\u5be6\u884c-inversion-of-control-\u7684\u5be6\u969b\u6b65\u9a5f",children:[]},{value:"Example",id:"example",children:[]},{value:"Reference",id:"reference",children:[]}],s={toc:p};function d(e){var n=e.components,o=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u516c\u53f8\u65b0\u8a13\u8b80 Clean Code \u7d00\u9304\u3002"),(0,r.kt)("h2",{id:"inheritance-\u7e7c\u627f"},"Inheritance \u7e7c\u627f"),(0,r.kt)("h3",{id:"\u5b9a\u7fa9"},"\u5b9a\u7fa9"),(0,r.kt)("p",null,"\u7e7c\u627f\u53ef\u4ee5\u57fa\u65bc\u67d0\u500b\u7236\u985e\u5225\u5c0d\u7269\u4ef6\u7684\u5b9a\u7fa9\u52a0\u4ee5\u64f4\u5145\uff0c\u800c\u5236\u8a02\u51fa\u4e00\u500b\u65b0\u7684\u5b50\u985e\u5225\u5b9a\u7fa9\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b50\u985e\u5225\u53ef\u4ee5\u7e7c\u627f\u7236\u985e\u5225\u539f\u4f86\u7684\u67d0\u4e9b\u5b9a\u7fa9"),(0,r.kt)("li",{parentName:"ul"},"\u5b50\u985e\u5225\u53ef\u4ee5\u589e\u52a0\u539f\u4f86\u7684\u7236\u985e\u5225\u6240\u6c92\u6709\u7684\u5b9a\u7fa9"),(0,r.kt)("li",{parentName:"ul"},"\u5b50\u985e\u5225\u53ef\u4ee5\u91cd\u65b0\u5b9a\u7fa9\u7236\u985e\u5225\u4e2d\u7684\u67d0\u4e9b\u7279\u6027")),(0,r.kt)("h3",{id:"\u512a\u9ede"},"\u512a\u9ede"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b50\u985e\u53ef\u4ee5\u8f15\u9b06\u7684\u64c1\u6709\u7236\u985e\u7684\u65b9\u6cd5\u4f86\u65b9\u4fbf\u5730\u5be6\u73fe\u5c0d\u7236\u985e\u7684\u64f4\u5c55\u3002")),(0,r.kt)("h3",{id:"\u7f3a\u9ede"},"\u7f3a\u9ede"),(0,r.kt)("p",null,"\u7236\u5b50\u4e4b\u9593\u7684\u8026\u5408\u5ea6\u9ad8\uff0c\u5982\u679c\u4fee\u6539\u7236\u985e\u5247\u5b50\u985e\u4e5f\u9700\u8981\u4f5c\u51fa\u76f8\u61c9\u7684\u4fee\u6539\uff0c\u6216\u662f\u70ba\u4e86\u4e0d\u540c\u7a2e\u5b50\u985e\u800c\u589e\u52a0\u7cfb\u7d71\u8907\u96dc\u5ea6\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u7e7c\u627f\u7684\u6642\u6a5f"},"\u4f7f\u7528\u7e7c\u627f\u7684\u6642\u6a5f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://caterpillar.gitbooks.io/javase6tutorial/content/c8_2.html"},"Polymorphism")),(0,r.kt)("li",{parentName:"ul"},"\u5169\u8005\u95dc\u4fc2\u662f X \u662f A \u7684\u4e00\u7a2e\uff0c\u4e26\u4e14 X \u662f\u5ef6\u4f38 A \u800c\u4e0d\u9700\u8981\u53bb\u4fee\u6539 A \u7684\u60c5\u6cc1\uff0c\u6b64\u60c5\u6cc1\u4ee5\u5916\u7684\u5efa\u8b70\u7528 Composition\u3002")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"composition-\u8907\u5408"},"Composition \u8907\u5408"),(0,r.kt)("p",null,"\u5728\u6211\u5011\u5c0d\u73fe\u5be6\u4e2d\u7684\u67d0\u4e9b\u4e8b\u7269\u62bd\u8c61\u6210 Class \u6642\uff0c\u53ef\u80fd\u6703\u5f62\u6210\u5f88\u8907\u96dc\u7684 Class\uff0c\u70ba\u4e86\u66f4\u7c21\u6f54\u7684\u9032\u884c\u958b\u767c\uff0c\u6211\u5011\u7d93\u5e38\u628a\u5176\u4e2d\u76f8\u5c0d\u6bd4\u8f03\u7368\u7acb\u7684\u90e8\u5206\u62ff\u51fa\u4f86\u5b9a\u7fa9\u6210\u4e00\u500b\u500b\u7c21\u55ae\u7684 Class\uff0c\u7531\u9019\u4e9b\u7c21\u55ae\u7684 Class \u518d\u7d44\u6210\u6211\u5011\u60f3\u8981\u7684\u985e\u3002Composition \u6700\u7c21\u55ae\u7684\u505a\u6cd5\u5c31\u662f\u8a2d\u8a08 Class \u7684\u6642\u5019\u628a\u8981\u7d44\u5408\u7684\u5c0d\u8c61\u52a0\u5165\u5230\u81ea\u5df1\u4e4b\u4e2d\u4f5c\u70ba\u81ea\u5df1\u7684 local variable\uff0c\u4e5f\u5c31\u662f has \u7684\u6982\u5ff5\u3002\n\u9019\u6a23\u7684\u7d50\u679c\u5c31\u662f\u88ab\u52a0\u5165\u7684 Class \u548c\u76ee\u524d\u7684 Class \u662f\u4e00\u500b\u4f4e\u8026\u5408\u72c0\u614b\uff0c\u4e0d\u9700\u8981\u56e0\u70ba\u4fee\u6539\u4e00\u500b Class \u800c\u9023\u5e36\u4fee\u6539\u5176\u4ed6\u7684 Class\u3002"),(0,r.kt)("h3",{id:"\u512a\u9ede-1"},"\u512a\u9ede"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u958b\u767c\u7684\u6642\u5019\u5920\u6709\u5f48\u6027\u3002")),(0,r.kt)("h3",{id:"\u7f3a\u9ede-1"},"\u7f3a\u9ede"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bb9\u6613\u7522\u751f\u904e\u591a\u7684 Object\u3002")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u6642\u6a5f"},"\u4f7f\u7528\u6642\u6a5f"),(0,r.kt)("p",null,"\u7576\u6211\u5011\u89ba\u5f97\u7576 A \u6709 X \u80fd\u529b\u7684\u6642\u5019\uff0c\u50cf\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"\u9ce5"),"\u53ef\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"\u98db"),"\uff0c\u5c31\u53ef\u4ee5\u628a fly \u7576\u4f5c\u8b8a\u6578\u52a0\u5165\u9ce5\u7684 Class \u88e1\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"law-of-demeter"},"Law of Demeter"),(0,r.kt)("h3",{id:"\u5b9a\u7fa9-1"},"\u5b9a\u7fa9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c8\u7a31\u4f5c\u201c\u6700\u5c11\u77e5\u8b58\u6cd5\u5247\u201d\u6216\u201cdon\u2019t talk to strangers\u201d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u500b Object \u77e5\u9053\u4e86\u592a\u591a\u4e0d\u5c6c\u65bc\u4ed6\u672c\u8eab\u7684\u5167\u5bb9\uff0c\u5247\u4ee3\u8868\u4ed6\u548c\u5176\u4ed6 Object \u4e4b\u9593\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"\u8026\u5408\u7a0b\u5ea6"),"\u8d8a\u9ad8\uff0c\u5728\u9762\u5c0d\u9700\u8981\u8b8a\u66f4\u7684\u6642\u5019\u96e3\u4ee5\u4fee\u6539\u3002\u76ee\u7684\u662f\u8981\u964d\u4f4e\u7269\u4ef6\u4e4b\u9593\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"\u4f9d\u8cf4\u95dc\u4fc2"),"\u3002",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"a method f of a class C should only call the methods of these:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"C"),(0,r.kt)("li",{parentName:"ul"},"An object held in an instance variable of C."),(0,r.kt)("li",{parentName:"ul"},"An object created by f"),(0,r.kt)("li",{parentName:"ul"},"An object passed as an argument to f"),(0,r.kt)("li",{parentName:"ul"},"global variables")))),(0,r.kt)("li",{parentName:"ul"},"\u8981\u5148\u5340\u5206 Object \u548c Data Structure\uff0cObject \u9019\u7a2e\u4ee5 Method \u70ba\u6838\u5fc3\u7684\uff0c\u624d\u9069\u7528 Law of Demeter\uff0cData structure \u662f\u4ee5\u8cc7\u6599\u70ba\u6838\u5fc3\uff0c\u5b58\u53d6\u8cc7\u6599\u4e26\u4e0d\u6d89\u53ca\u884c\u70ba\uff0c\u4e0d\u9055\u53cd Law of Demeter\u3002")),(0,r.kt)("h3",{id:"\u5982\u4f55\u4e0d\u9055\u53cd"},"\u5982\u4f55\u4e0d\u9055\u53cd"),(0,r.kt)("h4",{id:"example-1---\u907f\u514d-method-chainning"},"Example 1 - \u907f\u514d method chainning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public boolean isValidEmployee(Employee employee) {\n        String primaryEmailAddress = employee.getEmail().getPrimaryEmailAddress();\n        long mobile = employee.getContactNumber().getMobile();\n        if (primaryEmailAddress != null && mobile != 0) {return true;}\n        return false;\n    }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public boolean isValidEmployee(Employee employee) {\n        //\u628a\u6aa2\u67e5\u7684\u8cac\u4efb\u6b78\u5c6c\u653e\u5728employee\u5167\u90e8\n        boolean isValidPrimaryEmailAddress = employee.isValidPrimaryEmailAddress();\n        boolean isValidMobile = employee.isValidMobile();\n        if (isValidPrimaryEmailAddress && isValidMobile) {return true;}\n        return false;\n    }\n")),(0,r.kt)("h4",{id:"example-2---\u53ea\u50b3\u5165\u51fd\u5f0f\u9700\u8981\u77e5\u9053\u7684\u8cc7\u8a0a\u3002"},"Example 2 - \u53ea\u50b3\u5165\u51fd\u5f0f",(0,r.kt)("inlineCode",{parentName:"h4"},"\u9700\u8981\u77e5\u9053"),"\u7684\u8cc7\u8a0a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Game\n{\n    public Board board { get; private set; }\n    public Game()\n    {\n        board = new Board();\n    }\n\n    public void MarkBoard(int space, string marker)\n    {\n        board.spaces[space] = marker; //\u6709\u554f\u984c\n    }\n}\n\npublic class Board\n{\n    public string[] spaces {get; private set;}\n\n    public Board()\n    {\n        spaces = new string[] {"0", "1", "2", "3", "4", "5", "6", "7", "8"};\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Game\n{\n    public Board board { get; private set; }\n\n    public Game()\n    {\n        board = new Board();\n    }\n\n    public MarkBoard(int space, string marker)\n    {\n        board.Mark(space, marker) //\u547c\u53ebboard\u5167\u7684Mark\u5be6\u4f5c\u3002\n    }\n}\n\npublic class Board\n{\n    public string[] spaces {get; private set;}\n\n    public Mark(int space, string marker)\n    {\n        spaces[space] = marker\n    }\n\n    public Board()\n    {\n        spaces = new string[] {"0", "1", "2", "3", "4", "5", "6", "7", "8"};\n    }\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"inversion-of-control-ioc"},"Inversion of Control (IoC)"),(0,r.kt)("h3",{id:"\u5b9a\u7fa9-2"},"\u5b9a\u7fa9"),(0,r.kt)("p",null,"Program \u61c9\u8a72\u8981\u4f9d\u8cf4\u65bc\u62bd\u8c61\u5316\u4ecb\u9762\uff0c\u800c\u4e0d\u662f\u5be6\u4f5c\u7d30\u7bc0\uff0c\u4ecb\u9762\u7684\u529f\u80fd\u61c9\u8a72\u4ee5 Client \u7aef\u7684\u89c0\u9ede\u5b9a\u7fa9\u3002"),(0,r.kt)("h3",{id:"\u6982\u5ff5\u8209\u4f8b"},"\u6982\u5ff5\u8209\u4f8b"),(0,r.kt)("p",null,"\u4eca\u5929\u6709\u96fb\u8166(\u9ad8\u5c64\u6b21)\u548c\u8a18\u61b6\u9ad4(\u4f4e\u5c64\u6b21)\uff0c\u9084\u6c92\u6709\u5be6\u884c IoC \u4e4b\u524d\uff0c\u96fb\u8166\u898f\u683c\u6703",(0,r.kt)("inlineCode",{parentName:"p"},"\u4f9d\u8cf4"),"\u8a18\u61b6\u9ad4\uff0c\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"\u66f4\u6539\u8a18\u61b6\u54c1\u724c"),"\u5247\u6703\u5c0e\u81f4\u554f\u984c\uff0c\u56e0\u70ba\u8a18\u61b6\u9ad4\u7684\u7d30\u7bc0\u898f\u683c\u4e0d\u540c\u3002\nIoC \u7684\u6982\u5ff5\u5c31\u662f\uff0c\u61c9\u8a72\u8981\u6709 Interface \u4f86\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u6b0a\u8f49\u63db\u5230Interface\u4e0a"),"\uff0c\u4e5f\u5c31\u662f\u540d\u7a31\u4e2d Inversion \u7684\u610f\u601d\uff0c\u96fb\u8166\u548c Interface \u901a\u5e38\u662f bundle \u5728\u4e00\u8d77\u7684\uff0c\u5be6\u884c\u5f8c\u60c5\u6cc1\u8b8a\u6210\u662f\uff0c\u96fb\u8166\u4f9d\u8cf4 Interface\uff0c\u8a18\u61b6\u9ad4\u4e5f\u4f9d\u8cf4 Interface \uff0c\u4e5f\u5c31\u662f\u63a7\u5236\u53cd\u8f49\u4e86\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dependency-injectiondi"},"Dependency Injection(DI)"),(0,r.kt)("h3",{id:"\u5b9a\u7fa9-3"},"\u5b9a\u7fa9"),(0,r.kt)("p",null,"\u50b3\u7d71\u7522\u751f\u7269\u4ef6\u6642\uff0c\u7269\u4ef6\u6703\u81ea\u5df1\u7522\u751f\u81ea\u5df1\u9700\u8981\u7684 dependency\u3002\n\u800c DI \u5247\u662f\u7522\u751f\u7269\u4ef6\u6642\uff0c\u6b64\u7269\u4ef6\u9700\u8981\u7684 dependency \u9700\u7531 Client \u7aef\u63d0\u4f9b\uff0c\u50cf\u662f\u6ce8\u5165\u4e00\u6a23\u3002"),(0,r.kt)("h3",{id:"\u76f8\u95dc\u539f\u5247"},"\u76f8\u95dc\u539f\u5247"),(0,r.kt)("p",null,"\u884d\u751f\u81ea\u76f8\u95dc\u539f\u5247\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S.O.L.I.D. Principle \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Dependency Inversion principle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Inversion of Control\uff08IoC)"))),(0,r.kt)("h3",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Object Composition"),(0,r.kt)("li",{parentName:"ul"},"Object Lifetime Management"),(0,r.kt)("li",{parentName:"ul"},"Object Interception(Cross-Cutting-Concern)")),(0,r.kt)("h3",{id:"dependency-injection-vs-composition"},"Dependency Injection vs Composition"),(0,r.kt)("p",null,"\u5169\u7a2e\u90fd\u662f\u628a\u5225\u7684 Object \u52a0\u5165\u81ea\u5df1\u7684 local variable \u4e2d\uff0c\u5dee\u7570\u5728\u54ea\uff1f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//Dependency Injection\nclass Employee {\n    private Address address;\n\n    public Employee( Address newAddress //\u6ce8\u5165 ) {\n        this.address = newAddress; // \u5dee\u7570\u9ede\n    }\n\n    public Address getAddress() {\n    return this.address;\n    }\n    public void setAddress( Address newAddress //\u6ce8\u5165 ) {\n        this.address = newAddress;\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//Composition\nfinal class Car {\n  private final Engine engine;\n\n  Car(EngineSpecs specs) {\n    engine = new Engine(specs);\n  }\n\n  void move() {\n    engine.work();\n  }\n}\n")),(0,r.kt)("p",null,"Dependency Injection: ",(0,r.kt)("inlineCode",{parentName:"p"},"Address")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee")," \u5f7c\u6b64\u7368\u7acb\u5b58\u5728\uff0c\u76f8\u4e92\u4f9d\u8cf4\u3002\nComposition: The ",(0,r.kt)("inlineCode",{parentName:"p"},"Engine")," \u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Car")," \u7576\u4e2d\u3002"),(0,r.kt)("h3",{id:"dependency-injection-vs-functional-programming"},"Dependency Injection v.s. Functional Programming"),(0,r.kt)("p",null,"\u53c3\u8003: ",(0,r.kt)("a",{parentName:"p",href:"https://blog.ploeh.dk/2017/02/02/dependency-rejection/"},"Dependency rejection by Mark Seemann")),(0,r.kt)("h4",{id:"di-\u8ddf-fp-\u7684\u5dee\u7570\u9ede\u5728\u54ea\u88e1\uff1f"},"DI \u8ddf FP \u7684\u5dee\u7570\u9ede\u5728\u54ea\u88e1\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OO \u8ddf FP \u7684\u6982\u5ff5\u5176\u5be6\u662f\u6839\u672c\u4e0a\u4e0d\u540c\uff0cFP \u5e0c\u671b function \u662f pure \u7684\uff0c\u4f46 Dependecy \u5728 FP \u7684\u89d2\u5ea6\u57fa\u672c\u4e0a\u662f impure\uff0c\u6240\u4ee5 Pure function \u4e0d\u80fd\u547c\u53eb impure function\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f46\u662f impure function \u53ef\u4ee5\u547c\u53eb pure function")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u5be6\u884c-inversion-of-control-\u7684\u5be6\u969b\u6b65\u9a5f"},"\u5be6\u884c Inversion of Control \u7684\u5be6\u969b\u6b65\u9a5f"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IoC Steps",src:t(7071).Z,title:"IoC Steps"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Tightly coupled classes"),(0,r.kt)("li",{parentName:"ol"},"Implement IoC using factory pattern"),(0,r.kt)("li",{parentName:"ol"},"Implement DIP by creating abstraction"),(0,r.kt)("li",{parentName:"ol"},"Implement Dependency Injection"),(0,r.kt)("li",{parentName:"ol"},"DI container"),(0,r.kt)("li",{parentName:"ol"},"Loosely coupled classes")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Tightly coupled classes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nclass Computer {\n\n    // \u4f9d\u8cf4\u65bc\u4f4e\u968e\u6a21\u7d44\uff1a\u300e\u5177\u9ad4\u300f\u7684\u82f1\u96c4\u806f\u76df\uff0c\u800c\u975e \u300e\u62bd\u8c61\u300f\u7684\u904a\u6232\n    private LOL lol;\n\n    public Computer() {\n        lol = new LOL();\n    }\n\n    public Computer(LOL lol) {\n        this.lol = lol;\n    }\n\n    public void playGame() {\n        if (lol != null)\n            lol.play();\n    }\n}\n\nclass LOL {\n    public void play() {\n        System.out.print("LOL");\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Implement IoC using factory pattern")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nclass Computer {\n    public void playLOL() {\n        LOL lol = new LOL();\n        lol.play();\n    }\n    public void playWarcraft() {\n        Warcraft warcraft = new Warcraft();\n        lol.play();\n    }\n}\n\nclass LOL {\n    public void play() {\n        System.out.print("LOL");\n    }\n}\nclass Warcraft {\n    public void play() {\n        System.out.print("Warcraft");\n    }\n}\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Implement Dependency Injection")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class Main {\n    public static void main(String[] args) {\n        GameFactory factory = new ImplGameFactory();\n        Game game = factory.createGame();\n        Computer computer = new Computer(game);\n    }\n}\n\nclass Computer {\n    private Game game;\n    // Constructor Injection\n    public Computer(Game game) {\n        this.game = game;\n    }\n    ...\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clean Code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@BobGuBobGu/the-law-of-demeter-ec5b7362ce87"},"The Law of Demeter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zxuanhong.medium.com/dependency-injection%E6%98%AF%E4%BB%80%E9%BA%BC-ae83f7f87d6d"},"Dependency Injection \u662f\u4ec0\u9ebc\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/21022012/difference-between-dependency-and-composition"},"Difference between dependency and composition?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.ploeh.dk/2017/02/02/dependency-rejection/"},"Dependency rejection by Mark Seemann")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://notfalse.net/3/ioc-di"},"\u63a7\u5236\u53cd\u8f49 (IoC) \u8207 \u4f9d\u8cf4\u6ce8\u5165 (DI)"))))}d.isMDXComponent=!0},7071:function(e,n,t){"use strict";n.Z=t.p+"assets/images/ioc-step-177c9a4040213ebb7a303b19859db12f.png"}}]);