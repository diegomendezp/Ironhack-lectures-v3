# React | Forms

### Forms in Single Page Applications



`<form>` tag by default redirects to a new page on`submit` .



In React we use a different approach. 



In React we store values from the form in the `state` of the component.







- [ ] 

### Controlled Components



We will set the component that renders the form to also controls what happens in the form on user input.

##### “**Controlled component**”  is a`input` form element controlled by React .

(“Controlled component”  is a`input` form element whose value is controlled by React )







- [ ] 

### [STARTER REPO ](<https://github.com/ross-u/React---Froms-Starter-repo->)

```bash
git clone https://github.com/ross-u/React---Froms-Starter-repo-.git

cd React---Froms-Starter-repo-

npm i
code .
```







- [ ] 

#### Create a stateful `<AddMovie />` component



##### `src/components/AddMovie.js`

```jsx
// src/components/AddMovie.js

import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props){
      super(props);
    
      this.state = { 
        title: '',
        director: '',
        hasOscars: false,
        IMDbRating: ''
      }
  }
  
  render(){
    return (
      <div>
        {/*  form will be added here */}
      </div>
    )
  }
}

export default AddMovie;
```









- [ ] 

### Add a `form` to the `AddMovie.js` component



##### `src/components/AddMovie.js`

```jsx
// src/components/AddMovie.js

//	...

render(){
  return (
        <div>
          <form onSubmit={this.handleFormSubmit}>
          	<label>Title: </label>
          	<input name="title" type="text" value={this.state.title}/>

          	<label>Director: </label>
          	<input name="director" type="text" value={this.state.director}/>

          	<label>Oscar Awarded: </label>
          	<input name="hasOscars" type="checkbox" checked={this.state.hasOscars} />

          	<label>IMDb Rating: </label>
          	<input name="IMDbRating" type="text" value={this.state.IMDbRating}/>
              
            <button type="submit"> Submit </button>
        	</form>
      </div>
  )
}
...
```













- [ ] 

#### Place the `<AddMovie />` component in the `DynamicMovieList.js`



##### `src/components/DynamicMovieList.js`

```jsx
// src/components/DynamicMovieList.js

//	...

import AddMovie from './AddMovie';

// 	...

//			...

	render() {
    return (
      <div>
        <AddMovie />    	{/*  ADD  */}

        <button onClick={this.toggleMovies}>
          Toggle Movies
        </button>
        
        {/* 
        ... 
        
        ...
        */}
```











- [ ] 

### Open the app in the browser and the Chrome console



#### We will see error: 

You provided a `value` prop to a form field without an `onChange` handler. *Set either onChange or readOnly.*











- [ ] 

### We need to add `onChange` listeners to our form.

#### This way we will be handling the imput changes





##### `src/components/AddMovie.js`

```jsx
// src/components/AddMovie.js

//	...

//			...

render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input ... onChange={(e) => this.handleTitleInput(e)} />

            <label>Director:</label>
            <input ... onChange={(e) => this.handleDirectorInput(e)} />

            <label>Oscar Awarded:</label>
            <input ... onChange={(e) => this.handleOscarsCheck(e)} />

            <label>IMDb Rating:</label>
            <input ... onChange={(e) => this.handleRatingInput(e)} />
            
            <button type="submit"> Submit </button>
        </form>
    </div>
```







- [x] 

#### Create the handler functions for each input



##### `src/components/AddMovie.js`

```jsx
// src/components/AddMovie.js

class AddMovie extends Component {

//	...
  
//	...

	handleTitleInput = (e) => {
    const { value, name } = e.target;
    console.log('\n INPUT NAME', name);
    console.log('INPUT VALUE', value);

    this.setState({ title: value });
 // this.setState({ [name]: value });
  }

  handleDirectorInput = (e) => {
    const { value, name } = e.target;
    console.log('\n INPUT NAME', name);
    console.log('INPUT VALUE', value);

    this.setState({ director: value });
 // this.setState({ [name]: value });
  }

  handleOscarsCheck = (e) => {
    const { name, checked } = e.target;
    console.log('\n INPUT NAME', name);
    console.log('CHECKED ', checked);

    this.setState( { hasOscars: checked } )
 // this.setState({ [name]: checked });
  }

  handleRatingInput = (e) => {
    const { name, value } = e.target;
    console.log('\n INPUT NAME', name);
    console.log('INPUT VALUE', value);

    this.setState({ IMDbRating: value });
 // this.setState({ [name]: value });
  }
```











#### The `movies` array we have to update is in `<DynamicMoviesList />` component. 



#### We need to handle the form submission and then update state in the parent component `<DynamicMovieList />`











- [ ] 

#### Create the handler functions for the form submit:



##### `src/components/AddMovie.js`

```js
// src/components/AddMovie.js


class AddMovie extends Component {

//	...

//	...

  handleFormSubmit = (event) => {
    event.preventDefault();
    // call funtion from DynamicMovieList

    // Reset State
    this.setState({ title: '', director: '', hasOscars: false, IMDbRating: ''})
  }

```





<br>



- [ ] 

#### Create the function that will update state of the`DynamicMovieList`

#### Pass the function as prop to `<AddMovie>` component



##### `src/components/DynamicMovieList.js`

```jsx
// components/DynamicMoviesList.js

//	...

addMovieHandler = (newMovie) => {
  const moviesCopy = [...this.state.movies];
  moviesCopy.push(newMovie);
  
  this.setState({ movies: moviesCopy })
}


  render() {
    return (
      <div>
        
        {/* UPDATE -  PASS THE METHOD AS THE PROP */}
        <AddMovie addTheMovie={this.addMovieHandler} />

```







- [ ] 

#### Add passed prop function to the `handleFormSubmit` in `<AddMovie/>`.



##### `src/components/AddMovie.js`

```jsx
// src/components/AddMovie.js

  handleFormSubmit = (event) => {
    event.preventDefault();
    
    // call the function passed from props and give it a new movie
    this.props.addTheMovie(this.state);
  
  	// Reset the state
    this.setState({ title: '', director: '', hasOscars: false, IMDbRating: '' });  	};

```











- [ ] 

### Making our code DRY - don't repeat yourself

#### Let's refactor `AddMovie.js`  so that all inputs use 1 method



**`components/AddMovie.js`**

```jsx
  handleChange(event) {
    event.preventDefault();
    // All our inputs have same `name` as the `state` property name.
    let { name, value } = event.target;
    
    if (name === "hasOscars" && this.state.hasOscars === false){
      value = true;
    } 
    else if (name === "hasOscars" && this.state.hasOscars === true) {
      value = false;
    }

    this.setState({[name]: value});
  }


render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input ... onChange={(e) => this.handleChange(e)} />

            <label>Director:</label>
            <input ... onChange={(e) => this.handleChange(e)} />

            <label>Oscar Awarded:</label>
            <input ... onChange={(e) => this.handleChange(e)} />

            <label>IMDb Rating:</label>
            <input ... onChange={(e) => this.handleChange(e)} />
            
            <button type="submit"> Submit </button>
        </form>
    </div>
```



- [ ] 







### [EXAMPLE REPO - DONE](<https://github.com/ross-u/React---Froms-Done->)