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
    return this._treasureChest;
  },
  hideTheTreasure() {
    this.hidden = true;
    console.log('Treasure buried! X marks the spot.')
  }
};

// returns: either [ 0 , 'Horizon is clear!'] or  [ 1 , 'Pirates on the horizon! Abort!']
const checkHorizon = () => {
  let result = Math.floor(Math.random() * 4) % 2;
  if (result === 0) return [result, 'Horizon is clear!'];
  else return [result, 'Pirates on the horizon! Abort!'];
}


// Check the horizon and if there are no pirates, stash the treasure, console.log how much treasure was stashed;
// Otherwise 1. hide the treasure and  2. console.log to warn your ship mates 'Pirates on the horizon! Abort!'
const stashTreasure = (treasure, lookAround) => {
  let horizon = lookAround();

  if (horizon[0] === 0) {
    box.unlock();
    let content = box.getContent();
    getContent.push(treasure);
    box.lock();
    console.log('Success !!!');
    console.log(`${treasure} stashed!`)
  }
  else {
    console.log('Pirates on the horizon! Abort!');
    box.hideTheTreasure();
  }
}


console.warn('ATTEMPT 1:');
stashTreasure('3000 gold coins', checkHorizon );

console.warn('ATTEMPT 2:');
stashTreasure('10 diamonds', checkHorizon );

console.warn('ATTEMPT 3:');
stashTreasure('golden crown and 5000 silver coins', checkHorizon );

console.warn('ATTEMPT 4:');
stashTreasure('bag of finnest jewlery', checkHorizon );