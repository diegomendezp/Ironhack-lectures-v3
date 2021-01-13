

![img](https://i.imgur.com/1QgrNNw.png)

# CSS | Intro & Selectors

## Learning Goals

In this chapter you will:

- Understand what CSS is and learn how to create styles in different ways: inline and in document.
- Learn how to represent and set colors to fonts and backgrounds in HTML.
- Select elements with element, class or id selectors to change CSS properties.



## CSS: Cascading Style Sheets

[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) is a style sheet language used to describe the “rules” that will define the look of your webpage. Without CSS, all the pages would look as plain text and images 



### Inline Styles - adding style as a `style` attribute to the element

```
<body style="background-color: #00D1AC; width: 200px; height: 100px">
```



The way we were adding our styles is called **inline**. 

The CSS code is written as an attribute of the HTML tag.





### Internal Styles - using `<style>` tag in the `<head>`

An internal CSS is defined in the `<head>` section of an HTML page, within a `<style>` element:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  
  <style type="text/css">
    body {
      background-color: #00D1AC;
    }
  </style>
  
</head>
  
<body>
  <h1>CSS INTRODUCTION</h1>
  <p> 
    CSS is a style sheet language used to describe the “rules” 
    that will define the look of your webpage. 
    Without CSS, all the pages would look as plain text and images 
  </p>
</body>
</html>
```





## External CSS

To use an external style sheet, add a link to it in the `<head>` section of the HTML page:

The **proper way to apply CSS styles** into HTML code is to have **two separate files**:

- one for content, and
- one for styles

Separating responsibilities helps us **reuse styles in different pages**,





### 	Create a `style.css` document

```css
body {
  background-color: #00D1AC;
  width: 200px;
  height: 100px;
}
```

In the HTML page  `<head>`

```html
<link rel="stylesheet" href="./styles/style.css">
```





## CSS structure

- ### rule-set (css syntax)

  

  - selector {  property: value   }
  - each **property: value;**   -->  is called declaration block




- **Selector(s):** Points to the element(s) that we will apply the style rule to.
- **Declaration block:**  These declarations specify the element’s properties and the values we want to set.

```css
selectors {
  property: value;
  property: value;
}
```



### Example

```css
body {
  background-color: blue;
}
```

- Can you identify what the selector is in this rule?
- Can you identify the declaration block?



## Basic Selectors



### 	Type selectors

[Type Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) match elements by their node name, for example `<p>`, `<header>` or `<div>`.

```css
body {
    background-color: #74b9ff;
}

p {
  color: black;
}
```





### 	Class selectors    -  dot before the name

[Class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) match all the elements based on the element’s `class` attribute value.

```html
<section class="red-box">
 ... // you can style this box with the .red-box selector
</section>

<section class="blue-box">
 ... // you can style this box with the .blue-box selector
</section>

<section class="red-box">
 ... // you can style this box with the .red-box selector
</section>
```

![:warning:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/warning.png)

-  We should name classes using lowercase letters. 
- For a class name with several words, please separate them **using dashes** `-`, **not underscores** `_`.



```css
.red-box {
  background-color: red;
  width: 200px;
  height: 50px;
}

.blue-box {
  background-color: #000099;
  width:  100px;
  height: 200px;
}
```



**Warning:** Do not add two class attributes to a tag if you want to add multiple classes.



**Wrong**

```html
<!--Wrong-->
<section class="red-box" class="dimensions" class="large"></section>
```





### ID selectors  -   hash tag before the name

An [ID Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) identifies a unique, unrepeatable element in the HTML. 

Id selectors are identified by the [hash symbol](https://en.wikipedia.org/wiki/Number_sign) (`#`). 



```html
<section id="cover-box">
  ...
</section>
```



```css
#cover-box {
  background-color: black;
  color: pink;
  width: 100px;
  height: 50px;
}
```









### Classes vs. ID´s 👊

Some general considerations first:

- There are no browser defaults for any ID or Class. Adding a class name or ID to an element does nothing to that element by default.

| Class                                            | ID                                               |
| :----------------------------------------------- | :----------------------------------------------- |
| Classes are NOT unique                           | ID’s are unique                                  |
| You can use the same class on multiple elements  | Each element can have only one ID                |
| You can use multiple classes on the same element | Each page can have only one element with that ID |



### Navigating to HTML element via URL hash



**ID’s have special browser functionality** - **URL hash tags**

Classes have no special abilities in the browser, but ID’s do have one very important trick up their sleeve. This is the “hash value” in the URL. If you have a URL like [http://adomain.com#comments](http://adomain.com/#comments), the browser will attempt to locate the element with an ID of “comments” and will automatically scroll the page to show that element





## Universal selector

The [Universal selector](https://developer.mozilla.org/en/docs/Web/CSS/Universal_selectors) matches a single element of any type. It is identified by an asterisk (`*`).

Omitting the asterisk with simple selectors has the same effect. For instance, `*.warning` and `.warning` are considered equal.

```css
* {
  font-family: monospace;
}
```

![:warning:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/warning.png) **Warning:** Be very careful when using the universal selector, as it will considerably slow down your page, after all, it will apply that style to ALL elements in your page!!







### properties - most used ones (at least 10 - 15).



### [List of all CSS properties - W3C](https://www.w3schools.com/cssref/)

### [List of most common CSS properties - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)





```html
<section>
  SECTION

	<p>Paragraph text before the list</p>
	<ul>
  	<li>List item 1</li>
  	<li>List item 2</li>
  	<li>List item 3</li>
  	<li>List item 4</li>
	</ul>

	<p>Paragraph text after the list</p>
</section>
```



```css
body {
  background-color: coral;
}

section {
  width: 500px;
  height: 300px;
  background-image: url("https://image.freepik.com/free-vector/small-green-squares-background_1113-14.jpg");
  background-image: cover; /* contain | auto |  */
  background-repeat: no-repeat;
  
  /* To repeat a smaller image
  
  background-repeat: repeat;
  background-size: contain;

	*/
  border-bottom-widt: 2px;
  border-bottom-color: limegreen;
  border-bottom-style: solid;
}

p {
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  color: white;
  font-weight: 600;
  text-align: center;
  letter-spacing: 10px;
  text-shadow: 2px 2px red;
}

ul {
	list-style-type:	disc; /* | square | circle */
}
```





### size units :

- **absolute** - *px*, *cm*, *inch*
- **relative**-  *%*, ***em*** (font-size of the **parent** element),  **rem** (**root element font-size**), *vw*, *vh*





### shorthand properties

<https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties>

```css
section {
	...
  /*
  background-image: url("IMAGE URL");
  background-image: cover; 
  background-repeat: no-repeat; */
  
  background: url("https://image.freepik.com/free-vector/small-green-squares-background_1113-14.jpg") cover no-repeat;
	
  /*
  border-bottom-width: 2px;
  border-bottom-color: limegreen;
  border-bottom-style: solid;
  */
  
  border-bottom: 2px solid limegreen;
}
```





### padding, margin - quick Examples



```css
ul {
  ...
  
	border: 1px solid white;
	padding-top: 25px;
	padding-right: 25px;
	padding-bottom: 25px;
	padding-left: 50px;
}
```

```css
li {
	margin-top: 10px;
	margin-bottom: 10px;
	margin-left: 10px;
}
```



#### shorthand

```css
/*
padding-top: 25px;
padding-right: 10px;
padding-bottom: 25px;
padding-left: 10px;
*/

padding: 25px 10px 25px 10px; /* Top, right, bottom, left */
/* OR */
padding: 25px 10px;/* Top & bottom, right & left */


/*
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
*/

margin: 10px 0px 10px 10px; /* Top, right, bottom, left */
/* OR */
margin: 10px 10px;/* Top & bottom, right & left */
```









- ### specificity

  If 2 or more CSS rules point to the same element, browser uses specificity to determine which one applies.

  

  ### [OPEN IMAGE](https://miro.medium.com/max/2748/1*gRcGHlkSxtlBqyoeiC3jVw.png)

  ![](https://miro.medium.com/max/2748/1*gRcGHlkSxtlBqyoeiC3jVw.png)

  

   Specificity calculation:

  ​	**- element, pseudo element ( ::before, ::after )** - 1pts

  ​	**- attr, class, pseudo selector (:hover, :visited) -** 10pt

  ​	**- IDs -** 100 pts
  
  ​	**- inline style -** 1000 pts
  
  
  
  ​	- multiple nested selectors - `div p {color: red}` vs `p { color: blue }`
  
  ​	- `!important` - is a wild card and will be applied even over inline style if used in any style declaration (even 1pt value) `p { color: red !important}`





### [Specificity Example - CODEPEN](https://codepen.io/Denzelzeldi/pen/LYYPRva?editors=1100)







- ### pseudo-class selectors

  - `:hover`

  - `:visited`

  - `:active`

    ​	

    ```html
    <p>This paragraph contains a link:
      <a href="#">This link will turn red while you click on it.</a>
      The paragraph will get a gray background while you click on it or the link.
    </p>
    ```

    ```css
    a:link { color: blue; }          /* Unvisited links */
    a:visited { color: purple; }     /* Visited links */
    a:hover { background: yellow; }  /* Hovered links */
    a:active { color: red; }         /* Active links */
    
    p:active { background: #eee; }   /* Active paragraphs */
    
    a::before {
      font-size: 20px;
      content: "•";
      padding-right: 10px;
      color: red;
    }
    
    a::after {
      font-size: 20px;
      content: "•";
      padding-left: 8px;
      color: red;
    }
    ```





- ### CSS reset

  <https://meyerweb.com/eric/tools/css/reset/

  **CSS Reset** is a short, often compressed, or “minified,” set of **CSS **rules that **resets** the styling of all HTML elements to a consistent baseline. **Resets** are particularly useful for normalizing the text size and removing all margins.

- ### import 

  used to import additional css stylesheet or the css reset stylesheet



```css
@import "newstyle.css";

/*

OR the following  syntax

@import "newstyle.css";

IMPORT THE CSS RESET 

*/
```











- ### float, clear

  - <https://www.youtube.com/watch?v=xara4Z1b18I>
  - <https://codepen.io/Denzelzeldi/pen/RdvKVK>





- ### overflow (scroll, hidden, auto, visible(default))

  ​	<https://codepen.io/Denzelzeldi/pen/jJdwbz>





- ### CSS Layout - position  (static, relative, fixed, absolute, sticky)

  ​	<https://codepen.io/Denzelzeldi/pen/QoYgqB>

  ​	**static** - default value, positioned with the flow of the page

  ​	**relative ** - children can be positioned against it, can set top,bottom,left, right.

  ​	**fixed** - positioned relative to the viewport.

  ​	**absolute** - relative to the nearest positioned ancestor (anyone except `static` ones), else uses the document body.

  ​	**sticky** - positioned based on the user's scroll position, toggles between `relative` and `fixed`

  

- when not floated or `position:absolute` or `position:fixed` every block element is naturally `100% wide`



- ### 100% of what!?

  <https://codepen.io/Denzelzeldi/pen/XGOgvm>











## CSS Color Property

[Codepen](http://codepen.io/ironhack/pen/BzXbja) 

HTML has several ways to specify an element color:

- **By name**

- **Hexadecimal**

- **RGB**

- **RGBA**

  

  ### Color by name

```css
p {
  color: red;
}
```



 You can find [a full list of colors](http://htmlcolorcodes.com/color-names/) available in HTML and CSS.



### 	RGB Colors

​		An RGB value is a function [rgb()](https://developer.mozilla.org/en/docs/Web/CSS/color_value#rgb) which receives three parameters: **red** [R], **green** [G] and **blue**[B]. 

​		Each parameter is a decimal **number between 0 and 255**.



```css
.red {
  color: rgb(255, 0, 0);
}

.blue {
  color: rgb(0, 0, 255);
}
```



#### 	RGB in Hexadecimal



Each hexadecimal value consists of a hash (#) followed by three pairs of hex numbers **between 0-9 and/or a letter between A-F**.

```css
.red {
  color: #ff0000;
}
```





### 	RGBA

RGBA allows us to set the **opacity of the color**, with a number between 0 and 1. **0** indicates that the color will be 100% transparent, and **1**, 100% opaque.

```css
.half-transparent-green {
  color: rgba(0, 255, 0, 0.5);
}
```





### Finding the Perfect color



#### 	Use a color picker

​	Linux - Gpick

​	Chrome - [ColorZilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en)

​	Dev tools  [eye-dropper tool](https://paul.kinlan.me/eyedropper-chrome-dev-tools/):

#### 	

#### 	Useful websites

​	[Adobe color wheel](https://color.adobe.com/create/color-wheel/), 

​	[Coolors](https://coolors.co/app)







### [CSS Selectors Cheat sheet and game](https://frontend30.com/css-selectors-cheatsheet/)



## Summary

In this learning unit we learned what CSS is, how to create styles for our HTML page and how to properly link files to organize our code.

Also, we learned how to select elements to create our own CSS rules and how to color the background and text of your HTML elements.

## Extra Resources

- [MDN HTML link](https://developer.mozilla.org/en/docs/Web/HTML/Element/link)
- [Pseudo selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) - How to select elements when an event is fired.
- [Selectutorial](http://css.maxdesign.com.au/selectutorial/) - A complete tutorial to understand CSS Selectors.
- [CSS Cheat Sheet](http://www.cheetyr.com/css-selectors) - Quick table for CSS Selectors.
- [MDN Color Value](https://developer.mozilla.org/en/docs/Web/CSS/color_value)