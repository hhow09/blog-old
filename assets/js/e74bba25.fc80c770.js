(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[357],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3709:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},p={unversionedId:"react/react-prop-drilling",id:"react/react-prop-drilling",isDocsHomePage:!1,title:"Props Drilling and State Management",description:"What is Prop Drilling?",source:"@site/docs/react/1-react-prop-drilling.md",sourceDirName:"react",slug:"/react/react-prop-drilling",permalink:"/docs/react/react-prop-drilling",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/react/1-react-prop-drilling.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Index",permalink:"/docs/index"},next:{title:"Compound Component",permalink:"/docs/react/react-compund-component"}},c=[{value:"What is Prop Drilling?",id:"what-is-prop-drilling",children:[]},{value:"Pros of Prop Drilling",id:"pros-of-prop-drilling",children:[]},{value:"Why is Prop Drilling a Problem",id:"why-is-prop-drilling-a-problem",children:[]},{value:"Solutions",id:"solutions",children:[{value:"1. Pass component in <code>props.children</code>",id:"1-pass-component-in-propschildren",children:[]},{value:"2. Context API",id:"2-context-api",children:[]},{value:"3. State management tools ex.Redux, Mobx...",id:"3-state-management-tools-exredux-mobx",children:[]}]},{value:"Redux v.s. Context API",id:"redux-vs-context-api",children:[{value:"Same",id:"same",children:[]},{value:"Redux",id:"redux",children:[]},{value:"React Context API",id:"react-context-api",children:[]},{value:"Conclusion",id:"conclusion",children:[]}]},{value:"reference",id:"reference",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-prop-drilling"},"What is Prop Drilling?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Many articles see prop drilling is a problem."),(0,i.kt)("li",{parentName:"ul"},"But it is actually an design pattern."),(0,i.kt)("li",{parentName:"ul"},"Remind that when we first learn React, we learned: ",(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/lifting-state-up.html"},"Lifting State Up"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor."))),(0,i.kt)("li",{parentName:"ul"},"This is one of the design patterns for state management")),(0,i.kt)("h2",{id:"pros-of-prop-drilling"},"Pros of Prop Drilling"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"good for reusing UI"),(0,i.kt)("li",{parentName:"ul"},"no extra abundance"),(0,i.kt)("li",{parentName:"ul"},"easy for pros tracing")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"why-is-prop-drilling-a-problem"},"Why is Prop Drilling a Problem"),(0,i.kt)("p",null,"Think about below scenario."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ComponentNeedingProps")," is the component who really need ",(0,i.kt)("inlineCode",{parentName:"li"},"content")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ComponentNeedingProps")," is deeply nested inside ",(0,i.kt)("inlineCode",{parentName:"li"},"FirstComponent"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"SecondComponent")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ThirdComponent")," while they three don't actually need ",(0,i.kt)("inlineCode",{parentName:"li"},"content")),(0,i.kt)("li",{parentName:"ul"},"When there are more of these kind of prop, it brings difficulties on maintaining code.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'export default function App() {\n  return (\n    <div className="App">\n      <FirstComponent content="Who needs me?" />\n    </div>\n  );\n}\n\nfunction FirstComponent({ content }) {\n  return (\n    <div>\n      <h3>I am the first component</h3>;\n      <SecondComponent content={content} />|\n    </div>\n  );\n}\n\nfunction SecondComponent({ content }) {\n  return (\n    <div>\n      <h3>I am the second component</h3>;\n      <ThirdComponent content={content} />\n    </div>\n  );\n}\n\nfunction ThirdComponent({ content }) {\n  return (\n    <div>\n      <h3>I am the third component</h3>;\n      <ComponentNeedingProps content={content} />\n    </div>\n  );\n}\n\nfunction ComponentNeedingProps({ content }) {\n  return <h3>{content}</h3>;\n}\n')),(0,i.kt)("h2",{id:"solutions"},"Solutions"),(0,i.kt)("h3",{id:"1-pass-component-in-propschildren"},"1. Pass component in ",(0,i.kt)("inlineCode",{parentName:"h3"},"props.children")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"props.children")," is an attribute returns by ",(0,i.kt)("inlineCode",{parentName:"li"},"React.createElement"),"\u200b. It refers to child node."),(0,i.kt)("li",{parentName:"ul"},"We can pass contents like ",(0,i.kt)("inlineCode",{parentName:"li"},"HTML tag"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"component")," down to child component"),(0,i.kt)("li",{parentName:"ul"},"we just ",(0,i.kt)("inlineCode",{parentName:"li"},"hide the pros drilling inside children"),"."),(0,i.kt)("li",{parentName:"ul"},"Reference: ",(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx"},"Children in JSX"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'function App() {\n  const content = "Who needs me?";\n  return (\n  <div className="App">\n    <FirstComponent>\n      <SecondComponent>\n        <ThirdComponent>\n          <ComponentNeedingProps content={content}  />\n        <ThirdComponent>\n      </SecondComponent>\n    </FirstComponent>\n  </div>\n  );\n}\n//rewrite\n\nfunction FirstComponent({ content }) {\n  return (\n    <div>\n      <h3>I am the first component</h3>;\n      {children}\n    </div>\n  );\n}\n')),(0,i.kt)("h3",{id:"2-context-api"},"2. Context API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"Context API")," to Context.Consumer and render it with ",(0,i.kt)("a",{parentName:"li",href:"https://zh-hant.reactjs.org/docs/render-props.html"},"render props"),"\u65b9\u5f0f\u63a5\u6536\u3002"),(0,i.kt)("li",{parentName:"ul"},"Another design pattern: ",(0,i.kt)("a",{parentName:"li",href:"https://mortenbarklund.com/blog/react-architecture-provider-pattern/"},"Provider Pattern"),"\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'export default function App() {\n  return (\n    <div className="App">\n      <Context.Provider value={content}>\n        <FirstComponent content="Who needs me?" />\n      </Context.Provider>\n    </div>\n  );\n}\nfunction ComponentNeedingProps() {\n  const content = Context.Consumer;\n  return <Context.Consumer>{(content) => <h3>{content}</h3>}</Context.Consumer>;\n}\n')),(0,i.kt)("h3",{id:"3-state-management-tools-exredux-mobx"},"3. State management tools ex.Redux, Mobx..."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"redux-vs-context-api"},"Redux v.s. Context API"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Why don't we just replace Redux with native Context?")),(0,i.kt)("h3",{id:"same"},"Same"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"both are for ",(0,i.kt)("inlineCode",{parentName:"li"},"state management")),(0,i.kt)("li",{parentName:"ul"},"both to avoid ",(0,i.kt)("inlineCode",{parentName:"li"},"props drilling"))),(0,i.kt)("h3",{id:"redux"},(0,i.kt)("a",{parentName:"h3",href:"https://react-redux.js.org/"},"Redux")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Redux construct an global \u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"store")," to store all state."),(0,i.kt)("li",{parentName:"ul"},"Redux is single data flow (FLUX)"),(0,i.kt)("li",{parentName:"ul"},"Redux update store with action(constant) and reducer (pure function)"),(0,i.kt)("li",{parentName:"ul"},"react-redux: every component inside Provider can use ",(0,i.kt)("inlineCode",{parentName:"li"},"connect")," HOF or ",(0,i.kt)("inlineCode",{parentName:"li"},"useSelector")," hook to subscribe to some part of the state.")),(0,i.kt)("h4",{id:"pros"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"provide middleware-friendly API to ",(0,i.kt)("inlineCode",{parentName:"li"},"let you do something between action and reducer"),", (ex. redux-thunk, redux-saga)"),(0,i.kt)("li",{parentName:"ul"},"good definition based on FLUX: ",(0,i.kt)("inlineCode",{parentName:"li"},"store"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"reducer"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"action")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://react-redux.js.org/api/hooks#useselector"},"useSelector")," hook to subscribe state change\u3002")),(0,i.kt)("h4",{id:"cons"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"more dependency"),(0,i.kt)("li",{parentName:"ul"},"more definition and naming (action,reducer)")),(0,i.kt)("h3",{id:"react-context-api"},(0,i.kt)("a",{parentName:"h3",href:"https://zh-hant.reactjs.org/docs/context.html"},"React Context API")),(0,i.kt)("h4",{id:"hooks-createcontext-usecontext"},"hooks: createContext, useContext"),(0,i.kt)("h4",{id:"pros-1"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"native in React, no extra dependency"),(0,i.kt)("li",{parentName:"ul"},"flexible"),(0,i.kt)("li",{parentName:"ul"},"can use multiple Provider state")),(0,i.kt)("h4",{id:"cons-1"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"too little definition, may cause difference in codes."),(0,i.kt)("li",{parentName:"ul"},"When a context value is changed, all components that useContext will re-render.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When the nearest ",(0,i.kt)("inlineCode",{parentName:"p"},"MyContext.Provider")," above the component updates, this Hook will trigger a re-render with the latest context value passed to that MyContext provider.\nEven if an ancestor uses React.memo or shouldComponentUpdate, a re-render will still happen starting at the component itself using useContext.")),(0,i.kt)("h4",{id:"update-2021-use-context-selector"},"Update 2021: ",(0,i.kt)("a",{parentName:"h4",href:"https://github.com/dai-shi/use-context-selector"},"use-context-selector")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"is currently developing"),(0,i.kt)("li",{parentName:"ul"},"useContextSelector:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This hook returns context selected value by selector."),(0,i.kt)("li",{parentName:"ul"},"It will only accept context created by createContext. It will trigger re-render if only the selected value is referentially changed.")))),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Redux is still an popular state management solution for large applications."),(0,i.kt)("li",{parentName:"ul"},"if in smaller application or performance is not an issue, Context could be a good solution too."),(0,i.kt)("li",{parentName:"ul"},"they can be used together")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"reference"},"reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/javascript-in-plain-english/how-to-avoid-prop-drilling-in-react-using-component-composition-c42adfcdde1b"},"How To Avoid Prop Drilling in React Using Component Composition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jasonlam-swatow.github.io/posts/react-state-patterns/"},"React \u72c0\u614b\u7ba1\u7406\u6a21\u5f0f"))))}d.isMDXComponent=!0}}]);