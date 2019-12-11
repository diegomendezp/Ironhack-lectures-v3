# Express | Introduction



 That’s exactly what we will be learning here: **how to make a basic Website** using Node.js and Express.

Sidenote : (This kind of Website **doesn’t need Express or back end**. It would be better to make a Website like this with plain old HTML, CSS and JavaScript . We are only making these simple Websites to lay the foundation of how to use Express so we can do more appropriate back end tasks later)





## Web Frameworks

- Frameworks enable us to write clean code, reusing the code components that exist in the framework, and having core functionalities provided in an easy to use way.



### Express Web Framework

#### (fast, unopinionated, minimalist web framework for node)

[ExpressJS](http://expressjs.com/) is the most commonly used framework in the Node.js ecosystem. Every Node.js player has heard of it and is using it with or without noticing.

It is designed for building web applications and APIs.

We can also enhance it's feautres through additional plugins.



## **What does 'unopinionated' mean?**

### It means there is no one right way to do things that Express will force you into. By contrast an opinionated framework guides/forces you into a specific way to do something. 

### The best example of such is Ruby on Rails ("the Rails Way").





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
$ mkdir express-hello-world
$ cd express-hello-world
```



 **|** Install **Express** with NPM and save it as a dependency in our project, then create a file to run our *server* named `app.js`

```bash
$ npm init
# (Hit return until prompted to type "yes")

$ npm install express --save
$ touch app.js
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
  console.log(request);
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
Our first Express code

// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// our first Route:
app.get('/', (request, response, next) => {
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
cd public
mkdir views css
cd css
touch main.css about.css
cd ../../
```





```js
const express = require('express');

const app = express();

app.use(express.static('public'));

```





### Move the `css` from `HTML string` to  `public/css/main.css` and `public/css/about.css`

and

### Move the html strings into the separate file `public/views/index.html` and  `public/views/about.html`



### or



#### Get the files from the Repo with `about.html` and `index.html`.

### [Repo with static files](https://github.com/ross-u/Node.js-Serving-Static-Files-Code-Along-)



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

```html
<link rel="stylesheet" href="../css/main.css">

<!-- AND -->

<link rel="stylesheet" href="../css/about.css">
```





### Try accessing the files in the `public/` folder via:

`localhost:3000/image1.jpg`

`localhost:3000/image2.jpg` 

`localhost:3000/cat.jpg`

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

