---
title: "Http"
date: 2018-11-12T16:04:11+01:00
draft: true
weight: 1
---

## Research board

- anatomy http
  - client
  - server
  - request
  - response
  - status codes
  - headers
  - body
  - method
  - url

## Lecture
> #tech HTTP

- text based
- stateless
- client - server
- request response cycle
- URL
- use curl http://google.com -v
- headers & body
- ports: 80 & 443
- GET & POST
- status codes
  - 1XX info
  - 2xx success
  - 3xx redirection
  - 4xx client error
  - 5xx server error
- HTTP vs HTTPS



@todo lecture notes

## Quick demo 

- node http server
- throw away code
- require(http)
- listen
- request callback
- if path, send file

- put a very simple http server

  - ```javascript
    const http = require('http');
    const port = 3000;
    
    const server = http.createServer((request, response) => {
        response.end('hey')
    });
    
    server.listen(port, (err) => {
      if (err) {
        return console.log('something bad happened', err);
      }
      console.log(`server is listening on ${port}`);
    })
    ```

- show how to read the method, path, and headers

  - ```javascript
    const http = require('http');
    const port = 3000;
    
    const server = http.createServer((request, response) => {
      const method = request.method;
      const url = request.url;
      const headers = request.headers
      console.log(method, url, headers);
    });
    
    server.listen(port, (err) => {
      if (err) {
        return console.log('something bad happened', err);
      }
      console.log(`server is listening on ${port}`);
    })
    ```

- show how to display things depending on the url requested and to setup a 404 displaying first what happens if you would request something that does not exist

  - ```javascript
    const http = require('http');
    const port = 3000;
    
    const server = http.createServer((request, response) => {
      const method = request.method;
      const url = request.url;
      const headers = request.headers
      console.log(method, url, headers);
      if ( url === '/') {
        response.end(html);
      } else if (url === '/about') {
        response.end('<h1>about</h1>');
      } else {
        response.statusCode = 404;
        response.end('<h1>404 - Not Found</h1>')
      }
    });
    
    server.listen(port, (err) => {
      if (err) {
        return console.log('something bad happened', err);
      }
      console.log(`server is listening on ${port}`);
    })
    ```

- finally, show how to read a html file and send it back

  - ```javascript
    const http = require('http');
    const fs = require('fs');
    const port = 3000;
    
    const server = http.createServer((request, response) => {
      const method = request.method;
      const url = request.url;
      const headers = request.headers
      console.log(method, url, headers);
      if ( url === '/') {
        const html = fs.readFileSync('./pages/homepage.html');
        response.end(html);
      } else if (url === '/about') {
        response.end('<h1>about</h1>');
      } else {
        response.statusCode = 404;
        response.end('<h1>404 - Not Found</h1>')
      }
    });
    
    server.listen(port, (err) => {
      if (err) {
        return console.log('something bad happened', err);
      }
      console.log(`server is listening on ${port}`);
    })
    ```

## Practice