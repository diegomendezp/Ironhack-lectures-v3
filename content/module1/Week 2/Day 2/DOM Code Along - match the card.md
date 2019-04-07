# DOM - Code Along



```bash
mkdir dom-game
cd dom-game
touch index.html style.css script.js board.js
code .
```



**index.html**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>DOM Code Along</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="style.css">
</head>
  
<body>
  <section id="board"></section>
  
  <script src="board.js"></script>
  <script src="script.js"></script>
</body>
</html>
```



**style.css**

```css
/* ---- reset ---- */

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* adds padding and border to the element without changing its dimension, it shrinks content */
}
```





#### Set body to be flex parent and give basic style to the `#board` div



**style.css**

```css
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #224e6c;
}

#board {
  width: 640px;
  height: 640px; 
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
}
```





### Create function that will create elements for us 



**board.js**

```js
// STEP 1
// createElement takes a html string of elements and returns the DOM node objects
function createElement(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString;
  	
  	// console.log(div.children);
    return div.children[0];
};



// STEP 2
let board = document.getElementById("board");
let cardsArray = ['one', 'two', 'three', 'four', 'five', 'six', 'one', 'two', 'three', 'four', 'five', 'six'];


cardsArray.forEach( function (name) {
  let newCard = createElement(`
    <div class="card" data-cardname="${name}">
      <img class="front" src="img/${name}.svg">
      <img class="back" src="img/front.svg">
    </div>
  `);

  board.appendChild(newCard);
});
```





### Add styles to the cards to size them properly



**style.css**

```css
.card {
  width: 23%; /* to account for the margin 1% + 1% */
  height: 31%; /* to account for the margin  1% + 1% */
  margin: 1%;
  position: relative;
  
  display: flex;
  align-items: center;
  background: #139ba0;
  border-radius: 5px;
}

.front,
.back {
  width: 100%;
  height: auto;
  padding: 20px;

  position: absolute;
}
```





### Add scale transformation to cards on click

**style.css**

```css
.card {
  transform: scale(1);
}

/* When card is clicked it will have slight scale transition */
.card:active {
  transform: scale(0.95);
  transition: transform .2s;
}
```









### Select all cards, create variables for state, create flipCard function



**script.js**

```js

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;






function flipCard() {
  // Board will be locked after clicking on 2 cards
  if (lockBoard) {
    return;
  }
  
  this.classList.toggle('flip');
  
  
  /* ADD BELOW STYLE TO CSS BEFORE CONTINUING: */
  //
  //...ADD CSS...
  //
  //
  //
  
  /* CONTINUE HERE  */
  
  // first card
  if (hasFlippedCard === false) { /* same as  if(!hasFlippedCard ) */
    firstCard = this;
    hasFlippedCard = true;
    return;
  }
  
  secondCard = this;
  lockBoard = true;

  // checkForMatch();
}


cards.forEach( function (card) {
   card.addEventListener('click', flipCard)  
});
```



**ADD CSS BEFORE** `if(!hasFlippedCard)`

```css
.card.flip { transform: rotateY(180deg); }

.card { /*  to position the card in the 3D space so that it has front side and back side*/
  transform-style: preserve-3d;  
  transition: transform .5s;
}

.front {
  /* As front face image is also turned with its back, we dont get to see the second image, we need to turn it around */
  transform: rotateY(180deg);
}
```



#### ADD above JS code to  `flipCard()` before continuing !!!





### create `checkForMatch` function to see if 2 cards are matching

```js
function checkForMatch() {
  let isMatch = firstCard.dataset.cardname === secondCard.dataset.cardname;
  if (isMatch) {
    // disable cards
    firstCard.removeEventListener('click', flipCard);
  	secondCard.removeEventListener('click', flipCard);
    
    // reset board values
    hasFlippedCard = false;
  	lockBoard = false;
  	firstCard = null;
  	secondCard = null;
    
    return;
  }
  
  // unflip cards back
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    // reset board values
    hasFlippedCard = false;
  	lockBoard = false;
  	firstCard = null;
  	secondCard = null;
    
  }, 1500);
}

```



### Refactor above to functions `disableCards()` `resetBoard()` `unflipCards()`

**script.js**

```js
function checkForMatch() {
  let isMatch = firstCard.dataset.cardname === secondCard.dataset.cardname;
  if(isMatch) {  
    disableCards();
    
    return;
  }  
  unflipCards();
}
```

```js
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  /* RESET VALUES */
  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    /* RESET VALUES */
    resetBoard();
  }, 1500);
}
```





### Change class toggle to add

```js
function flipCard() {
  // Board will be locked after clicking on 2 cards
  if (lockBoard) return;
  
  /*  CHANGE TO : */
  this.classList.add('flip');
```







### If we click twice on same card the board will lock. We have to check if 1st card was clicked twice, and if it is, we need to stop the function from setting `secondCard` and locking the board.



#### We can debug this if we set the `debugger` on the begining of the function `flipCard` (IF STUDENTS ASK)

```js
function flipCard() {
  debugger;
  // Board will be locked after clicking on 2 cards
  if (lockBoard) return;
```





### SOLUTION

**index.js**

```js
// In flipCard() add check if `this` that caused the event is equal to `firstCard` and stop execution
function flipCard() {
  // Board will be locked after clicking on 2 cards
  if (lockBoard) return;
  if (this === firstCard) return;
```





### We can create shuffle function in the `board.js` to randomize the cards

**board.js**

```js
function createElement(htmlString) {
  // ...
}


function shuffleCards (arrayToShuffle) {
  let shuffledCards = [];
  
  for ( ; arrayToShuffle.length > 0; ) {
    let randomNumber = Math.floor(Math.random() * arrayToShuffle.length);
    let randomCard = arrayToShuffle.splice(randomNumber, 1); 
    shuffledCards.push(randomCard[0]);
  }
  return shuffledCards;
}

let board = document.getElementById("board");
let cardsArray = ['one', 'two', 'three', 'four', 'five', 'six', 'one', 'two', 'three', 'four', 'five', 'six'];

cardsArray = shuffleCards(cardsArray);


cardsArray.forEach( function (name) { // .......
  // .....
```

