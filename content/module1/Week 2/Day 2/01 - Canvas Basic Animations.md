// ==UserScript==
// @name        GitHub Copy Code Snippet
// @version     0.3.5
// @description A userscript adds a copy to clipboard button on hover of markdown code snippets
// @license     MIT
// @author      Rob Garrison
// @namespace   https://github.com/Mottie
// @include     https://github.com/*
// @include     https://gist.github.com/*
// @run-at      document-idle
// @grant       GM_addStyle
// @require     https://greasyfork.org/scripts/28721-mutations/code/mutations.js?version=666427
// @icon        https://github.githubassets.com/pinned-octocat.svg
// @updateURL   https://raw.githubusercontent.com/Mottie/GitHub-userscripts/master/github-copy-code-snippet.user.js
// @downloadURL https://raw.githubusercontent.com/Mottie/GitHub-userscripts/master/github-copy-code-snippet.user.js
// ==/UserScript==
(() => {
	"use strict";

	let copyId = 0;
	const markdownSelector = ".markdown-body, .markdown-format",
		codeSelector = "pre:not(.gh-csc-pre)",
	
		copyButton = document.createElement("clipboard-copy");
	copyButton.className = "btn btn-sm btn-blue tooltipped tooltipped-w gh-csc-button";
	copyButton.setAttribute("aria-label", "Copy to clipboard");
	// This hint isn't working yet (GitHub needs to fix it)
	copyButton.setAttribute("data-copied-hint", "Copied!");
	copyButton.innerHTML = `
		<svg aria-hidden="true" class="octicon octicon-clippy" height="16" viewBox="0 0 14 16" width="14">
			<path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path>
		</svg>`;
	
	GM_addStyle(`
		.gh-csc-wrap {
			position: relative;
		}
		.gh-csc-wrap:hover .gh-csc-button {
			display: block;
		}
		.gh-csc-button {
			display: none;
			padding: 3px 6px;
			position: absolute;
			top: 3px;
			right: 3px;
			z-index: 20;
		}
		.gh-csc-wrap.ghd-code-wrapper .gh-csc-button {
			right: 31px;
		}
		.gh-csc-button svg {
			vertical-align: text-bottom;
		}
	`);
	
	function addButton(wrap, code) {
		if (!wrap.classList.contains("gh-csc-wrap")) {
			copyId++;
			// See comments from sindresorhus/refined-github/issues/1278
			code.id = `gh-csc-${copyId}`;
			copyButton.setAttribute("for", `gh-csc-${copyId}`);
			wrap.classList.add("gh-csc-wrap");
			wrap.insertBefore(copyButton.cloneNode(true), wrap.childNodes[0]);
		}
	}
	
	function init() {
		const markdown = document.querySelector(markdownSelector);
		if (markdown) {
			[...document.querySelectorAll(markdownSelector)].forEach(md => {
				[...md.querySelectorAll(codeSelector)].forEach(pre => {
					let code = pre.querySelector("code");
					let wrap = pre.parentNode;
					if (code) {
						// pre > code
						addButton(pre, code);
					} else if (wrap.classList.contains("highlight")) {
						// div.highlight > pre
						addButton(wrap, pre);
					}
				});
			});
		}
	}
	
	document.addEventListener("ghmo:container", init);
	document.addEventListener("ghmo:comments", init);
	init();
})();

# Canvas | Basic Animations



<br>





## Setting the canvas dimensions



To ensure canvas dimensions are rendered properly they have to be set in pixels. Best way to do this is to grab the dimensions of the browser window and set them to canvas.



**index.html**

```html
<canvas id="main-canvas"></canvas>
```



**style.css**

```css
canvas {
  border: 3px solid red;
  visibility: hidden;
}

body {
  margin: 0;  /* This removes the margin of the browser's default styling */
  overflow: hidden; /* This prevents scroll overflow showing */
}
```



**index.js**

```js
// SET CANVAS DIMENSIONS
// When page loads, canvas and context are created, and
// dimensions of the canvas are set
window.addEventListener('load', () => {
  const canvas = document.getElementById('main-canvas');
  const context = canvas.getContext('2d');

  canvas.height = document.body.clientWidth;
  canvas.width = document.body.clientHeight;
  canvas.style.visibility = 'visible';
});

```



<br>



# Animations



### Animations Steps

When doing **animations** on `canvas`, we need to create a set of frames that the canvas will render in a sequence to create the illusion of an animation.

[OPEN IMAGE](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_465f4281c2e9278f3720e82d68535057.png)

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_465f4281c2e9278f3720e82d68535057.png)



<br>



### 4 Animation Steps:



When making canvas animations there are 4 steps we can take

1. **Save canvas state** - **snapshot** *state of what was shown*
   Save the current state of the drawing (colors, styles , etc) each time a frame is drawn (current frame).
2. **Clear the canvas**
   We need to clear any shapes that have been drawn previously using the `clearRect()` method.
3. **Restore the canvas state**
   If you’ve saved the state, restore it before drawing a new frame.

4. **Draw animated shapes**
   The step where you do the actual frame rendering/drawing.



<br>



### Saving a state

Every time the `save()` method is called, the current drawing state is pushed onto the stack. 



A drawing state consists of:

- The **transformations** that have been applied (i.e. *translate*, *rotate* and *scale*).

- The current values of the following **attributes**: `strokeStyle`, `fillStyle`, `globalAlpha`, `lineWidth`, `lineCap`, `lineJoin`, `miterLimit`, `lineDashOffset`, `shadowOffsetX`, `shadowOffsetY`, `shadowBlur`, `shadowColor`, `globalCompositeOperation`, `font`, `textAlign`, `textBaseline`, `direction`, `imageSmoothingEnabled`.

  

You can call the `save()` method **as many times as you like**. 

When the `restore()`method is called, the last saved state is popped off the stack and all saved settings are restored and applied.



- `save()` is equivalent to `push`.
- `restore()` is equivalent to `pop`.

![img](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFvYbQtzlJCfE7Pq79TcBIF5m1ysEXc_qzlhLbGEbyPSvcFY5)







### [Codepen Example - Canvas `save()` and `restore()` ](<https://codepen.io/Denzelzeldi/pen/KYarNY?editors=0010>)



<br>



## Scheduling updates - rendering loop

### We can use

**setInterval(method, delay)**
// Starts repeatedly executing the function specified by method every delay milliseconds.

**setTimeout(method, delay)**
// Executes the function specified by function in delay milliseconds.





Previous example of using the `setTimeout` with the fireball animation:

###  [Codepen Example - Animated Image (with setTimeout)](<https://codepen.io/Denzelzeldi/pen/rbjqVr?editors=1010>)



<br>



### `requestAnimationFrame(callback)`
- `requireAnimationFrame()`Calls the given callback function before the next rendering of frame on the screen).



- It runs the given callback around 60 times per second, so it enables smooth rendering.



- `requestAnimationFrame()` returns an id and can be canceled using the `cancelAnimationFrame(globalID);`





#### Using `requestAnimationFrame()`



Let's see how `requestAnimationFrame()` is used. 

We will work with rendering DOM elements. LAter we will do the real example of rendering canvas elements.

### [Codepen Example - `requestAnimationFrame()` with DOM element](<https://codepen.io/Denzelzeldi/pen/WWRaVK>)





<br>



## Moving elements

- `requestAnimaionFrame()` creates 60  frames per second.
- By changing the element on each frame we create an animation.

- To move the element we have to change it's position. We need to increase or decrease the value of element's  `x` or `y`  position.  
- To move a canvas element faster with `requestAnimationFrame(callback)` , we just need to increase or decrease the  `x` or `y` values more on each `callback`.





**EXAMPLE**



**index.html**

```html
<canvas id="main-canvas" width="700" height="900"></canvas>

<button>START</button>
```



**index.js**

```js
const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");
const button = document.querySelector('button');

ctx.fillStyle = "red";  // set fill style for all of the squares

// context.fillRect( x, y , width, height);
ctx.fillRect(100, 0, 50, 50);
ctx.fillRect(300, 0, 50, 50);
ctx.fillRect(500, 0, 50, 50);

let speed1 = 0;
let speed2 = 0;
let speed3 = 0;

function clearCanvas() {
  // clearRect( startAt-x, startAt-y , width-span, height-span);
  ctx.clearRect(0, 0, 700, 900);
}

function updateCanvas(){
  speed1 += 1; // slowest - 1px per frame
  speed2 += 2; // faster - 2px per frame
  speed3 += 3; // fastest - 3px per frame

  // clear the previous frame of elements before printing new one
  clearCanvas();
  ctx.fillRect(100, speed1, 50, 50);
  ctx.fillRect(300, speed2, 50, 50);
  ctx.fillRect(500, speed3, 50, 50);

  // once all 3 squares are painted, call function again and paint again
  window.requestAnimationFrame(updateCanvas);
}

// START THE LOOP VIA:

// INITIAL CALL to updateCanvas
// requestAnimationFrame - calls the callback 60 times per second
// window.requestAnimationFrame(updateCanvas);

// OR BY EVENT LISTENER TRIGGERING updateCanvas
button.addEventListener('click', function() {
  window.requestAnimationFrame(updateCanvas);
});
```





<br>



## Controlling the elements with User interaction







### [Codepen Example - Canvas Pacman](<https://codepen.io/Denzelzeldi/pen/pBRQYJ>)





Let's go through the code together step by step



**index.html**

```html
<canvas id="canvas" height="500" width="700"></canvas>
```

**style.css**

```css
canvas {
  border: 1px solid red;
  background: black;
}
```



**index.js**

#####  1. Create the canvas and get the context

```js
const canvas = document.getElementById("canvas");
const ctx    = canvas.getContext("2d");
ctx.fillStyle = 'white';
ctx.font = '18px serif';
```



#####  2. Create the ghost object which holds the position and movement methods

```js
// ghost object
let ghost = {
  x: 25,
  y: 25,
  moveUp:    function() { this.y -= 25 },
  moveDown:  function() { this.y += 25 },
  moveLeft:  function() { this.x -= 25 },
  moveRight: function() { this.x += 25 },
}
```



##### 3. Add the event listener to handle movement when user presses a keyboard button

```js
document.addEventListener('keydown', function (e) {
  console.log('KEYDOWN CODE ->', e.keyCode );
  
  switch (e.keyCode) {
    case 38: 
      ghost.moveUp();
      console.log('up',ghost);
      break;
      
    case 40: ghost.moveDown();
      console.log('down', ghost);
      break;
      
    case 37: ghost.moveLeft();
      console.log('left',  ghost);
      break;
      
    case 39: ghost.moveRight();
      console.log('right', ghost);
      break;
  
  updateCanvas();
}
```



##### 4. Create the function which when called draws/renders the ghost image on the canvas

```js
function draw (ghost) {
  let img = document.createElement('img');
  img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";
  img.onload = function() {
  // drawImage(imgObj, position-x, position-y, width, height);
     ctx.drawImage(img, ghost.x, ghost.y, 50, 50);
  }
}
```



##### 5. Create the updater function that will be called by the `requestAnimationFrame` loop

```js
function updateCanvas() {
  ctx.clearRect(0, 0, 1500,1700);
  // fillText(text, position-x, position-y, maxWidth);
  ctx.fillText("Ghost_x: " + ghost.x, 580, 40);
  ctx.fillText("Ghost_y: " + ghost.y, 580, 60);
  draw(ghost)
}
```



##### 6. Create the initial call to the `updateCanvas` function to start the loop

```js
// initial call to create the ghost on the canvas
updateCanvas();
```



<br>



### Your turn

### [Exercise - 'Space' Pacman](https://gist.github.com/ross-u/e56058231f05455c870ac03742d74533) (5 - 7 min)

We may want to restart everything, putting the **ghost** on it's initial position. 

Let´s do it using the `spacebar` key.



**Solution**

```js
    case 32:  // Space 
      console.log('back to start',  ghost);
      ghost.x = 50;
      ghost.y = 50;
      break;
```









### Infinitely looping an Image



- When rendering a 2d game, we usually need a background image that moves while our character or element is moving through the `canvas`.

- To achieve this effect you will need to find a image that can loop and whose dimensions match your use. It may be a bit tricky to set it because you will have to adjust the image so that there are no connections of one image to another showing.

  

  **Example - Using Canvas** 



## [Codepen - Canvas horizontal looping image](https://codepen.io/ironhack/pen/ZvmmGP)

## [Codepen - Canvas vertical looping image](https://codepen.io/Denzelzeldi/pen/YmNBap)



<br>



**Using CSS**

Another way to do this is to provide a background image on the container `div` that is holding the canvas and add the css animation to loop the background.



<br>



### [Lecture Notes for the students](https://gist.github.com/ross-u/f557af7d355c745685c376480f995aea)



<br>



## Extra Resources

### [Introduction to HTML Canvas](https://www.youtube.com/watch?v=3GqUM4mEYKA)

### [Canvas Game Components](https://www.w3schools.com/graphics/game_components.asp) 