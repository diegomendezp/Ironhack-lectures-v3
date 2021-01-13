# JS | Data structures - Working with Objects and Arrays 



<br>



### Type checking arrays `[]` and objects `{}`



 <br>



  When type checking variables, it is important to be aware that
  `typeof` operator returns  `'object'` for arrays `[]`, objects `{}` and `null`.

  Check the below example:

```js
var myArr = [];

var myObj = {};

var myNull = null;

console.log(typeof myArr);  // 'object'
console.log(typeof myObj);	// 'object'
console.log(typeof myNull); // 'object'


// CHECK IF ARRAY
if ( Array.isArray(myArr) ) {
  console.log('VARIABLE IS AN ARRAY'); // true 
}

// CHECK IF NULL
if ( myNull === null ) {
  console.log('VARIABLE IS NULL'); // true
}


// CHECK IF OBJECT

//      		is object						 		 is not null					 is not an array
if ( (typeof myObj === 'object') && (myObj !== null)  && !Array.isArray(myObj) ) {
  console.log('IT IS AN OBJECT');
}

```



<br>



### Example of an object holding properties of various data types

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



<br>



### Various Data Structure Examples: 

- [Plunk API](<https://api.punkapi.com/v2/beers/random>)
- [NY Times API](<https://content.api.nytimes.com/svc/topics/v2/markets>) 
- [Glovo API](https://api.glovoapp.com/v3/stores/11281/addresses/18796/collections/27278)



<br>



### [Exercise 1 - Objects Library](https://gist.github.com/ross-u/b46b1a4c725b9555186c65799f07c4e3) (10 min)



### [Exercise 2 - Cohorts - CODEPEN](https://codepen.io/Denzelzeldi/pen/poozjzG?editors=0011) **(10 - 15 min)**





<br>

​	

## Resources

- [Back to Basics: JavaScript Objects](https://www.sitepoint.com/back-to-basics-javascript-object-syntax/)
- [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

