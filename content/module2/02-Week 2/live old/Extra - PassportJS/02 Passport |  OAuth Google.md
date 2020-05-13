# Passport | OAuth Google 



![](https://cdn.glitch.com/team-avatar/28/small?34)



```bash
npm i mongoose express-session passport  passport-google-oauth20
```



### Setup the `app.js`



**app.js**

```js
//...
const mongoose = require('mongoose');
const config = require('./config/config');

// Passport and sessions
const session = require("express-session");
const passport = require('passport');
// initiates the file and sets the options for authentication
const passportSetup = require('./config/passport-setup');

const app = express();

mongoose
  .connect(`mongodb://localhost/${config.DB_NAME}`, { useNewUrlParser: true })
  .then(() => console.log('Connected to Mongo!'))
  .catch(err => console.error('Error connecting to mongo', err));

// Config and setsession cookies middleware
app.use(session({
  secret: config.COOKIE_KEY,
  resave: false,
  saveUninitialized: false
}));


// Routes
app.get('/', (req, res) => {
    res.render('home');
});



// error middleware ...
//	...
```







### Create file `routes/auth-routes.js`



**/routes/auth-routes.js**

```js
const express = require('express');
const router = express.Router();

// GET '/login'
router.get('/login', (req, res, next) => {
  res.render('auth/login');
});


// GET '/logout'
router.get('/logout', (req, res, next) => {
  // handle with passport
  res.send('GET /logout');
});

// GET '/google'
router.get('/google', (req, res, next) => {
  // handle with passport
  res.send('GET /google')
});

module.exports = router;

```







### Update `app.js` - require `authRoutes` and set it



**app.js**

```js
const authRoutes = require('./routes/auth-routes');

// Routes
app.use('/', authRoutes);

app.get('/', (req, res, next) => {
  res.render('index', { title: 'Passport.js - OAuth with Google'})
})
```





### Create a login page	-	`views/auth/login/hbs`



**views/auth/login/hbs**

```html
<!--	views/auth/login/hbs	-->
<h1>Login</h1>

<ul>
  <li>
    <button><a href="/">Home</a></button>
  </li>
  <li>
    <button><a href="/logout">Logout</a></button>
  </li>
</ul>

<a href="/google">
  <button type="button">Google Login</button>
</a>

```







### Comment passport files require in `app.js`, and run the app



#### Check `localhost:3000/login`









### Create User model - `/models/user.js`



**/models/user.js**

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String,
    picture: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
```





### Create `/config/passport-setup.js`



**/config/passport-setup.js**

```js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('./config');
const User = require('../models/user');

passport.use(
    new GoogleStrategy({
        // Authentication options for Google Strategy
        clientID: '',
        clientSecret: '',
        callbackURL: '/google/redirect'
    }, 
    () => {}  // passport callback function
    
));

```





**clientID:**

762064633227-4kp9d2hk610l23qerb57g2dgk4ref00l.apps.googleusercontent.com



**clientSecret:**

EbyJEcKgdU0xdX_v_d0ZO36U



**callbackURL:**

/success/redirect







## 1. Sign up for Google APIs

## 2. Create new project

## 3. Install Google + API -> Enable

## 4. Click on -> Create Credentials

## 5. Set credentials for project : API : Google+ API	and  Calling from: Web server(e.g node.js, Tomcat) 	and Acessing :  USer Data



![1556669759093](/home/ross-u/.config/Typora/typora-user-images/1556669759093.png)

![1556669858522](/home/ross-u/.config/Typora/typora-user-images/1556669858522.png)

![1556669971503](/home/ross-u/.config/Typora/typora-user-images/1556669971503.png)







### When updated

**/config/passport-setup.js**

```js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('./config');
const User = require('../models/user-model');

passport.use(
    new GoogleStrategy({
        // Authentication options for Google Strategy
        clientID: '762064633227-4kp9d2hk610l23qerb57g2dgk4ref00l.apps.googleusercontent.com',
        clientSecret: 'EbyJEcKgdU0xdX_v_d0ZO36U',
        callbackURL: '/success/redirect'
    }, 
    () => {}  // passport callback function
    
));

```









### Edit the `/google` route in `auth-routes.js`



```js   
// GET '/google'
router.get('/google', passport.authenticate('google', { scope: ['profile'] } ));
// Redirects user to the consent screen
// in `scope` we set which informations we want to access from users Google account
```







### visit `localhost:3000/login` and click on Google Login











## Add a route for Goolge API to call on successful permition grant



**routes/auth-routes.js**

```js
// Successful Google redirect with code upon user granting permition
// GET  '/success/redirect'
router.get('/success/redirect', (req, res, next) => {
  res.send('GOOGLE API IS CALLING THIS ROUTE AFTER USER GRANTS PERMITION')
});
```







## visit `localhost:3000/login` and click on Google Login AND GRANT PERMITIONS











### Edit the google redirects route `/success/redirect` to include `passport.authenticate` which will then get access to received data 

```js
// Successful Google redirect with code upon user granting permition
// GET  '/success/redirect'
router.get('/success/redirect', passport.authenticate('google'), (req, res, next) => {
  // passport.authenticate initiates the callback function in GoogleStrategy --> through `passport.authenticate`
  res.send('GOOGLE API IS CALLING THIS ROUTE AFTER USER GRANTS PERMITION')
});
```







### To show it, update `/config/passport-setup.js`



**/config/passport-setup.js**

```js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('./config');
const User = require('../models/user');

passport.use(
    new GoogleStrategy({
        // Authentication options for Google Strategy
        clientID: '762064633227-4kp9d2hk610l23qerb57g2dgk4ref00l.apps.googleusercontent.com',
        clientSecret: 'EbyJEcKgdU0xdX_v_d0ZO36U',
        callbackURL: '/success/redirect'
    }, 
    () => {
      console.log('PASSPORT CALLBACK FUNCTION FIRED');
      
    }  // passport callback function
    
));

```





### update PASSPORT CALLBACK FUNCTION 

### - add params `(accessToken, refreshToken, profile, done)`

### `/config/passport-setup.js`



**/config/passport-setup.js**

```js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('./config');
const User = require('../models/user');

passport.use(
    new GoogleStrategy({
        // Authentication options for Google Strategy
        clientID: '762064633227-4kp9d2hk610l23qerb57g2dgk4ref00l.apps.googleusercontent.com',
        clientSecret: 'EbyJEcKgdU0xdX_v_d0ZO36U',
        callbackURL: '/success/redirect'
    }, 
    (accessToken, refreshToken, profile, done) => {
      //console.log('PASSPORT CALLBACK FUNCTION FIRED');
      
      console.log(profile);
      
      User.findOne({ googleId: profile.id })
        .then((currentUser) => {
          if (currentUser) { // user already exists
          console.log('user is: ', currentUser);
          done(null, currentUser);  // `done()` forwards value to serializeUser
        } 
        else {  // if not, create user in our db
          User.create({
            googleId: profile.id,
            username: profile.displayName,
           	picture: profile.photos[0].value
          })
          .then((newUser) => {
            console.log('created new user: ', newUser);
            done(null, newUser);  // `done()` forwards value to serializeUser
          });
        }
      });
    }  // passport callback function
    
));

```









## Set the serializeUser and deserializeUSer



**/config/passport-setup.js**

```js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('./config');
const User = require('../models/user');

// serializeUser: defines what data to save in the session
// (this happens when you log in successfully)
// Also sets the user.id on the cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// deserializeUser: defines how to retrieve the user information from the session storage. Takes id from the cookie
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);	//	sets the value to `req.user`
    });
});


```











### Edit `app.js` and insert code after session setup and right before //Routes 



**app.js**

```js
// Creates Passport's methods and properties on `req` for use in out routes
app.use(passport.initialize());

// Sets Passport to manage user session
app.use(passport.session());

//Routes
```







## Edit the `/routes/auth-routes.js`		-	`/success/redirect`



```js
// Successful Google redirect with code upon user granting permition
// GET  '/success/redirect'
router.get('/success/redirect', passport.authenticate('google'), (req, res, next) => {
  // passport.authenticate initiates the callback function in GoogleStrategy --> through `passport.authenticate`
  res.redirect('/profile');
});
```

















### Create the profile route - `/routes/profile.js`



**/routes/profile.js**

```js
const router = require('express').Router();

const checkIfAuthenticated = (req, res, next) => {
    if (!req.user) res.redirect('/login');
    else next();
};

// GET	'/profile'
router.get('/', checkIfAuthenticated, (req, res) => {
  res.render('profile', { user: req.user });
});


module.exports = router;
```









### Update `app.js` routes



**app.js**

****

```js
const profileRoutes = require('./routes/profile');


// Routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
```









### Create the profile view - `/views/profile.hbs`

**/views/profile.hbs**

```
<div class="container">

  <h1>My Profile</h1>

  <p> <b> Name:</b> {{user.username}}</p>
  <p> <b> GoogleId:</b> {{user.googleId}}</p>
  <div>
    <img src="{{user.picture}}" alt="">
  </div>
</div>
```





### Edit `views/layout.hbs`

```html
<!DOCTYPE html>
<html>

<head>
  <title>{{title}}</title>
  <link rel='stylesheet' href='/stylesheets/style.css' />
</head>

<body>
  <nav id="layout-nav">
    <ul>
      <li>
        <button><a href="/">Home</a></button>
      </li>
      <li>
        <button><a href="/logout">Logout</a></button>
      </li>
      <li>
        <button><a href="/profile">Profile</a></button>
      </li>

      <li>
        <button><a href="/login">Login</a></button>
      </li>
    </ul>

  </nav>

  {{{body}}}
</body>

</html>
```









### Add style - `style.css`

```css
body {
  margin: 0;
  padding: 0;
  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
}

a {
  color: #00B7FF;
}

p {
  font-size: 18px;
}

h1 {
  font-size: 40px;
  text-shadow: 2px 1px 1px #676262;
}

.container {
  padding: 20px;
}

#layout-nav {
  width: 100vw;
  background: mediumaquamarine;
  padding: 20px;
  box-shadow: 1px 1px 8px #676262;
}

#layout-nav ul li {
  display: inline;
  margin-left: 20px
}

li {
  list-style: none;
}

button{
  width: 200px;
  height: 50px;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 20px;
}

button:hover{
  box-shadow: 2px 3px 3px #676262;
  transition: all 0.6s;
}

a {
  font-size: 26px;
  color: black;
  text-decoration: none;
}
```







### Update `/logout` route



```js
// GET '/logout'
router.get('/logout', (req, res, next) => {
  // handle with passport
  req.logout();
  res.redirect('/login');
});

```

###  