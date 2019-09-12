![img](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# ES6 | Recap & Scope



## Scope - `let`, `var`, `const`



#### What is scope:

Scope determines the accessibility (visibility) of variables from different parts of the code.

JavaScript has function scope by default - meaning that every function creates a new scope.





- #### Global variables 

  "The variables created in the global scope are called **global variables**.
  
  
  
  Global variables belong to the global scope and can be accessed in the whole window (`window` object available in the browser) :



- #### Automatically global variables

 Variables created without the variable keyword (anywhere in the script) become automatically global -

Both types of variables created are accessible by all functions and everywhere in the script..



```js
var globalVariable = "I am a global variable."; // GLOBAL SCOPE

function createVariables () {
	imposter = 'I am an imposter';	// AUTOMATICALY GLOBAL
	var functionVariable = 'I am a properly declared variable'; // FUNCTION SCOPE
}

createVariables();


console.log('WINDOW OBJECT -> ', window);

console.log('GLOBAL VARIABLE -> ', globalVariable);
console.log('GLOBAL VARIABLE ON WINDOW OBJECT -> ', window.globalVariable);

console.log('AUTOMATICALLY GLOBAL (WITHOUT KEYWORD)', window.imposter);
```





### Main concepts to remember



- ##### 1. scope of `var` - 

  `var` declared variables can have **global** or **function** (also called local) **scope**.

  

  

- ##### 2. Hoisting

  In JS there is a thing that happens called Hoisting. This is a made up name to describe something that JavaScript does during the first pass - compilation.(1st - compilation, 2nd = runtime)

  - functions - <https://codepen.io/Denzelzeldi/pen/gEyejw?editors=0012>

  ```js
  atTheEnd();
  
  function atTheEnd() {
  	console.log('Hello');
  }
  ```

  

  * var - <https://codepen.io/Denzelzeldi/pen/yLBjJWK?editors=0010>

  ```js
  console.log(name);  // undefined  -  declared but without value
  
  var name = 'John';
  ```






- ##### 3. scope of `let` and `const` :

  a. Block - block is any code between open and closed curly braces `{}`

  b. `let` and `const` are block scoped

  c. `let` and `const` hoist (invisibly)  but are not initialized with `undefined`. Because of this you cannot access them before the actual declaration is evaluated at runtime (line by line).

  
  
  ```js
  //  BLOCK SCOPE OF THE let 
  let name = "Ironhacker";
  
  if (true) {
    let name = "John";
    console.log(`Name INSIDE if block statement: ${name}`);
  }
  
  console.log(`Name OUTSIDE if block statement: ${name}`);
  
  // Name inside if block statement: John
// Name outside if block statement: Ironhacker
  ```

  

  d. `let` cannot be redeclared, but it can be reassigned new value (updated)
  
  ```js
  // THIS IS OK
  let message = "This is the first message.";
  message = "This is the second message.";
  
  // BUT THIS WILL THROW AN ERROR
  let message = "This is the first message.";
let message = "This is the second message."; // <== Duplicate declaration "message" 
  ```

  

  e. const` variables have to be initialized in the moment of declaration.
  
  ```js
  const name1 = "John"; // <== CORRECT
  
  const name2;
name2 = "John"; // WRONG! - This will throw an Error
  ```

  

  

  f.  `const` variables can't be redeclared or assigned new value
  
  ```js
  // THIS WILL THROW AN ERROR
  const message = "This is the first message.";
  message = "This is the second message."; // <== "message" is read-only
  
  // AND THIS WILL THROW AN ERROR
  const message = "This is the first message.";
const message = "This is the second message."; // <== Duplicate declaration "message" 
  ```

  

  g.  `const` variables containing Objects and arrays can be mutated (not reassigned). WE WILL SEE WHY IN THE NEXT LESSON ON MUTABILITY.
  
  ```js
  // This is ok ✅
  const obj = {};
  obj.name = "Ironhacker";
  
  // This is not 🚨
  obj = { name: "Ironhacker" };
  // SyntaxError: Assignment to constant variable
  ```







[var example - CODEPEN](https://codepen.io/Denzelzeldi/pen/RwbyoBY?editors=0011)

[let example - CODEPEN](https://codepen.io/Denzelzeldi/pen/JjPvbwM?editors=0012)

[const example - CODEPEN](https://codepen.io/Denzelzeldi/pen/LYPmbKm?editors=0010)







## ES6 template strings (using back-ticks) ``

Template literals are string literals that allow embedded expressions



#### embed expressions

```js
// OLD WAY
const name = 'John';
let greeting = 'Hello ' + name;

// TEMPLATE STRINGS
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









## Property value shorthand

```js
const name = 'Sarah';
const bootcamp = 'Ironhack';
      
const student = {
  name,
  bootcamp
};

console.log('student', student);

/* same as  `
const x = {
	name: name,
	bootcamp: bootcamp
}` */
```

​	



### `for...of` loop - as an iterator

```javascript
const namesArray = ['John', 'Sarah', 'Alice'];

for (const name of namesArray) {
  console.log(name);
}
```





### [EXERCISE - CODEPEN `for...of`](https://codepen.io/Denzelzeldi/pen/vMrLrQ?editors=0012)



### [SOLUTION - `for...of`](https://codepen.io/Denzelzeldi/pen/OJLZWzy?editors=0012)





### Object and Array Destructuring

Is an easy way to extract data from arrays and objects

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



#### Arrays

```js
// ARRAYS
const numbers = ["one", "two", "three", "four"];

// DESTRUCTURING

// Take the first 3 elements of the array
const [first, second, third] = numbers;
console.log(first, second, third);

// Skip the elements on indices 0(first) and 1(second) and take the third one
const [ , ,third] = numbers;
console.log(third); // <== three

// Fail safe destructuring
const [a,b,c,d,e] = numbers;
console.log('d -> ', d);
console.log('e -> ', e);  // No value is availalbe, JS assigns undefined
```





### Arrow function 

#### Doesn't have `this` variable inside of it's scope, but it takes `this` from the scope around it.

##### Doesn't have `arguments` object like normal function

```js
/*  Arrow function
Doesn't have `this` variable inside of it but takes it from the scope around it.
Doesn't have `arguments` object like normal function
*/

let greeting = (name) => {
	return 'Hello ' + name;
}
console.log(greeting() );

let printArguments =() =>{
  console.log(arguments); // ReferenceError: arguments is not defined
}

printArguments();
```





### Concise Arrow function 

Concise arrow function is used for code that can fit in one line and it doesn't have "{}" and "return". 

Function still returns value same like the "return" keyword is present

```js
// Concise arrow function ES6

let greeting = (name) =>  'Hello ' + name;

console.log(greeting() );
```



#### [Concise Arrow - Exercise](<https://codepen.io/Denzelzeldi/pen/BEVzzm?editors=0011>)







* ES6 Default Arguments in the functions

  ```js
  function getNum(num = 99) {
  	console.log(num);
  }
  
  getNum(10); // 10
  getNum(); // 99
  ```



### Spread opearator - allows us to spread the array and collect the parameters

- Spread operator

```js
// SPREAD THE ARRAY
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

const newArray = [...numbers, 5, 6, 7];
console.log(newArray); // [1, 2, 3, 5, 6, 7]
```





### REST PARAMETERS - 

#### allow us to get the remaining arguments passed in a function - replaces the function's default `arguments` (array like object), helps with arrow function which doesn't have `arguments` object 



```js
function myFunction(arg1) {
  console.log(arg1);
  console.log(arguments);
}

myFunction("first argument", "second argument");



function myNewFunction(arg1, ...args) {
	console.log(arg1);
    console.log(args);
}

myNewFunction("One", "Two", "Three", "Four");
```





#### Arrow function doesn't have `arguments` object, therefore we have to use rest parameters for the same functionality.

```js
let myFunc = (arg1, ...everythingElse ) => {
	console.log(arguments);	// Error - comment this line to continue
	console.log(arg1);
	console.log(everythingElse);
}
```









## `class` syntax

#### ES5

```js
let BankAccount = function(clientName, currency) {
  this.clientName = clientName;
  this.currency = currency;
  this.balance = 0.0;
}

BankAccount.prototype.showBalance = function() {
  return `${this.currency} ${this.balance}`;
}

BankAccount.prototype.withdrawMoney = function(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  } else {
    throw new Error('not enough funds');
  }
}

BankAccount.prototype.depositMoney = function(amount) {
  this.balance += amount
}

let account1 = new BankAccount('mike', '$');
account1.depositMoney(100);
account1.withdrawMoney(25);
account1.showBalance()
// $ 75
```



#### ES6

```js
class BankAccount {
  constructor (clientName, currency) {
    this.clientName = clientName;
    this.currency = currency;
    this.balance = 0.0;
  }

  showBalance() {
    return `${this.currency} ${this.balance}`;
  }

  withdrawMoney(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error('not enough funds');
    }
  }

  depositMoney(amount) {
    this.balance += amount
  }
}

let account1 = new BankAccount('mike', '$');
account1.depositMoney(100);
account1.withdrawMoney(25);
account1.showBalance()
// $ 75
```





## `constructor`

### The `constructor` method is used for passing the parameters for the new object.

### A `constructor` can use the `super` keyword to call the constructor of the super class.





### Inheritance

### **ES5**

```js
let Product = function(name, price) {
  this.name = name;
  this.price = price;
};

Product.prototype.nameAndPrice = function() {
  console.log(
    "The product's name is: " + this.name,
    "and the product's price is: " + this.price
  );
};

let Toy = function(name, price, brand) {
  Product.call(this, name, price);
  this.brand = brand;
};

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
Toy.prototype = Object.create(Product.prototype);
Toy.prototype.constructor = Toy;

// creating a new electronic product
const winnie = new Toy('teddy bear', 12, "Disney");
winnie.nameAndPrice();

// The product's name is: speaker and the product's price is: 100
```





### **ES6 - Inheritance**

```js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  nameAndPrice() {
    console.log(
      "The product's name is: " + this.name,
      "and the product's price is: " + this.price
    );
  }
}

class Electronic extends Product {
  constructor(name, price, brand) {
    super(name, price);
    this.brand = brand;
  }
}

let banana = new Product("Banana", 2);
banana.nameAndPrice();

let mac = new Electronic("Mac", 800, "Apple");
mac.nameAndPrice();

// The product's name is: Banana and the product's price is: 2
// The product's name is: Mac and the product's price is: 200
```







## Arrow Function - accessing `this`



#### Old Function Syntax

```js
class Counter {
  constructor() {
    this.count = 1;
  }

  countUp() {
    setInterval(function() {
			console.log(this);	// Window {}
      console.log(this.count++); // <-- Trouble!
    }, 1000);
  }
}

let counterObject1 = new Counter();
counterObject1.countUp();

```





### New Arrow Syntax

```js
class Counter {
  constructor() {
    this.count = 1;
  }

  countUp() {
    setInterval(() => { // arrow function takes the value of this from it's surrounding scope
      console.log(this.count);
      this.count++;
    }, 1000);
  }
}

let counterObject2 = new Counter();
counterObject2.countUp();
```









### `default` parameters

```js
// Example 1
class CounterWithDefault {
  constructor(startCount = 10) {
    this.count = startCount;
  }

  countUp() {
    setInterval(() => { // arrow function takes the value of this from it's surrounding scope
      console.log(this.count);
      this.count++;
    }, 1000);
  }
}

let counterObject3 = new Counter();
counterObject3.countUp();

/*OR
let counterObject4 = new Counter(10);
counterObject4.countUp(); */



// Example 2
function inc(number, increment = 1) {
  return number + increment;
}

console.log(inc(2)); // 3
console.log(inc(2, 23)); // 25
```





## Exercise [ES6 classes](<https://codepen.io/Denzelzeldi/pen/eoKdGB?editors=0012>)











## Extra Resources

- [MDN `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [ES6 Features](http://es6-features.org/)

- [`var` `let` `const`](<https://codeburst.io/learn-let-var-and-const-in-easiest-way-with-guarantee-e6ecf551018a>)
- [How to get the index in a for-of loop](<https://flaviocopes.com/how-to-get-index-in-for-of-loop/>)