# Router

-	Sirve para ordenar nuestras rutas(url)
- [Info](https://expressjs.com/es/guide/routing.html)
-	Express tiene una forma de trabajar con el direccionamiento y para eso utilizamos Router.
-	Esto es para generar un orden.
-	 Para esto se utiliza express.Router().


1. Creamos una carpeta llamada router:
2. En dicha carpeta creamos un archivo.js (En mi caso Rutas.js)
- Todas las rutas (peticiones get / post / etc de una url) las ponemos en este archivo.
- Todos los métodos HTTP lo manejamos con el router y no con express()


3. exportamos el router 
- Los Router Se exportan por defecto asi cuando se importa se le puede poner el nombre que quieras


Rutas.js
```js
const express = require('express');
// Accedemos a todas las propiedades y métodos del Router
const router = express.Router();


router.get('/' , (req , res) => {
  
    res.render("index" , {titulo : "mi titulo gato" , descripcion : "Hola Esta es la descripcion"});
})

router.get('/servicios' , (req,res) => {
     res.render("servicios" , {tituloServicio : "Este es un mensaje de Servicio"})
})

module.exports = router;

```
index.js:
```js
const express = require("express");
var path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,"public")));
app.set('view engine' , 'ejs')
app.set('views' , __dirname + '/views');

// use('/' , 'importacion de router')
app.use('/' , require("./router/Rutas"))

 app.use((req , res , next) => {
      res.status(404).render("404");
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

```
:::tip Observacion 
- peticion get a  servicios : http://localhost:3000/servicios
- peticion get a home (/) : http://localhost:3000/

:::



:::tip cambios en el index.js
- Si cambiamos "/" por otra "ruta"
- Todas las rutas se van a renderizar en “ruta”/direccionDelRouter.
:::
Ejemplo:
```js
app.use('/api' , require("./router/Rutas"))
```
Para acceder a servicios (Mirar el archivo Router): http://localhost:3000/api/Servicios

:::warning
 Si  no te detecta el css

 Hay que quitarle el punto (./) al href.

 ```html
   <link rel="stylesheet" href="/css/bootstrap.min.css">
 ```
:::

## Practica

```js

// router/Mascota.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // listaMascotas = Array
    res.render("mascotas", { listaMascotas: [
        { id: 'mascota', nombre: 'rex', descripcion: 'rex descripcion' } , { id: 'mascota2', nombre: 'chanchan', descripcion: 'chanchan descripcion' }

    ] })
})

module.exports = router;

```

```js
<!-- views/mascotas.ejs -->
<%- include("template/cabecera" , {title: "titulo"})    %>
 <div class="container">
    mascotas

 </div>

<%- include("template/footer")    %>

```

```js
//index.js
// use('/' , 'importacion de router')
app.use('/' , require("./router/Rutas"));
 app.use('/mascotas' , require('./router/Mascota'));

```

```js
<!-- views/mascotas.ejs -->
<%- include("template/cabecera" , {title: "titulo"})    %>
 <div class="container">
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

:::tip Texto plano === <%= 
- Un Texto plano (plain text), son aquellos archivos formados exclusivamente por texto (sólo caracteres), sin ningún formato; es decir, no requieren ser interpretados para leerse (aunque pueden ser procesados en algunos casos). También son llamados archivos de texto llano, simple o sin formato. 
- <%= especifica un texto plano

:::