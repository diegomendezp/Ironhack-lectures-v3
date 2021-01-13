---
title: "Express Dynamic Views"
date: 2018-12-28T16:23:42+01:00
draft: false
weight: 7
pre: "<b>7. </b>"
week: 4 
day: 3
---

## Lecture notes

- Explain concept dinamic views
- Engine Templating
  - handlebars
  - ejs
- Working with templates (helpers)
  - `if`
  - `each`

### setting up ejs

```bash
$ npm install --save ejs
```

__app.js__
```javascript
const app = express();
...
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
...
```
don't forget to create folders `views` and file `index.ejs` inside

How to use it
```javascript
app.get('/', (req, res, next) => {
  res.render('index');
})
```

## Resources

- [handlebars JS](http://handlebarsjs.com)
- [EJS](https://ejs.co)

## Ironhack Learning Unit

- [Express Dynamic Views](http://learn.ironhack.com/#/learning_unit/6478)
