![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_d5c5793015fec3be28a63c4fa3dd4d55.png)

# JS | Data Types in JavaScript - 



# number & string



## Two Main Kinds of Data Types

There are two kinds of data in JavaScript:

1. **PRIMITIVE VALUES** and

2. **OBJECTS** or **NON-PRIMITIVE VALUES**.






**PRIMITIVE** value is **any data that is not an object**.

There are 6 primitive data types:

- number,
- string,
- boolean,
- undefined,
- null,
- symbol (latest added in ECMAScript2015)

 **All primitive data types are immutable**. We will come back to the immutability but for now, just keep it in mind.





## A number as data type

In JS we have **INTEGERS** and **FLOATING POINT** numbers:

```js
var age = 34;	// integer
var price = 12.99;	// floating point number
```



Number  data type also supports a **special numeric values**:

## NaN

 and 

## Infinity 

`Nan` stands for **Not a Number** and it usually represents an incorrect mathematical operation.



```js
// NaN

var name = "John"; // <== string data type
var whatIsThis = name / 2;

console.log(whatIsThis); // ==> NaN
```





```js
// Infinity

var lowest = -Infinity;
var highest = Infinity;

console.log( -1000000 > lowest);

console.log( 9999999 < highest );
```



### Number expressions

In javascript we can use operators to perform mathematical operations.

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division



```js
// Arithmetic operators

console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);
```



## Advanced Operators

#### **Exponentiation**

We can easily use exponentiation by using the `**` (exponentiation) operator:

```js
// Exponentiation
console.log( 2**3 );  // => 8
```





#### **Modulo**

Modulo (`%`) is the remainder operator.  It calculates the remainder of a continuous division.

**USED FOR :**

 - Checking if the number is even or odd
 - can be used for other more complex problems 

```js
// Modulo

// Division example
console.log(4/2);	// 2
console.log(4/4);	// 0

// Modulo example
console.log(4 % 2);	// 0  -> even
console.log(4 % 3);	// 1	-> odd

```





#### Assignment Operators

The basic assignment operator is equal `=` sign, which assigns the value of its right operand to its left operand.



##### Basic Assignment Operators Table

These are the most used assignment operators:

| Name                          | Operator | Equivalent |
| ----------------------------- | -------- | ---------- |
| **Assignment**                | x = y    | N / A      |
| **Addition assignment**       | x += y   | x = x + y  |
| **Subtraction assignment**    | x -= y   | x = x - y  |
| **Multiplication assignment** | x *= y   | x = x * y  |
| **Division assignment**       | x /= y   | x = x / y  |
| **Remainder assignment**      | x %= y   | x = x % y  |
| **Exponentiation assignment** | x **= y  | x = x ** y |

To see the full list, visit [Assignment Operators - Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Overview).



```js
// Assignment Operators

var result = 10;

// result = result + 2;
result += 2;
console.log('+=', result);

// result = result - 2;
result -= 2;
console.log('-=',result);

// result = result - 2;
result *= 2;
console.log('*=',result);

// result = result / 2;
result /= 2;
console.log('/=',result);

// result = result % 2;
result %= 2;
console.log('%=',result);
```



### Expressions

An expression is a combination of any `value` (number, string, array, object) and set of `operators` that result in another value.



So we can say that the following is the example of *expression*:

```
2 + 4
```

Another example is this:

```js
const result = ((7 + 5) / 3) - 8;
console.log(result);

// => -4
```



How Does JavaScript know hot to put operators in order?

### Operator Precedence

In mathematics and computer programming, the order of operations (or operator precedence) is the same.

Same as in the math we have to follow **PEMDAS** rules.

| Precedence | Operator | Name               |
| ---------- | -------- | ------------------ |
| 1          | `()`     | **P**arantheses    |
| 2          | `**`     | **E**xponents      |
| 3          | `*`      | **M**ultiplication |
| 4          | `/`      | **D**ivision       |
| 5          | `+`      | **A**ddition       |
| 6          | `-`      | **S**ubtraction    |



```js
const i = 10 + (8 - 3) * 2 ** 3 / 4 - 6

//   10 + 5 * 8 / 4 - 6 <== start with the exponents (2 ** 3)

//   10 + 40 / 4 - 6 <== then multiplication (5 * 8)

//   10 + 10 - 6 <== then division (40 / 4)

//   20 - 6 <== then addition (10 + 10 )

//   14 <== and finally subtraction (20 - 6)
```

This Parse Tree diagram may help you understand it more visually :)

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_98330aa1e31c3739022d86bec0bcd822.png)







# **Exercise**: Guess the Expression Result!

### [CODEPEN](https://codepen.io/Denzelzeldi/pen/rNBEgLR?editors=0012)

```js
var expressionOne = ((2 * 2) + 5) * 6;
// console.log(expressionOne);

var expressionTwo = ((2* 2) + (5 * 3)) - 5;
// console.log(expressionTwo);

var expressionThree = (5 * 5) / (5 * 5);
// console.log(expressionThree);

var expressionFour = 5 * 5 - 5 * 4;
// console.log(expressionFour);

```







## numbers & Math - Advanced



### Math Object

The JavaScript Math object allows you to perform mathematical tasks on numbers.

This object has built in methods that we can use to work with numbers.

​	

```js
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4

Math.sqrt(64);      // returns 8

Math.ceil(4.4);     // rounds the value up to nearest integer - returns 5
Math.floor(4.7);    // rounds the value down to nearest integer - returns 4

// Math.min() / Math.max() can be used to find the lowest or highest value in a list
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150

Math.random();     // returns a random number between 0 and 1 (0.99 , 1 is excluded)
Math.random() * 10; // returns a number between 0 and 9
```





Returning a random integer (number without decimals):

```js
// Creating a random integer - Math.random() and Math.floor()

var to = 20;

var floatResult = ( Math.random() * to );
var integerResult = Math.floor( Math.random() * to );

console.log('floatResult', floatResult);
console.log('integerResult', integerResult);
```



## Floating point precision issue

floating point arithmetic is not always 100% accurate:

```js
0.2 + 0.1;      // x will be 0.30000000000000004
```



So why is this happening?



Our computers use 64 bits to store a number. - binary numeral system.



When we write 0.2 + 0.1 - we are using a decimal numeral system (0.1 and 0.2 are decimal fractions) .



Certain fractions in the binary numeral system are endless, **therefore computers can't accurately represent a number like 0.1 or 0.3.**



**Example**:

```js
1/3 = 0.3333333333333333
```

```js
0.3 + 0.6
0.8999999999999999
```



##### To remedy this, JavaScript has a number method `.toFixed()`

**syntax**

```js
numberVariable.toFixed(howManyDigitsAfterDecimalPoint)
```

 

**Example**

```js
var num = 0.1 + 0.2;
console.log(num);

var result = num.toFixed(2);
console.log(result);
```



##### We can also multiply the float by some power of 10 in order to leverage `Math.round()`. Except sometimes a decimal of 5 is rounded down instead of up.



```js
var num = 0.1 + 0.2;
console.log('num ', num);

var result = Math.round( 0.3 * 100 ) / 100;
console.log('result ', result);
```



The best explanation I found for me on this problem to be are these 2 articles, however it is not essential having an in depth knowledge of it.



[Article 1](<http://www.jacklmoore.com/notes/rounding-in-javascript/>)

 [Article 2](<https://www.exploringbinary.com/why-0-point-1-does-not-exist-in-floating-point/>)



Important to remember is that you can use `toFixed` and in the future when you will be building full stack systems and work with currency, you will be representing it in cents. So when you store price data in your database you will be storing it in cents, 

**Example**

```js
1 EUR = 100 cents;
10 EUR = 1000 cents;

/* Divide the cents by 100 to get the decimal value */
```







### `isNaN()`

##### The isNaN() function determines whether a value is an illegal number (Not-a-Number).

##### This function returns true if the value equates to NaN. Otherwise it returns false.



```js
isNaN(123) //false
isNaN(-1.23) //false
isNaN('123') //false

isNaN('Hello') //true
isNaN('NaN') //true
isNaN(NaN) //true
isNaN(0 / 0) //true

// Caveats

isNaN('') //false - **********  
isNaN(true) //false  - ********
```







### Comparison operators



Comparison operators are used to compare two values or expressions and return a boolean value.

| Operator                   | Description                                                  | Example |
| -------------------------- | ------------------------------------------------------------ | ------- |
| Equal  `==`                | Returns `true` if the operands are equal.                    |         |
| Not Equal `!=`             | Returns `true` if the operands are not equal.                |         |
| Strict Equal `===`         | Returns `true` if the operands are equal by value and by type. |         |
| Strict not equal `!==`     | Returns `true` if the operands are of the same type but not equal, or are of different type. |         |
| Greater than  `>`          | Returns `true` if the left operand is greater than the right operand. |         |
| Less than `<`              | Returns `true` if the left operand is less than the right operand. |         |
| Greater than or equal `>=` | Returns `true` if the left operand is greater than or equal to the right operand. |         |
| Less than or equal `<=`    | Returns `true` if the left operand is less than or equal to the right operand. |         |



#### [CODEPEN - Comparison Operators - guess the output](https://codepen.io/Denzelzeldi/pen/MWgMMoK?editors=0012)

### [CODEPEN - Equality vs Strict Equality](https://codepen.io/Denzelzeldi/pen/GRKbbNX?editors=0012)







### [Exercise - Math Warm Up](https://gist.github.com/ross-u/90751f64475a77095eace5cdc49ed93a) (10 min)





# A string as data type

### What is a string?

A `string` is **a sequence of characters**. 

A `character` can be a letter, number, punctuation, or even things such as new lines and tabs.





### Creating a String



- `""` (*double quotes*),
- `''` (single quotes) or
- \`\` (back ticks).



```js
var string1 = "string one";
var string2 = 'string two';
var string3 = `string three`; // with back ticks - also called template literals
```



**Back ticks have “extra” functionality**, using them we can:

- **embed (interpolate) variables and expressions in the strings**:



```js
// Templates literals/strings - using back ticks ``
// We can embed variables and expressions with: ${}

var name = 'Sarah';
console.log(`Hello, ${name} !`);

console.log(`${name}'s last name is O'Connor'`);
```



- Or for the **new lines** (simply use enter):

```js
var fruits = `
1. banana 🍌
2. apple 🍎
3. orange 🍊
4. cherry 🍒
`;

console.log(fruits); 
// 1. banana 🍌,
// 2. apple 🍎,
// 3. orange 🍊,
// 4. cherry 🍒
```



This will come handy later when we will want to create dynamic html elements from our JS file and insert them into the DOM (html file). For example:



```js
// Template literals use case:
// Creating elements in the JS and inserting them to the DOM

var newElement = `
<section>
  <img 
    width="200px"
    height="200px"
    src="./images/js-logo.png"
  >
	<h1> JavaScript </h1>
	<p>In Javascript, functions are first class objects. </p>
</section>
`;

var body = document.querySelector('body');
body.innerHTML = newElement;
```





#### Special characters

Some strings are special because they contain special characters.

- NEW LINE CHARACTER

```js
// newline character \n

var favActor = "My favorite actor is \n \n T.Hanks";	
// Newline character is written with preceeding \
```



Some characters have to be **escaped** with `\`  (backslash) to avoid `SyntaxError`.

 -  USING QUOTES

    


```js
// Escaping special characters
// Using  """"		''''   \\   \uD87E

var favShow = "My favorite TV show is "Mr.Robot"."; // SyntaxError

var favMovie = "My favorite TV show is 'Mr.Robot'.";

// or 

var favMovie = "My favorite TV show is \"Mr.Robot\" \uF916 .";

console.log(favMovie);
```



Use `\` (backslash) when there is a need to escape a special character in a string.





You can see a full list of these special characters at the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings).









##  String length

`.length` is a numeric property of a string.

```js
// string.length property

var name = "Ana";
console.log(name.length); // <== 3
```



`length` is not a method of a string so don’t try to get it by putting parentheses after 👎 `name.lenghth()` 





# STRING METHODS

### Methods for string manipulation



JavaScript includes a **String library of methods** to simplify some of the most common tasks on strings. 



### Adding To Strings

`concatenate` strings using  `+` or `+=` operators.

```js
// String concatenation  +   +=

var emptyContainer = '';
emptyContainer = emptyContainer += 'Hello';
emptyContainer += ', welcome to Ironhack';
console.log(emptyContainer);

// When concatenating:  number + string --> string

var container = 123;
container = container +  "abcde"
console.log(container1);

```



### Accessing characters

####  charAt() method



#### Accessing string characters with square bracket notation

We can access characters inside of strings with their **index** number. 

Strings use **zero based indexing**, so the first character starts at index **0**.

```js
// Accessing string characters
//  Strings use **zero based indexing**, so the first character starts at index 0

// string[i]

var myString = "Bananarama!";

console.log('myString.length', myString.length);

console.log(myString[0]); // <== B
console.log(myString[3]); // <== a
console.log(myString[8]); // <== m
console.log(myString[-2]); // undefined

console.log(myString[11]); // undefined
console.log(myString[myString.length]); // undefined
console.log(myString[myString.length - 1 ]); // !

```





#### Finding a substring

`str.indexOf(substr)` method that returns the index where a particular character/substring occurs. 



If the substring was not found, it returns `-1`.

```js
// string.indexOf(substr, [startAt])

var message = "Don't be sad, be happy!";

console.log(message.indexOf("Don't")); // <== 0
console.log(message.indexOf("t")); // <== 4
console.log(message.indexOf("Be")); // <== -1 (capitalized Be ≠ lowercased be)
console.log(message.indexOf("py")); // 20
```



#### Second parameter is a index from which to start the search.

```js
var message = "Don't be sad, be happy!";
console.log(message.indexOf("be")); // <== 6
console.log(message.indexOf("be", 7)); // <== 14
```



#### Find substring index in reverse order 

 *str*.**lastIndexOf(substr)**. 

It shows occurences in the reverse order.

```js
var message = "Don't be sad, be happy!";
console.log(message.lastIndexOf("be"));
// The index of the first "be" from the end is 14
```





## .repeat()

```js
// str.repeat(n)

console.log("$".repeat(3)); //	$$$

console.log("la".repeat(10) + '!');	//	lalalalalalalalalala!
```







#### .includes(),

**.includes()** is a case sensitive search to see if a particular pattern exists inside of a string.

returns **true** or **false**

```js
//  str.includes(substr)

var dog = 'dog';

console.log(dog.includes('og')); // => true
console.log('Dog'.includes('do')); // => false since it's a case sensitive
console.log('Hippopotamus'.includes('pop')); // true

console.log('Hippopotamus'.includes('Hip', 1)); // => false
// We can pass an optional second argument to tell the method where to start
```





## Getting a substring

In JavaScript, we can use



- **.substring()**     -  2nd arg is index where to end

  

- **.slice()**        -   2nd arg is index where to end, **supports negative values**

  




```js
// str.substring(start, end)
// str.slice(start, end) - supports negative values

var message = "Don't be sad, be happy!";;

var withSubstring = message.substring(0,3);
console.log(withSubstring); // <== Don

var withSlice = message.slice(0,3);
console.log(withSlice); // <== Don

var sliceMinus = message.slice(-6)
console.log(sliceMinus); // <== happy!

sliceMinus = message.slice(-6,-1);
console.log(sliceMinus);	//	happy

```





Only **.slice() supports negative values**.

Then the **position is counted from the string end**.

```js
const message = "Don't be sad, be happy!";

let sliceMinus = message.slice(-6);
console.log(sliceMinus);	//	happy!

sliceMinus = message.slice(-6,-1);
console.log(sliceMinus);	//	happy
```





### [Exercise - String Cardio (15 min)](https://gist.github.com/ross-u/44614b6458995bbf35305d32a29fedb8)



## Extra Resources

- Most of the JavaScript String methods can be found at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Using special characters in strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings)









