# Node | HTTP Server - Code Along







## Node Server  part 1 - Code Along

#### Let's create our Node server

 Don’t worry if this code doesn't make much sense to you. In back-end programming, you can make a program from scratch but it’s far easier to **use a framework**. 

We will talk about that in the next lesson.



```bash
mkdir node-http-server
cd node-http-server
touch server.js
```



**server.js**

```js
const http = require('http');

const server = http.createServer();


server.listen(3000, () => {
  console.log(`Server running at PORT 3000`);
});
```





Let's run the server:

```bash
node server.js
```



<br>



### Now let's create a server that actually responds back

##### `server.js`

```js
const http = require('http');
const port = 3000;

const server =
  http.createServer((request, response) => {
    
    console.log('Server request-response example');
    
    response.write('Hello, world!'); // Write the HTTP response body content
    response.end();  // Send the response back
  });


server.listen( port, () => {
  console.log(`Server running at PORT ${port}`);
});
```





### Now visit `127.0.0.1` or  `localhost:3000` in your browser

### [OPEN -  http://127.0.0.1:3000  in Browser](http://127.0.0.1:3000)



<br>





### Different Endpoints

- **Server** has one IP address / domain name, but **it can have many endpoints on the same domain**.



##### `server.js`

```js
const http = require('http');

const server =
  http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);

    if (request.url === '/') {						// domain-name.com
      response.write('Hello, world!');
      response.end();
    }
    
    else if (request.url === '/about') {	// domain-name.com/about
      response.write('My name is Bob!');
      response.end();
    }
    
    else {																// domain-name.com/*
      response.statusCode = 404;
      response.write('404 Page');
      response.end();
    }
  });

server.listen(3000);
```







#### Now, Visit the `localhost:3000/about` with open *Network Tab*



<br>



### PORT number

*Port number* is separated from the *IP* address by the `:` colon  (  `127.0.0.1`:`PORT` ) and it specifies the port on which the server will be listening for requests.



- Port numbers range from **0** to **65535**.

- Only port numbers **0** to **1023** are reserved for privileged services and designated as well-known ports. 



Remember that real domains commonly use the default HTTP port of `80` or for HTTPS`443` ([mycoolwebsite.com:80](http://mycoolwebsite.com/) or [https://mycoolwebsite.com:443](https://mycoolwebsite.com/)).



Standard ports:  **:80** ( **HTTP** ) and **:443** ( **HTTPS** ) .



<br>



### [List of Well-Known TCP Port Numbers](https://www.webopedia.com/quick_ref/portnumbers.asp)



<br>



## Node Server - part 2 - Code Along



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

// Our port to listen for incoming HTTP requests
const port = 3000;

// runs a method which creates the server object
const server = http.createServer((request, response) => {

    if (request.url === '/index.html') {
      
    }
    
    else if (request.url === '/about.html') {
      
    }
    
    else {
      response.statusCode = 404;
      response.write(`
				<html>
					<body>
						<h1 style="font-size: 80px">404</h1>
					</body>
				</html>`
                    );
      response.end();
    }
    
  });


server.listen(port, () => {
  console.log(`Server running at PORT ${port}`);
});
```



#### - Parse the url to get the name of the file     and

#### -  load the file using `fs.readFile()`

```js
// index.js   ->   if (request.url === '/index.html')

// Inside the `http.createServer((request, response) =>`  callback

		let path = url.parse(request.url).pathname;


    if (request.url === '/index.html') {
      
      // we use async `fs.readFile` to load the file,
      // which will then run the provided callback once the file is read / loaded
      fs.readFile(`${__dirname}${path}`, 'utf8', (error, loadedFile) => {  
        if (error) {
          response.writeHead(404);  
          response.write(error);  
          response.end(); 
        } 
        else {
          response.writeHead(200, {'Content-Type': 'text/html'});  
          response.write(loadedFile);  
          response.end(); 
        }
      });  
    }
```



<br>



#### Do the same for the `/about.html` endpoint

```js
// index.js   ->   if (request.url === '/about.html')

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



<br>



### Spin the server

Let's spin the server

```bash
node server.js
```



<br>



### Open the links in the browser

#### [http://127.0.0.1:3000/index.html](http://127.0.0.1:3000/index.html)

#### [http://127.0.0.1:3000/about.html](http://127.0.0.1:3000/about.html)

<br>





#### We can redirect all requests to home route `/`, to render the `index.html`

##### `server.js`

```js
  // ADD AS THE FIRST REQUEST - because of the `/`
  if (request.url === '/') {
    
    // Triggers redirect in the browser
    response.writeHead(
      301, // Redirect - 301 Moved Permanently
      { Location: 'http://127.0.0.1:3000' + '/index.html' },
    );
    
    response.end();
    
  } 
  else if (request.url === '/index.html') {
```



<br>



### Downsides of Node when creating a server

NodeJS tends to be very verbose, and each functionality has to be hard coded.  

Instead we will use a the framework - [ExpressJS](https://expressjs.com/) which is the industry standard.

[ExpressJS](https://expressjs.com/) helps us to do things faster and with less code as common server operations are abstracted away in easy to use functions.







## Extra Resources

- [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [Anatomy of an HTTP Transaction (Node.js)](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)