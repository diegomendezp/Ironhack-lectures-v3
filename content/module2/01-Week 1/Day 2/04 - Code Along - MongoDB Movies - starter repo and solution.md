# Code Along - MongoDB



### [Code Along - starter repo for the students](https://github.com/ross-u/Code-Along-Mongo-Movies)

[]()

### [Code Along - solution (give at the end)](https://github.com/ross-u/Code-Along-Mongo-Movies-Solution)





## Getting Started

<br>



### Fork and Clone the repo

```bash
git clone https://github.com/ross-u/Code-Along-Mongo-Movies

cd Code-Along-Mongo-Movies
```



<br>



### Import the data via `mongoimport`

Using `mongoimport`, import the JSON data from the `movies.json` file into the collection `movies` in the `video` database.



### Linux

```bash
# Run mongod
sudo service mongod start

# Check if mongod process is running
ps -e | grep 'mongod'

# Import the data from `movies.json` to the `movies` database
mongoimport --db video --collection movies --file movies.json --jsonArray

# Run mongo shell
mongo
```



### Mac

```bash
# Run mongodb
brew services start mongodb-community

# Check if mongod process is running
ps -e | grep 'mongod'


# Import the data from `movies.json` to the `movies` database
mongoimport --db video --collection movies --file movies.json --jsonArray

# Run mongo shell
mongo
```



#### ... continued (Mac & Linux)

```js
// List databases
show dbs
// Switch to database `video`
use video

// Show collections
show collections

// List all the documents in the `movies` collection
db.movies.find().pretty()
```







### 1. Retrieve all the documents  from the `movies` collection:

**<u>Your query</u>**:

```js
db.movies.find()
```

 





### 2. Retrieve all the documents  from the  `movies` collection and prettify the result:

**<u>Your query</u>**:

```js
db.movies.find().pretty()
```

 





### 3. Retrieve all the documents  from the  `movies` collection where the field `year` is  2000:

**<u>Your query</u>**:

```js
db.movies.find({year:  2000})
```

 



### 4. Retrieve all the documents from the `movies`  collection where the field `rate` is "8.8"

**<u>Your query</u>**:

```js
db.movies.find({rate:  "8.8"})
```

 





### 5. Retrieve the movie with the field `_id` "5cbc6943c95c41149fd2f3b5"

To specify an **ObjectID**, use the format **ObjectId(’id’)**, 

**<u>Your query</u>**:

```js
db.movies.find( {_id: ObjectId("5cbc6943c95c41149fd2f3b5")} )
```

 





### 6.  Retrieve all documents in our collection where the field `year` equals `'2000'` **AND** the `rate` equals `'8.5'`.

**<u>Your query</u>**:

```js
db.movies.find({ $and: [{year: 2000}, {rate:  "8.5"}]})

```

 





### 7. Retrieve all documents from the `movies` collection where the field `year` equals `2000` **OR** the `year` equals `2005`.

**<u>Your query</u>**:

```js
db.movies.find({ $or: [{year: 2000}, {year:  2005}]})
```

 





### 8. Retrieve all documents from the `movies` collection that do not have a rate of “9.0” and limit the result to 10 documents.

**<u>Your query</u>**:

```js
db.movies.find({ rate: { $ne: "9.0"} }).limit(10)
```

 





### 9. Retrieve all documents from the `movies` collection where field `director` is `not` "Steven Spielberg" `or` "Quentin Tarantino".  

### Display only `title` and `director` fields for each document.

**<u>Your query</u>**:

```js
  db.movies.find(
    { 
    	$nor: [
      	{ director:"Steven Spielberg" },
      	{ director:"Quentin Tarantino"}
    	] 
    }, 
    {title: 1, director: 1, _id: 0}
  )
```

 





### 10. Retrieve all documents from the `movies` collection, using the projection return only the fields `title`, `year`, `genre` and exclude field `_id`.

**<u>Your query</u>**:

```js
  db.movies.find({}, {title: 1, year: 1, genre: 1, _id: 0})
```

 





### 11. Retrieve all documents from the `movies` collection including only `title` field , using and sort them by `name` 

**<u>Your query</u>**:

```js
  db.movies.find({}, {title: 1}).sort({title: 1})
```

 





### 12. Retrieve all documents from the `movies` collection including only `title`  and `director` fields ,  sort them by `name` , skipping first 5 documents

**<u>Your query</u>**:

```js
  db.movies.find({}, {title: 1, director: 1}).sort({title: 1}).skip(5)
```

 





### 13. Retrieve all documents from the `movies` collection where `director` field `equals`  "Robert Zemeckis"

**<u>Your query</u>**:

```js
  db.movies.find({ director: {$eq: "Robert Zemeckis"} } , {director: 1, title: 1})
```



 



### 14. Retrieve all documents from the `movies` collection where the `rate` field is different than "8.5". Using projection include only `title` and `rate` field, excluding `_id`

**<u>Your query</u>**:

```js
  db.movies.find({ rate: {$ne: "8.5"} } , {title: 1, rate: 1, _id: 0})
```



 

### 15. Retrieve all documents from the `movies` collection where the `year` field is greater than or equal 2015. Using projection include only `title` , `year`and `director` fields.

**<u>Your query</u>**:

```js
  db.movies.find({ year: {$gte: 2015} } , {title: 1, year: 1, director: 1, _id: 0})
```

 



### 16. Retrieve all documents from the `movies` collection where the `year` field is less than 2000. Using projection include only `title` , `year`and `director` fields.

**<u>Your query</u>**:

```js
  db.movies.find({ year: {$lt: 2000} } , {title: 1, year: 1, director: 1, _id: 0})
```

 



### 17. Retrieve all documents from the `movies` collection created in the years 2000, 2005 and 2010. Sort the result by `year` in ascending order.

**<u>Your query</u>**:

```js
  db.movies.find({ year: {$in: [2000, 2005, 2010] } } , {title: 1, year: 1}).sort({year: 1})
```

 



### 18. Retrieve all documents from the `movies` collection created in the years 1999 and 2010 and exluding the movie with `title` "Inception"

```js
  db.movies.find({ $and: [{ year: {$in: [1999, 2010] }}, { title: { $ne: "Inception" } }] }, {title: 1, year: 1})
```





### 19. Delete documents from the `movies` collection created in the year 1999. 

**<u>Your query</u>**:

```js
  db.movies.deleteMany({ year: 1999 })
```





### 20. Delete document from the `movies` collection with the `_id`  "5cbc6943c95c41149fd2f3bc".

 **<u>Your query</u>**:

```js
  db.movies.deleteOne({ _id: ObjectId("") })
```

 





### 21. Update all documents from the `movies` collection created in the `year` 2017 and add an additional named `rating`: 

```json
"rating": {
  rating: "PG",
  "violence": false,
  "drug_use": false,
  "strong_language": false
}
```

###  

**<u>Your query</u>**:

```js
db.movies.updateMany({ year: 2017 }, {$set: {rating: ratingObj}})
```

 





### 22. Update the document from the `movies` collection with  `title` "Dunkirk" and set `rating`  to "PG-13" and fields  `violence` and `strong_language` to `true`  : 



**<u>Your query</u>**:

```js
 db.movies.updateMany(
   { title: "Dunkirk" },
   {$set: { 
     "rating.rating": "PG-13",
     "rating.violence": true,
     "rating.strong_language": true
   }})
```

 





### 23. Delete documents from the `movies` collection using the titles provided in the array:

```js
let moviesToDelete = ["12 Angry Men", "Se7en", "Cidade de Deus", "Braveheart"]
```

###  

**<u>Your query</u>**:

```js
  db.movies.deleteMany(
    { 
      title: { 
      	$in: ["12 Angry Men", "Se7en", "Cidade de Deus", "Braveheart"] 
    	} 
    }
  )
```



<br>



### [Code Along - solution (give at the end)](https://github.com/ross-u/Code-Along-Mongo-Movies-Solution)