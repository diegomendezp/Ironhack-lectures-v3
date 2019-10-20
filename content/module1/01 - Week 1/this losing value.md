###  Losing `this` value with window event's



```js
// regular function inside the setTimeout has a value of this
// set to `window` as window (browser) is the one calling the function
// after the time is out
let obj1 = {
	start: function () {
		setTimeout( function(){
			console.log('regular function inside set timeout', this);
		}, 1500);
	}
}

obj1.start();


// arrow function inside the setTimeout doesn't have a value of this
// but it takes it from the scope in which it was defined / written in
//   (in this case `start: function ()` ).
let obj2 = {
	start: function () {
		setTimeout( () => {
			console.log('arrow function inside set timeout', this);
		}, 1500);
	}
}


obj2.start();

```

