# Express | Server Side Rendering Basics

## Learning Goals

After this lesson you will be able to:

- Server side render HTML pages and serve them with Express.
- Understand what a `templating engine` , templates and server side rendering are and why we use them.
- Understand and use `HandlebarsJS` for creating dynamic templates.
- Use `if`, `with` and `each` block helpers.cd 



<br>



#### Create the file structure

```bash
mkdir 01-express-server-side-rendering

cd 01-express-server-side-rendering

mkdir public

mkdir public/css public/js

touch app.js home.html public/css/style.css

code .
```



<br>



#### Initialize the project and install dependencies

```bash
npm init -y


# -y flag tells the generator to use the defaults instead of asking questions


npm i --save express

npm i --save-dev nodemon
```



<br>



### Sending text in the response

##### `app.js`

```js
const express = require('express');
const app = express();

// Send a text string in the response
app.get('/', (req, res, next) => {
  res.send('<h1 style="color: red">First Route</h1>');
});

app.listen(3000);
```



<br>



### Sending more complex text  - HTML

##### `app.js`

```js
// Sending a text string representing HTML DOM
app.get('/about', (req, res, next) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Express SSR</title>
    </head>
    <body>
      <h1 style="color: green;">This is our second route</h1>
      This page was sent from the server using:
      <b><pre>res.send(HTML_STRING)</pre></b>
    </body>
  </html>
  `);
});
```



##### 

<br>



## Views



The above way would eventually get to be too verbose and make the application and code unreadable.



Instead we can send the HTML files.





We can use  `res.sendFile` to send a file to the browser.



###### [`__dirname`](https://nodejs.org/api/modules.html#modules_dirname) 

**`__dirname`** - is the directory name of the current module/file in which the value `__dirname` is used. 



This is the same as the `path.dirname(__filename)` .



```js
// Add middleware for serving static filesd

// MIDDLEWARE
app.use(express.static('public'));

// ...
//   ...
//     ...


// Sending a html file
app.get('/home', (req, res, next) => {
  res.sendFile(`${__dirname}/home.html`);
});
```



<br>



### Update `home.html`

##### home.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Express SSR</title>
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body>
    <h1>home.html page</h1>
    <h4>
      This page was sent from the server using:
      <pre>res.sendFile(`${__dirname}/home.html`)</pre>
    </h4>
  </body>
</html>

```



<hr>



<br>





## [Express React Views](https://github.com/reactjs/express-react-views)



### What is Express React Views ?



Express React Views is a templating engine, JavaScript library, based on the JSX. JSX is the syntax extension of JavaScript which enables mixing HTML and JSX in one file.
JSX is very common nowdays and it got it's fame thanks to React.

So, by learning how to create things with JSX, you are also partially learning the syntax that you will need later for React.



*Template engine* helps us to create an HTML *template*. It is basically a stencil or a skeleton of our HTML page.

With template engine we create a HTML *template* and inject some data to it on the server, before sending it to the client as a custom HTML page.



Some of the most well-known JavaScript templating engines are [Mustache](http://mustache.github.com/), [Underscore](http://underscorejs.org/), [EJS](http://embeddedjs.com/), and [Handlebars](http://handlebarsjs.com/). 



We use templating engine to be able to do the server side rendering. We create and prepare the HTML page completely on the back-end. 

We add data to the HTML template and when that is ready we serve it to the client.



The template files used to create the HTML pages sent to the client (front-end) are called <u>Views</u>. 

<br>





## Install Express React Views & start serving Views



<br>



#### Create a folder for views and file `views/index.hbs`

```bash
mkdir views
touch views/Layout.jsx views/Home.jsx
```



<br>



#### Notice that we use a new extension: 

####  `.jsx` instead of ~~`.html`~~ 



<br>



#### Install Express React Views

```bash
npm install express-react-views react react-dom
```



<br>





### Set path that points to the `views` folder

##### `app.js`

```js
// Import express-react-views
const erv = require("express-react-views");


// SET THE VIEW ENGINE
// Set the folder containing the View/Template `jsx` files
app.set('views', __dirname + '/views');
// Set `express-react-views` as the view engine used for rendering HTML
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine() );
```



<br>

### Create the folder for view/template files

```bash
mkdir views

touch views/Home.jsx
```



<br>

#### Add content to the `Home.jsx` view file

##### `views/Home.jsx`

```jsx
const React = require("react");

function Home() {
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> Home </title>
        <link rel="stylesheet" href="stylesheets/style.css" />
      </head>
      <body>
        <h1>Ironhackers Be Like</h1>
        <img src="https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif" />
      </body>
    </html>
  );
  
}

// We export the file so that other code can access it as a module and use it.

module.exports = Home;

```



<br>

#### Update `app.js` to `res.render()` the `Home` view

##### `app.js`

```js
// render the view using handlebars
app.get('/home', (req, res, next) => {
  
  // res.sendFile(__dirname + "/home.html");       	<---- REMOVE
  
  res.render('Home');    	// <---- ADD
});
```



<br>

## :rotating_light:

<h2 style="color: red">Delete the file <pre>index.html</prepre> if present 
</h2>


<h2>If not deleted it will be loaded automatically by express when visiting the home endpoint `/`</h2>



<br>



### ***

### [Visit `localhost:3000/home`](http://127.0.0.1:3000/home)



<br>





### Rules of jsx:

- Self closing tags must have a slash at the end: `<img/>`,  `<link/>`,  `<br/>`, etc.
- Some attribute names are slightly different than HTML: `className`, `charSet`
- Code returned from the function must have 1 main parent element. Other elements can be nested inside.



## **Time To Practice** - 

### Create and serve your first View



Create a new View that will serve the **About** page:

- Create a new route for `GET` request  with the endpoint `/about`:

- It should render a new view file, from `views/About.jsx`.
- In the newly created template file `About.jsx`:
  - Create an `h1` with your name.
  - Create an `h2` with your favourite book/movie/serie quote.
  - Add an image from [giphy](https://giphy.com/) that you like.







<br>



### JSX comes with full power of JavaScript



JSX enables us to embed Javascript code inside of the HTML, in order to create our HTML page more dynamicaly.



```bash
touch views/About.jsx
```



##### `views/About.jsx`

```jsx
const React = require('react');


const obj = {
  name: 'John',
  city: 'Barcelona',
  bootcamp: 'WebDev'
}

const users = ['Bob', 'Sarah', 'Anna', 'Uros'];


function getContent(lang) {
  if (lang === 'en') {
    return 'Intensive courses & bootcamps in Web Development, UX/UI Design, Data Analytics & Cybersecurity'
  }
  else if (lang === 'es') {
    return 'Cursos intensivos y bootcamps de desarrollo web, diseño UX/UI, análisis de datos y ciberseguridad'
  }
}


function About() {
  return(
    <div>
      <h1>Uros</h1>
      <h2>"Don't wish it was easier, wish you were better. "<sub>Jim Rohn</sub> </h2>
      <img src="https://i.giphy.com/media/3o7qDLkrKr034Z3hQI/giphy.webp" alt=""/>

      <br/>
      2 + 2 = { 2 + 2 }

      <p> Name: { obj.name } </p>
      <p> City: {obj.city} </p>
      <p> Bootcamp: {obj.bootcamp} </p>

      <p> First user - { users[0] } </p>
      <p> Last user - { users[3] } </p>

      <h3> { getContent('es') } </h3>

    </div>
  )
}



module.exports = About;
```



<br>



## JSX functions are reusable components

```bash
touch  views/StudentsPanel.jsx
```





Every **jsx**  function returning HTML is reusable. It is created as a reusable component, thanks to React.

It enables us to easily separate concerns and separate code into smaller reusable parts.



Initialy we could write the entire view structure inside of the same file, in the following way.

##### `views/StudentsPanel.jsx`

```jsx
const React = require("react");
const StudentCard = require('./StudentCard');

function StudentsPanel() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Student Card</title>
        <link rel="stylesheet" href="css/style.css" />
      </head>
      <body>
        <h1>Students Panel</h1>
        
        <section className="student-card">
          <h2>Student Card</h2>
          <h3>Details</h3>

         	<div className="img-container">
            <img src="" alt="" />
          </div>
          <p className="name">First Name:</p>
          <p className="name">Last Name:</p>

        	<button>See Profile</button>
        </section>
        
      </body>
    </html>
  );
}

module.exports = StudentsPanel;

```







### Create smaller components



But if we want to repeat certain parts of code, we can do it in a better easier way, by creating additional components.



We can move the code from `StudentsPanel.jsx` into another component 

```bash
mkdir views/components

touch views/components/StudentCard.jsx
```



##### `views/compnents/StudentCard.jsx`

```jsx
const React = require("react");

function StudentCard() {

  return (
        <section className="student-card">
          <h2>Student Card</h2>
          <h3>Details</h3>

          <div className="img-container">
            <img src="" alt="" />
          </div>
          <p className="name">First Name:</p>
          <p className="name">Last Name:</p>

          <button>See Profile</button>
        </section>
  );
}

module.exports = StudentCard;

```





### Use a smaller component in the View

##### `views/StudentsPanel.jsx`

```jsx
const React = require("react");
const StudentCard = require('./StudentCard');      // <-- IMPORT THE COMPONENT

// Reusing a smaller component within the StudentsPanel

function StudentsPanel() {
  return (
    {/*  ...  */}
      <body>
        <h1>Students Panel</h1>
        <StudentCard/>            {/*  <==  ADD */}
        <StudentCard/>            {/*  <==  ADD */}
        <StudentCard/>            {/*  <==  ADD */}

      </body>
    {/*  ...  */}
  );
}
```











### Injecting data to a component - props

Components are very powerful as they enable us to inject custom data to them.

Data injected in the component is called - ***props***.





In the above example we could customize the data that each `StudentCard` component is showing.

##### `views/StudentsPanel.jsx`

```jsx
/*
...
*/

function StudentsPanel() {
  return (
    {/*  ...  */}
      <body>
        <h1>Students Panel</h1>
                                                           
        <StudentCard fName="Uros" lName="Cirkovic" />       {/*  <==  UPDATE */}
        <StudentCard/>
        <StudentCard/>

      </body>
    {/*  ...  */}
  );
}
```





<br>



##### `views/components/StudentCard.jsx`

```jsx
function StudentCard ( props ) {															// <==  UPDATE
  // props ===>   {  fName: 'Uros',   lName: 'Cirkovic' }
  
  return (
        <section className="student-card">
          <h2>Student Card</h2>
          <h3>Details</h3>

          <div className="img-container">
            <img src="" alt="" />
          </div>
          <p className="name">First Name: { props.fName } </p>
          <p className="name">Last Name:  { props.lName } </p>

          <button>See Profile</button>
        </section>
  );
}

module.exports = StudentCard;

```









Each Component is created as a separate part, therefore enabling us to pass different data to each component.

##### `views/StudentsPanel.jsx`

```jsx
/*
...
*/

function StudentsPanel() {
  return (
    {/*  ...  */}
      <body>
        <h1>Students Panel</h1>
                                                           
        <StudentCard fName="Uros" lName="Cirkovic" />       {/*  <==  UPDATE */}
        <StudentCard fName="John" lName="Doe" />
        <StudentCard/>

      </body>
    {/*  ...  */}
  );
}

// In this way we reuse components to re-create parts with same structure, 
// but with different content.
```









<br>







```jsx
/*
...
*/

function StudentsPanel() {
  return (
    {/*  ...  */}
      <body>
        <h1>Students Panel</h1>
                                                           
        <StudentCard 
          fName="Uros" 
          lName="Cirkovic" 
          photo="https://i.imgur.com/h0uGpjB.jpg"         {/*  <==  UPDATE */}
        />
        <StudentCard fName="John" lName="Doe" />
        <StudentCard/>

      </body>
    {/*  ...  */}
  );
}

// In this way we reuse components to re-create parts with same structure, 
// but with different content.
```





```jsx
  
	// ...
        <section className="student-card">
          <h2>Student Card</h2>
          <h3>Details</h3>

          <div className="img-container">
            <img src={ props.photo } alt="" />			  {/* <==  UPDATE   */}
          </div>
  
          <p className="name">First Name: { props.fName }</p>
          <p className="name">Last Name: { props.lName } </p>

	// ...
}

```









<br>



### [Exercise - pass the props (20 min)](https://github.com/ross-u/ssr-basics---props-exercise)





<br>



### Passing props during the  `res.render`

When rendering a template we can pass it data that we want to inject into the template.

To do this we pass the data as the second parameter to the method:  `res.render('view-name', data)`.

```js
res.render('ViewName', data);
```



```bash
touch views/Welcome.jsx
```



##### `app.js`

```js
// create a template and pass it the data
// that can be used inside of the template page
app.get('/welcome', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    bootcamp: "IronHack Barcelona - WebDev"
  };

  res.render('Welcome', data);
});
```



<br>



##### `components/Welcome.jsx`

```jsx
const React = require('react');

// Passing the props data via the `res.render`

function Welcome (props) {
  
  return(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Welcome</title>
      </head>
      <body>
        <h1>Hello {props.name} !</h1>
        <p>Welcome to the {props.bootcamp} .</p>
        
        <img src="http://giphygifs.s3.amazonaws.com/media/FQyQEYd0KlYQ/giphy.gif" />
      </body>
    </html>
  )
}


module.exports = Welcome;
```





<br>



### Conditionals

```bash
touch components/Conditionals.jsx
```



```jsx
app.get("/conditional", (req, res, next) => {
  app.render("Conditionals");
});
```





##### `components/Conditionals.jsx`

```jsx
const React = require("react");

const isLoggedIn = true;
const photo = "https://i.imgur.com/kdOOnTL.jpg";
// const photo = undefined;


// Example on conditional rendering in JSX

function Conditionals(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Conditionals</title>
      </head>
      <body>
        {
          isLoggedIn 
            ? <h3> Logged In!</h3> 
            : <h3> Not Logged in :(</h3>
        }

        { photo ? <img src={ photo } alt=""/> : null }
      </body>
    </html>
  );
}

module.exports = Conditionals;

```



<br>









### Lists and mapping 

### 

```bash
touch components/List.jsx
```



We can use arrays and array.map method to dynamically create lists in our components.

```js
app.get("/list", (req, res, next) => {
  app.render("List");
});
```





##### `components/List.jsx`

```jsx
const React = require("react");

// Example of rendering lists with array.map() in JSX

function List () {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>List</title>
      </head>
      <body>
        {
          [
            <p> Barcelona </p>,
            <p> Madrid </p>,
            <p> Paris </p>,
            <p> Berlin </p>,
            <p> Miami </p>,
          ]
        }
      </body>
    </html>
  );
}

module.exports = List;


```





We can also do it dynamically by using `array.map` method.

When mapping we must always include the `key` attribute on the returned element. We can use indexes for this.

```jsx
const React = require("react");

// Example on conditional rendering in JSX

const cities = [ 'Barcelona', 'Madrid', 'Paris', 'Berlin', 'Miami'];

function List () {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>List</title>
      </head>
      <body>
        {
          cities.map( (city, i) => {
            return <p key={i} > {city} </p>
          })
        }
      </body>
    </html>
  );
}

module.exports = List;


```





