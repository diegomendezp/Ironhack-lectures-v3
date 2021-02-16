# Demo - M1 ES WebDev - Responsive App







##Project Structure



The project contains 3 folders:



`images/` - contains all of the images used on the pages of the app



`css/` - this folder contains all of the  `.css` files.





At the moment all of the styles are already included and located in the file `main.css`.





`scripts/` - at times you may encounter the folder with all of the JavaScript files and logic being named `src`. Very often found when working with frameworks.



In the `scripts/` folder we have created 5 empty files, which we will use during the demo to put our logic.





Todo el HTML, todos los elementos y estilos ya están provistos, para no perder mucho tiempo en ello.

All of the HTML and the CSS styles are already provided, so that we can focus on the logic of the app.



The app will have 4 pages, and therefore we have 4 different html pages.

All of the `html` pages are located in the root folder.



### Navigation bar



Each `html` page has the same navigation bar, located on the top of the page.

Navigation bar allows us to navigate form page to page by using the links provided in it.

Each `<a>` tag contains a relative path to one of the `html` pages and we can see that in the `href` tag of each anchor, which points to the corresponding `html` file located in the root directory.

So, when we click on the link it actually loads the page and all of the files the page needs.







### Sign up functionality



We will first implement the Sign Up funcitonality.





#### The `signup.html` page



Vamos primero a la pagina `signup.html` .

The `signup.html` page contains a `<form>` element, with several inputs.

Our task in here will be to get the text from each input,  while user is typing, and validate if the text is following the rules that we set, 

for example we will have to validate that valid email was entered 

and that the password is long enough.





#####  How do we validate the email

We have to validate the`email`.



The email has to be written correctly. It needs to contain the `@` symbol and a domain (such as `.com`)

During each signup we will have to check if the email already exists (if it is already taken). One email will be unique to one user.

For this functionality we will create a "dummy database" (database imitation) to help us store the users.







##### How will we validate the password ?



We will be implementing a simple password validation.

Our task here will be to check if the password has a certain length

and 

if the user entered the correct password in both fields (**password** and **repeat-password**).





#### What happens if one of the validations finds a wrong input ?



If the validation is not successful, we will have to show an error message to the user.

Meaning that maybe email is taken, or that the password is too short, or passwords don't match

we will display an error.







## Implementing the `Signup.js` functionality



Let's create the signup functionality



Following the best practices, we will be using classes to group together al of the code related to the Signup functionality.



First, we will need to get all of the input elements of the signup `<form>`

and as well the `signup-button` and the  `message-container`



##### `scripts/Signup.js`

```js
class Signup {
  constructor() {
    this.nameInput = document.querySelector('#name');
    this.pokemonInput = document.querySelector('#pokemon');
    this.typeInput = document.querySelector('#type');
    this.emailInput = document.querySelector('#email');
    this.passwordInput = document.querySelector('#password');
    this.repeatPasswordInput = document.querySelector('#repeat-password');
    this.buttonInput = document.querySelector('#signup-button');
    this.errorsWrapper = document.querySelector('.message-container');
  }
  
  
}
```







Segundo, tenemos que registrar un evento (un EventListener ) y una función para cada input, 

para que podamos acceder a los valores, cada vez cuando el usuario escribe algo.



##### `scripts/Signup.js`

```js
class Signup {

	// ...


  //		...
  
  // gestionar cambios del input "email"
  handleEmailInput = (event) => {}

  // gestionar cambios del input "password"
  handlePasswordInput = (event) => {}

  // gestionar cambios del input "repeat-password"
  // "confirmación de la contraseña"
  handleRepeatPasswordInput = (event) => {}

  // gestionar el envio de los datos (el evento "submit" activado por el botón)
  saveData = (event) => {}


  // registrar funciónes para cada input/campo
  addListeners = () => {
      // escucha para los cambios del texto en cada input
      this.emailInput.addEventListener('input', this.handleEmailInput);
      this.passwordInput.addEventListener('input', this.handlePasswordInput);
      this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);
     // estas funciones se invocarán cada vez cuando el usuario escribe algo (cada carácter)

    	// escucha para los clics en el boton
      this.buttonInput.addEventListener('click', this.saveData);
  }
  
}


// crea nueva instancia del Signup (objeto)
const signup = new Signup();

// cuando la página termine de cargarse, registra todos los eventos
window.addEventListener('load', signup.addListeners );


```









```js
// gestionar cambios del input "email"
   handleEmailInput = (event) => {
    const email = event.target.value;
    
    console.log('email', email);

    // validar el texto del input email
  }
   
   
  
  // gestionar cambios del input "password"
  handlePasswordInput = (event) => {
    const password = event.target.value;

    console.log('password', password);

    // validar el texto del input password
   }
  
  
 
   // gestionar cambios del input "repeat-password"
   // "confirmación de la contraseña"
   handleRepeatPasswordInput = (event) => {
    const repeatedPassword = event.target.value;

    console.log('repeatedPassword', repeatedPassword)

    // validar el texto del input repeatedPassword (confirmación de contraseña)
   }
 
```





#### Abre la consola y escribe algo de texto en los inputs 



Vamos a probar si las funciones del cada evento  e  input funcionan bien, 

y si están logeando datos en la consola.









#### Implementa el método `saveData`



Método  `saveData` se activará cuando el usuario pulsa el botón **Sign Up**



##### `scripts/Signup.js`

```js
  // Handle the submission of the form data (on "submit")
saveData = (event) => {
    // get the values from all of the inputs
    const name = this.nameInput.value;
    const pokemon = this.pokemonInput.value;
    const type = this.typeInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
  
  
    // create a new user object
    const newUser = {
      name = name;
      pokemon = pokemon;
      type = type;
      email = email;
      password = password;
    }

  
  
    /*  Pseudocode (on of next steps):
    *
  	*	// save the created user object in the databae
  	*	 database.createNewUser( newUser );
  	*
  	*/
  
  
    // empty the form
    this.nameInput.value = '';
    this.pokemonInput.value = '';
    this.typeInput.value = '';
    this.emailInput.value = '';
    this.passwordInput.value = '';
    this.repeatPasswordInput.value = '';
  
}
```





#### Instead of the object, create the class `User` 





Following best practices, we will move this piece of code to another file.

We call this the **separation of concerns**. Basically we want to create a class, which will be used only for instantiating the new User objects.



Separation of concerns  means that we should try to keep each distinct functionality and logic in it's own file, making our code easier to navigate and maintain,

more modular and clean.





##### `scripts/User.js`

```js
'use strict';

class User {
  constructor(name, pokemon, type, email, password) {
    this.name = name;
    this.pokemon = pokemon;
    this.type = type;
    this.email = email;
    this.password = password;
  }
}
```





##### `scripts/Signup.js`

```js
// Handle the submission of the form data (on "submit")
saveData = (event) => {
  
    // get the values from all of the inputs
    const name = this.nameInput.value;
    const pokemon = this.pokemonInput.value;
    const type = this.typeInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
  
  
  
		// Create the new user instance
  	const newUser =  new  User(name, pokemon, type, email, password); //  <-- UPDATE
  
  
    /*  Pseudocode (on of next steps):
    *
  	*	// save the created user object in the databae
  	*	 database.createNewUser( newUser );
  	*
  	*/
  
  
    // empty the form
    this.nameInput.value = '';
    this.pokemonInput.value = '';
    this.typeInput.value = '';
    this.emailInput.value = '';
    this.passwordInput.value = '';
    this.repeatPasswordInput.value = '';
  
}
```









<br>



#### Create an interface for saving created users - a dummy database (a simulation of a database)



As we still haven't introduced the databases, we will use the browser and the frontend JavaScript to create a fictional database and use it to save the data in it, precisely the users we create during the Signup.



Our dummy frontend database will be created using the **localStorage**.

Crearemos una base de datos simulada/fingida.  Lo haremos con **localStorage**





#### What is `localStorage` and what is it used for?



`localStorage` es un objeto local, que existe para cada página web, provisto por el navegador.



`localStorage` is a special storage object created by the browser, existing in each web page, for each Tab. It is created and handled by the browser.



This object comes with the methods that we can use to save and retrieve string data for a particular domain.



`localSTorage` has one limitation. It only stores strings and no other data types.

Data is always saved in `localStorage` as **key:value**  pairs, but both key and value are strings.





<br>



#### `localStorage.setItem(clave, valor)`

El método `setItem` se utiliza para almacenar un string en el `localStorage`.



Method `setItem` is used to save a string in the `localStorage`



##### In the browser console:

```js
localStorage; // show the localStorage object

localStorage.setItem("test", "bananarama") // save a key:value pair


localStorage; // show the last added key:value pair

// Storage {test: "bananarama", length: 1}


localStorage.getItem("test");  // get the value by key 'test'
```





### How can we store objects in `localStorage` ?



To store objects or arrays, we have to first convert them into a string and then save them in the `localStorage` using the method `localStorage.setItem()`





##### In the browser console:

```js
localStorage; // show the data stored in the local Storage

var userObj = { name: "Bob", age: 21 }

// convert an object to a string using JSON.stringify( obj )
// save the string in the localStorage
localStorage.setItem("bob", JSON.stringify(userObj))

// 


localStorage;  // show the object that was saved as the string



// get the string value by key "bob"
var bobStr = localStorage.getItem("bob");

// convert back the string value to an object
var bobObj = JSON.parse(bobStr);
```







<br>





### Create the dummy database using `localStorage`

###  



##### `script/Database.js`

```js
class Database {

  // get the users array
    getAllUsers() {
			// get the string from the localStorage
    	const usersStr = localStorage.getItem('users');
    	const usersArr = JSON.parse(usersStr);

      // if there is still no users, return an empty array
      if (usersArr === null) {
        return [];
      }
      else {
        return usersArr;
      }
  }



  // Save the newUser object in the localStorage, adding it to the array of users
  // (we update the `users` stored in localStorage)
  saveNewUser (newUser) {
    
    // get the array of users saved in the localStorage
    const usersArr = this.getAllUsers();

		// update the array of users, by adding the new user to it
    usersArr.push(newUser);
    
    // convert the updated array to a string
    const usersStr = JSON.stringify(usersArr);

    // save back the updated users to the localStorage
    localStorage.setItem('users', usersStr);
  };

}

// create the new instance of the Database (object)
const db = new Database();
```







<br>





### Upadate the method `saveData` in `Signup.js` using the newly created dummy database and `localStorage`



##### `script/Signup.js`

```js
//	...

saveData = (event) => {
  
  // ...
  
  //		...
  
  	// * * * * * * * * * * REMOVE - FROM HERE * * * * * * * * * * //
  
    /*  Pseudocode (on of next steps):
    *
  	*	// save the created user object in the databae
  	*	 database.createNewUser( newUser );
  	*
  	*/
  
    // * * * * * * * * * * REMOVE - TILL HERE * * * * * * * * * * //
  
  	
  
    // save the user in the database (localStorage)
    db.saveNewUser( newUser );								// <-- UPDATE
  	console.log('newUser', newUser);
  
  //	...
}
```









#### Open the page in the browser and check the form functionality





At the moment, if we try clicking on the Signup button the page will reload.









###  	What causes the page reload ?





The 'submit' event of the `<form>` by default, causes the page to reload as it tries to send the form data to the server. 

in our case we are not using the form to send any data to the server, so we can prevent this default behaviour of reloading the page.



When the page reloads all of the files load again and the state of the app is lost as everything starts from zero.

This is why we have to prevent it by using `event.preventDefault()`





With the `event.prenventDefault()` we give the follwing instruction to the browser:

When this event occurs, cancel it and **do not reload the page**.





```js
saveData = (event) => {
  
	//  When this event occurs, cancel it and do not reload the page.
  event.preventDefault();
  // ...
  
```









<br>







# :baby:







### Create the class Validator , to be used for input validation





We will create the class `Validator` to be used for validating the user inputs and showing the errors to the user.



To keep things clean, we will create a new class to handle this specific logic.





Esta clase va a contener lo siguente:

This class will contain the following:

- the default message text for each error - predetermined messages we want to shor to the user
- an object storing all of the errors that should be shown to the user
- Methods to validate the follwing things:
  - email syntax (includes @, has a domain at the end  )
  - check if the email is available (not taken by another user)
  - to check the length of the password
  - to check if the password and the repeat-password are the same.













#### We will create the class, together with the error messages and the methods for validation



##### `script/Validator.js`

```js
class Validator {
  
  constructor() {
	  // predetermined error messages
    this.invalidEmailError = "Enter a valid email address.";
    this.emailExistsError = "The entered email address is already taken.";
    this.passwordError = "Password must be at least 6 characters long.";
    this.repeatPasswordError = "Password and repeat password don't match.";
    
    // object with errors that are shown to the user on error
    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError
    }
  }

  // validate the email
  validateValidEmail = (email) => {}
  
	// helper functon of `validateEmail`
  emailIsValid = (email) => {}
  
  // validate that the email is unique (it isn't already taken)
  validateUniqueEmail = (newEmail) => {}
  
	// validate the password length
  validatePassword = (password) => {}
  
  // validate if the password and the repeat-password are the same
  validatePasswordRepeat = (password, passwordRepeat) => {}
  
// get the error object, for showing it to the user on the Signup page
  getErrors = () => {}
  
  // reset the errors
  resetValidator = () => {}
  
}

// create a new instance of the Validator (object)
const validator = new Validator();
```









#### Now let's implement the functionality for each method

##### `script/Validator.js`

```js
  
  validateValidEmail = (email) => {
    // if the email is valid, remove that error message
    if (this.emailIsValid(email)) {
      delete this.errors.invalidEmailError;
    } else {
      // if the email is not valid, set the error message that will be shown
      this.errors.invalidEmailError = this.invalidEmailError;
    }
    
  };


  
  // helper functon of `validateEmail`
  emailIsValid = (email) => {
    // RegEx object - contains the regex pattern to test if the email is valid
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    // RegEx.test method is used to check if the string fulfills the rules of the pattern
    // it returns `ture` or `false`
    const isValid = emailRegEx.test(email);

    return isValid;
  };
  
  
  
  
  
  validateUniqueEmail = (newEmail) => {
    const usersDB = db.getAllUsers();

    let emailUnique = true;

    if (usersDB.length > 0) {
      usersDB.forEach((userObj) => {
        // if the email is already taken, change the value of the flag variable to `false`
        if (userObj.email === newEmail) {
          emailUnique = false;
        }
      });

      if (emailUnique) {
        // remove the error message
        delete this.errors.emailExistsError;
      } else {
        // if the email is not unique, set the error message
        this.errors.emailExistsError = this.emailExistsError;
      }
    }
  };
  
  
  
  validatePassword = (password) => {
    if (password.length > 5) {
      // remove the error message
      delete this.errors.passwordError;
    } else {
      // if the password has less than 5 characters, set the error message
      this.errors.passwordError = this.passwordError;
    }
  };
  
  
  
  
  validatePasswordRepeat = (password, passwordRepeat) => {
    if (password === passwordRepeat) {
      // if the 2 passwords match, remove the error
      delete this.errors.repeatPasswordError;
    } else {
      // if the passwords don't match, set the error message
      this.errors.repeatPasswordError = this.repeatPasswordError;
    }
  };
  
```







- we also need a method which we can use to get the object with all of the errors, so that we can show them on the page.

- and a method to reset all of the errors, once the form has been sent

  

  





##### `script/Validator.js`

```js
  // get the error object, for showing it to the user on the Signup page
  getErrors = () => {
    return this.errors;
  };

  // reset the errors, for the next signup
  resetValidator = () => {
    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError,
    };
  };
}
  
```









<br>



###  Use the validation methods in the Signup





Let's use the validation methods we have created in the `Validator` in the Signup.





##### `scripts/Signup.js`

###### `handleEmailInput()`

```js
  handleEmailInput = (event) => {
    const email = event.target.value;

    // validate the text from the "email" input field
    validator.validateValidEmail(email);

    const errors = validator.getErrors();

    // if the email structure is valid (it has @, it has a domain like .com , .eu ...)
    if (!errors.invalidEmailError) {
      // check if the email is unique (it doesn't exists yet)
      validator.validateUniqueEmail(email);
    }

    this.setErrorMessages();
  };
```





<br>



##### `scripts/Signup.js`

###### `handlePasswordInput()`

```js
  handlePasswordInput = (event) => {
    const password = event.target.value;
    const passwordRepeat = this.repeatPasswordInput.value;

    // validate the text from the "password" input field
    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, passwordRepeat);

    this.setErrorMessages();
  };
```





<br>



##### `scripts/Signup.js`

###### `handleRepeatPasswordInput()`

```js
  handleRepeatPasswordInput = (event) => {
    const passwordRepeat = event.target.value;
    const password = this.passwordInput.value;

    // validate the text from the "password" input field
    // validate the text from the "repeat-password" input field
    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, passwordRepeat);

    this.setErrorMessages();

  };
```







###  Update the `saveData` method



Update the  `saveData` method to rese the errors after the form has been sent.



##### ` scripts/Signup.js`

###### `saveData()`

```js
  saveData = (event) => {
    
    //	...
    
    //		...
    

    // reset the validator errors, before the next signup
    validator.resetValidator();
  }
```







### Create the method `setErrorMessages`



We need to create the method `setErrorMessages` which we will use to show the error messages coming from the validator to the user.







##### `scripts/Signup.js`

###### `setErrorMessages()`

```js
  setErrorMessages = () => {
    
    // mostrar mensajes de error en el HTML si hay algunos
    // vacía los errores para que no se sumen
    this.errorsWrapper.innerHTML = ''; 
    
    // obtener el objeto con errores, para mostrarlos al usuario
    const errorsObj = validator.getErrors();
    // convertir el objeto a un array de strings
    const errorStringsArr = Object.values(errorsObj);

    // iterar sobre el array de errores
    errorStringsArr.forEach( (errorStr) => {
      // crea nuevo parrafo para cada error
      const errorMessageP = document.createElement('p');
      errorMessageP.innerHTML = errorStr;
      this.errorsWrapper.appendChild(errorMessageP);
    })
  }
  
  
  
  
  
  
  
  
    setErrorMessages = () => {
    // empty the error messages wrapper, so that errors are not adding up

    this.errorsWrapper.innerHTML = "";

    const errorsObj = validator.getErrors();

    // convert the errors object into an array of strings
    const errorsStringsArr = Object.values(errorsObj);

    // loop over the array of error messages
    errorsStringsArr.forEach((errorStr) => {
      // Create a new paragraph for each error message
      const errorMessageP = document.createElement("p");
      errorMessageP.innerHTML = errorStr;

      this.errorsWrapper.appendChild(errorMessageP);
    });
  };
```







<br>





### Create the class `Login` for the Login page





We will create the `Login` class which will be used to handle the inputs on the login page and for validating the login information.





We will first start by getting all the elements we need:

the `<form>` and as well the `#login-button` and the `.message-container`







##### `scripts/Login.js`

```js
class Login {
  constructor(){
    this.emailInput = document.querySelector('#email');
    this.passwordInput = document.querySelector('#password');
    this.messageContainer = document.querySelector(".message-container");
    this.loginButton = document.getElementById("login-button");
  }
  
}
```





Next, we have to register the event ( create an eventListener) and a function for the login form.

We will use this function to handle the data once the user clicks on Login button (on 'submit' event).







```js
class Login {
	//	...
  
  //		...
  
  // handle the sending of the data (on "submit" event)
  submit = (event) => {
    event.preventDefault();

    const usersDB = db.getAllUsers();

    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    // Try to find the user that mathches the `email` and the `password`
    // `find` returns the first element which mathces the expression 
    //  (first time `true` is returned in the loop)
    const user = usersDB.find((userObj) => {
      if (userObj.email === email && userObj.password === password) {
        return true;
      }
    });

    this.showMessage(user);
  };
    
    
    
  // show the error or success message
  showMessage = (user) => {
    // remove the previous message
    this.messageContainer.innerHTML = "";

    const message = document.createElement("p");

    if (user) {
      // if the log in was successful
      // add the class name to change the color and overwrite the previous style
      message.innerHTML = `Hello, ${user.email}`;
      message.classList.add("correct-message");
    } else {
      // if the log in was unsuccessful
      message.innerHTML = "Email and/or password are incorrect!";
    }

    this.messageContainer.appendChild(message);

    if (user) this.redirect();
  };
    
    
    
  
  // redirect the user to the dashboard page
  redirect = () => {
    setTimeout(() => location.assign("dashboard.html"), 2000);
  };

}


// Create an instance of Login (object)
const login = new Login();


// register the event listener 	
// listen for the click on the Login button
login.loginButton.addEventListener("click", login.submit);
```







<br>





We are still missing



### Getting the data from an API (making a HTTP request to the server) 

### and showing it on the page



The last step is creating the function which will be making the calls to the API for data. Data will be returned as objects with information that we can show on the page `dashboard.html`





### Making a single `fetch` request 



##### `scripts/pokeApiService.js`

```js
function getPokemon() {
  const section = document.querySelector(".pokemon-list");

	// Make a request to the server using the URL
  fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then((response) => {
    	// Wait for the response to come back
      // We have to convert the Response into an object

      return response.json();
      // response.json() is an asynchronous operation
      // and it returns a Promise
    })
    .then((data) => {
      // we chain the second then, to help us manage the second promise

      // Each article will contain an h3 with the pokemon name and the image
      const article = document.createElement("article");
      article.innerHTML = `
          <img src="${data.sprites.front_default}" alt="${data.name}"/>
          <h3>${data.name}</h3>
        `;

      // we add the element to the section.pokemon-list
      section.appendChild(article);
    })
    .catch((err) => {});
}

getPokemon();
```





##### `scripts/pokeApiService.js`

```js
"use strict";

function getPokemons() {
  const section = document.querySelector(".pokemon-list");

  for (let i = 0; i < 21; i++) {
    // Every pokemon has a distinct id number,
    // which we can use when making the request to the API.
    // We use that number in the Request URL to get the particular pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
      .then((response) => {
        // We have to convert the Response into an object
        // because the data coming in the response.body is encoded as text

        return response.json(); 
        // response.json() is an asynchronous operation
        // and it returns a Promise
      })
      .then((data) => { // we chain the second then, to help us manage the second promise
        
        // Each article will contain an h3 with the pokemon name and the image
        const article = document.createElement("article");
        article.innerHTML = `
          <img src="${data.sprites.front_default}" alt="${data.name}"/>
          <h3>${data.name}</h3>
        `;

        // we add the element to the section.pokemon-list
        section.appendChild(article);
      })
      .catch((err) => {});
  }
}

getPokemons();

```





<br>



# Adding the animation to the menu

Create a new file in which we will store the code handling the animations and transitions that we may have on the page.



##### `/scripts/animations.js`

```js
const menuButton = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("hide-menu");
});

```





Link it in all the pages 



```html
<!-- 
	...

			...
-->


		<script src="scripts/animations.js"></script>
```



## :confetti_ball:  🎉