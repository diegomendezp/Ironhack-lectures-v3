# Passport | Sign Up, Login, Logout

[Passport](http://passportjs.org/) is a  modular authentication middleware for Node.js.

Why should we use Passport? Passport also gives us a set of support strategies that for authentication using Facebook, Twitter, and more.





### Create a project using express generator

```bash
express --hbs passport-setup
cd passport-setup

npm install
npm install --save bcrypt

```





## We will create users with username and password, and authentication functionality using passport.







### Create model `models/user.js`



**models/user.js**

```js
// models/user.js
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```





## Routes File



#### In this exercise we will define routes in the `routes/auth-routes.js`





### Create `POST` and `GET`  `/signup` routes

**routes/auth-routes.js**

```js
// routes/auth-routes.js
const express = require('express');
const router = express.Router();

// User model
const User = require('./../models/user');

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const saltRounds = 10;

// GET  '/signup'
router.get('/signup', (req, res, next) => res.render('auth/signup'));


// POST  '/signup'
router.post('/signup', (req, res, next) => {
  const { username, password } = req.body;

  // Check if `username` and `password` are empty and display error message
  if (username === '' || password === '') {
    res.render('auth/signup', { message: 'Indicate username and password' });
    return;
  }
  
// Query the users collection and to check username and password 
  User.findOne({ username })
  .then((user) => {
    
   // > if `username` already exists in the DB, display error message
    if (user !== null) {
      res.render('auth/signup', { message: 'The username already exists' });
      return;
    }

    // > If `username` doesn't exist generate salts and hash the password 
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // > After hashing the password, create new user in DB and redirect to home 
    User.create({ username, password: hashedPassword})
    	.then(() => res.redirect('/'))
      .catch((err) => res.render('auth/signup',{ errorMessage:'Error while creating new user'}));
    
  })
  .catch(error => next(error));	// catch errors from User.findOne
});

module.exports = router;
```







### Create a signup form	-	`views/auth/signup.hbs`



**views/auth/signup.hbs**

```js
<!-- views/auth/signup.hbs -->
<h2>Signup</h2>

<form action="/signup" method="POST" id="form-container">
  <label for="username">Username</label>
  <input id="username" type="text" name="username" placeholder="JonSnow">
    
  <br><br>
    
  <label for="password">Password</label>
  <input id="password" type="password" name="password" placeholder="Your password">

  {{#if message}}
    <div class="error-message">{{ message }}</div>
  {{/if}}
  <br><br>

  <button>Create account</button>

  <p class="account-message">
    Do you already have an account?
    <a href="/login">Login</a>
  </p>
</form>
```







### Connect the routes file



**app.js**

```js
const router = require('./routes/index');


// Router
app.use('/', router);
```



**routes/index.js**

```js
var express = require('express');
var router = express.Router();
var authRouter = require('./auth-routes');

// *  '/auth'
router.use('/', authRouter);


/* GET home page. */
router.get('/', (req, res, next) => res.render('index', { title: 'Express'));

module.exports = router;
```









### Create a mongoose connection



**app.js**

```js
/*	app.js	*/
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/basic-auth', { useNewUrlParser: true })
  .then(() => console.log('Connected to Mongo!'))
  .catch(err => console.error('Error connecting to mongo', err));

```





### Update - `views/index.hbs`

```html
<h1>{{title}}</h1>
<p>Welcome to {{title}}</p>

<a href="/signup">
  <button>Sign Up</button>
</a>

<a href="/login">
  <button>Login</button>
</a>

<a href="/logout">
  <button>Logout</button>
</a>
```









### Create few users  -  `localhost:3000/signup`









## Login



### Lets import and configure passport and implement a passport local strategy

#### **Passport strategy defines how we will authenticate the user**.



There are 300+ strategies available through Passport. In this case, we will use [username and password](http://passportjs.org/docs/username-password) and a package called `passport-local`



#### Install `passport` `passport-local` and other dependencies



```bash
npm install --save  passport  passport-local  express-session  connect-ensure-login  connect-flash
```





#### Require all the modules in the `app.js`

```js
const User = require('./models/user');

// Session and Passport modules
const bcrypt = require("bcrypt");
const passport = require("./passport-setup");	// `passport` module is required and setup in here
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");in here and
```







### Configure our session saving on the server and initialize `passport`



**app.js**

```js
// app.js

app.use(session({
  secret: 'secret-key-here',
  resave: true,
  saveUninitialized: true
}));

// PASSPORT LINES MUST BE BELOW `session` IN THIS ORDER

// Create a (Passport) local strategy:
// Sets how is the user being authenticated by Passport during login
passport.use(new LocalStrategy(
  ( username, password, done) => {

    //  done() supplies the next in line passport middleware with "error message" or "user object"
    //  done() parameters ->  done(errorMessage, userObject, Additionalinfo)
    	// `Additionalinfo` is an optional argument 

    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false, { message: "Incorrect username" });

      const passwordCorrect = bcrypt.compareSync(password, user.password);
      if (!passwordCorrect) return done(null, false, { message: "Incorrect password" });
      return done(null, user);
    });
  }));


// Creates Passport's methods and properties on `req` for use in out routes
app.use(passport.initialize());

// Sets Passport to manage user session
app.use(passport.session());

// allow our routes to use FLASH feedback messages before redirects
app.use(flash());

// Router
app.use('/', router);
```







### Create the `passport-setup.js` file



**passport-setup.js**

```js
// Passport Setup - `passport` module is required and setup in here

const passport = require("passport");
const User = require('./models/user');


// serializeUser: defines what data to save in the session
// (this happens when you log in successfully)
passport.serializeUser((userDoc, done) => {
  // userDoc is the result of our log in function
  // call done() to give Passport the result

  // null as the first argument means NO ERRORS OCCURRED
  // user's ID as the second argument is the RESULT we send to Passport middleware
  done(null, userDoc._id);
});

// deserializeUser: defines how to retrieve the user information from the DB
// (happens automatically on EVERY request once you are LOGGED-IN)
passport.deserializeUser((userId, done) => {
  // userId is the result of serializeUser
  // call done() to give Passport the result

  User.findById(userId)
    .then((userDoc) => {
      // null as the first argument means NO ERRORS OCCURRED
      // DB document as the second argument is the RESULT we send Passport
      done(null, userDoc);
    })
    // err as the first argument means we tell Passport there was an error
    .catch((err) => done(err));
});

// We export the set passport module
module.exports = passport;
```







#### `passport-setup.js` without comments



**passport-setup.js**

```js
// Passport Setup - `passport` module is required and setup in here

const passport = require("passport");
const User = require('./models/user');


passport.serializeUser((userDoc, done) => {
  done(null, userDoc._id);
});

passport.deserializeUser((userId, done) => {

  User.findById(userId)
    .then((userDoc) =>  done(null, userDoc))
    .catch((err) => done(err));
});

module.exports = passport;
```







### Require `passport` in `auth-routes` and create route that handles authentication



**/routes/auth-routes.js**

```js
...
const passport = require("passport");


// GET  '/login'		-->  renders login page
router.get("/login", (req, res, next) => {
  res.render(
    "auth/login", 
    {"message": req.flash('error') }	// set flash() to send 'error' message 
  );
});


// POST  '/login'	-->	forwards req.body to the `passport.autehticate` using "local strategy" to login the user, authenticate the session and return a cookie
router.post("/login", passport.authenticate("local", {
  // depending on result we set routes to be used
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,	//	allows use of `flash` messages in our application
  passReqToCallback: true
}));

```





### Code above handles the authentication upon login - 5 lines of code   :)











### Create a login page	-	`views/auth/login/hbs`



**views/auth/login/hbs**

```html
<!--	views/auth/login/hbs	-->
<form action="/login" method="POST">
  <div>
    <label for="username">Username:</label>
    <input type="text" name="username">
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" name="password">
  </div>
  <div>
    <input type="submit" value="Log In">
  </div>
</form>
```







### Create a protected route to test the authentication



#### Checking if the user is authenticated for a protected route can be done with `connect-ensure-login` module



**/routes/auth-routes.js**

```js
...

// /routes/auth-routes.js
const ensureLogin = require("connect-ensure-login");

...
...


// GET  '/private-page'
router.get('/private-page', ensureLogin.ensureLoggedIn() , (req, res, next) => {
  res.render('private');
});
```









### Create a view `views/private-page`



**/views/private-page.hbs**

```html
<!--	/views/private-page.hbs	-->
<h1>Private page</h1>

<a href="/">
  <button>Home</button>
</a>

<a href="/logout">
  <button>Logout</button>
</a>
```





### Update `index.hbs` - add private-page <button>

```html
...

<a href="/private-page">
  <button width="200px" style="background-color: black; color: white; font-weight: 800">Private-page</button>
</a>
```









### Error control



#### Error controll and displaying of the messages is done by the connect-flash module. 

#### If this module is not present, entering wrong login data would throw error and stop the server.





#### Passport requires us to include the options object and pass `req` as first parameter in Local strategy if using `flash()`  middleware.





### Update `app.js`

**app.js**

```js
passport.use(new LocalStrategy(
  { passReqToCallback: true },
  (req, username, password, done) => {
```









### Update `/views/auth/login.hbs` to show message

OVERWRITE OLD CODE



**/views/auth/login.hbs**

```html
<form action="/login" method="POST">
  <div>
    <label for="username">Username:</label>
    <input type="text" name="username">
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" name="password">
  </div>
  {{#if message}}
    <div class="error-message">{{ message }}</div>
  {{/if}}
  <div>
    <input type="submit" value="Log In">
  </div>
</form>
```









## Logout

Passport exposes a `logout()` function on `req` object that can be called from any route handler which needs to terminate a login session







### Create a `/logout`  route



**/routes/auth-routes.js**

```js
// GET  '/logout'
router.get("/logout", (req, res) => {
  /* Passport exposes a logout() function on req object that 
  can be called from any route handler which needs to terminate a login session. */
  req.logout();
  res.redirect("/login");
});
```







### [Local strategy example on Github](<https://github.com/passport/express-4.x-local-example>)  (Old)











## Discussion :



- How can we additionaly structure our `app.js` to make it cleaner and for example place the code of `Local Strategy` setup into a separate file.







#### Answer:    create a module/ file put the code in there



### Create `passport-strategy-setup.js`

```js
//	passport-strategy-setup.js

const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const User = require('./models/user');

const passportStrategySetup = new LocalStrategy(
  { passReqToCallback: true },
  (req, username, password, done) => {

    //  done() supplies the next in line passport middleware with error message or user object
    //  parameters ->  done(error, user, info)
    // `info` is an optional argument containing additional user information.

    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false, { message: "Incorrect username" });

      const passwordCorrect = bcrypt.compareSync(password, user.password);

      if (!passwordCorrect) return done(null, false, { message: "Incorrect password" });

      return done(null, user);
    });
  })

  module.exports = passportStrategySetup;
```







#### Import it in `app.js`  and set it as a middleware

```js
const passportStrategySetup = require('./passport-local-strategy');

app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));

// PASSPORT LINES MUST BE BELOW SESSION

//	Auth Setup - how is the user being authenticated during login
passport.use(passportStrategySetup);

// Creates Passport's methods and properties on `req` for use in out routes
app.use(passport.initialize());

// Sets Passport to manage user session
app.use(passport.session());
```

