# M1 - Deployment (ES)



## Actualizar el proyecto y guardar los ultimos cambios

Antes de desplegar nuestro proyecto, primero guardaremos los ultimos cambios con una commit y subiremos los cambio al GitHub (`git push origin master`).



Desde le terminal, mientras estar ubicado dentro de la carpeta raiz de su proyecto , ejectue los siguientes comandos:

```bash
git add .

git commit -m "Deploy the app with GitHub Pages"

git push origin master
```





<br>





##  Crear nueva rama `gh-pages` en su proyecto



Desde el terminal, mientras estar ubicado dentro de la carpeta raiz de su proyecto ejecute el siguiente comando para crear nueva rama `gh-pages`:

```bash
git checkout -b gh-pages
```



Esto creará una nueva rama en nuestro proyecto (repositorio local) y mueve el editor a la nueva rama. 

Esta rama servirá para desplegar nuestro proyecto y tenerlo en vivo en la web.



Para ver todas la ramas que tiene el proyecto:

```bash
git branch
```



<br>



### Subir nueva rama al GitHub





Para subir la nueva rama recien creada en el repositorio local, desde el terminal ejecute el siguiente comando:

```bash
git push origin gh-pages
```







### Activar GitHub Pages (deploy live)

El paso final para desplegar el proyecto es activar la opción de GitHub Pages. Para hacerlo, vaya a la página del repositorio en GitHub y abra el panel de Ajustes (**Settings**).



![img](https://camo.githubusercontent.com/895660a79da8f455268ec78c47384c626bb97f6d/68747470733a2f2f692e696d6775722e636f6d2f4c4159676657322e706e67)





<br>



1. Una vez allí, desplácese hacia abajo hasta la parte **GitHub Pages**.

2. Haga clic en el menú desplegable bajo el título **Source**.

3. Seleccione la fuente para ser la rama `gh-pages`, haciendo clic en la rama `gh-pages`. 

4. Esto publicará el proyecto y dará un enlace que se puede utilizar para visitar y ver la versión en vivo del proyecto.

   

   Normalmente, si la rama `gh-pages` fue creada de antemano, los 4 pasos anteriores se serán hechos automáticamente.

   



![](https://i.imgur.com/stNV8Sq.png)



<br>



### Continuar trabajando en el proyecto desde la rama `master`



Después de hacer el deploy, antes de continuar con el proyecto, cambie a la rama `maestro`. La rama `gh-pages` sólo se utilizará para desplegar el proyecto al GitHub pages y tenerlo en vivo.



Desde el terminal, mientras estar ubicado dentro de la carpeta raiz de su proyecto, ejecute el siguiente comando para cambiar a la rama `master`:



```bash
git checkout master
```



Después de este paso puede continuar trabajando en el proyecto.



<br>



### Subir el proyecto actualizado de nuevo al GitHub Pages



Cada vez que desee subir/desplegar las actualizaciones que realizó en el proyecto debe seguir los siguientes pasos:



1. Guarde todos los cambios y cree una nueva commit:

   ```bash
   git add .
   
   git commit -m "Deploy the app with GitHub Pages"
   
   git push origin master
   ```

   

2. Una vez hecho, mueva a la rama `gh-pages`:

   ```bash
   git checkout gh-pages
   ```

   

3. Trae todos los cambios (incluyendo la commit nueva) de la rama `master` a la rama `gh-pages`:

   ```bash
   git merge master
   ```

   Esto copiará todos los cambios que existen en la rama `master` y los pegará en la rama  en la que estamos actualmente `gh-pages`.



4. Sube la rama actualizada (`gh-pages`) al GitHub. 

   ```bash
   git push origin gh-pages
   ```

   Esto desplegará el nuevo código y lo hará en vivo.



5. Después de hacer el `push` del código nuevo, antes de continuar con el proyecto, cambie a la rama `master`. 

   ```
   git checkout master
   ```

    La rama `gh-pages` sólo se utilizará para desplegar el proyecto al GitHub pages y tenerlo en vivo.



<br>



#### Eso es todo 🎉👩‍💻👨‍💻