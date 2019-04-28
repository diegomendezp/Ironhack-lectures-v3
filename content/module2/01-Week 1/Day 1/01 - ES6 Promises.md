# ES6 Promises





### [Success /error callback - Intro Example](<https://codepen.io/Denzelzeldi/pen/zXLELa?editors=0012>)





## Promises

A `Promise` is a special object representing the eventual **completion or failure** of an **asynchronous operation**.



Promise wraps an asynchronous function,  calls that function,  waits for the result return from that asynchronous function,  and at the end depending on returned result it forwards either: 

- Success value `resolve(successValue)` 

or 

- rejection value  `reject(rejectionValue)`.





`Promise` is always in one of three states:

- **Pending**. Until a Promise is fulfilled it is in pending state. Asynchronous operation is not yet finished.

- **Fulfilled**. When the first handler (typically `resolve`) is called the `Promise` is considered fulfilled with the value passed to that handler.

- **Rejected**. If the second handler (typically `reject`) is called, the Promise is considered rejected with the value passed to that handler.

  

#### Syntax

```js
const myRequest = new Promise( (resolve, reject) => {
	let requestResult = someAsyncronousRequest();
  
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







## Promise All



If we want to do something only after multiple promises are resolved - only after multiple asynchronous functions are finished and resolved successfuly, we can use `Promise.all`

js

The **Promise.all()** method  takes an array of promises and returns a single `Promise` that **resolves when all of the promises in the array have resolved** or when the iterable argument contains no promises. 

It **rejects with the reason of the first promise that rejects.** (This method can be useful for aggregating the results of multiple promises.)



```js
const p1 = new Promise((resolve, reject) => {
  setTimeout( () => resolve('p1 - resolve'), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout( () => resolve('p2 - resolve'), 1000);
}); 


Promise.all([p1, p2])
				.then( (values) => { 
  					console.log(values); 
				});
```







[Video 1](<https://www.youtube.com/watch?time_continue=4&v=9nwPenviboM>)

[Video2](<https://www.youtube.com/watch?v=DHvZLI7Db8E>)

[Video3](<https://www.youtube.com/watch?v=s6SH72uAn3Q>)