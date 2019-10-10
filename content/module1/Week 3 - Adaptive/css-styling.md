---
title: "Css Styling"
date: 2018-11-12T12:24:31+01:00
draft: true
weight: 4
---

## Lecture Notes

https://codepen.io/tawebbcn/pen/OBEKQK?editors=1100

- DRY
  - use hierarchy
    - `<div class="card"><div class="title">...`
    - target via `.card .title {}`
  - use composition
    - combine classes
    - `class="button primary"` targeted via `.button.primary {}`
  - use cascading
    - specifics augment and override generics
    - https://specificity.keegan.st/
    - `#login-button` stronger than`.button {}` stronger than `a {}`
  - use inheritance
    - type attributes (font-family, font-size, line-height, color, ...) trickle down from parent to children
- semantic:
  - semantic css, classes named after what things ARE not what they LOOK LIKE
    - e.g.: `.copy`, `.site-header`, `.copyright`, `.email` ...
- short selectors
  - e.g.: `.header li`


@Todo explain better the purpose of the class best practices, etc

## Code along

### Typography and colors

- [Google Fonts](https://fonts.google.com/)
- body , h1, h3, p, strong
- [Colorzilla](http://www.colorzilla.com/chrome/)
- [Colors](https://coolors.co/)
- [Colors](http://paletton.com/)

- USE INHERITANCE: body font, card font

- USE HIERARCHY: `.card .title

@Todo, come up with a codepen

### Links and buttons

- a .button .primary .secondary
- USE COMPOSITION `.button.primary`

## Practice

- Slack Clone part 2

@Todo minimums