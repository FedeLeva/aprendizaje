# Guia practica - 2022
 Iniciamos el proyecto 
 ```powershell
 npm init -y
 ```
 :::tip 
 No utilizar espacios , tildes y no colocar nombres reservados (nombre de  package/modulos)
 :::
 package.json:
 ```json
 {
  "name": "practica",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.15"
  },
  "dependencies": {
    "express": "^4.17.3"
  }
}

 ```

:::tip modelo MVC
Vamos a trabajar con el modelo vista controlador

Los controladores , las vistas y los modelos los vamos a separar
:::

## carpeta public
- Cuando se trabaja desde el backend todo esta protegido , no se puede acceder desde el navegador.

- Pero podemos crear la carpeta public cuyos archivos si son públicos, se pueden acceder desde el navegador (ingresando la url)

Creamos la carpeta public y dentro un archivo index.html 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>index.html</h1>
</body>
</html>

```
:::warning
TODAVIA NO SE PUEDE ACCEDER A index.html desde el navegador porque no esta configurada la carpeta public.

Para hacer que todos los archivos de la carpeta public puedan ser accedido desde el navegador usamos el middleware.
:::


:::tip middleware
- Middleware = Se ejecuta antes de la respuesta del servidor.
- use = Middleware.
:::
index.js
```js
const express = require("express");
const app = express();
// Usamos el middleware de express
// Asignamos la carpeta publica
app.use(express.static(__dirname + "/public"));
// req = requirimiento(lo que manda el usuario) res = respuesta
app.get("/", (req, res) => {
    res.send("estas solicitando la ruta raiz");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥 http://localhost:5000"));

```

## Motor de plantilla 
- Para no repetir todo el código HTML (por ejemplo, todos los archivos HTML deben tener el mismo footer o el mismo menú) , surgieron los motores de plantilla.

Instalamos un motor de plantilla  (existen muchos)
```powershell
npm i express express-handlebars
```
- Se parece a vue pero es mucho mas viejo.
- Tiene limitantes este motor de plantilla, que soluciona react , vue , etc.

Creamos una carpeta views y dentro  la carpeta layouts.
  - views 
    - layouts


Lo archivos que contiene layouts son los que podemos repetir en todas las páginas web (menú, footer , etc).

dentro de la carpeta layouts creamos un archivo main.hbs

views/layouts/main.hbs:
```hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desde HBS</title>
</head>
<body>
    <h1>Plantilla</h1>
</body>
</html>

```
y creamos el archivo home.hbs en la carpeta views

views/home.hbs:

```hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola desde Home</h1>
</body>
</html>

```
:::warning
Nodemon no actualiza el servidor si hay algún cambio dentro de algún archivo hbs.

Para solucionar esto creamos en la ruta raiz el archivo nodemon.json que va a contener:

```json
{
    "ext": "js,json,hbs"
}

```
En pocas palabras , estamos configurando Nodemon para que detecte cambios en archivos .js , .json y .hbs.
:::
## Configuracion
Ahora vamos a configurar el motor de plantilla en el archivo index.js

```js

const express = require("express");
// const create = recibe las configuraciones de express-handlebards
const { create } = require("express-handlebars");
// Le decimos que la extension de los archivos de views es  .hbs
const hbs = create({
    extname: ".hbs",
});
const app = express();
// Configuramos express 
// Le decimos que motor de plantilla usar
// Especificamos el motor de plantilla
app.engine(".hbs", hbs.engine);
// Especificamos la extension del motor del plantilla (.hbs)
app.set("view engine", ".hbs");
// Especificamos la carpeta en donde van a estar los archivos .hbs
app.set("views", "./views");


app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    // Como respuesta renderiza(convierte en HTML) el archivo home.hbs
    // Se puede quitar el .hbs
    res.render('home')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥 http://localhost:5000"));

```

:::warning
- Como la carpeta public la maneja el middleware y este se ejecuta antes de que el servidor reciba las peticiones get/post/etc , lo que contiene la carpeta public se llama primero.
- La línea app.use(express.static(__dirname + "/public")); debe ir debajo de todo para evitar conflictos entre las rutas y archivos publicos

```js


const express = require("express");
// const create = recibe las configuraciones de express-handlebards
const { create } = require("express-handlebars");
// Le decimos que la extension de los archivos de views es  .hbs
const hbs = create({
    extname: ".hbs",
});
const app = express();
// Configuramos express 
// Le decimos que motor de plantilla usar
// Especificamos el motor de plantilla
app.engine(".hbs", hbs.engine);
// Especificamos la extension del motor del plantilla (.hbs)
app.set("view engine", ".hbs");
// Especificamos la carpeta en donde van a estar los archivos .hbs
app.set("views", "./views");



app.get("/", (req, res) => {
    // Como respuesta renderiza(convierte en HTML) el archivo home.hbs
    // Se puede quitar el .hbs
    res.render('home')
});
app.use(express.static(__dirname + "/public"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥 http://localhost:5000"));

```
:::

## main.hbs
Como se ve, se muestra la plantilla (el archivo main.hbs) y no el home.hbs.

Esto es porque , Se lee de forma automática el main.hbs

La plantilla main.hbs se utiliza en todas las paginas


Por lo tanto podemos hacer que lo que está en el home.hbs  aparezca adentro del body del main.hbs

home.hbs:
```hbs
 <h1>Hola desde Home</h1>
```
main.hbs
```hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desde HBS</title>
</head>
<body>
      {{{body}}}
</body>
</html>

```
:::tip variable body 
Usamos la variable body  que tiene hbs , que su valor es todo lo que contiene  home.hbs

:::
Creamos un archivo login.hbs en views
views/login.hbs
```hbs
<h1>Login</h1>
```
index.js:
```js

const express = require("express");
// const create = recibe las configuraciones de express-handlebards
const { create } = require("express-handlebars");
// Le decimos que la extension de los archivos de views es  .hbs
const hbs = create({
    extname: ".hbs",
});
const app = express();
// Configuramos express 
// Le decimos que motor de plantilla usar
// Especificamos el motor de plantilla
app.engine(".hbs", hbs.engine);
// Especificamos la extension del motor del plantilla (.hbs)
app.set("view engine", ".hbs");
// Especificamos la carpeta en donde van a estar los archivos .hbs
app.set("views", "./views");



app.get("/", (req, res) => {
    // Como respuesta renderiza(convierte en HTML) el archivo home.hbs
    // Se puede quitar el .hbs
    res.render('home')
});
app.get("/login", (req, res) => {
    // Como respuesta renderiza(convierte en HTML) el archivo home.hbs
    // Se puede quitar el .hbs
    res.render('login')
});
app.use(express.static(__dirname + "/public"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥 http://localhost:5000"));

```
:::tip variable body 
Al entrar a http://localhost:5000/login la variable body de main.hbs contiene  todo el contenido de login.hbs
:::
## CSS , JS , etc
Añadimos boostrap a las dos rutas

main.hbs:
```hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desde HBS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-5">
 {{{body}}}
    </div>
     
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>

```
- Todas las paginas que tengamos, van a tener Bootstrap
- Y todo el contenido de XXX.hbs va a estar en un div que contiene clases de Bootstrap




:::tip carpeta public 
- carpeta public = trabajar con el frontend = se muestra en el navegador
- el resto de carpetas(incluida la raiz) = trabajar con el backend


:::
Invocar un script que esta en la carpeta public:

public/js/script.js
```js
console.log("Hola");

```
main.hbs
```hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desde HBS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-5">
 {{{body}}}
    </div>
     
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="/js/script.js"></script>
</body>

```
## Each
- Vamos a usar los Block Helpers
- [Link](https://handlebarsjs.com/guide/block-helpers.html#simple-iterators)
- Each  == forEach 

home.hbs: 
```hbs
<h1>Hola desde Home</h1>
    {{#each urls }}
          <article class="card mb-2">
        <div class="card-body">
            <p>{{this.origen}}</p>
            <p>{{this.shortUrl}}</p>
            <a href="#" class="btn btn-danger">Eliminar</a>
            <a href="#" class="btn btn-warning">Editar</a>
            <a href="#" class="btn btn-info">copiar</a>
        </div>
    </article>
    {{/each}}

```
:::tip carpeta Components
Vamos a crear la carpeta components dentro de views que son pedazitos de código que se van a repetir (el código se suele repetir por medio de ciclos (each, etc))
:::

Y dentro de la carpeta creamos el archivo Card.hbs

views/components/Card.hbs

```hbs
<article class="card mb-2">
        <div class="card-body">
            <p>{{this.origen}}</p>
            <p>{{this.shortUrl}}</p>
            <a href="#" class="btn btn-danger">Eliminar</a>
            <a href="#" class="btn btn-warning">Editar</a>
            <a href="#" class="btn btn-info">copiar</a>
        </div>
    </article>

```
## Configurar Partials

- partials = sirve para  separar trozos de hbs que se van a repetir. (ciclos (each) , menu , footer , etc)
- en el partials puede ir  footer.hbs , navbar.hbs , etc.

### Configuracion 
index.js
```js
// Le decimos que la extension de los archivos de views es  .hbs y que los partials se encuentran en views/components
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});

```
### Llamar a un partials 
Para llamar a un partial dentro de una plantilla

home.hbs
```hbs
    <h1>Hola desde Home</h1>
    {{#each urls }}
         {{> Card   url=this}}
    {{/each}}
  

```
:::tip Explicacion 
por cada iteración , invoca al Card.hbs  pasando como url cada componente del array urls
:::

Otra manera:
home.hbs:
```hbs
   <h1>Hola desde Home</h1>
    {{#each urls }}
         {{> Card   item=this}}
    {{/each}}
  

```

Card.hbs 
```hbs
 <article class="card mb-2">
        <div class="card-body">
            <p>{{item.origen}}</p>
            <p>{{item.shortUrl}}</p>
            <a href="#" class="btn btn-danger">Eliminar</a>
            <a href="#" class="btn btn-warning">Editar</a>
            <a href="#" class="btn btn-info">copiar</a>
        </div>
    </article>

```
:::tip 
- Le podés quitar los datos opcionales (item=this o url=this) porque los datos del item del array se pasan solo al componente.
- A un componente nosotros le podemos mandar información , esto se llama props en react y vue.
:::
Creamos un menú que lo va a utilizar todo el sitio web

views/components/Navbar.hbs
:::tip Convenciones
Los nombre de los componentes arrancan con Mayuscula.
:::
```hbs
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/logup">LogUp</a>
        <a class="nav-link" href="/login">LogIn</a>
        <a class="nav-link" href="/logout">LogOut</a>
      </div>
    </div>
  </div>
</nav>

```
main.hbs
```hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desde HBS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    {{> Navbar}}
    <div class="container mt-5">
 {{{body}}}
    </div>
     
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="/js/script.js"></script>
</body>
</html>

```
## Router
Creamos la carpeta llamada routes

Y dentro el archivo home.js


:::tip routes 
- Usamos el Router para crear manejadores de rutas modulares (permite trabajar en módulos )
- Sirve para poner la lógica de una o varias rutas en un archivo y poder separarlos (módulos), de forma que cada archivo es una ruta o un conjunto de rutas relacionadas.
- Lo recomendable es que cada archivo contenga la lógica de una  ruta para poder trabajar con módulos.

:::
routes/home.js
```js
const express = require('express');
const router = express.Router();

router.get("/" , (req,res) => {
const urls = [{origen: "www.google.com" , shortUrl: "hfgdohdf"},{origen: "www.google.com" , shortUrl: "hfgdohdf"},{origen: "www.google.com" , shortUrl: "hfgdohdf"}]
res.render('home' , {urls })
})
module.exports = router;

```
Tambien creamos el archivo auth.js
```js
const express = require('express');
const router = express.Router();
router.get("/login", (req, res) => {
  
    res.render('login')
});

module.exports = router;

```
:::tip Observacion

Como se puede ver cada archivo es una ruta (home = al apartado home  y auth.js = al apartado login)

:::


en el index.js

Se utiliza el  middleware para usar el router

```js
const express = require("express");

const { create } = require("express-handlebars");
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});
const app = express();
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");




app.use(express.static(__dirname + "/public"));
// Usamos el middleware para utilizar los routes
app.use("/" , require('./routes/home'));
app.use("/auth" , require('./routes/auth'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥 http://localhost:5000"));

```
:::tip Resultado del middleware
- Home =  http://localhost:5000   (No se utilizo ninguno prefijo (/))
- Login =  http://localhost:5000/auth/login (Ya que se añadio el prefijo /auth)
:::
Cambiamos las rutas en el navbar.hbs 

```hbs
 <a class="nav-link" href="/logup">LogUp</a>
        <a class="nav-link" href="/auth/login">LogIn</a>
        <a class="nav-link" href="/logout">LogOut</a>

```
## Configuracion mongoDB
 ### En el sitio de MongoDB
 1. Creamos un Cluster
 - Database – Build a Database – Shared – Free
 - Todas las configuraciones dejarla por defecto.
 - Por ultimo le das a Create Cluster
2. En network access especificamos las IP de donde nos queremos conectar 
:::tip 
 Puede ser:

- nuestra IP (para mayor seguridad)
- Permitir que se pueda conectar desde cualquier ip(0.0.0.0)
- Un conjunto de IP (la nuestra y la de un servidor/hosting)
:::
3. En DataBase Access Creamos un usuario
:::tip Ejemplo
User: User_API
password: contraseña
:::
- Built-in Role para  configurar  el Rol (Accesos)
:::tip VERSION GRATIS
- En el modo gratuito solo podemos tener un cluster
- Un cluster es como un servidor y puede tener varias BD
- En un cluster podemos tener muchas colecciones.
:::
4.Database – Connect – Connect your app
- Copiamos el uri
```js
mongodb+srv://<username>:<password>@cluster.xcibc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

/*
- Borramos <Username> y ponemos  el usuario por el cual nos conectamos
- Borramos <password> y ponemos la contraseña del usuario
- Borramos miFirstDateBase y ponemos el nombre de la BD a conectarse
*/
```



:::tip Ejemplo
```js
URI:mongodb+srv://User_API:contraseña@cluster.xcibc.mongodb.net/dbUrl?retryWrites=true&w=majority
```
:::
### En el proyecto
Creamos el archivo .gitignore
```gitignore
node_modules
.env
```

Creamos el archivo .env
:::tip .env 
- En dicho archivo creamos variables protegidas que no se pueden subir a la nube  (github)
- Sirven para no exponer informacion privada
- Son variables de entorno
- Sintaxis: nombrevariable=valor
:::
```js
URI=mongodb+srv://User_API:contraseña@cluster.xcibc.mongodb.net/dbUrl?retryWrites=true&w=majority
```
Reiniciamos Nodemon ya que no lee el archivo.

### modulos
- Para manejar  MongoDb dentro de node.js usaremos mongosee 
-  el –save es para versiones antiguas de npm
```powershell
npm install mongoose
```
Y para manejar las variables de entorno usaremos dotenv
```powershell
npm i dotenv
```
### Establecer conexion
Creamos la carpeta datebase

Y dentro el archivo conexión.js(Realizaremos la conexión en dicho archivo)

```js
const mongoose = require('mongoose');
// Para conectarnos a la BD
//connect (uri con los datos remplazados)
// Accedemos al valor de la variable URI de .env
// Sintaxis: process.env.NOMBREVARIABLE

mongoose.connect(process.env.URI).then(()=> {
    // Como devuelve una promesa , usamos el then
    console.log("'db conectada 🔥");
}).catch(e => console.log("Fallo la conexion" + e));

```
Lo llamamos en el index.js:
```js
const express = require("express");
const { create } = require("express-handlebars");
 // Para leer las variables de entorno (para acceder a las variables de .env)
 // config(configuraciones) -- Las configuraciones pueden ser desde cambiar el nombre del archivo .env a otras opciones
 require('dotenv').config()
  // Ejecutamos el archivo database/conexion.js
  require('./database/conexion');

const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});

```
### Volvemos a MongoDB(sitio web)
- Database – Cluster -- Browse Collections
- Te va a mostrar todas las BD.
- Si le das a Create Database , Creas una colección que va a pertenecer a una BD.
:::tip Explicacion 
- Una colección tiene múltiples documentos. Lo podes insertar con la opcion insert document  (El documento funciona igual que un objeto de JS propiedad:valor)
- El documento es un objeto de JS (con multiples metodos)
- Una BD puede tener múltiples colleciones.
:::
:::tip Explicacion como si fuera relacional 
- Collecion = tabla
- Documento = Fila de la tabla
- Y cada propiedad del documento es una columna.
:::
## Modelo/Esquema
- Las colecciones van a tener documentos 
- Y esos documentos están compuesto de varias propiedades con sus valores correspondiente.
:::tip Modelo
- En un modelo definimos el nombre de la colección y las propiedades(columnas) que van a tener sus documentos(filas)
- A traves del modelo tenemos acceso a métodos  para crear/modificar/leer/etc documentos.
:::
:::tip Esquema 
-	 Con Mongoose, todo se deriva de un esquema
-	Cada esquema se asigna a una colección MongoDB y define la forma de los documentos dentro de esa colección.
- El esquema define la estructura de los documentos.
:::
### En el proyecto 
Creamos la carpeta models
- En dicha carpeta vamos a crear los modelos
- cremos el archivo Url.js en la carpeta 
:::tip ID 
La ID se genera de manera automática , por eso no la especificamos.
:::
:::tip Generar String aleatorios
- Vamos a usar [nanoid](https://www.npmjs.com/package/nanoid) para crear ids aleatorios 
- npm i nanoid
:::

:::tip Explicacion 
- Para tener acceso a los métodos  para crear/modificar/leer/etc documentos , debemos crear un esquema y llevarlo a  un modelo.
- Se exporta el modelo no el esquema
- el esquema sirve para crear el modelo
- esquema = estructura del documento
- modelo = creado a partir del esquema , permite tener acceso a los métodos para el CRUD.
:::
:::tip 
Al crearse un objeto de tipo  modelo(el que se crea), se crea la colección y la BD (si no existe)
:::
```js
const mongoose = require('mongoose')
// Obtenemos la clase Schema de mongosee
const {Schema} = mongoose
const {nanoid} = require('nanoid');
// Esquema
// Nueva instancia(objeto) de Schema
// El schema recibe un objeto con las propiedades que va a tener cada documento  y sus restricciones.
const urlSchema = new Schema({

    origin: {
        // La propiedad origen es de tipo String  , es unico , y es obligatorio
        type: String,
        unique: true,
        required: true
    },
    shortURL: {
      // La propiedad shortURL  es de tipo String , es unico , y es obligatorio.
        type: String,
        unique: true,
        required: true,
        // Por defecto su valor es un String aleatorio (supuestamente unico)
        //nanoid(numero(representa el largo del string)) genera un string aleatorio
        default: nanoid(6)
    }
})
//Modelo
// Singular y comienza en Mayuscula -- variable
// models (nombre de la coleccion , esquema)
// Si la coleccion no existe , se crea tanto la BD como la coleccion(en plural)
const Url = mongoose.model('Url', urlSchema)
module.exports = Url;

```
## Controladores (MVC)
- Para trabajar  con el modelo vista – controlador
- creamos la carpeta controllers y  dentro el archivo homeController.js
- En dicho archivo vamos a tener toda la lógica de leer, actualizar, agregar, etc de la ruta Home
- En el modelo vista – controlador, la lógica debe separarse.

controllers/homeController.js:
```js
const leerUrls = async(req,res) => {
    const urls = [{origen: "www.google.com" , shortUrl: "hfgdohdf"},{origen: "www.google.com" , shortUrl: "hfgdohdf"},{origen: "www.google.com" , shortUrl: "hfgdohdf"}]
    res.render('home' , {urls })
    }

   module.exports = {leerUrls};

```
routes/home.js:
```js

const express = require('express');
const router = express.Router();
const {leerUrls} = require('../controllers/homeController')
router.get("/" , leerUrls)
module.exports = router;

```
:::tip MVC
- Modelo vista controlador
- controladores – modelo – vistas -routes – database
:::
Hacemos el agregarUrl

homeController.js
```js
const agregarUrl = async(req,res) => {}
   module.exports = {leerUrls , agregarUrl};

```
routes/home.js
```js
router.post("/" , agregarUrl)
module.exports = router;
```
## Instanciar un modelo 
Creamos un componente llamado Form.hbs

components/Form.hbs

```hbs
<form action="/" method="post">
<input type="text" placeholder="Ingrese URL" name="origin" class="form-control my-2">
 <button type="submit" class="btn btn-primary w-100 mb-2">Agregar Url</button>
</form>

```

views/home.hbs
```hbs
  <h1>Agrege sus URL</h1>
    {{> Form}}
    {{#each urls }}
         {{> Card   item=this}}
    {{/each}}

```
homeController.js
```js
// Importamos el modelo
const Url = require('../models/Url');

const agregarUrl = async(req,res) => {
    try {
        // Creamos una instancia(objeto) del modelo
        // new Modelo({propiedades del esquema})
        //shortUrl tiene un valor por defecto , no hace falta mandarlo
       const url = new Url({origin:'estatico' })
        console.log(url);
        res.send(url);
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
   module.exports = {leerUrls , agregarUrl};

```
:::tip Explicacion
- Al momento de instanciar un Modelo, se crea la BD y la colección.
- La instancia es un objeto (documento mongoDB) con todas las propiedades del esquema.
:::
## Guardar en la BD
  modificamos el archivo homeController.js para que al documento mongoDB creado (instancia) se guarde en la BD.
 ```js
 const agregarUrl = async(req,res) => {
    try {
        // Creamos una instancia(objeto) del modelo
        // new Modelo({propiedades del esquema})
        //shortUrl tiene un valor por defecto , no hace falta mandarlo
       // La ID se crea por defecto , no hace falta mandarlo
       const url = new Url({origin:'estatico' })
       // Lo guardamos en la BD // Insertamos un documento(fila) en la colección(tabla)
       await url.save();
       // Direcciono a la pagina raiz
       res.redirect('/');
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
   module.exports = {leerUrls , agregarUrl};

 ```
 ###  Ahora vamos a hacer que se guarde en la BD, la información que se envía en el formulario:
 1. Configuramos el middleware para que se pueda leer el body, ya que el formulario utiliza el método POST
 
 index.js
 ```js
 const app = express();
// Habilitamos los formularios html POST
app.use(express.urlencoded({extended:true}))

 ```
 2. Configuramos homeController.js para que añada el dato enviado del formulario a la BD.
 ```js
 const agregarUrl = async(req,res) => {
    // La informacion enviada por el formulario
    const {origin} = req.body;
    try {
        // Creamos una instancia(objeto) del modelo
        // new Modelo({propiedades del esquema})
        //shortUrl tiene un valor por defecto , no hace falta mandarlo
       const url = new Url({origin:origin })
       // Lo guardamos en la BD // Insertamos un documento(fila) en la colección(tabla)
       await url.save();
       // Direcciono a la pagina raiz
       res.redirect('/');
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}

 ```
 3. Movemos la funcion nanoid() al homeController para que no genere conflictos ya que genera el mismo shortUrl para todos los documentos y no deja guardar mas de 2 veces

 homeController.js
 ```js
 // Importamos el modelo
const Url = require('../models/Url');
const {nanoid} = require('nanoid');
const agregarUrl = async(req,res) => {
    // La informacion enviada por el formulario
    const {origin} = req.body;
    try {
        // Creamos una instancia(objeto) del modelo
        // new Modelo({propiedades del esquema})
       const url = new Url({origin:origin , shortURL:nanoid(6)})
        // Lo guardamos en la BD // Insertamos un documento(fila) en la colección(tabla)

       await url.save();
       // Direcciono a la pagina raiz
       res.redirect('/');
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
   module.exports = {leerUrls , agregarUrl};

 ```
 models/Url.js
 ```js
 // Esquema
// Nueva instancia(objeto) de Schema
// El schema recibe un objeto con las propiedades que va a tener cada documento  y sus restricciones.
const urlSchema = new Schema({

    origin: {
        // La propiedad origen es de tipo String  , es unico , y es obligatorio
        type: String,
        unique: true,
        required: true
    },
    shortURL: {
      // La propiedad shortURL  es de tipo String , es unico , y es obligatorio.
        type: String,
        unique: true,
        required: true,
    }
})

 ```
 ## Leer datos
 Ahora vamos a hacer que se muestre la informacion de la BD en la pagina de inicio(home)

 views/components/Card.hbs
 ```hbs
  <article class="card mb-2">
        <div class="card-body">
            <p>{{this.origin}}</p>
            <p>{{this.shortURL}}</p>
            <a href="#" class="btn btn-danger">Eliminar</a>
            <a href="#" class="btn btn-warning">Editar</a>
            <a href="#" class="btn btn-info">copiar</a>
        </div>
    </article>

 ```
 controllers/homeController.js
 ```js
 const leerUrls = async(req,res) => {
   try {
       // find(parametros opcionales) Busca todos los documentos de la coleccion(modelo)
       // Select * from coleccion
      // Puede tener parametros para filtrar documentos
      // Devuelve un array con objetos de mongoDB
      //lean() convierte un objeto de mongoDB en un objeto JS
      const urls = await Url.find().lean();
      //urls:urls
      res.render('home' , {urls:urls })
   } catch (e) {
       console.log(e);
       res.send('fallo algo...');
   }

    }

 ```
 :::tip opcion Lean
 - La opción Lean le dice a Mongoose que omita la hidratación de los documentos de resultados. Esto hace que las consultas sean más rápidas y requieran menos memoria, pero los documentos de resultados son simples objetos JavaScript, no documentos Mongoose.
 :::

 :::tip hidratacion 
 - La hidratación se refiere al proceso de llenar un objeto con datos. Un objeto que aún no se ha hidratado se ha instanciado y representa una entidad que sí tiene datos, pero los datos aún no se han cargado en el objeto. Esto es algo que se hace por razones de rendimiento.
 - Se podría decir que un objeto está parcialmente hidratado cuando solo ha cargado algunos de los campos, pero no todos. Esto se puede hacer porque esos otros campos no son necesarios para sus operaciones actuales. Por lo tanto, no hay razón para desperdiciar el ancho de banda y los ciclos de CPU cargando, transfiriendo y configurando estos datos cuando no se van a usar.
 :::
 ## Eliminar datos
 Ahora vamos a permitir que se puedan eliminar documentos en la BD:
 - [Info](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete)
 :::warning
- Forma no muy recomendada (utilizar peticion GET)
- Lo ideal seria utilizar una petición DELETE ,  NO GET pero en HTML solo se puede hacer GET y POST
 :::
 views/components/Card.hbs
 ```hbs
  <article class="card mb-2">
        <div class="card-body">
            <p>{{this.origin}}</p>
            <p>{{this.shortURL}}</p>
            <a href="/eliminar/{{item._id}}" class="btn btn-danger">Eliminar</a>
            <a href="#" class="btn btn-warning">Editar</a>
            <a href="#" class="btn btn-info">copiar</a>
        </div>
    </article>

 ```
routes/home.js
```js
// NO RECOMENDADO , para eliminacion informacion se usa el metodo DELETE
// usar los dos puntos (:) para asignar una variable
//ruta /eliminar/:nombrevariable
//ruta /eliminar/valornombrevariable
// Ejemplo: /eliminar/6220bd6df4eaa23f425ac827
// nombrevariable  =  6220bd6df4eaa23f425ac827
router.get("/eliminar/:id" , eliminarUrl);
module.exports = router;

```
homeController.js
```js
const eliminarUrl = async(req,res) => {
    // en req.params estan todas las variables  de rutas(:nombrevariable) y sus valores correspondiente
    const {id} = req.params;
    try {
        // Busca una coleccion por la ID y lo elimina
       await Url.findByIdAndDelete(id);
       res.redirect('/');
     } catch(error) {
         console.log(error)
         res.send("error algo fallo");
     }
}

   module.exports = {leerUrls , agregarUrl , eliminarUrl};

```
## Validacion con middlewares
:::tip middlewares
- Intercepta la petición antes de la respuesta del servidor (gestión de rutas), incluso antes de que lo analice el servidor.
-  Se suele usar para las validaciones y autenticaciones.
- Un middleware es una función con tres parámetros (req , res , next)
- next = Siga con la siguiente solicitud, que la petición pase a otro middleware o que llegue al servidor.
 - Se podría decir que el middleware es un cortafuego y si la petición es válida, pasa al servidor para ser tratada.

En caso que la petición no sea válida, nunca llega al servidor , sin embargo el middleware le envía una respuesta al cliente.

:::
Creamos la carpeta middlewares y Adentro urlValida.js

Para validar una Url
- [Usamos este modulo nativo de node.js](https://nodejs.org/api/url.html#class-url)
```js
 
 // Modulo que viene incorporado con Node.js
const { URL } = require("url");
const urlValidar = (req,res , next) => {
 // Si todo esta correcto llamamos a next
 // next = eliminarUrl
    try {
        // Leo el body del formulario
        const { origin } = req.body;
        // Se crea una nueva instancia de URL con la informacion del formulario
        const urlFrontend = new URL(origin);
        //La instancia(objeto) tiene la propiedad origin
        //Si es distinto a null , tiene el formato de url
        if (urlFrontend.origin !== "null") {
            // Comprueba que tenga el protocolo http o https y si lo tiene llama al next()
            if (
                urlFrontend.protocol === "http:" ||
                urlFrontend.protocol === "https:"
            ) {
                return next();
            }
        }
        // Lanzamos un error en caso que no sea valida
        throw new Error("no válida 😲");
    } catch (error) {
        // console.log(error);
        return res.send("url no valida");
    }
};

module.exports = urlValidar;

```
routes/home.js
```js
//Cuando se entra a la ruta , se ejecuta el middleware (urlValida).
// El middleware lo analiza, si la peticion es valida, envia la peticion al agregarUrl(req,res)(pasa al siguiente - next).
// En caso que la petición es invalida , el middleware se encarga de responder a la peticion
router.post("/" , urlValida , agregarUrl)
router.get("/eliminar/:id"  , eliminarUrl);

module.exports = router;

```
## Editar en MongoDB
- [Info](https://mongoosejs.com/docs/queries.html)
:::warning
Se hace con el método HTTP PUT pero en este ejemplo se realizara con GET (NO RECOMENDADO)
:::
routes/home.js
```js
router.get("/eliminar/:id"  , eliminarUrl);
router.get("/editar/:id", editarUrl);
module.exports = router;

```
homeController.js
```js

const editarUrl = async(req,res) => {
    //variable id de la ruta
    const {id} = req.params;
    try {
        // En la coleccion(modelo) buscamos un documento cuya id sea igual al valor de la variable const id
        // Como nos trae un objeto mongoDB lo convertirmos en un objeto JS con lean()
       const url = await Url.findById(id).lean()
       
       // {url:url}
       // el each del home.hbs ni se va a ejecutar ya que no le estamos pasando un array
       res.render('home',{url})
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
   module.exports = {leerUrls , agregarUrl , eliminarUrl , editarUrl};

```
En views/components/Card.hbs Modificamos el atributo href de editar
 ```hbs
     <a href="/editar/{{item._id}}" class="btn btn-warning">Editar</a>
 ```
 en views/components/Form.hbs
 :::tip logica
 Si existe url , crea una formulario para editar , si no existe crea el formulario para crear.
 :::
 ```hbs
 {{#if url}}
    <form action="/editar/{{url._id}}" method="post">
<input  value="{{url.origin}}" type="text" placeholder="Ingrese URL" name="origin" class="form-control my-2">
 <button type="submit" class="btn btn-warning w-100 mb-2">Editar</button>
</form>
{{else}}
<form action="/" method="post">
<input type="text" placeholder="Ingrese URL" name="origin" class="form-control my-2">
 <button type="submit" class="btn btn-primary w-100 mb-2">Agregar Url</button>
</form>

{{/if}}

 ```
 home.js
 ```js
 const {leerUrls , agregarUrl , eliminarUrl , editarUrlForm , editarUrl} = require('../controllers/homeController')

router.get("/" , leerUrls)
//Cuando se entra a la ruta , se ejecuta el middleware (urlValida).
// Si el middleware detecta que la  peticion es valida, envia la peticion a agregarUrl(req,res)(al siguiente - next)
router.post("/" , urlValida , agregarUrl)
router.get("/eliminar/:id"  , eliminarUrl);
router.get("/editar/:id", editarUrlForm);
// Utiliza el middleware
// Si la url es valida , la petición la gestiona editarUrl(req,res)
router.post("/editar/:id" ,urlValida ,  editarUrl)
module.exports = router;

 ```
 homeController.js
 ```js
 // Importamos el modelo
const Url = require('../models/Url');
const {nanoid} = require('nanoid');

const leerUrls = async(req,res) => {
   try {
       // find(parametros opcionales) Busca todos los documentos de la coleccion(modelo)
       // Select * from coleccion
      // Puede tener parametros para filtrar documentos
      // Devuelve un array con objetos de mongoDB
      //lean() convierte un objeto de mongoDB en un objeto JS
      const urls = await Url.find().lean();
      //urls:urls
      res.render('home' , {urls:urls })
   } catch (e) {
       console.log(e);
       res.send('fallo algo...');
   }

    }
const agregarUrl = async(req,res) => {
    const {origin} = req.body;
    try {
       const url = new Url({origin:origin , shortURL:nanoid(6)})
       await url.save();
       res.redirect('/');
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
const eliminarUrl = async(req,res) => {
    // en req.params estan todas las variables  de ruta(:nombrevariable) y sus valores correspondiente
    const {id} = req.params;
    try {
        // Busca una coleccion por la ID y lo elimina
       await Url.findByIdAndDelete(id);
       res.redirect('/');
     } catch(error) {
         console.log(error)
         res.send("error algo fallo");
     }
}

const editarUrlForm = async(req,res) => {
    //variable id de la ruta
    const {id} = req.params;
    try {
        // En la coleccion(modelo) buscamos un documento cuya id sea igual al valor de la variable const id
        // Como nos trae un objeto mongoDB lo convertirmos en un objeto JS con lean()
       const url = await Url.findById(id).lean()
       
       // {url:url}
       // el each del home.hbs ni se va a ejecutar ya que no le estamos pasando un array
       res.render('home',{url})
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
const editarUrl = async(req,res) => {
    //variable id de la ruta
    const {id} = req.params;
    const {origin} = req.body;
    try {
        // Buscamos el documento por la id y lo actualizamos
        //findByIdAndUpdate(id , {informacion a modificar} )
        // origin : origin
       await Url.findByIdAndUpdate(id, {origin})
       res.redirect('/');
    
    } catch(error) {
        console.log(error)
        res.send("error algo fallo");
    }
}
   module.exports = {leerUrls , agregarUrl , eliminarUrl , editarUrlForm , editarUrl};

 ```
 ## clipboard
 Para copiar en el portapapeles la urlShort vamos a trabajar con el frontend

 Card.hbs:
```hbs
 <article class="card mb-2">
        <div class="card-body">
            <p>{{this.origin}}</p>
            <p>{{this.shortURL}}</p>
            <a href="/eliminar/{{item._id}}" class="btn btn-danger">Eliminar</a>
            <a href="/editar/{{item._id}}" class="btn btn-warning">Editar</a>
            <button data-short="{{item.shortURL}}" href="#" class="btn btn-info">copiar</button>
        </div>
    </article>

```
main.hbs:
```hbs
  <script src="/js/app.js"></script>
</body>
</html>

```
:::tip 
A partir de ahora trabajamos con el frontend
:::
public/js/app.js:
```js
document.addEventListener('click' , e => {
    
    if (e.target.dataset.short) {
         const url = `http://localhost:5000/${e.target.dataset.short}`;
         // Usamos el clipboard para copiar la const url  en el portapapeles
         // Que se copie(Control + C) para luego pegar la url en donde quieras
         navigator.clipboard
            .writeText(url)
            .then(() => {
                console.log("Text copied to clipboard...");
            })
            .catch((err) => {
                console.log("Something went wrong", err);
            });
    }
})

```
##  Redireccionamiento
Vamos a hacer  que el short te lleve a la url indicada (origin)

routes/home.js:
```js

const {leerUrls , agregarUrl , eliminarUrl , editarUrlForm , editarUrl , redireccionamiento} = require('../controllers/homeController' )
router.get("/:url" , redireccionamiento)
module.exports = router;

```
homeController.js
```js
const redireccionamiento = async(req,res) => {
    const {url} = req.params
    try {
        // Buscamos un documento de la coleccion Url
        // Lo buscamos por la propiedad shortUrl
       const urlDB = await Url.findOne({shortUrl: url})
       res.redirect(urlDB.origin);
    } catch(error) {

    }
}
   module.exports = {leerUrls , agregarUrl , eliminarUrl , editarUrlForm , editarUrl , redireccionamiento};

```
## Pasar a otro
:::tip 
JWT = SESION SIN ESTADO
:::
:::tip 
Session y  Passport(asi se trabajaba antes)  puede ser remplazado por JWT

Flash para comunicar mensaje
::: 

:::tip 
API REST = NO TRABAJAR CON SESIONES (NO GUARDAR SESIONES EN EL SERVIDOR)
:::