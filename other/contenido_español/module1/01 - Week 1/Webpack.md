# Webpack

https://webpack.js.org/



## Modules

In [modular programming](https://en.wikipedia.org/wiki/Modular_programming), developers break programs up into the smaller chunks of functionality called a *module*.

Simply put, Webpack is a module bundler for JavaScript. 

Webpack enables modular front-end development and we may use any file in our project as a *module*. 

Webpack bundles all the modules from our project together in one or more bundle files.



When Webpack processes your application, it internally builds a [dependency graph](https://webpack.js.org/concepts/dependency-graph/) which maps every module your project needs and generates one or more *bundles*.

Webpack supports modules written in a variety of languages and preprocessors, via *loaders*. The Webpack has  *loaders* for various popular languages and language processors including [TypeScript](https://www.typescriptlang.org/), [ESNext (Babel)](https://babeljs.io/), [Sass](http://sass-lang.com/), [Less](http://lesscss.org/).





## Concepts

### Entry 

An **entry point** indicates which module webpack should use to start building its internal [dependency graph](https://webpack.js.org/concepts/dependency-graph/).

Default  value is `./src/index.js`,

We can configure a different or multiple entry points:



**webpack.config.js**

```js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```



## Output

The **output** property tells Webpack where to emit/save the *bundles* it creates and how to name these files. 

It defaults to `./dist/main.js` for the main output file and to the `./dist` folder for any other generated file.

Output can be configured, by specifying an `output` field in your configuration:

**webpack.config.js**

```javascript
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```



## Loaders

Out of the box, Webpack only understands JavaScript and JSON files. **Loaders** allow Webpack to process other types of files and convert them into valid [modules](https://webpack.js.org/concepts/modules) that can be consumed by your application and added to the dependency graph. 

Webpack loaders are also commonly used when using different dialects of JavaScript (ES6, ESNext, JSX ...) and transform them to the plain JavaScript.



To set how the loaders are used, we have to create the "rule" objects in the `module.rules` array. 

Each rule object has 2 configuration properties: 

1. The `test` property tells webpack (by regex match) which files should be transformed.
2. The `use` property indicates which loader should be used to transform those files.

**webpack.config.js**

```javascript
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { 
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['env'] }
        } 
      } // use can be an object - example rule object for the babel loader
    ]
  }
};
```

The above tells Webpack's compiler the following:

*"Hey webpack compiler, when you <u>come across</u> ( aka **test** ) a path that resolves to a '.txt' file inside of a `require()`*/*`import` *statement,* **use** *the* `raw-loader` *to transform it before you add it to the bundle."*



## Plugins

Plugins can be used to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

In order to use a plugin, you need to `require()` it in the `webpack.config.js` file and add it to the `plugins` array. Most plugins are customizable through options. 

Since you can use a plugin multiple times in the `webpack.config.js` for different purposes, you need to create an instance by calling it with the `new` operator.



**webpack.config.js**

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```

*There are many plugins that webpack provides out of the box! Check out the* [list of plugins](https://webpack.js.org/plugins)*.*

[Learn more about the Plugins here](https://webpack.js.org/concepts/plugins).



## Mode

https://webpack.js.org/concepts/mode/

The `mode`  parameter can be used to enable webpack's built-in optimizations. 

Possible values are `production`, `development` or `none`.  The default value is `production`.

```javascript
module.exports = {
  mode: 'production'
};
```



## Browser Compatibility

Webpack supports all browsers that are [ES5-compliant](https://kangax.github.io/compat-table/es5/) (IE8 and below are not supported). 

If you want to support older browsers, you will need to load a polyfil before using these expressions. In webpack documentation this process is called [Shimming](https://webpack.js.org/guides/shimming/).









```bash
# Install `Webpack` dependency
npm i webpack --save-dev

# Run the webpack executable
# node_modules/.bin/webpack <entryPointFile> <whereToOutputBundle>
  node_modules/.bin/webpack index.js bundle.js
  
 # `index.js` is now loaded as a module within the `bundle.js`.
```





## Webpack config file and running

```bash
# create webpack config file
touch webpack.config.js
```

```html
<!-- Create an index.html in the root of the project and link the bundle script-->

<body>
  <script src="./dist/bundle.js"></script>
</body>
```



```javascript
// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
    path: path.join(__dirname, 'dist') // Name of the output folder
  }
}
```



```bash
# Run the webpack (no need to specify the input and output files as config file now exists)
node_modules/.bin/webpack
```



```javascript
// In the package.json - create build and watch command
  "scripts": {
    "build": "webpack",
    "watch": "webpack --w",
  },
```



```bash
# Run the npm command

npm run build
#or
npm run watch
```



## Webpack Loaders - 

https://webpack.js.org/loaders/

```bash
# create webpack config file
touch webpack_config.js
```



```javascript
// webpack.config.js
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
    path: path.join(__dirname, 'dist') // Name of the output folder
  }
  module: {
    rules : [		// rules are held within an array
      {
        test: /.js$/  // Tells webpack to match againsta regular expression - look for a ll files that end with .js
        exclude: /(node_modules)/,
        use: {	// specify which loader we want to use
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
```



```bash
# Inntall the wanted Loader dependencies
npm install babel-loader@7  babel-core babel-preset-env --save-dev

# create `.babelrc` file - config file for babel
touch .babelrc
```

```javascript
// .babelrc
{
  "presets": ["env"]
}
```





```bash
# Inntall the wanted Loader dependencies
npm install babel-preset-stage-0 --save-dev

# create `.babelrc` file - config file for babel
touch .babelrc
```



```javascript
// Modify the `webpack.config.js`
...
.....
use: {	// specify which loader we want to use
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0']
          }
        }
```



```javascript
// Modify the `.babelrc`
{
  "presets": ["env", "stage-0"]
}
```



### Using babel-loader for React - 

```bash
npm i react react-dom --save

// Install `serve` to run a lightweight server 
sudo npm install serve -g
```



```javascript
// Create React Component in the index.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const MyComponent = () => <h1>Webpack &amp;  React</h1>

ReactDOM.render(<MyComponent />, document.getElementById('react-container'))
```



```html
<!-- Add the `#react-container` div in the HTML body-->
<body>
  <div id="react-container"></div>
  <script src="./dist/bundle.js"></script>
</body>
```



```javascript
// In the package.json - modify build command
  "scripts": {
    "build": "webpack && serve",
     ...
  },
```



```javascript
// Modify the `webpack.config.js`
...
.....
use: {	// specify which loader we want to use
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0', 'react']
          }
        }
```



```javascript
// Modify the `.babelrc`
{
  "presets": ["env", "stage-0", "react"]
}
```



```bash
# Install the React preset dependency
npm install babel-preset-react --save-dev
```

