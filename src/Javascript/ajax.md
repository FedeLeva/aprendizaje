# AJAX Y FETCH

## JS - FETCH 

Vive en el navegador.
-	fetch : La API Fetch proporciona una interfaz para recuperar recursos.
-	Fetch es una interfaz para hacer solicitudes AJAX en JavaScript. Es usado generalmente para hacer una solicitud a un API.
-	El método fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar.

## Ajax 
- Significa  JavaScript Asíncrono + XML (XML viejito ahora utilizamos JSON)

- AJAX no es una tecnología por sí misma, es un término que describe un nuevo modo de utilizar conjuntamente varias tecnologías existentes.

:::tip AJAX 
Es un conjunto de elementos(tecnología) que utilizamos para hacer javascript mas asíncrono y dinamico.

Esto incluye: HTML, CSS, JavaScript, DOM, JSON y lo más importante, el objeto XMLHttpRequest (XMLHttpRequest viejito ahora Fetch)

Cuando estas tecnologías se combinan es un modelo AJAX, 

:::

- Es posible lograr aplicaciones web con AJAX capaces de actualizarse continuamente sin tener que volver a cargar la página completa.
- Esto crea aplicaciones más rápidas y con mejor respuesta a las acciones del usuario.

## Metodos nativos para Ajax

### Viejo
[XMLHttpRequest](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
### Nuevo
[Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## Fetch API

Proporciona una interfaz JavaScript para hacer peticiones HTTP así como sus respuestas.
-	También provee un método para obtener recursos de forma asíncrona por la red.
-	[fetch parámetros](https://developer.mozilla.org/en-US/docs/Web/API/fetch): inicia el proceso de obtener un recurso de la red mediante una url, devolviendo una promesa con  la respuesta.
- 	Este tipo de funcionalidad se conseguía previamente haciendo uso de XMLHttpRequest.

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

```
## Conceptos  al realizar PETICIONES HTTP
### HTTP
Hypertext Transfer Protocol (HTTP) (o Protocolo de Transferencia de Hipertexto en español) es el nombre de un protocolo el cual nos permite realizar una petición de datos y recurso. 

### Ruta (PATH)
Es la dirección de donde queremos obtener los recursos (URL)
### Métodos Http
HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. (GET, POST, PUT, PATCH, DELETE) . 

Todos los métodos hacen acciones diferentes pero nosotros lo configuramos.

GET = Obtener/Enviar datos por la url. Viene por defecto con fetch .  (Es la url con la que chequeamos los datos)

### Cabeceras (headers)
Cabeceras HTTP opcionales, que pueden aportar información adicional a los servidores.
### Códigos de respuestas (Response Codes)
Un código de estado, indicando si la petición ha sido exitosa, o no, y debido a que. 

[Codigos](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

[Codigo gato](https://http.cat/)

Es la Respuesta que nos trae el servidor.

### JSON 

JSON: JavaScript Object Notation, es un formato basado en texto estándar para representar datos estructurados en la sintaxis de objetos de JavaScript. Es comúnmente utilizado para transmitir datos en aplicaciones web.

Es el formato estandar para recibir/enviar información.

## Estructura del JSON

- Como se describió previamente, un JSON es una cadena cuyo formato recuerda al de los objetos literales JavaScript.
- 	Es posible incluir los mismos tipos de datos básicos dentro de un JSON que en un objeto estándar de JavaScript - cadenas, números, arreglos, booleanos, y otros  objeto.

Esto permite construir una jerarquia de datos - [como esta](https://pokeapi.co/api/v2/pokemon/ditto
)

### [Format para chrome](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)

## Volviendo a Fetch
```js
const url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));

```
-	Aquí estamos recuperando un archivo JSON a través de red e imprimiendo en la consola.
-	El uso de fetch() más simple toma un argumento (la ruta del recurso que quieres obtener) y devuelve un objeto Promise conteniendo la respuesta, un objeto Response.
-	Esto es, por supuesto,  una respuesta HTTP sin el archivo JSON.
-	Para extraer el contenido  en formato JSON desde la respuesta, usamos el método json(), el cual está implementado por los objetos Request y Response.
-	El método json() devuelve otra promesa.

:::tip GET 
Si la URL funciona en el navegador, es GET.
:::

:::warning API PUBLICAS
LAS API GRATIS Y PUBLICAS (SIN API KEY) A VECES SE CAEN 
:::

```js
//fetch(path/uri)
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((respuesta) => {
    // Vemos el status (codigo de respuesta ) , cabeceras
    console.log(respuesta);
   return respuesta.json();
}).then((data) => console.log(data.forms[0]));

```

```js
//fetch(path/uri)
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((respuesta) => {
    // Vemos el status (codigo de respuesta ) , cabeceras
    console.log(respuesta);
   return respuesta.json();
}).then((data) => console.log(data.forms[0].name));

```

## Parametros de fetch

### 1- resource
Esto define el recurso que desea recuperar (path/url)
### 2- init (opcionales)
Un objeto que contiene cualquier configuración personalizada que desee aplicar a la solicitud. Las posibles opciones son:

- method: El método de la petición, por ejemplo, GET, POST. Por defecto esta en GET.
-	headers: Cualquier encabezado que desee agregar a su solicitud.
-	body: Cualquier cuerpo que desea agregar a su solicitud: esto puede ser una Blob, BufferSource, FormData, URLSearchParams, USVString, o ReadableStreamobjeto. Tenga en cuenta que una solicitud que utiliza el método GET no puede tener un cuerpo.
-	mode: El modo en el que desea utilizar para la solicitud, por ejemplo, cors, no-cors, o same-origin.
-	credentials: Controla lo que hacen los navegadores con las credenciales.

## setAttribute()
el  setAttribute()  es para modificar un atributo y su valor.

1 parametro: el atributo a modificar

2 parametro: el nuevo valor del atributo.




## Practica

[Documentacion de la api](https://rickandmortyapi.com/documentation/)

[URL a utilizar](https://rickandmortyapi.com/api/character)

:::tip
Algunas API requieren un token de seguridad que suele ser de pago.
:::
:::tip
No colocar el template donde se va a pintar.
:::
:::tip
En el fetch siempre son dos await
:::
:::tip
En el template fijarse que elementos son únicos (clases , id etiqueta) para seleccionarlo.
:::
:::tip
Si hay bucle se utiliza un fragment.
:::
```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>API REST</title>
        <link
            crossorigin="anonymous"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            rel="stylesheet"
        />
    </head>

    <body>
          <div class="container my-5">
               <!-- Spinner cargando -->
               <section class="d-flex align-items-center d-none" id="loading">
                <strong>Cargando...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
               </section>

               <section class="row" id="card-dinamicas">
                   
               </section>
                

               <template id="template-card">
                <article class="col-12 col-md-6 col-lg-3 mb-3">
                      <div class="card text-center shadow">
                          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" class="card-img-top">
                          <div class="card-body">
                              <h5 class="card-title text-primary lead">Nombre personaje</h5>
                              <p class="lead text-secondary">Human</p>
                          </div>
                      </div>

                </article>
             </template>

          </div>
        <script src="app.js"></script>
    </body>
</html>

```
```js
// Cuando carga el DOM
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
})

const fetchData =  async () => {
    console.log("Obteniendo datos");
    
    try {
        loadingData(true);
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
         pintarCard(data);
    } catch (error) {

    } finally {
        loadingData(false);
    }

}

const loadingData = estado => {
    const loading = document.getElementById('loading');
    if (estado) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none');
    }
    
    
}

const pintarCard = data => {
    const contenedorCards = document.getElementById('card-dinamicas');
    const templateCard = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();
    data.results.forEach(item => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("img").setAttribute("src" , item.image);

        fragment.appendChild(clone);

    })

    contenedorCards.appendChild(fragment);
}

```

Codigo con una paginacion incompleta:

```js

// Cuando carga el DOM
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
})

const fetchData =  async (url = "https://rickandmortyapi.com/api/character") => {

    
    try {
        loadingData(true);
        const res = await fetch(url);
        const data = await res.json();
         pintarCard(data);
    } catch (error) {

    } finally {
        loadingData(false);
    }

}

const loadingData = estado => {
    const loading = document.getElementById('loading');
    if (estado) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none');
    }
    
    
}

const pintarCard = data => {

    const contenedorCards = document.getElementById('card-dinamicas');
    contenedorCards.textContent = "";
    const templateCard = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();
    data.results.forEach(item => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("img").setAttribute("src" , item.image);

        fragment.appendChild(clone);

    })
   "";
    contenedorCards.appendChild(fragment);
    pintarPaginacion(data);
}

const pintarPaginacion = data => {
    
    const paginacion = document.getElementById('paginacion');
    paginacion.textContent = "";
    const templatePaginacion = document.getElementById('template-paginacion').content;
    const clone = templatePaginacion.cloneNode(true);
    // Si no existe (es null)
    if (!data.info.prev) {
        clone.querySelector('.btn-outline-secondary').disabled = true;
    } else {
        clone.querySelector('.btn-outline-secondary').disabled = false;
    }
 
    if (!data.info.next) {
        clone.querySelector('.btn-outline-primary').disabled = true;
    } else {
        clone.querySelector('.btn-outline-primary').disabled = false;
    }
    
    paginacion.appendChild(clone);
    
    // paginacion.addEventListener("click" , e => {
    //     console.log("click");
    //     if (e.target.matches('.btn-outline-primary')) {
    //          if (data.info.next) {
    //             fetchData(data.info.next);
    //          }
          
    //     } 
    //     if (e.target.matches('.btn-outline-secondary')) {
    //         if (data.info.prev) {
    //             fetchData(data.info.prev);
    //         }
           
    //     }
    // })
}

```