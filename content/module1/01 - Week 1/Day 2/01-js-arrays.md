

# JS | Arrays







### What is a data structure

A data structure is *a particular way of organizing data.*

*The better we can organize our data, the better we can represent people, places, objects, items; the world around us, in code.*







### What is an array?

- Arrays are list-like containers used to store items together.

  

- Arrays keep the list of items ordered by numbered indexes, making it easy to traverse (loop over) and access data.

  

- Arrays is a special type of object, having specific methods used to work with lists of data.

  

- Array can hold mixed values : strings, numbers, booleans, objects, other arrays, even functions.









### **List-like data structure**



Arrays is a list-like data structure.



We can represent and store any amount of ordered items in an array.



For example if we have a list of names written by hand



**SIMPLE LIST (no code):**

```js
students:
  1. Anna,
  2. Bob,
  3. Joan,
  4. Ely
```

We can represent it as an array:

```js
var students = ['Anna', 'Bob', 'Joan', 'Ely'];
```











### Array - zero based indexing

**Arrays use zero based indexing.** 

Meaning that the first item starts on index 0.

```js
students:
  1. Anna,
  2. Bob,
  3. Joan,
  4. Ely
```



```js
var students = ['Anna', 'Bob', 'Joan', 'Ely'];
```



| **Index** | 0      | 1     | 2      | 3     |
| --------- | ------ | ----- | ------ | ----- |
| **Value** | “Anna” | “Bob” | “Joan” | “Ely” |









We can access individual elements in the array by their position in the array. For example:

```js
var students = ['Anna', 'Bob', 'Joan', 'Ely'];

var jake = students[1];

// COMPLETE THE REST :
var mike = students[];
var joan = students[];
var anna = students[];
```











## Declaring an array

### Array literal

An array can be **declared empty**:

```js
var arrayNames = []; 
// This way of creating an array is called "array literal"
```



Or you can **declare it with some elements:**

```js
var arrayNames = ["Pedro", "Jake", "Joan", "Mike"];
```



The **elements** **don’t have to be of the same type**, we can **mix** strings, numbers or any other type we want:

```js
var arrayNames = ["Pedro", 2, true];
```



###  creating  an array with `new Array` constructor - not common

```js
/* var example = new Array(/* givenElements ... or arrayLength); */

var example1 = new Array('Apple', 'Banana');
var example2 = new Array(3);

console.log(example1);  // ['Apple', 'Banana']
console.log(example2);	// [undefined, undefined, undefined]

```





### `arr.length` - property





### Accessing  elements - `arr[index]`



We can access individual elements in the array by their position in the array. For example

| **Index** | 0      | 1     | 2      | 3     |
| --------- | ------ | ----- | ------ | ----- |
| **Value** | “Anna” | “Bob” | “Joan” | “Ely” |

```js
var students = ['Anna', 'Bob', 'Joan', 'Ely'];

var jake = students[1];

// COMPLETE THE REST :
var mike = students[];
var joan = students[];
var anna = students[];
```







### Adding Elements `arr[index] = 'foo'`

```js
students[4] = 'Bob';

// QUESTION:
students[students.length] = 'Marco'; //  On which index is the string 'Marco' saved?
```





## Array methods

### Removing last element - `arr.pop()`

```js
let marco = students.pop();	// removes Marco

console.log(marco);
console.log(students);
```





### Adding new elements to the end - `arr.push('4', '5')`

```js
students.push('Maria', 'Michelle', marco)
console.log(students);
```





### Add one or more elements to beginning - `arr.unshift('foo')`

```js
students.unshift('Octocat');

console.log(students);
```





### Remove first element and return it `arr.shift()`

```js
var octocat = students.shift('Octocat');

console.log(students);
```



### Create a string from array elements `arr.join('joiningCharacter')`;

```js
var studentsString = students.join(' * ');

console.log(studentsString);
```





**Examples**

```js
console.log(students.join(','));
// expected output: "<name>,<name>,<name>"

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





### [Array warm up - Exercise](https://gist.github.com/ross-u/b83dd87e4230a34854022155a8bdea3a) (10 min)





### `forEach` - 



What if we want to do something with every element of the array.



For example we may want to  log each element of the array.



#### We can use a `for` loop 

```javascript
var students = ['Anna', 'Bob','Joan', 'Ely', 'Tom'];

for ( var i = 0; i < students.length; i++) {
  var el = arr[i];
  console.log(el);
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



#### `forEach()`

```js
var students = ['Anna', 'Bob','Joan', 'Ely', 'Tom'];

students.forEach( function(el) {
  console.log(el)
})
```







### What is a callback function



Let's refresh on what we learned in the previous lecture.





> What is a **callback function**?

** A callback is a function that is passed as an argument to another function and the called, by that function’.*

In our case using `forEach`;

In our case once each element is read, the forEach invokes the callback.





**Example 1**

```javascript
console.log('BEFORE');

var arr = ['Anna', 'Bob','Joan', 'Ely', 'Tom'];

arr.forEach( function (element, index) {
  console.log('index', index, 'element', element, 'square', element * element);
})

console.log('AFTER');
```





```js
var numbers = [100, 22, 43, 84, 15];

var result = []; // in order to `push` variable has to be declared and initialized as an empty array

numbers.forEach(function (element, index) {
  result.push('Element on index ' + index + ' is : ' + element);
});

console.log('Result', result);
```





### `concat`

The concat() method is used to join two or more arrays.

This method does not change the existing arrays, but returns a new array.

`array1.concat( array2, array3, ..., arrayX)`

```js
var arr1 = ["Marc", "Lea"];
var arr2 = ["Emily", "John", "Yvonne"];
var arr3 = ["I", "Me", "Moi"];


var newArr1 = arr1.concat(arr2);
var newArr2 = arr1.concat(arr2, arr3);

console.log(newArr1);
console.log(newArr2);
```





### Mutating and Non-mutating

**Note to remember :**  

- Methods that modify the array are called **mutating** methods. 

*  the methods that just copy from the array and don't change it are called **non-mutating**.



**Mutating:** 	splice,  shift,  unshift,  pop,  push

**Non-mutating:**  slice,  concat









## Resources

- [Array visualization](https://www.cs.usfca.edu/~galles/visualization/StackArray.html)
- [Split](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Regular Expressions](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Mutating vs. No Mutating](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/)


