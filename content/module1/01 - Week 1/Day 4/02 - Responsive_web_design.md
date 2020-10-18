# CSS | Responsive Web Design









## Introduction to Responsive Web Design



### Examples



Multiple examples:

<https://responsivedesign.is/examples/>



Glovo

<https://glovoapp.com/en/bcn#>





### Guidelines / main ideas

 **We don’t focus on the device. Instead, we have to think of the viewport size**.



##### Responsive design focus is on mobile first. 

##### Instead of making an app for desktop and then trimming it to fit the mobile, we instead make it for mobile first with most essential features and then work up from there when creating a desktop version.



## Viewport 



#### What is the viewport?



##### The viewport is the user's visible area of a web page.



##### To determine the viewport size we have following tools available:

- [Viewport Dimensions Chrome tool](<https://chrome.google.com/webstore/detail/viewport-dimensions/kchdfagjljmhgapoonapmfngpadcjkhk?hl=en>)

- Chrome DevTools - Responsive Device Bar





## Setting The Viewport



### [Google Developers - Viewport Meta Tag](https://developers.google.com/web/tools/lighthouse/audits/has-viewport-meta-tag)



##### HTML5 introduced a method to allow control over the viewport, through the `<meta>` tag.

You should include the following ``<meta name="viewport">`  element in all your web pages:



```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```



The **`initial-scale`** property controls the zoom level when the page is first loaded. 

**``content=`"width=device-width`** instructs the page to match the screen's width.



Without a **viewport** meta tag, mobile devices render pages at typical desktop screen widths, and then zoom out the page in order to fit the mobile screens.



### Media Queries

Media query is a CSS technique introduced in CSS3.

It uses the `@media` rule to include a block of CSS properties only if a certain condition is true.

This rules determine when another CSS style starts applying. We call this a breakpoint.





**Example** -

 ### do in VS code

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





### `max-width` query



```html
<!-- Additional media query-->

  <h3>Custom media query - <span class="details">from 800px and up, until 900px </span>(min-width: 800px) and (max-width: 900)</h3>
  <p>	BROWN (zoom out if needed  [Ctrl & - ] )</p>
  <br>
```



in `css`

```css
@media (min-width: 800px) and (max-width: 900px) {
  body {
    background-color: pink;
  }
}
```





## Responsive Font Size with CSS





#### CSS Viewport Units

CSS viewport units were specially are units relative to the viewport size. 



- **vw**. Viewport width. 1vw equals 1% of the viewport width.

- **vh**. Viewport height. 1vh equals 1% of the viewport height.

  

- ~~**vmin**. Viewport minimum. It’s relative to the viewport's smaller dimension (width or height).~~

- ~~**vmax**. Viewport maximum. It’s relative to the viewport's longer dimension (width or height).~~



### Pixels, ems, rems and Media Queries



- **px**. It specifies the height of the letters in CSS pixels

  

- **em**. It’s relative to parent’s font size. 

  i.e. 2em = 20px if parent element’s `font-size` is 10px.

  

- **rem**. It’s **relative to the root  element** font size (`<html>`). 

  i.e. 1em = 10px if html element’s `font-size` is 10px.



### [OPEN IN CODEPEN](https://codepen.io/Denzelzeldi/pen/jOPRBpJ?editors=1100)

```html
<html>
  <head>.....</head>
  <body>
    <h1>Superheroes</h1>
    <ul>
      <li>Superman</li>
      <li>Catwoman</li>
      <li>Captain Marvel</li>
      <li>Batman</li>
      <li>Kat Kane / Batwoman</li>
      <li>Spider man</li>
    </ul>
  </body>
</html>
```

```css
/* Root element font-size serves as a reference for the `rem` unit*/
html {
  font-size: 10px;
}

h1 {
  font-size: 3.5rem
}

/* Font size of the parent element serves as the reference for the `em` unit*/
ul {
  font-size: 20px;
}

li {
  font-size: 1em;
}

/*
<h1> tag will have 35px font-size.
<li> tags will have 20px size.
*/
```







#### 

<br>





### Different stylesheets for different media



You can also have different stylesheets for different media:



**Syntax**

```html
<link 
    rel="stylesheet"
    media="*mediatype* and|not|only (*expressions*)"
    href="stylesheet-name.css"
 > 
```



**Example** - Add to the previous code

```html
<!-- Add to the <head> -->
<link
   rel="stylesheet" 
   href="loaded.css"
   media="screen and (min-width:1050px) and (max-width:1150px)"
>
<!-- Stylesheet will load only for screens bigger than 1050px but smaller than 1150px -->
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
```



```css

/* MAKING THE IMAGE RESPONSIVE */
img {
  width: 100%;
  height: auto;
}
```



<br>



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



<br>

##### Common device widths (Generalized - not a set standard)

**XS** - 360px w

**SM** - 480px w

**MD** - 768px w

**LG** - 1024px w

**XL** - 1440px w

**4K** - 2560px w



```css
/* 

Common device widths (Generalized - not a set standard)

XS - 360px w

SM - 480px w

MD - 768px w

LG - 1024px w

XL - 1440px w

4K - 2560px w

*/
```



### [List of Mobile and Tablet viewport sizes](https://docs.adobe.com/content/help/en/target/using/experiences/vec/mobile-viewports.html)





<br>



### [Video - CSS Units / Box Dimensions](https://www.youtube.com/watch?v=2B_uJhpSIC4)



<br>



### [Responsive Desing - Summary](https://gist.github.com/ross-u/c5a461b80d8375f22543510f8cc169ac) (notes for the students)