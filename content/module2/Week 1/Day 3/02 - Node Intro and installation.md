# Node





### CLI

Command Line interface - Program where you type things in your computer rather than clicking - example Bash on Linux, Terminal on Mac, Command Prompt on Windows.



When working with node.js you will be working with it from the Command Line Interface , CLI .





## V8 The Javascript engine - (at the heart of Node.js)

Machine language is a language that your computer processor speaks and it is very low level.



#### Google's V8 engine is a JavaScript Engine written in C++, and

#### it converts JavaScript into machine language and gives it to the processor.



#### It was made to be used in the browser, 

#### but V8 can run alone, and you can put it inside any another C++ application / program and combine it.



#### Node.js is a V8 engine with some additional C++ code added, that enables you to run JavaScript outside of the browser.  



#### Node provides features that are not available in the browser, like:  

- ##### creating a server

- ##### ability to accept HTTP requests and send HTTP responses

- ##### loading multiple JavaScript files as modules

- ##### Working with files (write to the hard drive, load files).

- ##### Working with databases

  

Node.js is a server technology and JavaScript runtime environemnt, it is not a framework or a programming language.







## Installing Node.js

#### [Instructions](<http://materials.ironhack.com/s/BySQC2fpVE7#installing-node>)





### Runing simple JS file with node



#### Create a file `test.js`

```js
console.log("Hello Node");
```



#### Run it with **node**

```bash
node test.js
```







# NPM - node package manager and modules

### What is a package manager.



npm is a Node Package manager that enables us to download and isntall different javascript files called 'packages' or 'modules' into our project.



It has a CLI that we use to get the packages and it is also a server for all the packages.



### **Modules** aka packages are bundles of reusable code that are packaged with any of the code they depend on (dependencies). 



One package can be build of several other packages. We call them dependencies, when one pacakge depend on others to be installed as well.



Once the owner updates the package he placed on npm, we will get the update that our package needs update. In this way maintaining the code is more maintainable.





Packages aka modules start from silly things such as getting funny **vaca** printed on your terminal to an entire framework  like React that you can get and install in your project.





To check if your npm was installed with node, in your terminal run :

```bash
npm --version
```





## Installing packages

### In order to install packages in our project we have to create a `package.json` file. 

#### This is a manifest file that tells node and us, what packages (aka dependencies are isntalled in our proejct) 





#### `npm init` creates a `package.json` file

```bash
$ mkdir npm-getting-started
$ cd npm-getting-started
$ touch index.js
$
$ npm init
```





### After answering all of the questions during `npm init` let's install our first module aka package



```bash
npm install --save chalk
```

#### `npm install` grabs the package from the npm servers

#### `--save` flag adds adds the package to our `package.json` file under `dependencies` .

#### `node_moudles` folders is then created. This is where the acctual code for all packages is stored.



If we want to have the module only for development and not for deployment, we can save it as a Development Dependency, using flag `--save-dev`

```bash
npm install --save-dev nodemon
```







### Difference between `npm install`, `npm install --save` and `npm install --save-dev`

1. `npm install` will install the npm package to the node_modules folder  without adding it to the `package.json`
2. `npm install --save` - package(s) required by the application to run
3. `npm install --save-dev` - package(s) required for development purpose.







**Never commit node_modules to git**. It will make your repository a lot larger!!

If you commit only `package.json`, any user will be able to recreate your `node_modules` by simply running `npm install`.

We use the `.gitignore` file to add `node_moudles` to the list of files and folders that will not be commited



```bash
touch .gitignore
```



```js
# Dependency directories
node_modules/
```





### Let's use our package - to import a module and use it in our script we use `require`;

```js
const chalk = require('chalk');

// console.log('Hello Node'); 

console.log(chalk.green('Hello ironhackers'));
console.log(chalk.yellow.bgRed.bold('Hello ironhackers'));
```





### Check out the *chalk* npm page - <https://www.npmjs.com/package/chalk>







## Exercise

Install a package from [this list of npm packages](https://github.com/sindresorhus/awesome-nodejs#weird), specifically the “weird” section.

Use the installed package in your `index.js`. See its documentation to learn what it can do and how to use it.





Vaca : <https://github.com/sindresorhus/vaca>