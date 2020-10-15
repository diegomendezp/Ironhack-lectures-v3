# JS | Functions



### What is a function ?



A function is a **reusable recipe (routine)** that performs a set of actions, and may require a set of ingredients (values).



Functions:

- allow the code to be reused (called many times without rewriting it).

- can take some values, to work with them.

- either create a <u>side-effect or return a value</u>.







JavaScript is a **programming language with first-class functions**.  

Functions are treated like any other variable and can be passed around:

- functions can be assigned as a value to a variable.

- functions can be passed as an argument to other functions,
- functions  can be returned by another function 

  







##  Function Syntax

### There are several syntax ways to create functions



### - Function declaration 

####  using keyword `function` (most commonly used)



**syntax**

```js
// Function declaration
function functionName (param1, param2) {
    // Do something in here
}
```







### Function expression - 

#### assigning function to variable (as above)

**syntax**

```js
// Creating a function

// Function expression
var nameOfFunction = function (param1, param2) {
    // Do something in here
}
```





### Creating a function

**PSEUDO-CODE**

```js
Routine SUM-NUMBERS ( Takes 2 numbers ): 
Steps:
- Sums the 2 numbers
- Prints the sum

```



**JavaScript:**

```js
function sumNumbers(num1, num2) {
  var sum = num1 + num2;

  console.log(total);
}
```







### Invoking a function



The code inside a **function** is executed when the **function** is invoked. It is common to use the term "call a **function**" instead of "**invoke** a **function**"



We invoke a function by putting a pair of parentheses `( )` after the function name:



```js
nameOfTheFunction()
```



```js
sumNumbers(23, 55);
sumNumbers(500, 800);
sumNumbers(1, 1);
sumNumbers(14, 5);
```



### Naming a function

##### Functions are named using camelCase notation

##### When naming functions use the `verbSomething`  syntax. 

##### Example `sayHello`, `printDetails`





```js
var sayHello = function () {
    console.log('Say Hello');
}

var num = 10;

// Calling or invoking a function
sayHello();

// Only variables that are functions can be invoked with parentheses ()
num();  // TypeError: num is not a function
```





#### Function can have multiple parameters or no parameters

```js
// Adding parameters to the function
var sayGoodbye = function (name) {
    console.log('Say Hello' + name);
}

// Invoking a function and passing it an argument
sayGoodbye('Jack');
```







## Invoking a function

function is called/invoked by putting the parentheses after the variable name. 

This tells us that variable is a function.















### Function return



##### Functions by default return `undefined`.

```js
var result = sumNumbers(10, 40);
console.log('result = ' + result);
```



To return a value from the function we must include the keyword **return.**

```js
function divideNumbers(num1, num2) {
  return num1 / num2;
}

var result2 = divideNumbers(10, 2);
console.log('result2: ', result2);
```



The code inside of the function block coming after the `return` will not be executed, as return interupts the function execution and returns the value.

```js
function divideNumbers(num1, num2) {
	console.log('BEFORE');
	
	return num1 / num2;
  
  console.log('AFTER');
}
```





***Potential interview question:***

What does a JavaScript function return? 

A JavaScript function **always returns something**.
		When a returning value is not specified, the function returns `undefined`.







### Function can return any type of data from within



```js
function returnObj() {
  return { name: 'Bob' }
}

function returnArr() {
  return [1, 2, 4]
}


function returnStr(name) {
  return "Hello " + name;
}


function returnNum(num1, num2) {
  return num1 + num2
}

function returnFunction() {
  return function () { }
}


returnObj();

returnArr();

returnStr("Uros");

returnNum(9, 1);

returnFunction();

String(returnFunction()); // convert the returned value to a string
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











### [Excercise - Function Syntax](https://gist.github.com/ross-u/02d748b20fbd138b9919b71ec1f373ca) (10 min)













## Scope

##### A scope is context/area in which variable or a function  is visible from different parts of code.



In JavaScript there are two types of scope:

- Local scope
- Global scope
- Block scope (using `let` and `const`)



**Global scope**

Everything declared outside of the functions and on the first level is in Global Scope.

If a variable is declared outside of the function, it is possible to use it in and outside of the function.



**Local Scope** - also called function scope

A variable declared inside the function is scoped to that function, meanining it’s not possible to access it (use it) outside the function.









### **Value visibility in nested scopes**

Example

```js
// Scope chain

// Each nested scope "inherits" (can see) values from the previous scope (scope above it).

function outer() {
  
  function inner() {
    var i = 4;
  }

  var o = 3;
}

var g = 1;

if (2 === 2) {
  var b = 2;
}
```





### [OPEN IMAGE](https://i.imgur.com/neGxBNR.png)

![](https://i.imgur.com/neGxBNR.png)







**Example 2**

```js
var myColor = "green"; // This is in the global scope

function myFunction() {
  var firstName = 'John';  // This is in the local/function scope;
    
  console.log('local scope - firstName -> ', firstName);
  console.log('local scope - myColor -> ', myColor);
}

// this is accessible as we are console logging from the Global scope
console.log('Global - myColor -> ' + myColor);

// this not is accessible because it exists in the local scope in the function
console.log('Global - firstName -> ' + firstName);


// If we call the function, function has acccess to both of the varabiles;
myFunction();
```





#### Important! Scope determines the accessibility (visibility) of variables.







### Lifetime of a variable



##### Variables in the global scope live as long as the script / program is running.

##### Local  (function) variables are created only when function is run, and deleted when the function is completed.



**Example**

```js
function incrementInside() {
	var num = 0;
  
  console.log('local scope - num: ', num);
  num++;
  num++;
  console.log('local scope - num: ', num);
}

incrementInside();

console.log('\n** Function execution ends **')
console.log('** Local variables are deleted. **\n')

incrementInside();
```







### Variable Shadowing



#### What happens when we have variables with same name in global and in local scope ?



When a variable with the same name exists in global and in the local scope, only the variable in the local scope will be available. 

We say that variables with the same name in the nested scope, shadow the ones from the hire scope.

```js
var x = 5;

function scopeTest() {
  var x = 100;
  console.log('local scope x -> ', x);  //  100
}
scopeTest();
console.log('global scope x -> ', x);  //  5
```





### Function arguments -  function's internal variables



When creating a function, we set placeholders for values that function will receive. 

Theses placeholders for expected values are called - parameters.



When a function is invoked, we pass it values following the parameters we set (placeholders).

The values passed to a function on invocation are called - arguments



**Arguments are automatically created as internal variables**, in the function's scope.

##### Example 1

```js
function sum (a, b) {	// Parameters
  // var a = a;	    									// behind the scene
  // var b = b;	    									// behind the scene
  console.log(a + b);
}

sum(10, 20);    	// Arguments
```



##### Example 2

```js
var num = 10;

function changeNum (num) {
	num = 999;
}

// What is the result ?

changeNum();
console.log(num);


/* Explanation 

JS creates an internal variable named `num` and then assigns it the argument value

function changeNum (num) {
	// var num = num;
	num = 999;
}


*/

```









### Unnamed variables - 



Be careful not to forget the `var` keyword when creating variable.

This creates global variable by default and it creates a scope pollution.


**Quick Test - Example**

```js
var x = 5;

function example() {
  x = 100;  						// Avoid this
}

scopeTest2();

// What will the console.log print ?
console.log('global scope x -> ', x);

// ANSWER 100
```











## Hoisting 

#### - Function Declaration hoisting

```js
subtractNumbers(50, 10);

function subtractNumbers (num1, num2) {
	console.log(num1 - num2);
}

// Why ? 
// Function Declarations are hoisted to the top of the script, before the program runs.
```







#### - ` var` hoisting



##### As well in JavaScript,  `var` declarations are hoisted to the top, and are given the value undefined.

This is JS Engine optimisation technique.  It creates variables before the run-time.



```js
console.log(cat);

var cat = 'Marshmallow';

console.log(cat);
```







**Explanation**

```js
// What JavaScript does behind the scenes

var cat;	// variable declaration

console.log(cat);	// undefined

cat = 'Marshmallow';	// variable initialization

console.log(cat);	//	undefined
```







#### Difference between

####  `undefined` and `Reference Error: x is not defined`



**Remember :**

 `ReferenceError: variable is not defined` is different than `undefined`



```js
console.log(cat);

var cat = 'Marshmallow';

console.log(cat);

console.log(dog); // ==> ReferenceError: dog is not defined
```





## Higer Order Functions



Functions that take other functions as arguments and functions that `return` other functions are by convention called *higher*-*order functions*.

It is just a programming concept and a naming convention developers use to describe a function.



#### **Simply put:**

#### 	Higher order function is a function receives or returns other functions.







### Example: Function as an argument

In Javascript we can pass functions as parameters to the function.

This is where callback function comes into play.



A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.



 A **higher**-**order function** is a **function** that can take another **function** as an argument, or that returns a **function **as a result.**



```javascript
function eatDessert(){
  console.log("Eating the dessert 🍰");
}

function startEatingDinner(func){   
  console.log("Eating the dinner 🍽");
  console.log("Finished eating dinner!");
  
  func();
}

startEatingDinner( eatDessert );

/*
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/

/*
A higher-order function is a function that can take another function as an argument, or that returns a function as a result.
*/
```







### Functions returning functions

```js
// Function can return anonymous function

function higherFunc() {
    return function (name) {
        console.log(name);
    }
}

var printName;
printName = higherFunc(); // returns the anonymous function and assignss it to `printName` variable

printName('John');  // `printName` variable is now the anonymous function that `higherFunc` returned


```









### Anonymous functions

An anonymous function is a function that was declared without any named identifier.



We commonly use anonymous functions, when:

- returning a function from a function, 

- in methods

   or

- In function expression.

  

**Examples**

###### Returning a function from a function

```js
function higherFunc() {
  
    return function (name) {   // We are returning an anonymous funciton
        console.log(name);
    }
}

```



###### In Methods

```js
// Methods use anonymous functions

var arr = ['Sarah', 'John', 'Anna', 'Tom'];

arr.forEach( function (el) {
	console.log(el);
});

```



###### In function expressions

```js
// Methods use anonymous functions

var greeting = function (name) {
  return "Hello " + name;
}
```









### The call stack and the control flow:


The way how JavaScript read the script/program step by step is called **control flow**.

JavaScript uses **call stack** in order to know where it is at the moment:



### 



**Example without specified steps (Run the code):**

```js
function printFoo () {
  console.log('foo');  
}

var baz = 'baz';
var bar = 'bar';

printFoo();

console.log(baz);
console.log(bar);
```



**`debugger` - Walk through example of execution flow: **

```js
function printFoo () {  // 3
  console.log('foo');  
}

debugger;
// 1
var baz = 'baz';
var bar = 'bar';

// 2
printFoo();

// 4
console.log(baz);

// 5
console.log(bar);
```







**Example 1 - Ask students to role play**

```js
function greet(who) {
  console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");
```



**Example 2 - Ask students to role play**

```js
function beKind () {
  console.log('Nice to meet you!');
}

function greet(who) {
  console.log("Hello " + who);
  
  // ADDITIONAL FUNCTION CALL
  beKind();
}

debugger;

greet("Harry");
console.log("Bye");
```







### Blowing the call Stack



**Example - show the stack**

```js
function chicken() {
	console.log('chicken');
	return egg();
}

function egg() {
	console.log('egg');
	return chicken();
}

debugger;
chicken();
```









## Best Practices



### Never change the passed arguments 



Changing the arguments in the function often creates a code that is hard to debug.

```js
// BAD - changing the parameters invites bugs and bug prone code
function concatFullName(firstName, lastName) {
  firstName = firstName + ' ' + lastName;
  return firstName;
}

// GOOD
function concatFullName(firstName, lastName) {
  var result = firstName + ' ' + lastName; // arguments are not tampered with 
  return result;
}
```







### [JS | Functions - Syntax Cheat sheet](https://gist.github.com/ross-u/14163194beb69c068af4bcd4db4b4c23)





## Ironhack Learning Platform

- [LU - JS Functions](http://learn.ironhack.com/#/learning_unit/3020)