# 01 - Mongoose&Express - Create - Read - Update





## Creating a model



Create additional directories and files for Models.



```bash
mkdir models schemas
touch models/Author.js models/Book.js schemas/reviewSchema.js
```



<br>



##### `models/book.js`

```js
// models/Book.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  description: String,
  author: String,
  rating: Number
}, {
  timestamps: {
    // https://mongoosejs.com/docs/guide.html#timestamps
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
```







### Creating a seed file

Create a file:

```bash
touch bin/seed.js
```



<br>

##### `bin/seed.js`

```js
// bin/seed.js
const mongoose = require('mongoose');
const Book = require('../models/Book');

const dbName = 'library';

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

mongoose
  .connect(`mongodb://localhost:27017/${dbName}`)
  .then(() => {
    return Book.create(books);
  })
  .then(books => {
    console.log(`Inserted ${books.length} books`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

```





## Run the seed / populate the database

```bash
node bin/seed.js
```





<br>



## Setting up everything

First, create a new route `books/add` on our `routes/index.js` file that should render a `book-add.hbs`  view displaying a Form for adding new books. 

**Which method will we use?**



##### `routes/books.js`

```js
// books router
const express = require('express');
const router = express.Router();

//	...
//			...


// GET 	/books/add
router.get('/add', function(req, res, next) {
  console.log('IN ROUTER --> /books/add GET');
  res.render('book-add');
});

module.exports = router;
```



<br>



### Create a `book-add.hbs` file and edit the route

##### `views/book-add.hbs`

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



<br>



### Create `POST` route in the `routes/books.js`

##### `routes/books.js`

```js
// routes/books.js

//	...
//		...


// IMPORT THE MODEL 
const Book = require('./../models/Book');


// POST	/books/add
router.post('/add', (req, res, next) => {
  
  const { title, author, description, rating } = req.body;
  
  // or 
  // Book.create({ title, author, description, rating })
  
  // Create a new 
  const newBook = new Book({ title, author, description, rating });
  
  newBook.save()
    .then( (book) => res.redirect('/books'))
    .catch( (err) => console.log(err));
});
```



<br>



### Update the `/books GET` to display all the books from the Database



##### `routes/books.js`

```js
// routes/books.js

// GET /books
router.get('/', (req, res, next) => {
      .then(allTheBooksFromDB => res.render('books', { allTheBooksFromDB }))
    .catch(err => console.log(err));
});
```



<br>



### Update `books.hbs` to display all the books

##### `views/books.hbs`

```html
<h1>BOOKS</h1>
{{#each allTheBooksFromDB}}
    <p class='book-title'>
        <a href="/books/edit?_id={{this._id}}" class="edit-button">EDIT</a>
        <a href="/books/details/{{this._id}}">{{this.title}}</a> 
    </p>
{{/each}}
```





<br>



### Edit button style

#### You can also add the following **css** to the `style.css` file, so we differentiate the **edit** button.



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

### Our `routes/books.js` router file now has 3 routes:



##### `routes/books.js`

```css
const express = require('express');
const router = express.Router();
const Book = require('./../models/book');


// GET '/books/add'
router.get('/add', function(req, res, next) {
  res.render('book-add');
});


// POST '/books/add'
router.post('/add', function(req, res, next) {
  console.log('req.body', req.body);
  const {title, author, description, rating} = req.body;

  const newBook = new Book({title, author, description, rating});

  newBook.save()
    .then( (book) => res.redirect('/books'))
    .catch( (err) => console.log(err));
  
});

// GET '/books'
router.get('/', (req, res, next) => {
  Book.find({})
    .then( (allTheBooksFromDB) => res.render('books', {allTheBooksFromDB} ))
    .catch( (err) => console.log(err));
});

module.exports = router;

```



<br>



### Create `/books/edit` route - and find book by `_id`



This route will be used by our Edit Book form which we will serve via the **EDIT** button.

<br>



##### `routes/books.js`

```js
// routes/books.js

//	...
//		...


// GET  /books/edit
router.get('/edit', (req, res, next) => {
  const { _id } = req.query;
  
  Book.findOne( { _id } )
    .then((book) => res.render( 'book-edit', {book} ))
    .catch((err) => console.log(err));
})
```



<br>



### Create the Edit form

We need to create the edit form, where the user will be able to modify the info of each book.

Our form will be sending the data via the `POST` method in the request body.



##### `views/book-edit.hbs`

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



<br>



### Update the Edit form to show passed data and query in the link



- Embed the book id in the URL query, to be able to target the book in the collection.

- Update the input `values` to populate the form before editing.

  <br>

  

##### `views/book-edit.hbs`

```handlebars
<form action="/books/edit?_id={{book._id}}" method="POST">  {{!-- <-- UPDATE --}}
  <label for="">Title:</label>
  <input type="text" name="title" value="{{book.title}}">  {{!-- <-- UPDATE --}}

  <label for="">Author:</label>
  <input type="text" name="author" value="{{book.author}}">  {{!-- <-- UPDATE --}}

  <label for="">Description:</label>
  <input type="text" name="description" value="{{book.description}}">  {{!-- <-- UPDATE --}}

  <label for="">Rate:</label>
  <input type="number" name="rating" value="{{book.rating}}">  {{!-- <-- UPDATE --}}

  <button type="submit">EDIT</button>
</form>
```



<br>



### Create the `POST` route to update the Document.

<br>



##### `routes/books.js`

```js
// routes/books.js

// POST  /books/edit
router.post('/edit', (req, res, next) => {
  
  const { _id } = req.query;
  const { title, author, description, rating } = req.body;

  Book.updateOne({ _id }, { title, author, description, rating }, { new: true })
    .then(book => res.redirect('/books'))
    .catch(error => console.error(error));
});
```





<br>



### Create a route for getting the book details (by `_id`) after clicking on the book title.





- We are using `findById` instead of `find` because `find` returns an array, and we dont want one object alone in the array. 



<br>



Create a new route that uses the **param** `bookId`



##### `routes/books.js`	

```js
// routes/books.js

// GET /books/details/:bookId
router.get('/details/:bookId', (req, res, next) => {
  const { bookId } = req.params;

  Book.findById(bookId)
    .then(book => res.render('book-details', { book }))
    .catch(err => console.log('Error retrieving book details: ', err));
});
```





<br>



### Crate a view `book-details.hbs`



##### `views/book-details.hbs`

```html
<h1>{{book.title}}</h1>

<span>Written by: {{book.author}}</span>

<p>Summary: {{book.description}}</p>

<p>Rating: {{book.rating}}/10</p>

<a class="return-button" href="/books">Return</a>
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







# Mongoose & Express | Documents Relationships







## Referencing documents

![](https://user-images.githubusercontent.com/23629340/36200116-e7fc4460-117b-11e8-8e10-a7cd4e3292b4.png)









### Author Schema

Let’s start creating our `Author` model. 

Inside our `models` folder add a `Author.js` create the following :



##### `models/Author.js`

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





<br>



### Update book model - use `Author` Id as reference

Update`Book` model, and replace the type of data we are assigning to the `author` field. 

Instead of a `String`, we will have an `Array` of `ObjectID` pointing to the `User`model. 

So we will have the following:



##### `models/Book.js`

```js
// models/Book.js

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





<br>



### - Create `authors.js` router,

### -  update `index.js` router to connect it, 

### -  create `author-add` view  for adding new authors





#### Create `routes/authors.js`



##### `routes/authors.js`

```js
// routes/authors.js

const express = require('express');
const router = express.Router();
const Author = require('./../models/Author');


// GET  /authors/add
router.get('/add', (req, res, next) => res.render("author-add"));



// POST  /authors/add
router.post('/add', (req, res, next) => {
  
  const { name, lastName, nationality, birthday, pictureUrl } = req.body;
  const newAuthor = new Author({ name, lastName, nationality, birthday, pictureUrl})
  
  newAuthor.save()
  	.then((book) => res.redirect('/books'))
  	.catch((error) => console.log(error));
});


module.exports = router;
```



<br>



#### Update `routes/index.js` - include the `authors` router



##### `routes/index.js`

```js
const express = require('express');
const router = express.Router();

const booksRouter = require('./books');
const authorsRouter = require('./authors');				//  <---- UPDATE


// Routes
router.use('/books', booksRouter);
router.use('/authors', authorsRouter);						//  <---- UPDATE


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


module.exports = router;
```



<br>





### Create the `author-add.hbs`  view -  form



##### `views/author-add.hbs`

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



<br>





# Changing the data schema requires creating a new database or a collection, to ensure data consistency and no errors.





### Create a new `seed2.js` file



##### `bin/seed2.js`

```js
const mongoose = require('mongoose');
const Book = require('./../models/Book');
const Author = require('./../models/Author');

mongoose
  .connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true,
  })
  .then(() => insertFirst())
  .catch(err => console.log(err));

// STEP 0 - insert documents to ensure that collection exists
function insertFirst() {
  const pr1 = Book.create({ title: 'Drop', description: 'Drop', rating: 5 });
  const pr2 = Author.create({
    name: 'Drop',
    lastName: 'Drop',
    nationality: 'Drop',
    pictureUrl: 'Drop',
  });

  Promise.all([pr1, pr2])
    .then(() => {
      dropTheCollections();
    })
    .catch(err => console.log(err));
}

// STEP 1 - drop the existing collections
function dropTheCollections() {
  const pr1 = Book.collection.drop();
  const pr2 = Author.collection.drop();

  Promise.all([pr1, pr2])
    .then(() => {
      console.log('Collections dropped successfully');

      populateDatabase();
    })
    .catch(err => console.log(err));
}

// STEP 2 - Create a function that will populate the database
function populateDatabase() {
  const books = [
    {
      title: 'The Hunger Games',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: {
        name: 'Suzanne',
        lastName: 'Collins',
        nationality: 'American',
        birthday: new Date(1962, 07, 11),
        pictureUrl:
          'https://www.thefamouspeople.com/profiles/images/suzanne-collins-3.jpg',
      },
      rating: 10,
    },
    {
      title: 'Harry Potter',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: {
        name: 'Joanne',
        lastName: 'Rowling',
        nationality: 'English',
        birthday: new Date(1965, 06, 31),
        pictureUrl:
          'https://www.biography.com/.image/t_share/MTE4MDAzNDE3OTI3MDI2MTkw/jk-rowling_editedjpg.jpg',
      },
      rating: 9,
    },
    {
      title: 'To Kill a Mockingbird',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: {
        name: 'Harper',
        lastName: 'Lee',
        nationality: 'American',
        birthday: new Date(1926, 03, 28),
        pictureUrl:
          'https://cdn.cnn.com/cnnnext/dam/assets/150710115858-harper-lee-c1-exlarge-169.jpg',
      },
      rating: 8,
    },
    {
      title: 'Pride and Prejudice',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: {
        name: 'Jane',
        lastName: 'Austen',
        nationality: 'English',
        birthday: new Date(1817, 11, 16),
        pictureUrl:
          'https://www.biography.com/.image/t_share/MTE1ODA0OTcxNTQ2ODcxMzA5/jane-austen-9192819-1-402.jpg',
      },
      rating: 9,
    },
    {
      title: 'Twilight',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: {
        name: 'Sthephenie',
        lastName: 'Meyer',
        nationality: 'American',
        birthday: new Date(1973, 11, 24),
        pictureUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Stephenie_Meyer_by_Gage_Skidmore.jpg/1200px-Stephenie_Meyer_by_Gage_Skidmore.jpg',
      },
      rating: 10,
    },
    {
      title: 'The Book Thief',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: {
        name: 'Markus',
        lastName: 'Zusak',
        nationality: 'Australian',
        birthday: new Date(1975, 05, 23),
        pictureUrl: 'https://images.penguinrandomhouse.com/author/59222',
      },
      rating: 7,
    },
    {
      title: 'The Chronicles of Narnia',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: {
        name: 'Suzanne',
        lastName: 'Lewis',
        nationality: 'British',
        birthday: new Date(1898, 10, 29),
        pictureUrl:
          'https://media1.britannica.com/eb-media/24/82724-004-C01DBECB.jpg',
      },
      rating: 8,
    },
    {
      title: 'Animal Farm',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: {
        name: 'George',
        lastName: 'Orwell',
        nationality: 'Indian',
        birthday: new Date(1903, 05, 25),
        pictureUrl:
          'https://www.biography.com/.image/t_share/MTIwNjA4NjMzOTMzNjI4OTQw/george-orwell-9429833-1-4022.jpg',
      },
      rating: 9,
    },
    {
      title: 'Gone with the Wind ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: {
        name: 'Margaret',
        lastName: 'Mitchell',
        nationality: 'American',
        birthday: new Date(1900, 10, 08),
        pictureUrl:
          'https://media1.britannica.com/eb-media/13/153113-004-8474546E.jpg',
      },
      rating: 10,
    },
    {
      title: 'The Fault in Our Stars ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: {
        name: 'John',
        lastName: 'Green',
        nationality: 'American',
        birthday: new Date(1977, 07, 24),
        pictureUrl:
          'https://i.guim.co.uk/img/media/8a5dc5e279a570fdba282c88d4a2a363a38bc2e4/0_96_4768_2860/master/4768.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=33c90ed86c41e7d9e2a4297936a2e504',
      },
      rating: 8,
    },
  ];

  // STEP 3
  // Map over the array `books` and for each book take it's author and insert it into `authors` collection
  // and create a new array `createAuthors` which holds only names (String) of each author
  const createAuthors = books.map(book => {
    const newAuthor = new Author(book.author);
    return newAuthor
      .save()
      .then(author => author.name)
      .catch(error => console.error(console.error()));
  });

  // STEP 4
  // After all authors are created `Promise.all(createAuthors)`
  // Map the data array `books`, and for each book replace `book.author` name with _id retrieved by `Author.findOne`
  // Map creates a new array of updated book objects -> `updatedBooksArray` and at the end assigns it to `updatedBooksData`
  let updatedBookPromises = Promise.all(createAuthors)
    .then(() => {
      let updatedBooksArray = books.map(book => {
        return Author.findOne({
          name: book.author.name,
          lastName: book.author.lastName,
        }).then(author => Object.assign({}, book, { author: author._id }));
        // Overwrites the original `book.author` name string, and puts author `_id`
      });

      return updatedBooksArray;
    })
    .catch(error => {
      throw new Error(error);
    });

  // STEP 5
  // updatedBookPromises holds all the promises, then we use Promise.all to resolve all those promises and forward the result via .then() in array `newUpdatedBooks`
  // Insert all objects from `newUpdatedBooks` into the collection `books`
  updatedBookPromises
    .then(updatedBookPromises => Promise.all(updatedBookPromises))
    .then(finalBooksArray => Book.create(finalBooksArray))
    .then(result =>
      result.forEach(book => console.log('Book inserted -> ', book.title)),
    )
    .catch(err =>
      console.log('Error while inserting all newUpdatedBooks', err),
    );
}

```





<br>



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



<br>



Our book details are not displaying properly anymore.



![img](https://user-images.githubusercontent.com/23629340/36203383-ae6cda1e-1187-11e8-8289-2bbdb293ae47.png)



### We need to populate the `author` field in the route `/book/:id`,



**Population** is the process of automatically replacing the specified paths in the document with document(s) from other collection(s).





### Update `routes/books.js` -  



##### `routes/books.js`

```js
// routes/books.js

// ...
//		...

const Author = require('./../models/Author');	//			<--- ADD


// GET  /books/details/:bookId
router.get('/details/:bookId', (req, res, next) => {
  
  const { bookId } = req.params
  
  Book.findById(bookId)
// Checks the `authors` field and populates `Author` ref
  	.populate('author')  //																		<--- ADD
    .then( (book) => res.render('book-details', { book } ))
    .catch( (err) => console.log('Error retrieving book details', err));
  
});
```



<br>



#### Update the `book-details.hbs` 

##### `views/book-details.hbs`

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







<br>





## Books Reviews





<br>



### Embedded documents



<br>



We practice relations using reference with the **authors** now let’s try to use the embedded strategies for **reviews**.





### Create `reviews.js` schema





##### `models/schemas/reviewSchema.js`

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



<br>



### Update the `models/book.js`



##### `models/Book.js`

```js
// models/Book.js

...
// Import the schema for new `review` field
const reviewSchema = require('./schemas/reviewSchema');

// ...
//		...
//			...
		rating: Number,
		reviews: [reviewSchema]							//			<---  ADD
},
//	...
//		...
//			...
```





<br>





### Update the view `book-details.hbs`





Update the book details view to show a form for adding reviews.



<br>



##### `views/book-details.hbs`

```html
// views/book-details.hbs

// ...
// 		...
//  			...


<h4>Add a review</h4>
<form action="/reviews/add?_id={{book._id}}" method="post">
  <label for="">User:</label>
  <input type="text" name="user">

  <br>
  
  <label for="">Comments:</label>
  <textarea type="text" name="comments"></textarea>

  <button type="submit">ADD</button>
</form>
```





### Re-populate the database collections again as model schema was changed

```
node ./bin/seeds2.js
```





<br>



#### Visit `http://localhost:3000/books/` and click on a book title for details.





<br>



### Create the router `routes/reviews.js` for posting reviews 





##### `routes/reviews.js`

```js
// routes/reviews.js
const express = require('express');
const router = express.Router();
const Book = require('./../models/Book');

// POST /reviews/add
router.post('/add', (req, res, next) => {
  const { _id } = req.query;
  const { user, comments } = req.body;
  
  const newReview = { user, comments };
  
  Book.update(
      { _id }, 
      { $push: { reviews: newReview }}
    )
    .then( (book) => res.redirect('/books'))
    .catch((error) => console.log(error))
});


module.exports = router;
```





<br>



#### Update the `routes/index.js`



###### `routes/index.js`

```js
// routes/index.js

//	...
//			...

const reviewsRouter = require('./reviews');		//		<--- IMPORT


// Routes
//	...
//	...

router.use('/reviews', reviewsRouter);		//		<--- ADD AS THE LAST ROUTER
```





<br>



### Add the reviews list to the `book-details.hbs`



##### `views/book-details.hbs`

```html
//	views/book-details.hbs

//	...
//			...


<h2>Reviews</h2>
{{#each book.reviews}}

	<div class="review-item">
  	<p>{{this.comments}}</p>
    <span><b>{{this.user}}</b>b></span>
	</div>

{{/each}}
```





<br>



### Add additional styles to the `style.css`

```css
.review-item {
  border-bottom: 1px solid grey;
  margin: 10px 0;
  padding-bottom: 10px;tre
}

.review-item p {
  margin-bottom: 0;
}

.review-item span {
  font-size: 10px;
  color: grey;
}
```





<br>



# Try it out  !   :)





<br>



#### Final touch



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

