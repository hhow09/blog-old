(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[2151],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5864:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],l={},s={unversionedId:"system/transaction-phenomena",id:"system/transaction-phenomena",isDocsHomePage:!1,title:"Transaction Phenomenas",description:"Intro",source:"@site/docs/system/4-transaction-phenomena.md",sourceDirName:"system",slug:"/system/transaction-phenomena",permalink:"/system/transaction-phenomena",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/system/4-transaction-phenomena.md",version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The RUM Conjecture",permalink:"/system/db-rum"},next:{title:"Lighthouse Performance / Frontend Performance",permalink:"/web-dev/web-lighthouse-performance"}},u=[{value:"Intro",id:"intro",children:[]},{value:"Isolation Level v.s. Read Phenomena",id:"isolation-level-vs-read-phenomena",children:[]},{value:"Dirty Read",id:"dirty-read",children:[{value:"Example",id:"example",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Dirty Write",id:"dirty-write",children:[{value:"Example",id:"example-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Nonrepeatable Read",id:"nonrepeatable-read",children:[{value:"Example",id:"example-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Lost Update",id:"lost-update",children:[{value:"Example",id:"example-3",children:[]},{value:"More Examples",id:"more-examples",children:[]},{value:"Solution",id:"solution-3",children:[]},{value:"Lost Update v.s. Dirty Write",id:"lost-update-vs-dirty-write",children:[]}]},{value:"Write Skew",id:"write-skew",children:[]},{value:"Phantom",id:"phantom",children:[]},{value:"Ref",id:"ref",children:[]}],c={toc:u};function p(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"transaction refers to RMDBS transaction.")),(0,r.kt)("h2",{id:"isolation-level-vs-read-phenomena"},"Isolation Level v.s. Read Phenomena"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7807).Z})),(0,r.kt)("h2",{id:"dirty-read"},"Dirty Read"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2 concurrent transaction on same object: T1 for update , T2 read."),(0,r.kt)("li",{parentName:"ul"},"T2 could read the uncommited value of T1"),(0,r.kt)("li",{parentName:"ul"},"this happens in ",(0,r.kt)("inlineCode",{parentName:"li"},"READ UNCOMMITTED"))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8245).Z})),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use ",(0,r.kt)("strong",{parentName:"li"},"Read Committed")," isolation level.")),(0,r.kt)("h2",{id:"dirty-write"},"Dirty Write"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2 concurrent transaction on same object: T1 update , T2 update."),(0,r.kt)("li",{parentName:"ul"},"before T1 commit, the modification of T1 is overwritten by T2."),(0,r.kt)("li",{parentName:"ul"},"this happens in ",(0,r.kt)("inlineCode",{parentName:"li"},"READ UNCOMMITTED"))),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6062).Z})),(0,r.kt)("h3",{id:"solution-1"},"Solution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use ",(0,r.kt)("strong",{parentName:"li"},"Read Committed")," isolation level.")),(0,r.kt)("h2",{id:"nonrepeatable-read"},"Nonrepeatable Read"),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6739).Z})),(0,r.kt)("h3",{id:"solution-2"},"Solution"),(0,r.kt)("p",null,"use ",(0,r.kt)("strong",{parentName:"p"},"Repetable Read")," isolation level: each transaction reads from a consistent snapshot of the database-that is, the transaction sees all the data that was committed in the database at the start of the transaction."),(0,r.kt)("h2",{id:"lost-update"},"Lost Update"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2 concurrent transaction on same object: T1 update , T2 update."),(0,r.kt)("li",{parentName:"ul"},"this happens in ",(0,r.kt)("inlineCode",{parentName:"li"},"READ COMMITTED"))),(0,r.kt)("h3",{id:"example-3"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5222).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bob's Commit is Lost")),(0,r.kt)("h3",{id:"more-examples"},"More Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Incrementing a counter or updating an account balance (requires reading the current value, calculating the new value, and writing back the updated value)"),(0,r.kt)("li",{parentName:"ul"},"Making a local change to a complex value, e.g., adding an element to a list within a JSON document (requires parsing the document, making the change, and writ\u2010 ing back the modified document)"),(0,r.kt)("li",{parentName:"ul"},"Two users editing a wiki page at the same time, where each user saves their changes by sending the entire page contents to the server, overwriting whatever is currently in the database")),(0,r.kt)("h3",{id:"solution-3"},"Solution"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Incorrect!!: (change to ",(0,r.kt)("inlineCode",{parentName:"li"},"REPEATABLE READ")," isolation level)"),(0,r.kt)("li",{parentName:"ol"},"Use Atomic Operations ",(0,r.kt)("inlineCode",{parentName:"li"},"UPDATE inventory SET quantity = quantity - 4 WHERE item = A;")),(0,r.kt)("li",{parentName:"ol"},"Use pessimistic locking (",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT \u2026 FOR UPDATE"),")"),(0,r.kt)("li",{parentName:"ol"},"Using optimistic locking (version or timestamp based)")),(0,r.kt)("h3",{id:"lost-update-vs-dirty-write"},"Lost Update v.s. Dirty Write"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dirty Write can be prevented in RC level"),(0,r.kt)("li",{parentName:"ul"},"Lost Update still happens in RR level")),(0,r.kt)("h2",{id:"write-skew"},"Write Skew"),(0,r.kt)("h2",{id:"phantom"},"Phantom"),(0,r.kt)("h2",{id:"ref"},"Ref"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://xianmu.github.io/posts/2019-01-19-transaction-phenomena.html"},"transaction phenomena")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.zghurskyi.com/lost-update/"},"Lost Update Phenomena")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@chester.yw.chu/%E5%B0%8D%E6%96%BC-mysql-repeatable-read-isolation-%E5%B8%B8%E8%A6%8B%E7%9A%84%E4%B8%89%E5%80%8B%E8%AA%A4%E8%A7%A3-7a9afbac65af"},"\u5c0d\u65bc MySQL Repeatable Read Isolation \u5e38\u898b\u7684\u4e09\u500b\u8aa4\u89e3"))))}p.isMDXComponent=!0},8245:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dirty_read-a3e1c996a20772d58653b413ed9b156c.png"},6062:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dirty_write-9941b8cb46f2938d70f2b9fd813d77f2.png"},7807:function(e,t,n){"use strict";t.Z=n.p+"assets/images/isolation-level-read-phenomena-933b4cc04009c02b08d4cdbbd495dd87.png"},5222:function(e,t,n){"use strict";t.Z=n.p+"assets/images/lost_update-af907bd8e58d2e8e52184aaaf84ff2f1.png"},6739:function(e,t,n){"use strict";t.Z=n.p+"assets/images/nonrepeatable_read-300bf57afec9c994b946ed73bbcfcc4e.png"}}]);