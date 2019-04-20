# Node | The Internet & HTTP Server







#### We will talk about the role of **servers** in Web applications, how **HTTP** is involved and we’ll even write our first (messy) server code using some of these concepts.





Even if it was easy to for people on the Internet to connect to your computer and access your Website files, your computer would need to be **turned on**, **awake** and have **Internet literally all the time**. Not very practical for our personal computers.

**Servers**, however, are exactly that: computers that are always turned on, awake and connected to the Internet so that users can connect to them.





## The Internet



### What is internet? 

####  It’s actually **millions of devices** connected together in a **massive network**. Some devices are connected wireless and others are connected with real cables.



These devices are all over the world. To connect landmasses, there are **connecting cables at the bottom of the ocean**.

Check the [Submarine Cable Map Website](https://www.submarinecablemap.com/) to see the cables under the ocean that connect the world together.







![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_52990f8d31567a1abd048415fdeedc90.png)







### The Request-Response Cycle

Usually all applications that we use are **client applications** and they **communicate with servers**. 



The communication happens is that your application (the client) makes a **request** for something from some server on the Internet and then that server delivers a **response**.



We call this the [request-response cycle](https://en.wikipedia.org/wiki/Request%E2%80%93response).



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1bb24dbaf887dc70fc219c20988d7c39.png)





What do we commonly request : initial site load - HTML code, CSS, JS files.





### Example - open the *Network* bar in DevTools for amazon.com







### DNS - Domain Name System -which gives names to websites instead of only ip addresses



Every computer connected to the Internet has an **IP address**. Think of IP addresses like the street addresses of real buildings.

DNS converts web addresses to IP numbers. When you type web address in browser, DNS will resolve it to a IP number  . It is like a phonebook.



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e2c661762bcb597c040ff5bc5fb845cf.png)



### Our software uses DNS behind the scenes whenever we navigate the Web.





**Video on how the internet works in 5 minutes** - <https://www.youtube.com/watch?v=7_LPdttKXPc>





### HTTP (In a nutshell)

### **HTTP** stands for the *Hypertext Transfer Protocol*. It’s the network protocol for transferring files (text,  images, sound, video, and other files) on the World Wide Web



## HTTP Request / Response 0 coceptually

Communication between clients and servers is done by **requests** and **responses**:

1. A client (a browser) sends an **HTTP request** to the web
2. An web server receives the request
3. The server runs an application to process the request
4. The server returns an **HTTP response** (output) to the browser
5. The client (the browser) receives the response



Or another example 

**Client** *calls ironhack.com*
**Client** - Hi
**Server** - Hi
**Client** - Can you get me `index.html`? (*this is the request*)
**Server** *thinks*
**Server** - Okay! Here it is.
**Server** *sends the index.html file* (*this is the response*)
**Server** *hangs up*







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

server.listen(3000);
```







### Now a server that actually responds

**server.js**

```js
const http = require('http');

const server =
  http.createServer((request, response) => {
    console.log('Server request / response');
    response.write('Hello, world!');
    response.end();
  });

server.listen(3000);
```





### Now visit `localhost:3000` in your browser





#### Now, Visit `localhost:3000/contact` or `localhost:3000/about` with open *Network Tab*







### PORT number

#### is separated from the ip address by the `:` colon and it specifies on which port is the server listening for requests.



Remember that real domains use the default HTTP port of `80` or `443` ([mycoolwebsite.com:80](http://mycoolwebsite.com/) or [https://mycoolwebsite.com:443](https://mycoolwebsite.com/)).





Different endpoints, server has one domain name but can have many endpoints on the same domain.

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



Now visit `localhost:3000/about` and `localhost:3000/asdad` in your browser







### Why would I use a *backend*?

- **Databases**:
  Storing things in a central place from which you can serve it. 
- **Business logic in my application**
  Amazon needs to keep track of your shopping cart. We can add items, remove items, choose payment methods, and much more.

All these tasks are made possible by writing *backend* software for our Web applications.





### Downsides of Node HTTP

Very verbose  - instad we will use a framework - Express





## Extra Resources

- [Submarine Cable Map Website](https://www.submarinecablemap.com/)
- [What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [Anatomy of an HTTP Transaction (Node.js)](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)