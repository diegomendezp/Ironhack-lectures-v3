# React | State



### 	State



- One of the extra features that React ` class Components`  have is `state`.



- React via JSX enables us to create a component file with HTML and JS ( DOM and logic together) 



- State is an object that lives in the class component and it enables us to store data inside the component.



- In short, `state` is an object where we can store data for the class components.



- React has built in method for changing the component state.



<p style='color: #005892; background: #D1EDF6; padding: 5px 10px; border-radius: 5px;'>The changes in component  <span style='background: #C9E4EC; padding: 2px 7px; font-family: monospace'>props</span>  or  <span style='background: #C9E4EC; padding: 2px 7px;  font-family: monospace'>state</span>   trigger React to re-render the components and potentially update the DOM.</p>





```bash
npx create-react-app react-state-lecture

cd react-state-lecture 

code .

npm start
```





**src/components/User.js**

```jsx
// User.js		--> functional component
import React from "react";

function User(props) {
  return (
    <div>
      <h2 style={ { backgroundColor: props.theColor } z}>
        {/* Curly braces in JSX means processing in a JavaScript way, this is the meaning of the outer braces. Inner braces are from the object with style properties, to be applied*/}
        Hello, {props.firstName}!
      </h2>
    </div>
  );
}

export default User;
```





**src/App.js**

```jsx
import React, { Component } from 'react';
import User from './components/User';

// App.js
class App extends Component {
  state = {
    userA: {
      firstName: "Harper",
      avatarUrl: "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    },
    userB: {
      firstName: "Ana",
      avatarUrl: "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
    }
  };

  render() {
    // ...
    return (
      <div className="App">
        <User firstName={this.state.userA.firstName} />
        <User firstName={this.state.userB.firstName} />
        {/* ... */}
      </div>
    );
  }
}

export default App;
```

s



#### Looks similar to handlebars, but It is not.

This may feel like Handlebars `views`, but `.hbs` is stored on the backend, populated on backend and then sent to the frontend as `html`. 

React `components`, `props` and `state` exist on the front end , on the browser.







#### Changing the state

To change the state, some kind of event needs to be triggered.

Usually changes to the state occur when the user interacts with the app.





- Inside `App.js` a create **`<button onClick={} > Click me </button>`** element.

- Create properties on `state`: `clickCount = 0`  and `backColor = yellow`
- Let's create a `clickHandler()` method after the state object, which changes the `state`.
- Set the `clickHandler` as a callback in the **`<button onClick={this.clickHandler} > `**
- Also pass the rest of the values from the `App.js` `state` to each `<User />` element and update the `User.js` component to show `avatarUrl`, `firstName`





**src/App.js**

```jsx
class App extends Component {
  state = {
    userA: {...},
    userB: {...},
    clickCount: 0,
    backColor: "yellow"
  };

  clickHandler = () => {
    this.setState( { clickCount: this.state.clickCount + 1 } );
  };

  render() {
    return (
      <div className="App">
        <h1> React - state and props</h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}>Click me</button>

        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          image={this.state.userA.avatarUrl}
        />
        <User
          firstName={this.state.userB.firstName}
          image={this.state.userB.avatarUrl}
        />
      </div>
    );
  }
}
```





**src/components/User.js**

```js
// src/components/User.js
import React from "react";

function User(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello, {props.firstName}!
      </h2>
      <img src={props.image} width="350" height="350" />
    </div>
  );
}

export default User;
```





#### [List of Supported Events - with links](<https://reactjs.org/docs/events.html#supported-events>)







### Setting state



### [React `setState()`](<https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly>)

`setState` is React's method we use to update the state.

Always  use `setState()` method to update `state` and triggers DOM re-render.

 If we don't use it to update the `state`  DOM will not be rendered.

It is wrong to directly assign values to the state object.





### Do Not Modify State Directly



For example, this will not re-render a component:

**src/App.js**

```js
clickHandler = () => {
  this.state.clickCount = this.state.clickCount + 1 ;	// WRONG - This will not re-render a component   
}
 
```



#### What do we usually store in the `class` component's `state`?

- Boolean values - isLoggedIn, 

- User details
- Lists of data
- Form data
- And anything else we need







#### React state - full syntax including `constructor` and `super`



**We need to use `constructor` `super` syntax if we want to initialize state or bind methods, you don’t need to implement a constructor for your React component.**



Do not call setState in the constructor .

Constructor is the only place where we can assign value to the `state` of the component directly, using `this.state`

```jsx
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```





#### Difference between the `state` and `props`?

The main difference is that `state` is **defined directly inside the component** and

`props` are sent to the component from outside of it.



Another important thing is : only the component itself can change it's state. It is `class` component which defines the `state` inside itself and one that updates it at the appropriate time.







## [LECTURE CODE EXAMPLE REPO](https://github.com/ross-u/React-State-example-)



### EXERCISE AND QUESTIONS

#### [EXERCISE & QUESTIONS](<https://gist.github.com/ross-u/2d24d750327f368760895d5b94e0d426>)



#### [EXERCISE & QUESTIONS - SOLUTION](<https://gist.github.com/ross-u/2ab3a3d1fb327c7c20c1473f1898d8e5>)











## Additional resources



[DOM Events in React -  reactjs.org](https://reactjs.org/docs/events.html)



[Function vs. class components](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108)



[Understanding the Fundamentals of State in React](https://medium.com/the-andela-way/understanding-the-fundamentals-of-state-in-react-79c711be677f)



[Binding event handlers in React components](https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb)

