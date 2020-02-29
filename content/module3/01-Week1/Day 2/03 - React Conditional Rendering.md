# React | Conditional Rendering





## [CLONE STARTER REPO](https://github.com/ross-u/03-react-conditional-rendering)

```bash
git clone https://github.com/ross-u/03-react-conditional-rendering.git

cd 03-react-conditional-rendering

npm i

code .

# The starter code is on the master branch
git checkout master
```



<br>





### (Teacher) Checkout to the new branch

```bash
git checkout -b wd-mm-yyyy
```



 

<br>



### Coniditionals in React



In React, we can use conditional rendering (if else) to render one component or the other.



In a pseudo code example we can give an example:



##### `src/components/ConditionalExample.js`

```js
//	src/components/ConditionalExample.js



// PSEUDO CODE  :)

//	...

if  (user is logged In)   {
	return <UserImage>;
}
else if (user is not logged in) {
	return <LoginButton>
}
  
//	...
  
//			...
```





<br>



```jsx
if (true) {
    return <SomeComponentGoesHere/>
} else {
    return <OtherComponentGoesHere/>
}
```





#### Conditional rendering in React works the same way conditionals work in JavaScript.



####  We can use JavaScript operators  `if ... else` or the  `ternary` operator.











## Conditional rendering in React





#### `if - else` statements don't work directly inside the JSX expressions. 

####  When using `if - else` it needs to be enclosed in a function.





### This won't work!  - but lets check it:



##### `src/components/ConditionalExample.js`

```jsx
// src/components/ConditionalExample.js
import React from 'react';

// function component
const ConditionalExample = (props) => {
  return (
    <div>
      {
        // This won't work
      	if (props.title) { 
    			return <h3>TRUE</h3>; // <SomeComponentGoesHere/>
  			} else {
    			return <h3>FALSE</h3>; //<OtherComponentGoesHere/>;
  			} 
			}
    </div>
  )
};

export default ConditionalExample;
```





<br>



### Import it in and use it in `App.js`



##### `src/App.js`

```jsx
// src/App.js

//	...
//	...

import ConditionalExample from './components/ConditionalExample';		// <- IMPORT

// ...
//		...

  render() {
    return (
      <div className="App">
        
        <Navbar />

        <h1 style={{background: 'orange'}}>Conditional Example</h1>	{/* <- ADD  */}
        <ConditionalExample title='' />                             {/* <- ADD  */}
```





> <br>



#### This will work :



##### `src/components/ConditionalExample.js`

```jsx
// src/components/ConditionalExample.js

import React from 'react';


//  `if - else` statements don't work inside JSX expressions. 
// `if - else` statements must be enclosed in a function.

const renderTitle = (titleString) => {
  if (titleString) { 
    return <h3>TRUE - {titleString} </h3>;
  } else {
    return <h3>FALSE - {titleString}</h3>;
  } 
}

// function component
const ConditionalExample = (props) => {
  const { title } = props;
  
  return (
    <div>
      { renderTitle(title) }
    </div>
  )
};

export default ConditionalExample;
```





<br>





#### We have slightly different `data.js` and movies now have `hasOscars` property.



#### Check `src/data.js`



<br>



#### Update the `ImprovedCard`  to conditionally render values.



##### `src/components/ImprovedCard.js`

```jsx
//	src/components/ImprovedCard.js

import React from 'react';

const improvedCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      

      {                                         {/*   <--  ADD CONDITIONAL */}
        (props.hasOscars) 
          ? <p>Got the Oscar Award!!!!</p>
          : <p>Great movie but no Oscars! 😔</p>
      }

      
      <button className='btn-delete' onClick={props.clickToDelete}>Delete</button>

    </div>
  )
};

export default improvedCard;  
```





<br>





#### Doing the same with short circuit evaluation `&&`



##### `src/components/improvedCard.js`

```jsx
// src/components/ImprovedCard.js
import React from 'react';

const improvedCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      
      {/*...*/}
      
      {props.hasOscars && <p>Got the Oscar Award!!!! </p>}
      {!props.hasOscars && <p>Great movie but no Oscars! 😔</p> }
      <button className='btn-delete' onClick={props.clickToDelete}>Delete</button>
    </div>
  )
};

export default improvedCard;  
```





<br>





### Let's create a toggle button for our movies list, using a value from the `state`



##### `src/components/ImprovedMovieList.js`

```jsx
// src/components/ImprovedMovieList.js

class ImprovedMovieList extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: props.moviesArray,
      showMovies: true            /* ADD A BOOLEAN PROPERTY TO THE STATE */
    }
  };
  
  toggleMovies = () => {									//		<-- CREATE METHOD
    this.setState({ showMovies: !this.state.showMovies });
  }
  
  //	...
  //	...
  
  render() {
    return (
      <div>																				{/*    ADD     */}
        <button onClick={this.toggleMovies}>                 {/*    ADD     */}
          Toggle Movies
        </button>
        
        <ul>
        {
            
          ! this.state.showMovies 										   	{/*    ADD     */}
            ? null
            : this.state.movies.map( (oneMovie, index) => {
            		return <ImprovedCard ..... />
          	})
            
        }
        </ul>
      </div>
      
    )
  }
}

export default ImprovedMovieList; 
  
```





<br>



## [CODE EXAMPLE REPO - DONE - `example-done` branch](https://github.com/ross-u/03-react-conditional-rendering/tree/example-done)



<br>



## Additional Resources

### [`if...else` in JSX ](<https://react-cn.github.io/react/tips/if-else-in-JSX.html>)