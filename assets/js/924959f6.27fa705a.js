(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[4175],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7696:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={},l={unversionedId:"fe-test/index",id:"fe-test/index",isDocsHomePage:!1,title:"Frontend Test",description:"The more your tests resemble the way your software is used, the more confidence they can give you.",source:"@site/docs/fe-test/1-index.md",sourceDirName:"fe-test",slug:"/fe-test/index",permalink:"/fe-test/index",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/fe-test/1-index.md",version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Skip List",permalink:"/data-structure/skip-list"},next:{title:"Jest: Test with Mock Functions",permalink:"/fe-test/jest-test-with-mock-functions"}},p=[{value:"Types of Test",id:"types-of-test",children:[]},{value:"Jest: Coverage Report",id:"jest-coverage-report",children:[]},{value:"Jest: Set up Guide",id:"jest-set-up-guide",children:[]},{value:"Reference",id:"reference",children:[]}],u={toc:p};function c(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The more your tests resemble the way your software is used, the more confidence they can give you.")),(0,i.kt)("h2",{id:"types-of-test"},"Types of Test"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Frontend Test Trophy",src:n(8516).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"End to End test"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A helper robot that behaves like a user to click around the app and verify that it functions correctly. Sometimes called ",(0,i.kt)("inlineCode",{parentName:"li"},"functional testing")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"e2e"),". "),(0,i.kt)("li",{parentName:"ul"},"Framework: ",(0,i.kt)("a",{parentName:"li",href:"https://www.cypress.io/"},"cypress")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Integration test"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It validate ",(0,i.kt)("strong",{parentName:"li"},"how multiple units of your application work together")," but are more lightweight than E2E tests. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jestjs.io/"},"Jest")," uses ",(0,i.kt)("inlineCode",{parentName:"li"},"jsdom")," under the hood to ",(0,i.kt)("strong",{parentName:"li"},"emulate common browser APIs")," with less overhead than automation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jestjs.io/"},"Jest")," has robust mocking tools to stub out external API calls."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Unit test"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Verify that individual, isolated parts work as expected."),(0,i.kt)("li",{parentName:"ul"},"They are easy to write, but can miss the big picture."),(0,i.kt)("li",{parentName:"ul"},"Framework: ",(0,i.kt)("a",{parentName:"li",href:"https://jestjs.io/"},"Jest")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Static test"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Catch typos and type errors as you write the code. "),(0,i.kt)("li",{parentName:"ul"},"Framework:  ",(0,i.kt)("inlineCode",{parentName:"li"},"ESLint"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Typescript"))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"jest-coverage-report"},"Jest: Coverage Report"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jest Coverage Report",src:n(3281).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Statements")," represent ",(0,i.kt)("strong",{parentName:"li"},"instructions")," that have been executed at least once during the unit tests. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Branches")," represent if ",(0,i.kt)("strong",{parentName:"li"},"statements which conditions")," have been fulfilled at least once during the unit tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Functions")," represent ",(0,i.kt)("strong",{parentName:"li"},"functions")," that have been called at least once during the unit tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Lines")," represent ",(0,i.kt)("strong",{parentName:"li"},"code lines")," that have executed at least once during the unit tests.")),(0,i.kt)("h2",{id:"jest-set-up-guide"},"Jest: Set up Guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/tutorial-react"},"Testing React Apps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://frontend-digest.com/setting-up-testing-library-with-nextjs-a9702cbde32d"},"Setting Up Testing Library with NextJS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/testing-recipes.html"},"React: Testing Recipes"))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests"},"Static vs Unit vs Integration vs E2E Testing for Frontend Apps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://frontend-digest.com/setting-up-testing-library-with-nextjs-a9702cbde32d"},"Setting Up Testing Library with NextJS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/penx/combining-storybook-cypress-and-jest-code-coverage-4pa5"},"Combining Storybook, Cypress and Jest Code Coverage"))))}c.isMDXComponent=!0},8516:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fe-test-trophy-f570b8bb0ed986313be2fa2a46f62886.jpeg"},3281:function(e,t,n){"use strict";t.Z=n.p+"assets/images/jest-coverage-022feab0507fe7030a8803c887bff371.png"}}]);