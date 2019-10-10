![img](https://i.imgur.com/1QgrNNw.png)

# HTML | Introduction

## Learning Goals

After this lesson, you will be able to:

- Understand the structure of a HTML document, apply basic HTML tags and tag attributes to create pages.
- Understand the difference between inline and block elements.
- Use inline and block elements to create a simple webpage.

## HTML Introduction



### Before start - environment setup

Install the following extensions in the VS Code:

- **Live Server**
- **HTML CSS Support** 

* **IntelliSense for CSS class names in HTML**
* **Prettier - Code formatter**





### What is HTML?

HTML is not a programming language; it is a *markup language* that defines the structure of your content. HTML consists of a series of **elements** that we call tags.







### Basic Syntax - First Tags

[CODEPEN Example of below code](https://codepen.io/Denzelzeldi/pen/PoYrqzO?editors=1000)

```html
<!DOCTYPE html>  <!-- tells the browser that it is reading an HTML document. -->

<html> </html> <!-- root element -->

<head> </head> <!-- Meta information and --> 

<body> </body> <!-- content -->
```





#### [Anathomy of an HTML element - image](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#Anatomy_of_an_HTML_element)





<h3 style='color: green'>VSCode demo</h3>

### Create a folder structure

```bash
mkdir 01-html-intro

cd 01-html-intro

mkdir images scripts styles

touch index.html

cd ..

code .
```



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



```html
<!DOCTYPE html>
<html>
  <head>
	<title>My first document</title>
	<meta charset="UTF-8">
  </head>
  <body>
	...
  </body>
</html>

```



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
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>
```



#### 	Unordered List

```html
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
<table>
  <tr>
    <th>Name</th>
    <th>Bootcamp</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Jose Perez</td>
    <td>FullStack WebDev</td>
    <td>Madrid</td>
  </tr>
  <tr>
    <td>Michael Smith</td>
    <td>FrontEnd WebDev</td>
    <td>Barcelona</td>
  </tr>
  <tr>
    <td>Ariel Quinones</td>
    <td>MasterChef WebDev</td>
    <td>Miami</td>
  </tr>
</table>

```







### Divisions - Divs



The <div> tag defines a division or a section in an HTML document.





### Attributes and Values



#### [HTML tag with attribute - Image](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#Anatomy_of_an_HTML_element)





- All HTML elements can have **attributes**
- Attributes provide **additional information** about an element
- Attributes are always specified in **the start tag**
- Attributes usually come in name/value pairs like:  **name="value"**



#### Common tags with attributes

```html
<!-- The link address is specified in the href attribute -->
<a href="https://www.google.com">This is a link</a>

<!-- The filename of the image source is specified in the src -->
<img src="img_girl.jpg">

<!-- Images in HTML have a set of size attributes -->
<img src="img_girl.jpg" width="500" height="600">

<!-- The alt attribute specifies an alternative text to be used, when an image cannot be displayed -->
<img src="img_girl.jpg" alt="Girl with a jacket">

<!--  The title attribute will be displayed as a tooltip when you mouse over it -->
<p title="I'm a tooltip"> This is a paragraph. </p>
```







## Use Lowercase Attributes  & Quote attribute values-

 ##### HTML tag attributes are always written in lowercase and with Quotes.

```html
<!-- Bad -->
<a href=https://www.google.com> Google it! </a>
    
<!-- Good -->
<a href="https://www.google.com">  Google it! </a>
```







# Self-Closing Tags

Most common self closing tags in HTML are:

1. ```html
   <br /> - <!-- inserts a single line break -->
   <hr /> -  <!-- thematic break in an HTML page - it adds a line -->
   <img /> - <!-- image tag -->
   <input /> - <!-- form input tag - nested as the child of form -->
   <link /> -  <!-- link between a document and an external resource -->
   <meta /> - <!-- provides metadata about the HTML document <head> -->
   ```











### Forms

The `<form>` element allows us to get the information from the user.

The `<form>` elements holds **inputs**, **radio buttons**, **select boxes**, **text areas** etc. 



##### 	The `action` attribute

​	This attribute sets the [URI](https://developer.mozilla.org/en-US/docs/Glossary/URI) and tells the form where to send the information.



##### 	The `method` attribute

​	This attribute sets the HTTP method that the browser uses to submit the form. More on this by the time we reach module 2.



An example of a simple `form` with a post request would be:

```html
<form action="/example_uri.php" method="post">
  <label for="name">Name:</label>
  <input id="name" type="text">
  <button type="submit">Save</button>
</form>

```

​	

- **action** with JavaScript - 

  ```html
  <form action="javascript:;" onsubmit="myFunction()" >
    <label for="name">Name:</label>
    <input id="name" type="text">
    <button type="submit">Save</button>
  </form>
  ```

  



#### 	Fieldset

​	The HTML `<fieldset>` element is used to group  related elements in a form.

​	**Example:**

​	http://codepen.io/ironhack/pen/xEEAwz







## “Block” Vs “Inline”



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_9c6c4e882171fdb4c31b128e0861e64a.png)





## Block-level Elements

Block-level elements begin a new line on the webpage and, if no width is set, extend the full width of the available horizontal space of its parent element.

`<p></p>` , `<div></div>`

Examples of block-level elements are paragraphs or page divisions.



### CodePen - simple example on Block and inline elements

### [Block vs Inline - codepen example](<https://codepen.io/ironhack/pen/JRWGZq>)









### HTML Block-level elements cheat sheet

| Element           | Description        | Example of use / Output                                |
| ----------------- | ------------------ | ------------------------------------------------------ |
| `<p></p>`         | Paragraph          | Welcome to your website                                |
| `<pre></pre>`     | Preformated text   | `hello world!`                                         |
| `<h1></h1>`       | Heading (title)    | Hello World!                                           |
| `<ol></ol>`       | Ordered List       | OneTwo                                                 |
| `<ul></ul>`       | Unordered List     | OneTwo                                                 |
| `<li></li>`       | List Item          | One                                                    |
| `<table></table>` | 2-D Data           | [Go to codepen](http://codepen.io/ironhack/pen/BLLWwY) |
| `<form></form>`   | Submit info        | [Go to codepen](http://codepen.io/ironhack/pen/dppvqv) |
| `<fieldset>`      | Group form items   | [Go to codepen](http://codepen.io/ironhack/pen/xEEAwz) |
| `<hr>`            | Content separation |                                                        |











## Inline elements

`Inline elements` flow like text. They don’t start a new line and they are shown right next to the previous element without clearing previous content.



### Emphasizing the text

```html
<p> Our commitment is to use <i>impeccable</i> sourcing and <em>quality</em> ingredients.</p>
```

Modify the code on CodePen to see the result.



### Displaying Time/Dates

The `<time>` tag defines a human-readable date/time.

```html
<p>I have an appointment <time datetime="2008-02-14 20:00">Valentines day</time>.</p>
```



### Links *(Anchors)*

`<a>` It defines a hyperlink to a location on the same page or any other page on the Web. Usually followed by ‘href’ attribute.

```html
<a href = "http://www.example.com"></a>
```



### Break

`<br>` produces a line break in text (carriage-return) and it has no closure.



### Images

`<img>` defines an image. Is followed by the ‘src’ attribute and it is mandatory to add the image URL.

```html
<img src = "http://www.example.com">
```

``



### Scripts

`<script>` is used to embed or reference an executable script within an HTML file.



### Spans

`<span>` is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes. It should be used only when no other semantic element is appropriate. Not recommended.





### Inputs - [`<input> MDN`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

<input> elements are used within a <form> element to provide input controls and  allow users to input data.

Input field must have a `type=""` attribute included, or it will default to `text`. [MDN input types]([https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form__types))





### Labels - [`<label> MDN`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

Defines a label for various HTML elements -   `<input>`, `<textarea>`, `<progress>` , `<select>`.

The `<label>` `for=""` attribute should have the name of the elements `id`.



### Selects - [`<select>` MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

The HTML `<select>`is used to create drop-down lists.

The `<select>` element can be used in a form to collect user input.

​	

```html
      <label for="">Firstname:</label>
      <input type="text" name="fname">

      <br>

      <label for="">Favorite food</label>
      <select name="foodlist" >
        <option value="pizza">Pizza</option>
        <option value="pasta">Pasta</option>
        <option value="soup">Soup</option>
        <option value="sushi">Sushi</option>
        <option value="salad">Salad</option>
      </select>

```





### Textarea

It represents a multi-line plain-text editing control. 

We can specify the size via **rows** and **columns**.

```html
<textarea rows="4" cols="50">
 
</textarea>
```





### Buttons - 

It represents a clickable button.





### HTML Inline elements cheat sheet



| Element                 | Description              | Example of use / Output                                    |
| ----------------------- | ------------------------ | ---------------------------------------------------------- |
| `<em></em>`             | Emphasizes text          | We are the *best* in the city                              |
| `<i></i>`               | Italic text              | *JavaScript* is a very powerful language                   |
| `<strong></strong>`     | Bold text                | This is the **last day** to apply                          |
| `<time></time>`         | Dates and times          | The concert starts at 12:00                                |
| `<a></a>`               | Anchor                   | Go to [Google](http://materials.ironhack.com/s/BJMCnGa447) |
| `<br>`                  | Line break               | To be Or not to be                                         |
| `<img>`                 | Image                    | [Go to codepen](http://codepen.io/ironhack/pen/VKjPPk)     |
| `<script></script>`     | Embedded code            | [Go to codepen](http://codepen.io/ironhack/pen/JRKEWV)     |
| `<span></span>`         | Generic inline container | Some text                                                  |
| `<button></button>`     | Clickable button         | [Go to codepen](http://codepen.io/ironhack/pen/WGxRjE)     |
| `<input></input>`       | Data input field         | [Go to codepen](http://codepen.io/ironhack/pen/VKjPWw)     |
| `<label></label>`       | Caption for item         | [Go to codepen](http://codepen.io/ironhack/pen/bwZgRW)     |
| `<select></select>`     | Menu of options          | [Go to codepen](http://codepen.io/ironhack/pen/pEbRAa)     |
| `<textarea></textarea>` | Multi-line input         | [Go to codepen](http://codepen.io/ironhack/pen/KgraXQ)     |









### Hidden elements

### `<head>`

#### `<script>` - can be set in the head or body

When in the body with JavaScript it is set at the end. We will see why later.





### 





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