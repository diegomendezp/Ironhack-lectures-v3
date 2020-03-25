# `Promise` & `async...await` - code along





#### [Code Along Starter code and example -  GIST](https://gist.github.com/ross-u/16466b5b3e884fdb58bf47fae590133a)



<br>



### Pokedex List - using Promises



#### Create file structure

```bash
mkdir promises-and-async-await

cd promises-and-async-await

touch index.html style.css promiseExample.js asyncAwaitExample.js wrongAsyncAwaitExample.js

code .
```





#### Paste the starter code (`index.html` & `css`) from the GIST  :

####   [Code Along Starter code and example -  GIST](https://gist.github.com/ross-u/16466b5b3e884fdb58bf47fae590133a)





- Create a `fetch` request in the `loadPokemons` function using Promises.
- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) returns a Promise
- `response.json()` is used to parse the response string into a JSON object.



##### `promisesExample.js`

```js
// SAVE REFERENCE TO THE DOM ELEMENTS WE WILL USE
const body = document.querySelector('body');
const pokemonsList = document.getElementById('pokemon-list');


console.log('PROMISE EXAMPLE');

// API DOCS - https://pokeapi.co/
const loadPokemons = async () => {
  
  // CREATE A FETCH GET REQUEST
  fetch(
  ) // Asynchronous operation - must be awaited
    .then(response => {
      console.log('response', response);
                      
        // PARSE THE RESPONSE BODY
      return response.json(); // Asynchronous operation - must be awaited
    })
    .then(data => {
      console.log('DATA  ', data);
                      
     // ITERATE OVER JSON DATA AND CREATE A LIST
      data.results.forEach((pokemon, i) => {
        const listItem = document.createElement('li');
        const name = document.createTextNode(`${i + 1} - ${pokemon.name}`);

        listItem.appendChild(name);
        pokemonsList.appendChild(listItem);

        // ADD "ON CLICK" EVENT LISTENER TO RENDER SELECTED POKEMON
        listItem.addEventListener('click', event => {
          selectPokemon(event.target);
        });
      });
    })
    .catch(error => {
      console.error('Error fetching the Pokemons', error);
    });
};


const selectPokemon = listItem => {
  const pokemonIndex = Number.parseInt(listItem.innerHTML);
  const imageOfSelected = document.getElementById('selected-image');
	let nameOfSelected = document.getElementById('name');
  
  nameOfSelected.innerHTML = listItem.innerHTML.toUpperCase();
  nameOfSelected.style.visibility = 'visible';
  imageOfSelected.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
};

loadPokemons();

```





<br>



### POKEDEX LIST - using Async/Await



Async/Await is a syntactic sugar on top of the promises, making the Promises look like other asynchronous code.



- The `await` operator is used to wait for a completion of a pending [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). It can only be used inside an [`async function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

- `async` function always return a `Promise`. The best approach is not to `return` anything from `async` function, but only to `await` completion of operations within the async function.



<br>



Let's refactor the previous code to use Async/Await.

##### `asyncAwaitExample.js`

```js
const body = document.querySelector('body');
const pokemonsList = document.getElementById('pokemon-list');


console.log('ASYNC AWAIT EXAMPLE');


const loadPokemons = async () => {
  try {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100'); 
    // Asynchronous operation - must be awaited

    console.log('response', response);
    const data = await response.json(); // Asynchronous operation - must be awaited

    console.log('DATA  ', data);
    data.results.forEach((pokemon, index) => {
      const listItem = document.createElement('li');
      const name = document.createTextNode(`${index + 1} - ${pokemon.name}`);

      listItem.appendChild(name);
      pokemonsList.appendChild(listItem);

      listItem.addEventListener('click', event => {
        selectPokemon(event.target);
      });
    });
  } catch (error) {
    console.error('Error fetching the Pokemons', error);
  }
};

const selectPokemon = listItem => {
  const pokemonIndex = Number.parseInt(listItem.innerHTML);
  let nameOfSelected = document.getElementById('name');
  const imageOfSelected = document.getElementById('selected-image');

  nameOfSelected.innerHTML = listItem.innerHTML.toUpperCase();
  nameOfSelected.style.visibility = 'visible';
  nameOfSelected.style.display = 'visible';
  imageOfSelected.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
};

loadPokemons();

```



<br>



### Wrong way (consider skipping this during the lecture)

Waiting for return within `async` function doesn't work as expected, because `async` function immediately returns a `<pending>` `Promise` by default, without any waiting for the promise to finish.

​	

##### `wrongAsyncAwaitExample.js`

```js
const loadPokemons = async () => { 
  let data;
  
  try {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100');
    data = await response.json();
    
  } catch(error) { ... }
  
  return data;
}
                      

let pokemons = loadPokemons();
console.log('POKEMONS ???', pokemons);  //  Promise {<pending>}
    

  
/* 
   TRYING TO ITERATE OVER THE PENDING PROMISE
   WILL RESULT IN AN ERROR.
*/
pokemons.results.forEach((pokemon, index) => {
  const listItem = document.createElement('li');
  const name = document.createTextNode(`${index + 1} - ${pokemon.name}`);

  listItem.appendChild(name);
  pokemonsList.appendChild(listItem);

  listItem.addEventListener('click', event => {
    selectPokemon(event.target);
   });
});
```

