# React authentication front-end - code along





### Clone the starter repo

```bash
git clone https://github.com/ross-u/React-Auth-Client-Code-Along---Starter-Code-.git

cd React-Auth-Client-Code-Along---Starter-Code-

npm i

code .
```





<br>





#### Run the app and review  the basic functionality of the app





<br>





####	Using React Context API we will create provider and consumer





<br>



#### Create `AuthProvider` component which will be holding the state with information:

-  `isLoggedin` boolean - showing if user is logged in or not
- `user` object with user data  coming from DB
- `isLoading` flag
- functions that will be available on `props` to Consumer components. 



<br>



#### Create `lib/AuthProvider.js`

```jsx
//	lib/AuthProvider.js

import React from "react";
import auth from "./auth-service";				// IMPORT functions for axios requests to API
const { Consumer, Provider } = React.createContext();

// HOC to create Consumer
const withAuth = (WrappedComponent) => {};

// Provider
class AuthProvider extends React.Component {
  state = { isLoggedin: false, user: null, isLoading: true };
	
	componentDidMount() {
    auth.me()
    .then((user) => this.setState({ isLoggedin: true, user: user, isLoading: false }))
    .catch((err) => this.setState({ isLoggedin: false, user: null, isLoading: false }));
  }

  signup = (user) => {};

  login = (user) => {};
	
	logout = () => {};
	
  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const { login, logout, signup } = this;
    
    return (
      isLoading ? 
      <div>Loading</div> 
      :
      (<Provider value={{ isLoggedin, user, login, logout, signup}} >
         {this.props.children}
      </Provider>)
    )	/*<Provider> "value={}" data will be available to all <Consumer> components */
  }
}

export { Consumer, withAuth };		//  <--	REMEMBER TO E X P O R T  ! ! !

export default AuthProvider;			//	  <--		REMEMBER TO E X P O R T  ! ! !
```









#### Finalize `signup()` , `login()` and `logout()` methods in `AuthProvider.js`



```jsx
//	lib/AuthProvider.js

// Provider
class AuthProvider extends React.Component {
//  	...
//    		...
//    				....
    
  signup = (user) => {
    const { username, password } = user;
    
    auth.signup({ username, password })
      .then((user) => this.setState({ isLoggedin: true, user}) )
      .catch( (err) => console.log(err));
//TODO - Remove from notes  .catch(({response}) => this.setState({ message: response.data.statusMessage})); TODO - Remove from the notes
  };


  login = (user) => {
    const { username, password } = user;

    auth.login({ username, password })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch((err) => console.log(err));
  };


  logout = () => {
    auth.logout()
      .then(() => this.setState({ isLoggedin: false, user: null }))
      .catch((err) => console.log(err));
  };

//				...
//		...
  
```





<br>





### `Context.Provider`

#### Value that is placed in the `<Provider  value={/* some value */}/>` will be available to all `<Consumer>` components







### Import `AuthProvider` in `App.js` and wrap all the component (in order to share the context)



```jsx
//	src/App.js

//	...

import AuthProvider from "./lib/AuthProvider";

//	...
//			...

class App extends Component {
  render() {
    return (
      <AuthProvider>        {/*       <---  Wrap components with AuthProvider       */}
       
        <div className="container">
          <Navbar />
          <h1>Basic React Authentication</h1>

          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/private" component={Private} />
          </Switch>
        </div>
        
      </AuthProvider>       //       <---  Wrap components with AuthProvider 
      );
  }
}
```



<br>





#### Using HOC create a `withAuth` HOC

#### `withAuth` HOC  returns a component wrapped in the `<Consumer>` component



<br>



#### See first  https://reactjs.org/docs/context.html#contextconsumer





```jsx
//	lib/AuthProvider.js

const withAuth = (WrappedComponent) => {

  return class extends React.Component {
    render() {
      
      return (
        <Consumer>
{/* <Consumer> component provides callback which receives Providers "value" object */}  
        { 
          ({login, signup, user, logout, isLoggedin}) => {
          return (
            <WrappedComponent 
              login={login} 
              signup={signup} 
              user={user}
              logout={logout}
              isLoggedin={isLoggedin}
              {...this.props} />
          );
        }}
        </Consumer>
      );
    }
  };
};
```



<br>



#### Now we need to edit all the components that need to use functions from the Provider, and make them consumers, so that they have access to it







<br>



#### Update `pages/Signup.js` - to wrap the component and make it a consumer

`pages/Signup.js`

```jsx
//	pages/Signup.js

//	...

import { withAuth } from "../lib/AuthProvider";				//			<-- UPDATE HERE

//	...
//			...


  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    //  console.log('Signup -> form submit', { username, password });
  
    this.props.signup({ username, password });			//			<-- UPDATE HERE
  };

//			...
//  ...


export default withAuth(Signup);			//			<-- UPDATE HERE
```







<br>





#### Update `pages/Login.js` - to wrap the component and make it a consumer

`pages/Login.js`

```jsx
//	pages/Login.js

//	...

import { withAuth } from "../lib/AuthProvider";				//			<-- UPDATE HERE

//	...
//			...
//					...

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    //  console.log('Signup -> form submit', { username, password });		
  
    this.props.login({ username, password });			//			<-- UPDATE HERE
  };

//			...
//  ...


export default withAuth(Login);				//			<-- UPDATE HERE
```





<br>





#### Update `pages/Private.js` - to wrap the component and make it a consumer

`pages/Prvate.js`

```jsx
//	pages/Private.js

import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";			//			<-- UPDATE HERE

class Private extends Component {
  render() {
    return (
      <div>
        <h1>Private Route</h1>
        <h1>Welcome {this.props.user.username}</h1>	  {/* 			<-- UPDATE HERE	      */}
      </div>
    );
  }
}

export default withAuth(Private);				//			<-- UPDATE HERE

```



<br>





#### Update `components/Navbar.js`

```jsx
//	components/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";					//			<-- UPDATE HERE

class Navbar extends Component {
  render() {

    const { user, logout, isLoggedIn } = this.props;		//			<-- UPDATE HERE
    
    return (
      <nav className="navbar">
        <Link to={'/'} id='home-btn'> Home </Link>
        
        {
          isLoggedIn ? 		  		{/* 			<-- UPDATE HERE	      */}
          (<>
            <p>username: {user.username}</p>				{/* 	<-- UPDATE HERE     */}
            <button onClick={logout}>Logout</button>		{/* 	<-- UPDATE HERE     */}
          </>) 
         : 
          (<>
            <Link to="/login"> <button>Login</button> </Link>
            <br/>
            <Link to="/signup"> <button>Signup</button> </Link>
          </>)
        }
      </nav>
    );
  }
}

export default withAuth(Navbar);				//			<-- UPDATE HERE
```





#### We can now `signup` with a new user, and we will see that Navbar changes

#### We can also `logout`.





 <br>



#### We still need to create proper routing:

	- When user is logged in, we need to forward him to private page, the`Private` component


​	
	- When user is not logged in and tries to access `/private` page we need to route him 
	  to  `Login` component




* When user is not logged and tries to access either `Signup` or `Login` component, we need to allow him to go to either one.



<br>





### Create `components/AnonRoute.js`

```jsx
//	components/AnonRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function AnonRoute({ component: Component, isLoggedin, ...rest }) {
 return (
  <Route
    {...rest}
    render={(props) => !isLoggedin ? <Component {...props} /> : <Redirect to="/private"/>}
  />
  );
}

export default withAuth(AnonRoute);
```



<br>



#### Update `App.js`



<br>



```jsx
//	src/App.js

//	...
//			...

import AnonRoute from "./components/AnonRoute";


//	...
//			...
//					...

   	<h1>Basic React Authentication</h1>

    <Switch>
      <AnonRoute path="/signup" component={Signup} />{/* UPDATE <Route> to <AnonRoute> */}
      <AnonRoute path="/login" component={Login} />	{/* UPDATE <Route> to <AnonRoute> */}
      <Route path="/private" component={Private} />
    </Switch>
```





<br>





### Create `components/PrivateRoute.js`

```jsx
//	components/PrivateRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function PrivateRoute({ component: Component, isLoggedin, ...rest }) {
  return (
   <Route
    {...rest}
    render={ (props)  => isLoggedin ? <Component {...props} /> : <Redirect to="/login" />}
   />
  );
}

export default withAuth(PrivateRoute);

```



<br>



#### Update `App.js`



<br>



```jsx
//	src/App.js

//	...
//			...

import PrivateRoute from "./components/PrivateRoute";


//	...
//			...
//					...

   	<h1>Basic React Authentication</h1>

    <Switch>
      <AnonRoute path="/signup" component={Signup} />
      <AnonRoute path="/login" component={Login} />	
      <PrivateRoute path="/private" component={Private} />{/* <Route> to <PrivateRoute>*/}
    </Switch>
```







#### Applause you made your first React authentication 👏 👏 👏 👏 👏 





### [Code Example Repo - Done](<https://github.com/ross-u/React-Auth-Client-Code-Along---Code-Example->)

