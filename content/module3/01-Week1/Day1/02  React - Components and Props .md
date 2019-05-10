# React | Components & Props

## Learning Goals

- Know how the Component tree works
- How the DOM is rendered in the browser
- What props are in React components
- Syntax for passing props to a component





## Introduction - Know how the Component tree works



**Components are the core building block of React apps.** 

A typical React app is composed of multiple components. 

React app structure can be represented as a **component tree** - having one root component (usually named “App” component) and then multiple nested child & descendant components.





React lets us define components as **classes** or **functions**.



## Class Components

Class components provide more features than functional components. They have state, render method, life-cycle methods (used to do something depending if the component has loaded, or is about to unload).



#### Create a class component `src/WelcomeCompoennt.js`



##### `src/WelcomeComponent.js`

```jsx
import React, { Component } from 'react'

class WelcomeComponent extends Component {
  render() {
    return (
      <div className='welcome'>
        <h1>Welcome Component</h1>
      </div>
    )
  }
}

export default WelcomeComponent;
```



##### `App.css`

```css
.welcome {
  border: 4px solid rebeccapurple;
  padding: 20px 50px;
  text-align: center;
}
```





#### Update `App.js` and import the `WelcomeComponent`

##### `src/App.js`

```jsx
import WelcomeComponent from './WelcomeComponent';
...
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        {element}
        {displayAvatar(user)}
        <WelcomeComponent />				{/* Imported class component */}
      </div>
    );

```







## Function Components

**Functional components** are just JavaScript functions and they let you return some jsx to the DOM.

They **can receive props** but they **don’t have state**.

We will talk about the state a bit later.





#### Let's create a function component and import it to  `App.js` .



##### `src/User.js`

```jsx
import React from "react";

function User() {
  return <h2>Hello, user!</h2>;
}

export default User;
```





##### `App.js` - Clean the code and import `User.js`

```js
import User from './User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeComponent />				{/* class component */}

        <User />				        {/* function component */}
      </div>
    );
  }
}
```





## Props

Props are the data/variables coming from outside of the component that is passed into the component. 

In JSX, when a prop is sent to a component, it is set as an HTML attribute.





#### Let's update `App.js` and pass some data to its child component `USer.js` by using  `props`



##### `src/App.js`

```jsx
      <div className="App">
        <WelcomeComponent />

        <User firstName='Sarah' />
      </div>
```





##### `src/User.js` - Let's update it to pass the props

```jsx
import React from "react";

function User(props) {
  return <h2>Hello, {props.firstName} !</h2>;
}

export default User;
```





In functional components `props` are received as a first parameter of the function.

We access the individual props by using a dot notation `{props.firstName}`









#### Passing props to class component



If we are **inside a class component**, **we** would have to **use** **`this` keyword**  when accessing props object - **`{this.props.firstName}**`



##### `src/App.js`

```js
      <div className="App">
        <WelcomeComponent cityName='Barcelona' />

        <User firstName='Sarah' />
      </div>
```



##### `src/WelcomeComponent.js`

```jsx
import React, { Component } from 'react'

class WelcomeComponent extends Component {
  render() {
    return (
      <div className='welcome'>
        <h1>Welcome to Ironhack - {this.props.cityName}</h1>
      </div>
    )
  }
}

export default WelcomeComponent;
```







## When do you use props?

## [When do you use props - Visual examples](<http://materials.ironhack.com/s/Bk4BY-xrE#when-do-you-use-props>)



#### (1) Props are like function arguments

We use props to make components re-usable.

Props usually control how a component is displayed so passing in **different props** often results in the component **looking or behaving differently**.



##### `src/App.js`

```js
      <div className="App">
        <WelcomeComponent cityName='Barcelona' />

        <User firstName='Sarah' />
        <User firstName='Harper' />
        <User firstName='Ana' />
      </div>
```





### (2) Share data between components

By definition, props let you **share data** between a parent component and a child component. 

This way we can do so called "**prop drilling**" if needed.

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ca57ec2aeceab7798d6c5d0013d58061.png)







### (3) Components from npm

There are many pre-made components on npm. Let’s use one as the example!



```bash
npm i react-player
```





#### Import and use the component in `App.js`

##### `App.js`

```jsx
// import the npm package (which is a component)
import ReactPlayer from "react-player";

	return (
      <div className="App">
        <WelcomeComponent cityName="Barcelona" />
        <User firstName='Sarah' />
        <User firstName='John' />
        <User firstName='Anna' />

        {/* our Vimeo video */}
        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
      
      	{/* our YouTube video */}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5"
        />
      </div>
    );
```









## [React.Component docs](<https://reactjs.org/docs/react-component.html>)