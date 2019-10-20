---
title: "Css Sass"
date: 2018-11-12T12:52:40+01:00
draft: true
weight: 9
---

## Lecture Notes

### advantages

- maintainability
- DRY (nesting, variables)
- small files
- easier to read (@import)
- allows use of other people’s code 
- you don’t need to load the whole CSS file, just the part that you want/need

two ways to write:
- scss(with { })
- sass(with tabs)

### summary

- it’s a language and a tool that transforms scss code into css

- best practices are key

- you can and should nest instead of advanced selectors; it will compile to normal css

- you can nest classes and also properties (eg: background-xxx)

- you can create variables (with the dollar sign $) and can reuse them throughout your code (useful for color and padding)

- use "&" to nest

- @import allow you to import small parts of other people's code

- @extend allow you to reuse parts of the code. It extends the rules of another class/variable

- @include is exactly like the extend except what you're including is not a css selector ( you have to define the @mixin before)

- @mixin behaves like a function. it can receive arguments and it runs the code where it is called (arguments can have defaults in case you want to call it without giving the arguments)

- sass warns you about erros in your code and refuses to compile it

### best practices

- best practice is to have two files (one with your variables and one with your mixins)

- don't nest too deep

- use @mixin all the time

- never commit your css files to your repository unless you need to (add it to .gitignore)

### tool installing:
 - node-sass
 - it's the fastest tool for js
 - npm install -g node-sass

### practicing:
- changed the files of the game code-along to train with the new tool

### compiling
- node-sass --output-style compressed --source-map true --watch style.scss style.css

### steps taken:
- little intro
- summary of scss features (all kinds of nesting, variables and mixin)
- best practices (do's and dont's)
- install tool to compile
- practice