# Node | HTTP Server - Code Along







## Node HTTP Server 

#### Let's create our Node server

 Don’t worry if this code doesn't make much sense to you. In backend programming, you can make a program from scratch but it’s far easier to **use a framework**. We will talk about that in the next lesson.

```bash
$ mkdir node-http-server
$ cd node-http-server
$ touch server.js
```



**server.js**

```js
const http = require('http');

const server = http.createServer();


server.listen(3000, () => {
  console.log(`Server running at PORT 3000`);
});
```







### Now a server that actually responds

**server.js**

```js
const http = require('http');
const port = 3000;

const server =
  http.createServer((request, response) => {
    console.log('Server request / response');
    response.write('Hello, world!');
    response.end();
  });


server.listen( port, () => {
  console.log(`Server running at PORT ${port}`);
});
```





### Now visit `127.0.0.1` or  `localhost:3000` in your browser





### Different Endpoints

#### Server has one IP address / domain name but can have many endpoints on the same domain.



**server.js**

```js
const http = require('http');

const server =
  http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);

    if (request.url === '/') {
      response.write('Hello, world!');
      response.end();
    }
    else if (request.url === '/about') {
      response.write('My name is Izzy');
      response.end();
    }
    else {
      response.statusCode = 404;
      response.write('404 Page');
      response.end();
    }
  });

server.listen(3000);
```







#### Now, Visit `localhost:3000/contact` or `localhost:3000/about` with open *Network Tab*







### PORT number

#### is separated from the ip address by the `:` colon and it specifies on which port is the server listening for requests.



Remember that real domains use the default HTTP port of `80` or `443` ([mycoolwebsite.com:80](http://mycoolwebsite.com/) or [https://mycoolwebsite.com:443](https://mycoolwebsite.com/)).











# Node Server 2



#### Fork and clone the repository

<https://github.com/ross-u/Node.js-Serving-Static-Files-Code-Along->





### Require the modules for `http`, parsing url `url` and `fs` for reading writing files

```js
// server.js

const http = require('http'); // require the  node's `http` module
const url = require("url");
const fs = require('fs');
```



#### Create the basic server

```js
// index.js
// runs a method which creates the server object
const port = 3000;

const server =
  http.createServer((request, response) => {

    if (request.url === '/index.html') {
      
    }
    else if (request.url === '/about.html') {
      
    }
    else {
      response.statusCode = 404;
      response.write('<html><body><h1 style="font-size: 80px">404</h1></body></html>');
      response.end();
    }
  });


server.listen(port, () => {
  console.log(`Server running at PORT ${port}`);
});
```



#### Parse the url to get the name of file, and load the file using `fs.readFile`

```js
// index.js   ->   if (request.url === '/index.html')


		let path = url.parse(request.url).pathname; 

    if (request.url === '/index.html') {
      // we use async `fs.readFile` which will run a callback once the file is read / loaded
      fs.readFile(`${__dirname}${path}`, 'utf8', (error, data) => {  
        if (error) {
          response.writeHead(404);  
          response.write(error);  
          response.end(); 
        } 
        else {
          response.writeHead(200, {'Content-Type': 'text/html'});  
          response.write(data);  
          response.end(); 
        }
      });  
    }
```



#### Do the same for the `about.html` endpoint



```js
    else if (request.url === '/about.html') {
      fs.readFile(`${__dirname}${path}`, 'utf8', (error, data) => {  
        if (error) {
          response.writeHead(404);  
          response.write(error);  
          response.end(); 
        } 
        else {
          response.writeHead(200, {'Content-Type': 'text/html'});  
          response.write(data);  
          response.end(); 
        }
      }); 
    }
```



### Downsides of Node HTTP

Very verbose  - instad we will use a framework - Express





## Extra Resources

- [Submarine Cable Map Website](https://www.submarinecablemap.com/)
- [What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [Anatomy of an HTTP Transaction (Node.js)](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)