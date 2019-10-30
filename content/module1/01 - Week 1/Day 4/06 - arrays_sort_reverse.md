# JS | Arrays - Sort, Reverse, Splice



#### Note:  `reverse`, `splice` and `sort` methods mutate/ change the original array. 





### `reverse()`

- [reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) method reverses an array in place.
- The first array element becomes the last, and the last array element becomes the first.



- `reverse()` mutates the original array. It reverses the array in place.



**Example**

```js
const a = ['one', 'two', 'three'];
a.reverse();

console.log(a);        // ['three', 'two', 'one']
```









### `splice()`

- The [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method changes the contents of an array by removing or replacing existing elements and/or adding new elements

- `splice()` method changes/mutates the original array.
- `splice()` method returns a new array which includes the spliced elements.





**Example**

```js
const fruits = ["Apple", "Banana", "Pear", "Orange", "Coconut", "Mango", "Kiwi"];

// Removing elements from an array
const arr1 = fruits.splice(0,2);
console.log(arr1);

// Inserting new elements to an array
arr1.splice(1, 0, "Lemon", "Watermelon");
console.log(arr1);
```







## `sort()`

- [.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) methods mutates the original array. It sorts an array **in place**.

- At the end of sorting it returns only the reference to the original array, new array is not being created.

  This means that it sorts the array that calls the method, and returns reference to that same array at the end.

- Sort method sorts the array elements according to their string Unicode values - >  [Unicode Table](<https://en.wikipedia.org/wiki/List_of_Unicode_characters#Control_codes>). Therefore sorting of numbers is done slightly different.
- Sorting of the numbers must be done with the compare function provided, to avoid numeric elements being sorted by their Unicode value.

<br>



### Sorting Strings - works as expected

```js
const fruits = ["Watermelon", "Banana", "Orange", "Apple", "Dragon Fruit", "Mango", "Cheries",];
fruits.sort();
```



<br>



### Sorting Numbers - not correct by default

```js
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort();
console.log(numbers);
// Numbers are sorted according to their Unicode value
// [ 0, 1, 112, 18, 22, 223, 23, 64, 68, 9, 99 ]


// `!` which has a precedence in Unicode table over number, will be sorted first,
// and `:` colon will be last as it comes after the digits in the Unicode table

const mixed = [22, 23, 99, 68, 1, 0, ':', '!', 9, 112, 223, 64, 18];

mixed.sort();
console.log(mixed);
// ["!", 0, 1, 112, 18, 22, 223, 23, 64, 68, 9, 99, ":"]
```







#### Sorting the numbers - the right way ( using the  *compare function*)



`sort()` method takes a function which we call *compare function*.

Compare function is used to do the customized sorting.



#### How does a `sort()` compare function work ?

- *compare function* takes a pair of 2 elements on each iteration ,  argument `a` and argument `b`.

- *compare function* should return `0` , `-1` or `1` . This returned value determines how `a` and `b` will be sorted.

- 2 arguments ,`a` and `b`, can be named with a custom name e.g. `str1` and `str2`.

  

**syntax**

```js
arr.sort(function compareFunction(a,b) {
	// order formula
});
```



#### compare function rules



- If `compareFunction(a, b)` returns  **-1 **,  `a` is sorted before `b` ( leaves `a` to be first in the pair).

  

- If `compareFunction(a, b)` returns **0**, leave `a` and `b` unchanged.

  

- If `compareFunction(a, b)` is greater than 0 **( 1 )**, sort `b` to an index lower than `a` (i.e. `b`comes first).



**Example**

```js
// sort ascending  .o:O
function compareAscending(a, b) {
  if ( a < b /* a is less than b by some ordering criterion */ ) {
    return -1;
  }
  if (a > b /* a is greater than b by the ordering criterion */ ) {
    return 1;
  }
  if (a == b /* a is equal to b */) {
    return 0;   
  }
}


// sort descending  O:o.
// Switch the comparison operators in the conditions
function compareDescending(a, b) {
  if ( a > b /* a is less than b by some ordering criterion */ ) {
    return -1;
  }
  if (a < b /* a is greater than b by the ordering criterion */ ) {
    return 1;
  }
  if (a == b /* a is equal to b */) {
    return 0;   
  }
}
```





### Comparing numbers - shorthand



<h1 style='color: red'>Shorthand works different than the stated rules in the MDN documentation and what was explained above. Students can use the shorthand syntax without needing to explain it. The above one should be understood, but no need to memorize it.  (Stil pending question on stack overflow regarding `sort()` implementation and how it evaluates the shorthand ) </h1>


##### To compare numbers instead of strings, the compare function can simply subtract `b` from `a`. 

Think of it as a shorthand for the  previous code.

The following function will sort the array ascending



#### Sort numbers ascending shorthand

```js
// sort() acsending .o:0 - shorthand
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// ES5
numbers.sort(function(a, b) {
  return a - b;
});

// ES6
numbers.sort((a, b) => a - b);
```





#### Sort numbers descending shorthand

```js
// sort() descending O:o. - shorthand
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// ES5
numbers.sort(function(a, b) {
  return b - a;
});

// ES6
numbers.sort((a, b) => b - a);
```





### **We can also sort by different attributes, such as length**.

```js
const words = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];

words.sort((a, b) => {
    if (a.length > b.length){
        return -1;
    }

    if (a.length < b.length){
        return 1;
    }

    return 0;
});

console.log(words);
// [ 'Goodbye', 'Second', 'Hello', 'First', 'Third', 'A', 'a' ]
```



<br>



## [Array methods - Summary](https://gist.github.com/ross-u/97c39ea0a55ced695c0e1be8136ee5c6) (notes for students)



<br>



## Array - MDN documentation and reference



#### [MDN - Detailed explanation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)



#### [W3Schools - simplified examples](https://www.w3schools.com/js/js_array_methods.asp)

