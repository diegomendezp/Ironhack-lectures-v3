# React | Props introduction





### Passing data to a component



React components have ability to receive data from outside. Meaning that we can pass them / inject data into the components.

This is done by creating custom attributes on each component, called props.



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





