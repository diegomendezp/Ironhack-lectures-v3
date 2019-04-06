# JS | Object Oriented Intro - Part 1 - objects, methods and `this` keyword

## Learning Goals

After this lesson you will be able to:

- Explain what Object Oriented Programming is
- Comprehend the importance of thinking about objects
- Create objects with the literal pattern
- Access properties of an object
- Use the `this` keyword



Official definition of [**object-oriented programming (OOP)**](https://en.wikipedia.org/wiki/Object-oriented_programming) is that it is a programming paradigm based on the concept of “objects”, which can contain data, in the form of *attributes* / properties ), and code, in the form of procedures (often known as *methods*).



**Objects** are the main key/tool/means of OOP. We will try to explain this through example.



### Ways of constructing the objects



#### Object literals

Lets say that we want to make many similar objects.

for example if we are creating a game, we may create many players.

This can bring a lot of typing and work. Example

```js
let car1 = {
  brand: 'BMW',
  color: 'red',
  model: '530 M3',
  averageSpeed: 90,
  year: 2018,
  mileage: 0
}

let car2 = {
  brand: 'Toyota',
  color: 'red',
  model: 'Rav4',
  averageSpeed: 60,
  year: 2014,
  mileage: 0
}

let car3 = {
  brand: 'Tesla',
  color: 'red',
  model: 'Model S',
  averageSpeed: 75,
  year: 2012,
  mileage: 0
}

const drive = (hours, averageSpeed) =>  hours * averageSpeed;


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





##  Special keyword `this` (pointer)

The keyword  `this` can be found in every function.



#### `this` in functions

`this` keyword in the function holds the value of Window object.

```js
function whatIsThis () {
  console.log(this);
}

whatIsThis();
```







### `this` in methods - *on the left of the dot at the time of invocation*

`this` keyword in the method holds the value of whatever is on the left of the dot at the time of invocation.

**Question**

```js
const person = {
  name: 'John',
  age: 30,
  country: 'Scotland',
  myMethod: function () {
    console.log(this);
  }
}

// What is this in the `person.myMethod` ?

person.myMethod();
```



#### Exception - `this` in arrow functions

Arrow function's`this` doesn't point to what invoked it, instead, it points to the `this`  from the parent scope.

```js
const myObject = {
  whatsThis: this, // value of this in the object itself.
  myMethodArrow: () => {
    console.log('myMethodArrow: () => { this } ',this);
  },
  myMethodRegular: function () {
		console.log('myMethodRegular: function () { this }',this);
	}
};

myObject.whatsThis;

myObject.myMethodArrow();
console.log('##########');
myObject.myMethodRegular();

```







**Excrcise** - use repl.it

```js
// Create a function `whatIsThis` that console logs the value of `this.


// Create object `house` with properties `street`, `city` and `color`, and a method `thisIsObject` that console logs  `this`.


// Using dot notation create method `leftOfTheDot` and assign it function `whatIsThis`.
```





## Conclusion !!!

#####  Calling a function without a leading parent object will  get you the value of `this` as the *global* object which in most browsers means the `window` object.



##### In funcion which is a method, `this` points to whatever is -> On the left of the dot at the time of invocation. Except for arrow functions, which take `this` from the surrounding scope.





## Object methods and `this`



```js
let car1 = {
  brand: 'BMW',
  color: this.name + 'red',
  model: '530 M3',
  averageSpeed: 90,
  year: 2018,
  mileage: 0,
  logThis: function () { console.log(this) },
  carDetials: function () {
		return `${this.brand} ${this.model} - year: ${this.year}`;
  }
};

car1.logThis();
```



```js
let car1 = {
  brand: 'BMW',
  color: 'red',
  model: '530 M3',
  averageSpeed: 90,
  year: 2018,
  mileage: 0,
  carDetials: function () {
		return `${this.brand} ${this.model} - year: ${this.year}`;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  }
};
```







**EXCERCISE** - 15 minutes - use repl.it

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





## Extra resources

- [Learn OOP (video)](https://www.youtube.com/watch?v=O8wwnhdkPE4)
- [Object - fundamentals (video)](https://www.youtube.com/watch?v=PMfcsYzj-9M)







# JS | Object Oriented Intro - Part 2 - factory, prototypes and keyword `new`



In order to create multiple of same structure we need object constructors. These can be made in few ways.





### Methaphore of blueprint (prototype/class)  for a car and the actual car as a product/object

![img](https://qph.fs.quoracdn.net/main-qimg-1eb4338a347e9001090228055d017f0c.webp)









### Factory function and Object.assign

Most simple way is to use Factory function.

Factory function is a function that returns an object.

**Factory function doesn't allow prototype inheritance** - you cannot inherit the methods from the factory function.



```js
var carMethods = {
  start: function () {
    console.log(`${this.brand} - start engine.`);
  },
  drive: function (miles) {
    console.log(`Driving ${this.brand} - ${miles} miles`)
  },
}

// Functional object constructor - aka factory function
function carFactory (brand, model, year, color) {
  let obj = {};
  obj.brand = brand;
  obj.model = model;
  obj.year = year;
  obj.color = color;
  obj.carDetials = function () {
		return `${this.brand} ${this.model} - year: ${this.year}`;
  };
  
  obj = Object.assign(obj, carMethods);
  return obj;
};

const bmw = carFactory('BMW', '530 M3', 2019, 'silver');
const toyota = carFactory('Toyota', 'Yaris', 2010, 'blue');
const seat = carFactory('Seat', 'Ibiza', 2019, 'black');
const honda = carFactory('Honda', 'Civic', 2015, 'red');


console.log('bmw -> ', bmw);

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





# ES5 Prototype Constructor - Have Prototype



Object prototype constructors are a JavaScript native way for creating objects that derive from a prototype.



Object prototype - constructor - is a function which serves as a blueprint and creates similar objects. It also has it's own methods that it borrows to the objects it creates.



This means that prototype serves as a blueprint for every object and it can also borrow its methods to those objects.





**ES5 Prototype Constructor - Example **

```js
// Constructors names start with capital letter

function Car (brand, engineType) {
	// this = {};
	// this.__proto__ = Car.prototype;
  
	this.brand = brand;	 // create property on the new instance
  this.engineType = engineType;
	// return this;
}

Car.prototype.start = function () {
  console.log(this.brand + " Engine start");
};

// keyword `new` makes the function a constructor, and point `this` to a new object
var bmw = new Car ("BMW", "petrol");
var lexus = new Car ("Lexus", "diesel");

// Car {brand: "BMW", engineType: "petrol", start: ƒ }

bmw.start();
console.log( bmw.__proto__ === Car.prototype );
console.log( lexus.__proto__ === Car.prototype );

```



```js
// Extending the prototype

function HybridCar (brand, engineType, color) {
	// this = {};
	// this.__proto__ = Car.prototype;
  this.color = color;
  
// Calls Car and creates properties `brand` and `engineType `on the new instance
// ****
  Car.call(this, brand, engineType);
// ****
  
	// return this;
}

// This extends the methods from the Car prototype onto HybridCar
// ****
HybridCar.prototype = Object.create(Car.prototype);
HybridCar.prototype.constructor = HybridCar;
// ****


// keyword `new` makes the function a constructor, and point `this` to a new object
var hybridBmw = new HybridCar ("BMW", "electric", "red");

console.log(hybridBmw); 
```



## ES6 Classes - Have Prototype



- Are a syntactic sugar, that gives us a cleaner syntax for creating objects with
  prototypes.

- ES6 classes are ‘Special functions’ used to create object instances.

- ES6 classes are not hoisted. Ensure to defined the constructor before calling it.

- ES6 classes allow us to declare static methods, available only to be invoked by the constructor/class itself.

  

  

  **ES6 Class Constructor - Example**

```js
class Car {
	constructor (brand, engineType) { // in the constructor we specifiy parameters that will be passed
		this.brand = brand; // create property on the new instance
	};
  
	start () { // create method on the Prototype
		console.log(“Engine start”);
	};
}
const bmw = new Car ("BMW");
// Car {brand: "BMW", start: ƒ }
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
  
  // creates a method on all HybridCar instances 
	description () {
			console.log(`${brand} - ${color} color`);
	}

  // creates a static method that can be called only from class HybridCar 
  static className () { return "HybridCar" }
}

var bmwHybrid = new HybridCar (“BMW”, “black”);
// HybridCar {brand: "BMW", start: ƒ, description: ƒ }
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

