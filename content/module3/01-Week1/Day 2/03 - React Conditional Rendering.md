# React | Conditional Rendering





## [CLONE STARTER REPO](<https://github.com/ross-u/React---Conditional-Rendering-Starter-repo->)

```bash
git clone https://github.com/ross-u/React---Conditional-Rendering-Starter-repo-

cd React---Conditional-Rendering-Starter-repo-/
npm i
```





In React, we can use conditional rendering (if else) to render one component or the other.



In a pseudo code example we can give an example:

```js
// PSEUDO CODE  :)
if  (user is logged In)   {
	render <UserImage>;
}
else if (user is not logged in) {
	render <LoginButton>
}
```







```jsx
if (true) {
    return <SomeComponentGoesHere/>
} else {
    return <OtherComponentGoesHere/>
}
```





#### Conditional rendering in React works the same way conditions work in JavaScript.

####  We can use JavaScript operators  `if ... else` or the  `ternary` operator.











## Conditional rendering in React





#### `if - else` statements don't work inside JSX expressions. 

####  When using `if - else` it needs to be enclosed in a function.



### This won't work!  - but lets check it:



**src/components/ConditionalExample.js**

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





### Import it in and use it in `App.js`



**src/App.js**

```jsx
import ConditionalExample from './components/ConditionalExample';

render() {
    return (
      <div className="App">
        <Navbar></Navbar>

        <h1 style={{background: 'orange'}}>Conditional Example</h1>
        <ConditionalExample title='' />
```







#### This will work :



**src/components/ConditionalExample.js**

```jsx
// src/components/ConditionalExample.js
import React from 'react';


//  `if - else` statements don't work inside JSX expressions. When using `if - else` it needs to be enclosed in a function.

const renderTitle = (propsPassed) => {
  if (propsPassed.title) { 
    return <h3>TRUE - {propsPassed.title} </h3>;
  } else {
    return <h3>FALSE - {propsPassed.title}</h3>;
  } 
}

// function component
const conditionalExample = (props) => {
  return (
    <div>
      { renderTitle(props) }
    </div>
  )
};

export default conditionalExample;
```







#### We have slightly different `data.js` and movies now have `hasOscars` property.

#### Check `src/data.js`





#### Let's change our `ImprovedCard` component to do conditional rendering.



**src/components/ImprovedCard.js**

```jsx
import React from 'react';

const improvedCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>

      {
        props.hasOscars ?
        	<p>Got the Oscar Award!!!! </p>
        	:
        	<p>Great movie but no Oscars! 😔</p>
      }

      <button className='btn-delete' onClick={props.clickToDelete}>Delete</button>

    </div>
  )
};

export default improvedCard;  
```







#### Doing the same with short circuit evaluation `&&`



**src/components/improvedCard.js**

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









### Let's create a toggle button for our movies list, using a value from the `state`



**src/components/DynamicMovieList.js**

```jsx
class DynamicMovieList extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: props.moviesArray,
      showMovies: true              /* ADD A BOOLEAN PROPERTY TO THE STATE */
    }
  };
  
  toggleMovies = () => {
    this.setState({ showMovies: !this.state.showMovies });
  }
  
  ...
  ...
  render() {
    return (
      <div>
        <button onClick={this.toggleMovies}>
          Toggle Movies
        </button>
        
        <ul>
        {
            
          this.state.showMovies ? 
          this.state.movies.map( (oneMovie, index) => {
            return <ImprovedCard ..... />
          })
          :
          null
            
        }
        </ul>
      </div><button onClick={this.toggleMovies} >TOGGLE MOVIES</button>
      
    )
  }
}

export default DynamicMovieList; 
  
```





## [CODE EXAMPLE REPO - DONE](<https://github.com/ross-u/React---Conditional-Rendering-Done->)





## Additional Resources

### [`if...else` in JSX ](<https://react-cn.github.io/react/tips/if-else-in-JSX.html>)