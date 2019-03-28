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





