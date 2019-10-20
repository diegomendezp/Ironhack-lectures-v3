---
title: "Mongoose Relationships"
date: 2018-12-28T16:35:19+01:00
draft: false
weight: 12
pre: "<b>12. </b>"
week: 4 
day: 4
---

## Lecture Notes

### Relations

#### 1:1

__user__

```javascript
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
```

__event__

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const homeSchema = new Schema({
  name: String,
  owner: { type: ObjectId, ref: 'User' }
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
```





#### 1:N or N:M

__user__
```javascript
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
```



__event__

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const eventSchema = new Schema({
  name: String,
  date: Date,
  attendees: [{
    type: ObjectId,
    ref: 'User'
  }]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
```



#### subschema

__review__
```javascript
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  stars: Number,
  author: String
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
```

__product__

```javascript
const mongoose = require('mongoose');
const Review   = require('./review');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
  name       : String,
  price      : Number,
  imageUrl   : String,
  description: String,
  reviews    : [Review.schema]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
```





#### with-location

```javascript
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  description: String,
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
});

restaurantSchema.index({ location: '2dsphere' });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
```

## Resources

## Ironhack Learning Unit
