## CRUD OPERATIONS

#### 4 basic database operations



##### [OPEN IMAGE](https://www.miltonmarketing.com/wp-content/uploads/2018/04/crudallprogramsdoitdownload.png)

<img src="https://www.miltonmarketing.com/wp-content/uploads/2018/04/crudallprogramsdoitdownload.png" alt="img" style="zoom:33%;" />





CRUD is an acronym for **Create**, **Read**, **Update**, **Delete** which are the four basic operations for persistent storage aka Database





### Lets work with our database and the collection of users





## CREATE -

###  `insertOne` or `insertMany` methods

```bash
# insertOne takes a single document and returns a feedback after insertion
db.users.insertOne({ name: "Your name", age: 29 })


db.users.insertMany([
{ name: "Chris", city: "Barcelona, Spain" },
{ name: "Grazia", city: "Santiago, Chile"}
])
```





<br>



## READ -

###  `find` and `pretty` methods

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





<br>





## [Create the `employees` collection and query the database - Exercise](https://gist.github.com/ross-u/74bc350d4eb8ac4b1ca1034f0a12e2e8) (15 - 20 min)







<br>





## Query Projections

 [MongoDB -`find()` method](https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find)

- [`find`](https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find) method  also takes a  second argument, called a [projection](https://docs.mongodb.com/v3.2/tutorial/project-fields-from-query-results/).

- Projection allows us to specify which fields should returns from each document in the result.



##### The projection must be an object containing:

- ##### The fields that we want to <u>include</u> (set to `1`)

  or / and

- ##### The fields that we want to <u>exclude</u> (set to `0`)



<br>



### [OPEN IMAGE](https://user-images.githubusercontent.com/970858/35269300-840a34a8-0023-11e8-9e8c-42df4816b1e2.png)

![img](https://user-images.githubusercontent.com/970858/35269300-840a34a8-0023-11e8-9e8c-42df4816b1e2.png)



<br>



#### Query Projection example

```bash
# normal query - without using query projection
db.users.find({ name: "Anna"})

# to include `age` field from the result
db.users.find({ name: "Anna"}, {age: 1})

#to include `age` field and exclude `_id` field from the result
db.users.find({ name: "Anna"}, {age: 0, _id: 1})
```





<br>





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

db.users.updateMany(
  { age: { $lte: 30 } }, 
  { $set: {"phone.whatsapp": ""} }
)



#replace one document that matches the condition - _id value doesn't change
var susan = { 
  name : "Susan",
  age : 25,
  phone : { "personal" : "", "work" : "", "ext" : "" },
  privileges : "user",
}

db.employees.replaceOne(
  { "name": "Martin"},
  susan
)

```





<br>



## Delete commands - `deleteOne`, `deleteMany`, `deleteMany({})`

```bash
# Delete a document which matches a condition
db.employees.deleteOne( { name: "Susan" })

# Delete the documents that match the condition
db.users.deleteMany({ age : { $gte: 50 }})


## DON'T TRY THIS AT HOME :)
# To delete all documents from the database
db.users.deleteMany({})
```





<br>





### Important

```bash
# To drop the current database
db.dropDatabase()
```





<br>



### [MongoDB CRUD recap - Exercise](https://gist.github.com/ross-u/98550bf123f44638f94a3c5eedf88c35) (15 - 20 min)







<br>





## [MongoDB - Lecture Notes For The Students](https://gist.github.com/ross-u/cf1f144c7706610e9f70c2700f8b391d)