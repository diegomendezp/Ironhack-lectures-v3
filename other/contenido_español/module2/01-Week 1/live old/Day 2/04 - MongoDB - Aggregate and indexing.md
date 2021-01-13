# Aggregation Pipeline and Indexing



<br>



### Clone the Repository with the `json` files

```bash
git clone https://github.com/ross-u/MongoDB-Aggregation-Framework-and-Indexing

cd MongoDB-Aggregation-Framework-and-Indexing
```



#### [Repo with json data -  URL](https://github.com/ross-u/MongoDB-Aggregation-Framework-and-Indexing)



<br>



### Import the data via `mongoimport`

Using `mongoimport`, import the JSON data from the `orders.json` file and `restaurants.json` into the `advanced-mongo` database.





```bash
# Run mongod
brew services start mongodb-community

# Check if mongod process is running
ps -e | grep 'mongod'


# Import the data from `orders.json` to the `advanced-mongo` database
mongoimport --db advanced-mongo --collection orders --file orders.json --jsonArray

# Import the data from `restaurants.json` to the `advanced-mongo` database
mongoimport --db advanced-mongo --collection restaurants --file restaurants.json --jsonArray


# Run mongo shell
mongo
```



#### ... continued (Mac & Linux)

```js
// List databases
show dbs

// Switch to database `video`
use advanced-mongo

// Show collections
show collections

// List all the documents in the `orders` collection
db.orders.find()

// Increase the number of documents that Mongo shell shows
// https://docs.mongodb.com/manual/tutorial/configure-mongo-shell/#change-the-mongo-shell-batch-size
DBQuery.shellBatchSize = 300
```





## Aggregation Framework

- **Aggregation operations** process data records and return computed results.



- MongoDB’s aggregation framework is based on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into an aggregated result.

- Basically, the output of one “query” is the input of the next “query”.

- Every “query” in the pipeline is called stage.



<br>



#### 

![img](https://i.imgur.com/HErprCS.png)







# Using Aggregation Pipeline Stages





## [Video - MongoDB Aggregation Pipeline](https://www.youtube.com/watch?v=p5bFDy94cnA) (3 min)





<br>



### [ Stages - `aggregate()`](https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline)





![](https://i.imgur.com/ZLt2XmA.png)



<br>



Let's run the actual query and execute the above example:



**Run in `mongo` shell**



### `$match` aggregator

```js
var result1 = 
db.orders.aggregate([ { $match: { status: "A" }  }  ])
                                                                                                     
result1
```



### `$match` and `$group` aggregator

```js
var result2 = 
db.orders.aggregate([ 
  { $match: { status: "A" } },
  { $group: { _id: "$cust_id", total: { $sum: "$amount" }  }  } 
])
                                                                                                     
result2
```





**Another example:**

We group the documents to return one document representing all that include that `cust_id` and `$sum: 1` adds `+1` to the count for each matching document.  This way we get the count of matching documents

```js
db.orders.aggregate(
   [
     { $group: { "_id": "$cust_id", "count": { $sum: 1 }  }  }
   ]
)
```





<br>



# Indexing





- **Indexing** allows Databases to perform queries more efficiently.

- When a MongoDB collection doesn’t have indexes, MongoDB has to scan every single document to select the documents that match a query statement.

- If MongoDB has an appropriate index to perform the query, it can decrease or limit the number of documents it needs to scan, by focusing on a more narrow search region.



<br>



# JS Indexing example



### Use the repo [JS | Indexing Example](https://github.com/ross-u/JS-Indexing-Example.git)





## Getting Started

#### Clone the repo

```bash
# Go out of the previous project
cd ~

# Clone the repo
git clone https://github.com/ross-u/JS-Indexing-Example.git

cd JS-Indexing-Example

code .
```







### STEP 1

In our first step we will simulate looking for an "user object" using 2 search criterias (`id` and `city`) in the collection which is not indexed. 

In this example we have a really large array (40k objects :open_mouth: ), that serves as a mock/example of a database collection `users` .

If we try to search through all of the 40k users in order to find the last user with `id: 39999` and `city: "Los Angeles"`, there is a probability that we will have to traverse the entire collection (array in our case).



Let's create a function that does this search and let's time it's performance.



##### `index.js`

```js
console.log(users);

function findDocumentWithoutIndex(collection, id, city) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id === id && collection[i].city === city) {
      return collection[i];
    }
  }
}

console.time("Find user without index");

var foundUser = findDocumentWithoutIndex(users, 39999, "Los Angeles");

console.timeEnd("Find user without index");

console.log(foundUser);
```



<br>



### STEP 2

In order to optimize the search for a user by these 2 criterias ( `id` and `city`) we can create an index/dictionary, and sort all users **by** their **city**.



Let's create a function which takes the original user collection/array and creates a collection (object named `indexedUsers`)  indexed by `city` names.



```js
function createIndex(data) {
  const index = {};

  data.forEach(function(userData) {
    if ( ! index[userData.city]) {
      index[userData.city] = [userData.id];
    } else {
      index[userData.city].push(userData.id);
    }
  });
  return index;
}

console.time("Index the users by city");

const indexedUsers = createIndex(users);

console.timeEnd("Index the users by city");

// INDEXED USERS
console.log(indexedUsers);
```



<br>



### STEP 3

We can now time the performance of the same search this time in the indexed collection. 

Let's run the search and check it's performance.



```js
function findIndexedDocument(id, city) {
  for (let i = 0; i < indexedUsers[city].length; i++) {
    if (
      indexedUsers[city][i].id === id &&
      indexedUsers[city][i].city === city
    ) {
      return indexedUsers[city][i];
    }
  }
}

console.time("Find indexed user");

var foundUser2 = findDocumentByIdWithoutIndex(39999, "Los Angeles");

console.timeEnd("Find indexed user");
```



<br>



### CONCLUSION

We can see that it is much faster to search over a indexed chunk in a collection, rather than potentially traversing the entire collection from beginning to the end.





<br>

### Creating Indexes in MongoDB

In MongoDB, when we want to accelerate queries that use a particular (often queried) **field** we can create a new index on that collection.



### [`createIndex()`](https://docs.mongodb.com/manual/indexes/#create-an-index)



The `createIndex()` method takes the following structure object:

 `createIndex( { fieldName : < 1 || -1 >, ... } ) `



- For an ascending index, specify `1` .
- For a descending index, specify `-1`.







Let's create indexes:



**Run in `mongo` shell:**

```js
 db.restaurants.createIndex( { "cuisine": 1, "address.zipcode": -1 } )
```



The index orders its entries first by ascending `"cuisine"` values, and then, within each `"cuisine"`, by descending `"address.zipcode"` values.



<br>

