---
title: "Node"
date: 2018-11-12T16:06:07+01:00
draft: false
weight: 2
---

## Lecture Notes

- What is Node.js?
  - **IT'S NOT A FRAMEWORK!**
  - runtime environment for running javascript in the backend (v8 engine)
  - app can be an http server (runs "forever")
  - runs javascript, same as browser (but no window, no DOM)
  - node callbacks convention (err, result) => { ... }
  - has some built-in modules like `fs`, `process`, `path` and `http`

- Modules
  - every js file is a module
  - every file has it's own scope (no global scope)
  - npm packages are also modules
  - for our files:
    - in `folder/mymodule.js`, to define what it exports
      - `module.exports = ...`
    - in another file use relative path to require it
      - `const mymodule = require('./folder/mymodule')`
  - for npm packages:
    - const express = require('express')

- Why Node.js
  
- Installing Node.js
  
- NPM
  - Installing Packages
  - the console `node` command
  - `npm init` (new projects only)
  - `npm install` (after cloning existing project)
  - `npm install --save package-name` development and production
  - `npm install --save-dev package-name` only development
  - `npm install -g package-name` (may require sudo) glabal install
  - `package.json` (every node project needs one)
	- [NPM](http://npmjs.org)

  {{% notice warning %}}
  - always add "node_modules" to .gitignore 💣
  {{% /notice %}}

- main use case: http server

- other Node.js use cases, not only http servers
  - node-sass, webpack, gulp, grunt
  - babel


## Resources

- [NPM](http://npmjs.org)
- [image processing](https://www.youtube.com/watch?v=iW6eWvxpfvc)
- [webscrapping cherio](https://www.youtube.com/watch?v=eUYMiztBEdY)
- [webscrapping puppeteer](https://github.com/GoogleChrome/puppeteer)
- [testing w/ nightwatch.js](https://www.youtube.com/watch?v=zzofkNaoPYE)
- [flying robots](http://www.nodecopter.com/)
- [canvas art](https://mattdesl.svbtle.com/generative-art-with-nodejs-and-canvas)
- [watering your plants](https://www.instructables.com/id/IoT-NFT-Aquaponic-System-Controler-with-WebApp-Int/)
- [how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/)

## Ironhack Learning Platform

- [LU Node Intro](http://learn.ironhack.com/#/learning_unit/3985)
- [Node.js docs](https://nodejs.org/dist/latest-v10.x/docs/api/)


<!-- 
- build a quote generator w/ functions + array modules + chalk
- create repo in github for the codealong: https://github.com/tawebbcn/node-intro
  - remember the gitignore
- made the cohort clone the repo of the person to the right for them to find out that it won't work
  - introduce npm install

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var quoteSource=[
		{
			quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			name:"Francis of Assisi"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Don't watch the clock; do what it does. Keep going.",
	    	name:"Sam Levenson"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"Expect problems and eat them for breakfast.",
	    	name:"Alfred A. Montapert"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	name:"Arthur Ashe"
	    },
	    {
	    	quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
	    	name:"Samuel Beckett"
	    },
	    {
	    	quote:"Be yourself; everyone else is already taken.",
	    	name:"Oscar Wilde"
	    },
	    {
	    	quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
	    	name:"Albert Einstein"
	    },
	    {
	    	quote:"Always remember that you are absolutely unique. Just like everyone else.",
	    	name:"Margaret Mead"
	    },
	    {
	    	quote:"Do not take life too seriously. You will never get out of it alive.",
	    	name:"Elbert Hubbard"
	    },
	    {
	    	quote:"People who think they know everything are a great annoyance to those of us who do.",
	    	name:"Isaac Asimov"
	    },
	    {
	    	quote:"Procrastination is the art of keeping up with yesterday.",
	    	name:"Don Marquis"
	    },
	    {
	    	quote:"Get your facts first, then you can distort them as you please.",
	    	name:"Mark Twain"
	    },
	    {
	    	quote:"A day without sunshine is like, you know, night.",
	    	name:"Steve Martin"
	    },
	    {
	    	quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
	    	name:"Ellen DeGeneres"
	    },
	    {
	    	quote:"Don't sweat the petty things and don't pet the sweaty things.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Always do whatever's next.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Atheism is a non-prophet organization.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"Dalai Lama"
	    }
```



	]; -->