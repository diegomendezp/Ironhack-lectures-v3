# JS | Object Oriented Intro - Part 1 - objects, methods and `this` keyword



 [**Object-oriented programming (OOP)**](https://en.wikipedia.org/wiki/Object-oriented_programming) is a programming paradigm (model/standard) based on the concept of “objects”, which can contain data, in the form of *attributes* / properties ), and code in the form of functions/procedures ( known as *methods*).



**Objects** are the main key/tool/means of OOP. We will try to explain this through example.



### Ways of constructing the objects



#### Object literals

Lets say that we want to make many similar objects.

for example if we are creating a game, we may create many players.

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







##  Special function's keyword `this` (pointer)



The function's keyword  `this` can be found in every function (except arrow functions which borrow it).



#### These are the 5 rules that describe how the value of `this` is used in JavaScript:





#### 1. In a function `(declaration` or ` expression`),   `this` refers to the global object



if a code is being executed as part of a simple function call then `this` refers to the `global` / `Window` object.

`this` keyword in the function holds the value of the `Window` object.

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









#### 4. If `apply`, `call`  or `bind` are used to call/create a regular function, `this` inside the function is the variable that is passed in as the first argument . 



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



#### 5. Exception - Using keyword `new` when calling the function (function Constructors)



If the new 	keyword is used when calling the function, this inside the function is a brand new object.

```js
function Cars (name, color) {
	this.name = name;
	this.color = 'MY COLOR' + ': ' + color;
	console.log('this in the function', this);
}


// NO keyword `new`
let golf = Cars('golf', 'blue');

console.log(golf); // undefined
window.name;	// "golf"
window.color	// "blue"


// WITH keyword `new`
let tesla = new Cars('tesla', 'red') 
tesla.name;	//	tesla 
tesla.color;	//	"red"

```







## [**What is This - Exercise**](https://gist.github.com/ross-u/4d9429d70ef93b08922f4abc783c03c0) - (15 min)











## Conclusion and Summary !

#####  Calling a function without a leading parent object will get you the value of `this` as the `global`/`window`



##### In a method function which is a method, `this` points to whatever is -> <u>On the left of the dot at the time of invocation (calling the function)</u>. 



**When using keyword `new` with a constructor, `this` represents a newly created object.** 



##### Arrow functions do not bind it's own `this`, but they take `this` from the surrounding scope where they were created.



**We can `call` , `apply` or `bind` regular functions/method to change the context/`this` value.**



























### [Chuckify it! - Exercise ](https://gist.github.com/ross-u/8323650c8d737fdf906a008b8c041a87) - (15 min)



```js
// TODO: write the methods .getAge(), .addJoke() and .getRandomJoke()

let chuck = {
  firstName: 'Chuck',
  lastName: 'Norris',
  birthDate: new Date('1940-03-10'),
  jokes:[
    'Chuck Norris counted to infinity... Twice.',
    'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis',
  ],
  displayInfo: function() {
    console.log('My name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.jokes.length + ' jokes!')
  },
  getAge: function() {
    // TODO
    // Hint: to get the current time, you can do: new Date()
    // Hint: check what does the getTime() method return
    // Hint: to get the birthDate, you can do: this.birthDate
    // Hint: you can subtract 2 dates and you get the number of milliseconds
  },
  addJoke: function(){
    // TODO 
    // Hint (don't return anything)
  },
  getRandomJoke: function() {
    // TODO - Return random joke from the jokes array
  },
}

chuck.displayInfo();

console.log('getAge', chuck.getAge()) ; // Should return 79 if you are in 2019

chuck.addJoke('Chuck Norris can divide by zero.');
chuck.addJoke('Chuck Norris kills flies with his gun.');
chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
chuck.addJoke('Chuck Norris doesn\'t Google, he Chuckles');

console.log('getRandomJoke', chuck.getRandomJoke());
console.log('getRandomJoke', chuck.getRandomJoke());
console.log('getRandomJoke', chuck.getRandomJoke());

chuck.displayInfo();
```









