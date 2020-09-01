## Hello Ironhack react LAB



Los pasos para configurar todo:

- Instalar todos los paquetes que vienen desde el `package.json` corriendo `npm i` desde la carpeta raiz del LAB.
- Instalar los paquetes de React : `npm i react@16.3.2 react-dom@16.3.2`
- Crear las carpetas `dist` y `src` dentro de la carpeta raiz.
- Crear archivo `index.html` dentro de la carpeta `public` .
- Crear el root y vincular el `dist/bundle.js` dentro del archivo `index.html` asi:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">  <!-- Load the font -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet">  <title>LAB - Hello Ironhack</title>
</head>
<body>
  <!-- Root div where we will inject the DOM elements created by React - in `src/index.js`  -->
  <div id="root"></div>  <!-- webpack created bundle - made from all `.js` files in out project -->
  <script src="./../dist/bundle.js"></script>
</body>
</html>
```

- Crear los siguientes archivos dentro de la carpeta `src` :

​    \- `index.js` donde vincularemos React con el DOM
​      y
​    \- `App.js` que va a ser el componente principal.

- En `index.js` deberíamos inyectar el código de React al DOM, asi:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';// Here we inject all of the DOM elements created by React,
// starting with the root component <App />
ReactDOM.render(<App />, document.getElementById('root'));
```

- Crear nuestro componente escribiendo el código en `src/App.js`
- Para correr el servidor utilizaremos el comando `npm run webpack` .

(editado)