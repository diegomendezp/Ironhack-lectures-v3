# Webpack

https://webpack.js.org/

```bash
# Install `Webpack` dependency
npm i webpack

# Run the webpack executable
# node_modules/.bin/webpack <entryPointFile> <whereToOutputBundle>
  node_modules/.bin/webpack index.js bundle.js
  
 # `index.js` is now loaded as a module within the `bundle.js`.
```





## Webpack config file and running

```bash
# create webpack config file
touch webpack_config.js
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

