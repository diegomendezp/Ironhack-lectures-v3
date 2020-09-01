---
title: "Dom Intro"
date: 2018-11-12T12:46:45+01:00
draft: false
weight: 15
week: 2
day: 2
pre: "<b>15. </b>"
---

## Learning Objectives

## dom

- window.document
- window.onload = function () { ... }
- document.body
- node = document.getElementById('site-header')
- node = document.getElementsByClassName('feature')
- node = document.querySelector('.features .feature')
- nodeList = document.querySelectorAll('.features .feature')
- node.setAttribute('src', 'https://fakeimage.com/image.jpg')
- node.removeAttribute('srcset');
- node.classList.add('active') node.classList.remove('active')
- node.classList.toggle('active')
- node.appendChild(child)
- node.children[0]...
- node.remove()
- node = document.createElement('div')
- node.innerHTML = `'<p>some text</p>'`
- node.innerText = 'some text'


## events

- node.addEventListener('click', handleClick);
- node.removeEventListener('click', handleClick);
- function handleClick(event) { ... }
- event.stopPropagation();
- event.preventDefault();
- event.target
- event.currentTarget

```js
var img = document.querySelector('.o-hero img');
img.setAttribute('src', 'https://pbs.twimg.com/profile_images/844137908252610566/OsT9RU83_400x400.jpg');
img.removeAttribute('srcset');
```
- node.setAttribute('src', 'https://fakeimage.com/image.jpg')

- node.removeAttribute('srcset');

- node.classList.add('active') node.classList.remove('active')

- node.classList.toggle('active')

- node.appendChild(child)

- node.children[0]...

- node.remove()

- ole=search input

  input change

  event handler

  show box with results

  empty results

  results = students.filter

  add dom with students

  or "no students match foo"node = document.createElement('div')

- node.innerHTML = `'<p>some text</p>'`

- node.innerText = 'some text'

- refresh what is the DOM, explain the why and the possibilities
- explain what is window and document
- open a random page like github and select elements demoing querySelector & querySelectorAll
- explain the older selection APIs like getElementById & getElementsByClassName
- show how you can find the parents & siblings of a selected element
- on the main page of the mob website
  - show how to add a new section creating a section element
  - create an h2
  - add text to the h2
  - append the h2 to the section
  - append the section to the website before the footer
- make sure you show that as long as you have the variable with the element, you have control, even if the element is removed from the DOM, it can be added again

- Selecting elements from JS
  - return element
  - return collections
- elements methods (modify elements)
- create elements
- remove elements
- adding to DOM

- events

- node.addEventListener('click', handleClick);
- node.removeEventListener('click', handleClick);
- function handleClick(event) { ... }
- event.stopPropagation();
- event.preventDefault();

- half quick/demo
- show in slack.com

```js
var button = document.querySelector('a.v--secondary');
button.addEventListener('click', function (ev) {
  ev.preventDefault();
  button.parentElement.parentElement.classList.add('is-hidden');
});
```
- event.target
- event.currentTarget

```js
var ps = document.querySelectorAll('p');
for (var ix = 0; ix < ps.length; ix++) {
  ps[ix].addEventListener('click', function (ev) {
    ev.preventDefault();
    ev.currentTarget.style.color = 'red';
  });
}
```

- on the main page of the mob website
- show how to select both h2 titles
- loop through them and add an event listener to each one of them with an anonymous function
- inside of the function, show them how to select the ul's of both sections by going up to the parent and then selecting the ul inside of it
- toggle the class hidden to the ul that you want to show and hide

```javascript
'use strict';

function main() {
  var nodes = document.querySelectorAll('section h2');

  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h2 = event.currentTarget;
      var section = h2.parentNode;
      section.classList.toggle('expanded');
    });
  };
}

window.addEventListener('load', main);
```

- ev.stopPropagation()
- ev.preventDefault()
- explain how event propagation  works in the board, drawing a small tree of elements and ask if an event will 'move up' the DOM tree.
- explain what happens when two different events happen, one in body and one in main
  - which one goes first
  - explain with a narrative, introduce the word propagate and event propagation
- on the mob website, add an event on body and another on the input of the student search, code the stopPropagation()

## Code Along

- `var students` in a file everyone can load with script src
- form role=search input
- input change
- event handler
  - show box with results
  - empty results
  - results = students.filter
  - add dom with students
  - or "no students match `foo`"

  - add the ironhack remote to everyone
  - `git remote -v` to check if the remote is added already
  - `git status` to check if there are changes (if yes, add, commit, push and PR)
  - `git remote add ironhack https://github.com/ironhack/<remote-url>` to add the ironhack remote
  - `git pull ironhack master` to pull the changes from ironhack
- explain (draw) on the board what is going to happen
  - add an input to a new sub header that will search and filter the array
  - it will display the list on an absolute positioned list
- add the array with students.js in the main folder
- explain the steps until they are able to console.log the input value and give them 5 minutes to achieve it
- allow everyone to reach that and explain the next step on the board.
  - store the input value on a variable
  - filter the results of the array
  - console.log the result
- append each one of the results as an  `a` tag to the DOM, make sure the link works
- re-factor the code and explain the importance of it
- build the list with an `ul`. appending the `a` to the `li`, the `li` to the `ul` and finally the `ul` to the search results
- style the results div with absolute positioning so that it appears right below the search box

- challenges for students to practice
  1. hide the search results when
     1. click on body (requires to stop propagation when click on input)
     2. press esc
  2. show the results again when
     1. input focus

## Practice

@Todo, find further practice

- DOM student pages - show/hide experiment sections
- DOM student pages - add list of students to DOM from array

## Resources

## Ironhack Learning Platform