# Express | Dynamic Views

## Learning Goals

After this lesson you will be able to:

- Create `views` in Express.
- Understand what `dynamic templates` are and why we use them.
- Understand and use `HandlebarsJS` for creating dynamic templates.
- Use `if`, `with` and `each` block helpers.





```bash
npm init
npm i express --save

touch app.js

mkdir css
cd css
touch style.css
```





### Sending text in the response

```js
var express = require('express');
var app = express();

// Send a text string in the response
app.get('/', (req, res, next) => {
  response.send('hello world');
});

app.listen(3000);
```





### Sending more complex text  - HTML

```js
// Sending a text string representing HTML DOM
app.get('/sendhtml', (req, res, next) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="css/style.css">
      </head>
      <body>
        <h1>This is my second route</h1>
      </body>
    </html>
  `);
});
```





## Views



### The above way would get to be too verbose and make the application and code unreadable.



### Instead we can send the files.





### These files are called <u>Views</u>. We can use  `res.sendFile` to send a file to the browser.

```basg
touch index.html
```



```js
// Add middleware for serving static files
app.use(express.static(__dirname));

// ...
//   ...
//     ...


// Sending a view as a file
app.get('/sendview', (req, res, next) => {
  //res.render('index.html');
  res.sendFile(__dirname + '/index.html');
});
```







## Dynamic views

#### Create a folder for views and file `views/index.hbs`

```bash
mkdir views
touch views/index.hbs
tree . 

# Remove node_modules dir
```



#### Notice we use a new extension `.hbs` instead of `.html` .



### Install handlebars

```bash
npm install hbs --save
```



## 





### Set path that points to the `views` folder

```js
// creates an absolute path pointing to a folder called "views"
app.set('views', __dirname + '/views');
// set HBS to be in charge of rendering the HTML
app.set('view engine', 'hbs');
```





### `views/index.hbs`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My first view</title>
  <link rel="stylesheet" href="stylesheets/style.css">
</head>
<body>
  <h1>Ironhacker Be Like</h1>
  <img src="https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif">
</body>
</html>	
```



#### `app.js`

```js
// render the view using handlebars
app.get('/', (req, res, next) => {
  // send `views/index.hbs` for displaying in the browser
  res.render('index');
});
```





### Visit `localhost:3000/`







## **Time to Practice**

Create a new route called `about`:

- It should render a separate view also called `about.hbs`
- Create an `h1` with your name
- Add a giphy image that you like







## [Handlebars](<http://handlebarsjs.com/>)

 [**Handlebars.js**](http://handlebarsjs.com/) is a sweet javascript library for building clean logicless templates based on the **Mustache Templating Language**.







### Templating in action

```bash
touch views/student.hbs
```



**student.hbs**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Home</title>
</head>
<body>
  <h1>Hello {{name}}!</h1>
  <p>Welcome to the {{bootcamp}}.</p>
</body>
</html>
```





```js
// create a template and pass the data to render
app.get('/student', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    bootcamp: "IronHack WebDev"
  };

  res.render('student', data);
});
```







## Handlebars - Escaping HTML

### By default Handlebars escapes HTML values included in a expression with the `{{ }}`.

### Try the following

```js
bootcamp: "<span>IronHack WebDev</span>"
```



## If we don’t want Handlebars to escape a value, we should use the triple-stash: **{{{ }}}**.



**student.hbs**

```html
<p>Welcome to the {{{bootcamp}}}.</p>
```







### Handlebars Helpers Features

### The `if` block helper

### You can use the `if` helper to render a block conditionally. That means, if its argument returns `false`, `undefined`, `null`, `""`, `0`, or `[]`, **Handlebars** will not render the block.



**student.hbs**

```html
	<h3>if else</h3>
	{{#if message}}
    <h2>MESSAGE - This won't be displayed!!</h2>
  {{/if}}

  {{#if name}}
    <h2>This will be displayed!</h2>
  {{/if}}
```





### Let’s add the `lastName`property to the data!



```js
app.get('/student', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    message: "Rocking it!"
  };
  res.render('index', data);
});
```





## using `else` condition

**student.hbs**

```html
{{#if address}}
    <h2>This won't be displayed!!</h2>
{{else}}
  <h2>This will be displayed because the "address" property does not exists!!</h2>
{{/if}}
```





### The `unless` block helper

#### `unless` will render the block if the expression returns a **falsy value**.

**student.hbs**

```html
 <h3>unless</h3>

{{#unless address}}
  <h3>WARNING: We can't find the address!</h3>
{{/unless}}
```



If we add the `address` property, then the warning should disappear!

```js
app.get('/', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    message: "Rocking it!",
    address: "Barcelona"
  };
  res.render('index', data);
});
```



### The `each` block helper



### The `each` block helps us to iterate over a list of elements, mainly `objects` and `array`.



```js
app.get('/', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    message: "Rocking it!",
    address: "Barcelona",
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"]
  };
  res.render('index', data);
});
```



**student.hbs**

```html
<ul>
  {{#each cities}}
    <li>{{this}}</li>
  {{/each}}
</ul>



// Same as a list 
  <ul>
    <li>Miami</li>
    <li>Madrid</li>
    <li>Barcelona</li>
    <li>Paris</li>
    <li>México</li>
    <li>Berlín</li>
  </ul>
```





### To `{#each collection}` You can optionally provide an `{{else}}` section which will display only when the list is empty.

```html
<ul>
  {{#each cities}}
    <li>{{this}}</li>
  {{else}}
    <p>No cities yet!</p>
  {{/each}}
</ul>
```





#### `@index`

When looping through items in `each`, you can optionally reference the current loop **index** via `{{@index}}`

```html
<ul>
  {{#each cities}}
    <li>{{@index}}: {{this}}</li>
  {{/each}}
</ul>
```





#### `@key`

Additionally for `object` iteration, `{{@key}}` references the current key name:

```html
<ul>
{{#each info}}
  <li>{{@key}}: {{this}}</li>
{{/each}}
<ul>
```

```js
app.get('/', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    message: "Rocking it!",
    address: "Barcelona",
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"],
    info: { name: 'Ironhacker', campus: 'Barcelona', year: 2019}
  };
  res.render('index', data);
});
```





#### `@first` - `@last` - from the aray

The first and last steps of iteration are noted via the `@first` and `@last` variables when iterating over an array.

```html
<ul>
  {{#each cities}}
    {{#if @first}}
      <li><b>{{this}}</b></li>
    {{else if @last}}
      <li><i>{{this}}</i></li>
    {{else}}
      <li>{{this}}</li>
    {{/if}}
  {{/each}}
</ul>
```





### The `with` block helper

Commonly, Handlebars evaluates its templates against the context passed into the compiled method. We can shift that context to a section of a template by using the built-in `with` block helper.

For example, passing the following data:

```js
app.get('/student', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    bootcamp: "<span>IronHack WebDev</span>",
    message: 'Rocking it',
    address: {
      street: "Barcelona",
      number: 96
    },
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"],
    info: { name: 'Ironhacker', campus: 'Barcelona', year: 2019 }
  };

  res.render('student', data);
});
```

We can do this:

```html
<h1>Hello {{name}} {{lastName}}!</h1>

{{#with address}}
  <p>{{street}}, {{number}}</p>
{{/with}}
```

Using the `with` helper, we shift the context inside it, so we can refeer to `{{address.street}}` and `{{address.number}}`, as `{{street}}` and `{{number}}`.







### Check the docs

<http://handlebarsjs.com/>