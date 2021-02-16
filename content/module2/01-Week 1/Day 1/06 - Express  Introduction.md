# Express | Introduction



We will be learning **how to make a basic server-side rendered Website** using Node.js and Express.



Sidenote : (This kind of Website **doesn’t need Express or back end**. 

It would be better to make a Website like this with plain old HTML, CSS and JavaScript . 

We are only making these simple Websites to lay the foundation of how to use Express so we can do more appropriate back end tasks later).





## WebDev Frameworks

- Frameworks enable us to write clean code, reusing the code components that exist in the framework, and having core functionalities provided in an easy to use way.



### Express Web Framework

#### (fast, unopinionated, minimalist web framework for node)

[ExpressJS](http://expressjs.com/) is the most commonly used framework in the Node.js ecosystem. Every Node.js developer has heard of it and is using it with or without noticing.

It is designed for building web applications and APIs.

We can also enhance it's feautres through additional plugins.





## **What does 'unopinionated' mean?**

#### It means there is <u>no one right way to do things</u> that Express will force you into. 

#### By contrast an opinionated framework guides/forces you into a specific way to do something. 



##### (The best example of such opinionated framework is Ruby on Rails ("the Rails Way").





## HTTP Verbs

Before starting with Express lets get an overview of 2 HTTP methods.

### GET

 \- has only Headers

Retrieve a specific resource or a collection of resources, should not affect the data/resource.

Can be cached

Should never be used to send sensitive data

Have length restrictions (you can’t send giant files)



### POST

 \-  has Headers and Body

Creates a new Resource.

Each POST request should create a new resource with new unique id.

Are never cached





### POST doesn't expose information via the URL, it exposes just as much information as a GET in the actual network communication between the client and server.





```bash
mkdir 04-express-server

cd 04-express-server

touch app.js

code .
```



 **|** Install **Express** with NPM and save it as a dependency in our project, then create a file to run our *server* named `app.js`

```bash
npm init -y


npm install express --save
```





 ### **|** Write our `app.js` server



The [express()](https://expressjs.com/en/4x/api.html#express) function creates an [Express application](https://expressjs.com/en/4x/api.html#app).

```js
const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();
```

**4 |** Set up a Route



- **URLs**
  In back end, we only consider the part of the URL that comes after the the domain. Examples:
  - If the full URL is [example.com/profile](http://example.com/profile) we refer to it as `/profile`
  - If the full URL is [example.com/blogs](http://example.com/blogs) we refer to it as `/blogs`
  - If the full URL is [example.com](http://example.com/) we refer to it as `/`



- **HTTP Method**: `GET`

```js
const express = require('express');

const app = express();


// our first Route
app.get('/', (request, response, next) => {
  console.log("HTTP method", request.method);
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

```



- **app**: Our express server
- **get**: the **HTTP Verb** needed to access this page
- **/**: the route that the User will type into the URL bar
- `request`: An *object* containing information about the request, such as the headers. More on this later.
- `response`: An *object* containing information about the response, such as headers and any data we need to send to the client.
- `next`: We will use this later to handle errors. Leave it there for now.







### Start the Server!

Tell our server to *continuously listen for requests* on port 3000. You can optionally provide a callback to do something once the listening is set up.

```js
//  Start the Server
app.listen( 3000, () => {
  console.log('My first app listening on port 3000!')
});
```





```js
// Our first Express code

// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// our first Route:
app.get('/', (request, response, next) => {
  console.log("HTTP method", request.method);
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
```





### Run the server

```
node app.js
```

And visit [localhost:3000](http://localhost:3000/)!









### Let's spice it up



### Create additional `GET` route on our server

```js
// About page route
app.get('/about', (request, response, next) => {
  response.send(`
  <h1>About me - Page</h1>
	`);
});

```









## Add the HTML as the string to the `reponse.send(HTML STRING HERE)`

```js
// Home page route
app.get('/', (request, response, next) => {
  response.send(`
  <!DOCTYPE html>
	<html lang="en">
		...
	</html>
  `);
});

// About page route
app.get('/about', (request, response, next) => {
  response.send(`
  <!DOCTYPE html>
	<html lang="en">
		...
	</html>
  `);
});
```











## Serving static files



### Add the `static` middleware to help serving the static resources, from the `public` folder

```bash
mkdir public 

mkdir public/views public/css

touch public/css/main.css public/css/about.css

touch public/views/index.html public/views/about.html



```





```js
const express = require('express');

const app = express();



// middleware for static files
app.use(express.static('public'));	// <-- ADD

// We setup a folder from where to serve the pages (static files)
```





### Add the `css` from `HTML string` to  `public/css/main.css` and `public/css/about.css`

and

### Move the html strings into the separate file `public/views/index.html` and  `public/views/about.html`



### or



#### Get the files from the Repo with `about.html` and `index.html`.

### [Repo with static files](https://github.com/ross-u/Node.js-Serving-Static-Files-Code-Along-)





<br>



#### Update the current routes to serve the html files from `public` folder

##### `app.js`

```js
// middleware for static files
app.use(express.static('public'));

//Home
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/index.html');
});

//About
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/about.html');
});
```





### Update the HTML strings (remove `<style>`) and include the link to the static file:

##### `public/views/index.html`

```html
<!--   index.html   -->
<link rel="stylesheet" href="../css/main.css">
```



##### `public/views/about.html`

```html
<!--   about.html   -->
<link rel="stylesheet" href="../css/about.css">
```





#### Save few additional images to your public folder

```bash
# Download images using terminal

# Download cat image and save it to the `./public` folder
curl https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg --output ./public/cat.jpeg


# Download a dog image and save it to the `./public` folder
curl https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C-760x506.jpg --output ./public/dog.jpeg

```



### Try accessing the files in the `public/` folder via:

`localhost:3000/dog.jpeg` 

`localhost:3000/cat.jpeg`

`localhost:3000/`

`localhost:3000/about`





## Create the repo as the reference

```js
touch .gitignore
```



**.gitignore**

```js
node_modules

.DS_Store
```



```bash
git init
```

