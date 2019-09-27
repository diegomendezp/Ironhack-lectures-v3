# JS | Object Oriented Intro - Part 1 - objects, methods and `this` keyword



[OOP JS Constructors - slides](https://docs.google.com/presentation/d/1olgg5szyfuMFHPgddNmymUc9vAD36KGq_nk_JQsCxCE/edit?usp=sharing)



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







### [**Exercise** GIST ()](https://gist.github.com/ross-u/4d9429d70ef93b08922f4abc783c03c0) - 15 min











## Conclusion and Summary !

#####  Calling a function without a leading parent object will get you the value of `this` as the `global`/`window`



##### In a method function which is a method, `this` points to whatever is -> <u>On the left of the dot at the time of invocation (calling the function)</u>. 



**When using keyword `new` with a constructor, `this` represents a newly created object.** 



##### Arrow functions do not bind it's own `this`, but they take `this` from the surrounding scope where they were created.



**We can `call` , `apply` or `bind` regular functions/method to change the context/`this` value.**



























### [EXERCISE - gist](https://gist.github.com/ross-u/8323650c8d737fdf906a008b8c041a87) - 15min



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









# JS | Object Oriented Intro - Part 2 - factory, prototypes and keyword `new`



In order to create multiple of same structure we need object constructors. These can be made in few ways.





### Metaphor of blueprint (prototype/class)  for a car and the actual car as a product/object

![img](https://qph.fs.quoracdn.net/main-qimg-1eb4338a347e9001090228055d017f0c.webp)









### Factory function and Object.assign (consider skipping)



Most simple way is to create multiple objects is to use a function.

 A function that returns an uniform object is called a Factory function .

**Factory function doesn't allow prototype inheritance** - you cannot inherit the methods from the factory function.

```js
function carFactory (brand, model) {
  
  let carObj = {};
  
  carObj.brand = brand;
  carObj.model = model;
 
  carObj.carDetails = function () {
    console.log( `${this.brand} ${this.model}` );
  };
  
  carObj.start = function () {
    console.log(`${this.brand} start engine`);
  }

  carObj.drive = function (miles) {
    console.log(`Driving ${this.brand} ${miles} miles`);
  }

  return carObj;
}
```







#### Using `Object.assign` to copy the data from one object to another.



```js
const carMethods = {
  start: function () {
    console.log(`${this.brand} start engine.`);
  },
  drive: function (miles) {
    console.log(`Driving ${this.brand} ${miles} miles`)
  },
}


// Functional object constructor - aka factory function
function carFactory (brand, model) {
  let carObj = {};
    
  carObj.brand = brand;
  carObj.model = model;
  carObj.carDetials = function () {
		return `${this.brand} ${this.model}`;
  };
    
  // Copy the methods from the `carMethods` object to the `carObj` 
  carObj = Object.assign(carObj, carMethods);
    
  return objInstance;
};



// Create new objects using the above function
// we don't use keyword `new`!
const bmw = carFactory('BMW', '530 M3');
const toyota = carFactory('Toyota', 'Yaris');
const seat = carFactory('Seat', 'Ibiza');
const honda = carFactory('Honda', 'Civic');


bmw.carDetails();
bmw.start();
bmw.drive(50);
```





#### `Object.assign` :

**syntax**

```js
Object.assign(destinationObject, sourceObject);
```



- Takes an object as a first parameter -  destination object.
- Takes source object as second parameter, and copies it to destination object.
- If any property from source obj. exists in destination, it will overwrite it with one from source.
- When copying is finished - It returns destination object at the end.













# ES5 Prototype Constructor - Has Prototype



Object prototype constructors are a JavaScript native way for creating objects that derive from a prototype.



Object prototype - constructor - is a function which serves as a blueprint and creates similar objects. It also has it's own methods that it borrows to the objects it creates.



This means that prototype serves as a blueprint for every object and it can also borrow its methods to those objects.





**ES5 Prototype Constructor - Example **

```js
// Constructor names start with capital letter

function Car (brand, model) {
  this.brand = brand;
  this.model = model;
}

var bmw = new Car ("BMW", "X5");
var lexus = new Car ("Lexus", "L300");

console.log(bmw);  // Car {brand: "BMW", model: "X5"}

```



##### Under the hood

```js
// Constructor names start with capital letter

function Car (brand, model) {
	// this = {};
	// this.__proto__ = Car.prototype;
  
	this.brand = brand;	 // create property on the new instance
  	this.model = model;
	// return this;
}

// keyword `new` makes the function a constructor, and points `this` to the new object
var bmw = new Car ("BMW", "X5");
var lexus = new Car ("Lexus", "L300");

console.log(bmw);
// Car {brand: "BMW", model: "X5", start: ƒ }

```



#### prototype Methods

```js
function Car (brand, model) {
	// this = {};
	// this.__proto__ = Car.prototype;
  
	this.brand = brand;	 // create property on the new instance
  	this.model = model;
	// return this;
}

Car.prototype.start = function () {
  console.log(this.brand + " start engine.");
};

// keyword `new` makes the function a constructor, and point `this` to a new object
var bmw = new Car ("BMW", "X5");
var lexus = new Car ("Lexus", "L300");

// Car {brand: "BMW", model: "X5" }

bmw.start();
console.log( bmw.__proto__ === Car.prototype );
console.log( lexus.__proto__ === Car.prototype );
```





```js
// Extending the prototype

function HybridCar (brand, model, engine) {
	// this = {};
	// this.__proto__ = Car.prototype;
  
	// Calls Car and creates properties `brand` and `engineType `on the new instance
	// ****
  	Car.call(this, brand, model);
	// ****
    
    this.engine = engine;
  
	// return this;
}

// This extends the methods from the Car prototype onto HybridCar
// ****
HybridCar.prototype = Object.create(Car.prototype);
HybridCar.prototype.constructor = HybridCar;
// ****


// keyword `new` makes the function a constructor, and point `this` to a new object
var hybridBmw = new HybridCar ("BMW", "i3", "hybrid");

console.log(hybridBmw); 
```









### Sidenotes for the teacher



##### `__proto__`

When object is created in JavaScript  the engine adds the `__proto__` (aka *dunder proto*) property to the new object. This `__proto__` property points to the `prototype` object of the it's constructor.





#### `constructor` property 

When a function is created in JavaScript the JS engine adds a `prototype` object **to the function**. 

This `prototype` object has a `constructor` property which points back to the function.





## ES6 Classes - Have Prototype



- Is a syntactic sugar, that gives us a cleaner syntax for creating objects with
  prototypes.

- ES6 classes are ‘Special functions’ used to create objects ( aka instances).

- ES6 classes are not hoisted. Ensure to defined the constructor before calling it.

- ES6 classes allow us to declare static methods, available only to be invoked by the constructor/class itself.

  

  

  **ES6 Class Constructor - Example**

```js
class Car {
	constructor (brand, engineType) { // in the constructor we specifiy parameters that will be passed
		this.brand = brand; // create property on the new instance
	}
  
  start () { // create method on the Prototype
    console.log("Engine start");
	}
}

const bmw = new Car ("BMW");
// Car {brand: "BMW"}

bmw.start();
```





**Extending the class**

```js
class HybridCar extends Car {
	constructor (brand, color) {
    //this = {};
		super(brand);
		// call super class Car - which creates property ` brand` on the new instance
    // this.brand = ... created by super();
		this.color = color; // create property on the new instance
	}
  
  // creates a method on the HybridCar prototype 
	description () {
			console.log(`${this.brand} - ${this.color} color`);
	}

  // creates a static method that can be called only from class HybridCar 
  static className () { return "HybridCar" }
}

var bmwHybrid = new HybridCar ("BMW", "black");
// HybridCar {brand: "BMW"}

bmwHybrid.description(); 	//  from the HybridCar.prototype -> bmwHybrid.__proto__
bmw.start();	//	from the car.prototype -> bmwHybrid.__proto__.__proto__
```





**Exercise - 30 min** - 

```js
// 1. Create a `heroFactory` "functional object constructor" which creates objects with properties "name", "superpowers", "costumeColor", "location" and assign to each shared method "heroDescription" which console.logs( `${name} - ${superpower} - ${location} ).

function heroFactory (name, superpowers, costumeColor, location) {
	// Your code here ..
}

const superman = heroFactory('Superman', 'flight, superhuman strength, x-ray vision,', 'red, blue and yellow', 'Metropolis');

console.log(superman);
superman.heroDescription();

// 2. Refactor the `heroFactory` "functional object constructor" and make it a Prototype constructor called "heroPrototype" which creates same hero objects as "heroFactory". Create the same "heroDescription" method on the prototype and a new method called "heroLocation" which console.logs(`${name} is hidding in ${location}`). Remember that Prototype Constructor must use keyword `new`.


function HeroPrototype (name, superpowers, costumeColor, location) {
	// Your code here ..
}

const spiderman = new HeroPrototype('Spider-Man', 'spider net, spider sense', 'red and blue', 'New York, Queens');

console.log(spiderman);
spiderman.heroDescription();
spiderman.heroLocation();

// Refactor the `heroPrototype`  and make it a ES6 class called "heroClass" which creates same hero objects as "heroPrototoype". Create the same "heroDescription" and "heroLocation" methods. 
// Add a `static` method "className" which console.logs("HERO CLASS"). Remember that Class constructor must use keyword `new`.


class HeroClass {
  constructor(name, superpowers, costumeColor, location) {
		// Your code here ..
  }
  
  static className () { // Your code here .. }
}

const bananaman = new HeroClass('Banananman', ' Flight, Invulnerability, Breathing in space, Helium-boosted heat finger', 'blue and yellow', 'Unknown');

console.log(bananaman);
bananaman.heroDescription();
bananaman.heroLocation();

HeroClass.className();


// Extend a class "SuperHeroClass" which extends "heroClass" and has one additional new property "immortal" which is a boolean.


class SuperHeroClass extends HeroClass {
  constructor(name, superpowers, costumeColor, location, immortal) {
		// Your code here ..
  }
}
```

