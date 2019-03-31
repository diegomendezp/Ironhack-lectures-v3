![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_d5c5793015fec3be28a63c4fa3dd4d55.png)

# JS | Data Types in JavaScript - 



# number & string

## Learning Goals

After this lesson you will:

- Know what are two main kinds of data based on its value in JavaScript
- Be able to use number as a data type
- Be able to use string as a data type and get familiar with some string methods



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
const age = 34;	// integer
const price = 12.99;	// floating point number
```



Number  data type also supports a **special numeric values**:

## NaN

 and 

## Infinity 

`Nan` stands for **Not a Number** and it usually represents an incorrect mathematical operation.



```js
const name = "John"; // <== string data type
const whatIsThis = name/2;

console.log(whatIsThis); // ==> NaN
```



### Number expressions

In javascript we can use operators to perform mathematical operations.

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division



<iframe height="265" src="http://codepen.io/ironhack/embed/WGRbGO/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2" allowfullscreen="true" style="-webkit-text-stroke-width: 0.1px; -webkit-text-stroke-color: initial !important; box-sizing: border-box; color: rgb(249, 240, 225); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.35px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; background-color: rgb(28, 28, 29); text-decoration-style: initial; text-decoration-color: initial; width: 728px;"></iframe>



## Advanced Operators

#### **Exponentiation**

We can easily use exponentiation by using the `**` (exponentiation) operator:

```js
console.log(2**3);
// => 8
```

#### **Modulo**

Modulo (`%`) is the remainder operator.  It calculates the remainder of a division.

**USED FOR :**

 - Checking if the number is even or odd
 - can be used for other more complex problems 

```js
// Division
console.log(4/2);	// 2
console.log(4/4);	// 0

// Modulo
console.log(4 % 2);	// 0  -> even
console.log(4 % 3);	// 1	-> odd

```



#### Assingment Operators

The basic assignment operator is equal (=), which assigns the value of its right operand to its left operand.



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

​	

```js
Math.PI;            // returns 3.141592653589793
Math.pow(8, 2);      // returns 64

Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4

Math.sqrt(64);      // returns 8

Math.ceil(4.4);     // rounds the value up to nearest integer - returns 5
Math.floor(4.7);    // rounds the value down to nearest integer - returns 4

// Math.min() / Math.max() can be used to find the lowest or highest value in a list
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150

Math.random();     // returns a random number between 0 and 1 (0.99 , 1 is excluded)
Math.random()
```



## Floating point precision issue

floating point arithmetic is not always 100% accurate:

```js
0.2 + 0.1;      // x will be 0.30000000000000004
```



So why is this happening?



Our computers use 64 bits to store a number. - binary numeral system.



When we write 0.2 + 0.1 - we are using a decimal numeral system (0.1 and 0.2 are decimal fractions) .



Certain fractions in the binary numeral system are endless, therefore computers can't accurately represent a number like 0.1 or 0.3.



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















# A string as data type

### What is a string?

A `string` is **a sequence of characters**. 

A `character` can be a letter, number, punctuation, or even things such as new lines and tabs.





### Creating a String



- `""` (*double quotes*),
- `''` (single quotes) or
- \```` (backticks).



**Back ticks have “extra” functionality** because using them we can **interpolate variables and expressions in the strings**:

```js
let name = "Sarah";
console.log(`Hello, ${name}!`);

console.log(`${name}'s last name is O'Connor'`);
```

Or for **new lines** (simply use enter):

```
const fruits = `
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





#### Special characters

Some strings are special because they contain special characters.

These characters have to be escaped with  `\` (backslash) to avoid `SyntaxError`.



<u>Examples:</u>

 -  USING QUOTES

 -  NEW LINE CHARACTER

    

```js
const favShow = "My favorite TV show is "Mr.Robot"."; // SyntaxError

const favMovie = "My favorite TV show is 'Mr.Robot'.";

// or 

const favMovie = "My favorite TV show is \"Mr.Robot\".";
```

Use `\` (backslash) when there’s a need to excape a special character in a string.

![:star:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/star.png) You can see a full list of these special characters at the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings).





# 

##  String length

`.length` is a numeric property of a string.

```
const name = "Ana";
console.log(name.length); // <== 3
```



`length` is not a method of a string so don’t try to get it by putting parentheses after 👎 `name.lenghth()` ❌



# STRING METHODS

### Methods for string manipulation



JavaScript includes a **String library of methods** to simplify some of the most common tasks on strings. 



### Adding To Strings

`concatenate` strings using  `+` or `+=` operators.

<iframe height="265" src="http://codepen.io/ironhack/embed/EgaqRZ/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2" allowfullscreen="true" style="-webkit-text-stroke-width: 0.1px; -webkit-text-stroke-color: initial !important; box-sizing: border-box; color: rgb(249, 240, 225); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.35px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; background-color: rgb(28, 28, 29); text-decoration-style: initial; text-decoration-color: initial; width: 728px;"></iframe>



### Accessing characters

####  charAt() method

**charAt(n)** shows the character on the `n`th position.

 Strings use **zero based index** therefore first item starts at index **0**

```js
const myString = "Bananarama!";

console.log(`"String length is ${greeting.length}.`);
// "String and it's length is 11.

console.log(greeting.charAt(0)); // <== B
console.log(greeting.charAt(1)) // <== a
console.log(greeting.charAt(10)); // <== !
console.log(greeting.charAt(6)); // <== r
```

#### square bracket index number

We can access characters inside of strings with their **index** number. As we said, the index **starts at 0**.

```js
const myString = "Bananarama!";

console.log(greeting[0]); // <== B
console.log(greeting[3]); // <== a
console.log(greeting[9]); // <== a
console.log(greeting[-2]); // undefined
console.log(greeting[11]); // undefined
```





#### Finding a substring

*str***.indexOf(substr)** method that returns the index where a particular character/substring occurs. 



If the substring was not found, it returns `-1`.

```js
const message = "Don't be sad, be happy!";

console.log(message.indexOf("Don't")); // <== 0
console.log(message.indexOf("t")); // <== 4
console.log(message.indexOf("Be")); // <== -1 (capitalized Be ≠ lowercased be)
console.log(message.indexOf("py")); // 20
```



#### Second parameter is a index from which to start the search.

```js
const message = "Don't be sad, be happy!";
console.log(message.indexOf("be")); // <== 6
console.log(message.indexOf("be", 7)); // <== 14
```



#### Find substring index in reverse order 

 *str*.**lastIndexOf(substr)**. 

It shows occurences in the reverse order.

```js
const message = "Don't be sad, be happy!";
console.log(message.lastIndexOf("be"));
// The index of the first "be" from the end is 14
```



#### 📝Practice

Write code that finds the index of the letter “j” in `My favorite dessert is jello`.





## .repeat()

```js
console.log("$".repeat(3)); //	$$$

console.log("la".repeat(10));	//	lalalalalalalalalala
```



#### .includes(),

**.includes()** is a case sensitive search to see if a particular pattern exists inside of a string.

returns **true** or **false**

<iframe height="265" src="http://codepen.io/ironhack/embed/ORVLWg/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2" allowfullscreen="true" style="-webkit-text-stroke-width: 0.1px; -webkit-text-stroke-color: initial !important; box-sizing: border-box; color: rgb(249, 240, 225); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.35px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; background-color: rgb(28, 28, 29); text-decoration-style: initial; text-decoration-color: initial; width: 728px;"></iframe>









## Getting a substring

In JavaScript, we can use



- **.slice()**        -   2nd arg is index where to end, **supports negative values**

  

- **.substring()**     -  2nd arg is index where to end

  

- **.substr()**      -  2nd arg is maximum length to return

  



```js
const message = "Don't be sad, be happy!";
let withSubstring = message.substring(0,3);
console.log(withSubstring); // <== Don

let withSubstr = message.substr(0,3);
console.log(withSubstr); // <== Don

let withSlice = message.slice(0,3);
console.log(withSlice); // <== Don
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





#### Sorting the strings - .toLocaleCompare()

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare), the **.localeCompare()** method returns a number indicating whether a string comes before or after or is the same as some other string in sort order.

How this method works?



Browser takes the Unicode value of the string and according to the value of each string checks which string is lexicographically greater or smaller.

Use case would be sorting a list of names.

```
'str1'.localeCompare('str2');
```



```js
let a1 = 'Aoo';
let a2 = 'Boo';
let a3 = 'Coo';

'Aoo'.toLocaleCompare('Aoo');	// 0 -> equal

'Aoo'.toLocaleCompare('Boo');	// 1 -> Aoo comes before Boo

'Boo'.toLocaleCompare('Aoo');	// -1 -> Boo comes after Aoo
```



## Extra Resources

- Most of the JavaScript String methods can be found at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Using special characters in strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings)









## Summary

- Two main Data Types

  - Primitive values

  - Objects (called Non Primitive Values)

    

- Primitive Values is any value that is not an object

  - number
  - string
  - boolean
  - undefined
  - null
  - symbol

- All primitive data types are immutable, but we will dive deeper into immutability, for now just keep that in mind.



**Number Data Type**

- Integers
- Floating Point Numbers
- Special Numeric values ( NaN, Infinity)



- Number Expressions
  - What is an expression:
    - An expression is a combination of any `value` (number, string, array, object) and set of `operators` that result in another value.
  - Mathematical Operators :  **+** , **-**, *****, **/**
  - Advanced Operators:  ******   ,    **%**   
  - Assignment Operators
    - =
    - +=
    - -=
    - *=
    - /=
    - %=



**String Data Type**

- What is a string - A `string` is **a sequence of characters** enclosed in quotes. 

- Creating a string

  - ""

  - ' '

  - ``

    - Backticks  ``

      - String interpolation    ` Hello {name}`

      - New line with back-ticks (we can use Enter only)

        

- Special characters and escaping with `\` backslash

  - Using same style of quotes - Error `" "" "`
  - new line character -   `\n`



- String `.length` property



- String Methods

  - concatenating - using `+` or `+=` operator

    

  - **charAt()** - accessing characters on nth position

    

  - accessing string index via **square brackets** - **str[n]**

    

  - finding a substring - 

    - **.indexOf(substr)** - return index where string is found or -1
    - **.lastIndexOf(substr)** - same as `indexOf` but <u>starts search from end</u>

  

  - QUICK PRACTICE EXERCISE 2min ACCESSING A STRING INDEX

  

  - **.repeat(numOfReps)**

  - **.includes(substr)**

  - .startsWith(substr), .endsWith(substr)

    

    

  - Getting a substring - <u>these methods don't modify the original string</u>

    - **.slice()**   -   2nd arg is index where to end, **supports negative values**
    - **.substring()**     -  2nd arg is index where to end
    - **.substr()**      -  2nd arg is maximum length to return

  

  

  - **.toLocaleCompare()**

    

  -  Check MDN link - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>

