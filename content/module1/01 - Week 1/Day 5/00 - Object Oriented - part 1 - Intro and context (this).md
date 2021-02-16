# JS | Object Oriented Intro - Part 1 - objects, methods and `this` keyword



 [**Object-oriented programming (OOP)**](https://en.wikipedia.org/wiki/Object-oriented_programming) is a programming paradigm (model/standard) based on the concept of “objects”, which can contain data, in the form of *attributes* / properties ), and code in the form of functions/procedures ( known as *methods*).

s





**Objects** are the main key/tool/means of OOP. We will try to explain this through an example.



### Ways of constructing the objects



We can construct objects in few different ways

- Object literal (manual way)
- Factory funciton (we won't show it this time)
- Class or Constructor Function ( using OOP principles: abstraction, inheritance )



#### Object literals

Lets say that we want to make many similar objects.

for example if we are  to create a database of vehicles, we may need to create many objects manually.

This can bring a lot of typing and work. 



##### Example

```js
let car1 = {
  brand: 'BMW',
  color: 'red',
  model: '530 M3',
  averageSpeed: 90,
  year: 2018,
  mileage: 0
};

let car2 = {
  brand: 'Toyota',
  color: 'red',
  model: 'Rav4',
  averageSpeed: 60,
  year: 2014,
  mileage: 0
};

let car3 = {
  brand: 'Tesla',
  color: 'red',
  model: 'Model S',
  averageSpeed: 75,
  year: 2012,
  mileage: 0
};


function drive (hours, averageSpeed) { 
	return hours * averageSpeed;
};


console.log(car1);
console.log(car2);
console.log(car3);

car1.mileage = drive(1400, car1.averageSpeed);
car2.mileage = drive(1050, car2.averageSpeed);
car3.mileage = drive(900, car3.averageSpeed);

console.log(car1);
console.log(car2);
console.log(car3);
```





### Class or function constructor



Let's see how the above can be abstracted (abstraction) and made easier and more structured.

This is just a brief example. In the next lecture we will, dive into the syntax.
For now it is "kind off" intuitive easy to understand how the below class  "kind of" works:

```js
class Car {
  constructor(brand, color, model, averageSpeed, year) {
    // this represents the new object that will be created
    this.brand = brand; 
    this.color = color; 
    this.model = model; 
    this.averageSpeed = averageSpeed;
    this.year = year;

    this.mileage = 0;
  }
}


const car1 = new Car('Seat', 'white', 'Ibiza', 60, 2020 )
const car2 = new Car('Seat', 'blue', 'Ibiza', 60, 2019 )
const car3 = new Car('Seat', 'red', 'Ibiza', 60, 2018 )
```









<br>





##  Special function's keyword `this` 



The function's keyword  `this` can be found in every function (except arrow functions which borrow it).



## CONTEXT

`this` is natural to the **functions** . Once a `function` is called and it executes, `this` is created inside of the scope of that function. at that moment `this` keeps the reference of the **context** that called it. 







#### These are the 5 rules that describe how the value of `this` is used in JavaScript:





#### 1. In a function `(declaration` or ` expression`),   `this` refers to the global object



if a code is being executed as part of a simple function call then `this` refers to the `global` / `Window` object.

`this` keyword in the function holds the value of the `Window` object (or `undefined` if in strict mode).

```js
function whatIsThis () {
  console.log(this);
}

whatIsThis();
```









### 2. `this` in methods - *on the left of the dot at the time of invocation*



`this` keyword in the method holds the value of whatever is on the left of the dot at the time of invocation (the object that is invoking the method).

**Question**

```js
const person = {
  name: 'John',
  age: 30,
  country: 'Scotland',
  myMethod: function () {
    console.log(this);
  }
};

// What is this in the `person.myMethod` ?

person.myMethod();
```





#### 3. Exception - `this` in arrow functions

If the function/method is an ES2015 arrow function, it receives `this` value of its surrounding scope at the time it is created.

```js
const myObject = {
  whatsThis: this, // value of this in the object itself.
  myMethodArrow: () => {
    console.log('myMethodArrow() -> this ',this);
  },
  myMethodRegular: function () {
		console.log('myMethodRegular() -> this ',this);
	}
};

myObject.whatsThis;

myObject.myMethodArrow();

console.log('##########');
myObject.myMethodRegular();
```









#### 4. If `apply`, `call`  or `bind` are used to call/create a regular function, `this` inside the function is the variable that is passed in as the first argument .  We say that they explicityl bind the valu of `this`.



**Arrow function** (lexically) binds the `this` value, which means that we **cannot** **bind**  `this`  value to it using `call`, `apply`, `bind`.



```js
const myObj = {
    name: 'My object',
    printThis: function () {
		console.log(this);
	}
}

const randomObj = {
	price: 555,
    name: 'Random Object'
}


myObj.printThis();

myObj.printThis.call(randomObj);
```



#### 5. Exception - Using keyword `new` when calling the function ( function Constructors)



If the new 	keyword is used when calling the function, this inside the function is a brand new object.



```js
function Car () {
	console.log(this)
}


Car();	//	Window

new Car();  //	{}
```



What happens behind the scene is, that function with keyword `new` returns a new object:

```js
function Car () {
	// this = {}
  
  // return this
}

var carObj = new Car();
```







## [**What is This - Exercise**](https://gist.github.com/ross-u/4d9429d70ef93b08922f4abc783c03c0) - (15 min)











## Conclusion and Summary !

#####  Calling a function without a leading parent object will get you the value of `this` as the `global`/`window`



##### In a method function which is a method, `this` points to whatever is -> <u>On the left of the dot at the time of invocation (calling the function)</u>. 



**When using keyword `new` with a constructor, `this` represents a newly created object.** 



##### Arrow functions do not bind it's own `this`, but they take `this` from the surrounding scope where they were created.



**We can `call` , `apply` or `bind` regular functions/method to change the context/`this` value.**





<br>



### [Chuckify it! - Exercise ](https://gist.github.com/ross-u/8323650c8d737fdf906a008b8c041a87) - (15 min)




