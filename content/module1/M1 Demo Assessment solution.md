### `calculateSum(num1, num2)`

```js
function calculateSum (num1, num2) {
  return num1 + num2;
}
```



<br>



### `repeater(string, n)`

```js
function repeater(string, n){
  return string.repeat(n)
}
```





<br>



### `calcSumOfMultiples(number)`

```js
function calcSumOfMultiples(number) {
  let total = 0;
  for(let i = 0; i < number; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
       total += i;
    }
  }
  
  return total;
};
```

