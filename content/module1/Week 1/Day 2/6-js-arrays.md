---
title: "JS Arrays"
date: 2018-11-12T12:19:02+01:00
draft: false
weight: 10
week: 1
day: 3
pre: "<b>10. </b>"
---

## Learning Objectives

- holds a list of values
- var arr = ['1', '2', '3'];
- var arr = new Array();
- arr.length
- arr[index]
- arr[index] = 'foo'
- arr.pop()
- arr.push('4', '5')
- arr.unshift('foo')
- arr.shift()
- arr.join(',');

```javascript
var arr = [1332, 1232, 4332, 9873]
for ( var ix = 0; ix < arr.length; ix++) {
  console.log(ix, arr[ix] / 100);
}
```

- callback

```javascript
console.log('before');
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (item, index) {
  console.log('index', index, 'item', item, 'square', item * item);
})
console.log('after');
```

## Resources

## Ironhack Learning Platform