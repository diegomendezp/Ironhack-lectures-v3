# Create React App





**Create React App** is a tool and a CLI to help you build React applications. 

It saves you from time-consuming setup and configuration.



We call it a **setup toolchain** for React applications.



It requires Node.js version 10 or later.



<br>



### Create React App is divided into two packages:

- **create-react-app** which is a global command-line utility that is used to create new projects,
- **react-scripts** which is a development dependency in the created project.





When you run `create-react-app`, it will always create the project with the latest versions of `react` and `react-dom` packages automatically.





## Create our App



```bash
 npx create-react-app my-new-app
 
 cd my-new-app
```



#### SIDE NOTE:

 If having issues with `npx` try first installing it globally by running `npm install -g npx`. [Info](https://www.npmjs.com/package/npx).





it will generate the initial project structure and install the needed dependencies for running the React in development and also for bundling it later:





```js
📂my-app
┃
┣ 📂public
┃ ┣ 📜favicon.ico
┃ ┣ 📜index.html
┃ ┗ 📜manifest.json
┃
┣ 📂src
┃ ┣ 📜App.css
┃ ┣ 📜App.js
┃ ┣ 📜App.test.js
┃ ┣ 📜index.css
┃ ┣ 📜index.js
┃ ┣ 📜logo.svg
┃ ┗ 📜serviceWorker.js
┃
┣ 📜.gitignore
┣ 📜package-lock.json
┗ 📜package.json
```



<br>



### Run the create-react-app development server:



Inside the newly created project, you can run some built-in commands:

#### **`npm start`** or **`yarn start`**







#### Best Part?   -->	 Hot Reload



 The page will automatically reload if you make changes to the code. 

You will see the build errors and lint warnings in the console. No `Webpack` configuration needed.





<br>



### Importing a Component

- By default, the project setup supports `ES6 modules` thanks to `Babel`.

  

- Babel transpiles **ES6** js code to the **ES5** syntax, that all browsers and environments support and can be run everywhere.

  

- While you can still use `require()` and `module.exports`, React developers encourage us to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html#sec_importing-exporting-details)instead.



- `export default` is used to export only one module as the default single value.

  

- Syntax for exporting multiple variables is:  `export { varName1, varName2, obj1, func1 }`



For reference visit: [MDN - ES6 export](<https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export>)      or   [MDN - ES6 import](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Syntax>)





<br>



### Splitting the Code



- Create a `components ` folder which will hold all components that we make. 

- `App.js` is a root component.
-  `index.js`  connects React (injects rendered components in to the DOM).
- `index.js` and `App.js` have to stay in the `src/` folder on the root level, as webpack is configured to will load them from this location.



```js
	📂src
  ┃
	┣ 📂components
	┃ ┗ 📜Header.js
	┃
	┣ 📜App.css
	┣ 📜App.js
	┣ 📜App.test.js
	┣ 📜index.css
	┗ 📜index.js
```





<br>



### Create a new component `<Header />` .



##### `src/components/Header.js`

```js
  // src/components/Header.js

import React from 'react';

// importing logo from src folder - loaded as a file in the bundle
import logoFileFromSRC from '../logo.svg'; 

// Logo served from the public folder by the development server
const logoPublicUrl = '/logo512.png';


function Header (props) {
  return (
    <header className="App-header">
    
      <img src={logo} className="App-logo" />
    
      <h1 className="App-title">Welcome to React {props.name} !</h1>

      <h3>You are ready to take this to the next level!</h3>

    </header>
  );
}

export default Header;
```





<br>





### Import **Header** in the `App.js` and remove the default code.



##### `src/App.js`

```js
// App.js

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="John"></Header>
      </div>
    );
  }
}

export default App;
```





<br>





### [EXERCISE - Pass the props (10 min)](<https://gist.github.com/ross-u/486f628ca631825a340cd2d118436bef>)



#### Solution



##### `src/components/Header.js`

```jsx
// src/components/Header.js

import React from 'react';
import Title from './Title.js';
import Description from './Description.js';

// importing logo from src folder - loaded as a file in the bundle
import logoFileFromSRC from './../logo.svg';

// Logo served from the public folder by the development server
const logoPublicUrl = '/logo512.png';

function Header(props) {
  return (
    <header className="App-header">
      <img src={logoPublicUrl} className="App-logo" />

      {/*  Pass the data via the `appTitle` prop*/}
      <Title appTitle="Welcome to React, Ironhacker!" />
      
      {/*  Pass the string using composition - enclosed between the component tags*/}
      <Description>You are ready to take this to the next level!</Description>
    </header>
  );
}

export default Header;

```







<br>



### Adding Images, Fonts, and Files



 Example 		**src/components/Header.js**

```js
import logo from '../logo.svg';

<img src={logo} className="App-logo" alt="logo" />
```



With Webpack, static assets like images and fonts can be **imported right inside a JavaScript module**.



When creating the build webpack will include the files in the build folder.

This tells Webpack to include that file in the bundle. 



Importing a file gives you a string value. 



This value is the final path you can reference in your code, e.g., as the `src` attribute of an image or the `href` of a link to a PDF.



This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.







### [ Docs Repo: create-react-app package](<https://github.com/facebook/create-react-app>)



<hr>

### Additional Resources



#### [`react-scripts` package](https://stackoverflow.com/a/50722201/6375464)