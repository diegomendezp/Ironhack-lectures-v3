# React | Lifecycle methods



## Lifecycle Methods



As your application runs, React is constantly creating and deleting components in memory.



Each `class` component goes through different phases in its **lifecycle**: 

These **3** phases are:     

	-	**I** - **Mounting** ( component creation )
	-	**II** - **Updating**
	-	**III** - **Unmounting** (when component is finally destroyed).





Lifecycle methods are special methods available in `class` components,  automatically called by React when our component is **Mounting** or **Updating** or **Unmounting**. 



We place our code in the lifecycle methods in order to run it in a certain phase.



## [React Lifecycle Methods Diagram](<http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>)

- [ ] 









### In Short



Lifecycle methods are special methods that are called automatically by React in different stages. 



 These methods exist only in (**stateful components**)  **class components**.



They are also called **lifecycle hooks.** (Different than the new **[React Hooks API](<https://www.fullstackreact.com/articles/an-introduction-to-hooks-in-react/>)**)



- [ ] 









## Phases brake down and explanation 



### I - Mounting or First Render



These methods are called in the following order when an instance of a component is created and inserted into the DOM:



1. **`constructor()`**
2. **`render()`**
3. **`componentDidMount()`**





#### `constructor` - [Example - gist](<https://gist.github.com/ross-u/ce9f84d3f6e2f5b16e52dfb378cf84e0>) 



```jsx
class MyComponent extends React.Component {
	constructor(props) {
    super(props);
    this.state = { date: props.date };
  };
  
// custom methods and lifecycle methods go after the `constructor`- e.g. `render()``
}
```



- We use it when we want to pass `props` to the class component.
- By default it must contain `super` keyword, that receives `props` as argument from `constructor`
- If we are setting the `state` in `constructor` we have to use `this` keyword
- We can use it to `bind()` value of  `this` to the methods
- **If we don’t initialize `state` from props and we don’t bind methods, we don’t need to implement a constructor for our React component.**

- [ ] 









#### `render()` - [Example - gist](<https://gist.github.com/ross-u/820a3fa9f7099c47e0d6f390f86c6f60>) 



```jsx
...

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: props.date };
  };
	
  /* ▩ custom methods and lifecycle methods go after the `constructor` ▩*/
  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date}.</h2>
      </div>
    );
  }       // ⮕ After`render` is done  the React component “mounts” onto the DOM.
}
```



- The `render()` method is next in line lifecycle method called right after the `constructor` 
- `render()` is the only <u>required method</u> in a `class` component
- The `render()` function should be pure, meaning that it does not modify component's `state`.
- This method structures and prepares the JSX, and returns React elements.
- After the `render` is done  the React component “mounts” onto the DOM.



- [ ] 









#### `componentDidMount()` - [Example - gist](<https://gist.github.com/ross-u/4edd1ccc2edf70919df3400fac831dc6>) 

```jsx
...

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: props.date };
  };
  
	// custom methods and lifecycle methods go after the `constructor`
  
  componentDidMount() {
	/* our code to run after `render()` is finished 
		and component is mounted onto the DOM */
  }
  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date}.</h2>
      </div>
    );
  }       // ⮕ After`render` is done  the React component “mounts” onto the DOM.
}
```



- `componentDidMount()` is called immediately after component `render()` , after the component is mounted (inserted into the DOM).
- Since the `render()` method is already executed, **DOM will be already present**. Which means that we can reference DOM and our component inside `componentDidMount()`.
- We **shouldn't call `setState()`** here since this will lead to re-rendering of the component (causes performance issues).



- [ ] 













## II - Updating





An update can be caused by **changes of the `props` or `state`**. 

Update phase is initiated my  passing new `props`, `setState()` or `forceUpdate()`.



***Mounting*** phase happens just **once**.

 ***Updating*** phase happens **every** time there is a **change of the `state` or the `props`.**









##### These methods are called in the following order when a component is updated:

- **`render()`** - Invoked by **default** each time an update happens (new `props`, `setState` or `forceUpdate`) 

  

- **`componentDidUpdate()`** 



- [ ] 















#### `componentDidUpdate()` - [Example - gist](<https://gist.github.com/ross-u/6d5c2ca9fa75f5815b547baee440f84c>) 

```jsx
...

class Clock extends React.Component {
  constructor(props) {		// m1
    super(props);
    this.state = { date: props.date };
  };
  
  componentDidMount() {		//	m3
	/* our code to run after `render()` is finished 
		and component is mounted onto the DOM */
  }
  
  componentDidUpdate(prevProps, prevState) {	//	u2
  /* our code to run after update happens via  
		passing new `props`, `setState` or `forceUpdate` */
  }
  
  
  render() {	// m2	 u1
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date}.</h2>
      </div>
    );
  }
}
```



- `componentDidUpdate()` is invoked only during the ***updating*** phase, immediately after the re`render()` is finished. 
- We ***shouldn’t update the state*** in `componentDidUpdate()`. <u>This can cause infinite loop</u> if the proper condition is not set, and it causes an extra re-rendering (affects component performance).
- `componentDidUpdate()` gives us access to the `props` and `state` from when before the update was made( `componentDidUpdate(prevProps, prevState)` ). 
- In `componentDidUpdate()`ee can do a comparison of  `prevProps` and `prevState`  versus current`this.props` and `this.state`.to see what exactly changed (if anything) and then react accordingly.



**Example**

```jsx

// Check if new new props are passed, and if yes post data via HTTP request

componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.postData(this.props.userID);
  }
}
```

- [ ] 







## III - Unmounting



`componentWillUnmount()` is invoked immediately before a component is unmounted and destroyed (removed from the DOM). 



Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests,  like for example stopping `setInterval()` timers before the component gets destroyed and prevent memory leaking .



You **should not call setState()** in `componentWillUnmount()` because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.



### [Gist example - `componentWillUnmount()`](<https://gist.github.com/ross-u/38fa3558155234faf453e6730755759a>)









### Exercise - Follow and understand 

### [Lifecycle methods Exercise](<https://gist.github.com/ross-u/dade01d6a7e03f2aa064383d6515567a>)









### Additional Rarely Used Lifecycle Methods



The first diagram shows **the most used lifecycle methods** but besides these you should now that there are the other ones, maybe not as often used, but important ones. 



Let’s check the **extended diagram** below:



#### [DIAGRAM - check the box "Show less common lifecycles"](<http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>)





Let's update each lifecycle phase including these methods:



 

## I - Mounting:

1. **constructor()**
2. *~~componentWillMount()~~ => <span style="color: purple">**getDerivedStateFromProps()**</span>
3. **render()**
4. **componentDidMount()**





#### `UNSAFE_componentWillMount()` 

`componentWillMount()` -   is considered **UNSAFE** method. You will notice the `UNSAFE` prefix added to it.



#### `getDerivedStateFromProps()`

`getDerivedStateFromProps()` - the next method to be executed  after the `constructor()` 

it replaces the `UNSAFE_componentWillMount`)



#####  [`UNSAFE_componentWillMount()`](<https://reactjs.org/docs/react-component.html#unsafe_componentwillmount>)





## II - Updating:

1. <span style="color: purple"> **getDerivedStateFromProps()**</span>
2. <span style="color: purple">**shouldComponentUpdate()**</span>
3. **render()**
4. <span style="color: purple">**getSnapshotBeforeUpdate()**</span>
5. **componentDidUpdate()**





### `shouldComponentUpdate()` -

**[`shouldComponentUpdate()`](<https://reactjs.org/docs/react-component.html#shouldcomponentupdate>)**- is the only lifecycle method that **returns `true` or `false`**

**If it returns `false`, the `render()` method gets canceled**. 

Here you can implement some logic to stop a re-render if it’s not necessary so your app will do less work.



### `getSnapshotBeforeUpdate()`

**`getSnapshotBeforeUpdate()`** is invoked right before the most recently rendered output is committed to the DOM. 

Any value returned by **`getSnapshotBeforeUpdate()`** is passed as a parameter to **`componentDidUpdate()`**.







## [COMPLETE LECTURE NOTES AND EXAMPLES](<https://gist.github.com/ross-u/4c6ca7e15eb713cb158bfaee88ace8eb>)







### Reference

[State and Lifecycle - React Docs](<https://reactjs.org/docs/state-and-lifecycle.html>)

[`constructor()`](<https://reactjs.org/docs/react-component.html#constructor>)

[`render()`](<https://reactjs.org/docs/react-component.html#render>)

[`componentDidMount()`](<https://reactjs.org/docs/react-component.html#componentdidmount>)



[`setState()`](<https://reactjs.org/docs/react-component.html#setstate>)

[`forceUpdate()`](<https://reactjs.org/docs/react-component.html#forceupdate>)

[`componentDidUpdate()`](<https://reactjs.org/docs/react-component.html#componentdidupdate>)



[componentWillUnmount()](<https://reactjs.org/docs/react-component.html#componentwillunmount>)



### Extra Resorurces

[React - rfcs docs](https://github.com/reactjs/rfcs/blob/master/text/0006-static-lifecycle-methods.md)

[These are the concepts you should know in React.js (after you learn the basics)](https://medium.freecodecamp.org/these-are-the-concepts-you-should-know-in-react-js-after-you-learn-the-basics-ee1d2f4b8030)

[Understanding React v16.4+ New Component Lifecycle Methods](https://blog.bitsrc.io/understanding-react-v16-4-new-component-lifecycle-methods-fa7b224efd7d)