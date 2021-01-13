# Redux



<br>



### Before starting install Redux Dev Tools

[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)







### Clone the starter repository and checkout to branch `starter-code`



```bash
git clone https://github.com/ross-u/redux-intro-and-setup.git

cd redux-intro-and-setup



# Switch to the branch `starter-code`
git checkout starter-code



# Install dependencies in the `project-management-server`
cd project-management-server

npm i


# Install dependencies in the `project-management-client`
cd ../project-management-client

npm i

# Checkout to the root of the project
cd ../

# Open the code editor
code .
```







<br>



### Checkout to the server directory, and start the server

```bash
# In the `project-management-server`
npm run dev
```



<br>



### Checkout to the client directory, and start the Create React App dev server

```bash
# In the `project-management-client`
npm start
```





<br>



#### Install Redux dependencies

```bash
# In the `project-management-client` directory
npm i redux react-redux --save
```





<br>





#### Redux is the library for state management.

#### `react-redux` is the binding library to bind React and Redux together.





### [OPEN IMAGE](https://hackernoon.com/hn-images/1*87dJ5EB3ydD7_AbhKb4UOQ.png)



![img](https://hackernoon.com/hn-images/1*87dJ5EB3ydD7_AbhKb4UOQ.png)







<br>



 







## Creating the Redux store



<br>





#### Create the following directories and files:

```bash
# Create file structure for redux files
mkdir src/redux
mkdir src/redux/reducers
mkdir src/redux/actions 
mkdir src/redux/types

# Create a reducer file
touch src/redux/reducers/project-reducer.js

# Create actions file
touch src/redux/actions/actions.js
```





<br>



### In `index.js` we will create a Redux `store` object 

### and do a basic explanation of how it works.

##### `src/index.js`

```jsx
//	src/index.js

// IMPORT REDUX
import { createStore } from "redux";
import { Provider } from 'react-redux';

// REDUCER
//	...

// CREATE REDUX STORE
const store = createStore(/* redux store takes reducer functions */);



// PROVIDE REDUX STORE TO THE APP
ReactDOM.render(
  <Provider store={store}>            {/*       ADD PROVIDER WITH STORE 	  */}
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
```





<br>





<br>



#### What is the Redux store?

##### We can think of a `store` as an empty object. A unstructured space, assigned to Redux. 

##### Store takes one or more reducers.

##### Reducer creates a storage slice in the redux state.

##### 





#### What is a reducer ?



##### Reducer is a function that does the following things: 

##### - Creates the initial/starting state in the Redux store (on the initial start of the app).

##### - Updates the state of the store (reducer takes the previous state and action and returns the next /updated state ).



##### Essentially, each reducer creates and manages a slice of the space/state in the Redux store.

##### We can think of it as a warehouse worker that has it's own room where data is being stored.



```js
// Warehouse = `Redux Store`  

// Storage Room/s = `Redux State (portion of the state)`

// Warehouse Worker = `Reducer`

// Package with Data and an Instruction = `Action`
```



<br>



##### We can have multiple reducers (and state slices) in the Redux store.

##### Change to the Redux state can be done only through the reducer.





<br>



### Create the reducer and pass it to the store





##### `redux/reducers/project-reducer.js`

```js
//	redux/reducers/project-reducers.js

const projectReducer = (state, action) => {
  // RULES ON HOW TO HANDLE THE PORTION OF THE REDUX STATE WITH PROJECTS
  //	...
  return state;
};

export default projectReducer;
```



<br>



#### Import the reducer and provide it to the store 

##### `src/index.js`

```jsx
//	src/index.js

// ...
// ...

import { createStore } from 'redux';
import { Provider } from 'react-redux'

// IMPORT THE REDUCER
import projectReducer from './redux/reducers/projectReducer';

// PASS THE REDUCER TO THE STORE & ENABLE REDUX DEV TOOLS
const store = createStore(
  projectReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);


//	...

//	...
```







<br>





#### To start changing the Redux state, we have to give a command to the reducer.



#### We call this command - an `action`. 

#### `action` is an object containing property`type` for the type of action and can also include `payload`.



#### Action is given to the reducer via `store.dispatch`  function, which is the way how we send the `action` object to the reducer.



**Redux `state` can be changed only by dispatching an `action` object.**



<br>

##### `src/index.js`

```js
//	src/index.js

// ...
// ...


// PASS THE REDUCER TO THE STORE & ENABLE REDUX DEV TOOLS
const store = createStore(
  projectReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)



//             AFTER THE STORE
//      CREATE ACTION OBJECTS AND DISPATCH THEM

// ACTION
const addProject1 = { type: 'ADD_PROJECT', payload: 'P1 - Learn Redux' };	// <-- ADD
const addProject2 = { type: 'ADD_PROJECT', payload: 'P2 - React Native' };	// <-- ADD



// DISPATCHING THE ACTION TO THE REDUX STORE
store.dispatch(addProject1);
store.dispatch(addProject2);


// BEFORE ReactDOM.render(

//	...

//	...
```







<br>



#### Before we get the dispatched actions to affect the Redux store, we have to create the reducer.



<br>



#### Let's Update the `projectReducer.js` file and create a reducer function.





<br>



##### `redux/reducers/projectReducers.js`

```jsx
//	redux/reducers/projectReducers.js


const initialState = {
  projects: [],
};

const projectReducer = (state, action) => {
  // This `if` block runs only once, when the store is first created
  // and sets the initial state of the store.
   if (!state) {
     return initialState;
   }
   else {
     return state;
   }
};


export default projectReducer;
```





<br>

#### The above can be simplified to (common syntax with Redux):

```js
//	redux/reducers/projectReducers.js

const initialState = {
  projects: [],
};

const projectReducer = (state = initialState, action) => {
  return state;
}

export default projectReducer;
```





<br>



## `NOTE:`

#### If we run our app we will see that redux automatically runs one action called `INIT` which forms the store, by using the `initialStore` value.







<br>



### Update the projectReducer to specify how different actions will affect the Redux store state.



<br>

##### `redux/reducers/projectReducers.js`

```jsx
//	redux/reducers/projectReducers.js


const initialState = {
  projects: [],
};

const projectReducer = (state = initialState, action) => {
  /*
   if (!state) {
     return initialState;
   }
  */
  
  switch (action.type) {
    case 'ADD_PROJECT':
      const newState = {
        ...state,
        projects: [...state.projects, action.payload] 
      };
      
      return newState;

      
    default:
      return state;
  }
};

export default projectReducer;
```





<br>





### Let's write the reducer logic for updating the Redux store for different actions.



##### `redux/reducers/projectReducers.js`

```jsx
//	redux/reducers/projectReducers.js

//  ...


//  ACTION  -   { type: 'ADD_PROJECT', payload: { ........ }  }

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      const newState = {
        ...state,
        projects: [...state.projects, action.payload] 
      };
      return newState;
      /* // REDUX SYNTAX SHOULD BE SIMPLIFIED TO:
      return {
        ...state,
        projects: [...state.projects, action.payload] 
      }
      */


      
    case 'ADD_ALL_PROJECTS':
      return {
        ...state,
        projects: [...action.payload],
      };

    default:
      return state;
  }
};

export default projectReducer;
```





<br>





### Properly updating the state in the Redux store -  

### We don't mutate the state, we create a new copy



You may be wondering why were we using the spread operators and creating new object and array when updating the state in `case 'ADD_PROJECT'`.



To trigger the update of components when an action is dispatched, **Redux checks if the object is different (reference ), not if the properties have changed** (which is a lot faster), so:

- If you **create a new object**, Redux will see that the object is not the same, so **it will trigger the update on the components connected to Redux**.
- If you **mutate** the object that it is already in the store (adding or changing a property, for example) **Redux will not see the change**, so it will not update the components.





<br>



## Connecting components to Redux store



<br>

#### Using the `connect` HOC from `react-redux` we can connect components to Redux state, in order to get data from the Redux store and dispatch actions.



#### <br>







##### `mapStateToProps = () => {}` - adds selected data from Redux store, as props to the component



##### `mapDispatchToProps = () => {}` - adds methods with actions, as props to the component 



<br>



##### `src/components/projects/ProjectList.js`

```jsx
// components/projects/ProjectList.js

//	...

import { connect } from 'react-redux';

//	...

//			...


// adds selected data from Redux store, as props to the component
const mapStateToProps = (state) => {};
//  addReduxDataToProps  // <-- More descriptive name



// adds methods with actions, as props to the component
const mapDispatchToProps = (dispatch) => {};
//  addReduxActionsToProps // <-- More descriptive name


//connect({get data from redux store}, {create dispatch methods})(Component)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
```





<br>

##### `components/projects/ProjectList.js`

```jsx
// components/projects/ProjectList.js

//	...
//			...

// ADD PARTS OF REDUX STATE TO THE PROPS
const mapStateToProps = (state) => {
  return {
    projects: state.projects
// prop name: what data from redux sitore
  }
}

//	CREATE METHODS WITH ACTIONS ON THE PROPS
const mapDispatchToProps = (dispatch) => {
  return {
    addAllProjectsToRedux: (allProjects) => { 
        dispatch( {type: 'ADD_ALL_PROJECTS', payload: allProjects} ) 
   } 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
```





<br>





#### Change `getAllProjects` to save the data to the Redux store instead of saving it to the component `state`



##### `components/projects/ProjectList.js`

```jsx
// components/projects/ProjectList.js

//	...


  getAllProjects = () => {
    axios.get(`http://localhost:5000/api/projects`).then(response => {
      // this.setState({ listOfProjects: response.data });	 <--- DELETE
      this.props.addAllProjectsToRedux(response.data);
    });
  };

//	...
```





<br>



#### Remove the `state` from `ProjectList` and map the data coming from the Redux state via `this.props.projects` which we set in the `mapStateToProps`.



##### `components/projects/ProjectList.js`

```jsx
// components/projects/ProjectList.js

//	...

class ProjectList extends Component {
  // state = {
  //   listOfProjects: [],				<--- DELETE
  // };

  
  
//		...
  
//		...
  
  
  render() {
 // const { listOfProjects } = this.state;                 // <--- REMOVE
    const { projects } = this.props; 		         // <-- ADD
        
    return (
      <div>
        <AddProject updateProjectList={this.getAllProjects} />
        <div>
            
       {/* {listOfProjects &&						<--- REMOVE
            listOfProjects.map(project => { 		<--- REMOVE        */}
            
          { projects &&							// <-- ADD
            projects.map(project => {			// <-- ADD
```





<br>



#### Remove the previous dispatch of actions from `src/index.js` (we used these only as a brief example).



##### `src/index.js`

```js
//	src/index.js

// DISPATCHING THE ACTION TO THE REDUX STORE
//	store.dispatch(addProject1);                    <--  REMOVE
//	store.dispatch(addProject2);                    <--  REMOVE
```





<br>



#### Let's connect `AddProject` component to Redux and start adding projects to the redux state after saving them to the DB.



<br>



#### Create a dispatch of `ADD_PROJECT` action in `AddProject`



##### `components/projects/AddProject`

```jsx
//	components/projects/AddProject

//	...

import { connect } from "react-redux";


//	...
//			...

//  addReduxActionsToProps // <-- More descriptive name
const mapDispatchToProps = dispatch => {
  return {
    addProjectToRedux: function (oneProject) {
      dispatch({ type: 'ADD_PROJECT', payload: oneProject });
    },
  };
};


export default connect(null, mapDispatchToProps)(AddProject);
```







<br>





##### `components/projects/AddProject`

```jsx
//	components/projects/AddProject

//	...

//	...



  handleFormSubmit = event => {
    event.preventDefault();
    const { title, description } = this.state;

    axios
      .post(`http://localhost:5000/api/projects`, { title, description })
      .then(() => {
         this.props.addProjectToRedux({ title, description });            //	<--	ADD
      
         this.setState(
           { title: '', description: '' },
           this.props.updateProjectList()
        );
      });
  };

//	...
```





<br>



### Refactor the code and move the actions from `ProjectList` and `AddProject` to a separate file



##### `redux/actions/actions`

```jsx
//	redux/actions/actions

export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  payload: project,
});

export const addAllProjects = (allProjects) => ({
  type: 'ADD_ALL_PROJECTS',
  payload: allProjects,
});

```



<br>



#### Import action methods in `AddProject` and update `mapDispatchToProps`



##### `components/projects/AddProject.js`

```jsx
// components/projects/AddProject.js

//	...
	
import * as actions from './../../redux/actions/actions';  //      <-- ADD

//	...
//			...

const mapDispatchToProps = dispatch => {
  return {
    addProject: (project) => dispatch(actions.addProject(project)),  //   <-- UPDATE
  };
};


//	...
```





<br>



#### Import action methods in `ProjectList` and update `mapDispatchToProps`



##### `components/projects/ProjectList.js`

```jsx
// components/projects/ProjectList.js

//	...
    
import * as actions from './../../redux/actions/actions';  //      <-- ADD

//	...
//    	...

const mapDispatchToProps = dispatch => {
  return {
    addAllProjects: (allProjects) =>
      dispatch(actions.addAllProjects(allProjects)),  //      <-- UPDATE
  };
};

//	...
```





<br>



###  

Congrats! We successfully  implemented the Redux store in our React app !!! :rocket: :rocket:



<br>





### [LAB - Redux Student](https://gist.github.com/ross-u/b5732fdd967f59ac99fc63df85a1716b)





<br>