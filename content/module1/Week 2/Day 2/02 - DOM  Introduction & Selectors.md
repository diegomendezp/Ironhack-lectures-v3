# DOM | Introduction & Selectors

The Document Object Model (DOM) is an [API (Application Programming Interface)](https://en.wikipedia.org/wiki/Application_programming_interface) for HTML documents. 

It provides a **structured representation of the document (web page) and defines a way that the structure can be accessed from JavaScript**.



##### In DOM HTML document is represented as a group of nodes (objects) that have properties and methods.







### DOM Tree

The DOM represents a document as a tree. 

The tree is made up of parent-child relationships. 

One parent can have one or many children nodes.

![img](https://i.imgur.com/m08deQC.png)

### 

**Code Along**

```bash
mkdir dom-intro
cd dom-intro
touch dom.html
touch index.js
code .
```



```html
<!DOCTYPE>
<html>
<head>
  <title>DOM Intro</title>
</head>
<body>
  <h1>Dog</h1>
 	<div id="cat"></div>
 	<div id="parrot"></div>
 	<div class="mouse"></div>
 	<div class="mouse"></div>
 	<div class="mouse"></div>
  <div class="hello"></div>

    <!-- include js in the end of the body to make sure 
    the DOM is already loaded before you want to make updates in it-->
    <script src="index.js"></script>
</body>
</html>
```





### Check if the JS script is linked

**index.js**

```js
'use strict'
console.log('JS connected')
```









### The document object

Every website can be accessed by the JavaScript DOM using the **document** object, which is instantiated automatically when we render the page.



**index.js**

```js
console.log('typeof document ', typeof document);
console.log(document);
```





### Searching for Elements by ID

**index.js**

```js
// TO GET THE ELEMENT FROM DOM YOU CAN USE "getElementById" 
let theCatDiv = document.getElementById("cat");
let theParrotDiv = document.getElementById("parrot");

console.log(theCatDiv);
console.log(theParrotDiv);
```

**index.js**

```js

// TO ADD TEXT TO DOM USE "innerHTML"
theCatDiv.innerHTML = "I'm a cat";
theParrotDiv.innerHTML = "I'm a parrot";
```

**index.js**

```js
// set the HTML content of "theParrotDiv" to "I'm a cat"
theParrotDiv.innerHTML = theCatDiv.innerHTML;
```







## Elements attributes and content



Once we have fetched an element using one of the above methods, we can also modify them. 

 [element.style](https://developer.mozilla.org/en/docs/Web/API/HTMLElement/style), which allows us to change the styles from JavaScript.

**index.js**

```js
// index.js
// ...

// TO ADD THE CSS STYLE TO THE ELEMENT USE `.style` property
theCatDiv.style.backgroundColor = "red";
theCatDiv.style.border          = "4px yellow dashed";
theCatDiv.style.fontSize        = "50px";
theCatDiv.style.marginTop       = "30px";
theCatDiv.style.paddingBottom   = "30px";
```





### Accessing Elements by Class Name



[.getElementsByClassName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) **returns an HTML collection (array like object) of all elements** which have the given class names.



**index.js**

```js
// GET ELEMENTS BY CLASS NAME USE "getElementsByClassName"
// returns an HTML Collection (array-like object) of all elements which have the given class name
let mice = document.getElementsByClassName('mouse');
console.log(mice);
```





### HTML Collections

The HTML Collection represents a generic collection (**array-like object**) of elements





#### Iterate over an HTML Collection - methods not available

##### The HTML Collection is an array-like object but is not an array. 

##### So we can’t use the array methods like `forEach`, `map`, `push`, etc.



**To turn our HTML collection into an array**, using **spread operator [...]** or any other approach to copy the array (we learned 4-5 of them, remember.



**index.js**

```js
// The HTML Collection is an array-like object but is not an array (usuall array methods are unavailable). 
// Turn HTML Collection into an array, using spread operator [...] 
let miceArray = [...mice];


console.log(miceArray); // <== [div.mouse, div.mouse, div.mouse]
```







### Accessing by Tag Name

**index.js**

```js
// GET ELEMENTS BY TAG NAME USE "getElementsByTagName"
let divs = document.getElementsByTagName('div');
console.log(divs); // <== [div#cat, div.mouse, div.mouse, div.mouse]

let divsArray = [...divs];
```



**EXERCISE**

```js
// Loop over the `divsArray` using `.forEach()` array method and for every element set the following style:

  element.style.width = "300px";
  element.style.height = "50px";
	element.style.border = "1px solid black"
```





**ANSWER**

```js
// TO LOOP OVER AND STYLE ARRAY OF ELEMENTS WE CAN USE `forEach`
divsArray.forEach( function (element) {
  element.style.width = "300px";
  element.style.height = "50px";
	element.style.border = "1px solid black"
})
```









### Accessing First Found Selector



The [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) returns the **first element** within the document  that matches the specified group of selectors.

**index.js**

```js
// TO GET THE FIRST FOUND ELEMENT WITH THE SPECIFIED SELECTOR USE `querySelector`
let firstMouse = document.querySelector('.mouse');
let firstDiv = document.querySelector('div');

console.log(firstMouse); // <== <div class="mouse"></div>
console.log(firstDiv);
```







### Accessing an Array of Selectors

#####  method `.querySelectorAll()` returns a list of the elements within the document that match the specified group of selectors.

##### It returns a [NodeList](https://developer.mozilla.org/en/docs/Web/API/NodeList). object.

##### It is possible to loop over the items in a `NodeList` using a [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop or a [for...of](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of>) statement :



**index.js**

```js
// TO RETURN A NODES LIST OF ELEMENTS BY SELECTOR NAMES USE `querySelectorAll` - ***

// With querySelectorAll we can specify multiple selectors separated by comma
let allDivs = document.querySelectorAll(".mouse, #cat");
console.log(allDivs);
```





### Getting and Setting the Class Name



**index.js**

```js
// TO GET OR SET THE CLASS NAME OF THE ELEMENT USE `.className` property
let mouse1 = document.querySelector(".mouse");
console.log(mouse1.className); // <== mouse

mouse1.className += ' mickey';

console.log(mouse1.className); // <== mouse mickey
```





### Getting and Setting the ID

```js
// TO GET OR SET THE ID OF THE ELEMENT USE `.id` property
let mickeyMouse = document.querySelector('.mickey');

mickeyMouse.id = 'mouse-number-one';

console.log(mickeyMouse);
```





## LIST OF DOM PROPERTIES AND METHODS

<http://materials.ironhack.com/s/r1LgA2GT4Vm#a-list-of-dom-properties-and-methods>



## Extra Resources

- [Document properties - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document#Properties)
- [Document methods - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document#Methods)