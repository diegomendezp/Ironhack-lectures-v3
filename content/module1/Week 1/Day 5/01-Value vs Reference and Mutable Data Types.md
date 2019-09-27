![img](https://i.imgur.com/1QgrNNw.png)

# JS | Value vs Reference and Mutable Data Types



https://www.ecma-international.org/ecma-262/10.0/index.html#sec-ecmascript-language-types



There are 7 basic *data types* in *JavaScript*.  Primitive data types are string, number, boolean, null, undefined, symbol. Everything else is an **Object** type.





![img](https://dotnettricks.blob.core.windows.net/img/javascript/js-datatype.png)





[OPEN IMAGE](https://dotnettricks.blob.core.windows.net/img/javascript/js-datatype.png)







### Primitives - passed (copied) by value

- Primitives: **string, number, boolean, null, undefined, symbol.** Everything else is an Object type.

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

- Non-primitives: **Objects** ( Objects, Arrays, Functions ... (OOS: Date and Symbol) ).

Variables holding a non-primitive value (object, array and function), are given a reference to that value. 

The object reference points to the object's location in memory.



### QUESTION:

**When we assign an object or array to a variable, what are we copying?**

```js
var myArrr = [];

```



- **Answer**: We are copying Variables that hold objects or arrays hold the “address in memory” which is the reference to that object or array, not the values.he reference in the memory.

  

  

  

- Reference - *address in memory*

  ```js
  const arr = []; // this creates an array in the memory
  
  /* What does the arr variable hold?
  	a) the copy of the object
  	b) the memory address, location of the array.
  */
  ```

  

  

  

  ## `==` and `===`

  When the equality operators, `==` and `===`, are used on reference-type variables, they check the reference. 

  

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

  

  
  
  
  
  **Interview Question 1** 
  
  ```js
  let person1 = {name: 'John', age: 50}
  let person2 = person1;
  
  // Question 1
  person2.name = 'Mark';
  console.log(person1); // ->   What is the result?
  
  // Question 2
  person1.age = 21;
console.log(person2); // ->	  What is the result?
  
// Answer
  //	{name: "Mark", age: 50}
//	{name: "Mark", age: 21}
  ```
  
  
  
  **Interview Question 2**
  
  ```js
  function changeAgeAndReference(student) {
      student.age = 21;
      student = { name: 'John', age: 50 };
      return student;
  }
  
  let person1 = { name: 'Rapha', age: 30 };
  
  let person2 = changeAgeAndReference(person1);
  
  console.log('person1 ->', person1); // -> ?
  console.log('person2 ->', person2); // -> ?
  
  // Answer:
  // {name: "Rapha", age: 21}
  // {name: "John", age: 50}
  
  // Why did this happen ?
  
// Explanation:
  // the catch here is that function creates it's own variable `student`, so when we //asssign it the new object, we assign the reference to another object.

  // On line 2 student points to the object passed as an argument, and we change it's age property to 21
// On the line 3 (//), JS reassigns a new object to the argument variable `student`, and it now points to the object in memory { name: 'John', age: 50 }
  

  ```

  

  

  ## How to copy an object

  ### Object.assign() - 

  Object assign is used to copy or overwrite properties from one object to another.
  
  It copies properties from `sourceObject` into `destinationObject`
  
  #### `variable = Object.assign(destinationObject, sourceObject)`
  
  #### copying via Object.assign (using empty object as destination)
  
  ```js
let brand = { brand: 'Toyota'. color: 'blue'}
  let car1 = Object.assign({} , brand);

  let car2 = Object.assign({} , car1);

  // car2 is a exact copy of car1, but they are 2 different objects in the memory

  ```
  
  
  
  ### But, Object.assign()  creates only a shallow copy
  
  *Object.assign()* creates so called **shallow copy** since all **nested properties still be copied by reference**.
  
  ```js
  const book1 = {
    author: "Charlotte Bronte",
    publishers: [
      { companyName: "AB" },
      { companyName: "CD" }
    ]
  }
  
  const book3 = Object.assign({}, book1);
  
  book1.publishers[0] = {
    companyName: "Cool Company" // change the name of the 1st publisher in the original (book1)
  }
  
  book1.author = "Test Test"; // change the aouthor name in the original (book1)
  
  console.log(book3); 
  
  
// console:
  //  { author: 'Charlotte Bronte', // <== THIS DIDN'T CHANGE
//    publishers: [ 
  //        { companyName: 'Cool Company' }, // <== THIS IS CHANGED SINCE IT'S COPIED BY REFERENCE
//        { companyName: 'CD' } 
  //    ] 
//  }
  ```

  

  

  ## How To Deep Copy Objects:

  - Custom function - Using `for...in` loop to loop through and copy all of the properties of the object and return the new copied object as a result

  -  `JSON.parse(JSON.stringify())` - Also called a poor man's object copy
  
  - using Underscore.js `_.clone` or lodash `_.cloneDeep` methods 
  
    
  
    #### Custom function - Let's see what happens line by line
  
    ```js
    function cloneObject(object) {
        let clone = {};
        for(let prop in object) {
            if(object[prop] !== null &&  typeof(object[prop]) === "object"){
                clone[prop] = cloneObject(object[prop]);
            } else {
                clone[prop] = object[prop];
            }
        }
        return clone;
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
  
    console.log(original === clonedObject);		// false
  console.log(original.family === clonedObject.family);	// false
    console.log(original.family[0] === clonedObject.family[0]); // false
  
    clonedObject.family[0] = { name: 'Danny', age: 40 };
    console.log(original.family[0]); // { name: 'Mark', age: 29 } // previous line didn't affect original object as it was copied and not referenced.
  ```
  
    
  
  #### JSON.parse(JSON.stringify())
  
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
  
clonedObject.family[0] = { name: 'Danny', age: 40 };
  console.log(original.family[0]);
console.log(clonedObject.family[0]);
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

