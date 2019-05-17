# Create React App





**Create React App** is a tool and a CLI to help you build React applications. It saves you from time-consuming setup and configuration.

We refer to it as a setup toolchain that we use for React.

It require Node.js version 10 or later.





### Create React App is divided into two packages:

- **create-react-app** which is a global command-line utility that is used to create new projects,
- **react-scripts** which is a development dependency in the created project.





When you run create-react-app, it always creates the project with the latest version of `react-scripts` automatically.





## Create our App



```bash
 npx create-react-app my-new-app
 
 cd my-new-app
```





it will generate the initial project structure and install the needed dependencies for runing the React in development and also for bundling it later:

```js
📂my-app
┣ 📂public
┃ ┣ 📜favicon.ico
┃ ┣ 📜index.html
┃ ┗ 📜manifest.json
┣ 📂src
┃ ┣ 📜App.css
┃ ┣ 📜App.js
┃ ┣ 📜App.test.js
┃ ┣ 📜index.css
┃ ┣ 📜index.js
┃ ┣ 📜logo.svg
┃ ┗ 📜serviceWorker.js
┣ 📜.gitignore
┣ 📜package-lock.json
┗ 📜package.json
```





Inside the newly created project, you can run some built-in commands:

### **`npm start`** or **`yarn start`**





This will start serving  and open the **development version** app in the browser.



**Best Part?** The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console. No `Webpack` configuration needed.





### Importing a Component

By default, the project setup supports `ES6 modules` thanks to `Babel`, which transpiles ES6 JS that not all browsers and environments support into a JS that is written only in ES5 syntax so that it can be run everywhere.



While you can still use `require()` and `module.exports`, React developers encourage us to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html#sec_importing-exporting-details)instead.





`export default` is used to export only one module as the default single value that is being exported.



We can export multiple variables by writing `export { varName1, varName2, someObj1, func1 }`



For reference we can use MDN  -    [MDN - ES6 export](<https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export>)      or   [MDN - ES6 import](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Syntax>)









### Splitting the Code



Lets create a `components ` folder which will hold all components that we make. 

`App.js` as root component and `index.js` which connect React and our HTML DOM have to stay in the `src/` folder on the entry level.



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





Let's create a new component that will be our <header> .



**src/components/Header.js**

```js
  // components/Header.js

import React from 'react';
import logo from '../logo.svg'; // importing logo from src folder

const header = (props) => {
  return (
    <header className="App-header">
    
      <img src={logo} className="App-logo" />
    
      <h1 className="App-title">Welcome to React, {props.name} Ironhacker!</h1>

      <h3>You are ready to take this to the next level!</h3>

    </header>
  );
}

export default header;
```





Import new component **Header** in the `App.js` and remove rest of the code.



**src/App.js**

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







**Exercise**  ( 5-10 min)

#### [EXERCISE GIST](<https://gist.github.com/ross-u/486f628ca631825a340cd2d118436bef>)



Inside the `Header.js` file we have an `<h1>` tag.

 Create a new `Title` component,  import it in `Header.js`, delete `<h1>` tag and instead place new `<Title>` component.

 The `Title` component should render received `data` prop, so we have to create an attribute named `data` and pass string **"Welcome to React, Ironhacker!"** that we want to display.



Also in the same `Header.js` file there’s `<h3>` tag. 

Replace it with `Description` component  and pass the string through the prop attribute `data` (apply the same logic as for the Title component).





#### Solution



**src/components/Title.js**

```js
// src/components/Title.js
import React from 'react';

const title = (props) => {
  return (
    <div>
    	<h1 className="App-title">{props.data}</h1>
    </div>
  );
}

export default title;
```



**src/components/Description.js**

```js
// src/components/Description.js
import React from 'react';

const description = (props) => {
  return (
    <div>
    	<h3>{props.data}</h3>
    </div>
  );
}

export default description;
```



**src/components/Header.js**

```js
// src/components/Header.js

import React, { Component } from 'react';
import Title from './components/Title.js';
import Description from './components/Description.js';
import logo from '../logo.svg';

const header = () => {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        <Title data="Welcome to React, Ironhacker!"></Title>
        <Description data="You are ready to take this to the next level!"></Description>
      </header>
  );
}

export default header;
```









### Adding Images, Fonts, and Files



 Example 		**src/components/Header.js**

```js
import logo from '../logo.svg';

<img src={logo} className="App-logo" alt="logo" />
```



With Webpack, using static assets like images and fonts can be **imported right inside a JavaScript module**.



This tells Webpack to include that file in the bundle. 



Importing a file gives you a string value. 



This value is the final path you can reference in your code, e.g., as the `src` attribute of an image or the `href` of a link to a PDF.



This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.







### [ Docs Repo: create-react-app package](<https://github.com/facebook/create-react-app>)