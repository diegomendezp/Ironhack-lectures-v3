# Canvas | Intro & Basic Drawing

## The `<canvas>` tag

The HTML `<canvas>` tag serves as a container for canvas graphics.

You must use JavaScript to actually draw the graphics.





### Creating the canvas tag



**index.html**

```html
<canvas id="example" width="300" height="300"></canvas>
```



**style.css**

```css
canvas {
    border: 1px solid red;
}
```





### Setting the 2D context



Context is  used to create and manipulate the content in canvas.

**index.js**

```js
//  retrieve the canvas DOM node DOM
let canvas = document.getElementById('example');
// Setting the context using canvas method `.getContext()`
let ctx = canvas.getContext('2d');
```





### **The Grid in canvas**

####  **Canvas grid** or **coordinate space** is used to draw using the x and y coordinates. It starts at  **0 , 0** in the top left corner.

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e173c6eb22b8e3375c7ba539686a0e8a.png)







# EXAMPLE OF THE GRID

<https://codepen.io/Denzelzeldi/pen/KYaBLp>







#### `<canvas>` elements only support two primitive shapes: ***<u>rectangles</u>*** and ***<u>paths</u>***.

####  All other shapes must be created by combining one or more *<u>paths</u>*.





### Rectangles



**syntax** - rectangle functions

```js
// fillRect(x, y, width, height)    //Draws a filled rectangle.
// strokeRect(x, y, width, height)  //Draws a rectangular outline.
// clearRect(x, y, width, height)  //Clears the specified rectangular area, making it fully transparent.
```



**index.js**  - Step by step

```js
// set the fill style for the fillRect
ctx.fillStyle="purple";
// draw the rectangle
ctx.fillRect(25, 25, 100, 100);

// draw clear rectangle on top of the purple one
ctx.clearRect(45, 45, 60, 60);


// set the color and line width for the stroke rectangle
ctx.strokeStyle = 'blue';
ctx.lineWidth = 3;

// draw the stroke rectangle
ctx.strokeRect(150, 50, 50, 50);


```









## Paths

#### **A path is a list of points connected , that can be of different shapes, curved or not, of different width and of different color**.



#### STEPS TO DRAW A PATH:

- Begin the path
- Use drawing commands to draw the path.
- Close the path
- Use stroke or fill to render it



**syntax**

```js
// beginPath()    // Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
// closePath()    // Closes the path so that future drawing commands are once again directed to the context.
// stroke()       // Draws the shape by stroking its outline.
// fill()         // Draws a solid shape by filling the path's content area.
// moveTo(x, y)  // Moves the pen to the coordinates specified by x and y
// lineTo(x, y)    // Draws a line from the current drawing position to the position specified by x and y.
```







### Moving the pen

#### We use  `moveTo()` function to move the pen without drawing





### Straight Lines

#### For drawing straight lines, use the `lineTo()` method

**index.js**

```js
// PATH
// start the path
ctx.beginPath();

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
ctx.fillStyle="yellow";

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
/*
	arc(x, y, radius, startAngle, endAngle, anticlockwise)

  Draws an arc which is centered at (x, y) position with radius starting at startAngle and ending at endAngle going  in the given direction indicated by anticlockwise (default is clockwise).

	arcTo(x1, y1, x2, y2, radius)

  Draws an arc with the given control points and radius,
connected to the previous point by a straight line.
*/
```





## **PARAMETERS**

- #### `x` and `y` are the coordinates of the center of the circle

- #### `radius` of the circle

- #### `startAngle` and `endAngle`  start and end points of the arc in radians. Measured from the x-axis.

- #### `anticlockwise` parameter is a `Boolean` value which, when true, draws the arc anticlockwise; otherwise, the arc is drawn clockwise.





```js
/* Angles in the arc function are measured in radians, not degrees. To convert degrees to radians you can use the following JavaScript expression:

radians = (Math.PI / 180) * degrees.

*/
```



### Lets draw few circles

```js
// CIRCLE - stroke

ctx.beginPath();

// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(300, 300, 75, 0, Math.PI * 2); //  Math.PI * 2 - Full circle    Math.PI * 1 -  Half circle

// ctx.arc(300, 300, 75, 0, (Math.PI / 180) * degrees); // Converting radians to degrees

ctx.lineWidth = 20;
ctx.strokeStyle = "green";
ctx.stroke();
ctx.closePath();


// CIRCLE - fill

ctx.beginPath();
ctx.arc(300, 300, 35, 0, Math.PI * 2); //  Math.PI * 2 - Full circle    Math.PI * 1 -  Half circle
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath()


// CIRCLE - fill

ctx.beginPath();
ctx.arc(300, 300, 15, 0, Math.PI * 2); //  Math.PI * 2 - Full circle    Math.PI * 1 -  Half circle
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath()
```





### Exercise

#### RSS Example

Cool huh? Now is your turn. Let´s start with some basic shapes! First, we will try the RSS symbol, something like this:

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_19435492928da993e95c9759244bc910.png)







## Color





### Transparency - `rgba`

To assign a color that has a transparency we can use `rgba` value

```js
ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';

ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
```







### **globalAlpha = transparencyValue**

We can use property `globalAlpha` to set the transparency of the shape we are drawing.





### `globalAlpha` example

<https://codepen.io/ironhack/pen/rzqGZP>

In this example, we’ll draw a `background` of four different colored squares. On top of these, we’ll draw a set of semi-transparent circles. The `globalAlpha` property is set at 0.5 which will be used for all shapes from that point on.

Every step in the `for` loop draws a set of circles with an increasing radius. The final result is a radial gradient. By overlaying ever more circles on top of each other, we effectively reduce the transparency of the circles that have already been drawn. By increasing the step count and in effect drawing more circles, the `background` would completely disappear from the center of the image.





## Line styles



`lineCap` property sets or returns the style of the end caps for a line.

**Example**

```html
<canvas id="line-style-canvas" width="300" height="150>
```

```js
let canvas = document.getElementById("line-style-canvas");
let ctx = canvas.getContext("2d");

// DIFFERENT lineCap values and widths
ctx.beginPath();
ctx.lineCap = "round";
ctx.lineWidth = 20;
ctx.moveTo(40, 70);
ctx.lineTo(200, 70);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "square";
ctx.lineWidth = 40;
ctx.moveTo(40, 120);
ctx.lineTo(200, 120);
ctx.stroke();


// Diffferent lineJoint values
ctx.beginPath();
ctx.lineWidth = 20;
ctx.lineJoin = "bevel";
//ctx.lineJoin = "round";
//ctx.lineJoin = "mitter";
ctx.moveTo(300, 20);
ctx.lineTo(350, 50);
ctx.lineTo(300, 100);
ctx.stroke();
```







### Using patterns

```html
<canvas id="pattern-canvas" width="300" height="300>
```

```js
var img = new Image();
img.src = 'https://img.stockfresh.com/files/r/robuart/x/29/8049774_52896881.jpg';
img.onload = function() {
  var pattern = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
```









### Drawing text

```html
<canvas id="font-canvas" width="400" height="300"></canvas>
```

```js
  let canvas = document.getElementById('font-canvas');
  let ctx = canvas.getContext('2d');
  ctx.font = '50px monospace';
  ctx.fillText('Ironhackers', 10, 50);
  ctx.font = '36px monospace';
  ctx.strokeText('Ironhackers', 10, 100);
```









## Making it interactive with event listener

CODEPEN

<https://codepen.io/Denzelzeldi/pen/ROKYWq?editors=1010>







### Images



### Image source - getting the image reference



We can use different HTML elements to create a  our image source

- **HTMLImageElement**. These are images created using the `Image()` constructor, as well as any `<img>` element.
- **Images embedded using the `<img>` element.**
- **HTMLVideoElement**. Using an HTML `<video>` grabs the current frame from the video and uses it as an image.
- **HTMLCanvasElement**. You can use another `<canvas>` element as your image source.



```js

let img = new Image();   // Create new <img> element
img.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg'; // Set source path


// or 
// <img id="my-image" src="https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg">
let myImage = document.getElementById('my-image');
```





### Drawing an image



#### Once we have a reference to our source image object we can use the `drawImage()` method to render it to the canvas. 

**SYNTAX**

```js
ctx.drawImage(whichImage, x, y, width, height);
```



[CODEPEN EXAMPLE - DRAW IMAGE (MOVING)](<https://codepen.io/Denzelzeldi/pen/rbjqVr?editors=1010>)





[CODEPEN EXAMPLE OF DRAWING IMAGE WITH PROPORTION SET](<https://codepen.io/Denzelzeldi/pen/NmdOja?editors=1010>)

