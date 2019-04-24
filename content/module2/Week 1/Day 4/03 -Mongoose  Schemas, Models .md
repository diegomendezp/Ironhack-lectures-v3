# Mongoose | Schemas, Models & Documents



## Learning Goals

After this lesson you will be able to:

- Implement more complex schemas
- Create, read, update and delete documents using Mongoose models
- Manipulate with Mongoose documents





### [Repo - empty - file structure only](<https://github.com/ross-u/Mongoose-advanced-schemas-models>)

### [Repo - done](<https://github.com/ross-u/Mongoose-advanced-schemas-models-done>)







### [Mongoose docs - Model](<https://mongoosejs.com/docs/api.html#Model>)





## Schemas

####  **A schema gives our database structure**.

#### It helps us ensure consistency in our database and we are less likely to:

- **Add fields that shouldn’t exist** (because you did define it in your schema).
- **Forget fields that are required**.
- **Use the wrong type in a field**







## Schema allows us to:

- specify the type that each field in the document must have
- specify the default value if value was not given
- Type Validation









## Schema Data Types

#### A Schema Data Type is a configuration object for an individual field / in the document:

### [SchemaTypes](https://mongoosejs.com/docs/schematypes.html#schematypes)







## Schema Data Types Validation

#### Besides type of the fields,  we can set more detailed validation by defining more properties:

<3http://materials.ironhack.com/s/r1AXC2G6EN7#schema-data-types-validation>











## Clone the structure Repo

### [Repo - empty - file structure only](<https://github.com/ross-u/Mongoose-advanced-schemas-models>)











## Creating a Schema

#### To create a schema we use a `mongoose.Schema` constructor.





**models/ClientModel.js**

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Schema constructor

// CREATE THE SCHEMA
const clientSchema = new Schema({
  name:{ type: String, required: true, unique: true },
  
  age: { type: String, required: true },
  
  accountActive:{ type: Boolean, default: true },
  
  balance: { type: Number, required: true },
  
  payments:{ type: [paymentSchema], required: true },
});
```





**schemas/paymentSchema.js**

```js
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

// CREATE A SCHEMA
const paymentSchema = new Schema({
  date:{ type: Date, default: Date.now },
  
  amount:{ type: Number, required: true, default: 0 }
});

// EXPORT
module.exports = paymentSchema;
```









## Referencing one Schema as a Type in another Schema!





#### Import `paymentSchema` into  **`models/ClientModel.js`**   and update it

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Schema constructor

// IMPORT THE SCHEMA TO USE IT AS A NESTED TYPE
const paymentSchema = require('../schemas/paymentSchema');

// CREATE THE SCHEMA
const clientSchema = new Schema({
  name:{ type: String, required: true, unique: true },
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









## INSERTING DOCUMENTS - Model.create

```js
// INSERTING DOCUMENTS - `Model.create`
// https://mongoosejs.com/docs/api.html#model_Model.create

let client1 = {
  name: "Lidia Campos",
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









## RETRIEVE A SINGLE DOCUMENT - Model.findbyID

```js
$ mongo
> use iron-bank
db.clients.find()
```



```js
// RETRIEVE A SINGLE DOCUMENT - `Model.findById`
//https://mongoosejs.com/docs/api.html#model_Model.findById

Client.findById('5cc0cc295543162c7451b79b')
  .then( (result) => console.log(result))
  .catch( (err) => console.log(err));

```







## INSERT MULTIPLE DOCUMENTS - Model.insertMany

```js
//  INSERT MULTIPLE DOCUMENTS - `Model.insertMany`
//  https://mongoosejs.com/docs/api.html#model_Model.insertMany

Client.insertMany(data)
  .then( (result) => console.log(result))
  .catch(err=> console.log(err))
```









## RETRIEVE DOCUMENTS  -  Model.find

```js
//  RETRIEVE DOCUMENTS  - `Model.find`
//  https://mongoosejs.com/docs/api.html#model_Model.find

Client.find()
  .then((result) => {
    let total = 0;
    result.forEach((client) => total += client.balance);

    console.log(`TOTAL: ${(total).toFixed(2)} USD`);
  })
  .catch(err => console.log(err));
```









## UPDATE ONE DOCUMENT

```js
// UPDATE ONE DOCUMENT  - Model.findOneAndUpdate
// https://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate

const multiplePayments = [{amount: 650}, {amount: 550}, {amount: 450}];

Client.findOneAndUpdate({ name: 'Carol Whitney' }, { $set: { payments:  multiplePayments } })
  .then((result) => console.log('Field payments successfuly updated', result))
  .catch(err => console.log(err));
```







## DELETE ONE DOCUMENT

```js
// DELETE ONE DOCUMENT -  Model.deleteOne
//https://mongoosejs.com/docs/api.html#model_Model.deleteOne

Client.deleteOne({ name:'Maddox Leon'})
   .then( (result) => console.log('Success deleting document', result))
   .catch(err => console.log(err));
```

