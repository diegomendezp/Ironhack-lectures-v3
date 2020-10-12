**1. Cual es la differencia entre `==` y `===` en JavaScript**



```js
// Cual es la diferencia entre == y === en JavaScript.

const a = 5 == "5";

const b = 5 === "5";

console.log(a);
console.log(b);

```







 **2. Que imprimirá el siguente código ?** 

```js
// Que imprimirá el siguente código ? 

const objA = { num: 42 };

const objB = objA;

objB.num = 90;

console.log(objA); // ??
```



Imprimirá ` { num: 90 }`.

**Por que ?**  Porque los objetos en JavaScript nunca se copian,   lo que se copia entre los variables es , su dirección en la memoria. Estas dos variables apuntan al mismo objeto.













**3. Que es un Closure (o una clasura) en JavaScript, y puedes escribir y crear un Closure ?**





Closure es una función que guarda las referencias que vienen de los ámbitos superiores de sus padres. 



```js
// Closure en JS es una función que guarda las referencias que vienen 
// de los ámbitos/contextos superiores de sus padres. 

function outter () {
  
	var secret = 'abc123';
	
  return function () { // la función interna que se devuelve
		return secret;		
	}
}


inner = outter();
inner();
```















**4. Crea la función nombrada `multiply` que funcione correctamente cuando se ejectuta con el siguiente código,**



```js
// Crea la función nombrada `multiply` que funcione correctamente cuando se
// ejectuta con el siguiente código,

console.log(  multiply(2)(3)(4)  );   // output : 24
console.log(  multiply(3)(10)(10)  );   // output : 300


function multiply () {
  // ...
}
```







La solucion es usar el patron de Closure, y devlover una función desde otra.

Esto causará que se guardan los valores anteriores en Closure de cada funcion devuelta.

```js
function multiply (a) {
  
  return function (b) { // anonymous function - Closure : a 
    
    return function (c) { // anonymous function  - Closure : a , b
      
        return a * b * c;
    };
  };
}

```







**5. Que es el valor especial THIS (valor especial),  donde la encontramos y donde se usa ?.**



La palabra clave **`this`** es valor especial encontrado en las funciónes de JavaScript. 

Nunca lo encontraremos en otros lugares como objetos, arrays, pero solo en las funciones

 y representa el contexto desde cual la función fue invocada.



```js
const obj = {
  name: 'Bob',
  age: 42,
  print: function() {
		console.log( 'this: ', this);
  },
};

obj.print();

// `this` representa el valor de contexto desde cual la funcion fue invocada. 
// En este caso la funcion fue invocada desde el objeto obj.


```







**6.Que imprimirá el siguente código ?**



```js
// Que imprimirá el siguente código ? 

for (var i = 1; i < 5; i++) {
    setTimeout( () =>  { 
      console.log(i)
    }
    , 1000 );
}
```





> 5, 5, 5, 5





**Porque ?**

El bucle `for` ejecuta primero, y guarda el valor de contador dentro de la varialbe `var i`. 

Debido al contexto de la variable `var` , el valor de la variable `i` se guarda en el contexto global. 

Cuando el bucle termina y cuando empiezan los `setTimeout`s el valor de la variable ya es 5,

y luego los `setTimeout`s simplemente imprimirán el valor de la variable `i` del contexto global.





**Como arreglarlo ?**





1. Usar la variable `let` , que crea nuevo contexto para cada iteración de bucle.

```js
 for (let i = 1; i < 5; ++i) {
  setTimeout( () => { 
    console.log(i)
  },
	1000) 
}
```



2. Crear una función que recibe el valor como argumento y ejecutar la función durante de cada iteración:

```js
function doSetTimeout(i) {
  setTimeout( () => { 
    console.log(i); 
  }, 1000 );
  
}

for (var i = 1; i < 5; ++i) {
  doSetTimeout(i); 
}
```



