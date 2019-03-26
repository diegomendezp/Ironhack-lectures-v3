---
title: "JS Data Structures"
date: 2018-11-12T12:22:06+01:00
draft: false
weight: 12
week: 1
day: 4
pre: "<b>12. </b>"
---

## Learning Objectives

- What is a data structure

  A data structure is *a particular way of organizing data.*

  ![:heavy_check_mark:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/heavy_check_mark.png) *The better we can organize our data, the better we can represent people, places, objects, items; the world around us, in code.*



- Difference between array and object ? Where would you use them?

- Type checking:

  - `typeof <objectVariable>`

  - `typeof <arrayVariable>` - returns  `"object"`

    - solution `Array.isArray()` method

  - `typeof null` - returns `"object"`  - 

    - solution `(typeof objVar === 'object') && (objVar !== null)`

    

- Nested arrays example
- Nested objects example
- Mixed nesting objects and arrays



- Real world application:
  - Databases
  - Web APIs

- examples
  - [Plunk API](<https://api.punkapi.com/v2/beers/random>)
  - https://www.nytimes.com/ (mobile)

    - list of articles with title, img (url and label), abstract, date

    - [nytimes api data example](<https://content.api.nytimes.com/svc/topics/v2/markets>) 

  - https://glovoapp.com/en/macchina-pasta-bar-2/ (mobile)
    - array of categories (sections) with different produts inside
    - https://api.glovoapp.com/v3/stores/11281/addresses/18796/collections/27278


```js
var cohorts = [{
  city: 'bcn',
  course: 'webdev',
  date: new Date('2018-06-11'),
  name: '2018 Aug',
  students: [{name: 'Julien', country: 'es'}, {name: 'Julio', country: 'us'}]
}, {
  city: 'bcn',
  course: 'webdev',
  date: new Date('2018-08-20'),
  name: '2018 Aug',
  students: [{name: 'John', country: 'en'}, {name: 'Paquito', country: 'es'}]
}];
```

- cohorts[0].students[0].name
- for (var ix = 0; ix < cohorts length>)
- for (var ox = 0; ox < cohort[ix].sudents.length>)
- if (country === 'en') { console.log(name); }



**Exercise**: 

 - create an array `library` ,

 - which contains objects.

 - each objects represents a book and has properties

    - title: string
    - pages: number
    - authors: array of strings
    - inStock: `boolean`

   ​	

## Resources

- [Back to Basics: JavaScript Objects](https://www.sitepoint.com/back-to-basics-javascript-object-syntax/)
- [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Ironhack Learning Platform