// function BankAccount(clientName, currency){
//   this.clientName = clientName;
//   this.currency = currency;
//   this.balance = 100;
// }

// BankAccount.prototype.showBalance = function() {
//   return `${this.currency} ${this.balance}`;
// }

// BankAccount.prototype.withdrawMoney = function(amount) {
//   if (amount <= this.balance) {
//     this.balance -= amount;
//   } else {
//     throw new Error('not enough funds');
//   }
// }

// BankAccount.prototype.depositMoney = function(amount) {
//   this.balance += amount
// }

// var newBank = new BankAccount("sandra", "us dollars");

// console.log(newBank.showBalance(), newBank.withdrawMoney(20), newBank.showBalance(),)

class BankAccount {
  constructor(clientName, currency) {
    this.clientName = clientName;
    this.currency = currency;
    this.balance = 0.0;
  }

  showBalance() {
    return `${this.currency} ${this.balance}`;
  }

  withdrawMoney(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error('not enough funds');
    }
  }

  depositMoney(amount) {
    this.balance += amount;
  }
}

let account1 = new BankAccount('mike', '$');
account1.depositMoney(100);
account1.withdrawMoney(25);
account1.showBalance();
// $ 75

// =-=-=-=-=-=-=-=-=-=-=-=-= second example -=-=-=-=-=-=-=-=-=-=-=-=-=-=

const gameA = {
  title: 'frogger',
  creator: 'sandra',
  year: 2016,
  play: function() {
    console.log("PLAYING '" + gameA.title + "' by " + gameA.creator);
  },
};

const gameB = {};
// gameB.title = "blah";
// gameB.creator = "dianelis";
// gameB.year = 2016,
// gameB.play = function(){
//   console.log("PLAYING '" + gameB.title + "' by " + gameB.creator);
// }

// console.log(gameA);
// console.log(gameB);

// gameA.play();
// gameB.play();

// class:
// Class - template for creating objects of new custom type
// --------------------------------------------------------
// - Camel case but the FIRST LETTER is typically uppercase
// - Name is typically SINGULAR (Game, not Games)

// class Game {
//   constructor(gameTitle, gameCreator, releaseYear){
//     this.title = gameTitle;
//     this.creator = gameCreator;
//     this.year = releaseYear;
//   }
//   play(){
//     // use "this" instead on the object name
//     console.log("PLAYING '" + this.title + "' by " + this.creator);
//   }
// }

// const game = new Game('hello', 'sandra', 2019);

// console.log(game);
// game.play();

// inheritance
// Inheritance - making a copy of a class with some customizations
// ---------------------------------------------------------------
// CanvasGame inherits from Game

// class CanvasGame extends Game {
//   constructor(gameTitle, gameCreator, year, country){
//      // call the Game constructor with "super" (as in "superclass")
//     super(gameTitle, gameCreator, year);
//     // Game constructor: constructor(gameTitle, gameCreator, year, country) {

// // add an extra property that the Game constructor didn't have
//     // (this is why we are defining a new constructor)
//       this.originCountry = country;
//   }

//   checkOrigin(){
//     console.log('The game is from: ', this.originCountry);
//   }
// }

// const canGame1 = new CanvasGame('frog', 'atari', 1971, "japan");
// console.log(canGame1);

// canGame1.play();
// canGame1.checkOrigin();

// prototypes

function Game(gameTitle, gameCreator, releaseYear) {
  // "this" represents the new object we are creating
  this.gameTitle = gameTitle;
  this.gameCreator = gameCreator;
  this.releaseYear = releaseYear;
}

// Prototype - list of all methods for a kind of object
// ----------------------------------------------------
// - the prototype is connected to the constructor function
// - add methods to the prototype with assignment (=)
// - INSIDE METHODS "this" refers to the object that you called it with

Game.prototype.play = function() {
  console.log("PLAYING '" + this.gameTitle + "' by " + this.gameCreator);
};

// constructor functions are called with the "new" keyword to CREATE objects
// (prototypes make them even less repetitive)

const theGame = new Game('pokemon go', 'ana', 2012);

console.log(theGame);

theGame.play();

function CanvasGame(title, creator, year, origin) {
  // re-use the Game constructor to get the properties (structure)
  Game.call(this, title, creator, year);
  this.origin = origin;
}

CanvasGame.prototype = Object.create(Game.prototype);

CanvasGame.prototype.checkOrigin = function() {
  console.log('The game is from: ', this.origin);
};

const gameHa = new CanvasGame('hahaha', 'anannana', 2018, 'florida');

console.log(gameHa);

gameHa.play();
gameHa.checkOrigin();
