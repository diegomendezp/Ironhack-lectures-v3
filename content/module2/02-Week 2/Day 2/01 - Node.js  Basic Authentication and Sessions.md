# Node.js | Basic Authentication & Sessions

## Learning Goals

After this lesson, you will be able to:

- Understand what authentication is, and how it’s related to authorization
- Understand what sessions and cookies are
- Understand how authentication, sessions and cookies are all related
- Implement authentication in your web application





#### When a user logs into our web app, authentication allows us to know which user (of all users in our system) is visiting the page. 

#### - Authorization is related to signing up.

#### -  Authentication is related to logging in.





## Session

##### Because HTTP is stateless, in order to associate a request to any other request, you need a way to store user data between HTTP requests

##### HTTP sessions is an industry standard feature.

##### Session allows servers to store user-specific data during multiple request/response interactions between a client and server itself.





In the Node.js ecosystem, we can use the [`express-session`](https://www.npmjs.com/package/express-session) package to generate sessions in Express. We will use it in combination with [`connect-mongo`](https://www.npmjs.com/package/connect-mongo) to store session data inside our database.





##### When using the `express-session`  session data is by default stored in the memory if other 3rd party db is not specified otherwise. 

##### The best choice is a memory cache like Redis, for which you need to setup its own infrastructure.



## Cookies

Cookies are small files which are stored on a user’s computer. They are designed to hold a small amount of specific data from a website and can be accessed either by the web server or the client computer.



Cookies are a convenient way to carry information between sessions, without having to burden a server machine with massive amounts of data storage.



 We can inspect cookies information with the [Chrome Dev Tools](https://developer.chrome.com/devtools)  in the `Application` tab:





![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a395a41b136de0d919e1a2bb0109fc5b.png)





## Log in

##### Authentication is the process where users provide their credentials (username/email and password) and send them to the server.

##### The user is authenticated if the username and password are correct. 

##### Once the user has been authenticated, we have to create a session to keep the user logged in.  In this session we can store all the information we need.







#### Login diagram

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_5308102df9341ab5a67d20d61bc61b15.png)









## Code Along 

### We will continue working on the code from the previous project





#### Fork and Clone the Previous repo -> [Node-Basic-Authorization](<https://github.com/ross-u/Node---Basic-Authorization---Code-Along-Done>)





In the same directory install `express-session` and `connect-mongo`

```bash
npm install --save express-session connect-mongo
```





### Require the `express-session`  and `connect-mongo` packages (before the routes)



**app.js**

```js
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);

...
...

// Session middleware
app.use(session({
  secret: "basic-auth-secret",
  cookie: { maxAge: 3600000 * 1 },	// 1 hour
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // Time to live - 1 day
  })
}));
```



- **secret**: Used to sign the session ID cookie (*required*)

- **cookie**: Object for the session ID cookie. In this case, we only set the `maxAge` attribute, which configures the expiration date of the cookie (in milliseconds).

- **store**: Sets the session store instance. In this case, we create a new instance of `connect-mongo`, so we can store the session information in our Mongo database.

  - When the session cookie has an expiration date, `connect-mongo` will use it.

    Otherwise, it will create a new one, using `ttl` option.







### Create a login form -  `views/auth/login.hbs`

```html
<form action="/login" method="POST" id="form">
  <h2>Login</h2>

  <label for="username">Username</label>
  <input type="text" name="username">

  <label for="password">Password</label>
  <input type="password" name="password">

  {{#if errorMessage }}
    <div class="error-message">{{ errorMessage }}</div>
  {{/if}}

  <button type="submit">Login</button>

  <p class="account-message">
    Don't have an account? <a href="/signup">Sign up</a>
  </p>
</form>
```





### Create a login route - `routes/login.js` and connect it



**routes/login.js**

```js
const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const bcrypt = require('bcrypt');

//  GET   '/login'
router.get('/', (req, res, next) => {
  res.render("auth/login");
});
```





### Update `routes/index.js` and include `loginRouter` 

**routes/index.js**

```js
...
...
const loginRouter = require('./login');

// * '/login' 
router.use('/login', loginRouter);
```





### Visit `localhost:3000/login` to see the form













### Create the `/login` POST route to check the user credentials 



**routes/login.js**

```js
...
	...


//  POST   '/login'
router.post("/", (req, res, next) => {
  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if (theUsername === "" || thePassword === "") {
    res.render("auth/login", {errorMessage: 'Indicate username and password.'});
    return;
  }

  User.findOne({ "username": theUsername })
  .then(user => {
      if (!user) {
        res.render("auth/login", { errorMessage: 'The username doesn\'t exist.' });
        return;
      }
    
    	const passwordCorrect = bcrypt.compareSync(thePassword, user.password);
      
    	if (passwordCorrect) {  
        
        // Save the login in the session!
        // req.session is used to store values for our use
        req.session.currentUser = user;
        res.redirect("/");
      } 
    	else res.render("auth/login", { errorMessage: 'Incorrect password' });
  })
  .catch(error => next(error));
  
});

module.exports = router;
```







##### We will use `session.currentUser`  to check if the user is logged in to access the other routes in the app.









### Update `index.hbs`

```html
<h1>Home</h1>
<p>Welcome</p>

<div id="container">
  <a href="/signup">
    <button>Sign up</button>
  </a>

  <a href="/login">
    <button>Login</button>
  </a>
  
  <a href="/secret">
    <button>Protected page (requires authentication!)</button>
  </a>
</div>

```









### Now we need to create the route that checks authentication before allowing pass to protected routes.







### Create `routes/site-routes.js` , and use it to check if user is authenticated



**routes/site-routes.js**

```js
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  } 																			|
  else {                          	//    |
  	res.redirect("/login");       	//    |
  }                                 //    |
}); // ------------------------------------                                
//     | 
//     V
router.get("/secret", (req, res, next) => {
  res.render("secret");
});

module.exports = router;router.get("/", (req, res, next) => {
  res.render("home");
});

```





### Update `app.js` and the order of the routes



**app.js**

```js
...
const siteRoutes = require('./routes/site-routes');


// Routes
app.use('/', router);
app.use('/', siteRoutes);	// This route verifies the user session

```







### Create a view for the protected route `views/secret.hbs`



**views/secret.hbs**

```html
<div id="container">
  <h2>You are in a session!</h2>
</div>
```









## Logout



#### The logout is the process where the user “closes” the connection between them and the web app. It’s the opposite of the login.

#### Sessions package has a `destroy` method which, when executed, will close the user’s session. 



**routes/logout.js**

```js
const express = require('express');
const router = express.Router();


//  GET '/logout'
router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    // can't access session here
    res.redirect("/login");
  });
});


module.exports = router;
```





#### Update `routes/index.js`



**routes/index.js**

```js
...
const logoutRouter = require('./logout');

...
// * '/logout' 
router.use('/logout', logoutRouter);
```







### Add logout button to `views/index.hbs`



**views/index.hbs**

```html
<a href="/logout">
	<button>Logout</button>
</a>
```







```
// Sessions can be stored server-side (ex: user auth) or client-side
// (ex: shopping cart). express-session saves sessions in a store, and
// NOT in a cookie. To store sessions in a cookie, use cookie-session.
```

```
// The default in-memory store is not production-ready because it leaks
// memory and doesn't scale beyond once process. For production, we need
// a session store, like Redis, which we can wire up with connect-redis.
```

```
sessions are stored in server DB, and are cleared out when the server restarts.
```





### Session cookie will exist until the expires or maxAge in the browser or until the server destroys the `req.session`.

### Once the server is restarted, the DB holding the session id's is cleared and trying to authenticate will cause server to destroy `req.session` as it won't recognize it anymore.



##### For storing the cookies beyond the duration of the session and beyond server restarting we have the alternative middleware we can use.



[express   cookie-session](<https://expressjs.com/en/resources/middleware/cookie-session.html>)



## Important

Cookies are sent by the browser in every request as long as the URL requested is within the same domain and path defined in the cookie (and all of the other restrictions -- secure, httponly, not expired, etc) hold, then the cookie will be sent for every request.







# Cookies - Simple Explanation by analogy

Imagine you are in a bank, trying to get some money out of your account. But it's dark; the bank is pitch black: there's no light and you can't see your hand in front of your face. You are surrounded by another 20 people. They all look the same. And everybody has the same voice. And everyone is a potential bad guy. In other words, HTTP is stateless.

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