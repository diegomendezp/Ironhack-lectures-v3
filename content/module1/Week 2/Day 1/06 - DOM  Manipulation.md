# DOM | Manipulation



After this lesson, you should be able to:

- Create, change and delete the DOM elements
- Create, change and delete the content of the DOM elements
- Create, change and delete the attributes of the DOM elements
- Create and assign events to the DOM elements



## Element content manipulation

During the execution of our application, the users will interact with the page, and these interactions will produce changes in the DOM.





**Code Along**

```bash
mkdir dom-manipulation
cd dom-manipulation
touch index.html index.js
```

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Manipulation</title>
</head>
<body>
  <p id="paragraph">What is your name?</p>
  <a href="#" id="google-link" class="link">Google</a>

  <div id="content">
    <h1 id="title">Main title</h1>
	<ul id="item-list"></ul>
  </div>

  <button id="add-item-button">Add item</button>

  <!-- make sure you load .js file in the end so it executes when the DOM is ready -->
  <script src="index.js"></script>

</body>
</html>
```



**index.js**

```js
'use strict'
console.log('JS connected');
```

**index.js**

```js
// Get element with id="paragraph"
let paragraph = document.getElementById('paragraph');

console.log(paragraph); // <== <p id="paragraph">What is your name?</p>
```



**index.js**

```js
// Get all elements with class="link"
let links = document.getElementsByClassName('link');

console.log(links);
```



**index.js**

```js
// Get all "<div></div>" elements
let divs = document.getElementsByTagName('div');

console.log(divs);
```







### Getting an element attribute content

**index.js**

```js
// Get first element that matches the given selector string
let h1 = document.querySelector('h1');

// Get element by id
let googleLink = document.getElementById('google-link');


// Get the attribute value from an element
let h1Id = h1.getAttribute('id');
let h1Class = h1.getAttribute('class');
let googleLinkUrl = googleLink.getAttribute('href');
```





### Changing the value of an element’s attribute

**index.js**

```js
// TO SET THE ATTRIBUTE NAME USE `setAttribute`
// syntax:  element.setAttribute(attributeName, value);
let contentDiv = document.getElementById('content');

contentDiv.setAttribute('id', 'title-div');
console.log(contentDiv);
```





### Removing an existing element’s attribute

**index.js**

```js
// TO REMOVE THE ATTRIBUTE NAME USE `removeAttribute`
let listItem = document.getElementById('item-list');

listItem.removeAttribute('id');
console.log(listItem)
```



**index.js**

```js
// Set the attribute class="item-list" to the `listItem`
listItem.setAttribute('class', 'item-list')
```







## Create a DOM elements

**index.js**

```js
// TO CREATE NEW DOM ELEMENT USE `document.createElement(tagName)`
let h2Tag = document.createElement('h2');
console.log(h2Tag)''
```





### Add content into element and Append to parent

**index.js**

```js
// Add content to the element
h2Tag.innerHTML = "Elephant";


// TO APPEND THE NEW ELEMENT TO THE PARENT USE `appendChild(elementVariable)`
let body = document.getElementsByTagName('body')[0];
body.appendChild(h2Tag);
```





### Create a text node

The text inside an textual element, can be added with `innerHTML` or with `.createTextNode()`.

**index.js**

```js
// WE CAN ALSO ADD TEXT USING ALTERNATIVE METHOD `.createTextNode()`
let myH = document.createElement('h3');
let myP = document.createElement('p');

let textContent1 = createTextNode('Lalalalalala');
let textContent2 = createTextNode('Bananarama');

myH.appendChild(textContent1);
myP.appendChild(textContent2);


// Append myH and myP to `body`
```





**Practice**

**index.js**

```js
// Create 2 nodes in your JavaScript file:
//	p element
//	text node with text  “Hi there! I am using JavaScript!”

// Add the text into the p tag and finally add it to the DOM
```





#### Adding an element before another element

**index.js**

```js
// TO INSERT ELEMENT BEFORE ANOTHER ELEMENT USE `insertBefore(newElement, elementToMove)`
let body = document.getElementsByTagName('body')[0]; // you don't have to do this again

let newH1Tag = document.createElement('h1');
newH1Tag.innerHTML = "Heading 1 - comes before Elephant Heading h2";

body.insertBefore(newH1Tag, h2Tag);
```



### Clear an existing element

 `innerHTML` **returns everything inside the element**, not only text. This means all the HTML inside, including tags, will be returned.

```js
// Clear an existing element

console.log(contentDiv.innerHTML);
contentDiv.innerHTML = ""; // clears the whole element
```





📝 **Time to practice**

Add the following code to your `html` and afterward remove it from the DOM.

```html
<ul class="super-list">
  <li> First:
      <ol>
          <li> Sub-first 1 </li>
          <li> Sub-first 2 </li>
      </ol>
  </li>
  <li>Second</li>
  <li>Third</li>
</ul>
```





## Events in JavaScript elements

**index.js**

```js
// WE CAN ADD EVENTS TO DOM ELEMENTS AND ASSIGN FUNCTIONS TO EXECUTE ONCE EVENT HAPPENS
let button = document.getElementById("add-item-button");

button.onclick = function(){
  console.log("adding an element to the list");
}
```



**index.js**



**PRACTICE - TASK 1**  - 

add `onClick` event listener to the button with `id="color-button"`  which will change the `backgroundColor` of the `body` by calling the function `generateRandomColor` 

```js
// This function generates random the CSS HEX color code
function generateRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// your code here
```





**ANSWER**

```js
// This function generates random the CSS HEX color code
function generateRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

let colorButton = document.getElementById("color-button");


colorButton.onclick = function () {
	body.style.backgroundColor = generateRandomColor();
}
```









**PRACTICE - TASK 2**

```html
<!--  Create a click event for the button#add-item-button. This event will add a li element with "Item number " + item number. Your DOM suppose to look something like this  -->

  <ul id="items-list">
    <li>Item number 1</li> <!-- Element created dynamically -->
    <li>Item number 2</li> <!-- Element created dynamically -->
    <li>Item number 3</li> <!-- Element created dynamically -->
    <li>Item number 4</li> <!-- Element created dynamically -->
    <li>Item number 5</li> <!-- Element created dynamically -->
  </ul>
  <button id="add-item-button">Add item</button>
```





## Inputs manipulation



**index.html** - Add the following lines

```html
  <label for="username">Name</label>
  <input name="username" type="text">
  <button id="send-btn">Send</button>
```



**index.js**

```js
// TO ACCESS THE VALUE OF THE FORM INPUT
let input = document.getElementsByTagName('input')[0];
console.log(input.value); //=> ""
```



#### We have to create an event on the button so that we grab the value of input only when the button is clicked



**index.js**

```js
let sendButton = document.getElementById('send-btn');
// move the input inside the function (this step is optional):
sendButton.onclick = function(){
  let input = document.getElementsByTagName('input')[0]; // or leave it as it is, outside
  console.log(input.value);
}
```





#### dynamically adding list items

**index.html**

```html
<ul id="new-list"></ul>
```



**index.js**

```js
let newList = document.getElementById('new-list')
sendButton.onclick = function(){
  let input = document.getElementsByTagName('input')[0]; // or leave it as it is, outside
  let newItem = document.createElement('li');
  newItem.innerHTML = input.value;
  
  
  input.value = '';
}
```







### Getting the current node object

```js
// WE CAN GIVE A `e` AS AN EVENT AND ACCESS `currentTarget` WHERE THE EVENT HAPPENED
let pTags = document.getElementsByTagName('p');

for (let i=0; i < pTags.length; i++){
  pTags[i].onclick = function(e){
    console.log(e.currentTarget.innerHTML);
  }
}
```







## Scrapping a Website

## EXERCISE

****

**TASK 1**

In a new tab navigate to the [Hacker News](https://news.ycombinator.com/) webpage, and open the Chrome console. We know that here we can write JavaScript. Copy and paste the following code.



```js
let titles = document.getElementsByClassName("storylink");
```



**TASK 2:**

Now create a for loop that prints the `innerHTML` of each  title element





**ANSWER**

```js
for (let i=0; i < titles.length;i++){
  console.log(titles[i].innerHTML);
}
```





**TASK 3:**

Now create a for loop that prints the `href` link values of each  title element





**ANSWER**

```js
for (let i=0; i < titles.length;i++){
  console.log(titles[i].getAttribute('href'));
}
```

