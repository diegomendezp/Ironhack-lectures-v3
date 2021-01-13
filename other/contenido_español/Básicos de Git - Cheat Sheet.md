# Básicos de Git

## Comandos de Git - Los apuntes (Cheat sheet)



<br>



Las palabras dentro los `< >` son el sintaxis usual de documentación. Es decir en lugar de `<nombre de cosa>` tenéis que poner el valor, sin los símbolos `<` o `>`.



### Clonar los repositorios del GitHub

```bash
# FORK
# Primero, haz Fork del repositorio cual quieres clonar.
# Este paso va a crear una copia del repositorio en su GitHub, 
# esto creará una copia en su GH que te permitirá cambiar el codigo y # actualizar su version de codigo
# ...
# ...

# CLONAR
# Copia la url de tu copia del repositorio y ejecuta el comando
git clone <repository url>

# ABRA EL PROYECTO
cd <project folder name>

code .

```





<br>



### Crear commits

```bash
# git add <filename>
git add .


git status


git commit -m 'Initial commit'


git status


git push origin <branchname>
```



<br>



### Inicializar git en un nuevo proyecto

```bash
# Inicializar el repositorio git en el proyecto corriente
# Mientras estar en el archivo raíz del proyecto, ejecuta el comando
git init

# Enumera todos los archivos del directorio, esto también nos debería mostrar el directorio .git
ls -a



# Crea una conexión entre el repositorio local y el repositorio en GitHub
git remote add origin <github repo url>

# Comprueba la lista de repositorios conectados al repositorio local
# Esto debería mostrar el repositorio al que acabamos de conectar
git remote -v



# Comprueba el estado de los archivos del proyecto y de la área "stagging".
git status

# Añade todos los archivos (rojos) a la área "stagging" (prepara archivos para el próximo commit)
# git add <filename>
git add .

# Comprueba el estado de los archivos y de la área "stagging" (los archivos añadidos ahora están en verde).
git status

# Crea un commit (la copia de los cambios hechos)
git commit -m 'Initial commit'

# "Stagging" área está clara ahora
git status


# Empuje el código al repositorio en GitHub
git push origin <branch name>


# Enumera el historial de todos los commits existentes
git log


# Ten en cuenta que cada commit tiene su identificador hash
# Los identificadores hash se utilizan para desplazarse al cualquier commit en historial (Esto se hace usando "HEAD" para moverse al commit específico)
```



<br>



### Conectar el repositorio local al repositorio remoto (en GitHub)

```bash
# Primero, crea el nuevo repositorio en el github.com
#  ...
#  ...

# Crea una conexión entre el repositorio local y el repositorio en GitHub
git remote add origin <github repo url>

# Comprueba la lista de repositorios conectados al repositorio local
# Esto debería mostrar el repositorio al que acabamos de conectar
git remote -v

```