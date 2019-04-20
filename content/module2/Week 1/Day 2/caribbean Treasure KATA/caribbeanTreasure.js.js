const box = {
  _treasureChest: [],
  locked: true,
  hidden: false,
  unlock() { 
    this.locked = false;
  },
  lock() { 
    this.locked = true;
  },
  getContent() {
    if (this.locked) console.log("Locked!");
    else return this._treasureChest;
  },
  hideTheTreasure() {
    this.hidden = true;
    console.log('Treasure buried! X marks the spot.')
  }
};


const checkHorizon = () => {
  let result = Math.floor(Math.random() * 4) % 2;
  if (result === 0) return [result, 'Horizon is clear!'];
  else return [result, 'Pirates on the horizon! Abort!'];
  // returns: either [ 0 , 'Horizon is clear!'] or  [ 1 , 'Pirates on the horizon! Abort!']
}




//  TASK
const stashTreasure = () => {
  // Check the horizon and if there are no pirates, stash the treasure, console.log how much treasure was stashed;
  // Otherwise 1. hide the treasure and  2. console.log to warn your ship mates 'Pirates on the horizon! Abort!'
}




console.warn('ATTEMPT 1:');
stashTreasure('3000 gold coins');

console.warn('ATTEMPT 2:');
stashTreasure('10 diamonds');

console.warn('ATTEMPT 3:');
stashTreasure('golden crown and 5000 silver coins');

console.warn('ATTEMPT 4:');
stashTreasure('bag of finnest jewlery');

console.log( box.getContent() );