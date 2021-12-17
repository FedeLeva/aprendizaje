# Array


Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables.

En javascript son dinámicos, no hace falta declarar la dimensión(tamaño).

En javascript podes mezclar datos . Un array puede tener String , números , etc.


[] = Array

Con una coma separas los elementos(valores) del array.

Cada valor corresponde a un índice [Numero]

Los índice empiezan con 0.

Para  llamar a un elemento del array

variable[índice]

```js
let frutas = ["manzana", "platano", "pera"];
console.log(frutas);

```

Conceptos claves:

length: Tamaño de array (cantidad de elementos) (NO ES EL INDICE)

índice: Comienzan en cero, es decir, el índice del primer elemento de un array es 0.



```js
let frutas = ["manzana", "platano", "pera"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

```

:::tip
undefined

Una variable a la que no se le ha asignado valor, o no se ha declarado en absoluto (no se declara, no existe) son de tipo undefined. Un método o sentencia también devuelve undefined si la variable que se está evaluando no tiene asignado un valor. Una función devuelve undefined si no se ha devuelto un valor.
:::

## Recorrer un Array

El método forEach() ejecuta la función indicada una vez por cada elemento del array

El parámetro es una función flecha (la que se va a ejecutar por cada elemento)

La función flecha puede tener un parámetro que va a representar el  valor de cada elemento del array:
```js
let frutas = ["manzana", "sandía", "pera"]
frutas.forEach(fruta => console.log(fruta))
```
La función flecha puede tener un segundo parámetro que va a representar el índice del valor de cada elemento del array:

```js
let frutas = ["manzana", "sandía", "pera"]
frutas.forEach((fruta , index) => { 
    console.log(`${index}  :  ${fruta}  `)
})

```

La función flecha puede tener un tercer parámetro que va a presentar el array entero:

```js
let frutas = ["manzana", "sandía", "pera"]
frutas.forEach((fruta , index , array) => { 
    console.log(`${index}  :  ${fruta}  `)
    console.log(array);
})


```
## Metodos que afectan al array Original

## push
El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

```js
const frutas = ["Banana"]
frutas.push("Sandía")
console.log(frutas)

```
## pop
El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
```js
const frutas = ["Banana" , "Pera"]
const frutaEliminado = frutas.pop();
console.log(frutas)
console.log(frutaEliminado);

```
## shift
El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
```js
const frutas = ["Banana" , "Pera"]
const frutaEliminado = frutas.shift();
console.log(frutas)
console.log(frutaEliminado);

```
## unshift
El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
```js
const frutas = ["Banana"]
frutas.unshift("Sandía")
console.log(frutas)

```
Ejemplo: 

```js
const frutas = []
const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

frutas.push(fruta)

while (confirm('¿Desea agregar otro elemento al 🛒?')) {
    const fruta = prompt('¿qué fruta desea comprar?')
    frutas.push(fruta)
}

console.log('Ustede compró: ')
for (let fruta of frutas) {
    console.log(fruta)
}

```

## Paradigma de progamación
-	Un paradigma de programación no es más que una forma de ver y crear código de programación. Para resolver problemas.
-	Existen diferentes formas de diseñar un lenguaje de programación y varios modos de trabajar para obtener los resultados que necesitan los programadores.
-	Los lenguajes de programación adoptan uno o varios paradigmas en función del tipo de órdenes que permiten implementar como, por ejemplo, Python o JavaScript, que son multiparadigmas.
	
---

### Son:
1.	Imperativo: (Emperador) en el que el programador instruye a la máquina cómo cambiar su estado. El progamador dicta el camino a seguir para conseguir los resultados esperados.
      -	procedimental que agrupa las instrucciones en procedimientos.
      -	orientado a objetos (OPP o POO) que agrupa las instrucciones con la parte del estado en el que operan.
2.	Declarativo: en el que el programador simplemente declara las propiedades del resultado deseado, pero no cómo calcularlo. El programador dice el resultado que quiere obtener, pero no la manera en que se va a realizar
    -	funcional en el que el resultado deseado se declara como el valor de una serie de aplicaciones de función.
    -	lógico en la que el resultado deseado se declara como la respuesta a una pregunta sobre un sistema de hechos y reglas.
    -	matemático en el que el resultado deseado se declara como la solución de un problema de optimización.
o	reactivo en el que se declara el resultado deseado con flujos de datos y la propagación del cambio.
### Imperativa vs Declarativa

-	Programación imperativa: Nosotros dictamos el camino a seguir a través del control de flujo: variables, funciones, if, else, switch, loops ( while, for, for of, for in), try catch, async await. Por lo tanto siempre utilizas programación imperativa en Javascript.
-	Programación declarativa: Declaras lo que quieres que suceda, no cómo se hace. La programación funcional básicamente significa escribir código que hace algo (declara lo que se hace) pero no es específico sobre cómo hacerlo (imperativo).

:::tip
-	Javascript permite un estilo de desarrollo tanto declarativo como imperativo, atendiendo asi a qué objetivo se busca alcanzar (declarativo) o extendiéndose sobre cómo se debe alcanzar un objetivo (imperativo).
-	Si bien las últimas incorporaciones del lenguaje muestran una tendencia hacia un paradigma claramente declarativo (funcional), ambos estilos coexisten en la industria actual y suponen diferencias a efectos de optimización, rendimiento, legibilidad o mantenibilidad de nuestras aplicaciones, entre otros.
-	Ambos enfoques pueden lograr los mismos objetivos, y no tenemos que elegir solo uno al programar porque JavaScript es un lenguaje de "múltiples paradigmas"


:::

### POO
-	La programación orientada a objetos es una forma de programación imperativa puesto que al programar se describe la secuencia que debe seguir el programa para resolver un problema dado.
-	Hace uso de estructuras de datos llamadas objetos que aglutinan propiedades y métodos conjuntamente con sus interacciones.
-	La programación orientada a objetos se basa también en conceptos como la abstracción de datos, la encapsulación, los eventos, la modularidad, la herencia y el polimorfismo.

### Funcional
La programación funcional básicamente significa escribir código que hace algo (declara lo que se hace) pero no es específico sobre cómo hacerlo (imperativo).

La programación funcional es otro enfoque común en el desarrollo de software (paradigma de programación). En programación funcional, el código está organizado en funciones más pequeñas y básicas que se pueden combinar para construir programas de mayor complejidad.

## Metodos que no afectan al Array
### Es progamacion funcional
###  	Estos métodos no mutan el array original, sino que nos devuelven uno nuevo.

## Map()
El método map iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de  la función callback en cada elemento. Esto lo hace sin mutar el arreglo original.

:::tip
Una función de callback es una función que se pasa a otra función como un argumento.
:::
### Parametros:
1. Funcion (Callback)
El parámetro del callback va a representa el valor que contenga cada elemento del arreglo al recorrerlo.

La función callback siempre debe retornar algo.

Ejemplo: 
```js
// Obtengo el mismo array:
const frutas = ["🍌", "🍏", "🍓"];

const nuevoArray = frutas.map((item) => {return item })

console.log(nuevoArray);

```
Otro Ejemplo Abreviado: 

```js
const frutas = ["🍌", "🍏", "🍓"];

const nuevoArray = frutas.map((item) => item )

console.log(nuevoArray);

```

:::tip
Te permite crear una copia del array totalmente independiente al original.
:::
Otros Ejemplo:

```js


const frutas = ["🍌", "🍏", "🍓"];

const nuevoArray = frutas.map((item) => item )
frutas.push("🍉");
console.log(nuevoArray);

```

```js
const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
];
 const names = users.map((user) => user.name );
 console.log(names);

```

```js
// Crea un nuevo array multiplicando por 2 cada elemento del array numeros
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPorDos = numeros.map((item) => item*2);

console.log(numerosPorDos);


```

## filter()

El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

### Parametros:
1. Funcion (Callback)
El parámetro del callback va a representa el valor que contenga cada elemento del arreglo al recorrerlo.

La función callback siempre debe retornar algo.

Puede devolver todos los elementos del array o algunos.

Ejemplo:

```js
// Devuelve al usuario cuya edad es mayor a 30
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const mayores = users.filter((item) => item.age > 30);

console.log(mayores);

```
```js
// Eliminar un usuario del array:
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const usersFiltrado = users.filter((item) => item.uid !== 3);

console.log(usersFiltrado);

```
## find()
El método find() devuelve el valor del primer elemento del array que cumple la  condición  implementada por la función 

### Parametros:
1. Funcion (Callback)
El parámetro del callback va a representa el valor que contenga cada elemento del arreglo al recorrerlo.

La función callback siempre debe retornar algo.

Ejemplo:

```js
// Devolver el usuario con la uid 2.
 const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const amy = users.find((user) => user.uid === 2);

console.log(amy);

const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 2, name: "Amy5", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const amy = users.find((user) => user.uid === 2);

console.log(amy);

```

```js
// Ejemplo con destructuring:
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 2, name: "Amy5", age: 30 },
    { uid: 3, name: "camperCat", age: 10 },
];

const {age} = users.find((user) => user.uid === 2);

console.log(age);

```

## some()
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

Devuelve un valor booleano.

Devuelve true si existe un elemento del array que cumple la condición.
### Parametros:
1. Funcion (Callback)
El parámetro del callback va a representa el valor que contenga cada elemento del arreglo al recorrerlo.

La función callback siempre debe retornar algo.

Ejemplo:

```js

const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const existe = users.some((user) => user.uid === 2);
console.log(existe);

```

## findIndex()

El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la condición de la  función proporcionada. En caso contrario devuelve -1.

### Parametros:
1. Funcion (Callback)
El parámetro del callback va a representa el valor que contenga cada elemento del arreglo al recorrerlo.

La función callback siempre debe retornar algo.

Ejemplo:

```js
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const indice = users.findIndex((user)=> user.uid === 2);
console.log(indice);

```

 ```js
 
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const indice = users.findIndex((user)=> user.uid === 2);
console.log(indice);
console.log(users[indice]);

 ```

 ## Hay mas métodos de búsquedas de un array (Investigar)


 ## Slice()
El método slice() devuelve una parte del array dentro de un nuevo array .

Como parámetros tenes que especificar el índice de inicio y el índice final (no incluido). El array original no se modificará.
### Parametros:
1. Indice comienzo (incluido)
2. Indice final (No incluido)

Ambos son INT
```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];

const arrayNuevo = arr.slice(1,3);
// Devuelve un array ["Dog" , "Tiger"];
console.log(arrayNuevo);

```
## concat()
 El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
 ### Parametros:
 Arrays a fusionar 

 ```js
 const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);

 ```
 ## Sintáxis Spread (...)

 [
permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde son esperados.
](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

Es lo mismo que concant pero usando los tres puntos (“…”)

```js
// Todos los elementos del array 1 (…array1) y todos los elementos del array 2 (…array2) se juntan
 const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = [...array1, ...array2];

console.log(array3);

```

```js
// Con la Coma separamos los elementos, por lo tanto se puede cambiar el orden
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = [...array2 , ...array1];

console.log(array3);

```

```js
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = [...array2 , 'Al reves' , ...array1];

console.log(array3);

```

## reduce()
El método reduce () ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

El acumulador en la primera vuelta es 0.

Lo que devuelve la función en cada vuelta se lo asigna al acumulador.

El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y , en su ultima instancia, se convierte en el valor final , único y resultante.

### Parametros:
1. Funcion (Callback)

El callback tiene dos parametros:
   1. Acumulador
   2. El valor que contiene el elemento del array

La función callback siempre debe retornar algo.

```js
//Sumar todos los elementos de un array
const numeros = [1, 2, 3, 4, 5];

const sumaTodos = numeros.reduce((acumulador, valorActual) => acumulador + valorActual);

console.log(sumaTodos);

```
:::tip
El acumulador puede ser un array 
:::

```js
//Generar un array con todos los valores.
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const soloNumeros = arrayNumeros.reduce(
    (acc, current) => acc.concat(current)
);

console.log(soloNumeros);

```
Otro Ejemplo para hacer lo mismo:

```js
//Generar un array con todos los valores.
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const arrayPlano = [].concat(...arrayNumeros);
console.log(arrayPlano);

```
## flat()
[Es nuevo](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

El método flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
### Parametros:
1. Profundidad (INT) , POR DEFECTO ES 1

Ejemplos:
```js
//Generar un array con todos los valores.
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const arrayPlano = arrayNumeros.flat();
console.log(arrayPlano);

```
Ejemplo con Parametro:

 [5,6] esta en la profundidad 2  ya que esta adentro de un sub array.

Entonces asignamos la profundidad 

```js
//Generar un array con todos los valores.
var arr1 = [1, 2, [3, 4, [5, 6]]];
// Que saque hasta el nivel de profundidad 2 
const arrayPlano = arr1.flat(2);
console.log(arrayPlano);

```
## split()
El método split() divide un objeto de tipo String en un array, mediante un separador.

Convierte un String en array, mediante un separador.
### Parametros:
1. Separador (String)

Ejemplos:
```js
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

```
## join()

Lo contrario a split

Convierte un array en un String, mediante un separador.
### Parametros:
1. Separador (String)

Ejemplos:
```js
const nuevoTexto = arrayMeses.join(",");
console.log(nuevoTexto);

```

:::tip
Separador: Es una cadena usada para separar cada uno de los elementos del arreglo. El separador es convertido a una cadena si es necesario. Si este se omite, los elementos del arreglo son separados con una coma (",").
:::

## Practica

### HTML

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
### JS
```js
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button");

// Objeto
const carritoObjeto = [];

const agregarCarrito = (e) => {
   
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

  const indice = carritoObjeto.findIndex((item) => item.id === producto.id );

 
   if (indice === -1) {
       carritoObjeto.push(producto);
   } else {
       carritoObjeto[indice].cantidad++;
   }
   
   
    pintarCarrito(carritoObjeto);
};

const pintarCarrito = (array) => {
       carrito.textContent = "";

    array.forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
        
    });

    carrito.appendChild(fragment);
};

agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));



```