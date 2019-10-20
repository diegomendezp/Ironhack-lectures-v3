---
title: "JS Data Structures"
date: 2018-11-12T12:22:06+01:00
draft: false
weight: 12
week: 1
day: 4
pre: "<b>12. </b>"
---

# JS | Data structures - Objects and Arrays



### What is a data structure

A data structure is *a particular way of organizing data.*

*The better we can organize our data, the better we can represent people, places, objects, items; the world around us, in code.*





### Differences between `Object` and `Array` and type checking

- Difference between array and object ? Where would you use them?

  

- Type checking and special cases (array and null):

  - `typeof <objectVariable>`

    

  - `typeof <array>` - returns  `"object"`

    - solution `Array.isArray()` method

  

  - `typeof null` - returns `"object"`  - 

    - solution `(typeof objVar === 'object') && (objVar !== null)`

    
    
    ```js
    // Type checking of arrays
    var arr = [];
    
    // Wrong - We can't check if the value is an array
    console.log(typeof arr);
    
    // Right Way
    console.log(Array.isArray(arr));
    
    
    
    // Type checking of null
    const nullVar = null;
    
    // Wrong - We can't check if the value is null
    console.log(typeof nullVar);
    
    // Right Way
    console.log(nullVar === null);
    
    
    
    // Type checking of objects
    var obj1 = { name: 'Marshmallow' };
    
    // Error prone - because `typeof` array and null is 'object' 
    console.log(typeof obj1 === 'object');
    
    // Right Way
    if (
    	typeof obj1 === 'object' && 
    	obj1 !== null && 
      !Array.isArray(obj1)
    ){
    	console.log(nullVar === null);  
    }
    
    ```
    
    

- Nested arrays example

```js
// Matrix
var matrix = [
  [100,345,544,346,868,996],
  [250,323,764,766,128,456],
  [467,215,424,99,678,133],
  [197,544,154,312,238,124],
  [132,390,457,467,468,561],
];

// Console log number 99 from the matrix
console.log(matrix[0][0]);
```



- Nested objects and other data types example

```js
var obj2 = {

  propertyOne: "I am a string",
  propertThree: true,
  propertyFour: 101,
  
  propertyFive: {
    prop1: "I am a string as well",
    prop2: false,    
    prop3: {
      somePropName1: "hello",
      somePropName1: "world"
    }
  },
    
  propertySix: {
    prop1: ['Bob', 'Sarah', 'John'],
    prop2: 123
  },
  
  propertySeven: [],
  propertyEight: null,
  propertyNine: undefined
};
```





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





### [Exercise 1 - Cohorts - CODEPEN](https://codepen.io/Denzelzeldi/pen/poozjzG?editors=0011) **(10 min)**

### [Exercise 2 - Objects Library](https://gist.github.com/ross-u/b46b1a4c725b9555186c65799f07c4e3) (10 min)



<br>

​	

## Resources

- [Back to Basics: JavaScript Objects](https://www.sitepoint.com/back-to-basics-javascript-object-syntax/)
- [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

