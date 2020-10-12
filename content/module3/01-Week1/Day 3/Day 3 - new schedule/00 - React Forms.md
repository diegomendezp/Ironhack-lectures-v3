# React | Forms

### Forms in Single Page Applications



`<form>` tag by default redirects to a new page on`submit` .



In React we use a different approach. 



In React we store values from the form in the `state` of the component.





<br>



- [ ] 

### Controlled Components



We will set the component that renders the form to also controls what happens in the form on user input.

##### “**Controlled component**”  is a`input` form element controlled by React .

(“Controlled component”  is a`input` form element whose value is controlled by React )







- [ ] 

### [STARTER REPO ](https://github.com/ross-u/02-react-forms)

```bash
#
# Clone the repo
git clone https://github.com/ross-u/02-react-forms.git

# Enter the project directory
cd 02-react-forms

# Install the dependencies
npm i

# Open in the editor
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





<br>





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
// ...
```







<br>





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







<br>



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
            <input {/* ... */} onChange={(e) => this.handleTitleInput(e)} />

            <label>Director:</label>
            <input {/* ... */} onChange={(e) => this.handleDirectorInput(e)} />

            <label>Oscar Awarded:</label>
            <input {/* ... */} onChange={(e) => this.handleOscarsCheck(e)} />

            <label>IMDb Rating:</label>
            <input {/* ... */} onChange={(e) => this.handleRatingInput(e)} />
            
            <button type="submit"> Submit </button>
        </form>
    </div>
```







- [ ] 

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

  handleOscarsCheckInput = (e) => {
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







<br>







#### The `movies` array we have to update is in `<DynamicMoviesList />` component. 



#### We need to handle the form submission and then update state in the parent component `<DynamicMovieList />`







<br>



- [ ] 

#### Create the handler functions for the form submit:



##### `src/components/AddMovie.js`

```js
// src/components/AddMovie.js


class AddMovie extends Component {

//	...

//	...

  handleFormSubmit = (e) => {
    e.preventDefault();
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

addNewMovie = (newMovie) => {
  const moviesCopy = [...this.state.movies];
  moviesCopy.push(newMovie);
  
  this.setState({ movies: moviesCopy })
}


  render() {
    return (
      <div>
        
        {/* UPDATE -  PASS THE METHOD AS THE PROP */}
        <AddMovie addTheMovie={this.addNewMovie} />

```







- [ ] 

#### Add passed prop function to the `handleFormSubmit` in `<AddMovie/>`.



##### `src/components/AddMovie.js`

```jsx
// src/components/AddMovie.js

  handleFormSubmit = (e) => {
    e.preventDefault();
    
    // call the function passed from props and give it a new movie
    const newMovieObj = this.state;
    this.props.addTheMovie(newMovieObj);
  
  	// Reset the state
    this.setState({ title: '', director: '', hasOscars: false, IMDbRating: '' });  	};

```





<br>







- [ ] 

### Making our code DRY - don't repeat yourself

#### Let's refactor `AddMovie.js`  so that all inputs use 1 method



**`components/AddMovie.js`**

```jsx
  handleChange(e) {
    // All our inputs have same `name` as the `state` property name.
    let { name, value } = e.target;
    
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
            <input {/* ... */} onChange={ this.handleChange } />

            <label>Director:</label>
            <input {/* ... */} onChange={ this.handleChange } />

            <label>Oscar Awarded:</label>
            <input {/* ... */} onChange={ this.handleChange } />

            <label>IMDb Rating:</label>
            <input {/* ... */} onChange={ this.handleChange } />
            
            <button type="submit"> Submit </button>
        </form>
    </div>
```



- [ ] 



<br>



### DRY - Refactor the function to work with any checkbox input with any name:

```jsx
  handleChange = e => {
    // All our inputs have same `name` as the `state` property name.
    let { name, value, type } = e.target;                            // <-- UPDATE

    if (type === "checkbox" && this.state[name] === false) {	  // <-- UPDATE
      value = true;
    } else if (type === "checkbox" && this.state[name] === true) {  // <-- UPDATE
      value = false;
    }

    this.setState({ [name]: value });
  };
```





#### [EXAMPLE REPO - DONE](<https://github.com/ross-u/React---Froms-Done->)









### Additional example - `select/options` and `textarea` inputs:



Create a new component `AddReview`

##### `components/AddReview`

```js
import React, { Component } from 'react';
import data from './../data';

class AddReview extends Component {
  state = {
    selectInputValue: data[0].title,
    // selectInputValue: data ? data[0].title : '',
    textareaInputValue: "",
    reviews: []
  };


  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { selectInputValue, textareaInputValue } = this.state;
    const newReview = {
      movieName: selectInputValue,
      text: textareaInputValue
    }

    const updatedReviews = [...this.state.reviews];
    updatedReviews.push(newReview);

    this.setState({
      reviews: updatedReviews,
      selectInputValue: data[0].title,
      textareaInputValue: ''
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Write a review:</h1>
          <label> Pick your movie: </label>

          <select
            name="selectInputValue"
            value={this.state.selectInputValue}
            onChange={(e) => this.handleChange(e)}
          >
            <option value={this.state.selectInputValue}>
              {this.state.selectInputValue}
            </option>
            {
              data
                .filter(movie => movie.title != this.state.selectInputValue)
                .map(movie => <option value={movie.title}>{movie.title}</option>)
            }
          </select>

          <br />
          <label> Review: </label>
          <textarea
            name="textareaInputValue"
            value={this.state.textareaInputValue}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>

        {this.state.reviews.map(review => {
          return (
            <div>
              <h4>{review.movieName}</h4>
              <p>{review.text}</p>
            </div>
          )
        })}
      </div>
    );
  }
}


export default AddReview;
```



Import the component in `App.js` and render it.