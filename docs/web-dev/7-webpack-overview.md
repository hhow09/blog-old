# Webpack Overview
Webpack is a **static module bundler** for modern JavaScript applications. When webpack processes your application, it internally builds a [dependency graph](https://webpack.js.org/concepts/dependency-graph/) which maps every module your project needs and generates one or more bundles.

## Concepts
- Everything is a module (including, js, css, images, html)

### Entry
- the starting file to build **dependency graph**

### Output
- where to emit the bundles it creates and how to name these files

### Loader 
- Loaders are transformations that are applied to the source code of a module. 
- Loaders work at the **individual file level** *during* or *before* the bundle is generated.
- Loaders allow you to pre-process files as you `import` or `load` them

#### E.g.
- [babel-loader](https://github.com/babel/babel-loader): Converts ES6+ JavaScript to ES5 using Babel.
- [css-loader](https://github.com/webpack-contrib/css-loader): Loads `.css` files to be used by other loaders.

### Plugin
- A webpack plugin is a JavaScript object that has an `apply` method. This apply method is called by the webpack compiler, giving access to the entire compilation lifecycle.
- Plugins **work at bundle or chunk level** and usually work at the end of the bundle generation process. 
- Plugins can also modify how the bundles themselves are created. 

```javascript
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
   //accessing tap lifecycle
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('The webpack build process is starting!!!');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
```

#### Example: CSSO Webpack Plugin
![](/img/web-dev/7-webpack-overview/webpack-plugin-example.png)

#### Plugins
- [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin): for Javascript minifying
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin): for separating CSS into CSS file per JS file.


---
## Example: Bundling a static site
![webpack bundle process](/img/web-dev/7-webpack-overview/webpack-bundle-process.png)

- In this case the plugins are only used for production.

### webpack.config.js
- Since webpack v4 the `extract-text-webpack-plugin` should not be used for css. Use `mini-css-extract-plugin` instead.
- [babel-preset-es2015 -> babel-preset-env](https://babeljs.io/docs/en/env/)
- Webpack v5 comes with the latest `terser-webpack-plugin` out of the box.

```javascript
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
            }
        }
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // postcss-loader should load before css-loader
          {
            loader: 'postcss-loader',
            options: {
              // pass autoprefixer plugin
              plugins: [require('autoprefixer')],
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  // terser-webpack-plugin config before webpack v4
  minimizer: [
        new TerserPlugin({
            terserOptions: {
                mangle: {
                  compress: {},
                },
            }
        })
  ]
};
```


---
## Development (webpack-dev-server + Hot Module Replacement)
- Webpack injects a whole lot of JS libraries to make HMR work. 

![webpack develop](/img/web-dev/7-webpack-overview/webpack-dev-server.png)

1. Some file changed
2. Webpack uses `HotModuleReplacementPlugin` to generate a **manifest**(a JSON containing list of changed modules) and an **update** file(a JS with the actual change info).
3. Webpack then tells `webpack-dev-server` about the changes
4. `webpack-dev-server` tells `webpack-dev-server/client` running in the browser via `web socket` by sending `invalid` notification via `web socket`.
5. `webpack-dev-server/client` then sends the initial hash (e.g. `b2e2d54372f42c1b2352`) that it got when the app was first loaded to `hot/dev-server` library. 
    - `hot/dev-server` acts like the main interface to all other JS files.
6. `hot/dev-server` then calls internal libraries(like JSONP runtime) that are also injected by Webpack to download the manifest file.
7. `JSONP runtime` uses hash and loads the manifest file from the `webpack-dev-server`.
8. The manifest file contains details about chunks that need to be uploaded to the browser. It’s file name looks like: `b2e2d54372f42c1b2352.hot-update.json` and it’s content looks like this: `{“h”:”b3632c2a800d437e17df”,”c”:[0]}`
9. `JSONP runtime` then uses information contained inside the manifest file to load all the **update chunks** and adds them to the DOM.
10. `Updates JS` themselves are JS files. They contain information about actual changes that needs to be applied. They are added to the DOM and executed.
11. Updates call HMR runtime with the module id (e.g. moduleId `82` in the above example) and the actual changes.
12. But HMR runtime itself doesn’t know how to deal with the changes. So it delegates this job to corresponding loaders like `react-hot-loader` runtimes or `style-loader` runtimes to apply changes. (
    - Note that these are also injected into the Browser.

13. If there is no issues with applying the changes, the appropriate runtimes updates the module.

14. If there are issues (like syntax errors in the change), `hot/dev-server` lib is notified about the error. 

## Reference
- [Anatomy of a Static Site](https://www.javascriptstuff.com/static-site-anatomy/)
- [Analysis of Webpack HMR Principle](https://developpaper.com/analysis-of-webpack-hmr-principle/)
- [Webpack & The Hot Module Replacement](https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07)

