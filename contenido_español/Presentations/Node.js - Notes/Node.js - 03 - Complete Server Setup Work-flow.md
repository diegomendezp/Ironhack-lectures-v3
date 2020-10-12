# Node.js



## 03 - Complete Server Setup Work-flow



```bash
#Create the empty files:
touch index.js router.js controller.js bodyparser.js 
```

Step by step: 

##  `index.js` :

- Import Node's module `http`, import files `./bodyparser.js` and `./router.js`

- Instantiate the server `http.createServer()` and pass it an anonymous function that takes 2 parameters: `request` and `response` .

  * Within that anonymous function pass the `bodyParser` and `router` middle-ware functions.

  ```javascript
  // index.js
  
  // Require Node's `http`
  const http = require('http');
  
  // Middleware modules
  const bodyParser = require('./bodyparser');
  const router = require('./router');
  
  // localhost IP and PORT number
  const hostname = '127.0.0.1';
  const PORT = 3000;
  
  // Instantiate a server
  const server = http.createServer( (request, reponse ) => {
    // Pass `request` and `response` to the `bodyParser`. 
    // Also pass the `router` as its `next` middleware
    return bodyParser(request, reponse, router);
  });
  
  // Start the HTTP server listening for connections.
  server.listen(PORT, hostname, () => {
    console.log(`Server Running at ${hostname}:${PORT}`);
  });
  
  ```



****

  ## `bodyparser.js` :

  * create the handling of the `Readable Stream` coming from the `POST` and `PUT` request, by listening for `request.on('data',)` and  `request.on('end',)` .

  * 

    ```javascript
    // bodyparser.js
    
    function bodyParser ( request, response, next ) {
      if (request.method === ( 'POST' || 'PUT') ) {
        const body = [];
    
        request
          .on('data', chunk => body.push(chunk))
          .on('end', () => {
            request.body = JSON.parse( Buffer.concat(body).toString());
            next(request, response);
            });
      } else next(request, response);
    }
    
    module.exports = bodyParser;
    ```









****

  ## `router.js` :

  - Import Node's module `fs`,   import file `./controller.js`
  - create a `router` function, which invokes corresponding controller method and passes it the `request` or `response` arguments, depending on the `HTTP Request type` and the `endpoint`
    - within the router, invoke a controller function that will be handling the static files (`index.html` , `css`...) 

```javascript
// router.js

const fs = require('fs');

// controller contains methods for each request type
const controller = require('./controller');
const clientDirPath = './../../client/';

function router (req, res) {
  // GET request, for endpoint '/message'
  if (req.url === '/message' && req.method === 'GET') {
    controller.getAllMessages(res);
  }
  // POST request, for endpoint '/message'
  else if (req.url === '/message' && req.method === 'POST') {
    controller.postMeassage(req, res);
  } 
  //  function `static` will render the static files
  else controller.static(req, res);
}

module.exports = router;
```

