# ES6 Promises





### [Success /error callback - Intro Example](<https://codepen.io/Denzelzeldi/pen/zXLELa?editors=0012>)





# Promises

- A `Promise` is a special object representing the eventual **completion or failure** of an **asynchronous operation**.



### What does a Promise do ?

Step by step Promise does the following:

- Promise wraps an asynchronous function invocation/call,

- Waits for the end of that asynchronous function call, 

- Checks the result that asynchronous function call returned, either error or data,

- At the end depending on the returned result it forwards that result in the following way: 
  - Success value `resolve(successValue)` 

    or

  - Error  `reject(Error)`.





`Promise` is always in one of three states:

- **Pending**. Until a Promise is fulfilled it is in pending state. Asynchronous operation is not yet finished.

- **Fulfilled**. When the first handler (typically `resolve`) is called the `Promise` is considered fulfilled with the value passed to that handler.

- **Rejected**. If the second handler (typically `reject`) is called, the Promise is considered rejected with the value passed to that handler.






##### Promise API - asynchronous handling outside of the script

* Created `Promise` is handled asynchronously in the browser. The code in the `Promise` is executed outside of the script and when done it's `resolve` or `reject` is queued for execution in the *Event loop*.

  

#### Syntax

```js
const myRequest = new Promise( (resolve, reject) => {
	let requestResult = someAsyncronousRequest();
  
  // If asyhchronous operation throws an error, reject() is automatically triggered
  
	if (/* condition */) {
  	resolve(/* resolved value */);	// success, forward value in parentheses to `.then()`
	}
  else {
  	reject(/* reason */); // error, if rejected forward value in parentheses to `.catch()`
  }
});


////////////////////////
//  .then().catch()		//
////////////////////////
// in `then` we specify what to do if async function call was successful (`resolve` value is returned)
// in `catch` we specify what to do if async function call was rejected (`reject` value is returned)


myRequest
  .then( (resolvedValue) =>  { /* do something with resolved value */ })
  .catch( (rejectionValue) => { /* do something with reject value */});


```





### [PROMISES - CODEPEN EXAMPLES COLLECTION](<https://codepen.io/collection/DRgOor/>)





**Example 1**  -  

```js
  // CREATING PROMISE
  var promise1 = new Promise( (resolve, reject) => {
    let requestSuccess = networkRequest(); // asynchronous operation - truthy or falsy value

      setTimeout(function() {
      if (requestSuccess) {
        resolve(requestSuccess);
      } 
      else {
        reject(new Error('Network Request Error'));
      }      
    }, 1000);
  });

  // CONSUME PROMISE - do something depending if Promise was successful or rejected
  promise1
    .then( (value) => console.log(value))
    .catch( (err) => console.log(err))
```







## `Promise.all()`



If we want to do something only after multiple promises are resolved - only after multiple asynchronous functions are finished and resolved successfuly, we can use `Promise.all`

js

The **Promise.all()** method  takes an array of promises and returns a single `Promise` that **resolves when all of the promises in the array have resolved** or when the iterable argument contains no promises. 

It **rejects with the reason of the first promise that rejects.** (This method can be useful for aggregating the results of multiple promises.)



```js
const p1 = new Promise((resolve, reject) => {
  setTimeout( () => resolve('p1 - resolved !'), 4000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout( () => resolve('p2 - resolved !!'), 1000);
}); 

// const p3 = new Promise((resolve, reject) => {
//   setTimeout( () => { throw new Error("p3 went wrong") }, 3000);
// }); 



Promise.all([p1, p2])
  .then( (values) => { 
    console.log(values); 
  });


// Promise.all([p1, p2, p3])
//  .then( (values) => { 
//    console.log(values); 
//  });
```





### [Additional Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Methods):

`Promise.allSettled([Promises])` - Wait until all promises have settled (each may resolve, or reject).

`Promise.race([Promises])` - Wait until (first) any of the promises is resolved or rejected.





### Self Guided

### [Video 1](<https://www.youtube.com/watch?time_continue=4&v=9nwPenviboM>)

### [Video2](<https://www.youtube.com/watch?v=DHvZLI7Db8E>)

### [Video3](<https://www.youtube.com/watch?v=s6SH72uAn3Q>)