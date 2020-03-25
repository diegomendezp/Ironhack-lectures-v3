# React composition vs Inheritance 





## Introduction

**Never use inheritance when working with React components.**





React was created by Facebook. Quoting them:

> “At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.
> Props and composition give you all the flexibWility you need to customize a component’s look and behavior in an explicit and safe way. 











<br>



### Clone the starter code repo

```bash
git clone https://github.com/ross-u/04-react-composition-vs-inheritance.git

cd 04-react-composition-vs-inheritance

code .

# Checkout to the starter-code branch
git checkout starter-code
```





<br>



### Install the dependencies

```bash
npm i
```





<br>



### (Teacher) Create a new branch

```bash
git checkout -b wd-ft-mmm-yyyy
```





<br>



## Composition in React components



Other than passing regular props we can also pass other elements or components. We call this composition.



Using the special variable of the React components `props.children`  we can  pass children elements directly into the component's output:



##### `src/FancyBorder.js`

```js
// src/FancyBorder.js

import React from "react";
import './FancyBorder.css';

function FancyBorder(props) {
  return (
    <div className='fancy'>
    	<h3>{props.title}<h3>
      {props.children}
      {/* Content placed between the component tags is available via the `props.children` */}

    </div>
  );
}

export default FancyBorder;
```





**src/FancyBorder.css**

```css
.fancy {
  border: 3px dashed magenta;
  padding: 10px 30px;
  box-shadow: 5px 5px 2px rgb(143, 139, 135);
  border-radius: 15px;
  background: rgb(152, 97, 208);
}
```



**src/App.js**

```js
import FancyBorder from './FancyBorder.js'

// ...


    <FancyBorder title='Fancy Border Example'>
      <h1>Welcome</h1>
      <p>Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  
```











Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way.

Remember that components may accept arbitrary props, including primitive values, React elements, or functions.





<br>



##### Finsihed example with an extra additional example of passing components via props is available on branch `example-done`.

Both examples are taken from the [ReactJs docs page](https://reactjs.org/docs/composition-vs-inheritance.html).

```bash
git checkout example-done
```



### [CODE Repo (Starter code and Finished Example)](https://github.com/ross-u/04-react-composition-vs-inheritance)

