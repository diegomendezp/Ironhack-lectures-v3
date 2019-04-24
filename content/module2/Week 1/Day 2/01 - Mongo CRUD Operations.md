## CRUD OPERATIONS

#### 4 basic database operations

![](<https://static1.squarespace.com/static/555dc243e4b0fa866e3e41a9/t/5926bcdf9de4bbba0f69cd10/1495710948784/>)





CRUD is an acronym for **Create**, **Read**, **Update**, **Delete** which are the four basic operations for persistent storage aka Database





### Lets work with our database and the collection of users





### CREATE - `insertOne` or `insertMany` methods

```bash
# insertOne takes a single document and returns a feedback after insertion
db.users.insertOne({ name: "Your name", age: 29 })


db.users.insertMany([{ name: "Chris", city: "Barcelona, Spain" }, { name: "Grazia", city: "Santiago, Chile"}])
```





### READ - `find` and `pretty` methods

```bash
# find method displays all the documents in the collection in an unorganized way
db.users.find({})

# pretty method displays a formatted result
db.users.find({}).pretty()

# find a documents by value
db.users.find({ name : "Anna"})
```



#### AND keyword `$and`

```bash
# $and takes an array of objects with multiple queries that need to match 
db.users.find({ $and:[ {name: "Anna"}, {age: 30}] })
```





#### OR keyword `$or`

```bash
# $or takes an array of objects with multiple queries to match with OR condition
db.users.find({ $or:[ {name: "Anna"}, {name: "Grazia"}] })

# Using $and and $or method together
db.users.find({ 
$and:[
		{ $or: [{age: 30}, {age: 40}] },
		{ $or: [{name: "Anna"}, {name: "Marco"}] },  
	],
})
```







### Keywords `$gt`,  `$gte`,  `$lt`,  `$lte`,  `$ne`,  `$nor`

```bash
# greater than
db.users.find({ age: {$gt: 40} })

# greater than or equal
db.users.find({ age: {$gte: 40} })

# less than
db.users.find({ age: {$lt: 40} })

# less than or equal
db.users.find({ age: {$lte: 40} })

# not equal
db.users.find({ age: {$ne: 40} })

# not equal to expression1 nor equal to expression2
db.users.find({ $nor: [{ age: 40}, {name: "Anna"}] })
```









## *** Independent Practice

Let’s introduce the following documents to our database so that we can all start with the same data.

```js
db.createCollection("employees");

db.employees.insertMany(
  [
    {
  name: "Sue",
  age: 19,
  phone: {
    personal: "555-123-123",
    work: "555-456-456",
    ext: "2342"
      },
  privileges: "user",
  favorites: { artist: "Picasso", food: "pizza"
      },
  finished: [
        17,
        3
      ],
  badges: [
        "blue",
        "black"
      ],
  points: [
        { points: 85, bonus: 20
        },
        { points: 85, bonus: 10
        }
      ]
    },
    {
  name: "Bob",
  age: 42,
  phone: {
    personal: "555-123-123",
    work: "555-456-456",
    ext: "7673"
      },
  privileges: "admin",
  favorites: { artist: "Miro", food: "meringue"
      },
  finished: [
        11,
        25
      ],
  badges: [
        "green"
      ],
  points: [
        { points: 85, bonus: 20
        },
        { points: 64, bonus: 12
        }
      ]
    },
    {
  name: "Willy",
  age: 22,
  phone: {
    personal: "555-123-123",
    work: "555-456-456",
    ext: "8263"
      },
  privileges: "user",
  favorites: { artist: "Cassatt", food: "cake"
      },
  finished: [
        6
      ],
  badges: [
        "blue",
        "Picasso"
      ],
  points: [
        { points: 81, bonus: 8
        },
        { points: 55, bonus: 20
        }
      ]
    },
    {
  name: "John",
  age: 34,
  phone: {
    personal: "555-123-123",
    work: "555-456-456",
    ext: "2143"
      },
  privileges: "admin",
  favorites: { artist: "Chagall", food: "chocolate"
      },
  finished: [
        5,
        11
      ],
  badges: [
        "Picasso",
        "black"
      ],
  points: [
        { points: 53, bonus: 15
        },
        { points: 51, bonus: 15
        }
      ]
    },
    {
  name: "Steve",
  age: 23,
  phone: {
    personal: "555-123-123",
    work: "555-456-456",
    ext: "8253"
      },
  privileges: "user",
  favorites: { artist: "Noguchi", food: "nougat"
      },
  finished: [
        14,
        6
      ],
  badges: [
        "orange"
      ],
  points: [
        { points: 71, bonus: 20
        }
      ]
    },
    {
  name: "Martin",
  age: 43,
  phone: {
    personal: "555-123-123",
    work: "555-456-456",
    ext: "5623"
      },
  privileges: "user",
  favorites: { food: "pizza", artist: "Picasso"
      },
  finished: [
        18,
        12
      ],
  badges: [
        "black",
        "blue"
      ],
  points: [
        { points: 78, bonus: 8
        },
        { points: 57, bonus: 7
        }
      ]
    }
  ]
)
```



Open your mongoshell, introduce the documents above in the collection `employees` and perform the following queries:

- List all the employees
- Find the employee with whose name is Steve
- Find all employees whose age is greater than 30
- Find the employee whose extension is 2143
- 

*(Should take approximately 10 minutes)*















## Query Projections

#### The `find`  also takes a  second argument. It is called a [projection](https://docs.mongodb.com/v3.2/tutorial/project-fields-from-query-results/), and it allows us to specify which fields returns from each document on the result.



#### The projection must be an object with either:

- ##### All the fields we want to <u>include</u> (set them to `1`)

- ##### All the fields we want to <u>exclude</u> (set them to `0`)



![img](https://user-images.githubusercontent.com/970858/35269300-840a34a8-0023-11e8-9e8c-42df4816b1e2.png)





#### Query Projection example

```bash
# normal query - without using query projection
db.users.find({ name: "Anna"})

# to include `age` field from the result
db.users.find({ name: "Anna"}, {age: 1})

#to include `age` field and exclude `_id` field from the result
db.users.find({ name: "Anna"}, {age: 0, _id: 1})
```









### UPDATE - `updateOne()` , `updateMany()` , `replaceOne()`



```bash
# update the first matching instance in the collection
db.users.updateOne(
	{ name: "Anna"},
	{ $set: {name: "Ana - Updated 1"} }
)

db.users.find().pretty()

db.users.updateOne(
	{ name: "Anna"},
	{ $set: {name: "Ana - Updated 2"} }
)

db.users.find().pretty()


var phone = { "personal" : "", "work" : "", "ext" : 0 }

# update many updates all documents matching the specified condition
db.users.updateMany(
{},
{ $set: { phone: phone } }
)


# updating many to add a new property to a nested object
db.users.updateMany({} , { $set: { "phone.ext" : "+34" } } )

db.users.updateMany({ age: { $lte: 30 }}, { $set: {"phone.whatsapp": "11210352"} })



#replace one document that matches the condition - _id value doesn't change
var susan = { 
  name : "Susan",
  age : 25,
  phone : { "personal" : "555-223-223", "work" : "555-421-426", "ext" : "4240" },
  privileges : "user",
}

db.employees.replaceOne(
  { "name": "Martin"},
  susan
)

```







## Delete commands - `deleteOne`, `deleteMany`, `deleteMany({})`

```bash
# Delete a document which matches a condition
db.users.deleteOne( { name: "Susan" })

# Delete the documents that match the condition
db.users.deleteMany({ age : { $gte: 50 }})


## DON'T TRY THIS AT HOME :)
# To delete all documents from the database
db.users.deleteMany({})
```









### Important

```bash
# To drop the current database
db.dropDatabase()
```









## Independent Practice



Use this lesson as a guideline http://materials.ironhack.com/s/SyssnaiBe





Now that you know how to insert, delete, query and update documents, let’s practice!

- Find all employees that are over 30.
- Find all employees that are less than or equal to 30.
- Find all the employees whose favorite food is pizza.
- Change Willy’s personal phone number to “93-123-45-67”.
- Change Bob’s privilege to normal user.
- Find all employees whose favorite artist is equal to Picasso.
- Delete the employee John.
- (EXTRA) Add a bonus of 15 to all those who have a bonus less than 10.
- List all employees and sort them by name appending to the end of the query `.sort({name: 1})`  or   `.sort({name: -1})` 













## Extra Resources

- [MongoDB Official documentation](https://docs.mongodb.com/manual/introduction/)
- [CAP Theorem](http://robertgreiner.com/2014/08/cap-theorem-revisited/)
- [Beginners Guide to Compass](https://www.mongodb.com/presentations/the-beginners-guide-to-compass-the-gui-for-mongodb?p=59f0d681a323cf200b4c1030)

- Mongo hacker package: <https://github.com/tylerbrock/mongo-hacker/>
- [MongoDB Limits and Thresholds](