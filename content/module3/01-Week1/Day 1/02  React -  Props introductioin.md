# React | Props introduction



<br>



### Clone the starter code repo

```bash
git clone https://github.com/ross-u/02-react-props-intro.git

cd 02-react-props-intro

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



### Component can have internal `state` 

- `state` is an object  in react `class` components used to save the data/state related to the current component.

- `state` represents data that is private to every React `class` component itself.





## [Step 1 (using `state` ) - Image](https://i.imgur.com/v896ecx.jpg)

<br>



##### `MyComponent.js`

```js
// src/MyComponent.js

import React from 'react';

class MyComponent extends React.Component {
  state = {
    name: 'Sarah',
  };

  render() {
    return (
      <div>
        <p> Hello {this.state.name}</p>
      </div>
    );
  }
}

export default MyComponent;


// `state` represents data that is private to every class component itself
// ( it stores data that only component can access and change)

```



<br>



## Passing data to a component



React components have ability to receive data from outside. Meaning that we can pass them / inject data into the components.

This is done by creating custom attributes on each component, called props.





### [Step 2 - passing `props` - Image](https://i.imgur.com/ZquC84W.jpg)



##### `App.js`

```jsx
// src/App.js

import React from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        {/*          city="Barcelona" is a prop ( data we pass to MyComponent )  */}
        <MyComponent city="Barcelona" />	
        <MyComponent />
      </div>
    );
  }
}

export default App;
```





<br>



##### `MyComponent.js`

```jsx
// src/MyComponent.js

import React from 'react';

class MyComponent extends React.Component {
  state = {
    name: 'Sarah',
  };

  render() {
    return (
      <div>
        <p> Hello {this.state.name}</p>
        <p> Welcome to {this.props.city}</p>  
      {/*  
        props represent atributtes set on the component
      	and are used to pass data to the component from the outside  
      */}
      </div>
    );
  }
}

export default MyComponent;
```





<br>



### [Summary of using `props` and `state` - Image](https://i.imgur.com/ju1Ulxq.jpg)



<br>

#### Note for the teacher:

Images are included in the the repo README



<br>