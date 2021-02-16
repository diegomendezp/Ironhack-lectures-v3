# React | Intro



## Lecture outline





- [**Creating large scalable and maintainable front-end applications**](#scalable-frontend-applications)

  - Issue with creating front-end using only HTML, CSS and JS
  - Visual Example: MIRO
  - How does a front-end framework like React solve issue of maintainability and scalability 

  

- [**What is a framework ?**](#what-is-a-framework)

  - Framework includes multiple libraries.

    

  [**What is a front-end framework ?**](#what-is-a-frontend-framework)

  - Framework includes multiple libraries.

  

- [**Client Server Architecture**](#client-server-architecture)

  - Multi-Page Application - image

  - Single-Page Application - image

    

- [**Intorduction to React**](#introduction-to-react)

  - React Docs page
  - React Docs call it a `library`, but often called a `framework`.
  - React uses multiple packages and the Babel transpiler.
  - React key features:
    - Component based, fast development, scalable, all in one file (HTML, JS and data)



- [**React app structure & functionality**](#react-structure-functionality)
  - one `index.html` file
  - funtionality and components are created by the `js` scripts
  - every view change, React simulates browser URL change (React routing)





- [**JSX** ](#jsx)
  - **JSX** is an XML/HTML-like syntax including JS used by React
  - React couples JS and HTML with JSX into so called components.



- [**React Hello World**](#hello-world-example) example - in browser (React CDN and Babel CDN)

  

- [**Build A Simple React App**](#build-simple-react-app) - Code Along

  - Clone the starter  repo and run `npm i`

  - Create files for react app

  - Explain what `webpack` and `babel` packages do.

  - `npm install` React packages `react`, `react-dom`

    

  - Create **`src/index.js`** (explain what does this file do)

    -  `index.js` file injects the React app code into the `index.html`.
    -  `ReactDOM.render` injects react into `div#root`

    

  - Create `src/App.js` react component

    - `render()` (mandatory in class components, takes JSX code)

      

  - Run the webpack dev server - `npm run webpack`.

  - Add state object `{ city: 'Miami'}` to `App` component.

    

- [**Exercise** - Create a component](#create-a-component) `ListComponent.js`

  - Give a hint by importing `ListComponent` in `App.js` and adding it to the `render()` of `App`



- Install [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)





<hr>
<br>



<a name="scalable-frontend-applications"></a>

## Creating large scalable and maintainable 

## front-end applications



<br>

#### Issue with creating front-end using only HTML, CSS and JS

As the frontend applications grow they tend to become unmanageable , hard to maintain and scale.



When a front-end application size comes to a point where it starts encountering architecture problems as it grows, 

like being very hard to organize and interconnect the logic across files and features,

 front-end frameworks come to help.



Framework is meant to help you build applications quicker by addressing common development problems.



Let's take a look on how a complexity of a front-end app grows almost exponentially with every new page added, in the following visual example, to help us start seeing the possible benefits of using the front-end framework.



<br>



#### Visual example: MIRO board



<br>

#### How does a front-end framework like React solve issue of maintainability and scalability 



- **Component-based - **Complex parts of the app are created as components and are easily reusable.

  

- **Separation of concerns** - Enables a clean modular design of the application, enabling developers to work on different parts of the application independently.

  

- **Speed - **React enables us to mainain a clear project structure which speeds up the development. Component-based design makes it quicker to develop the app.

  

- **Collaboration - **React enforces certain design patterns which ensures the same ideas and patterns are implemented by all developers in the team.



- **Speed:** Boilerplate code aimed at addressing common problems makes it easier for you to get your app up and running; .





<br>



<a name="what-is-a-framework"></a>

## What is a Framework?

**A software framework is:**

> A universal, reusable software environment to facilitate faster development of applications and  software solutions.





A framework serves as a development toolset/toolchain and may include:

- Additional packages/libraries,

- Compilers/transpilers,

- Command Line Interface

-  Predefined app structure (folder/file structure and configuration)

- Set of well-tested design principles that must be followed

  

  

**Benefits of using a software framework:**

- **Structure** - In a framework, the overall program's flow of control is not dictated by the user, but by the framework. Therefore a certain rules, structure and design principles must be followed by all developers working on the project, which mitigates bad practices and creation of [unmaintainable code](https://www.hackterms.com/spaghetti%20code).
- **Abstraction** - Frameworks commonly provide methods for most common tasks, a pre-configured toolchain.
- **Scalability** - The above points are what enables us to create complex applications that are easier to maintain and scale up.







<br>

<a name="what-is-a-frontend-framework"></a>



### What is a Front-end Framework ?

A *front-end framework* is a structure and a set of tools (JS libraries and packages)  and logic, put together to help developers build and scale front-end applications faster and easier.







<br>



<a name="client-server-architecture"></a>

## Client-Server Architecture



<br>



### Multi-Page Application

We built applications where every URL request made by the browser, gets a response back from the server, containing an HTML document (View).





Every time the user clicks a link or moves to another view, the whole page is refreshed, because of the new `.html` page (and attached resources)  being returned.

This results in a slow user interaction.



#### [IMAGE](https://i.imgur.com/JCVUhNq.jpg)

![img](https://i.imgur.com/JCVUhNq.jpg)







<br>



### Single Page Applications (SPA)



**NOW:**



<u>Nowadays</u> most Frontend is done  as <u>Single page applications</u> and have  two parts:



- **Frontend (client side)**  an app consisting of only 1 HTML used as the vesell for the app, where all the pages and functionality is created and handled by Javascript. This kind off app communicates to the backend only to get or send JSON data.





- **Backend (server side)** that doesn’t render HTML views,  but only provides data for a client app.

  

  

  ### [OPEN IMAGE](https://i.imgur.com/zgVlwDq.png)

  ![img](https://i.imgur.com/zgVlwDq.png)







<br>





**Single**-**Page Applications** (SPAs) are:

- Web apps that load a **single** **HTML** **page** (and connected `.js` scripts)

- app which **updates** the frontend **views**  as the user interacts with the **app** (without requesting additional `.html` or `.js` files)

- Provides (well constructed) ways to the pass data around pages and components on the frontend.

- Takes the data as a JSON response coming from the API ( as a JSON ). 

- Typical examples of SPAs are Gmail or Twitter.

  

<br>





<a name="introduction-to-react"></a>

## Introduction to React

#### [ReactJS - Official Website](https://reactjs.org/)



- In this module we will learn how to create client side app using the React framework for the front-end: 



- React is a `library`, but often called a `framework`.

- React uses multiple packages and the Babel transpiler  (may be a reason it is refered to as a framework)



Official definition of [React](https://reactjs.org/) is that it is an open-source **JavaScript library** which is used for building user interfaces specifically for Single Page Applications (SPA). 



It’s used for handling view layer (front-end) for web and mobile apps.





**React key features :**

- **The main purpose of React is to be fast, scalable, and simple.**

- allows developers to create large web applications which can change data, without reloading the page. 
- **Component-Based**. Build encapsulated components that have their own state, then use them to make complex UIs.  
- Thanks to JSX, Components are represented and used as **html** tags.
- **All in one file - HTML,  JS (logic) and state (data).**.





<br>





<a name="react-structure-functionality"></a>

### React app structure & functionality



##### - Our React application will have just <u>one HTML page</u>, usually called `index.html`. 

##### - Pages and <u>components are created by the .js scripts loaded with `index.html`</u>.

##### - For every page change <u>React simulates the change of the URL (react routing)</u>.







<br>





<a name="jsx"></a>

### JSX



- React uses [JSX](https://jsx.github.io/) for rendering components.

- JSX is a syntax extension (superset) of JavaScript.

- Instead of artificially separating *technologies* by putting HTML and logic in separate files, React  couples Javascript and HTML with JSX into units called “components”. 











<a name="hello-world-example"></a>

# React  Hello World



#### Let's create just one simple `index.html` file



### [React CDN](<https://reactjs.org/docs/cdn-links.html>)



### [babel-standalone cdn](https://babeljs.io/setup#installation)



##### `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>React Intro</title>
    
    <!-- Load Babel -->
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    
    <!-- React's core library -->
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    
    <!-- This is the ReactDOM library which renders React component and connects React script with DOM. We use it to inject the root component into the DOM -->
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    
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



<br>



##### Let's use JSX to create a React component in our script



##### `index.html`

```jsx
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>React Intro</title>
    
    <!-- Load Babel -->
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    
    <!-- React's core library -->
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    
    <!-- This is the ReactDOM library which renders React component and connects React script with DOM. We use it to inject the root component into the DOM -->
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    
  </head>
  <body>
    <!-- this is the root of the React app-->
    <div id="root"></div>
    
    <script>
    class App extends React.Component {
      render() {
        return(
          <div>
            <h1>Hello IronHackers!</h1>
          </div>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
  
  </body>
</html>
```





<br>



##### Let's update our component `<App>` and create a state object inside it:



##### `index.html`

```jsx
    class App extends React.Component {
      state = {
        name: 'Uros'
      }

      render() {
        return(
          <div>
            <h1>Hello {this.state.name}</h1>
            <p>{ Math.random() * 10 }</p>
          </div>
        )
      }
    }
```



<br>





This page is a great way to try React, but it’s not suitable for production. 

It slowly compiles JSX with Babel in the browser and uses a large development build of React.

We are using it only as an example and it should be the only use case.







<br>







<a name="build-simple-react-app"></a>

## Build a simple React App

### Setup the Environment



## [Code Along - follow step by step](<http://materials.ironhack.com/s/E4MEfrXzftD#setup-the-environment>)



#### Clone the starter code



```bash
mkdir 01-react-basic-setup

cd 01-react-basic-setup

git clone https://github.com/ironhack-labs/react-module-day1-start.git . 

code .
```



<br>



#### Install the depenedencies

```bash
npm install
```



#### Create files for react app



While inside of `react-module-day1-start` folder :

```bash
# Create the folder structure
mkdir dist 
mkdir public
mkdir src

# index.html file is used to show the application in the DOM
touch public/index.html 

# Theses are the JS files that our react app needs
touch src/index.js
touch src/App.js

# CSS file for the React component App
touch src/App.css 
```





<br>



### Create an `public/index.html` 



##### `public/index.html`

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>React Basics</title>
  </head>
  <body>
    
    <!-- this is the root div where React app will be injected to DOM -->
    <div id="root"></div>
    
    <!-- this script is the build/bundle of the React app-->
    <script src="../dist/bundle.js"></script>
  </body>
</html>
```





<br>



### Install React and React Dom

Our `package.json` already has some dev-dependencies, but we need two more packages so let’s install `react` and `react-dom`.



```bash
npm install --save react react-dom
```





If encountering problems with the Ironhack repo, use the version specified in the learning unit:

```bash
npm install --save react@16.3.2 react-dom@16.3.2 
```









### React - Development Toolchain



##### What do `babel` and `webpack` packages do ?



`babel` and `webpack` packages are part of so called React Development Toolchain and are used toghether with React.

React development Toolchain is a set of packages that provide us the development environment and structure. 





- `babel` and `webpack` packages work together, to convert the code written in JSX syntax into ES5 `js` and output the code ready to be loaded in the browser.



#### <u>babel</u>

- Takes the ES6 or ES7 `js` code and converts it to ES5 (to ensure backward compatibility)

  

#### <u>webpack</u>

-  ` webpack` creates the javascript bundles, takes multiple `js` files and bundles them into one (or few for big apps).

-  `webpack` takes all the `js` files from the `src/` folder and bundles them all to  `bundle.js` file ready for deployment/production.









#### `<App />` becomes the root connection to React and a parent for all other components. 

## <u>`<App />` is refered to as a Root Component</u> (of any app you build with React)



<br>



##### Everything starts / links from `App.js`,  all react components. 

##### We call `App.js` our root component.



<br>



#### Create  `src/App.js`. This is a React component .





##### `src/App.js`

```js
//	src/App.js

import React from "react";
import "./App.css";

class App extends React.Component {
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





<br>



#### `render()`

**`render()`** is the only **mandatory** method in a React class component. 

It should exist and it should return a valid JSX element (including `null` - (or `null` )).





<br>



#### Let's add  style to `App.css` -  Webpack also bundles `.css` files .



##### `src/App.css`

```css
.App {
  margin: 15px;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid lightblue;
  padding: 20px;
}
```

​	



<br>



#### Create **`src/index.js`** (and what does this file do)



##### -   `index.js` file injects the React app code into the `index.html`.



##### -	We use `ReactDOM.render` to inject the main component `App` into the `div#root` .



##### `src/index.js`

```js
//	src/index.js - Injects the App to DOM

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
```





<br>





##### This file `src/index.js` is the main connection to our react app and the root component `App.js` which is injected into the DOM  `<div id="root">` element.





<br>





#### Run the development server command -  `npm run webpack `



<span style="color: red">( If needed update `webpack-cli`  :</span>   `npm i webpack-cli@3.1.1 --save-dev` )







#### This will create a build in the background and serve the app on localhost.



#### Visit `localhost:3000` 



Every time you make any change that needs to affect DOM, you need to rebundle using the same command (`npm run webpack`).









#### Creating a  build which creates a static `bundle.js` file



#### Update the `package.json`

```js
"build": "webpack src/index.js -o dist/bundle.js",
```





#### Run the script to create the build and then serve the file with Live server

```bash
npm run build
```











<br>



### Update the `App` component and add the state object 



##### `src/App.js`

```jsx
//	src/App.js

import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "Barcelona",
    };
  }

  render() {
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
      	<h3>Welcome to {this.state.city} </h3>
      </div>
    );
  }
}

export default App;
```





<br>



<a name="create-a-component"></a>

### Exercise - Create a component



Create a component `List.js` and insert if multiple times in the `App.js` component.



Here is a hint:



##### `src/App.js`

```js
import React from 'react';
import ListComponent from './ListComponent';							//  <-- ADD
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "Barcelona",
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello IronHackers! </h1>
        <h3>Welcome to {this.state.city} </h3>
        <ListComponent />															// <-- ADD
        <ListComponent />															// <-- ADD
      </div>
    );
  }
}
```



<br>



**Possible solution**

##### `src/ListComponent.js`

```jsx
import React from 'react';

class ListComponent extends React.Component {
  render() {
    return (
      <div className="ListComponent">
        <h5>This is my List Component</h5>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </div>
    );
  }
}

export default ListComponent;

```





<br>





### Install React Dev Tools

`

## [React Dev Tools](<https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en>)

It lets you inspect the props and state of any of the components in your tree



If you are in <span style="color: red">development</span> the icon will be <span style="color: red">red</span>.

If you are in <span style="color: blue">production react app</span> the icon will be <span style="color: blue">blue</span>.





Try it on our page and then on `facebook.com`





<br>



# Additional Resources



#### Why do we use frameworks ?

Technically, you don't need a framework. If you're making a really really simple site (think of the web back in 1992), you can just do it all with hard-coded HTML and some CSS.



And if you want to make a modern webapp, you don't actually need to use a framework for that, either.



You can instead choose to write all of the logic you need yourself, every time. You can write your own data-persistence/storage layer, or - if you're too busy - just write custom SQL for every single database access. You can write your own authentication and session handling layers. And your own template rending logic. And your own exception-handling logic. And your own security functions. And your own unit test framework to make sure it all works fine. And your own... [goes on for quite a long time]



Then again, if you do use a framework, you'll be able to benefit from the good, usually peer-reviewed and very well tested work of dozens if not hundreds of other developers, who may well be better than you. You'll get to build what you want rapidly, without having to spend time building or worrying too much about the infrastructure items listed above.



You can get more done in less time, and know that the framework code you're using or extending is very likely to be done better than you doing it all yourself.



And the cost of this? Investing some time learning the framework









----

**EXERCISE EXPLANATION**

- Clone the repo:

```bash
git clone https://github.com/ross-u/react-example-and-exercise.git
```

- Navigate to the folder `react-example-and-exercise` and run `npm i`

```bash
cd react-example-and-exercise

npm i
```



- Inside of `src` folder create a new file `List.js` for the new component.
- `List.js` component should be displaying the following content:

```html
<div>
  <h5>This is my List Component</h5>
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
  </ul>
</div>
```



- **`import`** the component in App.js  and add it inside the render after the existing content.
- Run the app development server by running the command `npm run webpack` . This creates the build and serves it automatically in the browser.
- Open `localhost:3000` to see the rendered app in the browser.





---



<br>

## Additional Material



#### [Article: Advantages and disadvantages of using a front-end framework](https://stackoverflow.blog/2020/02/03/is-it-time-for-a-front-end-framework/)