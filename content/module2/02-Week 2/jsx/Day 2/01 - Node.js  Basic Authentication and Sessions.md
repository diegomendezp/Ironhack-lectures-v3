# Node.js | Basic Authentication & Sessions





<br>

#### Authorization is related to signing up and the overall process of allowing users to access certain resources.





#### When a user logs into our web app, authentication will allow us to know which user (of all users in our system) is visiting the page.







#### -  Authentication is related to authenticating the user during the current request, via login, sessions or tokens.







<br>





## Session

##### Because HTTP is stateless, in order to associate a request to any other request, you need a way to store user data between HTTP requests.



##### Sessions are an industry standard.



##### Session allows servers to store user-specific data during multiple request/response interactions between a client and server itself.





- We will use the [`express-session`](https://www.npmjs.com/package/express-session) package to generate sessions in Express. 

- We use it in combination with [`connect-mongo`](https://www.npmjs.com/package/connect-mongo) to store session data inside our Mongo database.





<br>





##### - When using the `express-session`  session data is by default stored in the memory if other 3rd party db is not specified otherwise (not persistent). 



##### - The best choice is a memory cache like Redis, for which you need to setup its own infrastructure.





<br>





## Cookies

Cookies are small files which are stored on a user’s computer. They are designed to hold a small amount of specific data from a website and can be accessed either by the web server or the client computer.



Cookies are a convenient way to carry information between sessions, without having to burden a server machine with massive amounts of data storage.



 **We can inspect cookies information with the [Chrome Dev Tools](https://developer.chrome.com/devtools)  in the `Application` tab:**





![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a395a41b136de0d919e1a2bb0109fc5b.png)







<br>





## Log in

##### Authentication is the process where users provide their credentials (username/email and password) and send them to the server.

##### The user is authenticated if the username and password are correct. 

##### Once the user has been authenticated, we have to create a session to keep the user logged in.  In this session we can store all the information we need.







#### Login diagram

### [OPEN IMAGE](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_5308102df9341ab5a67d20d61bc61b15.png)

![[img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_5308102df9341ab5a67d20d61bc61b15.png)](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_5308102df9341ab5a67d20d61bc61b15.png)





<br>







## Code Along 

### We will continue working on the code from the previous project





#### Fork the Previous repo -> [Node-Basic-Authorization](https://github.com/ross-u/m2-jsx-node-basic-authorization-example-done)



```bash
mkdir 01-node-complete-authentication

cd 01-node-complete-authentication

git clone https://github.com/ross-u/m2-jsx-node-basic-authorization-example-done .

rm -rf .git

code .
```



<br>



#### Install the dependencies

```bash
npm install
```



<br>



In the same directory install `express-session` and `connect-mongo`

```bash
npm install express-session connect-mongo
```





<br>



### Require the `express-session`  and `connect-mongo` packages (before the routes)



##### `app.js`

```js
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);

//	...
//	...

//	https://www.npmjs.com/package/express-session#secret

// SESSIONS MIDDLEWARE
app.use(session({
  secret: "basic-auth-secret",
  // cookie: { maxAge: 3600000 * 1 },	// 1 hour
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 60 * 60 * 24 * 7 // Time to live - 7 days (14 days - Default)
  })
}));

//	BEFORE THE ROUTES

// ROUTES
// ...

// ...
```



- **secret**: Used to sign the session ID (create a hash), that is assigned/retrieved  from/to the cookie (*required*)

- **cookie**: Object for the session ID cookie. In this case, we only set the `maxAge` attribute, which configures the expiration date of the cookie (in milliseconds).

- **store**: Sets the session store instance. In this case, we create a new instance of `connect-mongo`, so we can store the session information in our Mongo database.

  



<br>



#### Create a login form -  `views/Login.jsx`



##### `views/Login.jsx`

```jsx
const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout title="Login">

      <form id="form" action="/auth/login" method="POST">
        <label>Username</label>
        <br />
        <input type="text" name="username" placeholder="Your username" />

        <label>Password</label>
        <br />
        <input type="password" name="password" />

        <button type="submit">Login</button>
      </form>
      {
        props.errorMessage 
          ? <div className="error-message"> {props.errorMessage}</div>
          : null
      }

      <p className="account-message">
        Don't have an account? <a href="/auth/signup">Sign up</a>
      </p>
      
    </Layout>
  );
}

module.exports = Login;

```



<br>



#### Create a login route in the - `authRouter.js` 



##### `routes/authRouter.js`

```js
const express = require('express');
const authRouter = express.Router();
const User = require('./../models/User');

const bcrypt = require('bcrypt');


//		...

//		...


//		...



//  GET   '/auth/login'                              <--- ADD
authRouter.get('/login', (req, res, next) => {
  res.render("Login");
});



module.exports = authRouter;
```





<br>





<br>



#### Start the server

```bash
npm run start:dev
```



<br>



### Visit [`localhost:3000/login`](http://127.0.0.1:3000/login) to see the form





<br>





### Create the `/login` POST route to check the user credentials 



##### `routes/auth-router.js`

```js
// routes/auth-router.js

//	...
//		...


// POST  /auth/login'
authRouter.post("/login", (req, res, next) => {
  
  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if (theUsername === "" || thePassword === "") {
    res.render("auth-views/login-form", {errorMessage: 'Indicate username and password.'});
    return;
  }

  User.findOne({ "username": theUsername })
  .then(user => {
      if (!user) {
        res.render("auth-views/login-form", { errorMessage: 'The username doesn\'t exist.' });
        return;
      }
    
    	const passwordCorrect = bcrypt.compareSync(thePassword, user.password);
      
    	if (passwordCorrect) {  
        
        // Save the login in the session!
        // req.session is used to store values for our use
        req.session.currentUser = user;
        res.redirect("/");
      } 
    	else res.render("auth-views/login-form", { errorMessage: 'Incorrect password' });
  })
  .catch(error => next(error));
  
});

module.exports = authRouter;
```





<br>





### Update `Home.jsx`

```jsx
const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout title="Home Page">
      <div id="container">
        <a href="/auth/signup">
          <button>Sign up</button>
        </a>

        <a href="/auth/login">
          <button>Login</button>
        </a>
        
        <a href="/secret">
          <button>Protected page (requires authentication!)</button>
        </a>
      </div>
    </Layout>
  );
}

module.exports = Home;

```





<br>





### Create a view for the protected route `views/secret.hbs`



##### `views/Secret.jsx`

```html
<div id="container">
  <h1> <pre>/secret </pre> </h1>
  <h2>You are in a session!</h2>
</div>
```





## Authenticating with the session





##### We will use `session.currentUser`  to check if the user is logged in to access the other routes in the app.



We check the `session.currentUser` on each incoming request to see if the user who is making it is authenticated already.







### Create the route that checks authentication before allowing routing to the protected routes.







#### Create `routes/siteRoutes.js`  and the horizontal middleware checking if user is authenticated





##### `routes/siteRouter.js`

```js
// routes/siteRouter.js
const express = require("express");
const siteRouter = express.Router();

// Helper function
function isLoggedIn (req, res, next) {
  if (req.session.currentUser) {
    console.log('GOOD TO GO');
    next();
  } else {
    res.redirect('/auth/login');
  }
}


siteRouter.get("/secret", isLoggedIn, (req, res, next) => {
  res.render("Secret");
});



module.exports = siteRouter;

```

<br>





### Update `app.js` and the order of the routes



##### `app.js`

```js
//	...
const siteRouter = require('./routes/siteRouter');				//  <==   ADD


// Routes

app.use('/auth', authRouter);

app.get("/", (req, res, next) => {
  res.render("Home");
});

app.use('/', siteRouter);


// ...
```







<br>





<br>





## Logout



#### The logout is the process where the user “closes” the connection between them and the web app.



####  It’s the opposite of the login.



#### Sessions package has a `destroy` method which, when executed, will remove the user’s session.



#### Calling `req.session.destroy()` will cause the session to be deleted from the MongoDB session storage.





##### `routes/authRouter.js`

```js
const express = require('express');
const authRouter = express.Router();


//	...

//	...

// GET      auth/logout
authRouter.get('/logout', (req, res, next) => {
  req.session.destroy( (err) => {
    // can't access session here
    res.redirect("/auth/login");
  });
});


module.exports = authRouter;
```







<br>





### Add logout button to `views/Home.jsx`



##### `views/Home.jsx`

```html
<a href="/auth/logout">
	<button>Logout</button>
</a>
```











<br>



```
// Sessions can be stored server-side (ex: user auth) or client-side
// (ex: shopping cart). 
// express-session saves sessions in a store, and NOT in a cookie
// To store sessions in a cookie, use cookie-session.
```

```
// With `express-session` the default in-memory store is not production-ready because it leaks
// memory and doesn't scale beyond once process. For production, we need
// a session store, like Redis, which we can wire up with connect-redis.
```











### Session cookie will exist until the expires or maxAge in the browser or until the server destroys the `req.session` by doing `req.session.destroy()`.







### Once the server is restarted, the DB collection holding the session still exists, as we are storing it in our MongoDB via the `connect-mongo` package.



[express   cookie-session](<https://expressjs.com/en/resources/middleware/cookie-session.html>)



## Important

Cookies are sent by the browser in every request as long as the URL requested is within the same domain and path defined in the cookie (and all of the other restrictions -- secure, httponly, not expired, etc) hold, then the cookie will be sent for every request.







# Cookies - Simple Explanation by analogy

Imagine you are in a bank, trying to get some money out of your account. But it's dark; the bank is pitch black: there's no light and you can't see your hand in front of your face. You are surrounded by another 20 people. They all look the same. And everybody has the same voice. And everyone is a potential bad guy. 

In other words, HTTP is stateless.



This bank is a funny type of bank - for the sake of argument here's how things work:

1. you wait in line (or on-line) and you talk to the teller: you make a request to withdraw money, and then
2. you have to wait briefly on the sofa, and 20 minutes later
3. you have to go and actually collect your money from the teller.



### But how will the teller tell you apart from everyone else?



The teller can't see or readily recognise you, remember, because the lights are all out. What if your teller gives your $10,000 withdrawal to someone else - the wrong person?! It's absolutely vital that the teller can recognise you as the one who made the withdrawal, so that you can get the money (or resource) that you asked for.



**Solution:**

When you first appear to the teller, he or she tells you something in secret:

> "When ever you are talking to me," says the teller, "you should first identify yourlself as GNASHEU329 - that way I know it's you".

Nobody else knows the secret passcode.

