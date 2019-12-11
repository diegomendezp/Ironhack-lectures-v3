---
title: "Authentication"
date: 2018-12-28T16:42:25+01:00
draft: false
weight: 17
pre: "<b>17. </b>"
week: 5
day: 2
---

## Lecture Notes


## setting up Session

```bash
$ npm install --save express-session connect-mongo
```

__app.js__
```javascript
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

...

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  }),
  secret: 'some-string',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

...
```

__currentUser middleware__
```javascript
// Makes the currentUser available in every page
  // note1: currentUser needs to match whatever you use in login/signup/logout routes
  // note2: if using passport, req.user instead
app.use((req, res, next) => {
  app.locals.currentUser = req.session.currentUser;
  next();
});
```

__Login view__
```html
<form action="/login" method="POST" id="form">
  <h2>Login</h2>

  <label for="username">Username</label>
  <input type="text" name="username" placeholder="obiwan">

  <label for="password">Password</label>
  <input type="password" name="password" placeholder="thatsnomoon">

  <% if (errorMessage) { %>
    <div class="error-message"><%= errorMessage %></div>
  <% } %>

  <button>Sign in</button>

  <p class="account-message">
    Don't have an account? <a href="/signup">Sign up</a>
  </p>
</form>
```

__Login Controller__
```javascript
// routes/auth.js

router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.post("/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === "" || password === "") {
    res.render("auth/login", {
      errorMessage: "Indicate a username and a password to sign up"
    });
    return;
  }

  User.findOne({ "username": username })
  .then(user => {
      if (!user) {
        res.render("auth/login", {
          errorMessage: "The username doesn't exist"
        });
        return;
      }
      if (bcrypt.compareSync(password, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect("/");
      } else {
        res.render("auth/login", {
          errorMessage: "Incorrect password"
        });
      }
  })
  .catch(error => {
    next(error)
  })
});

router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    // cannot access session here
    res.redirect("/login");
  });
});

```

__protected route middleware__
```javascript
(req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
});
```



## Resources

## Ironhack Learning Unit
