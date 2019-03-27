### box model

<https://www.w3schools.com/css/css_boxmodel.asp>



### Basics

#####  every HTML element is a **rectangular box**.



##### every box has content area, padding, border and margin.

![img](https://i.imgur.com/LF204FU.gif)



## Border Properties



##### `border-width`, `border-style` and `border-color`. 

##### We can also use the shorthand `border: <width> <style> <color> `

```html
<div>Fancy div</div>

<div id="new-div">New div</div>

<div id="padded-div">Div with padding</div>

<div id="margin-div">Div with margin</div>
```





```css

div {
    width: 170px;
    height: 100px;
    border: 1px solid blue;
}

/* Width of the element is now 172px, 1px border on each side*/

```





##### `border-top`,  `border-bottom`, `border-left`,`border-right`

```js
#new-div {
    width: 170px;
	height: 100px;
    border-bottom: 3px solid red;
}
```





### Padding property



###  `padding` shorthand

**syntax**

```css
element {
	padding: [padding-top], [padding-right], [padding-bottom], [padding-left];
}
```

 OR

```css
element {
	padding: <padding top and bottom>, <padding left and right>
}
```

 OR

```css
element {
	padding: <padding on all 4 sides>
}
```



```css
#padded-div {
    width: 170px;
    height: 100px;
    border: 3px solid green;
    padding: 10px 20px 10px 20px;
    /* padding: 10px 20px; */
    /* padding: 10px; */
}

/* 
with `padding: 10px` what are the width and height of the div ?
*/
```





##### We can also individually set `padding-top`,  `padding-bottom`, `padding-left`,`padding-right`





### Margin property

### `margin` shorthand

**syntax**

```css
element {
	margin: [margin-top], [margin-right], [margin-bottom], [margin-left];
}
```

 OR

```css
element {
	margin: <margin top and bottom>, <margin left and right>
}
```

 OR

```css
element {
	margin: <margin on all 4 sides>
}
```





**Example** 

```css
#margin-div {
    width: 170px;
    height: 100px;
    border: 3px solid green;
    padding: 10px;
	margin: 10px 20px; /* margin-top and margin-bottom 10px */
		    		   /* margin-right and margin-left 20px */
}


/* 
	What are the width and height of the div ?
*/
```





### Margin collapsing - potential interview question

The [top](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top) and [bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom) margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as **margin collapsing**. Note that the margins of [floating](https://developer.mozilla.org/en-US/docs/Web/CSS/float) and [absolutely positioned](https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute) elements never collapse.



**Example**  <https://codepen.io/Denzelzeldi/pen/xBoLmb>



Check out good article on this <https://www.jonathan-harrell.com/whats-the-deal-with-margin-collapse/>