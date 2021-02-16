# Node.js | Basic Authorization



## Learning Goals

After this lesson, you will be able to:

- Understand what authorization is, why it’s necessary for contemporary applications, and what kind of accounts we can create
- Understand the basics of security and how it helps in the authorization process
- Understand how to create user accounts using their email and password









## Authorization

### What is the authorization?



Authorization is the process of deciding what resources is the user authorized to access.



We give access to certain routes only to the users that are authorized.









<br>





On the other hand **authentication** describes the process of authenticating the user, e.g. via Login form, sessions, tokens.





<br>





###  Types of authentication



#### [OPEN IMAGE](https://uicookies.com/wp-content/uploads/2019/05/login-form-11.jpg)

![](https://uicookies.com/wp-content/uploads/2019/05/login-form-11.jpg)



There are several different authentication approaches we could use in our app.





#### Email and password

The most basic approach for authorization:. 

**PROS**: Everyone has an email account 100% of users covered.





#### Username

Some applications like Twitter authorize their users with a `username`.  **PROS**: You can show the username to other users in the application, providing them some privacy. 



![](https://us.v-cdn.net/5020219/uploads/editor/7k/4u3wbctmoeqo.png)





#### Social login

With the rise of the social networks, a new way to authorize users appears: it’s called `social login`. 



**Social Login** is single sign-on solution for the end users. Using existing login information from a social network provider like *Facebook*, *Twitter*, or *Google*, the user can sign into a third party website instead of creating a new account.



**PROS**: It’s easy and fast to implement and use, for the developers and the web users.





<br>





#### A common factor in every authentication approach is the password. 





<br>



#### We need to know how to secure our user's passwords that we store in the Database.



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

  

#### [OPEN IMAGE](https://i.ytimg.com/vi/ejgjMJwxVTA/maxresdefault.jpg)

![](https://i.ytimg.com/vi/ejgjMJwxVTA/maxresdefault.jpg)





It’s not impossible to **decrypt a hash value to get its original content**.

Decrypting a hash value **is just extremely impractical**. 

Because of the math involved and due to computationally intense operations.

 even if the user steals our encrypted passwords, It could take from months to years for it to be decrypted.



There are a lot of algorithms used to encrypt data with hash functions. The most common are MD5, SHA, SHA-1, BLAKE… and bcrypt. We are going to use the last one to hash our passwords.





<br>



### Bcrypt



[Bcrypt](https://www.npmjs.com/package/bcrypt) is a hashing algorithm that is meant to transform a plain text password into something that's undecipherable.



<https://www.npmjs.com/package/bcrypt>



Hashing scrambles our password into a long string of characters that is practically impossible to decode via a mathematical method, 

~~but only with brute force which is very impractical and long.~~



~~We are going to use [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) because it provides a salt protection against [rainbow table](https://en.wikipedia.org/wiki/Rainbow_table) attacks, and an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to [brute-force](https://en.wikipedia.org/wiki/Brute-force_search) attacks. It’s also specially designed for passwords.~~





<br>





**Salt** is [random](https://en.wikipedia.org/wiki/Random_Number_Generator) data that is used as an additional input to a [one-way function](https://en.wikipedia.org/wiki/One-way_function) that "[hashes](https://en.wikipedia.org/wiki/Cryptographic_hash_function)" [data](https://en.wikipedia.org/wiki/Data_(computing)), a [password](https://en.wikipedia.org/wiki/Password) or [passphrase](https://en.wikipedia.org/wiki/Passphrase). 



<br>



#### Encryption with BCrypt

Node.JS [bcrypt package](https://www.npmjs.com/package/bcrypt) allows us to encrypt passwords using the bcrypt algorightm. 











### [OPEN IMAGE](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_83d7129f38bde763a2557d189ab98a7b.png)

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_83d7129f38bde763a2557d189ab98a7b.png)





<br>





# Sign up workflow



### [OPEN IMAGE](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7776ce6ec2afe91c8b15fec37ba1e24a.png)

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7776ce6ec2afe91c8b15fec37ba1e24a.png)







# Code along 







### Create the project using express generator

```bash
npx express-generator --no-view 00-basic-auth

cd 00-basic-auth
```





### Install dependencies and create additional folders and files

```bash
# Install all the dependencies listed in package.json by express generator
npm install


# Install view engine dependencies
npm install express-react-views react react-dom


# Install mongoose and bcrypt
npm install mongoose bcrypt


# Install nodemon
npm install --save-dev nodemon
```





#### Create additional folders and files

```bash
# Create additional folders and files
mkdir views
mkdir models

touch views/Layout.jsx views/Home.jsx views/Signup.jsx views/Error.jsx
touch models/User.model.js 
touch routes/authRouter.js


# Remove routes/users routes/index and index.html 
rm routes/users.js routes/index.js public/index.html



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
 ┃ ┗ 📜 User.model.js
 ┃
 ┣ 📂public/
 ┃
 ┣ 📂routes
 ┃ ┗ 📜authRouter.js
 ┃
 ┃
 ┣ 📂views
 ┃ ┣ 📜Signup.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┃
 ┃ ┣ 📜Error.jsx
 ┃ ┗ 📜Layout.jsx
 ┃
 ┣ 📜app.js
 ┗ 📜package.json
```





#### Set the view engine



##### `app.js`

```js
//	...


const erv = require('express-react-views');			// <== ADD

// SET THE VIEW ENGINE                      // <== ADD
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx',  erv.createEngine() );


// MIDDLEWARE

// ...
```





#### Link the `authRouter.js`  and create route to render `Home` view

​	

##### `app.js`

```js
// app.js

// var indexRouter = require('./routes/index');	// REMOVE
// var usersRouter = require('./routes/users');	// REMOVE

const authRouter = require('./routes/authRouter');			// ADD

//	...
//	...

// app.use('/', indexRouter);				// REMOVE
// app.use('/users', usersRouter);	// REMOVE

app.get('/', (req, res, next) => {
  res.render('Home');
});

app.use('/auth', authRouter);	// ADD


// ...
```



<br>



#### Create the `Layout` , `Home`, `Error` and `Signup` views



First add the styles for the layout and the navbar

##### `public/stylesheets/style.css`

```css
body {
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  background:  #2384c7;
  color: white;
  padding: 5px 20px;
  box-shadow: 0px 1px 2px gray;
}

nav div {
  display: flex;
  align-items: center;
}

nav p {
  color: white;
  font-size: 20px;
  display: inline;
  margin-left: 10px;
}

nav img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: aliceblue;
}

nav ul {
  display: inline-flex;
  align-items: center;
}

nav ul li {
  list-style: none;
  display: inline;
  margin-left: 20px;
  font-size: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}
```







##### `views/Layout.jsx`

```jsx
const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title} </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

      <body>
        <nav>
          <div>
            <img src="https://i.imgur.com/RP5vFgT.png" width="100px" alt="" />
            <p>User's name</p>
          </div>
          <ul>
            <li>
              <a href="/auth/signup">Signup</a>
            </li>
            <li>
              <a href="/auth/login">Login</a>
            </li>
          </ul>
        </nav>

        {props.children}
      </body>
    </html>
  );
}

module.exports = Layout;

```

<br>



##### `views/Home.jsx`

```jsx
const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout title="Home Page">
      <h1>Home Page</h1>
      <a href="/auth/signup">
  			<button> SIGN UP </button>
			</a>
    </Layout>
  );
}

module.exports = Home;

```





<br>



##### `views/Error.jsx`

```jsx
const React = require("react");
const Layout = require("./Layout");

function Error (props) {
  return (
    <Layout title="Error">
      <h1>Error</h1>
      <p></p>
    </Layout>
  );
}

module.exports = Error;

```





<br>





### Create a Sign Up form	-	 `views/auth/signup.hbs`



##### `views/Signup.jsx`

```jsx
//	views/Signup.jsx

const React = require("react");
const Layout = require("./Layout");


function Signup (props) {
  return (
    <Layout title='Signup'>

      <form id="form" action="/auth/signup" method="POST">
        <label>Username</label>
        <br />
        <input type="text" name="username" placeholder="Your username" />

        <label>Password</label>
        <br />
        <input type="password" name="password" />

        <button type="submit">Create account</button>
      </form>
      { props.errorMessage 
        	? <div className="error-message"> { props.errorMessage }</div>
        	: null
      }
   </Layout>
  );
}



module.exports = Signup;

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





#### Create a GET `/signup` route in the  `authRouter` 



##### `routes/authRouter.js`

```js
// routes/authRouter.js
const express = require("express");
const authRouter = express.Router();
const User = require("./../models/User.model");


//	GET    '/auth/signup'
authRouter.get("/signup", (req, res, next) => {
  res.render("Signup");
});

module.exports = authRouter;
```





<br>





## Create mongoose connection & `User` model



#### Use the cheat sheet for module 2 -  <https://github.com/BCN-WEBDEV/cheatsheet/tree/master/m2/express-apps>





#### Create mongoose connection

##### `app.js`

```js
const mongoose = require("mongoose");
const DB_NAME = 'basic-auth';

//	...
//	...

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

```





<br>







### Create `User` model



##### `models/User.model.js`

```js
// models/User.model.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String
}, 
{ 
  timestamps: { 
  	createdAt: 'created_at',
  	updatedAt: 'updated_at'
	}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```





<br>



### Update`package.json`



##### `package.json`

```js
"scripts": {
	"start:dev": "nodemon -e '*' ./bin/www",
```



<br>



### Run the server 

```bash
npm run start:dev
```



<br>



#### Visit [`localhost:3000/`](http://127.0.0.1:3000/) to see the homepage

#### Visit [`localhost:3000/signup`](http://127.0.0.1:3000/signup) to see the form





<br>





### Create the POST route for handling the form data submission



##### `routes/auth-router.js`

```js
// routes/auth-router.js

// 1 - Require `bcrypt` for passwords hashing
// 2 - Create variable for the number of salt rounds


// POST    '/auth/signup'
authRouter.post("/signup", (req, res, next) => {
  
  // 3 - Deconstruct the `username` and `password` from req.body
  

  // 4 - Check if `username` or `password` are empty and display error message
  
  
  // 5 - Check the users collection if the username already exists 
  
			// > if `username` already exists in the DB and display error message
  
      // > If `username` doesn't exist generate salts and hash the password 
      
  		// > After hashing the password, create new user in DB
  	
  				// >  When the new user is created, redirect to the home page
  
  
  	// catch errors
});
```





<br>



#### Now create the auth route `POST /auth/signup`

##### `routes/authRouter.js`

```js
// routes/authRouter.js

// Require bcrypt
// Create the variable for the number of salt rounds
const bcrypt = require('bcrypt');
const saltRounds = 10;


//	GET    '/auth/signup'
authRouter.get("/signup", (req, res, next) => {
  res.render("Signup");
});


// POST /auth/singup
authRouter.post('/signup', (req, res, next) => {
  const { username, password} = req.body;

  if ( username === '' || password === '') {
    const props = { errorMessage: 'Enter the username and password'};
    res.render('Signup', props);
    return;
  }


  // Check the users collection if the username already exists
  User.findOne( { username })
    .then( ( user ) => {
      // > if `username` already exists in the DB, display error message
      if ( user !== null ) {
        const props = { errorMessage: 'The username already exists'};
        res.render('Signup', props);
        return;
      }

      // > if `username` doesn't exist hash the password
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // > After hashing the password, create new user in DB
      User.create({ username, password: hashedPassword })
      .then( () => {
          res.redirect('/');
          // > When the new user is created, redirect to the home page
        })
        .catch( (err) => {
          const props = { errorMessage: 'Error while signing up the new user'};
          res.render('Signup', props);
        });

    })
    .catch( (err) => console.log(err));  // catch errors from User.findOne
    
})

module.exports = authRouter;

```





<br>



### BONUS: Advanced security





#### Password strength measurement

- To implement the password strength check functionality, we can use the package [`zxcvbn`](https://www.npmjs.com/package/zxcvbn). 

- `zxcvbn` package is a tool to check the password strength in both front-end and back-end.



<br>



#### Install the package

```bash
npm install zxcvbn
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
    		res.render(
          'auth-views/signup-form',
      		{ errorMessage: 'Password too weak, try again' }
    		);
    		return;
  		}

```





<br>



#### Prevent bot created accounts



We recommend you add the [re-captcha](https://www.npmjs.com/package/express-recaptcha) to the sign up form. It provides us the necessary code to be sure that form submissions don’t come from a robot.



### [rexpress-recaptcha  npm](<https://www.npmjs.com/package/express-recaptcha>)









# [Code Example - done](https://github.com/ross-u/m2-jsx-node-basic-authorization-example-done)