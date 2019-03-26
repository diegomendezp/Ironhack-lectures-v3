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

  ​	- Arrow functions 
  ​	- Promises  	- Classes 
  ​	- Modules 
  ​	- Template literals 
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
* Hoisting
* undeclared variables (without any keyword)



## `var`, `let`, `const`, and **scope**

### The case of **var**

Before the ES6, all variables were declared using `var` keyword. Declaring the variables this way has some specifics:

1. **var** and **hoisting**

**Hoisting** is a JavaScript mechanism where **variables and function declarations are moved to the top of their scope before code execution**.

This means you can use the variable in the parts of your code before you declared it officially:

```
console.log(message); // <== undefined
var message = "Hello from the global scope!";

```

**Variables declared using var are moved to the top if it’s scope (we say - hoisted) and initialized with a value of undefined**.

1. **var** and the **scope**

Using keyword **var** to declare variables, they become available in:
- **global** or
- **function/local** scope.

To simplify, any time a variable is declared outside of a function, it belongs to the **global scope** and can be accessed (used) in the whole window.

If we declare a variable inside the function, then the variable belongs to the **functional or local scope**.

Let’s see it on the example:

```
var message = "Hello from the global scope!";

function sayHelloFromLocalScope(){
    var greeting = "Hello from functional/local scope!";
    return greeting;
}

console.log(message); // <== Hello from the global scope!
console.log(greeting); // <== ReferenceError: greeting is not defined

```

As we can see, `message` belongs to the **global scope and can be accessed from anywhere** in the code. In the second example, the `greeting` variable is **functionally/locally scoped and can’t be accessed outside of the function where it was declared**.

This *doesn’t apply* to *if statements* and *for loops*. They don’t have their scope.

```
for (var i = 1; i <= 30; i++) {
  console.log(`Iteration number: ${i}`);
}

console.log(`After the loop: ${i}`);

// [...]
// Iteration number: 28
// Iteration number: 29
// Iteration number: 30
// After the loop 31

```

1. using **var** variables **can be re-declared and updated**

The following won’t cause the error:

```
var message = "Hello from the global scope!";
var message = "This is the second message.";

// OR

var message = "Hello from the global scope!";
message = "This is the second message.";

```

But is this necessarily a good thing? Let’s see:

```
var name = "Ironhacker";
if (true) {
  var name = "Ted";
  console.log(`Name inside if statement: ${name}`);
}

console.log(`Name outside if statement: ${name}`);

// Name inside if statement: Ted
// Name outside if statement: Ted

```

As we can see from the example above, variable *name* is re-declared, and if we didn’t know that there’s already a variable *name* declared earlier, we could’ve broken bunch of things.
If we use the same variable throughout our code, and we reassign it like we just did, we won’t see the results we expected for sure. That’s why `let` and `const` are here to prevent this and we will see now how.

### The case of **let** and **const**

In general, `let` and `const` came to fix the issues `var` have had.

1. **let** and **hoisting**

There’s a slight difference between `var` and `let` when it comes to hoisting: variables declared with *let* are hoisted to the top as well but they are not initialized. So using *var* we would get the value of *undefined* but using *let* we get a *Reference Error*.
According to the official docs, the reason for that is:

`let` and `const` (read the lesson further to understand the *const* part) hoist but you cannot access them before the actual declaration is evaluated at runtime.

1. **let** and **const** and **block scope**

We can say that **block is any code between open and closed curly braces {}**.

**let** gives us **block scoping**, is *not* bounded to the `global` or `window` object by default, and should be used in favor of `var`.

If we replace `var` with `let` in one of the previous examples, we will get a different result.

```
for (let i = 1; i <= 30; i++) {
  console.log(`Iteration number: ${i}`);
}

console.log(`After the loop: ${i}`);

// [...]
// Iteration number: 29
// Iteration number: 30
// Iteration number: 30
//
// console.log("After the loop", i);
//                               ^
// ReferenceError: i is not defined

```

![:thumbsup:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/thumbsup.png) Sometimes *errors are ok*. `let` can help us prevent some JavaScript pitfalls, by throwing an error back at us.

As we can see, `let` gives us the **block** scope which means that variable declared in a block using *let* can be only used in that block. Blocks also include *if* statements and *for* loops as well as functions.

1. using **let** variables **can’t be re-declared but can be updated**

```
// THIS IS OKAY ✅✅✅
let message = "This is the first message.";
message = "This is the second message."; // <== This is the second message.

// BUT THIS WILL THROW AN ERROR 🚨🚨🚨

let message = "This is the first message.";
let message = "This is the second message."; // <== Duplicate declaration "message" 

// HOWEVER, IF THE SAME VARIABLES BELONG TO DIFFERENT SCOPES, 
// NO ERROR WILL BE SHOWN BECAUSE THEY ARE TREATED AS DIFFERENT VARIABLES 
// WHICH BELONG TO DIFFERENT SCOPES
 
let name = "Ironhacker";

if (true) {
  let name = "Ted";
  console.log(`Name inside if statement: ${name}`);
}

console.log(`Name outside if statement: ${name}`);

// Name inside if statement: Ted
// Name outside if statement: Ironhacker

```

To recap and compare: `let` gives us much more security because when variables are declared with `let`, if declared in different scopes, are two different variables while using `var` the second one will redeclare the first one. At the same time, `let` doesn’t allow having tow the same named variables in the same scope while, as we saw, with `var` that is possible to happen and no error will be thrown.

1. using **const** variables **can’t be re-declared nor updated**

The most secure and preferred way of declaring variables is using **const - variables declared this way can’t be re-declared nor updated**.

```
// THIS WILL THROW AN ERROR 🚨🚨🚨
const message = "This is the first message.";
message = "This is the second message."; // <== "message" is read-only

// AND THIS WILL THROW AN ERROR 🚨🚨🚨

const message = "This is the first message.";
const message = "This is the second message."; // <== Duplicate declaration "message" 

```

Variables declared with `const` have to be initialized in the moment of declaration. This will throw an error:

```
const name = "John"; // <== CORRECT

const name; // <== WRONG!
name = "John"; // <== this doesn't work

```

We saw in the case of objects and arrays declared using *const*, we can update the existing properties.

A quick reminder:

In the case of declaring an object using the `const` keyword, this means that new properties and values can be added BUT the value of the object itself is fixed to the same reference (address) in the memory and the object (or any variable declared with const) can’t be reassigned.

```
// This is ok ✅
const obj = {};
obj.name = "Ironhacker";

// This is not 🚨
obj = { name: "Ironhacker" };
// SyntaxError: Assignment to constant variable

```

🤔 *Potential interview questions*:

|       | hoisted/initialized | scope                       | updated | redeclared |
| ----- | ------------------- | --------------------------- | ------- | ---------- |
| var   | ✅/✅                 | global or functional(local) | ✅       | ✅          |
| let   | ✅/❌                 | block                       | ✅       | ❌          |
| const | ✅/❌                 | block                       | ❌       | ❌          |

⭐️ `var` and `let` can be declared and later on initialized.
⭐️ `const` have to be initialized when declared.

## Template Strings

In [Data Types in JavaScript - number & string](http://learn.ironhack.com/#/learning_unit/7872) we mentioned that one of the ways of creating strings is using backticks ````, and also in the majority of console logs we used *string interpolation using backticks* but now let’s dig a bit deeper.

**Template literals** are string literals allowing embedded expressions.

Strings in JavaScript have been historically limited. [ES6 Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) introduces an entirely different way of solving these problems.

### Interpolation

Template Strings use back-ticks (``) rather than the single or double quotes. The following example shows how we can write a template string:

```
let greeting = `Yo, Ironhack!`;

```

One of their first real benefits is **string substitution**. Substitution **allows us to take any valid JavaScript expression and place it inside a template literal, and the result will be output as part of the same string**.

Template Strings can contain placeholders for string substitution using the **${ } syntax**, as demonstrated below:

```
let awesomePlace = "Ironhack";
let greeting = `Yo, ${awesomePlace}!`;
console.log(greeting);

// => "Yo, Ironhack!"

```

The `${}` syntax works fine with any kind of expression. Check the following example:

**ES5 Old-school style!!**

```
var customer = { firstName: "Foo", lastName: "Kim" };
var message = "Hello " + customer.firstName + " " + customer.lastName + "!!";
console.log(message);

```

**ES6 Interpolation style!!**

```
let customer = { firstName: "Foo", lastName: "Kim" };
let message = `Hello ${customer.firstName} ${customer.lastName}!!`;
console.log(message);

```

As you can see, this kind of interpolation using template literals makes our code much more readable and cleaner!

#### Multiline Interpolation

Multiline strings in JavaScript require workarounds using regular ways of interpolation. The current solution is just using a `\`(backslash) before each newline. Super easy! For example:

```
let greeting = "Yo, Joey! \
How are you doing?";

```

Also, any whitespace inside of the backtick syntax will be considered part of the string and it will help you organize your multiline strings.

```
console.log(`string text line 1
string text line 2`);

```

### ES6 new string methods

#### `startsWith()` method

The `startsWith()` method determines whether a `string` begins with the characters of a specified string, returning `true` or `false` as appropriate.

It’s important to remember that this method is case-sensitive.

**Syntax**

str.startsWith(searchString[, position])

- **searchString** - the characters to search at the start of this string,
- **position** (optional) - the position in this string at which to begin searching for *searchString* (the default is 0).

**Example**

```
const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true

```

#### `endsWith()` method

The `endsWith()` method determines whether a string ends with the characters of a specified string, returning `true` or `false` as appropriate. It’s also case-sensitive.

**Syntax**

str.endsWith(searchString[, length])

- **searchString** - the characters to search at the start of this string,
- **length** (optional) - if provided, overwrites the considered length of the string to search in. If omitted, the default value is the length of the string.

**Example**

```
const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true

```

#### `includes()` method

The `includes()` method determines whether one string may be found within another string, returning `true` or `false` as appropriate. The method is case sensitive.

**Syntax**

str.includes(searchString[, position])

- **searchString** - the characters to search for at the start of this string,
- **length** (optional) - the position within the string at which to begin the search (defaults to 0).

**Example**

```
const str = "To be, or not to be, that is the question.";

console.log(str.includes("to be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false

```

## Object and Array Destructuring

**Destructuring** is an easy and convenient way of extracting data from arrays and objects.

The problem is that in ES5 this was very verbose.

### Objects

Let’s say we have a person object.

```
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

```

This is ok, but didn’t we repeat the word `person` multiple times here? Yes, we did. And as developers, we don’t like to repeat things because we want our code to be DRY, clean and neat. So let’s do the same but using `object destructuring`.

```
let person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Metal"
};

let { name, age, favoriteMusic } = person;

console.log(`Hello, ${name}.`);
console.log(`You are ${age} years old.`);
console.log(`Your favorite music is ${favoriteMusic}.`);

```

Awesome.

What we’re doing is creating variables using the same names as the properties of our object.

JavaScript breaks it apart and assigns these values to the new variables.

We can even get to nested objects:

```
const person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Metal",
  address: {
    street: "Super Cool St",
    number: 123,
    city: "Miami"
  }
};

let {
  name,
  age,
  favoriteMusic,
  address
} = person;

console.log(address.street); // <== Super Cool St

```

### Arrays

Array destructuring is very similar.

First, we declare our variable(s) inside of array brackets and then assign them to the one we’re trying to destructure.

```
const numbers = ["one", "two", "three", "four", "five"];

```

**Examples:**

- Put the first item in the array in a variable

```
const [first] = numbers;
console.log(first); // <== one

```

- Take the first 3 items in the array

```
const [first, second, third] = numbers;
console.log(first, second, third); // <== one two three

```

- Skip the first element, and take the second one only

```
const [, second] = numbers;
console.log(second); // <== two

```

ES6 uses *fail soft destructuring* by default meaning that if there are more variables than items in the array, it won’t throw an error, it will just be undefined.

```
// Whoops, we only have one element in the array!
const [a, b] = [1];
console.log(a * b); // <== a * undefined => NaN

```

We can combine this with default arguments to make sure we always have values in our variables.

```
const [a, b = 1] = [2];
console.log(a * b); // <== 2

```

#### Quick Exercise

**What’s the result? And more importantly, why?**

```
let [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d);

```

## Spread Operator

One of the new ES6 features is the **spread operator**. It is a small change, but it can be useful on different occasions.

Let’s take a look at an example of how to use the spread operator.

Let’s say we have these two arrays, one with reptiles, and one with mammals.

```
const reptiles = ["snake", "lizard", "alligator"];
const mammals = ["puppy", "kitten", "bunny"];

```

Now let’s say we want to create a new array called `animals` that has all of the reptiles and all of the mammals. How would we do that?

Well, without using the spread operator, we would have to do something like this:

```
const animals = [];

reptiles.forEach(function(oneReptile) {
  animals.push(oneReptile);
});

mammals.forEach(function(oneMammal) {
  animals.push(oneMammal);
});
console.log(animals);

// [ 'snake', 'lizard', 'alligator', 'puppy', 'kitten', 'bunny' ]

```

We run two different loops to push each item from each of the two arrays into `animals` array.

Let’s take a look at how we can use the ES6 **spread operator** to accomplish the same thing.

```
const reptiles = ["snake", "lizard", "alligator"];
const mammals = ["puppy", "kitten", "bunny"];
const animals = [...mammals, ...reptiles];
console.log(animals);
// [ 'puppy', 'kitten', 'bunny', 'snake', 'lizard', 'alligator' ]

```

That’s it.

So, how does it work?

Well, the spread operator looks like this `...`. It’s just three dots.

In this example, we use the spread operator `...` in front of the name of an array - this returns its contents, without the array itself.

## Advanced

### Rest Parameters - Other uses of the Spread Operator

The other way we make use of the spread operator is to use it in the definition of a function. It is known as [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

❗The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

We commonly write functions like this

```
function myFunction(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
}

```

If we call this function like this

```
myFunction("first argument", "second argument");

```

We get this:

```
first argument
second argument

```

Great, we have two arguments and we see them in the console. But what if we don’t know how many arguments we are going to have? What if we call the same function with an extra argument, what happens?

```
myFunction("first argument", "second argument", "third argument");

```

This code will give us

```
first argument
second argument

```

Our program will completely ignore the 3rd argument because it is not part of the definition of our function.
There’s a workaround this:

```
function add() {
  let sum = 0;
  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
 
add(); // 0
add(1); // 1
add(1, 2, 5, 8); // 16

```

![:bulb:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/bulb.png) **arguments** is kind of magic word here: it represents a special `array-like` object that contains all arguments by their index.

If we were to console.log() arguments in the previous example in the case `add(1, 2, 5, 8);`, we would have seen this:

```
...
  console.log(arguments);
...

// { 0: 1, 1: 2, 2: 5, 3: 8 }

```

So it looks okay, why do we need a rest parameter then?
Well, let’s try to apply `.reduce()` instead ‘manually’ calculating the sum. (If you need to sneak peek how `.reduce()` works, check [Arrays - Map, Reduce & Filter](http://learn.ironhack.com/#/learning_unit/6393) lesson.)

```
function add() {
  return arguments.reduce((sum, next) => sum + next);
}
 
add(1, 2, 3); // TypeError: arguments.reduce is not a function

```

We got the error and since we explained earlier what is `arguments`, it is kind of obvious why - because `arguments` is not the array so we can’t apply any of its methods.

In order to avoid this kind of situation, we can use the rest parameters in a function definition.
We will use `...` in front of the argument name and they literally mean “gather the remaining parameters into an array”.
Let’s see it through example:

```
function add(...numbers) { // numbers is the name for the array 
// we will pass in when invoking the function
  let sum = 0;

  for (let oneNumber of numbers){
   sum += oneNumber;
  } 
  return sum;
}

add(1); // 1
add(1, 2); // 3
add(1,2,5,8); // 16

```

And using `.reduce()`, we will have cleaner code:

```
function add(...numbers) { // numbers is the name for the array
let sum = 0;
  return numbers.reduce((sum, next) => {
    return sum + next;
  })
  return sum;
}

add (1,2,5,8); // <== 16

```

❗We can choose to get the first parameters as variables and gather only the rest.

Here the first two arguments go into variables and the rest go into `movies` array:

```
function showMovie(title, year, ...actors) {
  console.log(`${title} is released in ${year} and in the cast are: ${actors[0]} and ${actors[1]}.`);
}

showMovie("Titanic", "1997", "Leonardo Di Caprio", "Kate Winslet");

```

## Summary

In this lesson, we learned about the new features of ES6, caused by introducing `const` and `let`and we learned about similarities and differences between declaring variables using `var` vs `let`and `const`. We also learned about **Template strings** features, and `string` methods such as `startsWith()`, `endsWith()`, `includes()`.

Finally, we saw how to use `arrays` and `objects` **destructuring**, and the `spread` operator with `arrays` and `rest` parameters.

Going forward, embrace and apply as many of these features as you can. While one of them on its own might not make a huge difference, all of them together used consistently can create a cleaner, easier to read the code, while avoiding some of the pitfalls of JavaScript.

## Extra Resources

- [MDN `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [ES6 Features](http://es6-features.org/)