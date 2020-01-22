# JS | Testing & Jasmine





### Create the folder structure

```bash
mkdir jasmine-testing-intro

cd jasmine-testing-intro

touch index.html index.js

code .
```



<br>



## TDD

TDD is an approach to writing software where you write tests **before** you write application code.

The primary goal of TDD is to make the code clearer, simple and bug-free.

The simple concept of TDD is to write and correct the failed tests before writing new code (before development). 

**Tests are nothing but requirement conditions enforced through the suite of tests**, which need to be fullfilled by a program/feature before considered ready. 

**TDD ensures that all business, security, performance ( even safety ) requirements are met.**







### 3 Phases of TDD



![img](https://www.izenbridge.com/wp-content/uploads/2014/05/phase11.png)



### [OPEN IMAGE](https://www.izenbridge.com/wp-content/uploads/2014/05/phase11.png)





TDD is composed out of three steps:

1. **RED PHASE**: Write tests and **watch them fail**. This methodology is properly applied when we make sure the test fails and we have to be forced to fix it. - **red**

2. **GREEN PHASE:** Write the simplest, easiest possible code to make the test pass. STtart by writting code to pass 1st test and so on in order. - **green**

3. **REFACTORING PHASE:** Refactor and simplify the application code, implement necesarry design patterns, and optimizations. Refactor the code to improve the maintainability following clean code practices, all without breaking the test. - **refactor**

   



These steps are followed once and again in a loop until we finish the method. To remember them you can use the TDD mantra: *red, green, refactor*.





### Why TDD? 

- Helps to create bug free code.
- Ensures better code design, redability and maintainability.
- Provides proper refactoring environment, ensuring code can be updated without breaking the existing features.
- 



### SIMPLE TESTS - Using `console.log`



```js
// Create a function that converts cents to decimal value

function centsToDecimals(centValue) {
	// ... your code here
  return null;
}



// Test Specs:


// Description:
// function centsToDecimals:



// Tests
// Should return undefined when the parameter passed is a string

// Should return undefined when NaN or undefined value is passed as a parameter

// Should return undefined when the parameter is not passed

// Should convert value from cents to floating point number with 2 decimals

// Should return a string representation of a number with `$` sign appended at the end

```



<br>



### Step 1 - RED PHASE: 

### Write the tests that fail



```js
// STEP 1 - Write the tests that fail

// Test Specs:

// Description:
console.log(
  "%c function centsToDecimals() :",
  "background: black; color: white"
);

// 1
console.log("\n -->  should return undefined when parameter passed is a string");
console.log(centsToDecimals("abcdef") === undefined);
console.log(centsToDecimals("1000") === undefined);


// 2
console.log(
  "\n -->  should return undefined when NaN or undefined value is passed as a parameter"
);
console.log(centsToDecimals(undefined) === undefined);
console.log(centsToDecimals(NaN) === undefined);


// 3
console.log("\n -->  should return undefined when the parameter is not passed");
console.log(centsToDecimals() === undefined);


// 4
console.log(
  "\n -->  should convert value from cents to a string, representing floating point number with 2 decimals"
);
console.log(centsToDecimals(1000).slice(0, 5) === "10.00"); 
console.log(centsToDecimals(50273).slice(0, 6) === "502.73");
// Instead of the entire string, we just want numbers without currency   -> 10.00$


/*  4 - Refactored (later)
ADDING MOCK DATA AND REFACTORING THE TEST

var mockAmount1 = 1000;
var mockAmount2 = 50273;

var assertion1 = centsToDecimals(mockAmount1).slice(0, mockAmount1.length - 1);

var assertion2 = centsToDecimals(mockAmount2).slice(0, mockAmount2.length - 1);


console.log(assertion1 === "10.00");
console.log(assertion2 === "502.73");

*/


// 5
console.log(
  "\n -->  should return a string representation of a number with `$` sign appended at the end"
);
console.log(centsToDecimals(0) === "0.00$");
console.log(centsToDecimals(999) === "9.99$");

```





<br>



### Step 2 - GREEN PHASE: 

### Write the code to pass the tests in order, starting from the 1st test and further





#### Pass Test 1

```js
// STEP 2

// Test 1 - if parameter is a string
function centsToDecimals(centValue) {
  if (typeof centValue !== 'string') return undefined;

  return null;
}

```



<br>



#### Pass Test 2

```js
// STEP 2

// Test 2 and 1 - if parameter is NaN or undefined or string
// Refactor the previous code:

function centsToDecimals(centValue) {
  if (typeof centValue !== 'number' || isNaN(centValue)) {
    return undefined;
  }
  
  return null
}



```





<br>



#### Pass Test 3 -  

##### This test passes automatically due to the last code we wrote





<br>





#### Pass Test 4 - 

```js
// STEP 2

// Test 4
// Refactor the previous code 
function centsToDecimals(centValue) {
  if (typeof centValue !== 'number' || isNaN(centValue)) return undefined;

  let result = centValue / 100;					// <-- ADD

  return result.toFixed(2);				// <-- UPDATE
}




```





<br>



#### Pass Test 5 -

```js
// STEP 2

// Test 5
// Refactor the previous code 
function centsToDecimals(centValue) {
  if (typeof centValue !== 'number' || isNaN(centValue)) return undefined;

  let result = centValue / 100;

  return result.toFixed(2) + "$";				// <-- UPDATE AND ADD "$"
}
```





<br>



### Step 3 - Refactoring Phase

Until now the goal was to write code to get the unit tests to pass. 

We weren’t considering other aspect like design patterns, maintainability of code, code quality and readability. 

The focus of this phase is to look at these because you have covered business requirement in the form of unit tests. 



# Jasmine

![img](https://i.imgur.com/A1pop7h.png)

Jasmine is an automated testing framework for JavaScript. It is designed to be used in BDD (behavior-driven development) programming which focuses more on the business value than on the technical details.





### Getting Jasmine (only explain - no demo)



Jasmine is usually installed as a module via   npm - node package manager, however we can also download the zip file containing the Jasmine testing library.



### Jasmine testing library zip is available on: <https://github.com/jasmine/jasmine/releases>

#### To include Jasmine from the zip file, download and extract in the root of the project the `jasmine-standalone-*.*.*.zip` file





<hr>





# Exercise - Jasmine Testing (20 min)



### Students should clone the repo:

### [Jasmine Testing Exercise](https://github.com/ross-u/Jasmine-Testing)



### 1. Create a file `hello-ironhacker.js` in the `.src` folder

### 2. Create a following function in that file:



```js
function helloIronhack () {
  return "Hello Ironhackers!";
}
```





#### 3. Let's write the test -  In the `/spec` folder, create a file `hello-ironhacker-spec.js`

#### 4. In the `hello-ironhacker-spec.js` write the test 

```js
describe("Hello Ironhack function", function () {
  it("Greets an Ironhacker", function() {
    expect(helloIronhack()).toEqual("Hello Ironhacker!");
  });
  
    it("Returns a string", function() {
    expect(typeof helloIronhack()).toEqual("string");
  });
});
```







#### 5. In the `SpecRunner.html` add the  script with the code and script with test specs:

```html
<!-- SpecRunner.html -->

  <!-- include source files here... -->
  <script src="src/hello-ironhacker.js"></script>

  <!-- include spec files here... -->
  <script src="spec/hello-ironhacker-spec.js"></script>
```



#### 7. Make the test pass









## **EXERCISE - rewrite the simple `console.log` tests assertions using Jasmine **



<https://github.com/ross-u/Jasmine-Testing>





**SOLUTION**

```js

describe("centsToDecimals function", function () { // Describes the suite / group of tests
  it("Returns undefined when parameter passed is a string", function () {
    expect(centsToDecimals('abcdef')).toEqual(undefined);
  });

  it("Returns undefined when parameter passed is a string containing number characters", function () {
    expect(centsToDecimals('12345')).toEqual(undefined);
  });

  it("Return undefined when NaN value is passed as a parameter", function () {
    expect(centsToDecimals(NaN)).toEqual(undefined);
  });

  it("Return undefined when undefined value is passed as a parameter", function () {
    expect(centsToDecimals(undefined)).toEqual(undefined);
  });

  it("Return undefined when parameter is not passed.", function () {
    expect(centsToDecimals()).toEqual(undefined);
  });

  it("Return undefined when parameter is not passed.", function () {
    expect(centsToDecimals()).toEqual(undefined);
  });

  it("Should convert a number of cents to a string represenation of a floating point number.", function () {
    expect(centsToDecimals(1000).slice()).toEqual("10.00$");
  });

  it("Should convert a number of cents and return a string represenation of a floating point number.", function () {
    expect(centsToDecimals(0).slice()).toEqual("0.00$");
  });

  it("Should return a string representation of a number with `$` sign appended at the end.", function () {
    expect(centsToDecimals(50273)).toEqual("502.73$");
  });
});

```