# React | Higher Order Components



<br>



### What is a Higher Order Component (HOC) ?



Before starting to use HOC, let's simplify it and see what HOC actually are and how they work. 

Once you understand that HOC is just a regular function it will be easy to implement it in React. Yes, HOC is just a plain old JavaScript function.



<br>



### JS - Higher Order Functions



Higher Order function is simply a function that takes another function as an argument and works with it. It can invoke that function, use it, or maybe enhance it before returning.



Let's remind ourselves - functions are objects. This means that we can create a property on a function using the dot notation, same as we would do it with an object.



```js
// Component mock

function printHello () {
  console.log('H E L L O !')
}

function higher (func) {
   func.myString = 'Bananarama!';

   return func;
}


var enhancedPrintHello = higher(printHello);

console.dir(enhancedPrintHello);

```



<br>



### Using Higher Order Functions in React



Let's do a mock example on how we can use functions to enhance objects passed through the function. 

Essentially, each component created in React is just an object, so let's simulate the possible use case of Higher Order Functions in React.



```js
// Component mock - simple object representing a component

var App = {
  state: { name: 'Uros'},
  props: {}
}

function higher (component) {
  component.currency = 'USD';  
  component.props.amount = 0;
  
  /* or
  componentObj.props.currency = 'USD'; 	*/


   return componentObj;
}


var enhancedApp = higher(App);

console.log(enhancedApp);

```



<br>





## React | Higher Order Components



Higher Order Functions in React are called  - Higher Order Components.



Higher Order Component is a function that takes a component object. We use it to inject some additional properties and functionality to our components.



![img](https://i.imgur.com/kMNaggj.jpg)





<br>



## Getting Started - Code Along



#### Clone the server repository

```bash
git clone https://github.com/ross-u/React-Code-Along---Project-Management-Server.git

cd React-Code-Along---Project-Management-Server/

code .

git branch -a

git checkout solution

npm i

npm run dev
```





#### Clone the client repository

```bash
git clone https://github.com/ross-u/React-Code-Along---Project-Managemet-Client.git

cd React-Code-Along---Project-Managemet-Client/

npm i

code .

npm start
```







### Create a new component `hoc/Higher.js`



```jsx
//	hoc/Higher.js

import React from 'react'
import axios from 'axios';

const Higher = (WrappedComponent) => {

  const colors = ['red', 'pink', 'orange', 'green', 'yellow', 'purple', 'blue', 'cyan'];
  const randomColor = colors[Math.floor(Math.random() * 7)];

  const getData = () => {
    return axios.get('https://api.chucknorris.io/jokes/random')
  }

  return (props) => {
    return(
      <div  style={{ color: randomColor}}>
        <WrappedComponent {...props} getData={getData} />
      </div>
    )
  }
}

export default Higher; 
```







#### Now we can pass use this component to wrap another component with it.



<br>



#### Import `Higher` component to `TaskDetails.js`



```jsx
// components/tasks/TaskDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import Higher from './../hoc/Higher'

...
	...
		...

  handleClick = () => {
     this.props.getData()			//		This is a promise created by "axios.get"
      .then((response) =>  {
        this.setState({ title: response.data.value})
      })
  } 

  render(){
    return(
      <div>
        <h3>TASK DETAILS</h3>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>

        <button onClick={this.handleClick} >GET JOKE</button>
        <button onClick={this.props.history.goBack} >Go Back</button>
      </div>
    )
  }
}

export default Higher(TaskDetails);
```

****