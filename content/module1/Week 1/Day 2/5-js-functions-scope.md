---
title: "JS Functions Scope"
date: 2018-11-12T12:16:56+01:00
draft: false
weight: 9
week: 1
day: 3
pre: "<b>9. </b>"
---

## Learning Objectives

- function statement
- anonymous function
- functions are first-class objects
- function as vairables
- callbacks

## concept function

- black box metaphor (algebra function)
- name is verbSomething
- convention is camelCase
- concept abstraction

- declaration
```javascript
function addNumbers(p1, p2) {
  return p1 + p2;
}
```

- function call

```javascript

function addNumbers(p1, p2) {
  console.log(p1 + p2);
}

addNumbers(2, 4);
addNumbers(1, 2)
addNumbers(1, 2, 3)
addNumbers('foo')

function doFoo(a, b) { console.log(a, b) }

doFoo(1);
doFoo(1, 2, 3);

```

- concept return value

```javascript
var x = doFoo();
var y = addNumbers(1, 2);
console.log(x);
console.log(y);
```

## Quick Demo

- concept scope

```javascript
var num = 5;
function addFive(p1) { var x = 1; return p1 + x + 4 }
addFive();
console.log(p1);
```
- concept hoisting
```javascript
sum(2, 4)
function sum(a, b) { return a + b }
```
- concept return statement
  - return nothing? return undefined
  - return statements in control structures
  - multiple return statement

- concept call stack
  - breakpoint
  - show call stack

```javascript
function bar(times) {
  console.log('I am bar, I was called', times, 'times');
}

function foo(count) {
  debugger;
  console.log('I am foo');
  for (var ix = 1; ix <= count; ix++) {
    bar(ix);
    console.log('I called bar', ix, 'times');
  }
}

foo(3);
```

- concept closure

```javascript
function addNums(a, b) {
  return a + b;
}

function makeFunctionThatAddsY(y) {
  return function (x) {
    return addNums(x, y);
  }
}

var addFive = makeFunctionThatAddsY(5);

addFive(100);
```

- concept callback

```javascript
function doSomething() {
  console.log('1 sec later');
}
console.log('before');
window.setTimeout(doSomething, 1000)
console.log('after');
```

- concept anonymous function
```javascript
window.setTimeout(function () {
  console.log('1 sec later');
}, 1000);
```

## Resources

- show in [cheat-sheet](https://github.com/ironhack/bcn-webdev-cheatsheet/tree/master/m1#js-concepts)

## Ironhack Learning Platform

- [LU - JS Functions](http://learn.ironhack.com/#/learning_unit/3020)