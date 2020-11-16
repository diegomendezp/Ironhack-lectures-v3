# Express | GET Methods - Route Params & Query String

## Learning Goals

After this lesson you will be able to:

- Understand how GET methods works
- Learn how to send data from the browser to the server
- Learn how Route Params works
- Learn how Query Strings works
- Understand the difference between route and query params







#### Create files

```bash
mkdir 00-express-params-query-get-post

cd 00-express-params-query-get-post

mkdir views

touch app.js views/Search.jsx views/Signup.jsx

code .
```



<br>



#### Initialize `npm` and install the dependencies



```bash
npm init -y

npm install express express-react-views react react-dom

npm install --save-dev nodemon
```



<br>

The file structure should be as follows:

```bash
.
├── app.js
├── package.json
|
└── views/
		|
    └── Signup.jsx
```



<br>





#### Create `start` script for nodemon in `package.json`



##### `package.json`

```json
"scripts": {
	"start:dev": "nodemon -e '*' app.js",
```



<br>



## Setup `app.js`

#### Setup express and handlebars *Emmet abbr* -  `ehbs`

```js
ehbs + Tab
```

**or**

```js
const express = require('express');
const erv = require("express-react-views");
const app = express();
const PORT = 3000;



// SET THE VIEW ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine() );


// MIDDLEWARE:
// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + '/public'));



//
// ROUTES


// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on port ${ PORT }`));
```

 



# Route parameters



#### 1. Create route

```js
// Example: route with a single param (dynamic part of the route)
app.get('/users/:username', (req, res, next) => {
  console.log("req.params --> ", req.params);
  res.send();
})
```



#### Navigate to:	[`http://localhost:3000/users/ironhack`](http://localhost:3000/users/ironhack)



<br>



#### 2. Update route

Include additional parameters `/users/:username/books/:bookId`.

```js
// Example: route with multiple params (dynamic parts of the route)
app.get('/users/:username/books/:bookId', (req, res, next) => {
  console.log("req.params", req.params);
  res.send();
})
```



#### Navigate to:	[`http://localhost:3000/users/ironhack/book/abcd123`](http://localhost:3000/users/ironhack/book/abcd123)





<br>



# Query String



#### 3.  Create a new Route

```js
// URL query string - req.query
// localhost:3000/search?city=barcelona&bootcamp=webdev
app.get('/search', (req, res, next) => {
  res.send(req.query)
})
```





#### Navigate to

####  [`http://localhost:3000/search?city=Barcelona&bootcamp=webdev`](http://localhost:3000/search?city=barcelona&bootcamp=webdev)





<br>



#### 4. Different properties available on `req` object



#### Create a new route `/test`

```js
// Example: userful properties of the `req` (request) object
app.get('/test', (req, res, next) => {
  console.log('req.path ->', req.path);
  console.log('req.query ->', req.query);
  console.log('req.params ->', req.params);
  console.log('req.method ->', req.method);
  console.log('req.headers ->', req.headers);
  res.send();
});
```







<br>



### Query String from Forms



#### 5.  Add route `/ ` - Emmet abbr - `appgetrender`

```js
appgetrender + Tab
```

or

##### `app.js`

```js
app.get('/', (req, res, next) => {
  res.render("Search");
})
```







#### Navigate to 

####  [`http://localhost:3000/`](http://localhost:3000/)



<br>



#### Update `Home.jsx`- Emmet abbr `formget`

```js
formget + Tab
```

or

##### `views/Search.jsx`

```jsx
const React = require("react");

function Search() {
  return (
    <form action="/search" method="GET">
      <input type="text" name="search" placeholder="Look for..." />
      <br />

      <button type="submit">Search</button>
    </form>
  );
}

module.exports = Search;

```





#### Create the route to receive the values from GET form

```js
// Example: receiving data from the "GET form"
app.get('/search', (req, res, next) => {
  // Data sent by "GET form" are sent in the URL string and are available via the `req.query`
  // common use case: Search form (Google, Amazon, etc.)
  console.log("req.query", req.query);
  res.send();
})
```



### [`MDN - <form> methods `](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)

#### `GET` request / `method`  - 

In this case, the browser sends an empty body (`GET` has headers only). 

Because the body is empty, when a form is sent using `GET` method the data sent to the server is appended to the URL, in the form of query string.



#### `POST` request / `method`  - 

If a form is sent using `POST` method, the data is appended to the body of the HTTP request.







<br>





### Setting middleware for handling incoming `json` and form data



When working with `POST` form we need to take into consideration that data is send through the body of the `POST` request.



in order to properly parse the body of the incoming requests we need to install the `body-parser` middleware. 

Otherwise, we won't be able to use the data from the body.



```bash
npm i --save body-parser
```



### [GitHub - `body-parser` ](https://github.com/expressjs/body-parser#examples)



##### `app.js`

```js
const bodyParser = require('body-parser');

// ...
//		...

// SET PARSING OF THE `req.body`
// PARSE FORM DATA: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// PARSE JSON DATA: application/json
app.use(bodyParser.json());
```





<br>



##### `app.js`

Update the `/email` route that handles the incoming form data:



```js
// Example: rendering the Signup form
app.get("/signup", (req, res, next) => {
  res.render("Signup");
});
```



<br>



##### `views/Signup.jsx`

```jsx
const React = require("react");


function Signup() {
  
  return (
    <form action="/signup" method="POST">
      <label>Email</label>
      <br />
      <input type="email" name="Email" placeholder="Enter Email" />
      <br />
      
      <label>Password</label>
      <br />
      <input type="password" name="Password" placeholder="Enter Password" />
      <br />
      
      <button type="submit">Submit</button>
    </form>
  );
}


module.exports = Signup;
```





<br>





#### Create the route to receive the data from the POST form

```js

// Example: receiving the "POST from" data
app.post('/signup', (req, res, next) => {
  console.log('req.body', req.body);
  res.send();
});
```





<br>

#### All form input types can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) on MDN.





<br>

### [Pair Exercise - Send Form Data](https://gist.github.com/ross-u/73c4d1e0b19a19659783a3e34bec0cac) (35 min)