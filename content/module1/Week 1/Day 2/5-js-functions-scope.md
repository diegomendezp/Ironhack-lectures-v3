---
title: "JS Functions Scope"
date: 2018-11-12T12:16:56+01:00
draft: false
weight: 9
week: 1
day: 3
pre: "<b>9. </b>"
---

## Learning Objectives

- function statement

- anonymous function

- functions are first-class objects

- function as vairables

- callbacks

  



<hr>



### What is a function



A function is a **subprogram** designed to do some task.

They allow the code to be called many times without repetition.

Functions can take some values, to work with them/ 

Functions either create a side-effect or return a value.



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

// Calling or invoking a function
sayHello();
```





#### Function can have multiple parameters or no parameters

```js
// Adding parameters to the function
var sayGoodbye = function (name) {
    console.log('Say Hello' + name);
}
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





### Variables inside of the function 

```js
function addToFive(num) {
    var secretNum = 5;
    return five + num;
}

var result1 = addToFive(10);
var result2 = addToFive(25);

console.log(result1);
console.log(result2);
```





## Scope

##### A scope is context in which a function or a variable is visible from different parts of code.



In JavaScript there are two types of scope:

- Local scope
- Global scope



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


// If we call the function it has the acccess to the both varabiles;
myFunction();
```





#### Important! Scope determines the accessibility (visibility) of variables.







### Lifetime of a variable



##### Variables in the global scope live as long as the script / program is running.

##### Local  variables are created only when function is run, and deleted when the function is completed.



**Example**

```js
function incrementMe() {
	var num = 0;
    console.log('local scope: num -> ', num);
    num++;
    console.log('local scope: num + 1 -> ', num);
}

incrementMe();

console.warn('Function finishes, local variables are deleted.')

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
  // var a = a;	// this is what secretly happens when function is invoked
  // var b = b;	// this is what secretly happens when function is invoked
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
console.log(num)


/* Explanation 

JS creates an internal variable named `num` and then assign's it the value that we pass when invoking the function.

function changeNum (num) {
	// var num = num;
	num = 999;
}

*/

```

#### 



### Never change the passed arguments

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







### Callback Functions

In Javascript we can pass functions as parameters to the fucntion.

This is where callback function comes into play.



A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.



 A **higher**-**order function** is a **function** that can take another **function** as an argument, or that returns a **function **as a result.**



```javascript
function eatDessert(){
  console.log("Eating the dessert 🍰");
}

function eatDinner(callback){   
  console.log("Eating the dinner 🍽");
  callback();
}

eatDinner(eatDessert);

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

arr.forEach( function (arrElement) {
	console.log(arrElement);
});


// setTimeout method
setTimeout( function(){
    console.log("This is just an example of anonymous function since this function really does't have a name.")
}, 2000);
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



## Functional Programming

Functional Programming (FP) is a programming paradigm based on the follwing principles:

- using `pure functions`

- avoiding data mutation and

- avoiding side-effects.

  


**Pure function** is a function which:

- given the same inputs always returns the same outputs
- has no side-effects.
- doesn't depend on variables that may change



```js
// Pure function
function sumPure(num1, num2) {
	return sum1 + sum2;
}

console.log('sumPure(10, 10) -> ', sum(10,10));
console.log('sumPure(10, 10) -> ', sum(10,10));


// Function with side effects
var a = 50;

function sumWithSideEffect(num) {
    a += num;	// This function affects `a` (side effect) and changes it 
    return a;
}

console.log('before',a);

sumWithSideEffect(55);

console.log('after',a);
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



![call stack](/home/ross-u/Desktop/IronHack_Lectures_done/content/module1/Week 1/Day 2/functions call stack.jpg)



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







https://github.com/ironhack/bcn-webdev-cheatsheet/tree/master/m1#js-concepts)

## Ironhack Learning Platform

- [LU - JS Functions](http://learn.ironhack.com/#/learning_unit/3020)