# CSS Flexbox





### Flex Container

##### The flex container is the parent element in which `flex` items are contained. 

 



#### Visual explanation of directions in Flex box

![img](https://cdn-images-1.medium.com/max/1600/1*_Ruy6jFG7gUpSf76IUcJTQ.png)





`display: inline-flex` makes the *flex container* display inline and not block. 

```html
  <div class="container">
    <div class="child">1</div>
    <div class="child">2</div>
    <div class="child">3</div>
    <div class="child">4</div>
    <div class="child">5</div>
    <div class="child">6</div>
    <div class="child">7</div>
    <div class="child">8</div>
    <div class="child">9</div>
    <div class="child">10</div>
  </div>
```



```js
body { 
  background: rgb(25, 7, 37);
}

.child {
  width: 180px;
  height: 180px;
  text-align: center;
  margin: 5px;
  font-size: 30px;
  background: green;
}

.container {
  height: 100vh;
  display: flex;
}
```





### Flex container (as a parent) manages direct children -the **flex items**



### Flex Parent Properties :



#### `flex-direction` - default `row`

This specifies the **main-axis**, and direction how flex items are placed in the flex container.



```css
.container {
  flex-direction: row(default) | row-reverse | column | column-reverse;
}
```



#### `flex-wrap` 

- **nowrap** (default): all flex items will be on one line
- **wrap**: flex items will wrap onto multiple lines, from top to bottom.
- **wrap-reverse**: flex items will wrap onto multiple lines from bottom to top.

```js
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```





### `justify-content` - position content across the <u>main axis</u>

**default**: `justify-content: flex-start`

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```





### `align-content` - aligns content on the cross axis

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```





### `align-items` - aligns items on a single line across the cross axis



### !! We should  delete `align-content`  before using `align-items` on the same element (either one or the other).

```css
/* delete align-content if it exists on the same element */

.container {
  align-items: flex-start | flex-end | center | baseline;
}
```









## Properties of the flex children - flex items



### `order` - allows reordering the **flex items** within a container



By default, flex items are laid out in the source order, with **default** `order : 0`

```html
<div class="child one">5</div>
```

```css
.one {
  order: 1;
  background: orange
}
```









### `flex-grow` -  defines the ability for a flex item to grow if neccesary.



If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. 

If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least)

![img](<https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg>)

```html
<div class="child bigger">6</div>
```

```css
.bigger {
  flex-grow: 2;
  background: pink;
}

/* resize the browser width to be buggerto see the effect */
```





### `flex-basis` - sets the default size of an element before the remaining space is distributed.



#### Negative numbers are invalid

**Syntax**

```css
flex-basis: <length> | auto; /* default auto */
```

#### Example

```css
.child {
  flex-basis: 300px;
}
```



### `flex-shrink` - defines the ability for a flex item to shrink if needed.



For the flex-shrink to work we need to give the item a default width by setting its **flex-basis** or **width** property.



**Syntax**

```css
.item { flex-shrink: <number>; /* default 0 */ }
```



#### Example

```html
<div class="child flexible">3</div>
```

```css
.container {
  flex-wrap: no-wrap;
  /* Change to no-wrap to limit the space available and enable shrinking */
}

.flexible { 
  /* default width is set by `.child` width */
  flex-grow: 2;
	flex-shrink: 3;
  background: lightsalmon;
}
```

**Negative numbers are invalid.**





### `flex` -  shorthand for `flex-grow`, `flex-shrink` and `flex-basis` 



##### The second and third parameters (`flex-shrink` and `flex-basis`) are optional. 

##### The default is **0 1 auto**.

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```



```css
/* Refactor .flexible */

.flexible {
  flex:2 3 200px;
  background: lightsalmon;
}
```










## Resources

- [tutorial](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [DOCS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [flexbox CSS Tricks Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [flexbox froggy](https://flexboxfroggy.com/)
- [flexbox MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

## Ironhack Learning Platform