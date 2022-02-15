# Motores de plantillas/vistas
- Si bien podríamos trabajar con archivos estáticos HTML, existe una manera más dinámica de crear nuestros sitios web utilizando motores de plantillas.
- Entre los más populares (ejs|hbs|hjs|jade|pug|twig|vash)
- Express tiene un soporte con esos Template Engine(Motores de plantillas)
- [info](https://expressjs.com/en/resources/template-engines.html)
- React , Vue , etc tienen sus propios framework para configurar las vistas.

## EJS y Express
- Utilizaremos [Ejs](https://ejs.co/) 
- 	No perdemos nuestro html clásico y agregamos lógica con EJS.
- Vamos a hacer que HTML sea mas dinamico

### Instalacion 
```powershell
npm i ejs
```
### Configuracion 
- [Guia](https://expressjs.com/es/guide/using-template-engines.html)
1. Especificamos que motor de plantilla usamos (en este caso ejs)
Index.js:
```js
const express = require("express");

const app = express();
const port = 3000;

//Asignar motor de plantilla
//Parametros set('view engine' , 'nombre del motor');
app.set('view engine' , 'ejs')

```
2. Creamos una carpeta llamada views:
- En dicha carpeta se crea archivos ejs que express los va a renderizar y los va a transformar en archivos que el navegador pueda leer(HTML).

index.ejs (dentro de views)
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EJS</title>
</head>
<body>
     <h1>Titulo de mi sitio web Index</h1>
</body>
</html>

```
:::tip Ejs
Como se ve, hay HTML.
:::

3. Ahora hay que especificar en que carpeta están ubicado las plantillas (carpeta views en este caso):

index.js
```js
//Asignar motor de plantilla
//Parametros set('view engine' , 'nombre del motor');
app.set('view engine' , 'ejs')
// Especificar en que carpeta estan las plantillas (Generalmente es una carpeta llamada views)
// Parametros set('views', 'ruta');
app.set('views' , __dirname + '/views');

```
4. Vamos a renderizar el index.ejs cuando se haga una petición get en la raiz del sitio web.

index.js:
```js
app.set('views' , __dirname + '/views');

app.get('/' , (req , res) => {
      // Como respuesta a la peticion get  , renderiza una plantilla.
      // Parametros render("nombre del archivo" , {datos opcionales})
      res.render("index" , {titulo : "mi titulo dinámico"});
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

```
Para pintar el título, se modifica el  index.ejs 

index.js:
```js
  res.render("index" , {titulo : "mi titulo gato"});
```

index.ejs 
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EJS</title>
</head>
<body>
     <h1>Titulo de mi sitio web Index</h1>
     <h2><%= titulo   %></h2>
</body>
</html>

```
:::tip Si te diste cuenta?
el h2 contiene el valor de la propiedad título al renderizarlo.
:::

:::tip cuidado
Cuidado, que se da mas prioridad a las rutas estáticas (que la maneja el middleware) que a las plantillas (que las maneja las rutas (gestión de petición)).
:::

Otro ejemplo: 
servicios.ejs (en views)
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EJS</title>
</head>
<body>
     <h1><%= tituloServicio   %></h1>
     
</body>
</html>

```
index.js:
```js
 app.get('/servicios' , (req,res) => {
       res.render("servicios" , {tituloServicio : "Este es un mensaje de Servicio"})
 })

```
creamos el 404.ejs en views
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404</title>
</head>
<body>
    <h1>EJS 404</h1>
</body>
</html>

```
index.js:
```js
app.use((req , res , next) => {
      // El segundo parametro de render() es opcional
      res.status(404).render("404");
})



```
Ejemplo con varios datos:

index.ejs:
```ejs
<body>
     <h1>Titulo de mi sitio web Index</h1>
     <h2><%= titulo   %></h2>
     <p><%= descripcion   %></p>
</body>

```
index.js:
```js
app.get('/' , (req , res) => {
      // Como respuesta a la peticion get  , renderiza una plantilla.
      // Parametros render("nombre del archivo" , {datos opcionales})
      res.render("index" , {titulo : "mi titulo gato" , descripcion : "Hola Esta es la descripcion"});
})

```
## Include
1. Creamos una carpeta llamada template  en la carpeta views
-  Va a tener archivos con código HTML que se utiliza en varios archivos

2. Creamos cabeceras.ejs en la carpeta template:
- Este archivo va a contener código HTML que se repite en varios archivos ejs.

cabecera.ejs
```ejs
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EJS</title>
</head>

```
y en todos los ejs que quieran utilizar esta cabecera :
```ejs

 <!-- Incluir la cabecera.ejs
 Parametros include("ruta") -->
<%- include("template/cabecera")   %>
<body>
     <h1>Titulo de mi sitio web Index</h1>
     <h2><%= titulo   %></h2>
     <p><%= descripcion %></p>
</body>
</html>

```
Podes añadir datos en el include: 

Modificamos cabecera.ejs:
```ejs
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title   %></title>
</head>

```

index.ejs:
```ejs
 <!-- Incluir la cabecera.ejs
 Parametros include("ruta" , {datos opcionales}) -->
<%- include("template/cabecera" , {title: "index"})    %>
<body>
     <h1>Titulo de mi sitio web Index</h1>
     <h2><%= titulo   %></h2>
     <p><%= descripcion %></p>
</body>
</html>

```
## Añadir CSS 
1. Se configura el public (archivos estaticos)
index.js
```js
const express = require("express");
var path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,"public")));



```
cabecera.ejs:
```ejs
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title   %></title>
    <link rel="stylesheet" href="./css/bootstrap.css">
</head>

```
:::tip
- Ubicación del bootstrap.css = public/css/bootstrap.css
- Eso significa que por defecto estamos ubicado en la carpeta public en el href.


:::

index.ejs:
```ejs
 <!-- Incluir la cabecera.ejs
 Parametros include("ruta" , {datos opcionales}) -->
<%- include("template/cabecera" , {title: "titulo"})    %>
<body>
     <h1 class="text-primary">Titulo de mi sitio web Index</h1>
     <h2><%= titulo   %></h2>
     <p><%= descripcion %></p>
</body>
</html>

```
## Practica
- Creamos footer.ejs en la carpeta template (porque lo va a utilizar varios archivos).
```ejs
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<!-- Por defecto estamos ubicado en public -->
 <!-- public/js/bootstrap.min.js -->
<script src="./js/bootstrap.min.js"></script>
</body>
</html>

```
- Lo añadimos en otros archivos: 

index.ejs:
```ejs
 <!-- Incluir la cabecera.ejs
 Parametros include("ruta" , {datos opcionales}) -->
<%- include("template/cabecera" , {title: "titulo"})    %>
<body>
     <h1 class="text-primary">Titulo de mi sitio web Index</h1>
     <h2><%= titulo   %></h2>
     <p><%= descripcion %></p>
     <%- include("template/footer")    %>

```
- Creamos navbar.ejs en template (Lo va a contener varios archivos)

cabecera.ejs 
```ejs
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title   %></title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
</head>
<body>
    <%- include("navbar")   %>

```
navbar.ejs:
```ejs
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Node.Js</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Servicios">Servicios</a>
          </li><li class="nav-item">
            <a class="nav-link" href="/Serviciosfdhifdifd">404</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

```
:::tip
Como se puede ver, un template usa otro template.
:::

index.ejs:
```ejs
 <!-- Incluir la cabecera.ejs
 Parametros include("ruta" , {datos opcionales}) -->
<%- include("template/cabecera" , {title: "titulo"})    %>
     <h1 class="text-primary">Titulo de mi sitio web Index</h1>
     <h2><%= titulo   %></h2>
     <p><%= descripcion %></p>
     <%- include("template/footer")    %>

```