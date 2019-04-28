#  MongoDB | Introduction





## Introduction to Databases



#### [Databases](https://en.wikipedia.org/wiki/Database) are **programs that allow us to save and retrieve data** to our applications. Until now, every program that we wrote will reset/refresh every time we run it (variables will be delete as soon we reload or exit).



#### Databases are typically [persisted](https://en.wikipedia.org/wiki/Persistence_(computer_science)), which means that even if our program stops/restarts, we can still access the data.





## MongoDB Introduction

#### [MongoDB](https://www.mongodb.com/) Is a **free and open-source cross-platform database program**.

#### MongoDB stores JSON like documents, called (binary JSON, BSON), which can contain mixed data types.

#### Difference from the relational databases is that documents stored in MongoDb can be different and don't need to confine to the same schema.



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_157ca84354e93013a2289e0e4a8809a6.png)









#### Mongo document example



```json
{
   _id: ObjectId(7df78ad8902c)
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100, 
   comments: [	
      {
         user:'user1',
         message: 'My first comment',
         dateCreated: new Date(2011,1,20,2,15),
         like: 0 
      },
      {
         user:'user2',
         message: 'My second comments',
         dateCreated: new Date(2011,1,25,7,45),
         like: 5
      }
   ]
}
```







### [MongoDB Installation](http://materials.ironhack.com/s/H1XmRnG6VV7#mongodb-installation)







### Data types in MongoDB

The documents we store in MongoDB database can have different type of values. 



These are some of the most useful data types used in mongo documents:

| type     | Examples                             |
| :------- | :----------------------------------- |
| Double   | 3.141625                             |
| String   | “IronHack Coding Bootcamp”           |
| Date     | “Sun Dec 08 07:15:44 UTC 2013”       |
| Boolean  | true                                 |
| Object   | { foo: ‘bar’, }                      |
| Array    | [“apple”, “oranges”, “kiwis”]        |
| ObjectID | ObjectId(“52cdef7c4bab8bd675297d8a”) |
| Null     | null                                 |
| Integer  | 123456                               |





### ObjectID type

`ObjectID` is a **MongoDB type** used to identify documents in a collection uniquely. MongoDB will create them automatically for us. 

When we create a document in MongoDB it automatically creates a key `_id` for the document.

This is a unique `_id` key under which the document is stored.







### **MongoDB shell and commands**



Mongo shell is a CLI that we use to work directly with the database from the terminal. Mongo shell uses JS, therefore the syntax is same as working  with JS and working with the objects.



#### Start MongoDB  and Mongo shell - Linux

```bash
# Start the Mongo server - Linux
sudo systemctl start mongod

# Check the Mongo server status - Linux
sudo systemctl status mongod

# To open the Mongo Shell - Linux
mongo
```





### Start MongoDB  and Mongo shell - MacOS

```bash
# Start the Mongo server - MacOS
mongod

# Start the Mongo Shell - MacOS
mongo
```





### `show dbs` ,  `use DATABASE_NAME` , `db` commands

```bash
#List All Databases
show dbs

# Select Database or create a new database if it doesn't exist
use db_name

# Show Current Database
db
```







### Lets make our first databse

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
db.users.insertOne({ name: "Marco", age: 60})


# We can see the collctions we have in the database
show collections


# Now the database is created and visible on the list
show dbs
```









* <https://docs.mongodb.com/manual/reference/limits/>)