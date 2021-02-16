# 01 - Mongoose&Express - Create - Read - Update





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





### Creating a seeding file

In this step we will be creating the seed for our database. Seed is a file used during the development to populate the database with fictitious data used during the development for testing. 

The purpose is to create a sandbox, safe environment, in which a developer can safely interact with the database and delete, modify etc. (CRUD) the data without the fear of affecting the production database.

Mock database created by the seed enables the developers to test their application in conditions and with data that closely mimics the "real thing" (the production), but without the danger of accidentaly dropping or affecting the live/production database.



#### Create a file holding the mock data used for seeding

```bash
touch bin/books-mock-data.js
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



## Setting up everything





<br>



### Update the `/books GET` to display all the books from the database

As we now have our database ready and populated with the mock data that we can display, let's go and update the route rendering the `Books` view so that it shows the list of all the books.



##### `routes/booksRouter.js`

```js
// routes/books.js

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



### Update `books.hbs` to display all the books

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



#### Create `POST` route in the `routes/books.js`



Next step is creating the route  **`POST  /books/add`** which will be receiving the POST data coming from the `<form>` of the  `AddBook` view.

We will need to import the `Book.model.js` as we will be saving the form data in our database.

After we insert/create the new book document, we want to `redirect` back to the page with all the books. That is why in the below code that you will implement, you'll see that we used `res.redirect('/books')`. This will send back the response and as well trigger the browser to redirect and make another request to the page that we specified in `res.redirect` which in this case is `/books`.



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



In order for us to be able to read the body of the POST HTTP message, coming during the **`POST /books/add`** request we have to setup the `body-parser` middleware.

First you will have to stop the server and update the `app.js` in order to set the middleware that will be decrytping the POST requests.





First `require` the `body-parser` package at the top of the `app.js` file after the other module imports.

Then, set the body.parser middleware after the existing middleware, but before any routes or router

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

Restart the server after you are done with the above update and check if the `AddBook` form on the [localhost:3000/books/add](http://localhost:3000/books/add) is correctly working and creating the new books in the database.



<br>







































<br>



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





### Create `/books/edit` route



This route will render the  **<u>Edit Book `<form>`</u>**. 

When user clicks on the EDIT button next to the book title, Edit Book page with `<form>` will show.



<br>



##### `routes/books.js`

```js
// routes/books.js

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



### Create the `POST` route to update the Document.

<br>

The below route should get the data coming from the Edit form and then call to the database to update the specific book. 

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



In the above database update operation `Book.findByIdAndUpdate` we are using 3 arguments. The third argument ` { new: true }` is used as an option telling to `mongoose` to return the newly updated object. 

If `{ new: true }` option argument is not specified `mongoose` will update the document, but will return the previous old document with the state before the update.



<br>



### Create the book details route 

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



#### Populate the `authors` field holding the ids to convert them into documents



As you can see the **Written by** part is currently empty. The reason for this is that the `props.oneBook.authors` holds only the document reference ids, and not the actual author documents.

We have to exchange those ids for the actual documents, before rendering the `BookDetails` view. For this you need to update the `/ GET /books/details/:bookId` route like this:



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



<br>



### Create the `AddAuthor.jsx`  component -  form

To enable adding additional authors to the created book, let's create a component holding a smaller edit form.



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



Take a note that we have passed `props` as the argument and set the form `action` URL using the `props.idOfTheBook`. This will be the prop value that we will inject to the `<AddAuthor />` from the `EditBook` component, in the next step.



<br>



#### Add the new component `<AddAuthor />` to the `EditBook` view.



Let's add the newly created component `AddAuthor` to the view that we are already rendering. We will add it to the bottom of the `EditBook` view so that it displays when editing the book, enabling the user to add the authors to the book.

We have to pass the prop containing the book id to the `AddAuthor` component. Pay attention on how we will be doing it, as we explain it in the next paragraph. 

We will be passing the new prop `idOfTheBook` to the `AddAuthor` compnent containing the id of the book being edited, by writting `<AddAuthor idOfTheBook={ props.oneBook._id }  /> `.



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





### Bonus:



#### Create the `<AddReview />` component 

Create the `<AddReview />` component which will be used in the `BookDetails` view. You should also update the `Book` model and add the new field `reviews` which will be used to store users' reviews.

`<AddReview />` component should function on the same principle as the `<AddAuthor />` component and you should also create a new router file `routes/reviewsRouter.js` used to handle the data coming from the form component `<AddReview />`.







<br>



