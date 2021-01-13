# LAB: Redux Student



<br>



![img](https://react-redux.js.org/img/redux.svg)



### Note:

This LAB can be done individually or in pairs depending on the student preference. The LAB is done as a workshop or an adaptative class than can be done on initiative of the students or if there is additional time available during the module 3.  The LAB should be done after the introductory lecture on Redux ( [LT -Lecture Notes]() )



<br>



### Intro

In this exercise we are going to do a simple implementation of Redux store, in our `index.js` first and then create a clean structure for our Redux code. You will have a chance to try it yourself and implement Redux from scratch. 

Don't worry, Redux is a library with it's own rules, but it is quite simple to implement and use.

During this exercise you will as well get familiar with 3 principles of Redux and Redux documentation, which will help you to get comfortable with using Redux and working with it in the future.



<br>



### Step 1

 Create a react app using `create-react-app` and install the Redux dependencies.

```bash
# Create React app

npx create-react-app redux-basic-setup


# Install the redux dependencies

cd redux-basic-setup

npm install redux react-redux --save


# Start the React development server
npm start

```



<br>



### Step 2 - Create our components

Let's create a simple list of items in our `App.js` component.

First we will render the list using the `state` in the `App.js`, and then we will connect to the Redux store and start rendering the list from there.



<br>



#### <u>a.</u> Update your `App.js` as per the below example:



<br>



##### In `App.js`

```jsx
// src/App.js

import React from 'react';
import './App.css';
import Student from './components/Student';
import AddStudent from './components/AddStudent';

class App extends React.Component {
    
  state = {
    listOfStudents: [
      { name: 'John', country: 'Scotland' },
      { name: 'Sarah', country: 'USA' },
      { name: 'Marco', country: 'Italy' },
      { name: 'Anna', country: 'Sweden' },
    ],
  };


  addStudent = (student) => {
    const { listOfStudents } = this.state;

    const updatedListOfStudents = [...listOfStudents, student];
    this.setState({ listOfStudents: updatedListOfStudents });
  };


  render() {
    const { listOfStudents } = this.state;
      
    return (
      <main className="App">
        { !listOfStudents
            ? null
            : listOfStudents.map((student, index) => (
                <Student info={student} key={index} />
            ))}

        <AddStudent addStudentToList={this.addStudent}/>
      </main>
    );
  }
}

export default App;

```



<br>



**!** - After writing the above code in your `App.js` you will receive an error, which is totally normal.

The reason for this is that we haven't yet created the `Student` and `AddStudent` components that we have imported at the top.



<br>



#### <u>b.</u> Create `<Student>` and `<AddStudent>` components:



<br>



#### In the terminal:

```bash
# Create the components directory and the files

cd ./src

mkdir components

touch components/Student.js components/AddStudent.js
```





<br>



#### Implement the `Student.js` component.



#####`src/components/Student.js`

```jsx
//	src/components/Student.js

import React from 'react';

const Student = (props) => {
  const { info } = props;

  return (
    <section style={{ margin: '10px', border: '1px solid black' }}>
      <h3>
        {info.name} - {info.country}
      </h3>
    </section>
  );
};

export default Student;
```





<br>



#### Implement the `AddStudent.js` component



##### `src/components/AddStudent.js`

```jsx
//	src/components/AddStudent.js

import React, { Component } from 'react';

class AddStudent extends Component {
  state = { name: '', country: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, country } = this.state;

    if (name === '' || country === '') return;
    else {
      this.props.addStudentToList({ name, country });
      this.setState({ name: '', country: '' });
    }
  };

  render() {
    const { name, country } = this.state;

    return (
      <section>
        <h1>Add New Student</h1>
            
        <form onSubmit={this.handleSubmit}>
            
          <label htmlFor="name">Name </label>
          <br />

          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Student's Name"
            style={{ marginBottom: '10px' }}
          />

          <br />
          <label htmlFor="country">Country</label>
          <br />

          <input
            type="text"
            name="country"
            value={country}
            onChange={this.handleChange}
            placeholder="Student's Name"
            style={{ marginBottom: '10px' }}
          />

          <br />
          <button type="submit">Add Student</button>
            
        </form>
      </section>
    );
  }
}

export default AddStudent;


```



<br>



### Step 3 - Knowledge is power



<br>



#### Why should we want to use Redux?

At the moment you can see that our list is working properly and that we are saving our list of students in the `state` of the `App.js` component.

This is a totally normal use case, taking into consideration that our app is very simple, at this stage.  However, once our app grows larger and we end up having multiple components, nested many levels in depth, we end up having to pass the data by doing "prop drilling" and passing all the data as props. 

Deep "prop drilling" makes our code hard to read and also causes re-rendering in all of the components where the new props are being passed. As we know, component re-rendering is caused by passing new props to the component or change in the state ([component updating](https://reactjs.org/docs/react-component.html#updating)).



<br>



Redux is a predictable state container for JavaScript apps. It helps us write applications that use a central state/store, behave consistently, and are easy to test and debug. You can use Redux together with [React](https://reactjs.org/), or with any other view library.

Using Redux with our React apps enables us to have one state which serves as a "single source of truth".



<br>



### 3 principles of Redux



<br>



Redux can be described in three fundamental principles:

 - **Single source of truth**  - The state of your whole application is stored in a single store.
 - **State is read-only** - The only way to change the state is to emit an action (only through a Redux action), an object describing what happened.
 - **Changes are made with pure functions** - To specify how the Redux state is transformed by actions, you write reducers as pure functions . (Reducer is a function that manages the store).



> **pure function** - (predictable) function which given the same arguments always returns the same result.



<br>



### Step 4 - Implementing Redux in our app



<br>



#### Create the store and set the Provider



<br>



In our `index.js` we will import the `react` and `react-redux`packages, create the store and provide our app the access to Redux store.



#####  `src/index.js`

```jsx
// src/index.js

//	...
//		...
//			...

// IMPORT REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// CREATE THE REDUCER
////////////////////////////////
const initialState = [
  { name: 'John', country: 'Scotland' },{ name: 'Sarah', country: 'USA' },
  { name: 'Marco', country: 'Italy' },{ name: 'Anna', country: 'Sweden' },
];

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_STUDENT':
      return [...state, action.payload];

    default:
      return state;
  }
};
////////////////////////////////

// CREATE STORE
const store = createStore(/* reducer goes here*/);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();

```





<br>



**NOTE**:

After you do the above, importing Redux and creating the store and the reducer, you should get an error  `Error: Expected the reducer to be a function`.

 This is normal and it is happening because we didn't pass the reducer function to the `createStore()`. We will do this in the next step.



<br>



#### Pass the reducer to the store, and enable the [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension#installation).



<br>



##### In the `src/index.js`

```jsx
// src/index.js

// ...
//		...
//			 ...


// CREATE STORE
const store = createStore(
  studentsReducer,  // <--- PASS THE REDUCER
                               // ↓ Redux DevTools plugin  ↓
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()	  
);
```







<br>



### Step 5 - `connect`  components to the Redux store



<br>



#### Use the `react-redux` Higher order component `connect()`, to connect `App.js` to the Redux store.



#### Update the `App.js` , <u>on the top</u>:



##### `src/App.js`

```jsx
// src/App.js

//	...

// IMPORT `connect()` HOC
import { connect } from 'react-redux';

```



<br>



#### Update the `App.js` , <u>on the bottom</u>:



##### `src/App.js`

```jsx
// src/App.js

//	...
//		...
//			...


const mapStateToProps = state => {
  return { students: state };
};


export default connect(mapStateToProps, null)(App);		//  <--- Update


```





<br>



### Usign `connect` to set props from Redux 

<br>





#### **Syntax:**

```js
connect(mapStateToProps, mapDispatchToProps)(currentComponent)
```



 `mapStateToProps` is used to <u>get the data from our Redux store</u> state, and it sets those <u>values</u> on the `props` of the current component.

As we <u>only want to read data</u> from Redux store, and we don't need to use  `mapDispatchToProps`, we can instead pass `null` as the second argument).



<br>



#### In the `App.js` :

##### 	-	remove the `state` object

##### 	-	remove the `addStudent` method ( we will replace it with another method for Redux )



##### `src/App.js`

```jsx
// 	src/App.js


class App extends React.Component {
    
  // state = {                                             //  REMOVE
  //   listOfStudents: [
  //     { name: 'John', country: 'Scotland' },
  //     { name: 'Sarah', country: 'USA' },
  //     { name: 'Marco', country: 'Italy' },
  //     { name: 'Anna', country: 'Sweden' },
  //   ],
  // };


  // addStudent = student => {                             //  REMOVE
  //  const { listOfStudents } = this.state;

  //  const updatedListOfStudents = [...listOfStudents, student];
  //  this.setState({ listOfStudents: updatedListOfStudents });
  // };
  //
```



<br>



After you remove the above code, you will get an error, because `this.state.listOfStudents` that we were iterating over in the `render()` of `App.js` doesn't exist anymore.

Instead, we will use `this.props.students` that we got from Redux store setting it via `mapStateToProps` .



<br>



#### In the `App.js` :

##### 	-	update the `render`, to map over the  list `this.props.students` coming from Redux



##### `src/App.js`

```jsx
// 	src/App.js

//	...

//	...


  render() {

  // const { listOfStudents } = this.state;   	//  <--- DELETE
    
    const { students } = this.props;  	// <--- REPLACE WITH STATE FROM REDUX STORE
    

    return (
      <main className="App">
        { !students                            //  <--- UPDATE
            ? null
            : students.map((student, index) => (     //  <--- UPDATE
              <Student info={student} key={index} />
            ))}
```



<br>



<br>



#### Connect `AddStudent.js` to the Redux store, to be able to dispatch actions to the Redux store.



<br>



#### Update the `AddStudent.js` , <u>on the top</u>:



##### `src/components/AddStudent.js`

```jsx
// src/components/AddStudent.js

//	...

// IMPORT `connect()` HOC
import { connect } from 'react-redux';


//	...
```



<br>



#### Update the `AddStudent.js` , <u>on the bottom</u>:



##### `src/components/AddStudent.js`

```jsx
// src/components/AddStudent.js

//	...

//		...

//			...

const mapDispatchToProps = dispatch => {
  return {
    addStudent: (newStudentObj) => {
      dispatch({ type: 'ADD_NEW_STUDENT', payload: newStudentObj });
    },
  };
};


export default connect(null, mapDispatchToProps)(AddStudent);
```



<br>

#### Syntax:

```jsx
connect(mapStateToProps, mapDispatchToProps)(currentComponent)
```



`mapDispatchToProps` is used to create <u>methods that dispatch action objects to Redux store</u>,
and it sets those <u>methods</u> on the `props` of the current component.

As we only want to dispatch actions to Redux store, we don't need `mapStateToProps` (we use `null`).



As we <u>only want to dispatch actions to Redux store</u> , and we don't need to use  `mapStateToProps`, we can instead pass `null` as the first argument).



The method `addStudent` that we just created, dispatches an action object to the Redux store.



<br>



#### In the `AddStudent.js` :

##### 	-	remove `addStudentToList` coming from the `props`

##### 	-	and replace it with `addStudent`  that dispatches the action.



##### `src/components/AddStudent.js`

```jsx
//	src/components/AddStudent.js

//	...
//		...

  handleSubmit = event => {
    event.preventDefault();
    const { name, country } = this.state;

    if (name === '' || country === '') return;
    else {
   // this.props.addStudentToList({ name, country });	<--- REPLACE THIS
      this.props.addStudent({ name, country });	// 	  <--- FOR A METHOD WITH ACTION
        
      this.setState({ name: '', country: '' });
    }
  };

```







<br>



### Step 5 - Test your app with Redux DevTools



##### 1. Open the Redux DevTools and open the `State` tab.

##### 2. Add few new students using the Add New Student `form`, and notice how each action is being logged in the Redux DevTools.





<br>





### Step 7 - Save to Redux the data coming from the API



<br>



At the moment we are working with a hard coded array of students and our app is only preserving the data in the browser.

However web apps rely on interaction with APIs, so let's see how can we get data from an API and then save it to our Redux store.



<br>



#### a. Create an API

We will use the `json-server` to create a quick mock API that we will use in our app.



##### In the terminal:

```bash
# Install json-server globally
npm install json-server -g


# Install axios package in our app
npm install axios --save

# Create a json file for our mock API in the project root
mkdir api
touch api/db.json
```



<br>



#### Save the below data in `./api/db.json`:

##### `./api/db.json`

```json
{
  "students":[
    { "name": "Bob", "country": "USA" },
    { "name": "Carla", "country": "Spain" },
    { "name": "Lea", "country": "Spain" },
    { "name": "Marc", "country": "Germany" },
    { "name": "John", "country": "Scotland" },
    { "name": "Sarah", "country": "USA" },
    { "name": "Marco", "country": "Italy" },
    { "name": "Anna", "country": "Sweden" }
  ]
}
```



<br>



#### Run the mock API (using the separate terminal)

```bash
json-server --watch api/db.json --port 8000
```



<br>



#### b. Update the `studentsReducer` for a new action `'ADD_ALL_STUDENTS'`:

<br>



#### In the `index.js`:

##### 	-	create a case for action `'ADD_ALL_STUDENTS'` 

##### 	-	update the `initialState` to an empty array  ( `initialState = []` )



##### `src/index.js`

```jsx
// src/index.js

// ...
//		...
//			 ...

const initialState = [];			// <--- UPDATE

const studentsReducer = (state = initialState, action) => {
    
  switch (action.type) {
    case 'ADD_NEW_STUDENT':
      return [...state, action.payload];

    case 'ADD_ALL_STUDENTS':				// <--- ADD NEW CASE
      return action.payload;				// <--- 

    default:
      return state;
  }
};
```





<br>



After the update you will see that your student list is now empty. The reason for this is that we have changed the initial state of our reducer.

No worries, the next step is to update our Redux state with data from the API, on the initial run of our app.



<br>



#### c. Update the `App.js` to GET data from our mock API:



#### In the `App.js`, <u>on the top</u>, import `axios`



##### `src/App.js`

```jsx
//	src/App.js

// IMPORT axios
import axios from 'axios';

//	...

//	...
```





<br>



#### In the `App.js`, <u>on the bottom</u>:

##### 		- create `mapDispatchToProps` and update `connect()`, passing it `mapDispatchToProps`



##### `src/App.js`

```jsx
//	src/App.js

// 	...

//		...

const mapStateToProps = state => {
  return { students: state };
};


const mapDispatchToProps = dispatch => {
  return {
    addAllStudents: allStudents => {
      dispatch({ type: 'ADD_ALL_STUDENTS', payload: allStudents });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);



```



<br>



As we want to get the data from Redux store and also have ability to dispatch actions, we will update `connect` and pass it both `mapStateToProps` and `mapDispatchToProps`.

The method `addAllStudents` that we just created, dispatches an action object to the Redux store.



<br>



#### Update the `App.js`, to make a `GET` request to the API when the component mounts:



##### `src/App.js`

```jsx
//	src/App.js

// 	...
class App extends React.Component {
  
  componentDidMount() {
    axios.get('http://localhost:8000/students')
      .then((response) => {
        this.props.addAllStudents(response.data);
    });
  }


```



<br>



### Step 8 - Make it DRY 



<br>



#### a. Move the reducer to a separate file



In order to make our app easier to maintain we should create separate files for reducers and actions. This is the usual setup for apps using Redux and it helps make our code more readable and easier to maintain.



<br>



**In the terminal**:

```bash
# Create the file structure for redux files

cd ./src

mkdir redux redux/reducers redux/actions redux/types

# Create the reducer file

touch redux/reducers/studentsReducer.js   redux/actions/actions.js   redux/types/types.js
```



<br>



#### Update the `studentsReducer.js`, with the reducer code from `index.js`.



##### `src/redux/reducers/studentsReducer.js`

```js
// src/redux/reducers/studentsReducer.js

const initialState = [];

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_STUDENT':
      return [...state, action.payload];

    case 'ADD_ALL_STUDENTS':
      return action.payload;

    default:
      return state;
  }
};

export default studentsReducer;
```



<br>



#### Update the`index.js`: 

##### 	-	`import` the `studentsReducer.js` file.

##### 	-	Delete `studentsReducer` function and `initialState`



#####  `src/index.js`	

```jsx
// 	src/index.js


import studentsReducer from './redux/reducers/studentsReducer';


// CREATE THE REDUCER
// ////////////////////////////////
// const initialState = [];

// const studentsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_NEW_STUDENT':
//       return [...state, action.payload];

//     case 'ADD_ALL_STUDENTS':
//       return action.payload;

//     default:
//       return state;
//   }
// };
// ////////////////////////////////
```



<br>





#### b. Refactor actions, and create action function in a separate file



<br>



#### Copy the actions from `App.js` and `AddProject.js` to  a new file `actions.js`



##### `src/redux/actions/actions.js`

```js
//	src/redux/actions/actions.js

export const addStudent = (newStudentObj) => {
  return { type: 'ADD_NEW_STUDENT', payload: newStudentObj }
}

export const addAllStudents = (allStudents) => {
  return { type: 'ADD_ALL_STUDENTS', payload: allStudents }
}

```





<br>



#### Refactor `App.js` to use function from `actions.js`

##### -  Update `App.js`, on the top, import the actions:



##### `src/App.js`

```jsx
//	src/App.js

// ...

import * as actions from './redux/actions/actions'
```



<br>



#### In the `App.js`, on the bottom, update the `mapDispatchToProps`:



##### `src/App.js`

```jsx
//	src/App.js

//	...

//		...

const mapDispatchToProps = dispatch => {
  return {
    addAllStudents: (allStudents) => dispatch( actions.addAllStudents(allStudents) )
//  addAllStudents: (allStudents) => {
//    dispatch({ type: 'ADD_ALL_STUDENTS', payload: allStudents });
//  },
  };
};

```



<br>



#### Refactor `AddStudent.js` to use function from `actions.js`

##### -  Update `AddStudent.js`, <u>on the top</u>, import the actions:



##### `src/components/AddStudent.js`

```jsx
//	src/components/AddStudent.js

// ...

import * as actions from './../redux/actions/actions';
```



<br>



#### In the `AddStudent.js`, on the bottom, update the `mapDispatchToProps`:



##### `src/components/AddStudent.js`

```jsx
//	src/AddStudent.js

//	...

//		...


const mapDispatchToProps = dispatch => {
  return {
    addStudent: (newStudentObj) => dispatch( actions.addStudent(newStudentObj)); // ADD  
 // addStudent: newStudentObj => {
 //   dispatch({ type: 'ADD_NEW_STUDENT', payload: newStudentObj });		//	REMOVE
 // },
  };
};

//	...

//	...
```





<br>





#### c. Create the file with types

In a larger app it is common to see all the names of the actions being saved as variables with name in caps.

To give you a first hand experience how this looks, we will make our `types.js` file with the names of our actions.



<br>

#### Update the `types.js`



##### `src/redux/types/types.js`

```js
//	src/redux/types/types.js

export const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';

export const ADD_ALL_STUDENTS = 'ADD_ALL_STUDENTS';
```





<br>



#### Update the `studentsReducer.js`



##### `src/redux/reducers/studentsReducer.js`

```javascript
//	src/redux/reducers/studentsReducer.js

import {                  // IMPORT TYPE VARIABLES
  ADD_NEW_STUDENT,
  ADD_ALL_STUDENTS 
} from './../types/types';


const initialState = [];

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_STUDENT:                     // <-- UPDATE
      return [...state, action.payload];

    case ADD_ALL_STUDENTS:                     // <-- UPDATE
      return action.payload;

    default:
      return state;
  }
};

export default studentsReducer;
```









<br>



#### Update the `actions.js`



##### `src/redux/actions/actions.js`

``` js
//	src/redux/actions/actions.js


import {                       // IMPORT TYPE VARIABLES
  ADD_NEW_STUDENT,
  ADD_ALL_STUDENTS 
} from './../types/types';


export const addStudent = (newStudentObj) => {
  return { type: ADD_NEW_STUDENT, payload: newStudentObj };      // <-- UPDATE
}

export const addAllStudents = (allStudents) => {
  return { type: ADD_ALL_STUDENTS, payload: allStudents };       // <-- UPDATE
}

```





<br>



That's all folks. You just created a React app with Redux store! :rocket: :confetti_ball:

You can use this app as a boilerplate for your future projects and reference on how to setup Redux in your React app.



<br>



## Additional Resources

<br>



[Getting Started With Redux](https://egghead.io/courses/getting-started-with-redux)

[Redux Docs](https://redux.js.org/)

[React-Redux Docs](https://react-redux.js.org/)