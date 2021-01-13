# Node.js



## 01 - Basics



- Not a programming language.

- **Node.js**  **is  (=**) V8 engine + other modules with special capabilities not available in browser.
- .fs	.http,  etc...   - Node.js modules that provide us with the Server side functionality (give ability to run the code in the server environment, rather than in browser as Chrome does).
- Chrome & Node use the same engine, but provide different runtime environment.
- Node is not a framework, it is runtime environment, for executing JS.
- Node is Non blocking - asynchronous.
- Node.js is Asynchronous by default. Meaning that Node is Ideal for I/O intense apps. Not (meant) to be used for CPU intensive apps.
- `require`  is a function in Node, used to import modules.

- GLOBAL OBJECTS & FUNCTIONS:

`console` , `global` ....

- Variables are not added to the global object, they are only scopped to the current  .js file they are in.
- Each file is considered a module.
- There's always a main module. (A main .js file of your app)
- module wrapper function is an IIFE (that looks as below):

 `function (exports, require, module, __filename, __dirname) `

(meaning that a module in Node.js is an IIFE that wraps all that is in that script)



`exports` is only a reference to the property on the `module` object, which means that : 

` exports === modules.exports`









****

****

****



## File System



## fs.readFileSync( )

Reads the file specified in the path synchronously.

**<u>syntax :</u> **

```javascript
 fs.readFileSync (path [, options] );

// [...] - optional parameter
```

`path` - Must be either a string, Buffer, URL Object or integer.

`options` - This is an optional parameter and can be omitted. If used, it must be either a string or Object. Used to specify the file `encoding` or a `flag`.

```javascript
// First, we import the file system module
const fs = require('fs');

// fs.readFileSync will return a buffer Object, if encoding is not specified.
let bufferObj = fs.readFileSync('./myDir/lorem_ipsum.txt');
console.log(bufferObj);	// -> logs "lorem_ipsum.txt" as Buffer object

// fs.readFileSync will return the string, when `utf8` encoding parameter is set.
let imText = fs.readFileSync('./myDir/lorem_ipsum.txt', 'utf8');
console.log(imText);	// -> r logs "lorem_ipsum.txt" as a string	
```



****



## fs.readFile( )

*<u>Asynchronously</u>* reads the entire contents of a file.

Callback function must be specified.

**<u>syntax :</u> **

```javascript
 fs.readFile (path [, options], callback(){} );

// [...] - optional parameter
```

`path` - Must be either a string, Buffer, URL Object or integer.

`options` - This is an optional parameter and can be omitted. If used, it must be either a string or an Object. Used to specify the file `encoding` or a `flag`.

`callback` -  is given 2 parameters / arguments, `err` and `data`.  

* `err`  - represents the Error object that will be thrown in case an error occurs inside the callback.
* `data` - represents the contents of the file that will be returned upon successful completion of the asynchronous call.

```javascript
// First, we import the file system module
const fs = require('fs');

let text = fs.readFile('./myDir/lorem_ipsum.txt', (err, data) => {
  //	set an `if` condition to handle the possible error
  if (err) throw err;
  
  // as encoding is not specified, `data` is a Buffer object
  // to convert it to a string we use Buffer method `toString()`
  let result = data.toString();
  console.log(result);
});
```



## fs.readdir()

Asynchronously reads the contents of a directory.

```javascript
fs.readdir( path [, options], callback)

// [...] - optional parameter
```

`path` - Must be either a string, Buffer or URL Object.

`options` - This is an optional parameter and can be omitted. If used, it must be either a string or an Object.  Used to specify the file `encoding` ( by default set to `utf8`) or to set `withFileTypes` ( by default set to `false` ).

`callback` -  is given 2 parameters / arguments, `err` and `files`.  

- `err`  - represents the Error object that will be thrown in case an error occurs inside the callback.
- `files` - is an array of the names of the files in the directory, returned upon successful completion of the asynchronous call

```javascript
const fs = require('fs');

//	path is set to the current directory './'
fs.readdir( './', (err, filesList) => {
  //	set an `if` condition to handle the possible error
  if (err) throw err;
  
  //	iterate over the array of file names, and log each name
  filesList.forEach( (fileName) => {
    console.log(fileName);
  });
});
```

