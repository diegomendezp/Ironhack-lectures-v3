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

-  `isLoggedIn` boolean - showing if user is logged in or not
- `user` object with user data  coming from DB
- functions that will be available on `props` to Consumer components. 



<br>



#### Create `context/auth-context.js`

```jsx
//	context/auth-context.js

import React from "react";
import authService from "./auth-service"; // IMPORT functions for axios requests to API
const { Consumer, Provider } = React.createContext();



// HOC to create a Consumer
const withAuth = (WrappedComponent) => {};



// Provider
class AuthProvider extends React.Component {
  state = { 
    isLoggedIn: false,
    isLoading: true,
    user: null,
  };

	
	componentDidMount() {
    authService.me()
     .then((user) => this.setState({ isLoggedIn: true, user: user, isLoading: false }))
     .catch((err) => this.setState({ isLoggedIn: false, user: null, isLoading: false }));
  }


  signup = (username, password) => {};

  login = (username, password) => {};
	
	logout = () => {};

	
  render() {
    const { isLoading, isLoggedIn, user } = this.state;
    const { login, logout, signup } = this;
    
    return (
      (<Provider value={{ isLoading, isLoggedIn, user, login, logout, signup}} >
         {this.props.children}
      </Provider>)
    )	
    /*
      <Provider> `value={}`` data will be available to all <Consumer> components 
    */
  }
}




export { withAuth, AuthProvider };		//  <--	REMEMBER TO E X P O R T  ! ! !
//      Consumer ,  Provider




export default AuthProvider;	//	  <--		WE COULD ALSO SET A DEFAULT EXPORT
```





<br>



#### Finalize `signup()` , `login()` and `logout()` methods in `auth-context.js`



##### `context/auth-context.js`

```jsx
//	context/auth-context.js

// Provider
class AuthProvider extends React.Component {
//  	...
//    		...
//    				....
    
  
  
  
  signup = (username, password) => {
    
    authService.signup(username, password)
      .then((user) => this.setState({ isLoggedIn: true, user}) )
      .catch( (err) => console.log(err));
  };





  login = (username, password) => {

    authService.login(username, password)
      .then((user) => this.setState({ isLoggedIn: true, user }))
      .catch((err) => console.log(err));
  };





  logout = () => {
    authService.logout()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
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

import { AuthProvider } from "./context/auth-context";

//	...
//			...

class App extends Component {
  render() {
    return (
      <AuthProvider>      {/*     <---  Wrap components with AuthProvider   */}
       
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



##### `context/auth-context.js`

```jsx
//	context/auth-context.js


//	...


//	...


const withAuth = (WrappedComponent) => {

  return class extends React.Component {
    render() {
      
      return (
        <Consumer>
{/* <Consumer> component provides callback which receives Providers "value" object */}  
        { 
          ({ user, isLoggedIn, login, signup, logout}) => {
          return (
            <WrappedComponent 
              user={user} 
              isLoggedIn={isLoggedIn}
              login={login} 
              signup={signup} 
              logout={logout}
              {...this.props} />
          );
        }}
        </Consumer>
      );
    }
  };
};






//	...

//	...
```



<br>



#### Now we need to edit all the components that need to use functions from the Provider, and make them consumers, so that they have access to it







<br>



#### Update `pages/Signup.js` - to wrap the component and make it a consumer

##### `pages/Signup.js`

```jsx
//	pages/Signup.js

//	...

import { withAuth } from "./../context/auth-context.js";				//			<-- UPDATE HERE

//	...
//			...


  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    //  console.log('Signup -> form submit', { username, password });
  
    this.props.signup( username, password );			       //			<-- UPDATE HERE
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

import { withAuth } from "../context/auth-context.js";				//			<-- UPDATE HERE

//	...
//			...
//					...

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    //  console.log('Signup -> form submit', { username, password });		
  
    this.props.login( username, password );			           //			<-- UPDATE HERE
  };

//			...
//  ...


export default withAuth(Login);				//			<-- UPDATE HERE
```





<br>





#### Update `pages/Private.js` - to wrap the component and make it a consumer

##### `pages/Private.js`

```jsx
//	pages/Private.js

import React, { Component } from "react";
import { withAuth } from "../context/auth-context.js";			//			<-- UPDATE HERE

class Private extends Component {
  render() {
    return (
      <div>
        <h1>Private Route</h1>
        <h1>Welcome {this.props.user && this.props.user.username}</h1>	{/*	<-- UPDATE */}
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
import { withAuth } from "../context/auth-context.js";					//			<-- UPDATE HERE

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



#### We still need to create the proper react component routing:

	- When user is logged in, we need to forward him to private page, the`Private` component

​	

- **When** user is **not logged** in **forbid access to the `/private` page**, **and** instead **re-route**/show **to** the user  the  **`Login`** page/component.




* **When** user is **not logged** and tries to access either `Signup` or `Login` component, we need to **allow** user **to see** **Signup** and **Login** pages/components.



<br>





### Create `components/AnonRoute.js`



#### Simplified

```jsx
//	components/AnonRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../context/auth-context.js";

function AnonRoute(routeProps) {
  // values coming from  <AnonRoute path="" exact component={}>
  const PageComponent = routeProps.component;
  const { path, exact } = routeProps;

  // values coming through `withAuth` from `AuthProvider`
  const isLoggedIn = routeProps.isLoggedIn;
  const isLoading = routeProps.isLoading;

  // If AuthProvider is still making request to get user data ( me() )
  if (isLoading) return <p>Loading...</p>
  
  return (

    <Route
      path={path}
      exact={exact}

      render={ 
        function (props) {
          if (isLoggedIn) return <Redirect to="/private" />
          else if (! isLoggedIn ) return <PageComponent {...props} />;
        }
      }
      />
  );
}

export default withAuth(AnonRoute);
```



<br>



#### Succinct

```jsx
//	components/AnonRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../context/auth-context.js";

function AnonRoute({ component: PageComponent, isLoggedIn, isLoading ...rest }) {
 if (isLoading) return <p>Loading</p>
 
 return (
  <Route
    {...rest}
    render={
       (props) => !isLoggedIn ? <PageComponent {...props} /> : <Redirect to="/private"/>
     }
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
import { withAuth } from "../context/auth-context.js";

function PrivateRoute(routeProps) {
  // values coming from  <AnonRoute path="" exact component={}>
  const PageComponent = routeProps.component;
  const { path, exact } = routeProps;

  // values coming through `withAuth` from `AuthProvider`
  const isLoggedIn = routeProps.isLoggedIn;
  const isLoading = routeProps.isLoading;

  // If AuthProvider is still making request to get user data ( me() )
  if (isLoading) return <p>Loading...</p>
  
  return (

    <Route
      path={path}
      exact={exact}

      render={ 
        function (props) {
          if (isLoggedIn) return <PageComponent {...props} />
          else if (! isLoggedIn ) return <Redirect to="/login" />;
        }
      }
      />
  );
}

export default withAuth(PrivateRoute);
```





<br>



```jsx
//	components/PrivateRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../context/auth-context.js";

function PrivateRoute({ component: Component, isLoggedIn, isLoading ...rest }) {
  if (isLoading) return <p>Loading</p>

  return (
   <Route
    {...rest}
    render={ (props)  => isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />}
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





### [Code Example Repo - Done](https://github.com/ross-u/react-auth-frontend-boilerplate-v2)

