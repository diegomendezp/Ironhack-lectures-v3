# Node.js | Basic Authorization



## Learning Goals

After this lesson, you will be able to:

- Understand what authorization is, why it’s necessary for contemporary applications, and what kind of accounts we can create
- Understand the basics of security and how it helps in the authorization process
- Understand how to create user accounts using their email and password







## Authorization

### What is the authorization?

Authorization is the method we use to protect access to some content in our app from certain users. Let’s look at [Dropbox](https://www.dropbox.com/) as an example.

In Dropbox you are authorized to access all the folders you create in your account but no one else’s, protecting user files, photos, and videos.

We will cover authentication in another learning unit. In this learning unit we will just cover the concept of **authorizing** the user, and the different ways we can do that.





###  Types of authorization

We have several ways to provide authorization in our applications.



#### Email and password

The most basic approach for authorization:. **PROS**: Everyone has an email account 100% of users covered.





#### Username

Some applications like Twitter authorize their users with a `username`.  **PROS**: You can show the username to other users in the application, providing them some privacy. 





#### Social login

With the rise of the social networks, a new way to authorize users appears: it’s called `social login`. **PROS**: It’s easy and fast to implement and use, for the developers and the web users.





A common factor in any of the types is a password. How to secure secure our user's passwords.





### Password Security

We can send a form submission data in two different ways, depending on the HTTP method :



- **GET**: we submit the form values through the Web address’ query string.

- **POST**: we submit the form values hidden in the request’s body.

  

In both cases, we receive the values somehow and in both cases we can't send the password as a plaint text as this would be a huge security risk.

**We have to encrypt the password.**







#### To encrypt our passwords, we are going to use a [Hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function).



#### Hash functions

A [hash function](https://en.wikipedia.org/wiki/Hash_function) is a function that, given any string as a parameter, generates a unique string of data.

Hash functions are used in cryptography to ensure the integrity of the text. The same string will have always have the same hash.



It’s not impossible to **decrypt a hash value to get its original content**.

Decrypting a hash value **is just extremely impractical**. 

Because of the math involved and due to computationally intense operations,

 even if the user steals our encrypted passwords, It could take from months to years for it to be decrypted.

There are a lot of algorithms used to encrypt data with hash functions. The most common are MD5, SHA, SHA-1, BLAKE… and bcrypt. We are going to use the last one to hash our passwords.





Bcrypt is a hashing algorithm thats meant to transform a plain text password into something thats's undecipherable.



<https://www.npmjs.com/package/bcrypt>



We are going to use [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) because it provides a salt protect against [rainbow table](https://en.wikipedia.org/wiki/Rainbow_table) attacks, and an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to [brute-force](https://en.wikipedia.org/wiki/Brute-force_search) attacks. It’s also specially designed for passwords.



Think of a hashing as a one way scrambler, which scrambles our password into a long string of characters that is practically impossible to decode via a mathematical method (but rather brute force which is very impractical).

There are 2^128 or approximately 10^38 possible hashes per password depending on a salt. There is a different has for each salt used. 



#### Encryption with BCrypt

Node.JS [bcrypt package](https://www.npmjs.com/package/bcrypt) allows us to encrypt passwords using the bcrypt algorightm. 



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_83d7129f38bde763a2557d189ab98a7b.png)











# Sign up workflow



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7776ce6ec2afe91c8b15fec37ba1e24a.png)







# Code along 







### Create the project using express generator

```bash
express --hbs basic-auth
cd basic-auth
```





### Install dependencies and create additional folders and files

```bash
# Install all the dependencies listed in package.json by express generator
npm install

# Install mongoose and bcrypt
npm install --save mongoose
npm install --save bcrypt

# Create additional folders and files
mkdir views/auth models
touch views/auth/signup.hbs models/user.js routes/auth.js

# Remove routes/users
rm routes/users.js
```













## Our tree structure

```js
📦basic-auth
 ┣ 📂bin
 ┣ 📂node_modules
 ┃
 ┣ 📂models
 ┃ ┗ 📜user.js
 ┃
 ┣ 📂public
 ┃
 ┣ 📂routes
 ┃ ┣ 📜auth.js
 ┃ ┗ 📜index.js
 ┃
 ┣ 📂views
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜signup.hbs
 ┃ ┃
 ┃ ┣ 📜error.hbs
 ┃ ┣ 📜index.hbs
 ┃ ┗ 📜layout.hbs
 ┃
 ┣ 📜app.js
 ┗ 📜package.json
```











## Link the `routes/index.js` file and `routes/auth.js` 

​	

**app.js**

~~`var indexRouter = require('./routes/index');`~~
~~`var usersRouter = require('./routes/users');`~~

```js
const router = require('./routes/index');
...
...

// Routes
app.use('/', router);
```





#### Link the `authRouter` in the `routes/index.js`

**routes/index.js**

```js
// routes/index.js
const express = require("express");
const router = express.Router();
const authRouter = require('./auth');

// *	'/signup'
router.use('/signup', authRouter)


// GET '/'
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Basic authentication code along'});
});

module.exports = router;
```





#### Create a GET `/signup` route in the  `authRouter` 



**routes/auth.js**

```js
// routes/auth.js
const express = require("express");
const router = express.Router();
const User = require('./../models/user');

//	GET '/signup'
router.get('/', (req, res, next) => {
  res.render("auth/signup");
});

module.exports = router;
```













## Create mongoose connection and User model



#### Use the cheat sheet for module 2 -  <https://github.com/BCN-WEBDEV/cheatsheet/tree/master/m2/express-apps>





#### create mongoose connection

**app.js**

```js
const mongoose = require("mongoose");

...
...

mongoose.connect('mongodb://localhost/basic-auth', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

```





#### create User model

**models/user.js**

```js
// models/user.js
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```













### Create a signup form	-	 `views/auth/signup.hbs`



**views/auth/signup.hbs**

```html
  <form id="form" action="/signup" method="POST">
    <label for="username">Username</label><br>
    <input type="text" name="username"
      placeholder="Your username">

    <label for="password">Password</label><br>
    <input type="password" name="password"
      placeholder="********">

    <button type="submit">Create account</button>
  </form>


{{!-- error message display --}} 
{{#if errorMessage}}
  <div class="error-message">{{ errorMessage }}</div>
{{/if}}
```





### Add style to the form



**public/stylesheet/style.css**

```css
/* public/stylesheet/style.css */
#form {
  margin: 30px auto;
  width: 380px;
}

#form label {
  color: #666;
  display: inline-block;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
}

#form input,
#form button {
  box-sizing: border-box;
  font-size: 14px;
  outline: 0;
  padding: 4px;
  width: 100%;
  margin-bottom: 20px;
}

button {
  background: #43a3e6;
  border: 1px solid #43a3e6;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  padding: 8px 16px;
  text-decoration: none;
  text-transform: uppercase;
  transition: .3s ease background;
  width: 100%;
}

button:hover {
  background: #fff;
  color: #43a3e6;
  transition: .3s ease background;
}

.error-message {
  background: #F02B63;
  box-sizing: border-box;
  color: #fff;
  margin: 20px auto;
  padding: 20px;
  width: 100%;
}
```





### Update home page `views/index.hbs`

```js
...
<a href="/signup">
  <button type="button"> SIGN UP </button>
</a>
```









### Create a `start-dev` script in `package.json`

```js
"start-dev": "nodemon ./bin/www",
```



### Run the server 

```bash
npm run start-dev
```





### Visit `localhost:3000/` to see the homepage

### Visit `localhost:3000/signup` to see the form









### Create the POST route for handling the form data submission



**routes/auth.js**

```js
// Require `bcrypt` to hash passwords and specify number for salt rounds


router.post("/", (req, res, next) => {
  // Deconstruct the `username` and `password` from request body
  

  // Check if `username` and `password` are empty and display error message
  
  
  // Query the users collection and to check username and password 
  
					// > if `username` already exists in the DB and display error message
  
      		// > If `username` doesn't exist generate salts and hash the password 
      
  				// > After hashing the password, create new user in DB and redirect to home 
  
  	// catch errors from User.findOne
});
```





### Now build the auth route 

```js
// Require `bcrypt` to hash passwords and specify number for salt rounds
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post("/", (req, res, next) => {
  // Deconstruct the `username` and `password` from request body
  const { username, password } = req.body;

  
  // Check if `username` and `password` are empty and display error message
  if (username === '' || password === '') {
    res.render('auth/signup', 
               { errorMessage: 'Indicate a username and a password to sign up'}
              );
    return;
  }
  
  
  // Query the users collection and to check username and password 
    User.findOne({ username })
    .then((user) => {
      
				// > if `username` already exists in the DB and display error message
      if ( user !== null ) {
        res.render('auth/signup',{ errorMessage:'The username already exists'});
        return;
      }
      
      	// > If `username` doesn't exist generate salts and hash the password 
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      
      
  		// > After hashing the password, create new user in DB and redirect to home 
      User.create( { username, password: hashedPassword})
      	.then(() => res.redirect('/'))
        .catch((err) => console.log(err));
      
     // catch errors from User.findOne
      }).catch((err) => next(err));
  
});
```





### BONUS: Advanced security



#### Password strength measurement

Node provides us a package to implement this functionality, [`zxcvbn`](https://www.npmjs.com/package/zxcvbn). It provides the tools to check the password strength in both front-end and back-end.





**routes/auth.js**

```js
// Import zxcvbn
const zxcvbn = require('zxcvbn');

// Create check for the password strength score after:
//  	if (username === '' || password === '') {}

			if (zxcvbn(password).score < 3) {
    		res.render('auth/signup',
      		{ errorMessage: 'Password too weak, try again' }
    		);
    		return;
  		}

```





#### Prevent bot created accounts



We recommend you add the [re-captcha](https://www.npmjs.com/package/express-recaptcha) to the sign up form. It provides us the necessary code to be sure that form submissions don’t come from a robot.



### [rexpress-recaptcha  npm](<https://www.npmjs.com/package/express-recaptcha>)







# [Code Along - done](<https://github.com/ross-u/Node---Basic-Authorization---Code-Along-Done>)