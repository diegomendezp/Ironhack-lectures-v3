

# JS | Async & Callbacks





**Javascript is single-threaded**. To clarify better, this means that one single thread handles the event loop.

For older browsers, the whole browser shared one single thread between all the tabs. Modern browsers improved upon this by using either [process-per-site-instance](https://www.chromium.org/developers/design-documents/process-models) or different threads per tab.





> As a human being, you’re multithreaded. You can type with multiple fingers, you can drive and hold a conversation at the same time. The only blocking function we have to deal with is sneezing, where all current activity must be suspended for the duration of the sneeze. That’s pretty annoying, especially when you’re driving and trying to hold a conversation. You don’t want to write code that’s sneezy.





 *Potential Interview questions*:
**JavaScript, at its core, is a single-threaded and synchronous language**, and this means next:

- [**single-threaded**](https://en.wikipedia.org/wiki/Thread_(computing)#Single_threading) - **only one block of code is executed at the time**
- **synchronous** - **the code gets executed line by line, from top to bottom, in the order in which they are put in** - line 2 can’t get executed before line 1, line 3 can’t get executed before line 2, and so on.
- **asynchronous** behavior is provided through the browser's APIs (such as setTimeout, setInterval, fetch API, Promise API).





### How do we deal with asynchronous stuff in JavaScript



## Async & Callbacks



In asynchronous programs it is possible to have code on line 1 scheduled to be run at some point in the future so in the meantime, code on lines 2,3, and so on can run.





### Callback Function - executed asynchronously

The **callback function** contains the code that will be executed when the asynchronous function finishes its execution. (after some time, after some delay)







## `setTimeout(cb, delay)`

Sets a timer which executes a **callback** function once the timer **delay** expires.



**Parameters:**

- `callbackFunction`: the function that will be executed once the timer expires
- `delay` (optional): the time (in milliseconds) the timer should wait before the given callback function is executed

- The method returns a numeric `timeoutId`, which identifies the timer created by the call to `setTimeout()`.

- We can cancel the timeout by passing this `id` to the **`clearTimeout()`** method.



```js
// ES5
function someCallbackFunction(){
    console.log("Hey there, Ironhackers! :sunglasses:");
}

const timeoutId = setTimeout(someCallbackFunction, 5000);
```







## Same as before but with unnamed (anonymous) function  

```js
// ES5
const timeoutId = setTimeout(function () {
  console.log("Hey there, Ironhackers!");
}, 5000);



// ES6
const timeoutId = setTimeout(() => {
  console.log("Hey there, Ironhackers!");
}, 5000);
```





### Synchronous vs Asynchronous actions



**QUESTION:** What will the console print, First, Second, Third ??

```js
setTimeout(() => {
  console.log('First')
}, 0);

console.log('Second');
console.log('Third');
```









### [Exercise - Asynchronous Warm Up](https://gist.github.com/ross-u/251de9af8e6bd1ad1ec74d644036e253) (5 - 7 min)

```js
// Task 1 -
// Create a counter that will print a number in a sequence each second.

let counter = 1;
const callbackFunction = function () {
  setTimeout(/* Your code here ... */);
}

let timeoutId = setTimeout(callbackFunction, 1000);



// Task 2 -

// As there is no way to clear the setTimeout, setTimeout keeps calling the provided callback function over and over again.
// Edit the callbackFunction to clear the timeout using clearTimeout(timeoutId) when the counter is 10.
```



**Task 1 solution**

```js
// Create a counter that will print a number in a sequence each second.

let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  counter += 1;
  
 	// new setTimeout calls the callbackFunction again
  setTimeout(callbackFunction, 1000);
}

let timeoutId = setTimeout(callbackFunction, 1000);

```



**Task 2 solution**

```js
let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  counter += 1;
  
 	// we save the id of the setTimeout to the timeoutId variable that is in the globaal scope
  timeoutId = setTimeout(callbackFunction, 1000);
  
  if (counter > 10) {
    clearTimeout(timeoutId);
  }
}

let timeoutId = setTimeout(callbackFunction, 1000);
```







## `setInterval(cb, delay)`

Calls a function repeatedly with a fixed delayed time between each call.



- The method returns `intervalId`, which identifies the timer created by the call to `setInterval()`.
- We can cancel the **interval** by passing this `id` to the **`clearInterval(intervalId)`** method.



**syntax**

```js
const intervalId = setInterval(callbackFunction, delay);

clearInterval(intervalId);
```



```js
let i = 1;
const intervalId = setInterval(function () {
  console.log(i);

  i++;

  if (i > 10) {
    clearInterval(intervalId);
  }
}, 1000);
```





### Difference between `setInterval` and `setTimeout`



- **`setTimeout()`** executes the function just once, 

- **`setInterval()`** executes the given function repeteadly until the `clearInterval()` function is called.





A bit later in the course, we will cover other ways to deal with asynchronicity of JavaScript such are ***promises*** and ***async/await***. 🎯









**Clock example  - Use [Repl.it](https://repl.it/~) **

```js
const second = 1000;
let counter = 0;

function concatZero(num) {
  return ('0' + num).slice(-2);
}

function updateClock() {
  let dateObj = new Date();
  const seconds = dateObj.getSeconds();
  const minutes = dateObj.getMinutes();
  const hours = dateObj.getHours();
  // const miliseconds = dateObj.getMilliseconds();
  
  const timeNow = concatZero(hours) + ':' + concatZero(minutes) + ':' + concatZero(seconds);

	console.log(timeNow);
  counter++;
  if ( counter > 10 ) {
		clearInterval(clockInterval)
	}
}

const clockInterval = setInterval(updateClock, second);
```







### Additional Resources



**REPEATED QUESTION (from beginning of the lecture) & VIDEO RELATED** - (Only for the ones interested! :smiley: )

```js
function first () {
	setTimeout( () => console.log('FIRST w/ setTimeout'), 0 );
}

function second () {
	console.log('SECOND');
}

function third () {
	console.log('THIRD');
}

first();
second();
third();

// What will be the order of console logs ? 
```



**VIDEO:**

### [ Philip Robers  - What the heck is the event loop anyway](https://www.youtube.com/watch?v=8aGhZQkoFbQ) (25 min watch)

