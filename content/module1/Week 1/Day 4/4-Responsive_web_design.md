# CSS | Responsive Web Design



## Introduction to Responsive Web Design



### Examples



Multiple examples:

<https://responsivedesign.is/examples/>



Glovo

<https://glovoapp.com/en/bcn#>



IronHack

<https://www.ironhack.com/en>





### Guidelines / main ideas

 **We don’t focus on the device. Instead, we have to think of the viewport size**.



##### Responsive design focus is on mobile first. 

##### Instead of making an app for desktop and then trimming it to fit the mobile, we instead make it for mobile first with most essential features and then work up from there when creating a desktop version.



### Viewport 



What is the viewport?

##### The viewport is the user's visible area of a web page.



##### To determine the viewport size we have following tools available:

- [Viewport Dimensions Chrome tool](<https://chrome.google.com/webstore/detail/viewport-dimensions/kchdfagjljmhgapoonapmfngpadcjkhk?hl=en>)

- Chrome DevTools - Responsive Device Bar





### Setting The Viewport

##### HTML5 introduced a method to allow control over the viewport, through the `<meta>` tag.

You should include the following `<meta>` viewport element in all your web pages:



```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```



##### The `initial-scale` property controls the zoom level when the page is first loaded. 





### Media Queries

Media query is a CSS technique introduced in CSS3.

It uses the `@media` rule to include a block of CSS properties only if a certain condition is true.

This rules determine when another CSS style starts applying. We call this a breakpoint.



**Example** - do in VS code

```html
  <h1>CSS Media Queries</h1>
  <p>The background will change according to the viewport width change.</p> <br> <br>

  <h3>Smartphones - <span class="details">from 320px and up </span>(min-width: 320px)</h3>
  <p>BLUE</p>
  <br>

  <h3>Tablets, iPads (portrait) - <span class="details">from 768px and up</span> (min-width: 768px)</h3>
  <p>GREEN</p>
  <br>

  <h3>Tablets, iPads (landscape) - <span class="details">from 1024px and up  </span>(min-width: 1024px)</h3>
  <p>YELLOW</p>
  <br>

  <h3>Desktops and laptops  - <span class="details">from 1224px and up </span>(min-width: 1224px)</h3>
  <p>ORANGE</p>
  <br>

  <h3>Large screens  - <span class="details">from 1824px and up </span>(min-width: 1824px)</h3>
  <p>AQUA (zoom out if needed  [Ctrl & - ] )</p>
  <br>
```



```css
body {
  background: white;
}

.details {
  font-size: 20px;
  font-weight: 200;
}



/* MEDIA QUERIES */

/* Mobile first, we start from the smallest viewport width */

/* From 320px and up */
@media (min-width: 320px) {
 body {
  background-color: blue;
}
}

/* From 768px and up */
@media (min-width: 768px) {
 body {
  background-color: green;
}
}

/* From 1024px and up */
@media (min-width: 1024px) {
 body {
  background-color: yellow;
}
}

/* From 1224px and up */
@media (min-width: 1224px) {
 body {
  background-color: orange;
}
}

/* From 1824px and up */
@media (min-width: 1824px) {
 body {
  background-color: aqua;
}
}
```





### max-width query



```html
<!-- Additional media query-->

  <h3>Custom media query - <span class="details">from 800px and up, until 900px </span>(min-width: 800px) and (max-width: 900)</h3>
  <p>AQUA (zoom out if needed  [Ctrl & - ] )</p>
  <br>
```







## Responsive Font Size with CSS





#### CSS Viewport Units

CSS viewport units were specially are units relative to the viewport size. 



- **vw**. Viewport width. 1vw equals 1% of the viewport width.
- **vh**. Viewport height. 1vh equals 1% of the viewport height.
- **vmin**. Viewport minimum. It’s relative to the viewport's smaller dimension (width or height).
- **vmax**. Viewport maximum. It’s relative to the viewport's longer dimension (width or height).



### Pixels, ems, rems and Media Queries



- **px**. It specifies the height of the letters in CSS pixels

  

- **em**. It’s relative to parent’s font size. 

  i.e. 2em = 20px if parent element’s `font-size` is 10px.

  

- **rem**. It’s relative to the root  element font size (`<html>`). 

  i.e. 1em = 10px if html element’s `font-size` is 10px.



**Example**

```html
<html>
  <head>.....</head>
  <body>
    <h1>Champions League Champions</h1>
    <ul>
      <li>Real Madrid</li>
      <li>FC Barcelona</li>
      <li>Juventus</li>
      <li>Manchester United</li>
    </ul>
  </body>
</html>
```

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 1.5rem
}

ul {
  font-size: 8px;
}

li {
  font-size: 1.5em;
}

/*
<p> tags will have 15px size.
<ul> tags will have 12px size.
*/


@media (max-width: 600px) {
  html {
    font-size: 8px;
  }

/*
<p> tags will have 12px size.
ul> tags will have 12px size.
*/
```







#### Same but with `rem` values

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 1.5rem
}

li {
  font-size: 1rem;
}

/*
<p> tags will have 15px size.
<ul> tags will have 10px size.
*/


@media (max-width: 600px) {
  html {
    font-size: 8px;
  }

/*
<p> tags will have 12px size.
ul> tags will have 8px size.
*/
```







#### Video - CSS Units / Box Dimensions

<https://www.youtube.com/watch?v=ynk_ymY-tFs>







### Different stylesheets for different media

You can also have different stylesheets for different media:

```html
<link rel="stylesheet" media="*mediatype* and|not|only (*expressions*)" href="stylesheet-name.css"> 
```



**Example** - Add to the previous code

```html
<!-- Add to <head> -->
<link rel="stylesheet" href="loaded.css" media="screen and (min-width:1050px) and (max-width:1150px)">
```



```css
/* loaded.css */
body {
  background-color: pink;
}

p {
  font-size: 40px;
  color: red;
}
```





## Responsive images

```html
  <h1>Responsive images</h1>
  <div class="container">
    <img src="./logo-ironhack.png" alt="">
  </div>
```

```css
h1 {
  text-align: center;
  color: navy;
  margin-top: 70px;
}

p {
  text-align: center;
  font-size: 24px;
}

/* MAKING THE IMAGE RESPONSIVE */
img {
  width: 100%;
  height: auto;
}
```





## Responsive div background

(ADD BELOW THE PREVIOUS CODE)

```html
  <h1>Responsive div background</h1>
  <div class="image-div"></div>
```

```css
/* SETTING THE DIV BACKGROUND */
.image-div {
  margin: 0 auto;
  width: 100%;
  height: 500px;
  border: 2px solid navy;
  background-image: url("./river_canyon.jpg"); /* Link to the background image */
  background-repeat: no-repeat;  /* don't repeat the image if there is remaining space */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-position: center; /* Center the image */
}
```

