# ES6 Promises







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
const myPromise = new Promise( (resolve, reject) => {
  
	if (/* condition */) {
  	resolve(/* resolved value */);	// forwards value in parentheses to `.then()`
	}
  else {
  	reject(/* reason */); // forwards value in parentheses to `.catch()`
  }
  
    // or if Error was thrown, error is being forwarder to `.catch()`
});


////////////////////////
//  .then().catch()		//
////////////////////////
// in `then` we specify what to do if the Promise was fulfilled (`resolve` value is returned)
// in `catch` we specify what to do if Promise was rejected (`reject` value is returned)


myPromise
  .then( (resolvedValue) =>  { /* do something with resolved value */ })
  .catch( (rejectionValue) => { /* do something with reject value */});

```







**Example 1**  -  

Using the `resolve` and `reject` functions inside of a Promise:

```js
// CREATE PROMISE
var promise1 = new Promise((resolve, reject) => {
  
  // ERROR EXAMPLE
  // throw new Error('ERROR (>_<)');

  setTimeout(function() {
    // SETUP WHAT THE PROMISE SHOULD DO ON: resolve AND reject
    if (true) resolve("PROMISE FULFILLED ¯\(◉◡◔)/¯");
    else reject('PROMISE REJECTED ( ͡° ͜ʖ ͡°)');
  }, 1000);
});


// CONSUME PROMISE
// SETUP HOW THE PROMISE IS TO BE CONSUMED ON EITHER:
//   Promise fulfilled    resolve -> .then()
//  OR
//   Promise rejected     reject  -> .catch()  

promise1
  .then((resolveValue) => { 
    console.log('resolveValue', resolveValue);
  })
  .catch((error) => { 
    console.log('rejectValue \n', error)
  });
```





<br>





### Using Promise for to handle action that can throw an error



```js
// CREATE PROMISE
var promise1 = new Promise((resolve, reject) => {
  
  // FULFILLED EXAMPLE
  let request = { ok: true, data: { city: "Barcelona", course: "WebDev" } };
  

  // REJECT EXAMPLE
  // let request = { ok: false, data: null };

  setTimeout(function() {
    if (request.ok) resolve(request);	
    else reject(request);
  }, 1000);
});


// CONSUME PROMISE
// SETUP HOW THE PROMISE IS TO BE CONSUMED ON EITHER:
//   Promise fulfilled    resolve -> .then()
//  OR
//   Promise rejected     reject  -> .catch()  

promise1
  .then((resolveValue) => { 
    console.log('resolveValue', resolveValue);
  })
  .catch((error) => { 
    console.log('rejectValue \n', error)
  });
```



<br>



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







<br>

### Use `fetch` to create a request to an API and get data



#### What is fetch

Browsers have a special module (API) called Fetch, which enables a function called `fetch()`. 

We use it to create Asynchronous JavaScript HTTP request.

AJAX - old (legacy) module (API) - Asynchronous Javascript XMLHtttpRequest 



### [Fetch API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### [Using Fetch - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

#### [`fetch` `options` - POST example](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options)



<br>







```js
// https://restcountries.eu/#api-endpoints-all

// GET request to the restcountries.eu API
fetch("https://restcountries.eu/rest/v2/all")
  .then(result => {
    // The incoming JSON data is not immediately readable as it a HTTP body text
    // Therefore we have to convert it to a JSON object format.
    console.log(result.body); 
    return result.json();
  })
  .then(data => console.log(data))
  .catch(err => {});
 

```



<br>



### [Additional Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Methods):

`Promise.allSettled([Promises])` - Wait until all promises have settled (each may resolve, or reject).

`Promise.race([Promises])` - Wait until (first) any of the promises is resolved or rejected.





### Self Guided

### [Video 1](<https://www.youtube.com/watch?time_continue=4&v=9nwPenviboM>)

### [Video2](<https://www.youtube.com/watch?v=DHvZLI7Db8E>)

### [Video3](

