# Demo - M1 ES WebDev - Responsive App





Primero os mostraré lo que vamos a hacer.

es una pequena app sobre pokemons, con 4 paginas.

Por que estamos creando esta app y por que estamos haciendo esta demostración ?



La idea de este pequeña demo es daros un molde y una estructura para vuestros proyectos y para los proyectos en futuro.

Es decir no hay estructuras correctas o solo una manera correcta.



Tambien si quereis tomar notas, tomad los por que os pueden servir bien durante de los primeros dias.



Esto será una demostración. Estaré escribiendo el código  y compartiendo mi pantalla con vosotros.



Gracias por adelantado a Dani.  Dani me va a ayudar con preguntas y para clarificar dudas.



##Estructura del proyecto



El proyecto incluye 3 carpetas:



`images/` - esta carpeta contiente todos los imagenes que vamos a usar en las paginas.



`css/` - esta carpeta contiene todos los archivos css. Normalmente aqui guardamos todos los archivos de tipo `.css`. 

Esto nos permite separar el codigo de CSS,  para tener el código mas ordenado, en varios archivos y junto en una carpeta central.



Este proyecto tiene todos los estilos ubicados dentro del archivo `main.css`.





`scripts/` - a veces los desarolladores también  suelen llamar esta carpeta SRC (`src/`). 

Lo podéis llamar como queráis (y usar uno de estos dos nombres). 

Aqui vamos a poner todos los archivos de Javascript, los que terminan con la extensión  `.js`.



Dentro de la carpeta `scripts/` tenemos creados 5 archivos vacíos, en cuales vamos a escribir nuestro código.





Todo el HTML, todos los elementos y estilos ya están provistos, para no perder mucho tiempo en ello.



Mi app tendrá 4 páginas, por lo que tengo 4 archivos de html. 

Las páginas `html` están ubicadas en la carpeta raíz.





### Barra de navegación



En cada pagina `html` tenemos la misma barra de navegación ubicada en la parte superior de la página.

Esto nos permite  navegar a cada pagina desde la barra de navegación.



Cada elemento enlace `<a>...</a>`contiene una ruta relativa.

 Cada ruta, dentro de `href` esta apuntando a un archivo de html ubicado dentro de la carpeta raiz. 





### Funcionalidad de inscripción - 



Primero implementaremos la funcionalidad de inscripción, conocida como Sign Up.





#### La pagina `signup.html`



Vamos primero a la pagina `signup.html` .



La pagina incluye un elemento `<form>`, con varios elementos `<input>`.



Nuestra tarea aqui es coger el texto de cada campo ( cada elemento input), mientras el usuario está escribiendo, y  validar si texto de cada campo cumple las reglas.



##### Cómo validaremos el email ?

Tenemos que validar el `email` - 

cada email tiene que ser único y tiene que seguir las reglas de sintaxis de los emails. 

Email debe que contener la arroba y el dominio como `.com`



Tambien tenemos que comprobar si el email ya está ocupado. Para esto, vamos a usar una base de datos simulada, para guardar los datos de cada usuario (para registrar cada usuario). 

Durante de cada inscripcion, comprobaremos si el email y el usuario ya existe. 

Es decir  - si el email está disponible - , creáremos el nuevo usuario.



##### Cómo validaremos el password (la contraseña) ?



en este proyecto implementaremos una validacion de contraseñas simple.

nuestra tarea aqui será validar la longitud de la contraseña y 

validar si el usuario ha escrito la misma contraseña en ambos campos





#### Que pasará cuando una de las validaciones falla?

Pues, cada error debe que ser mostrado al usuario.

y para esto crearemos una parte que mostrará los errores al usuario.







## Implementar funcionalidad de `Signup.js`



Vamos a crear nuestra funcionalidad de inscripción 



Siguiendo las mejores prácticas, usaremos una clase para juntar todo el código relacionado con la inscripción.



Primero , conseguiremos todos los elementos del `<form>` 

y también el botón y `message-container`.

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
// gestionar el envio de los datos (el evento "submit")
saveData = (event) => {
    //recoger todos los valores de los inputs:
    const name = this.nameInput.value;
    const pokemon = this.pokemonInput.value;
    const type = this.typeInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
  
  
   	// crear un nuevo usuario - crear una instancia de "User" nueva
  	function createUser (name, pokemon, type, email, password) {
      const userObj = {
        name = name;
    		pokemon = pokemon;
    		type = type;
    		email = email;
    		password = password;
      }
      
      return userObj;
    }
  
  	const newUser = createUser(name, pokemon, type, email, password);
  
    /*  Pseudocódigo (proximo paso):
    *
  	*	// guardar el usuario en la base de datos
  	*	 database.createNewUser( newUser );
  	*
  	*/
  
  
    // vaciar formulario
    this.nameInput.value = '';
    this.pokemonInput.value = '';
    this.typeInput.value = '';
    this.emailInput.value = '';
    this.passwordInput.value = '';
    this.repeatPasswordInput.value = '';
  
}
```





#### En lugar de función `createUser` crea una clase - `User`





siguendo las mejores practicas voy a mover parte de mi codigo a otro archivo.

Esto se llama  **separation of concerns** o  separacion de las responsabilidades. 



La separacion de las responsabilidades nos pide guardar cada funcionalidad distinta

en su propio archivo, manteniendo el código, modular y mas limpio. 



##### `scripts/User.js`

```js
'use strict';

// crear una instancia de "User" nueva - un nuevo objeto de usuario
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
// gestionar el envio de los datos (el evento "submit")
saveData = (event) => {
    //recoger todos los valores de los inputs:
    const name = this.nameInput.value;
    const pokemon = this.pokemonInput.value;
    const type = this.typeInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
  
  
    // crear un nuevo usuario - crear una instancia de "User" nueva
  
  	// * * * * * * * * * * REMOVE - FROM HERE * * * * * * * * * * //
  	// function createUser () {
    //   const userObj = {
    //     name = name,
    // 		pokemon = pokemon,
    // 		type = type,
    // 		email = email,
    // 		password = password
    //   }
      
    //   return userObj;
    // }
  
    // const newUser = createUser(name, pokemon, type, email, password);
  
    // * * * * * * * * * * REMOVE - TILL HERE  * * * * * * * * * * //
  
  	const newUser =  new  User(name, pokemon, type, email, password);          //  <-- UPDATE
  
    /*  Pseudocódigo (proximo paso):
    *
  	*	// guardar el usuario en la base de datos
  	*	 database.saveNewUser( newUser );
  	*
  	*/
  	
  
    // vaciar formulario
    this.nameInput.value = '';
    this.pokemonInput.value = '';
    this.typeInput.value = '';
    this.emailInput.value = '';
    this.passwordInput.value = '';
    this.repeatPasswordInput.value = '';
  
}
```









<br>



#### Crear el interfaz para guardar usuarios - una base de datos simulada



Como todavía no trabajamos con las bases de datos, vamos a utilizar el navegador 

y vamos a guardar los datos de usuario en el navegador.



Crearemos una base de datos simulada/fingida.  Lo haremos con **localStorage**





#### Que es `localStorage` y para qué se utiliza ?



`localStorage` es un objeto local, que existe para cada página web, provisto por el navegador.



Este objeto viene con metodos que nos permiten guardar y recuperar strings.



Es decir `localStorage` tiene una limitación. Sólo almacena strings, y ningun otro tipo de datos.



Las claves y los valores son **siempre cadenas de texto**.







#### `localStorage.setItem(clave, valor)`

El método `setItem` se utiliza para almacenar un string en el `localStorage`.



##### En la consola del navegador:

```js
localStorage; // ver el contenido del objeto localStorage

localStorage.setItem("test", "bananarama") // almacenar un par de clave / valor


localStorage; // ultimo clave / valor fue añadido al objeto

// Storage {test: "bananarama", length: 1}


localStorage.getItem("test");  // recuperar el valor con la clave "test"
```





### Como almacenar objetos o arrays en `localStorage` ?



Para almacenar objetos o arrays, tenemos que convertirlos primero en un string, y luego almacenarlos con el método `setItem`.



##### En la consola del navegador:

```js
localStorage; // ver el contenido del objeto localStorage

var userObj = { name: "Bob", age: 21 }

// convertir objeto a un string con JSON.stringify()
// almacenar el string
localStorage.setItem("bob", JSON.stringify(userObj))

// 


localStorage; 
// el objeto fue almacenado en el localStorage



// recuperar el valor con la clave "bob"
var bobStr = localStorage.getItem("bob");

var bobObj = JSON.parse(bobStr);
```







<br>





### Crear la base de datos simulada/fingida ...

###  ... utilizando `localStorage`



##### `script/Database.js`

```js
class Database {

    // recuperar el array con los usuarios del `localStorage`
    getAllUsers() {
    // recuperar el string con usuarios  // y convertirlo en un array
    	const usersStr = localStorage.getItem('users');
    	const usersArr = JSON.parse(usersStr);

      // si todavia no hay usuarios, devuelve un array vacio
      if (usersArr === null) {
        return [];
      }
      else {
        return usersArr;
      }
  }



  // almacenar el objeto `newUser` en `localStorage` (junto con otros objetos de usuarios) 
  //	(actualizar "users" de localStorage)
  saveNewUser (newUser) {
    const usersArr = this.getAllUsers();

    // añadidr el nuevo objeto de usuario al array (actualizar el array de usuarios)
    usersArr.push(newUser);
    // convertir el array a un string
    const usersStr = JSON.stringify(usersArr);
    // almacenar lo de nuevo en localStorage
    localStorage.setItem('users', usersStr);
  };

}

// crea nueva instancia del Signup (objeto)
const db = new Database();
```







<br>





### Volveremos a actualizar el metodo `saveData` dentro del `Signup`, utilizando nuestra base de datos simulada - `localStorage`



##### `script/Signup.js`

```js
//	...

saveData = (event) => {
  
  // ...
  
  //		...
  
  	// * * * * * * * * * * REMOVE - FROM HERE * * * * * * * * * * //
  
    /*  Pseudocódigo (proximo paso):
    *
  	*	// guardar el usuario en la base de datos
  	*	 database.createNewUser( newUser );
  	*
  	*/
  
    // * * * * * * * * * * REMOVE - TILL HERE * * * * * * * * * * //
  
  	
  
    // guardar el usuario en la base de datos
    db.saveNewUser( newUser );								// <-- UPDATE
  	console.log('newUser', newUser);
  
  //	...
}
```









#### Abre la página en navegador <u>e</u> intenta como funciona el formulario





de momento la pagina sea cargada de nueva cada vez cuando cliqeamos al boton Signup









###  	Qué causa la <u>recarga</u> (o el reload) de la página?





El evento "submit" de los `<form>s` causa que la página web se <u>recargue</u>, por defecto.



Cuando la pagina se recarga, el navegador tambien recarga todos los archivos de nuevo, y todos los datos se pierden. 

Por este razón tenemos que cancelar    el     eVento    "submit".



Esto puede ser arreglado fácilmente con el método `event.preventDefault()`. 

Con el `event.preventDefault)()`  daremos la siguente instrucción al navegador: 

 Cuando el evento ocurre, <u>cancelalo</u> y no recarga la pagina



```js
saveData = (event) => {
  
  // Cuando el evento ocurre, cancelalo y no recargue la pagina
  event.preventDefault();
  // ...
  
```









<br>







# :baby:







### Crearemos la clase Validator, para 





Ahora crearemos la clase Validator que utilizaremos para manejar errores y validar los inputs





Para mantener mi codigo limpio voy a crear una clase.



Esta clase va a contener lo siguente:

-  los mensajes para cada tipo de error - mensajes predeterminados
-  un objeto con los errores que vamos a mostrar a el usuario.
- los metodos para validar lo siguente:
  -  validar el nombre del email, 
  - para validar que el email no está tomado (que es único),
  - para validar la longitud del password
  - Para validar si el password y el password de la confirmación coinciden





#### Vamos a crearlo.... los errores y los metodos dentro de la clase `Validator`



##### `script/Validator.js`

```js
class Validator {
  
  constructor() {
    //  mensajes predeterminados para cada tipo de error
    this.invalidEmailError = 'Introduce un email válido';
    this.emailExistsError = 'Este email ya está registrado';
    this.passwordError = 'Introduce una contraseña de 6 o más carácteres';
    this.repeatPasswordError = 'Los campos no coinciden';

    // objeto con los errores que vamos a mostrar a el usuario
    // lo inicializamos con mensajes que mostraremos al principio
    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError
    }
  }

	// validar el nombre del email
  validateValidEmail = (email) => {}
  
  // función auxiliar de  ` ^^ validateEmail`
  emailIsValid = (email) => {}
  
  //  validar que el email no está tomado (que es único)
  validateUniqueEmail = (newEmail) => {}
  
  // validar la longitud del password
  validatePassword = (password) => {}
  
  //validar si el password y el password de la confirmación coinciden
  validatePasswordRepeat = (password, passwordRepeat) => {}
  
  // obtener el objeto con errores, para mostrarlos al usuario
  // en la página Signup
  getErrors = () => {}
  
  // reiniciar los errores mostrados
  resetValidator = () => {}
  
}

// crea nueva instancia del Validator (objeto)
const validator = new Validator();
```









#### Ahora añadiremos la funcionalidad a todas las funciónes

##### `script/Validator.js`

```js
  
validateValidEmail = (email) => {
    if (this.emailIsValid(email)) {
      // si el nombre es válido, quita el mensaje de error
      delete this.errors.invalidEmailError;
    } else {
     // si el nombre no es válido, pon el mensaje que se mostrará
      this.errors.invalidEmailError = this.invalidEmailError;
    }
  
  }
  
  // función auxiliar de  ` ^^ validateEmail`
  emailIsValid = (email) => {
	// RegEx objeto special - contiene las reglas de la sintaxis, 
  // para validar los strings
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
  // método ``.test()`` prueba si la cadena cumple las reglas 
  // del RegEx y devuelve `true` or `false`
    const isValid = emailRegEx.test(email);
    
    return isValid;
    
  }
  
  
  
  
  
  validateUniqueEmail = (newEmail) => {
    //recoger datos del localStorage
    const userDB = db.getAllUsers();
    console.log(userDB);

    if (userDB) { // si hay usuarios, comprueba si el email es único
      let emailUnique = true; // variable indicadora

      // iterar sobre todos los objetos de usuarios
      userDB.forEach(user => {
        if (user.email === newEmail) { 
       		// si el email ya está tomado, 
          // cambia el valor de la variable a `false`
          emailUnique = false;
        }
      });
  
      
      // si el email es único, 
      // si no hemos encotrado este email dentro de los usuarios
      if (emailUnique) {
        // quita el mensaje de error
        delete this.errors.emailExistsError;
      } else {
        // si el email no es único, pon el mensaje que se mostrará
        this.errors.emailExistsError = this.emailExistsError;
      }
    }
  }
  
  
  
  validatePassword = (password) => {
    if (password.length > 5) {
      // si el password tiene mas de 5 carácteres, quita el error
      delete this.errors.passwordError;
    } else {
      // si el password tiene menos de 5 carácteres, pon el mensaje que se mostrará
      this.errors.passwordError = this.passwordError;
    }
  }
  
  
  
  
  validatePasswordRepeat = (password, passwordRepeat) => {
    if (password === passwordRepeat) {
      // si los 2 campos de password coinciden, quita el error
      delete this.errors.repeatPasswordError;
    } else {
      // si los passwords no coinciden, pon el mensaje que se mostrará
      this.errors.repeatPasswordError = this.repeatPasswordError;
    }
  }
  
```





- tambien necesitaremos un metodo para obtener el objeto con errores, para mostrarlos al usuario

  

- y un método para reiniciar los errores mostrados, despues de enviar el formulario





##### `script/Validator.js`

```js
  // obtener el objeto con errores, para mostrarlos al usuario en la pagina Signup
	getErrors = () => {
    return this.errors;
  }
  
  // reiniciar los errores mostrados
  resetValidator = () => {
    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError
    }
  }
  
```









<br>



### Utilizar los validaciones dentro del Signup



Ahora vamos a utilizar estas validaciones que hemos creado en el `Validator`, dentro del Signup.





##### `scripts/Signup.js`

###### `handleEmailInput()`

```js
  handleEmailInput = (event) => {
    const email = event.target.value;
    
    // console.log('email', email);  <-- REMOVE

    // validar el email										
    validator.validateValidEmail(email);
    const errorsObj = validator.getErrors();

    // si el nombre de email es valido
    if (!errorsObj.invalidEmailError) { 
      // comprueba si el email es único
      validator.validateUniqueEmail(email)
    }

    // mostar los errores si hay algunos
    this.setErrorMessages();
  }
```





<br>



##### `scripts/Signup.js`

###### `handlePasswordInput()`

```js
  handlePasswordInput = (event) => {
    const password = event.target.value;

    // console.log('password', password);   //   <-- REMOVE

    // validar el password
    const repeatedPassword = this.repeatPasswordInput.value;
    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, repeatedPassword); 

    // mostar los errores si hay algunos
    this.setErrorMessages();
   }
```





<br>



##### `scripts/Signup.js`

###### `handleRepeatPasswordInput()`

```js
  handleRepeatPasswordInput = (event) => {
    const repeatedPassword = event.target.value;

   // console.log('repeatedPassword', repeatedPassword) //<-- REMOVE

    // validar el repeatedPassword (confirmación de contraseña)
    const password = this.passwordInput.value;
    validator.validatePasswordRepeat(password, repeatedPassword);
    validator.validatePassword(password);
	
    // mostar los errores si hay algunos
    this.setErrorMessages();
  }
```







### Actualizar el método `saveData`



Actualizar el método `saveData` para reiniciar los errores despues de cada envío del formulario.

##### `scripts/Signup.js`

###### `saveData()`

```js
  saveData = (event) => {
    
    //	...
    
    //		...
    
   // reiniciar el objeto con los errores, antes del próximo Singup
    validator.resetValidator();
  }
```







### Crear el método `setErrorMessages`



Tambien tenemos que crear el método `setErrorMessages` para mostarar los mensajes guardados en el `validator`, al usuario.



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
```







<br>





### Crearemos la clase Login, para la pagina Login





Ahora crearemos la clase `Login` que utilizaremos para manejar errores y validar los inputs, en la pagina `login.html`

para el login (para iniciar sesión).







Primero , conseguiremos todos los elementos del `<form>`

 y también el botón  y  el  `div.message-container`.





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





Segundo, tenemos que registrar un evento (un EventListener ) y una función para este `form`, 

para gestionar el envio de los datos (durante del evento "submit")





```js
class Login {
	//	...
  
  //		...
  
  // gestionar el envio de los datos (el evento "submit")
    submit = (event) => {
      // Cuando el evento ocurre, cancelalo y no recargue la pagina
  		event.preventDefault();
      
      //recoger los datos de nuestra "base de datos" de localStorage
    	const usersDB = db.getAllUsers();

	    const email = this.emailInput.value;
  	  const password = this.passwordInput.value;
      
      // Intentar encontrar el usuario
    	// `find` devuelve el primer elemento que que cumplen la expresión
    	// (y no un array de todos los elementos)
      const user = usersDB.find( userO =>  {
        if (userO.email === email && userO.password === password) {
          // si el email y el password coinciden con un usuario existente
          // devuelve este objeto
          return true;
        }
      });
      
      // muestra el mensaje a usuario
      this.showMessage(user);
      
    }
    
    
    
    // mostrar mensaje de error o mensaje de éxito
    showMessage = (user) => {
      // elimina el mensaje previo
      this.messageContainer.innerHTML = '';
      
      const message = document.createElement('p');

      if (user) { 
        // si el usuario inicia la sesion con éxito
        // agrega la clase para cambiar el color y sobrescribir el estilo anterior
        message.classList.add('correct-message');
        message.innerHTML = `hola, ${user.email}`
      } else {
        // si el inicio de sesión no se ha realizado correctamente
        message.innerHTML = "el email y/o password son erróneos"
      }
      
      this.messageContainer.appendChild(message);
      
     // redirigir el usuario, si la sesion fue iniciada con exito
     if (user) this.redirect();
    }
  
   // redirigir el usuario, 
   redirect = () => {
     setTimeout( () => location.assign('dashboard.html'), 2000)
   }
}

// registrar el eventListener   	
// para escuchar los clics en el boton
login.loginButton.addEventListener("click", login.submit);
```







<br>





todavia nos falta



### Conseguir los datos de la API 

### y mostrarlos en la pagina dashboard



El ultimo paso es crear una función para hacer llamadas a la API, para coger los objetos con los datos y  mostrar estos datos en la pagina `dashboard.html`





##### `scripts/pokeApiService.js`

```js
'use strict';

const getPokemons = () => { 

  // conseguir el elemento padre, para agregarle los pokemons
  const section = document.querySelector('.pokemon-list');

  // hacemos un loop para hacer multiples llamadas a la API, para conseguir 21 pokemon
  for (let i = 0; i < 21; i++) {
    // cada pokemon lleva su propio indice, y para solicitarlo tenemos que añadir 
    // el indice al fin del URL de la API
    fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
    // cada llamada a API (operación asíncrona) va a deveolver una respuesta, un promise
      .then(function (response) { 
        // convertiremos la respuesta a un objeto legible, 
        // porque los datos de la respuesta están codificados    -> `response.body`
        return response.json(); 
        // response.json() es una operación asíncrona y devuelve un promise
      }) 
      // encadenamos otro `then` para manejar el segundo promise 
      .then(function (pokemon) {
        // con el resultado del promise, recibimos cada uno de los pokemons
        console.log(pokemon);

        // para cada pokemon crearemos un elemento nuevo en la section .pokemon-list
        const article = document.createElement('article');
       
        // cada `article` con el pokemon va a contener una imagen y h3 con el nombre
        article.innerHTML = `
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
          <h3>${pokemon.name}</h3>
        `

        // aqui agregamos el elemento a la section .pokemon-list
        section.appendChild(article);
      })
      .catch(function (error) {
        return error;
      })
  }
}

getPokemons();
```





<br>





#### bueno chicos, lo unico que quiero decir por el fin es, ahora es vuestro turno



## :confetti_ball:  🎉