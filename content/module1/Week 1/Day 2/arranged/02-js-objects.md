---
title: JS Objects
date: 2018-11-12 11:22:06 +0000
weight: 11
week: 1
day: 4
pre: "<b>11. </b>"

---
## Learning Objectives



But objects can contain many values. Think of an object as a bag for other values.



##### Object is a collection of values and functions that belong together. 



The value's in object can be any type:  strings, numbers, arrays, functions and even other objects!





##### How do we call them ?

​	**Properties** - values stored in an object - they hold some value

​	**Methods** - functions stored in an object - they do something





Properties and methods are stored in the object as **key: value** pairs



**syntax**

```js
/*
var obj = {
    key: value,
    key: value
}
*/
// Each pair is separated with coma 

var person = {
    name: 'Sarah',
    age: 30
}
```





##### - Arrays are used when you need elements saved by index number, lined up, so that you can iterate.

##### - Objects are used when you want to store elements by key name, not by index number. For example object `person` that has named properties `name` and  `age` .







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





## Creating object methods - simple example

```js
var person = {
    firstName: 'John',
    lastName: 'Carr',
    age: 30,
    from: 'Scotland',
    married: false,
    
    sayHello: function (name) {
        console.log('Hello ' + name + '! I am John.')
    }
}

// Assignment in the object is done with ':'
// Assignment outside of the object is done with '=' 

// Adding a method using a dot notation
person.myAge = function () {
    console.log('I am 30.')
}

// Adding a method using a square notation
person[myBirthplace] = function () {
    console.log('I am from Scotland.');
};
```







## Deleting object properties - keyword `delete`

```js
var obj = {
    name: 'John',
    age: 30,
};

console.log('before', obj);

delete obj.name;

console.log('after delete - dot notation',obj);

var propName = 'age';

delete obj[propName];

console.log('after delete - bracket notation',obj);
```





## `for...in` statement - *iterates over property names*



##### The `for...in` statement iterates over all property names of an object. Only name's not values.





**Syntax**

```js
for (variable in objectName) { ...
	// do something in here
}
```



````js
var obj = {a: 15, b: 25, c: 35};


for (var propName in obj) {
  console.log(propName);
}

// Output:
// "a"
// "b"
// "c"


// We can access the values with the bracket notation
for (var propName in obj) {
  console.log(obj[propName]);
}


// Output:
// "15"
// "25"
// "35"
````







## Object prototype methods



`Object` prototype is the "parent" class that holds static methods that we use only with objects. 

These static methods are `Object.keys` and `Object.values()`



### `Object.keys()` - returns array of property names



The `Object.keys()` method returns an array of a given object's own property names, in the same order as we get with a normal loop.

Caveat, this names are not guaranteed to return in the exact order 100% times, like looping over an array which has numbered indexes.





**Example**

```js
var obj1 = {a: 1, b: 2, c: 3};

var obj2 = { 
  firstName: 'John',
  lastName: 'Carr',
  age: 30
}

console.log('obj1: ', Object.keys(obj1));

console.log('obj2: ', Object.keys(obj2));

```



### `Object.values()` - returns array of objects property values - 



The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).



**Example**

```js
var obj1 = {a: 1, b: 2, c: 3};

var obj2 = { 
  firstName: 'John',
  lastName: 'Carr',
  age: 40
}

console.log('obj1: ', Object.keys(obj1));

console.log('obj2: ', Object.keys(obj2));
```







### [Exercise - Objectively](https://gist.github.com/ross-u/2e6fff85921c06839ba17cbb04e3a049) (15 min)







### Storing Objects and arrays together



```js
var persons = [
  {name: 'Sarah', age: 22, occupation: 'Software Engineer'},
  {name: 'Jack', age: 26, occupation: 'Front End Developer'},
  {name: 'Marco', age: 34, occupation: 'Taxi Driver'},
  {name: 'Gloria', age: 41, occupation: 'Logistics Manager'},
  {name: 'Ben', age: 39, occupation: 'Program Manager'},
];


persons.forEach( function(person) {
  person.friends = ['Anna', 'Allyn', 'Alex'];
})


console.log(persons);

// How can we add another person to Sarah's array of friends

persons[0].friends.pop();
persons[0].friends.push('Uros');
```





## Resources

## Ironhack Learning Platform