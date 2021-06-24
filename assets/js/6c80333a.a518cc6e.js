(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[2914],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=i,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||r;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4807:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return h}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),l=["components"],o={},c={unversionedId:"system/distributed-cache",id:"system/distributed-cache",isDocsHomePage:!1,title:"Distributed Cache",description:"The content is mainly based on System Design Interview - Distributed Cache.",source:"@site/docs/system/2-distributed-cache.md",sourceDirName:"system",slug:"/system/distributed-cache",permalink:"/system/distributed-cache",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/system/2-distributed-cache.md",version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C.A.P Theorem",permalink:"/system/cap"},next:{title:"Lighthouse Performance",permalink:"/web-dev/web-lighthouse-performance"}},s=[{value:"Requirements",id:"requirements",children:[{value:"Functional",id:"functional",children:[]},{value:"Non-functional",id:"non-functional",children:[]}]},{value:"LRU Cache",id:"lru-cache",children:[]},{value:"Distributed",id:"distributed",children:[{value:"Dedicated cache cluster",id:"dedicated-cache-cluster",children:[]},{value:"co-located cache",id:"co-located-cache",children:[]}]},{value:"Hash",id:"hash",children:[{value:"MOD hashing",id:"mod-hashing",children:[]},{value:"consistent Hashing",id:"consistent-hashing",children:[]}]},{value:"Cache Client",id:"cache-client",children:[{value:"Static server list",id:"static-server-list",children:[]},{value:"Dynamic server list",id:"dynamic-server-list",children:[]}]},{value:"Data replication",id:"data-replication",children:[]},{value:"What Else Important",id:"what-else-important",children:[{value:"Potential Inconsistency",id:"potential-inconsistency",children:[]},{value:"data expiration",id:"data-expiration",children:[]},{value:"local cache",id:"local-cache",children:[]},{value:"security",id:"security",children:[]},{value:"monitoring and logging",id:"monitoring-and-logging",children:[]}]},{value:"Summary",id:"summary",children:[]},{value:"Reference",id:"reference",children:[]}],u={toc:s};function h(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The content is mainly based on ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/iuqZvajTOyA"},"System Design Interview - Distributed Cache"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("h3",{id:"functional"},"Functional"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"put"),(0,r.kt)("li",{parentName:"ul"},"get")),(0,r.kt)("h3",{id:"non-functional"},"Non-functional"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"performance"),(0,r.kt)("li",{parentName:"ul"},"scalability"),(0,r.kt)("li",{parentName:"ul"},"availability"),(0,r.kt)("li",{parentName:"ul"},"durability")),(0,r.kt)("h2",{id:"lru-cache"},"LRU Cache"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cache policy is important because ",(0,r.kt)("strong",{parentName:"li"},"if the target data always not in the cache, it only increase overhead"),"."),(0,r.kt)("li",{parentName:"ul"},"most popular cache replacement policies: ",(0,r.kt)("strong",{parentName:"li"},"Discards the least recently used items first")," (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"LRU cache"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/lru-cache/"},"Leetcode 146. LRU Cache"))),(0,r.kt)("h2",{id:"distributed"},"Distributed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cache host only store chunk of data, i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"shard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cache-client"},"cache client")," library inside the service knows about all shards and forward request to a particular shard with ",(0,r.kt)("inlineCode",{parentName:"li"},"TCP")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"UDP"),".")),(0,r.kt)("h3",{id:"dedicated-cache-cluster"},"Dedicated cache cluster"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cache host is ",(0,r.kt)("strong",{parentName:"p"},"isolated")," from service host.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pros: cache host can be used by multiple services.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pros: flexibility in choosing hardware."))),(0,r.kt)("h3",{id:"co-located-cache"},"co-located cache"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"we run cache as a ",(0,r.kt)("strong",{parentName:"p"},"separate process on a host"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pros: no extra hardware or operational cost")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pros: scale together with service."))),(0,r.kt)("h2",{id:"hash"},"Hash"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"How do cache client decide which cache shard to call?")),(0,r.kt)("h3",{id:"mod-hashing"},"MOD hashing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HashHostIdx = HashFunction(key) % NumberOfCacheHosts\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"usually not feasible for production."),(0,r.kt)("li",{parentName:"ul"},"Cons: When cache host ",(0,r.kt)("inlineCode",{parentName:"li"},"add")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"deleted"),", high probability of cache misses because ",(0,r.kt)("strong",{parentName:"li"},"all nodes are affected"),".")),(0,r.kt)("h3",{id:"consistent-hashing"},"consistent Hashing"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6343).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pros: When cache host ",(0,r.kt)("inlineCode",{parentName:"li"},"add")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"deleted"),", only small subset (neighbors) of nodes are affected.")),(0,r.kt)("h4",{id:"domino-effect"},"Domino Effect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"when one node dies the load may transferred to another node"),(0,r.kt)("li",{parentName:"ul"},"then cause another dies as well, causing chain reaction.")),(0,r.kt)("h4",{id:"uneven-distribution"},"Uneven Distribution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can solve with ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Nodes"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Jump Hash"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Proportional Hashing"))),(0,r.kt)("h5",{id:"virtual-nodes"},"Virtual NOdes"),(0,r.kt)("p",null,"instead of positioning a single spot per node on ring, we can position ",(0,r.kt)("strong",{parentName:"p"},"more than one spot per node"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"cache-client"},"Cache Client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is: a ",(0,r.kt)("inlineCode",{parentName:"li"},"library")),(0,r.kt)("li",{parentName:"ul"},"stores: list of cache hosts in sorted order."),(0,r.kt)("li",{parentName:"ul"},"responsible for: cache host selection (can use ",(0,r.kt)("strong",{parentName:"li"},"binary search"),").")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"How do we maintain the list of cache client ?")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5124).Z})),(0,r.kt)("h3",{id:"static-server-list"},"Static server list"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"store as a file"),(0,r.kt)("li",{parentName:"ul"},"Cons: ",(0,r.kt)("inlineCode",{parentName:"li"},"not flexible"),", need to re-deploy when hosts change manually.")),(0,r.kt)("h3",{id:"dynamic-server-list"},"Dynamic server list"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use configuration service (e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/"},"ZooKeeper"),", ",(0,r.kt)("a",{parentName:"li",href:"https://redis.io/topics/sentinel"},"Redis Sentinel"),")"),(0,r.kt)("li",{parentName:"ul"},"cache host sends heartbeat to the config service periodically."),(0,r.kt)("li",{parentName:"ul"},"Pros: fully automate list maintenance")),(0,r.kt)("h2",{id:"data-replication"},"Data replication"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"How to achieve high availability in high QPS (hot shard)? Data replication")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"we discuss ",(0,r.kt)("inlineCode",{parentName:"li"},"async")," ",(0,r.kt)("inlineCode",{parentName:"li"},"leader-follower")," data replication here."),(0,r.kt)("li",{parentName:"ul"},"structure and implementation are based on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hhow09/ddia-notes/tree/master/Ch5-Replication#leaders-and-followers"},"DDIA CH5: Replication - Leaders and Followers")),(0,r.kt)("li",{parentName:"ul"},"Put: only through leader"),(0,r.kt)("li",{parentName:"ul"},"Get: can through leader and follower"),(0,r.kt)("li",{parentName:"ul"},"Failover: can be implemented by ",(0,r.kt)("inlineCode",{parentName:"li"},"Cache Client"))),(0,r.kt)("h2",{id:"what-else-important"},"What Else Important"),(0,r.kt)("h3",{id:"potential-inconsistency"},"Potential Inconsistency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"when partition appears, may get stale result from follower."),(0,r.kt)("li",{parentName:"ul"},"when some cache nodes are down, some cache shards are not available."),(0,r.kt)("li",{parentName:"ul"},"Discussion: tradeoff between sync and async replication.")),(0,r.kt)("h3",{id:"data-expiration"},"data expiration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"passively")," expire cache on get request"),(0,r.kt)("li",{parentName:"ol"},"maintenance thread runs regularly")),(0,r.kt)("h3",{id:"local-cache"},"local cache"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can implemented local cache as well"),(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://www.baeldung.com/guava-cache"},"Guava Cache"))),(0,r.kt)("h3",{id:"security"},"security"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ensure only the approved client can access the cache"),(0,r.kt)("li",{parentName:"ul"},"may encrypt and decrypt cache when put and get cache.")),(0,r.kt)("h3",{id:"monitoring-and-logging"},"monitoring and logging"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"number of faults while calling the cache"),(0,r.kt)("li",{parentName:"ul"},"latency"),(0,r.kt)("li",{parentName:"ul"},"number of hits and misses"),(0,r.kt)("li",{parentName:"ul"},"CPU and memory utilization on cache hosts"),(0,r.kt)("li",{parentName:"ul"},"network I/O")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4938).Z})),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/iuqZvajTOyA"},"System Design Interview - Distributed Cache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/reorx/8470123"},"consistent hashing in Python")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@chyeh/consistent-hashing-algorithm-%E6%87%89%E7%94%A8%E6%83%85%E5%A2%83-%E5%8E%9F%E7%90%86%E8%88%87%E5%AF%A6%E4%BD%9C%E7%AF%84%E4%BE%8B-41fd16ad334a"},"Consistent Hashing Algorithm: \u61c9\u7528\u60c5\u5883\u3001\u539f\u7406\u8207\u5be6\u4f5c\u7bc4\u4f8b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.slideshare.net/frodriguezolivera/nosql-essentials-cassandra-15625311"},"NoSQL Essentials: Cassandra"))))}h.isMDXComponent=!0},5124:function(e,t,a){"use strict";t.Z=a.p+"assets/images/cache-client-list-maintain-69406c4e99438d1e750aae740b306bb1.png"},6343:function(e,t,a){"use strict";t.Z=a.p+"assets/images/consistent-hash-61f3e2265e86cac122dc414d522be0c1.png"},4938:function(e,t,a){"use strict";t.Z=a.p+"assets/images/distributed-cache-structure-911c1cb423133de8a7e915317cb7166d.png"}}]);