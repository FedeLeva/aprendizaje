# MongoDB
- Es una base de datos que puede trabajar en la nube.
- [info](https://www.mongodb.com/)
- Tiene un plan gratis.
- Base de datos no relacional y que nos permite trabajar con la nube sin necesidad de hacer mayores instalaciones en nuestro equipo.

### Pasos en el sitio web 
[sitio web](https://www.mongodb.com/)
1. Nos regristamos (Que es gratis)
2. Creamos nuestro Cluster
- Puedes dejar todo por defecto para que no exitan cargos monetarios en tu cuenta
- El plan gratuito está limitado a un Cluster
- Pueden cambiar el nombre del Cluster.
3. Esperar(crear el cluster lleva algunos minutos)
4. Crear una coleccion(collection)
   1. Le das a add my own data
   2. Nos pedira el nombre de la base de datos (en un cluster puede haber varias BD ojo).
   3. Nos pedirá el nombre de la colección  que seria como el nombre de una tabla
:::tip 
En este ejemplo:

Nombre de BD: veterinaria

Nombre de colección: mascotas
:::

:::tip Explicacion como si fuera una BD relacional
- Seria como añadir una tabla a la base de datos veterinaria, en este ejemplo se creo la colección (tabla) mascotas para almacenar los datos de las mascotas.
- Una Base de datos puede tener muchas colecciones (tablas)
:::

5. Seleccionamos la coleccion mascota
6. Le damos a insert document
  - Equivalente a añadir una fila a la tabla
  - Cada fila es un objeto donde cada propiedad es como la columna de la tabla
  ```js
  {"_id":{"$oid":"620a5b245908e57941d2954c"},"nombre":"rex","descripcion":"descripcion de rex"}
  ```
   :::tip Explicacion como si fuera una BD relacional
- En una colección se guarda un conjunto de objetos(documentos)
- Los objetos pueden tener las mismas propiedades o diferentes.
- En este caso será igual(recomendado) para mantener la consistencia.
- Colección = Tabla
- Al insertar un documento = Insertar una fila 
- Documento = fila
- La Fila = Es un objeto
  :::
7. Creamos un usuario
- Security – DataBase Access
- Creamos un usuario
:::tip ejemplo 
Usuario: usuarioVeterinaria

Contraseña: Thw7Mk9CpQXoEjvY
:::
8. Configurar el acceso a la BD(Firewall)
- En Security – Acceso a la Red
9. Conseguir una Uri 
   1. En Clusters/Base de datos  le das a Connect.
   2. Connect your app (Conectarnos por la aplicación).
   3. Copiamos el String connection  y la ponemos en una variable const con la interpolación (en un archivo js)
   4. En el string remplazamos:
```js
 /*
  <usuarioNOMBREBD> por un usuario que tenga acceso a la BD
   <password> por la contraseña del usuario
   <dbname> o myFirstDatabase por el nombre de la base de datos.
 */
```
```js
 const user = "usuarioVeterinaria";
const password = "Thw7Mk9CpQXoEjvY";
const nombreBD = "veterinaria";
const uri = `mongodb+srv://${user}:${password}@mascota.xcibc.mongodb.net/${nombreBD}?retryWrites=true&w=majority`;
```
## Mongoose
-  Es una forma sencilla de establecer conexión con MongoDB.
- Se instala en node.js
- [info](https://mongoosejs.com/docs/index.html)

Lo instalamos en el proyecto:
```powershell
npm install mongoose
```
:::tip Para conectarnos a una BD
Necesitamos:
- Un usuario
- Una contraseña
- Una uri  = Una url para establecer la conexion
:::

Nos conectamos a la BD creada con la Uri:
:::tip 
La uri la genera MongoDB , hay que buscarla en la configuración 
:::
```js
//index.js
// Conexion a BD
const mongoose = require('mongoose');
const user = "usuarioVeterinaria";
const password = "Thw7Mk9CpQXoEjvY";
const nombreBD = "veterinaria";
const uri = `mongodb+srv://${user}:${password}@mascota.xcibc.mongodb.net/${nombreBD}?retryWrites=true&w=majority`;
mongoose.connect(uri)
.then(() => console.log("Base de datos conectada"))
.catch( e => {console.log(e)})

```
:::warning seguridad 
Usamos variable de entorno  para ocultar la contraseña y el usuario.
:::

## Schema
- Se debe crear un modelo(esquema) por cada colección(tabla) para poder especificar el nombre de cada propiedad y su tipo de valor(tipo de dato) para cada objeto.

- Es para especificar la estructura de la colección para luego poder manipular los objetos que contiene la colección.

1. En el proyecto generamos una carpeta llamada models
2.  En dicha carpetamos , creamos mascota.js donde va a contener el esquema.
- Se hace un esquema (por lo tanto, un nuevo archivo.js) por cada colección.
```js
// models/mascota.js
const mongoose = require('mongoose');
const    { Schema } = mongoose;
// Definiendo el esquema:
const mascotaSchema = new Schema({

    // nombre de propiedad : tipo de valor ,  nombre de propiedad : tipo de valor
    // Como la ID se genera sola, no se especifica
    nombre: String ,
    descripcion: String
})

// Creamos el esquema/modelo de mascota 
// model(nombre esquema , esquema)
const Mascota = mongoose.model('Mascota' ,mascotaSchema );

// Exportamos el esquema/modelo

module.exports = Mascota;

```
3. En la carpeta router/Mascota.js
```js
// router/Mascota.js
const express = require('express');
const router = express.Router();
 // Importamos el esquema
 const Mascota = require('../models/mascota');

```
## find()
- Sirve para leer una colección que contiene varios documentos.
- Trae los documentos de una colección.
- La función la implementa un modelo.
- Al trabajar con una BD, utilizamos funciones async await para implementarla.
- [mas info](https://mongoosejs.com/docs/api.html#model_Model.find)
:::tip Equivalencia a BD relacionales
- Es como hacer un Select * from tabla
- Donde la tabla es la colección
- Y los resultados(filas) que genera la consulta , los guarda en un array.
:::
```js
// router/Mascota.js
const express = require('express');
const router = express.Router();
 // Importamos el esquema
 const Mascota = require('../models/mascota');
router.get('/', async (req, res) => {
    try {
        // Busca la coleccion de mascota y nos devuelve todos sus documentos.
        const arrayMascotasBD =  await Mascota.find();
        console.log(arrayMascotasBD);
         // listaMascotas = Array
    res.render("mascotas", { listaMascotas: arrayMascotasBD}

     )
    } 
    catch(e) {
       console.log(e);
    }
    

   
})

module.exports = router;

```