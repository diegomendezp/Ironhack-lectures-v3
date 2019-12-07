

# React | Intro to Routing





Using React we create Single Page Apps.



Routing from page to page in SPAs works different than in usual multi file web page apps.



React has its own way of dealing with this, and that is accomplished by using `React Router`library.



React router library comprises of three packages: `react-router`, `react-router-dom`, and `react-router-native`.



We are either installing `react-router-dom` for web apps or `react-router-native` for React Native mobile app development.



`react-router` is the core package and gets included automatically when installing either `react-router-dom` or `react-router-native`. 





#### Router implementation

- **`<BrowserRouter>`** - Uses the HTML5 History API*,
- **`<HashRouter>`** - Uses the hash portion of the URL. (Only for older browsers that don’t support the HTML5 History API, so let’s focus on the `<BrowserRouter>`)





#### History API

The History API is an object that lets us manage the current and previos `location` via `history.location` .

The current location is the last item set in `history` through methods such as `history.push()` or `history.replace()`





















### Demo



### Let's implement React Router in our example app.



### [**React Routing - (Starter Repo) **](<https://github.com/ross-u/React-routing-Starter-repo->)



```bash
git clone https://github.com/ross-u/React-routing-Starter-repo-.git

cd React-routing-Starter-repo-

npm i

code .
```





#### Install `react-router-dom` package

```bash
npm i react-router-dom --save
```





#### Our app is up and running, but there is only one page, and navbar has no functionality.









#### - Import the `<Router>` component which is a Routing "root", 

#### - and import `<Route>` component for creating routes. 



##### `src/App.js`

```jsx
//	/src/App.js

// ...

import { BrowserRouter as Router, Route } from 'react-router-dom';

// <Router>  (BrowserRouter) is a React router root component 
// <Route>   is used to specify which component will be rendered for each `path` 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
```





<br>



#### Let's import our first component `<Dashboard>` and set a route for it



##### `src/App.js`

```jsx
//	/src/App.js

//	...

import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Route path="/" component={Dashboard} exact/>
      </Router>
    </div>
  );
}

export default App;
```









<bt>





#### Let's create additional routes for components:

####  - `<About>`

#### -  `<Contact>`

#### -  and `<Error>`



##### `src/App.js`

```jsx
//	/src/App.js

//	...

import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Route path="/" component={Dashboard} exact/>
        
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route component={Error}/>
      </Router>
    </div>
  );
}

export default App;

```

















### Let's visit URL's by writing in the broswer address bar:

### <http://localhost:3000/about>

### <http://localhost:3000/contact>





#### <span style="color: red">We have a bug.  `Error` component page is showing all the times, for very route.</span>



#### This is because *React Router* requires one more component - `<Switch>`













<br>











#### `<Switch>` is a wrapper for all `<Routes>` and ensures that each route shows exclusively (one component and route is rendered)



### Add `<Switch>` to wrap all `<Route>` components



**src/App.js**

```jsx
//	/src/App.js

// ...
import { 
  BrowserRouter as Router,
  Route, 
  Switch												//  <--  ADD Switch
} from 'react-router-dom';


//	...
//	...
//	...

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={Error} />
        </Switch>
        
      </Router>
    </div>
  );
}
```



















### What happens if we remove `exact` from the main route with the slash `/` only ?



#### <span style="color: red">Every route is rendered as a home route , because it starts with `/`</span>



##### `src/App.js`

```jsx
//	/src/App.js

// ...


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Switch>
          <Route path="/" component={Dashboard}/>		{/* REMOVE exact*/}
```







<br>







## We now have all of the routes setup !



#### We can now create clickable links.





<br>



#### Edit the `Navbar.js` and import `<Link>` from *React Router*



##### `src/components/Navbar.js`

```jsx
//	/src/component/Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';	

// <Link> - Creates a link with href which when clicked changesthe
// browser's URL and calls the provided route (without reloading the app).

class Navbar extends Component {
  state = {
    username: 'YOUR NAME'
  } 

  render() {
    return (
      <nav id='navbar'>
        <ul>
          <Link to="/"> Dashboard </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/about"> About </Link>
        </ul>

        <div className="nav-details">
          <p className="nav-username">{this.state.username}</p>
        </div>
      </nav>
    )
  }
}

export default Navbar;
```



#### Our `<Navbar />` is now fully functional !!!

















### Last thing we will do is move our root `<Router>` component one level up to `index.js`.





#### Move `<Router>` from `App.js` to `index.js`



##### `src/App.js`

```jsx
//	/src/App.js

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={Error} />
        </Switch>
      {/* </Router> */}
    </div>
```





<br>



#### Import the router in `index.js`



##### `src/index.js`

```jsx
//	/src/index.js

//	...

import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));

//	...

```



















## Difference between `<NavLink>` and `<Link>`



#### `<NavLink>` provides one additional functionality. 

#### `<NavLink>` that can style itself as “active” when its to prop matches the current location. 





##### `src/componenst/Navbar.js`

```jsx
//	src/componenst/Navbar.js

//	...
import { Link, NavLink } from 'react-router-dom';

//	...

  render() {
    return (
      <nav id='navbar'>
        <ul>
          {/* <Link to="/"> Dashboard </Link> */}
          {/* <Link to="/contact"> Contact </Link> */}
          {/* <Link to="/about"> About </Link> */}

          <NavLink to="/" exact activeClassName="selected-link"> Dashboard </NavLink>
          <NavLink to="/contact" activeClassName="selected-link"> Contact </NavLink>
          <NavLink to="/about" activeClassName="selected-link"> About </NavLink>
        </ul>
```





#### Add `css`  style

##### `src/App.css`

```css
.selected-link {
  background: rebeccapurple;
}
```













## `<Redirect>`

#### Rendering a `<Redirect>` will navigate to a new location. 

#### The new location will override the current location in the history stack.





### Let's edit our `<Dashboard>` component



##### `src/components/DashboardWRedirect.js`

```jsx
//	src/components/DashboardWRedirect.js

import React, { Component } from 'react'
import { Route, Redirect } from 'react-router';


class DashboardWRedirect extends Component {
  state = { loggedIn: true };		// Create a state for Login status
  

	//	Helper method which returns either Dashboard elements or <Redirect>
  checkIfLogged = () => {
    if (this.state.loggedIn) {
      return(
        <div>
          <h1>Dashboard With redirect</h1>
          <img src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif" alt="dashboard-gif"/>
        </div>)
        
    } else { 
      return <Redirect to="/error" /> 
    };
  }
  

  render() {
    return (<Route exact path="/" render={this.checkIfLogged}/>)
  }
}

export default DashboardWRedirect;
```







### Add `<DashboardWRedirect>` to the routes



##### `src/App.js`

```jsx
//	/src/App.js

//	...
//	...

import DashboardWRedirect from './components/DashboardWRedirect';


import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar />
        <Switch>
          {/* <Route path="/" component={Dashboard} exact/> */}
          <Route path="/" component={DashboardWRedirect} exact/>
```





### Change the `loggedIn` value in the `state`



##### `src/components/DashboardWRedirect`

```jsx
//	components/DashboardWRedirect

...

class DashboardWRedirect extends Component {
  state = { loggedIn: false };
```















# [**React Routing - Repo (Done)**](<https://github.com/ross-u/React-Routing-Done->)









## Extra Resources



#### [React Router Tutorial Video - 20min](<https://www.youtube.com/watch?v=91F8reC8kvo>)

#### [React Router - `<Link>` vs `<NavLink>` - Video](<https://www.youtube.com/watch?v=UjAmXiNE68E>)

#### [React Router Training](<https://reacttraining.com/react-router/web/api>)