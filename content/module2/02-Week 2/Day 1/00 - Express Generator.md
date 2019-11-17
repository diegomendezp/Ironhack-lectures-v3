# Express Generator

## Learning Goal

After this lesson you will be able to:

- Understand what generators are and why they help us
- Install & use the `express-generator`
- Run a `seeds.js` file to fill your database before starting a project



During this module, we learned how to build our backend using **NodeJS** with **Express**, how to store our data in a **Mongo** database, how to use **Mongoose** (Object Document Mapper (ODM)) and render the views with **handlebars**. Combining all these, we are ready to close the circle and create **full-stack web applications**.



But, sometimes layering all these parts takes to much time, and doing everything “manually” when starting each project can be overwhelming and such repetitive work. And we as developers don’t like to spend time on the things that we need to repeat all over again, right? :wink" That’s why we will start using the application generator tool, **express-generator**, which will help us to quickly create an application skeleton.



## [Code Along - Library Project - Done Repo](<https://github.com/ross-u/Express-and-Mongoose---Library-Code-Along-done->)





## Generators

A generator is a **program that helps to create other application programs which can run on a particular platform**



<https://www.npmjs.com/package/express-generator>





```
npm init
npm i -g express-generator
```



```bash
express --view=hbs library
cd library
```



##### `package.json`

```json
// add
"start-dev": "nodemon ./bin/www"
```

`express-generator`  creates a skeleton and a `package.json` file for us. Notice the `din/www.js` file, which hods a file that is responsible for starting the server and listening on events that happen with the server.

Before running the server we have to run `npm install` to tell `npm` to install all the dependencies listen in the `package.json`.



```bash
code package.json
npm install


npm run start-dev
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
 ┗ 📜package.json
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





**app.js**

```js
...
const mongoose = require('mongoose');

// DB connection
mongoose.connect('mongodb://localhost/library', {useNewUrlParser: true})
    .then( (x) => console.log(`Connected to DB: "${x.connections[0].name}"`))
    .catch( (err) => console.error('Error connecting to mongo', err))

```







### Let's create one file that hold all the routes 

**app.js** - refactor it

```js
// Refactor app.js
const router = require('./routes/index');
...
	...
// as the last middleware

// ROUTER
app.use(router);

```





**routes/index.js**

```js
const express = require('express');
const router = express.Router();

const booksRouter = require('./books');


// Route books
router.use('/books', booksRouter);


// home route GET - renders the `index.hbs`
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home'})
});

module.exports = router;
```





**routes/books.js**

```js
// books router
const express = require('express');
const router = express.Router();


// GET /books
router.get('/', (req, res, next) => {
  console.log('IN GET /books');
  
  res.render('books');
});

module.exports = router;
```



<br>



##### `views/books.hbs`

```js
<h1>BOOKS</h1>
```

