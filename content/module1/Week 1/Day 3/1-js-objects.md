---
title: JS Objects
date: 2018-11-12 11:22:06 +0000
weight: 11
week: 1
day: 4
pre: "<b>11. </b>"

---
## Learning Objectives s



Same as primitive values Objects are variables too. 

But objects can contain many values. Think of an object as a bag for other values.



##### Object is a container for named values, called properties and methods.

Property - value stored in an object

Method - function stored in an object





**syntax**

```js
/*
var obj = {
    key: value,
    key: value
}
*/

var obj = {
    name: 'Sarah',
    age: 30
}
```





##### Arrays and objects use case is :

##### - Arrays are used when you need elements saved by index number, lined up, so that you can iterate.

##### - Objects are used when you want to store elements by key name, not by index number. For example object person that has named properties.





## Declaring an object

### Object literal

```js
var person1 = {};
```



### Object constructor - using keyword `new`

```js
var person2 = new Object(); //  same as `var person2 = {};`
```



#### However, there is no specific need to use the `new Object()` syntax, for simplicity use the object literal





### Object properties - creating 

​	

```js
var obj1 = { name: 'foo' }

// The convention and good practice is to avoid single line like above
var obj2 = {
	firstName: 'John',
    lastName: 'Carr',
    age: 40,
    married: true,
    
    // after each property we should put the comma
    // the comma after the last property is called trailing comma (Some are pro some are against :) ), but it is not necessary
}
```



### Accessing the object properties



	### Dot notation

```js
obj.name = 'foo'
console.log(obj.name);
```



### Bracket notation -  expression in the brackets is evaluated 

We remember it from working with arrays

```js
var obj = {};

obj['name1'] = 'fizz';
obj['name2'] = 'baz'

console.log(obj['name1']);

console.log(obj['name' + (1 + 1)]);



// Where do we by default use bracket notation ?


// Same can be done with arrays
var myArray = [22,33,44,55];
console.log( myArray[1 + 1] );
```





## Deleting object properties - keyword `delete`

```js
var obj = {
    name: 'John',
    age: 40,
};

console.log('before', obj);

delete obj.name;

console.log('after delete - dot notation',obj);

var propName = 'age';

delete obj[propName];

console.log('after delete - bracket notation',obj);
```





* for (var key in obj) { ... }
* Object static methods
  * Object.keys(obj);
  * Object.values(obj);

## Resources

## Ironhack Learning Platform