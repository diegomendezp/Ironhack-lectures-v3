---
title: "Functions and Arrays"
date: 2018-11-12T12:25:51+01:00
draft: false
weight: 11
lab: true
week: 1
day: 3
---

# JS | Functions & Arrays

## Link:
  - https://github.com/ironhack-labs/lab-javascript-functions-and-arrays
## Purpose:
  - Get used to functions syntax
  - Start to idealize the function as pseudo-code and write down on paper the steps. Break it down
  - Practise with functions arguments and return, and with the scope
  - Play with arrays and their basic methods: push, pop, unshift, shift, splice, forEach
## What they do in the exercise:
  - first contact with Jasmine testing
  - function that returns the largest number between 2
  - function that returns the longest word of an array
  - function that returns the sum of the numbers of an array
  - function that returns the average of the numbers of an array
  - function that returns the average length of the words of an array
  - function that removes the duplicated words of an array
  - find elements in an array
## Good practices:
  - Care about indentation
  - Name functions with camelCase
  - Be careful with the scope
  - Start investigating some methods like indexOf()




## Issues:
  - the provided variables maybe confuse the students into calling the functions when they don't need to due to the tests
  - since they have the Jasmine, they don't use the browser with the developer tools
  - don't talk about `reduce` method inside a iteration
  - starting code names can confuse students
  - there are no iterations
  - the bonus part has test
  - bonus test has an not good test since are matrix with 1 and 2
## Suggestion:
  - delete JasmineTest for debugger purpose
  - introduce `reduce` as a extra tool on introduction section
  - inconsistent test on the functions. Some return `undefined`, others one `0`
  - have only one array of words or no one
  - bonus part without test since seems like the student doesn't complete the exercise
  - added eslint on the `starter-code` without any explanation
