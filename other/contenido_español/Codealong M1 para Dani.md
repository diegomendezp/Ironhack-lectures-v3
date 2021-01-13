## Codealong M1 para Dani



**Cuando:** Seria en jueves por la mañana 



## Los puntos mas importantes de enseñar:

- como hacer preventDefault en el formulario y como se pasan los datos.

- como crear clase User y Validator

- como grabar en localStorage y como traer los datos desde el localStorage, cuando hadcemos el login para que pueden guardar en el localStorage el usuario actual (para que enseña al usuario : Hola Juan ... etc. )



- mostrar el `fetch`  de los datos, hacer un `fetch` (coger los datos de un API)





https://github.com/juliacanas/o-click



https://github.com/javirep/BE-HOPPY



https://github.com/esthersinnick/IH-m1-project-codealong





class

Validator -  para validar los errores

User - para crear nuevos usuarios





## M1 guidelines 



El cliente pide tener una home del sitio que presente la idea del sitio en sí, de forma moderna y elegante.

Desea que el sitio cuente con una sección que permita registrar a los usuarios mediante un formulario pidiendo los datos típicos en una registración.

Además requiere que el sitio cuente con una sección que permita que un usuario se "loguee" en el sitio mediante un formulario.

Cada campo de ambos formularios debe validar, por ejemplo, que el email tenga formato de email, que todos los campos estén completos, que el campo teléfono (de existir), tenga sólo números, etc. Se deben considerar todos los posibles casos, es decir, tenemos que ponernos en lugar del usuario.
Para las validaciones debemos tener una o más Classes de validación y utilizar los métodos de las mismas para validar cada campo.

Los datos del usuario serán guardados en localstorage en formato JSON. Para esto tenemos que usar stringify al guardar y parse al recuperar. Ejemplo:

var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));

El cliente pide contar con una sección con al menos 8 preguntas frecuentes referentes al funcionamiento / idea de su sitio. Para esta sección debemos usar animaciones o transiciones en CSS y JS.

Además necesita que se pueda navegar el sitio entre las 4 páginas de manera fluida.

El estilo del sitio debe ser común a las 4 páginas.

El cliente pide que las páginas se vean de forma cómoda en dispositivos móviles.

El sitio debe conectarse con una API de la lista (u otras) y mostrar algún tipo de información de forma dinámica, utilizando fetch:

- [StarWars API](https://swapi.co/)
- [Pokemon API](https://pokeapi.co/)
- [Beers API](https://punkapi.com/)
- [Beers API2](https://www.openbrewerydb.org/)
- [Studio Ghibli API](https://ghibliapi.herokuapp.com/)
- [Images of dogs](https://dog.ceo/dog-api/)
- [Chuck Norries Jokes](http://www.icndb.com/api/)
- [Magic the Gathering](https://docs.magicthegathering.io/)
- [Ricky Morty](https://rickandmortyapi.com/documentation/#introduction)

Más APIs públicas: https://rapidapi.com/collection/list-of-free-apis / https://github.com/public-apis/public-apis

