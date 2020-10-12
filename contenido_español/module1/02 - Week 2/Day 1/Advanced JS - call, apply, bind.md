# JS | Context & Function invocation





We spoke earlier about `this` in functions and methods. 

In JavaScript we call the value of `this`  -> **context**. 



CONTEXT is the value of `this` on the current line of code that is running.





## Global/Window Context - when value of `this` is Window 

```js
// CONTEXT is the value of `this` on the current line of code that is running.

function foo(){
  console.log(this);	//	this ->  Window object
}

foo();
```





### Function Invocation / call

```js
// When any function is invoked/called JS secretly creates variable `this` and gives it the value 

function doStuff (a, b) {
  // const this = Window;
  console.log(this); // ['hi', 2, 8]
}

doStuff('hi', 2, 8);
```





### Method Invocation / call

```js
// Method - a function in the object

// When any method is invoUrosked/called JS secretly creates variable `this` and gives it the value of the object that called it (left of the dot)


const student = {
  name: 'Sarah O\'Connor',
  age: 25,
  logThis: function (arg1) {
    console.log(`\n`, arg1);
    console.log(this);
	}
}

student.logThis('one');
```





### `Apply` And `Call` Invocation



`apply` and `call` can be used to modify the value of this in the function or the method, in case that we need it.



We use them in a way that we chain them with a dot to the function or method.



### `call`

**syntax**

```js
funcName.call( customThisValue, param1, param2, param3 ... ])
```



```js
let teacher = {
  name: 'Bob',
  age: 29,
  helloStudents: function () {
    console.log('Hello Ironhackers my name is ' + this.name + ' and I will be teaching you today.');
  }
}

student.logThis.call(teacher, '*****'); // Calls the function with custom `this` value passed


teacher.helloStudents();

// If we want the student to become a teacher, and borrow method from teacher

teacher.helloStudents.call(student);
```





### `apply`



Same as `call` but instead of taking parameters it takes an array

**syntax**

```js
funcName.apply(customThisValue, [param1, param2, param 3, ...]);
```



```js
// DIFFERENCE BETWEEN call AND apply
/*
Function.call(this, param1, param2, param 3,... )
Function.apply(this, [param1, param2, param 3, ...])
*/
```



### `Bind`

[Bind](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) creates a new function that, when called, has its `this` keyword set to the first provided parameter, and enables us to specify and bind the default parameters.





```js
function printArgs () {
  console.log(this);
	console.log(arguments);
};

console.log(`\n printArgs('one', 'two')`);
printArgs('one', 'two');


let printArgsCustom = printArgs.bind(teacher, 100, 200, 300);

console.log(`\n printArgsCustom('one', 'two')`);
printArgsCustom('one', 'two');

```









**Exercise** - 

```js
// 1. Create a constructor Product which creates object with properties `name` and `price`
function Product(name, price) {
  this.name = name;
  this.price = price;
}

let chair = new Product('chair', 100);
let table = new Product('table', 150);

console.log('chair', chair);
console.log('table', table);


// 2. When not using OOP prototypes syntax, call and this, we have too much overhead to do things and are code is longer and more verbose.

function GMOFood (name, price, type) {
  // this = {} <123abc> - i dont care about this :(
  let result; // <gmo456>
  result =  new Product(name, price);
  result.type = type;
  return result;  // <gmo456>
  //return this; - this is not returned
}


// 3. When using Prototype constructor and `call` the `Food` constructor `calls` the Product constructor passing it the `this` object and `Product` create 2properties for us and then `Food` adds one additional property `category = 'food'`

function Food(name, price) {
  // this = {} <565aag>
  // Call Product constructor passing it the new value of `this` and arguments
  Product.call(this, name, price); //	Product.call(<565aag>, name, price) 
  this.category = 'food';
  // return this		<565aag>
}

let cheapMilk = new GMOFood('myllk', 1, 'GMO food');
let milk = new Food('milk', 1.5);


console.log('cheapMilk', cheapMilk);
console.log('milk', milk);


// 3. Create a Prototype constructor `Toy` that extends the Product constructor and adds one additional property `category = 'toy'`

function Toy(name, price, type) {
   // this = {}    <jack123>
   Product.call(this,name,price);	 // this ->  <jack123>
   //  <jack123>   { name: 'car', price:  5 }
   this.type = type; //  <jack123>   { name: 'car', price:  5, type: 'toy' }
   // return this;
}

let toyCar = new Toy('car', 5, 'toy');
console.log('toyCar', toyCar);
```





**Example 2** - Code Along  

```js
// Create an object with different methods
let obj1 = {
	name: 'I am obj1',

  // regular function has the value of this inside it, and the value is the object that called it (left of the dot) or window object.
	regularFunc: function () {
		console.log(this);
	},

  // arrow function doesn't have value of this
  // it reads the value of this from the scope around it/ in which it was defined 
	arrowFunc: () => {
		console.log(this);
	},

	parentRegularFunc: function () {
    
  // arrow function doesn't have value of this
  // it reads the value of this from the scope around it / in which it was defined (in this case parentRegularfunc)
		let childArrowFunc = () => {
			console.log(this);
		}
		childArrowFunc(); 
	}
}


// Call the regular function method which prints `this`
obj1.regularFunc();

// Call the arrow function method which prints the `this` from surrounding scope
obj1.arrowFunc();

// Call the regular function which has `this` value, which creates arrow function and calls it. Arrow function `childArrowFunc` will then borrow `this` from `parentRegularFunc` that surrounds it. 
obj1.parentRegularFunc();


// let's create a new object
let newObj = {name: 'I AM A NEW OBJ'};

// we call `regularFunc` and give it the custom value of this with `call`
obj1.parentRegularFunc.call(newObj);

// Trying to give set a new value in the arrow function is not possible because arrow function doesn't have value of this but it borrows it from the scope around it / in which it was defined.
obj1.arrowFunc.call(newObj);

// we call `parentRegularFunc` and give it the custom value of this with `call`
obj1.parentRegularFunc.call(newObj);
```

