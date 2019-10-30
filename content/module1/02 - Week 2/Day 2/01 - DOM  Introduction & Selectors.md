# DOM | Introduction & Selectors



The Document Object Model (DOM) is an [API (Application Programming Interface)](https://en.wikipedia.org/wiki/Application_programming_interface) for HTML documents. 



It provides a **structured representation of the document (web page) and defines a way that the structure can be accessed from JavaScript**.



##### In DOM HTML document is represented as a group of nodes (objects).

##### Each node(object) has properties and methods.



### DOM Tree

The DOM represents a document as a tree. 

The tree is made up of parent-child relationships. 

One parent can have one or many children nodes.



### [OPEN IMAGE](https://i.imgur.com/m08deQC.png)



![img](https://i.imgur.com/m08deQC.png)



 

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
 	<div id="cat">cat</div>
 	<div id="parrot">parrot</div>
 	<div class="mouse">mouse</div>
 	<div class="mouse">mouse</div>
 	<div class="mouse">mouse</div>
  <div class="hello">hello</div>

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
console.log('JS connected');
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

console.log(theCatDiv instanceof HTMLElement);
```

**index.js**

```js

// TO ADD TEXT TO A DOM ELEMENT USE "innerHTML"
theCatDiv.innerHTML = "I'm a cat";
theParrotDiv.innerHTML = "I'm a parrot";
```

**index.js**

```js
// set the content of the "theParrotDiv" element to "I'm a cat"
theParrotDiv.innerHTML = theCatDiv.innerHTML;
```





### Each element is a `HTMLElement` Object

Each element is an `HTMLElement` Object which gives it methods and properties that we can use to manipulate it.

Instead of hard coding style and behavior in `html` or `css`, these methods enable us to work with the element from JavaScript file.



### [List of HTML Object properties - W3S](https://www.w3schools.com/jsref/dom_obj_all.asp)



### [List of HTML Object Properties - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)





## Elements attributes and content



- We can modify the element by using the methods that each `HTMLElement` has. 

- [element.style](https://developer.mozilla.org/en/docs/Web/API/HTMLElement/style),  allows us to change the styles from JavaScript.





### [CSS Properties Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)



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



#### [.getElementsByClassName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)

 **returns an `HTML collection` (array like object) of all elements** which have the given class names.



**index.js**

```js
// GET ELEMENTS BY CLASS NAME USE "getElementsByClassName"
// returns an HTML Collection (array-like object) of all elements which have the given class name
let miceHTMLCollection = document.getElementsByClassName('mouse');
console.log(miceHTMLCollection);
```





## HTML Collections

- The `HTML Collection` represents an **array-like object** of elements. 
- This array-like object  cannot be iterated with array methods `map`, `forEach`, `push`, etc.
- `HTML Collection` needs to be copied into an array order to use regular array methods. This can be done with `...` spread operator. 

- **Methods that return `HTML Collection`s are:**  

  - #### [`getElementsByClassName()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName)

  - #### [`getElementsByTagName()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)





### Turning  `HTML Collection` into an array

Use **spread operator [...]** or any other approach to copy the array (we learned 4-5 of them, remember. 

e.g. `const divsArray = Array.from(divsHTMLCollection)`



**index.js**

```js
// The HTML Collection is an array-like object but is not an array (usuall array methods are unavailable). 
// Turn HTML Collection into an array, using spread operator [...] 
let miceArray = [...miceHTMLCollection];


console.log(miceArray); // <== [div.mouse, div.mouse, div.mouse]
```







### Accessing by Tag Name

[`getElementsByTagName()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName) returns a HTML Collection, that must be spread in order to use array methods.



**index.js**

```js
// GET ELEMENTS BY TAG NAME USE "getElementsByTagName"
let divsHTMLCollection = document.getElementsByTagName('div');
console.log(divs); // <== [div#cat, div.mouse, div.mouse, div.mouse]

let divsArray = [...divsHTMLCollection];
```







**QUICK EXERCISE:**

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









### Accessing First Found Selector -

###  [`querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)



The [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) returns the **first element** within the document  that matches the specified group of selectors.

**index.js**

```js
// TO GET THE FIRST FOUND ELEMENT WITH THE SPECIFIED SELECTOR USE `querySelector`
let firstMouse = document.querySelector('.mouse');
let firstDiv = document.querySelector('div');

console.log(firstMouse); // <== <div class="mouse"></div>
console.log(firstDiv);
```





## NodeLists

**NodeList** objects are collections of [nodes](https://developer.mozilla.org/en-US/docs/Glossary/Node/DOM).

Property and Method that return `NodeList` are:

-  [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll).





### Accessing all Matching Selectors - 

### [`.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)



- method `.querySelectorAll()` returns a [NodeList](https://developer.mozilla.org/en/docs/Web/API/NodeList). object of all the matching elements.

- It is possible to loop over the items in a `NodeList` using a [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop or a [for...of](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of>) statement :



**index.js**

```js
// TO RETURN A NODES LIST OF ELEMENTS BY SELECTOR NAMES USE `querySelectorAll` - ***

// With querySelectorAll we can specify multiple selectors separated by comma
let allDivs = document.querySelectorAll(".mouse, #cat");
console.log(allDivs);
```







### Getting and Setting the Class Name

### [`.className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)



**index.js**

```js
// TO GET OR SET THE CLASS NAME OF THE ELEMENT USE `.className` property
let mouse1 = document.querySelector(".mouse");
console.log(mouse1.className); // <== mouse

mouse1.className += ' mickey';

console.log(mouse1.className); // <== mouse mickey
```





### Getting and Setting the ID

### [`.id`](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)



**index.js**

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