# Mongoose | Schemas, Models & Documents





### [Repo - empty - file structure only](<https://github.com/ross-u/Mongoose-advanced-schemas-models>)



### [Repo - done](<https://github.com/ross-u/Mongoose-advanced-schemas-models-done>)







### [Mongoose docs - Model](<https://mongoosejs.com/docs/api.html#Model>)





## Schemas

#####  A schema gives our database a structure.

##### It helps us ensure consistency in our database and prevent:

- **Adding document with fields that shouldn’t exist** (because you did define it in your schema).
- **Forgetting to set data for fields that are required**.
- **Use the wrong data type in a field**.





<br>



## Schema allows us to:

- specify the data type for each document field (type validation).
- specify the default value, if no value was given when inserting the document.

  

<br>





## Schema Data Types

- A Schema Data Type is set for each field in the Schema

- It can be set with a simple notation or a inside a configuration object for more detailed settings of the field:

### [Mongoose - SchemaTypes](https://mongoosejs.com/docs/schematypes.html#schematypes)





<br>



## Schema Data Types Validation

#### Besides type of the fields,  we can set more detailed validation by defining more properties:

### [List of custom validation properties](https://gist.github.com/ross-u/83a2b5ad4ceb3217ee9489b48ed98c48#schema-data-types-validation)



### [Mongoose Docs - Validation](https://mongoosejs.com/docs/validation.html#built-in-validators)



<h1 style="background: lightblue">1</h1>



## Code Along  (or Demo)

<br>



### Clone the structure Repo

### [Starter Repo - file structure & data only](<https://github.com/ross-u/Mongoose-advanced-schemas-models>)

```bash
mkdir 01-mongoose-schemas-models 

cd 01-mongoose-schemas-models

git clone https://github.com/ross-u/Mongoose-advanced-schemas-models.git .

code .
```

<br>



### Install the dependencies

```bash
npm install
```





<br>



<h1 style="background: lightblue">2</h1>

## Creating a Schema



##### To create a schema we use a `mongoose.Schema` constructor.



<br>



##### `models/ClientModel.js`

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Schema constructor

// CREATE THE SCHEMA
const clientSchema = new Schema({
  name:{ type: String, required: true },
  
  age: { type: String, required: true },
  
  accountActive:{ type: Boolean, default: true },
  
  balance: { type: Number, required: true },
  
  payments:{ type: [paymentSchema], required: true },
});


// CREATE MODEL
// Future Step ...
```



<br>



##### `schemas/paymentSchema.js`

```js
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

// CREATE A SCHEMA
const paymentSchema = new Schema({
  date:{ type: Date, default: Date.now },
  
  amount:{ type: Number, default: 0 }
});

// EXPORT
module.exports = paymentSchema;
```



<br>



<h1 style="background: lightblue">3</h1>

### Referencing one Schema as a Type in another Schema



<br>



#### Import `paymentSchema` into  **`models/ClientModel.js`**   and update it



##### `models/ClientModel.js`

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Schema constructor

// IMPORT THE SCHEMA TO USE IT AS A NESTED TYPE
const paymentSchema = require('../schemas/paymentSchema');


// CREATE THE SCHEMA
const clientSchema = new Schema({
  name:	{ type: String, required: true, unique: true },
  age: { type: String, required: true },
  accountActive:{ type: Boolean, default: true },
  balance: { type: Number, required: true },
  payments:{ type: [paymentSchema], required: true },
});


// CREATE THE MODEL
const Client = mongoose.model('Client', clientSchema);


// EXPORT THE MODEL
module.exports = Client;

```





<br>



<h1 style="background: lightblue">4</h1>



### Inserting Documents - `Model.create()`



##### `clients.js`

```js
// INSERTING DOCUMENTS - `Model.create`
// https://mongoosejs.com/docs/api.html#model_Model.create

let client1 = {
  name: "Alberto Marcos",
  age: 60,
  accountActive: true,
  balance: 31218.56,
  payments: []
}

Client.create( client1 , (err, result) => {
    if (err) console.log(err);
    else console.log('Document inserted', result);
  }
);
```





### *** Run the app with node (or install nodemon):  

```bash
node clients.js
```

 



<br>

<h1 style="background: lightblue">5</h1>



### Retrieve a single document - `Model.findById()`



Get the if of previously inserted document using the **`mongo`** shell: 

```bash
$ mongo
> use iron-bank
db.clients.find()
```



<br>

##### `clients.js`

```js
// RETRIEVE A SINGLE DOCUMENT - `Model.findById`
//https://mongoosejs.com/docs/api.html#model_Model.findById

Client.findById('5cc0cc295543162c7451b79b')
  .then( (result) => console.log('findById() ', result))
  .catch( (err) => console.error(err));

```





<br>



<h1 style="background: lightblue">6</h1>

### Insert multiple documents - `Model.insertMany()`

```js
//  INSERT MULTIPLE DOCUMENTS - `Model.insertMany`
//  https://mongoosejs.com/docs/api.html#model_Model.insertMany

Client.insertMany(data)
  .then( (result) => console.log(result))
  .catch( (err) => console.error(err));
```





<br>



<h1 style="background: lightblue">7</h1>



### Retrieve Documents  -  `Model.find()`

```js
//  RETRIEVE DOCUMENTS  - `Model.find`
//  https://mongoosejs.com/docs/api.html#model_Model.find

// Can be used without a query to retrieve all documents
Client.find()
  .then((result) => {
    let total = 0;	// of all client balances
    result.forEach((client) => total += client.balance);

    console.log(`TOTAL: ${(total).toFixed(2)} USD`);
  })
  .catch(err => console.log(err));
```



Or with `reduce()`

```js
Client.find().then(result => {
  let total = result.reduce((total, client) => {
    return (total + client.balance);
  }, 0);

  console.log(`REDUCED TOTAL: ${total.toFixed(2)} USD`);
});
```





<br>



<h1 style="background: lightblue">8</h1>



### Update one document `Model.findOneAndUpdate()` 

```js
// UPDATE ONE DOCUMENT  - Model.findOneAndUpdate
// https://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate

const multiplePayments = [{amount: 650}, {amount: 550}, {amount: 450}];

Client.findOneAndUpdate({ name: 'Carol Whitney' }, { $set: { payments:  multiplePayments } })
  .then((result) => console.log('Field payments successfuly updated', result))
  .catch(err => console.log(err));
```





<br>

<h1 style="background: lightblue">9</h1>



### Delete one document `Model.deleteOne`

```js
// DELETE ONE DOCUMENT -  Model.deleteOne
//https://mongoosejs.com/docs/api.html#model_Model.deleteOne

Client.deleteOne({ name:'Maddox Leon'})
 .then( (result) => {
    if (result.deletedCount === 0) {
      throw new Error('deleteOne() - Document instance doesn\'t exist')
    }
    else console.log('Success deleting document', result)
  }
).catch(err => console.log(err));
```

