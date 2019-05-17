# React | Intro

## Learning Goals

- Understand what a Single-Page Application (SPA) is.
- Render our first `Hello World` using React
- Create our first React app from scratch



## Client-Server Architecture

We built applications where every URL request made by the browser, is responded back by server  with an HTML document (View).





##### **BEFORE:**

Every time the user clicks a link or needs to view or send data, the whole page is refreshed, resulting in a slow user interaction.



#### [IMAGE](https://i.imgur.com/dVoa0bb.png)

![img](https://i.imgur.com/dVoa0bb.png)









**NOW:**



<u>Nowadays</u> mostly Applications are created  as <u>Single page applications</u> and have  two parts:



- **Backend (a.k.a. server side)** that doesn’t render HTML,  but provides APIs for a client app.

  

- **Frontend (a.k.a. client side)**  a visible user interface, handles user input and communicates with the backend through APIs.

  

  ![img](https://i.imgur.com/6ggb1Sx.jpg)



**Frontend:**

- Client-Side
- Usually visible to users as an interactive interface 





**Backend:**

- Comprised of server(s) and database(s)
-  backend of the application will handle the retrieval of information from the database  and receiving request and  sending response to the client-side.







![mg](/home/ross-u/.config/Typora/typora-user-images/1557006554835.png)







### Single Page Applications (SPA)

**Single**-**Page Applications** (SPAs) are:

- Web apps that load a **single** **HTML** **page** and
-  **dynamically update** that **page** as the user interacts with the **app**
- taking the data as a response coming from the API ( as a JSON ). 



In a pure SPA, all UI interaction occurs on the client side, through JavaScript and CSS.



#### Typical examples of SPAs are Gmail or Twitter.



#### Our React application will have just one HTML page, usually called index.html. 

#### The framework will then dynamically load pieces of code (templates and components), in response to user navigation and change the URL to reflect it.





## What is a Framework?

**A software framework is:**

> A universal, reusable software environment to facilitate faster development of applications and  software solutions.



```
Technically, you don't need a framework. If you're making a really really simple site (think of the web back in 1992), you can just do it all with hard-coded HTML and some CSS.

And if you want to make a modern webapp, you don't actually need to use a framework for that, either.

You can instead choose to write all of the logic you need yourself, every time. You can write your own data-persistence/storage layer, or - if you're too busy - just write custom SQL for every single database access. You can write your own authentication and session handling layers. And your own template rending logic. And your own exception-handling logic. And your own security functions. And your own unit test framework to make sure it all works fine. And your own... [goes on for quite a long time]

Then again, if you do use a framework, you'll be able to benefit from the good, usually peer-reviewed and very well tested work of dozens if not hundreds of other developers, who may well be better than you. You'll get to build what you want rapidly, without having to spend time building or worrying too much about the infrastructure items listed above.

You can get more done in less time, and know that the framework code you're using or extending is very likely to be done better than you doing it all yourself.

And the cost of this? Investing some time learning the framework
```









####  In this module we will learn how to create client side of the app using a framework for the frontend: 



 React is a `library`, but often called a `framework`.

React uses multiple APIs and the Babel transpiler (may be a reason it is refered to as a framework)



A framework may include:

- Support programs,
- Compilers,
- Code libraries,
- Toolsets,
- APIs (Application Programming Interfaces).







## Introduction to React

Official definition of [React](https://reactjs.org/) is that it is an open-source **JavaScript library** which is used for building user interfaces specifically for Single Page Applications (SPA). It’s used for handling view layer for web and mobile apps.





React key features :

- allows developers to create large web applications which can change data, without reloading the page. 
- **The main purpose of React is to be fast, scalable, and simple.**
- **Component-Based**. Build encapsulated components that have their own state, then compose them to make complex UIs.  Component logic is written in JavaScript instead of templates.









**JSX**. React uses [JSX](https://jsx.github.io/) for rendering components.

JSX is a syntax extension to JavaScript.

**All in one file - HTML, JS (logic) and state** - ( Instead of artificially separating *technologies* by putting markup and logic in separate files, React  couples Javascript and HTML with JSX into units called “components”. )





**Single-Way data flow**. In React, a set of immutable values are passed to the component’s renderer as properties in its HTML tags. Components cannot directly modify any properties but can pass a call back function with the help of which we can do modifications. This complete process can be summarized as “**properties** (values) **flow down; actions flow up**”.

















# React  Hello World



#### Let's create just one simple `index.html` file



### [React CDN](<https://reactjs.org/docs/cdn-links.html>)



### [babel-standalone cdn](<https://github.com/babel/babel-standalone#usage>)



**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>React Intro</title>
    <!-- React's core library -->
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    
    <!-- This is the ReactDOM library which renders React component and connects React script with DOM. We use it to inject the root component into the DOM -->
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    
    <!-- Load Babel -->
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <!-- this is the root of the React app-->
    <div id="root"></div>
    
    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello React Ironhackers!</h1>,
        document.getElementById('root')
      );
    </script>
  </body>
</html>
```





This page is a great way to try React, but it’s not suitable for production. 

It slowly compiles JSX with Babel in the browser and uses a large development build of React.

We are using it only as an example and it should be the only use case.







## A real React App from scratch!

### Setup the Environment



## [Code Along - follow step by step](<http://materials.ironhack.com/s/E4MEfrXzftD#setup-the-environment>)

```
git clone https://github.com/ironhack-labs/react-module-day1-start
cd react-module-day1-start
npm install
```



While inside of `react-module-day1-start` folder:

```bash
mkdir dist public src
```







## Create an `public/index.html` 



**public/index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Ironhackers Reacting</title>
  </head>
  <body>
    
    <!-- this is the root of the React app-->
    <div id="root"></div>
    
    <!-- this script is the build of the React app-->
    <script src="../dist/bundle.js"></script>
  </body>
</html>
```





### Install React and React Dom

Our `package.json` already has some dev-dependencies, but we need two more packages so let’s install `react` and `react-dom`.

```bash
npm install --save react@16.3.2 react-dom@16.3.2 
```









#### `bundle.js` script file will be created by running ` webpack` which will take all files from the `src/` folder and then bundle it all in 1 single `.js` file.



#### In `index.js` we hook our React app to the `index.html` and the `div#root` element. 



#### We use `ReactDOM.render` to inject the main component `App` into the `div#root` .

#### `<App />` becomes the root connection to React and a parent for all other components. 



#### Create **`src/index.js`**



**src/index.js**

```js
//	src/index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
```



#### This file serves as our main react component (root component) which is loaded into the DOM element with id root. 

#### Everything starts / links from `App.js`,  all react components.







#### Create  `src/App.js`. This is a React component .





**src/App.js**

```js
//	src/App.js

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
      	<h3>React Intro</h3>
      </div>
    );
  }
}

export default App;
```



`render()` is the only mandatory method on a React component, it should exist and it should return a valid JSX element (including `null`).





#### Let's add  style to `App.css` -  Webpack also bundles `.css` files .



**src/App.css**

```css
.App {
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
```

​	





#### Run the development server command -  `npm run webpack `

<span style="color: red">If needed update `webpack-cli`  :</span>   `npm i webpack-cli@3.1.1 --save-dev`





#### This will create a build in the background and serve the app on localhost.



#### Visit `localhost:3000` 



Every time you make any change that needs to affect DOM, you need to rebundle using the same command (`npm run webpack`).









#### Creating a  build which creates a static `bundle.js` file



#### Update the `package.json`

```js
"build": "webpack src/index.js -o dist/bundle.js",
```









### Install React Dev Tools



## [React Dev Tools](<https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en>)

It lets you inspect the props and state of any of the components in your tree



If you are in <span style="color: red">development</span> the icon will be <span style="color: red">red</span>.

If you are in <span style="color: blue">production react app</span> the icon will be <span style="color: blue">blue</span>.





Try it on our page and then on `facebook.com`