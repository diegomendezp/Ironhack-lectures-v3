![img](https://i.imgur.com/1QgrNNw.png)

# JS | Value vs Reference and Mutable Data Types



https://www.ecma-international.org/ecma-262/10.0/index.html#sec-ecmascript-language-types



There are 7 basic *data types* in *JavaScript*.  Primitive data types are string, number, boolean, null, undefined, symbol. Everything else is an **Object** type.





![img](https://dotnettricks.blob.core.windows.net/img/javascript/js-datatype.png)





[OPEN IMAGE](https://dotnettricks.blob.core.windows.net/img/javascript/js-datatype.png)







### Primitives - passed (copied) by value

- Primitives: **string, number, boolean, null, undefined, Symbol.** Everything else is an Object type.

- Variables with **primitives** (data types) **hold the value** that we assigned to it.

- **By using assignment operator** `=`, **primitive data types are copied** to the variable.

  
  
  
  
  ```js
  let a = 10;
  let b = 'abc';
  
  let aCopy = a;
  let bCopy = b;
  
  // Distinct variables, hold the same value (values were copied)
  console.log('a -> ',a);	//	10
  console.log('aCopy -> ',aCopy);	//	10
  
  // Change the value of `a`
  a = 99;
  console.log('a -> ',a);	// 99
  console.log('aCopy -> ',aCopy);	// 10
  
  /*
Changing one does not change the other.
  Think of the variables as having no relationship to each other, as primitive value was copied, not referenced.
  */
  ```
  
  

### Non-primitives - passed (copied) by `reference`

- Non-primitives: **Objects** ( **Objects**,  **Arrays**,  **Functions** ...  (as well Date and Symbol) ).
- **Reference** - *Address in the memory* of the created *Object* / *Array* / *Function*.

- Variables assigned an Object type, are given a reference to that value stored in the memory (Object, Array, Function ). 

  

The object reference points to that object's location in memory.





### QUESTION 1:

**When we assign an object or array to a variable, what is assigned/given to the variable?**

```js
var myArr = [];

```



- **Answer**: Variable is assigned/given the “address in memory” which is the reference to that object or array, not the values.he reference in the memory.

  

  

  

- **QUICK QUESTION** 

  ```js
  const arr = []; // this creates an array in the memory
  
  /* What does the arr variable hold?
  	a) the copy of the object
  	b) the memory address, location of the array.
  */
  ```

  

  

  

  ## `==` and `===`

  Both equality operators, `==` and `===`, when used on reference-type variables, they check if the reference is the same. 

  

  If the variables contain a reference to the same item in the memory, it returns `true`.

  

  **IMPORTANT** -  2 objects or arrays look completely the same, but they don't reference the same object/array in the memory, they are not the same (when compared == / ===) .
  
  ```js
  let arr1 = [1,2];
  let arr2 = [1,2];
  
  let obj1 = { name: 'John', age: 25}
  let obj2 = { name: 'John', age: 25}
  
  // Even if the arrays contain identical elements
  console.log(arr1 == arr2);	// false
  console.log(arr1 === arr2);	//	false
  
  // Even if the objects contain identical properties
  console.log(obj1 == obj2);	// false
  console.log(obj1 === obj2);	//	false
  
  // When copying the reference
  let arr3 = arr1;
  console.log(arr3 === arr1);
  
  let obj3 = obj1;
console.log( obj3 === obj1);
  ```

  

  ### Let's practice :
  
  
  
  **Question 1**
  
  ```js
  let obj1 = {
    title: "foo";
  }
  
  let obj2 = obj1;
  
  obj2.title = 'bar';
  
  
	console.log(obj1.title); // ->   What is the result?
  ```
  
  
  
  
  
  **Question 2**
  
  ```js
  let person1 = {name: 'John', age: 50}
  let person2 = person1;
  
  // Question 1
  person2.name = 'Mark';
  console.log(person1); // ->   What is the result?
  
  // Question 2
  person1.age = 21;
  console.log(person2); // ->	  What is the result?
  
  ```



### [Value vs Reference Riddle - 2 rabbits and a magic hat](https://gist.github.com/ross-u/773621dc771f29dfd579725a655bc1eb) - Side Practice for those interested, not mandatory

  





  ## How to copy an object

  ### [Object.assign()]()  

  Object assign is used to copy or overwrite properties from one object to another.

  It copies properties from `sourceObject` into `destinationObject`.



  #### `Object.assign(destinationObject, sourceObject)`



  #### copying via Object.assign (using empty object as a destination)

  ```js
let brand = { brand: 'Toyota'. color: 'blue'}

let car = Object.assign({} , brand);

let newCar = Object.assign({} , car);

  // newCar is an exact copy of car, but they are 2 different objects in the memory (different addresses)

  ```

  

<br>



  ### But, Object.assign()  creates only a shallow copy



  `Object.assign()` creates a **shallow copy** since all <u>nested objects</u> are be <u>copied by reference</u>.

  ```js
  const book = {
    author: "Charlotte Bronte",
    publishers: [
      { companyName: "AB" },
      { companyName: "CD" }
    ]
  }
  
  const newBook = Object.assign({}, book);
  
  book.publishers[0] = {
    companyName: "Cool Company" // change the name of the 1st publisher in the original (book1)
  }
  
  book.author = "Sponge Bob"; // change the author name in the original (book)
  
  console.log(newBook); 
  
  
// console:
//  { author: 'Charlotte Bronte', // <== THIS DIDN'T CHANGE
//    publishers: [ 
//        { companyName: 'Cool Company' }, // <== THIS IS CHANGED SINCE IT'S COPIED BY REFERENCE
//        { companyName: 'CD' } 
//    ] 
//  }
  ```

  

### Copy an object using the `...` *spread operator* (shallow copy)

```js
const newBook2 = { ...book };

console.log(newBook2);
```



  

  ## How To Deep Copy Objects:

  - Custom function - Using `for...in` loop to loop through and copy all of the properties of the object and return the new copied object as a result

  -  `JSON.parse(JSON.stringify())` - Also called a poor man's object copy
  
  - using Underscore.js `_.clone` or lodash `_.cloneDeep` methods 
  
    
  
    #### Custom function - Let's see what happens line by line
  
    ```js
    function cloneObject(object) {
      let copy;
      
      if (Array.isArray(object)) {
      	copy = [];
      } else {
        copy = {};
      }
       
      
        for(let key in object) {
            if(typeof(object[key]) === "object" && object[key] !== null ){
                copy[key] = cloneObject(object[key]);
            } else {
                copy[key] = object[key];
            }
        }
        return copy;
    }
    
    let original = {
    	name: 'Sarah',
    	age: 35,	
    	family: [
        	{ name: 'Mark', age: 29 },
        	{ name: 'Linda', age: 33 }
    	] 
    }
    
    let clonedObject = cloneObject(original);
    
    console.log(original);
    console.log(clonedObject);
    
    
    // each object has distinct reference
    console.log('original === clonedObject', original === clonedObject);		// false 
    ```



### Using JSON.parse(JSON.stringify()) to copy arrays and objects



- [The JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method converts a JavaScript object or value to a JSON string.

  - [The JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) method parses a JSON string, and constructs the JavaScript value or object described by the string.



  ```js
let obj = { name:'Tom', job: 'Web Developer'}
let stringified = JSON.stringify(obj);

console.log(stringified);
console.log(typeof stringified);

let backToObject = JSON.parse(stringified);

console.log(backToObject);
console.log(typeof backToObject)
  ```

  



  #### **Important !** you don't need to understand what JSON.stringify internally does.

  ```js
  let original = {
  	name: 'Sarah',
  	age: 35,
  	family: [
      	{ name: 'Mark', age: 29 },
      	{ name: 'Linda', age: 33 }
  	] 
  }
  
let clonedObject = JSON.parse(JSON.stringify(original));
console.log(original);
console.log(clonedObject);
  ```

  

  

  ## How to copy an Array

  ### Shallow copy

  ```js
  //  Shallow copy means that nay nested objects or arrays are only copied by reference
  const arr = [1,2,3,'Hello','Ironhackers']
  
  // spread operator
  let newArr1 = [...arr];	// shallow copy
  
  //	array reverse
  let newArr2 = arr.reverse().reverse();	// shallow copy
  
  //	array concat
  let newArr3 = [].concat(arr); // shallow copy
  
  // array slice
  let newArr4 = arr.slice(); // shallow copy
  ```



### 	Deep copy - for multidimensional arrays

- #### Use `JSON.parse(JSON.stringify())`;

```js
// multidimensional array
const students = [
  ['Ana', 'John', 'Fabio'],
  ['Alex', 'Mike', [{name: 'Jo'}, {name: 'Bob'}]]
];

// using JSON.parse(JSON.stringify())
const ironhackers = JSON.parse(JSON.stringify(students));
students[0].push("Sandra");

console.log(students); // [ [ 'Ana', 'John', 'Fabio', 'Sandra' ],
  // [ 'Alex', 'Mike', 'Vero' ] ]
console.log(ironhackers); // [ [ 'Ana', 'John', 'Fabio' ], [ 'Alex', 'Mike', 'Vero' ] ]
```





## Mutability

Mutable methods are the ones that mutate/change the original array or object.

Immutable are ones that perform an action but don't change the original object or array.



##### Array methods - mutable/immutable

| Mutable methods | Immutable methods                | What they do |
| :-------------- | :------------------------------- | :----------- |
| .push()         | .concat()                        | adding       |
| .unshift()      | ES6 spread operator              | adding       |
| .splice()       | .slice()                         | removing     |
| .pop()          | .slice() and ES6 spread operator | removing     |
| .shift()        | .filter()                        | removing     |







- [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [The JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method
- [The JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) method
- [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Mutating vs non-mutating array methods](<https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/>)

