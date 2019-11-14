

# Express | POST Method - Request Body



### [Lesson link](<http://learn.ironhack.com/#/learning_unit/6487>)



### Introduction to POST

To send more information, or to prevent the information from showing in the browser address bar and being stored in the browser history, we need to use html forms to send the data in the body of a POST request.





### Let see how we can use POST method with forms.

```js
  .
  ├── app.js
  ├── package.json
  |
  └── views/
      |
      └── user-info-form.hbs
```





##### `app.js`

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('view', __dirname + '/views')

app.get('/get-user-info', (req, res) => {
  res.render('user-info-form');
});

app.get('/display-user-info', (req, res) => {
  res
    .status(201)
    .send(req.query)
});

// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on port ${PORT} !`));
```







#### **Create a form**



##### `views/user-info-form.hbs`

```html
<form action="/display-user-info">
  
  <label for="name-input">Name</label>
  <input id="name-input" type="text" name="name">

  <label for="age-input">Age</label>
  <input id="age-input" type="number" name="age">

  <label for="superhero-input">Favorite Superhero</label>
  <input id="superhero-input" type="text" name="superhero">

  <button type="submit">Submit Info!</button>
</form>
```





All input types can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) on MDN.



<br>



#### Navigate to `localhost:3000/get-user-info`



Fill the form and submit it.







## Code along



```
.
├── app.js
├── package.json
|
└── views/
		|
   	└── login.hbs
```



```bash
mkdir express-post-form
cd express-post-form

mkdir views
cd views
touch login.hbs

cd ..
touch app.js
npm init
npm i --save mongoose express hbs
```





**app.js**

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('view', __dirname + '/views')

app.get('/', (req, res) => {
  res.render('login');
});


// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on port ${PORT} !`));
```





**Update** **login.hbs**

```html
<form action="/login" method="POST">

</form>
```



.. Continued



```js
<form action="/login" method="POST">
  <label for="email">Email</label>
  <input id="email" type="text" name="email">
  
  <label for="password">Password</label>
  <input id="password" type="password" name="password">
  
  <button type="submit">
    Login
  </button>
</form>
```







Update the **app.js**

```js
// POST	/login
app.post('/login', (req, res) => {
  let email    = req.body.email;
  let password = req.body.password;
  
  if (password === '1111') res.send(`Email: ${email}, Password: ${password}`);
  else res.send(`Go away!`);
});

```







## Install body-parser

#### The data isn't readable by default in Express with a `POST` request.

##### *We will need a , bodyParser*!



First, install `bodyParser`:

```bash
$ npm install --save body-parser
```





`Require` and use the `body-parser` middleware.   Then, add it to our app:

**app.js**

```js
// ...
const bodyParser = require('body-parser');
// ...
app.use(bodyParser.urlencoded({ extended: true }));
```







## Middleware

When a request is made to our Express server, it doesn’t actually go straight to the route. Often times, our route is actually the last stop.

We’ve used a couple of packages thusfar, including bodyParser. These packages are called *Middleware*.





```bash
function myFakeMiddleware( req, res, next){
  console.log("myFakeMiddleware was called!");
  next();
}

// ...
app.use(myFakeMiddleware)
// ...
```





#### `morgan` logger middleware

```bash
$ npm i --save-dev morgan
```



```js
const morgan = require('morgan');

...
...
app.use(morgan('tiny'))
```





![](https://i.imgur.com/AO6lw3m.png)





![](https://developer.okta.com/assets-jekyll/blog/express-middleware-examples/middleware-30b3b30ad54e21d8281719042860f3edd9fb1f40f93150233a08165d908f4631.png)





![](https://cdn-images-1.medium.com/max/1600/0*8HIzvtX-DA3C26uv.png)





