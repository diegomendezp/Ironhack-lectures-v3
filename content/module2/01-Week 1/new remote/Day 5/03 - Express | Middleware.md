

# Express | Middleware







## Middleware

When a request is made to our Express server, it doesn’t actually go straight to the route. Often times, our route is actually the last stop.

We’ve used a couple of packages thusfar, including bodyParser. These packages are called *Middleware*.





```bash
function myMiddlewareFunc( req, res, next){
  console.log("myMiddlewareFunc was called!");
  next();
}

// ...
app.use(myFakeMiddleware)
// ...
```





#### `morgan` logger middleware

```bash
$ npm i --save-dev morgan
```



```js
const morgan = require('morgan');

// ...
// ...
app.use(morgan('tiny'))
```





![](https://i.imgur.com/AO6lw3m.png)





![](https://developer.okta.com/assets-jekyll/blog/express-middleware-examples/middleware-30b3b30ad54e21d8281719042860f3edd9fb1f40f93150233a08165d908f4631.png)





![](https://cdn-images-1.medium.com/max/1600/0*8HIzvtX-DA3C26uv.png)







<br>





### Additional example on using `fetch` to make the requests from the client to the server.

### [fetch POST and GET - basic example (Repo)](https://github.com/ross-u/fetch-POST-and-GET-request-basic-example)