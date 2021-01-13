---
title: CheatSheet
weight: -1
# chapter: true
---


## HTML

boilerplate for html

```html
<!doctype html>
<html lang="en">

<head>
  <title>Hello, world!</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="styles/....">
</head>

<body>
  <h1>Hello World</h1>
</body>
</html>
```

## CSS

css example structure

{{% notice note %}}
Also you can use [reset.css](https://cssreset.com/scripts/eric-meyer-reset-css/) or [normalize.css](https://necolas.github.io/normalize.css/)
{{% /notice %}}

```css
/* ---- reset ---- */

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
}


/* ---- typography ---- */

body {
  color: #111;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 147%;
}

h1 {}

h2 {}

h3 {}

p {
  margin: 0;
}



/* ---- layout ---- */

#site-header {
  padding: 30px 0;
  color: white;
  background: #111;
}

#site-footer {
  color: white;
  padding: 60px 0;
  background: #111;
}

#site-main {
  margin-bottom: 60px;
}

.container {
  margin: 0 20px;
}

.section {
  margin-bottom: 20px;
  padding-top: 20px;
}

@media (min-width: 768px) {
  .container {
    max-width: 728px;
    margin: 0 auto;
  }
}




/* ---- components ---- */

.button {
  width: 100%;
  background-color: blue;
  color: #fff;
  border: 1px solid #fff
}

.button-alt {
  color: blue;
  background-color: #fff;
}

/* ---- section ---- */

section.testimonials {
  // ...
}

section.testimonials .button {
  margin-bottom: 10px;
}
```

## css best practices

- code structure
  - reset first
    - at least reset the `box-sizing: border-box;` and body's `margin: 0;`
  - typography next
  - layout
    - at least `.container` class
  - components next
  - page specifics last
- KISS
  - avoid px widths,
  - avoid heights
  - margin bottom + padding top
- DRY
  - use hierarchy
    - `<div class="card"><div class="title">...`
    - target via `.card .title {}`
  - use composition
    - combine classes
    - `class="button primary"`  targeted via `.button.primary {}`
  - use cascading
    - specifics augment and override generics
    - `#login-button` stronger than`.button {}` stronger than `a {}`
    - `@media (...) { a {} }` stronger than `a {}`
  - use inheritance
    - type attributes (font-family, font-size, line-height, color, ...) trickle down from parent to children
- semantic:
  - semantic css, classes named after what things ARE not what they LOOK LIKE
    - e.g.: `.copy`, `.site-header`, `.copyright`, `.email` ...
- clearing floats
  - `overflow: hidden` on the parent
  - OR `clear: both` on a sibling after the floats
- DO
  - short selectors
    - e.g.: `.header li`
- DON't
  - use `!important`
  - name classes after presentation
    - e.g.: `.green-text {}`

# html+css process best practices

- [planning a simple website](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#Enter_HTML5_structural_elements#Planning_a_simple_website)
- mobile first
- unless desktop only
- sketch first
- identify patterns and components
- html next
- css last
- simplicity
- consistency

## js best practices

- start all files with  `'use strict';` [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- write small functions
- start from the return
- tidy code, idented and consistent
- DO
  - for literal strings, use `'single quotes'`
  - one statement per line (don't do `if (foo) { something() } ` all in one line)
  - variables and function parameters use `camelCase` (e.g.: `var topScores`)
  - functions, start with a verb, use `verbCamelCase` (e.g.: `function setPosition (x,y) {}`)
  - for constructors use `PascalCase` (e.g.: `function MovingObstacle() {}`)
- DON'T
  - use global variables
  - repeat yourself
