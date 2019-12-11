---
title: "MongoDB Utils"
date: 2018-12-28T16:18:07+01:00
draft: false
weight: 5
---

## Lecture Notes

### mongo shell
| Database Command | Explanation
|------------------|--------------
| `show dbs`       | List all the databases inside our mongo server
| `use <dbName>`   | This will switch to the database `dbName` or create it if it doesn't exist
| `db`             | Show the name of the current database
| `show collections ` | List all the collections inside the current database

### importing data from json
```
$ mongoimport \
    --db users \
    --collection contacts \
    --type csv \
    --headerline \
    --file contacts.csv
```
### CRUD Operations

- Create
  - `db.collection.insertOne(doc)`
  - `db.collection.insertMany([docs])`
- Read
  - `db.users.find(query, projection)`
- Update
  - `db.collection.updateOne()`
  - `db.collection.updateMany()`
- Delete
  - `db.collection.deleteOne()`
  - `db.collection.deleteMany()`

### Operators
  - Logical: `$and`, `$or`, `$ne`, `$nor`, `$in`, `$nin`, [Link](https://docs.mongodb.com/manual/reference/operator/query-logical/)
  - Comparision Operators: `$eq`, `$neq`, `$gt`, `$gte`, `$lt`, `$lte` [Link](https://docs.mongodb.com/manual/reference/operator/query-comparison/)
  - Array Operators: `$all`, `$elemMatch` [Link](https://docs.mongodb.com/manual/reference/operator/query-array/)
  - Projections [Link](https://docs.mongodb.com/manual/reference/operator/projection/)
  - Skip [Link](https://docs.mongodb.com/manual/reference/method/cursor.skip/)
  - Limit [Link](https://docs.mongodb.com/manual/reference/method/cursor.limit/)

## Practice

{{%attachments title="File" pattern=".*(zip)"/%}}

```bash
$ mongoimport --db restaurants --collection restaurants --file restaurants.json
```

This is an example document from the restaurants collection.
```json
{
  "address": {
     "building": "1007",
     "coord": [ -73.856077, 40.848447 ],
     "street": "Morris Park Ave",
     "zipcode": "10462"
  },
  "borough": "Bronx",
  "cuisine": "Bakery",
  "grades": [
     { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
     { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
     { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
     { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
     { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
  ],
  "name": "Morris Park Bake Shop",
  "restaurant_id": "30075445"
}
```

Practice the following queries:

Find the restaurant with id `30112340 `.

Find `May May Kitchen`.

Find the restaurants where their cuisine is `Tapas`.

Find the restaurants in postal code `11208`.

Find all restaurants that have a score greater or equal than `70`.

Find all restaurants in `Brooklyn` that have a score greater than `80`

All restaurants with `Chilean` or `Czech` cuisine.

All restaurants with `grade A` in second position of the array.

All restaurants with `grades A` or `B`.

All restaurants that have a review made in `2014-09-16`.

All restaurant their cuisine is `Tapas` ordered by name in `ascending` (normal) order.

How many restaurants have been graded after `2015-01-01`. 

Find the restaurants that has a review graded `A` and `score` greater then `20`

Find the restaurants that doesn’t have reviews 



## Tools

- [Mongo Compass](https://www.mongodb.com/products/compass) Better not to use!

## Resources

- [https://docs.mongodb.com/manual/reference/method/](https://docs.mongodb.com/manual/reference/method/)

## Ironhack Learning Unit

- [MongoDB CRUD](http://learn.ironhack.com/#/learning_unit/6471)

