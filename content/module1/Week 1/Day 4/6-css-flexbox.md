---
title: "CSS Flexbox"
date: 2018-11-12T12:30:01+01:00
draft: false
weight: 8
week: 1
day: 3
pre: "<b>8. </b>"
---

## Learning Objectives
- set `display: flex` on parent - this is a flex container
- parent manages direct children -the **flex items**
- properties of the flex parent - container
  - `justify-content` - across the main axis

  - `align-items` - across the cross axis

  - `flex-direction` - row/column/column-reverse/row-reverse

  - `flex-wrap` - wrap/nowrap

- properties of the flex children - flex items
  - `width: 50%` - percentage of the flex parent
  - `width: 200px` - static, not managed by the flex parent
  - `flex-grow`
  - `flex: 1` - 1 out X - where X is total of all the children
  - `flex: <grow> <can shrink> <base width>` - advanced (see layout example 1)

## Flexbox Grid

- Strategy 1:
  - [Demo on codepen](https://codepen.io/tawebbcn/pen/WgQewq?editors=1100)
  - set the children`s flex grow to 1
  - set the children`s flex basis to a number below the column % (e.g. 45% for 2 cols, 30% for 3 cols)
  - set the children`s horizontal margin to Ypx
  - set the parent`s horizontal margin to -Ypx
  - **Downside:** orphan items will still grow to available space

- Strategy 2:
  - [Demo on codepen](https://codepen.io/tawebbcn/pen/PdPYOL?editors=1100)
  - set the children`s width to the exact % (e.g. 50% for 2 cols, 33.33333% for 3 cols)
  - set the children`s horizontal padding to Ypx
  - set the parent`s horizontal margin to -Ypx
  - **Downside:** because we are using padding on the flex children, we need to move our card class to another child div


## Resources

- [tutorial](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [DOCS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [flexbox CSS Tricks Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [flexbox froggy](https://flexboxfroggy.com/)
- [flexbox MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

## Ironhack Learning Platform