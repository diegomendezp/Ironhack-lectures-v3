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
npx create-react-app 02-react-list-and-keys

cd 02-react-list-and-keys

rm -rf .git

code .
```



<br>



### Create the file structure



```bash
# Create directory for the components
mkdir src/components

# Create the component files
touch src/components/List.js
touch src/components/Navbar.js
touch src/components/Navbar.css
```





Let's reuse the `<Navbar>` component from `Navbar.js`file  from our previous example:



##### `src/components/Navbar.js`

#### [EXERCISE SOLUTION - `Navbar.js`](<https://gist.github.com/ross-u/2ab3a3d1fb327c7c20c1473f1898d8e5>)



##### `src/components/Navbar.js`

```jsx
// src/components/Navbar.js

import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  state = {
    username: 'YOUR NAME'
  } 

  render() {
    return (
      <nav id='navbar'>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>

        <div className="nav-details">
          <p className="nav-username">{this.state.username}</p>
        </div>
      </nav>
    )
  }
}

export default Navbar;
```





##### `src/components/Navbar.cs`

```css
#navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:  #352275;
  padding: 0px 40px;
}

#navbar li {
  list-style: none;
  display: inline-block;
  margin: 0px 40px; 
  font-size: 22px;
  color:white;
}

div.nav-details > * {
  display: inline-block;
  color: royalblue;
  font-size: 22px;
}

```



<br>



### Create arrays containing HTML elements and strings, to be rendered in the next examples





##### `src/App.js`

```jsx
// src/App.js

import React, { Component } from 'react';
import Navbar from './components/Navbar';

import List from './components/List';


class App extends Component {
  state = {
    students: ['Bob', 'Sarah', 'Anna', 'Marc'],

		projects: [
      { _id: '123fqw2asd', name: 'EatBCN', techStack: 'Express, Node, React'},
      { _id: '985asw5erh', name: 'TravelLite', techStack: 'React, Express, Redux'},
      { _id: '347jh45qww', name: 'IronClub', techStack: 'Express, Handlebars'},
      { _id: '90r1h9t1ea', name: 'ChatApp', techStack: 'React, Express, SocketIO'},
		]
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        
        { /* EXAMPLE 1 - List created by mapping over an array */ }
        
        { /* EXAMPLE 2 - List created by mapping over an array */ }
        
        
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

				{ /* EXAMPLE 1 - List created by mapping over an array */ }
        <h2> Mapping over an array</h2>
        {
          this.state.students.map( (nameStr) => <h4>{nameStr}</h4> )
        }
```



<br>

#### EXAMPLE 2

##### `src/App.js`

```jsx
// src/App.js

				{ /* EXAMPLE 2 - List created by mapping over an array - in a component */ }
        <h2> List In a Component</h2>
        <List studentProjects={this.state.projects} />
```





<br>



##### `src/components/List.js`

```jsx
// src/components/List.js

import React from "react";

function List(props) {
  const { studentProjects } = props;

  return (
    <ul>
      {
        studentProjects.map(projectObj => {
        	return <li>{projectObj.name}</li>;
      	})
      }
    </ul>
  );
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
        	studentProjects.map(projectObj => {								{/* UPDATE */}
        		return <li key={projectObj.key}>{projectObj.name}</li>;								{/* UPDATE */}
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





**We don’t recommend using indexes for keys if the order of items may change.** 

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

//	...

import shortid from 'shortid';				// <-- IMPORT shorid


//	...

//			...


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





#### First let's create an array of data we want to render - `src/data.js`



**`src/data.js`**

```js
const data = [
  {
    _id: "1bfde23f1",
    title: "The Godfather",
    director: "Francis Coppola",
    hasOscars: true,
    IMDbRating: 9.2
  },
  {
    _id: "1bfde23f2",
    title: "Star Wars",
    director: "Rian Johnson",
    hasOscars: true,
    IMDbRating: 8.7
  },
  {
    _id: "1bfde23f3",
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    hasOscars: false,
    IMDbRating: 9.3
  },
  {
    _id: "1bfde23f4",
    title: "Jurassic Park",
    director: "Steven Spielberg",
    hasOscars: false,
    IMDbRating: 8.0
  },
  {
    _id: "1bfde23f5",
    title: "Sharknado",
    director: "Anthony C. Ferrante",
    hasOscars: false,
    IMDbRating: 5.2
  },
  {
    _id: "1bfde23f6",
    title: "Titanic",
    director: "James Cameron",
    hasOscars: true,
    IMDbRating: 8.9
  }
];

export default data;
```





<br>





#### Create `MovieList` class component





**`src/components/MovieList.js`**

```jsx
// src/components/MovieList.js
import React, { Component } from 'react';
import MovieCard from './MovieCard';

import data from './../data';


class MovieList extends Component {
  state = {
    movies: data
  }

  render() {
    
    return (
      <ul>
        { 
          this.state.movies.map( (oneMovie) => {
            return <MovieCard key={oneMovie._id} {...oneMovie} /> 
          })
        }
      </ul>
    )
  }
}

export default MovieList; 
```



<br>



#### Create a new `MovieCard` component



**`src/components/MovieCard.js`**

```jsx
// src/components/Card.js

import React from 'react';

const MovieCard = (props) => {
  return (
    <div className="MovieCard">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <p>Rating: {props.IMDbRating}</p>
    </div>
  )
};

export default MovieCard;
```





<br>





#### Update `App.js`

**`src/components/App.js`**

```jsx
//	...
//	...

import MovieList from './components/MovieList';

//	...
//			...

		<h1>Movie List</h1>
		<MovieList />
```







#### Lets create a delete button for each `Card`



**`src/components/MovieCard.js`**

```jsx
// src/components/MovieCard.js

const MovieCard = (props) => {
  return (
    <div className="MovieCard">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <p>Rating: {props.IMDbRating}</p>
      
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







<br>





#### Create a method in `MoviesList` for removing movies.



##### `src/components/MovieList.js`

```jsx
//	src/components/MovieList.js


  deleteMovie = (movieId) => {  													//   <-- CREATE METHOD
    const moviesCopy = this.state.movies.filter((movie) => {
      return movie._id !== movieId;
    });

    this.setState({ movies: moviesCopy });
  };

  
  render() {
    return (
      <ul>
        { 
          this.state.movies.map( (oneMovie) => {
            return (
              <Card 
                key={shortid.generate()} 
                {...oneMovie}
                clickToDelete={ ()=> this.deleteMovie(oneMovie._id) }		{/*  UPDATE */}
            //  clickToDelete={ this.deleteMovie.bind(this, oneMovie._id) }
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



##### Update `MovieCard`

```jsx
const MovieCard = (props) => {
  return (
    <div className="MovieCard">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <p>Rating: {props.IMDbRating}</p>
      
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

.MovieCard {
  border: 2px solid black;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px;
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





<br>





<hr>



## Additional Resources



#### [React Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)



#### [Arrays in React](https://medium.com/byte-sized-react/component-arrays-in-react-a46e775fae7b)



#### [Index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)