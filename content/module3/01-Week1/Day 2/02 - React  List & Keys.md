# React | List & Keys

## Learning Goals

After this lesson, you will be able to:

- Display a `list` in a React app
- Get better knowledge on how React represents changes in the DOM
- Learn about the `key` prop
- Compose components and split responsibilities of components





## Introduction

If you need to display **an array of data** in a React component, how would you do it? 





We can **transform an array** with data to an **array of elements**.





```bash
npx create-react-app react-list-and-keys

cd react-list-and-keys

code .
```





```bash
mkdir src/components

cd src/components/

touch List.js Navbar.js Navbar.css

cd ../../
```





Let's reuse the `<Navbar>` component from `Navbar.js`file  from our previous example:



##### `src/components/Navbar.js`

#### [EXERCISE SOLUTION - `Navbar.js`](<https://gist.github.com/ross-u/2ab3a3d1fb327c7c20c1473f1898d8e5>)





<br>





##### `src/App.js`

```jsx
// src/App.js

import React, { Component } from 'react';
import Navbar from './components/Navbar';

import List from './components/List';

// array of list item HTML elements that needs to be displayed
const listItems = [
  <li>1</li>,
  <li>2</li>,
  <li>3</li>,
  <li>4</li>,
  <li>5</li>
];

const names = ['Bob', 'Sarah', 'Anna', 'Marc'];

const cities = [
  'Barcelona',
  'Miami',
  'Madrid',
  'Paris',
  'Amsterdam',
  'Berlin',
  'Sao Paulo',
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        { /* EXAMPLE 1  - List from an array of elements */ }
        
        { /* EXAMPLE 2 - List created by mapping over an array */ }
        
        { /* EXAMPLE 3 - List created by mapping over an array */ }
        
        
      </div>
    );
  }
}

export default App;
```



<br>



#### EXAMPLE 1

##### `src/App.js`

```jsx
// src/App.js        

				{ /* EXAMPLE 1  - List from an array of elements */ }
        <h2>listItems</h2>
        <ul>{ listItems }</ul>
```







<br>





#### EXAMPLE 2

##### `src/App.js`

```jsx
// src/App.js        

				{ /* EXAMPLE 2 - List created by mapping over an array */ }
        <h2> Mapping over an array</h2>
        {
          names.map( (name) => <h4>{name}</h4> )
        }
```



<br>

#### EXAMPLE 3

##### `src/App.js`

```jsx
// src/App.js

				{ /* EXAMPLE 3 - List created by mapping over an array */ }
        <h2> List</h2>
        <List cities={cities} />
```



##### `src/components/List.js`

```jsx
// src/components/List.js

import React from 'react';


class List extends React.Component {
  render() {

    const { cities } = this.props;

    return (
      <ul>
        {
          cities.map( (cityName) => {
            return  <h4>{cityName}</h4> 
          })
        }
      </ul>
    );
  }
}

export default List;
```









<br>











### List key Error in our console ![:rotating_light:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/rotating_light.png)

<p style='color: black; background: #FF6B77; padding: 5px 10px; border-radius: 5px; font-size: 18px'>If we open the <b>Chrome console</b> to check on our result… oops!  There’s an error here: 
<br>
<br>
<span style='background: #FFABA0; padding: 2px 7px; font-family: monospace'>  
Warning: Each child in an array or iterator should have a unique “key” prop.
</span>
</p>





This means that our `<li>` tags need a `key` prop. 



A “key” is a special string attribute you need to include when creating lists of elements. 



**React uses Keys to identify which items have changed, are added, or are removed.**



Keys are be given to each list element  to give them a stable identity.



Keys help React identify DOM elements so that it can see if that element has changed or not.



If the keys change or there are no keys, then the **entire DOM is destroyed and recreated**, with every other change occurring, even if no real changes have occurred to the list.





#### Let's fix our `List` component and include `key` for each element





**`src/components/List.js`**

```jsx
// src/components/List.js

        {
          cities.map((cityName, index) => {								{/* UPDATE */}
          	return <li key={index} > {cityName} </li>;			{/* UPDATE */}
        	})
        }
```





##### `src/App.js`

```jsx
// src/App.js

        <h2> Mapping over an array</h2>
        {
          names.map((name, index) => {						{/* UPDATE */}
          	return <h4 key={index}> {name} </h4>			{/* UPDATE */}
          })
        }

```





We don’t recommend using indexes for keys if the order of items may change. 

This can negatively impact performance and may cause issues with component state. 



Please refer to the article of **Robert Pokorny**  [here](<https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318>).



> a *key* is the only thing React uses to identify DOM elements.
>
>  What happens if you push an item to the list or remove something in the middle? If the *key* is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.



What is the solution?

- You can make use of existing npm packages like [uuid](https://www.npmjs.com/package/uuid), [uniqid](https://www.npmjs.com/package/uniqid), etc.
- You can also generate random number like `new Date().getTime();` and prefix it with something from the item you're iterating to guarantee its uniqueness
- Lastly, I recommend using the unique ID you get from the database, If you get it.



**Solution suitable even for production would be using a package that generates unique id's .**





<br>



#### Let's fix the `key` prop to use a unique string created with the package `shortid`



```bash
npm install shortid --save
```



<br>



#### Update `List.js` to use `shortid` for list keys



**`src/components/List.js`**

```jsx
// src/components/List.js
// ...

import shortid from 'shortid';				// <-- IMPORT shorid

class List extends React.Component {
  render() {
    const { cities } = this.props;

    return (
      <ul>
        {cities.map((cityName, index) => {
          const keyId = shortid.generate();					// <-- UPDATE

          return <li key={keyId}> {cityName} </li>;			// <-- UPDATE
       /* return <li key={shortid.generate()}> {cityName} </li>; */

        })}
      </ul>
    );
  }
}
```





<br>



#### Update `App.js` to use `shortid` for list keys



##### `src/App.js`

```jsx
// src/App.js

        <h2> Mapping over an array</h2>
        {
          names.map((name, index) => (
          	<li key={shortid.generate()}> {name} </li>
        ))}

```





<br>



#### We will still have an error in the console, coming from the first array of elements `listItems` as none of the elements have the `key` attribute.



<p style='color: black; background: #FF6B77; padding: 5px 10px; border-radius: 5px; font-size: 18px'>If we open the <b>Chrome console</b> there’s an error: 
<br>
<br>
<span style='background: #FFABA0; padding: 2px 7px; font-family: monospace'>  
Warning: Each child in a list should have a unique "key" prop.
</span>
</p>





<br>





### Composing a list component





#### Let's create a `Card` component that we will use to render a list of movies



**`src/components/Card.js`**

```jsx
// src/components/Card.js

import React from 'react';

// Destructuring the prop object immediately
const Card = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
    </div>
  )
};

export default Card;
```





<br>





#### Create a `MovieList` component that renders list of movie objects.





**`src/components/MovieList.js`**

```jsx
// src/components/MovieList.js

import React from 'react';
import Card from './Card';
import shortid from 'shortid';

const movies = [
  { title: "Jurassic Park", director: "Steven Spielberg" },
  { title: "Sharknado", director: "Anthony C. Ferrante" },
  { title: "Titanic", director: "James Cameron" }
];

const MovieList = () =>{
  return (
    <ul>
      { 
        movies.map( (movieObj) => {
          return <Card key={ shortid.generate() }  movie={movieObj} /> 
        } 
      }
    </ul>
  )
};

export default MovieList; 
```











#### Let's create an improved `MovieList` and `ImprovedCard` Component that are even more dynamic.



<br>



#### First let's create an array of data we want to render - `src/data.js`



**`src/data.js`**

```js
//	src/data.js

const data = [
  { title: "The Godfather", director: "Francis Coppola",  rating: 9 },
  { title: "Star Wars", director: "Rian Johnson",  rating: 8 },
  { title: "The Shawshank Redemption", director: "Frank Darabont",  rating: 9 },
  { title: "Jurassic Park", director: "Steven Spielberg",  rating: 5 },
  { title: "Sharknado", director: "Anthony C. Ferrante",  rating: 2 },
  { title: "Titanic", director: "James Cameron" ,  rating: 9}
]

export default data;
```





<br>



#### Create a new Card component



**`src/components/ImprovedCard.js`**

```jsx
// src/components/ImprovedCard.js

import React from 'react';

const ImprovedCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <p>Rating: {props.rating}</p>
    </div>
  )
};

export default ImprovedCard;
```





##### Instead of hard coding each prop name by name, we can spread the object inside of the component.







#### Create `ImprovedMovieList` class component which takes array of any size.



#### We will use `class` component  and `constructor` as we want to pass  movies through `props` and set them in the state.



**`src/components/ImprovedMovieList.js`**

```jsx
// src/components/ImprovedMovieList.js
import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard';
import shortid from 'shortid';


class ImprovedMovieList extends Component {
  //  we use `constructor` as we pass movies through props to set the as `state` value
  //  Even though  there is a use case for this pattern, 
  //  Setting initial state from the props is an anti-pattern,
  //	and componentDidUpdate lifecycle method should be used insted
  constructor(props) {
    super();
    this.state = {
      movies: props.moviesArray
    }
  }

  render() {
    
    return (
      <ul>
        { 
          this.state.movies.map( (oneMovie) => {
            return <ImprovedCard key={shortid.generate()} {...oneMovie} /> 
          })
        }
      </ul>
    )
  }
}

export default ImprovedMovieList; 
```



<br>







#### Update `App.js`

**`src/components/App.js`**

```jsx
//	...
//	...

import ImprovedMovieList from './components/ImprovedMovieList';

import data from './data';

//	...
//			...

		<h1>Improved Movie List</h1>
		<ImprovedMovieList moviesArray={data} />
```







#### Lets create a delete button for each `imporvedCard`



**`src/components/ImprovedCard.js`**

```jsx
// src/components/ImprovedCard.js

const ImprovedCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <p>Rating: {props.rating}</p>
      
      <button 																{/*  ADD A BUTTON */}
        className="btn-delete"
        onClick={() => console.log('Delete clicked')}
      >
        Delete
      </button>
      
    </div>
  )
};
```









#### Create a method in `ImprovedMoviesList` for removing movies.



##### `src/components/ImprovedMoviesList.js`

```jsx
//	src/components/ImprovedMoviesList.js


	deleteMovie = (movieIndex) => {							//   <-- CREATE METHOD
    const moviesCopy = this.state.movies;
    moviesCopy.splice(movieIndex, 1);
    this.setState( {movies: moviesCopy} );
  }

  
  render() {
    return (
      <ul>
        { 
          this.state.movies.map( (oneMovie, index) => {
            return (
              <ImprovedCard 
                key={shortid.generate()} 
                {...oneMovie}
                clickToDelete={ ()=> this.deleteMovie(index) }		{/*  UPDATE */}
            //  clickToDelete={ this.deleteMovie.bind(this, index) }
              />
            ) 
          })
        }
      </ul>
    )
  }
}
```





<br>



##### Update `ImprovedMovieCard`

```jsx
const ImprovedCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <p>Rating: {props.rating}</p>
      
      <button
        className="btn-delete"
        onClick={props.clickToDelete}									{/*  UPDATE */}
       >
        Delete
      </button>
      
    </div>
  )
};
```





<br>



#### Add styles to the `App.css`

```css
.App {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
}

li {
  list-style: none;
}

h1 {
  padding:30px;
  border: 2px solid black;
  background: lightcyan;
}

h2 {
  padding: 20px 50px;
  border: 2px solid black;
  display: inline-block;
}

button.btn-delete {
  padding: 10px 25px;
  font-size: 24px;
  border-radius: 5px;

}
```



### [Repo with code example](<https://github.com/ross-u/React---List-and-Keys---Done>)





<br>





<hr>



## Additional Resources



#### [React Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)



#### [Arrays in React](https://medium.com/byte-sized-react/component-arrays-in-react-a46e775fae7b)



#### [Index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)