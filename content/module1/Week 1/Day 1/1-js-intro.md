---
title: "JS Intro"
date: 2018-11-12T12:12:51+01:00
draft: false
weight: 3
week: 1
day: 2
pre: "<b>3. </b>"
---

## Learning Objectives

- Programming is the process of creating a set of instructions that tell a computer how to perform a task.

### declarations

- `var x;`
- `var y = true;`
- `let`
- `const`

### types

- number: 1 1.3 Infinity NaN
- boolean: true false
- string: "hello world"
- undefined
- object
- function

### operators

- [comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison): `== === != !== > < >= <=`
- [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String) `+`
- [arithmetic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic): `+ - * / % ** ++ --`
- [bitwise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise): `& | ^ ~ << >> >>>`
- [assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment): `= += -= *= /= %= **=`
- [trenary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Conditional): `var a = (condition) ? this : orThat`
- precedence: [PEMDAS](http://materials.ironhack.com/s/SJeTS3zrYf#operator-precedence)
- unary
  - typeof `typeof var`

  - delete `delete var.property`

  - in `property in obj`

  - instanceof `var instanceof Constructor`

    

## numbers

- Scientific Notation = 1e9 === 1000000000

- Infinity

- -Infinity

- NaN === NaN

- Number object - is a wrapper around every number, example:

  ```let num = 5;  num.toString();```

  - Number('123')
  - Number('12a')

- Number object static properties
  - Number.MAX_VALUE
  - Number.isNaN(3 / window)
  - Number.isNaN(3 + window)
  - Number.isNaN(Number('x'))
  - Number.isInteger(3.1)

- funny thing about numbers
  - Number.isInteger(3 * (0.1 + 0.2) + 0.1)
  - 0.3 === 0.1 + 0.2

## strings
- holds a list of characters
- str.length
- str[0]
- String()
- String static methods
  - String.fromCharCode(64)
- methods
  - str.split('');
  - str.toLowerCase()
  - str.substring(0,1)
  - str.indexOf('foo')
  - str.charCodeAt(1)

## Math
- Math.PI
- Math.max(1, 3)
- Math.random()
- Math.abs(-3)
- Math.sign(-3)
- Math.round(10 / 3)
- Math.ceil(10 / 3)
- Math.floor(10 / 3)
- 100 * Math.round(7.03) / 100
- Math.sqrt(10 / 3)
- Math.sin(Math.PI / 2)
- Math.cos(0)


## Resources

- [MDN Javascript guide](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [MDN Javascript reference](https://developer.mozilla.org/bm/docs/Web/JavaScript)

## Ironhack Learning Platform

- [LU - Javascript Introduction](http://learn.ironhack.com/#/learning_unit/3012)
