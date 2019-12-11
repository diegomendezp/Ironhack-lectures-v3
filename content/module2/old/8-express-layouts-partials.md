---
title: "Express Layouts Partials"
date: 2018-12-28T16:24:48+01:00
draft: false
weight: 8
pre: "<b>8. </b>"
week: 4 
day: 3
---

## Lecture notes

- What is a Layout?
- What is a Partial?
- Partial Set-up
- Passing Parameters

### setting up layouts

**app.js**

```javascript
const expressLayouts = require('express-ejs-layouts');

...
app.set('view engine', 'ejs');

app.set('layout extractScripts', true) // see Documentation
app.set('layout extractStyles', true) // see Documentation
app.set('layout extractMetas', true) // see Documentation
app.set('layout', 'layouts/main'); // custom layout

app.use(expressLayouts);
...
```

create the layout view `main.ejs` in `views/layouts/` folder

create the following structure

```
views
├── ...
├── partials
│ ├── navbar.ejs
│ └── footer.ejs
└── layouts
  ├── main.ejs
  └── secondLayout.ejs
```

## Resources

## Ironhack Learning Unit
- [Layout & Partials](http://learn.ironhack.com/#/learning_unit/6479)