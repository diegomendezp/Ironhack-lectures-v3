---
title: "Authorization"
date: 2018-12-28T16:42:11+01:00
draft: false
weight: 16
pre: "<b>16. </b>"
week: 5 
day: 2
---

## Lecture Notes

__User Model__

```javascript
// models/user.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

__signup form view__

```html
<!-- views/auth/signup.ejs -->

<form id="form" action="/signup" method="POST">
  <label for="username">Username</label><br>
  <input type="text" name="username" placeholder="Your username">

  <label for="password">Password</label><br>
  <input type="password" name="password" placeholder="********">
  <% if (errorMessage) { %>
    <div class="error-message">
      <%= errorMessage %>
    </div>
  <% } %>
  <button type="submit">Create account</button>
</form>
```

__Signup Controller__

```javascript
// routes/auth.js

const express = require("express");
const router = express.Router();
const User = require("../models/user");

// BCrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  if (username === "" || password === "") {
    res.render("auth/signup", {
      errorMessage: "Indicate a username and a password to sign up"
    });
    return;
  }
  User.create({
    username,
    password: hashPass
  })
  .then(() => {
    res.redirect("/");
  })
  .catch(error => {
    next(error);
  })
});

module.exports = router;
```

## Resources

## Ironhack Learning Unit
