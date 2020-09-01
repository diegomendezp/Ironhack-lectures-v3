# ReactJS | JSX and Elements



<br>



### Clone the starter code repo

```bash
git clone https://github.com/ross-u/01-react-jsx.git

cd 01-react-jsx

code .
```





<br>



### Install the dependencies

```bash
npm i
```





<br>



### (Teacher) Create a new branch

```bash
git checkout -b wd-ft-mmm-yyyy
```



<br>



### What is JSX

- In react we use JSX for creating components. We create `.js ` files and write  JSX inside of the file.

- Simply put,  JSX is the JavaScript with HTML, together in one `js` file. 

- JSX stands for JS and XML (eXtensible Markup Language).

- JSX is a syntax extension to JavaScript.





#### Compared to Handlebars

- Handlebars is used for server side rendering to **create static HTML files/views**.
- JSX is used to speed up the creation of Front end apps, and needs to be compiled.

-  JSX comes with the full power of JavaScript.











### Why JSX

Instead of creating 2 or 3 different files, one containing JS, other HTML, (and 3rd having data), JSX enables for these functionalities to be used in one file.



This helps create one file which represents one component, so that in one file we have HTML, logic  and data for that component.









## React without JSX ?

​	React [doesn’t require](https://reactjs.org/docs/react-without-jsx.html) using JSX,  but JSX makes it easy to write React, and with JSX React shows  more detailed error and warning messages.



We write React apps in JSX and then the app is compiled to one JavaScript file by Babel. 

But during development we write in JSX. This makes development process much easier and faster.



If we are not using JSX, we would write React in the very verbose way with React's `createElement` method:



#### **Create  `src/AppWithoutJSX.js`** 



#####  `src/AppWithoutJSX.js`

```jsx
import React from 'react';
import './App.css';
const element = React.createElement;

// `createElement` syntax :
//	React.createElement(component, props, ...children)


class App extends React.Component {
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





<br>





## Embedding Tags in JSX



We can show the example of embedding tags using JSX in our `index.js`



##### `src/index.js`

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





<br>





## Embedding Expressions in JSX



We can also embed expressions using JSX, let's try it on our `index.js`

```jsx
import React, { Component } from 'react';
import './App.css';

const user = {
  name: 'Uros',
  avatar: 'https://i.imgur.com/iFe8f8v.jpg'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello {user.name}! </h1>
      	<h3>React JSX - embedding expressions</h3>
        <img src={user.avatar} />
        <p> 2 + 2 =  {27 + 233}  ??? </p>
      </div>
    );
  } 
}

export default App;
```



<br>



### Self closing tags like `<img>` must be closed 

Self closing tags like `<img>` must be closed with slash at the end:

Following will throw an error

```jsx
<img src={user.avatar} >
```





<br>



### One enclosing tag in every JSX expression



When we create HTML elements using JSX we need to have 1 enclosing container element that will contain all Elements of that component, otherwise  compilation will throw SyntaxError: **Adjacent JSX elements must be wrapped in an enclosing tag** . 



Following will throw an error

```jsx
      <div className="App">
        <h1> Hello {user.name}! </h1>
      	<h3>Welcome To - React JSX</h3>
        <img src={user.avatar} />
      </div>
      <p>2 + 2 = {2 + 2} </p>
// SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag
```









Let's create our `App.js` root component again and use it to embed some more expressions.



##### Edit    `src/App.js`

```jsx
import React, { Component } from "react";
import "./App.css";

const user = {
  firstName: 'Uros',
  lastName: 'Cirkovic',
  avatar: 'https://i.imgur.com/iFe8f8v.jpg'
};
    

const elementH2 = <h2>Hi, { user.firstName } </h2>;


const formatName = (userObj) => {
  return `${userObj.firstName} ${userObj.lastName}`;
}
 


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> Hello {formatName(user)}! </h1>

        { elementH2 }
      </div>
    );
  }
}

export default App;
```





<br>





### JSX is an Expression Too

This means that you can use JSX inside of `if` statements and `for` loops, assign it to variables, accept it as arguments, and return it from functions.



##### Edit    `src/App.js`

```jsx
//	...

//		...

const displayAvartar = (userObj) => {
  if (user.avatarUrl) {
    return <img src={userObj.avatar} />;
  } else {
    return <img src="https://i.imgur.com/h1iCSwY.png" />;
  }
}

  // ...


render() {
  return (
    <div className="App">
        <h1> Hello {formatName(user)}! </h1>

        { element }
      
      	{ displayAvatar(user) }
      
    </div>
}
```





If we delete the `user.avatatUrl` we will default to the ironhack logo 

## In JSX `class` attribute  changes to   `className` 



As `class` is a JS keyword, when specifying a class in the HTML element in React we use `className`





<br>



### Element attribute values

When specifying attributes value in HTML elements, quotes are used to specify string literals,

and curly brackets are used to specify JavaScript expressions or reference variables.



```js
const element1 = <img src={user.avatar} />;
const element2 = <img src="https://www.images.com/myimage.jpg" />;
```





<br>





#### JSX Prevents Injection Attacks



By default, `ReactDOM` escapes (sanitazes) any values embedded in `JSX` before rendering them.

 **This helps prevent XSS (cross-site-scripting) attacks, and 3rd parties embedding malicious JS code through input or data sent**



XSS - Cross site scripting is vulnerability that allows attacker to run his own client side scripts into the web pages viewed by other users.





<br>





#### JSX Represents Objects - <span style='color: red'>This last part may be unnecessary ↧</span> 



HTML elements created in JSX are objects, and therefore can be stored and passed around when using JSX syntax.



#### [Babel repl](https://babeljs.io/repl)



```js
// Transpile in Babel to ES5 - copy to the babel repl

const element = (<h1 className="greeting"> Hello, world! </h1>);
                 
// This element is an JSX object and can be passed around.
```







The above will result in the code transpiled to vanila JS (using React library):



```js
var element = React.createElement("h1", {
  className: "greeting"
}, "Hello, world!");
```

