# JS | Async - Await

## Learning Goals

After this lesson you will be able to:
​

- Understand javascript's asynchrony history.
- Understand why async/await it's important.
- Explain the difference between old asynchrony handling and async-await.
- Solve pending promises with async-await.



## Introduction

As you know javascript it's an asynchronous programming language, that means that javascript can perform actions (code executions) with timing difference. _In other words asynchrony means the difference between now and later._
​
With that in mind, let's talk about the mechanisms for handling async code, code that will do something in the future.
In javascript's history we've had several ways to handle this async code as _Callbacks_ and _Promises_.
​

## Callbacks

Callbacks are functions which pass as an argument, and are invoked inside the function to complete an action. That's the proper definition, anyway, but callbacks also help when we need to solve asynchronous code. When an async operation has a result (either returned data or an error that occurred during the operation), it points to a function that will be invoked once that result is ready.
​

```javascript
function sayHello(name) {
  alert(`Hello ${name}`)
}

function getUserName(callback) {
  const name = prompt(`what's your name?`)
  callback(name)
}

getUserName(sayHello)
```



In the previous code we have two functions. The first one it's called sayHello and only takes a name to execute an alert with it, the second one it's a function that takes a function as an argument (a callback) and prompts the user name in order to invoke the callback function that executes the alert.
​
This is quite useful, but let's take a look into the pros and cons of handle async code with callbacks.
​

### Callback Pros

- Callbacks are an easy way to solve async operations.
- There are a lot of libraries written with callbacks.
  ​

### Callback Cons

- Callbacks have a hard to read structure: this means that callbacks can easily be mindboggling for other developers, plus, their structure make us read callbacks sequentially even where there is no immediate sequence.



```javascript
doA(() => {
  doB()
  doC(() => {
    doD()
  })
  doE()
})
doF()
```



When you see the previous code, you can easily think that the execution flow follows the natural A, B, C, D, E and F sequence, but that's not necessarily the case.



```javascript
first(() => {
  third()
  fourth(() => {
    sixth()
  })
  fifth()
})
second()
```



The code above show the real execution flow.
​

- Callbacks have a common problem called _callback hell_ in which a nested callback execution queue can take place:
  ​

```javascript
functionA(() => {
  functionB(() => {
    functionC(() => {
      functionE(() => {
        functionN(){...}
      })
    })
  })
})
```



- Custom error handling:

```javascript
myFunction(num, function callback(err, result) {
  if (err) {
    return myFunction(num, callback)
  }
  // handle result
})
```

## Promises

Promises are objects used for async processes. Promises contain a value that can be available now, in the future or never.
​

```javascript
new Promise((resolve, reject) => {
  if (true) {
    resolve(/* Response */)
  } else {
    reject(/* Error */)
  }
})
```


As you can see the promise receives a callback function with two arguments: resolve and reject, used to make succeed the promise or reject the promise.
​
A promise can be found in one of the following states:
​

- Pending (pending): initial status, not met or rejected.
- Completed: means that the operation completed successfully.
- Rejected (rejected): means that the operation failed.
  ​
  To use a promise’s result you could use the `then` and `catch` methods.
  ​

```javascript
promise
  .then(response => console.log(response))
  .catch(error => console.error(error))
```


This is how we solve promises, `then` and `catch` methods need a callback to work, `then` receives an argument with the value returned from the resolved method parameter. The `catch` method also receives the error from the reject method.
​
This approach looks so difficult, but in most cases you will just solve already created promises from libraries built with promises support for their async operations. For example libraries for Ajax calls, db connection or filesystem.
​

### Promises pros

- It's easy to use (easier than callbacks).
- Most libraries are now built in promises.
- Easy error handling.
- Sequential execution.
- Return promises that can be chained.
- Have methods to multiple promises or resolve one promise first (`all` and `race`).
- Improves readability.

### Promises cons

- Still use callbacks.
- There’s a `promise` hell too.

## async / await

Async/await it’s a new feature included in ES6+ for handling Promises, we can say that it’s sugar syntax for handling promises.
​
The difference it's pretty simple, now we have to use a function or identify the function that needs to solve an async operation and mark it as an _asynchronous_ function with the `async` keyword:
​

```javascript
async function someFunction() {
  //...
}
/* or */
const someFunction = async () => {
  //...
}
```


This new keyword `async` allows you to use another keyword inside the function called `await` to await (as its name says) an asynchronous operation response:
​

```javascript
async function someFunction() {
  const response = await db.find()
}
/* or */
const someFunction = async () => {
  const response = await db.find()
}
```

Our new notation has a couple of things to take into account, the first one is that the `await` keyword pauses the execution flow until the promise is fulfilled, once this happens, the execution continues. The second one is that the error handling it's not intuitive or included within the notation. To handle errors with async await we have other options.
​

### Async await error handling​

#### try - catch



The first solution its wrap the await call with a `try` block and add the catch method. This catch method will catch any error occurred in the `try` block:
​

```javascript
async function someFunction() {
  try {
    const response = await db.find()
  } catch (error) {
    console.error(error)
  }
}
/* or */
const someFunction = async () => {
  try {
    const response = await db.find()
  } catch (error) {
    console.error(error)
  }
}
```


The catch block will receive any error thrown inside the try block and you can easily handle the error from this point on.



#### function invoke - catch


We can also invoke a function and add the catch method. It is not widely used, but it is quite useful.
​
At the functions invokes there are something we missed along which is the `catch` method, this is an avoided feature but super useful.
​

```javascript
async function someFunction(){
  const response = await db.find()
}
/* or */
const someFunction = async () => {
  const response = await db.find()
}
​
someFunction().catch(error => console.error(error))
```



#### Error handling functions


Since async/await doesn’t have a strict way to handle errors, you can use a handmade function to solve errors with then/catch and re-use it.
​

```javascript
export default function to (promise) {
  return promise
    .then(data => [null, data])
    .catch(err => [ err ])
}
​
const someFunction = async () => {
  const response = await to(db.find())
}
```


The best thing about this option is that you don't have to write this code in every project you develop, there are libraries like `await to js` to re-use.
​

### Refactor `then` to `async`/`await`



​
A useful practice to understand and learn how and when to use async / await is to refactor the `then and catch` structure. This is quite easy and it turns pretty straightforward with this five steps:
​

1. Identify the function that it's performing the async operation.

```javascript
// this 👇 is the function that is executing an asynchronous operation.
function getResource() {
  DB.find()
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
```



2. Once we identify the asynchronous function we have to place the `async` keyword before the function keyword or before the parentheses of an arrow function.
   ​

```javascript

 /* 👉 */async function getResource(){
  DB.find()
    .then(response => console.log(response))
    .catch(error =>   console.error(error))
  }
```

3. The next step, now that we already marked our function as an async function, is to identify the callback argument name (within the `then` method) and create a new variable/constant with it.

```javascript
  // step one
  async function getResource(){
    DB.find()
      .then(/* 👉 */response => console.log(response))
      .catch(error => console.error(error))
  }
// step two
async function getResource(){
  const /* 👉 */ response
  DB.find()
    .then( => console.log(response))
    .catch(error => console.error(error))
  }
```



4. We already use the `async`keyword in our code, it's time to use `await`. So let's add the `await`keyword between the `=` and the promise. After that we should assign to our variable/constant the promise
   ​

```javascript
async function getResource(){
  /* 👉 */ const response = await DB.find()
    .then( => console.log(response))
    .catch(error => console.error(error))
  }
```

5. The last step is to remove the `catch` code block and delete the `then` keyword and leave only what’s inside its parentheses.
​

```javascript
async function getResource() {
  const response = await DB.find()
  console.log(response)
}
```


This is the easiest way to refactor old promise resolved functions and the best way to implement async/await.
​

### Async/await pros



- We have a synchronous looking code.
- Sequential and stepped solutions for async operations.
- Less code.
- We can just await an async operation without saving the result.
  ​

### Async/await cons

\* Doesn't have a consolidated error handling structure.

- Always needs a function to wrap the async operations (we can always wrap the code inside a function or an IIFE, though).
  ​

## Summary

The history of asynchronous code in javascript it's interesting and we can easily note the progress of the language with this brand new `async/await` operators that allows you to write better code within less lines and make it totally understandable. The pure existence of `async/await` doesn't mean that the rest of solutions are bad, it's just another way to solve any async operation.
​

## Resources

- [dotJS 2017 - Wes Bos - Async + Await](https://www.youtube.com/watch?v=9YkUCxvaLEk)
- [How to write async await without try-catch blocks in Javascript](https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/)
- [async / await in JavaScript - What, Why and How - Fun Fun Function](https://www.youtube.com/watch?v=568g8hxJJp4&t=12s)
