![img](https://i.imgur.com/1QgrNNw.png)

# CSS | Advanced Selectors

## Learning Goals

## Combining CSS Selectors



```css
<ul> /* parent */
  <li class="menu-item"></li>  /* child */
  <li class="menu-item"></li>  /* child */
</ul>
```





## Selecting Descendants

###### 

### Direct Descendants (Children) `>`

**syntax**

```css
parent > child {
  property: value;
}
```



```html
<ul id="menu">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
```

```css
#menu > li {
  width: 100px;
  height: 50px;
}
```





### Descendant Selector - (matches descendants in depth)

```css
selector1 selector2 {
  property: value;
}
```

The [Descendant Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors) matches all elements **matched by the second selector**, but only those, which **have an ancestor element, matched by the first selector**.



```html
<p>Ironhack <em>Descendant</em> Selectors</p>
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>
    <em>item 3</em>
  </li>
</ul>
```

```css
ul em {
  color: red
}
```

Well, we could of course add a class to the second `em`, or we could add an ID as well. However, using this combination of selectors helps us match elements without having to mess around with the HTML too much.

![img](https://i.imgur.com/YdqDUNh.png)

One of the goals of this course is to teach you to keep the HTML as tidy, clean, and compact as possible. These selectors will help you target elements without having to add classes everywhere:

<iframe height="265" src="http://codepen.io/ironhack/embed/amBQkV/?height=265&amp;theme-id=light&amp;default-tab=html,result&amp;embed-version=2" allowfullscreen="true" style="box-sizing: border-box; color: rgb(51, 51, 51); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.35px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; width: 720px;"></iframe>





## Selecting Siblings



### Adjacent Sibling - (next to the element)

```css
formerElement + targetElement {
  property: value;
}
```

```html
<div>
  <div>before FORMER</div>
  <div>before FORMER</div>
  <div id="former">#former</div>
  <div>next to FORMER</div>
  <div>last one...</div>
  <div>last one...</div>
</div>
```

```css
div {
  background-color: green;
}
#former { 
 background-color: red;
}
#former + div {
  background-color: yellow;
}
```





<iframe height="265" src="http://codepen.io/ironhack/embed/amBQEG/?height=265&amp;theme-id=light&amp;default-tab=html,result&amp;embed-version=2" allowfullscreen="true" style="box-sizing: border-box; color: rgb(51, 51, 51); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.35px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; width: 720px;"></iframe>











## Multiple selection - apply same rule-set on multiple selectors

**syntax**

```css
selector1, selector2 {
  property: value;
}
```

**Example**

```html
<div>
  <h1>Heading h1</h1>
  <h2>Heading h2</h2>
  <h3>Heading h3</h3>
  <h4>Heading h4</h4>
  <h5>Heading h5</h5>
  <h6>Heading h6</h6>
</div>


<div id="container">
  <p>
    Paragraph child
  </p>
</div>
```



```css
h1, h3 {
  color: blue;
}

#container {
	border: 2px dashed black;
    padding: 20px;
}

h2, h6, div > p {
  color: green;
}
```



And this method can work with more complicated selectors as well.



You can mix selectors as much as you need to create awesome and beautiful web pages!







## Attribute Selector

```
element[attr-name="value"] {
  property: value;
}
```

<iframe height="265" src="http://codepen.io/ironhack/embed/GjAWAo/?height=265&amp;theme-id=light&amp;default-tab=html,result&amp;embed-version=2" allowfullscreen="true" style="box-sizing: border-box; color: rgb(51, 51, 51); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.35px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; width: 720px;"></iframe>



| Selector             | What does it select?                                         |
| :------------------- | :----------------------------------------------------------- |
| `[attribute]`        | All elements with the specified attribute                    |
| `[attribute=value]`  | All elements where the specified attribute is equal to ‘value’ |
| `[attribute~=value]` | All elements with an attribute containing the word ‘value’   |
| `[attribute|=value]` | All elements with an attribute list starting with ‘value’    |
| `[attribute^=value]` | All elements with an attribute beginning with ‘value’        |
| `[attribute$=value]` | All elements with an attribute ending with ‘value’           |
| `[attribute*=value]` | All elements with an attribute containing the substring ‘value’ |





**Check out the code pen and try to understand it** - 

<iframe height="265" src="http://codepen.io/ironhack/embed/RGGQWr/?height=265&amp;theme-id=light&amp;default-tab=html,result&amp;embed-version=2" allowfullscreen="true" style="box-sizing: border-box; color: rgb(51, 51, 51); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.35px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; width: 720px;"></iframe>

## Summary

In this Unit, we have learnt:

- How to select descendants `selector1 selector2` and children `selector1 > select2` of a node
- How to select siblings `selector1 + selector2` of a node
- How to combine selector rules `selector1, selector2`
- How to select elements based on their attribute values `element[attr="value"]`

## Extra Resources

- [Css-tricks](https://css-tricks.com/attribute-selectors/) | Interesting article explaining further uses of attribute selectors in the real world.
- ###### [CSS Selectors](http://www.w3schools.com/cssref/css_selectors.asp) | All selectors available