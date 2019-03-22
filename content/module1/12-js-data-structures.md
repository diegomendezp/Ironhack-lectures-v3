---
title: "JS Data Structures"
date: 2018-11-12T12:22:06+01:00
draft: false
weight: 12
week: 1
day: 4
pre: "<b>12. </b>"
---

## Learning Objectives

- data structure

- examples
  - https://www.nytimes.com/ (mobile)
    - list of articles with title, img (url and label), abstract, date
  - https://glovoapp.com/en/macchina-pasta-bar-2/ (mobile)
    - array of categories (sections) with different produts inside
    - https://api.glovoapp.com/v3/stores/11281/addresses/18796/collections/27278


```js
var cohorts = [{
  city: 'bcn',
  course: 'webdev',
  date: new Date('2018-06-11'),
  name: '2018 Aug',
  students: [{name: 'Julien', country: 'es'}, {name: 'Julio', country: 'us'}]
}, {
  city: 'bcn',
  course: 'webdev',
  date: new Date('2018-08-20'),
  name: '2018 Aug',
  students: [{name: 'John', country: 'en'}, {name: 'Paquito', country: 'es'}]
}];
```

- cohorts[0].students[0].name
- for (var ix = 0; ix < cohorts length>)
- for (var ox = 0; ox < cohort[ix].sudents.length>)
- if (country === 'en') { console.log(name); }
## Resources

## Ironhack Learning Platform