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

function component () {
  const obj = {
    props: {},
    state: {}
  }
  
  return obj;
}


function higher (func) {
  const componentObj = func();
  componentObj.currency = 'USD';  
  componentObj.props.amount = 0;
  
  /* or
  componentObj.props.currency = 'USD'; 	*/
  return componentObj;
}


var enhancedObj = higher(commponent);

console.dir(enhancedObj);

```





<br>





## React | Higher Order Components



Higher Order Functions in React are called  - Higher Order Components.



Higher Order Component is a function that takes a component object. We use it to inject some additional properties and functionality to our components.



![img](https://i.imgur.com/kMNaggj.jpg)





<br>



## Getting Started - Code Along



# SERVER

#### Clone the server repository

```bash
git clone https://github.com/ross-u/React-Code-Along---Project-Management-Server.git

cd React-Code-Along---Project-Management-Server/

code .
```

```bash
# git branch -a

git checkout solution

npm i

npm run dev
```





<br>



# CLIENT

#### Clone the client repository

```bash
git clone https://github.com/ross-u/React-Code-Along---Project-Managemet-Client.git

cd React-Code-Along---Project-Managemet-Client/

npm i

code .
```



<br>



### Create a new component `hoc/Higher.js`



```bash
mkdir src/components/hoc

touch src/components/hoc/Higher.js
```



<br>



##### `hoc/Higher.js`

```jsx
import React from 'react';
import axios from 'axios';

// function component
const Higher = WrappedComponent => {
  
  const userData = {
    username: 'Bob',
  };
  
  const color = 'MediumSpringGreen';

  const getData = () => {
    return axios.get('https://api.chucknorris.io/jokes/random');
  };

  // Return a new enhanced function component
  return (props) => {
    return (
      <div>
        <WrappedComponent {...props} getData={getData} user={userData} color={color}/>
      </div>
    );
  };
};

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

//	...
//			...
//					...

  getJoke = () => {					//		<---	ADD
     this.props.getData()		//		This is the method injected by the HOC Higher
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
        
        <h2>JOKE</h2>
        <p>{this.state.joke}</p>                                         {/*  ADD */}
        
        <button onClick={this.props.history.goBack} >Go Back</button>
      
        <button onClick={this.getJoke} >GET JOKE</button>                {/*  ADD */}
      </div>
    )
  }
}

export default Higher(TaskDetails);
```

****



<br>



### Try Wrapping the `Navabar` component in the `Higher` and printing the passed `props.user.username` or `color` in the navbar. 