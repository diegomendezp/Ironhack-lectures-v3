# Express Generator

## Learning Goal

After this lesson you will be able to:

- Understand what generator packages are and why they help us
- Install & use the `express-generator`
- Run a `seeds.js` file to fill your database before starting a project



During this module, we learned how to build our backend using **NodeJS** with **Express**, how to store our data in a **Mongo** database, how to use **Mongoose** (Object Document Mapper (ODM)) and render the views with **handlebars**. Combining all these, we are ready to close the circle and create **full-stack web applications**.



But, sometimes layering all these parts takes to much time, and doing everything “manually” when starting each project can be overwhelming and such repetitive work. And we as developers don’t like to spend time on the things that we need to repeat all over again, right? :wink" That’s why we will start using the application generator tool, **express-generator**, which will help us to quickly create an application skeleton.



## [Code Along - Library Project - Done Repo](<https://github.com/ross-u/Express-and-Mongoose---Library-Code-Along-done->)





## Generators

A generator is a **program that helps to create other application programs which can run on a particular platform**



#### [npm express-generator](https://www.npmjs.com/package/express-generator)



#### [ExpressJS docs - generator](https://expressjs.com/en/starter/generator.html)





```bash
npm i -g express-generator
```



```bash
express --view=hbs library-code-along

cd library-code-along
```



### `package.json` with dependencies list is automatically included

`express-generator`  creates a skeleton and a `package.json` file for us. Notice the `din/www.js` file, which hods a file that is responsible for starting the server and listening on events that happen with the server.

Before running the server we have to run `npm install` to tell `npm` to install all the dependencies listen in the `package.json`.



```bash
code package.json
npm install

npm install --save-dev nodemon
```





##### `package.json`

```json
// add
"start:dev": "nodemon ./bin/www"
```





<br>

#### Run the server

```bash
 npm run start:dev
```



### Folder Structure



```
📦library
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
 ┣  📂views
 ┃  ┣ 📜error.hbs
 ┃  ┣ 📜index.hbs
 ┃  ┗ 📜layout.hbs
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

    

- **views** - the folder containing all the default views. All of them using handlebars

  - *error.hbs* - the view that will be rendered in case we have an `error` on the server.

  - *index.hbs* - the view that will be rendered when navigating to the root.

  - *layout.hbs* - a layout file created by default.

    

- **public** - a folder to store all our static files. 

In the `app.js`the basic set up is already done and all static files are served from public folder.







## Add additional module `mongoose` and create a connection in `app.js`



```js
npm i --save mongoose
```



<br>



#### Connect to database using  `mongoose`



##### `app.js`

```js
//	...
const mongoose = require('mongoose');


// DB connection
mongoose.connect('mongodb://localhost/library', {useNewUrlParser: true})
    .then( (x) => console.log(`Connected to DB: "${x.connections[0].name}"`))
    .catch( (err) => console.error('Error connecting to mongo', err))

```





<br>



#### Remove the precreated `router` import and middleware setup in `app.js` in order to explain what it does.

##### `app.js`

```js
// app.js

//	var indexRouter = require('./routes/index');	//		<--	REMOVE
//	var usersRouter = require('./routes/users');	//		<--	REMOVE

//	...
//	...
//	...

//	app.use('/', indexRouter);			//		<--	REMOVE
//	app.use('/users', usersRouter);	//		<--	REMOVE



// AND ADD ROUTES

app.get('/books', (req, res, next) => {
  res.render('books');
});

// home  page route - renders the `index.hbs`
app.get('/', (req, res, next) => {
  res.render('index', { title: 'Home'})
});


```





<br>



#### Create the `books.hbs` view file 



##### `views/books.hbs`

```js
<h1> BOOKS PAGE / VIEW </h1>
```



<br>





### Visit [localhost:3000/](http://localhost:3000/)	- home page / view

### Visit [localhost:3000/books](http://localhost:3000/books) - books page / view

### Visit [localhost:3000/bookzzz](http://localhost:3000/bookzzz) - 404 page /view



<br>



### Let's refactor our code and create one file that hold all the routes 



##### `app.js` - refactor it

```js
// Refactor app.js
const router = require('./routes/index');
//	...
//		...

// as the last middleware

// ROUTER - contains all the routes
app.use(router);

```



<br>



#####  `routes/index.js`

```js
const express = require('express');
const router = express.Router();


app.get('/books', (req, res, next) => {
  res.render('books');
});


// home page route - renders the `index.hbs`
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home'})
});

module.exports = router;
```









<br>



#### Move the books route to another router file

Create a `books.js` file in the `/routes` folder

```bash
touch ./routes/books.js
```





##### `routes/index.js`

```js
const express = require('express');
const router = express.Router();

const booksRouter = require('./books');


//	app.get('/books', (req, res, next) => { 
//    res.render('books');						//  <-- MOVE TO
//	});																//	`routes/books.js`


// Route 		/books
router.use('/books', booksRouter);		//	<-- ADD


// GET			/	 - renders the `index.hbs`
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home'})
});

module.exports = router;
```



<br>



##### `routes/books.js`

```js
// books router
const express = require('express');
const router = express.Router();


// GET /books
router.get('/', (req, res, next) => {
  res.render('books');
});

module.exports = router;
```



<br>





### We continue to the next part ...



#### Questions ?



