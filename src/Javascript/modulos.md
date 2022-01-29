# Export/Import/LocalStorage

## JS Módulos

### Antes 
No había mucho código para trabajar con JavaScript .

A lo mucho era 100 lineas de código.

Javascript no tenia una forma nativa de separar archivos.


### Despues

Son mas de 500 lineas de código.

Con el tiempo salieron algunos complementos como CommonJS , AMD y Node.

Aparecieron los [Modulos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)

## Modulos
-	Proporcionar mecanismos para dividir código JavaScript en módulos separados, que se puedan importar cuando sea necesario.
-	Node.js ha tenido esta capacidad durante mucho tiempo, y hay una serie de bibliotecas y marcos de JavaScript que permiten el uso de módulos (por ejemplo, CommonJS y AMD que estan  basados en sistemas de módulos como RequireJS, y recientemente Webpack y Babel).
-	La buena noticia es que los navegadores modernos han comenzado a admitir la funcionalidad de los módulos de forma nativa.
-	Modulo es llevar nuestro código a otro archivo , encapsularlo y luego poder traerlo para poder manejarlo de una forma mas ordenada.

:::tip .mjs vs .js
Las dos extensiones son de Javascript , pero mjs es para representar un modulo.

[Link](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules#reflexi%C3%B3n_%E2%80%94_.mjs_versus_.js)
:::

## Problema 
 HTML
 ```html
 <script src="js/app.js"></script>
    <script src="js/fruta.js"></script>

 ```
 app.js
 ```js
 const fruta = "🍉";
 ```
 fruta.js
  ```js
 const fruta = "🍉";
 ```
 :::warning ERROR
Error por sobrescribir una variable const
 :::

 ## IIFE

 
- Es una solución al problema.
-	Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
-	Es un patrón de diseño también conocido cómo función autoejecutable.
-	Son funciones que se ejecutan automáticamente
-	Se encapsula el código(scope) en la función y no chocaría con otros archivos.
- 	La función se convierte en una expresión de función que es ejecutada inmediatamente. La variable dentro de la expresíon no puede ser accedida desde afuera.
- [Mas info](https://developer.mozilla.org/es/docs/Glossary/IIFE)


### Pasos
1. Definimos una funcion anónima (puede ser una  función flecha)
2. A la función anónima se le encierra entre paréntesis
3. Y al final se le pone otro paréntesis.

app.js
```js
(function(){
    const fruta = "🍉";
    console.log(fruta);
})()

```
fruta.js
```js
(() => {
    const fruta = "🍌";
    console.log(fruta);
})()

```
:::tip
Como se puede ver, no chocan, no se sobrescriben.
:::

### Desventajas
- No poder manejar las variables en otro archivo 
- No tenemos alcance de nuestras variables y se nos puede salir de las manos. 
:::tip Solucionar problemas
 Para solucionar estos problemas(desventajas), se deben usar los Módulos.
 :::
:::tip Orden de etiqueta script 
Cuidado con el orden de la etiqueta SCRIPT cuando un archivo depende del otro 

Generalmente van del más independiente al más dependiente
```js
 <script src="js/app.js"></script>
    <script src="js/fruta.js"></script>
```
 


:::

## export e import

- Es para trabajar con módulos
-	Lo primero que debes hacer para acceder a las funciones del módulo es exportarlas.
-	Esto se hace usando la declaración export.
-	Puedes exportar funciones, var, let, const y, como veremos más adelante clases.
-	Deben ser elementos de nivel superior; no puedes usar export dentro de una función, por ejemplo.
-	Esto se conoce como exportaciones con nombre.

- Exportar = Sacamos del país un producto
- Importar = Cuando traemos un producto de afuera a nuestro país. (Consumimos algo de afuera)

### Ventaja
- Solo vamos a  llamar al archivo que va a recibir todas las importaciones (El que consume productos de afuera)
```html
 <script src="js/app.js"></script>
```
fruta.js

Exporta algo

Export con nombre
```js
export const sandia = "🍉";
```
app.js

Importa lo de fruta.js, la variable sandia especificamente
```js
//import {nombre de lo que se importa} from "./ubicacion"
import {sandia} from "./sandia.js";
console.log(sandia);

```

:::warning
Al ejecutarlo aparece:

Uncaught SyntaxError: Cannot use import statement outside a module
:::
Para solucionar ese error , en la etiqueta script ponemos el atributo type con el valor module.
```js
 <script src="js/app.js" type="module"></script>
```
Otro ejemplo (Exportacion con nombre)

fruta.js
```js
export const sandia = "🍉";

export function pintarPlatano(){
    console.log("🍌");
}

```
app.js
```js
//import {nombre de lo que se importa} from "./ubicacion"
import {sandia , pintarPlatano } from "./fruta.js";
console.log(sandia);
 pintarPlatano();

```
O tambien puede ser:
```js
//import {nombre de lo que se importa} from "./ubicacion"
import {sandia  } from "./fruta.js";
import {pintarPlatano} from "./fruta.js";

console.log(sandia);
 pintarPlatano();

```
Otro Ejemplo: 

fruta.js
```js
export const sandia = "🍉";

export function pintarPlatano(){
    console.log("🍌");
}

export const frutilla = () => {
    console.log("🍓");
}

export class Fruta{
    constructor(nombre){
        this.nombre = nombre;
    }
}

```
:::tip
Tambien podes escribir export solo una vez y poner los nombres que se van a exportar  entre llaves {}
:::
```js
 const sandia = "🍉";

 function pintarPlatano(){
    console.log("🍌");
}

 const frutilla = () => {
    console.log("🍓");
}

 class Fruta{
    constructor(nombre){
        this.nombre = nombre;
    }
}
export {
    sandia, pintarPlatano , frutilla , Fruta
}

```
app.js
```js
//import {nombre de lo que se importa} from "./ubicacion"
import {pintarPlatano , frutilla , sandia , Fruta} from "./fruta.js";

console.log(sandia);
 pintarPlatano();
 frutilla();
 const guinda = new Fruta("🍒");
 console.log(guinda);

```
:::tip
Todos los ejemplos son de exportación con nombre.
:::


:::tip Diferencias entre módulos y scripts estándar
Diferencia entre un módulo y un script(js nativo)
[link](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules#otras_diferencias_entre_m%C3%B3dulos_y_scripts_est%C3%A1ndar)
:::

## export default
-	También hay un tipo de exportación llamado exportación predeterminada.
-	Solo se permite una exportación predeterminada por módulo.
-	Las exportaciones por defecto No necesitan nombre
-	Al importar le podés poner un nombre cualquiera.
-	Al importar, no tenes que ponerlo entre llaves{}.

Ejemplo: Se exporta sandia por defecto y se importa con el nombre melon.

fruta.js
```js
  const sandia = "🍉";
 export default  sandia

 function pintarPlatano(){
    console.log("🍌");
}

 const frutilla = () => {
    console.log("🍓");
}

 class Fruta{
    constructor(nombre){
        this.nombre = nombre;
    }
}
export {
     pintarPlatano , frutilla , Fruta
}

```

app.js
```js
//import {nombre de lo que se importa} from "./ubicacion"
import {pintarPlatano , frutilla  , Fruta} from "./fruta.js";
import melon from './fruta.js';
console.log(melon);

```
Otro ejemplo:

fruta.js
```js
// Le podes quitar el nombre (opcional)
 export default function pintarPlatano(){
    console.log("🍌");
}

 const frutilla = () => {
    console.log("🍓");
}

 class Fruta{
    constructor(nombre){
        this.nombre = nombre;
    }
}
export {
    frutilla , Fruta
}

```
app.js
```js
//import {nombre de lo que se importa} from "./ubicacion"
// La importacion de algo por defecto no va entre {}
import  pintarPlatano , {frutilla  , Fruta} from './fruta.js'; 
pintarPlatano();

```
## export con alias

con la palabra reservada as podemos asignarle un alias.

Ejemplo:

Importamos a la frutilla(función) como fresa.
app.js
```js
import  pintarPlatano , {frutilla as fresa  , Fruta} from './fruta.js'; 
fresa();
```
## LocalStorage
- [info](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
-	LocalStorage : Permite guardar datos en el navegador.
-	Los datos persisten almacenados entre las diferentes sesiones de navegación(pestañas del navegador)
-	LocalStorage es similar a sessionStorage. La única diferencia es que, mientras los datos almacenados en localStorage no tienen fecha de expiración, los datos almacenados en sessionStorage son eliminados cuando finaliza la sesion de navegación - lo cual ocurre cuando se cierra la página.
-	Las claves y los valores son siempre cadenas de texto(String)

:::tip API REST
NORMAS API REST: 

No podemos guardar sesiones en el servidor.
:::

Guardar un valor: 
```js
localStorage.setItem("platano" , "🍌");
```
:::tip 
Fijarse luego en  consola – Aplicación – Almacenamiento local – http://***  , Que se guardaron los datos.

El localstorage vive en un dominio especifico.

localstorage vive en el navegador.
:::

```js
//windows.localStorage.setItem("platano" , "🍌");
// guardar valor
// Guardar la clave platano con el valor banana
// banana -> 🍌    clave -> valor
localStorage.setItem("platano" , "🍌");

//obtener valor
//geItem("key/clave") obtiene el valor de una clave almacenada
console.log(localStorage.getItem("platano"));

```

```js
//windows.localStorage.setItem("platano" , "🍌");
// guardar valor
// Guardar la clave platano con el valor banana
// banana -> 🍌    clave -> valor
localStorage.setItem("platano" , "🍌");

//obtener valor
//geItem("key/clave") obtiene el valor de una clave almacenada

    const platano = localStorage.getItem("platano");
    console.log(platano);

//Eliminar valor
// Eliminar la clave -> valor del localStorage
//removeItem("key/clave") elimina la clave-valor
    localStorage.removeItem("platano");

```

```js

//windows.localStorage.setItem("platano" , "🍌");
// Guardamos valores
localStorage.setItem("platano" , "🍌");
localStorage.setItem("sandia" , "🍉");
	
// Eliminamos todos los valores
// Elimina todas las clave->valor que estaban almacenada en localStorage
localStorage.clear();

```
:::tip 
Generalmente se pregunta si existe el valor con un if.
:::
```js
localStorage.clear();
localStorage.setItem("platano" , "🍌");

if (localStorage.getItem("platano")) {
    const platano = localStorage.getItem("platano");
    console.log(platano);
}

```

:::tip ¿Actualizar los valores?
No existe en localStorage, más adelante veremos que se tiene que capturar el elemento y volver a guardarlo.
:::

## JSON.stringify() & JSON.parse()
### JSON.stringify() 
- El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON.
- Convierte un objeto/otro tipo de dato(averiguar) en String.

```js
const frutas = [
    {
        nombre: "🍌",
        color: "amarillo",
    },
    {
        nombre: "🍒",
        color: "rojo",
    },
    {
        nombre: "🍏",
        color: "verde",
    },
];
//Convierte un objeto/otro tipo de dato en String
// JSON.stringify(objeto/etc)
localStorage.setItem("frutas" , JSON.stringify(frutas));

```
## JSON.parse()
- El método JSON.parse() analiza una cadena de texto como JSON. 
- Convierte un String en un objeto/otro tipo de dato

```js
•	//Convierte un string en un objeto/otro tipo de dato
•	//JSON.parse(String);
•	const frutaDesdeLocal = JSON.parse(localStorage.getItem("frutas"));
•	console.log(frutaDesdeLocal);

```

```js
//Convierte un string en un objeto/otro tipo de dato
//JSON.parse(String);
if(localStorage.getItem("frutas")) {
    const frutaDesdeLocal = JSON.parse(localStorage.getItem("frutas"));
    console.log(frutaDesdeLocal);
}

```
## Práctica TODO:

:::tip template
- El Template  va afuera de donde se va a insertar.


- El template busca dentro del template, no busca lo que está afuera del mismo. En este ejemplo , el template solo tiene un btn , por lo tanto lo seleccionamos por esa clase (el template ignora los btn que están afuera)
:::

:::tip contenedor que se va a añadir elementos(appenchild)
- Siempre vaciar el contenedor que luego se va a pintar (para evitar pintar los mismos elementos varias veces)
:::
:::tip trim
- trim límpia los caracteres en blanco del comienzo o del final.

- Y si se hace la negación(!todo.trim()) , devuelve true si no hay un String en su interior (si solo hay espacio en blanco).


:::

:::tip return 
- Usar el return vacio para que se deje de ejecutar el resto del código de la función.
:::

:::tip delegacion de eventos
- Usamos la delegación de eventos para asignarle eventos a elementos que todavia no existen.
:::

:::tip dataset 
- Creamos data-nombre (dataset) para la id.

- El dataset siempre guarda String


:::

```html

<!DOCTYPE html>
<html lang="es">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />

    <title>TODO app</title>
</head>

<body>
    <div class="container my-5">
        <h1>Todo app</h1>
        <section class="alert alert-danger d-none">
            Campo todo vacio
        </section>
        <form id="formulario">
            <input type="text" name="nombre" placeholder="Ingrese un Todo" class="form-control mb-2" value="todo 1" id="">
            <button class="btn btn-primary w-100" type="submit">Agregar</button> </button>
        </form>
        <section id="pintarTodo" class="mt-3">

        </section>
    </div>
    <template id="templateTodo">
        <article class="alert alert-warning d-flex aligns-item-center justify-content-between">
            <p class="lead mb-0 ">lorem</p>
            <div>
                <button class="btn btn-danger">Borrar</button>
            </div>
        </article>
    </template>
    <script src="js/app.js" type="module"></script>

</body>

</html>

```

```js


const formulario = document.querySelector("#formulario ");
const pintarTodo = document.querySelector("#pintarTodo ");
const templateTodo = document.querySelector("#templateTodo ").content;
let todos = [];
const alert = document.querySelector(".alert");
formulario.addEventListener('submit', e => {
    alert.classList.add('d-none');
    e.preventDefault();
    const data = new FormData(formulario);
    const [todo] = [...data.values()];
    // Si el campo esta vacio
    if (!todo.trim()) {
        //console.log("te equivocaste mandaste vacio");
        alert.classList.remove('d-none');
        return;
    }
    agregarTodo(todo);
    pintarTodos();
})

const agregarTodo = todo => {

    const objetoTodo = {
        nombre: todo,
        id: `${Date.now()}`

    }
    todos.push(objetoTodo);
}

const pintarTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
    pintarTodo.textContent = "";

    const fragment = document.createDocumentFragment();

    todos.forEach(item => {
        const clone = templateTodo.cloneNode(true);

        clone.querySelector(".lead").textContent = item.nombre;
        // Añadimos el atributo data-id = valor
        clone.querySelector(".btn").dataset.id = item.id;

        fragment.appendChild(clone);
    })

    pintarTodo.appendChild(fragment);
}

document.addEventListener('click', e => {
    // console.log(e.target.dataset);
    if (e.target.matches(".btn-danger")) {
        todos = todos.filter(item => item.id !== e.target.dataset.id);
        pintarTodos();
    }
})

// Cuando carga el DOM
document.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem("todos")) {
        todos = JSON.parse(localStorage.getItem("todos"));
        pintarTodos();
    }
});

```