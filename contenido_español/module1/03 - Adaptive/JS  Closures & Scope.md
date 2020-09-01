# JS | Closures & Scope



> **Global scope** — The default environment where your code is executed for the first time.

> **Function scope** — Whenever the flow of execution enters a function body.
>
> **Block scope** — Whenever the flow of execution enters a block `{}` ( applies only for the `let` and `const`.)



Execution context is the environment / scope where the current code is being evaluated.



## **Closure**



- Every function creates a *Closure* (both regular functions and arrow functions). 

  *Closure* is created during the function declaration (during the function creation time). 



- The *Closure* contains all of the variables that are in the surrounding ( lexical ) scope at the time when a function is created.



- Closures are commonly used to enable data encapsulation, currying or module pattern.



 We can think of a ***Closure*** as the backpack containing all the variables that were in scope (around, outside the function) when the function was created (created).





#### NOTE:

####  When a function is created, it contains a function definition (code block) and a *Closure*. 



#### The closure is a collection of all the variables in the surrounding scope at the time of the creation of the function.



#### We can think of a closure as a bag that every function has, where it stores variables that were surrounding it when it was declared. 



<br>



**Example 1** 

```js
function outer () {
  let secret = 'Shhhhh';

  return function inner () {
    //debugger;
    return secret1; 
    // `secret` is kept in the closure of the `inner` function
  }  
}


let newFunc = outer();

console.log(newFunc());
```



<br>



**Example 2**

```js
function createMultiplier(multiplyBy) {
  // var multiplyBy = passed argument value
  return function (number) {
    return number * multiplyBy; // multiplyBy is kept in a closure
  }
}

let timesTwo = createMultiplier(2);

console.log(timesTwo(5));
console.log(timesTwo(10));
```



<br>



##### Example 3

```js
function createSecret (passwordString, mySecret) {
  let password = passwordString;
  let secret = mySecret;

  return function (passwordInput) {
    if (passwordInput === password) {
      console.log(`The secret is: ${secret}`)
    }
    else {
      console.log('Wrong!');
    }
  }
}


let getSecret = createSecret('foobazbar', 'I like chocolate cookies!')


getSecret('mangotango'); // Wrong!

getSecret('foobazbar')//  The secret is: ...

```











# Extra - 



### IIFE - immediately invoked function expression

```js
(function () {
    console.log("Hello, I'm an IIFE.")
})();


```



### IIFE - with a passed argument

```js
var ten = 10;

(function (passedArg1) {
    console.log("Hello, I'm an IIFE.", passedArg1)
})(ten);


```











### Module pattern - Enables encapsulation

```js
const bankAccount1 = (function () {
  const accountNumber = 'ES-127-0000145670-8832';
  const transactions = [];
  
  let total = 0;
  
  /* `module` is an object representing a bank account with the data
  		encapsulated in the closure of each method.
 */
  const module = {
    
    balance: function () {
      return `${total}€`;
    },
    
    transactionCount: function () {
      return transactions.length;
    },
    
    lastTransaction: function() {
      return transactions[transactions.length - 1];
    },
    
    transaction: function (amount) {
      total = total + amount;
      const type = amount < 0 ? 'WITHDRAW' : 'DEPOSIT';
      
      const newTransaction = { amount: amount , date: new Date() } ;
      transactions.push(newTransaction);
      
      console.log(`${type} - Transaction successful: ${amount} €`);
    }
    
  }
  
  return module; // return the newly created object
})();


// DEPOSIT
bankAccount1.transaction(500);

// WITHDRAW
bankAccount1.transaction(-495);

// GET BALANCE
bankAccount1.balance();

// GET NUMBER OF TRANSACTION
bankAccount1.transactionCount();

// TRY CHANGING THE ACCOUNT `total` DIRECTLY
//   :) - it is not accessible as it is in the closure 
```







<br>





-----



### Extra



#### Lexical vs Dynamic scope - 

Lexical scoping refers to when the location of a function's definition (during compilation phase) determines which variables you have access to.

Dynamic scoping uses the location of the function's invocation to determine which variables are available.

- Lexical scoping is also known as static scoping.
\- Lexical scoping in JavaScript allows for the concept of closures.
\- Most languages use lexical scoping because it tends to promote source code that is more easily understood.