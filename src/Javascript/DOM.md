# DOM

-	El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML.
-	Facilita una representación estructurada del documento y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido.
-	Una página web es un documento. Éste documento puede exhibirse en la ventana de un navegador o también como código fuente HTML.
- DOM = Document object model
- El archivo.html lo representa a través del DOM el navegador.
- Se accede al DOM a través de Document
- Document es el nodo superior del DOM
### ARBOL DOM
Son nodos que se pueden modificar
![ARBOL DOM](https://3.bp.blogspot.com/-08aop2nBOVc/We5H68rEhfI/AAAAAAAABFY/tLGK4qmKgNQmOCgItANKxZf5rNS0MKMswCPcBGAYYCw/s1600/arbolDOM.gif)
## Document
La interfaz Document representa cualquer página web cargada en el navegador y sirve como punto de entrada al contenido de la página (El árbol DOM).

Te lo muestra de dos formas distintas

```js
console.log(document);
```
### Propiedades

[Algunas propiedades](https://developer.mozilla.org/es/docs/Web/API/Document#properties)

```js
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.domain);

```
## [Console Table](https://developer.mozilla.org/es/docs/Web/API/Console/table)

### Metodos
[Algunos metodos](https://developer.mozilla.org/es/docs/Web/API/Document#methods)
```js
•	Document.getElementsByClassName(String className)
•	Document.getElementsByTagName(String tagName)
•	Document.getElementById(String id)
•	Document.querySelector(String selector)
•	Document.querySelectorAll(String selector)
•	Document.createDocumentFragment()
•	Document.createElement(String name)

```

:::tip
Se puede usar la propiedad classlist para manipular las clases (eliminar , añadir)

ClassList manipula todas las clases (como un todo), classlist las separa antes de manipularla (podes manipular la clase activo sin necesidad de afectar la clase inactivo).
:::

## getElementById()

-  Devuelve una referencia al elemento por su ID.
- Como parámetro recibe un String con el nombre del id.

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
 <h1 id="tituloWeb"> Lorem, ipsum dolor. </h1>


     <script src="app.js"></script>
</body>
</html>

```

```js
console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb").textContent);
console.log(document.getElementById("tituloWeb").innerHTML);

```
## Propiedad textContent
- La propiedad texContent te devuelve el texto del elemento.
- Tambien sirve para asignar un nuevo texto
## Propiedad innerHTML
- La propiedad innerHTML te devuelve el texto del elemento, te permite insertar código html pero no es recomendable porque podemos tener inyecciones.
- Hace lo mismo que textContent
- Acepta codigo html

## Etiqueta script
la etiqueta <script></script> debe ir antes de la etiqueta cierre del body así primero carga todo el DOM para luego poder manipularlo. En caso contrario al querer acceder a un elemento te dará null.

En este caso te da null:
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js"></script> <!-- Qué pasará?? -->
</head>

```
Pero si quieren dejar la etiqueta script aribba:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js"></script>
</head>
<body>
 <h1 id="tituloWeb"> Lorem, ipsum dolor. </h1>


    
</body>
</html>

```
## DOMContentLoaded(EVENTO)
Se ejecuta cuando el navegador HTML está completamente cargado y el árbol DOM está construido, pero es posible que los recursos externos como <img> y hojas de estilo aún no se hayan cargado. 
```js

document.addEventListener("DOMContentLoaded", () => {
    console.log(document.querySelector("h1"));
    console.log(document.querySelector("h1").textContent);
});

```
## Atributo defer
-	El atributo defer indica al navegador que no espere por el script. En lugar de ello, debe seguir procesando el HTML, construir el DOM. El script carga “en segundo plano” y se ejecuta cuando el DOM esta completo.
-	Los scripts con defer siempre se ejecutan cuando el DOM esta listo (pero antes del evento DOMContentLoaded).
-	defer no funciona igual en todos los navegadores.
- es nuevo y algunos navegadores no se pusieron de acuerdo en cómo funciona defer.
```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Document</title>
	    <script src="app.js" defer></script>
	</head>
	<body>
	 <h1 id="tituloWeb"> Lorem, ipsum dolor. </h1>
	

	    
	</body>
	</html>

```

## querySelector()
Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.

Parametro = Un String con selectores css

```html
<body>
 <h1 id="tituloWeb" class="text-primary"> Lorem, ipsum dolor. </h1>


 <script src="app.js" defer></script>
</body>

```

```js

console.log(document.querySelector("#tituloWeb"));
console.log(document.querySelector(".text-primary"));
console.log(document.querySelector("h1"));

```
Siempre selecciona al primero , ejemplo: 

```html
<body>
 <h1 id="tituloWeb" class="text-primary"> Lorem, ipsum dolor. </h1>

  <div class="container">
      <p class="text-danger">Lorem, ipsum dolor. 1</p>
      <p class="text-danger">Lorem, ipsum dolor. 2</p>
      <p class="text-danger">Lorem, ipsum dolor. 3</p>
  </div>

    <p class="text-danger">Esta fuera del container</p>
 <script src="app.js" defer></script>
</body>

```

```js
console.log(document.querySelector(".text-danger"));
```

## querySelectorAll()
- Devuelve todos los elementos del documento que coincida con el grupo especificado de selectores.
- Parametro = Un String con selectores css
- Devuelve una NodeList.

```js
console.log(document.querySelectorAll(".text-danger"));
```

Ejemplo para seleccionar solo los párrafos del div

```js
console.log(document.querySelectorAll(".container .text-danger"));
```
##  querySelector vs getElementById
-	El método querySelector le permite recuperar un elemento mediante una consulta de selector de CSS
-	El método getElementById recupera un elemento por su ID DOM.
-	Ambos métodos tienen una amplia compatibilidad con los navegadores. Debe optar por usar el método querySelector si necesita seleccionar elementos usando reglas más complejas que se representan fácilmente usando un selector CSS. Si desea seleccionar un elemento por su ID, usar getElementById es una buena opción.

-	A menudo necesitará realizar selecciones más complejas en su HTML, y ahí es donde querySelector puede ser más útil; usarlo de manera constante también puede hacer que su código sea más fácil de leer para otros codificadores.
-	En otras palabras, el principal beneficio de usar querySelector o querySelectorAll es que podemos seleccionar elementos usando selectores CSS, lo que nos da una forma uniforme de manejar la selección de elementos, y eso lo convierte en una forma preferida de seleccionar elementos para muchos desarrolladores.
-	Si usa una herramienta como Babel para admitir navegadores más antiguos, entonces puede ser irrelevante, ya que las funciones más nuevas se pueden convertir a código compatible con versiones anteriores cuando compila su script.
-	800.000 selecciones por segundo, querySelector es aprox. 6% más lento.
- [mas info](https://beamtic.com/getelementbyid-vs-queryselector)

## Element
[mas info](https://developer.mozilla.org/es/docs/Web/API/Element)
### Algunas propiedades:

```js
const h1 = document.getElementById("tituloWeb");
//Muestra las clases
console.log(h1.className);
//Muestra la id
console.log(h1.id);
// Ver los estilos que tiene.
console.log(h1.style);
// Ver que etiqueta es
console.log(h1.tagName);
// Ver el texto
console.log(h1.textContent);

// Cambia el texto del elemento
h1.textContent = "nuevo texto desde js";

//manipular el css del elemento
// elemento.style.propiedadcss = "valor";
// si la propiedad tiene mas de una palabra , usa camelCase
h1.style.backgroundColor = "red";
h1.style.color = "white";

```
### Algunos metodos
-	addEventListener: Registra un controlador de evento para un tipo de evento específico en un elemento.
-	appendChild: Inserta un nodo así como el último nodo hijo de este elemento.
-	hasAttributes: Verifica si el elemento tiene o no algún atributo.
- [Algunos metodos](https://developer.mozilla.org/es/docs/Web/API/Element#m.c3.a9todos)



## addEventListener

### Eventos
En JavaScript, la interacción con el usuario se consigue mediante la captura de los eventos que éste produce. Un evento es una acción del usuario ante la cual puede realizarse algún proceso (por ejemplo, el cambio del valor de un formulario, o la pulsación de un enlace)


### addEventListener()
-	 Registra un evento a un objeto en específico 
-	El Objeto especifico puede ser un simple elemento en un archivo, el mismo documento , una ventana o un XMLHttpRequest.
-	Cuando el usuario activa el evento, el objeto hace una acción progamada.
- [mas info](
https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
)
- [tipo de eventos](https://developer.mozilla.org/es/docs/Web/Events#eventos_est%C3%A1ndar)

```js
element.addEventListener(tipo, listener);
```

-	tipo: tipo de evento a escuchar. (String) Define que debe pasar para que se active el evento (click , pasar el mouse por encima , etc)
-	listener: El objeto que recibe una notificación cuando un evento de el tipo especificado ocurre. Debe ser un objeto implementando la interfaz EventListener o solo una function en JavaScript. (Funciones) . Define el código que se ejecutara cuando el evento se active.

## Click
Es un tipo de evento.
:::tip
Es una buena práctica primero seleccionar los elementos (las variables const) y luego manipularla.
:::

```html
 <h1 id="tituloWeb" class="text-primary"> Lorem, ipsum dolor. </h1>
 <button id="boton">Cambiar texto</button>

```
```js
const h1 = document.getElementById("tituloWeb");
const boton = document.getElementById("boton");

boton.addEventListener("click" , () => {
     h1.textContent = "texto desde js"
     h1.style.color = "red";
})

```

## Practica

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seleccionar Color</title>
    <link
      crossorigin="anonymous"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      rel="stylesheet"
    >
</head>

<body>

    <div class="container mt-5 text-center">
        <label
          class="form-label"
          for="inputColor"
        >Color picker</label>
        <input
          id="inputColor"
          class="form-control form-control-color mb-3 w-100"
          title="Seleccione un color"
          type="color"
          value="#563d7c"
        >
        <button
          id="boton"
          class="btn btn-primary w-100"
        >Visualizar</button>
    </div>
    <div class="container mt-5">

        <p
          id="textoHexa"
          class="lead text-center"
        >#563d7c</p>
        <div
          id="cardColor"
          class="card text-center p-5"
          style="background-color: #563d7c;"
        ></div>
    </div>

    <script src="app.js"></script>
</body>

</html>

```

```js
const inputColor = document.getElementById("inputColor");
const boton = document.getElementById("boton");
const textoHexa = document.getElementById("textoHexa");
const cardColor = document.getElementById("cardColor");

console.log(inputColor.value);

boton.addEventListener("click", () => {
    console.log(inputColor.value);
    textoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
});

```
## Copiar en el portapapeles
### Extra
- Se realiza con navigator.clipboard

```js
const inputColor = document.getElementById("inputColor");
const boton = document.getElementById("boton");
const textoHexa = document.getElementById("textoHexa");
const cardColor = document.getElementById("cardColor");

console.log(inputColor.value);

boton.addEventListener("click", () => {
    console.log(inputColor.value);
    textoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));

});

```

:::tip
ElementoInput.value = Te devuelve el valor del input.
:::

## createElement()

El método document.createElement() crea un elemento HTML especificado por su tagName.

En el parámetro va el nombre de la  etiqueta HTML que se va a crear.
```js
// Creamos una etiqueta <li></li>
const li = document.createElement('li');
li.textContent = "elemento desde js";
console.log(li);

```

## appendChild()

Agrega un nuevo nodo al final de la lista de elementos hijos de un elemento padre especificado.
```js
elementopadre.appenChild(nuevoHijo (child)).
```
- Le asigna un padre al elemento.
- Crea un nodo hijo (child).
- Ese nodo hijo queda como el ultimo hijo que tiene el elemento padre.

```html
  <ul id="lista">
    <li>Elemento estático</li>
  </ul>

```

```js

const lista = document.getElementById("lista")

// Creamos una etiqueta <li></li>
const li = document.createElement('li');
li.textContent = "elemento desde js";

//Se lo asignamos al ul
lista.appendChild(li);

```

:::warning


- Si el child hace una referencia a un nodo existente en el documento, el método appendChild se mueve de su posición actual a su nueva posición.
- Ésto significa que el nodo no puede estar en dos puntos del documento de manera simultánea.
- Así que si el nodo ya contiene un padre, primero es eliminado, y después se añade a la nueva posición.
- Se puede usar Node.cloneNode para hacer una copia del nodo antes de añadirlo debajo de su nuevo elemento padre.

:::

Ejemplo:
```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

paises.forEach(pais => {
    const li = document.createElement('li');
    li.textContent = pais;
    lista.appendChild(li);
})

```

Añade solo un elemento en la lista, eliminando el estático:
```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

// paises.forEach(pais => {
//     const li = document.createElement('li');
//     li.textContent = pais;
//     lista.appendChild(li);
// })


paises.forEach(pais => {
    lista.innerHTML = `<li>${pais}</li>`;
  
})

```
Para corregirlo , hay que concatenar:
```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

// paises.forEach(pais => {
//     const li = document.createElement('li');
//     li.textContent = pais;
//     lista.appendChild(li);
// })


paises.forEach(pais => {
    lista.innerHTML += `<li>${pais}</li>`;
  
})

```

:::tip
innerHTML hace lo mismo que textContent pero también permite código html.
:::

### Reflow
[reflow](https://developers.google.com/speed/docs/insights/browser-reflow)

  Ocurre cuando un navegador debe procesar y dibujar parte o la totalidad de una página web nuevamente, como después de una actualización en un sitio interactivo.

 En Los dos ejemplo en cada iterracion provoca reflow , afectando el rendimiento.

## Fragment
Soluciona el reflow.
-	La interfaz DocumentFragment representa un objeto de documento mínimo que no tiene padre.
-	Se utiliza como una versión ligera de Document que almacena un segmento de una estructura de documento compuesta de nodos como un documento estándar.
-	La gran diferencia se debe al hecho de que el fragmento de documento no forma parte de la estructura de árbol del documento activo.
-	Los cambios realizados en el fragmento no afectan el documento (incluso en reflow) ni inciden en el rendimiento cuando se realizan cambios.
- El fragment se crea de manera paralela, NO ESTA EN EL DOM hasta que se una con un appenchild.
- Es un espacio de memoria donde podemos crear nodos que no pertenecen al DOM.
- Una vez que creamos una estructura en el fragmento, la metemos en el DOM.

Ejemplo

```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

//Crear un fragmento
const fragment = document.createDocumentFragment();
// Tambien crea un fragmento
//const fragment = new DocumentFragment();

paises.forEach(pais => {
    const li = document.createElement('li');
    li.textContent = pais;
    fragment.appendChild(li);
})

lista.appendChild(fragment);

```

## insertBefore()

[insert Before](https://developer.mozilla.org/es/docs/Web/API/Node/insertBefore)
- Parametros = Recibe el nuevo nodo (el que creamos)  y la referencia del nodo.
- Es como appenchild pero Crea un nodo antes del nodo referencia.

## firstChild
- [firstChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild)
- Devuelve el primer hijo de un elemento

```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

//Crear un fragmento
const fragment = document.createDocumentFragment();
// Tambien crea un fragmento
//const fragment = new DocumentFragment();

paises.forEach(pais => {
    const li = document.createElement('li');
    li.textContent = pais;
    const referenceNode = fragment.firstChild;
    fragment.insertBefore(li, referenceNode);
})

lista.appendChild(fragment);

```
## Practica 2
```html
<ul id="lista">
    
</ul>

```

```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

//Crear un fragmento
const fragment = document.createDocumentFragment();
// Tambien crea un fragmento
//const fragment = new DocumentFragment();

paises.forEach(pais => {
    const li = document.createElement('li');
    // Añade la clase list
    li.className = "list";
    const b = document.createElement('b')
    b.textContent = "Pais:"
    const span = document.createElement('span');
    span.className = "text-primary";
    span.textContent = pais;

    li.appendChild(b);
    li.appendChild(span);
    fragment.appendChild(li);
})

lista.appendChild(fragment);




```
Con innerHTML: (Hace reflow)
```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

const fragment = document.createDocumentFragment();

paises.forEach(pais => {
    lista.innerHTML += `<li class="list">
    <b>Pais:</b>
    <span class="text-primary">${pais}</span>
 </li>`;
})
lista.appendChild(fragment);

```
Para que no lo haga:
:::warning
Ojo que aquí estamos reemplazando fragment por let template, por ende hace un efecto parecido y minimizamos el reflow, ya que solo una vez que tenemos nuestro templateString listo, lo incorporamos al HTML.
:::
```js
const lista = document.getElementById("lista")

const paises = ["Perú", "Bolivia", "Colombia"];

const fragment = document.createDocumentFragment();

let template = '';
paises.forEach(pais => {
    template += `<li class="list">
    <b>Pais:</b>
    <span class="text-primary">${pais}</span>
 </li>`;
})
lista.innerHTML = template;

```
## innerHTML vs createElement 

- [1](https://medium.com/@kevinchi118/innerhtml-vs-createelement-appendchild-3da39275a694)
- [2](https://stackoverflow.com/questions/49758867/which-is-better-to-use-doucment-fragment-or-string-concatenation-while-appendi)
- [3](https://stackoverflow.com/questions/15182402/javascript-document-createelement-or-html-tags)
- [4](https://stackoverflow.com/questions/2305654/innerhtml-vs-appendchildtxtnode)
- [5](https://stackoverflow.com/questions/2946656/advantages-of-createelement-over-innerhtml)
## template 

- Piensa en la plantilla como un fragmento de contenido que está siendo almacenado para un uso posterior en el documento.	
- es un mecanismo para mantener el contenido HTML del lado del cliente , el cual no se renderiza cuando se carga una página, pero que posteriormente puede ser instanciado durante el tiempo de ejecución empleando JavaScript.
- El analizador procesa el contenido del elemento \<elemento> durante la carga de la página, pero sólo lo hace para asegurar que esos contenidos son válidos; sin embargo, estos contenidos del elemento no se renderizan
- los elementos \<template> contienen un DocumentFragment en su propiedad HTMLTemplateElement.content.
### HTML
 - Adentro de la etiqueta témplate va el contenido que se va a repetir muchas veces.
- Debe estar en el body y antes de \<script>\</script>
- Puede haber muchos template
- Hay que ponerle una id a la etiqueta template.




```html

  <ul id="lista">
     
  
</ul>

<template id="liTemplate">
  <li class="list">
  <b>Pais:</b>
  <span class="text-primary">nombre del pais</span>
</li>
</template >

    <script src="app.js"></script>

```
### js
- Hay que clonarlo en JS al elemento template.
- Hay que saber donde van a ir los elementos del template (identificar el nodo padre).

```js
const lista = document.getElementById("lista")
const liTemplate = document.getElementById("liTemplate");
// Clonamos
const clone = liTemplate.content.cloneNode(true);

console.log(clone);

```
```js
const lista = document.getElementById("lista")
const liTemplate = document.getElementById("liTemplate");
// Clonamos
const clone = liTemplate.content.cloneNode(true);

clone.querySelector('.text-primary').textContent = "agrege a través de un template"

lista.appendChild(clone);

```  

### Fragment + template 

```js
const lista = document.getElementById("lista")
const liTemplate = document.getElementById("liTemplate");
const fragment = document.createDocumentFragment();
const paises = ["Perú", "Bolivia", "Colombia"];

paises.forEach( pais => {
    const clone = liTemplate.content.cloneNode(true);
    clone.querySelector('span').textContent = pais;
    fragment.appendChild(clone);
})

lista.appendChild(fragment);

```

:::tip
  HTMLTemplateElement tiene una propiedad content, que es de solo lectura y DocumentFragment contiene el subárbol DOM que representa la plantilla. Tenga en cuenta que el uso directo del valor de content podría provocar un comportamiento inesperado; consulte la sección Evitar el error de DocumentFragment a continuación

  [Errores](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#avoiding_documentfragment_pitfall)
:::

### Los addEventListener no funcionaria:

```js
const lista = document.getElementById("lista")
const liTemplate = document.getElementById("liTemplate");
const fragment = document.createDocumentFragment();
const paises = ["Perú", "Bolivia", "Colombia"];

const clickPaises = () => console.log("me diste click");

paises.forEach( pais => {
    const clone = liTemplate.content.cloneNode(true);
    clone.querySelector('span').textContent = pais;
    clone.addEventListener('click',clickPaises);
    fragment.appendChild(clone);
})

lista.appendChild(fragment);

```
### Solucion:
#### Utilizar firstElementChild

```js
const lista = document.getElementById("lista")
const liTemplate = document.getElementById("liTemplate");
const fragment = document.createDocumentFragment();
const paises = ["Perú", "Bolivia", "Colombia"];

const clickPaises = () => console.log("me diste click");

paises.forEach( pais => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector('span').textContent = pais;
    clone.addEventListener('click',clickPaises);
    fragment.appendChild(clone);
})

lista.appendChild(fragment);

```

## Objeto del evento (e)
- La funcion que se ejecuta cuando ocurre un evento puede tener un parametro
- El parametro  representa un objeto del evento que se ejecuto  que contiene varios valores/funciones.
- El objeto evento tiene propiedades como target (el elemento que activo el evento) , la propiedad dataset que la contiene el elemento que activo el elemento , etc

:::tip
Se puede pasar el objeto evento como parámetro hacia otras funciones/metodos externa
:::

### propiedad target
 Es el elemento que activo el evento

```js
const lista = document.getElementById("lista")
const liTemplate = document.getElementById("liTemplate");
const fragment = document.createDocumentFragment();
const paises = ["Perú", "Bolivia", "Colombia"];

const clickPaises = e => console.log("me diste click" , e.target);

paises.forEach( pais => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    console.log(clone);
    clone.querySelector('span').textContent = pais;
    clone.addEventListener('click',clickPaises);
    fragment.appendChild(clone);
})

lista.appendChild(fragment);

```
## Crear Snippets
- [Ver info](https://pablocianes.com/guardar-snippets-personalizados-en-visual-studio-code/)
- Control + Shift + P  : Escribir snippet



- En html: 

```json
{
    // Place your snippets for html here. Each snippet is defined under a snippet name and has a prefix, body and 
    // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
    // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
    // same ids are connected.
    // Example:
    // "Print to console": {
    //  "prefix": "log",
    //  "body": [
    //      "console.log('$1');",
    //      "$2"
    //  ],
    //  "description": "Log output to console"
    // }

    "Template in HTML": {
        "prefix": "template",
        "body": ["<template>$1</template>"],
        "description": "Agrega el template en html"
    }
}

```

## atributo data-nombre
el atributo  data-nombre de los botones contiene un valor que puede ser leído por javascript.
```html
<button class="btn btn-primary" data-fruta="frutilla">Agregar</button>
<button class="btn btn-primary" data-fruta="banana">Agregar</button>
<button class="btn btn-primary" data-fruta="manzana">Agregar</button>

```
Devuelve un DOMSTRING con el nombre y el valor del atributo data-nombre del elemento.

fruta es el nombre del data-nombre (data-fruta = "valor")

```js
console.log(element.dataset);
```

Devuelve el valor del atributo data-nombre del elemento:

fruta es el nombre del data-nombre (data-fruta = "valor")

```js
    console.log(element.dataset.fruta);
```

## Practica 3

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super</title>
    <link
      crossorigin="anonymous"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      rel="stylesheet"
    >
</head>

<body>

  <main class="container mt-5">
    <div class="row text-center">
        <article class="col-sm-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Frutilla 🍓</h5>
                    <button class="btn btn-primary" data-fruta="frutilla">Agregar</button>
                </div>
            </div>
        </article>
        <article class="col-sm-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Banana 🍌</h5>
                    <button class="btn btn-primary" data-fruta="banana">Agregar</button>
                </div>
            </div>
        </article>
        <article class="col-sm-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Manzana 🍏</h5>
                    <button class="btn btn-primary" data-fruta="manzana">Agregar</button>
                </div>
            </div>
        </article>
    </div>
</main>
<section class="container mt-3">
  <ul class="list-group" id="carrito">
   
  </ul>
</section>

<template id="template">
  <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="lead">A list item</span>
      <span class="badge bg-primary rounded-pill">14</span>
  </li>
</template>
    <script src="app.js"></script>
</body>

</html>

```

```js
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button");

// Objeto
const carritoObjeto = {};

const agregarCarrito = (e) => {
    //    console.log(e.target.dataset);
    //  console.log(e.target.dataset.fruta);
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    if (carritoObjeto.hasOwnProperty(producto.id)) {
        producto.cantidad = carritoObjeto[producto.id].cantidad + 1;
    }

    // lo asignamos al carrito;
    // Es lo mismo que carritoObjeto.(valor de producto.id) = producto;
    // Estariamos creando una propiedad con los corchetes.
    // Dicha propiedad es un objeto.
    carritoObjeto[producto.id] = producto;
    pintarCarrito();
};

const pintarCarrito = () => {
       carrito.textContent = "";

    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
        
    });

    carrito.appendChild(fragment);
};

agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));

```

## El burbujeo y la captura

El burbujeo y la captura de eventos son dos mecanismos que describen lo que sucede cuando dos controladores del mismo tipo de evento(eventos) se activan en un elemento. (Padre – Hijo) (Cuando dos eventos del mismo tipo se ejecutan en un elemento).

```html
<div class="container">
    <div class="border border-primary border-5 py-5 m-3">
        Lorem, ipsum dolor
        <div class="border border-secondary border-5 py-5 m-3">
            Lorem, ipsum dolor
            <div class="border border-danger border-5 py-5 m-3">
                Lorem, ipsum dolor
            </div>
        </div>
    </div>
</div>

```
### Por defecto se trabaja de la forma burbuja:
Fase de burbuja (bubbling): Se propaga desde el elemento hijo hasta el padre. (comportamiento por defecto)

```js

const padre = document.querySelector(".border-primary");
const hijo = document.querySelector(".border-secondary");
const nieto = document.querySelector(".border-danger");

padre.addEventListener("click", (e) => console.log("padre"));
hijo.addEventListener("click", (e) => console.log("hijo"));
nieto.addEventListener("click", (e) => console.log("nieto"));

```

### Fase de Captura 


Fase de captura: Se propaga desde el elemento padre hasta el hijo. (Al reves que la burbuja)

Para eso se utiliza un tercer parámetro en AddEventListener , que por defecto siempre es false (por eso no lo colocamos).

Pero si le ponemos true, se invierte y se propaga desde el elemento padre hasta el hijo.

```js
const padre = document.querySelector(".border-primary");
const hijo = document.querySelector(".border-secondary");
const nieto = document.querySelector(".border-danger");

padre.addEventListener("click", (e) => console.log("padre") , true);
hijo.addEventListener("click", (e) => console.log("hijo") , true);
nieto.addEventListener("click", (e) => console.log("nieto") , true);

```
## stopPropagation
Sirve para evitar el burbujeo y la captura (Lo anterior)

evita la propagación adicional del evento actual en las fases de captura y bubbling.

con el método stopPropagation() le decimos que deje de hacer la fase de burbujeo o captura , por lo tanto cada elemento es forzado a ejecutar solamente un evento del mismo tipo.

```js
const cajas = document.querySelectorAll(".border");
cajas.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("click");
    });
});

```
## preventDefault
Cancela el  comportamiento por defecto del elemento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, se sigue ejecutando el  evento.

Cancela el comportamiento por defecto del elemento, pero sigue ejecutando el evento.

```html
<form>
    <input type="text" name="nombre">
    <button type="submit">Enviar</button>
</form>

```

```js
const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("click");
});

```

```html

<a href="#">ancla</a>

```

```js
const ancla = document.querySelector("a");
ancla.addEventListener("click", (e) => e.preventDefault());

```
## Delegación de Eventos

La delegación de eventos es básicamente un patrón para manejar eventos de manera eficiente.

En lugar de agregar un detector de eventos(EventListener) a todos y cada uno de los elementos similares, podemos agregar un detector de eventos(EventListener) a un elemento principal(el padre/contenedor principal) y ejecutar una acción/un procedimiento  según el elemento(objetivo particular) que activo el evento , utilizando la propiedad .target del objeto de evento.

Así evitamos la propagación 👌

:::tip
La delegación de eventos sirve para añadir eventos a elementos que todavia no existen en el DOM.
:::



```html
<div class="container">
    <div
      id="padre"
      class="border border-primary border-5 py-5 m-3"
      data-div="divPadre"
    >
        Lorem, ipsum.
        <div
          id="hijo"
          class="border border-secondary border-5 py-5 m-3"
          data-div="divHijo"
        >
            Lorem, ipsum.
            <div
              id="nieto"
              class="border border-danger border-5 py-5 m-3"
              data-div="divNieto"
            >
                Lorem, ipsum.
            </div>
        </div>
    </div>
</div>

```

```js

const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
    console.log(e.target);
});

```

A través de la propiedad target averiguamos que elemento ejecuto el evento y en base a eso ejecutamos un trozo de codigo determinado.

Podemos averiguar a que elemento pertenece por la id.

```js
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
    console.log(e.target.id);
});



const container = document.querySelector(".container");
container.addEventListener("click", (e) => {

    if (e.target.id === "padre") {
        console.log("diste click al padre");
    }
});

```
Podemos averiguar a que elemento pertenece por el método matches.
## Metodo Matches
El método matches() comprueba si el Elemento sería seleccionable por el selector CSS especificado en el parametro; en caso contrario, retorna false.

Comprueba si el elemento existe a través de un selector CSS.

```js
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {

   console.log(e.target.matches(".border-secondary"));
});

```
```js
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {

   
   if (e.target.matches(".border-secondary")) {
       console.log("Diste click al hijo");
   }
});

```
Podemos averiguar a que elemento pertenece atraves del dataset.
## data-nombre
El atributo data-nombre es para hacer algo con JavaScript

Podemos acceder al valor del atributo data a través del nombre.
:::tip
Un elemento puede tener varios dataset.
:::

:::tip
Se puede añadir el atributo data por javascript a un elemento.

elemento.dataset.nombre = valor;

el nombre y el valor puede ser cualquiera ya que es el que se va a crear


:::

```js
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {

   console.log(e.target.dataset);

});

```

En el ejemplo de arriba , aparece un objeto con el nombre-valor del atributo data del elemento.

Se puede acceder al valor con el punto (dataset.nombre) o corchetes (dataset[‘nombre’])

```js
   console.log(e.target.dataset.div);

   console.log(e.target.dataset['div']);

```

```js
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {

   if (e.target.dataset.div == "divNieto") {
       console.log("diste click en el nieto");
   }

});


```

:::tip
Puedes seleccionar todo el document, así no tienes que estar detectando el componente principal 🤙

document.addEventListener()
:::

## Práctica

:::tip
parseInt Para convertir un String a numero entero.
:::

:::tip
return se puede usar para no devolver nada  (Sirve para eliminar elementos dentro de filter).

return               no es lo mismo que    return item


Si un if devuelve algo en solo una línea, no hace falta las llaves ({}).


:::

:::tip
en el reduce, podes especificar qué tipo de valor va a devolver en el segundo parámetro.
:::

:::tip
En los ciclos(bucle) solo se usa el fragment .
:::


```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito Objeto</title>
    <link crossorigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" rel="stylesheet">
</head>

<body>

    <main class="container mt-5">
        <div class="row text-center">
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Frutilla 🍓</h5>
                        <p class="lead">$300</p>
                        <button class="btn btn-primary btn-sm" data-fruta="frutilla" data-precio="300">Agregar</button>
                    </div>
                </div>
            </article>
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Banana 🍌</h5>
                        <p class="lead">$100</p>
                        <button class="btn btn-primary btn-sm" data-fruta="banana" data-precio="100">Agregar</button>
                    </div>
                </div>
            </article>
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Manzana 🍏</h5>
                        <p class="lead">$200</p>
                        <button class="btn btn-primary btn-sm" data-fruta="manzana" data-precio="200">Agregar</button>
                    </div>
                </div>
            </article>
        </div>
    </main>

    <section class="container mt-3">
        <ul class="list-group" id="carrito"></ul>
    </section>

    <footer id="footer" class="container mt-3">
        <template id="templateFooter">
            <div class="card">
                <div class="card-body d-flex justify-content-between align-items-center">
                    <p class="lead mb-0">TOTAL: $<span>1500</span></p>
                    <button class="btn btn-outline-primary">Finalizar Compra</button>
                </div>
            </div>
        </template>
    </footer>

    <template id="template">
        <li class="list-group-item text-uppercase bg-secondary text-white">
            <span class="badge bg-primary rounded-pill align-middle">14</span>
            <span class="lead align-middle">A list item</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <p class="lead mb-0">Total: $<span>200</span></p>
            </div>
            <div>
                <button class="btn btn-sm btn-success">Agregar</button>
                <button class="btn btn-sm btn-danger">Quitar</button>
            </div>
        </li>
    </template>

    <script src="app.js"></script>
</body>

</html>

```

```js

const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const footer = document.querySelector("#footer");
const templateFooter = document.querySelector("#templateFooter");
const fragment = document.createDocumentFragment();
let carritoArray = [];

// Delegación de eventos:
document.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target.dataset.fruta);
    // console.log(e.target.matches(".card button"));
    if (e.target.matches(".card button")) {
        agregarCarrito(e);
    }

    // console.log(e.target.matches(".list-group-item .btn-success"));
    if (e.target.matches(".list-group-item .btn-success")) {
        btnAumentar(e);
    }

    // console.log(e.target.matches(".list-group-item .btn-danger"));
    if (e.target.matches(".list-group-item .btn-danger")) {
        btnDisminuir(e);
    }
});

const agregarCarrito = (e) => {
    // console.log(e.target.dataset);
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    };

    // buscamos el indice
    const index = carritoArray.findIndex((item) => item.id === producto.id);

    // si no existe empujamos el nuevo elemento
    if (index === -1) {
        carritoArray.push(producto);
    } else {
        // en caso contrario aumentamos su cantidad
        carritoArray[index].cantidad++;
    }

    // console.log(carritoArray);
    pintarCarrito();
};

const pintarCarrito = () => {
    carrito.textContent = "";

    // recorremos el carrito y pintamos elementos:
    carritoArray.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".text-white .lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        clone.querySelector("div .lead span").textContent =
            item.precio * item.cantidad;
        clone.querySelector(".btn-success").dataset.id = item.id;
        clone.querySelector(".btn-danger").dataset.id = item.id;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);

    pintarFooter();
};

const pintarFooter = () => {
    footer.textContent = "";

    const total = carritoArray.reduce(
        // El 0 es para especificar que se devuelve un numero y no un String
        (acc, current) => acc + current.precio * current.cantidad,
        0
    );

    // console.log(total);

    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector("p span").textContent = total;

    // fragment.appendChild(clone);
    footer.appendChild(clone);
};

const btnAumentar = (e) => {
    // console.log(e.target.dataset.id);
    carritoArray = carritoArray.map((item) => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++;
        }
        return item;
    });
    pintarCarrito();
};

const btnDisminuir = (e) => {
    // console.log(e.target.dataset.id);
    carritoArray = carritoArray.filter((item) => {
        // console.log(item);
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 0) {
                item.cantidad--;
                // Si la cantidad es igual a 0 , no retorna nada y por lo tanto se elimina del array.
                // Si es una sola linea no hace falta las llaves
                if (item.cantidad === 0) return;
                // Si es mayor a 0 , retorna el elemento.
                return item;
            }
        } else {
            return item;
        }
    });
    pintarCarrito();
};


```