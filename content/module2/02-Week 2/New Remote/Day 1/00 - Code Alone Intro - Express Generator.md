# Express Generator

## Learning Goal

After this lesson you will be able to:

- Understand what generator packages are and why they help us
- Install & use the `express-generator`
- Run a `seeds.js` file to fill your database before starting a project



During this module, we learned how to build our backend using **NodeJS** with **Express**, how to store our data in a **Mongo** database, how to use **Mongoose** (Object Document Mapper (ODM)) and render the views with **JSX (express-react-views)**. Combining all these, we are ready to close the circle and create **full-stack web applications**.



But, sometimes layering all these parts takes to much time, and doing everything “manually” when starting each project can be overwhelming and such repetitive work. And we as developers don’t like to spend time on the things that we need to repeat all over again, right? :wink" That’s why we will start using the application generator tool, **express-generator**, which will help us to quickly create the initial application skeleton.



<br>



## Generators

A generator is a **program that helps to create other application programs which can run on a particular platform**



#### [npm express-generator](https://www.npmjs.com/package/express-generator)



#### [ExpressJS docs - generator](https://expressjs.com/en/starter/generator.html)





#### Create the project using `express-generator`

To create the project run `express-generator` command below. The `--no-view` flag must be set, as we will be adding `express-react-views` by ourselves in the next step.



```bash
npx express-generator --no-view 00-library-app

cd 00-library-app
```



<br>



### Some dependencies are automatically included

`express-generator`  creates a skeleton and a `package.json` file for us. Notice the `bin/www.js` file, which hods a file that is responsible for starting the server and listening on events that happen with the server.

Before running the server we have to run `npm install` to tell `npm` to install all the dependencies added by `express-generator` in the `package.json`.



```bash
# Install all of the dependencies included by express-generator
npm install

# Install nodemon as a dev dependency
npm install --save-dev nodemon
```





##### `package.json`

```json
// add
"start:dev": "nodemon -e '*' ./bin/www"
```



<br>



#### Manually add the `views/` folder and the template files



```bash
# Run the below command while in the root folder of the project

mkdir views/

touch views/Layout.jsx views/Home.jsx views/Books.jsx
```



<br>



#### Remove the `index.html` file

By default Express automatically serves the `index.html` file located in the `public/` folder. Ee should remove it as we will be rendering our home page using  `Home.jsx` template.



```bash
# Remove the index.html file
rm public/index.html
```



<br>



#### Run the server

```bash
 npm run start:dev
```





<br>



### Folder Structure

```
📦 00-library-app
 ┃
 ┣ 📂bin
 ┃ ┗ 📜www
 ┃
 ┣	📂public
 ┃ 	┣ 📂images
 ┃ 	┣ 📂javascripts
 ┃ 	┗ 📂stylesheets
 ┃ 	  ┗ 📜style.css
 ┃ 	
 ┣ 	📂routes
 ┃ 	┣ 📜index.js
 ┃ 	┗ 📜users.js
 ┃
 ┣ 	📂views
 ┃ 	┣ 📜Home.jsx
 ┃ 	┗ 📜Layout.jsx
 ┃
 ┣ 📜app.js
 ┗ 📜packag
```

- **bin**

  - *www* - contains our server configuration. `port`  setting , **error** handlers in case we cannot start the server.

- **app.js** - has our application’s main configuration, like a database connection and everything we need to set to Express (static files, routes).

- **package.json** - has every dependency we will need.

- **models** - the folder where you will add Mongoose models files.

- **routes**

  - *index.js* - the route configuration, by default, is set for the `/` route.		

    

- **views** - the folder containing all the default views/templates. All of them are using JSX

  - *Home.jsx* - the view that will be rendered when navigating to the root.

  - *Lyout.hbs* - a layout file created by default.

    

- **public** - a folder to store all our static files. 

In the `app.js`the basic set up is already done and all static files are served from public folder.







#### Add additional module `mongoose` and create a connection in `app.js`



```bash
# Additionaly install the view engine dependencies
npm install express-react-views react react-dom

# Also install mongoose and dotenv
npm install --save mongoose dotenv
```



<br>



#### Create `.env` file 

Create the `.env` file and add the `PORT` variable:

```bash
touch .env
```



##### `.env`

```bash
PORT=3000
```



<br>



#### Add the view engine middleware and the database connection 



##### `app.js`

```js
require('dotenv').config();  // <== ADD AT THE TOP OF THE FILE
//	...

//	...
const mongoose = require('mongoose');
const erv = require('express-react-views');

const DB_NAME = 'library';


// DB CONNECTION
mongoose.connect(
  `mongodb://localhost:27017/${DB_NAME}`,
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  	useFindAndModify: false,
  }
)
.then( (x) => {
	console.log(`Connected to DB: "${x.connections[0].name}"`)
})
.catch( (err) => {
	console.error('Error connecting to mongo', err)
})



// VIEW ENGINE SETUP
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine());

// MIDDLEWARE
app.use(express.static(__dirname + '/public'));



// ...

// ...

// ...

```



<br>



#### Create the JSX components

##### `views/Layout.jsx`

```jsx
const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Books App</title>
        <link rel="stylesheet" href="/stylesheets/style.css"/>
      </head>
      <body>{props.children}</body>
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

function Home( ) {
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
}

module.exports = Home;

```



<br>



#### Remove the  `router` imports and middleware setup in `app.js` and add new router



During this project we will be follwing the best practices and striving to make our server-side code as modular as possible. 

 This means that our server logic that in the past lectures and LABs we used to write only in the `app.js` will now be separated in few modules. 

We do this  to make our code cleaner, easier to navigate and in order to have a clear separation of concerns/responsibilities between files.



Our `app.js` will contain handle all incoming requests. It will have middleware that will run for each and every request. In addition to this it will be forwarding each route specific request to another file, called router.

We will be handlind the route logic inside of the router file.



First we need to slightly edit the code created by the `express-generator` and add our code instead.

We will first need only one router file, so let's create it:



```bash
touch routes/booksRouter.js
```



We should remove few parts of code created by the `express-generator` and connect our newly created `booksRouter` to handle all incoming requests that start with the route `/books`:

##### `app.js`

```js
// app.js

//	var indexRouter = require('./routes/index');	//		<--	REMOVE
//	var usersRouter = require('./routes/users');	//		<--	REMOVE

const booksRouter = require('./routes/booksRouter');	// <--	ADD


//	...
//	...
//	...

//	app.use('/', indexRouter);			//		<--	REMOVE
//	app.use('/users', usersRouter);	//		<--	REMOVE





// Add the newly created router
app.use('/books', booksRouter );	//		<--	ADD


// home page route - renders the `Home.jsx`
app.get('/', (req, res, next) => {
  res.render('Home')
});


```





<br>



##### `routes/booksRouter.js`

```js
const express = require("express");
const booksRouter = express.Router();

// GET     /books
booksRouter.get("/", function (req, res, next) {
  res.render("Books");
});

module.exports = booksRouter;

```



<br>



#### Create the `Books.jsx` view file 



##### `views/Books.jsx`

```jsx
const React = require("react");
const Layout = require("./Layout");


function Books() {
  return (
    <Layout>
      <h1>Books Page</h1>
    </Layout>
  );
}


module.exports = Books;
```



<br>





### Visit [localhost:3000/](http://localhost:3000/)	- home page / view

### Visit [localhost:3000/books](http://localhost:3000/books) - books page / view



<br>





### We continue to the next part ...







