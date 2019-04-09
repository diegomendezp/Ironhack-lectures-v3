# JS | Debugging, Error Handling and JS Hint



## Strict mode

JavaScript can be made a *little* stricter by enabling *strict mode*. This is done by putting the string `"use strict"` at the top of a file or a function body. Here’s an example:

- Disallows unnamed variables
- disallows putting multiple parameters in function with the same name.
- blocks use of certain problematic language features entirely (`with` statement)
-  and more ...





### In short, putting `"use strict"` at the top of your program rarely hurts and might help you spot a problem.









```js
'use strict';
function canYouSpotTheProblem() {
    for (counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}
canYouSpotTheProblem();

// → ReferenceError: counter is not defined
```





### Using the console

The console could be used as [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop): We can write and execute code immediately .

We can write some code in the console and press the *Enter* (`return`) key. The code will be interpreted and the output will be shown.





#### How to use: `console.log`

The `console.log` method allows us to print values into the JavaScript console. By printing values at different points in your code, you can inspect its behavior.



Note that `console.log` **displays the parameters**, but **returns undefined**.



## Debugging in the browser



### The Chrome DevTools debugger

- **Elements**: HTML DOM & CSS 
- **Console**: JavaScript REPL
- **Network**: Inspect Network requests
- **Profiles**: Performance monitoring by inspecting the memory use of our application
- **Application**: Access to the browser services (LocalStorage, cookies, Cache Storage, Service Workers, etc.)
- **Timeline**: Records how our page loads in time
- **Sources**: All resources of a page (HTML, CSS, JavaScripts, images, etc.)



### The Sources Tab

Another useful tool that Chrome DevTools offer us is the Sources Tab. In this section, you will be able to inspect the files loaded in your web app, 

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_eafbd53c4ad5c915e4fbf4e114ff708d.png)







To follow the rest of this lesson, **clone this repo**:

```bash
$ git clone https://github.com/ironhack-labs/lab-javascript-debugging-error-and-js-hint
```





Open index.html of the project in your console

### 1.   Errors displayed in `console`

When there’s an error while our script is executing, the console will show us the error:

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_dab71c5fbe8047ae7f1a5eafdc3bc09e.png)



#### 2. In our console and the error we can see 2 things:

**Error Description** and the **Error location** (**file and line number** where the error exception was thrown)





#### 3.  click on the location to display the file in the Sources bar







### 4. Execution control: Set a Breakpoint (in Sources tab - code)



If the Error is not obvious we may want to inspect the code line by line.

To do this we **set the Breakpoints** in the code (**Sources** Tab)



#### 5. Controls



- ![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_dda3910d63979531f8f9fd65e26c49c2.png) **RESUME**: Resumes execution up to the next breakpoint. If no breakpoint is encountered, normal execution is resumed.

  

- ![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_253b4931c4b8e00c7a43e94ca77052ae.png) **STEP OVER:** Executes whatever happens on the current line and jumps to the next line.

  

- ![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_6ac4f2c4c7987bab35537212c34edd0d.png) **STEP INTO:** If the next line contains a function call, *Step Into* will jump to and pause that function at its first line.

  

- ![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4ee5d6880bbf22f6422a49055505f53f.png) **STEP OUT:** Executes the remainder of the current function and then pauses at the next statement after the function call.

  

- ![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1f7c0535b8d0c8aa4c9b7a0e33c75306.png) **DEACTIVATE BREAKPOINTS**: Temporarily disables all breakpoints. Use to resume full execution without actually removing your breakpoints. Click it again to reactivate the breakpoints.



#### 6. Excercise - 



```js
// init()` function needs to be debugged as it returns `NaN` and is expected to return a number.

// Set breakpoint in **Sources** Tab for the file `init.js` at the function call `init ();` on line 43.

// Add variables `sum` , `subs`, `mult`, `div` and `result` to the  "Watch" list.

// Debug the code using "Step(F9)" to go line by line and find the bug.  Make the  `init()` function work properly and return a number.
```









## Try… Catch Statement

The [try … catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statement is used to `try` executing a piece of code, where if there is an Error the `catch` block catches it and lets you handle the Error, without stopping the script execution.



##### The `try` statement lets you test a block of code for errors.

##### The `catch` statement lets you handle the error. 

`catch` statement gets whatever the `throw` sends to it.

##### The `throw` statement lets you create custom errors.

##### The `finally` statement lets you execute code, after try and catch, regardless of the result.



```js
function checkNumber(x) {

  try { 
    if(typeof x === "string"){
      throw "it is a string :( "; 
    }
    else if (typeof x === 'object') {
      throw new Error('Value is an object! Expected a number.')
    }
    else if (x < 5)  {
      throw "too low  :( ";
    }
    else if (x > 10) {
      throw "too high";
    }
  }
  catch(err) {
    console.log(err);
  }
}
```



##### The `try` statement lets you test a block of code for errors.

##### The `catch` statement lets you handle the error. 

`catch` statement gets whatever the `throw` sends to it.

##### The `throw` statement lets you create custom errors.

##### The `finally` statement lets you execute code, after try and catch, regardless of the result.







### `debugger;`

When the debugger is invoked, execution is paused at the debugger statement. It is like a breakpoint in the script Source Tab, but we can write it in our code.







## Most common Exception types  (Errors)

- **ReferenceError:** Raised when an invalid reference is used.
- **SyntaxError:** Raised when a syntax error occurs while parsing JavaScript code.
- **TypeError:** Raised when the type of a variable is not as expected.







## JS Hint

[JSHint](https://jshint.com/) is a tool used for analyzing JavaScript source code and warns about quality problems.

To use it, we suggest just simply visiting <https://jshint.com/> and paste your code there.
Also you should add *jshint* extension in your VS Code editor.