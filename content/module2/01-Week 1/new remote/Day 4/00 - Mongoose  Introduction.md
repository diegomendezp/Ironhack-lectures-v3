# Mongoose | Introduction

 

<br>



## Application Design Patterns



<br>



Mongo Shell  and MongoDB Limitations:

 

- **We repeat a lot of code** (hard coding common queries).

- **It’s hard to enforce data consistency** (There is no way to enforce the structure of the documents).

- There are ways to enforce data document structure, but they are not easy to implement or manage in pure MongoDB.

  

To avoid these problems we need **an abstraction on top of our database connection**.



This abstraction is called an **ODM**.



### Insert several documents of different structure to a collection using Compass

```js
{
  "username": "bob123",
  "email": "bob123@mail.com",
  "address": "Barcelona, Pamplona 96",
  "password": "asf@SG2sdfa23G"  
}
```



```js
{
  "username": "sarah",
  "email": "sarah@mail.com",
  "address": {
		"city": "Chicago",
    "state": "Illinois",
    "street": "1089 NW Avenue",
    "country": "United States of America"
	},
  "password": "asf@SG2sdfa23G"  
}
```



```js
{
  "firstName": "Anna",
  "lastName": "Ryan",
  "emailAddress": "annaryan@mail.com",
  "location": {
    "lon": 20.448,
    "lat": 44.7866
	},
  "passcode": 12392012459
}
```

<br>



## Object Document Mapper (ODM)

-  **ODM helps us to structure our data. **

- **We create blueprints (called schemas )  to enforce the structure of our documents (what data type and names).**

- **These schema instructions are written as  JavaScript objects.**



<br>



ODMs give us a set of reusable methods to perform CRUD actions in a more simple way.



Validations [are a bit tricky with just MongoDB](https://docs.mongodb.com/manual/core/document-validation/), and applying consistency is tricky.  Here is where the ODM steps in.





<br>





## Mongoose

[Mongoose](http://mongoosejs.com/docs/)  `npm` package, is an ODM (Object Document Mapper ) for MongoDB and Node.js.



### Setup

Mongoose is easy to set upjust like any other `npm` package. 

Let’s start a new project and install it.



#### Create the file structure

```bash
# Create Directory
mkdir 00-mongoose-orm

cd 00-mongoose-orm

touch app.js

code .
```



<br>



#### Initialize `npm` and install mongoose dependency

```bash
# Initialize npm
npm init -y

# install mongoose
npm install mongoose

# install nodemon
npm install --save-dev nodemon
```



<br>



### Connecting to the Database

First, we must require mongoose in our `app.js`:

##### `app.js`

```js
const mongoose = require('mongoose');

// The name of the new or existing database
const DB_NAME = 'example-mongoose';


// CREATE AN INSTANCE OF CONNECTION TO DATABASE - `example-mongoose`
mongoose.connect(
  `mongodb://localhost:27017/${DB_NAME}`, 
  {
  	useNewUrlParser: true,
  	useUnifiedTopology: true,
	}
);
```





 **The *same instance of Mongoose* [is shared](https://en.wikipedia.org/wiki/Singleton_pattern) across your application,** meaning that **once you** (require and) **connect to mongoose first time**, any `require('mongoose')` in other files after that will be talking to the `example-mongoose` database.



<br>



#### Automatic database creation/connection

- You don’t have to create the `example-mongoose` database. 

- MongoDB will check if the database exists when it connects to the server. 

  If it doesn’t exist, it will create the database and then connect to it.









### Model

- The **data model** (or just **model**) is what directly manages the data and querying logic. 

- **Model** is an overlay on top of one collection, that we use to query and interact with that collection in a database.

- Each collection has it's own model.



- [Mongoose models](http://mongoosejs.com/docs/api.html#model-js), are **a link to specific a collection**.

- Mongoose model  can also be used to create "**structured objects**" that will in future be stored in that  **a specific collection**. 



```js
// CREATE A MODEL
/* Mongoose models create structured objects 
and store or retrieve them from  specific collection that they manage.

Below model will be in charge of collection `cats`.
We will explain the difference in collection name (Cats vs cats) later.
*/

const Cat = mongoose.model("Cat", {
  // SCHEMA OBJECT
  name: String,
  color: String
});

```



- The second parameter object is called - Schema 
- Schema represents how the document must look.





<br>







### CREATE A DOCUMENT INSTANCE







```js
// `create()` - equivalent to `insertMany` method in mongo shell
// it can be used to create one document

// INSERT THE NEW DOCUMENT INTO THE COLLECTION
Cat.create({name: 'Iron Kitty Cat', color: 'ironhack blue'})
	.then( (createdDocument) => { console.log('createdDocument', createdDocument )  })
  .catch( (err)=> {  console.log('Query Error: ', err)  });
```





DB and collection don't exist yet (because we need to run the file !)

```bash
$ mongo
> show dbs
```



#### Run the `example.js`

```
node app.js
```



Now check in mongo shell

```js
> use exampleApp
> db.cats.find()
```



<br>



### Return all the documents

```js
// RETRIEVE ALL THE DOCUMENTS FROM THE COLLECTION `cats`
Cat.find({})
  .then( (results) => console.log('RESULTS: ', results ))
  .catch( (err)=> console.log('Query Error: ', err));
```







### Mongoose Thenables



- Mongoose async operations return ***Thenables***, which are a mongoose own implementation of Promises.

- Important to know is that we can call `.then()` and `.catch()` in the exactly same way as with Promises.

- We can use set the default type of promises to be other than mongoose ***Thenables***, for example ES6 promises by doing :

  ```js
  require('mongoose').Promise = Promise;
  ```





More details here: <https://mongoosejs.com/docs/promises.html>



We use Promises with the following syntax:

```js
myPromise
  .then(successCallback)
  .catch(failureCallback)
```





<br>



### Promises All

Sometimes we may need to do something only after all promises are finished.

To wait for multiple promisified operations to finish, we use `Promise.all`





<br>



#### Create new Model - Dog

This will create new collection `dogs` in the database `mongoose-example`.

```js
const Dog = mongoose.model('Dog', { name: String, age: Number });
```







<br>



### Create 2 promises with `insertMany` using `Cat` and `Dog` models



```js
// USING PROMISE ALL TO AWAIT FOR COMPLETION OF MULTIPLE QUERIES

const arrayOfCats = [
  { name: 'marbles', color: 'black' },
  { name: 'fluffy', color: 'white' },
  { name: 'tiger', color: 'orange and black' },
];

const arrayOfDogs = [ 
  {name: 'daisy', age: 1 },
  {name: 'bella', age: 3 },
  {name: 'sudo', age: 6 }
];


const promise1 = Cat.insertMany( arrayOfCats );
const promise2 = Dog.insertMany( arrayOfDogs );


Promise.all( [promise1, promise2] )
  .then( (result) => console.log('Promise.all result: ', result))
  .catch( (err) => console.error(err));
```









## Mongoose connection events



```js
/* 
  MONGOOSE CONNECTION EVENTS
  We can provide a callback to be run on each
  of the below database events.
*/ 

// When successfully connected
mongoose.connection.on('connected', () => console.log('Mongoose connected'));

// When the connection is disconnected
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

// If the connection throws an error
mongoose.connection.on('error', (err) => console.log('Mongoose connection error: ' + err));
```





#### Consider skipping 

```js
// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {  
  mongoose.connection.close(() => { 
    console.log('Mongoose connection disconnected through app termination'); 
    process.exit(0); 
  }); 
});
```













## Extra Resources

- [Mongoose Documentation](http://mongoosejs.com/docs/)
- [ES6 Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

* [MVC vs MVVM](<https://hackernoon.com/mvc-vs-mvvm-how-a-website-communicates-with-its-data-models-18553877bf7d>)

* [MVC, MVP, MVVM Design patterns](<https://www.infoworld.com/article/2926003/exploring-the-mvc-mvp-and-mvvm-design-patterns.html>)