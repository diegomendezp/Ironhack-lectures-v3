# React | Higher Order Components



![img](https://i.imgur.com/kMNaggj.jpg)





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

