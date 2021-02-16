# Canvas | Intro & Basic Drawing

## The `<canvas>` tag

The HTML `<canvas>` tag serves as a container for drawing canvas graphics in the Browser.

You must use JavaScript to actually draw the graphics.





The Canvas Interface mostly focuses on 2D graphics. 

The [WebGL API](https://developer.mozilla.org/en-US/docs/Web/WebGL), which also uses the `canbas` element, draws [hardware-accelerated](https://www.omnisci.com/technical-glossary/hardware-acceleration) 2D and 3D graphics.



<br>



```bash
mkdir 00-canvas-basics && cd 00-canvas-basics

vanilla-js

code .
```



### Creating the canvas tag

**index.html**

```html
<canvas id="example" width="500" height="400"></canvas>
```



**style.css**

```css
canvas {
    border: 2px solid red;
}
```





### Working with canvas to create visual elements



We will work with canvas from JS. From JS we create visual elements and display them on the canvas.
In this way, canvas serves as a literal canvas, where we paint things.





### Setting the 2D context



Context is  used to create and manipulate the content in canvas.



**index.js**

```js
//  Select the canvas DOM node
const canvas = document.getElementById('example');

// Create a 2 dimensional drawing board using canvas method `.getContext()`
const ctx = canvas.getContext('2d');
```





### **The 2d Grid - x and y axis**

**Canvas grid** or **coordinate space** is used to draw using the **x** and **y** coordinates.

It starts at  **0 , 0** in the top left corner.

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e173c6eb22b8e3375c7ba539686a0e8a.png)







## [The 2d GRID Graphic - Codepen](https://codepen.io/Denzelzeldi/full/KYaBLp)







### Rectangles or paths

- `<canvas>` elements only support two primitive shapes: ***<u>rectangles</u>*** and ***<u>paths</u>***.

- All other shapes must be created by combining one or more *<u>paths</u>*.







### Rectangles



**syntax** - rectangle functions

```js
// DRAWING A RECTANGLE:


/*
// SYNTAX:

fillStyle = 'color';  // Set the fill style for the next filled shape

strokeStyle = 'color';  // Set the line style for the next shape
lineWidth = '1px';  // Set line width for the next shape


fillRect(x, y, width, height)    //Draws a filled rectangle.

strokeRect(x, y, width, height)  //Draws a rectangular outline.

clearRect(x, y, width, height)  //Clears the specified rect. area, making it transparent.

*/
```



**index.js**  - Step by step

```js
// Set the fill style for the next shape
ctx.fillStyle = 'purple';

// FILLED RECTANGLE
// draw a rectangle
ctx.fillRect(25, 25, 100, 100);

// CLEAR RECTANGLE
// draw clear rectangle on top of the purple one
ctx.clearRect(45, 45, 60, 60);


// BLUE STROKE RECTANGLE
// set the color and the line width for the stroke rectangle
ctx.strokeStyle = 'blue';
ctx.lineWidth = 3;

// draw the stroke rectangle
ctx.strokeRect(150, 50, 50, 50);


```









## Paths

- A path is a list of connected points, that can be of different shapes and style.



#### STEPS TO DRAW A PATH:

- Begin the path

- Use drawing commands to draw the path.

- Use `.stroke()` or `fill()` to render it

- Close the path

  

  

  ```js
  // DRAWING PATHS (LINES)
  /* 
    Steps to draw a Canvas path/line:
    - Begin the path `ctx.beginPath()`
    - Use drawing commands to draw the path `ctx.moveTo(x, y)` `ctx.lineTo(x, y)`
    - Close the path `ctx.closePath()`
    - Use `.stroke()` or `.fill()` to render the path
  
  */
  ```

  



### Moving the pen

- We use  `moveTo()` function to move the pen without drawing





### Straight Lines

- For drawing straight lines, use the `lineTo()` method

**index.js**

```js
// PATH - Drawing straight lines

// Start the path
ctx.beginPath();

// set the line color
ctx.strokeStyle = "orange";

// starting position is x=50, y=150
ctx.moveTo(50, 150);

// draw the line that has final coordinates x=250, y=150
ctx.lineTo(250, 150);

// .stroke() executes the drawing
ctx.stroke();

// close the path
ctx.closePath();
```











### **globalAlpha = transparency value**

We can use property `globalAlpha` to set the transparency of the shape we are drawing.



```js
// SETTING TRANSPARENCY - .globalAlpha

// Draw a green rectangle
ctx.fillStyle = 'green';
ctx.fillRect(300, 60, 75, 50);

// Turn transparency on - draw a transparent rectangle
ctx.globalAlpha = 0.8;
ctx.fillStyle = 'yellow';
ctx.fillRect(330, 80, 75, 50);

// Draw a red rectangle
// Turn transparency off
ctx.globalAlpha = 1;
ctx.fillStyle = 'red';
ctx.fillRect(380, 110, 75, 50);
```



<br>



### [`globalAlpha` example - CODEPEN](https://codepen.io/ironhack/pen/rzqGZP)





### Using patterns

```html
<canvas id="pattern-canvas" width="300" height="300">
```

```js
// CREATING CONTEXT FOR CANVAS ELEMENT
const patternCanvas = document.getElementById('pattern-canvas');
const pCtx = patternCanvas.getContext('2d');


// USIGN IMAGE PATTERN AS FILL STYLE
// const img = new Image();

const img = document.createElement('img');
img.src = 'https://img.stockfresh.com/files/r/robuart/x/29/8049774_52896881.jpg';
img.addEventListener('load', function() {
  // Create the pattern using the image
  const pattern = pCtx.createPattern(img, 'repeat');  
  
  // 'repeat' , 'repeat-x', 'repeat-y', 'no-repeat'

  // Set the style of the next filled shape
  pCtx.fillStyle = pattern;
  pCtx.fillRect(0, 0, 300, 300);
})
```









### Drawing text

```html
<canvas id="font-canvas" width="400" height="300"></canvas>
```

```js
// DRAWING TEXT

// syntax:
// fillText( textString, x, y)

const fontCanvas = document.getElementById('font-canvas');
const fCtx = fontCanvas.getContext('2d');

fCtx.font = '50px monospace';
fCtx.fillText('Ironhackers', 10, 50);

fCtx.font = '36px monospace';
fCtx.strokeText('Ironhackers', 10, 100);


fCtx.font = '26px monospace';
fCtx.fillStyle = 'cornflowerblue';
fCtx.textAlign = "center"; // 'start' - default value
fCtx.fillText('Ironhack', fontCanvas.width/2, fontCanvas.height/2 );
```





<br>







## Making it interactive with event listener

CODEPEN

<https://codepen.io/Denzelzeldi/pen/ROKYWq?editors=1010>







## Images



### Image source - getting the image reference



We can use different HTML elements to create our image source

- **HTMLImageElement**. These are images created using the `new Image()` constructor, as well as any `<img>` element.
- **Images embedded using the `<img>` element.**
- **HTMLVideoElement**. Using an HTML `<video>` grabs the current frame from the video and uses it as an image.
- **HTMLCanvasElement**. You can use another `<canvas>` element as your image source.



```html
<canvas id="image-canvas" width="400" height="300"> </canvas>
```



```js
// DRAWING IMAGES
const imageCanvas = document.getElementById('image-canvas');
const iCtx = imageCanvas.getContext('2d');

// Create an Image and add the source
const dogImg = document.createElement('img');   // Create new <img> element
dogImg.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg'; // Set source path

dogImg.addEventListener('load', function() {
  iCtx.drawImage(dogImg, 100, 100, 150, 100);
  
  //   iCtx.drawImage(dogImg, 0, 0, imageCanvas.width, imageCanvas.height);
});
```









[CODEPEN EXAMPLE - ANIMATED IMAGE (with setTimeout)](<https://codepen.io/Denzelzeldi/pen/rbjqVr?editors=1010>)







#### SKIP

[CODEPEN EXAMPLE OF DRAWING IMAGE WITH PROPORTION SET](<https://codepen.io/Denzelzeldi/pen/NmdOja?editors=1010>)




