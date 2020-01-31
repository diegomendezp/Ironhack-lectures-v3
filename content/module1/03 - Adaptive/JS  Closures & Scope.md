# JS | Closures & Scope



> **Global scope** — The default environment where your code is executed for the first time.

> **Function scope** — Whenever the flow of execution enters a function body.
>
> **Block scope** — Whenever the flow of execution enters a block `{}`



Execution context is the environment / scope where the current code is being evaluated.



## **Closure**



##### The closure contains all the variables that are in the surrounding ( lexical ) scope at the time when the function is created.



Functions have a closure. It is created during the function declaration. 

The closure contains  the variables that were in the surrounding scope at the time when the function was created.

Closures are commonly used to enable data encapsulation, currying or module pattern.



 ***Closure***, the backpack with the variables that were in scope (around, outside the function) when the function was created.



#### KEY: When a function gets declared, it contains a function definition and a closure. 



#### The closure is a collection of all the variables in the surrounding scope at the time of the creation of the function.



#### We can think of a closure as a bag that every function has, where it stores variables that were surrounding it when it was declared. 



**Example 1** 

```js
function outter () {
  let secret1 = 'Shhhhh';
  let secret2 = 'keep silent';

  return function () {
    //debugger;
    return secret1 + ' ' + secret2;  // [secret, enclosedVar] are in closure
  }  
}


let newFunc = outter();

console.log(newFunc());
```





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


let getSecret = createSecret('bananarama', 'I stood on the rain and my legs were exposed!')


getSecret('mangotango'); // Wrong!

getSecret('bananarama')//  The secret is: ...

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



