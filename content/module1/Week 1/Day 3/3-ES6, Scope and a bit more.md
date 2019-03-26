![img](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# ES6 | Basics and a bit more

## Learning Goals

After this lesson you will:

- Understand what **hoisting** and **scope** are
- Understand a bit more the new variable declaration approaches in ES6, and what kinds of **scopes** there are in JavaScript
- Get more familiar with **string interpolation** in **template literals**
- Understand **destructuring** and the **spread operator**

## Recap - Intro to ES6

* [Versions of JavaScript](https://medium.com/@muthuks/ecmascript-complete-from-2015-to-2017-9a5074af92e6#4bd4)

* **ES6** most important changes:

  ​	- `let` and `const` (we go through this in a moment)

  	- Arrow functions 
  	​	- Promises  - Classes 
  	​	- Modules 
  	​	- Template literals - aka template strings
  	​	- Default parameters 
  	​	- Destructuring assignment 

  ​	- Enhanced object literals

  ```js
  const something = 'y'
       const x = {
         something
       }
  // same as  `const x = {something: something}`
  ```

  ​	- `for...of` loop - as an iterator

  ```javascript
  const namesArray = ['John', 'Sarah', 'Alice'];
  for (const name of namesArray) {
    console.log(name);
  }
  ```



- ES7
  - `.includes`   -  string or array
  - `**` exponantion operator - same as in Python and Ruby
- ES8 a.k.a. 2017
  - Async functions (abstraction on Promises) - no example just on this lesson



* Scope - `let`, `var`, `const`

  * What is scope:

    Scope determines the accessibility (visibility) of variables from different parts of the code.

    JavaScript has function scope by default - meaning that every function creates a new scope.

  * Global variable (the variable created in the global scope and variable without the keyword (automatically global - avoid!)) - all scripts and functions on page can access it.

  * strict mode - automatically global variables are not created in strict mode:

    ```js
    // 'use strict'
    var name = 'John';
    function findTheImposter () {
    	imposter = 'I am an imposter!';
    }
    // console.log(noKeyword); - not defined before we run the function
    
    findTheImposter();
    console.log(imposter);	// variable exists in the global scope
    ```

  * Global variables belong to to the global scope and can be accessed in the whole window (`window` object available in the browser) :

    ```js
    console.log('WINDOW OBJECT -> ', window);
    console.log('Automatically Global variable', window.imposter);
    ```

  * scope of `var` - 

    `var` declared variables can have **global** of **function** (also called local) **scope**

    Example

    

  * Hoisting

    JS executes code line by line, however there is a functionality called Hoisting.

    * functions - <https://codepen.io/Denzelzeldi/pen/gEyejw?editors=0012>

    ```js
    atTheEnd();
    
    function atTheEnd() {
    	console.log('Hello');
    }
    ```

    - var - <https://codepen.io/Denzelzeldi/pen/gEyejw?editors=0012>

      ```js
      // console.log(name);  // uncomment
      
      var name = 'John';
      ```

      

  * scope of `let` and `const`

    - Block - block is any code between open and closed curly braces `{}`

    - `let` and `const` are block scoped

    - `let` and `const` hoist (invisibly)  but you cannot access them before the actual declaration is evaluated at runtime (line by line).

      ```js
      //  BLOCK SCOPE OF THE let 
      let name = "Ironhacker";
      
      if (true) {
        let name = "John";
        console.log(`Name inside if block statement: ${name}`);
      }
      
      console.log(`Name outside if block statement: ${name}`);
      
      // Name inside if block statement: Ted
      // Name outside if block statement: Ironhacker
      ```

      

    - let` can't be redeclared but can be updated

      ```js
      // THIS IS OK
      let message = "This is the first message.";
      message = "This is the second message.";
      
      // BUT THIS WILL THROW AN ERROR
      let message = "This is the first message.";
      let message = "This is the second message."; // <== Duplicate declaration "message" 
      ```

      

    - `const` variables have to be initialized in the moment of declaration.

      ```js
      const name1 = "John"; // <== CORRECT
      
      const name2;
      name2 = "John"; // WRONG! - This will throw an Error
      ```

      

      

    - `const` variables can't be redeclared or assigned new value

      ```js
      // THIS WILL THROW AN ERROR
      const message = "This is the first message.";
      message = "This is the second message."; // <== "message" is read-only
      
      // AND THIS WILL THROW AN ERROR
      const message = "This is the first message.";
      const message = "This is the second message."; // <== Duplicate declaration "message" 
      ```

    

    - `const` variables containing Objects and arrays can be mutated (not reassigned). WE WILL SEE WHY IN THE NEXT LESSON ON MUTABILITY.

      ```js
      // This is ok ✅
      const obj = {};
      obj.name = "Ironhacker";
      
      // This is not 🚨
      obj = { name: "Ironhacker" };
      // SyntaxError: Assignment to constant variable
      ```

    

  * variable types cheatsheet 


    🤔 *Potential interview questions*:

    |       | hoisted/initialized |            scope            | updated | redeclared |
    | :---: | :-----------------: | :-------------------------: | :-----: | :--------: |
    |  var  |         ✅/          | global or functional(local) |    ✅    |     ✅      |
    |  let  |         ✅/❌         |            block            |    ✅    |     ❌      |
    | const |         ✅/❌         |            block            |    ❌    |     ❌      |

    ⭐️ `var` and `let` can be declared and later on initialized.
    ⭐️ `const` have to be initialized when declared.

    

  * ES6 template strings (using backticks)

    Template literals are string literals that allow embedded expressions

    - embed expressions

    ```js
    // OLD WAY
    const name = 'John';
    let greeting = 'Hello ' + name;
    
    // TEMPLATE STRINGS
    const newGreeting = `Hello ${name}`;
    
    const num = 25;
    const str = `The result is: ${ num / 5 + 5 }`
    ```

    

    - multi-line interpolation

      ```js
      // OLD WAY - doesn't create new line  
      let greeting = "Yo, Joey! \
      How are you doing?";
      
      // TEMPLATE STRINGS - creates new line
      let newGreeting = `string text line 1
      string text line 2
      `
      ```

      

    

  * new string methods

    #### `startsWith()` , `endsWith()`, `includes()`

    ```js
    const str = "To be, or not to be, that is the question.";
    
    console.log(str.startsWith("To be")); // true
    console.log(str.startsWith("not to be")); // false
    console.log(str.startsWith("not to be", 10)); // true
    
    console.log(str.endsWith("question.")); // true
    console.log(str.endsWith("to be")); // false
    console.log(str.endsWith("to be", 19)); // true
    
    console.log(str.includes("to be")); // true
    console.log(str.includes("question")); // true
    console.log(str.includes("nonexistent")); // false
    console.log(str.includes("To be", 1)); // false
    ```

    

  * Object and Array Destructuring

    Is an easy way to extract data from arrays and objects

    - Objects

  ```js
  // OBJECTS
  // OLD WAY
  let person = {
    name: "Ironhacker",
    age: 25,
    favoriteMusic: "Metal"
  };
  
  let name = person.name;
  let age = person.age;
  let favoriteMusic = person.favoriteMusic;
  
  console.log(`Hello, ${name}.`);
  console.log(`You are ${age} years old.`);
  console.log(`Your favorite music is ${favoriteMusic}.`);
  
  // DESTRUCTURING 
  const { name, age, favoriteMusic } = person;
  ```




- Arrays

```js
// ARRAYS
const numbers = ["one", "two", "three", "four"];

// DESTRUCTURING

// Take the first 3 elements of the array
const [first, second, third] = numbers;
console.log(first, second, third);

// Skip the elements on indices 0(first) and 1(second) and take the third one
const [ , ,third] = numbers;
console.log(third); // <== three

// Fail safe destructuring
const [a,b,c,d,e] = numbers;
console.log('d -> ', d);
console.log('e -> ', e);  // No value is availalbe, JS assigns undefined
```





* ES6 Default Arguments in the functions

  ```js
  function getNum(num = 99) {
  	console.log(num);
  }
  
  getNum(10); // 10
  getNum(); // 99
  ```



- Spread opearator - allows us to spread the array and collect the parameters

  - Spread operator

  ```js
  // SPREAD THE ARRAY
  const numbers = [1, 2, 3];
  console.log(...numbers); // 1 2 3
  
  const newArray = [...numbers, 5, 6, 7];
  console.log(newArray); // [1, 2, 3, 5, 6, 7]
  ```

  - REST PARAMETERS - allow us to get the remaining arguments passed in a function - replaces the function's default `arguments` (array like object)

  ```js
  function myFunction(arg1) {
    console.log(arg1);
    console.log(arguments);
  }
  
  myFunction("first argument", "second argument");
  
  function myNewFunction(arg1, ...args) {
  	console.log(arg1);
      console.log(args);
  }
  
  myNewFunction("One", "Two", "Three", "Four");
  ```

  

* ## Summary





## Extra Resources

- [MDN `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [ES6 Features](http://es6-features.org/)