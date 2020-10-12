---
title: "Chronometer"
date: 2018-11-12T12:25:51+01:00
draft: false
weight: 18
lab: true
week: 2
day: 2
---

# Chronometer
## Link:
  - https://github.com/ironhack-labs/lab-javascript-chronometer
## Purpose:
  - Understand asynchronus functions and callbacks.
## What they do in the exercise:
  - Iteration 1 create a interval
  - DOM manipulation from interation 2 to the end.
## Good practices:
  - use var `var self = this` for no lose the context
  - naming
  - indentation


  
## Issues:
  - use globals variables
  - setInterval only is used once without complexity.
  - All the set methods from the chronometer aren't setters.
  - For what they should use Chronometer.setTime()?
  - Iteration 2 "Print our chronometer" don't tell how to Print
    - TA solution: on chronometer.setTime() will return an object with min and sec. 
    On main.js will create another setInterval where manipulate the DOM each second.
  - Iteration 3: Already has ol in the HTML
  - Iteration 4: confuse since "we have to clear all the data on the clock." ** 
  - Bonus: You already has the HTML is CSS done.
  - Solution code use global functions inside chronometer methods.
  - It will be better if they work with console but since they have JasmineTest they will not use it.
## Suggestion:
  - Since we are showing what is a callback, we can create a callback method inside chronometer for every time change currentTime.
## Typos:
  - setTime() -> "whit"
  - Jasmine html have Vikings instead of Chronometer.