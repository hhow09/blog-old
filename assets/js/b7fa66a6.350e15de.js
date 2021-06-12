(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[9282],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7981:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={},c={unversionedId:"web-fundamental/web-security",id:"web-fundamental/web-security",isDocsHomePage:!1,title:"Web Security",description:"Common Web Applications Attacks",source:"@site/docs/web-fundamental/4-web-security.md",sourceDirName:"web-fundamental",slug:"/web-fundamental/web-security",permalink:"/web-fundamental/web-security",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/web-fundamental/4-web-security.md",version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cache Control",permalink:"/web-fundamental/web-cache-control"}},s=[{value:"Common Web Applications Attacks",id:"common-web-applications-attacks",children:[{value:"Cross-Site Scripting (XSS)",id:"cross-site-scripting-xss",children:[]},{value:"SQL Injection",id:"sql-injection",children:[]},{value:"Distributed Denial of Service (DDoS)",id:"distributed-denial-of-service-ddos",children:[]},{value:"Clickjacking",id:"clickjacking",children:[]},{value:"CSRF",id:"csrf",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"common-web-applications-attacks"},"Common Web Applications Attacks"),(0,i.kt)("h3",{id:"cross-site-scripting-xss"},"Cross-Site Scripting (XSS)"),(0,i.kt)("h4",{id:"\u5e38\u898b\u7a2e\u985e"},"\u5e38\u898b\u7a2e\u985e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Stored XSS\n\u85c9\u7531 DB \u4e2d\u7684 Javascritpt \u7a0b\u5f0f\u78bc\u653b\u64ca\uff0c\u7a0b\u5f0f\u78bc\u53ef\u80fd\u900f\u904e\u7559\u8a00\u677f\u3001\u90e8\u843d\u683c\u7b49\u8f38\u5165\u65b9\u5f0f\uff0c\u5c07\u5e36\u6709\u653b\u64ca\u6307\u4ee4\u78bc\u7684\u5167\u5bb9\u5b58\u81f3\u8cc7\u6599\u5eab\u4e2d\uff0c\u88ab\u7576\u6210\u4e00\u822c\u7684 HTML \u57f7\u884c\u3002"),(0,i.kt)("li",{parentName:"ol"},"Reflected XSS\n\u975e\u5132\u5b58\u5728 DB \u4e2d\u3001\u524d\u7aef\u76f4\u63a5\u50b3\u9001\u5e36\u6709\u653b\u64ca\u6307\u4ee4\u7684\u5167\u5bb9\u81f3\u4f3a\u670d\u5668\u3002\u4f8b\u5982\u4ee5 GET \u65b9\u5f0f\u50b3\u9001 request \u81f3\u4f3a\u670d\u5668\u6642\uff0c\u4f3a\u670d\u5668\u672a\u6aa2\u67e5\u76f4\u63a5\u56de\u50b3\u8cc7\u6599\u81f3\u7db2\u7ad9\u4e2d\u3002"),(0,i.kt)("li",{parentName:"ol"},"DOM Based XSS\n\u6307\u7db2\u9801\u4e0a\u7684 JavaScript \u5728\u57f7\u884c\u904e\u7a0b\u4e2d\uff0c\u6c92\u6709\u6aa2\u67e5\u8cc7\u6599\u4f7f\u5f97\u64cd\u4f5c DOM \u7684\u904e\u7a0b\u690d\u5165\u4e86\u653b\u64ca\u6307\u4ee4\u3002(\u901a\u5e38\u662f\u56e0\u70ba JS \u4f7f\u7528 innerHTML())")),(0,i.kt)("h4",{id:"\u5982\u4f55\u9632\u7bc4"},"\u5982\u4f55\u9632\u7bc4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 \u548c 2 \u7531\u5f8c\u7aef\u9632\u7bc4\uff1a\u9700\u6aa2\u67e5 HTML \u7a0b\u5f0f\u78bc\u8207\u4f7f\u7528\u8005\u8f38\u5165\u7684\u5167\u5bb9\uff0c\u522a\u9664",(0,i.kt)("inlineCode",{parentName:"li"},"< script >"),"\u7b49\u5e36\u6709\u6307\u4ee4\u7684\u6587\u5b57\u3002"),(0,i.kt)("li",{parentName:"ul"},"3 \u7531\u524d\u7aef\u9632\u7bc4\uff1a\u907f\u514d\u5728 html \u5167\u5beb JS/\u907f\u514d\u4f7f\u7528 innerHTML()\u4f86\u66f4\u63db\u7db2\u9801\u5167\u5bb9\u3002"),(0,i.kt)("li",{parentName:"ul"},"3 \u7531\u5f8c\u7aef\u9632\u7bc4\uff1aContent Security Policy \u907f\u514d\u958b\u555f 'unsafe-inline'")),(0,i.kt)("h3",{id:"sql-injection"},"SQL Injection"),(0,i.kt)("p",null,"\u662f\u5728\u8f38\u5165\u7684\u5b57\u4e32\u4e4b\u4e2d\u593e\u5e36 SQL \u6307\u4ee4\uff0c\u5728\u8a2d\u8a08\u4e0d\u826f\u7684\u7a0b\u5f0f\u7576\u4e2d\u5ffd\u7565\u4e86\u5b57\u5143\u6aa2\u67e5\uff0c\u90a3\u9ebc\u9019\u4e9b\u593e\u5e36\u9032\u53bb\u7684\u60e1\u610f\u6307\u4ee4\u5c31\u6703\u88ab\u8cc7\u6599\u5eab\u4f3a\u670d\u5668\u8aa4\u8a8d\u70ba\u662f\u6b63\u5e38\u7684 SQL \u6307\u4ee4\u800c\u57f7\u884c\uff0c\u56e0\u6b64\u906d\u5230\u7834\u58de\u6216\u662f\u5165\u4fb5\u3002"),(0,i.kt)("h4",{id:"\u5e38\u898b\u7a2e\u985e-1"},"\u5e38\u898b\u7a2e\u985e"),(0,i.kt)("p",null,"Authorization Bypass"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\"SELECT * FROM customers WHERE name =' -name- ' AND password = ' -password-'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"input name = 'OR 1=1 --\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\"SELECT * FROM customers WHERE name =''OR 1=1\n")),(0,i.kt)("h4",{id:"\u5982\u4f55\u9632\u7bc4-1"},"\u5982\u4f55\u9632\u7bc4"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Regular expression \u9a57\u8b49\u904e\u6ffe\u8f38\u5165\u503c\u8207\u53c3\u6578\u4e2d\u60e1\u610f\u4ee3\u78bc\uff0c\u5c07\u8f38\u5165\u503c\u4e2d\u7684\u55ae\u5f15\u865f\u7f6e\u63db\u70ba\u96d9\u5f15\u865f\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9650\u5236\u8f38\u5165\u5b57\u5143\u683c\u5f0f\u4e26\u6aa2\u67e5\u8f38\u5165\u9577\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8cc7\u6599\u5eab\u8a2d\u5b9a\u4f7f\u7528\u8005\u5e33\u865f\u6b0a\u9650\uff0c\u9650\u5236\u67d0\u4e9b\u7ba1\u9053\u4f7f\u7528\u8005\u7121\u6cd5\u4f5c\u8cc7\u6599\u5eab\u5b58\u53d6\u3002")),(0,i.kt)("h3",{id:"distributed-denial-of-service-ddos"},"Distributed Denial of Service (DDoS)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e00\u53f0\u4ee5\u4e0a\u7684\u6a5f\u5668\u5411\u76ee\u6a19\u767c\u9001\u60e1\u610f\u6d41\u91cf\uff0c\u5229\u7528\u5927\u91cf\u7db2\u969b\u7db2\u8def\u6d41\u91cf\u6df9\u6c92\u76ee\u6a19\u4f3a\u670d\u5668\u3001\u670d\u52d9\u6216\u7db2\u8def\uff0c\u7834\u58de\u5b83\u5011\u7684\u6b63\u5e38\u904b\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u58d3\u529b\u6e2c\u8a66\u5de5\u5177\u4e5f\u53ef\u4ee5\u7576\u4f5c\u653b\u64ca\u7684\u5de5\u5177\u3002")),(0,i.kt)("h4",{id:"\u5e38\u898b\u7a2e\u985e-2"},"\u5e38\u898b\u7a2e\u985e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP \u6d2a\u6c34\u653b\u64ca\uff0c\u900f\u904e HTTP GET \u548c POST \u8981\u6c42\u6df9\u6c92\u76ee\u6a19 (ex. High Orbit Ion Cannon (HOIC))"),(0,i.kt)("li",{parentName:"ul"},"\u5229\u7528 UDP \u7b49\u901a\u8a0a\u5354\u5b9a\u5411\u76ee\u6a19\u4f3a\u670d\u5668\u50b3\u9001\u5927\u91cf\u6d41\u91cf(ex.Low Orbit Ion Cannon (LOIC))")),(0,i.kt)("h4",{id:"\u5982\u4f55\u9632\u79a6"},"\u5982\u4f55\u9632\u79a6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9650\u901f\uff1a\u9650\u5236\u4f3a\u670d\u5668\u5728\u7279\u5b9a\u6642\u9593\u7bc4\u570d\u5167\u63a5\u53d7\u7684\u8981\u6c42\u6578\u91cf"),(0,i.kt)("li",{parentName:"ul"},"Web \u61c9\u7528\u7a0b\u5f0f\u9632\u706b\u7246\uff1a\u4f7f\u7528\u5de5\u5177\u4f86\u57fa\u65bc\u4e00\u7cfb\u5217\u898f\u5247\u7be9\u9078 Web \u6d41\u91cf"),(0,i.kt)("li",{parentName:"ul"},"Anycast \u7db2\u8def\u64f4\u6563\uff1a\u5728\u4f3a\u670d\u5668\u548c\u50b3\u5165\u6d41\u91cf\u4e4b\u9593\u7f6e\u5165\u4e00\u500b\u5206\u6563\u5f0f\u96f2\u7aef\u7db2\u8def\uff0c\u4ee5\u63d0\u4f9b\u984d\u5916\u7684\u904b\u7b97\u8cc7\u6e90\u4f86\u56de\u61c9\u8981\u6c42\u3002")),(0,i.kt)("h3",{id:"clickjacking"},"Clickjacking"),(0,i.kt)("h4",{id:"\u653b\u64ca\u65b9\u5f0f"},"\u653b\u64ca\u65b9\u5f0f"),(0,i.kt)("p",null,"\u5229\u7528\u7db2\u9801\u7684 iFrame \u5c07\u5047\u9020\u7684\u7db2\u9801\u8207\u6b63\u5e38\u7684\u7db2\u9801\u8f09\u5165\uff0c\u5728\u900f\u904e iframe visibility \u7684\u5c6c\u6027\u8a2d\u5b9a\uff0c\u5c07\u6b63\u5e38\u7db2\u7ad9\u7684\u7db2\u9801(\u5982\uff1a\u9280\u884c\u7db2\u9801)\u96b1\u85cf\uff0c\u8b93\u4f7f\u7528\u8005\u770b\u5230\u662f\u4e00\u500b\u5047\u9020\u7684\u7db2\u9801(\u5982\uff1a\u4e2d\u734e\u901a\u77e5)\u3002\u7576\u4f7f\u7528\u8005\u8f38\u5165\u5e33\u865f\u5bc6\u78bc\u6642\uff0c\u5176\u5be6\u80cc\u5f8c\u662f\u767b\u5165\u5be6\u969b\u7684\u7db2\u7ad9\u3002\u99ed\u5ba2\u56e0\u6b64\u85c9\u63a5\u7372\u53d6\u8a72\u9280\u884c\u7684\u5e33\u865f\u5bc6\u78bc\u8207\u5b58\u53d6\u6b0a\u9650\u3002"),(0,i.kt)("h4",{id:"\u5982\u4f55\u9632\u79a6-1"},"\u5982\u4f55\u9632\u79a6"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"server response \u8a2d\u5b9a header ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Headers/X-Frame-Options"},"X-Frame-Options"),": SAMEORIGIN / DENY / ALLOW-FROM \u4f86\u6307\u793a\u6587\u4ef6\u662f\u5426\u80fd\u5920\u8f09\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"<frame>"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'header("X-Frame-Options: SAMEORIGIN");\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"server response \u8a2d\u5b9a header ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors"},"CSP: frame-ancestors"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Content-Security-Policy: frame-ancestors 'none';\nContent-Security-Policy: frame-ancestors 'self' https://www.example.org;\n")),(0,i.kt)("h4",{id:"x-frame-options-vs-csp-frame-ancestors"},(0,i.kt)("inlineCode",{parentName:"h4"},"X-Frame-Options")," v.s. ",(0,i.kt)("inlineCode",{parentName:"h4"},"CSP: frame-ancestors")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The major difference is that many user agents implement SAMEORIGIN such that it only matches against the top-level document\u2019s location. This directive checks each ancestor.")),(0,i.kt)("h3",{id:"csrf"},"CSRF"),(0,i.kt)("h4",{id:"\u653b\u64ca\u65b9\u5f0f-1"},"\u653b\u64ca\u65b9\u5f0f"),(0,i.kt)("p",null,"\u5047\u8a2d\u4f7f\u7528\u8005\u66fe\u7d93\u767b\u5165\u904e example.com \u4e26\u53d6\u5f97 Cookie\uff0c\u7576\u4f7f\u7528\u8005\u700f\u89bd\u60e1\u610f\u7db2\u7ad9 evil.com \u6642\uff0c\u7db2\u7ad9\u4e2d\u7684 JavaScript \u53ef\u4ee5\u5c0d example.com/pay?amount=1000 \u767c\u51fa POST Request\uff0c\u700f\u89bd\u5668\u6703\u81ea\u52d5\u5e36\u4e0a example.com \u7684 Cookie\u3002"),(0,i.kt)("h4",{id:"\u9632\u79a6\u65b9\u5f0f"},"\u9632\u79a6\u65b9\u5f0f"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"server \u7aef\u6aa2\u67e5 Referer \u662f\u5426\u70ba\u5408\u6cd5 domain")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const referer = request.headers.referer;\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"server \u7aef\u6bcf\u6b21\u8acb\u6c42\u751f\u6210 CSRF token\uff0c\u4e26\u56de\u50b3\u7d66\u524d\u7aef\uff0c\u4e26\u9a57\u8b49\u6bcf\u6b21\u7684 submit\uff0c\u4e0d\u5408 token \u7684\u4e26\u7121\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'<form action="https://example.com/pay" method="POST">\n  <input type="hidden" name="amount" value="1000" />\n  <input type="hidden" name="csrftoken" value="someRandomToken" />\n  <button type="submit" />\n</form>\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"SameSite: server \u7aef cookie header \u8a2d\u5b9a SameSite\uff0c\u53ef\u4ee5\u4f7f\u7528 Strict \u6216 Lax \u5c07 Cookie \u9650\u5236\u70ba\u540c\u4e00\u7ad9\u9ede\u8acb\u6c42\u3002\n",(0,i.kt)("a",{parentName:"li",href:"https://web.dev/samesite-cookies-explained/"},"SameSite cookies explained"))))}u.isMDXComponent=!0}}]);