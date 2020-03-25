![img](https://i.imgur.com/1QgrNNw.png)

# HTML | Introduction

## Learning Goals

After this lesson, you will be able to:

- Understand the structure of a HTML document, apply basic HTML tags and tag attributes to create pages.
- Understand the difference between inline and block elements.
- Use inline and block elements to create a simple webpage.







## HTML Introduction



Antes de empezar con el code along de desarollar nuestra pagina web para nuestor portfolio propio, tenemos que montar o instalar unas extensiónes en VS Code, que nos dan funcionalidades como auto complete, y destacar del texto.



- **Live Server** (abre la página en el Browser y recarga la pagina automáticamente cuando guardamos cualquier nuevo cambio)
- **HTML CSS Support** (auto completa el código)
- **IntelliSense for CSS class names** (auto completa el código)
- **Bracket par colorizer** (destaca los paréntesis y los corchetes)



Vamos a usar el CodePile line para compartit el codigo durante del code along, si tienen algun error con el sintaxis.





### Vamos a usar el [CodePile](https://www.codepile.net/pile/BVkZEz5D) link para compartir el codigo durante del code along, si algunos teneis algun error con el sintaxis.







### Que es HTML?

HTML no es un lenguaje de programación ; es un Lenguaje de Mercado de Hipertextos que se usa para definir la estructura de las paginas web.

El marcado HTML incluye elementos especiales usados para anotar textos, imágenes, y otro contenido mostardo en el Browser.





<h3 style='color: green'>VSCode demo</h3>

### Creamos una carpeta nueva con archivos y estructura

pueden pegar y ejecutar este parte de código que los voy a dar por Codepile, en su terminal

```bash
mkdir 01-html-intro

cd 01-html-intro

mkdir images scripts styles

touch index.html

code .
```



<br>



Empezamos con la sintaxis básica

### La sintaxis básica

```html
<!DOCTYPE html>  <!-- tells the browser that it is reading an HTML document. -->

<html> </html> <!-- root element -->

<head> </head> <!-- Meta information and --> 

<body> </body> <!-- content -->
```

```html
<!DOCTYPE html>  <!-- indica al Browser que esta cargando una pagina de HTML -->

<html> </html> <!-- elemento raíz -->

<head> </head> <!-- Metadatos acerca del documento, incluyendo su titulo y enlaces a scripts y hojas de estilo --> 

<body> </body> <!-- contenido - el cuerpo de la pagina web -->
```





<br>



#### [La Anatomía / la Sintaxis de un elemento HTML - imagen](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics#Anatomía_de_un_elemento_HTML)



- el tag de apretura
- el contenido
- el tag de cierre



<br>



### Estructura basica de una pagina    - 

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





#### ->  Hacemos clic en este link (enlace) Go live









### HTML DOM tree



#### Cada documento HTML es representado como un árbol con elementos



DOM tree es una estructura donde la pagina esta representada como un árbol de nodos.

Cada nodo representa una parte del documento. 

Cada nodo puede <u>tratarse de</u> *(be about)* unos elemento o una cadena de texto



### [ABRIR IMAGEN](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4d9f2a2679822b4f694c06ae3ff3021a.png)

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4d9f2a2679822b4f694c06ae3ff3021a.png)









- `<html>`
  **`<html>` Es elemento ráiz del documento.** Todos los elementos en la pagina son los hijos de este elemento (son descendientes). 

- ```
  <head>
  ```

  

  head Defines an element that provides general information (metadata) about the document, 

  - `<title>`
    COntiene el titulo del documento, que vemos en el Browser
    
  - `<meta>` tag se usa para anadir instrucciones para el Browser y describirle que tiene que hacer  
  
  
  
  
- <body>
  
- elemento body contiene todo el contendido visible en la pagina. En una pagina, podemos tener solo un `body` tag

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1e69925bf7c951d9943654a612c1ee83.png)

### DOM nodes: raiz, padre, hijos, y elementos hermanos.



### DOM nodes: root, ancestor, descendent, parent, child, sibling, elements







###  - párrafo

```html
<p>I am a paragraph element.</p>
```



###  - Tags de titular

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

