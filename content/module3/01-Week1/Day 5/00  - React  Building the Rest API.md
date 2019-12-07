# React | Building the Rest API



## REST API

REST stands for **Representational State Transfer**.



REST is a design pattern (for APIs) and describes how network resources are accessed.  

REST is not a standard nor a protocol.



By using a REST interface, different clients can hit the same REST endpoints, perform  CRUD actions via HTTP mehods.



This architecture pattern makes the interaction between a client and a server uniform with a well-defined API, so that different clients (OS and browsers can all work with the API in the same way). 





The name REpresentational State Transfer implies exchanging data. 

The server acts as a data store, and the client retrieves and stores data. 

The server transfers object states to the client. The client can update these states too.

Most REST APIs implement [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete): Create, Retrieve, Update, and Delete.

















| URL                 | HTTP verb | Request body | Action                     | Success Status Code |
| ------------------- | --------- | ------------ | -------------------------- | ------------------- |
| `/api/projects`     | `GET`     | (empty)      | Returns all projects       | 200 OK              |
| `/api/projects`     | `POST`    | JSON         | Creates a new project      | 201 Created         |
| `/api/projects/:i`  | `GET`     | (empty)      | Returns the single project | 200 OK              |
| `/api/projects/:i`  | `PUT`     | JSON         | Edits the projects         | 200 OK              |
| `/api/projects/:id` | `DELETE`  | (empty)      | Deletes the projects       | 204 No Content      |





**HTTP methods are what defines operations in well-formed REST APIs, not the URLs.   URLs should not contain verbs.**



**So when we want to retrieve, modify, or delete a record, we operate on its URL using the correct HTTP method.**



**Well-designed REST APIs must provide response status code that makes it clear there is a problem.**













## Build the API: The Project Management App

We will be building the backend for our **Project Management** app, and we will have all these previously listed routes plus some more, but let’s start from the beginning.





### Clone the starter repo and install the dependencies

### [Starter repo](https://github.com/ross-u/React-Code-Along---Project-Management-Server.git)





### Create the `.env` file and add the line:

###  `PORT=3000`





### Start the app,  `npm run dev` 





### Create model in file `models/ProjectModel.js`

##### `models/ProjectModel.js`

```js
// models/ProjectModel.js

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  description: String,
  tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  // owner will be added later on
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
```





<br>



### Create model in file `TaskModel.js`

##### `models/TaskModel.js`

```js
// models/TaskModel.js

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const taskSchema = new Schema({
  title: String,
  description: String,
  project: {type: Schema.Types.ObjectId, ref: 'Project'}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
```





<br>





#### In the `project-routes.js`: 

#### 	- import `express`, `mongoose`, and instantiate Router 

####     - import models `Project` and `Task`

####  	- create the route `POST` `/project`



##### `routes/project-routes.js`

```js
// routes/project-routes.js
const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Project = require('./../models/ProjectModel');
const Task = require('./../models/TaskModel');


// POST '/api/projects'
router.post('/projects', (req, res, next) => {
  const { title, description } = req.body;

  Project.create({ title, description, tasks: [] })
    .then((createdProject)=> {
      res
        .status(201)
        .json(createdProject);
      // `res.json` is similar to ->  `res.send( JSON.stringify(createdProject) )`
    })
    .catch((err)=> {
      res
        .status(500)  // Internal Server Error
        .json(err)
    })
})


module.exports = router;
```







#### Update `app.js`

```js
// app.js
...

//  const projectRouter = require('./routes/project-routes');
//	const taskRouter = require('./routes/task-routes');
...

// ROUTES MIDDLEWARE STARTS HERE:
app.use('/api', projectRouter);
//	app.use('/api', taskRouter);
```





#### Now use [Postman](https://www.getpostman.com/) to test this route out.

`POST` `http://localhost:3000/api/projects`

##### In Body send:

`title: "Learn React"`

`description: "Get react skills and build an awesome final project"`



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_eff309a90aaa86ba85f69cb5e8cc8076.jpeg)





<br>



#### Create `GET` route for the creation of projects



##### `routes/project-routes.js`

```js
// routes/project-routes.js

//...
//...


// GET '/api/projects'		 => to get all the projects
router.get('/projects', (req, res, next) => {
  
  Project
    .find()
    .populate('tasks')
    .then(allTheProjects => {
      res.json(allTheProjects);
    })
    .catch(err => {
      res.json(err);
    })
});

```





<br>





#### Create a `GET` route in Postman for :

`http://localhost:3000/api/projects`



#### Test the route with Postman





<br>



#### Create route `GET` `/projects/:id` for getting project by id



##### `routes/project-routes.js`

```js
//	routes/project-routes.js

//	...
//	...

// GET '/api/projects/:id'		 => to get a specific projects
router.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  if ( !mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400)  //  Bad Request
      .json({ message: 'Specified id is not valid'})
    return;
  }

  Project
    .findById( id )
    .populate('tasks')
    .then( (foundProject) => {
      res.status(200).json(foundProject);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
  });

```









<br>





### Create route `GET` `/projects/:id` to UPDATE project by id



##### `routes/project-routes.js`

```js
// routes/project-routes.js

//	...

//	...

// PUT '/api/projects/:id' 		=> to update a specific project
router.put('/projects/:id', (req, res, next)=>{
  const { id } = req.params;
  const { title, description } = req.body;
  
  if(!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndUpdate(id, { title, description })
    .then(() => {
      res.status(200).json({ message: `Project with ${req.params.id} is updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
});
```





<br>



### Test the route with Postman





<br>





#### Create a delete route `/projects/:id`

##### `routes/project-routes.js`

```js
// routes/project-routes.js

//	...

//	...


// DELETE '/api/projects/:id'   => to delete a specific project
router.delete('/projects/:id', (req, res)=>{
  const { id } = req.params;

  if ( !mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndRemove(id)
    .then(() => {
      res;
        .status(202)  //  Accepted
        .json({ message: `Project with ${id} was removed successfully.` });
    })
    .catch( err => {
      res.status(500).json(err);
    })
});

```







<br>



### Test the route with Postman





<br>









# Create task routes in

## `routes/task-routes.js`





```js
// routes/task-routes.js

const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Project = require('../models/ProjectModel');
const Task = require('../models/TaskModel');


module.exports = router;
```





<br>



### Import the router in `app.js` and set it in the middleware chain

##### `app.js`

```js
// app.js

const projectRouter = require('./routes/project-routes');
const taskRouter = require('./routes/task-routes');					// <-- UNCOMMENT


//	...

//	...

//	...


// ROUTES MIDDLEWARE:
app.use('/api', projectRouter);
app.use('/api', taskRouter);			// <-- UNCOMMENT & UPDATE

```







<br>



### Create  `POST` `/api/tasks`

##### `routes/task-routes.js`

```js
// routes/task-routes.js

// POST '/api/tasks'    => to create a new task
router.post('/tasks', (req, res)=>{
  const { title, description, projectID } = req.body;

  Task.create({
      title: title,
      description: description,  
      project: projectID
  })
    .then((newTaskDocument) => {

      Project.findByIdAndUpdate( projectID, { $push:{ tasks: newTaskDocument._id } })
        .then((theResponse) => {
          res.status(201).json(theResponse);
        })
        .catch(err => {
          res.status(500).json(err);
      })
  })
  .catch(err => {
    res.status(500).json(err);
  })
})
```



<br>





### Create `GET` `/projects/:projectId/tasks`

Get one task by it's id



##### `routes/task-routes.js`

```js
// routes/task-routes.js

// GET '/api/projects/:projectId/tasks/:taskId'   => to retrieve a specific task
router.get('/projects/:projectId/tasks/:taskId', (req, res) => {
  
  const { taskId } = req.params;
  
  Task.findById(taskId)
    .then((foundTask) =>{
        res.status(200).json(foundTask);
    })
    .catch( err =>{
        res.status(500).json(err);
    })
});

```









<br>







### Create `PUT` `/tasks/:id`

```js
// routes/task-routes.js

//	...

//	...


// PUT '/api/tasks/:id'    => to update a specific task
router.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  
  if ( !mongoose.Types.ObjectId.isValid(id) ) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Task.findByIdAndUpdate(id, { title, description })
    .then(() => {
      res
        .status(201)
        .json({ message: `Task with ${id} updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
});

```

###### 



<br>





#### Create `DELETE` `/tasks/:id`

```js
// routes/task-routes.js

//	...

//	...


// DELETE '/api/tasks/:id'     => to delete a specific task
router.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  if ( !mongoose.Types.ObjectId.isValid(id) ) {
    res
      .status(400)
      .json({ message: 'Specified id is not valid'});
    return;
  }

  Task.findByIdAndRemove(id)
    .then(() => {
      res
        .status(202)
        .json({ message: `Task with ${id} removed successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
});

```





<br>





## Enable CORS requests



By default, the browsers will block communication between apps from different origins (**IP + port**) for security reasons, so we need to configure our server in order to allow them.



Cross-Origin Resource Sharing ([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) is a mechanism that uses additional [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin.



### [5 min read - CORS](<https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>)





```bash
npm install cors --save
```





<br>



### Update `app.js`



```js
// app.js

//	...

const cors = require('cors');

//	...

// ADD CORS SETTINGS TO ALLOW CROSS-ORIGIN INTERACTION:
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'] // <== this will be the URL of our React app (it will be running on port 3000)
}));


// ROUTES MIDDLEWARE:
// ...

```







`credentials` will come to play when we introduce `users` and `origin` points to the **allowed url-s**,







### Update the `.env` file  to: `PORT=5000`

Our client side will be running on port 3000