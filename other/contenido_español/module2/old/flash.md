---
title: "Flash Notifications"
date: 2018-12-28T16:48:45+01:00
draft: false
weight: 22
pre: "<b></b>"
week: 5
day: 4
---

[link connect-flash](https://github.com/jaredhanson/connect-flash)

```bash
$ npm install --save connect-flash
```

**connect-flash** use session in order to work.

**app.js**

```javascript
const flash = require('connect-flash');
...

// session configuration middleware

app.use(flash());
...
```

Examples in routes

```javascript
router.get('/flash', function(req, res){
// Set a flash message by passing the key, followed by the value, to req.flash().
req.flash('info', 'Flash is back!')
res.redirect('/');
});

router.get('/', function(req, res){

// Get an array of flash messages by passing the key to req.flash()
res.render('index', { messages: req.flash('info') });
});
```

## Best Practice

Inside `helpers` create file `middlewares.js` .

**middleware.js**

```javascript
module.exports = (req, res, next) => {

// We extract the messages separately cause we call req.flash() we'll clean the object flash.
res.locals.errorMessages = req.flash('error');
res.locals.infoMessages = req.flash('info');
res.locals.dangerMessages = req.flash('danger');
res.locals.successMessages = req.flash('success');
res.locals.warningMessages = req.flash('warning');
next();
};
```

Create a partial view for notifications

**notification.ejs**

```html
<% infoMessages && infoMessages.forEach((message) => { %>
<div class="alert alert-info">
<%- message %>
</div>
<% })
dangerMessages && dangerMessages.forEach((message) => { %>
<div class="alert alert-danger">
<%- message %>
</div>
<% })
errorMessages && errorMessages.forEach((message) => { %>
<div class="alert alert-danger">
<%- message %>
</div>
<% })
successMessages && successMessages.forEach((message) => { %>
<div class="alert alert-success">
<%- message %>
</div>
<% })
warningMessages && warningMessages.forEach((message) => { %>
<div class="alert alert-warning">
<%- message %>
</div>
<% }) %>
```

call the partial `<%- include('../partials/notifications') %>` .
