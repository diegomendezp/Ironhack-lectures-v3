# Node.js | Basic Authorization



## Learning Goals

After this lesson, you will be able to:

- Understand what authorization is, why it’s necessary for contemporary applications, and what kind of accounts we can create
- Understand the basics of security and how it helps in the authorization process
- Understand how to create user accounts using their email and password







## Authorization

### What is the authorization?

- We give access to certain routes only to the users that are authorized.
- Authorization is the process deciding what resources is the user authorized to access.





We will cover authentication in another learning unit. 



(On the other hand **authentication** describes the process of authenticating the user, e.g. via Login form, sessions, tokens );



In this learning unit we will just cover the concept of **authorizing** the user, and the different ways we can do that.





###  Types of authorization

We have several ways to provide authorization in our applications.



#### Email and password

The most basic approach for authorization:. 

**PROS**: Everyone has an email account 100% of users covered.





#### Username

Some applications like Twitter authorize their users with a `username`.  **PROS**: You can show the username to other users in the application, providing them some privacy. 





#### Social login

With the rise of the social networks, a new way to authorize users appears: it’s called `social login`. **PROS**: It’s easy and fast to implement and use, for the developers and the web users.



<br>



#### A common factor in every authorization types is the password. 



#### How to secure secure our user's passwords.



<br>



## Password Security & Encryption

We can send a form submission data in two different ways, depending on the HTTP method :



- **GET**:  we submit the form values through the URL query string.

- **POST**: we submit the form values hidden in the request body.



<br>



**We have to encrypt the password.**



Doesn't matter if POST / GET we can't leave the password as a plaint text in the database or out of it, as this would be a security risk.



<br>



#### Hash functions

- To encrypt our passwords, we are going to use a [Hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function).

- A [hash function](https://en.wikipedia.org/wiki/Hash_function) is a function that, given any string as a parameter, generates a unique string of data.

- Hash functions are used in cryptography to ensure the integrity of the text. The same string will have always have the same unique hash.





It’s not impossible to **decrypt a hash value to get its original content**.

Decrypting a hash value **is just extremely impractical**. 

Because of the math involved and due to computationally intense operations.

 even if the user steals our encrypted passwords, It could take from months to years for it to be decrypted.



There are a lot of algorithms used to encrypt data with hash functions. The most common are MD5, SHA, SHA-1, BLAKE… and bcrypt. We are going to use the last one to hash our passwords.





<br>



### Bcrypt



[Bcrypt](https://www.npmjs.com/package/bcrypt) is a hashing algorithm thats meant to transform a plain text password into something that's undecipherable.



<https://www.npmjs.com/package/bcrypt>



Hashing scrambles our password into a long string of characters that is practically impossible to decode via a mathematical method, 

~~but only with brute force which is very impractical and long.~~



~~We are going to use [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) because it provides a salt protect against [rainbow table](https://en.wikipedia.org/wiki/Rainbow_table) attacks, and an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to [brute-force](https://en.wikipedia.org/wiki/Brute-force_search) attacks. It’s also specially designed for passwords.~~



<br>



**Salt** is [random](https://en.wikipedia.org/wiki/Random_Number_Generator) data that is used as an additional input to a [one-way function](https://en.wikipedia.org/wiki/One-way_function) that "[hashes](https://en.wikipedia.org/wiki/Cryptographic_hash_function)" [data](https://en.wikipedia.org/wiki/Data_(computing)), a [password](https://en.wikipedia.org/wiki/Password) or [passphrase](https://en.wikipedia.org/wiki/Passphrase). 



#### Encryption with BCrypt

Node.JS [bcrypt package](https://www.npmjs.com/package/bcrypt) allows us to encrypt passwords using the bcrypt algorightm. 



### [







### OPEN IMAGE](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_83d7129f38bde763a2557d189ab98a7b.png)

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_83d7129f38bde763a2557d189ab98a7b.png)





<br>





# Sign up workflow



### [OPEN IMAGE](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7776ce6ec2afe91c8b15fec37ba1e24a.png)

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7776ce6ec2afe91c8b15fec37ba1e24a.png)







# Code along 







### Create the project using express generator

```bash
express --view=hbs basic-auth

cd basic-auth
```





### Install dependencies and create additional folders and files

```bash
# Install all the dependencies listed in package.json by express generator
npm i


# Install mongoose and bcrypt
npm i --save mongoose bcrypt


# Install nodemone
npm i --save-dev nodemon


# Create additional folders and files
mkdir views/auth models
touch views/auth/signup.hbs models/User.js routes/auth.js


# Remove routes/users
rm routes/users.js


code .

```







<br>





## Our tree structure



```js
📦basic-auth
 ┣ 📂bin
 ┣ 📂node_modules
 ┃
 ┣ 📂models
 ┃ ┗ 📜User.js
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

##### `app.js`

~~`var indexRouter = require('./routes/index');`~~
~~`var usersRouter = require('./routes/users');`~~

```js
// app.js

const router = require('./routes/index');
...
...

// app.use('/', indexRouter);				// REMOVE
// app.use('/users', usersRouter);	// REMOVE

// Routes
app.use('/', router);
```



<br>



#### Link the `authRouter` in the `routes/index.js`

##### `routes/index.js`

```js
// routes/index.js

const express = require("express");
const router = express.Router();

const authRouter = require('./auth');	// ADD

// *	'/signup'
router.use('/signup', authRouter)


// GET '/'
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Basic auth code along'});
});

module.exports = router;
```





<br>



#### Create a GET `/signup` route in the  `authRouter` 



##### `routes/auth.js`

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



<br>



## Create mongoose connection & `User` model



#### Use the cheat sheet for module 2 -  <https://github.com/BCN-WEBDEV/cheatsheet/tree/master/m2/express-apps>





#### Create mongoose connection

##### `app.js`

```js
const mongoose = require("mongoose");

...
...

mongoose.connect('mongodb://localhost:27017/basic-auth', {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  useUnifiedTopology: true
});

```



<br>







### Create `User` model



##### `models/User.js`

```js
// models/User.js

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





<br>



### Create a Sign Up form	-	 `views/auth/signup.hbs`



##### `views/auth/signup.hbs`

```html
<!--  views/auth/signup.hbs   -->


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





<br>



### Add style to the form



##### `public/stylesheet/style.css`

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



<br>



### Update home page `views/index.hbs`



##### `views/index.hbs`

```html
<!--   views/index.hbs   -->


<!--   ...   -->


<a href="/signup">
  <button> SIGN UP </button>
</a>
```





<br>



### Update`package.json`



##### `package.json`

```js
"scripts": {
	"start-dev": "nodemon ./bin/www",
```



<br>



### Run the server 

```bash
npm run start-dev
```



<br>



#### Visit [`localhost:3000/`](http://127.0.0.1:3000/) to see the homepage

#### Visit [`localhost:3000/signup`](http://127.0.0.1:3000/signup) to see the form





<br>





### Create the POST route for handling the form data submission



##### `routes/auth.js`

```js
// routes/auth.js

// 1 - Require `bcrypt` for passwords hashing
// 2 - Create variable for the number of salt rounds


// POST '/auth'
router.post("/", (req, res, next) => {
  
  // 3 - Deconstruct the `username` and `password` from req.body
  

  // 4 - Check if `username` or `password` are empty and display error message
  
  
  // 5 - Check the users collection if the username already exists 
  
			// > if `username` already exists in the DB and display error message
  
      // > If `username` doesn't exist generate salts and hash the password 
      
  		// > After hashing the password, create new user in DB
  	
  				// >  When the new user is created, redirect to '/home' page
  
  
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
               { errorMessage: 'Enter the username and password.'}
              );
    return;
  }
  
  
  	// Check the users collection to check the username
    User.findOne({ username })
    .then((user) => {
      
			// > if `username` already exists in the DB display error message
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
        .catch((err) => res.render('auth/signup',{ errorMessage:'Error while trying to create a  new user'}));
      
     })
     .catch((err) => next(err));	// catch errors from User.findOne
  
});
```





<br>



### BONUS: Advanced security





#### Password strength measurement

- To implement the password strength check functionality, we can use the package [`zxcvbn`](https://www.npmjs.com/package/zxcvbn). 

- `zxcvbn` package is a tool to check the password strength in both front-end and back-end.



<br>



#### Install the package

```bash
npm i --save zxcvbn
```





##### `routes/auth.js`

```js
//  routes/auth.js

//	...
//			...

// Import zxcvbn
const zxcvbn = require('zxcvbn');

// Create check for the password strength score after:
//  	if (username === '' || password === '') {}

			// Check the password strength
			if (zxcvbn(password).score < 3) {
    		res.render('auth/signup',
      		{ errorMessage: 'Password too weak, try again' }
    		);
    		return;
  		}

```





<br>



#### Prevent bot created accounts



We recommend you add the [re-captcha](https://www.npmjs.com/package/express-recaptcha) to the sign up form. It provides us the necessary code to be sure that form submissions don’t come from a robot.



### [rexpress-recaptcha  npm](<https://www.npmjs.com/package/express-recaptcha>)







# [Code Along - done](<https://github.com/ross-u/Node---Basic-Authorization---Code-Along-Done>)