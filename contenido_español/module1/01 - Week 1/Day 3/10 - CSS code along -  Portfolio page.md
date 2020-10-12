

# Code Along - CSS | Build your portfolio page



<br>



**Resources page** is used so that students can easily copy the image links for the 3 images we will be using during the code along.

## [RESOURCES PAGE (Images)](https://codepen.io/Denzelzeldi/full/mdbBoMq)



<br>



**Finished Web page** is the example of the completed web page including CSS. In this code along on Day 2 Week 1, we will only work  include the CSS .



## [FINISHED WEBPAGE  (with CSS)](https://codepen.io/Denzelzeldi/full/yLBdGdE)



<br>



0

#### If not done already clone the repo of your Personal Portfoilio page - from day 1



#### [Webpage with HTML - ross-u repo](https://github.com/ross-u/codealong-portfolio-webpage)

```bash
git clone https://github.com/ross-u/codealong-portfolio-webpage

cd <directory name>

code .
```





1

#### Create and link the `style.css` file

```bash
touch styles/style.css
```



##### Update the `index.html` file and `<link>` the `.css` file : 

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Your Name</title>
  
  <link rel="stylesheet" href="./styles/style.css">
  
</head>
```





2

### CSS syntax reminder

In CSS we can select each element by writing a selector name and then giving it some style.





![Image result for css selector](https://www.w3schools.com/css/selector.gif)



[OPEN IMAGE](https://www.w3schools.com/css/selector.gif)





3

#### Let's start styling our webpage from the `css` file

`styles/style.css`

```css
body {
  margin: 0;
}

section {    
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









4

### Selecting specific element



To select specific element, we can chain the selectors, for example parent and children elements. 

For example we could do it as:

`styles/style.css`

```css
main section {
	margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;

  max-width: 700px;
  min-height: 300px;
  box-shadow: 0 2px 6px #b1cae2, 0 10px 10px rgba(0,0,0,0.1);
}
```



However, the **cleaner** way to do it is **using `id` or `class`** attributes on our elements.





5 

#### Change the name of `main section` selector to `.info-section`

Let's select all the section elements by targeting their class `info-section`:

`styles/style.css`

```css
.info-section {
	margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;

  max-width: 700px;
  min-height: 300px;
  box-shadow: 0 2px 6px #b1cae2, 0 10px 10px rgba(0,0,0,0.1);
}
```







6

### Add basic styles to the `form`

`styles/style.css`

```css
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





7

### Style the form input fields

`styles/style.css`

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





8

### Style the form `button`



Let's style the form `<button>` by targeting using the `id` of the button: `styles/style.css`

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





9

### Add styling to the navbar `<nav>` and the children elements

`styles/style.css`

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





10

### Style the avatar photo

Let's style the avatar photo  by targeting the `id` of the `img` element

`styles/style.css`

```css
#avatar-photo {
  width: 150px;
  height: 150px;
  margin: 0px 20px;
  float: left;
}
```







11

### Add styles to the  `#project-images`  container section and `#project-images img`

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





12 

### Add the pattern background  to the `body`

To finalize the project and give it a nice polished look, let's change the style of the fonts and the background of the entire page.



We will use the pattern generator tool : 

### [heropatterns.com](http://www.heropatterns.com/)

Steps:

- Select the pattern
- Edit the style and the colors
- Copy the GENERATED CSS CODE
- Use the copied style for the `body` 



```css
body {
  margin: 0;
    
  background-color: #ecf0f4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d1dbe3' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

```





13

### Change the typography and style the fonts



Steps:

- Change the font color
- Add the font family (we may import fonts from [Google Fonts](https://fonts.google.com/) )
- Change the `line-height`, `letter-spacing` and `font-size` to increase readability.

```css
body {
  margin: 0;
  background-color: #ecf0f4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d1dbe3' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  color: #2d2f3b;
  font-family: sans-serif;
}z


p {
  line-height: 20px;
}

h3, h4 {
  font-size: 20px;
  letter-spacing: 1px;
}
```





14 

### Before commiting the work take a look at the GIT cheat sheet if needed

### [GIT cheatsheet](https://gist.github.com/ross-u/2179208fa4378b86e7997700290e8f9a)





15

#### Commit and push all the changes we created so far

#####  

```bash
git status

git add .

git commit -m 'Add styles/style.css and link it to index.html'

git push origin master
```

