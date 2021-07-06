(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[781],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},727:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],o={},p={unversionedId:"web-dev/webpack-overview",id:"web-dev/webpack-overview",isDocsHomePage:!1,title:"Webpack Overview",description:"Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.",source:"@site/docs/web-dev/7-webpack-overview.md",sourceDirName:"web-dev",slug:"/web-dev/webpack-overview",permalink:"/web-dev/webpack-overview",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/web-dev/7-webpack-overview.md",version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web Authentication",permalink:"/web-dev/web-auth"},next:{title:"HTTP Methods",permalink:"/web-fundamental/http-methods"}},s=[{value:"Concepts",id:"concepts",children:[{value:"Entry",id:"entry",children:[]},{value:"Output",id:"output",children:[]},{value:"Loader",id:"loader",children:[]},{value:"Plugin",id:"plugin",children:[]}]},{value:"Example: Bundling a static site",id:"example-bundling-a-static-site",children:[{value:"webpack.config.js",id:"webpackconfigjs",children:[]}]},{value:"Development (webpack-dev-server + Hot Module Replacement)",id:"development-webpack-dev-server--hot-module-replacement",children:[]},{value:"Reference",id:"reference",children:[]}],c={toc:s};function u(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Webpack is a ",(0,i.kt)("strong",{parentName:"p"},"static module bundler")," for modern JavaScript applications. When webpack processes your application, it internally builds a ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/dependency-graph/"},"dependency graph")," which maps every module your project needs and generates one or more bundles."),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Everything is a module (including, js, css, images, html)")),(0,i.kt)("h3",{id:"entry"},"Entry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the starting file to build ",(0,i.kt)("strong",{parentName:"li"},"dependency graph"))),(0,i.kt)("h3",{id:"output"},"Output"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"where to emit the bundles it creates and how to name these files")),(0,i.kt)("h3",{id:"loader"},"Loader"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Loaders are transformations that are applied to the source code of a module. "),(0,i.kt)("li",{parentName:"ul"},"Loaders work at the ",(0,i.kt)("strong",{parentName:"li"},"individual file level")," ",(0,i.kt)("em",{parentName:"li"},"during")," or ",(0,i.kt)("em",{parentName:"li"},"before")," the bundle is generated."),(0,i.kt)("li",{parentName:"ul"},"Loaders allow you to pre-process files as you ",(0,i.kt)("inlineCode",{parentName:"li"},"import")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"load")," them")),(0,i.kt)("h4",{id:"eg"},"E.g."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/babel/babel-loader"},"babel-loader"),": Converts ES6+ JavaScript to ES5 using Babel."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/webpack-contrib/css-loader"},"css-loader"),": Loads ",(0,i.kt)("inlineCode",{parentName:"li"},".css")," files to be used by other loaders.")),(0,i.kt)("h3",{id:"plugin"},"Plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A webpack plugin is a JavaScript object that has an ",(0,i.kt)("inlineCode",{parentName:"li"},"apply")," method. This apply method is called by the webpack compiler, giving access to the entire compilation lifecycle."),(0,i.kt)("li",{parentName:"ul"},"Plugins ",(0,i.kt)("strong",{parentName:"li"},"work at bundle or chunk level")," and usually work at the end of the bundle generation process. "),(0,i.kt)("li",{parentName:"ul"},"Plugins can also modify how the bundles themselves are created. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const pluginName = 'ConsoleLogOnBuildWebpackPlugin';\n\nclass ConsoleLogOnBuildWebpackPlugin {\n  apply(compiler) {\n   //accessing tap lifecycle\n    compiler.hooks.run.tap(pluginName, (compilation) => {\n      console.log('The webpack build process is starting!!!');\n    });\n  }\n}\n\nmodule.exports = ConsoleLogOnBuildWebpackPlugin;\n")),(0,i.kt)("h4",{id:"example-csso-webpack-plugin"},"Example: CSSO Webpack Plugin"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1980).Z})),(0,i.kt)("h4",{id:"plugins"},"Plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/webpack-contrib/terser-webpack-plugin"},"terser-webpack-plugin"),": for Javascript minifying"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/webpack-contrib/mini-css-extract-plugin"},"mini-css-extract-plugin"),": for separating CSS into CSS file per JS file.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"example-bundling-a-static-site"},"Example: Bundling a static site"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"webpack bundle process",src:n(1518).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In this case the plugins are only used for production.")),(0,i.kt)("h3",{id:"webpackconfigjs"},"webpack.config.js"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since webpack v4 the ",(0,i.kt)("inlineCode",{parentName:"li"},"extract-text-webpack-plugin")," should not be used for css. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"mini-css-extract-plugin")," instead."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/env/"},"babel-preset-es2015 -> babel-preset-env")),(0,i.kt)("li",{parentName:"ul"},"Webpack v5 comes with the latest ",(0,i.kt)("inlineCode",{parentName:"li"},"terser-webpack-plugin")," out of the box.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const path = require('path');\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\n\nmodule.exports = {\n  entry: './src/main.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'bundle.js',\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.m?js$/,\n        exclude: /(node_modules|bower_components)/,\n        use: {\n            loader: 'babel-loader',\n            options: {\n                presets: ['@babel/preset-react', '@babel/preset-env']\n            }\n        }\n      },\n      {\n        test: /\\.css$/i,\n        use: [\n          MiniCssExtractPlugin.loader,\n          'css-loader',\n          // postcss-loader should load before css-loader\n          {\n            loader: 'postcss-loader',\n            options: {\n              // pass autoprefixer plugin\n              plugins: [require('autoprefixer')],\n            },\n          },\n        ],\n      },\n    ],\n  },\n  plugins: [new MiniCssExtractPlugin()],\n  // terser-webpack-plugin config before webpack v4\n  minimizer: [\n        new TerserPlugin({\n            terserOptions: {\n                mangle: {\n                  compress: {},\n                },\n            }\n        })\n  ]\n};\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"development-webpack-dev-server--hot-module-replacement"},"Development (webpack-dev-server + Hot Module Replacement)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Webpack injects a whole lot of JS libraries to make HMR work. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"webpack develop",src:n(4719).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Some file changed")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Webpack uses ",(0,i.kt)("inlineCode",{parentName:"p"},"HotModuleReplacementPlugin")," to generate a ",(0,i.kt)("strong",{parentName:"p"},"manifest"),"(a JSON containing list of changed modules) and an ",(0,i.kt)("strong",{parentName:"p"},"update")," file(a JS with the actual change info).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Webpack then tells ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dev-server")," about the changes")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dev-server")," tells ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dev-server/client")," running in the browser via ",(0,i.kt)("inlineCode",{parentName:"p"},"web socket")," by sending ",(0,i.kt)("inlineCode",{parentName:"p"},"invalid")," notification via ",(0,i.kt)("inlineCode",{parentName:"p"},"web socket"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dev-server/client")," then sends the initial hash (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"b2e2d54372f42c1b2352"),") that it got when the app was first loaded to ",(0,i.kt)("inlineCode",{parentName:"p"},"hot/dev-server")," library. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hot/dev-server")," acts like the main interface to all other JS files."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"hot/dev-server")," then calls internal libraries(like JSONP runtime) that are also injected by Webpack to download the manifest file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"JSONP runtime")," uses hash and loads the manifest file from the ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dev-server"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The manifest file contains details about chunks that need to be uploaded to the browser. It\u2019s file name looks like: ",(0,i.kt)("inlineCode",{parentName:"p"},"b2e2d54372f42c1b2352.hot-update.json")," and it\u2019s content looks like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"{\u201ch\u201d:\u201db3632c2a800d437e17df\u201d,\u201dc\u201d:[0]}"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"JSONP runtime")," then uses information contained inside the manifest file to load all the ",(0,i.kt)("strong",{parentName:"p"},"update chunks")," and adds them to the DOM.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Updates JS")," themselves are JS files. They contain information about actual changes that needs to be applied. They are added to the DOM and executed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Updates call HMR runtime with the module id (e.g. moduleId ",(0,i.kt)("inlineCode",{parentName:"p"},"82")," in the above example) and the actual changes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"But HMR runtime itself doesn\u2019t know how to deal with the changes. So it delegates this job to corresponding loaders like ",(0,i.kt)("inlineCode",{parentName:"p"},"react-hot-loader")," runtimes or ",(0,i.kt)("inlineCode",{parentName:"p"},"style-loader")," runtimes to apply changes. ("),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note that these are also injected into the Browser."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If there is no issues with applying the changes, the appropriate runtimes updates the module.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If there are issues (like syntax errors in the change), ",(0,i.kt)("inlineCode",{parentName:"p"},"hot/dev-server")," lib is notified about the error. "))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.javascriptstuff.com/static-site-anatomy/"},"Anatomy of a Static Site")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developpaper.com/analysis-of-webpack-hmr-principle/"},"Analysis of Webpack HMR Principle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07"},"Webpack & The Hot Module Replacement"))))}u.isMDXComponent=!0},1518:function(e,t,n){"use strict";t.Z=n.p+"assets/images/webpack-bundle-process-d3c754d2baf92eb456b1d7fb3d32d3df.png"},4719:function(e,t,n){"use strict";t.Z=n.p+"assets/images/webpack-dev-server-8752ce350f298f80a3d1a09c660975ca.png"},1980:function(e,t,n){"use strict";t.Z=n.p+"assets/images/webpack-plugin-example-f66671a425d7930aa0c9ca67d3af4712.png"}}]);