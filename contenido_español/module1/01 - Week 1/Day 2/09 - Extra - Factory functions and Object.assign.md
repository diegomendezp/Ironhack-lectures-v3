# Factory function & `Object.assign`



<br>



To create multiple objects with the same structure we use a function.

 A function that returns an uniform object is commonly called a Factory function .

JavaScript has a native way to create multiple object instances. We will cover this topic in depth during the JavaScript OOP. However, creating a factory function is a good exercise to get more familiar with the objects and functions and to prepare your self conceptually for the OOP that we will learn soon.



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





<br>





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



<br>



#### `Object.assign` :

**syntax**

```js
Object.assign(destinationObject, sourceObject);
```



- Takes an object as a first parameter -  destination object.
- Takes source object as second parameter, and copies it to destination object.
- If any property from source obj. exists in destination, it will overwrite it with one from source.
- When copying is finished - It returns destination object at the end.