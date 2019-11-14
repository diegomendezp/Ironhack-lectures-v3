# AJAX | Axios POST & PUT





### [Ironhack Movie Characters API](<http://materials.ironhack.com/s/BJfHC2fTENm#ironhack-movie-characters-api>)



### Query the API with Postman :

**GET**

```
https://ih-crud-api.herokuapp.com/characters
```







## POST with Axios





```bash
$ mkdir axios-post-put
$ cd axios-post-put
$ touch index.html index.js
$ git init
```





### `/home/ross-u/Desktop/test-labs/axios-post-put/`





### `index.html`

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Axios - POST, PATCH &amp; PUT </title>
  <style>
    body { text-align: center;}
    div { margin-top: 30px;}
    h1 { text-shadow: -1px 2px 1px rgb(196, 191, 191);}
    form { width: 300px; padding: 50px 60px 40px 60px ; border: 2px solid black; border-radius: 5px; text-align: center; margin: 0 auto; box-shadow: -2px 2px 5px rgb(196, 191, 191);}
    input, button { width: 200px; height: 30px; border-radius: 3px; padding: 2px 10px; font-size: 16px;}
    button { margin-top: 15px; width:180px;}
  </style>
</head>

<body>
  <h1> Axios - POST, PATCH &amp; PUT </h1>
  
  <div id='post-char-section'>
    <h2>POST - Create new character</h2>

    <form id="create-form">
      <input type="text" name="name" placeholder="Name"><br>
      <input type="text" name="occupation" placeholder="Occupation"><br>
      <input type="text" name="weapon" placeholder="Weapon"><br>
      <button type="submit">Create new character</button>
    </form>
  </div>

  <div id='get-char-section'>
    <h2 id="update-char">GET - Character by id </h2>
    <p>Which character you would like to update? Input its id:</p>

    <form id="get-char-form">
      <input type="text" name="" id="character-id" placeholder="Character id"> <br>
      <button type="submit" id="get">Get the character</button>
    </form>

  </div>

  <div id='update-section' style="display: none">
    <h2>PATCH - Update a character </h2>

    <form id="update-form">
      <input type="text" name="name" class="the-name" placeholder="name"> <br>
      <input type="text" name="occupation" class="the-occupation" placeholder="occupation"> <br>
      <input type="text" name="weapon" class="the-weapon" placeholder="weapon"> <br>
      <input type="text" name="id" id="character-id-input" placeholder="characterId"> <br>

      <button> Update </button>
    </form>
  </div>

  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="index.js"></script>
</body>

</html>
```







### `index.js`

```js
const createForm = document.querySelector("#create-form");
const getCharacterForm = document.querySelector("#get-char-form");
const updateForm = document.querySelector("#update-form");
const getIdSection = document.querySelector("#get-char-section");
const updateSection = document.querySelector("#update-section");

createForm.addEventListener("submit", function (e) {
  e.preventDefault();    //stop form from submitting

  const inputNodes = createForm.querySelectorAll('input');
  const inputElements = [...inputNodes];

  let newCharacter = {};
  inputElements.forEach((inputField) => newCharacter[inputField.name] = inputField.value);

  // Make a POST request
  axios.post('https://ih-crud-api.herokuapp.com/characters', newCharacter)
    .then(() => createForm.reset())
    .catch((err) => console.log('Oh No! Error is: ', err));
});


getCharacterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.querySelector('#character-id').value;
  if (!id) return;

  // Make a GET request
  axios.get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
    .then((character) => {
      const inputNodes = updateForm.querySelectorAll('input');
      const inputElements = [...inputNodes];

      console.log('INPUT ELEMENTS ARE', inputElements);

      // Populate each empty update `inputField.value` with coressponding data from `character.data`
      inputElements.forEach((inputField) => inputField.value = character.data[inputField.name]);

      getCharacterForm.reset();
      updateSection.style.display = 'block';
      getIdSection.style.display = 'none';
    })
    .catch((err) => console.log(err));
});


updateForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.querySelector('#character-id-input').value;

  const inputNodes = updateForm.querySelectorAll('input');
  const inputElements = [...inputNodes];
  let updatedCharacter = {};

  inputElements.forEach((inputField) => updatedCharacter[inputField.name] = inputField.value);

  // Make a PATCH request 
  axios.patch(`https://ih-crud-api.herokuapp.com/characters/${id}`, updatedCharacter)
    .then((data) => {
      console.log('CHARACTER UPDATED', data);
      updateForm.reset();
      updateSection.style.display = 'none';
      getIdSection.style.display = 'block';
    })
    .catch((err) => console.log(err));
})
```







# Axios DELETE

Implement the delete button calling the DELETE method on route https://ih-crud-api.herokuapp.com/characters/{id}   with the `axios.delete`



Use **Postman** and GET method to check on the API and if you successfuly deleted the document. 