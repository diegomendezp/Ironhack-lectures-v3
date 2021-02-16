![img](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# JS | Scope

## Learning Goals

###### 

- Understanding what **scope** is and differences between scope of `let`, `const` and `var`

  








#### What is scope:

Scope determines the accessibility (visibility) of variables from different parts of the code.







* #### Global variable 




Global variables are variables declared on the first level of the program and can be accessed in the whole program.



For example `console.log` located inside of the `printName` function has access to the variables in the Global scope



```js
var first = 'john';  // global variable
var last = 'carr';			// global variable


function printName() {
  // Code from the function can access variables from the Global scope
  console.log(first + ' ' + last);
}

printName();
```





<br>



#### scope of `var` - 

`var`  variables  can have **global** or **function** (also called local) **scope**

Example





```js
var globalVar = 'I am global';

function print() {
  var localVar = 'I am local';
  
  console.log(globalVar);
  console.log(localVar);
}

print();


// local variables are not accessible from outside,
console.log(localVar);   // ==> ERROR


```



```js
if (true) {
  var x = "var from if";
}


console.log('x', x)

// var variables created outside of functions, have global scope
// even if they are created in other constructs such as if/else, for loop, etc


```





**NOTE:** When `var` variable is created, it can have either local or global scope.

If created in the function, it is locally scoped to that function, otherwise it has global scope.





<br>





#### scope of `let` and `const`



- `let` and `const` are block scoped.

- **Block** - block is any code between open and closed curly braces `{}`.

  0

  

```js
//  BLOCK SCOPE - let and const variables

if (true) {
  let a = "I am let!";
  const b = "I am const!";
}


console.log('Outside -> a', a);
console.log('Outside -> b', b);


```





If we would change them to `var`s then we will be able to print them. Otherwise, they remain scoped to the block of `if` statement.





  

<br>

#### Using `let ` in the `for` loop



```js
var i = 'something important';

for (var i = 0; i < 10; i++) {
  // do stuff
  console.log(i);
}

// Get important information
console.log(i);
```



#### vs using `let`

```js
const i = 'something important';

/*
...
*/


for (let i = 0; i < 10; i++) {
  // do stuff
  console.log(i);
}


// Get important information
console.log(i)
```









<br>



### Scope Example 

```js
const x = 1;

if (true) {
  var g = 2;
}


function outer() {
  var o = 3;
    
  if (true) {
    const b = 'B';
  }

}
```





### [OPEN IMAGE](https://i.imgur.com/n3ZWC0v.png)

![](https://i.imgur.com/n3ZWC0v.png)







<br>





### Lifetime of a variable



##### Variables in the global scope live as long as the script / program is running.

##### Local  (function) variables are created only when function is run, and deleted when the function is completed.



**Example**

```js
function incrementInside() {
	var num = 0;
  
  num++;
  num++;
  console.log('local scope - num: ', num);
}

incrementInside();

console.log('\n** Function execution ends **')
console.log('** Local variables are deleted. **\n')

incrementInside();
```







### Variable Shadowing



#### What happens when we have variables with same name in global and in local scope ?



When a variable with the same name exists in global and in the local scope, only the variable in the local scope will be available. 

We say that variables with the same name in the nested scope, shadow the ones from the hire scope.

```js
var x = 5;

function scopeTest() {
  var x = 100;
  console.log('local scope x -> ', x);  //  100
}
scopeTest();
console.log('global scope x -> ', x);  0//  5
```











### [SEE TABLE](https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript#difference-between-var-let-and-const)

| Keyword                                                      | Scope          | Hoisting | Can Be Reassigned | Can Be Redeclared |
| ------------------------------------------------------------ | -------------- | -------- | ----------------- | ----------------- |
| [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) | Function scope | Yes      | Yes               | Yes               |
| [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) | Block scope    | No       | Yes               | No                |
| [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) | Block scope    | No       | **No**            | No                |





<br>



## `let`



#### `let`  can be updated, but it can't be redeclared

  ```js
  // THIS IS OK
  let message = "This is the first message.";
  message = "This is the second message.";
  
  // BUT THIS WILL THROW AN ERROR
  let message = "This is the first message.";
  let message = "This is the second message."; // <== Duplicate declaration "message" 
  ```



#### `const` variables must be initialized in the moment of declaration.

  ```js
  const name1 = "John"; // <== CORRECT
  
  const name2;
  name2 = "John"; // WRONG! - This will throw an Error
  ```





#### `const` variables can't be redeclared or assigned new value

  ```js
  // THIS WILL THROW AN ERROR
  const message = "This is the first message.";
  message = "This is the second message."; // <== "message" is read-only
  
  // AND THIS WILL THROW AN ERROR
  const message = "This is the first message.";
  const message = "This is the second message."; // <== Duplicate declaration "message" 
  ```



#### `const` Objects and arrays can be mutated (BUT not reassigned). 

WE WILL SEE WHY IN THE NEXT LESSON ON MUTABILITY.

  ```js
  // This is ok ✅
  const obj = {};
  obj.name = "Ironhacker";
  
  // This is not 🚨
  obj = { name: "Ironhacker" };
  // SyntaxError: Assignment to constant variable
  ```

