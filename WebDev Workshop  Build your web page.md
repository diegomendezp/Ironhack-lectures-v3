# WebDev Workshop | Build your web page





## [RESOURCES PAGE (Images)](https://codepen.io/Denzelzeldi/full/mdbBoMq)

## [FINISHED WEBPAGE](https://codepen.io/Denzelzeldi/full/bGboQdv)





### Before we start





1. Install the VS Code.



2. Create the folder on your desktop.



##### 

3. Open VS Code and open the folder for your webpage by clicking of `File`  >> `Open Folder`



4. Create a new file `index.html`



5. Install **Live Server** extension in the VS Code 





### What is HTML ?



HTML is HyperText Markup Language. It is not a programming language, but it is a markup (blueprint) which tells browser what elements is our page going to have.



HTML elements are created with tags.



Lets write few tags.



```html
<!DOCTYPE html >
<html>
</html>
```



- <html>  tag is the root tag of a page. You will notice that we have a opening and a closing tag.



```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        Hello Ironhackers!
    </body>
</html>
```



- <body> tag is where all of the visible content in the page goes.

  





### Let's use more html tags



```html
 <body>
    
    <nav>
      <h1>Uros C</h1>
    </nav>
   
    <header>
      <h3>Welcome</h3>
      <p> Hi! Welcome to my portfolio website!</p>
    </header>
    

    <div>
      <h4>About Me</h4>
      <p>Lorem ipsum ....</p>
    </div>
    
    <div>
      <h4>My Projects</h4>
      <p>Lorem ipsum ....</p>
    </div>
     
	<div>
       <h4>Contact Me</h4>
   	   <p>Lorem ipsum</p>
     </div>
    
  </body>
```





Lets create a form inside of our Contact me section



```html
<div>
      <h4>Contact Me</h4>
      <p>Lorem ipsum ....</p>
      
      <form>
        <h2>CONTACT FORM</h2>
          
        <label>Name: </label>
        <input type="text" />
        <br>

        <label>Email: </label>
        <input type="email" />
        <br>
        
        <label>Message:</label><textarea></textarea>
          
        <br />
        <button>Contact Me</button>
      </form>
        
    </div>
```







And as we know that all webpages usually have a footer, lets create a footer.

```html
    <footer>
      <ul>
        <li>
          <a href="">Blog</a>
        </li>
          
        <li>
          <a href="">Gallery</a>
        </li>
          
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </footer>
```





#### What does the `href` attribute do?



`href` is a attribute on the tag which enables us to set additional options, in the case of anchor tag it tells which page to load on click.

```html
          <li>
            <a href="https://google.com">Google</a>
          </li>
```







### In HTML is based on the DOM tree

In a most basic explanation this means that elements are nested as children and parents.



![Image result for dom tree](https://www.tutorialrepublic.com/lib/images/html-dom-tree.gif)





[OPEN IMAGE](https://www.tutorialrepublic.com/lib/images/html-dom-tree.gif)







Our webpage looks very simple. Let's add some basic styles to it.



```html
    ...

	<div style="background-color: aliceblue">
        <h4>ABOUT ME</h4>
        ...
    </div>
    
    <div style="background-color: deepskyblue">
        <h4>MY PROJECTS</h4>
       	...
    </div>
    
    <div  style="background-color: aliceblue">
        <h4>CONTACT ME</h4>
        ...
    </div>
```









### What is CSS ?



CSS stands for Cascading stylesheets. It enables us to write styles for our HTML document in a separate file and connect it with the HTML file.



We can write our style inline as we did previously, but instead we are going to create a separate file and write our styles there.



1. Create a `styles.css` file in our folder.



To connect the CSS stylesheet with our HTML file we are going to use the `<head>` tag.   Head tag typically holds the document title, language used, styles, scripts, and other meta information.



```html
  <head>
    <title> My Portfolio </title>
    <link rel="stylesheet" href="style.css">
  </head>
```









### CSS Syntax



In CSS we can select each element by writing a selector name and then giving it some style.





![Image result for css selector](https://www.w3schools.com/css/selector.gif)



[OPEN IMAGE](https://www.w3schools.com/css/selector.gif)









Lets style our page from  our CSS stylesheet.



```css
body {
  margin: 0;
}

div {
  border-color: black;
  border-width: 1px;
  border-style: solid;
    
  padding: 20px;
  padding-bottom: 40px;
    
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: 20px;
  margin-right: 20px;
}

footer {
  background: #2d2f3b;
  text-align: center;
}

footer ul {
  margin: 0px;
  padding: 15px;
}

footer ul li {
  display: inline;
  margin: 20px;
}

a {
  text-decoration: none;
  color: white;
  font-size: 20px;
}
```





### Selecting specific element



To select specific element, we can chain parent and children elements.

However there is a even cleaner way to do it. We can create `id` or `class` attributes on our elements.



Specific `id` is used only for one element, can't be repeated.

Same `class` can be given to multiple elements. 





Let's create some `id` and `class` attributes in our HTML



```html
    <div class="info-section" style="background-color: lightcyan">
        <h4>About Me</h4>
   		...
    </div>
    
    <div  class="info-section" style="background-color: skyblue">
        <h4>My Projects</h4>
    	...
    </div>
    

    <div  class="info-section">
        <h4>Contact Me</h4>
		...
        
        ...
        
       	<br />
        <button id="contact-button">Contact Me</button>
	</div>

	
```







```css
.info-section {
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;

  max-width: 700px;
  min-height: 300px;
  box-shadow: 0 2px 6px #b1cae2, 0 10px 10px rgba(0,0,0,0.1);
}

form {
  background: white;  
  padding: 20px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(175, 167, 208, 0.6);

  width: 360px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 60px 20px;
}

```





Let's style our form input fields:



```css
form h2 {
  margin-top: -10px;
  margin-bottom: 60px;
}

label {
  display: inline-block;
  text-align: right;
  width: 100px;
  margin-left: -100px;
  padding-right: 5px;
}


textarea, input {
  width: 200px;
  border: 0;
  border-bottom: 1px solid black;
  padding-left: 10px;
}

input {
  margin-bottom: 20px;
  height: 30px;
}
```







Let's style our form button

```css
#contact-button {
  border-width: 0;
  border-radius: 2px;

  padding: 10px 20px;
  margin: 20px;

  background-color: cornflowerblue;
  color: #ecf0f1;
  box-shadow: 1px 1px royalblue;
  font-size: 16px;
  
  transition: background-color .3s;
}


#contact-button:hover {
  background-color: royalblue;
}
```





### Remove the black border from the divs 



**div {**

  	~~border-color: black;~~

```
  ~~border-width: 1px;~~

  ~~border-style: solid;~~
```

**}**





Create the nav tag

```html
<nav>
    <h1>Uros C</h1>

    <ul>
        <li>
            <a href="#">Blog</a>
        </li>
        <li>
            <a href="#">Gallery</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
    </ul>

</nav>
```



Add styling to the nav elements

```css
nav {
    background: cornflowerblue;
    color: white;
    height: 45px;
    padding: 0px 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
}

nav h1 {
  margin-top: -10px;
  display: inline-block;
}

nav ul {
  display: inline-block;
}

nav ul li {
  display: inline;
  margin-left: 30px;
}
```











#### Fill all paragraphs with lorem ipsum text, if not done already



### [lorem ipsum generator](https://loremipsum.io/#generator)









Add an image to the **About me**  section



```html
    <div class="info-section" style="background-color: lightcyan">
      <h4>About Me</h4>

      <img  id="avatar-photo" src="https://garden.zendesk.com/css-components/avatars/images/ma.png">
      
      <p>Lorem ipsum ... </p>
    </div>
```



[Image URL](https://garden.zendesk.com/css-components/avatars/images/ma.png)



Add the style to the avatar image

```css
#avatar-photo {
  width: 150px;
  height: 150px;
  margin: 0px 20px;
  float: left;
}
```





Add Images to the Add Projects section



```html
<div id="project-images">
    <img src="https://cdn-asset-mel-1.airsquare.com/www/library/image/illustration/responsive-design-dark-blue.png">
    <img src="https://1zaja5380s332hs2h2r9fce1-wpengine.netdna-ssl.com/kansas-city/wp-content/uploads/sites/2/2017/05/kansas-city-website-design-kansas-city-web-development-asset.png">        
    <img src="https://cdn-asset-mel-1.airsquare.com/www/library/image/illustration/responsive-design-dark-blue.png">        
</div>

```



[image1](https://cdn-asset-mel-1.airsquare.com/www/library/image/illustration/responsive-design-dark-blue.png)

[image2](https://1zaja5380s332hs2h2r9fce1-wpengine.netdna-ssl.com/kansas-city/wp-content/uploads/sites/2/2017/05/kansas-city-website-design-kansas-city-web-development-asset.png)



Add styles to the  `#project-images` and `#project-images img`



```css
#project-images {
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 0;
}

#project-images img{
  width: 150px;
  height: 150px;
  margin: 20px;
}
```





To finalize the project and give it a nice polished look, lets change the style of the fonts and the background of the entire page.



to create your own pattern go to:  [heropatterns.com](http://www.heropatterns.com/)



```css
body {
  margin: 0;
  color: #2d2f3b;
    
  font-family: sans-serif;
  background-color: #ecf0f4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d1dbe3' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}


p {
  line-height: 20px;
}

h3, h4 {
  font-size: 20px;
  letter-spacing: 1px;
}
```