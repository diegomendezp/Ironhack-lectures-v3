// Function declaration
function sum(a, b) {
  return a + b;
}

// Anonymous Function Expression
var sum = function(a, b) {
  return a + b;
};

// Named Function Expression
var sum = function funcName(a, b) {
  // funcName identifier is visible inside the function scope
  // funcName identifier is not visible outside the function scope (in the global scope)

  return a + b;
};

// Arrow Function (Expression)
var sum = (a, b) => {
  return a + b;
};

// Concise Arrow Function (Expression)
var sum = (a, b) => a + b;
