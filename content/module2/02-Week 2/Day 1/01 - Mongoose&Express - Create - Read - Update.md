# 01 - Mongoose&Express - Create - Read - Update





## Creating a model



**models/book.js**

```js
// models/book.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  description: String,
  author: String,
  rating: Number
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
```







### Creating a seed file

```js
// bin/seed.js

const mongoose = require('mongoose');
const Book = require('../models/book');

const dbName = 'library';
mongoose.connect(`mongodb://localhost/${dbName}`);

const books = [
  {
    title: "The Hunger Games",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Suzanne Collins",
    rating: 10
  },
  {
    title: "Harry Potter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "J.K. Rowling ",
    rating: 9
  },
  {
    title: "To Kill a Mockingbird ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Harper Lee",
    rating: 8
  },
  {
    title: "Pride and Prejudice ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Jane Austen",
    rating: 9
  },
  {
    title: "Twilight",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Stephenie Meyer ",
    rating: 10
  },
  {
    title: "The Book Thief ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Markus Zusak",
    rating: 7
  },
  {
    title: "The Chronicles of Narnia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "C.S. Lewis",
    rating: 8
  },
  {
    title: "Animal Farm",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "George Orwell",
    rating: 9
  },
  {
    title: "Gone with the Wind ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Margaret Mitchell",
    rating: 10
  },
  {
    title: "The Fault in Our Stars ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "John Green",
    rating: 8
  }
]

Book.create(books, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${books.length} books`)
  mongoose.connection.close();
});
```





## Run the seeding / population of the database

```bash
node bin/seed.js
```







## Setting up everything

First, create a new route `books/add` on our `routes/index.js` file that should render a `book-add.hbs`. **Which method will we use?**



**routes/books.js**

```js
// books router
const express = require('express');
const router = express.Router();

router.get('/add', function(req, res, next) {
  console.log('IN ROUTER --> /books/add GET');
  res.render('book-add');
});

module.exports = router;
```





### Create a `book-add.hbs` file and edit the route

```html
<form action="/books/add" method="post">
  <label for="">Title:</label>
  <input type="text" name="title">
	<br>
  <label for="">Author:</label>
  <input type="text" name="author">
	<br>
  <label for="">Description:</label>
  <input type="text" name="description">
	<br>
  <label for="">Rate:</label>
  <input type="number" name="rating">
	<br>
  <button type="submit">ADD</button>
</form>
```



### Update `routes/books.js`

**routes/books.js**

```js
// routes/books.js

router.post('/add', (req, res, next) => {
  const { title, author, description, rating } = req.body;
  const newBook = new Book({ title, author, description, rating });
  
  newBook.save()
    .then( (book) => res.redirect('/books'))
    .catch( (err) => console.log(err));
});
```





### Update the `/books GET` to display all the books from the Database



**routes/books.js**

```js
// routes/books.js

// GET /books
router.get('/', (req, res, next) => {
  Book.find({})
    .then((allTheBooksFromDB) => res.render('books', {allTheBooksFromDB} ))
});
```



### Create `books.hbs` to display all the books

```html
<h1>BOOKS</h1>
{{#each allTheBooksFromDB}}
    <p class='book-title'>
        <a href="/books/edit?_id={{this._id}}" class="edit-button">EDIT</a>
        <a href="/books/details/{{this._id}}">{{this.title}}</a> 
    </p>
{{/each}}
```









### Edit button style

#### You can also add the following **css** to the `style.css` file, so we differentiate the **edit** button.

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









### Create `/books/edit` route - and find book by `_id`



**routes/books.js**

```js
// routes/books.js

// GET  /books/edit
router.get('/edit', (req, res, next) => {
  const { _id } = req.query;
  
  Book.findOne( { _id } )
    .then((book) => res.render( 'book-edit', {book} ))
    .catch((err) => console.log(err));
})
```







### Create Edit form

First, we need an edit form, where the user will be able to modify the info of each book.



**views/book-edit.hbs**

```html
<form action="/books/edit" method="POST">
  <label for="">Title:</label>
  <input type="text" name="title">
	<br>
  <label for="">Author:</label>
  <input type="text" name="author">
	<br>
  <label for="">Description:</label>
  <input type="text" name="description">
	<br>
  <label for="">Rate:</label>
  <input type="number" name="rating">
	<br>
  <button class="edit-button" type="submit">EDIT</button>
</form>
```







### Update Edit form to show passed data and query in the link



**views/book-edit.hbs**

```html
<form action="/books/edit?_id={{book._id}}" method="POST">
  <label for="">Title:</label>
  <input type="text" name="title" value="{{book.title}}">

  <label for="">Author:</label>
  <input type="text" name="author" value="{{book.author}}">

  <label for="">Description:</label>
  <input type="text" name="description" value="{{book.description}}">

  <label for="">Rate:</label>
  <input type="number" name="rating" value="{{book.rating}}">

  <button type="submit">EDIT</button>
</form>
```







### Update the Document



**routes/books.js**

```js
// POST  /books/edit
router.post('/edit', (req, res, next) => {
  const { title, author, description, rating } = req.body;

  Book.update( {_id: req.query._id}, { $set: {title, author, description, rating }}, { new: true })
    .then((book) => res.redirect('/books'))
    .catch((error) => console.log(error))
});
```











### Create a route for getting the book details (by `_id`) after clicking on the book title.





#### We are using `findById` instead of `find` because `find` returns an array, and we dont want one object alone in the array. 



**routes/books.js**	-	 create a new rout and update by **param** `bookId`

```js
// routes/books.js

// GET /books/details/:bookId
router.get('/details/:bookId', (req, res, next) => {
  
  Book.findById(req.params.bookId)
    .then( (book) => res.render('book-details', { book } ))
    .catch( (err) => console.log('Error retrieving book details: ', err ));
});
```







### Crate a view `book-details.hbs`



**views/book-details.hbs**

```html
<h1>{{book.title}}</h1>

<span>Written by: {{book.author}}</span>

<p>Summary: {{book.description}}</p>

<p>Rating: {{book.rating}}/10</p>

<a class="return-button" href="/books">Return</a>
```







### Add style to the review list

**public/stylesheet.style.css**

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













# Mongoose&Express | Documents Relationships







## Referencing documents

![](https://user-images.githubusercontent.com/23629340/36200116-e7fc4460-117b-11e8-8e10-a7cd4e3292b4.png)









### Author Schema

Let’s start creating our `Author` model. Inside our `models` folder add a `author.js` file and copy/paste the following code:



**models/author.js**

```js
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  lastName: String,
  nationality: String,
  birthday: Date,
  pictureUrl: String
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
```









### Update book model - set array of authors using reference

We also need to update our `Book` model, replacing the type of data we are assigning to the `author` field. Instead of `String`, now we will have an `Array` of `ObjectID` pointing to the `User`model. So we will have the following:



**models/book.js**

```js
// book model
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  description: String,
  author: [ { type : Schema.Types.ObjectId, ref: 'Author' } ],
  rating: Number
}, {
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
```









### - Create `authors.js` router,

### -  update `index.js` router to connect it, 

### - and create `author-add` view  for adding new authors





#### Create `routes/authors.js`

```js
// authors router
const express = require('express');
const router = express.Router();
const Author = require('./../models/author');

// GET  /authors/add
router.get('/authors/add', (req, res, next) => res.render("author-add"));

// POST  /authors/add
router.post('/authors/add', (req, res, next) => {
  const { name, lastName, nationality, birthday, pictureUrl } = req.body;
  const newAuthor = new Author({ name, lastName, nationality, birthday, pictureUrl})
  
  newAuthor.save()
  	.then((book) => res.redirect('/books'))
  	.catch((error) => console.log(error));
});

module.exports = router;
```





#### Update `routes/index.js`

```js
const express = require('express');
const router = express.Router();

const booksRouter = require('./books');
const authorsRouter = require('./authors');

// Routes
router.use('/books', booksRouter);
router.use('/authors', authorsRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


module.exports = router;
```







### Create `author-add.hbs` form

```html
<form action="/authors/add" method="POST">
  <label for="">Name:</label>
  <input type="text" name="name">
  <br>
  <label for="">Last Name:</label>
  <input type="text" name="lastName">
  <br>
  <label for="">Nationality:</label>
  <input type="text" name="nationality">
  <br>
  <label for="">Birthday:</label>
  <input type="date" name="birthday">
  <br>
  <label for="">Picture Url</label>
  <input type="text" name="pictureUrl">
  <br>
  <button type="submit">ADD</button>
</form>
```











### Create a new `seed2.js` file

```js
const mongoose = require('mongoose');
const Book = require('./../models/book');
const Author = require('./../models/author');

const dbtitle = 'library';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

// STEP 1 - drop existing collections
Book.collection.drop();
Author.collection.drop();

const books = [
  {
    title: "The Hunger Games",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: {
      "name": "Suzanne",
      "lastName": "Collins",
      "nationality": "American",
      "birthday": new Date(1962, 07, 11),
      "pictureUrl": "https://www.thefamouspeople.com/profiles/images/suzanne-collins-3.jpg"
    },
    rating: 10
  },
  {
    title: "Harry Potter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: {
      "name": "Joanne",
      "lastName": "Rowling",
      "nationality": "English",
      "birthday": new Date(1965, 06, 31),
      "pictureUrl": "https://www.biography.com/.image/t_share/MTE4MDAzNDE3OTI3MDI2MTkw/jk-rowling_editedjpg.jpg"
    },
    rating: 9
  },
  {
    title: "To Kill a Mockingbird",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: {
      "name": "Harper",
      "lastName": "Lee",
      "nationality": "American",
      "birthday": new Date(1926, 03, 28),
      "pictureUrl": "https://cdn.cnn.com/cnnnext/dam/assets/150710115858-harper-lee-c1-exlarge-169.jpg"
    },
    rating: 8
  },
  {
    title: "Pride and Prejudice",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: {
      "name": "Jane",
      "lastName": "Austen",
      "nationality": "English",
      "birthday": new Date(1817, 11, 16),
      "pictureUrl": "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNTQ2ODcxMzA5/jane-austen-9192819-1-402.jpg"
    },
    rating: 9
  },
  {
    title: "Twilight",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: {
      "name": "Sthephenie",
      "lastName": "Meyer",
      "nationality": "American",
      "birthday": new Date(1973, 11, 24),
      "pictureUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Stephenie_Meyer_by_Gage_Skidmore.jpg/1200px-Stephenie_Meyer_by_Gage_Skidmore.jpg"
    },
    rating: 10
  },
  {
    title: "The Book Thief",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: {
      "name": "Markus",
      "lastName": "Zusak",
      "nationality": "Australian",
      "birthday": new Date(1975, 05, 23),
      "pictureUrl": "https://images.penguinrandomhouse.com/author/59222"
    },
    rating: 7
  },
  {
    title: "The Chronicles of Narnia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: {
      "name": "Suzanne",
      "lastName": "Lewis",
      "nationality": "British",
      "birthday": new Date(1898, 10, 29),
      "pictureUrl": "https://media1.britannica.com/eb-media/24/82724-004-C01DBECB.jpg"
    },
    rating: 8
  },
  {
    title: "Animal Farm",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: {
      "name": "George",
      "lastName": "Orwell",
      "nationality": "Indian",
      "birthday": new Date(1903, 05, 25),
      "pictureUrl": "https://www.biography.com/.image/t_share/MTIwNjA4NjMzOTMzNjI4OTQw/george-orwell-9429833-1-4022.jpg"
    },
    rating: 9
  },
  {
    title: "Gone with the Wind ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: {
      "name": "Margaret",
      "lastName": "Mitchell",
      "nationality": "American",
      "birthday": new Date(1900, 10, 08),
      "pictureUrl": "https://media1.britannica.com/eb-media/13/153113-004-8474546E.jpg"
    },
    rating: 10
  },
  {
    title: "The Fault in Our Stars ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: {
      "name": "John",
      "lastName": "Green",
      "nationality": "American",
      "birthday": new Date(1977, 07, 24),
      "pictureUrl": "https://i.guim.co.uk/img/media/8a5dc5e279a570fdba282c88d4a2a363a38bc2e4/0_96_4768_2860/master/4768.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=33c90ed86c41e7d9e2a4297936a2e504"
    },
    rating: 8
  }
]


// STEP 2
// Map over the array `books` and for each book take it's author and insert it into `authors` collection
// and create a new array `createAuthors` which holds only names (String) of each author 
const createAuthors = books.map((book) => {
  const newAuthor = new Author(book.author);
  return newAuthor.save()
    .then(author => author.name)
    .catch(error => console.error(`Impossible to add the author. ${error}`));
});

// STEP 3
// After all authors are created `Promise.all(createAuthors)` 
// Map the data array `books`, and for each book replace `book.author` name with _id retrieved by `Author.findOne`
// Map creates a new array of updated book objects -> `updatedBooksArray` and at the end assigns it to `updatedBooksData` 
let updatedBookPromises = Promise.all(createAuthors)
  .then(() => {
    let updatedBooksArray = books.map((book) => {
      return Author.findOne({ name: book.author.name, lastName: book.author.lastName })
        .then((author) => Object.assign({}, book, { author: author._id }))  // Overwrites the original `book.author` name string, and puts author `_id`
    });
    return updatedBooksArray;
  })
  .catch(error => { throw new Error(error) });


// STEP 4
// updatedBookPromises holds all the promises, then we use Promise.all to resolve all those promises and forward the result via .then() in array `newUpdatedBooks`
// Insert all objects from `newUpdatedBooks` into the collection `books`
updatedBookPromises.then( (updatedBookPromises) => Promise.all(updatedBookPromises))
    .then((updatedBooks) => Book.create(updatedBooks))
    .then( (result) => result.forEach( (book) => console.log('Book inserted -> ', book.title)))
    .catch( (err) => console.log('Error while inserting all newUpdatedBooks', err));

```









#### Run the `node ./bin/seeds2.js` to update the DB

```bash
node ./bin/seeds2.js
```





#### The database should now show two different collections, `authors` and  `books`, 

#### Inside every `book` document, the `author` is now an array of `ObjectId`s.



```bash
$ mongo

> show dbs
> use library
> show collections

authors → 0.002MB / 0.016MB
books   → 0.006MB / 0.016MB

> db.books.find({}, {title: 1, author: 1, _id: 0})
...
```













### Populating the Author

**We have a problem now!**  instead of the `author` info, we see the `_id`, because that is what we are storing in our database.



![img](https://user-images.githubusercontent.com/23629340/36203383-ae6cda1e-1187-11e8-8289-2bbdb293ae47.png)



### We need to populate the `author` field on our `/book/:id` before sending the data to the view.



**Population** is the process of automatically replacing the specified paths in the document with document(s) from other collection(s).





### Update `routes/books.js` -  

### /details/:bookId	

```js
// GET  /books/details/:bookId
router.get('/details/:bookId', (req, res, next) => {
  Book.findById(req.params.bookId)
  	.populate('author')	// Checks the `authors` collection and populates `Author` ref
    .then( (book) => res.render('book-details', {book}))
    .catch( (err) => console.log('Error retrieving book details', err));
});
```





#### Update the `book-details.hbs` 

```handlebars
...
<span> 
	Written by: 
	{{#each book.author}} 
		{{this.name}} {{this.lastName}}  
	{{/each}}
</span>
...
```









## Books Reviews

**Embedded documents**



We practice relations using reference with the **authors** now let’s try to use the embedded strategies for **reviews**.





### Create `reviews.js` schema

**models/schemas/reviewSchema.js**

```js
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const reviewSchema = new Schema({
  user: String,
  comments: String
}, {
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }
});

module.exports = reviewSchema;
```





### Update the `models/book.js`

```js
...
// Import the schema for new `review` field
const reviewSchema = require('./schemas/reviewSchema');
...
	...
		...
rating: Number,
reviews: [reviewSchema]
},
		...
  ...
...
```







### Update `book-details.hbs`



**book-details.hbs**

```js
...
	...
		...
<p>Add a review</p>
<form action="/reviews/add?_id={{book._id}}" method="post">
  <label for="">User:</label>
  <input type="text" name="user">

  <label for="">Comments:</label>
  <textarea type="text" name="comments"></textarea>

  <button type="submit">ADD</button>
</form>
```





### Re-populate the database collections again as model schema was changed

```
node ./bin/seeds2.js
```







### Visit `http://localhost:3000/books/` and click on a book title for details







### Create the router `routes/reviews.js` for posting reviews and saving them to DB



**routes/reviews.js**

```js
// reviews router
const express = require('express');
const router = express.Router();
const Book = require('./../models/book');

// POST /reviews/add
router.post('/add', (req, res, next) => {
  const { _id } = req.query;
  const { user, comments } = req.body;
  
  Book.update(
      { _id }, 
      { $push: { reviews: { user, comments }}}
    )
    .then( (book) => res.redirect('/books'))
    .catch((error) => console.log(error))
});


module.exports = router;
```







#### Update the `routes/index.js`

```js
...
...
const reviewsRouter = require('./reviews');


// Routes
...
...
router.use('/reviews', reviewsRouter);
```







### Add the reviews list to the `book-details.hbs`



**views.book-details.hbs**

```js
...
	...

<h2>Reviews</h2>
{{#each book.reviews}}
<div class="review-item">
  <p>{{this.comments}}</p>
  <span>{{this.user}}</span>
</div>
{{/each}}
```









# Try it out  !   :)







#### Discussion!

After creating the `review`, we are going back to `/books`, where are all listed. Which approach will you use if you want to stay on the `/book/:id` route and display the **reviews** in real time after the user **SEND** it?



#### What happens if we update the `res.redirect` in reviews router.



```js
// POST /reviews/add
router.post('/add', (req, res, next) => {
  const { _id } = req.query;
  const { user, comments } = req.body;
  
  Book.updateOne(
      { _id }, 
      { $push: { reviews: { user: user, comments: comments }}} , {new: true}
    )
    .then( (book) => {
      // res.redirect('/books');
      res.redirect(`/books/details/${_id}`);      
    })
    .catch((error) => console.log(error))
});
```

