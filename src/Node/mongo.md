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
- Se debe crear un esquema por cada colección(tabla) para poder especificar el nombre de cada propiedad y su tipo de valor(tipo de dato) para cada objeto.
- Es para especificar la estructura de los documentos de la coleccion para luego poder manipular los objetos que contiene la colección a traves del modelo.
-  Si no se respeta la estructura  del esquema a la hora de crear un documento , se genera un error

:::warning  El modelo y el esquema no son lo mismo
  - esquema: Especifica la estructura de los documentos de la coleccion 
  - modelo: Se crea a partir del esquema y contiene los metodos para manipular la coleccion (leer , borrar , modificar , crear)
:::


1. En el proyecto generamos una carpeta llamada models
2.  En dicha carpetamos , creamos mascota.js donde va a contener el esquema.
- Se hace un esquema (por lo tanto, un nuevo archivo.js) por cada colección.
```js
// models/mascota.js
const mongoose = require('mongoose');
const    { Schema } = mongoose;
// Definiendo el esquema:
//El esquema es una nueva instancia de Schema
// new Schema({ campos del documentos})
const mascotaSchema = new Schema({

    // nombre de propiedad : tipo de valor ,  nombre de propiedad : tipo de valor
    // Como la ID se genera sola, no se especifica
    nombre: String ,
    descripcion: String
})

// Creamos el modelo de mascota 
// model(nombre del modelo/coleccion , esquema)
const Mascota = mongoose.model('Mascota' ,mascotaSchema );

// Exportamos el modelo

module.exports = Mascota;

```
3. En la carpeta router/Mascota.js
```js
// router/Mascota.js
const express = require('express');
const router = express.Router();
 // Importamos el modelo
 const Mascota = require('../models/mascota');

```
## find()
- Es un metodo del modelo
- Sirve para leer una colección que contiene varios documentos.
- Trae los documentos de una colección.
- La función la implementa un modelo.
 :::tip recordatorio  
 - El nombre del modelo es el nombre de la coleccion
 :::
- Al trabajar con una BD, utilizamos funciones async await para implementarla.
- [mas info](https://mongoosejs.com/docs/api.html#model_Model.find)
:::tip Equivalencia a BD relacionales
- Es como hacer un Select * from tabla  (donde tabla es el nombre del modelo Ej. select * from nombreModelo)
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

## Varibles de entorno
- Son para ocultar información sensible.
- Se configuran en el servidor.
- [Utilizamos este modulo](https://www.npmjs.com/package/dotenv ) 

```powershell
npm install dotenv
```

### Configuracion
1. Importalo
```js
require('dotenv').config()
```
2. Crear archivo .env 
- Si se desea cambiar el  nombre del archivo, se deberá configurar el path (ver documentacion)
- En este archivo van las variables de entorno
- Le podés asignar un valor (PORT = 3001) o dejar que el hosting le asigne un valor (USUARIO = xxx)
```env
PORT=3001
USUARIO=xxx
PASSWORD=xxx
DBNAME=xxx

```




:::warning
Las variables de entorno se generan y configuran en el hosting
:::

3. Para acceder a una variable de entorno:
```js
process.env.NOMBREVARIABLE
```
Ejemplo: En un entorno local
```js
// index.js
const express = require("express");
var path = require('path');
const app = express();

require('dotenv').config()
const port = process.env.PORT || 3000

```

```env
PORT=3001
```

Otro Ejemplo: 
```env
PORT=3001
USER=usuarioVeterinaria
PASSWORD=Thw7Mk9CpQXoEjvY
BD=veterinaria
```

```js

//index.js
// Conexion a BD
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@mascota.xcibc.mongodb.net/${process.env.BD}?retryWrites=true&w=majority`;
mongoose.connect(uri)

```

:::warning
- Todos esos Ejemplos tienen las variables de entorno en un entorno local (están ubicada en nuestra PC).
- el archivo .env se debe ignorar junto con el node_modules en git.
:::
Ejemplo en un entorno de producción (subido a un hosting):
 1. Se crean las variables (como si fuera un .env) en el hosting (Configurar el hosting)
2. el index.js sigue igual , no se modifica

```js
//index.js
// Conexion a BD
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@mascota.xcibc.mongodb.net/${process.env.BD}?retryWrites=true&w=majority`;
mongoose.connect(uri)

```
3. Se sube el proyecto al hosting ignorando el archivo.env 

## bodyParser
- Lo Tenemos que instalar para utilizar x-www-form-urlencoded
- Sirve para leer el formulario (Leer el cuerpo del body)
- [modulo](https://www.npmjs.com/package/body-parser)

1. Lo instalamos:
```powershell
npm i body-parser
```
2. Lo configuramos 

```js
// index.js
const express = require("express");
// Importamos bodyParser
const  bodyParser = require('body-parser')
var path = require('path');
const app = express();
// Lo configuramos
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
require('dotenv').config()
const port = process.env.PORT || 3000

```

## Crear

1. Creamos el archivo crear.ejs en la carpeta de vistas

:::tip
- Los name de los inputs deben coincidir con el nombre de las propiedades del documento(objeto) a crear(MONGODB)
- Para ver si coincidi eso , busca en el esquema
```js
const mascotaSchema = new Schema({

    // nombre de propiedad : tipo de valor ,  nombre de propiedad : tipo de valor
    // Como la ID se genera sola, no se especifica
    nombre: String ,
    descripcion: String
})

```
Como se puede ver en el esquema hay dos propiedades , nombre y descripción.
:::

```js
<%- include("template/cabecera" , {title : "Crear nuevo mascota"})   %>

    <div class="container">
        <h1>Crear</h1>
        <form action="/mascotas" method="POST">
         <input
           type="text"
           placeholder="Agregar nombre"
           class="form-control my-2"
           name="nombre">
            <input
           type="text"
           placeholder="Agregar descripcion"
           class="form-control my-2" 
           name="descripcion">
           <div class="d-grid gap-2">
            <button class="btn btn-success" type="submit">Agregar</button>
          
          </div>
         
          </div>
        </form>
    </div>
    <%- include("template/footer")    %>

```
2. mascotas.ejs
```js
<!-- views/mascotas.ejs -->
<%- include("template/cabecera" , {title: "titulo"})    %>
 <div class="container">
   <h1>Crud Mongo</h1>
  <div class="d-grid gap-2">
    <a type="button" class="btn btn-success  my4" href="mascotas/crear">Crear nueva mascota</a>
    </div>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
            <% if (listaMascotas.length > 0) { %>
              
                <% listaMascotas.forEach(mascota => { %>
                    <tr>
                        <th scope="row"><%= mascota.id  %> </th>
                        <td><%= mascota.nombre  %> </td>
                        <td><%= mascota.descripcion  %> </td>
                        <td>@mdo</td>
                    </tr>
                <% }) %> 
        
            <% } %>
       
          
        </tbody>
      </table>
   
   
 </div>

<%- include("template/footer")    %>

```

:::tip 
- Ahora vamos a trabajar con el verbo POST
- Nos permite recibir información 
:::

router/Mascota.js
:::tip 
La información se recibe por el body del requerimiento.
:::

```js
// Mascota.js 
router.get("/crear" , (req, res) => {
    res.render('crear');
})

router.post('/' , async(req,res) => {
    const body = req.body;
    console.log(body);
})

module.exports = router;

```
### Guardar/insertar documento - metodo 1:
- [info](https://mongoosejs.com/docs/models.html)

:::tip Observacion 
- La nueva instancia del modelo contiene el documento que se va a guardar
- Lo que recibe en el momento de la instancia es el documento(objeto) que se va a  crear/insertar en la BD
- La instancia tiene acceso al metodo save() para guardarse en la BD
- el metodo save() crea la coleccion (si no existe) y el documento
:::


:::tip 
Se crea utilizando el modelo

Si no se respeta la estructura del  esquema cuando se crea el objeto , se genera un error
:::
```js
 const Mascota = require('../models/mascota');
router.post('/' , async(req,res) => {
    const body = req.body;
    try {
        // Creamos el documento/objeto
        // const variable = new nombreesquema(objeto/documento)
       const mascotaDB = new Mascota(body);
       // Lo guardamos en la base de datos
       await mascotaDB.save();
    } catch(e) {
        console.log(e)
    }
    console.log(body);
})

```
:::tip
usamos redirect(“ruta”) para direccionar a otra ruta.
:::
```js
router.post('/' , async(req,res) => {
    const body = req.body;
    try {
        // Creamos el documento/objeto
        // const variable = new nombreesquema(objeto/documento)
       const mascotaDB = new Mascota(body);
       // Lo guardamos en la base de datos
       await mascotaDB.save();
       res.redirect("/mascotas");
    } catch(e) {
        console.log(e)
    }
    
})

```
### Guardar/insertar documento - metodo 2:
- Se crea utilizando el modelo:
- Se crea y se guarda en la misma línea.


:::tip Observacion 
- Se utiliza el modelo y no una instancia de el.
- Lo que recibia la nueva instancia del modelo ( ejemplo anterior) , lo recibe el metodo create()

:::
```js
router.post('/' , async(req,res) => {
    const body = req.body;
    try {
    // Lo creamos y lo guardamos

        // Creamos el documento/objeto en MongoDB
        // create(objeto/documento)
     await Mascota.create(body)
      
       res.redirect("/mascotas");
    } catch(e) {
        console.log(e)
    }
    
})

```

## Get único documento
router/Mascota.js
- Utilizamos una url dinámica
- Impleméntamos en la ruta  ":nombrevariable"

:::tip Observacion 
 - el metodo findOne lo contiene el modelo no la instancia
 - el metodo findOne Devuelve una instancia del modelo con el documento seleccionado.
:::
```js

//  "/:nombrevariable"
//la ruta es /mascotas/nombrevariable
// Ejemplo: http://localhost:3001/mascotas/620a5b245908e57941d2954c
// El valor de nombrevariable es 620a5b245908e57941d2954c
router.get('/:id' , async(req, res) => {
   try {
       // req.params.nombrevariable para obtener el valor de dicha variable
       const id = req.params.id;
       // Buscamos la primera mascota que _id sea igual a la const id.
       // select * from Mascota(nombreModelo) where _id == id;
       const mascotaDB = await Mascota.findOne({_id : id})
       res.render('detalle' ,  {mascota: mascotaDB , error:false})
   } catch (error) {
    res.render('detalle' ,  {error:true , mensaje: "No se encuentra el id seleccionado"})
   }
})
module.exports = router;

```
views/detalle.ejs
```js
<%- include("template/cabecera" , {title : "Detalle de mascota" }) %>

    <div class="container">
        <h1>Detalle Mascota</h1>
        <% if (error) { %>
            <p>
                <%= mensaje %>
            </p>
            <div class="d-grid gap-2">
                <a href="/mascotas" class="btn btn-dark ">Volver a Mascotas</a>
            </div>
            <% } %>
                <% if (!error) { %>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Accion</th>
                            </tr>
                        </thead>
                        <tbody>


                            <tr>
                                <th scope="row">
                                    <%= mascota.id %>
                                </th>
                                <td>
                                    <%= mascota.nombre %>
                                </td>
                                <td>
                                    <%= mascota.descripcion %>
                                </td>
                                <td>@mdo</td>
                            </tr>




                        </tbody>
                    </table>

                    <% } %>
    </div>
    <%- include("template/footer") %>

```

views/mascotas.ejs
```js

<!-- views/mascotas.ejs -->
<%- include("template/cabecera" , {title: "titulo"})    %>
 <div class="container">
   <h1>Crud Mongo</h1>
  <div class="d-grid gap-2">
    <a type="button" class="btn btn-success  my4" href="mascotas/crear">Crear nueva mascota</a>
    </div>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
            <% if (listaMascotas.length > 0) { %>
              
                <% listaMascotas.forEach(mascota => { %>
                    <tr>
                        <th scope="row"><%= mascota.id  %> </th>
                        <td><%= mascota.nombre  %> </td>
                        <td><%= mascota.descripcion  %> </td>
                        <td> <a href="mascotas/<%= mascota.id  %>" class="btn btn-warning btn-sm">Editar</a></td>
                    </tr>
                <% }) %> 
        
            <% } %>
       
          
        </tbody>
      </table>
   
   
 </div>

<%- include("template/footer")    %>

```

## Delete documento
- Vamos a usar el verbo http Delete para eliminar.
- Una petición delete se crea por el método fetch ya que el formulario HTML no lo envia.
- Vamos a hacer una respuesta en json
:::tip Observacion 
 - el metodo findByIdAndDelete lo contiene el modelo no la instancia
:::
router/Mascota.js
```js
// mascotas/valordelavariableid
router.delete('/:id' , async(req , res) =>  {
    const id = req.params.id;
    try {
        // Buscamos la mascota por la _id y lo eliminamos
          // Si se elimina correctamente devuelve el documento que se borro
          // delete  from Mascota(nombreModelo) where _id = id
        const mascotaDB = await Mascota.findByIdAndDelete({_id : id});
      
        if (mascotaDB) {
               // respuesta en json 
               res.json( { estado : true , mensaje: "eliminado!"})
        } else {
              // respuesta en json
              res.json({estado: false ,mensaje: "fallo al eliminar!"})
        }
    } catch (error) {
         console.log(error)
    }
})
module.exports = router;

```
views/detalle.ejs
```js

<%- include("template/cabecera" , {title : "Detalle de mascota" }) %>

    <div class="container">
        <h1>Detalle Mascota</h1>
        <% if (error) { %>
            <p>
                <%= mensaje %>
            </p>
            <div class="d-grid gap-2">
                <a href="/mascotas" class="btn btn-dark ">Volver a Mascotas</a>
            </div>
            <% } %>
                <% if (!error) { %>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Accion</th>
                            </tr>
                        </thead>
                        <tbody>


                            <tr>
                                <th scope="row">
                                    <%= mascota.id %>
                                </th>
                                <td>
                                    <%= mascota.nombre %>
                                </td>
                                <td>
                                    <%= mascota.descripcion %>
                                </td>
                                <td> <button  id="btnEliminar" class="btn btn-danger btn-sm" data-id="<%= mascota.id %>">Eliminar</button></td>
                            </tr>




                        </tbody>
                    </table>

                    <% } %>
    </div>
    <%- include("template/footer") %>
    <script>
      const btnEliminar = document.getElementById("btnEliminar");
     btnEliminar.addEventListener("click", async () => {
         const id = btnEliminar.dataset.id;
         try {
             // Enviamos una solicitud delete por fetch (Si no especificamos que es delete se hace get)
             const data = await fetch(`/mascotas/${id}` , {method: 'delete'});
             const res = await data.json();
             if (res.estado) {
                //  Rediccionamos
                 window.location.href = "/mascotas"
             } else {
                 console.log(res);
             }
         } catch (error) {
             console.log(error)
         }
     })

    </script>

```
## Editar documento



- Utilizamos el metodo http put que generalmente se usa para modificar.
- Vamos a utilizar el body del requirimiento por lo tanto hacer los arreglos necesarios (ver el apartado de bodyparser)
- El form (HTML) solo soporta GET Y POST . Por lo tanto para usar put vamos a usar javascript(fetch) , igual que como Delete.
:::tip Observacion 
 - el metodo findByIdAndUpdate lo contiene el modelo no la instancia
:::
router/Mascota.js
```js
router.put('/:id' , async(req,res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        // Encontrar la mascota y modificarla
        // Parametros findByIdAndUpdate(id a buscar , los datos nuevos , una opcion para evitar un warning)
         // devuelve el documento modificado
         // UPDATE Mascota(nombreModelo) SET propiedad nombre = valor de propiedad nombre , propiedad descripcion = valor de propiedad descripcion    WHERE  _id = id a buscar; 
         // las propiedades nombre y descripcion se encuentran en el body (segundo parametro)(es un objeto)
       const mascotaBD = await Mascota.findByIdAndUpdate(id , body , {useFindAndModify: false});
      
       res.json({estado: true , mensaje:"Editado"});
    } catch (error) {
        console.log(error)
        res.json({estado: false , mensaje:"Fallamos"});
    }
})
module.exports = router;

```

:::tip
- Como es para manipular una BD usamos una función async await
- Para leer el body tmb debe estar configurado el bodyParser para JSON
:::

detalle.ejs
```js
<%- include("template/cabecera" , {title : "Detalle de mascota" }) %>

    <div class="container">
        <h1>Detalle Mascota</h1>
        <% if (error) { %>
            <p>
                <%= mensaje %>
            </p>
            <div class="d-grid gap-2">
                <a href="/mascotas" class="btn btn-dark ">Volver a Mascotas</a>
            </div>
            <% } %>
                <% if (!error) { %>
                    <form action="" id="formEditar" data-id="<%= mascota.id %>">
                        <input
                        type="text"
                        placeholder="Agregar nombre"
                        class="form-control my-2"
                        name="nombre" 
                        value = " <%= mascota.nombre %>"
                        id="nombreInput">
                         <input
                        type="text"
                        placeholder="Agregar descripcion"
                        class="form-control my-2" 
                        name="descripcion"
                        value = " <%= mascota.descripcion %>"
                        id="descripcionInput">
                        <div class="d-grid gap-2">
                         <button class="btn btn-warning" type="submit" >Editar</button>
                        </div>
                    </form>
                    <button  id="btnEliminar" class="btn btn-danger btn-sm mt-5" data-id="<%= mascota.id %>" type="submit">Eliminar</button>
                   

                    <% } %>
  
    <%- include("template/footer") %>
    <script>
      const btnEliminar = document.getElementById("btnEliminar");
     btnEliminar.addEventListener("click", async () => {
         const id = btnEliminar.dataset.id;
         try {
             // Enviamos una solicitud delete por fetch (Si no especificamos que es delete se hace get)
             const data = await fetch(`/mascotas/${id}` , {method: 'delete'});
             const res = await data.json();
             if (res.estado) {
                //  Rediccionamos
                 window.location.href = "/mascotas"
             } else {
                 console.log(res);
             }
         } catch (error) {
             console.log(error)
         }
     })
     const formularioEditar = document.getElementById("formEditar");

     formularioEditar.addEventListener('submit' , async (e) => {
         e.preventDefault();
         // Seleccionamos el input que contiene el nombre a traves de su atributo name
         //elements['valordelatributoname']
         const nombre = formularioEditar.elements['nombre'].value;
         const descripcion = document.querySelector('#descripcionInput').value;
         const id = formularioEditar.dataset.id;
         console.log(nombre , descripcion , id);
         try {
             // En el fetch enviamos informacion(JSON) a traves del body
            const data = await fetch(`/mascotas/${id}` , {method: 'put' , 
                headers: {
                    //Le indicamos que vamos a mandar un JSON
                    'Content-Type': 'application/json'
                } , 
                body: JSON.stringify({
                //Enviamos un JSON a traves del body
                // nombre = const nombre 
                //descripcion = const descripcion
                // Si la propiedad y el valor tienen el mismo nombre, no hace falta especificar el valor
                nombre , descripcion
            }) });
            const res = await data.json();
            if (res.estado) {
                 //  Rediccionamos
                 window.location.href = "/mascotas"
            } else {
                console.log(res)
            }
         }catch (e) {
             console.log(e)
         }
     }) 
    </script>

```