# Mongoose | Introduction



## Application Design Patterns





### The MVC Pattern

- Every time a request is made on the server, a *Controller* handles it.
- This *Controller* will communicate with *Models*.
- *Models* - are overlay on top of the database- Models will read and write data directly to a database.
- When the *Controller* has all information, it can call one *View* with some data.
- The *View* generates a *Response* that is a HTML page.



![](https://i.imgur.com/LUhoPkS.png)







Mongo Shell  and MongoDB Limitations:

 

- **We repeat a lot of code**
  To interact with the database, we have to open a connection, make a transaction, and then close the connection. This process can become tedious.
- **It’s hard to enforce data consistency**
  MongoDB is meant to have a flexible design that can change on the fly. This feature can be a gift and a curse, mainly when working with others. By default, we can add and remove whatever we’d like from our database collections.
- **Documents are just data objects, and have no methods on them**
  Let’s say we have a Person collection with the attributes `firstName` and `lastName`. If we wanted the full name, we would have to query for the person and add the first and last name together. We can’t attach methods to our data to create a `fullName`.



#### To avoid all these problems we need **an abstraction on top of our database connection** so we can focus on business logic.

####  This abstraction is called an **ODM**.



## Object Document Mapper (ODM)

 **ODM helps us to structure our data. We create maps (called schemas) create structure how our documents need to be (what data type and names)... aka how will they have to be structured . **

**These schema instructions are written as  JavaScript objects.**



## ODMs give us a set of reusable methods to perform CRUD actions more efficiently with our database, such as querying, creating, updating, and even adding our custom methods.



Validations [are a bit tricky with just MongoDB](https://docs.mongodb.com/manual/core/document-validation/), and applying consistency is tricky.  Here is where the ODM steps in.









## Mongoose

[Mongoose](http://mongoosejs.com/docs/) is an npm package, and an ODM for MongoDB / Node.js



### Setup

Mongoose is easy to set up! It’s just another npm package. Let’s start a new project and install it.

```bash
$ mkdir mongoose-example
$ cd mongoose-example
$ npm init
$ npm install --save mongoose
$ touch example.js
```





### Connecting to the Database

First, we must require mongoose in our `example.js`:

```js
const mongoose = require('mongoose');
const dbName = 'example-mongoose';

// CREATE AN INSTANCE OF CONNECTION TO DATABASE - `example-mongoose`
mongoose.connect(`mongodb://localhost/${dbName}`);
```





 The *same instance of Mongoose* [is shared](https://en.wikipedia.org/wiki/Singleton_pattern) across your application, meaning that once you require and connect to mongoose one time, any `require('mongoose')` in other files after that will be talking to the `exampleApp` database.



 You don’t have to create the `exampleApp` database. MongoDB will check if the database exists when it connects to the server. If it doesn’t exist, it will create the database and then connect to it.







### Model

The **data model** (or just **model**) is what directly manages the data and querying logic. It is an overlay that takes to and queries one part of the database ( one **collection** for example).

Each collection will have it's own model.



 [Mongoose models](http://mongoosejs.com/docs/api.html#model-js), are **JavaScript constructor functions** that create objects for storing in **a specific collection**. 



```js
// CREATE A MODEL
/* Mongoose models are JavaScript constructor functions that 
create objects to be stored in a specific collection, 
and are connected to that collection  */

const Cat = mongoose.model('Cat', { name: String });
```



#### The second parameter object is called - Schema (which represent how the document must look)









### CREATE A DOCUMENT INSTANCE

```js
// CALL MODEL TO CREATE A DOCUMENT INSTANCE (STRUCTURED OBJECT)
const kitty = new Cat({ name: 'Ironhacker '});
```





#### Instance has the MongoDB methods that can be called from the instance itself.



```js
// INSERT THE DOCUMENT INSTANCE INTO THE COLLECTION
kitty.save( (err) => {
  if (err) console.log(err); // if instance cannot be saved for some reason
  else console.log(`instance saved to DB ${dbName}`);
});


// `save()` method on the model is equivalent to `insertOne` command
```



DB and collection don't exist yet

```bash
$ mongo
> show dbs
```



#### Run the `example.js`

```
node example.js
```



Now check in mongo shell

```js
> use exampleApp
> db.cats.find()
```





### Return all the documents

```js

// RETRIEVE ALL THE DOCUMENTS FROM THE COLLECTION `cats`
// Using callback:
  Cat.find({}, (err, cats) => {
    if (err) console.log('Cat.find error', err);
    else cats.forEach( (cat)=> console.log(' --> cat: ', cat.name));
  });
```















### Mongoose Promises and Thenables

##### Mongoose async operations  (methods), like `.save()` return Promises.  We can use Promises syntax instead of callbacks.

##### Other queries on Mongoose models return 'Thenables', which is synchronous code to which you can append `.then()`.

More details here: <https://mongoosejs.com/docs/promises.html>



We often use Promises with the following syntax:

```js
myPromise
  .then(successCallback)
  .catch(failureCallback)
```





#### Let's refactor the `Cat.find`  to use promises instead of the callbacks.

```js
// RETRIEVE ALL THE DOCUMENTS FROM THE COLLECTION `cats`
Cat.find({})
  .then( (results) => console.log('The retrieved documents: ', results ))
  .catch( (err)=> console.log('Cats.find({}) error: ', err));

/* //Using callback instead of promises:
  Cat.find({}, (err, cats) => {
    if (err) console.log('Cat.find error', err);
    else cats.forEach( (cat)=> console.log(' --> cat: ', cat.name));
  });
*/
```







### Promises All

Sometimes we may need to do something only after all promises are finished.

To wait for multiple promisified operations to finish, we use `Promise.all`





#### Let's create new Models in our database `mongoose-example`

```js
const Dog = mongoose.model('Dog', { name: String });
```







### Create 2 promises and do `insertMany` for `Cat` and `Dog`



```js
// USING PROMISE ALL TO AWAIT FOR COMPLETION OF MULTIPLE QUERIES

let promise1 = Cat.insertMany([ {name: 'marbles'}, {name: 'fluffy'}, {name: 'tiger'}])
let promise2 = Dog.insertMany([ {name: 'daisy'}, {name: 'buddy'}, {name: 'bella'}])


Promise.all( [promise1, promise2] )
  .then( (result) => console.log('Promise.all result: ', result))
  .catch(err => console.error(err));
```









## Mongoose connection events



```js
// MONGOOSE CONNECTION EVENTS

// When successfully connected
mongoose.connection.on('connected', () => console.log('Mongoose connected'));

// When the connection is disconnected
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

// If the connection throws an error
mongoose.connection.on('error', (err) => console.log('Mongoose connection error: ' + err));

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {  
  mongoose.connection.close(() => { 
    console.log('Mongoose connection disconnected through app termination'); 
    process.exit(0); 
  }); 
});
```





### [REPO WITH THE FILE `example.js` : ](<https://github.com/ross-u/Mongoose-introduction-demo/blob/master/example.js>)





## Extra Resources

- [Mongoose Documentation](http://mongoosejs.com/docs/)
- [ES6 Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

* [MVC vs MVVM](<https://hackernoon.com/mvc-vs-mvvm-how-a-website-communicates-with-its-data-models-18553877bf7d>)

* [MVC, MVP, MVVM Design patterns](<https://www.infoworld.com/article/2926003/exploring-the-mvc-mvp-and-mvvm-design-patterns.html>)