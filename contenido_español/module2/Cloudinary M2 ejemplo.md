# Cloudinary M2 ejemplo



Que es cloudinary?



cloudinary es un CDN, content delivery network,una red de servidores alrededor del mundo utilizada para subir y descargar archivos rapido desde cualquier lugar en el mundo.



Lo que nosotros vamos a hacer ahora es enseñar un ejemplo simple de como configurar y conectar a cloudinary para poder subir archivos como imagenes a cloudinary. 



Esto elimina la necesidad de manejar subida de archivos en nuestro servidor , y en relación con la velocidad de solicitudes es much mas rapido



<br>



### 1. Primero tenemos que crear una cuenta gratis en Cloudinary:

Register for free here: <https://cloudinary.com/users/register/free>





<br>



### 2. El proximo paso es instalar los paquetes necesarios para conectar al Cloudinary y parsear (convertir) las solicitudes llevando los archivos.

Son los 3 paquetes:



* [cloudinary](https://www.npmjs.com/package/cloudinary)
* [multer-storage-cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary)
* [multer](https://www.npmjs.com/package/multer) => parseador/convertidor... multer convierta el body de cada solicitud que contiene datos de tipo `multipart/form-data` , el tipo de datos seteado por los formularios de HTML por defecto, durante del envío.



```bash
npm install cloudinary multer-storage-cloudinary multer --save
```





### 3. El siguente es Configurar Cloudinary y vincular lo con el multer:

In your terminal:

```
mkdir config 
touch config/cloudinary.js
```

In config/cloudinary.js

```js
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'wd-ft-06-2020',
  allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],
  transformation: [{ width: 500, height: 500, crop: 'limit' }]
});
 
const parser = multer({ storage: storage });

module.exports = parser;
```





<br>



### 4. Debemos configurar el formulario y poner el tipo de encripción correcto y el tipo de campo

* Add the attribute ```enctype="multipart/form-data"``` to your form   

* Add the attribute ```type="file"``` to the input field that will hold the image.

  