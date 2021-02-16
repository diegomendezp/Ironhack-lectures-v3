# DOM | Manipulation



After this lesson, you should be able to:

- Create, change and delete the DOM elements
- Create, change and delete the content of the DOM elements
- Create, change and delete the attributes of the DOM elements
- Create and assign events to the DOM elements



## Element content manipulation

During the execution of our application, the users will interact with the page, and these interactions will produce changes in the DOM.





### **Code Along**

```bash
mkdir 01-dom-manipulation
cd 01-dom-manipulation

vanilla-js

code .
```





##### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM Manipulation</title>
    <link rel="stylesheet" href="./styles/style.css">
  </head>
  <body>
    <a href="#" id="google-link" class="link">Google</a>

    <div id="content">
      <h1 id="title">Main title</h1>
      <ul id="item-list"></ul>
    </div>

    <button id="add-item-button">Add item</button>

        <!-- Load your .js file at the end so that it executes when the DOM is ready -->
        <script src='./scripts/index.js'></script>
  </body>
</html>

```



**index.js**

```js
'use strict'

console.log('JS connected');
```







### Getting an element attribute content

**index.js**

```js
// Get first element that matches the given selector string
let h1 = document.querySelector('h1');

// Get element by id
let googleLink = document.getElementById('google-link');


// Get the attribute value from an element
let headlineId = h1.getAttribute('id');
let headlineClass = h1.getAttribute('class');
let googleLinkUrl = googleLink.getAttribute('href');


console.log(headlineId);
console.log(headlineClass);
console.log(googleLinkUrl);
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
listItem.setAttribute('class', 'items-list')
```







## Create DOM elements

**index.js**

```js
// TO CREATE NEW DOM ELEMENT USE `document.createElement(tagName)`
let h2Tag = document.createElement('h2');
console.log(h2Tag);
```





### Add content into element and Append to parent

**index.js**

```js
// TO ADD TEXT CONTENT TO THE ELEMENT USE  innerHTML
h2Tag.innerHTML = "Sub Title";


// TO APPEND THE NEW ELEMENT TO THE PARENT USE `appendChild(elementVariable)`
let body = document.getElementsByTagName('body')[0];
body.appendChild(h2Tag);
```





### Create a text node

The text inside an textual element, can be added with `innerHTML` or with `.createTextNode()`.

**index.js**

```js
// WE CAN ALSO ADD TEXT USING ALTERNATIVE METHOD `.createTextNode()`
let articleBrief = document.createElement('h3');
let articleContent = document.createElement('p');

let textContent1 = document.createTextNode('Text node 1');
let textContent2 = document.createTextNode('Lorem Ipsum '.repeat(100));

articleBrief.appendChild(textContent1);
articleContent.appendChild(textContent2);

// Append new elements to the `body`
body.appendChild(articleBrief);
body.appendChild(articleContent);
```





**EXERCISE - Practice**

**index.js**

```js
// 1. Create an image element


// 2. Add the src attribute with the link to an image


// 3. Add style.width and style.height to the image node


// 4. Append the image before the `articleBrief`
```



**EXERCISE - Possible solution**

```js
const articleImage = document.createElement('img');
articleImage.setAttribute(
  'src',
  'https://techcrunch.com/wp-content/uploads/2019/07/internet-heartbeat.gif',
);
articleImage.style.width = '80%';
articleImage.style.display = 'block'; // Image is an inline-element
articleImage.style.margin = '0 auto'; // display: block is needed for this to work

body.appendChild(articleImage);
```







#### Adding an element before another element



### `insertBefore()` - used to insert an element before

**index.js**

```js
// TO INSERT ELEMENT BEFORE ANOTHER ELEMENT USE `insertBefore(newElement, elementToMove)`


// parentNode.insertBefore(newNode, referenceNode)
body.insertBefore(articleImage, articleBrief);
```







<br>





## DOM Events -

**index.js**

```js
// WE CAN ADD EVENTS TO DOM ELEMENTS AND ASSIGN FUNCTIONS TO EXECUTE ONCE EVENT HAPPENS
let button = document.getElementById("add-item-button");

button.onclick = function(){
  console.log("adding an element to the list");
}
```





### `addEventListener` - Adding multiple event listeners

```js
// ADDING MULTIPLE EVENT LISTENERS

button.addEventListener('mouseover', backgroundRed);
button.addEventListener('mouseout', backgroundWhite);
button.addEventListener('click', removeMouseOver);

function backgroundRed (event) {
  this.style.backgroundColor = 'red';
  this.style.font.size = "40px";
}

function backgroundWhite (event) {
  this.style.backgroundColor = 'white';
  this.style.font.size = "20px";
}

function removeMouseOver (event) {
	this.style.backgroundColor = 'aquamarine';
  button.removeEventListener('mouseover', backgroundRed);
  button.removeEventListener('click', removeMouseOver);
}
```





### `classList` - `.add` `.remove` `.toggle`

```html
<div id='dropdown-section'> Additional Content</div>
<button id="hide-div">Hide</button>
```



```css
.open {
  height: 200px;
  width: 100%;
  border: 2px solid black;
  transition: all 1s;
}

.close {
  height: 0px;
  border: 0px solid black;
  color: transparent;
}
```



```js
// TOGGLE A CLASS TO CREATE A DROPDOWN
let dropdownSection = document.getElementById('dropdown-section');
let toggleButton = document.getElementById('hide-div');

dropdownSection.classList.add('open');
dropdownSection.classList.remove('test');

toggleButton.addEventListener('click', function() {
  dropdownSection.classList.toggle('close');
  if (toggleButton.innerHTML === 'Hide') {
    toggleButton.innerHTML = 'Show';
  } else {
    toggleButton.innerHTML = 'Hide';
  }
});
```











### PRACTICE (Skip this exercise)



**index.js**

```html
<!--  Create a click event for the button#add-item-button. This event will add a li element with "Item number " + item number. Your DOM suppose to look something like this  -->

  <ul class="items-list">
    <li>Item number 1</li> <!-- Element created dynamically -->
    <li>Item number 2</li> <!-- Element created dynamically -->
    <li>Item number 3</li> <!-- Element created dynamically -->
    <li>Item number 4</li> <!-- Element created dynamically -->
    <li>Item number 5</li> <!-- Element created dynamically -->
  </ul>
  <button id="add-item-button">Add item</button>
```



**Possible Solution**

```js
let addItemButton = document.getElementById('add-item-button');
let itemsList = document.querySelector('.items-list');

// move the input inside the function (this step is optional):
addItemButton.onclick = function() {
  let newListItem = document.createElement('li');
  newListItem.innerHTML = `Item Number ${itemsList.children.length + 1}`;
  itemsList.appendChild(newListItem);
};

```











## Inputs manipulation



**index.html** - Add the following lines

```html
<form>
  <label for="username">Name</label>
  <input name="username" type="text">
  <button id="send-btn">Send</button>
</form>

<ul id="new-list"></ul>
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
// ADD EVENT CALLBACK TO THE SEND BUTTON
let sendButton = document.getElementById('send-btn');
let newList = document.getElementById('new-list');

sendButton.onclick = function(event) {
  // event object is always provided to the callback
  // it is an object representing the  event that just happen
  console.log(event);
  event.preventDefault();

  let input = document.getElementsByTagName('input')[0]; // or leave it as it is, outside
  console.log(input.value);

  input.value = '';
};
```





#### dynamically adding list items



**index.js**

```js
sendButton.onclick = function(event) {
  // event object is always provided to the callback, it represents the  event that just happen
  event.preventDefault();

  // ADD NEW ITEM LIST CONTAINING THE INPUT VALUE
  let listItem = document.createElement('li');
  listItem.innerHTML = input.value;
  newList.appendChild(listItem);
  
  console.log(input.value);
  input.value = '';
};
```







### Getting the current node object

**index.js**

```html
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
  <p>Paragraph 4</p>
```



```js
// EVENT CALLBACKS ALWAYS HAVE `event`
// WE CAN USE IT TO ACCESS `currentTarget` WHERE THE EVENT HAPPENED
let pTagsHTMLCollection = document.getElementsByTagName('p');
let pTags = [...pTagsHTMLCollection];

pTags.forEach(paragraphNode => {
  paragraphNode.onclick = function(e) {
    console.log(e.currentTarget.innerHTML);
  };
});
```





<br>







### Clear an existing element

 `innerHTML` **returns everything inside the element**, not only text. This means all the HTML inside, including tags, will be returned.

```js
// Clear an existing element

console.log(contentDiv.innerHTML);
contentDiv.innerHTML = ""; // clears the whole element
```



We can also use the following methods.

| [`node.removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) | Remove child node |
| ------------------------------------------------------------ | ----------------- |
| [`node.remove()`](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove) | Remove node       |









# JS | DOM Exercise (consider skipping)

##### ( Consider skipping, only for more advanced students - example may confuse students with lower level )

## [Get The Titles - Exercise](https://gist.github.com/ross-u/bc5f6940cad9d98c2c908476412e56dd) (10min)





**Task 1**

In a new tab navigate to the [Hacker News](https://news.ycombinator.com/) webpage, and open the Chrome Dev console (Command + Option + J).

We will write our JavaScript code in the console.

The anchor links which include the topic names have the class `storylink`. We can use this to target and select only those elements. We can use the following code:

```js
let titles = document.getElementsByClassName("storylink");
```





**Task 2:**

Now create a for loop that prints the `innerHTML` of each  title element.

**ANSWER**

```js
for (let i=0; i < titles.length;i++){
  console.log(titles[i].innerHTML);
}
```







**TASK 3:**

Now create a for loop that iterates over the same items and prints the `href` link values of each  title element. To get the `href` value of an element you have to use the `getAttribute` method.

**ANSWER**

```js
for (let i=0; i < titles.length;i++){
  console.log(titles[i].getAttribute('href'));
}
```

