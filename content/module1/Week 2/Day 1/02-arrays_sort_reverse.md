# JS | Arrays - Sort, Reverse, Splice



#### Note: `sort`,  `reverse`, `splice` methods mutate/ change the original array. 



## `sort()`

[.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) methods sorts the elements of an array **in place** and returns the array. 

This means that it sorts the array that calls it. without returning anything.

##### Sort method orders the values according to their string Unicode value - >  [Unicode Table](<https://en.wikipedia.org/wiki/List_of_Unicode_characters#Control_codes>)



### Sorting Numbers - not correct by default

```js
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort();
console.log(numbers);
// Numbers are sorted according to their Unicode value
// [ 0, 1, 112, 18, 22, 223, 23, 64, 68, 9, 99 ]


// If we put `!` which has a precedence in Unicode table over number, it will be sorted first, and `:` colon will be last as it comes after numbers in the Unicode table

const mixed = [22, 23, 99, 68, 1, 0, ':', '!', 9, 112, 223, 64, 18];

mixed.sort();
console.log(mixed);
// ["!", 0, 1, 112, 18, 22, 223, 23, 64, 68, 9, 99, ":"]
```





### Sorting Strings - works as expected

```js
const fruits = ["Watermelon", "Banana", "Orange", "Apple", "Dragon Fruit", "Mango", "Cheries",];
fruits.sort();
```





#### Sorting the numbers - right way with the compareFunction



##### `sort()` method takes a *compareFunction* which is used to create random sorting.



##### compare function takes 2 elements at a time `a` and `b`

**syntax**

```js
arr.sort(function (a,b) {
	// order criterion
});
```





`a` and `b` are two elements being compared, then:

- If `compareFunction(a, b)` is less than 0  **( -1 )**, sort `a` to an index lower than `b` (i.e. `a`comes first).

  

- If `compareFunction(a, b)` returns 0, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.

  

- If `compareFunction(a, b)` is greater than 0 **( 1 )**, sort `b` to an index lower than `a` (i.e. `b`comes first).



**Example**

```js
function compare(a, b) {
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
```



##### Compare function - sketch it on the board

![sort_function](/home/ross-u/Desktop/IronHack_Lectures_done/content/module1/Week 1/Day 4/sort_function.jpg)



### Comparing numbers

##### To compare numbers instead of strings, the compare function can simply subtract `b` from `a`. 

Think of it as a shorthand for the  previous code.

The following function will sort the array ascending

#### ascending

```js
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// ES5
numbers.sort(function(a, b) {
  return a - b;
});

// ES6
numbers.sort((a, b) => a - b);
```





#### descending

```js
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







### `reverse()`

##### [Reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.



##### `reverse()` mutates the original array. As it sorts it in place.



Example

```js
const a = ['one', 'two', 'three'];
const reversed = a.reverse();

console.log(a);        // ['three', 'two', 'one']
console.log(reversed); // ['three', 'two', 'one']
```





### `splice()`console.log(reversed); // ['three', 'two', 'one']

##### The splice() method adds/removes items to/from an array, and returns the removed item(s).

**Note:** This method changes the original array.



****

**syntax**

```js
array.splice(index, howmany, item1, ....., itemX);
```

```js
const fruits = ["Coconut","Banana", "Pear", "Orange", "Apple", "Mango", "Kiwi"];

const arr1 = fruits.splice(0,2);
console.log(arr1);

fruits.splice(2, 0, "Lemon", "Watermelon");
```





### How to read MDN and Array reference

- start with this link:

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>



- if you don't understand : try [W3Schools](<https://www.w3schools.com/js/js_array_methods.asp>) (examples are written very well and simply explained)

  

- if you still need examples or clarification, search StackOverflow on the topic.



- Documentation gets easier to read with time and eventualy natural.