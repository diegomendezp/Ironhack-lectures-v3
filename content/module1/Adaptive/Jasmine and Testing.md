# JS | Testing & Jasmine





## TDD

TDD is an approach to writing software where you write tests **before** you write application code. It is composed by three steps:

1. Write a test and **watch it failing**. This methodology is properly applied when we make sure the test fails and we have to be forced to fix it. - **red**
2. Write the simplest, easiest possible code to make the test pass. - **green**
3. Refactor and simplify the application code, without breaking the test. - **refactor**

These steps are followed once and again in a loop until we finish the method. To remember them you can use the TDD mantra: *red, green, refactor*.





Why TDD? The answer is “because it is the simplest way to achieve both good quality code and good test coverage.”



### SIMPLE TESTS - Using `console.log`



```js
// Create a function that converts cents to decimal value
// Function should return undefined when parameter passed is a string
// Function should return undefined when NaN or undefined value is passed as a parameter
// Function should return undefined when parameter is not passed
// Function should convert value from cents to floating point number with 2 decimals
// Function should return a string representation of a number with `$` sign appended at the end

function centsToDecimals(centValue) {
	// ... your code here
}
```



```js
// STEP 1
function centsToDecimals(centValue) {
  if (typeof centValue !== 'number' || isNaN(centValue)) return undefined;

  let result = centValue / 100;

  return result.toFixed(2) + "$";
}



// SECOND STEP - Write the tests for the function

// Simple tests

console.warn(' -->  Function should return undefined when parameter passed is a string');
console.log(centsToDecimals('abcdef') === undefined);
console.log(centsToDecimals('1000') === undefined);


console.warn(' -->  Function should return undefined when NaN or undefined value is passed as a parameter');
console.log(centsToDecimals(undefined) === undefined);
console.log(centsToDecimals(NaN) === undefined);

console.warn(' -->  Function should return undefined when parameter is not passed');
console.log(centsToDecimals() === undefined);

console.warn(' -->  Function should convert value from cents to floating point number with 2 decimals');
console.log(centsToDecimals(1000) === "10.00$");
console.log(centsToDecimals(50273) === "502.73$");

console.warn(' -->  Function should return a string representation of a number with `$` sign appended at the end');
console.log(centsToDecimals(0) === "0.00$");

```









## Jasmine

![img](https://i.imgur.com/A1pop7h.png)

Jasmine is an automated testing framework for JavaScript. It is designed to be used in BDD (behavior-driven development) programming which focuses more on the business value than on the technical details.





### Getting Jasmine



Jasmine is usually installed as a module via   npm - node package manager, however at this time we will download the zip file from GitHub



```bash
mkdir jasmine-testing
cd jasmine-testing
```



### Go to <https://github.com/jasmine/jasmine/releases>

### Download `jasmine-standalone-3.4.0.zip` file





### Extract the downloaded zip file to the `jasmine-testing` directory.

### Open the `jasmine-testing` directory in VS Code -  `code .`





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