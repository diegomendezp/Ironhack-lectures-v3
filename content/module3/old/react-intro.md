---
title: "React Intro"
date: 2018-11-26T16:27:46+01:00
draft: false
week: 7
day: 1
weight: 2
pre: "<b>2. </b>"
---

## Learning Objectives

- Understand what JavaScript frameworks (and libraries) are and why we need them.
- Render our first Hello World using React

## Getting Started

```bash
$ npm install -g create-react-app
```

Create a new app
```bash
$ create-react-app <appName>
$ cd <appName>
```

### Scripts

`npm start` => Runs the app in development mode

`npm test` => Execute the test runner

`npm run build` => Builds the app for production and optimizes the build for the best performance

`npm run eject` => __ONE WAY! You CAN'T GO BACK__ it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project


## [Webpack](https://webpack.js.org)

Webpack is a module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles - often only one - to be loaded by the browser.


## Resources

- [Webpack Concepts](https://webpack.js.org/concepts/)
- [Documentation create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)


#
My First Component

- Create a new project

```
$ create-react-app helloworld
$ cd helloWorld
```

> **[danger] 💣**
>
> The name of application should be in lowercase

## Folder Structure

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│ └── favicon.ico
│ └── index.html
│ └── manifest.json
└── src
└── App.css
└── App.js
└── App.test.js
└── index.css
└── index.js
└── logo.svg
└── registerServiceWorker.js
```

> **[info] Info**
>
> You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack.
> You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.

## RenderDom

```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

```javascript
ReactDOM.render(<h1>hello World</h1>, document.getElementById('root'));
```

## Our First Component

### Functional Component

```javascript
...

const HelloWorld = () => <h1>HelloWorld</h1>;

ReactDOM.render(<HelloWorld />, document.getElementById('root'));

```

or

```javascript
...

const HelloWorld = () => {
return (<h1>HelloWorld</h1>)
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));

```

### Class Component

```javascript
import React, { Component } from 'react';
...

class HelloWorld extends Component {
render() {
return (
<h1>HelloWorld</h1>
);
}
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
registerServiceWorker();

```

Even we can do things like this.

```javascript
...
class HelloWorld extends Component {
render() {
return (
<h1>HelloWorld</h1>
);
}
}

const element = <HelloWorld />;


ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
```

