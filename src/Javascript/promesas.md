# Promesas, Async, Await , API

## CallBack

-	 Es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
-	Cada vez se ocupan menos.
-	Pasar una función como argumento.
- Es una función que se pasa como argumento a otra función (externa).

:::tip
 Tener en cuenta los parametros de la funcion callback
:::
Ejemplo de una funcion callback con 1 parametro:
```js
const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
];

// Creamos una funcion flecha
const findPostById = (id, callback) => {
    const post = posts.find((item) => item.id === id);

    callback(post);
};
// La llamamos
findPostById(1, (post) => {
    console.log(post);
});

```
### Manejar los Errores

:::warning Problema
Si la ID buscada no está, aparece un error.
:::

Solución:

Siempre en los callback se manda como primer argumento el error y en el segundo argumento la respuesta satisfactoria (funciono correctamente).

:::tip
Las funciones callback deben tener dos argumentos, por lo tanto.
:::

```js
// Creamos una funcion flecha
const findPostById = (id, callback) => {
    const post = posts.find((item) => item.id === id);
    // Existe el post?
    if (post) {
        // Si lo encontro
        callback(null , post);
    } else {
        // Si no lo encuentra
        // En el error
        callback("No se encontro el post con id " + id);
    }
    
};
// La llamamos
findPostById(4, (err , post) => {
    // Si existe el error
    if (err) {
      return  console.log(err)
    } 
    console.log(post);

});

```
## Callback Hell
Cuando hay muchas validaciones (callback anidados (error/correcto)) 

Cuando hay un callback dentro de otro callback y así consecutivamente.

```js
// La llamamos
findPostById(1, (err, post) => {
    if (err) {
        return console.log(err);
    }
    console.log(post);
    findPostById(2, (err, post2) => {
        if (err) {
            return console.log(err);
        }
        console.log(post2);

       findPostById(3, (err , post) => {
           // Return de una linea
           if (err) return console.log(err);
           console.log(post)

          findPostById(4, (err , post) => {
            if (err) return console.log(err);
            console.log(post)
          })

       })
     

    });
});

```

## Promesas

Para solucionar el callback hell , aparecieron las promesas.

Es una promesa, donde el otro espera dos cosas , que  cumpla la promesa o que no la cumpla.

En caso de que se cumpla la promesa sucede algo y en caso que no, sucede otra cosa.

Una Promise (promesa en castellano) es un objeto que representa la terminación(éxito) o el fracaso de una operación asíncrona.

```js
// Creamos una funcion flecha
const findPostById = (id) => {
  const post = posts.find(item=>item.id == id) ;
   // Devolvemos una promesa (nueva)
   // La promesa tiene un callback con dos argumentos , la respuesta sastifactoria y la negativa
   return new Promise((sastifactoria , negativa) => {
       // Si existe el post  
       if (post) { 
           // Respuesta sastifactoria
           // Tiene un argumento
        sastifactoria(post)
       } else {
           // Respuesta negativa
          negativa("no se encontro id   " + id);
       }

   })

   
  

}

// Llamamos a la funcion y devuelve una promesa
console.log(findPostById(1));

// Se usa la propiedad then para obtener la respuesta sastifactoria
// Se requiere un callback en el then con los mismos argumentos que la respuesta sastifactoria
findPostById(1).then(post => console.log(post));

	
// Se usa la propiedad catch para obtener la respuesta negativa , la cual tambien necesita un callback con los mismos argumentos que la respuesta negativa.
findPostById(4).then(post => console.log(post)).catch(e => {
 console.log(e);
})

```

Se puede hacer de esta manera tambien:

```js
  // Creamos una funcion flecha
  // Devolvemos una promesa (resolve = respuesta sastifactoria , reject = respuesta negativa)
 // Devuelve una promesa la función flecha
  const findPostById = (id) => new Promise((resolve,reject) => {
    const post = posts.find(item=>item.id == id) ;
    // Si existe el post
    if (post) { 
                // Respuesta sastifactoria
                 // Tiene un argumento
                resolve(post)
               } else {
                   // Si no existe el post
                   // Respuesta negativa
                   // Tiene un argumento
                  reject("no se encontro id   " + id);
               }
  })

```
:::tip

Si no se necesita parámetros, se devuelve directamente la promesa sin necesidad de la función flecha
:::
## Hell de las Promesas
Muchas promesas anidadas
```js
// Como se puede ver, el then() puede devolver una promesa y se trata con otro then
// un catch es suficiente para tratar todas las respuestas negativas
findPostById(1)
    .then(post => {
        console.log(post)
        return findPostById(2)
    }).then(post => {
        console.log(post);
        return findPostById(3)
    }).then(post => {
        console.log(post);
        return findPostById(4)

    }).then(post => {
        console.log(post)
    })
    .catch(e => {
        console.log(e);
    })

```
## setTimeout()
 ### Tiene dos parámetros.
1.   Una función
2.   El tiempo en milisegundo

setTimeout ejecutara la función especificada (1 parametro)  después de x(2 parámetro) tiempo.

```js
// La funcion se ejecuta despues de 2 segundos
setTimeout(() => {
            const post = posts.find((item) => item.id === id);
          if  (post)  {
               resolve(post) 
           } else {reject("No encontrado por id: " + id);} 
        }, 2000);

```

## async await

Vamos a suponer que demora un tiempo tratar una base de datos.

Para eso usaremos la función setTimeout().
```js
const findPostById = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find((item) => item.id === id);
          if  (post)  {
               resolve(post) 
           } else {reject("No encontrado por id: " + id);} 
        }, 2000);
    });

    
findPostById(1)
.then((post) => console.log(post))
.catch((e) => console.log(e));

```

Las promesas son asíncronas. Se empiezan a ejecutar sin detener el código.

No me voy a quedar esperando a que el otro cumpla la promesa o no.

Mientras se espera una respuesta (de la promesa), se sigue ejecutando el resto.

```js
const findPostById = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find((item) => item.id === id);
          if  (post)  {
               resolve(post) 
           } else {reject("No encontrado por id: " + id);} 
        }, 2000);
    });

    
findPostById(1)
.then((post) => console.log(post))
.catch((e) => console.log(e));

console.log("fin del codigo");

```

:::tip Regla 1
Hay que utilizar funciones async.
:::
:::tip 
el await no puede funcionar sin un async.

con la palabra await se espera a que se ejecute la instrucción(promesa) para luego seguir con el resto del código.
:::

```js
const buscar = async (id) => {
    const post = await findPostById(id);
    console.log(post)
}
buscar(1);

console.log("fin del codigo");

```

:::warning Ojo
el await debe estar adentro de un async para funcionar.


el async y el await funciona solo con promesas


:::

-	async : La declaración de función async define una función asíncrona
-	await: El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función async function.

## Try catch
### Manejar Errores
Se utiliza try catch

```js
try { 
intenta ejecutar esto
} catch (error ) { 
Si falla lo que contiene el try, se ejecuta esto
}

```
se puede usar el finally a lo ultimo para ejecutar un código al final (se ejecuta si o si)

Se usa para la barra de cargar

```js
const buscar = async (id) => {
    let loading = true;
    try {
        const post = await findPostById(id);
    } catch (error) {
        console.log(error)
    } finally {
        console.log("se ejecuta si o si");
loading = false;
    }
   
   
}
buscar(4);

console.log("fin del codigo");

```

```js
const buscar = async () => {
    try {
        const postUno = await findPostById(1);
        const postDos = await findPostById(2);

//está demorando 4 segundos 
        console.log(postUno.title, postDos.title);
    } catch (error) {
        console.log(error);
    }
};

buscar();

```
## Promise.all
Pero si quieres que demore menos, cuando estas esperando promesa que no dependen entre ellas.

para eso se utiliza Promise.all que recibe las promesas que se quieren ejecutar.

```js
  const buscar = async () => {
        try {
            // Ejecutamos dos promesas juntas y devuelve los resultados en un array
            const resPosts = await Promise.all([
                findPostById(1) , findPostById(2)
            ])
          
    
            
            console.log(resPosts);
            console.log(resPosts[0]);
            console.log(resPosts[1]);
        } catch (error) {
            console.log(error);
        }
    };
    
    buscar();

    console.log("final del codigo");

```

:::tip
el await sirve para esperar a una promesa.
:::

:::warning Advertencia 
Solo te manda la respuesta (te devuelve el array) si todas las promesas funcionan correctamente.

Si uno falla, va a saltar al catch y no va a seguir con el código en cuestión (no devuelve el array).


:::

## fetch API

La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de características más potente y flexible.
-	El método fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar.
-	Devuelve una Promise que contiene la Response
-	Una vez que Response es recuperada, hay varios métodos disponibles para definir cuál es el contenido del cuerpo y como se debe manejar.
	

    [API que vamos a usar en los ejemplos](https://jsonplaceholder.typicode.com/)

```js
// lA url CON TODOS LOS POST
// const url = 'https://jsonplaceholder.typicode.com/posts';

// La url con el post que tiene la id 1
const url = 'https://jsonplaceholder.typicode.com/posts/1';

//El fetch recibe la url del recurso y devuelve una promesa
fetch(url)
    // Te muestra el response
    .then(res => console.log(res));

```
### Metodos del response
## json()
Te transforma la respuesta en json y te devuelve una promesa(con el contenido de la respuesta en formato json).

```js
//El fetch recibe la url del recurso y devuelve una promesa
fetch(url)
    // Te muestra el response
    .then(res => res.json())
    .then(data => console.log(data));

```

### Completo 

Tiene el catch(maneja los errores) y el finally(se ejecuta al final)

```js
//El fetch recibe la url del recurso y devuelve una promesa
fetch(url)
    // Te muestra el response
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((e)=> console.log(e))
    .finally(() => console.log("finalizo"));

```
:::tip

Podemos acceder a la url porque es una petición GET.

Podes configurar las cabeceras, métodos, verbos, etc con fetch pero por defecto lo hace GET.

:::
```js
const url = 'https://jsonplaceholder.typicode.com/posts/1';

const buscarID = async (id) => {
    try {
        // Es importante el await porque data depende de res
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

    } catch (e) {
           console.log(e);
    }
}

buscarID();

```

```js
const url = 'https://jsonplaceholder.typicode.com/posts/';

const buscarID = async (id) => {
    try {
        // Es importante el await porque data depende de res
        const res = await fetch(url + id);
        const data = await res.json();
        console.log(data);

    } catch (e) {
           console.log(e);
    }
}

buscarID(2);

```

## ¿Qué son las APIs?

Interfaces de Programacion de Aplicaciones (APIs por sus siglas en inglés)

API son construcciones disponibles en los lenguajes de programación que permiten a los desarrolladores crear funcionalidades complejas de una manera simple. Estas abstraen el código más complejo para proveer una sintaxis más fácil de usar en su lugar.
	
Si quisieras programar gráficos 3D, sería mucho más facil hacerlo usando una API escrita en un lenguaje de alto nivel como JavaScript o Python, en lugar de intentar escribir código de bajo nivel (por ejemplo: C o C++) que controle directamente la GPU del equipo u otras funciones gráficas
:::tip API
Es cuando queremos conectarnos a un recurso.

A través del “recurso”, obtenemos funcionalidades que pueden estar escrito en otro lenguaje.

Esas funcionalidades puede usar utilizar Google maps , habilitar la cámara del teléfono , brindar información o manipularla  , etc.

API es una forma de comunicar dos recursos con un estándar.

:::

## APIs en JavaScript del lado cliente
JavaScript del lado cliente, particularmente, tiene muchas APIs disponibles — estas no son parte del lenguaje en sí, sino que están construidas sobre el núcleo de este lenguaje de programación, proporcionándote superpoderes adicionales para usar en tu código. Por lo general, se dividen en dos categorías:

-	Las APIs de navegador: están integradas en tu navegador web, Por ejemplo, la API de Geolocalización proporciona algunas construcciones simples de JavaScript para obtener datos de ubicación con los que, por ejemplo, trazar tu ubicación en un mapa de Google. Realmente, el navegador está haciendo uso de códigos de bajo nivel complejos en segundo plano (por ejemplo, C++) para comunicarse con el hardware GPS del dispositivo (o lo que esté disponible para determinar los datos de posición), recuperar datos de posición y devolverlos al entorno del navegador para su uso en tu código. Pero una vez más, la API se encarga de abstraer esta complejidad.
Ej: fetch API , DOM , para acceder a la cámara , etc.
-	Las APIs de terceros: no están incluídas por defecto en el navegador, y por lo general es necesario obtener el código e información desde algún lugar de la Web. Por ejemplo, la API de Twitter permite hacer cosas como mostrar tus últimos tweets en un sitio web.
Es la que accedemos a sus recursos
Ej: La url que usamos, 

## APIs de navegador más comunes

-	APIs para manipular documentos cargados en el navegador. El ejemplo más obvio es la API DOM
-	APIs que obtienen datos del servidor, comunmente usadas para actualizar pequeñas secciones de una página web. Fetch API 
-	Las APIs para dibujar y manipular graficos: Las más populares son Canvas y WebGL
-	APIS de audio y vídeo como HTMLMediaElement, la Web Audio API, y WebRTC
-	Las APIs de dispositivos: geolocalización, notificaciones de sistema, vibración de hardware, etc
-	Las APIS de almacenamiento en el lado del cliente: Web Storage API (sessionStorage, localStorage), IndexedDB API

## APIs populares de terceros

- Google maps
-	Facebook, Twitter, Instagram, Discord, Youtube, etc
-	jsonplaceholde

##  ¿Que es API REST?

:::tip REST
Es un estándar

Un paso a paso que hay que seguir para que sea una API REST.
:::

REST: "Representational State Transfer" o traducido a "Transferencia de presentación de estado".

Cuando queremos comunicar nuestro mundo del Frontend con el Backend (por ejemplo con Node.js), necesitamos alguna técnica. 

Aquí es donde nosotros podemos construir nuestra propia API para que nuestras aplicaciones se comuniquen de manera efectiva.

Para que la comunicación no sea un despelote existe el término de REST, que es un estandar para la construcción de APIS. una técnica de arquitectura de software usada para construir APIs que permitan comunicar a nuestro servidor con sus clientes usando el protocolo HTTP mediante URIs lo suficientemente inteligentes para poder satisfacer la necesidad del cliente.

Por ende API REST en simples palabras sería: Una forma de entregar recursos para su utilización (comunicación) estandarizado y basado en arquitectura REST.

Para que sea REST:

-	REST es STATELESS: TOKEN para cada petición realizada a la API. (trabaja con token)
-	Crea URIs únicas que permiten al cliente entender y utilizar lo que está exponiendo. api.anexsoft.com/users (tiene uris únicas)
-	Tiene que responder a verbos Http: GET, POST, PUT, DELETE (trabajo con los verbos conocidos)

## ¿Qué es Restful?
REST es el concepto, RESTFul es la implementación y al crear un RESTFul creamos una API, la cual una API es un conjunto de funciones o procedimientos para que sea utilizado por otro software.

:::tip Restful
Si ya esta en producción y ya se puede comunicar con otros software , es una API Restful
:::
