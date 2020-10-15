![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_d5c5793015fec3be28a63c4fa3dd4d55.png)

# JS | Data Types in JavaScript - 

# boolean, undefined & null  and Logical Oprators

## Learning Goals

After this lesson you will be able to:

- Use boolean as data type

- Use undefined and null as a data types

- Understand and use logical operators

  





## A boolean as data type

A **Boolean** or **bool** has a value of **TRUE** or **FALSE**.

A boolean expression is an expression that returns `true` or `false` 

Booleans are often used in conditional statements.



```js
// Boolean 

var booleanTrue = true;
var booleanFalse = false;

console.log(booleanTrue); // true
console.log(booleanFalse); // false

console.log(10 > 1)   // true
console.log(10 < 1)   // false
```







## Truthy and Falsy values - Coercion



#### Falsy values

Certain values when evaluated in some scenarios will be automatically converted aka coerced to a Boolean **false**.

The coersion to falsy or truthy happens in scenarios of : **if/else** statements, logical operators and **loops**.



There are 8 falsy values. 



| FALSE                                                        | The keyword [false](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Future_reserved_keywords_in_older_standards) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 0                                                            | The number [zero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) |
| -0                                                           | The number negative [zero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) |
| ""                                                           | Empty [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) value |
| [null](https://developer.mozilla.org/en-US/docs/Glossary/null) | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) - the absence of any value |
| [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined) | [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) - the primitive value |
| [NaN](https://developer.mozilla.org/en-US/docs/Glossary/NaN) | [NaN ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)- not a number |
| 0n                                                           | [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt), when used as a boolean, follows the same rule as a Number. 0n is *falsy*. |





#### Truthy values



All values are truthy, except the ones defined as [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy), aka the list we showed previously.

A simplified way to think about it is: 

​       ***If the value is not found on the falsy list, it is automatically truthy.***







#### Coercion

Coercion or “Type coercion” is the automatic conversion of values from one data type to another, such as strings to numbers.



With falsy values mentioned previously, we saw that in certain scenarios JS automatically converts data types into a Boolean value.



Similar thing happens with == operator, which allows a silent coercion (change of data type) of the operand values.



```js
5 == '5';  // true     ==  allows coercion

5 === '5'; // false
```

















## Logical operators

We use logical operators to combine multiple conditions and to get as a result a **true** or a **false**.

We have three different logical operators: **OR**, **AND** and **NOT**.





#### AND Operator (`&&`)

The **AND** operator, represented by `&&`, returns true just if **BOTH evaluated expressions are `true`**..

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

NOT operator, represented by **!** is used to negate the value of an expression.



It can also be used to convert any value to an opposite Boolean.

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

```js
let name;
console.log(name); // <== undefined
```







## A `null` as data type

In CS, a **null** value represents a reference that points to a nonexistent memory address, meaning that no value exists.



In JavaScript, `null` is an assignment value. It can be assigned to a variable as a representation of no value.

We typically use to initialize the variable in which we want to store an object later.

```js
let name = null;
console.log(name); // <== null
```





### 	`typeof null` is "object"

**This stands since the beginning of *JavaScript*** `typeof null === 'object';` 

 You can consider it a *bug* in *JavaScript* that typeof *null* is an object.

This is a **bug**, that unfortunately can't be fixed, because it would break existing code.



#### [ECMA Specs - Data types `typeof`](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.3)



```js
console.log(typeof null);
```







### ~~Primitive data types are copied by value~~

~~Important to remember, in JS all primitive values are passed by value.~~ 

~~Meaning when assigning a primitive value, the copy of the value is created and assigned to another variable.~~

```js
var myNumber = 10;
var numberCopy = myNumber;  // Number 10 value is copied into another variable

var myName = 'Sarah';
var nameCopy = myName;	// String 'Sarah' is copied into another variable
```





~~Why did we mention this? Because objects which are non primitives are not being copied. We will talk about them in the upcoming days.~~





## Summary



## Extra Resources

- [MDN - Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [MDN - undefined as data type](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)
- [MDN - null as data type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
- [MDN - Difference between null and undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null#Difference_between_null_and_undefined)
- [MDN - Mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)