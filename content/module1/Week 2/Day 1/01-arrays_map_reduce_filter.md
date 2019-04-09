# JS | Arrays - Map, Reduce & Filter



## Learning Goals

After this lesson you will be able to:

- Understand advanced array methods such as `filter`, `reduce`, and `map`
- Distinguish between `forEach` and `map` and when to use each of them
- Know how `reduce` and `filter` works
- Implement `filter`, `map` and `reduce` in real examples







### `forEach()` - refresh



##### What does the `forEach()` method do ?

##### The `**forEach()**` method executes a provided function once for each array element.

```js
let arr = ['a', 'b', 'c'];

arr.forEach(function(element) {
  console.log(element);
});

// or in ES6
arr.forEach(() => console.log(element));
```



##### For each doesn't return anything.  It always returns `undefined` by default.

```js
let arr = ['a', 'b', 'c'];
let result;

result = arr.forEach( function (element) {
  console.log(element);
});
```







### `map()`

##### The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.



##### Remember: `map()` always returns a new array.

#### `map()` doesn't mutate the original array. original array is safe.



**syntax**

```js
let new_array = arrayFrom.map( function ( currentValue[, index [, array]])) {
	// Return element for new_array
}
```



**Example 1**

```js
const array = ['50', '60', '70'];

// ES5:
var newArray1 = array.map(function (number){
  return number * 2;
})
console.log(newArray);


// ES6:
const newArray2 = array.map(number => number * 2)
console.log(newArray);


const indexArray = array.map( function (ele, index) {
    return index;
});

// Redo indexArray in ES6 ***

const arraysArray = array.map( function(ele, index, originalArr ) {
 return originalArr;   
});

// Redo arraysArray in ES6 ***


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





**Excercise :**



Given an array of cities, return an array with the first letter of each city’s name capitalized. You can use ES5 or ES6 syntax, whichever you feel more comfortable with at this point.

**Starter Code**

```
// array of cities:
var cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];
```



### More practice

Imagine you are a Math teacher and you have to grade our students based on their performance on two projects (40% of final grade) and their final exam (60% of final grade). We got the info for each student in an object that looks like this:

```
{
  name: "Student Name",
  firstProject: 80,
  secondProject: 75,
  finalExam: 90
}
```

So the whole class is represented as an array of objects (each object contains the data about that student), and we need to get a *new* array of objects, but this time the objects will contain only student´s name, and their final grade. Let´s do it.

Here is the data:

```
const students = [
    {
      name: "Tony Parker",
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: "Marc Barchini",
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: "Claudia Lopez",
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: "Alvaro Briattore",
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: "Isabel Ortega",
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: "Francisco Martinez",
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: "Jorge Carrillo",
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: "Miguel López",
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: "Carolina Perez",
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: "Ruben Pardo",
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
]
```

Go ahead to [Repl.it](http://materials.ironhack.com/s/ByJgC2G6NEQ) and practice `.map()` method. Try to solve it by yourself first, and then look at our solution.

```js
const finalGrades = students.map(theStudent => {
  const projectsAvg = (theStudent.firstProject + theStudent.secondProject)/2;
  const finalGrade  = theStudent.finalExam * 0.6 + projectsAvg * 0.4;
  return {
    name: theStudent.name,
    finalGrade: Math.round(finalGrade)
  }
})


console.log(finalGrades);
// [ 
//   { name: 'Tony Parker', finalGrade: 85 },
//   { name: 'Marc Barchini', finalGrade: 69 },
//   { name: 'Claudia Lopez', finalGrade: 87 },
//   { name: 'Alvaro Briattore', finalGrade: 77 },
//   { name: 'Isabel Ortega', finalGrade: 75 },
//   { name: 'Francisco Martinez', finalGrade: 76 },
//   { name: 'Jorge Carrillo', finalGrade: 86 },
//   { name: 'Miguel López', finalGrade: 76 },
//   { name: 'Carolina Perez', finalGrade: 72 },
//   { name: 'Ruben Pardo', finalGrade: 71 } 
//  ]
```







## `reduce()`

[.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) is array method that **turns a list of values into one value**.

##### You can think of it as boiling something down. You take tomatoes, you cut them, you add them all in the same pot, you cook them and they reduce, reduce. And what you have in that pot is now the tomato soup.



**syntax**

```js
const reduced = array.reduce( function(accumulator, currentValue, currentIndex, originalArray ){
    return accumulator + currentValue;
}, initialValue);

// if the initial value is pecified then acummulator starts with that value
// if the initial value is not pecified then acummulator is same as arrays first index
```





**Example 1** **- reduce an array of numbers (sum)** 

```js
array = [10, 19, 41, 30];

const reducedNumbers = array.reduce( function (total, currentNum) {
    return acummulator + currentNum;
    // same as acummulator = accumulator + currentNum
});


// Redo in ES6
```



|                              |              |
| :--------------------------- | :----------- |
| accumulator                  | currentValue |
| ( initial = array[0] ) => 10 | 10           |
| (10 + 19) => 29              | 19           |
| (29 + 41) => 70              | 41           |
| (70 + 30) => 100             | 30           |

 

**Example 2** - let's create an HTML element string

```js
const listItems = ['Edward', 'Marc', 'Luca', 'Natalia', 'Anna', 'Amy'];

const htmlString = listItems.reduce( function (accum, currentElement, currentIndex) {
    if (currentIndex === 0) return accum += '<div> <h1>' + currentElement + '</h1>';
    else if (currentIndex === listItems.length ) return accum += '<h1>' + currentElement + '</h1> </div>';
    // Why we didn't use else ??? (because return in if statement stops the function, it is implicit)
    return accum += '<h1>' + currentElement + '</h1>';
}, '');

// Redo in ES6
```

 



**EXERCISE** - reduce object (**HARD**)

```js
const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy",   age: 30 },
  { name: "Allen",   age: 49 },
  { name: "Nettie",  age: 21 },
  { name: "Stuart",  age: 17 }
];

const ageTotal = people.reduce( (sum, person) => {
    //
});

console.log(ageTotal);


//	solution
const ageTotal = people.reduce( (sum, person) => {
   return sum + person.age;
});
```





### `.filter()`

##### The `.filter()` method iterates over an array and creates a new array with all elements that pass the condition we set.



Important to remember: if the `return` is `true`, that element will be saved in the new array.

**syntax**

```js
const newArray = array.filter( function (element) {
	// if `return` `true` save the element in newArray;
    // if `return` `false` skip current element, and to next one in array
})
```



```js
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers1 = numbers.filter(function (number) {
  return number % 2 === 0; // this evaluates to true
  if (number % 2 === 0) return true;
});

console.log(evenNumbers1);



// Cleaner way to write the sam is 

const evenNumbers2 = numbers.filter(function (number) {
  return number % 2 === 0; // same as above
});
```







**Exercise**

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_b4ae9bcdfff03776a8cf67f82d3d6351.png)

We are working for Airbnb as developers, and we need to add a filter feature when someone is looking for a home. Imagine somebody starts their search for places in Barcelona, so we bring all the rooms available there.

But it´s summer, and the customers who are searching for rooms want the place to have a pool. Our incredible platform will include a filter feature, so we have to work on it.

Giving the following arrays of objects, let’s filter just the one with a pool.



```js
const places = [
 {
  title: "Awesome Suite 20' away from la Rambla",
  price: 200,
  type: "Private Room",
  pool: true,
  garage: false
 },
 {
  title: "Private apartment",
  price: 190,
  type: "Entire Place",
  pool: true,
  garage: true
 },
 {
  title: "Apartment with awesome views",
  price: 400,
  type: "Entire Place",
  pool: false,
  garage: false
 },
 {
  title: "Apartment in la Rambla",
  price: 150,
  type: "Private Room",
  pool: false,
  garage: true
 },
 {
  title: "Comfortable place in Barcelona´s center",
  price: 390,
  type: "Entire place",
  pool: true,
  garage: true
 },
 {
  title: "Room near Sagrada Familia",
  price: 170,
  type: "Private Room",
  pool: false,
  garage: false
 },
 {
  title: "Great house next to Camp Nou",
  price: 140,
  type: "Entire place",
  pool: true,
  garage: true
 },
 {
  title: "New apartment with 2 beds",
  price: 2000,
  type: "Entire place",
  pool: false,
  garage: true
 },
 {
  title: "Awesome Suite",
  price: 230,
  type: "Private Room",
  pool: false,
  garage: false
 },
 {
  title: "Apartment 10' from la Rambla",
  price: 930,
  type: "Entire place",
  pool: true,
  garage: true
 }
]
```

So, go ahead, try to write the code to filter the places and only get the ones with pool available. You can check ours after giving a shot.

```js
// ES5:
const poolFilter = places.filter(function(thePlace) {
  return thePlace.pool;
})

// ES6:
const poolFilter = places.filter(thePlace =>  thePlace.pool)

console.log(poolFilter);
```