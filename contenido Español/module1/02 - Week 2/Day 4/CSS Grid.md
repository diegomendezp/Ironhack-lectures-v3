# CSS Grid

## Grid Layout

The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages.



![img](https://cdn-images-1.medium.com/max/1600/1*FClp4lVp5qsIi1wxOXAAbA.png)





## Grid Container and Elements

A grid layout consists of a parent element, with one or more child elements.



```html
  <div id="grid-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
  </div>
```

```css
body {
  text-align: center;
}

.grid-container {
  display: grid;
}

.grid-container div{
  background: peru;
  padding: 25px;
}

.grid-container div:nth-child(even){
  background: rebeccapurple;
  padding: 25px;
}

```





### Creating columns in the grid



#### `grid-template-columns` and `repeat()` function

```css
.grid-container {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  /* grid-template-columns: 15% 50% 35%; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* grid-template-columns: 1fr 4fr 1fr 1fr; */
  
  /* OR with repeat function*/
  /* grid-template-columns: repeat(6, 1fr); */
}
```





### Setting row height - `grid-auto-row` and `minmax` function



```html
  <div class="grid-container">
		...
    <div>2</div>
    <div> Lorem ipsum dolor sit amet, consectetur
       adipiscing elit. Aenean dolor elit, tempus 
       et ipsum id, finibus facilisis quam. 
       Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas.
       Nullam mollis malesuada mollis. 
       Mauris eu sagittis arcu. Maecenas tincidunt, 
       diam quis convallis scelerisque, velit nunc 
       vestibulum enim, in congue sapien augue eget 
       tellus. Proin vehicula urna in elementum 
       accumsan. Vestibulum nec euismod tortor. 
       Duis in ex ex. Curabitur sollicitudin maximus 
       augue, nec dictum neque consectetur eget. </div>
		<div>4</div>
    ...
  </div>
```



```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 200px;		/* additional content will be cut off */
  /*grid-auto-rows: minmax(200px, auto);*/
}
```





### Creating rows in the grid - `grid-template-rows`



`grid-template-rows` has a built in `grid-auto-rows` so we can remove it.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* DELETE grid-auto-rows: minmax(200px, auto);*/
  grid-template-rows: repeat(10, minmax(200px, auto));
}
```





### Create space between each column and row - `grid-column-gap` & `grid-row-gap`

### or shorthand - `grid-gap`

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, minmax(200px, auto));
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  /*SHORTHAND  grid-gap: 15px; */
}
```





### Aligning items in the grid

#### The `align-items`  - y-axis

```css
.container {
  align-items: start | end | center | stretch;
}
```



```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, minmax(200px, auto));
  grid-gap: 15px;
  align-items: center;
}
```



#### The `justify-items`  - x-axis

```css
.container {
  justify-items: start | end | center | stretch;
}
```



```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, minmax(200px, auto));
  grid-gap: 15px;
  align-items: center;
  justify-items: end;
}
```



### Justify align specific item

`justify-self` or `align-self`

```html
<div id="two">2</div>
<div id="three">3</div>
<div id="four">4</div>
```

```css
#two {
  justify-self: end;
  align-self: start;
}

#three {
  justify-self: center;
  align-self: center;
}

#four {
  justify-self: start;
  align-self: end;
}
```









### Assigning element position in the grid



#### Position in the grid is assigned as elements are lined up in HTML

#### This can be changed

#### Position each element takes is counted "from line to line"



```html
<!-- Remove lorem ipsum text from the <div> -->
<!-- Place only 6 <div> elements -->
<div>
		<div id="one">1</div>
		<div id="two">2</div>
    <div id="three">3</div>
    <div id="four">4</div>
    <div id="five">5</div>
    <div id="six">6</div>
</div>
```



```css
/* Update the "grid-template-colums" and "grid-template-rows" */
.grid-container {
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, minmax(100px, auto));
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}
```





### Positioning elements in the grid by column -

###  `grid-column-start` and `grid-column-stop`

### OR shorthand `grid-column`



**syntax example**

```css
/* grid-column: startLine / endLine; */
grid-column: 1 / 3;
```



### Positioning elements in the grid by column -

### `grid-row-start` and `grid-row-stop`

### OR shorthand `grid-row`



```css
/* grid-row: startLine / endLine; */
grid-row: 1 / 3;
```

