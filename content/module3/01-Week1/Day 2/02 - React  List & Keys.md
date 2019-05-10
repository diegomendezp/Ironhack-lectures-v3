# React | List & Keys

## Learning Goals

After this lesson, you will be able to:

- Display a `list` in a React app
- Get better knowledge on how React represents changes in the DOM
- Learn about the `key` prop
- Compose components and split responsibilities of components





## Introduction

If you need to display **an array of data** in a React component, how would you do it? 

What you do is you **transform your array** of data to an **array of elements**.





```bash
npm create-react-app react-list-and-keys
cd react-list-and-keys

code .
```





```bash
mkdir src/components
cd src/components/

touch ListDemo.js Navbar.js Navbar.css

cd ../../
```





Let's reuse the `<Navbar>` component from `Navbar.js`file  from our previous example:



**src/components/Navbar.js**

#### [EXERCISE SOLUTION - `Navbar.js`](<https://gist.github.com/ross-u/2ab3a3d1fb327c7c20c1473f1898d8e5>)





**src/components/ListDemo.js**

```jsx
// src/components/ListDemo.js
import React from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7];

// array of list item HTML elements that needs to be displayed
const listItems = [
  <li>1</li>,
  <li>2</li>,
  <li>3</li>,
  <li>4</li>,
  <li>5</li>
];

export default listItems;
```





**src/App.js**

```jsx
// src/App.js
import React, { Component } from 'react';
import Navbar from './components/Navbar';

import listItems from './components/ListDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <ul>{ listItems }</ul>
      </div>
    );
  }
}

export default App;
```





We created an array with JSX elements, and then we passed that array to `App.js` and placed it in the `<ul>` tag







### Building a list of elements:

You can build collections of elements and [include them in JSX](https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx) using curly braces `{}`.



Let's comment out our hard coded list of `<li>` elements, and render the list dynamically:



**src/components/LIstDemo.js**

```jsx
// components/ListDemo.js

/*
const listItems = [....]
*/

const listItems = numbers.map( (oneNumber) => <li>{oneNumber}</li> );
                                     
export default listItems;
```







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





#### Let's fix our `ListDemo` component and include `key` for each element





**`src/components/ListDemo.js`**

```jsx
// components/ListDemo.js

export const listItems = numbers.map((oneNumber, index) => 
  <li key={index}>{oneNumber}</li>
);
```



We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. 



Please refer to the article of **Robert Pokorny**  [here](<https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318>)



> a *key* is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the *key* is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.



What is the solution?

- You can make use of existing npm packages like [uuid](https://www.npmjs.com/package/uuid), [uniqid](https://www.npmjs.com/package/uniqid), etc.
- You can also generate random number like `new Date().getTime();` and prefix it with something from the item you're iterating to guarantee its uniqueness
- Lastly, I recommend using the unique ID you get from the database, If you get it.



**Solution suitable even for production would be using a package that generates unique id's .**





#### Let's fix the `key` prop to use a unique string created with the package `shortid`



```bash
npm install shortid --save
```



**`src/components/ListDemo.js`**

```jsx
// components/ListDemo.js
...
import shortid from 'shortid';

...
const listItems = numbers.map( (oneNumber, index) => {
    const keyId = shortid.generate();

    return <li key={keyId}>{oneNumber}</li> ;
//  return <li key={shortid.generate()}>{oneNumber}</li> ;
});

export default listItems;
```







### Composing a list component





#### Let's create a `Card` component that we will use to render a list of movies



**`src/components/Card.js`**

```jsx
// src/components/Card.js
import React from 'react';

// Destructuring the prop object immediately
const card = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
    </div>
  )
};

export default card;
```







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
        movies.map( (oneMovie) => <Card key={shortid.generate()} movie={oneMovie} /> ) 
      }
    </ul>
  )
};

export default MovieList; 
```











##### Let's create a improved `MovieList` and `Card` Component that are even more dynamic.





**`src/components/ImprovedCard.js`**

```jsx
// src/components/ImprovedCard.js
import React from 'react';

const improvedCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
    </div>
  )
};

export default improvedCard;
```





##### Instead of hard coding each prop name by name, we can spread the object inside of the component.







#### Create `DynamicMovieList` class component which takes array of any size.



#### We will use `class` component  and `constructor` as we want to pass  movies through `props` and set them in the state.



**`src/components/DynamicMovieList.js`**

```jsx
// src/components/DynamicMovieList.js
import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard';
import shortid from 'shortid';


class DynamicMovieList extends Component {
  //  we use `constructor` as we pass movies through props to set the as `state` value
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

export default DynamicMovieList; 
```





#### Create a mock of the data - `src/data.js`



**`src/data.js`**

```js
const data = [
  { title: "The Godfather", director: "Francis Coppola" },
  { title: "Star Wars", director: "Rian Johnson" },
  { title: "The Shawshank Redemption", director: "Frank Darabont" },
  { title: "Jurassic Park", director: "Steven Spielberg" },
  { title: "Sharknado", director: "Anthony C. Ferrante" },
  { title: "Titanic", director: "James Cameron" }
]

export default data;
```





#### Update `App.js`

**`src/components/App.js`**

```jsx
...
...
import DynamicMovieList from './components/DynamicMovieList';

import data from './data';

...
<h2>Dynamic Movie List</h2>
<DynamicMovieList moviesArray={data}></DynamicMovieList>
```







#### Lets create a delete button for each `imporvedCard`



**`src/components/ImprovedCard.js`**

```jsx
const improvedCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>

      <button onClick={props.clickToDelete}>Delete</button>
      
    </div>
  )
};
```









#### Create a method in `DynamicMoviesList` that will be removing movies.



**src/components/DynamicMoviesList.js**

```jsx
  deleteMovie = (movieIndex) => {
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
                key={index} 
                {...oneMovie}
                clickToDelete={ ()=> this.deleteMovie(index) }
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





### [Repo with code example](<https://github.com/ross-u/React---List-and-Keys---Done>)

