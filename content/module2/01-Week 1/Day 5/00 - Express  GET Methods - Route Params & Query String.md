# Express | GET Methods - Route Params & Query String

## Learning Goals

After this lesson you will be able to:

- Understand how GET methods works
- Learn how to send data from the browser to the server
- Learn how Route Params works
- Learn how Query Strings works
- Understand the difference between route and query params







Create files

```bash
.
├── app.js
├── package.json
|
└── views/
		|
    └── index.hbs
```



`package.json` - Add `nodemon` as start script

```json
"scripts": {
	"start": "nodemon app.js",
```





## Setup `app.js`

#### Setup express and handlebars *Emmet abbr* -  `ehbs`

```js
ehbs + Tab
```

 



# Route parameters



#### 1. Create route

```js
app.get('/users/:username', (req, res, next) => {
  res.send(req.params);
})
```



#### Navigate to:	`http://localhost:3000/users/ironhack`







#### 2. Update route

```js
app.get('/users/:username/books/:bookId', (req, res, next) => {
  res.send(req.params)
})
```



#### Navigate to:	`http://localhost:3000/users/ironhack`







#### 3. Create Route

```js
app.get('/books/:bookId', (req, res, next) => {
  res.send(req.params);
})
```



#### Navigate to:	`http://localhost:3000/books/1234asdf4567`





#### Examples

Navigate to [Ironhack Labs Github Account](https://github.com/ironhack-labs) and check the URL.

**How you think is Github server getting the info on which profile they should display? **

**Do they one route for each repository? Or maybe something like this?**

```js
app.get('/:repository', (req, res, next) => {
  //............
})
```









# Query String



#### 4.  Create Route

```js
app.get('/search', (req, res, next) => {
  res.send(req.query)
})
```





#### Navigate to `http://localhost:3000/search?city=Barcelona`









### Query String from Forms



#### 5.  Add route `/ ` - Emmet abbr - `appgetrender`

```js
appgetrender + Tab
```



#### Update `index.hbs`- Emmet abbr `formget`

```js
formget + Tab
```





## Additional examples for request object



#### 6. Update `/books/:bookId`

```js
app.get('/books/:bookId', function (req, res) {
  res.send(req.params);
  console.log('req.path ->', req.path);  
  console.log('req.query ->', req.query);
  console.log('req.params ->', req.params);
  console.log('req.method ->', req.method);
  console.log('req.headers ->', req.headers);
})
```









### Exercise - pairs



1. a. Create a directory and run `npm init` .

   b. Install **express** and **handlebars** `npm i --save express`, and `npm i --save hbs`

   c. Add folder `views` and a file `index.hbs`. After creating it your folder structure should look like this:

   ```
   .
   ├── app.js
   ├── package.json
   |
   └── views/
   		|
       └── index.hbs
   ```





2. In a file `app.js` create a basic  Express.js server and create a route  `/search/:name/:city.` using `app.get`

   

3. in the `app.get` create a `console.log` for `req.params`  and  `req.query`

   

4. Run the server . 

   

5. In your browser navigate to:

    `localhost:3000/search/anna/barcelona`, and then check the `req.params` you got in the console.

   

6. In your browser navigate to:

    `localhost:3000/search/anna/barcelona?phone=1234567&street=pamplona_96&bootcamp=ironhack`

    , and check the `req.params` and `req.query` printed  you got in the console.

   

   

7. Create a new route  `/` which will render the `index.hbs` and a route `/formdata` which console logs the `req.query`:

   

   ```js
   app.get('/', (req, res) => {
     res
       .status(200)
       .render('index')
   });
   
   app.get('/formdata', (req, res, next) => {
     console.log('/formdata --> ', req.query);
     
     res.send();
   });
   ```





8. In the `app.js` Set the view engine to `hbs` and the folder for the files to `views`:

   ```js
   app.set('view engine', 'hbs');
   app.set('views', __dirname + '/views');
   ```

   



9. Paste the below code to `index.hbs` to create a form which sends data via GET request to the route `formdata`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Express GET</title>
</head>
<body>
  
  <form action='/formdata' method='GET'>
    <label for=''>Email</label>
    <input type='text' name='email'>
  
    <label for=''>Password</label>
    <input type='text' name='password'>
  
    <button type='submit'>Submit</button>
  </form>
</body>
</html>
```



9. Enter data in the form and submit it. Check that the result is being printed in the console.