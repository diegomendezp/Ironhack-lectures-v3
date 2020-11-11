# Node



## Lecture Brief

- V8 Engine:

  - written in C++

  - used in Browser with Web APIs, 

  - converts JS to machine language.

    

- NodeJS environment:  V8 engine with added C++ functionality ,so that it can run on the server.

  

- What can NodeJS do: 

  -  create a server, 

  - load multiple files as modules, 

  - I/O  - working with files,

  - work with databases, 

  - listen to HTTP messages & send HTTP messages. 

- Check if NodeJS is installed `node --version` & `npm --version`

- What is a CLI  ?

-  Once installed NodeJS comes automatically with the `npm`.

- Run a `test.js` file  that `console.log`s, from terminal with `node`.

  

- NPM - node package manager:

  -  What is it?  - 

    - It is a CLI - package manager software, 

    - JS packages (files) repository,

      

  - Play **NPM Intro video**.

  - NVM - is a node version manager - used to manage which version of NodeJS is installed.

  - NodeJS installation comes with `npm` bundled.

  - Check what version of `npm` you have - `npm --version` .

    

- Installing packages:

  - Initialize `npm` in our project that creates `package.json` - `npm init` 

  - Show and explain `package.json`

  - Explain `npm install <package>` vs `npm install --save ` vs `npm install --save-dev`

  - `dependencies` vs `devDependencies`  in the running/deployed apps vs development.

  - Install `chalk` as dependency: `npm install --save chalk`

  - Install `nodemon` as devDependency: `npm install --save-dev nodemon`

    

- Setup `.gitignore` to prevent commiting `node_modules` dir.

- NodeJS `require / module.exports`  and  ES6 `import/export`

- Extra: `npm publish` can be used.





<hr>



## Lecture *** 







## V8 The Javascript engine - (at the heart of Node.js)

Machine language is a language that your computer processor speaks and it is very low level.



### [OPEN IMAGE](https://vaibhavguptame.files.wordpress.com/2018/01/browser1.png)



![](<https://vaibhavguptame.files.wordpress.com/2018/01/browser1.png>)



- Google's V8 engine is a JavaScript Engine written in C++.

- V8 engine converts JavaScript into machine language and gives it to the processor.

- V8 was initially made to be used in the browser. But as V8 is essentialy a C++ program it can also be run alone and paired with other C++ code. 

  This means that you can use the V8 code and combine it with another C++ application / program.







<br>



## NodeJS with V8

### [OPEN IMAGE](https://www.oscarblancarteblog.com/wp-content/uploads/2017/05/NodeJS-Architecture.png)





Node.js is a V8 engine with some additional C++ code added, that enables you to run JavaScript outside of the browser.  



![](https://www.oscarblancarteblog.com/wp-content/uploads/2017/05/NodeJS-Architecture.png)





<br>

#### Node provides features that are not available in the browser, like:  

- ##### creating a server.

- ##### ability to accept HTTP requests and send HTTP responses.

- ##### loading multiple JavaScript files as modules.

- ##### Working with files (write to the hard drive, load files).

- ##### Working with databases.

  

Node.js is a JavaScript runtime environment and  server technology and, it is not a framework nor a programming language.





<br>

### Check if you have Node.js installed



```bash
node --version
# Returns the version of the NodeJS if installed
# 12.13.0

npm --version
# Returns the version of the npm
```





## Installing Node.js (if not installed)

#### [~~nvm - Instructions~~](<http://materials.ironhack.com/s/BySQC2fpVE7#installing-node>)

### [nvm - official instructions](https://github.com/nvm-sh/nvm#installing-and-updating)





#### [NodeJS - official page](https://nodejs.org/en/)



<br>





### CLI

When working with node.js you will be working with it from the Command Line Interface , CLI .

Command Line interface - Program where you type things in your computer rather than clicking - example Bash on Linux, Terminal on Mac, Command Prompt on Windows.



<br>



### Using NodeJS



##### Create a file `test.js`

```bash
mkdir 00-node-intro && cd 00-node-intro


touch test.js

code .
```





##### Add some content to the `test.js`



##### `test.js`

```js
console.log("Hello Node");
```



##### Run the file from the terminal:

```bash
node test.js
```



<br>







## NPM - node package manager and modules

<br>

### What is  node package manager?



### https://www.npmjs.com/about



- `npm` is a Node Package manager that enables us to download and install different JavaScript files called 'packages' or 'modules' into our project.
- Other alternative package manager is Yarn, however yarn is out of scope of this lecture and we will be using only `npm` as our package manager during the bootcamp.



<br>



### `npm` consists of 3 things:

1. `npm` CLI used to get the packages and it is also a server for all the packages.

2. `npm` registry that is the database used to keep and serve the packages.
3. <u>npm website</u> - NPM  documentation. It aslo contains information for every published package.



<br>



### Packages (modules)



- **Modules** aka packages are bundles of reusable code that are packaged with any of the code they depend on (dependencies). 



- One package can be build of several other packages. We call them dependencies, when one package depend on others to be installed as well.



- When an `npm` package that we are using is updated by the package owner, we get the notification that package in our app needs an update. In this way maintaining the code is more sustainable.





Packages aka modules start from silly things such as getting the funny **vaca** printed on your terminal to an entire framework like React that you can get and install in your project.



<br>



To check if your npm was installed with node, in your terminal run :

```bash
npm --version
```



<br>



## [Get Started with `npm` - npm intro video](https://www.youtube.com/watch?v=pa4dc480Apo) (3 min)



<br>





## Installing packages

- In order to install packages in our project we have to create a `package.json` file. 

- `package.json` is a manifest file that tells Node and us, what packages (aka dependencies) are installed in our project.





#### `npm init` creates a `package.json` file

```bash
mkdir 01-npm-getting-started  &&  01-npm-getting-started

touch index.js

code .
```





While in the project folder, run the following command in the terminal:

```bash
npm init -y
```



<br>



`npm init`  without the `-y` flag will initiate a prompt of questions to be answered for the setup of the `package.json` file. 

With `-y` flag those questions are populated by defaukt.



<br>





```bash
npm install --save chalk
```



#### What happens when we run the above command ?

1. `npm install` grabs the package from the npm servers

2. Package is also aded to the list of `dependencies` in the projects `package.json`.

3. If not existing already, the`node_moudles` folders is created. This is where the acctual code for all packages is stored.



We can install a module but set it on the list of `devDependencies` which are packages that we will use only during the development phase. Not in production.

```bash
npm install --save-dev nodemon
```



1. `npm install` grabs the package from the npm servers

2. `--save-dev` flag will add the package  to the list of `dev-dependencies` in the projects `package.json`.

   

<br>



### Differences between:

###  `npm install` ( same as  `npm install --save` ),

and

###  `npm install --save-dev`





<br>



1. `npm install` will install the npm package to the `node_modules` folder  without adding it to the `package.json`

   

2. ~~`npm install --save` - legacy ( same as `npm install`)~~



3. `npm install --save-dev` - package(s) required for development purpose.



<br>



### `dependencies`

`dependencies` are 3rd-party packages that the application needs in order to run or function. 

These packages will be deployed with the production version of the app and will be downloaded to the user’s browser cache whenever someone uses the app/website. In case of the back-end apps `dependencies` are installed during the deployment and are required on the machine instance where the server is running. 



### `devDependencies`

`devDependencies` are used only during the development of the app, only by the developers of the in order to build and test the app. These packages are not deployed in the production version and will not be downloaded to the browser cache of end users or to the server in case of the back-end apps.



<br>





<br>



## NodeJS Modules



<br>



### Node `require() / module.exports`  

### VS  

### ES6 `import / export`



<br>

#### NodeJS - `require()` / `module.exports`

`require` is the standard module loading API for the *NodeJS*, which means that in order to load or export a file/module in NodeJS environment, we have to use the `require` and `module.exports` statements.



<br>



#### ES6 - `import`  / `export`

 

ES6 introduced `import` and `export` syntax, however for this to work on our NodeJS project we have to setup `Babel` transpilation (translating) of the code from `import/export` syntax to `require` syntax that NodeJS uses.



<br>



### Use the installed package

Let's use our package.

To import a module and use it in our script we use the NodeJS' built in`require()` method.



##### `index.js`

```js
const chalk = require('chalk');

// console.log('Hello Node'); 

console.log(chalk.green('Hello ironhackers'));
console.log(chalk.yellow.bgRed.bold('Hello ironhackers'));
```



<br>



##### Run the script using NodeJS

```bash
node index.js
```



<br>Check out the *chalk* package `npm` page - https://www.npmjs.com/package/chalk



<br>



#### Exporting a module `module.exports` con

Let's create a file that will contain greeting messages that we want to use.

```bash
touch greetings.js
```



##### `greetings.js`

```js
const greetings = {
  en: 'Hello Ironhackers',
  es: 'Hola Ironhackers',
  de: 'Hallo Ironhackers',
  fr: 'Salut Ironhackers',
  it: 'Ciao Ironhackers'
};

/* 
We export the `greetings object` in order 
to be able to require it from another file.
*/

 module.exports = greetings;
```



We can now load the exported module/file in our `test.js` file



##### `index.js`

```js
const chalk = require('chalk');
const greet = require('./greetings'); // .js extension is not compulsory
/*

greet = {
  en: 'Hello Ironhackers',
  es: 'Hola Ironhackers',
  de: 'Hallo Ironhackers',
  fr: 'Salut Ironhackers',
  it: 'Ciao Ironhackers'
}

*/


console.log(greet.en);
console.log(greet.es);
console.log(greet.de);
console.log(greet.fr);
console.log(greet.it);


// Printing colored output using `chalk`
console.log( chalk.whiteBright.bgBlue.bold(greet.en) );

console.log( chalk.yellow.bgRed.bold(greet.es) );

console.log( chalk.bgYellowBright(greet.de) );

console.log(
  chalk.whiteBright.bgBlueBright(greet.fr.split(' ')[0]),
  chalk.whiteBright.bgRed(greet.fr.split(' ')[1]),
);

console.log(
  chalk.whiteBright.bgRed(greet.it.split(' ')[0]),
  chalk.whiteBright.bgGreen(greet.it.split(' ')[1]),
);

```



<br>



### Install `vaca`

https://github.com/sindresorhus/vaca

###  

<br>





## [Exercise - Initialize npm and install a package](https://gist.github.com/ross-u/9eab7aa77bca58135202d8c96cb2d12f) (10 min)



<br>



### Additional Material



[Dev Dependencies vs Dependencies](https://medium.com/@dylanavery720/npmmmm-1-dev-dependencies-dependencies-8931c2583b0c) (5min read)