# React | Lifting State Up



## Introduction

We’ve learnt how to **pass data from a parent component to a child component using props**. 



We’ve also learnt how to **change the data within the same component using state**. 



**To summarize**: 

*state belongs to the component itself and props are used to pass data to child components*



<br>





## Lifting State Up



Often, several components need to reflect the same changing data.  

Moving the values from one component to its parent in order for the common ancestor component being able to access that value,  is called **lifting the state up** . 



<br>



### [STARTER REPO](<https://github.com/ross-u/React---Lifting-State-Starter-Repo-.git>)



```bash
git clone https://github.com/ross-u/React---Lifting-State-Starter-Repo-.git

cd React---Lifting-State-Starter-Repo-

npm i

code .
```



<br>



### Open the project with the  dev server

```bash
npm start
```



<br>







In our current example each `<Task>` card component is a `class` component and has a `state` that holds `taskCompleted` value.



#### [OPEN IMAGE](https://i.imgur.com/yYWXobZ.png)

![img](https://i.imgur.com/yYWXobZ.png)



We want to have display in `<Summary>` component how many tasks is completed and to update that number whenever we click green button in any`<Task>` component.



In order to do that we have to lift the `state` to the closest common ancestor, so that both components can share access to the same value, as they both depend on it for this functionality.







<br>



#### ??? Remove state object from the `<Task>` component



**First we will remove `state` from `<Task>` component** and instead create a new property in the `state` of  `<ToDoList>` which is the most common ancestor of `<Task>` and `<Summary>`.

 **This is lifting of the `state` to the closest common ancestor.**





##### `components/Task.js`

```js
//		/components/Task.js

	import React from 'react';

	class Task extends React.Component {
//   state = {
//     taskCompleted: false
//   }
  
//			 ⇡  	⇡ 						
// Delete `state` from `Task.js`
```



<br>



#### Create new property in `ToDoList` state



##### `components/ToDoList.js`

```js
//		/components/ToDoList.js

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: data,
      tasksCompleted: 0			//			⟻  create new property
    };
```





After lifting the state to `ToDoList` we can now create all the methods needed for functionality and pass props that we want to use in `<Task>` and `<Summary>` 





#### Create methods to update the `tasksCompleted`



##### `components/TodoList.js`

```js
//		/components/ToDoList.js

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: data,
      tasksCompleted: 0
    };
    
    this.deleteTaskById = this.deleteTaskById.bind(this);   
    
    this.toggleTaskDone = this.toggleTaskDone.bind(this);
    
//			↥	  `bind` new method toggleTaskDone   ↥
  };
  
  
//	⤥	  create method to update number of tasksCompleted   ⤦
  toggleTaskDone(id) {
    const tasksCopy = [...this.state.tasks];
    let tasksCompleted = this.state.tasksCompleted;

//	 Find the selected (clicked) task.
//	 Update (toggle) that task's `isDone` property,
//	 Then update `tasksCompleted` value in the shared `state`
    tasksCopy.forEach((oneTask) => {
      
      if (oneTask.id === id) {
        oneTask.isDone = oneTask.isDone ? false : true;
        if (oneTask.isDone) tasksCompleted++;
        else if (!oneTask.isDone) tasksCompleted--;        
      }
      
    });
    
    this.setState( {tasks: tasksCopy, tasksCompleted } );
  }
```





<br>



#### Pass method `toggleTaskDone` to the `<Task>` and tie it to the button



##### `components/ToDoList.js`

```jsx
//		/components/ToDoList.js


render() {
//	...
//			...
  
  			this.state.tasks.map( (task) => {
            return <Task 
                     key={task.id} 
                     {...task}
                     deleteTask={ this.deleteTaskById }
                     updateTaskStatus={ this.toggleTaskDone } />
// 										 	 ⤤ 		  PASS METHOD AS PROP 		⤣
//			...
//  ...
```





<br>



#### 1. Update `Task.js` and remove method `toggleTask` .

#### 2. Replace `this.state.taskCompleted` with `this.props.isDone`





##### `components/Task.js`

```jsx
//		/components/Task.js


render() {
  return (
    <div className='task-card'>
      <div className='task-card-half'>
        <h1>{this.props.name}</h1>
        {
     	{/* this.state.taskCompleted ? 	 	 ⟻	REMOVE   */}
          this.props.isDone ?			 {/* 	 ⟻	REPLACE WITH  */}
            <h3 style={{color: 'green'}}>DONE ✅</h3>
            :
            <h3 style={{color: 'red'}}>PENDING</h3>
        }
      </div>
      
      ...
      
      ...
      
  <button className='add' 
    onClick={()=> this.props.updateTaskStatus(this.props.id) }>
{/*				    ⤤ 		  PASS METHOD AS PROP 		⤣								*/}
    {
        this.props.isDone ?			// 	 ⟻	UPDATE HERE
        <span>UNDO ❌</span>
        :
        <span>✅</span>
      }
      </button>
```





<br>



#### Pass the data from the shared `state` of `ToDoList` to `<Summary>`



##### `components/ToDoList.js`

```jsx
// src/components/ToDoList.js

// ...

  render() {
    return (
      <div>
        
        <Summary tasksCompleted={this.state.tasksCompleted}/>
        {/*		⤤   PASS "TASKS COMPLETED" AS A PROP 		⤣			*/}
```









#### Update `Summary.js` to show the data passed through `props`



**components/Summary.js**

```jsx
import React from 'react'

function summary(props) {

  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{props.tasksCompleted}</p>
{/*						  			  								⤤  	  HERE    	⤣	     */}
    </div>
  )
}

export default summary;

```









#### Update `deleteTaskById` in `ToDoList.js`



##### `components/ToDoList.js`

```jsx
//		components/ToDoList.js

deleteTaskById (id)  {
  const taskListCopy = [...this.state.tasks];
  let tasksCompleted = this.state.tasksCompleted;

  taskListCopy.forEach((taskObj, index) => {
    if(taskObj.id === id) {
      taskListCopy.splice(index, 1);
      if (tasksCompleted > 0) tasksCompleted--;	// 	⟻	UPDATE
    }
  })
  this.setState( {tasks: taskListCopy, tasksCompleted} );
};
```







### [Code Example - Done](<https://github.com/ross-u/React---Lifting-State-Done->)