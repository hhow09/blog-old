(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[6034],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?i.createElement(k,r(r({ref:t},d),{},{components:n})):i.createElement(k,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2845:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var i=n(2122),a=n(9756),l=(n(7294),n(3905)),r=["components"],o={},s={unversionedId:"data-structure/skip-list",id:"data-structure/skip-list",isDocsHomePage:!1,title:"Skip List",description:"What is Skip List?",source:"@site/docs/data-structure/1-skip-list.md",sourceDirName:"data-structure",slug:"/data-structure/skip-list",permalink:"/data-structure/skip-list",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/data-structure/1-skip-list.md",version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Index",permalink:"/"},next:{title:"Union Find",permalink:"/algorithm/union-find"}},p=[{value:"What is Skip List?",id:"what-is-skip-list",children:[]},{value:"Data Structure",id:"data-structure",children:[]},{value:"Search",id:"search",children:[{value:"The search path for the node containing 4.",id:"the-search-path-for-the-node-containing-4",children:[]},{value:"Search Algorithm",id:"search-algorithm",children:[]}]},{value:"Add",id:"add",children:[{value:"Adding an element to a skip list",id:"adding-an-element-to-a-skip-list",children:[]}]},{value:"Random Access O(log(n))",id:"random-access-ologn",children:[]},{value:"Performance",id:"performance",children:[]},{value:"Indexable skiplist",id:"indexable-skiplist",children:[]},{value:"Balanced Tree v.s. Skip List",id:"balanced-tree-vs-skip-list",children:[]},{value:"Application",id:"application",children:[{value:"Skip list in Redis",id:"skip-list-in-redis",children:[]},{value:"Skip list in Lucene",id:"skip-list-in-lucene",children:[]}]},{value:"Reference",id:"reference",children:[]}],d={toc:p};function u(e){var t=e.components,o=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"what-is-skip-list"},"What is Skip List?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A skip list is a ",(0,l.kt)("inlineCode",{parentName:"li"},"probabilistic")," data structure."),(0,l.kt)("li",{parentName:"ul"},"A skip list takes ",(0,l.kt)("inlineCode",{parentName:"li"},"O(log(n))")," time to ",(0,l.kt)("inlineCode",{parentName:"li"},"add"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"erase")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"search"),", which is not possible in ",(0,l.kt)("inlineCode",{parentName:"li"},"array")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"linked list")),(0,l.kt)("li",{parentName:"ul"},"A skip list is ",(0,l.kt)("strong",{parentName:"li"},"indexable")," to make ",(0,l.kt)("strong",{parentName:"li"},"random access")," ",(0,l.kt)("inlineCode",{parentName:"li"},"take O(log n)")," time."),(0,l.kt)("li",{parentName:"ul"},"A skip list has the same function and performance comparing with ",(0,l.kt)("inlineCode",{parentName:"li"},"treap")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"red-black tree"),"."),(0,l.kt)("li",{parentName:"ul"},"That the skip list can be interpreted as a type of ",(0,l.kt)("inlineCode",{parentName:"li"},"randomly balanced tree"))),(0,l.kt)("h2",{id:"data-structure"},"Data Structure"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"skip list structure",src:n(8314).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a node: contains",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"value ",(0,l.kt)("inlineCode",{parentName:"li"},"val")),(0,l.kt)("li",{parentName:"ul"},"height ",(0,l.kt)("inlineCode",{parentName:"li"},"h")),(0,l.kt)("li",{parentName:"ul"},"a list of pointers ",(0,l.kt)("inlineCode",{parentName:"li"},"node[] next")," from level 0 to level h."),(0,l.kt)("li",{parentName:"ul"},"The next","[i]"," representing the pointer of level ",(0,l.kt)("inlineCode",{parentName:"li"},"i")," which points to the next node of same level i."))),(0,l.kt)("li",{parentName:"ul"},"listHeight: The height of a skip list is the height of its tallest node."),(0,l.kt)("li",{parentName:"ul"},"MaxHeight: A constant that limit the height of skip list."),(0,l.kt)("li",{parentName:"ul"},"sentinel: the dummy head node of list of every level.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"usually initialize with value of ",(0,l.kt)("inlineCode",{parentName:"li"},"Number.MIN_SAFE_INTEGER"),", h of ",(0,l.kt)("inlineCode",{parentName:"li"},"MaxHeight-1")),(0,l.kt)("li",{parentName:"ul"},"Every search starts from sentinel."))),(0,l.kt)("li",{parentName:"ul"},"probability ",(0,l.kt)("inlineCode",{parentName:"li"},"p"),": If a node contains level from 0 to i, ",(0,l.kt)("strong",{parentName:"li"},"the probability that it has ",(0,l.kt)("inlineCode",{parentName:"strong"},"i+1")," level."))),(0,l.kt)("h2",{id:"search"},"Search"),(0,l.kt)("h3",{id:"the-search-path-for-the-node-containing-4"},"The search path for the node containing 4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"skiplist-searchpath",src:n(6008).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The higher the level, the sparser the list."),(0,l.kt)("li",{parentName:"ul"},"Search starts from high level to low level."),(0,l.kt)("li",{parentName:"ul"},"Some nodes are skipped during search, resulting in the similarity to ",(0,l.kt)("inlineCode",{parentName:"li"},"binary search"),".")),(0,l.kt)("h3",{id:"search-algorithm"},"Search Algorithm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"    // find the predecessor\n    private Node findPred(int num) {\n        Node cur = sentinel;\n        for (int r = topLevel; r >= 0; r--) {\n            while (cur.next[r] != null && cur.next[r].val < num)  cur = cur.next[r];\n            stack[r] = cur;\n        }\n        return cur;\n    }\n\n    public boolean search(int target) {\n        Node pred = findPred(target);\n        return pred.next[0] != null && pred.next[0].val == target;\n    }\n")),(0,l.kt)("h2",{id:"add"},"Add"),(0,l.kt)("h3",{id:"adding-an-element-to-a-skip-list"},"Adding an element to a skip list"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Adding an element to a skip list",src:n(4394).Z})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"    private int pickHeight() {\n        return Math.floor(Math.random() * MAX_HEIGHT);\n    }\n    public void add(int num) {\n        Node pred = findPred(num);\n        if (pred.next[0] != null && pred.next[0].val == num) {\n            pred.next[0].count++;\n            return;\n        }\n        Node newNode = new Node(num, pickHeight());\n        while (topLevel < newNode.h) stack[++topLevel] = sentinel;\n        for (int i = 0; i <= newNode.h; i++) {\n            //connect all prev and next nodes of level 0 - newNode.h\n            newNode.next[i] = stack[i].next[i];\n            stack[i].next[i] = newNode;\n        }\n    }\n")),(0,l.kt)("h2",{id:"random-access-ologn"},"Random Access O(log(n))"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"   1                               10\n o---\x3e o---------------------------------------------------------\x3e o    Top level\n   1           3              2                    5\n o---\x3e o---------------\x3e o---------\x3e o---------------------------\x3e o    Level 3\n   1        2        1        2              3              2\n o---\x3e o---------\x3e o---\x3e o---------\x3e o---------------\x3e o---------\x3e o    Level 2\n   1     1     1     1     1     1     1     1     1     1     1\n o---\x3e o---\x3e o---\x3e o---\x3e o---\x3e o---\x3e o---\x3e o---\x3e o---\x3e o---\x3e o---\x3e o    Bottom level\nHead  1st   2nd   3rd   4th   5th   6th   7th   8th   9th   10th  NIL\n      Node  Node  Node  Node  Node  Node  Node  Node  Node  Node\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"we can store the length of list (bottom level)"),(0,l.kt)("li",{parentName:"ul"},"For example, to find ",(0,l.kt)("strong",{parentName:"li"},"5th node"),", the path will be.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Traverse from top level list, but moving to next node costs 10 more steps, which is too much."),(0,l.kt)("li",{parentName:"ul"},"Therefore, drop one level to level 3 and move next to 4th node."),(0,l.kt)("li",{parentName:"ul"},"drop one level to level 2."),(0,l.kt)("li",{parentName:"ul"},"drop one level to bottom level."),(0,l.kt)("li",{parentName:"ul"},"move next to 5th node.")))),(0,l.kt)("h2",{id:"performance"},"Performance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A skip list of ",(0,l.kt)("inlineCode",{parentName:"li"},"n")," nodes and probability ",(0,l.kt)("inlineCode",{parentName:"li"},"p"),"."),(0,l.kt)("li",{parentName:"ul"},"Node number of level i is ",(0,l.kt)("inlineCode",{parentName:"li"},"n * p^(i-1)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"first level: ",(0,l.kt)("inlineCode",{parentName:"li"},"n")),(0,l.kt)("li",{parentName:"ul"},"second level: ",(0,l.kt)("inlineCode",{parentName:"li"},"n * p")),(0,l.kt)("li",{parentName:"ul"},"third level: ",(0,l.kt)("inlineCode",{parentName:"li"},"n * p^2")))),(0,l.kt)("li",{parentName:"ul"},"average search length is the order of ",(0,l.kt)("inlineCode",{parentName:"li"},"log(n)"))),(0,l.kt)("h2",{id:"indexable-skiplist"},"Indexable skiplist"),(0,l.kt)("h2",{id:"balanced-tree-vs-skip-list"},"Balanced Tree v.s. Skip List"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Concurrent programming"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"when the ",(0,l.kt)("strong",{parentName:"li"},"tree")," is modified it often needs to ",(0,l.kt)("strong",{parentName:"li"},"re-balance"),", affecting large portions of the tree. Then it will require a mutex lock on many of the tree nodes."),(0,l.kt)("li",{parentName:"ul"},"Inserting a node into a skip list is far more localized, ",(0,l.kt)("strong",{parentName:"li"},"only nodes directly linked to the affected node need to be locked"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/260277"},"Skip List vs. Binary Search Tree")))),(0,l.kt)("h2",{id:"application"},"Application"),(0,l.kt)("h3",{id:"skip-list-in-redis"},"Skip list in Redis"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://zhangtielei.com/posts/blog-redis-skiplist.html"},"Redis \u5185\u90e8\u6570\u636e\u7ed3\u6784\u8be6\u89e3(6)\u2014\u2014skiplist"))),(0,l.kt)("h3",{id:"skip-list-in-lucene"},"Skip list in Lucene"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/43203339"},"How does lucene index documents?")),(0,l.kt)("li",{parentName:"ul"},"In a nutshell, Lucene builds an ",(0,l.kt)("strong",{parentName:"li"},"inverted index")," using ",(0,l.kt)("strong",{parentName:"li"},"Skip-Lists")," on disk, and then loads a mapping for the indexed terms into memory using a ",(0,l.kt)("strong",{parentName:"li"},"Finite State Transducer (FST)"),".")),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/design-skiplist/"},"Leetcode 1206. Design Skiplist")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://opendatastructures.org/newhtml/ods/latex/skiplists.html#tex2htm-54"},"Open Data Structure 4\u2003Skiplists")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://zhangtielei.com/posts/blog-redis-skiplist.html"},"Redis \u5185\u90e8\u6570\u636e\u7ed3\u6784\u8be6\u89e3(6)\u2014\u2014skiplist"))))}u.isMDXComponent=!0},4394:function(e,t,n){"use strict";t.Z=n.p+"assets/images/skiplist-addix-2231678ad287c87b467af7ad11a5161a.svg"},6008:function(e,t,n){"use strict";t.Z=n.p+"assets/images/skiplist-searchpath-d92212038de713b084258f357cd750f8.svg"},8314:function(e,t,n){"use strict";t.Z=n.p+"assets/images/skiplist-35daec5372180815bf80d1c02dff04d6.svg"}}]);