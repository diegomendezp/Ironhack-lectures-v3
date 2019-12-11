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

// List all the documents in the `movies` collection
db.orders.find().pretty()
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

```js
var result = db.orders.aggregate([ 
  { $match: { status: "A" } },
  { $group: { _id: "$cust_id", total: { $sum: "$amount" }  }  } 
])
                                                                                                     
result
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

- If MongoDB has an appropriate index to perform the query, it can decrease or limit the number of documents it needs to scan.



<br>



### [Indexing Example](http://learn.ironhack.com/#/learning_unit/6476)

Imagine we have a collection with millions of users and we query the MongoDB to return the users that live in a particular city.



Let’s look at a JavaScript simulation of a query without an index and then with an index

```js
function findCityWithoutIndex(cityName){
  
  const results = [];
  
  users.forEach(function(user){
    if (user.city == cityName) {
      results.push( user );
    }
  });
  
  return results;
}
```



<br>



```js
const index = {};

function createCityIndex(users){
  users.forEach( function(user) {
                      
    if (!index[user.city]) {
      index[user.city] = [user.id];
    } 
    else {
      index[user.city].push(user.id); 
    }
  })
}


// Index key:   city name
// Index value: array of all users in that city
// => { miami:     [ 1, 80000000 ],
//      barcelona: [ 2, 4, 6 ],
//      madrid:    [ 3, 5, 7 ] }
```



<br>



### Creating Indexes

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