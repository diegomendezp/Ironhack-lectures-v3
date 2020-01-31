# MongoDB | Data Models





##### [LMS - Lesson and Examples](<http://materials.ironhack.com/s/rJOXAnz6NVm#referencing-documents-relations>)



### [Schema Basics - Relationship Types](<http://learnmongodbthehardway.com/schema/schemabasics/>)







## Document Structure

Designing data models for MongoDB applications focuses on the structure of documents and how it represents relationships between data. 

We can create relationships between collections in Two ways:



- Referencing documents
- Embedding documents







## Referencing documents - Relations





- **Reference** stores the relationships between data by including ids from one document to another. 
- Structures of collections that use references to store and organize documents are  called **normalized** data models.





#### [Normalization - CS Wiki](https://computersciencewiki.org/index.php/Normalization)

- **Normalization is a database design method and a process of systematically breaking a complex table / collection into simpler, smaller, easier to manage collections/ tables**.
- Purpose of Normalization is to produce a clearer, more readable and more scalable data model.













![img](https://i.imgur.com/GmBjx9W.png)



If we want to get the `contact` information document from `contacts` collection for a particular user , 

first we’ll get the `_id` of the user from `user` collection, and then we’ll make a second query to obtain the contact information based on the `_id` obtained previously.





**Example **



###### USER COLLECTION

```js
{
   _id: ObjectId("593e7a1a4299c306d656200f"),	// U1
   name: "Willy",
   lastName: "Doe",
   email: "willydow@gmail.com",
   birthday: 1990-12-14 01:00:00.000,
   phone: "123412399"
}
```



###### ADDRESS COLLECTION

```js
{
   _id: ObjectId("59f30dd86f0b06a96e31bbb9"),		// A1
   street: "123 Fake Street",
   city: "Faketon",
   state: "MA",
   zip: "12345",
   user: ObjectId("593e7a1a4299c306d656200f"),		// U1
}
```





**To get the address of the current user, we need 2 queries :**

```js

db.users.findOne({ email: "willydow@gmail.com"}, { _id: 1 });		
// This returns an ObjectId("593e7a1a4299c306d656200f")


db.address.find(
  { user: ObjectId("593e7a1a4299c306d656200f") }		// U1
)

/* This returns the address object

{
   _id: ObjectId("59f30dd86f0b06a96e31bbb9"),		//	A1
   street: "123 Fake Street",
   city: "Faketon",
   state: "MA",
   zip: "12345",
   user: ObjectId("593e7a1a4299c306d656200f"),	// U1
}

*/
```



<br>



## Embedding documents

Another way of relating documents is by **embedding them**, saving the related document inside the main one. As you can see in the following picture:

![img](https://i.imgur.com/yrliwPP.png)

[OPEN IMAGE](https://i.imgur.com/GmBjx9W.png)





Previous example, but this time with embedded documents:



###### USER COLLECTION (with embedded **Address**)

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



### Embedding Multiple Sub-documents

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



<br>



## Defining Your Document Schema

You should start the schema design process by considering the application use, query requirements, and how each document or collection will be linked to each other.







## Relationship types

Referencing the documents from other collections via the foreign key (Unique id) enables us to scale our database and normalize it to avoid duplication of data.





#### Foreign key  - Unique id of a document from another collection





#### One-To-One (1:1)

One document (collection) holds only 1 <u>reference</u> to <u>one document</u> <u>in another collection</u>.

The connection between these 2 documents in the opposite collections is unique.



#### One-To-Many (1:N)

One document (collection) is referenced by <u>many other</u> <u>documents</u> <u>in another collection</u>, while the other side's (Many) relationship is only to a single document.





#### Many-To-Many (N:M)

Is the <u>relation between 2 collections</u> where <u>each collection's documents</u> can have <u>many connections to the opposite collection</u>. 

Two connecting connections can have many relationships between each other.





<br>



<hr>



## 1:1



### Model One-to-One (1:1) Relationships

One document (collection) holds only 1 <u>reference</u> to <u>one document</u> <u>in another collection</u>. 

The connection between these 2 documents in the opposite collections is unique.





###### USER COLLECTION

```js
{
   _id: ObjectId("593e7a1a4299c306d656200f"),	// U1
   name: "Bob Codebraker",
   email: "bob.codebraker@mail.com"
}
```

###### ADDRESS COLLECTION

```js
{
   _id: ObjectId("3f2e4b1a4299c306d656200f"),	// A1
   user_id: ObjectId("593e7a1a4299c306d656200f"),
   street: "123 Fake Street",
   city: "Faketon",
   state: "MA",
   zip: "12345"
}
```





#### Embedding is sometimes preferred

In the One-to-One relationship Embedding can be choosed as the preferred way to model the relationship if it will be the more efficient to retrieve the document (1 query instead of 2 queries).



<br>







<br>

## 1:N

### Model One-to-Many Relationships with Embedded Documents

One document (collection) is referenced by <u>many other</u> <u>documents</u> <u>in another collection</u>, while the other side's (Many) relationship is only to a single document.



###### USER COLLECTION

```js
{
   _id: ObjectId("593e7a1a4299c306d656200f"),		// U1
   name: "Bob Codebraker",
   email: "bob.codebraker@mail.com"
}
```



###### ADDRESS COLLECTION

```js
{
   _id: ObjectId("3f2e4b1a4299c306d656200f"),	// A1
   street: "123 Fake Street",
   city: "Faketon",
   user: ObjectId("593e7a1a4299c306d656200f")		// U1
}

{
   _id: ObjectId("15fe7a12f29dc36d65632f0c"),	// A2
   street: "1 Some Other Street",
   city: "Boston",
   user: ObjectId("593e7a1a4299c306d656200f")		// U1
}
```





<br>





###   :thumbsdown: Embedding instead of using One-To-Many relationship  - :thumbsdown:

The above approach with embedded documents would cause <u>duplication of data</u> in the Address collection. Therefore referencing is a better approach.

###### ADDRESS COLLECTION

```js
{
  _id: ObjectId("3f2e4b1a4299c306d656200f"),	// A1
  street: "123 Fake Street",
  city: "Faketon",
	user: {
  	name: "Bob Codebraker",
   	email: "bob.codebraker@mail.com"
	}
}

{
  _id: ObjectId("15fe7a12f29dc36d65632f0c"),	// A2
  street: "1 Some Other Street",
  city: "Boston",
  user: {
  	name: "Bob Codebraker",
   	email: "bob.codebraker@mail.com"
	}
}
```



<br>





## N:M

### Many-To-Many Relationship (Two way embedding) - Example



###### USER COLLECTION

```js
{
   _id: ObjectId("7f337a1a42f9c305d656201d"),	// U1
   name: "Andy Debuggerowski",
   addresses: [ ObjectId("3f2e4b1a4299c306d656200f") ]	// A1
},

{
   _id: ObjectId("593e7a1a4299c306d656200f"), // U2
   name: "Bob Codebreaker",
   addresses: [
     ObjectId("3f2e4b1a4299c306d656200f"),	// A1
     ObjectId("15fe7a12f29dc36d65632f0c")		// A2
   ]
}
```



###### ADDRESS COLLECTION

```js
{
   _id: ObjectId("3f2e4b1a4299c306d656200f"),	// A1
   street: "123 Fake Street",
   city: "Faketon",
   description: 'Hippster Inc. Headquarters',
   users: [
     ObjectId("7f337a1a42f9c305d656201d"),	// U1
     ObjectId("593e7a1a4299c306d656200f")		// U2
   ]
},

{
   _id: ObjectId("15fe7a12f29dc36d65632f0c"),	// A2
   street: "2010 Marvel Ave",
   city: "Metropolis",
   description: 'Apartment',
   users: [ObjectId("593e7a1a4299c306d656200f")]	// U2
}
```





<br>



#### Many-To-Many Simplified



###### USER COLLECTION

```javascript
{
   _id: U1,
   name: "Andy Debuggerowski",
   addresses: [ A1 ]
},

{
   _id: U2,
   name: "Bob Codebreaker",
   addresses: [ A1, A2 ]
}
```



###### ADDRESS COLLECTION

```js
{
   _id: A1,
   street: "123 Fake Street",
   city: "Faketon",
   description: 'Hippster Inc. Headquarters',
   users: [ U1, U2 ]
},

{
   _id: A2,
   street: "2010 Marvel Ave",
   city: "Metropolis",
   description: 'Apartment',
   users: [ U2 ]
}
```





<br>



### [Independent Practice (15 min) - in pairs](<http://materials.ironhack.com/s/rJOXAnz6NVm#independent-practice-10-min>)







###  Additional Resources

<https://dbdiagram.io/>

[https://creately.com](https://creately.com/)



