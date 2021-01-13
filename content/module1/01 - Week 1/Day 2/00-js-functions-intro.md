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

##### When naming functions use the `verbNoun`  syntax. 

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







## Hoisting 

#### - Function Declaration hoisting

```js
subtractNumbers(50, 10);

function subtractNumbers (num1, num2) {
	console.log(num1 - num2);
}

// Why ? 
// Function Declarations are hoisted to the top of the current scope, before the program runs.
```





```js
// What JavaScript does behind the scenes

var cat;	// variable declaration

console.log(cat);	// undefined

cat = 'Marshmallow';	// variable initialization

console.log(cat);	//	undefined
```













## Best Practices



### Naming a function

##### Functions are named using camelCase notation

##### When naming functions use the `verbNoun`  syntax. 

##### Example `sayHello`, `printDetails`



### Don't change the passed arguments 



Changing the function arguments often creates a code that is hard to debug/maintain.

```js
// BAD - changing the parameters invites bugs and creates bug prone code
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