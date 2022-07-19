(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[8492],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3793:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],l={},s={unversionedId:"web-dev/web-browser-navigation-flow",id:"web-dev/web-browser-navigation-flow",isDocsHomePage:!1,title:"Browser Navigation Flow",description:"Review Browser Architecture",source:"@site/docs/web-dev/2-web-browser-navigation-flow.md",sourceDirName:"web-dev",slug:"/web-dev/web-browser-navigation-flow",permalink:"/web-dev/web-browser-navigation-flow",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/web-dev/2-web-browser-navigation-flow.md",version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lighthouse Performance / Frontend Performance",permalink:"/web-dev/web-lighthouse-performance"},next:{title:"JS engine: Introduction",permalink:"/web-dev/web-js-engine-introduction"}},d=[{value:"Review Browser Architecture",id:"review-browser-architecture",children:[{value:"Browser Process",id:"browser-process",children:[]},{value:"Renderer Process",id:"renderer-process",children:[]},{value:"GPU Process(s)",id:"gpu-processs",children:[]},{value:"Reference",id:"reference",children:[]}]},{value:"What happens when we visit google.com?",id:"what-happens-when-we-visit-googlecom",children:[{value:"W3C 5.1 Processing Model",id:"w3c-51-processing-model",children:[]},{value:"Browser process: Handling Input",id:"browser-process-handling-input",children:[]},{value:"DNS lookup",id:"dns-lookup",children:[]},{value:"Network Thread: Make Request",id:"network-thread-make-request",children:[]},{value:"Renderer Process: Rendering",id:"renderer-process-rendering",children:[]},{value:"Paint",id:"paint",children:[]},{value:"Compositing",id:"compositing",children:[]},{value:"Reflow",id:"reflow",children:[]}]},{value:"Service Worker",id:"service-worker",children:[]},{value:"Reference",id:"reference-1",children:[]}],p={toc:d};function c(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"review-browser-architecture"},"Review Browser Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"browser architecture",src:r(5107).Z})),(0,a.kt)("h3",{id:"browser-process"},"Browser Process"),(0,a.kt)("h4",{id:"consists-of"},"consists of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UI thread"),(0,a.kt)("li",{parentName:"ul"},"network thread")),(0,a.kt)("h4",{id:"control"},"control"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Chrome")," part of the application including ",(0,a.kt)("inlineCode",{parentName:"li"},"address bar"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"bookmarks"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"back and forward buttons"),".")),(0,a.kt)("h3",{id:"renderer-process"},"Renderer Process"),(0,a.kt)("h4",{id:"consists-of-1"},"consists of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Main thread"),(0,a.kt)("li",{parentName:"ul"},"worker thread")),(0,a.kt)("h4",{id:"control-1"},"control"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"anything inside of the ",(0,a.kt)("inlineCode",{parentName:"li"},"tab")," where a website is displayed.")),(0,a.kt)("h3",{id:"gpu-processs"},"GPU Process(s)"),(0,a.kt)("h4",{id:"control-2"},"Control"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Handles GPU tasks in isolation from other processes.")),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/web/updates/2018/09/inside-browser-part1"},"Which process controls what?"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"what-happens-when-we-visit-googlecom"},"What happens when we visit google.com?"),(0,a.kt)("h3",{id:"w3c-51-processing-model"},"W3C 5.1 Processing Model"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This illustration is non-normative.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The following graph illustrates the timing attributes defined by the PerformanceTiming interface and the PerformanceNavigation interface with or without redirect, respectively. Attributes underlined may not be available in navigation involving documents from different origins. User agents may perform internal processing in between timings, which allow for non-normative intervals between timings.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"navigation timing",src:r(1564).Z})),(0,a.kt)("h3",{id:"browser-process-handling-input"},"Browser process: Handling Input"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Handling Input: ",(0,a.kt)("inlineCode",{parentName:"li"},"UI thread")," needs to parse and decide whether to send you to a search engine, or to the site you requested."),(0,a.kt)("li",{parentName:"ul"},"Start navigation:",(0,a.kt)("inlineCode",{parentName:"li"},"UI thread")," initiates a network call to get site content."),(0,a.kt)("li",{parentName:"ul"},"DNS Lookup: ",(0,a.kt)("inlineCode",{parentName:"li"},"network thread")," initiates DNS lookup.")),(0,a.kt)("h3",{id:"dns-lookup"},"DNS lookup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check Cache: Browser check ",(0,a.kt)("inlineCode",{parentName:"li"},"browser\u2019s local cache")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"computer's DNS cache")," if there is already IP address saved."),(0,a.kt)("li",{parentName:"ul"},"If No Cache, the query travels into the Internet and is received by a DNS recursive resolver."),(0,a.kt)("li",{parentName:"ul"},"The resolver then queries a DNS root nameserver (.)."),(0,a.kt)("li",{parentName:"ul"},"The root server then responds to the resolver with the address of a ",(0,a.kt)("inlineCode",{parentName:"li"},"Top Level Domain (TLD)")," DNS server (such as .com or .net), which stores the information for its domains. When searching for ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com"),", our request is pointed toward the .com TLD."),(0,a.kt)("li",{parentName:"ul"},"The resolver then makes a request to the ",(0,a.kt)("inlineCode",{parentName:"li"},".com")," TLD."),(0,a.kt)("li",{parentName:"ul"},"The TLD server then responds with the IP address of the domain\u2019s nameserver, ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com"),"."),(0,a.kt)("li",{parentName:"ul"},"Lastly, the recursive resolver sends a query to the domain\u2019s nameserver."),(0,a.kt)("li",{parentName:"ul"},"The IP address for ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com")," is then returned to the resolver from the nameserver."),(0,a.kt)("li",{parentName:"ul"},"The DNS resolver then responds to the web browser with the IP address of the domain requested initially.")),(0,a.kt)("h3",{id:"network-thread-make-request"},"Network Thread: Make Request"),(0,a.kt)("p",null,"Once the 8 steps of the DNS lookup have returned the IP address for ",(0,a.kt)("inlineCode",{parentName:"p"},"example.com"),", the browser is able to make the request for the web page:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browser setup TCP connection to the server via a ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP three-way handshake"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For HTTPS connection, another ",(0,a.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/zh-tw/learning/ssl/what-happens-in-a-tls-handshake/"},"TLS Handshake")," is required"))),(0,a.kt)("li",{parentName:"ul"},"Browser sends an initial ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP GET request")," to the IP address."),(0,a.kt)("li",{parentName:"ul"},"Server send ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP response")," with meta info in ",(0,a.kt)("inlineCode",{parentName:"li"},"header")," to Browser."),(0,a.kt)("li",{parentName:"ul"},"Browser receives the response header and content. ",(0,a.kt)("inlineCode",{parentName:"li"},"#Time to First Byte")),(0,a.kt)("li",{parentName:"ul"},"Browser check ",(0,a.kt)("inlineCode",{parentName:"li"},"Content-Type header")," to determine the type of data.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if ",(0,a.kt)("inlineCode",{parentName:"li"},"Content-Type header")," is missing or wrong, ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types"},"MIME Type sniffing")," is done here."))),(0,a.kt)("li",{parentName:"ul"},"Browser stores ",(0,a.kt)("inlineCode",{parentName:"li"},"cookie"),", and make request for ",(0,a.kt)("inlineCode",{parentName:"li"},"css")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Network Thread")," tells ",(0,a.kt)("inlineCode",{parentName:"li"},"UI thread")," that the data is ready."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UI thread")," finds a renderer process to continue rendering.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Meanwhile ",(0,a.kt)("inlineCode",{parentName:"li"},"UI thread")," updates the UI of browser (ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"url bar"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"security indicator"),")"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"session history")," for the tab will be updated")))),(0,a.kt)("h3",{id:"renderer-process-rendering"},"Renderer Process: Rendering"),(0,a.kt)("p",null,"check detail about ",(0,a.kt)("a",{parentName:"p",href:"https://hhow09.github.io/Lighthouse-Performance.html#Critical-Rendering-Path"},"Critical Rendering Path")),(0,a.kt)("h4",{id:"img-navigation-timing-api"},"Img: Navigation Timing API"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dom-navtiming",src:r(1987).Z})),(0,a.kt)("h4",{id:"img-rendering-process"},"Img: Rendering Process"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rendering Process with Event",src:r(6891).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domLoading")," event: ",(0,a.kt)("inlineCode",{parentName:"li"},"main thread")," Parse HTML and Construct ",(0,a.kt)("inlineCode",{parentName:"li"},"DOM tree"),"."),(0,a.kt)("li",{parentName:"ul"},"Download resource: such as ",(0,a.kt)("inlineCode",{parentName:"li"},"images"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"CSS"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"JavaScript"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"preload scanner sends requests to the ",(0,a.kt)("inlineCode",{parentName:"li"},"network thread"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JavaScript compilation"),": JavaScript is interpreted, compiled, parsed and executed. The scripts are parsed into abstract syntax trees"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domInteractive")," event: ",(0,a.kt)("inlineCode",{parentName:"li"},"DOM tree")," is constructed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"main thread")," Parse CSS, Calculate style to Construct ",(0,a.kt)("inlineCode",{parentName:"li"},"CSSOM tree"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"computed style")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domContentLoaded"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"DOM tree")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"CSSOM tree")," both constructed.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Normally Javascript start executing on this event."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"main thread")," going over DOM tree with computed styles and producing ",(0,a.kt)("inlineCode",{parentName:"li"},"layout tree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"main thread")," walks the ",(0,a.kt)("inlineCode",{parentName:"li"},"layout tree")," to create ",(0,a.kt)("inlineCode",{parentName:"li"},"paint records"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Paint record"),' is a note of painting process like "background first, then text, then rectangle".')))),(0,a.kt)("h3",{id:"paint"},"Paint"),(0,a.kt)("h3",{id:"compositing"},"Compositing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"because sections of the document are drawn in different layers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"layer tree")," is created and ",(0,a.kt)("inlineCode",{parentName:"li"},"paint orders")," are determined"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"main thread")," commits that information to the ",(0,a.kt)("inlineCode",{parentName:"li"},"compositor thread")),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"compositor thread")," then rasterizes each layer. A layer could be large like the entire length of a page, so the compositor thread divides them into tiles and sends each tile off to ",(0,a.kt)("inlineCode",{parentName:"li"},"raster threads"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Raster threads")," rasterize each tile and store them in GPU memory.")),(0,a.kt)("h3",{id:"reflow"},"Reflow"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As the page continues to load assets, reflows can happen"),(0,a.kt)("li",{parentName:"ul"},"A reflow sparks a ",(0,a.kt)("inlineCode",{parentName:"li"},"repaint")," and a ",(0,a.kt)("inlineCode",{parentName:"li"},"re-composite"),".")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"service-worker"},"Service Worker"),(0,a.kt)("p",null,"TBC..."),(0,a.kt)("h2",{id:"reference-1"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/navigation-timing/"},"W3C: navigation timing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/web/updates/2018/09/inside-browser-part2"},"Inside look at modern web browser (part 2)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/web/updates/2018/09/inside-browser-part3"},"Inside look at modern web browser (part 3)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/learning/dns/what-is-dns"},"What Is DNS? | How DNS Works")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hhow09.github.io/Lighthouse-Performance.html#Critical-Rendering-Path"},"Critical Rendering Path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp?hl=zh-tw"},"\u4f7f\u7528 Navigation Timing \u8a55\u4f30\u95dc\u9375\u8f49\u8b6f\u8def\u5f91")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work"},"MDN: how browsers work"))))}c.isMDXComponent=!0},5107:function(e,t,r){"use strict";t.Z=r.p+"assets/images/browser-architecture-9b02f8ec18011fa918a7cc0b1a3ea4fd.png"},1987:function(e,t,r){"use strict";t.Z=r.p+"assets/images/dom-navtiming-c08b8a8707463df14ca555899c3e1014.png"},1564:function(e,t,r){"use strict";t.Z=r.p+"assets/images/navigation-timimng-d8b85d839f9f13370128b104eb781b5b.png"},6891:function(e,t,r){"use strict";t.Z=r.p+"assets/images/rendering-process-event-160e267eba058ffe3141e5b8918887b3.png"}}]);