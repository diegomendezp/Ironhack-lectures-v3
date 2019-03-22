---
title: ES 6
date: 2018-11-12 14:57:52 +0000
weight: 1

---
## let - const - var

* Temporal Dead Zone

## Arrow functions

```javascript
const addRandom = (num) => {
  const random = Math.random();
  return num + random;
}

const doSomething = (param1, param2) => {
  return param1 + param2;
};

const arr = [1, 2, 3, 4];
const newArr = arr.map((item) => item + 1);
```

**syntax**

```javascript
const arrow = () => {
  // ...
  return 'return';
}
const arrow = (parameter) => {
  // ...
  return 'return';
}
const arrow = parameter => {
  // ...
  return 'return';
}

// implicit return in one line
const arrow = () => 'return';
const arrow = (parameter) => 'return';
const arrow = () => 'return';
```

## Classes

* `class` and `constructor()`
* inheritance with `class Foo extends Bar` and `super()`

```javascript
class Foo {
    constructor(param1) {
        this.prop1 = param1;
    }
    method1() {
        console.log('method 1');
    }
}

class Bar extends Foo {
    constructor(param1, param2) {
        super(param1, param2)
    }
    method1() {
        console.log('method 1 redefined by Bar');
    }
    method2() {
        console.log('method 2 added by Bar');
    }
}
```

## Shorthand property

```javascript
const name = "foo";
const obj = { name }; // literal object
console.log(obj.name); // "foo"
```

## Template (and multiline) strings

```javascript
const name = "joe"
const html = `
    <p>hello ${name}</p>
`;
const text = `hello ${name}`;
```

## Spread operator

* array
* object

```javascript
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
arr1 = [...arr1, ...arr2];
arr1 = [...arr2]
```

### Destructuring assignment

```javascript
const person = {name: 'Joe', age: 42};
const {name, age} = person;
console.log(name, age); // Joe 33
```

### Default values for function parameters

```javascript
function increment(number, incrementBy = 1) {
  return number + incrementBy;
}
console.log(increment(2, 2)); // 4
console.log(increment(2)); // 3
```

## Best Practices

* Always const, then let, never var
* Normally arrow functions
* Use template literals

## Resources

* [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla)
* [Compatibility table ECMAScript](http://kangax.github.io/compat-table/es2016plus/)
* [MDN let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
* [MDN const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
* [MDN temporal dead zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_Dead_Zone)
* [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [MDN Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* [MDN template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [new-es2018-features-every-javascript-developer-should-know](https://css-tricks.com/new-es2018-features-every-javascript-developer-should-know/)
* [destructuring-nested-objects](https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8)

## Practice

* [http://es6katas.org/](http://es6katas.org/) (some are hard)

## Ironhack Learning Platform

* [LU - ES6 | Basics](http://learn.ironhack.com/#/learning_unit/3976)
* [LU - ES6 | Advanced](http://learn.ironhack.com/#/learning_unit/3977)