# CSS | Bootstrap Intro



## **Getting Started**



### **We can either download Bootstrap files** or use CDN -



[Bootstrap - Getting Started - Download](<https://getbootstrap.com/docs/3.4/getting-started/>)

**or use online CDN to load the resource without the need to download it to our file system**



```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
```



## Resetting the browser styles

Before starting we will have to reset the browser styles.

To do this we will use CSS file from the internet,  we will use [Eric Meyer’s version](http://meyerweb.com/eric/tools/css/reset/reset.css).



#### Copy and save the code in a `resset.css` file

#### Link the file in the HTML `head, before the bootstrap CDN links and script

```html
<link href="css/reset.css" type="text/css" rel="stylesheet">
```





#### Insert bootstrap styles in the HTML file

```html
<link href="css/bootstrap.min.css" type="text/css" rel="stylesheet">
<link href="css/main.css" type="text/css" rel="stylesheet">
```





## Link your css file the last

When linking CSS files, **always link your app’s custom CSS last**. That way you can override CSS provided by libraries like Bootstrap.









# Bootstrap Grid System

#### Bootstrap grid system uses 12 column grid to position elements.

#### Each row in the grid always has 12 columns - it is always divided into 12 parts.

![img](https://www.formget.com/wp-content/uploads/2015/07/Bootstrap-grid.png)





### **Container**

In order to use the grid we have to start with a parent element which is given a class `container` or `container fluid`



```html
<section class="container"></section>
   
 ...

<section class="container-fluid"></section>

```





## `.container` class has fixed width (less than 100%) 

##  `.container-fluid` will have `width: 100%`



## `row`

### class `row` is used as a holder for columns



**Example**

```html
<div class="row">
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
</div>
<div class="row">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
```

```css
body {
  box-sizing: initial;
}

div {
  min-height: 40px;
}

.div-example {
  padding: 10px;
  background: rgb(123, 123, 201);
  border: 2px solid white;
  font-size: 16px;
  font-weight: 700;
  color: black;
}
```





### `columns`

### There are four column sizes in Bootstrap, one for each responsive breakpoint:

- **xs** - Extra small (*from 0px until 768 px* ) - small screen / phone
- **sm** - Small (*from 768 px and up* until 992 px where `md` starts ) - small screen / phone
- **md** - Medium (*from 992px and up* until 1200 px where `lg` starts ) - Medium screen / tablet
- **lg** - Large ( *from 1200px and up* ) - Large screen / desktop



#### For details refer to documentation - [Responsive Breakpoints](<https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints>)



```html
  <section class="container-fluid">
      <div class="row">
          <div class="col-xs-4 col-sm-6 col-md-1 blue">.col-sm-6 .col-md-1</div>
          <div class="col-xs-4 col-sm-6 col-md-1 blue">.col-sm-6 .col-md-1</div>
          <div class="col-xs-4 col-sm-3 col-md-1 blue">.col-sm-3 .col-md-1</div>
          <div class="col-sm-3 col-md-1 blue">.col-sm-3 .col-md-1</div>
          <div class="col-sm-3 col-md-1 blue">.col-sm-3 .col-md-1</div>
          <div class="col-sm-3 col-md-1 blue">.col-sm-3 .col-md-1</div>
          <div class="col-sm-3 col-md-1 blue">.col-sm-3 .col-md-1</div>
          <div class="col-sm-3 col-md-1 blue">.col-sm-3 .col-md-1</div>
          <div class="col-sm-3 col-md-1 blue">.col-sm-3 .col-md-1</div>
          <div class="col-sm-3 col-md-1 blue">.col-sm-3 .col-md-1</div>
          <div class="col-sm-3 col-md-1 blue">.col-sm-3 .col-md-1</div>
          <div class="col-sm-3 col-md-1 blue">.col-sm-3 .col-md-1</div>
        </div>

        <div class="row">
          <div class="col-md-8 blue">.col-md-8</div>
          <div class="col-md-4 blue">.col-md-4</div>
        </div>
        
        <div class="row">
          <div class="col-md-4 blue">.col-md-4</div>
          <div class="col-md-4 blue">.col-md-4</div>
          <div class="col-md-4 blue">.col-md-4</div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-5 blue">.col-md-6 .col-lg-5</div>
          <div class="col-md-6 col-lg-3 blue">.col-md-6 .col-lg-3</div>
        </div>
  </section>
```





### Forms - 



#### (nest below snippet inside the section `.container-fluid`)

```html
<div class="row">
          <form class="col-sm-6 col-sm-offset-3">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="inputEmail" placeholder="Insert your email here">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="inputPassword" placeholder="Password">
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox"> I want to receive communications from Ironhack.
              </label>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div>
```





### Buttons

```html
<form>
  ...
    ...
     ...
        <button type="button" class="btn btn-info">Submit</button>
        <button type="button" class="btn btn-success">Submit</button>
        <button type="button" class="btn btn-warning">Submit</button>
        <button type="button" class="btn btn-danger">Submit</button>

        <button type="button" class="btn btn-default btn-sm">.btn-sm</button>
        <button type="button" class="btn btn-default btn-md">.btn-md</button>
        <button type="button" class="btn btn-default btn-lg disabled">.btn-lg</button>
</form>
```







### **Text colors**

```html
<h2>Text colors</h2>

<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning">.text-warning</p>
<p class="text-info">.text-info</p>
<p class="text-light bg-dark">.text-light</p>
<p class="text-dark">.text-dark</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
```



### Background-colors

```html
  <h2>Background colors</h2>
 
	<div class="bg-primary text-white">.bg-primary</div>
  <div class="bg-secondary text-white">.bg-secondary</div>
  <div class="bg-success text-white">.bg-success</div>
  <div class="bg-danger text-white">.bg-danger</div>
  <div class="bg-warning text-dark">.bg-warning</div>
  <div class="bg-info text-white">.bg-info</div>
  <div class="bg-light text-dark">.bg-light</div>
  <div class="bg-dark text-white">.bg-dark</div>
  <div class="bg-white text-dark">.bg-white</div>
```



### Images

```html
    <div class="row text-center">
      <img src="https://via.placeholder.com/200" class="img-rounded">
      <img src="https://via.placeholder.com/200" class="img-circle">
      <img src="https://via.placeholder.com/200" class="img-thumbnail">
      
      
      <img class="img-responsive" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681"
      style="margin: 0 auto">
      
      <img class="img-responsive img-circle" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681"
      style="margin: 0 auto">
      
    </div>
```





### Additional resources

<https://www.sitepoint.com/responsive-web-design-tips-bootstrap-css/>

