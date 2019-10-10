![img](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# ES6 | Basics and a bit more

## Learning Goals



- Strengthen understanding of **hoisting** and **scope**

- Learn `const` and `let` and their **scope**

- Learn the ES6 syntax feature:

   **template literals**, **destructuring**, **spread operator**,

- Start using arrow functions





## Recap - Intro to ES6

* [Versions of JavaScript](https://codeburst.io/javascript-wtf-is-es6-es8-es-2017-ecmascript-dca859e4821c)

* **ES6** most important changes:
- `let` and `const`
  	- Promises 
  	- Classes - class syntax
  	- Modules
  	- Template literals - aka template strings
  	- Default parameters 
  	- Destructuring assignment 






### ES7

- `.includes`   -  string or array
- `**`  exponentiation operator - same as in Python and Ruby





### ES8 a.k.a. 2017

- Async functions (abstraction on Promises) - no example in this lesson







### Hoisting

#### Function Declarations hoisting

JS executes code line by line, however there is a functionality called Hoisting.

```js
// function declaration hoisting

atTheEnd();

function atTheEnd() {
	console.log('Hello');
}
```



#### var hoisting 



```js
// var variable hoisting

console.log(name);

var city = 'Barcelona';
```





### Scope - `let`, `var`, `const`



#### What is scope:

Scope determines the accessibility (visibility) of variables from different parts of the code.

JavaScript has function scope by default - meaning that every function creates a new scope.



* #### Global variable 

  Global variable is a variable created in the global scope and a variable declared without the keyword (automatically global - avoid!)) - 
  
  All scripts and functions on page can access a globally declared variable.



* Global variables belong to to the global scope and can be accessed in the whole window (`window` object available in the browser) :

  ```js
  // Declaring variable without keyword - BAD PRACTICE!
  
  // Declaring global varriable - GOOD
  var globalVar = 'I am global';
  
  function print() {
    // Variable without keyword - BAD
    imposter = 'Imposter - declared without keyword';
  }
  
  print();
  
  console.log('WINDOW OBJECT -> ', window);
  console.log('Automatically global', window.imposter);
  ```

  

  #### scope of `var` - 

  `var` declared variables can have **global** of **function** (also called local) **scope**

  Example

  

  

  

  

  #### scope of `let` and `const`

  

  - **Block** - block is any code between open and closed curly braces `{}`.

    

  - `let` and `const` are block scoped.

    

  - `let` and `const`  **cannot be accessed** **before** they are **declared**  ~~(they hoist but are not initialized with `undefined`).~~ 

    

  ```js
  //  BLOCK SCOPE - let and cosnt variables
  let name = "Ironhacker";
  
  if (true) {
    let name = "Ted";
    console.log(`Name inside if block statement: ${name}`);
  }hoisting and temporal dead zone
  
  console.log(`Name outside if block statement: ${name}`);
  
  // Name inside if block statement: Ted
  // Name outside if block statement: Ironhacker
  ```

  

  <br>

  

  ## `let`

  

  #### `let`  can be updated, but it can't be redeclared

  ```js
  // THIS IS OK
  let message = "This is the first message.";
  message = "This is the second message.";
  
  // BUT THIS WILL THROW AN ERROR
  let message = "This is the first message.";
  let message = "This is the second message."; // <== Duplicate declaration "message" 
  ```

  

  #### `const` variables must be initialized in the moment of declaration.

  ```js
  const name1 = "John"; // <== CORRECT
  
  const name2;
  name2 = "John"; // WRONG! - This will throw an Error
  ```

  

  

  #### `const` variables can't be redeclared or assigned new value

  ```js
  // THIS WILL THROW AN ERROR
  const message = "This is the first message.";
  message = "This is the second message."; // <== "message" is read-only
  
  // AND THIS WILL THROW AN ERROR
  const message = "This is the first message.";
  const message = "This is the second message."; // <== Duplicate declaration "message" 
  ```

  

  #### `const` Objects and arrays can be mutated (BUT not reassigned). 

  WE WILL SEE WHY IN THE NEXT LESSON ON MUTABILITY.

  ```js
  // This is ok ✅
  const obj = {};
  obj.name = "Ironhacker";
  
  // This is not 🚨
  obj = { name: "Ironhacker" };
  // SyntaxError: Assignment to constant variable
  ```

  

​    



### ES6 template strings (using backticks)

**Template literals** are strings that allow embedded expressions.



#### embed expressions

```js
// OLD WAY - CONCATENATING VALUE
const name = 'John';
let greeting = 'Hello ' + name;

// NEW WAY - TEMPLATE STRINGS
const newGreeting = `Hello ${name}`;

const num = 25;
const str = `The result is: ${ num / 5 + 5 }`
```



#### multi-line interpolation

```js
// OLD WAY - doesn't create new line  
let greeting = "Yo, Joey! \
How are you doing?";

// TEMPLATE STRINGS - creates new line
let newGreeting = `string text line 1
string text line 2
`
```





### New string methods



#### `startsWith()` , `endsWith()`, `includes()`

```js
// NEW STRING METHODS
const str = "To be, or not to be, that is the question.";

console.log(str.includes("to be")); // true
console.log(str.includes("nonexistent")); // false

console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
```







### Arrow function 

- Arrow function doesn't have built in `arguments` object.
- Arrow function doesn't  have `this` variable.

```js
// Arrow function ES6

var greeting = (name) => {
	return 'Hello ' + name;
}

console.log(greeting() );
```





### Concise Arrow function 

```js
// Concise arrow function ES6
/*
	Concise arrow function is used for code that can fit in one line and it doesn't have "{}" and "return". 
Function still returns value same like the "return" keyword is present.
*/

var greeting = (name) =>  'Hello ' + name;

console.log(greeting() );
```











### Object and Array Destructuring



**Destructuring** Is a way to create variables with data from *arrays* and *objects*.



#### Objects

  ```js
  // OBJECTS
  // OLD WAY
  let person = {
    name: "Ironhacker",
    age: 25,
    favoriteMusic: "Metal"
  };
  
  let name = person.name;
  let age = person.age;
  let favoriteMusic = person.favoriteMusic;
  
  console.log(`Hello, ${name}.`);
  console.log(`You are ${age} years old.`);
  console.log(`Your favorite music is ${favoriteMusic}.`);
  

  // DESTRUCTURING 
  const { name, age, favoriteMusic } = person;
  ```



<br>



#### Arrays

```js
// ARRAYS
const numbers = ["one", "two", "three", "four"];

// DESTRUCTURING

// Take the first 3 elements of the array
const [first, second, third] = numbers;
console.log(first, second, third);

// Skip the elements on indices 0(first) and 1(second) and take the third one
const [ , ,thirdString] = numbers;
console.log(third); // <== three

// Fail safe destructuring
const [a,b,c,d,e] = numbers;
console.log('d -> ', d);
console.log('e -> ', e);  // No value is availalbe, JS assigns undefined
```







### ES6 Default Arguments in the functions



```js
// DEFAULT ARGUMENTS
function getNum(num = 99) {
	console.log(num);
}

getNum(10); // 10
getNum(); // 99
```





### Spread operator - allows us to spread the array and collect the parameters



### Spread operator - arrays

```js
// SPREAD THE ARRAY
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

const newArray = [...numbers, 5, 6, 7];
console.log(newArray); // [1, 2, 3, 5, 6, 7]
```



### REST OPERATOR

Rest operator is same `...` dots but used when creating a function in the parentheses.



It allow us to get the remaining arguments passed in a function - replaces the function's default `arguments` (array like object)

```js
// REST OPERATOR  ...

function myFunction(arg1) {
  console.log(arg1);
  console.log(arguments);
}

// Before ES6 there wsa no simple way to capture remaining arguments
myFunction("first argument", "second argument", "third argument", "fourth");


// Using the Rest operator
function myNewFunction(arg1, ...args, lastArg) {
	console.log(arg1);
  console.log(args);
  console.log(lastArg);
}

myNewFunction("One", "Two", "Three", "Four", "Five");
```



### Spreading an object

This can be used to copy properties from one object to the new object



```js
const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };

const newObj = { ...obj1, ...obj2, planet: 'Earth' };
console.log(newObj)
```



##  Enhanced object literals -  key: value shorthand

```js
const name = 'Bob';
const age = 20;

const x = {
  name
  age,
}
// same as  `const x = {name: name, age: age }`
```





* ## Summary



### [Summary - Notes for the Students](https://gist.github.com/ross-u/cd6523b92e6ac272f37a5428235fdb24)



## Extra Resources

- [MDN `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [ES6 Features](http://es6-features.org/)
- [`let` and `const` hoisting - Stack Overflow](https://stackoverflow.com/a/31222689/6375464)