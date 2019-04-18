![img](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# ES6 | Recap



## Scope - `let`, `var`, `const`



#### What is scope:

Scope determines the accessibility (visibility) of variables from different parts of the code.

JavaScript has function scope by default - meaning that every function creates a new scope.



- #### Global variable 

  (the variable created in the global scope and variable without the keyword (automatically global) - accessible by all functions and everywhere in the script..



- Global variables belong to the global scope and can be accessed in the whole window (`window` object available in the browser) :

  ```js
  console.log('WINDOW OBJECT -> ', window);
  console.log('Automatically Global variable', window.imposter);
  ```

  

- scope of `var` - 

  `var` declared variables can have **global** of **function** (also called local) **scope**

  Example

  

- Hoisting

  JS executes code line by line, however there is a functionality called Hoisting.

  - functions - <https://codepen.io/Denzelzeldi/pen/gEyejw?editors=0012>

  ```js
  atTheEnd();
  
  function atTheEnd() {
  	console.log('Hello');
  }
  ```

  - var - <https://codepen.io/Denzelzeldi/pen/gEyejw?editors=0012>

    ```js
    // console.log(name);  // uncomment
    
    var name = 'John';
    ```

    

- scope of `let` and `const`

  - Block - block is any code between open and closed curly braces `{}`

  - `let` and `const` are block scoped

  - `let` and `const` hoist (invisibly)  but you cannot access them before the actual declaration is evaluated at runtime (line by line).

    ```js
    //  BLOCK SCOPE OF THE let 
    let name = "Ironhacker";
    
    if (true) {
      let name = "John";
      console.log(`Name inside if block statement: ${name}`);
    }
    
    console.log(`Name outside if block statement: ${name}`);
    
    // Name inside if block statement: Ted
    // Name outside if block statement: Ironhacker
    ```

    

  - let` can't be redeclared but can be updated

    ```js
    // THIS IS OK
    let message = "This is the first message.";
    message = "This is the second message.";
    
    // BUT THIS WILL THROW AN ERROR
    let message = "This is the first message.";
    let message = "This is the second message."; // <== Duplicate declaration "message" 
    ```

    

  - `const` variables have to be initialized in the moment of declaration.

    ```js
    const name1 = "John"; // <== CORRECT
    
    const name2;
    name2 = "John"; // WRONG! - This will throw an Error
    ```

    

    

  - `const` variables can't be redeclared or assigned new value

    ```js
    // THIS WILL THROW AN ERROR
    const message = "This is the first message.";
    message = "This is the second message."; // <== "message" is read-only
    
    // AND THIS WILL THROW AN ERROR
    const message = "This is the first message.";
    const message = "This is the second message."; // <== Duplicate declaration "message" 
    ```

  

  - `const` variables containing Objects and arrays can be mutated (not reassigned). WE WILL SEE WHY IN THE NEXT LESSON ON MUTABILITY.

    ```js
    // This is ok ✅
    const obj = {};
    obj.name = "Ironhacker";
    
    // This is not 🚨
    obj = { name: "Ironhacker" };
    // SyntaxError: Assignment to constant variable
    ```

  



## Enhanced object literals

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





​    



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







### Arrow function 

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

#### allow us to get the remaining arguments passed in a function - replaces the function's default `arguments` (array like object)

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

let Electronic = function(name, price, brand) {
  Product.call(this, name, price);
  this.brand = brand;
};

Electronic.prototype = Object.create(Product.prototype);
Electronic.prototype.constructor = Electronic;

// creating a new electronic product
const speaker = new Electronic('speaker', 100, "Sony");
speaker.nameAndPrice();

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







## Arrow Functions



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





### Arrow function  vs Concise Arrow function 

```js
// Arrow function ES6
var greeting = (name) => {
	return 'Hello ' + name;
}

console.log(greeting() );

// Concise arrow function ES6
var greeting = (name) =>  'Hello ' + name;

console.log(greeting() );
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





## Exercise

```js
// Create a class `Animal` using ES6 syntax, passing it the parameter `type` and has a method (using ES6 syntax) on the prototype called `animalName` which prints the `name`;

class Animal {
  // ... your code here
}

let dog = new Animal('dog');
mammal.animalName();


// Create a class 'Cat' using ES6 syntax, which extends class `Animal`, and takes parameters `type` (which has a default value "cat"), `name`, `color` and has a method (using ES6 syntax) on the prototype `says` prints   `${type}: ${name} ${color}`

class Cat extends Animal {
  // ... your code here
}

let marbles = new Cat('marbles', 'white, black and yellow');
let sparky = new Cat('sparky', 'grey');

marbles.says();
sparky.says();
```









## Extra Resources

- [MDN `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [ES6 Features](http://es6-features.org/)