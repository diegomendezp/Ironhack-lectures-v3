![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_d5c5793015fec3be28a63c4fa3dd4d55.png)

# JS | Data Types in JavaScript-boolean, undefined & null and Immutability

## Learning Goals

After this lesson you will be able to:

- Use boolean as data type
- Use undefined and null as a data types
- Understand primitives and immutability





## A boolean as data type

A **Boolean** or **bool** has a value of **TRUE** or **FALSE**.

A boolean expression is an expression that returns `true` or `false` 

Booleans are often used in conditional statements.



```js
console.log(10 > 1)   // true
console.log(10 < 1)   // false
```



## Logic operators

We use logical operators to combine multiple conditions and to get as a result a **true** or a **false**.

We have three different logical operators: **OR**, **AND** and **NOT**.



#### OR Operator (`||`)

Returns `true` even if only **one of the evaluated expressions is `true`**.

```js
var expr1 = true;
var expr2 = false;

expr1 || expr2	// true
```

If they both are `false`, the result of the expression will be `false`.



```js
true  || true       // => true
true  || false      // => true
false || true       // => true
false || false      // => false
false || (4 > 2)    // true
```





#### AND Operator (`&&`)

The **AND** operator, represented by `&&`, returns true just if **BOTH evaluated expressions are true**.

```js
expr1 && expr2
```

```js
true  && true       // => true
true  && false      // => false
false && true       // => false
false && false      // => false
true  && (4 > 2)    // => true
```





#### Short-circuit evaluation - ( ||,  && )

As logical expressions in JavaScript are evaluated left to right, they are tested for possible “short-circuit” evaluation using the following rules:

```js
// AND operator
false && (anything) is short-circuit evaluated to false.

// OR operator
true || (anything) is short-circuit evaluated to true.
```

The rules of logic guarantee that these evaluations are **always correct**. Note that the anything part of the above expressions is not evaluated, so any side effects of doing so do not take effect.





Example:

```js
let a = false;
let b = false;
let c = false;
let d = 4;
let e = 'five';
let result = a || b || c || d || e;

// What is the value of `result` ?
console.log(result);
```





#### NOT Operator (`!`)

Used to negate the value of an expression.

```
!expr1
```

If the expression is **true**, the result will be **false**, and vice versa.

```js
!true 		// => false
!false 		// => true
!(4 > 2) 	// => false
```





## An `undefined` as data type

**undefined** is primitive value automatically assigned to variables when they are declared.

```
let name;
console.log(name); // <== undefined
```



## A `null` as data type

In CS, a **null** value represents a reference that points to a nonexistent memory address, meaning the variable that hasn't been even declared yet.



In JavaScript, `null` is an assignment value. It can be assigned to a variable as a representation of no value.

```js
let name = null;
console.log(name); // <== null
```

### 	`typeof null` is "object"



## Immutability   -  (This can be extra, ask the students - not necesarry)

All primitive data types are **immutable**. 

Immutability means that once one of the primitive values is created, it can’t be modified.



### 	Let’s explain this:

```js
let city = "miami";
console.log(city[0]); // <== m
city[0] = "M";
console.log(city); // <== miami
```





**primitive data type values are immutable**, but <u>variables are mutable</u> which means you can reassign them:



```js
let city = "miami";
console.log(city); // <== miami

city = "berlin";
console.log(city); // <== berlin

city[0] = "B";
console.log(city); // <== berlin
```



You can reassign the variable with a new value but you can’t alter the existing primitive value.



**When we practiced the string methods, each of them returned a new string and the original string stayed untouched.**

```js
const message = "Don't be sad, be happy!";
console.log(message.slice(0,3)); // <== Don
console.log(message); // <== Don't be sad, be happy!
```

Numbers are immutable as well - but that is more a common sense, right? Obviously, if number “5” is of value “5”, it will stay forever the same value - you can’t change it.



Immutability is a very important topic in JavaScript and we will come back to it a bit later.

Objects (and arrays) are mutable data types by default  (and we will see what that in the future lessons ).







## Summary

## Extra Resources

- [MDN - Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [MDN - undefined as data type](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)
- [MDN - null as data type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
- [MDN - Difference between null and undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null#Difference_between_null_and_undefined)
- [MDN - Mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)