# MongoDB | Data Models





### [LMS - Lesson and Examples](<http://materials.ironhack.com/s/rJOXAnz6NVm#referencing-documents-relations>)





## Relationship types

#### One-To-One (1:1)

#### One-To-Many (1:N)

#### Many-To-Many (N:M)



### [Schema Basics - Relationship Types](<http://learnmongodbthehardway.com/schema/schemabasics/>)







## Document Structure

Designing data models for MongoDB applications focuses on the structure of documents and how it represents relationships between data. 

We can create relationships between collections in Two ways:



- Referencing documents
- Embedding documents







## Referencing documents - Relations





- **Reference** stores the relationships between data by including ids from one document to another. 

- Structures of collections that use references to store and organize documents are  called **normalized** data models.

- [Normalization - CS Wiki](https://computersciencewiki.org/index.php/Normalization)

- Normalization is a database design method and a process of systematically breaking a complex table / collection into simpler, smaller, easier to manage collections/ tables.

- Purpose of Normalization is to produce a clearer, more readable and more scalable data model.













![img](https://i.imgur.com/GmBjx9W.png)



If we want to get the `contact` information document from `contacts` collection for a particular user , 

first we’ll get the `_id` of the user from `user` collection, and then we’ll make a second query to obtain the contact information based on the `_id` obtained previously.





**Example 2**



**User** Collection

```js
{
   _id: ObjectId("593e7a1a4299c306d656200f"),
   name: "Willy",
   lastName: "Doe",
   email: "willydow@gmail.com",
   birthday: 1990-12-14 01:00:00.000,
   phone: "123412399"
}
```



**Address** Collection

```js
{
   _id: ObjectId("59f30dd86f0b06a96e31bbb9"),
   user_id: ObjectId("593e7a1a4299c306d656200f"),
   street: "123 Fake Street",
   city: "Faketon",
   state: "MA",
   zip: "12345"
}
```



**to get the user's address:**

```js
db.address.find(
  { user_id: ObjectId("593e7a1a4299c306d656200f") }
)
```



<br>



## Embedding documents

Another way of relating documents is by **embedding them**, saving the related document inside the main one. As you can see in the following picture:

![img](https://i.imgur.com/yrliwPP.png)

[OPEN IMAGE](https://i.imgur.com/GmBjx9W.png)





Previous example, but this time with embedded documents:



**User** Collection (with embedded **Address**)

```js
{
  _id: ObjectId("593e7a1a4299c306d656200f"),
  name: "Willy",
  lastName: "Doe",
  email: "willydow@gmail.com",
  birthday: 1990-12-14 01:00:00.000,
  phone: "123412399",
  address: {
    street: "123 Fake Street",
    city: "Faketon",
    state: "MA",
    zip: "12345"
  }
}
```





**to get the users address:**

```js
db.user.find(
  { _id: ObjectId("593e7a1a4299c306d656200f") }
)
```



### Multiple Sub-documents

When we have multiple documents (sub-documents) that can embed in the same component, in this case, `addresses` will be an array of objects.

```js
{
   _id: ObjectId("593e7a1a4299c306d656200f"),
  name: "Willy",
  lastName: "Doe",
  email: "willydow@gmail.com",
  birthday: 1990-12-14 01:00:00.000,
  phone: "123412399",
  addresses: [
    {
      street: "123 Fake Street",
      city: "Faketon",
      state: "MA",
      zip: "12345"
    },
    {
      street: "1 Some Other Street",
      city: "Boston",
      state: "MA",
       zip: "12345"
     }
  ]
}
```





## Defining Your Document Schema

You should start the schema design process by considering the application use, query requirements, and how each document or collection will be linked to each other.







### Model One-to-One Relationships with Embedded Documents



```js
{
   _id: ObjectId("593e7a1a4299c306d656200f"),
   name: "Joe Bookreader"
}


{
   patron_id: ObjectId("593e7a1a4299c306d656200f"),
   street: "123 Fake Street",
   city: "Faketon",
   state: "MA",
   zip: "12345"
}
```





### Model One-to-Many Relationships with Embedded Documents



```js
{
   _id: ObjectId("593e7a1a4299c306d656200f"),
   name: "Joe Bookreader"
}

{
   patron_id: ObjectId("593e7a1a4299c306d656200f"),
   street: "123 Fake Street",
   city: "Faketon",
   state: "MA",
   zip: "12345"
}

{
   patron_id: ObjectId("593e7a1a4299c306d656200f"),
   street: "1 Some Other Street",
   city: "Boston",
   state: "MA",
   zip: "12345"
}
```







### Model Many-to-Many Relationships - Two way embedding





### [Many To Many Example](<http://learnmongodbthehardway.com/schema/schemabasics#two-way-embedding>)





### [Independent Practice (10 min) - in pairs](<http://materials.ironhack.com/s/rJOXAnz6NVm#independent-practice-10-min>)







###  Additional Resources

<https://dbdiagram.io/>

[https://creately.com](https://creately.com/)

