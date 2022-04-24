(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[1808],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),A=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=A(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=A(n),d=r,s=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(s,i(i({ref:t},c),{},{components:n})):a.createElement(s,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var A=2;A<l;A++)i[A]=n[A];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6282:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return A},default:function(){return u}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={},p={unversionedId:"web-dev/web-lighthouse-performance",id:"web-dev/web-lighthouse-performance",isDocsHomePage:!1,title:"Lighthouse Performance / Frontend Performance",description:"Intro",source:"@site/docs/web-dev/1-web-lighthouse-performance.md",sourceDirName:"web-dev",slug:"/web-dev/web-lighthouse-performance",permalink:"/web-dev/web-lighthouse-performance",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/web-dev/1-web-lighthouse-performance.md",version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transaction Phenomenas",permalink:"/system/transaction-phenomena"},next:{title:"Browser Navigation Flow",permalink:"/web-dev/web-browser-navigation-flow"}},A=[{value:"Intro",id:"intro",children:[]},{value:"TOOLS",id:"tools",children:[]},{value:"Concept",id:"concept",children:[{value:"Critical Rendering Path",id:"critical-rendering-path",children:[]}]},{value:"Performance Metrics",id:"performance-metrics",children:[{value:"FCP (First Contentful Paint) \u9996\u6b21\u5167\u5bb9\u7e6a\u88fd",id:"fcp-first-contentful-paint-\u9996\u6b21\u5167\u5bb9\u7e6a\u88fd",children:[]},{value:"SI (Speed Index) \u901f\u5ea6\u6307\u6578",id:"si-speed-index-\u901f\u5ea6\u6307\u6578",children:[]},{value:"TTI (Time to Interactive) \u53ef\u4e92\u52d5\u6642\u9593",id:"tti-time-to-interactive-\u53ef\u4e92\u52d5\u6642\u9593",children:[]},{value:"LCP (Largest Contentful Paint) \u6700\u5927\u5167\u5bb9\u7e6a\u88fd",id:"lcp-largest-contentful-paint-\u6700\u5927\u5167\u5bb9\u7e6a\u88fd",children:[]},{value:"CLS (Cumulative Layout Shift) \u7d2f\u8a08\u7248\u9762\u914d\u7f6e\u8f49\u79fb",id:"cls-cumulative-layout-shift-\u7d2f\u8a08\u7248\u9762\u914d\u7f6e\u8f49\u79fb",children:[]},{value:"TBT (Total Blocking Time) \u5c01\u9396\u6642\u9593\u7e3d\u8a08",id:"tbt-total-blocking-time-\u5c01\u9396\u6642\u9593\u7e3d\u8a08",children:[]},{value:"FID (First Input Delay \u9996\u6b21\u8f38\u5165\u5ef6\u9072",id:"fid-first-input-delay-\u9996\u6b21\u8f38\u5165\u5ef6\u9072",children:[]}]},{value:"Optimization",id:"optimization",children:[{value:"PRPL pattern",id:"prpl-pattern",children:[]},{value:"HTML",id:"html",children:[]},{value:"CSS",id:"css",children:[]},{value:"Javascript",id:"javascript",children:[]},{value:"Framework / React",id:"framework--react",children:[]},{value:"Preload",id:"preload",children:[]},{value:"Image",id:"image",children:[]},{value:"Font",id:"font",children:[]}]},{value:"Reference",id:"reference",children:[]}],c={toc:A};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"intro"},"Intro"),(0,l.kt)("p",null,"\u5982\u4f55\u5b9a\u7fa9\u4e00\u500b\u597d\u7684\u7db2\u9801\uff1f",(0,l.kt)("a",{parentName:"p",href:"https://web.dev/measure/"},"LightHouse"),"\u4e0b\u7684\u7db2\u9801\u8a55\u5206\u6a19\u6e96\u6709\u56db\u9805\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Performance"),(0,l.kt)("li",{parentName:"ul"},"Best Practices"),(0,l.kt)("li",{parentName:"ul"},"SEO"),(0,l.kt)("li",{parentName:"ul"},"Accessibility")),(0,l.kt)("p",null,"\u672c\u6b21\u7d00\u9304\u4e3b\u8981\u63a2\u8a0e ",(0,l.kt)("strong",{parentName:"p"},"Performance")," \u90e8\u5206\u3002"),(0,l.kt)("h2",{id:"tools"},"TOOLS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.google.com/speed/pagespeed/insights/"},"PageSpeed Insights")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gtmetrix.com/"},"GTmetrix")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/coding-hot-pot/%E6%AA%A2%E6%B8%AC%E6%95%88%E8%83%BD%E7%9A%84%E5%A5%BD%E5%B9%AB%E6%89%8Bchrome-devtool-performance-2ae96e7c4f69"},"Chrome Devtool Performance"))),(0,l.kt)("h2",{id:"concept"},"Concept"),(0,l.kt)("h3",{id:"critical-rendering-path"},"Critical Rendering Path"),(0,l.kt)("h4",{id:"download-resource"},"Download Resource"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Analysis DOM CSS",src:n(3274).Z,title:"Analysis DOM CSS"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u5f80\u8fd4: \u50b3\u8f38 html\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u6b21-\u7b2c N \u6b21\u5f80\u8fd4: \u50b3\u8f38 CSS \u548c JS\u3002")),(0,l.kt)("h4",{id:"rendering-process"},"Rendering Process"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Rendering Process Event",src:n(9342).Z,title:"Rendering Process Event"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9801\u9762\u8981\u7b49\u5230 DOM \u548c CSSOM \u90fd\u89e3\u6790\u5b8c\u5f8c\uff0c\u624d\u6703 render \u51fa\u756b\u9762\u3002")),(0,l.kt)("h4",{id:"terms"},"Terms"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u95dc\u9375\u8cc7\u6e90/\u7981\u6b62\u8f49\u8b6f\u8cc7\u6e90\uff1a\u53ef\u80fd\u7981\u6b62\u7db2\u9801\u521d\u6b21\u8f49\u8b6f\u7684\u8cc7\u6e90\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CSS \u9810\u8a2d\u70ba\u7981\u6b62\u8f49\u8b6f(render blocking)\uff0c\u4e5f\u5c31\u662f CSSOM \u9084\u672a\u5efa\u69cb\u5b8c\u6210\u524d\uff0c\u700f\u89bd\u5668\u4e0d\u6703\u9032\u884c\u8f49\u8b6f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u300c\u7981\u6b62\u8f49\u8b6f\u300d\u50c5\u6307\u8a72\u8cc7\u6e90\u662f\u5426\u6703\u963b\u6b62\u700f\u89bd\u5668\u521d\u6b21\u8f49\u8b6f\u7db2\u9801\u3002\u7121\u8ad6\u662f\u5426\u7981\u6b62\uff0c\u700f\u89bd\u5668\u4ecd\u6703\u4e0b\u8f09 CSS\uff0c\u53ea\u662f\u512a\u5148\u9806\u5e8f\u8f03\u4f4e\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u95dc\u9375\u8def\u5f91\u9577\u5ea6\uff1a\u5373\u5f80\u8fd4\u904e\u7a0b\u6578\u91cf\uff0c\u6216\u64f7\u53d6\u6240\u6709\u95dc\u9375\u8cc7\u6e90\u6240\u9700\u7684\u7e3d\u6642\u9593\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u95dc\u9375\u4f4d\u5143\u7d44\uff1a\u5be6\u73fe\u7db2\u9801\u521d\u6b21\u8f49\u8b6f\u6240\u9700\u7684\u7e3d\u4f4d\u5143\u7d44\u6578\uff0c\u9019\u662f\u6240\u6709\u95dc\u9375\u8cc7\u6e90\u7684\u50b3\u8f38\u6a94\u6848\u5927\u5c0f\u7e3d\u548c\u3002")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"performance-metrics"},"Performance Metrics"),(0,l.kt)("p",null,"based on ",(0,l.kt)("a",{parentName:"p",href:"https://web.dev/lighthouse-whats-new-6.0/"},"Lighthouse V6")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Page Loading Key Moment",src:n(8115).Z})),(0,l.kt)("h3",{id:"fcp-first-contentful-paint-\u9996\u6b21\u5167\u5bb9\u7e6a\u88fd"},"FCP (First Contentful Paint) \u9996\u6b21\u5167\u5bb9\u7e6a\u88fd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7576\u700f\u89bd\u8005\u5230\u9054\u7db2\u7ad9\u4e4b\u5f8c\uff0c\u9996\u6b21\u986f\u793a DOM \u5167\u5bb9\u9700\u8981\u7684\u6642\u9593\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FCP = TTFB(Time to First Byte) + Content Load Time + Render Time"))),(0,l.kt)("h3",{id:"si-speed-index-\u901f\u5ea6\u6307\u6578"},"SI (Speed Index) \u901f\u5ea6\u6307\u6578"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901f\u5ea6\u6307\u6578\u6703\u4ee5\u300c\u7db2\u9801\u53ef\u898b\u5167\u5bb9\u586b\u5165\u901f\u5ea6\u300d\u8a08\u7b97\uff0c\u4e5f\u5c31\u662f\u4ee5\u773c\u775b\u53ef\u4ee5\u770b\u5230\u7684\u5716\u50cf\u53bb\u8a08\u7b97\u5206\u6578\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u7d20: html+CSS",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"Frame[i] = interval time*(1 \u2013 visual complete %/100)\nSI score = Frame[1]+...+Frame[n]\n")))),(0,l.kt)("h3",{id:"tti-time-to-interactive-\u53ef\u4e92\u52d5\u6642\u9593"},"TTI (Time to Interactive) \u53ef\u4e92\u52d5\u6642\u9593"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u300c\u7db2\u9801\u9032\u5165\u5b8c\u6574\u4e92\u52d5\u72c0\u614b\u524d\u300d\u82b1\u8cbb\u7684\u6642\u9593\uff0c\u7c21\u55ae\u4f86\u8aaa\u7db2\u7ad9\u8981\u5168\u90e8\u8f09\u5165\u624d\u80fd\u958b\u59cb\u95b1\u8b80\u3001\u4e92\u52d5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u7d20: HTML+CSS+\u5716\u7247+JavaScript")),(0,l.kt)("h3",{id:"lcp-largest-contentful-paint-\u6700\u5927\u5167\u5bb9\u7e6a\u88fd"},"LCP (Largest Contentful Paint) \u6700\u5927\u5167\u5bb9\u7e6a\u88fd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6700\u5927\u7684\u6587\u5b57\u3001\u5716\u7247\u6216\u662f\u5f71\u7247\u5448\u73fe\u5230\u773c\u524d\u6240\u9700\u8981\u7684\u6642\u9593\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u7d20: \u6587\u5b57+\u5716\u7247")),(0,l.kt)("h3",{id:"cls-cumulative-layout-shift-\u7d2f\u8a08\u7248\u9762\u914d\u7f6e\u8f49\u79fb"},"CLS (Cumulative Layout Shift) \u7d2f\u8a08\u7248\u9762\u914d\u7f6e\u8f49\u79fb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e2c\u91cf\u53ef\u898b\u5143\u7d20\u5728\u53ef\u8996\u5340\u57df\u5167\u7684\u79fb\u52d5\u60c5\u5f62\uff0c\u7576\u7db2\u7ad9\u8b80\u53d6\u904e\u6162\uff0c\u6b63\u8981\u9ede\u7684\u6642\u5019\u6309\u9215(\u7269\u4ef6)\u5ffd\u7136\u8dd1\u6389\u9020\u6210\u9ede\u932f\u4f4d\u7f6e\uff0c\u8d8a\u5c11\u8d8a\u597d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u898b\u539f\u56e0:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6c92\u6709\u5716\u6846\u5305\u570d\u7684\u5716\u50cf"),(0,l.kt)("li",{parentName:"ul"},"\u6c92\u6709\u5c3a\u5bf8\u7684\u5ee3\u544a\u6216\u5d4c\u5165\u5f0f iframe"),(0,l.kt)("li",{parentName:"ul"},"\u52d5\u614b\u6ce8\u5165\u7684\u5167\u5bb9")))),(0,l.kt)("h3",{id:"tbt-total-blocking-time-\u5c01\u9396\u6642\u9593\u7e3d\u8a08"},"TBT (Total Blocking Time) \u5c01\u9396\u6642\u9593\u7e3d\u8a08"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7576\u5de5\u4f5c\u9577\u5ea6\u8d85\u904e 50 \u6beb\u79d2\u6642\uff0c\u5f9e FCP \u5230 TTI \u4e4b\u9593\uff0c\u6e96\u5099\u6642\u9593\u7684\u6642\u9593\u7bc4\u570d\u7e3d\u8a08\uff0c\u5ef6\u9072\u8d8a\u4e45\u5206\u6578\u8d8a\u4f4e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u7d20:FCP\u3001TTI\u3001SI\u3002")),(0,l.kt)("h3",{id:"fid-first-input-delay-\u9996\u6b21\u8f38\u5165\u5ef6\u9072"},"FID (First Input Delay \u9996\u6b21\u8f38\u5165\u5ef6\u9072"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e2c\u91cf\u4e92\u52d5\u6027\u7684\u901f\u5ea6\uff0c\u70ba\u4e86\u63d0\u4f9b\u826f\u597d\u7684\u7528\u6236\u9ad4\u9a57\uff0c\u7db2\u9801\u7684 FID \u61c9\u7576\u5c0f\u65bc 100 \u6beb\u79d2\uff0c\u50cf\u662f\u9ede\u64ca(Click)\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7121\u8ad6\u662f\u9ede\u64ca\u9023\u7d50\u3001\u5f71\u7247\u3001\u5716\u7247\uff0c\u53ea\u8981\u9ede\u4e0b\u53bb\u53cd\u61c9\u5f88\u6162\u7684\uff0c\u6162\u5230\u4ee5\u70ba\u7db2\u7ad9\u6545\u969c\u3001\u7121\u4f5c\u7528\uff0c\u5c31\u662f\u300c\u9996\u6b21\u8f38\u5165\u7684\u5ef6\u9072\u300d\u3002\n",(0,l.kt)("img",{alt:"SEO V6",src:n(7661).Z,title:"SEO V6"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"optimization"},"Optimization"),(0,l.kt)("h3",{id:"prpl-pattern"},(0,l.kt)("a",{parentName:"h3",href:"https://web.dev/apply-instant-loading-with-prpl/"},"PRPL pattern")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Push (or preload) the most important resources."),(0,l.kt)("li",{parentName:"ul"},"Render the initial route as soon as possible."),(0,l.kt)("li",{parentName:"ul"},"Pre-cache remaining assets."),(0,l.kt)("li",{parentName:"ul"},"Lazy load other routes and non-critical assets.")),(0,l.kt)("h3",{id:"html"},"HTML"),(0,l.kt)("h4",{id:"optimization-1"},"Optimization"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u50c5\u5728\u9700\u8981\u6642\u5275\u5efa node\uff0c\u92b7\u6bc0\u4e0d\u9700\u8981\u7684 node"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u7528 CSS \u96b1\u85cf"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u904e\u591a\u5c64\u7684 div")),(0,l.kt)("h3",{id:"css"},"CSS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CSS \u9810\u8a2d\u70ba\u7981\u6b62\u8f49\u8b6f\uff0c\u4e5f\u5c31\u662f CSSOM \u9084\u672a\u5efa\u69cb\u5b8c\u6210\u524d\uff0c\u700f\u89bd\u5668\u4e0d\u6703\u9032\u884c\u8f49\u8b6f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u904e\u591a\u7684\u7981\u6b62\u8f49\u8b6f CSS \u6703\u5f71\u97ff FCP, TTI \u7b49\u6548\u80fd\u6307\u6578\u3002")),(0,l.kt)("h4",{id:"optimization-2"},"Optimization"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"inline/preload critical CSS"),(0,l.kt)("li",{parentName:"ul"},"defer non-critical CSS",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="preload" as="style" href="async_style.css" onload="this.rel=\'stylesheet\'" />\n<noscript><link rel="stylesheet" href="[yourcssfile]" /></noscript>\n'))),(0,l.kt)("li",{parentName:"ul"},"CSS import \u6703\u589e\u52a0\u5f80\u8fd4\u6b21\u6578/\u5f71\u97ff\u6548\u80fd"),(0,l.kt)("li",{parentName:"ul"},"Webpack CSS bundle Size")),(0,l.kt)("h3",{id:"javascript"},"Javascript"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u82e5\u9996\u6b21\u8f09\u5165\u6642",(0,l.kt)("strong",{parentName:"li"},"\u6c92\u6709\u9700\u8981 JS \u624d\u80fd\u986f\u793a\u7684\u90e8\u5206"),"\uff0c\u5247 JS \u7406\u8ad6\u4e0a\u4e0d\u5f71\u97ff FCP (E.g. SSR or pure HTML)"),(0,l.kt)("li",{parentName:"ul"},"SPA architecture relies on JS for rendering")),(0,l.kt)("h4",{id:"optimization-3"},"Optimization"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"script")," tag with ",(0,l.kt)("inlineCode",{parentName:"li"},"defer")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"async")," for lazy loading JS"),(0,l.kt)("li",{parentName:"ul"},"Inline Critical Resources, Defer Non-Critical Resources, Remove Anything Unused"),(0,l.kt)("li",{parentName:"ul"},"Webpack JS bundle Size"),(0,l.kt)("li",{parentName:"ul"},"Lazy Loading , Code Splitting")),(0,l.kt)("h3",{id:"framework--react"},"Framework / React"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/react/react-performance-optimization"},"Performance Optimization of React")),(0,l.kt)("h3",{id:"preload"},"Preload"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u539f\u5148 Browser \u6709\u5167\u5efa\u7684\u8cc7\u6e90\u512a\u5148\u7b49\u7d1a\uff0c\u4f7f\u7528 preload\uff0c\u66f4\u9032\u4e00\u6b65\u8a2d\u5b9a\u8f09\u5165\u512a\u5148\u9806\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"For CSS/JS/Font"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u60c5\u5883: CSS, \u548c\u727d\u6d89\u5230\u95dc\u9375\u8def\u5f91\u7684 JS \u7b49\u91cd\u8981\u8cc7\u6e90",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="preload" as="script" href="super-important.js" />\n<link rel="preload" as="style" href="critical.css" />\n<link rel="preload" as="font" crossorigin="anonymous" type="font/woff2" href="myfont.woff2" />\n')))),(0,l.kt)("h3",{id:"image"},"Image"),(0,l.kt)("h4",{id:"size"},"Size"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reduce image to appropriate size "),(0,l.kt)("li",{parentName:"ul"},"convert image to appropriate format(WEBP, JPG)")),(0,l.kt)("h4",{id:"lazy-loading"},"Lazy-Loading"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"with HTML (",(0,l.kt)("a",{parentName:"li",href:"https://caniuse.com/loading-lazy-attr"},"Can I use loading-lazy-attr"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<img src="my-image.jpg" loading="lazy" />\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"with JS (IntersectionObserver)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8b93\u5716\u7247\u6b63\u5e38\u8f09\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u76e3\u8996\u5716\u7247\u5143\u7d20\uff0c\u5224\u65b7\u5b83\u5011\u662f\u5426\u9032\u5165\u5230\u756b\u9762\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u5143\u7d20\u9032\u5165\u756b\u9762\u5f8c\uff0c\u518d\u8f09\u5165\u5716\u7247"),(0,l.kt)("li",{parentName:"ul"},"\u7bc4\u4f8b 1: ",(0,l.kt)("a",{parentName:"li",href:"https://codepen.io/imagekit_io/pen/BPXQZZ"},"Lazy loading images using IntersectionObserver - example code")),(0,l.kt)("li",{parentName:"ul"},"\u7bc4\u4f8b 2: ",(0,l.kt)("a",{parentName:"li",href:"https://codepen.io/imagekit_io/pen/RBXVrW"},"Lazy Loading background images in CSS")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9996\u6b21\u6e32\u67d3\u7684\u5716\u7247\u4e0d\u8981\u505a Lazy Loading"))),(0,l.kt)("h3",{id:"font"},"Font"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u78ba\u4fdd\u5728\u5b57\u9ad4 loading \u5b8c\u6210\u4e4b\u524d\u6587\u5b57\u4ecd\u53ef\u898b: ",(0,l.kt)("inlineCode",{parentName:"li"},"font-face"),", CDN:",(0,l.kt)("inlineCode",{parentName:"li"},"\uff06display = swap"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp?hl=zh-tw"},"\u5206\u6790\u95dc\u9375\u8f49\u8b6f\u8def\u5f91\u6548\u80fd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css?hl=zh-tw"},"\u7981\u6b62\u8f49\u8b6f\u7684 CSS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.dev/apply-instant-loading-with-prpl/"},"Apply instant loading with the PRPL pattern")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://shubo.io/preload-prefetch-preconnect/"},"[\u6559\u5b78] \u6df1\u5165\u6dfa\u51fa Preload, Prefetch \u548c Preconnect\uff1a\u4e09\u7a2e\u52a0\u5feb\u7db2\u9801\u8f09\u5165\u901f\u5ea6\u7684 Resource Hint \u6280\u5de7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wp-rocket.me/blog/improving-first-contentful-paint/"},"10 Proven Ways To Improve First Contentful Paint (FCP) in WordPress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.catchpoint.com/2017/04/20/understanding-speed-index/"},"Understanding Speed Index")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://datacadamia.com/web/browser/page_load"},"Web - Timeline of a page load (Page Speed|Page Latency)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wp-rocket.me/blog/improving-first-contentful-paint/"},"10 Proven Ways To Improve First Contentful Paint (FCP) in WordPress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.catchpoint.com/2017/04/20/understanding-speed-index/"},"Understanding Speed Index"))))}u.isMDXComponent=!0},7661:function(e,t,n){"use strict";t.Z=n.p+"assets/images/SEO-V6-b6bc2a3691b90d002bc02da05215c130.png"},3274:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1IAAADTCAMAAAC8/NLVAAADAFBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAACXl5eZmZmZmZkAAAAxMTEeHh5LS0tka2I/OTN+c2czMzM2OzVtdWr85c3Z6tMAAAAAAAAAAAAAAADkz7qekIGyopHJtqP44coAAACqmorBr522pZTw2sOuno303sfNuqaOgXTRvaro072ik4TYxbC6qZeFfGuZjnyCd2qKfnHFs6CIk4SWopKsuafW5tCcqJcAAAC9rJokIB3cyLN1bV4AAAAAAAAoJSBfVk0PDg2WiXpTS0QYFhNWT0UgHRoAAAAvKyc3My0LCgoIBwYcGRYrKSRaU0kUEhDgzLYdHx21w7AAAABPSkDUwa07NzBFQTjs18BKRTwDAwNDPTeml4eShXdxaVsAAAAAAAAAAABvZVpjWlBrYVdlXlF7b2RYXlajr57D0r3P38nL28aRnI3I2MLS48yMloi+zbm6ybWms6EyMCoAAABBRj8REhEzNzIHBwciJSMbHRoYGhcTFRVMUkoqLi9weW1FS0pSWE+CjH6wvqt4gXRCQkIWFhYqKipEREQ2NjYxMTFWXmVocXoQEhPM3u/P4vPJ2+tsZlaAeWY6QEWerbr77sn/8szn27lxfIWknIOqucdARkuMhXBgW00MDQ7Ow6W1xtXf1LJ7h5GkssCywtGCjpiOmqaUo6+IlaCvv80aHB40OT0XGRvF1+hOVVtbY2sPERK4ydhHTlTXzKwGBwh1gIm+z9+FkZzTyKklKCu6sZWpoIfDuZyclH336sbb0K+gmIDv47+IgW2SinTz58LHvZ+bqbZ/ipUwLiZ4cmC/tZlAPTNcV0rr37xoY1N8dmPj17a0q5AxNTlgaXGZp7Owp41GUKYMAAAA5HRSTlMAp98cv/8gR1/XDE+bkygknzwEY5dD6/j0EMfo71eDUxTPGLsILKNrw6uz44v8MI/US0B//3+Bn6v///+//////0Bzy2f//////zj//////////////////////////////zT/////22///////////1v////////////+/3f//////////////4eve////////////////////////7f////////////+////////s9+NbHvB//////////////////////////////////////////////////r///////////65m5rQAAAiWUlEQVR4AezZha4iQRSE4TNScN3d3d0Nf/9nWt+NEmM63XP2/7A4qVQXanAKAAAAAAAAAIAs/6cgH/kwslL/NMg3MvKhOTY2Ni6N/TBBPvKhEqVEPvIhQCWTU9Mzro/c7Ny843wLi3NLy4aEKlnUyupaw/Gk1jc05ri/OW2uJRWQSeVbE9va8ZtvN5fnSe1pY6HQviGhSko70KHfSZUbO54ndXQ8YxPaMCRTyYxOzJT7ndSsjXme1E9LOjUkU8mx5nxPyrxPamFahwuGZCopdGjrOrO6YlLnupgwJFTJ1uXCvJasppjUji4WDClVcqXD/PrG6olJFdf6Ibf4cFuW9tPCzt3Gvdt8PzXLpt98y+VPmf3PAAAAAAAAAAAAAAAAAAAA8PD4QD7QSnUenx6tAuQDrfAuBVoBAAAAAADgtxfygVb4XyoQ0ArvUvDfCgAA28/RvPx5j3sI9xgx3utb+HQx29uO+dxJL0oRvT/++0YW6DFqvLfQ6WK1F1/Km3rWx2ckH/oK/joeNd5r6HRx21OrHUlLz0lP6rMTyaeeiVfjeGp3I2kzKSYVyCuTqhJnjnhfTCoczhzvUkyKSb0yqSrjMamZ/KeN854NdbHjupQvqxCTYlJj6o+NjfUHqw0b4uj6O/vm+dZEtwTwQ2AQrJhXWkDp0gzgh1sID/csJYGFEEJXOgQsrIQAm0BCUwzYC0VEbFwFu/6Nd2Y3gVhvJG+7ZT7sTM7O7rOz5/z2zJndVP6+nWI0kVRVi3+uWSo9KlE1jkQxllLzq4w5CrS2mgeKuY5bTEb/nbDs+tWbrT6XhsaSxibU6Ghq9jnWhojUvqM+I6UAA8wMAalavNYWsyWwqdWEzWZ/zA077W1nSvwBnC1prxLV6DqU6EjEqnafQ6s/wE46/EdIdZF09/R+n4W+vt8WqUPJigqHKPYd6YeC3xcpG6gyMMh/Ss61/KaP8V/0voF26jzTxl/4VZACRS4GBjpk4INg89+JwUA/6ZLC0TDYDXYYsXB0hEZO0g6OEMPLP6Hq/TDK/hIXyizlUK81kHETYPMQV2XHu+kijI3LimOtU3a4YIKinQS3ww1DhFf1AEyMy85G5Qzg4SRjUPJjpECVqenvslBa+tsiVZGhqEgYZWxfniYjlmau7KwwzclUxrQX0tJGL8Rr0dCdPxlJBNbMFI0qDMb0h2nC0jFzjAnPLQpPPJEWrTiknkorKtzPWKJPs9gMTc6oXweJlIlUlTzLf0rA9JsiFVnjMyJyWT/0h46U75KtNndgoHMN30CKTiA2zUILKoOsDELZIKKjfJmTDMihIlWW7tOQxfLyQkLKQFFckZsD8g7bN5DyuMdbOZ+/6m3iFnnWigS5FzhfhLO47xptW2VysF6HM4SUm8jiDc5/i1SXMhNJpX8UUpn6G6QSb8answv6E2W39GWM6dJ0v4wmn2IsLCk76nyRjmkj8kdj8/ITWSrk5RUeVvIDSKscTapgLFtTcehGYnRRyj4dOURXjGYnxLD06IqU02mIa4G+vOwvMLqjg0eKj8i0rTaZRdKW+tr5eSMXBy3UR9Rf1qqWOdojmk1tVnpkd3i44unhtpZWdXwutjT58oUmcRCdeFNLnXVvSIUn0pQ9Gs4Sylk2zVj7Tx+PDB0plNsS581GimhQJIOQoktuDUSKAh13ibwF6tT8CkzoOAkeZaANh4jUfookMSVWW57MWBzNWFmjsdo9VfwUpHgb2CgctLDDLIOEFNmLth2k7qjQzUt3uQ2dUdolK7/nUiejSc5n7fPqOHAaEak742Tfnw0OKWHJS9uermXKAFdWH6ytPaSGB93d6wpS632Ppklt9PYtCySrK73LjzYUc3pt7bFiPOma7t3opZau5fVgkeqH6IiIiJyEuAMsS1kz5eZiVlO0H7mKYaP6fsZioZBdoJVWZnIUOw3HmCqF+gL6Nu8IOwgIYYwmEXtE/wuLScJD/6JhudGosyCL3YrTIpo3/PpnkLrsQHbGnWPyhJFzs9v11D5MSRHtNAxRizTmHcIxOCE/lVyt3AFu9ZFtcg27xuE6snXFO+aAETQWvGPyCNi4OAljbpd5L0hlYnT7n8UXJZTDURZTwdiB5PM6yv9CR+rKZcr31FnJl/jRJU/Iw58jhThV8ysDXJUBcjxr71AG2lCISJ3IZywlWZOUcTODRcJptj8vPie/KH0v76VUpM56PRSOEuNO4tfuvWg3+L3lIVUjNx7vpEoPzU8m0dfuPacaDXANz2CGVgq6JUiknm8KwsN/vpiQXyI5W0vS9gu5RxCWpVcvt6dKEZZt6aX3da+wDEsACj9dr0qn3njxbA+evpjYhiU8HI0Xr2FDWH3ufSltTQeJVDac+EuhJu5AJuZ0CbFlZWUxaawAUhijZ3FOni8lzM8oQ0n6C/tLQiJTJSeXyoWIUxEa+9WhpflLZvwtRpKuP0ZH4O4afdpxhMmvg0PqnM1mqx0BHC0LAx4+Pz7Ora6rIq+FAKSM0h2RN0jtvN1h4ZaJyd3EzwSz5FvPzzhxFmuEBn5dauLNY2BDo4GLQy7LHpCiJWXe+XBWEw/7WdEhVqYvR6z0R0JDarak5L7B1fQ1Urfxkj0DXyDVgCG6RrgqkxLdjNtjNNAWQ0Xq2U3soRmmvak/xVIglWVEh7NM3cE9zVIO/PhuUr7Gv0LKjGyI93zeg9DId6QRnIYSJRuxGsA9conoMYN/OSbfoTO42mk6tvxbpIqXl5fXluCtILzbIhzeIFJSj/Bw+7mwKiFFj6BUeLD5bl2Y3vwHIvVmGlEjpGCpFzdPhOLNFUEohhXh/faGsDKFSC29mhbWn0/1BofUyXwCIO4QbtMSNCRhalaTBbFMn80YAnY4HJKUXZUsL4z5JIGmtH1weD99j3sUsqgteaYG1MLRAcjXkNTgvgw4T42qDr484TS00H3HDa+DpjqoRmMhAKlrMI/G3QFeItXhVCUGIjVIc9wwn7NR7gc27r6ORhUZ9OAzwuIeKn64pKyBWDR0RWw//MJ0z6g1Lio0pNwOh0O2m75Gyn2bIvkCKQoehvx1DKDf9PA2y9bQkKKuY89ylB49wE7lo6phlNPvaS3lxJjcznviV0jdpYucD4hlVxqujwEMUH+JtZN2gAWjPxvkdCidgR4etyd5UOUJ79MunGXgAyVv0CNsvUfj/ZSwBpTZvSlFdCgNLH6FSK35K4Veanq5JHx8groPetZffELjEWysKsY09AWHVNFNZbhQUU8TQ+lNZCY7mIbGKCQypQp4K5lFKkMpNZKxOF+i45vJDiUhTeG0sIpUVraxZWRoR8OjIJ1QTWeHC9A3LTnTr4NN/KyL8h2RTDv2jwtqTSBSTS8AqXteB4oE3DgB8lVTIFKSMuIuct55fXjMCzYj7aGB6gE3HQQle3gvdTKH3UgiI+cgreHTQROBEh8VeuJnvQMNXyLVrOxp+AIpMyxyxzBXZcSt3AxXOw20EJE6ArH7lbw/FsKp/HIQKLhozZ7LE7zKe+4rpAzKHofq3UxVh0BpbhmQjao5d9+5wDt3nnzOe3QGeni46nkQid/6moyzEeLyamtraxsbtsjp/RZSIJBRipPQFsomrC7Dsh+pLdq+pqSw+PlLgOUNZddH2JiGTfKGD0EhlQgzpDITchm7qaPbg2WKNJqzCosYS7jBWHhyBuZ1eLBWF4Fs1fgrynRgeMJfWDlNc1mQQg5FrIAWVsf1WTWwD4lKKmTHNIyIS/fr4NdSJrhOZruJpNUEVlozBCB1x21ShHOx7dwYXAlAyq0gNcEvwZWS2moan1RFagXbINwxkTTsYZaKLmS5Eai1ydmsPAGpuhVFciRkpOjK2lWk6r5AqukLpDqglU+6RMUWXbN0M+jh7aoKFanjkJhFXcfK45SUP0IXRZKyd6T4+MSPkCJ9VdW3b/NLatMcug5V+d4KNFvle6qD2XcGVztOxzyotVQ3LBFSxV0kj7+BlNSlyFdIPS8V3sLzt93dhFQ3FThg46PvPB+DQioWYhV9TJ+Oi4OTUTH6FMpqqLgeg1jFz1SmJZ9g7EbCrUpd0hGW4n81g6hoZirP52SyXGWae5Y0mpITV8CYLvr0TAIekZGUXa7J2c+O6sNOH49+tqODR4oPQ6cv8Ws9Y7SBmdbxBj6v7HRh4udtpkF4ltcvql0QkPh51JqRY9ZXenLcQaMFDZnSqfn2uZ/PjBLhODupU6bvfpabw/phH6VGGGroSHVCIz0BaG2+k/i57tIlf46UxfGU7s4Z3/KjnpCiAecWQ0WqMJodpoC0528qKX8eRZp+sn/vSIkDl7mNKgrGXaSuu0SqOvi8S7xNpAadd/h9p0d9tCxyPIzkjNfCbzsVB9HgtihnuD12+w4PBinCBpZ9id/Gp5UdpPpgWk38PsAKZXcfhACkvA9wu10syEuo12C5d7MYjU+Y+HnforHydiM4pGISFV0Qg2iV5VXk1jAWGXOEmKEbfKIi7PCxGjSyI3SFqYwd2BlBaQf7b1bcQsBOpCjT3K0c3al0yg6PVTwbRb3/hi6HdrOak2kZt/bv6uCRMkoXrXzBMcfnDS4rHxuf54uAveVesIrtgOUJedbCmyTsKHcrlhzsnHuve/zlCSvvQAYvXha58Sm08UveS5Y2O5UnZBsukL2tP49ULBxhF7DKmRUXr2WaU0ybn6dlUfrREJGiQsziRdmIY8jGWwd2kWqXbYHliSH0OzshV6N9Hc55uPGcd9K3HnHZ7/BQkco5ybRxYVrtMbjFomA/q9QfZek5RZl7QmoMr7VuBFoQkfvcOrmLVAPStFOe4PMD9lqr2DZg93CPPFDbbDE/dc2j63CnxXhWvoMOF+2LFt654K3nyhmqwd0WLFIPN7fWhXdYVlh9vvlgB6n17eeranlCev4AyxPvApGi8sQ/vNOC9A45nML2t/Laat8mbAjvpR4sT8grv+lns6F/pBREEf0SthrHvQ6Zqt5zE7LLPm6g6qwsjV+lIrpddsAVC59HF7cdXa6C24fUiGR3XuK83ml/KnXIHXjrneC+DWbqYJck1e5h/T6TzNj+HL2mKK+CpVKeezQuOS6+8lf5euJpJ+fNE2B3duwiJQ6Bw7lbRCfxGqrV9E8CAKld9CF1H9pCRooqtin6uKRCOM0OFTGmDdNr9Lr0vb2XAhJXBxWPwO2cdO0gxU1Ot9vg8nt7DOQ4RilD9diOeU0ic9KCZvMwmRfruIoUH3CLwSKF4BQLK6WwJb96IuwgJXzclre3S5Uiurzl/efKZ0iVbm7KWKz44N2a2PzkfST0LnnhVbFSRIctSeoTflOkaqDgt0PKOmhRjUGadZrqO63K/N9ZZVEWHMaqTt7cTH6d9U2cpEH9/E2srvYhxauryIE317VZ6LWwh946tinjs7XKZtlLSSw1nNZRR2O1qalKDQcBi92XykJEapDEwn3xNYvqq171pfRcVStedYCfdecGmU1KwOp7b8sgReoJCSkloPDTkdpILRWVULJOF+zx/1IeulYjWXS3m7hHfdXraabLxL7zzO+GX7XY5DPn6hcbfNF1Llaph1Nf11KrP0hqHpz/MVIbqz5Nk8p035N1VCsPaOKihvXlvnXF6O3pVl/1ru8gJfT0oR969z1ZFVYeCivC6kbvI6C2x910nt8Uqajz2j/iW2ZEKghBpL6QhStUIbP///9S35P//1+KkPpCXr5G8kpf/hf/XyoEpKqcF0cuylX//7/Ubx/efxFSa96J11PSk/9upMx1wXi1mr5OsK6VXDL+//9S/0fq+/K4S/hSNv6ldXZrpg+nXb2ju3pHs9ToRvnRNDfqvdEsNXo0pilNz40EAfMB9R6tfWdkM3o05uADLqwDCFxoeroxCKwfUO/R2nfGE1lHKHBhGMx5ypQCsIF1AwW6geFC83J8vTn59wTYAPVS4j3a+84YwN5d4LoNBGEcn8A8ZmYIM0jaMm1qUQ/yUJRrvN6hZyj3eo0bKmPirN3/7waj1bcwY8mvjJlUfZ5nJsaTyLqttyU8ZvIpAZxm1Eh4JNUK4DQiBRApwF1EagggUvxR3jV4/eB1VCM1nP5Ew+jrA6vS0Cy7+OjqA6tysXEikwcAAAAA1lhxH8Bcit4L9bmPL9EvvDnmNm7Xhwf6QMIjrlPyLU4pcEqNIFLRB95SRAogUgCRAphLESmAjh8dP/AlOnMpsCrsF9THqgAAEK6OH4CWMUlNGrMuAEYgp11HEhLGY9HgsnntqklIqNJ7cbk+ZLbVF5dIRoq5VPCQC+jeN+VLidgl8a3auV3rW4rWKcUphflg7n0p9SVFdEU66toSq58k58YZKSBomR1VPZdxa2qzcyTVepGq64WIVStycrxdJ1KIlFwg977nZenSlW6iupHquDklUoiU+UD6fcWbZ63D3W6k6tV1GURqrREjUojaze9cxu78YH9vu7zkR6quL8RndcWYo73ZKfkTZkMAt+UCuPetPa2sSeK8k13dqcZ0phup/Xg8Xp2dpiNGfdHyRl9LMNpaE60eS3pneXDx2y3tpJjbOFof1s3feHv9wPw9LyO/zQ+R5kQSB6eZfqRkU9vs4tTnpopOwrH8htWtVRG50FS3iX6si4NIHer8724YwfMygv/YrL57H7QPfi5+LbNf2JXsfqw/6l3RebF6Ya1t75czYdww8LG9Owhq6loDOP6JfBEj2hjEgGCRCE/6NIKLTDdvE2DlfqHbN4zKMINxTETnDY4OWQAu2C/qpjOO073IQSRfEARIBSposFZFBYqgkSKqylPfOUmEDiE3tsjtS/P9FtwM93bmZC7/e+Ccpk0CVnS1CJ21emxG+Bybc7JSbOeNn5IypuQaHBiycxN8lsN4pU1vLtwPLHkdw6tCb+1YAp+nIPNYIUiGHaBkG7ILDIrx8x8YXtKZD7PMwJKXCTuE3jpwo24PjDrS2zU8DyyJpWCn0FsXHtPtgXGd9NaNpbzil8QM2CN0dwG/An3sxl7SmxP38r5Uwth42ApSYYoDFm0HDYUphaClHH8QeuvDXN0eGFWkNz/m8r5U4liPdpB2YTYs+LpEMxlbAWhZgz+KZbR3NHfcEFL/QNigaB+I6Axf8ZOIZaBfaLqJjaCPcjxKejuI3wBLFNm4c6sqJP0wLCozgYb0MtCUg0MiytBFHL51G68GZB4YNixGMKJZKCO3RFhnl1gCB4SmO1i7mhnZrb97YBwkvZ3EcmCJIhM3W9T9KvlG5rUnv6TYCFaTJf/csVoA2CK/FKQ7wLClpGSPEeArk2FNiSF/I8A+02aIoRB/FlHuXvhezVCDrl9UUn1i0a1IR79Pqnn4jyZ1ER2weuxoSS9ceGDcI71V4yZgieKcrSB9PYARj4B1fVnevvydYG3Ac5vtKQAbUJ7JyM0uzN25L2/3Tvl6d9mWPUZMgzxbKcRyBEdElEv3wxk9wFGtpFp+eijPBe7c7msN3BU3BoaEuPGwP35SaqN3VZOSzq8LPzCqSW+PMAdYwmjMh724DzbjZlhz2AhQiIWwy1IAaRaAbakpYD5sh7KdZoBMeWIjZoK8tDAvKw9ialzux98VySwwqjVLPX584bLnR/GgxzN8Y2D4F9dlfPBLT4/nYdyk2jEfVjcppSSjAI5gNy3VO9bbNE40cajp10kietLWfeAekW9q+mn3syARecevXBkPXec7EP7OWH3Ts2l5nPy1qf45xfMMTcASRs5GgKLzUIpGq22LQ0IHmMoA1uGOzZbtNsjLyla5AWTjMcj/JwCUZh2xlUNM5lxVzBL9v1+xGMA7zcpMVFL4m2jpuhz+xW8Au1pFF15qabn1OG5SHbjNvopSMSLHfh6naKm2SpfzLLV5TtefmA1Sr/vsizOeMZrDmtMvnJVBCr6saup2H/XK607UnXR/R3TA/are6Zym1zXVV456nlEcpzENeMUvUazFDIA8NHyTDxtwd4qyH0pkZoVoaDQ5EPKLodQCUiFmFtjUrf3GlqLSimU//kdEmQklMXBL+knGcntYeRCV1Peh4EYjSXUK8SOOqsDiJtWFevGgPzopHCdvr2rNV11Pb2QzVHdAJnWIyFd1QAZ0j2hClqOuo1+xlyreEr2rnKOmah/RlOcRafJWoYE/L5UwNuBeAPPuc+vTIS1046xWMOIxgB2YgYUGzLBYwb4bpFJb9r9D26kpZdY021qIpRYviSj9qPoZHBn5AQfiLE+os+Gk+tQX8VlJXcBiXWaprY1YQVHaXET0wuWXuivoqeftc5LmQvG9mqXZoySdfUltbnm8h3N0/MTBUJhVTfIfeeK+Tpqe42HgWSphNGSFMsjHXbAf1wFYc4rVH0sAYCv6J6zFkmKADDSoEyY4shVUa3lQkPU1xHIeb4pol7vCx75VSaoPt8Jqsod7Ss801+KbZZJyElE3hlGw242n3ryTSUXOOd+S1O0MX+eXSd07jlh5wEsY9oY0PcUtwBLGziKQdlhwr3yds6s0pcgIabjHAZBik1/QYgUwypXAtMPrd8A/1O97+1RgW3LMsf87zKMiWjPOCGXoCySl/0avPdxT6IExHiOpJqc/hIiC81eqamRSXiK6UknOKySdnF1Miujd1FF8QfjWr7wmTXW4HVjCKE4D5YjJDGBs2FZ0rgAg25TqAKjdAwCmcpCsxWU7a40A9jyVlHpkFpo2wfIc+Fgso/W/95s7W4YeXPDMyE5uzoS0xkyqp79VIyldN3qVXaqnyAPDFyOpX/EJEb2tp0MH5PE6yqTGiKimm45WeIkmq7sXkgrWqTNnztJsnTz6Xo6Rlkk3WoElLzveEcsJvL+PiJ6uTtVJRF+spNo9+GN0Uvpv9EZx4CzFSCrorJnwP8Pr9NQ97u/97qVMqnLuyRv3I3rueXXv0WnXo8VZ6njlhH/cfZ3G8cWT3pdVPtIyh/nAklgRDorlBdoffgiEXvRFtAhpdFQoCy8D6tt3Z0ZDx4CqTm76ir6Afhu9GuxYT9GenSHJf9qD1deJvIdc6D7tkym8rcKaCSIam0U80xu57p3zOfnqPHjqhZfoWkX4jJY2LAaWvIw2W0DoTW306qMIP5KG4OIxvOI3SWFeb6xLJ70UxxncALzil7zW4UXx9/1Er9HmCdLnUkl9AcHwFJys+1KsAd+Lv+8netfhcdI7qTHcBkk8S7F8/PA3/kRvA76gzzbp99IX8AIbgCWvbLS0Cr2pjV595OMY6W0WM4Elrw34c7PuRrBRrweGe5J0No2WAmDJqxb/EqV6PTCq2/TWjanAktjac/a/QPnf+oFxDqIxxg+Mb//17Z97XpiBV/ySAd8Vg30f79t8uffH+K44MJWf4jxL8V3RP6lFjDFOijFOijFOijGWiTvhi2GMpaGJV8S+3PtjfFf22jN430af98f4rvAsxfiuMMYYY4wxxhjTwV77ZmCM8b4Ury3xit/fIynel2J8V3iW4venP56lGGPJlVTjHgAoUl/AsG2bdX+KtK1xHzDGSf0ZpaFxpqgvm3J2bwIHmuz24jLcDn8cY5zU3qzd4aRUUeutAA50AIC5rAwYS+h/E/2vUVBSmxpJKlxUJCn4x3r4wxjjtZfibeZIUptyDlvhU1LmzNzSxH9/TPe7wjsEmVkGCCdVlGPJNYSTCikyJ/77Y/x5Kb3t2F0OkaSwaNPWMnMoqYa0tLSvs4rMifb+GN+VDLv+ygtgkWm3rGd9UZoRUvKNkIcNi39LbccN/4/jZkzDHvwr5MGiNSmSJStlbXgR3YTrFpLahLv+f8fNkpLDvhe0rcdLzXq7jA5YInVhX8qYkmP9lNQe3B973Ffa9ObC/cCSnB3toMmKrhahs1aPzRg7Kdhv22l2YH5qauphNGmM20s682GWGZg2TuoYXhV6a8cSWKo2Q01KGaCUm/69yaTsydQYdx3p7RqeBxYHJ2XCDqG3DtwIK2XC66S3biyFZMcrfnGTSsFOobcuPAYrlYK9pDcn7gWW7PtS8ZIyYI/Q3QX8ClbIgFWkNz/mAouDZ6ly/EHorQ9zYaXK8Sjp7SB+AywO/ltqDf4oltHe0dxxQ0j9A2GDon0golOs0E1shJVagwdJbyexHIDxvtQGWKLcboUFOTgkogxdxOFbt/FqQIgBDBsWIxjRLFboDtZCfJrDhhy8R3qrxk0QjTE7WtILIawQfxZR7l74Xs1Qg65fVFJ9YtGtW+ILuIiOFQ4bCrGa9PYIc2BZjJOSzq8D5QiOiCiX7oczeoCjWkl1PvzQKg+jgzf7ReT4+Ru9Kxs2HMFuWmraN33NTxScv/aEJO/E1ISXaNJPz6cekfJufNwXuo4mwt95/fFa+MyTa/NBiucZmoDFwEnZEEsyCgAacUBEcUUyC4xqzFKBq57HPbeHxMP7w49llwvH+Nox/08/CSLDhkacoqXajlfidzRfdWoW3xD5aqpmXc4nNIevqo97XhHRW0+F0/NMXfey6pS6ZN51YtZz2kveJqypPjVBcZzGNGC84gcOu+RYeCmlYkSOfW2uKmaJ/t+vWAzgnWZlZmlSl3o6ReDxLXH5vRCDeGPhGF8HbrP/CQvD3mq3mnPRH50U1vsf+VxXvDThfkaHKoI07WySSdVN0phniqZwnOg6zqvrvHQI/VTTRPL0PB1wz5H3StVr0uStQgMw3pcCO0r2yMulLPgfEWUGB1RLt6SfZFK3h5UHS5PqkQmJGzeFq0tGOSoWjvF14UpZTFhBUdo8QaKn7kki6p6lQ6fGvPTaS3OhLeG6l/TyLEmzdTIpeV0vzlHlmSdEPiIZHlHQc5A0PcfDwDTxLLU1PR0viSj9qPoZHBn5AQdi/uJ3V3Wn/HYfv7/TuXiM7wIWr2yWSs+sxTfLJOVUMXmcUpWH/BXoOjqukiLprZOch0jqrghf55dJfXSj881zIqxySp560vQUt8ByGLN/+sE0w3m8KaJd7gof++ImpYz+9stlz4fFYzx9uHWlw4bzOB4rqeqpECLv2KEaPBlJ6tBCUpWLSdH0te5TOEX4akqZIE11uB2Ww5j90w8mFFhwVERrxhmhDGkkFf7Fb/BxX8ddIQLDI6OR4+pt9C4OW43bFyOpA+5pIvo4RdfmVUkok1KLemdP08szJFWeXkgqeF2e8dacpRNNRDTZ1ktaJt1oheUwtiv8gyk58LFYRut/7zd3tgw9uOCZkUndnAlpXZLUe7U8cfFqoGekRfS7mj8dV2GjN2rY4MBZihZOxXVyknpdb+hN9TvynqxQyxNBGsd5uoa/Ej3F+cVZqrpukt5V19MBzxh56z3aSc3FX6dkzI53xHIC7+8joqerU634RfQtXUTvwmHX41Ex6OoZ9lwNLBxXYaM3ih3rYyVF86dcTlXR6+88zqrqCZnCWdcJz9PQInr1KfdBWkxqosrldB9/rRbRT6gzmtqwGBiLowgHxfIC7Q8/BEIv+iJahDQ6Khb1/3QjdMXM4NDicXU2eqPG/ZGiTb8jZXJi/hEpvfPPJ9Xs4u+d95Hyemws+Ok6r39SXfoxsgk8r85oOoMbgPGKnzajzRYQemvH/JWP2xOkz6SSoi8gqJ4EjPeltK3DiyIRP9G7Do+T3kmN4TZgPEvF0YDvRSJ+orcBX9Bn800F6Qt4gQ3AWBz5+CEhP9Gbj2Okt1nMBMa0ZaOlVeitD7eufNzuSdLZNFoKgDFtG/DnZt2NYOPKx13dprduTAXG4qjFv0RpYo77HDAWx9pz9mjf/utb+6oqX51xa1v5+ys3w0ow/v9L8ftjfFf4ecHvj+8KY4wxxhhjjDHGGOMVP8Z3hXcI+P39D5gQVUdaTpFcAAAAAElFTkSuQmCC"},8115:function(e,t,n){"use strict";t.Z=n.p+"assets/images/page_loading_key_moment-9ea259d5dbd49a6951afdedad60cfa7f.png"},9342:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rendering-process-event-160e267eba058ffe3141e5b8918887b3.png"}}]);