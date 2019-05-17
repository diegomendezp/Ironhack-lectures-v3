# React | Integrating the React App



After this lesson, you will be able to:

- Make a request to a REST API using `axios`
- Understand how to integrate backend and frontend parts of your application







In this lesson, we will build a simple `React` application to consume our REST API.





#### Let’s start with creating the React app using CLI command:

```bash
create-react-app project-management-client
```





We already updated the port where our server side is running-we changed it from `3000` to `5000`, so we have: 



- `project-management-server` runs on `http://localhost:5000`
- `project-management-client` runs on `http://localhost:3000`







### Install `axios` for http requests and `react-router-dom`

```bash
npm install axios react-router-dom --save
```





### Create folders for the components

```bash
mkdir src/components     
mkdir src/components/projects
mkdir src/components/navbar
```



#### Setup the `<Router>` in `index.js`

```jsx
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render((
<Router> 
    <App />
</Router> 
), document.getElementById('root'));

// ...
registerServiceWorker();
```







### Create `<AddProject />` component.

```jsx
// components/projects/AddProject.js

import React, { Component } from 'react';
import axios from 'axios';

class AddProject extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", description: "" };
  }
   
  handleFormSubmit = (event) => {}

  handleChange = (event) => {}

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          
          <label>Title:</label>
          <input type="text" 
            name="title" 
            value={this.state.title} 
            onChange={ (e) => this.handleChange(e) }/>
          
          <label>Description:</label>
          <textarea name="description" 
            value={this.state.description} 
            onChange={ (e) => this.handleChange(e) } />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProject;
```





#### Let's create the methods `handleFormSubmit` and `handleChange`

```jsx
// components/projects/AddProject.js

handleFormSubmit = (event) => {
    event.preventDefault();
    const {title, description } = this.state;
    
  axios.post(
    "http://localhost:5000/api/projects", 
    { title, description }
  )
  .then( () => {
     // this.props.getData();
     this.setState({title: "", description: ""});
   })
   .catch( (err) => console.log(err) )
 }


 handleChange = (event) => {  
   const {name, value} = event.target;
   this.setState({[name]: value});
 }
```









#### Update `App.js` and include `<AddProject />`

```jsx
//	src/App.js

import React from 'react';
import './App.css';
import AddProject from './components/projects/AddProject'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddProject />
      </div>
    );
  }
}

export default App;

```





#### Start the server before running react app



#### Run the app `npm start`  & open in browser



#### Submit some data and check the projects in Postman









### Create `<ProjectList />` component

```jsx
// components/projects/ProjectList.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddProject from './AddProject'; // <== !!!

class ProjectList extends Component {
	state = { 
    listOfProjects: [] 
  };

  getAllProjects = () => {}

  componentDidMount() {
    //  fetch the data from API befor initial render
    this.getAllProjects();  
  }

  render() {
    const { listOfProjects } = this.state;

    return(
      <div>                 //  
        <AddProject getData={() => this.getAllProjects()} />   
        <div>
          { 
            listOfProjects.map( (project) => {
            return (
              <div key={project._id}>
                <Link to={`/projects/${project._id}`}>
                  <h3>{project.title}</h3>
                </Link>
                <p>{project.description} </p>
              </div>
            )})
          }
        </div>

      </div>
    )
  }
}

export default ProjectList;
```







#### Finish the method `getAllProjects()` in `<ProjectList>`

```jsx
// components/projects/ProjectList.js

...

  getAllProjects = () =>{
    axios.get(`http://localhost:5000/api/projects`)
    .then((apiResponse) => {
      this.setState({ listOfProjects: apiResponse.data })
    })
  }
```







### Uncomment the line in AddProject - which gets all projects every time new project is POSTed.



`projects/AddProject`

```jsx
// components/projects/AddProject.js

handleFormSubmit = (event) => {
    event.preventDefault();
    const {title, description } = this.state;

    axios.post("http://localhost:5000/api/projects", { title, description })
    .then( () => {
      this.props.getData();		//		   ⟸  UNCOMMENT THIS LINE * *
      
      this.setState({title: "", description: ""});
    })
    .catch( error => console.log(error) )
  }
```











#### Create a `<ProjectDetails />`component

```jsx
// components/projects/ProjectDetails.js

import React, { Component } from 'react';
import axios from 'axios';

// import Link and Redirect as we will use them later
import { Link, Redirect } from 'react-router-dom';

class ProjectDetails extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
  
  render(){
    return <h1>Welcome to project details page!</h1>
  }
}

export default ProjectDetails;
```





#### Create `<Navbar>` component

```jsx
// components/navbar/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <Link to="/projects" 
            style={{ textDecoration: 'none' }}>
            Projects
          </Link>
        </li>
    </ul>
    </nav>
  )
}

export default navbar;
```







### Update `App.js`

```jsx
//	src/App.js
import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

// import AddProject from './components/projects/AddProject'  // REMOVE
import ProjectList from './components/projects/ProjectList';
import Navbar from './components/navbar/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <div className="App">
      {/* <AddProject /> */}  {/* REMOVE */}
      <Navbar />

      <Switch>
        <Route exact path="/projects" component={ProjectList}/>
        <Route exact path="/projects/:id" component={ProjectDetails} />
      </Switch>
    </div>
  );
}

export default App;
```







#### Update `<ProjectDetails>` to add functionality

```jsx
// components/projects/ProjectDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProjectDetails extends Component {
  constructor(props){
      super(props);
      this.state = {title: '', description: ''};
  }

  componentDidMount(){
      this.getSingleProject();
  }

  getSingleProject = () => { 
  /* here we do a GET request and then set the state */
  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <h4>{this.state.description}</h4>
        <Link to={'/projects'}>Back to projects</Link>
      </div>
    )
  }
}

export default ProjectDetails;
```







#### Finalize `getSingleProject()` method in `<ProjectDetails>`

```jsx
// components/projects/ProjectDetails.js

getSingleProject = () => {
	const { id } = this.props.match.params;

	axios.get(`http://localhost:5000/api/projects/${id}`)
		.then( (apiResponse) =>{
			const theProject = apiResponse.data;
			this.setState(theProject);
		})
		.catch((err) => console.log(err));
}
```











#### Create `EditProject.js` component with a form to update a specific project.



```jsx
// components/projects/EditProject.js

import React, { Component } from 'react';
import axios from 'axios';

class EditProject extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.theProject.title, 
        description: this.props.theProject.description
    }
  }
    
  handleFormSubmit = (event) => {}

  handleChangeTitle = (e) => {  
    this.setState({ title:e.target.value })
  }

  handleChangeDescription = (e) => {  
    this.setState({ description:e.target.value })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          
          <label>Title:</label>
          <input type="text"
            name="title" 
            value={this.state.title} 
            onChange={e => this.handleChangeTitle(e)}/>
          
          <label>Description:</label>
          <textarea name="description" 
            value={this.state.description} 
            onChange={e => this.handleChangeDescription(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditProject;
```











#### Finalize `handleFormSubmit` in `EditProject.js`

```jsx
// components/projects/EditProject.js

handleFormSubmit = (event) => {
  event.preventDefault();
  const { title, description } = this.state;
  const { _id } = this.props.theProject;

  axios.put(
    `http://localhost:5000/api/projects/${_id}`,
    { title, description }
  )
  .then( () => {
    this.props.getTheProject();						//  <---  hmmm
    this.props.history.push('/projects');    
    // after submitting the form, redirect to '/projects'
  })
   .catch( (err) => console.log(err) )
}
```















#### Place `<EditProject>` form in `ProjectDetails.js`



```jsx
// components/projects/ProjectDetails.js


  renderEditForm = () => {
    /* Check if state is not empty when`renderEditForm` is triggered. 
     If the state is empty nothing can be passed to `EditProject` as the
    value in `theProject` prop to populate the form  */
    if (!this.state.title) { this.getSingleProject() } 
    else {
      return (
        <EditProject theProject={this.state}
          getTheProject={this.getSingleProject} 
          {...this.props} /> 
       // {...this.props}  so that we can use 'this.props.history' in EditProject    
      )      
    }
  }
  
  ...
  	...
  
    render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h4>{this.state.description}</h4>
        <Link to={'/projects'}>Back To Projects</Link>

        <div>{this.renderEditForm()} </div>   {/* Render the form in here */}
      </div>
    )
  }
```













#### Update `ProjectDetails` and create additional method to make DELETE requests to the API.

```jsx
// components/projects/ProjectDetails.js


// DELETE PROJECT:

  deleteProject = () => {
    const { id } = this.props.match.params;
    
    axios.delete(`http://localhost:5000/api/projects/${id}`)
    	.then( () => this.props.history.push('/projects') )
    	.catch( (err) => console.log(err));
  }
  
  
  ...
  		...
  
  	<button onClick={() => this.deleteProject()}>
    	Delete project
  	</button>
```















### Create `AddTask` component



```jsx
// components/tasks/AddTask.js

import React, { Component } from 'react';
import axios from 'axios';

class AddTask extends Component {
  constructor(props){
    super(props);
    this.state = { title: '', description: '', isShowing: false};
  }
   
  handleFormSubmit = (event) => {}
  
  toggleForm = () => this.setState({isShowing: !this.state.isShowing});

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <button onClick={this.toggleForm}> Add task </button>

        {
          !this.state.isShowing ?
           null
          :
          (<div>
            <form>
              <input type="text" placeholder='Title'
                name="title" value={this.state.title}
                onChange={ (e) => this.handleChange(e)}/>
              
              <input name="description" placeholder='Description'
                value={this.state.description}
                onChange={ (e) => this.handleChange(e)} />
              
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>)
        }
      </div>
    )
  }
}

export default AddTask;
```

 

















#### Finalize `handleFormSubmit` in `AddTask.js`





```jsx
// components/tasks/AddTask.js

handleFormSubmit = () => {
      event.preventDefault();
    const { title, description } = this.state;
    const { projectID } = this.props; 
 // we need to know to which project the task belongs, therefore we get its 'id'
                                                
    axios.post("http://localhost:5000/api/tasks",{ title, description, projectID })
    .then( () => {
// after form submit, GET project once more so that updated task list is displayed 
        this.props.getUpdatedProject();
        this.setState({title: '', description: ''});
    })
    .catch( error => console.log(error) )
}
```











#### Add component `<AddTask />` to the `ProjectDetails.js`



```jsx
// components/projects/ProjectDetails.js  

...
	...


renderAddTaskForm = () => {
  if(!this.state.title){ this.getSingleProject() } 
  else return <AddTask projectID={this.state._id} 
                getUpdatedProject={this.getSingleProject} />
}	



...
		...
			// INSIDE `render()` put `renderAddTaskForm` last

        <button onClick={() => this.deleteProject()}>
    	    Delete project
  	    </button>

        <div>{ this.renderAddTaskForm() }</div>		{/* Render AddTask form  */}
```











### Render All the tasks



```jsx
// components/projects/ProjectDetails.js  



				<div>{this.renderAddTaskForm()}</div>

				// AFter the last line of code, render list of tasks	
	
        { this.state.tasks && this.state.tasks.map((task, index) => {
            return(
                <div key={ index }>
                  <h2>{ task.title }</h2>
                  <p>{ task.description}</p>
                </div>
            )
            
        })
      }
```







### REMAINING TO DO:



- Create `<TaskDetails>` component and routing
- Create `<EditTask>` component which makes `PUT` request to the API to update the task.  Render `<EditTask>` inside of `<TaskDetails>` .
- Create delete Button which triggers `DELETE` request and to delete a task by id and does new `GET `request to get the updated project and it's tasks.
- Add styles to the app













#### Refactor each task into a Link

```jsx
// components/projects/ProjectDetails.js  



				<div>{this.renderAddTaskForm()}</div>

				// AFter the last line of code, render list of tasks	
	
        { this.state.tasks && this.state.tasks.map((task, index) => {
            return(
               <Link to={`/projects/${this.state._id}/tasks/${task._id}`}>
                 <h2>{ task.title }</h2>
               </Link>
            )
            
        })
      }



```











#### Update routes, and create route to render `<TaskDetails>`



```jsx
// App.js

...

import TaskDetails from './components/tasks/TaskDetails'; // import <TaskDetails> 


class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
        <Switch>
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
          
          {/* added to display task details page: */}
          <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} /> 
          {/* !!! */}
        </Switch>
      </div>
    );
  }
}

export default App;
```









#### Create `<TaskDetails>` component

```jsx
// components/tasks/TaskDetails.js

import React, { Component } from 'react';
import axios from 'axios';


class TaskDetails extends Component {
	state = {};

  componentDidMount(){
    this.getTheTask();
  }

  getTheTask = () => {
    const { id, taskId } = this.props.match.params;
    axios.get(`http://localhost:5000/api/projects/${id}/tasks/${taskId}`)
    	.then( (apiResponse) => {
      	const theTask = apiResponse.data;
      	this.setState(theTask);
    })
    .catch( (err) => console.log(err))
  }

  render(){
    return(
      <div>
        <h1>TASK DETAILS</h1>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
      </div>
    )
  }
}

export default TaskDetails;
```

