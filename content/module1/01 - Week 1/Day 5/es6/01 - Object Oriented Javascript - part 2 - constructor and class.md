# JS | Object Oriented Intro - Part 2 -  prototypes and keyword `new`



 [**Object-oriented programming (OOP)**](https://en.wikipedia.org/wiki/Object-oriented_programming) is a programming paradigm (model/standard) based on the concept of “objects”, which can contain data, in the form of *attributes* / properties ), and code in the form of functions/procedures ( known as *methods*).



**Objects** are the main key/tool/means of OOP. We will try to explain this through example.



<br>



### [OOP JS Constructors - slides](https://docs.google.com/presentation/d/1olgg5szyfuMFHPgddNmymUc9vAD36KGq_nk_JQsCxCE/edit?usp=sharing)



In order to create multiple of same structure we need object constructors. These can be made in few ways.





### Metaphor of blueprint (prototype/class)  for a car and the actual car as a product/object

### [IMAGE](https://qph.fs.quoracdn.net/main-qimg-1eb4338a347e9001090228055d017f0c.webp)





## ES6 Classes



- Is a syntactic sugar, that gives us a cleaner syntax for creating objects with
  prototypes.

- ES6 classes are ‘Special functions’ used to create objects ( aka instances).

- ES6 classes are not hoisted. Ensure to defined the constructor before calling it.

- ES6 classes allow us to declare static methods, available only to be invoked by the constructor/class itself.







```js
// Class names start with capital letter

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}
// Car.prototype = {};  -  `prototype` property is created automatically by JS

var bmw = new Car ("BMW", "X5");
var lexus = new Car ("Lexus", "L300");

console.log(bmw);  // Car {brand: "BMW", model: "X5"}

```



<br>



##### How  `class`es works behind the scenes

```js
// Class names start with the capital letter

class Car {
  constructor(brand, model) {
  // this = {};
    this.brand = brand;  // create property on the new instance
    this.model = model;
  }

	// return this;
}

// keyword `new` is used to instantiate new objects. 
// It is a crucial keyword which enables the functionality of the `class` and the "constructor functions"
var bmw = new Car ("BMW", "X5");
var lexus = new Car ("Lexus", "L300");

console.log(bmw);
// Car {brand: "BMW", model: "X5", start: ƒ }

```



<br>



#### prototype Methods

Prototype methods which we want to borrow to all of the object instances, are created inside of the `class` after the `constructor` block. Any method created in here, will be saved in the `.prototype` of the `class`.

```js
class Car {
  constructor(brand, model) {
  // this = {};
    this.brand = brand;  // create property on the new instance
    this.model = model;
  }

  start () {
    console.log(this.brand + " start engine.");
  }
	// return this;
}

// keyword `new` makes the function a constructor, and point `this` to a new object
var bmw = new Car ("BMW", "X5");
var lexus = new Car ("Lexus", "L300");

// Car {brand: "BMW", model: "X5" }

bmw.start();


// PROTOTYPAL INHERITANCE:
// Each class has a special object called `prototype` which is used to store all of the 
// methods created after the `constructor` block and share them
// with all the instances

console.log('Car.prototype :', Car.prototype);

// Each instance object is connected to the `.prototype` of it's class 
// via the internal property  `__proto__`
console.log(bwm.__proto__ === Car.prototype );   // true
console.log(lexus.__proto__ === Car.prototype );  // true
```



<br>



### Extending the constructor

and

### `static` methods



The `static` keyword defines a static method for a class. 

Static methods are called without [instantiating ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_object_(class_instance))their class and **cannot** be called through a class instance. Static methods are often used to create utility functions for an application.



```js
// Extending the prototype constructor

class HybridCar extends Car {
  constructor(brand, model, engineType) {
    super(brand, model);
    this.engineType = engineType; 
  }
  
  description () {
    console.log(`Brand: ${this.brand}.\nEngine: ${this.engineType}`);
	}
  
  // creates a static method that can be called only from class HybridCar
  static getClassName() {
    console.log("class name is HybridCar");
  }
  
}

// Check the class HybridCar prototype
console.log(HybridCar.prototype);

// Use of the static method
HybridCar.getClassName();

// keyword `new` makes the function a constructor, and point `this` to a new object
var hybridBmw = new HybridCar ("BMW", "i3", "hybrid");

console.log(hybridBmw);

console.log('HybridCar.prototype :', HybridCar.prototype);
```









### Sidenotes for the teacher



##### `__proto__`

When object is created in JavaScript  the engine adds the `__proto__` (aka *dunder proto*) property to the new object. This `__proto__` property points to the `prototype` object of the it's constructor.





#### `constructor` property 

When a function is created in JavaScript the JS engine adds a `prototype` object **to the function**. 

This `prototype` object has a `constructor` property which points back to the function.











## [Hero Factory - Exercise](https://gist.github.com/ross-u/5a919d6285dd3d2b67f0f05907c70953) - **(35 - 45 min)**



<br>



## Summary



### [Summary - ES5 vs ES6 constructor syntax - Notes for the students](https://gist.github.com/ross-u/3fcddfaf3ba7196e2158c097c74c8a6b)











