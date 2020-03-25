# Axios & POSTMAN

<br>





## [Exercise 1 - Create Postman Collection](https://gist.github.com/ross-u/89eecb7dfbfd6e73bc0922b0270cdc55)



## [Exercise 2 - Axios -  POST, PATCH, PUT](https://gist.github.com/ross-u/230385ac526acddc9b78df3dfee66c0f)



![](https://i.imgur.com/LW43801.jpg)









<br>



## Exercise - Create POSTMAN Collection



For this exercise you will be using the Postman app.



<br>



### Create a Postman collection and test the API



First you will need to create a Postman collection that includes 5 requests for all the endpoints available on the [Ironhack Movie Characters API](http://materials.ironhack.com/s/BJfHC2fTENm#ironhack-movie-characters-api).

The available routes are as follows:



| Route             | HTTP Verb | Description                         |
| :---------------- | :-------- | :---------------------------------- |
| `/characters`     | GET       | Retrieve a list of all characters   |
| `/characters/:id` | GET       | Get one character (by id)           |
| `/characters`     | POST      | Create a new character              |
| `/characters/:id` | PUT/PATCH | Update a specific character (by id) |
| `/characters/:id` | DELETE    | Remove a specific character         |



<br>



### When done



When finished making the Postman Collection that includes the below 5 requests, export that collection into the `json` file. You can do this by clicking on the **`...`**



<br>





# Axios

<br>



![](https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png)





<br>



## Exercise - axios `POST`, `PATCH`, `PUT` (and `DELETE`)


<br>

For this exercise you will be using your code editor and Postman.



<br>


### Make HTTP requests with axios

In this exercise you will create HTTP requests **from the front-end** (web page) **to the API** , using [axios](https://github.com/axios/axios).



You are expected to replicate the below web page containing 3 forms that are used to create `POST`, `GET` and `PATCH` requests to the [Ironhack Movie Characters API](http://materials.ironhack.com/s/BJfHC2fTENm#ironhack-movie-characters-api).



<br>



After successfully implementing the functionality of each form, you should create a new GET request using Postman (retriving the list of all the characters ) and test that your update is working.





<br>







### Create the file structure

```bash
mkdir axios-post-put
cd axios-post-put

touch index.html  index.js  style.css

git init

code .
```



<br>





### Replicate the below example



You may copy/paste the contents of the `index.html` and `style.css` file. These files only provide the structure and the basic styling for our forms.



<br> What is really important is the functionality set in the `index.js` file. 

We suggest that you code the contents on your own by using the below code as an example. The idea is that you get a hands on practice using *axios* and creating requests from your *front-end* app to an API.



<br>



#### axios

For reference and additional options of axios visit the [axios GitHub repo](https://github.com/axios/axios). We suggest that you bookmark this link for your future projects that you will do with axios.



<br> 



#### Copy the `index.html` file which includes the forms that we will be using.



##### `index.html`

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Axios - POST, PATCH &amp; PUT </title>
  <link rel="stylesheet" href="style.css">
</head>
  

<body>
  <h1> Axios - POST, PATCH & PUT </h1>
  
  <!--  POST  -->
  <div id='post-char-section'>
    
    <h2>POST - Create new character</h2>
    
    <form id="create-form">
      <input type="text" name="name" placeholder="Name"><br>
      <input type="text" name="occupation" placeholder="Occupation"><br>
      <input type="text" name="weapon" placeholder="Weapon"><br>
      <button type="submit">Create new character</button>
    </form>
    
  </div>


  <!--  GET  -->
  <div id='get-char-section'>
    
    <h2 id="update-char">GET - Character by id </h2>
    <p>Which character you would like to update? Input its id:</p>

    <form id="get-char-form">
      <input type="text" name="" id="character-id" placeholder="Character id"> <br>
      <button type="submit" id="get">Get the character</button>
    </form>

  </div>


  <!--  UPDATE  -->
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

  
  <!-- AXIOS SCRIPT -->
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  
  <!-- OUR SCRIPT -->
  <script src="index.js"></script>

  
 </body>

</html>
```







<br>

#### Copy the code with the css styles:



##### `style.css`

```css
body { 
  text-align: center;
}

div {
  margin-top: 30px;
}

h1 { 
  text-shadow: -1px 2px 1px rgb(196, 191, 191);
}

form { 
  width: 300px;
  padding: 50px 60px 40px 60px ;
  border: 2px solid black;
  border-radius: 5px;
  text-align: center;
  margin: 0 auto;
  box-shadow: -2px 2px 5px rgb(196, 191, 191);
}

input, button { 
  width: 200px;
  height: 30px;
  border-radius: 3px;
  padding: 2px 10px;
  font-size: 16px;
}

button { 
  margin-top: 15px;
  width:180px;
}
```



<br>





# Replicate the below parts: :rocket:



<br>



#### Select all the forms elements and section elements that contain the forms

##### `index.js`

```js
// Select all the forms
const createCharacterForm = document.querySelector('#create-form');
const getCharacterForm = document.querySelector('#get-char-form');
const updateForm = document.querySelector('#update-form');


// Select sections that hold the forms
const getIdSection = document.querySelector('#get-char-section');
const updateSection = document.querySelector('#update-section');
```



<br>



#### Create an event listener function that makes a `POST` request

Add an event listener to the *POST - Create new character* form, to make a `POST` request that sends the data from the form to the API in order to create a new character.

Once done implementing the below, test it by using Postman and retrieve the list of all the characters from the API.



<br>




##### `index.js`

```js
// POST - Create new character

createCharacterForm.addEventListener('submit', function(e) {
  // Prevent the form reloading of the page
  e.preventDefault();

  // Grab all input fields in form `POST - Create new character`
  const inputNodes = createCharacterForm.querySelectorAll('input');
  const inputFields = [...inputNodes];

  // Create new character object by creating properties { name, occupation, weapon }
  const newCharacter = {};
  inputFields.forEach(
    inputField => (newCharacter[inputField.name] = inputField.value),
  );

  // Make a POST request
  const url = 'https://ih-crud-api.herokuapp.com/characters';

  axios
    .post(url, newCharacter)
    .then(() => createCharacterForm.reset()) // https://www.w3schools.com/jsref/met_form_reset.asp
    .catch(err => console.log('Oh No! Error is: ', err));
});
```



<br>



#### Create an event listener function that makes a `GET` request

Add an event listener to the *GET - Character by id* form, to make a `GET` request and retrieve one character (by id).



<br>




##### `index.js`

```js
// `GET - Character by id`

getCharacterForm.addEventListener('submit', function(e) {
  // Prevent the form reloading of the page
  e.preventDefault();

  // Get the id of the character from the input field
  const id = document.querySelector('#character-id').value;

  // If no id was provided, stop the function
  if (!id) return;

  // Make a GET request -  get one character
  axios
    .get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
    .then(character => {
      // Grab all input fields from the update form (still invisible)
      const inputNodes = updateForm.querySelectorAll('input');
      const inputElements = [...inputNodes];

      console.log('INPUT ELEMENTS ARE', inputElements);

      // Populate each empty update `inputField.value`
      // with coressponding data from the response object `character.data`
      inputElements.forEach(
        inputField => (inputField.value = character.data[inputField.name]),
      );

      getCharacterForm.reset();
      // Show the form `PATCH - Update a character`
      updateSection.style.display = 'block';
      // Hide the form `GET - Character by id`
      getIdSection.style.display = 'none';
    })
    .catch(err => console.log(err));
});
```





<br>



#### Create an event listener function that makes a `PATCH` request

**Note**: PATCH method should be used for making partial updates to the resource in the API. 

On the other hand PUT method should be used to make a full update, which completely replaces the old resource with the new one.



<br>



##### `index.js`

```js

// `PATCH - Update a character`

updateForm.addEventListener('submit', function(e) {
  // Prevent the form reloading of the page
  e.preventDefault();

  // Get the id value from the last input field (the disabled one)
  const id = document.querySelector('#character-id-input').value;

  // Grab all input fields in form `PATCH - Update a character`
  const inputNodes = updateForm.querySelectorAll('input');
  const inputFields = [...inputNodes];

  const updatedCharacter = {};

  // Insert data from each input field into the `updatedCharacter` object
  inputFields.forEach(
    inputField => (updatedCharacter[inputField.name] = inputField.value),
  );

  // Make a PATCH request
  axios
    .patch(
      `https://ih-crud-api.herokuapp.com/characters/${id}`,
      updatedCharacter,
    )
    .then(response => {
      console.log('CHARACTER UPDATED', response);
      updateForm.reset();

      // Hide the form `PATCH - Update a character`
      updateSection.style.display = 'none';
      // Show the form `GET - Character by id`
      getIdSection.style.display = 'block';
    })
    .catch(err => console.log(err));
});

```





<br>



### Implement `axios.delete`

Create the form with the delete button, which when clicked calls a function that makes a `DELETE`  request to the API endpoint https://ih-crud-api.herokuapp.com/characters/:id   with the [`axios.delete`](https://github.com/axios/axios#request-method-aliases).



Use **Postman** and make a `GET` request and retrieve the list of all the characters, in order to check if you have successfully deleted the character. 