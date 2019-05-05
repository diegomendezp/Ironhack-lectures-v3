# ReactJS | JSX and Elements



#### What is JSX

In react we use JSX for creating components. We create `.js `files and write  JSX inside of the file.

SImply put,  JSX is the JavaScript with HTML, together in one `js` file. 

JSX stands for JS and XML (eXtensible Markup Language).

JSX is a syntax extension to JavaScript.



You can think of the JSX as the Handlebars view file, difference is that  JSX comes with the full power of JavaScript.



#### Why JSX

Instead of creating 2 different files, one containing JS and other HTML, JSX enables for both to be saved in one file.

This helps create one file which represents one component, so that in one file we have HTML, logic  and data for that component.



#### React without JSX ?

React [doesn’t require](https://reactjs.org/docs/react-without-jsx.html) using JSX,  but JSX makes it easy to write React, and with JSX React shows  more detailed error and warning messages.

We write React apps in JSX and then the app is compiled to one JavaScript file by Babel. But during development we write in JSX. This makes development process much easier and faster.



If we are not using JSX, we would write React in the very verbose way with React's `createElement` method:



**Edit  `src/App.js`** 

```jsx
import React, { Component } from 'react';
import './App.css';
const element = React.createElement;
//	React.createElement(component, props, ...children)

class App extends Component {
  render() {
    return element('div', { className: 'App' }, [
      element('h1', null, 'Hello Ironhackers'),
      element('h3', null, 'React without JSX')
    ]);
  }

  /*
  render() {
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
      	<h3>React Intro</h3>
      </div>
    );
  } 
    */
}


export default App;
```







## Embedding Tags in JSX



We can show the example of embedding tags using JSX in our `index.js`

**src/index.js**

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
/* 
ReactDOM.render(
  <App />,
  document.getElementById('root')
); 
*/
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```







## Embedding Expressions in JSX



We can also embed expressions using JSX, let's try it on our `index.js`

```jsx
import React, { Component } from 'react';
import './App.css';

const user = {
  name: 'Uros',
  avatarUrl: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello {user.name}! </h1>
      	<h3>Welcome To - React JSX</h3>
        <img src={user.avatarUrl} />
        <p>2 + 2 = {2 + 2} </p>
      </div>
    );
  } 
}

export default App;
```



### Self closing tags like `<img>` must be closed 

Self closing tags like `<img>` must be closed with slash at the end:

Following will throw an error

```jsx
<img src={user.avatarUrl} >
```







### One enclosing tag in every JSX expression



When we create HTML elements using JSX we need to have 1 enclosing container element that will contain all Elements of that component, otherwise  compilation will throw SyntaxError: **Adjacent JSX elements must be wrapped in an enclosing tag** . 



Following will throw an error

```jsx
      <div className="App">
        <h1> Hello {user.name}! </h1>
      	<h3>Welcome To - React JSX</h3>
        <img src={user.avatarUrl} />
      </div>
      <p>2 + 2 = {2 + 2} </p>
// SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag
```









Let's create our `App.js` root component again and use it to embed some more expressions.



##### Edit    `src/App.js`

```jsx
import React, { Component } from "react";
import "./App.css";

class App extends Component {

  render() {

    const formatName = (user) => {
      return `${user.firstName} ${user.lastName}`;
    }
   
    const user = {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png'
    };
    
    const element = (
      <h2>Hello, {formatName(user)} </h2>
    );
 
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        {element}
      </div>
    );
  }
}

export default App;
```









### JSX is an Expression Too

This means that you can use JSX inside of `if` statements and `for` loops, assign it to variables, accept it as arguments, and return it from functions.



##### Edit    `src/App.js`

```jsx
  const displayAvartar = (userObj) => {
    if(userObj.avatarUrl){
      return <img src={userObj.avatarUrl} />
    } 
    else {
      return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
    }
  }
...
  return (
    <div className="App">
      <h1> Hello Ironhackers! </h1>
      {element}
      {displayAvartar(user)}
    </div>
```





If we delete the `user.avatatUrl` we will default to the ironhack logo 