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





#### Clone the  repository

```bash
git clone https://github.com/ross-u/react-higher-order-component-example.git

cd react-higher-order-component-example
```

```bash
rm -rf .git

npm i
```





<br>



### Run the app, and take a look at `ArticlePreview` and `Navbar` components.







<br>





## Creating a HOC - Higher Order Component





### Create a new component `hoc/Higher.js`



```bash
mkdir src/hoc

touch src/hoc/Higher.js
```



<br>



##### `hoc/Higher.js`

```jsx
//   /hoc/Higher.js

import React from 'react';
import axios from 'axios';

// HOC starts with a wrapper function that returns a HOC
function Higher(WrappedComponent) {

  const color = "SkyBlue";

  const getData = () => {
    return axios.get('https://api.chucknorris.io/jokes/random');
  };
  
// HOC takes another component and injects data or functionality into it
  return function (props) { 
    return (<WrappedComponent {...props} getData={getData} color={color} />)
  }
}


export default Higher;
```







#### Now we can use this component to wrap another component with it.



<br>



#### Import `Higher` component within the `ArticlePreview.js`



##### `/components/ArticlePreview.js`

```jsx
//  /components/ArticlePreview.js

import React, { Component } from 'react';
import Higher from '../hoc/Higher';                {/* <--  IMPORT  */}


class ArticlePreview extends Component {
	//	...
  
  //			...


  loadMore = () => {                               {/* <--  ADD  */}
    const pr = this.props.getData();
    pr
      .then((response) => this.setState({ content: response.data.value }))
      .catch((err) => console.log(err));
  }
  

  render() {
    return (
      <div className="article-preview">
        <h3>{this.state.title ? this.state.title : null}</h3>
        <p>{this.state.description ? this.state.description : null}</p>

        {                                          {/* <--  ADD  */}
          this.state.content
            ? <p>{this.state.content}</p>
            : <div className="fade"> 
            		<button 
                  className="btn-more" 
                  onClick={this.loadMore}
                 >
                  More
            		</button>
          		</div>
        }

      </div>
    )
  }
}

export default Higher(ArticlePreview);     {/* <--  UPDATE  */}

```

****



<br>



### Try Wrapping the `Navabar` component in the `Higher` and use the passed `props.color` in the navbar. 