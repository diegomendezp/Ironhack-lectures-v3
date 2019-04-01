![img](https://i.imgur.com/1QgrNNw.png)

# JS | Conditionals and Loops

## Learning Goals

Afer this lesson, you will be able to:

- Understand why conditionals are necessary in our code
- Understand and use the `if..else` statement
- Understand and use the `switch` statement
- Identify when it’s better to use `switch` over `if..else`
- Understand why the loops and iterations are necessary in our code
- Understand and use the `while` statement
- Understand and use the `for` statement





## Conditional Statements

"**Conditional**" **Statements**,  are used to perform actions based on different conditions.



### `if..else`



### 	`if` - if condition is true

```js
if (condition) {
  // code to execute if the condition is true
}
```



### 	`else` - else if previous condition is not true

```js
if (condition) {
  // code to execute if the condition is true
} else {
  // code to execute if the condition is false
}
```



### 	`else if` - second(next) option for the if

```js
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition2 is true
} else {
  // code to execute if condition1 and condition2 are false
}
```





```js
var age = parseInt(prompt("Welcome to IronHack cinema. How old are you?"));

if (age <= 16) {
  console.log ("You have a teenager discount");
} else if (age >= 65) {
  console.log ("You have the senior citizen discount :)");
} else {
  console.log ("Sorry, you have no discount :(");
}
```





```js
if (condition) {
  if (nestedCondition) {
    // The code will be executed if
    // condition === true && nestedCondition === true
  } else {
    // The code will be executed if
    // condition === true && nestedCondition === false
  }
} else {
  // The code will be executed if
  // condition === false
}
```

Let’s play around with two numbers to see how nested `if` works:

```
var number1 = parseInt (prompt ("First number:"));
var number2 = parseInt (prompt ("Second number:"));

if (number1 === number2) {
  console.log ("The numbers are equal");
} else {
  if (number1 > number2) {
    console.log("Number 1 is bigger than number 2");
  } else {
    console.log("Number 1 is smaller than number 2");
  }
}
```





#### Time to practice - Custom Hello, world!

Let’s write an improved version of the ‘Hello, world!’ program. Let’s ask the user in which language they want to see the message. You must have, at least, three different languages.

- If the user wants the message in Spanish, you have to log in the console **“Hola, mundo!”**.
- If the user wants the message in French, you have to log in the console **“Bonjour tout le monde”.**
- Finally, if we don’t have the indicated language, we will show **“Hello, world!”**.

**Use the if…else and else if statements we have just learned**





### Too many conditions

Example

```js
var name  = prompt ("Favorite Game of Thrones main character:");
var house = "";

if (name === "Khal Drogo") {
  house = "Dothraki Horselord";
} else if (name === "Daenerys") {
  house = "Targaryen";
} else if (name === "Jon Snow" || name === "Sansa" || name === "Arya") {
  house = "Stark";
} else if (name === "Cersei" || name === "Tyrion" || name === "Ser Jaime") {
  house = "Lannister";
} else {
  house = "Other";
}

console.log("Your favorite character is from the house " + house);
```



 When we would end up with too many  `else if` statements, we should use switch statement.

### `switch`

```js
switch (expression) {
  case value1:
    // executed code when the expression === value1
    break;
  case value2:
    // executed code when the expression === value2
    break;
  case value3:
    // executed code when the expression === value3
    break;
  default:
    // executed code when none of the values match the expression
}
```





**Redo the previous example using switch**

```js
var name  = prompt ("Favorite Game of Thrones main character:");
var house = "";

switch (name) {
  case "Khal Drogo":
    house = "Dothraki Horselord";
    break;
  case "Daenerys":
    house = "Targaryen";
    break;
  case "Jon Snow":
  case "Sansa":
  case "Arya"
    house = "Stark";
    break;
  default:
    house = "other";
}

console.log("Your favorite character is from the house " + house);
```

 `break` statement terminates the current switch statement and ends.

 `default` is our the last statement inside the `switch`, so it’s no necessary to add the `break` statement in this case.



### `switch` - removing a break statement

If we remove the break statement, the execution of the `switch` will not break

```js
switch(1) {
  case 1:
    console.log('First case match!');
    // no break statement
  case 1:
    console.log('Second case match!');
    break;
  default:
    console.log('Default case!');
}
```





## Loops & Iterations

We use loops and iterations to do repetitive tasks in our programs. 

In JavaScript we use `for` or `while` loop to do this 

​	Examples loop over a list of names

​	Print numbers from 0 to 100



### `while` Loop

```
while (condition) {
  // code to be executed while the condition is true
}
```



The `while` loop  executes a block of code as long as a specified condition evaluates to `true`.



```js
let i = 0;

while ( i <= 20) {
  console.log(i);
  i = i + 1;  //  this is the same as 	i += 1
}
```



The script follows the following rules:

- Check if the value of `i` is lower than or equal to 20.
- Print in the console the value of `i`.
- Increment the value of the `i` by 1.





### `do while` statement



The `do/while` statement is used when you want to run a loop at least one time, no matter what.

```
do {
    code block to be executed
} while (condition);
```





#### Time to practice

Let’s do a small exercise to practice the new stuff we have learned in this Learning Unit. The exercise will have two small iterations:

**Iteration 1 -** Create an script that counts from 0 to 30. Expected output:

> 1
> 2
> 3
> …
> 28
> 29
> 30

**Iteration 2 -** Change the previous script to write “ten” when the value of `i` is 10, and “twenty” when the value if 20. Expected output:

> 1
> …
> 9
> ten
> 11
> …
> 19
> twenty
> 21
> …
> 30

**How can you modify the basic flow of the script? :)**



### `for` statement

```js
for (initialization; condition; increment) {
  // code to execute
}
```

The `for` statement creates a loop with three different values separated by semicolons: initialization, condition and final expression.

The initialization is the variable declaration, we declare our control variable in here. 

The condition is what has to happen to finish the iteration. 



Let’s do the same exercise as before in with `for` loop

```js
for (var i = 0; i <= 100; i++) {
  console.log(i);
}
```



### Forgetting to break the loop will create an infinite loop 



### Continue and Break statements

#### Break Statement

 `break` keyword  in a `switch` statement or a **loop**, breaks out of the statement block, and continues executing the code after it (if any).



```js
var i = 0;

while (i < 10) {
  console.log('The number is ' + i);
  i++;
  if (i === 4) {
    break;
  }
}
```

**The result of text will be**

```js
The number is 0
The number is 1
The number is 2
The number is 3
```



- `++i` means `i+=1; return i`

- `i++` means `oldI=i; i+=1; return oldI`

  

  Example:

  ```
  > i=0
  > [i++, i, ++i, i, i--, i, --i, i]
  [0, 1, 2, 2, 2, 1, 0, 0]
  ```

![:bulb:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/bulb.png) Please note that `break` does not exit an `if`, only loops!



#### Continue Statement

The `continue` statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop.  `continue` statement “jumps over” one iteration in the loop.



```js
let i = 0;

while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  console.log('The number is ' + i);
}
```

**The result of text will be**

```
The number is 1
The number is 2
The number is 4
The number is 5
```





#### Time to practice

Let’s write a loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and print that on the screen. You will need the [remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder) operator to do the exercise. Expected output:

> 1 is odd
> 2 is even
> …
> 19 is odd
> 20 is even



Example

```js
for (let i = 0; i < 30; i++) {
    if (i === 0) {
		continue;
    }
	if (i % 2 === 0) {
		console.log(i + ' is even.');
	}
	else {
		console.log(i + ' is odd.');
	}
}
```



## Summary

To sum things up, in this Learning Unit you have learned that the booleans (or bool) are variables that represent two different values: **true** or **false**.

These boolean values are used in the conditional statements like `if..else`, and different boolean values can be joined with the logical operators.

If you are evaluating one condition and you have too many options to check, the best solution is to change the `if..else` statement for a `switch` statement.

Finally, we have learned how to iterate several times with two different statements, `while` and `for`.

## Extra Resources

- [MDN - Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [MDN - `if...else` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN - `switch` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN - `for` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
- [MDN - `while` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement)