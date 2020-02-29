# React | Routing Advanced





### [STARTER REPO](<https://github.com/ross-u/React---Routing-Advanced-Starter-repo->)



```bash
# Clone the repo
git clone https://github.com/ross-u/React---Routing-Advanced-Starter-repo-.git

cd React---Routing-Advanced-Starter-repo-

npm i

code .
```





<br>



### Install the dependencies

```bash
npm i
```



#### We are reusing the code from previous lecture with an additional component `Projects.js` which is rendering the list of projects.





### We need to update

###  `<Projects>`  component to show each project as a `<Link>`



##### `components/Projects.js`

```jsx
//	components/Projects.js
//	...

import { Link } from 'react-router-dom';

//	... 

export const Projects = () => {
  return (
    <div>
      <h2>Projects:</h2>
      {
        myProjects.map((project) => {
          return (
            <div key={project.id} className="project">
              
              <h3>
                <Link to={`/projects/${project.id}`}>
                  {project.name} 
                </Link>  
              </h3>
              
              <h4>{project.technologies}</h4>
            </div>
          )
      })}
  </div>
  )
}
```







<br>





#### If we click on a project link we will see that URL in the browser is changing dynamically











#### Create a `<ProjectDetails>` component 

#### - and create a new`<Route>` for `ProjectDetails`



##### `src/components/ProjectDetails.js`

```jsx
// src/components/ProjectDetails.js

import React, { Component } from 'react';
import { myProjects } from './Projects';

const ProjectDetails = (props) => {
    console.log(props);
    return <h2>Project Details</h2>;
}    
   

export default ProjectDetails;
```



<br>

#### Create a new Route



##### `src/App.js`

```jsx
//	src/App.js

//	...
import ProjectDetails from './components/ProjectDetails';

//	...
//			...

		 <Route exact path='/projects' component={Projects}/>
     <Route exact path="/projects/:id" component={ProjectDetails} />

//	...
```





<br>



### Click on a project to see details page and open Chrome console



#### because we are using `react-router-dom` we can see all of this: 

```js
{
	history: {…},
  location: {…},
    								//	Expand property `match` and `params`
  match: {
    …
    params: {id: '1a'},
    path: "/projects/:id"
		url: "/projects/1a"
  },
  staticContext: undefined}
```

 











## Getting query `params` from the url





### Update `<ProjectDetails>` to render all details and back button





##### `src/components/ProjectDetails.js`

```jsx

// src/components/ProjectDetails.js

import React from 'react';
import { myProjects } from './Projects';
import { Link } from 'react-router-dom';

// helper function - retrieves a specific project by id
const getProjectById = (id) => {
  let result = myProjects.find( (project) => project.id === id );
  return result;
};

// function component
const projectDetails = (props) => {
  console.log(props);
  
  // Deconstruct the path params from props.match
  const { params } = props.match;
  
  //  Get the specific project
  const projectToDisplay = getProjectById(params.id);
   
  return (
    <div>
      <h2>{ projectToDisplay.name } <span style={{fontSize:"14px"}}>{ projectToDisplay.year }</span></h2>
      <h3>Used technologies: { projectToDisplay.technologies }</h3>
      <p>{ projectToDisplay.description }</p>
      
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default projectDetails;
```







<br>



## Query String





### Let's hard code a query string to our project route:

#### `/projects/${project.id}?bootcamp=Ironhack&city=BCN`



##### `components/Projects.js`

```jsx
//	components/Projects.js


//	...

    <h2>Projects:</h2>
    {
      myProjects.map((project) => {
        return (
          <div key={project.id} className="project">
            <h3> 
             	{/* <Link to={`/projects/${project.id}`}> {project.name} </Link> */}
              	<Link to={`/projects/${project.id}?bootcamp=Ironhack&city=BCN`}> 
                	{project.name} 
              	</Link>
              </h3>
            
              <h4>{project.technologies}</h4>
            </div>
//         ...
     ...
```



<br>





#### Open the Chrome console and check the logged object for the query:



### query is saved under `location.search`



```js
history: {…},
location:{ 
	...
	pathname: "/projects/1a"
	search: "?bootcamp=Ironhack&city=BCN"
  ...
},

match: { 
  ...  ,
  params: {…}
},
```





<br>



#### Let's console log our `this.props.location.search`

##### `src/components/Projects.js`

```jsx
//	components/Projects.js


// ...


// function component
const projectDetails = (props) => {
  console.log('props.location.search  :', props.location.search);
  console.log(props);
  
 // ...
```









### Let's use a package to parse our query string into an object



```bash
npm install --save query-string
```







##### `components/ProjectDetails.js`

```jsx
//	components/ProjectDetails.js

//	...

import queryString from 'query-string';

//	...

//		...

// function component
const projectDetails = (props) => {

  // parsing the query string 
  const queryObj = queryString.parse(props.location.search)
  console.log('query object', queryObj);
  
  
  console.log('props.location.search', props.location.search);  // url `query`
  console.log(props);
  
  ...
```







## [REPO EXAMPLE DONE](<https://github.com/ross-u/React---Routing-Advanced-Done->)









## Extra Resources

#### [Query String NPM](https://www.npmjs.com/package/query-string)

#### [React Router Training](https://reacttraining.com/react-router)

#### [More Training](https://github.com/ReactTraining)