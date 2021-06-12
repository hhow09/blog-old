(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[1187],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},145:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=["components"],o={},s={unversionedId:"programming/concurrent-vs-parallelism",id:"programming/concurrent-vs-parallelism",isDocsHomePage:!1,title:"Concurrency vs. Parallelism v.s. Coroutine",description:"Intro",source:"@site/docs/programming/2-concurrent-vs-parallelism.md",sourceDirName:"programming",slug:"/programming/concurrent-vs-parallelism",permalink:"/programming/concurrent-vs-parallelism",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/programming/2-concurrent-vs-parallelism.md",version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Clean Code - Object Oriented Design",permalink:"/programming/clean-code-note"},next:{title:"Props Drilling and State Management",permalink:"/react/react-prop-drilling"}},u=[{value:"Intro",id:"intro",children:[]},{value:"Multi Threading",id:"multi-threading",children:[{value:"Benefits of Multi Threading",id:"benefits-of-multi-threading",children:[]}]},{value:"1. Concurrency (Multi threading)",id:"1-concurrency-multi-threading",children:[{value:"Applications",id:"applications",children:[]}]},{value:"2. Parallel Execution",id:"2-parallel-execution",children:[]},{value:"3. Parallel Concurrent Execution",id:"3-parallel-concurrent-execution",children:[]},{value:"4. Parallelism (Multi Processing)",id:"4-parallelism-multi-processing",children:[{value:"Scenarios",id:"scenarios",children:[]}]},{value:"Coroutine v.s. Thread",id:"coroutine-vs-thread",children:[]},{value:"Goroutine in Golang",id:"goroutine-in-golang",children:[{value:"Why Why goroutines instead of threads?",id:"why-why-goroutines-instead-of-threads",children:[]},{value:"Goroutine v.s. coroutine",id:"goroutine-vs-coroutine",children:[]}]},{value:"Reference",id:"reference",children:[]}],c={toc:u};function p(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CPU will manage/scheduling its own ",(0,i.kt)("inlineCode",{parentName:"li"},"threads"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Multi-threading")," is the prerequisite of ",(0,i.kt)("inlineCode",{parentName:"li"},"multi-processing"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"multi-threading"},"Multi Threading"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Multi Thread",src:n(8674).Z})),(0,i.kt)("h3",{id:"benefits-of-multi-threading"},"Benefits of Multi Threading"),(0,i.kt)("h4",{id:"responsiveness"},"Responsiveness"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multi-threading in an interactive application may allow a program to continue running even if a part (thread) of it is blocked or is performing a lengthy operation, thereby increasing responsiveness to the user.")),(0,i.kt)("h4",{id:"resource-sharing"},"Resource Sharing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(Compared to)",(0,i.kt)("inlineCode",{parentName:"li"},"Processes")," may share resources only through techniques such as ",(0,i.kt)("inlineCode",{parentName:"li"},"Message Passing")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Shared Memory"),"."),(0,i.kt)("li",{parentName:"ul"},"However, ",(0,i.kt)("inlineCode",{parentName:"li"},"threads")," share the memory and the resources of the process to ",(0,i.kt)("strong",{parentName:"li"},"which they belong by default"),".")),(0,i.kt)("h4",{id:"economy"},"Economy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allocating memory and resources for ",(0,i.kt)("inlineCode",{parentName:"li"},"process")," creation is a costly job in terms of time and space."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Threads")," share memory with the process ",(0,i.kt)("strong",{parentName:"li"},"it belongs"),", it is more economical to create and context switch threads.")),(0,i.kt)("h4",{id:"scalability"},"Scalability"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If there is only one thread then it is not possible to divide the processes into smaller tasks for ",(0,i.kt)("inlineCode",{parentName:"li"},"parallelism"),"."),(0,i.kt)("li",{parentName:"ul"},"Single threaded process can run only on one processor regardless of how many processors are available.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"1-concurrency-multi-threading"},"1. Concurrency (Multi threading)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Concurrency",src:n(4819).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An application is making progress ",(0,i.kt)("strong",{parentName:"li"},"on more than one task at a time")," inside the application, resulting in a ",(0,i.kt)("inlineCode",{parentName:"li"},"multi-threaded process")),(0,i.kt)("li",{parentName:"ul"},"In contrast to: ",(0,i.kt)("inlineCode",{parentName:"li"},"Sequential Execution")),(0,i.kt)("li",{parentName:"ul"},"When executing ",(0,i.kt)("inlineCode",{parentName:"li"},"multi-threaded process")," on ",(0,i.kt)("strong",{parentName:"li"},"a processor"),", the processor can switch execution resources between threads, resulting in concurrent execution."),(0,i.kt)("li",{parentName:"ul"},"When talking about concurrency we talk about something happen ",(0,i.kt)("strong",{parentName:"li"},"on a singe processor"),".")),(0,i.kt)("h3",{id:"applications"},"Applications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://golang.org/ref/mem"},"goroutine")," in golang."),(0,i.kt)("li",{parentName:"ul"},"JavaScript has a ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"},"concurrency model")," based on an ",(0,i.kt)("a",{parentName:"li",href:"/web-dev/web-browser-event-loop"},"event loop"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Promise")," in Javascript is ",(0,i.kt)("inlineCode",{parentName:"li"},"asynchronous programming")," but not ",(0,i.kt)("inlineCode",{parentName:"li"},"Concurrency"),".")),(0,i.kt)("h2",{id:"2-parallel-execution"},"2. Parallel Execution"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Parallel Execution",src:n(6822).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("inlineCode",{parentName:"p"},"multi-threaded process")," executed in a ",(0,i.kt)("strong",{parentName:"p"},"shared-memory multi-CPU environment"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"threads")," are distributed among multiple CPUs at the same time.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"threads")," on different CPUs are executed in parallel.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Parallel Execution")," ",(0,i.kt)("strong",{parentName:"p"},"is not equal to")," ",(0,i.kt)("inlineCode",{parentName:"p"},"parallelism"),"."))),(0,i.kt)("h2",{id:"3-parallel-concurrent-execution"},"3. Parallel Concurrent Execution"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Parallel Concurrent Execution",src:n(1909).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Simply the ",(0,i.kt)("a",{parentName:"p",href:"#1-concurrency-multi-threading"},"1. Concurrency (Multi threading)")," + ",(0,i.kt)("a",{parentName:"p",href:"#2-parallel-execution"},"2. Parallel Execution")," both happens.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"threads")," executed on a CPU are executed concurrently")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"threads")," executed on different CPUs are executed in parallel."))),(0,i.kt)("h2",{id:"4-parallelism-multi-processing"},"4. Parallelism (Multi Processing)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Parallel Concurrent Execution",src:n(5978).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When executing ",(0,i.kt)("inlineCode",{parentName:"li"},"multi-processing program")," on ",(0,i.kt)("strong",{parentName:"li"},"multiple processors"),", tasks are split int sub-tasks and process by multiple threads."),(0,i.kt)("li",{parentName:"ul"},"Resource are isolated among processors."),(0,i.kt)("li",{parentName:"ul"},"Each process can have many threads running in its own memory space.")),(0,i.kt)("h3",{id:"scenarios"},"Scenarios"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"multi-core processors"),(0,i.kt)("li",{parentName:"ul"},"graphics processing unit (GPU)"),(0,i.kt)("li",{parentName:"ul"},"field-programmable gate arrays (FPGAs)"),(0,i.kt)("li",{parentName:"ul"},"distributed computer clusters")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"coroutine-vs-thread"},"Coroutine v.s. Thread"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Coroutine",src:n(3566).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Threads are scheduled by ",(0,i.kt)("inlineCode",{parentName:"p"},"CPU"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Coroutines are scheduled by ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Threads are typically ",(0,i.kt)("inlineCode",{parentName:"p"},"preemptively scheduled"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Coroutines are ",(0,i.kt)("inlineCode",{parentName:"p"},"cooperatively scheduled"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"programs using threads must be careful about ",(0,i.kt)("inlineCode",{parentName:"p"},"locking"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"programs using coroutines can often ",(0,i.kt)("strong",{parentName:"p"},"avoid locking entirely"),"."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"goroutine-in-golang"},"Goroutine in Golang"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Goroutine",src:n(3570).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In short, Goroutine is something between ",(0,i.kt)("inlineCode",{parentName:"li"},"thread")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"coroutine"))),(0,i.kt)("h3",{id:"why-why-goroutines-instead-of-threads"},"Why Why goroutines instead of threads?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Goroutines are part of making concurrency easy to use. The idea, which has been around for a while, is to multiplex independently executing functions\u2014coroutines\u2014onto a set of threads. When a coroutine blocks, such as by calling a blocking system call, the run-time automatically moves other coroutines on the same operating system thread to a different, runnable thread so they won't be blocked. The programmer sees none of this, which is the point. The result, which we call goroutines, can be very cheap: they have little overhead beyond the memory for the stack, which is just a few kilobytes.")),(0,i.kt)("h3",{id:"goroutine-vs-coroutine"},"Goroutine v.s. coroutine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"goroutines imply ",(0,i.kt)("inlineCode",{parentName:"li"},"parallelism"),"; coroutines works on ",(0,i.kt)("inlineCode",{parentName:"li"},"single thread"),"."),(0,i.kt)("li",{parentName:"ul"},"goroutines communicate via ",(0,i.kt)("inlineCode",{parentName:"li"},"channels"),"; coroutines communicate via ",(0,i.kt)("inlineCode",{parentName:"li"},"yield")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"resume")," operations"),(0,i.kt)("li",{parentName:"ul"},"goroutines has controls of max thread number via ",(0,i.kt)("inlineCode",{parentName:"li"},"$GOMAXPROCS")," set by user.")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://tutorials.jenkov.com/java-concurrency/concurrency-vs-parallelism.html"},"Concurrency vs. Parallelism")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://golang.org/doc/faq#coroutine"},"Golang FAQ: goroutines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.kennycoder.io/2020/05/16/%E9%80%B2%E7%A8%8B-Process-%E3%80%81%E7%B7%9A%E7%A8%8B-Thread-%E3%80%81%E5%8D%94%E7%A8%8B-Coroutine-%E7%9A%84%E6%A6%82%E5%BF%B5%E8%AC%9B%E8%A7%A3/"},"\u9032\u7a0b (Process)\u3001\u7dda\u7a0b (Thread)\u3001\u5354\u7a0b (Coroutine) \u7684\u6982\u5ff5\u8b1b\u89e3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.guru99.com/preemptive-vs-non-preemptive-scheduling.html"},"Preemptive vs Non-Preemptive Scheduling: Key Differences")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sites.google.com/site/gopatterns/concurrency/coroutines"},"Go Language Patterns: Coroutines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@genchilu/%E7%95%B6%E4%B8%80%E5%80%8B-goroutine-%E5%89%B5%E5%BB%BA%E6%96%B0%E7%9A%84-goroutine-%E6%99%82-scheduler-%E6%9C%83%E9%81%B8%E8%AA%B0-257f434ee1bf"},"\u7576\u4e00\u500b goroutine \u5275\u5efa\u65b0\u7684 goroutine \u6642\uff0cscheduler \u6703\u9078\u8ab0\u512a\u5148\u57f7\u884c\uff1f"))))}p.isMDXComponent=!0},4819:function(e,t,n){"use strict";t.Z=n.p+"assets/images/concurrency-ae661e3255895dc5555a03ebb8082e4a.png"},3566:function(e,t,n){"use strict";t.Z=n.p+"assets/images/coroutine-1716f6362ed12f603feb3dcbe2760963.png"},3570:function(e,t,n){"use strict";t.Z=n.p+"assets/images/goroutine-2f6696058607e6301aef6c038c8ae49e.png"},1909:function(e,t,n){"use strict";t.Z=n.p+"assets/images/parallel-concurrent-execution-5be62f8f472221f25d3e9610a81366ed.png"},6822:function(e,t,n){"use strict";t.Z=n.p+"assets/images/parallel-execution-c5fd40bb5fb1210628b8148a8d06585c.png"},5978:function(e,t,n){"use strict";t.Z=n.p+"assets/images/parallelism-11ba0118d6f5014fde9d4e2f2a200ee6.png"},8674:function(e,t,n){"use strict";t.Z=n.p+"assets/images/thread-process-d86d20fdedcf360387bb0a1057bab0ef.jpeg"}}]);