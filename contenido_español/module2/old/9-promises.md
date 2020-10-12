---
title: "Promises"
date: 2018-11-12T16:09:30+01:00
draft: false
weight: 9
week: 4
day: 3
pre: "<b>9. </b>"
---

## Lecture Notes

- What is a Promise?
- syntax

  - instead of `do((err, result) => {});`
  - `do().then(result => { ... handle result ... }).catch(err => { ... handle error ... })`

- promise as a variable
  - `const promiseToDoSomething = doSomething()`
  - can be passed around
  - can be stored, useful for accessing unresolved/cached results with only one (async) syntax

- Create Promises

- Promise.All
  ```javascript
  Promise.all(promises).then(results => {
    /* results is array with resolves values of all promises, in same order  */
  }
  ```
- Promise.race
  ```javascript
  Promise.race(promises).then(result => {
    /* result is the resolve value of the first promise to resolve */
  }
  ```


<!-- - late binding
  - binding after the promise has been resolved/rejected still possible
  - then/catch will still be invoked

- multiple binding
  - `promiseToDoSomething.then(result => { ...do things... })`
  - `promiseToDoSomething.then(result => { ...do more things... })`

- chaining results

  - return value of `.then()` callback is given as argument to the chained `.then()` callback
  - `do1().then(resultOfDo1 => do2(resultOfDo1)).then(resultOfDo2 => { ... })` -->

<!-- - synchronizing parallel work

  - given array of promises
  - wait for all to resolve


- DRY error handling

```javascript
doSomething().then(result => {
    return doSomethingElse(result);
  })
  .then(resultOfSomethingElse => { })
  .catch(err => {
    /* err is error of doSomething() OR doSomethingElse() */
  });
```
 -->
<!-- - creating a function that returns a promise

  ```javascript
  const doSomething = function () {
    return new Promise((resolve, reject) => {
      // call resolve(value) when you have the result
      // call reject(error) or throw new Error('error')
    });
  };
  ``` -->
<!-- 
- creating pre-resolved/pre-rejected promises

  - `const resolved = Promise.resolve(value);`
  - `const rejected = Promise.reject(error);` -->

## Resources

- [LU - ES6 Promises](http://learn.ironhack.com/#/learning_unit/3979)
- [MDN Promises guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [MDN Promises reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Ironhack Learning Unit
