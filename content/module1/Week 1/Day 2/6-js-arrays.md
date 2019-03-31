---
title: "JS Arrays"
date: 2018-11-12T12:19:02+01:00
draft: false
weight: 10
week: 1
day: 3
pre: "<b>10. </b>"
---

## Learning Objectives

- holds a list of values

* Array can hold mixed values : strings, numbers, booleans, objects, other arrays, even functions





## Declaring an array

### Array literal

An array can be **declared empty**:

```
var arrayNames = []; // This way of creating an array is called "array literal"
```



Or you can **declare it with some elements:**

```
var arrayNames = ["Pedro", "Jake", "Joan", "Mike"];
```



The **elements** **don’t have to be of the same type**, we can **mix** strings, numbers or any other type we want:

```
var arrayNames = ["Pedro", 2, true];
```



###  creating  an array with `new Array` constructor

```js
/* var example = new Array(/* givenElements ... or arrayLength); */

var arr1 = new Array("Apple", "Lenovo", "HP"); // creates array with the given elements
var arr2 = new Array(3); // creates an empty array with 3 empty spots
```





### `arr.length` - property





### Accessing  elements - `arr[index]`



We can access individual elements in the array by their position in the array. For example

| **Index** | 0       | 1      | 2      | 3      |
| --------- | ------- | ------ | ------ | ------ |
| **Value** | “Pedro” | “Jake” | “Joan” | “Mike” |

```js
var students = ['Pedro', 'Jake', 'Joan', 'Mike'];

var jake = students[1];

// COMPLETE THE REST :
var mike = students[];
var joan = students[];
var mike = students[];
```





### Adding Elements `arr[index] = 'foo'`

```js
students[4] = 'Bob';

// QUESTION:
students[students.length] = 'Marco'; //  On which index is the string 'Marco' saved?
```





## Array methods

### Removing last element - `arr.pop()`





### Adding new elements to the end - `arr.push('4', '5')`





### Add one or more elements to beginning - `arr.unshift('foo')`



### Remove first element and return it `arr.shift()`





### Create a string from array elements `arr.join('joiningCharacter')`;



**Examples**

```js
console.log(students.join(','));
// expected output: "Fire,Wind,Rain"

console.log(students.join(' '));

console.log(students.join(' < in the middle > '));


console.log(students.join('</p><p>'));


console.log('<p>' + students.join('</p><p>') + '</p>');

console.log('<p>' + students.join('</p>\n<p>') + '</p>');
```







### `String.split(' ')` - Split the string and convert it to an array;



```js
var nameString = "Mark Susan Luca Jennifer Hanna Ross Anna";

var namesArray;
// split on every empty space ' ' character
namesArray = nameString.split(' ');
console.log(namesArray);

// split after each character
console.log( nameString.split('') );

// split on letter `a`
console.log( nameString.split('a') );
```



### `slice()` - Copy elements from array (non-mutating)

**syntax**

```js
array.slice([begin[, end]]);
```



```js
var arrayNames2 = ["Pedro", "Bob", "Jake", "Joan", "Sarah", "Anna", "Jennifer", "Marco"];

// Copy entire array
var allNames = arrayNames2.slice();
console.log(allNames);

var firstTwo = arrayNames2.slice(0,2);
console.log(firstTwo);

var secondElement = arrayNames2.slice(1,2);
console.log(secondElement);

var lastTwo = arrayNames2.slice(-2);
console.log(lastTwo);
```



### 



### `splice()` - Remove elements from array (mutating)

**syntax**

```js
array.splice(start, deleteCount)
```



```js
var arrayNames2 = ["Pedro", "Bob", "Jake", "Joan", "Sarah", "Anna", "Jennifer", "Marco"];

var pedro = arrayNames.splice(0,1);
console.log(arrayNames);

arrayNames.splice(0,1); // ["Bob"]
arrayNames.splice(1,1); // ["Joan"]

// Deleting from the end
arrayNames.splice(-1); // ['Marco']
arrayNames.splice(-2); // ['Anna', 'Jennifer']
```



### `forEach` - 



What if we want to do something with every element of the array.

For example we want to do a console log for each element.



#### We can use a `for` loop 

```javascript
var arr = [1332, 1232, 4332, 9873]
for ( var ix = 0; ix < arr.length; ix++) {
  console.log(ix, arr[ix] / 100);
}
```





#### Cleaner way is with the array method - `forEach`



Let's check the MDN:

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>



**syntax**

```js
// PSEUDO CODE
arr.forEach( callbackFunction (currentValue [, index [, array]]) {
    // Do something ...
});

arr.forEach( function (currentValue [, index [, array]]) {
    // Do something ...
});
```



### What is a callback function

> What is a **callback function**?

** A callback is a function that is passed as a parameter and the called, by that function’.*

In our case using `forEach`;

In our case once each element is read, the forEach invokes the callback.



![.forEach visually explained](/home/ross-u/Desktop/IronHack_Lectures_done/content/module1/Week 1/Day 2/array forEach visualization.jpg)



**Example 1**

```javascript
console.log('before');
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (element, index) {
  console.log('index', index, 'element', element, 'square', element * element);
})
console.log('after');
```





```js
var numbers = [100, 22, 43, 84, 15];

var result = []; // in order to `push` variable has to be declared and initialized as an empty array

numbers.forEach(function (element, index) {
  result.push('Element on index ' + index + ' is : ' + element);
});

console.log('Result', result);
```







### Mutating and Non-mutating

**Note to remember :**  Methods that modify the array are called mutating, and the ones that just copy from it and don't change it are called Non-mutating.







## Visualization of arrays

[Array visualization](https://www.cs.usfca.edu/~galles/visualization/StackArray.html)





## Resources

- [Split](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Regular Expressions](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Mutating vs. No Mutating](

<https://www.codeanalogies.com/objects-arrays-practice>



## Ironhack Learning Platform