# Node | HTTP Server - Code Along/Demo





### Code along/Demo intro

During this demo we are going to make our laptop into a server, being open and listening to the incoming HTTP requests on port 3000, on our current IP address.

We will use our local IP address to which we refer to as `localhost`.



#### `localhost ` - `127.0.0.1`  -->  means this computer





To get you address if connected on a wireless network (address on current network). If using ethernet use `en1`.

```bash
ipconfig getifaddr en0
```



To get our external IP address:

```bash
curl ipecho.net/plain ; echo
```

or

```bash
curl ifconfig.me
```





<br>







## Node Server  part 1 - Code Along

#### Let's create our Node server

 Don’t worry if this code doesn't make much sense to you. In back-end programming, you can make a program from scratch but it’s far easier to **use a framework**. 

We will talk about that in the next lesson.



```bash
mkdir 01-node-http-server && cd 01-node-http-server

touch server.js

code .

```



##### `server.js`

```js
const http = require('http');

const server = http.createServer();


server.listen(3000, () => {
  console.log(`Server running at port 3000`);
});
```





Let's run the server (from the root of the project):

```bash
pwd

ls

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
    
    console.log('Request reached the server!');
 // console.log(request);  // The HTTP message converted to a `request` object
// console.log(request.headers);  // HTTP message headers
    
    response.write('Hello, world!'); // Set the HTTP response body content
    response.end();  // Send the response back
  });


server.listen( port, () => {
  console.log(`Server running at PORT ${port}`);
});
```





### Now visit `127.0.0.1` or  `localhost:3000` in your browser

### [OPEN -  http://127.0.0.1:3000  in Browser](http://127.0.0.1:3000)



## or

 to make it more interesting, get your current ip address on the wireless network and let others access your server. Remember to add the port to the IP you get back:

```bash
ipconfig getifaddr en0
```

<br>





### Different Endpoints

- **Server** has one IP address / domain name, but **it can have many endpoints on the same domain**.



##### `server.js`

```js
const http = require('http');

const server = http.createServer((request, response) => {
  
  // console.log("Request reached the server");
  
  //  response.write('Hello, world!'); 
  //  response.end();
  
  
  console.log(`Someone has requested ${request.url}`);

    if (request.url === '/') {						// domain.com
      response.write('Hello, world!');
      response.end();
    }
    
    else if (request.url === '/about') {	// domain.com/about
      response.write('My name is Bob!');
      response.end();
    }
    
    else {																// domain.com/*
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



<br>

Create the folder for the repo

```bash
pwd

ls

mkdir 02-node-http-server-part2

cd 02-node-http-server-part2
```



### Fork and clone the repository

### [Repo with static files](https://github.com/ross-u/Node.js-Serving-Static-Files-Code-Along-)

```bash
/

cd Node.js-Serving-Static-Files-Code-Along-

code .
```





### Require the modules for `http`, parsing url `url` and `fs` for reading writing files



##### `server.js`

```js
// server.js

// require the  node's modules
const http = require('http'); 
const url = require("url");
const fs = require('fs');
```



<br>



#### Create the basic server

##### `server.js`

```js
// server.js

// Our port to listen for incoming HTTP requests
const port = 3000;

// create the server
const server = http.createServer((request, response) => {
	// `http.createServer` creates the server object
    
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


// start the server
server.listen(port, () => {
  console.log(`Server running at PORT ${port}`);
});
```



<br>



#### - Parse the url to get the name of the file     and

#### -  load the file using `fs.readFile()`

```js
// index.js   ->   if (request.url === '/index.html')

// Inside the `http.createServer((request, response) =>`  callback

		// If domain is  www.page.com/about.html the parsed
		// string saved to `let` `path` will be '/about.html'
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