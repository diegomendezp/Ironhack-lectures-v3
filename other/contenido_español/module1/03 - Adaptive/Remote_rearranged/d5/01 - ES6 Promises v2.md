# ES6 Promises







**Schrödinger's cat** is a [thought experiment](https://en.wikipedia.org/wiki/Thought_experiment), sometimes described as a [paradox](https://en.wikipedia.org/wiki/Paradox), used in the [interpretations of quantum mechanics](https://en.wikipedia.org/wiki/Interpretations_of_quantum_mechanics). 



We don't really care about the super position of the cat, but we will use it as a visual representation.



The scenario presents a hypothetical [cat](https://en.wikipedia.org/wiki/Cat) that may be simultaneously both alive and dead, as a result of being linked to a random ( [subatomic](https://en.wikipedia.org/wiki/Subatomic_particle) ) event that may or may not occur.





We want to draw a parallel between the cat and asynchronous tasks/operations in JavaScript.





### [Schrodinger's cat video 1 - from 00:00 - 00:35](https://www.youtube.com/watch?v=IOYyCHGWJq4)

### [Schrodinger's cat video 2 - from 00:00 - 00:30](https://www.youtube.com/watch?v=UjaAxUO6-Uw)







# Promises

<h3 style="background-color: cornflowerblue; display: inline">
   Slides 2 and 3 
</h3>

- A `Promise` is a special object representing the eventual **completion or failure** of an **asynchronous operation**.





### What does a Promise do ?

Step by step Promise does the following:

- Promise wraps an asynchronous function invocation/call,

- Waits for the end of that asynchronous function call, 

- Checks the result that asynchronous function call returned, either error or data.

  




##### Promise API - asynchronous handling outside of the script

* Created `Promise` is handled asynchronously in the browser. 
* The code in the `Promise` is executed outside of the script and when done it's `resolve` or `reject` is queued for execution in the *Event loop*.





<br>





<h3 style="background-color: cornflowerblue; display: inline">
   Slide 4
</h3>



## Creating a Promise object

<br>



### Syntax

##### `index.js`

```js
// CREATING A PROMISE
const pr = new Promise(function (resolve, reject) {} );
```





 <br>





<h3 style="background-color: cornflowerblue; display: inline">
   Slide 5
</h3>

## Promise states

Created`Promise` is always in one of three states:



- **Pending**. When the Promise is created and asynchronous task started. 

  Promise is always pending <u>until</u> it either becomes <u>Fulfilled</u> or <u>Rejected</u>.

  

- **Fulfilled**. When the asynchronous operation is completed and  `resolve` handler is called.

  

- **Rejected**. If the second handler (typically `reject`) is called, the Promise is considered rejected with the value passed to that handler.





#### Syntax

```js
// PROMISE SYNTAX
// Parameters `resolve` and `reject` are functions provided by Promise interface
const promise1 = new Promise(function (resolve, reject) {

  // `resolve` is called if operation is successful/fullfiled
  resolve();

  // `reject` is called if the operation was unsuccessful/rejected
  reject();
});


promise1
  .then(function(){ })
  .catch(function(){ })

// Same as writing all on one line
// promise1.then(function(){ }).catch(function(){ })
```





<br>



<h3 style="background-color: cornflowerblue; display: inline">
   Slide 6
</h3>



<br>

### Let's create a basic Promise

##### `index.js`

```js
// PROMISE EXAMPLE (with synchronous code inside)
const promiseToExerciseToday = new Promise( function (resolve, reject) {} )
```







#### Inside of the promise we will do our Task and also include the logic describing:

#### -  when should the created Promise successfully fulfill

#### And 

#### -  when should it  reject in error



```js
// PROMISE EXAMPLE (with synchronous code inside)
const promiseToExerciseToday = new Promise( function (resolve, reject) {
  // Exercise done ?
  const userDidExercise = false;

  if (userDidExercise) {
    resolve('Exercised Today!');
  }
  else {
    reject('Did not Exercise :( ')
  }

});
```



<br>





<h3 style="background-color: cornflowerblue; display: inline">
   Slides 7, 8 and 9 
</h3>



### Opening a promise when it is done executing code inside



```js
// OPENING A FULFILLED OR REJECTED PROMISE
//    .then()     .catch()

promiseToExerciseToday
  .then( function (fromResolve) {
    console.log(fromResolve) 
  })
  .catch( function (errorFromReject) {
     console.log(errorFromReject)
  });

/* When the promise is resolved (code inside is done executing ):
// to read the values coming from `resolve()` we use `.then()`
// to read the value coming from `reject()` we use `.catch()`
// We can chain them as:
      promise.then().catch() 
*/
```









<br>





<h3 style="background-color: cornflowerblue; display: inline">
   Slide 10 
</h3>



### Let's create a Promise that returns either some object with data or an error.



### We will simulate how does it look when a Promise wraps an operation that is getting data from some Server API.



##### `index.js`

```js
// SIMPLE EXAMPLE OF PROMISE RETURNING VALUE OR ERROR
const getDataFromServer = new Promise(function (resolve, reject) {
  
  // Successful request
  const data = { item: 'MacBook Pro 16', price: 2600, year: 2020, img: "https://i.imgur.com/wDasLdD.jpg" };

  // Rejected request
  const error = new Error("Unable to get the data");

  // // Errored request - Error automatically triggers reject()
  // // and passes it the error
  // throw new Error("Unable to get the data");
  

  if (data) {
    resolve(data);
  }
  else if (error) {
    reject(error);
  }
})

//  Syntax of chaining `then...catch` to open a promise
getDataFromServer
  .then()
  .catch();


  // Syntax of `then...catch` using mandatory callback function
getDataFromServer
  .then( function (dataFromResolve) {})
  .catch( function (errorFromReject) {});


// Log the data coming
// from `resolve()   ->  then()` 
// from `reject()` or `errored task`  ->  catch()` 

getDataFromServer
  .then( function (dataFromResolve) { console.log(dataFromResolve) })
  .catch( function (errorFromReject) { console.log(errorFromReject) });

  
  fetchDataFromServer
  .then( function (dataFromResolve) {
    console.log("dataFromResolve", dataFromResolve);

    document.body.innerHTML = `
    <div class="container">
      <article class="product">
        <img src="${dataFromResolve.img}">
        <h3>${dataFromResolve.item}</h3>
        <h3>${dataFromResolve.price} €</h3>
        <h4>Year: ${dataFromResolve.year} </h4>
      </article>
     </div>
    `;
  })
  .catch( function (errorFromReject) {
     console.log(errorFromReject);
     document.body.innerHTML = `
     <div class="container error">

       <h1>ERROR</h1>
       <h2> ${errorFromReject} </h2>
       <img src="https://i.imgur.com/s525Tvp.png">

     </div>
    `;
  });
```







<br>





<h3 style="background-color: cornflowerblue; display: inline">
   Slide 11 
</h3>



### `fetch()` Interface -

#### `fetch` is an interface used to get the data from the servers









<br>







<h3 style="background-color: cornflowerblue; display: inline">
   Slides 12 and 13
</h3>



##### `index.js`

```js
// FETCH API
// fetch('''https://api.spacexdata.com/v3/launches''');

  fetch('https://api.spacexdata.com/v3/launches')
    .then( function (response) { 
      console.log('API response', response);
      const parseBodyPr = response.json();
      return parseBodyPr;
    })
    .then(function (parsedBody) {
      
      console.log('parsedBody', parsedBody);

      parsedBody.forEach((l)=> {
        console.log(l.links);

        if (l.links.mission_patch) {
          
          const newImg =  document.createElement('img');
          
          newImg.setAttribute("src", l.links.mission_patch);
          newImg.setAttribute("width", 200);

          document.body.appendChild(newImg);
        }

      });
    })
    .catch( (err) => console.log(err));
```

.

.

.

.

.

.

.













.

.
	    .

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



