# Canvas | Basic Animations





## Animations Steps

When doing **animations** on `canvas`, we need to create a set of frames that the canvas will render in a sequence to create the illusion of an animation.



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_465f4281c2e9278f3720e82d68535057.png)





When making canvas animations there are 4 steps we can take

1. **Save canvas state**
   Save the current state of the drawing (colors, styles , etc) each time a frame is drawn (current frame).
2. **Clear the canvas**
   We need to clear any shapes that have been drawn previously using the `clearRect()` method.
3. **Restore the canvas state**
   If you’ve saved the state, restore it before drawing a new frame.

4. **Draw animated shapes**
   The step where you do the actual frame rendering.



### Saving a state

Every time the `save()` method is called, the current drawing state is pushed onto the stack. 



A drawing state consists of:

- The **transformations** that have been applied (i.e. *translate*, *rotate* and *scale*).

- The current values of the following **attributes**: `strokeStyle`, `fillStyle`, `globalAlpha`, `lineWidth`, `lineCap`, `lineJoin`, `miterLimit`, `lineDashOffset`, `shadowOffsetX`, `shadowOffsetY`, `shadowBlur`, `shadowColor`, `globalCompositeOperation`, `font`, `textAlign`, `textBaseline`, `direction`, `imageSmoothingEnabled`.

  

You can call the `save()` method **as many times as you like**. 

When the `restore()`method is called, the last saved state is popped off the stack and all saved settings are restored and applied.



### [Save and restore Example CODEPEN](<https://codepen.io/Denzelzeldi/pen/KYarNY?editors=0010>)





## Scheduling updates - frame timing

### We can use

**setInterval(method, delay)**
// Starts repeatedly executing the function specified by method every delay milliseconds.

**setTimeout(method, delay)**
// Executes the function specified by function in delay milliseconds.



### `requestAnimationFrame(callback)`
####  Calls the given callback function before the next rendering of frame on the screen).



#### it runs the given callback around 60 times per second, so it enables smooth rendering.



#### it returns an id and can be canceled using the `cancelAnimationFrame(globalID);`

### [Example of requestAnimationFrame](<https://codepen.io/Denzelzeldi/pen/WWRaVK>)







## Moving elements

#### To move the elements we either need to increas or decrease the value of the X or Y  position.  If using `requestAnimationFrame` and we want element to move faster, we need to add more to the X or Y axis position value on every callback



**EXAMPLE**



**index.html**

```html
<canvas id="canvas" width="700" height="900"></canvas><button>START</button>
```



**index.js**

```js
const canvas = document.getElementById("canvas");
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

// Initial call to updateCanvas
// requestAnimationFrame - calls the callback 60 times per second
// window.requestAnimationFrame(updateCanvas);


// OR
button.addEventListener('click', function () {
  window.requestAnimationFrame(updateCanvas);
});
```









## Controlling the elements with User interaction







### [CODEPEN EXAMPLE DONE](<https://codepen.io/Denzelzeldi/pen/pBRQYJ>)



**EXAMPLE** -  LETS GO THROUGH THE CODE TOGETHER STEP BY STEP

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

```js
const canvas = document.getElementById("canvas");
const ctx    = canvas.getContext("2d");
ctx.fillStyle = 'white';
ctx.font = '18px serif';

// ghost object
let ghost = {
  x: 25,
  y: 25,
  moveUp:    function() { this.y -= 25 },
  moveDown:  function() { this.y += 25 },
  moveLeft:  function() { this.x -= 25 },
  moveRight: function() { this.x += 25 },
}


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
    
    // 
    case 32: 
      console.log('back to start',  ghost);
      ghost.x = 50;
      ghost.y = 50;
      break;
  }
  	
  
  updateCanvas();
}
                          
function draw (ghost) {
  let img = document.createElement('img');
  img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";
  img.onload = function() {
  // drawImage(imgObj, position-x, position-y, width, height);
     ctx.drawImage(img, ghost.x, ghost.y, 50, 50);
  }
}

function updateCanvas() {
  ctx.clearRect(0, 0, 1500,1700);
  // fillText(text, position-x, position-y, maxWidth);
  ctx.fillText("Ghost_x: " + ghost.x, 580, 40);
  ctx.fillText("Ghost_y: " + ghost.y, 580, 60);
  draw(ghost)
}


// initial call to create the ghost on the canvas
updateCanvas();
```







## Infinite looping an Image



### When rendering a 2d game, we usually need a background image that moves while our character or element is moving through the `canvas`.

