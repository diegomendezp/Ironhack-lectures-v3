const http = require('http'); // require the  node's `http` module
const url = require("url");
const fs = require('fs');
  
// runs a method which creates the server object
const server =
  http.createServer((request, response) => {

    // get the path from the `request.url`
    let path = url.parse(request.url).pathname; 

    if (request.url === '/index.html') {
      
      // we use async `fs.readFile` which will run a callback once the file is read / loaded
      fs.readFile(`${__dirname}${path}`, 'utf8', (error, data) => {  
        if (error) {  // if there was an error reading the file
          response.writeHead(404);  
          response.write(error);  
          response.end(); 
        } 
        else {  // if file read was succcessful
          response.writeHead(200, {'Content-Type': 'text/html'});  
          response.write(data);  
          response.end(); 
        }
      });  
    }
    else if (request.url === '/about.html') {
      fs.readFile(`${__dirname}${path}`, 'utf8', (error, data) => {  
        if (error) {  // if there was an error reading the file
          response.writeHead(404);  
          response.write(error);  
          response.end(); 
        } 
        else {  // if file read was succcessful
          response.writeHead(200, {'Content-Type': 'text/html'});  
          response.write(data);  
          response.end(); 
        }
      }); 
    }
    else {
      response.statusCode = 404;
      response.write('<html><body><h1 style="font-size: 80px">404</h1></body></html>');
      response.end();
    }
  });


// starts the server - our computer is now listening on port 3000 for incoming requests and communicates to Node

server.listen(3000, () => {
  console.log(`Server running at PORT 3000`);
});