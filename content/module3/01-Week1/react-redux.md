# React

## Install

The easiest way to create a react application is using the `create-react-app` package. Install it globally in your machine running

```sh
$ npm i -g create-react-app
```

Create your new application running 

```sh
$ create-react-app myNewApp
```

This will create the folder, the app and will install all needed dependencies. This newly created project is totally unopinionated. It just sets up react under the webpack config umbrella.

It creates an `index.js` file, where your app is bootstrapped using ReactDOM. 

```js
ReactDOM.render(<App />, document.getElementById('root'))
// render the App component inside the element
// in the DOM with id='root'
```

`App` is the only component the wizard creates for you, is your entry point. Remove the existing template and start working with it, adding and using new components in it.

## A new component

You can crete now a new component: 

```js
// MyComponent.js
import React from 'react';

class MyComponent extends React.Component {
  
  render () {
    return (
    	<div>MyComponent Works</div>
    )
  }
}

// We export it.
export default MyComponent;
```

`render()` is the only mandatory method on a React component, it should exist and it should return a valid JSX element (including `null`).

Once created, you can use this component. Go to `App.js` (the `App` component), import the new file and use the component as a JSX tag in the template:

```js
// index.js
import React from 'react';
import MyComponent from './MyComponent'

class App extends React.Component {
  
  render () {
    return (
    	<div>
    		<MyComponent />
    		<MyComponent /> 
    		{/*We can use it as many times as we want*/}
    	</div>
    )
  }
}
```

## Passing props from the parent

When you want to send data from the parent to the child component, you have to do it using the **props**. The props object is created by React automatically using the attributes passed to the JSX tag.

```js
// App.js
…
	render() {
      return <MyComponent pizza="Pepperoni" ingredients=['Mozzarella', 'Pepperoni'] />
	}
…
```

Then you can access to it in the component in `this.props`:

```js
// MyComponent.js
	render() {
	  console.log(this.props)
	  // {
      //   pizza: "Pepperoni",
      //   ingredients: ["Mozzarella", "Pepperoni"]
	  // }
      return …
	}
```

## Communicating from the child to the parent component

You can communicate from the child to the parent with Events. In React, they're as simple as passing a function as a prop to the child and, eventually, calling that function on the child.


```js
// App.js
…
	parentFunction () {
      …
	}
	
	render() {
      return <MyComponent onSomethingHappened={this.parentFunction} />
	}
…
```

```js
// MyComponent.js
	render() {
	  return <button onClick={this.props.onSomethingHappened}>click</button>
	}
```

> ⚠️ You're passing a function that will live in another object and called from the `this.props`. This will make the context of the executed function to be `this.props`. To avoid this you have to use arrow functions. Some create it in the render: `onClick={() => {…}}`, but then you'll be creating a function on every render. The best approach is to bind it on the original context class constructor:
> `constructor() { this.parentFunction = this.parentFunction.bind(this) }`
> But even better is to take advantadge of ES7's property initializers and define the parent function like:
> `parentFunction = () => { … }`
> [More info](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding)

## The local state

Every React component has its local state. The local state is an object like props, but in this case is created in the constructor and is handled by the component. It's a private data object.

```js
constructor() {
  this.state = {
    myProperty: 42
  }
}
```

We can access to it through `this.state` and we can set any property we want in it.

In the other hand, we cannot set data into it directly. We have to use a `React.Component` function called `setState`:

```js
this.setState({
  myProperty: 60
})
```

This function will merge (like `Object.assign`) the object passed as the argument to the existing state.

## React Component Lifecyle

The react component also has a lifecycle, you can get reference in [here](https://facebook.github.io/react/docs/react-component.html).

The most important are:

- `constructor(props)`:  Called when instantiated and before its mounted.
- `componentDidMount()`: Called just after the component has been mounted.
- `componentDidUpdate(prevProps, prevState)`: Called after the component re-render.
- `render()`: Called when React needs the component to be rendered, this means when **either the props or the sate change**. This function should only work with the state and the props to return a JSX element.`

# REDUX

Redux is a state managment library. The main goal is to manage an app-wide state in a single object and in a centralized way. It's based in three principles:

1. **Single Source of truth** – The **state** of your whole application is stored in an object tree within a single **store**.
2. **State is read-only** – The only way to change the state is to emit an **action**, an object describing what happened.
3. **Changes are made with pure functions** – To specify how the state tree is transformed by actions, you write pure **reducers**.

![inline](https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966)

## Actions

Actions are objects with a type and a payload, that describe what happened.

```js
{
  type: 'ADD_TODO',
  text: 'Learn Redux'
}
```

## Reducers

Reducers are pure functions that receiva the current state and an action, and return the new state, describing how the state should change according to every action.

```js
function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
  }
}
```

## Integration with React

To implement it with redux, follow this three steps: 

1. Figure out what **actions** and **reducers** it should have and implement them
2. Connect the app to a store with **createStore** and **Provider**

```js
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './reducers' 

let store = createStore(reducer)

ReactDom.render(
  <Provider store={store}>
  	<App/>
  </Provider>
)
```



3. Connect all **container components**. Call **connect**, providing **mapStateToProps** – a function that cherry picks the contents in the state you're interested in accessing to in that component and passes them as props to the connected component – and **mapDispatchToProps** – doing the same but providing functions as props that have the ability to dispatch actions into the store.

```jsx
class MyContainterComponent extends React.Component {
    render() {
        return (
        	<div>
				<span>My user: {this.props.user.username}</span>
                <TodosList todos={this.props.todos} onTodoClick={this.props.onToggleTodo}>
                </TodosList>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  user: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  onToggleTodo: (id) => {
      dispatch(toggleTodo(id))
    }
})

import connect from 'react-redux'
export default connect(mapStateToProps, mapDispatchToProps)(MyContainerComponent)
```



