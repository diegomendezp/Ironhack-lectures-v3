

# Express - Handlebars Layout & Partials



<br>

#### [Code Along - Example Done](https://github.com/ross-u/express-handlebars-layout-and-partials) (Use to copy the big files)



<br>







<br>



### Layout



- Layout is a file saved as `layout.hbs` inside of the registered **views** directory.

- This file is loaded by default (hbs locates it by the name `layout.hbs`) and can be used as a shell or layout for the rest of the views. 

- If the file by this name exists in views directory, handlebars will try to load it.

- `{{{ body }}}` is used inside of the layout file to mark the place where view files will be loaded, with the layout surrounding them.  



<br>



### Partials (smaller components)

- Partials allow for code reuse.

- Partials serve as shared components that can be embedded multiple times inside of the handlebars view files.

- In this sense partials serve as reusable components, created once and used many times.

- Loading a partial is done with the following syntax:

   `{{> partial-name  dataContext }}`

  ```handlebars
    <main class="cards-container">
  
      {{#each movies}}
        {{> movieCard this}}
      {{/each}}
    
    </main>
  ```

   



<br>



# Code Along



<br>



### Create the file structure

```bash
mkdir 01-express-handlebars-demo

cd 01-express-handlebars-demo

mkdir public views public/css views/partials

touch app.js .gitignore moviesData.js public/css/styles.css views/index.hbs views/layout.hbs views/movies.hbs

code .
```





<br>



### Copy `Moviesdata.js` content from the [Repo](https://github.com/ross-u/express-handlebars-layout-and-partials).

[File link](https://raw.githubusercontent.com/ross-u/express-handlebars-layout-and-partials/master/moviesData.js)



<br>



### Initialize `npm` and Install dependencies

```bash
# Create package.json
npm init

# Answer the questions prompt


# Install dependencies
npm i --save express hbs


# Install devDependencies
npm i --save-dev nodemon

```



<br>



### Add the `start` script to `package.json`

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  },
```



<br>



### Instantiate the server

##### `app.js`

```js
const express = require("express");
const hbs = require("hbs");
const app = express();

const PORT = 3000;
const movies = require("./moviesData");

// SET THE TEMPLATING ENGINE
app.set("view engine", "hbs");

// SET THE DIRECTORY USED TO SERVE VIEWS
app.set("views", __dirname + "/views");

// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + "/public"));

// SET THE DIRECTORY USED TO SERVE PARTIALS
hbs.registerPartials(__dirname + "/views/partials");


// ROUTES
//
//

// START THE SERVER
app.listen(PORT, () => console.log(`Server listening at PORT ${PORT}`));
```



<br>



### Run the server

```bash
# This will run the script we saved in the package.json
npm run start
```



<br>





### Add the routes to the `app.js`



##### `app.js`

```js
// ROUTES
app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/movies", (req, res, next) => {
  const moviesSlice = movies.slice(0, 40);

  const data = {
    movies: moviesSlice
  };

  res.render("movies", data);
});

```





### Populate the `styles.css`

[file url](https://raw.githubusercontent.com/ross-u/express-handlebars-layout-and-partials/master/public/stylesheets/styles.css)

##### `public/css/styles.css`

```css
body, html {
  margin: 0;
  padding: 0;
}

.view-container {
  min-height: 600px;
  padding: 20px 50px;
}

.navbar {
  background:#131c6e;
  color: white;
  padding: 10px;
}

.navbar h3 {
  margin-left: 20px;
  margin-top: 0px;
  margin-bottom: 30px;
}

.navbar a{
  text-decoration: none;
  color: white;
  padding: 10px 30px;
  margin: 10px;
  box-shadow: 1px 1px 2px 1px rgba(255, 255, 255, 0.2);
}

.navbar-nav {
  margin-left: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
}

footer {
  background:#131c6e;
  color: white;
  padding: 10px 20px;
}

.navbar-nav a {
  border: 1px solid white;
  border-radius: 3px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  border: 1px solid black;
  padding: 0px 20px;
  margin: 10px;
  width: 300px;
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.3);
}

.category-card {
  border: 1px solid black;
  padding: 25px 30px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.3);
}

.category-card h3, .card h3{
  margin-top: -10px;
}


.category-card a {
  background:#131c6e;
  color: white;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px 20px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
}

```







<br>





### Create the files for each View



##### `views/layout.hbs`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>IHMDB</title>
  <link rel="stylesheet" href="/css/styles.css">    
</head>

<body>

  <nav class="navbar">
    <h3> IHMDB - IronHack Movies Database </h3>
    <div class="navbar-nav">
      <a href="/">Home</a>
      <a href="/movies">Movies</a>
    </div>
  </nav>

  <div class='view-container'>
    {{{ body }}}
  </div>

  <footer>
    <h4>IHMBD - All Rights Reserved.</h4>
  </footer>
  
</body>
</html>
```



<br>



##### `views/index.hbs`

```html
<div>

  <header>
    <h2>IHMDB</h2>
  </header>

  <main class="cards-container">

    <div class='category-card'>
      <h3>Movies List</h3> <br>
      <p>Click the button to see the list of movies.</p> <br>
      <a href="/movies"> See Movies </a>
    </div>

  </main>

</div>
```



<br>



##### `views/movies.hbs`

```html
<div>

  <header>
    <h2>Movies List</h2>
  </header>

  <main class="cards-container">


    {{#each movies}}
      {{this.title}}
    {{/each}}
  
  </main>
  
</div>
```



<br>



### Create `movieCard.hbs` partial

##### `views/paritals/movieCard.hbs`

```html
<article class="card">
  <img src="{{this.photo}}" alt="">
  <div>
    <h3>{{this.title}}</h3>
    <p><strong>Rank:</strong> {{this.rank}}</p>
  </div>
</article>
```



##### 

<br>



### Update `movies.hbs` View to use `movieCard` partial



`views/movies.hbs`

```handlebars
<div>

  <header>
    <h2>Movies List</h2>
  </header>

  <main class="cards-container">


    {{#each movies}}
      {{!-- UPDATE BELOW --}}
      {{> movieCard this}}
    {{/each}}
  
  </main>
  
</div>
```





<br>



### Run the server

```bash
npm run start
```



<br>



### Visit the URLs in the browser to render the Views :



##### -  `localhost:3000`

##### -  `localhost:3000/movies`





<br>



## Skipping the layout

- We can skip the layout for a current view by creating property `layout` on the `data` object we pass to the view.



##### `app.js`

```js
app.get("/movies", (req, res, next) => {
  const moviesSlice = movies.slice(0, 40);

  const data = {
    movies: moviesSlice,
    layout: false						//  <-- UPDATE
  };

  res.render("movies", data);
});
```





<br>



### Done! ✅ 