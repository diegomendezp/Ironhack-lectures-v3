# Project - Library App

#### 

#### [Code Alone Instructions](https://github.com/ross-u/m2-code-alone-jsx-library-app)



## Finished Example



#### [Code Example - GitHub repo](https://github.com/ross-u/m2-library-app-example-done)



## Learning Goal

The purpose of this mini project is building a server-side rendered app from scratch. 

Database will be implemented with `mongoose` and the templating will be done with `express-react-views` view engine. 

The main purpose of the exercise is consolidating the knowledge acquired during the last few days.



#### What/How 

You will be working on this exercise together with another colleague, but on separate laptops following the steps outlined in this README.

Check often with your partner so that you are working on the same task and helping each other. If one of you is behind on one task, the person who is ahead should help so that you can overcome any blockers together.

Exercise is done only when both you and your partner as a pair successfully finish all the tasks.



<br>



Take time to thoroughly read all of the steps, focusing on both written instaructions and code example details.

We suggest that you write/type the code of the entire application on your own and restrain from  copy/pasting the examples. The main idea is to practice implementing the entire application from scratch. Writting/typing all of the code will give you the chance to strenghten your muscle memory and it as well forces you to read and understand the code that you are writting. What is the better way to learn than doing it on your own? :muscle:



<br>

<h2 style="background: cornflowerblue; margin-top: 20px">1</h2>

### Creating the initial project structure



During this module, we learned how to build our backend using **NodeJS** with **Express**, how to store our data in a **Mongo** database, how to use **Mongoose** (Object Document Mapper (ODM)) and render the views with **JSX (express-react-views)**. Combining all these, we are ready to close the circle and create **full-stack web applications**.



But, sometimes layering all these parts takes to much time, and doing everything “manually” when starting each project can be overwhelming and such repetitive work. And we as developers don’t like to spend time on the things that we need to repeat all over again, right? :wink: That’s why we will start using the application generator tool, **express-generator**, which will help us to quickly create the part of the initial application skeleton.



<br>



### Generators

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



<h2 style="background: cornflowerblue; margin-top: 20px">2</h2>

### Some dependencies are automatically included

`express-generator`  creates a skeleton and a `package.json` file for us. Notice the `bin/www.js` file, which hods a file that is responsible for starting the server and listening on events that happen with the server.

Before running the server we have to run `npm install` to tell `npm` to install all the dependencies added by `express-generator` in the `package.json`.



#### Install the dependencies



```bash
# Install all of the dependencies included by express-generator
npm install

# Install nodemon as a dev dependency
npm install --save-dev nodemon
```



<br>





#### Add the command alias for `nodemon`

##### `package.json`

```json
// add
"start:dev": "nodemon -e '*' ./bin/www"
```



<br>



#### Manually add the `views/` folder and the template files



```bash
# Run the below command while in the root folder of the project

mkdir views/ models/

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

<h2 style="background: cornflowerblue; margin-top: 20px">3</h2>

### Folder Structure



After finishing with the above steps, your project structure should look like this:



```
📦 00-library-app
 ┃
 ┣ 📂bin
 ┃ ┗ 📜www
 ┃
 ┣ 📂models/
 ┃
 ┣  📂public
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
 ┗ 📜package.json
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

  - *Layout.jsx* - a layout file created by default.

    

- **public** - a folder to store all our static files. 

In the `app.js`the basic set up is already done and all static files are served from public folder.



<br>



<h2 style="background: cornflowerblue; margin-top: 20px">4</h2>

#### Install `mongoose` , `dotenv` and  the view engine and configure them



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

In this step we will add `dotenv` and configure it, as well as adding the `mongoose` connection and all the other middleware our app needs.

You should add the below content to the already existing code in `app.js`.

##### `app.js`

```js
require('dotenv').config();  	// <== ADD AT THE TOP OF THE FILE
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



<h2 style="background: cornflowerblue; margin-top: 20px">5</h2>



#### Create the JSX  Layout component

##### `views/Layout.jsx`

```jsx
const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Books App</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
}

module.exports = Layout;
```





<br>

#### Create the JSX Home view 

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



<h2 style="background: cornflowerblue; margin-top: 20px">6</h2>



### Router files setup

During this project we will be follwing the best practices and striving to make our server-side code as modular as possible. 

 This means that our server logic that in the past lectures and LABs we used to write only in the `app.js` will now be separated in few modules. 

We do this  to make our code cleaner, easier to navigate and in order to have a clear separation of concerns/responsibilities between files.



#### Using routers

Our `app.js` will be receiving all of the incoming requests. It has middleware that runs for each and every request. In addition to this `app.js` will be forwarding each request to another file, representing a specific route, called router.

We will be handling the routes logic inside of these router files.

First we need to slightly edit the code created by the `express-generator` and add our code instead.



#### Create the `booksRouter`

We will first need only one router file, so let's create it:



```bash
touch routes/booksRouter.js
```



We should remove few parts of code created by the `express-generator` and connect our newly created `booksRouter` used to handle all of the incoming requests that start with the route `/books`:

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





#### Visit [localhost:3000/](http://localhost:3000/)	- Home page / view

#### Visit [localhost:3000/books](http://localhost:3000/books) - Books page / view



<br>

<h2 style="background: cornflowerblue">7</h2>



## Creating the models and referencing documents



#### Create the models and schema files

Create additional directori ynd files for Models and schemas.



```bash
mkdir schemas

touch models/Author.model.js 
touch models/Book.model.js

touch schemas/reviewSchema.js
```



<br>



When creating `mongoose` Schema for a model, we can pass a second argument to the `new Schema()`, an options object with the[ `timpestamps` setting](    // https://mongoosejs.com/docs/guide.html#timestamps). 

This will tell the mongoose to automatically create fields `created_at` and `updated_at` for each new document and store the date and time when document was created or last updated.



##### `models/Book.model.js`

```js
// models/Book.model.js
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

// CREATE	THE SCHEMA
const bookSchema = new Schema(
  {
    title: String,
    description: String,
    rating: Number,
    authors: [ 
      { type : Schema.Types.ObjectId, ref: 'Author' } 
    ],
  },
  {
    timestamps: {
      // https://mongoosejs.com/docs/guide.html#timestamps
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// CREATE THE MODEL
const Book = mongoose.model("Book", bookSchema);


// EXPORT THE MODEL
module.exports = Book;



```



Our Book schema is having a field `authors: [{ type : Schema.Types.ObjectId, ref: 'Author' } ]` referencing the documents from another collection, precisely the documents from the `authors` collection handled by the `Author` model which we will create in the next step.



Instead of stroing the author object within the field, we will handle authors by saving the objects in their own collection of `authors` and then using their id's to reference them in connection to a particular book.



<br>



##### `models/Author.model.js`

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE THE SCHEMA
const authorSchema = new Schema({
  name: String,
  lastName: String,
  nationality: String,
  birthday: Date,
  pictureUrl: String,
});

// CREATE THE MODEL
const Author = mongoose.model("Author", authorSchema);


// EXPORT THE MODEL
module.exports = Author;

```





<br>

<h2 style="background: cornflowerblue">8</h2>



### Creating the seeding file - `seed.js`

In this step we will be creating the seed for our database. Seed is a file used during the development to populate the database with fictitious data used during the development for testing. 

The purpose is to create a sandbox, safe environment, in which a developer can safely interact with the database and delete, modify etc. (CRUD) the data without the fear of affecting the production database.

Mock database created by the seed enables the developers to test their application in conditions and with data that closely mimics the "real thing" (the production), but without the danger of accidentaly dropping or affecting the live/production database.



#### Create the files holding the mock data used for seeding

```bash
touch bin/books-mock-data.js
touch bin/authors-mock-data.js
```



<br>



Take the follwing code containing an array of objects representing books and paste it to the `bin/books-mock-data.js`:



##### `bin/books-mock-data.js`

```js
const books = [
  {
    title: 'The Hunger Games',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Suzanne Collins',
    rating: 10,
  },
  {
    title: 'Harry Potter',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'J.K. Rowling ',
    rating: 9,
  },
  {
    title: 'To Kill a Mockingbird ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Harper Lee',
    rating: 8,
  },
  {
    title: 'Pride and Prejudice ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Jane Austen',
    rating: 9,
  },
  {
    title: 'Twilight',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Stephenie Meyer ',
    rating: 10,
  },
  {
    title: 'The Book Thief ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Markus Zusak',
    rating: 7,
  },
  {
    title: 'The Chronicles of Narnia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'C.S. Lewis',
    rating: 8,
  },
  {
    title: 'Animal Farm',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'George Orwell',
    rating: 9,
  },
  {
    title: 'Gone with the Wind ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Margaret Mitchell',
    rating: 10,
  },
  {
    title: 'The Fault in Our Stars ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'John Green',
    rating: 8,
  },
];


// EXPORT THE `books` VARIABLE
module.exports = books;


```

#####  

<br>

Take the follwing code containing an array of objects representing authors and paste it to the `bin/authors-mock-data.js`:



##### `bin/authors-mock-data.js`

```js
const authors = [
  {
    name: "Suzanne",
    lastName: "Collins",
    nationality: "American",
    birthday: new Date(1962, 07, 11),
    pictureUrl:
      "https://www.thefamouspeople.com/profiles/images/suzanne-collins-3.jpg",
  },
  {
    name: "Joanne",
    lastName: "Rowling",
    nationality: "English",
    birthday: new Date(1965, 06, 31),
    pictureUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDE3OTI3MDI2MTkw/jk-rowling_editedjpg.jpg",
  },
  {
    name: "Harper",
    lastName: "Lee",
    nationality: "American",
    birthday: new Date(1926, 03, 28),
    pictureUrl:
      "https://cdn.cnn.com/cnnnext/dam/assets/150710115858-harper-lee-c1-exlarge-169.jpg",
  },
  {
    name: "Jane",
    lastName: "Austen",
    nationality: "English",
    birthday: new Date(1817, 11, 16),
    pictureUrl:
      "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNTQ2ODcxMzA5/jane-austen-9192819-1-402.jpg",
  },
  {
    name: "Sthephenie",
    lastName: "Meyer",
    nationality: "American",
    birthday: new Date(1973, 11, 24),
    pictureUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Stephenie_Meyer_by_Gage_Skidmore.jpg/1200px-Stephenie_Meyer_by_Gage_Skidmore.jpg",
  },
  {
    name: "Markus",
    lastName: "Zusak",
    nationality: "Australian",
    birthday: new Date(1975, 05, 23),
    pictureUrl: "https://images.penguinrandomhouse.com/author/59222",
  },
  {
    name: "Suzanne",
    lastName: "Lewis",
    nationality: "British",
    birthday: new Date(1898, 10, 29),
    pictureUrl:
      "https://media1.britannica.com/eb-media/24/82724-004-C01DBECB.jpg",
  },
  {
    name: "George",
    lastName: "Orwell",
    nationality: "Indian",
    birthday: new Date(1903, 05, 25),
    pictureUrl:
      "https://www.biography.com/.image/t_share/MTIwNjA4NjMzOTMzNjI4OTQw/george-orwell-9429833-1-4022.jpg",
  },
  {
    name: "Margaret",
    lastName: "Mitchell",
    nationality: "American",
    birthday: new Date(1900, 10, 08),
    pictureUrl:
      "https://media1.britannica.com/eb-media/13/153113-004-8474546E.jpg",
  },
  {
    name: "John",
    lastName: "Green",
    nationality: "American",
    birthday: new Date(1977, 07, 24),
    pictureUrl:
      "https://i.guim.co.uk/img/media/8a5dc5e279a570fdba282c88d4a2a363a38bc2e4/0_96_4768_2860/master/4768.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=33c90ed86c41e7d9e2a4297936a2e504",
  },
];

module.exports = authors;

```





<br>



#### Create a seed sequence file

```bash
touch bin/seed.js
```



In this file we will create the seeding sequence which when run will populate our database by inserting some mock data into it.

<br>



##### `bin/seed.js`

```js
// bin/seed.js
const mongoose = require("mongoose");
const Book = require("./../models/Book.model");
const Author = require("./../models/Author.model");

const books = require("./books-mock-data");
const authors = require("./authors-mock-data");

const DB_NAME = "library";

// SEED SEQUENCE

// 0. ESTABLISH CONNECTION TO MONGO DATABASE
mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
  })
  .then((x) => {
    // 1. DROP THE DATABASE
    const pr = x.connection.dropDatabase();

    return pr;
  })
  .then(() => {
    // 2.  CREATE THE DOCUMENTS FROM ARRAY OF authors
    const pr = Author.create(authors);
    return pr; // forwards the promise to next `then`
  })
  .then((createdAuthors) => {
    console.log(`Created ${createdAuthors.length} authors`);

    // 3. WHEN .create() OPERATION IS DONE
    // UPDATE THE OBJECTS IN THE ARRAY OF books

    const updatedBooks = books.map((bookObj, i) => {
      // Update the bookObj and set the corresponding author id
      // to create the reference
      const author = createdAuthors[i];
      bookObj.authors = [author._id];

      return bookObj; // return the updated bookObj
    });

    const pr = Book.create(updatedBooks);
    return pr; // forwards the promise to next `then`
  })
  .then((createdBooks) => {
    // 4. WHEN .create() OPERATION IS DONE, CLOSE DB CONNECTION
    console.log(`Inserted ${createdBooks.length} books`);

    mongoose.connection.close();
  })
  .catch((err) => console.log(err));


```





<br>



#### Run the seed / populate the database

```bash
node bin/seed.js
```





<br>



<h2 style="background: cornflowerblue">9</h2>



## Setting up everything 



In the follwing steps we will start creating the views containing forms. We will be creating the routes to render each of the views and as well the routes used to handle the data coming from the forms.



<br>



<h2 style="background: cornflowerblue">10</h2>

### Update the `/books GET` route - display all books

As we now have our database ready and populated with the mock data that we can display, let's go and update the route that is rendering the `Books` view so that it shows the list of all the books.



##### `routes/booksRouter.js`

```js
// routes/booksRouter.js

// GET /books
router.get('/', (req, res, next) => {
  
  //   res.render("Books");    // <== REMOVE
  
  Book.find()
    .then(allBooksFromDB => {
    	const props = { books: allBooksFromDB }
      res.render('books', props )
  	})
    .catch(err => console.log(err));
});
```



<br>



#### Update `Books.jsx` to display all the books

##### `views/Books.jsx`

```jsx
const React = require("react");
const Layout = require("./Layout");

function Books( props ) {
  return (
    <Layout>
      <h1>Books Page</h1>
      
      { 
        props.books.map( ( oneBook) => {
          return(
            <p className='book-title'>

              <a 
                href={ `/books/edit?bookid=${oneBook._id}` } 
                className="edit-button"
               >
                EDIT
              </a>
              <a href={`/books/details/${oneBook._id}`}> {oneBook.title} </a>

            </p>
          	)
      	})
      
      }
      
    </Layout>
  );
}


module.exports = Books;

```







### Edit the button style



You can add the following **css** to the `style.css` file, so that we can differentiate the **edit** button from the rest of the text in the `Books` view.



##### `public/stylesheets/style.css`

```css
.edit-button {
  margin-right:20px; 
  color: #fff;
  text-decoration: none;
  padding: 4px 15px;
  background-color: grey;
  border-radius: 6px;
}

.book-title a {
  font-size: 20px;
  text-decoration: none;
  color: black;
}
```



<br>



<h2 style="background: cornflowerblue">11</h2>

#### Create and render the `AddBook` view

Now, **create a new route `/books/add`** in the `booksRouter.js` file that should render a `AddBook.jsx`  view displaying a `<form>` for adding the new books. 



##### `routes/booksRouter.js`

```js
// books router
const express = require('express');
const router = express.Router();

//	...
//			...


// GET /books/add
booksRouter.get('/add', function(req, res, next) {
  res.render('AddBook');
});

module.exports = router;
```



<br>



#### Create the `AddBook.jsx` view

##### `views/AddBook.jsx`

```jsx
const React = require("react");
const Layout = require("./Layout");

function AddBook() {
  return (
    <Layout>

      <form action="/books/add" method="POST">
        <label>Title:</label>
        <input type="text" name="title" />
        <br />

        <label>Author:</label>
        <input type="text" name="author" />
        <br />

        <label>Description:</label>
        <input type="text" name="description" />
        <br />

        <label>Rate:</label>
        <input type="number" name="rating" />
        <br />

        <button type="submit">ADD</button>
      </form>

    </Layout>
  );
}

module.exports = AddBook;

```



<br>

<h2 style="background: cornflowerblue">12</h2>

#### Create `POST` route for receiving the data from the `AddBook` form



Next step is creating the route  **`POST  /books/add`** which will be receiving the POST data coming from the  `AddBook`  `<form>`.

We will need to import the `Book` model to the `booksRouter.js` as we will need it in order to save the form data to our database.

After we insert/create the new book document, we want to `redirect` the user back to the page with all of the books. 



That is why you'll see in the code snippet below  that we used `res.redirect('/books')`. This will send the response and trigger the browser to redirect to the route that is specified in the `res.redirect` which in this case is `/books`.



##### `routes/books.js`

```js
// routes/books.js

//	...


// IMPORT THE MODEL 
const Book = require('./../models/Book.model');


//		...

//			...





// POST	/books/add
booksRouter.post('/add', (req, res, next) => {
  
  // Destructure the values coming from the POST form
  const { title, author, description, rating } = req.body;
  
  // or 
  Book.create({ title, author, description, rating })
  	.then( (book) => {
      res.redirect('/books')
  	})
    .catch( (err) => console.log(err));
  
});
```



<br>



In order to be able to read the body of the POST HTTP message, coming from the **`POST /books/add`** request we have to setup the `body-parser` middleware.

First stop the server. 

Then `require` the `body-parser` package at the top of the `app.js` file after the other module imports.

Then, set the `body-parser` middleware after the existing middleware, as shown below:



##### `app.js`

```js
// ...

// ...

const bodyParser = require('body-parser');  // <== REQUIRE `body-parser`

// ...

// ...


// MIDDLEWARE
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ADD THE BODY PARSER RIGHT AFTER THE OTHER MIDDLEWARE:

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));   // <== ADD
 
// parse application/json
app.use(bodyParser.json());            // <== ADD


// ...

// ...
```





<br>



#### Test the creation of the books

Restart the server after you are done with the above step and check if the `AddBook` form on the [localhost:3000/books/add](http://localhost:3000/books/add) is correctly working and creating the new books in the database.







<br>

<h2 style="background: cornflowerblue">13</h2>



After implementing the code from the above steps the `routes/booksRouter.js` router file should now have 3 routes and should look like this:



##### `routes/books.js`

```js
const express = require("express");
const booksRouter = express.Router();

const Book = require("./../models/Book.model");
const Author = require("./../models/Author.model");


// GET /books
booksRouter.get("/", function (req, res, next) {
  
  Book.find()
    .then((allBooksFromDB) => {
      const props = { books: allBooksFromDB };
    
      res.render("Books", props);
    })
    .catch((err) => console.log(err));
});


// GET /books/add
booksRouter.get("/add", function (req, res, next) {
  res.render("AddBook");
});


// POST	/books/add
booksRouter.post("/add", (req, res, next) => {
  const { title, author, description, rating } = req.body;

  Book.create({ title, author, description, rating })
    .then((book) => {
        res.redirect("/books");
    })
    .catch((err) => console.log(err));
});


module.exports = booksRouter;

```





<br>



<h2 style="background: cornflowerblue">14</h2>

### Create the `EditBook` view and route



This route will render the  **<u>EditBook view</u>** containing the edit form. 

When user clicks on the EDIT button next to the book title, Edit Book page with `<form>` will show.



<br>



##### `routes/booksRouter.js`

```js
// routes/booksRouter.js

//	...
//		...


// GET  /books/edit
booksRouter.get('/edit', (req, res, next) => {
  // Get the bookid passed via the link. 
  // Example:    <a href="/books/edit?bookid=123">
  const { bookid } = req.query;
  
  // Find the specific book by `_id`
  Book.findOne( { _id: bookid } )
    .then((oneBook) => {
       const props = { oneBook: oneBook };
       res.render( 'EditBook', props )
  	})
    .catch((err) => console.log(err));
});
```





<br>



### Create the Edit form



```bash
touch views/EditBook.jsx
```



We need to create the edit form, where the user will be able to modify the info of each book.

Our form should be sending the data through  the request body and that is why we will be using the `POST` method.



<br>



##### `views/EditBook.jsx`

```jsx
const React = require("react");
const Layout = require("./Layout");


function EditBook (props) {
  
  return (
    <Layout>

      <form action="/books/edit" method="POST">
        <label>Title:</label>
        <input type="text" name="title" />
        <br />

        <label>Author:</label>
        <input type="text" name="author" />
        <br />

        <label>Description:</label>
        <input type="text" name="description" />
        <br />

        <label>Rate:</label>
        <input type="number" name="rating" />
        <br />

        <button class="edit-button" type="submit">
          EDIT
        </button>
      </form>

    </Layout>
  );
}


module.exports = EditBook;

```



<br>

<h2 style="background: cornflowerblue">15</h2>

#### Update the `EditBook` form to show the book information



- Embed the book `_id` in the form's action URL as a query string, in order to be able to send the _id together with the other info coming from the inputs, to the `POST /books/edit` route.

- Add the input `value` attribute to all of the `input` fields in order to show the current book info in the form when it renders.

  <br>

  

##### `views/EditBook.jsx`

```jsx
const React = require("react");
const Layout = require("./Layout");

function EditBook(props) {
  return (
    <Layout>
      
      <form action={`/books/edit?bookid=${props.oneBook._id}`} method="POST">
        
        <label>Title:</label>
        <input type="text" name="title" value={props.oneBook.title}/>
        <br />

        <label>Author:</label>
        <input type="text" name="author" value={props.oneBook.author}/>
        <br />

        <label>Description:</label>
        <input type="text" name="description"  value={props.oneBook.description}/>
        <br />

        <label>Rate:</label>
        <input type="number" name="rating"  value={props.oneBook.rating}/>
        <br />

        <button class="edit-button" type="submit">
          EDIT
        </button>
        
      </form>
      
    </Layout>
  );
}


module.exports = EditBook;

```



<br>



<h2 style="background: cornflowerblue">16</h2>



### Create the `POST` route for handling the EditBook form data

<br>

You need a new route which will be getting the data coming from the Edit form and then calling the database to update the specific book. 

Go and create the below route in the `booksRouter.js` file.

##### `routes/booksRouter.js`

```js
// routes/booksRouter.js

//	...

//	...

// POST  /books/edit
booksRouter.post("/edit", (req, res, next) => {
  const { bookid } = req.query;
  const { title, author, description, rating } = req.body;

  Book.findByIdAndUpdate(
    bookid,
    { title, author, description, rating },
    { new: true }   
    //{new : true} is used to get the updated document version returned after the update
  )
    .then((updatedBook) => {
    	console.log('book document after the update', updatedBook );
      res.redirect("/books")
    })
    .catch((error) => console.error(error));
});
```



In the above example with `Book.findByIdAndUpdate` we are using 3 arguments. 

The third argument ` { new: true }` is used as an option, specifying that the newly updated object should be returned after the update is done. 

If `{ new: true }` option argument is not specified `mongoose` will update the document, but will return the previous old document with the state before the update.



<br>





<h2 style="background: cornflowerblue">16</h2>

### Create the `BookDetails` compoent and route 

<br>



Create a new route in the  that uses the **param** `bookId` to dynamically caputre the book id value.



##### `routes/booksRouter.js`	

```js
// routes/booksRouter.js

//	...

//	...


// GET /books/details/:bookId
booksRouter.get("/details/:bookId", (req, res, next) => {
  const { bookId } = req.params;

  Book.findById(bookId)
    .then((oneBook) => {
       const props = { oneBook: oneBook };

       res.render("BookDetails", props);
    })
    .catch((err) => console.log("Error retrieving book details: ", err));
});

```



We are using `findById` instead of `find` because `find` returns an array. 

<br>





### Create a new view `BookDetails.jsx`



```bash
touch views/BookDetails.jsx
```



<br>



##### `views/BookDetails.jsx`

```jsx
const React = require("react");
const Layout = require("./Layout");

function BookDetails(props) {
  return (
    <Layout>
      <h1>{props.oneBook.title}</h1>

      <ul>
        <span>Written by:</span>
        {props.oneBook.authors.map((oneAuthor, i) => {
          return (
            <li key={i}> 
              {oneAuthor.name} {oneAuthor.lastName} 
            </li>
          );
        })}
      </ul>

      <p>Summary: {props.oneBook.description}</p>

      <p>Rating: {props.oneBook.rating}/10</p>

      <a class="return-button" href="/books">
        Return
      </a>
    </Layout>
  );
}

module.exports = BookDetails;

```



<br>





### Add style to the return button, in the book details view

##### `public/stylesheet.style.css`

```css
.return-button {
  margin-right:20px; 
  color: #fff;
  text-decoration: none;
  padding: 8px 25px;
  background-color: rgba(37, 37, 197, 0.63);
  border-radius: 4px;
  font-size: 18px;
}
```





<br>



#### In the browser, visit the `/books` page and select a book to see the `BookDetails` view



<br>



<h2 style="background: cornflowerblue">17</h2>



## Populating fileds holding ids



#### Populate the `authors` field holding the ids to convert them into documents



As you can see the **Written by** part is currently empty. The reason for this is that the `props.oneBook.authors` holds only the document reference ids, and not the actual author documents.

We have to exchange those ids for the actual documents, before rendering the `BookDetails` view. 

In order to exchange the reference ids for the actual documents you need to update the `/ GET /books/details/:bookId` route:



##### `routes/booksRouter.js`

```js
// GET /books/details/:bookId
booksRouter.get("/details/:bookId", (req, res, next) => {
  const { bookId } = req.params;

  Book.findById(bookId)
    .populate('authors')                   // <===  ADD .populate('authors')
    .then((oneBook) => {
      const props = { oneBook: oneBook };

      res.render("BookDetails", props);
    })
    .catch((err) => console.log("Error retrieving book details: ", err));
});
```



`.populate()` should be chained right after the operation that returns the document. In this case we chain it right after the `Book.findById(bookId).`

`.populate()`  takes the name of the field in the document, and the goes to convert all the ids stored in that field with the documents coming from the referenced collection.

 In our case we set the `Book` model's `authors` field to be stroing the reference ids of the documents coming from the `authors` collection controlled by the `Author` model. We did it in the first steps when creating the `Book` model:

```js
    authors: [
      { type: Schema.Types.ObjectId, ref: "Author" }
    ],
```



<br>



<h2 style="background: cornflowerblue">18</h2>



### Create the `AddAuthor.jsx`  component -  form

To enable the adding of the authors to the created book, let's create a component holding a smaller edit form.



First you will need to create the folder for all smaller components.

```bash
mkdir views/components
```



Then, create the `AddAuthor.jsx` file for the component we will be creating in the next step:

```bash
touch view/components/AddAuthor.jsx
```





##### `views/AddAuthor.jsx`

```jsx
const React = require("react");

function AddAuthor( props ) {
  return (
    <form action={`/authors/add?bookid=${props.idOfTheBook}`} method="POST">
      
      <label>Title:</label>
      <input type="text" name="title" />
      <br />

      <label>Author:</label>
      <input type="text" name="author" />
      <br />

      <label>Description:</label>
      <input type="text" name="description" />
      <br />

      <label>Rate:</label>
      <input type="number" name="rating" />
      <br />

      <button type="submit">ADD</button>
      
    </form>
  );
}


module.exports = AddAuthor;

```



We have passed `props` as the argument and set the form `action` URL using the `props.idOfTheBook`. This will be the prop value that we will inject to the `<AddAuthor />` from the `EditBook` component, in the next step.



<br>



<h2 style="background: cornflowerblue">19</h2>



#### Add the new component `<AddAuthor />` to the `EditBook` view.



Let's add the newly created component `AddAuthor` to the  `EditBook` view that we are already rendering. We will add it at the bottom of the `EditBook` view so that it displays when editing the book, enabling the user to add authors to the book.

We will be passing a prop `idOfTheBook` to the `AddAuthor` component:

```jsx
<AddAuthor idOfTheBook={ props.oneBook._id }  />
```





##### `views/EditBook.jsx`

```jsx
const React = require("react");
const Layout = require("./Layout");
const AddAuthor = require('./components/AddAuthor');

function BookEdit(props) {
  return (
    <Layout>
      <form action={`/books/edit?bookid=${props.oneBook._id}`} method="POST">
        <label>Title:</label>
        <input type="text" name="title" value={props.oneBook.title} />
        <br />

        <label>Author:</label>
        <input type="text" name="author" value={props.oneBook.author} />
        <br />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={props.oneBook.description}
        />
        <br />

        <label>Rate:</label>
        <input type="number" name="rating" value={props.oneBook.rating} />
        <br />

        <button class="edit-button" type="submit">
          EDIT
        </button>
      </form>


      
      <h3>Add An Author:</h3>                {/* <== ADD */}
      
      <AddAuthor 														   {/* <== ADD */}
        	idOfTheBook={props.oneBook._id} 		 {/* <== INJECT THE PROP idOfTheBook */}
       /> 
      
    </Layout>
  );
}

module.exports = BookEdit;

```



<br>



<h2 style="background: cornflowerblue">20</h2>

#### Create the new router file `routes/authorsRouter.js`



As we start handling the new set of routes starting with `/authors` we should create a new router file used only to handle these specific routes and requests.



```bash
touch routes/authorsRouter.js
```





Below you will find the complete setup of the `authorsRouter` plus the route that we will need for our little `AddAuthor` sub-form component.



##### `routes/authorsRouter.js`

```js
// routes/authors.js

const express = require('express');
const router = express.Router();
const Book = require('./../models/Book.model');
const Author = require('./../models/Author.model');



// POST /authors/add
router.post('/add', (req, res, next) => {
  
  const { bookid } = req.query;
  
  const { name, lastName, nationality, birthday, pictureUrl } = req.body;
  // Above destructuring is same as doing:
  // const name = req.body.name;
  // const lastName = req.body.lastName;
  // const nationality = req.body.nationality;
  // const birthday = req.body.birthday;
  // const pictureUrl = req.body.pictureUrl;
  
  // First we create the new author
  Author.create({ name, lastName, nationality, birthday, pictureUrl})
  	.then((createdAuthor) => {
    		// Then we update the book we are editing 
    
    		const pr = Book.findByIdAndUpdate(
          bookid, 
          { $push: {authors: createdAuthor._id }  },
          { new: true }
        );
           
        return pr;
    })
    .then( (updatedBook) => {
    		res.redirect(`/books/details/${updatedBook._id}` );
    })
  	.catch((error) => console.log(error));
});


module.exports = router;
```



<br>



#### Update `app.js` - connect the `authorsRouter` 

After creating the `authorsRouter` we also have to connect it so that server can start forwarding any requests starting with the endpoint `/authors` to this router.

Head to `app.js` and update the file to connect the new router as shown below:

##### `app.js`

```js
//	...

//	...

const booksRouter = require('./routes/booksRouter');
const authorsRouter = require('./routes/authorsRouter');    //  <---- REQUIRE THE ROUTER 


// ROUTES
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);						//  <---- ADD


//	...

//	...
```





<br>



<h2 style="background: cornflowerblue">21</h2>

### Bonus:



#### Create the `<AddReview />` component 

Create the `<AddReview />` component which will be used in the `BookDetails` view. You should also update the `Book` model and add the new field `reviews` which will be used to store users' reviews.

`<AddReview />` component should function on the same principle as the `<AddAuthor />` component and you should also create a new router file `routes/reviewsRouter.js` used to handle the data coming from the form component `<AddReview />`.







<br>













