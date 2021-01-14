# JS | Functions Advanced





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









### Function arguments -  function's internal variables



When creating a function, we set placeholders for values that function will receive. 

Theses placeholders for expected values are called - parameters.



When a function is invoked, we pass the values, arguments, to the function. 



Parameters are automatically created as internal variables, in the function's scope, and will store the value we pass during invocation.



##### Example 1

```js
function sum (a, b) {	// Parameters
  // var a = a;	    									// behind the scene
  // var b = b;	    									// behind the scene
  console.log(a + b);
}

sum(10, 20);    	// Arguments
```





<br>



### The `arguments` object



Every function created usind `function` keyword, has a special value, special array like object called `arguments`. 

This object is available in the function and stores all of the arguments passed to the function during invocation.



As it is an array like object, in order to iterate over it using Array methods we have to first convert it to an array. 

We can still iterate using regular for loop without conversion.



```js
function printArgs (a, b, c) {    
  console.log(arguments);

  const argsArr = Array.from(arguments);
  argsArr.forEach( (el) => console.log(el) )
}

printArgs(10, 20, 'foo');
```







<br>







## Higer Order Functions



Functions that take other functions as arguments and functions that `return` other functions are by convention called *higher*-*order functions*.

It is just a programming concept and a naming convention developers use to describe a function.



#### **Simply put:**

#### 	Higher order function is a function receives or returns other functions.





<br>





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


var printName = higherFunc(); 
// returns the anonymous function and assigns it to `printName` variable

printName('John');  
// `printName` variable is now the anonymous function `higherFunc` returned


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









### ~~The call stack and the control flow:~~ (SKIP)

~~The way how JavaScript read the script/program step by step is called **control flow**.~~

~~JavaScript uses **call stack** in order to know where it is at the moment:~~



###~~~~ 





**`debugger` - Walk through example of execution flow: **

```js
debugger;

function printFoo () {
  console.log('foo');

  printBar();
}

function printBar () {
  console.log('bar');  
}

function printBaz () {
  console.log('baz');  
}

printFoo();

printBaz();
```











### ~~Blowing the call Stack.~~ (SKIP)



~~**Example - show the stack**~~

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




