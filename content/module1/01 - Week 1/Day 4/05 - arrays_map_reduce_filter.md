# JS | Arrays - Map, Reduce & Filter





After this lesson you will be able to:

- Understand advanced array methods such as `filter`, `reduce`, and `map`
- Distinguish between `forEach` and `map` and when to use each of them
- Know how `reduce` and `filter` works
- Implement `filter`, `map` and `reduce` in real examples







### [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - refresher



##### What does the `forEach()` method do ?

The `forEach()` method executes a provided function once for each array element.

`forEach()` **does not return** a **new array**.



```js
let arr = ['a', 'b', 'c'];

arr.forEach( function(element, index, originalArr) {
  console.log(element, index, originalArr);
});

// or in ES6
arr.forEach((element, index, originalArr) => console.log(element));
```



##### For each doesn't return anything.  It always returns `undefined` by default.

```js
let arr = ['a', 'b', 'c'];
let result;

result = arr.forEach( function (element) {
  console.log(element);
});
```







### [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)



The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.



**Remember:**  `map()` always **returns** a **new array**.

#### `map()` doesn't mutate the original array. original array is safe.



**syntax**

```js
let newArray = arrayFrom.map( function ( currentValue[, index [, array]])) {
	// Return element to be stored in the newArray
}
```





**Example 1**

```js
const array = ['50', '60', '70'];

// ES5:
var newArray1 = array.map( function (number){
  return number * 2;
})
console.log(newArray);

// ES6:
const newArray2 = array.map( (number) => number * 2)
console.log(newArray);



// ***********
const indexArray1 = array.map( function (ele, index, originalArr) {
    return index;
});
console.log(indexArray1);

// ES6:
const indexArray2 = array.map( (ele, index, originalArr ) => index );
console.log(indexArray2);



// ***********
const matrixArray1 = array.map( function (ele, index, originalArr ) {
  return originalArray;
});
console.log(matrixArray1);

// ES6:
const matrixArray2 = array.map( (ele, index, originalArr ) => originalArr );
console.log(matrixArray2);

```





**Example 2** - working with array of objects (usual for working with APIs)

```js
let students = [
	{firstName: 'John', lastName: 'Carr'},
  {firstName: 'Leonardo', lastName: 'Di Vittorio'},
  {firstName: 'Sarah', lastName: 'O\'Connor'},
]

let studentNames = students.map( function (element) {
	return element.firstName;
});

console.log(studentNames);

// Quick Excercise
// Redo the same function in ES6


// Create an array that contains new objects containing the index and the fullName, like {fullName: 'John Carr', index: 0}
```







### [Capitalize the Capitals - `map()` & `forEach()` Exercise](https://gist.github.com/ross-u/9704edbf94fad12b428e539a34dfa47b) (10 min)



### [Get the Final Grade - `map()` Exercise](https://gist.github.com/ross-u/f222e5e4c2dc258a36af8bd2dc1464b6) (10 min)





### Get the final grade exercise  - Solution 

```js
const finalGrades = students.map( (student) => {

  const finalGrade  = (student.firstProject + student.secondProject + student.finalProject) / 3;

  return {
    name: student.name,
    finalGrade: Math.round(finalGrade)
  };
});
```











## `reduce()`

[.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) is array method that **turns a list of values into one value**.



It goes over the array and reduces the values from the array to one single thing, that it returns at the end.  It has a variable accumulator which is used to store things and return something at the end.



##### You can think of it as boiling something down. Like taking 10 tomatoes and boiling it down to a tomato soup, we take the array and we boil it down/ we reduce it to one value. We can create a new object, string, number, array, whatever ...







**syntax**

```js
const reduced = array.reduce( function(accumulator, currentValue, currentIndex, originalArray ){
    return accumulator + currentValue;
}, initialValue);

// if the initial value is specified then acummulator starts with that value
// if the initial value is not pecified then acummulator is same as arrays first index
```





**Example 1** **- reduce an array of numbers (sum)** 

```js
const numbers = [10, 19, 41, 30, 450];

const reducedNumbers = numbers.reduce( function (total, currentNum) {
    let updatedAccumulator = acummulator + currentNum;
    return updatedAccumulator;
    // same as acummulator = accumulator + currentNum
}, 0);


// ES6:
const reducedNumbers2 = numbers.reduce( (total, currentNum) => {
    let updatedAccumulator = acummulator + currentNum;
    return updatedAccumulator;
    // same as acummulator = accumulator + currentNum
}, 0);

```



**Example 2** - Reducing the values from an array to a string

```js
const listItems = [
  { name: 'Edward', age: 42},
  { name: 'Marc', age: 38}, 
  { name: 'Luca', age:21 },
  { name: 'Natalia', age:32 },
  { name: 'Anna', age:24 },
  { name: 'Amy', age:25 }
];

const namesString = listItems.reduce( function (accum, currentElement, index ) {
  let updatedAccum = accum + ' ' + currentElement.name;
  return updatedAccum;
}, '');
```



 

**Example 3** - let's create an HTML element string

```js
const listItems = [
  { name: 'Edward', age: 42},
  { name: 'Marc', age: 38}, 
  { name: 'Luca', age:21 },
  { name: 'Natalia', age:32 },
  { name: 'Anna', age:24 },
  { name: 'Amy', age:25 }
];

const htmlString = listItems.reduce( function (accum, element, index) {
    if (index === 0) {
 	 		return accum += '<div> <h1>' + element.name + '</h1>';
    }
    else if (index === listItems.length - 1 ) {
  		return accum += '<h1>' + element.name + '</h1> </div>';
		}
   	else {
      return accum += '<h1>' + element.name + '</h1>';                                     
    }
}, '');

```

 



### [Age Reducer - Exercise](https://gist.github.com/ross-u/a167ce8ac283c423cc8e45c99e897ead) (10 min) (**MAY BE HARD FOR SOME STUDENTS**)



### Solution - AGE REDUCER

```js
//	solution
const ageTotal = people.reduce( (sum, person) => {
   return sum + person.age;
});
```





<br>



### `.filter()`

##### The `.filter()` method iterates over an array and creates a new array with all elements that pass the condition we set.



**Remember**: if the `return` in the function is `true`, that element will be saved in the new array.



**syntax**

```js
const newArray = array.filter( function (element) {
	// if `return` `true` save the element in newArray;
  // if `return` `false` skip current element, and to next one in array
})
```



**Example 1:**



```js
const numbers = [1, 2, 3, 4, 5, 6];

const filteredNumbers = numbers.filter( function (number) {
  return number > 3; // this evaluates to true
  
// Same as :  
// if (number > 3) return true;
});

console.log(filteredNumbers);
```

<br>





**Example 2 :**

```js
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter( function (number) {
  return number % 2 === 0; // this evaluates to true
  
// Same as :  
// if (number % 2 === 0) return true;
});

console.log(evenNumbers);



// Cleaner way to write it is

const evenNumbers2 = numbers.filter(function (number) {
  return number % 2 === 0; // same as above
});
```





<br>



###  [Example - Filter the listings - `filter()`](https://gist.github.com/ross-u/8cbb5d9c901e81ed517f041c5ce19782) ( use as an explanation for the students)



<br>





### Solution - Filter the listings



```js
// ES5:
const poolFilter = places.filter(function(thePlace) {
  return thePlace.pool;
// Same as:
// if (thePlace.pool) return true;
})

// ES6:
const poolFilter = places.filter(thePlace =>  thePlace.pool)

console.log(poolFilter);
```





### [ JS | Array methods Summary](https://gist.github.com/ross-u/97c39ea0a55ced695c0e1be8136ee5c6)

