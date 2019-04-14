# JS | Closures & Scope



> **Global scope** — The default environment where your code is executed for the first time.

> **Function scope** — Whenever the flow of execution enters a function body.
>
> **Block scope** — Whenever the flow of execution enters a block `{}`



Execution context is the environment / scope where the current code is being evaluated.







##### The closure contains all the variables that are in scope at the time when the function is created.



 ***Closure***, the backpack with the variables that were in scope (around, outside the function) when the function was created.



#### KEY: When a function gets declared, it contains a function definition and a closure. 

#### The closure is a collection of all the variables in scope at the time of creation of the function.



**Example 1** 

```js
function outter () {
  let secret = 'Shhhhh';
  let enclosedVar = 'meow';

  return function () {
    return secret;
    // return [secret, enclosedVar] 
  }  
}


let newFunc = outter();

let secret = 'Well I am not so secret at the end.';

console.log(newFunc());
```





**Example 2**

```js
function createMultiplier(multiplyBy) {
  return function (number) {
    return number * multiplyBy;
  }
}

let timesTwo = createMultiplier(2);
let timesTen = createMultiplier(10);

console.log(timesTwo(5));
console.log(timesTwo(10));

console.log(timesTen(5));
console.log(timesTen(10));
```







### **Closure**

```js
function storeMyPassword (passwordString, mySecret) {
  let password = passwordString;
  let secret = mySecret;

  return function (passInput) {
    if (passInput === password) {
      console.log(`secret is : ${secret}`)
    }
    else {
      console.log('Wrong');
    }
  }
}


let myPassword = storeMyPassword('bananarama', 'I sleep with my socks on!')
```











# Extra - ( 45 minutes, advanced - only interested students)

)

### IIFE - immediately invoked function expression

```js
(function () {
    console.log("Hello, I'm IIFE.")
})();


```



### Module pattern - Enables encapsulation

```js
let myModule = (function () {
    const multiplier = 10;
  	const maxNumber = 1000;
  
  let module = {
    multiply: function (num) {
      if (num > maxNumber) {
        console.log('Number must be less than 1000.');
      }
      else {
      	return num * multiplier;
      }
    }
  }
  
  return module;
})();
```

