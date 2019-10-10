# JS | Functions



### What is a function



A function is a **subprogram** designed to do some task.

They allow the code to be reused (called many times without rewriting it).

Functions can take some values, to work with them.

Functions either create a side-effect or return a value.





JavaScript is a **programming language with first-class functions**.  

- This means that functions are treated like any other variable and can be passed around:

- functions can be passed as an argument to other functions,
- functions  can be returned by another function 
- functions can be assigned as a value to a variable.







##  Creating, naming and calling functions



##### functions are named using camelCase notation



#### Defining/creating a function

**syntax**

```js
// Creating a function

// Function expression
var variableName = function ([parameters]) {
    // Do something in here
}
```



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

sayGoodbye('Jack');
```







## Important

function is called/invoked by putting the parentheses after the variable name. 

This tells us that variable is a function.



#### Spot a function

```js
// Which of these are functions, and what will cause an errror ?

// 1
var num = Math.random();

// 2
var stringLegth = myString.length;


// 3
array.forEach( function (element) {
	
})


// 4
var name = 'Bob';
name();

```





##### When naming functions use the `verbSomething`  syntax. 

##### Example `sayHello`, `printDetails`





### There are several syntax ways to create functions



#### - Function expression - assigning function to variable (as above)



#### - Function declaration - using keyword `function` 

#### (most commonly used)



**syntax**

```js
// Function declaration
function functionName ([parameters]) {
    // Do something in here
}
```



```javascript
function addNumbers(p1, p2) {
  return p1 + p2;
}
```



**Example**

```javascript
function addNumbers(p1, p2) {
  console.log(p1 + p2);
}

addNumbers(2, 4);
addNumbers(1, 2);
addNumbers(1, 2, 3);
addNumbers('foo');

function doFoo(a, b) {
  console.log(a, b);
}

doFoo(1);
doFoo(1, 2, 3);
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









### Function return



##### Functions by default returns `undefined`

```js
var a = 5;

function sumNumbers(num1, num2) {
    console.log('sum = ' + (num1 + num2) );
}

var result = sumNumbers(10, 40);
console.log('result = ' + result);
```







##### We use `return` keyword to return the value from the function

```js
function multiplyNumbers(num1, num2) {
    return num1 * num2;
    // console.log((num1 * num2));  // this returns undefined
}

var result = multiplyNumbers(4, 25);

console.log('result = ' + result);
```





##### `return` keyword stops the execution, exit the function and returns the result

```js
function concatNames(fistName, lastName) {
    console.log('before return');
    return fistName + ' ' + lastName;
    
    console.log('after return'); // This line is never reached  
}

var result = concatNames('John', 'Doe');

console.log('result: ' + result);
```





***Potential interview question:***

What does a JavaScript function return? 

A JavaScript function **always returns something**.
When a returning value is not specified, the function returns `undefined`.





### [Excercise - Function Syntax](https://gist.github.com/ross-u/02d748b20fbd138b9919b71ec1f373ca) (10 min)













## Scope

##### A scope is context/area in which variable or a function  is visible from different parts of code.



In JavaScript there are two types of scope:

- Local scope
- Global scope
- Block scope (using `let` and `const`)



**Local Scope** - also called function scope

A variable declared inside the function is scoped to that function, meanining it’s not possible to access it (use it) outside the function.



**Global scope**

Everything declared outside of the functions and on the first level is in Global Scope.

If a variable is declared outside of the function, it is possible to use it in and outside of the function.



**Example**

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
function incrementMe() {
	var num = 0;
    console.log('local scope - num = ', num);
    num++;
    console.log('local scope - num = ', num);
}

incrementMe();

console.log('** Function finishes, local variables are deleted. **')

incrementMe();
```







### Variable Shadowing



#### What happens when we have variables with same name in global and in local scope ?

```js
var x = 5;

function scopeTest() {
  var x = 100;
  console.log('local scope x -> ', x);  //  100
}
scopeTest();
console.log('global scope x -> ', x);  //  5
```





### function arguments - are function's internal variables



```js
function testArgs (a,b) {
  // var a = a;	// under the hood
  // var b = b;	// under the hood
  console.log(a + b);
}
```



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

function scopeTest2() {
  x = 100;  // Avoid this
}

scopeTest2();

// What will the console.log print ?
console.log('global scope x -> ', x);

// ANSWER 100
```











## Hoisting 

#### - Function Declaration hoisting

```js
sumNumbers(10, 50);

function sumNumbers (num1, num2) {
	console.log(num1 + num2);
}

// Why ? 
// Function Declarations are hoisted to the top of the script.
```







#### - ` var` hoisting



##### As well in JavaScript,  `var` declarations are hoisted (but not initialized :) ). 



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



**Remember :**

 `ReferenceError: variable is not defined` is different than `undefined`









### Callback Functions

In Javascript we can pass functions as parameters to the function.

This is where callback function comes into play.



A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.



 A **higher**-**order function** is a **function** that can take another **function** as an argument, or that returns a **function **as a result.**



```javascript
function eatDessert(){
  console.log("Eating the dessert 🍰");
}

function startEatingDinner(callback){   
  console.log("Eating the dinner 🍽");
  console.log("Finished eating dinner!");
  
  callback();
}

startEatingDinner(eatDessert);

/*
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/

/*
A higher-order function is a function that can take another function as an argument, or that returns a function as a result.
*/
```







### Anonymous functions

An anonymous function is a function that was declared without any named identifier to refer to it.



Anonymous functions are usually used by the methods.

**Examples**

```js
// Methods use anonymous functions

var arr = ['Sarah', 'John', 'Anna', 'Tom'];

arr.forEach( function (arrElement) {
	console.log(arrElement);
});


// setTimeout method
setTimeout( function(){
    console.log("This is just an example of anonymous function since this function really does't have a name.")
}, 2000);


// anonymous arrow function ES6

arr.forEach( (arrElement) => {
	console.log(arrElement);
});

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









### The call stack


The way how JavaScript read the script/program step by step is called **control flow**.

JavaScript uses **call stack** in order to know where it is at the moment:



```js
function greet(who) {
  console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");
```







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







### [JS | Functions - Syntax Cheat sheet](https://gist.github.com/ross-u/14163194beb69c068af4bcd4db4b4c23)





## Ironhack Learning Platform

- [LU - JS Functions](http://learn.ironhack.com/#/learning_unit/3020)