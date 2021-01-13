![img](https://i.imgur.com/1QgrNNw.png)

# HTML | Introducción

## Learning Goals

After this lesson, you will be able to:

- Understand the structure of a HTML document, apply basic HTML tags and tag attributes to create pages.
- Understand the difference between inline and block elements.
- Use inline and block elements to create a simple webpage.



## Introducción a HTML 











<h3 style='color: green'>VSCode demo</h3>

### Crear estructura de carpetas

```bash
mkdir 01-html-intro

cd 01-html-intro

mkdir images scripts styles

touch index.html styles/stlyle.css

code .
```



### Solo para profesor (desactivar prettier)

```bash
touch .prettierignore
echo -e "**/*.js \n**/*.html" >> .prettierignore
```

<br>



### Que es HTML?

Primero, HTML no es un lenguaje de programación, sino es un ***lenguaje de marcado*** usado para definir la estructura y el contenido en la paginas web.

HTML se compone de elementos de marcado, llamados **tags**.





<br>



### Basic Syntax - First Tags

**(TRY NOT TO SHARE)** [CODEPEN Example of below code](https://codepen.io/Denzelzeldi/pen/PoYrqzO?editors=1000)

```html
<!DOCTYPE html>  <!-- Indica al navegador que está leyendo un documento HTML. -->

<html> </html> <!-- elemento raiz -->

<head> </head> <!-- metadatos sobre la pagina web --> 
<!-- metadatos incluyen datos, archivos o ajustes que añaden funcionalidad adicional a la pagina (estilos, funcionamiento, configuración de idioma etc.) --> 

<body> </body> <!-- contenido visible -->
```





> functionamiento - behaviour, functioning.

​	



#### [Anatomía de un elemento HTML - image]([https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics#Anatom%C3%ADa_de_un_elemento_HTML](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics#Anatomía_de_un_elemento_HTML))







### Estructura básica de HTML    - 

```html
<!DOCTYPE html>
<html>
  
  <head>
    <title>HTML5 Intro</title>
    <meta charset="UTF-8">
  </head>
  
  <body>
    <h1>IronHackers - 2020 06</h1>
  	<p>Bienvenidos a IronHack!</p>    
  </body>

</html>

```





Entre los tags `head`  y `body` anidamos otros tags con metadatos o contenido visible.

El contenido anidado entre los `head` tags no será visible, porque contiene solo los metadatos.

Por otro lado, el contenido anidado entre los `body` tags representa el contenido visible, lo que vemos en la pagina web.





#### -> Go live









### DOM y arbol de nodos



El **modelo de objeto de documento** (DOM) es una interfaz de programación para los documentos HTML.

DOM da una estructura a documento HTML y permite acceso a los elementos en la pagina.

DOM tiene 2 usos. Primero, nos da una manera visual para representar el documento de HTML y segundo para permitir los scripts o lenguajes de programación acceso a los elementos en la pagina.



#### Cada documento HTML se puede presentar como un árbol de nodos.

i

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4d9f2a2679822b4f694c06ae3ff3021a.png)

En DOM, todo es un nodo.

 Por ejemplo el documento sí mismo empieza con nodo `document`



( El primer nodo en DOM es el documento sí mismo.)









- `<html>`
  **`<html>` representa el raiz del documento**  todos elementos en una pagina son. su descendientes

- `<head>`
  
  `<head>` contiene ayustes de pagina y metadatos (informacion)  sobre la pagina.

  - `<title>`
  Define el título del documento.
  
- `<meta>`
  
  Specifica el set de caracteres utilizado en la pagina, como UTF-8 (lista de caracteres soportados por el navegador).
  
  
  
- <body>
  
   es el elemento que contiene todo el contenido de un documento de HTML. 
  
  Cada etiqueta de HTML debería ser escrita entre la etiqueta de apertura y la etiqueta de cierre del body. Como puede haber sólo un cuerpo entero en un documento, puede haber sólo un' <cuerpo>' elemento.
  
- body is the element containing all the content of an HTML document. Every HTML component should be written between the opening and the closing body tag. Puede haber sólo un elemento `body` en el documento.

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1e69925bf7c951d9943654a612c1ee83.png)

### DOM nodes: root, ancestor, descendent, parent, child, sibling, elements







### Párrafos

```html
<p>Soy el párrafo.</p>
```



### Encabezados (headings)

```html
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
```



La regla no escrita es usar el encabezado `h1` solo una vez en una pagina, para mostrar el título de la página, con todos otros encabezados debajo de éste comenZANDO con `h2`. 

Cuando se usan secciónes , los tags como `section`, `nav`, `header`, `footer` se debe usar un `<h1>` por sección.



### Lists

#### 	Ordered List - Lista ordenada

Para presentar datos en una lista ordenada podemos usar el tag `li`

```html
  <h2>An Ordered HTML List</h2>
  <ol>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
  </ol>
```



#### 	Unordered List - Lista desordenada

Para presentar los datos en una lista desordenada podemos usar el tal `ul`

```html
  <h2> Unordered HTML List </h2>
  <ul>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
  </ul>
```





### Tablas

**table**, **tr**, **td**, **tfoot**, **thead**

`table` es el elemento usado para representar datos en dos o mas dimensiones, con columnas y filas.

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
<img src="google_logo.jpg" width="150" height="50" />

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
     <h2> Self closing tags </h2>
      
     <!-- image tag -->
     <img />
      
     <!-- inserts a single line break -->
     <br />
      
     <!-- thematic break in an HTML page - it adds a line -->
     <hr />
      
     <!-- form input tag - nested as the child of form -->
     <form action="">
       <input />
     </form>
   ```







<br>



### Forms

The `<form>` element allows us to get the information from the user.

The `<form>` elements hold:  **inputs**, **radio buttons**, **text areas**, **date** pickers 



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
  <label for="pass">Password:</label>
  <input id="pass" type="password" />

  <br />
  <textarea rows="50" cols="10"> </textarea>
  
  <br />
  <label>Remember me</label>
  <input type="radio" name="remember" value="remember" checked/>

  <label>Don't remember me</label>
  <input type="radio" name="remember" value="forget"/>
  <!--
		Radio buttons are designed for selecting one value out of a set.
		Where multiple controls exist, radio buttons allow one to be selected out of them all.
	-->
  
  
  <br />
  <label for="start">Start date:</label>
  <input type="date" />

  
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
  
  





<br>



## “Block” Vs “Inline”







## Block-level Elements

Block-level elements begin a new line on the webpage and, if no width is set, extend the full width of the available horizontal space of its parent element.

`<p></p>` , `<div></div>`

Examples of block-level elements are paragraphs or page divisions.



## Inline elements

`Inline elements` flow like text. They don’t start a new line and they are shown right next to the previous element without clearing previous content.





### CodePen - Example on Block and inline elements

### [Block vs Inline - codepen example](https://codepen.io/Denzelzeldi/pen/MWYGMjY?editors=1000)



### Cheat Sheet - [Block vs Inline Elements](https://gist.github.com/ross-u/97bddbb6556932eba37e98ddb4fe281b)



<br>



### Hidden elements

### `<head>` 

### `<meta>` 

### `<link>`

#### `<script>` - can be set in the head or body

When in the body with JavaScript it is set at the end. We will see why later.





<br>





## Install VS Code extensions and setup environment



We will do the environment setup with VS Code extensions (for auto complete and other things).



<br>





#### [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)

#### [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)

####[Prettier - code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)





- Remove **Beautify** and **JSHint** if you have it installed, as they may cause issues.
- Change the settings to enable **Format On Save**
  - `CMD` + `Shift` + `P`    **or**    `Ctrl` + `Shift` + `P`
  - Preferences: Open Settings (UI)
  - Search for :  format on save
  - Enable option: **Editor: Format On Save**
  - When saving the file from now on prettier should auto format your code

<br>



## Indentation and quotes

When writting HTML use **2 spaces indentation** to make your code readable. 

As well make sure that code looks clean and each indentation gives clear idea which element is nested where.

When using quotes in HTML attributes we suggest you to use double quotes `" "`





<br>



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

