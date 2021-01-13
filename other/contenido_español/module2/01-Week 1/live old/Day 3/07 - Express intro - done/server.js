// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// middleware for static files
app.use(express.static('public'));

//Home
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/index.html');
});

//About
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/about.html');
});

/* // Home page route
app.get('/', (request, response, next) => {
  response.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Node Server 2- HTML</title>
  <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
  <link href="main.css" rel="stylesheet"  type="text/css" >
</head>
<body>
  <h1>Hello Ironhackers</h1>
</body>
</html>
  `);
});

// About page route
app.get('/about', (request, response, next) => {
  response.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Node Server 2- HTML</title>
  <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
  <link href="/about.css" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: center / cover no-repeat url('https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
    }
    h1, h3, h4 {
      margin: 0 auto;
      font-size: 90px;
      font-family: 'Anton', sans-serif;
      letter-spacing: 5px;
      color: white;
      text-shadow: 2px 3px black;
    }

    h3 {
      font-size: 60px;
      margin-top: 100px;
      color: antiquewhite;
    }

    h4 {
      font-size: 50px;
      margin-top: 10px;
      color: darkgoldenrod;
    }
  </style>
</head>
<body>
  <h1>About me</h1>

  <h3>Favourite word:</h3>
  <h4>Bananarama</h4>

  <h3>Favourite animal:</h3>
  <h4>Dog</h4>
</body>
</html>
  `);
}); */


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});