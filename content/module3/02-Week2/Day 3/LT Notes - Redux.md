# Redux





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
```





#### Install Redux dependencies

```bash
# In the `project-management-client` directory
npm i redux react-redux --save
```







#### Redux is the library for state management.

#### `react-redux` is the binding library to bind React and Redux together.



![img](/home/ross-u/Desktop/IronHack_lectures_done/content/module3/02-Week2/Day 3/react-redux-overview.png)



#### Redux provides a one way flow of the data:

- View send an action to the dispatcher store,
- Dispatcher triggers the reducer with action,
- Reducer takes old state and returns new one,
- Store updates the state with new state,
- Components connected to Redux re-render on `redux state` update/change.











### In `index.js` we will create a Redux `store` object 

### and do a basic explanation of how it works.

```jsx
//	src/index.js

// IMPORT REDUX
import { createStore } from "redux";
import { Provider } from 'react-redux';

// REDUCER
//	...

// CREATE REDUX STORE
const store = createStore(/* redux store takes reducer functions */);


// PROVIDE REDUX STORE ACCESS TO OUR APP
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
```





#### What is the Redux store?

##### We can think of a `store` as an empty object. A unstructured unlimited space, assigned to Redux. Store takes one or more reducers.

##### But it is essentially an object.





#### What is a reducer ?



##### Reducer is a function that does the following things: 

##### - Creates the initial/starting state in the Redux store (on initial start of our app).

##### - Takes the previous state and action and returns the next state (updated state).



##### Essentially, each reducer creates and manages a slice of the space/state in the Redux store. We can think of it as a warehouse worker that has it's own room where data is being stored.



```js
// Warehouse = `Redux Store`  

// Storage Room/s = `Redux State`

// Warehouse Worker = `Reducer`

// Package with Instruction = `Action`
```



##### We can have multiple reducers (and state slices) in the Redux store.

##### Change to the Redux state can be done only through the reducer.







#### Create the reducer and pass it to the store



```jsx
//	src/index.js


// INITIAL STATE FOR THE STORE		<--- Create before the reducer
const initialState = []

// REDUCER
const reducer = (state = initialState , action) => {
  console.log('Initialization action -> ', action);
  console.log('state -> ', state);
}

// If we log this in browser we will see that reducer initializes the Redux state, when the app loads.
```

 





#### We can now modify the reducer, and specify what to do on each action. In the next step we will explain what is the action.

#### Let's create an instruction for the action called `'ADD_PROJECT'` :

```jsx
//	src/index.js

//	REDUCER
const reducer = (state = initialState, action) => {
  switch(action.type) {   // The action type string
          
    case 'ADD_PROJECT':
// Take the old state and create new state with the data from the action
      const newState = [...state, action.payload];
      return newState;
    
      default:
      return state;
  }
}
```









#### To start changing the Redux state, we have to give a command to the reducer.



#### We call this command - an `action`. 

#### `action` is an object containing property`type` for the type of action and can also include `payload`.



#### Action is given to the reducer via `store.dispatch`  function, which is the way how we send the `action` object to the reducer.



```jsx
//	src/index.js

// ACTION
const addProject = { type: 'ADD_PROJECT', payload: 'My new project'};

// DISPATCHING THE ACTION TO THE REDUX STORE
store.dispatch(addProject);
```







#### We then subscribe to listen to any changes of the Redux store.

(SUBSCRIBE BEFORE DISPATCHING THE ACTION)

```jsx
//	src/index.js

// ...

//  SUBSCRIBE TO CHANGES IN REDUX STORE   <--- Subscribe before the dispatch
store.subscribe( ()=> {
  console.log('Redux store state changed!');
  console.log( store.getState() );
})

// ACTION
const addProject = { type: 'ADD_PROJECT', payload: 'My New Project' };

// DISPATCHING THE ACTION TO THE REDUX STORE
store.dispatch(action1);
```







## Getting the data from Redux store and structuring the project



#### Our app with Redux store can be structured better and easier to maintain by separating all the above pieces into separate files. 

#### Getting data from the Redux store and dispatching of the actions is done by using react-redux `connect`  Higher order component.







#### Let's now do the full app setup for Redux, separating `reducers` and `actions` in separate files and connecting our components to the Redux store.





#### Create the following directories and files:

```bash
cd src/

mkdir redux redux/reducers redux/actions redux/types

touch redux/reducers/projectReducer.js
touch redux/actions/actions.js
```





#### Import the reducer and provide it to the store 

```jsx
//	src/index.js

...
...

import { createStore } from 'redux';
import { Provider } from 'react-redux'

// IMPORT THE REDUCER
import projectReducer from './redux/reducers/projectReducer';

// PASS THE REDUCER TO THE STORE
const store = createStore(projectReducer)

```









#### Let's Update the `projectReducer.js` file and create a reducer function.

```jsx
//	redux/reducers/projectReducers.js


const initialState = {
  projects: [],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      // CREATE NEW STATE
      return state;

    default:
      return state;
  }
};

export default projectReducer;
```







### Let's write the reducer logic for updating the Redux store.



```jsx
//	redux/reducers/projectReducers.js

...


//  ACTION  -   { type: 'ADD_PROJECT', payload: { ........ }  }

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

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







### Properly updating the state in the Redux store -  

### We don't mutate the state, we create a new copy



You may be wondering why were we using the spread operators and creating new object and array when updating the state in `case 'ADD_PROJECT'`.



To trigger the update of components when an action is dispatched, **Redux checks if the object is different (reference ), not if the properties have changed** (which is a lot faster), so:

- If you **create a new object**, Redux will see that the object is not the same, so **it will trigger the update on the components connected to Redux**.
- If you **mutate** the object that it is already in the store (adding or changing a property, for example) **Redux will not see the change**, so it will not update the components.











### Enable the Redux DevTools extension

```jsx
//	src/index.js

	...
    	...
    
// CREATE REDUX STORE
const store = createStore(
  projectReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)
```













#### Using a `connect` HOC from Redux we will connect our component to Redux state.



##### `mapStateToProps = () => {}` - adds selected data from Redux store, as props to the component



##### `mapDispatchToProps = () => {}` - adds methods with actions, as props to the component 





`src/components/projectList.js`

```jsx
// components/projects/ProjectList.js

...

import { connect } from 'react-redux';

...

	...


const mapStateToProps = () => {};

const mapDispatchToProps = () => {};

//connect(|get data from redux store|, |create dispatch methods")(Component)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
```









```jsx
// components/projects/ProjectList.js

...
		...

// ADD PARTS OF REDUX STATE TO THE PROPS
const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

//	CREATE METHODS WITH ACTIONS ON THE PROPS
const mapDispatchToProps = (dispatch) => {
  return {
    addAllProjects: (allProjects) => { 
        dispatch( {type: 'ADD_ALL_PROJECTS', payload: allProjects} ) 
   } 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
```









#### Change `getAllProjects` to save the data to the Redux store instead of saving it to the component `state`

```jsx
// components/projects/ProjectList.js

...


  getAllProjects = () => {
    axios.get(`http://localhost:5000/api/projects`).then(response => {
      // this.setState({ listOfProjects: response.data });	 <--- DELETE
      this.props.addAllProjects(response.data);
    });
  };
```







#### Remove the `state` from `ProjectList` and map the data coming from the Redux state via `this.props.projects` which we set in the `mapStateToProps`.

```jsx
// components/projects/ProjectList.js

...
class ProjectList extends Component {
  // state = {
  //   listOfProjects: [],				<--- DELETE
  // };

	...
    	...
  render() {
 // const { listOfProjects } = this.state;     <--- DELETE
    const { projects } = this.props; 		 // <-- ADD
        
    return (
      <div>
        <AddProject updateProjectList={this.getAllProjects} />
        <div>
            
       {/* {listOfProjects &&						<--- DELETE
            listOfProjects.map(project => { */}		<--- DELETE
            
          { projects &&							// <-- ADD
            projects.map(project => {			// <-- ADD
```









#### Let's connect `AddProject` component to Redux and start adding projects to the redux state after saving them to the DB.





`components/projects/AddProject`

```jsx
//	components/projects/AddProject

...

import { connect } from "react-redux";


...
		...

const mapDispatchToProps = dispatch => {
  return {
    addProject: project => {
      dispatch({ type: 'ADD_PROJECT', payload: project });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddProject);
```







```jsx
//	components/projects/AddProject

...
  

  handleFormSubmit = event => {
    event.preventDefault();
    const { title, description } = this.state;

    axios
      .post(`http://localhost:5000/api/projects`, { title, description })
      .then(() => {
         this.props.addProject({ title, description });
         this.setState(
           { title: '', description: '' },
           this.props.updateProjectList()
        );
      });
  };
```









### We can refactor the code and move our action functions to a separate file



`redux/actions/actions`

```jsx
//	redux/actions/actions

export const addProject = project => ({
  type: 'ADD_PROJECT',
  payload: project,
});

export const addAllProjects = allProjects => ({
  type: 'ADD_ALL_PROJECTS',
  payload: allProjects,
});

```





`components/projects/AddProject.js`

```jsx
// components/projects/AddProject.js

	...
	
import * as actions from './../../redux/actions/actions';

	...
		...

const mapDispatchToProps = dispatch => {
  return {
    addProject: (project) => dispatch(actions.addProject(project)),
  };
};
```





`components/projects/ProjectList.js`

```jsx
// components/projects/ProjectList.js

	...
    
import * as actions from './../../redux/actions/actions';

	...
    	...

const mapDispatchToProps = dispatch => {
  return {
    addAllProjects: (allProjects) =>
      dispatch(actions.addAllProjects(allProjects)),
  };
};

```









### Task - refactor the existing app to use the Redux store for both Projects and Tasks



Before starting read about the `combineReducers` method of `redux` and go through the first 10 videos on this playlist. 