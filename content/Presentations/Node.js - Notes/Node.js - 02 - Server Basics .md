

# Node.js



## 02 - Server Basics





## Part 1 - Overview of Blocking vs Non-Blocking

https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/

> "I/O" refers primarily to interaction with the system's disk and network.



**Blocking** is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript ( fs or other) operation completes.	 This happens because the event loop is unable to continue running JavaScript while a **blocking** (synchronous) operation is occurring.

Synchronous methods in the Node.js standard library that use libuv are the most commonly used **blocking** operations.

All of the I/O methods in the Node.js standard library provide asynchronous versions, which are **non-blocking**, and accept callback functions. Some methods also have **blocking** counterparts, which have names that end with `Sync`.

> **Blocking** methods execute **synchronously**    and
>
>  **Non-blocking** methods execute **asynchronously**.



```javascript
// SYNCHRONOUS / BLOCKING (fs.readFileSync) :
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
// moreWork(); will run after console.log



// ASYNCHRONOUS / NON-BLOCKING (fs.readFile):
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
// moreWork(); will run before console.log
```



****** JavaScript execution in Node.js is single threaded, so concurrency (happening at the same time ) refers to the event loop's capacity to execute JavaScript callback functions after completing other work.



There are some patterns that should be avoided when dealing with I/O. For example, using a Synchronous and asynchronous methods handling a same file, where Synchronous method may run before Asynchronous and affect the file, like below :



```javascript
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.unlinkSync('/file.md');

/*
fs.unlinkSync() is likely to be run before fs.readFile(), which would delete file.md before it is actually read.
*/
```



****

****



## Part 2



## Node - Events

https://nodejs.org/api/events.html#events_events

Node.js core API has an asynchronous event-driven architecture in which certain kinds of **objects** (**called** "**EventEmitters**") **emit named events** that cause`Function` objects ((( functions and classes))) ("listeners") to be called.

All objects that emit events are instances of the `EventEmitter` class, and these objects expose an `eventEmitter.on()` function that allows one or more functions to be attached to named events emitted by the object (((  as callbacks, so when the named event is triggered, EventEmitter invokes the callback attached to it))). **Those function that are fired upon event are called Listeners.**

```javascript
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

function sumAndPrint() { console.log('2 + 2 = ', 2 + 2); };
function printError() { console.error('E R R O R'); };

myEmitter.on('customEvent1', () => {
  sumAndPrint();
});

myEmitter.on('customEvent2', () => {
  printError();
});

//myEmitter.emit('customEvent1');
myEmitter.emit('customEvent2');
```

When the `EventEmitter` object emits an event, all of the functions attached to that specific event <u>are called *synchronously </u>* one after eachother).   Any values returned by the listeners are *ignored* and discarded.



### Passing arguments and `this` to listeners

The `eventEmitter.emit()` method allows an arbitrary set of arguments to be passed to the listener functions. **Important**:   **when an ordinary listener function is called, the standard `this` keyword is intentionally set to reference the `EventEmitter` instance to which the listener is attached.**

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', function(a, b) {
  console.log(a, b, '\n', this,'\n', this === myEmitter);
});

myEmitter.emit('event', 'a', 'b');
```



It is possible to use ES6 Arrow Functions as listeners, however, when doing so, the `this` keyword loose the reference to the `EventEmitter` instance:

```javascript
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b');
```



## Asynchronous vs. Synchronous

The `EventEmitter` calls all listeners synchronously in the order in which they were registered. This is important to ensure the proper sequencing of events and to avoid race conditions or logic errors. 

When appropriate, **listener functions can switch to an asynchronous mode of operation using the** `setImmediate()` or `process.nextTick()` methods:

```javascript
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
myEmitter.emit('event', 'a', 'b');
```

**Simplified :** each **"event"**(Listener ) is a method/function saved on the Emitter instance. 

It is saved by using the method **`.on( )`**,  and after that it is invoked when Emitter calls it's **'name'** and gives it arguments, using the method  **`emit( )`** .  



## Make custom Emitter constructor ( aka how it works under the hood)

```javascript
function Emitter () {
  this.events = {};
}

// Event listener is  just a function that responds to an event.

Emitter.prototype.on = function(type, listener) {

  // if event exists ok (keep it), if not make a property with `type` name and make it an empty array
  this.events[type] = this.events[type] || [];
  //  then, push the given listener function to the array. -->    eventName: [ function (){},  function (){} ]
  this.events[type].push(listener); 
}

//  Emit  ->  invoke the functions connected to that event name (listeners).
Emitter.prototype.emit = function(type) {

  // Check if the event type exists as the property on the Emitter
  if (this.events[type]) {
    
    /* if it exists, run all the functions stored in the array,
     by passing each stored function as a argument in anonymous function within forEach loop. */
    this.events[type].forEach( function(listener) {
      listener();
    });
  }
}

module.exports = Emitter;
```



```javascript
let emtr = new Emitter();

emtr.on('hello', () => (console.log('hello ')));
emtr.on('hello', () => (console.log('Hola  ')));
emtr.on('hello', () => (console.log('Zdravo')));

emtr.emit('hello');
// ->   hello
// ->   Hola
// ->   Zdravo
```





_____

# Stream 

https://nodejs.org/api/stream.html#stream_stream

* A stream is an abstract interface for working with streaming data in Node.js

* There are many stream objects provided by Node.js. 

  For instance, a request to an HTTP server and process.stdout are both stream instances.  Streams can be readable, writable, or both. All streams are instances of EventEmitter.  

* There are four fundamental stream types within Node.js:

  * Writable - streams to which data can be written
  * Readable - streams from which data can be read
  * Duplex - streams that are both Readable and Writable (for example, net.Socket).
  * Transform - Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).

* **All** **streams** created by **Node.js** APIs **operate exclusively on strings** and **Buffer** (or Uint8Array) **objects**.      It is possible, however, for stream implementations to work with other types of JavaScript values

* Data is buffered in Readable streams when the implementation calls stream.push(chunk). If the consumer of the Stream does not call stream.read(), the data will sit in the internal queue until it is consumed.



## 
* Because data may be written to the socket at a faster or slower rate than data is received, it is important for each side to operate (and buffer) independently of the other

* 

* **API for Stream Consumers** : Almost all Node.js applications, no matter how simple, use streams in some manner.

* Writable streams (such as **response**) expose methods such as **write( )** and **end( )**  that are used to write data onto the stream.



  **Readable Streams**

* `Readable Streams` use the `EventEmitter` to `emit` an event which notifies the application code when data is available to be read from the the `Readable Stream`(itself).



   Readable streams are an abstraction for a source from which data is consumed.  

  Examples of Readable streams include:  HTTP responses (on the client HTTP requests), fs read streams (on the server ) zlib streams, crypto streams, TCP sockets ,child process, stdout and stderr process.stdin 



  <u>Two Reading Modes</u>  

   Readable streams effectively operate in one of two modes: **flowing** and **paused**. These modes are separate from object mode. 

   In **flowing mode**, data is read from the underlying system automatically and provided to an application as quickly as possible using events via the EventEmitter interface. 

   In **paused mode**, the s**tream.read() method must be called explicitly to read chunks of data from the stream**. 



  **Writable Streams**: 



   `Writable Streams` represent a destination to which the data is written.

  Examples of Writable streams include:  HTTP requests, on the client HTTP responses, on the server fs write streams zlib streams crypto streams TCP sockets child process stdin process.stdout, process.stderr

* The 'close' event is emitted when the stream and any of its underlying resources (a file descriptor, for example) have been closed.

*  All Readable streams begin in paused mode but can be switched to flowing mode in one of the following ways:  Adding a 'data' event handler. Calling the stream.resume() method. Calling the stream.pipe() method to send the data to a Writable.

* The 'end' event is emitted when there is no more data to be consumed from the stream.  The 'end' event will not be emitted unless the data is completely consumed.

* **It is possible to attach multiple Writable streams to a single Readable stream.**  

  The readable.pipe() method returns a reference to the destination stream making it possible to set up chains of piped streams:

* One important caveat is that if the Readable stream emits an error during processing, the Writable destination is not closed automatically. If an error occurs, it will be necessary to manually close each stream in order to prevent memory leaks



  ### readble.pipe( )

  The `readable.pipe()` method attaches a [`Writable Stream`](https://nodejs.org/api/stream.html#stream_class_stream_writable) (destnationi) to the `readable` (provider), causing it to switch automatically into flowing mode and push all of its data to the [`Writable Stream`](https://nodejs.org/api/stream.html#stream_class_stream_writable) . 

  The flow of data will be automatically managed, so that the (destination) `Writable` stream is not overwhelmed by a faster `ReadableStream` (provider).



  The following example pipes all of the data from the `readable` into a file named `file.txt`:

  ```js
  const fs = require('fs');
  const readable = getReadableStreamData();
  const writable = fs.createWriteStream('file.txt');
  // All the data from readable goes into 'file.txt'
  readable.pipe(writable);
  ```

****

****



  ### Note

```jsx
const http = require('http');

const server = http.createServer((request, response) => {
  // request is an http.IncomingMessage, which is a Readable Stream
  // response is an http.ServerResponse, which is a Writable Stream
```



`request` is an `http.IncomingMessage` instance and a `Readable Stream`

`response` is an `http.ServerResponse` instance and a `Writable Stream`



****

****



# Anatomy of an HTTP Transaction



## Create the Server

Any node web server application will at some point have to create a web server object. This is done by using [`createServer`](https://nodejs.org/api/http.html#http_http_createserver_requestlistener).

```javascript
const http = require('http');

const server = http.createServer((request, response) => {
  // magic happens here!
});
```



The function that's passed in to [`createServer`](https://nodejs.org/api/http.html#http_http_createserver_requestlistener) is called once for every HTTP request that's made against that server, so it's called the request handler. In fact, the [`Server`](https://nodejs.org/api/http.html#http_class_http_server) object returned by [`createServer`](https://nodejs.org/api/http.html#http_http_createserver_requestlistener) is an [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter), 

When an HTTP request hits the server, node calls the request handler function with a few handy objects for dealing with the transaction, `request` and `response`. 

In order to actually serve requests, the [`listen`](https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback) method needs to be called on the `server`object.



## Method, URL and Headers

When handling a request, the first thing you'll probably want to do is look at the method and URL, so that appropriate actions can be taken.

The `request` object is an instance of [`IncomingMessage`](https://nodejs.org/api/http.html#http_class_http_incomingmessage).



## Request Body

When receiving a `POST` or `PUT` request, the request body might be important to your application. Getting at the body data is a little more involved than accessing request headers. The `request` object that's passed in to a handler implements the[`ReadableStream`](https://nodejs.org/api/stream.html#stream_class_stream_readable) interface. This stream can be listened to or piped elsewhere just like any other stream. We can grab the data right out of the stream by listening to the stream's`'data'` and `'end'` events.

The chunk emitted in each `'data'` event is a [`Buffer`](https://nodejs.org/api/buffer.html). If you know it's going to be string data, the best thing to do is collect the data in an array, then at the `'end'`, concatenate and stringify it.

```js
let body = [];
request.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(body).toString();
  // at this point, `body` has the entire request body stored in it as a string
});
```

There are modules like [`concat-stream`](https://www.npmjs.com/package/concat-stream) and [`body`](https://www.npmjs.com/package/body) on [`npm`](https://www.npmjs.com/) which can help hide away some of this logic and simplify the above.





## A Quick Thing About Errors

Since the `request` object is a [`ReadableStream`](https://nodejs.org/api/stream.html#stream_class_stream_readable), it's also an [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter) and behaves like one when an error happens.

An error in the `request` stream presents itself by emitting an `'error'` event on the stream. **If you don't have a listener for that event, the error will be thrown, which could crash your Node.js program.** You should therefore add an `'error'` listener on your request streams, even if you just log it and continue on your way. (Though it's probably best to send some kind of HTTP error response. More on that later.)

```javascript
request.on('error', (err) => {
  // This prints the error message and stack trace to `stderr`.
  console.error(err.stack);
});
```





If we are able to *receive* requests, but we don't *respond* to them. In fact,  your request would time out, as nothing is being sent back to the client.

## HTTP Status Code

If you don't bother setting it, the HTTP status code on a response will always be 200

```javascript
response.statusCode = 404; // Tell the client that the resource wasn't found.
```



## Setting Response Headers

Headers are set through a convenient method called [`setHeader`](https://nodejs.org/api/http.html#http_response_setheader_name_value).

```javascript
response.setHeader('Content-Type', 'application/json');
response.setHeader('X-Powered-By', 'bacon');
```



## Explicitly Sending Header Data

If you want, you can *explicitly* write the headers to the response stream. To do this, there's a method called [`writeHead`](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers), which writes the status code and the headers to the stream.

```javascript
response.writeHead(200, {
  'Content-Type': 'application/json',
  'X-Powered-By': 'bacon'
});
```

Once you've set the headers (either implicitly or explicitly), you're ready to start sending response data.



## Sending Response Body

Since the `response` object is a [`WritableStream`](https://nodejs.org/api/stream.html#stream_class_stream_writable), writing a response body out to the client is just a matter of using the usual stream methods.

```javascript
response.write('<html>');
response.write('<body>');
response.write('<h1>Hello, World!</h1>');
response.write('</body>');
response.write('</html>');
response.end();
```

The `end` function on streams can also take in some optional data to send as the last bit of data on the stream, so we can simplify the example above as follows.

```javascript
response.end('<html><body><h1>Hello, World!</h1></body></html>');
```



## Put It All Together



We're going to make a server that sends back all of the data that was sent to us by the user. 

We'll format that data as JSON using `JSON.stringify`.

```javascript
const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // BEGINNING OF NEW STUFF

    response.on('error', (err) => {
      console.error(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    // Note: the 2 lines above could be replaced with this next one:
    // response.writeHead(200, {'Content-Type': 'application/json'})

    const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();
    // Note: the 2 lines above could be replaced with this next one:
    // response.end(JSON.stringify(responseBody))

    // END OF NEW STUFF
  });
}).listen(8080);
```





*****

## TLDR;

## Echo Server Example

Let's simplify the previous example to make a simple echo server, which just sends whatever data is received in the request right back in the response. All we need to do is grab the data from the request stream and write that data to the response stream, similar to what we did previously.



```javascript
const http = require('http');

http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/echo') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.end(body);
    });
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
```





Great! Now let's take a stab at simplifying this. Remember, the `request` object is a [`ReadableStream`](https://nodejs.org/api/stream.html#stream_class_stream_readable) and the `response` object is a [`WritableStream`](https://nodejs.org/api/stream.html#stream_class_stream_writable). That means we can use [`pipe`](https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options) to direct data from one to the other. That's exactly what we want for an echo server!



```javascript
const http = require('http');

http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'POST' && request.url === '/echo') {
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
```