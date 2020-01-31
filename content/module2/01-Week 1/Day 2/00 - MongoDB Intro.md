#  **MongoDB** | Introduction





## Introduction to Databases



- [Databases](https://en.wikipedia.org/wiki/Database) are **programs that allow us to save and retrieve data** of our applications. 
- Until now, every program that we wrote used to reset/refresh every time we run it (variables will be delete as soon we reload or exit).



- **Databases are typically** [persisted](https://en.wikipedia.org/wiki/Persistence_(computer_science)), which means that even if our program stops for some reason, data will still persists and we can access the stored data later.





## MongoDB Introduction

- [MongoDB](https://www.mongodb.com/) Is a **free and open-source cross-platform database program**.

- MongoDB stores JSON like documents, called (binary JSON, BSON), which can contain mixed data types.

- Difference from the relational databases is that documents stored in MongoDB can be different and doesn't need to confine to the same schema.



### [OPEN IMAGE](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_157ca84354e93013a2289e0e4a8809a6.png)

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_157ca84354e93013a2289e0e4a8809a6.png)









#### [MongoDB Document example & Getting Started](https://docs.mongodb.com/manual/core/document/#documents)

```json
var mydoc = {
               _id: ObjectId("5099803df3f4948bd2f98391"),
               name: { first: "Alan", last: "Turing" },
               birth: new Date('Jun 23, 1912'),
               death: new Date('Jun 07, 1954'),
               contribs: [ "Turing machine", "Turing test", "Turingery" ],
               views : NumberLong(1250000)
            }
```









##### [MongoDB - IH Learning Unit](http://materials.ironhack.com/s/H1XmRnG6VV7#mongodb-installation)



### [MongoDB Installation](https://docs.mongodb.com/manual/installation/)

**Go to**	 >>> 	**Install MongoDB Community Edition**





<br>



### Data types in MongoDB



- The documents we store in MongoDB database can be different value types. 

- These are some of the most useful data types used in mongo documents:

### [TABLE EXAMPLE](https://gist.github.com/ross-u/460610d2e938810de9fe28fd89ce611e)

| **type**      | Example                                 |
| :------------ | :-------------------------------------- |
| **Double**    | `3.141625`                              |
| **String**    | `"IronHack Coding Bootcamp"`            |
| **Date**      | `Sun Dec 08 07:15:44 UTC 2013`          |
| **Boolean**   | `true`  `false`                         |
| **Object**    | `{ foo: "bar" }`                        |
| **Array**     | `["apple", "oranges", "kiwis"]`         |
| **Object ID** | `ObjectId ("52cdef7c4bab8bd675297d8a")` |
| **Null**      | `null`                                  |
| **Integer**   | `123456`                                |



<br>



### `Object ID` type

- `ObjectID` is a MongoDB type used to identify documents in a collection uniquely. 

- MongoDB will create them automatically for us. 

- When we create a document in MongoDB it automatically creates a key `_id` for the document.

- This is a unique `_id` key under which the document is stored.







### **MongoDB shell and commands**



Mongo shell is a CLI that we use to work directly with the database from the terminal.

Mongo shell uses JavaScript, therefore the syntax is the same as working  with JS and working with the objects.



#### **Start MongoDB  and Mongo shell - Linux**

```bash
# Start the Mongo server - Linux
sudo systemctl start mongod

# Check the Mongo server status - Linux
sudo systemctl status mongod

# To open the Mongo Shell - Linux
mongo
```





### **Start MongoDB  and Mongo shell - MacOS**

```bash
# Start the Mongo server - MacOS
mongod

# OR
# Start the Mongo Shell - MacOS
mongo
```





<br>



### Commands:

###  `show dbs` ,

###  `use DATABASE_NAME` ,

###  `db` 

```bash
#List All Databases
show dbs

# Select Database or create a new database if it doesn't exist
use db_name

# Show Current Database
db
```





<br>



### Lets make our first database - 

### `db.createCollection()`

### `db.collectionName.insertOne()`

### `db.collectionName.find()`

```bash
show dbs

use my-first-db

db

# Database doesn't show in the list
show dbs

# We have to insert at least one document or create a colelction in it for the database to show
# We will create a collection first on our database
db.createCollection("users");

# And insert a document into our collection
db.users.insertOne({ name: 'Anna', age: 30 })
db.users.insertOne({ name: 'Anna', age: 40 })
db.users.insertOne({ name: 'Anna', age: 50 })
db.users.insertOne({ name: "Marco", age: 30})
db.users.insertOne({ name: "Marco", age: 50})
db.users.insertOne({ name: "Marco", age: 60})


# We can see the collections we have in the database
show collections


# Now the database is created and visible on the list
show dbs

# Show the documents in the collection
db.users.find()

# Show the documents in the collection, with indentation
db.users.find().pretty()
```





<br>



#### [Mongo Hacker package](https://github.com/TylerBrock/mongo-hacker)

Gives a auto styling to the output in the mongo shell.

<br>



### **[MongoDB Docs - Thresholds and Limits ](https://docs.mongodb.com/manual/reference/limits/)**

- The maximum BSON document size is 16 megabytes (MB).

- The maximum document size helps ensure that a single document cannot use excessive amount of RAM or, during transmission, excessive amount of bandwidth.

- MongoDB supports no more than 100 levels of nesting for [BSON documents](https://docs.mongodb.com/manual/reference/glossary/#term-document).

  

