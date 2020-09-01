# JS | Object Oriented Intro - Part 2 -  prototypes and keyword `new`



 [**Object-oriented programming (OOP)**](https://en.wikipedia.org/wiki/Object-oriented_programming) is a programming paradigm (model/standard) based on the concept of “objects”, which can contain data, in the form of *attributes* / properties ), and code in the form of functions/procedures ( known as *methods*).



**Objects** are the main key/tool/means of OOP. We will try to explain this through example.



<br>



### [OOP JS Constructors - slides](https://docs.google.com/presentation/d/1olgg5szyfuMFHPgddNmymUc9vAD36KGq_nk_JQsCxCE/edit?usp=sharing)



In order to create multiple of same structure we need object constructors. These can be made in few ways.





### Metaphor of blueprint (prototype/class)  for a car and the actual car as a product/object

![img](https://qph.fs.quoracdn.net/main-qimg-1eb4338a347e9001090228055d017f0c.webp)





# ES5 Prototype Constructor - Has Prototype



- Prototype constructors are a JavaScript native way for creating objects that derive from a prototype.



- Object prototype - constructor - is a function which serves as a blueprint and creates similar objects.
- It also has it's own methods stored in the `prototype` property that it borrows to the objects it creates (it's children/instances).



This means that prototype serves as a blueprint for every object and it can also borrow its methods to those objects.





**ES5 Prototype Constructor - Example **

```js
// Constructor names start with capital letter

function Car (brand, model) {
  this.brand = brand;
  this.model = model;
}

// Car.prototype = {};  -  `prototype` property is created automatically by JS

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

Note for the teacher - After this example you may refer to the slides to explain `__proto__` 

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





**Extending the constructor**

```js
// Extending the prototype constructor

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



<br>



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



<br>



## [Hero Factory - Exercise](https://gist.github.com/ross-u/66d8f3808e6448b54e7455e525153ab5) - **(35 - 45 min)**



<br>



## Summary



### [Summary - ES5 vs ES6 constructor syntax - Notes for the students](https://gist.github.com/ross-u/3fcddfaf3ba7196e2158c097c74c8a6b)











