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

- Close the path

- Use `.stroke()` or `fill()` to render it

  

  ```js
  // DRAWING PATHS (LINES)
  /* Steps to draw a Canvas path/line:
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









### Let's draw a shape

**index.js**

```js

// TRIANGLE
// start the path
ctx.beginPath();

// change the fill style
ctx.fillStyle="magenta";

// starting position is x=150, y=200
ctx.moveTo(150, 200);

// draw the line that has final coordinates x=100, y=250
ctx.lineTo(100, 250);

// draw the line that has final coordinates x=200, y=250 
ctx.lineTo(200, 250);

// fills the shape and closes the path automatically
ctx.fill();

// close the path
ctx.closePath();
```







### Arcs



#### To draw arcs or circles, we use the `arc()` or `arcTo()` methods.

**SYNTAX**

```js
// DRAWING ARCS OR CIRCLES - arc()   and   arcTo()

/*
	arc(x, y, radius, startAngle, endAngle, anticlockwise)


  - Draws an arc which is centered at (x, y) position with radius starting 
  at startAngle and ending at endAngle going  in the given direction indicated 
  by anticlockwise (default is clockwise).


  ---------------------------------------------------------------------


	arcTo(x1, y1, x2, y2, radius)

   - Draws an arc with the given control points and radius,
   connected to the previous point by a straight line.
*/
```

```js
// DRAWING ARCS OR CIRCLES - arc()

/*
	arc(x, y, radius, startAngle, endAngle, anticlockwise)
*/
```



## **PARAMETERS**

- `x` and `y` are the coordinates of the center of the circle

- `radius` of the circle

- `startAngle` and `endAngle`  start and end points of the arc in radians. Measured from the x-axis.

- `anticlockwise` parameter is a `Boolean` value which, when true, draws the arc counterclockwise; otherwise, the arc is drawn clockwise.





```js
/*
// ARC - ANGLE VALUES
// CONVERTING DEGREES TO RADIANS:

// Angles in the arc function are measured in radians, not degrees.
// To convert degrees to radians use the following JavaScript expression:

let degrees = 180;
let radians = (Math.PI / 180) * degrees.


// USING Math.PI:
// Full Circle =   Math.PI * 2
// Half Circle =   Math.PI * 1
*/
```



### Lets draw few circles

```js
// CIRCLE - stroke

ctx.beginPath();


ctx.lineWidth = 20;
ctx.strokeStyle = "green";

// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(300, 300, 75, 0, Math.PI * 2); //  Math.PI * 2 - Full circle    Math.PI * 1 -  Half

//  Math.PI * 2 - Full circle    
// Math.PI * 1 -  Half circle


// ctx.arc(300, 300, 75, 0, (Math.PI / 180) * degrees); // Converting radians to degrees

ctx.stroke();
ctx.closePath();


// CIRCLE - fill

ctx.beginPath();

ctx.fillStyle = "red";

ctx.arc(300, 300, 35, 0, Math.PI * 2); //  Math.PI * 2 - Full circle    Math.PI * 1 -  Half circle

ctx.fill();

ctx.closePath()



// CIRCLE - fill

ctx.beginPath();

ctx.fillStyle = "yellow";

ctx.arc(300, 300, 15, 0, Math.PI * 2); 
//  Math.PI * 2 - Full circle    
//	Math.PI * 1 -  Half circle

ctx.fill();

ctx.closePath();
```



### Arc (skip this part)

Using `arcTo()` is more complex than `arc()`, therefore we will do only a simple example.

```js
// ARC - arcTo()
ctx.strokeStyle = 'red';
ctx.lineWidth = 4;

ctx.beginPath();

ctx.moveTo(20, 20); // Set a starting point
ctx.lineTo(80, 20); // Create a horizontal line

//	arcTo(x1, y1, x2, y2, radius)
ctx.arcTo(140, 20, 140, 70, 50); // Create an arc
ctx.lineTo(140, 120); // Continue with vertical line

ctx.stroke(); // Draw it

ctx.closePath();
```







## Line styles (skip this part)



`lineCap` property sets or returns the style of the end caps for a line.

**Example**

```html
<canvas id="line-style-canvas" width="400" height="150"></canvas>
```

```js
// CREATING CONTEXT FOR CANVAS ELEMENT
let lineCanvas = document.getElementById('line-style-canvas');
let lCtx = lineCanvas.getContext('2d');


// DIFFERENT lineCap values and widths
lCtx.beginPath();
lCtx.lineCap = "round";
lCtx.lineWidth = 20;
lCtx.moveTo(40, 70);
lCtx.lineTo(200, 70);
lCtx.stroke();

lCtx.beginPath();
lCtx.lineCap = "square";
lCtx.lineWidth = 40;
lCtx.moveTo(40, 120);
lCtx.lineTo(200, 120);
lCtx.stroke();


// Diffferent lineJoint values
lCtx.beginPath();
lCtx.lineWidth = 20;
lCtx.lineJoin = "bevel";
//lCtx.lineJoin = "round";
//lCtx.lineJoin = "mitter";
lCtx.moveTo(300, 20);
lCtx.lineTo(350, 50);
lCtx.lineTo(300, 100);
lCtx.stroke();
```







## Color





### Transparency - `rgba`

To assign a color that has a transparency we can use `rgba` value

```js
ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';

ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
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





### [`globalAlpha` example - CODEPEN](https://codepen.io/ironhack/pen/rzqGZP)







### Using patterns

```html
<canvas id="pattern-canvas" width="300" height="300">
```

```js
// CREATING CONTEXT FOR CANVAS ELEMENT
let patternCanvas = document.getElementById('pattern-canvas');
let pCtx = patternCanvas.getContext('2d');


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

let fontCanvas = document.getElementById('font-canvas');
let fCtx = fontCanvas.getContext('2d');

fCtx.font = '50px monospace';
fCtx.fillText('Ironhackers', 10, 50);

fCtx.font = '36px monospace';
fCtx.strokeText('Ironhackers', 10, 100);
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



```js
// DRAWING IMAGES

// Create an Image and add the source
let img2 = document.createElement('img');   // Create new <img> element
img2.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg'; // Set source path

img2.addEventListener('load', function() {
  pCtx.drawImage(img2, 100, 100, 150, 100);
});
```









[CODEPEN EXAMPLE - ANIMATED IMAGE (with setTimeout)](<https://codepen.io/Denzelzeldi/pen/rbjqVr?editors=1010>)





[CODEPEN EXAMPLE OF DRAWING IMAGE WITH PROPORTION SET](<https://codepen.io/Denzelzeldi/pen/NmdOja?editors=1010>)





## [LECTURE NOTES and Code - GIST](https://gist.github.com/ross-u/a1bd347c11bbc988b149412c483446bb) (reference for the students)







### Exercise

#### RSS Example

Cool huh? Now is your turn. Let´s start with some basic shapes! First, we will try the RSS symbol, something like this:

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_19435492928da993e95c9759244bc910.png)





