![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_d5c5793015fec3be28a63c4fa3dd4d55.png)

# JS | JavaScript Intro

## Learning Goals

After this lesson you will be able to:

- Explain what JavaScript
- Explain what ES6 is and how JavaScript evolves
- Understand and apply basic JavaScript syntax
- Declare variables in JavaScript
- Properly name variables







<h3 style='color: green'>VSCode demo</h3>

### Create a folder structure

```bash
mkdir 04-js-intro

cd 04-js-intro

vanilla-js

code .
```

**or**

```bash
mkdir 04-js-intro

cd 04-js-intro

mkdir images scripts styles

touch index.html scripts/index.js

code .
```











#### 1. Create `index.html` skeleton

#### 2. Load the `index.js` via the `<script></script>` tag

#### 3. Go Live ->  and open the Chrome Dev console






## What is JavaScript?

**JavaScript is a lightweight compiled programming language with first-class functions**.



- **compiled programming language** - the JavaScript engine actually *compiles* the program on the fly and then immediately runs the compiled code.

  

  <u>Compiled language</u> <u>is compiled fully to the machine language</u>,  and then run. 

  
  
  JS is dynamically typed, but not interpreted.
  
  
  
  <u>Interpreted language is being saved same as it is written no translating</u>, and is <u>translated line by line on runtime</u>. - faster in development but not as fast as compiled language.







- JavaScript was <u>created to run in the browser</u>  (mostly used for the Web) 

- but it is <u>also used in non-browser environments:</u> 
  - #### [Node.js (server side)](https://nodejs.org/en/) - created 2009 (by Ryan Dahl)
  
    - In 2018 node surpassed 1 billion downlads
  
  - #### [Electron](https://electronjs.org/) - Desktop applications 





#### Evolving **language** - Until now JavaScript went through a lot of updates and changes.





#### [ECMAScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

***ECMAScript* is the standard for JavaScript** and its implementation.(  it's most popular implementation.)



The versions of ECMAScript (shorter *ES*) that are still in use are :

- **ES5** (from 2009.), 
 - **ES6** (from 2015.),
 - **ES7** (2016.)
 - **ES8** ( 2017)
 - **ES9** ( 2018)



We will start with the  **ES5 **, but later you will use mostly **ES6** and the newer JavaScript features and syntax.



Enough of theory,  let’s move to JavaScript and  start writing  code.



## Basic JavaScript Syntax

- The **syntax** of a programming language is the **set of rules** that needs to be respected by programmers.
- JavaScript syntax has quite a few **curly braces** `{ `and **parentheses** `()`. - (the only similarity to Java)
- **Parentheses ()** and **curly braces {}** **are mandatory** and will cause an error if they’re left out. 
- **JavaScript** does not strictly require **semicolons**, however we use them always to prevent [possible errors](https://www.freecodecamp.org/news/codebyte-why-are-explicit-semicolons-important-in-javascript-49550bea0b82/).









#### Example of an Output in Javascript 



We will use a function called `console.log()` to create an output. 

`console.log()` is your friend  :smiley:



```js
console.log('Hello Ironhackers');
```



#### Comments

Writing comments in your code is important 



- easy to find stuff in the code
- gives structure for others when reading your code

```js
// a short, one-line comment
```

```js
/* 
this is a longer,
multi-line comment
*/
```





## Variables

### What is a variable?

#### Variable is a named container or a storage for data in the memory.



The purpose behind naming them is to be able to **reference** them later on.



#### *different values* can be stored in variables, known as **datatypes in JavaScript**:

-  string
- number
-  array
-  object,
-  boolean
-  etc....



```js
// Primitives
var myString = "Uros";
var myNumber = 100;
var myBoolean = true; // true or false
var myNull = null;
var myUndefined = undefined;

// Objects
var myArray = [];
var myObject = {};

// We won't use the below data types
var mySymbol = Symbol();
var myBigInt = 9007199254740991n; 
// A BigInt is created by appending `n` to the end of an integer literal 

```





### Declaring and Initializing a variable

Before you can use a variable in a JavaScript, you have to **declare** it. 



Declaring simply means “saving a spot in a memory” without assigning any value to it. 



To **declare or define** a variable we can use keyword **let** or **const**.

in older versions of JavaScript, you will find keyword **var** which is used to declare variables. 



`var` is still used and there are few differences between **var**, **let** and **const** . 

**We will go over this differences a bit later.** 





#### VARIABLE DECLARATION with `var`

```js
var user;  // variable declaration
```

```js
var age, email, address; // Multiple variables declaration - one line
```



### variable initialization

After we declare a variable, we store some value in it. 

This is called **variable initialization.**

```js
user = 'John';  // variable initialization
age = 30;  // variable initialization
```





### variable initialization and declaration

#### We can make variable initialization at the time of variable creation.

```js
var user2 = 'Sarah';  // variable declaration and initialization 
var city = 30;  // variable declaration and initialization
```







#### Naming a variable



Rules for naming variables:

1. Names **can contain letters** (uppercase and lowercase), **numbers** and the symbols `_`and `$`.
2. **The first character of the name can’t be a number.**





```js
// Naming a variable:
// - JS is case sensitive
// - First chaacter can't be number
var a;
var color;
var _private; // convention - common practice
var $button;
var camelCase;	// camelCase
var a_large_name;	// kebab_case
var thisWayIsCalledCamelCase;
var π;
```





### Naming variables



#### *camelCase* convention

When creating a variable with more than one word, we use the “**camelCase**” style.



#### Case sensitive

JavaScript is **case sensitive** so capital letters do make a difference. 



```js
var color = 'Red';
var Color;
// These are two different variables - JS is "case sensitive"
```







#### Reserved keywords - let, class, return, function

**[Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)** are tokens that have special meaning in **JavaScript** and cannot be used as variable names. Most common ones are: `var`, `function`, `return`, `let`, `const`, `typeof`, `new`, `for` , etc. ...

```js
var var = "hello"; // <== error, you can't name variable "var"

var return = 'hola'; // <== error, you can't name variable "return"
```





### Dynamically typed

JavaScript is a **dynamically typed language** and that means **new variables can be created during the runtime**, and the **type of variables is determined at runtime**. 

 Simply put variable can be assigned different value of a different type at runtime.





#### Changing values

You can reassign values and change the data type of variables in JavaScript (excluding `const` variables).



```js
var favoriteFood;

favoriteFood = "Steak";
console.log(favoriteFood); 

favoriteFood = "Pizza";
console.log(favoriteFood);
console.log(typeof favoriteFood);

favoriteFood = 123;
console.log(favoriteFood);
console.log(typeof favoriteFood);

// console:
// Steak
// Pizza <== as we can see, the variable changed value from 'Steak' to 'Pizza'
// 123  <== as we can see, variable changed the data type from stirng to number
```



<br>







#### Redeclaring a variable -



```js
// Redeclaring a variable

var favoriteCountry;

favoriteCountry = "Australia";


// Redeclaring a variable, removes the previous value.
// Be careful when using `var` not to redeclare/overwrite existing variables
var favoriteCountry = "JSland";

console.log(favoriteCountry);
```



## typeof

🔖 Sidenote: `typeof` is JavaScript operator that **returns the type of the variable** we passed to it. You can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).



#### [ECMA Specs - Data types `typeof`](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.3)

```js
var myVar = "IronHack";

console.log(typeof myVar);

myVar = 100;

console.log(typeof myVar);
```







#### Quick Overview:  VARIABLE DECLARATION with `let` and `const`.

**`const`** is used when declaring a variable which value will be constant.

These variables are called **constants** and if we try to change its values we will get the error back:



```js
const name = "Ana";
name = "Mariana";  // TypeError: Assignment to constant variable;

// console:
// unknown: "name" is read-only
```

```js
let name; // <== we can do this

const price; // <== error 🚨 
```



**`let`** and `const` are used to create block scoped variables, which we will explain in the next days.







### 🥁Important naming rules 🥁

**naming variables is one of the hardest and most serious things in programming**. It might seem a bit silly, but badly named variables can jeopardize the development and the product itself.



 You should always think about the next person who will work on your project 



The rules to keep in mind when naming a variable:

- keep variables easily understandable, **human-understandable** - **examples**



- never ever use `x`, `j`, `a` to name your variables unless it super clear to you and everyone else what is going on in the code.

  

- **name variables as descriptive and as concise as possible** (examples of good naming: *userName*, *creditCardNo*, and examples of bad names: `info`, `value`, etc. 

- if you’re working in a team you will most probably discuss the naming of the variables.







### Using the documentation - MDN



MDN is the foundation for every  front end developer. Every time you need to recall or check how a certain thing in JavaScript works you should look for it on the MDN documentation.

### [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)





​	

### [Lecture summary for the students](https://gist.github.com/ross-u/9e4c608631ddc4342edb0036bb3ed2c7) 





## Extra Resources

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) This will be your main resource for any JavaScript search. It has tutorials, guides and tools. This is the most thorough JavaScript Documentation.
- [Understanding Javascript Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)