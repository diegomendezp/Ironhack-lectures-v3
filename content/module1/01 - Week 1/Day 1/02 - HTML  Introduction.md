![img](https://i.imgur.com/1QgrNNw.png)

# HTML | Introduction

## Learning Goals

After this lesson, you will be able to:

- Understand the structure of a HTML document, apply basic HTML tags and tag attributes to create pages.
- Understand the difference between inline and block elements.
- Use inline and block elements to create a simple webpage.



## HTML Introduction



##### Before the code portfolio code along we will do environment setup with VS Code extensions, same as teacher has (for auto complete and other things)









### We will use [CodePile](https://www.codepile.net/pile/BVkZEz5D) for link sharing and later for code sharing







### What is HTML?

HTML is not a programming language; it is a *markup language* that defines the structure of your content. HTML consists of a series of **elements** that we call tags.









<h3 style='color: green'>VSCode demo</h3>

### Create a folder structure

```bash
mkdir 01-html-intro

cd 01-html-intro

mkdir images scripts styles

touch index.html

code .
```



<br>



### Basic Syntax - First Tags

**(TRY NOT TO SHARE)** [CODEPEN Example of below code](https://codepen.io/Denzelzeldi/pen/PoYrqzO?editors=1000)

```html
<!DOCTYPE html>  <!-- tells the browser that it is reading an HTML document. -->

<html> </html> <!-- root element -->

<head> </head> <!-- Meta information and --> 

<body> </body> <!-- content -->
```







#### [Anathomy of an HTML element - image](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#Anatomy_of_an_HTML_element)







### Basic HTML Structure    - 

```html
<!DOCTYPE html>
<html>
  
  <head>
    <title>The HTML5 Intorduction</title>
    <meta charset="UTF-8">
  </head>
  
  <body>
    <h1>IronHackers - 2019 04</h1>
  	<p>Welcome to IronHack!</p>    
  </body>

</html>

```



#### -> Go live









### HTML DOM tree



#### Every HTML Document can be **represented** as a tree.

#### This is called  Document Object Model (DOM), 

The DOM structure is usually represented as a tree of nodes, 

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4d9f2a2679822b4f694c06ae3ff3021a.png)

In the HTML DOM, everything is a node. The document is a document node.







- `<html>`
  **`<html>` Represents the root of an HTML document.** All other elements must be descendants of this element. 

- ```
  <head>
  ```

  

  head Defines an element that provides general information (metadata) about the document, 

  - `<title>`
    Defines the title of the document.
    
  - `<meta>`
  Used to define metadata. This includes information about styles, scripts and data to help browsers use and render the page. 
    
  
  One of the most commons elements is the `<meta charset="UTF-8">` in our example. This specifies the character encoding for the HTML document as [UTF-8](https://en.wikipedia.org/wiki/UTF-8).
  
  
  
- <body>
  body is the element containing all the content of an HTML document. Every HTML component should be written between the opening and the closing body tag. As there can be only one entire body in a document, there can be only one `<body>` element.

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1e69925bf7c951d9943654a612c1ee83.png)

### DOM nodes: root, ancestor, descendent, parent, child, sibling, elements







### Paragraphs

```html
<p>I am a paragraph element.</p>
```



### Headings

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```



### Lists

#### 	Ordered List

```html
<h2>An Ordered HTML List</h2>
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>
```



#### 	Unordered List 

```html
<h2>An Unordered HTML List </h2>
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```





### Tables

**table**, **tr**, **td**, **tfoot**, **thead**

This element is used to express information in a two-dimensional data table. 

```html
<h2>Table</h2>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Bootcamp</th>
      <th>City</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Jose Perez</td>
      <td>FullStack WebDev</td>
      <td>Madrid</td>
    </tr>

    <tr>
      <td>Sarah O'Connor</td>
      <td>FrontEnd WebDev</td>
      <td>Barcelona</td>
    </tr>
    <tr>
      <td>Ariel Quinones</td>
      <td>MasterChef WebDev</td>
      <td>Miami</td>
    </tr>
  </tbody>
</table>
```







### Divisions - Divs



The <div> tag defines a division or a section in an HTML document.





### Attributes and Values



- All HTML elements can have **attributes**
- Attributes provide **additional information** about an element
- Attributes are always specified in **the start tag**
- Attributes usually come in name/value pairs like:  **name="value"**



#### Common tags with attributes

```html

<!-- The link address is specified in the href attribute -->
<a href="https://www.google.com">This is a link</a>

<!-- The filename of the image source is specified in the src -->
<img src="google_logo.jpg" />

<!--
https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
-->

<!-- Images in HTML have a set of size attributes -->
<img src="google_logo.jpg" width="300" height="100" />

<!-- The alt attribute specifies an alternative text to be used, when an image cannot be displayed -->
<img src="google_logo.jpg" alt="google logo" />

<!--  The title attribute will be displayed as a tooltip when you mouse over it -->
<img title="A tooltip" src="google_logo.jpg" alt="google logo"  />

<!-- id and class attributes are used to easily target specific
elements on the page -->
<img 
     id="logo-img"
     class="image-small"
     title="A tooltip"
     src="google_logo.jpg"
     alt="google logo"  />


<p title="A tooltip for the paragraph">This paragraph has a tile tooltip</p>


```





<br>



## Use Lowercase Attributes  & Quote attribute values

 ##### HTML tag attributes are always written in lowercase and with Quotes.

```html
<!-- Bad -->
<a href=https://www.google.com> Google it! </a>
    
<!-- Good -->
<a href="https://www.google.com">  Google it! </a>
```





<br>



# Self-Closing Tags

Most common self closing tags in HTML are:

1. ```html
   <!-- inserts a single line break -->
   <br />
   
   <!-- thematic break in an HTML page - it adds a line -->
   <hr />
   
   <!-- image tag -->
   <img />
   
   <!-- form input tag - nested as the child of form -->
   <form action="">
     <input />
   </form>
   
   <!-- link between a document and an external resource 
   e.g. script -->
   <link />
   
   <!-- provides metadata about the HTML document, 
   set in the <head> -->
   <meta />
   ```







<br>



### Forms

The `<form>` element allows us to get the information from the user.

The `<form>` elements holds **inputs**, **radio buttons**, **select boxes**, **text areas** etc. 



##### 	The `action` attribute

​	This attribute sets the [URI](https://developer.mozilla.org/en-US/docs/Glossary/URI) and tells the form where to send the information.



##### 	The `method` attribute

​	This attribute sets the HTTP method that the browser uses to submit the form. More on this by the time we reach module 2.



An example of a simple `form` with a post request would be:

```html
<h2>Forms</h2>

<form action="/example_uri.php" method="post">
  <label for="name">Username:</label>
  <input id="name" />

  <br />
  <label for="name">Password:</label>
  <input id="name" type="password" />

  <textarea rows="4" cols="50"> </textarea>
  
  <br />
  <input type="radio" value="remember" /> Remember me

  <br />
  <button type="submit">Save</button>
</form>
```

​	

- **action** with JavaScript - 

  ```html
  <form action="javascript:;" onsubmit="myFunction()" >
    <!--	...	 -->
  </form>
  ```
  
  





## “Block” Vs “Inline”



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_9c6c4e882171fdb4c31b128e0861e64a.png)





## Block-level Elements

Block-level elements begin a new line on the webpage and, if no width is set, extend the full width of the available horizontal space of its parent element.

`<p></p>` , `<div></div>`

Examples of block-level elements are paragraphs or page divisions.



## Inline elements

`Inline elements` flow like text. They don’t start a new line and they are shown right next to the previous element without clearing previous content.





### Cheat Sheet - [Block vs Inline Elements](https://gist.github.com/ross-u/97bddbb6556932eba37e98ddb4fe281b)





### CodePen - Example on Block and inline elements

### [Block vs Inline - codepen example](https://codepen.io/Denzelzeldi/pen/MWYGMjY?editors=1000)







### Hidden elements

### `<head>` 

### `<meta>` 

### `<link>`

#### `<script>` - can be set in the head or body

When in the body with JavaScript it is set at the end. We will see why later.





### 

## Indentation and quotes

When writting HTML use **2 spaces indentation** to make your code readable. 

As well make sure that code looks clean and each indentation gives clear idea which element is nested where.

When using quotes in HTML attributes we suggest you to use double quotes `" "`





## Summary

In this unit, we learned that HTML is a language for creating web pages and applications. Its elements are the building blocks of web pages. Also, we learned that the DOM is a file that contains the elements of an HTML document.



**The following elements are “block-level”:**
*p, pre, small, h1 to h6, ol, ul, li, table, form, fieldset .... (and more)*



**The following elements are “inline”:**
*em, i, small, strong, time, a, br, img, script, span, button, input, label, select, textarea… (and more)*







## Cheat Sheet - [Block vs Inline Elements](https://gist.github.com/ross-u/97bddbb6556932eba37e98ddb4fe281b)





## Extra Resources

- [MDN HTML5 Documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - This is your ideal documentation. Is pretty long, but is the first place to search when doubtful.
- [Inline elements](<https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements>)
- [Block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
- [HTML MDN Tutorial](https://developer.mozilla.org/en-US/docs/Learn/HTML)

