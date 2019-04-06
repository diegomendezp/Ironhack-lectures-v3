![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_d5c5793015fec3be28a63c4fa3dd4d55.png)

# JS | JavaScript Intro

## Learning Goals

After this lesson you will be able to:

- Explain what JavaScript is and a bit of its history

- Explain what ES6 is and how JavaScript evolves

- Understand and apply basic JavaScript syntax

- Declare variables in JavaScript

- Properly name variables

  

## What is JavaScript?

**JavaScript is a lightweight interpreted programming language with first-class functions**.
What does it mean:





- **lightweight programming language** is any language that requires very small memory usage while running.

- **interpreted programming language** is any language that executes the program directly translating each line of code into [machine code](https://en.wikipedia.org/wiki/Programming_paradigm#Machine_code). 

  <u>Compiled language</u> <u>is compiled fully to the machine language</u>,  and then run. - performs faster, slower in development.

  <u>Interpreted language is being saved same as it is written no translating</u>, and is <u>translated line by line on runtime</u>. - faster in development but not as fast as compiled language.

- a **programming language with first-class functions**.  - functions are treated like any other variable:
  - functions can be passed as an argument to other functions,
  - functions  can be returned by another function 
  - functions can be assigned as a value to a variable.





Example of compiling your code, **C**:

```bash
touch hello.c
vi hello.c
```

```c
#include <stdio.h>

/* Simple C Program */
int main (int argc, char **argv)
{
        printf("Hello IronHackers\n");
        return 0;
}

```

```bash
# WE HAVE TO COMPILE IT FIRST and OUTPUT the comiled file
gcc  hello.c -o test

# run the compiled file
./test
```





To summarize this above, we can say:



<u>*JavaScript is a lightweight programming language that gets converted into machine language line by line and uses functions.*</u>





- JavaScript was <u>created to run in the browser</u>  (mostly used for the Web) 

- but it is <u>also used in non-browser environments:</u> 
  - <u>Node.js (server side)</u>
  - <u>Electron</u> - Desktop applications







- JavaScript **<u>created in 1995</u>** by **<u>Brendan Eich.</u>**

- JavaScript <u>doesn't have anything with Java</u> 

- the **<u>original name</u>** of JavaScript was *<u>LiveScript</u>*.





#### Evolving **language** - Until now JavaScript went through a lot of updates and changes.



#### ECMAScript

***ECMAScript* is the standard for JavaScript** and its implementation.( is its most popular implementation.)



The versions of ECMAScript (shorter *ES*) that are still in use are :

- **ES5** (from 2009.), 

 - **ES6** (from 2015.),
 - **ES7** (2016.)



We will start with the  **ES6 **, but later you will use mostly **ES6** and the newer JavaScript features and syntax.



Enough of theory, let’s move to JavaScript  start writing  code.



## Basic JavaScript Syntax

- The **syntax** of a programming language is the **set of rules** that needs to be respected by programmers.

- JavaScript syntax has quite a few **curly braces** `{ `and **parentheses** `()`. - (Similar to Java)

- **Parentheses ()** and **curly braces {}** **are mandatory** and will cause an error if they’re left out. 







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



The purpose behind naming them is actually to be able to **reference** them later on.



#### *different values* can be stored in variables, known as **datatypes in JavaScript**:

-  string
- number
-  array
-  object,
-  etc....







### Declaring a variable in JavaScript

Before you can use a variable in a JavaScript, you have to **declare** it. 



Declaring simply means “saving a spot in a memory” without assigning any value to it. 



To **declare or define** a variable we can use keyword **let** or **const**.

in older versions of JavaScript, you will find keyword **var** which is used to declare variables. 



var` is still used and thre are few differences between **var**, **let** and **const** . 

**We will go over this differences a bit later.** 





#### VARIABLE DECLARATION with `var`

```js
var name;  // variable declaration
```

```js
var name, age, email; // Multiple variables declaration - one line
```



### variable initialization

After we declare a variable, we store some value in it. 

This is called **variable initialization.**

```js
name = 'John';  // variable initialization
age = 30;  // variable initialization
```





### variable initialization and declaration

#### We can make variable initialization at the time of variable creation.

```js
var name = 'John';  // variable declaration and initialization 
var age = 30;  // variable declaration and initialization
```







#### Naming a variable



Rules for naming variables:

1. Names **can contain letters** (uppercase and lowercase), **numbers** and the symbols `_`and `$`.
2. **The first character of the name can’t be a number.**





```js
var a; // the name is a, with var you are only introducing a variable.
var color;
var _private;
var $button;
var getTop10;
var a_large_name;
var thisWayIsCalledCamelCase;
var π;
```





#### When creating a variable with more than one word, we use the “camelCase” style.



![:warning:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/warning.png) JavaScript is **case sensitive** so capital letters do make a difference. 



```js
let color = 'Red';
let Color;
// These are two different variables - JS is "case sensitive"
```





![:warning:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/warning.png)   **RESERVED KEYWORDS** 



# let, class, return, function

```js
var var = "hello"; // <== error, you can't name variable "var"
```





#### Changing values - var



```js
var favoriteFood;

favoriteFood = "Steak";
console.log(favoriteFood); 

favoriteFood = "Pizza";
console.log(favoriteFood);

// console:
// Steak
// Pizza <== as we can see, the variable changed value from 'Steak' to 'Pizza'
```





#### You can reassign values and change the data type of variables in JavaScript.







JavaScript is a **dynamically typed language** and that means **new variables are created at runtime**, and the **type of variables is determined at runtime**. 



```js
var favoriteFood;

favoriteFood = "Steak";
console.log("Value: ",favoriteFood," Type: ", typeof favoriteFood);

/ Redeclaring a variable
var favoriteFood = "Cake";

favoriteFood = 20;
console.log("Value: ",favoriteFood," Type: ", typeof favoriteFood);

// console:
// Value:  Steak  Type:  string
// Value:  20     Type:  number
```



## typeof

🔖 Sidenote: `typeof` is JavaScript operator that **returns the type of the variable** we passed to it. You can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).







#### VARIABLE DECLARATION with `let` and `const`

**const** is used when declaring a variable which value will be constant.

These variables are called **constants** and if we try to change its values we will get the error back:



```js
const name = "Ana";
name = "Marina";

// console:
// unknown: "name" is read-only
```

```js
let name; // <== we can do this

const price; // <== error 🚨 
```





**RECAP** ==> WHEN DO WE USE **LET** AND WHEN **CONST** ?







### 🥁Important naming rules 🥁

**naming variables is one of the hardest and most serious things in programming**. It might seem a bit silly, but badly named variables can jeopardize the success and dev



 You should always think about the next person who will work on your project 



The rules to keep in mind when naming a variable:

- keep variables easily understandable, **human-understandable** - **examples**



- never ever use `x`, `j`, `a` to name your variables unless it super clear to you and everyone else what is going on in the code.

  

- **name variables as descriptive and as concise as possible** (examples of good naming: *userName*, *creditCardNo*, and examples of bad names: `info`, `value`, etc. 

- if you’re working in a team you will most probably discuss the naming of the variables.





# SUMMARY

- What is Javascript
- History of Javascript
- Where is Javascript used
- ECMA Script and JS versions



- Basic Syntax
- Reserved keywords - **return**, **class**, **function**, **var** 
- Variables
  - naming variables and camelCase notation
  - mostly used **let** and **const**
  - Declaration and Initialization
- Assigning and reassigning variable value, 
  - Explain "dynamically typed" language
  - Change variable value with another data type
  - use of **typeof** operator
- Variable Naming !
  - human-understandable
  - concise and simple
  - descriptive
  - don't use short hard to understand names - give examples

## Extra Resources

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) This will be your main resource for any JavaScript search. It has tutorials, guides and tools. This is the most thorough JavaScript Documentation.
- [Understanding Javascript Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)