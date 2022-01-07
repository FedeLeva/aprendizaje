# JavaScript Basico 2 

:::tip
TIP
Preocuparse por la eficiencia puede ser una distracción. Es otro factor más que complica el diseño del programa, y cuando estás haciendo algo que ya es difícil, esa cosa extra de la que preocuparte puede ser paralizante. Por lo tanto, empieza siempre por escribir algo que sea correcto y fácil de entender. Si te preocupa que sea demasiado lento, que normalmente no lo es, ya que la mayoría del código simplemente no se ejecuta con la frecuencia suficiente para llevar una cantidad significativa de tiempo, puedes medirlo después y mejorarlo si es necesario.
:::

## Interpolacion template string

Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.

Cuenta el espacio en blanco y habilita el uso de expresiones incrustadas.


Interpolación de expresiones

-	barra invertida "alt + 92" = Para saltos de linea
-	acento grave "alt + 96"  = Para hacer plantillas

Las plantillas de cadena de caracteres pueden contener marcadores, identificados por el signo de dólar y envueltos en llaves ${expresión}. Las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una función
la expresión es código js (variable , función , objeto , etc).

```js
let nombreUsuario = "nombre";
console.log("Bienvenido: \n" + nombreUsuario + "\n");
```
\n = Hace un salto de linea

```js
let nombreUsuario = "nombre";
console.log(`Bienvenido:   :  
 ${nombreUsuario}`);
```
Con la plantilla, usamos la interpolacion (${expresion})
,Con la interpolación podemos poner variables u otro tipo de código js

En este ejemplo lo mandamos a mayuscula con una función.

```js

let nombreUsuario = "nombre";
console.log(`Bienvenido:   :  
 ${nombreUsuario.toUpperCase()}`);

```
## toUpperCase();
toUpperCase() = Para convertir a mayuscula

Como reconoce los espacios en blanco , no hace falta usar el “+” 

Ejemplo con el operador ternario:

```js
let nombreUsuario = "Nombre"
let estado = false

console.log(`
${estado ? 'Bienvenido!' : 'Adiós!'} ${nombreUsuario}
`);

```
## var vs let vs const

var = todo lo hace de manera global. (no recomendado).

Uno de los mayores problemas al declarar variables con var, es que puede sobrescribir las declaraciones de variables sin errores.

```js
var estado = true;
var estado = false;
console.log(estado);
 

```
:::tip
En una aplicación pequeña, es posible que no se encuentre con este tipo de problema, pero cuando su código se agrande, puede sobrescribir accidentalmente una variable que no tenía la intención de sobrescribir.
:::

let: Una variable con el mismo nombre solo se puede declarar una vez.

No se permite declarar dos veces la misma variable.

Tira error:

```js
let estado = true;
let estado = false;
console.log(estado);

```
Pero let si deja sobrescribir el valor (NO EL NOMBRE DE LA VARIABLE).
```js
let estado = true;
 estado = false;
console.log(estado);

```
### Scope


```js
var estado = true
if (estado) {
    var estado = false
}
console.log(estado)

```
Da false ya que la variable es global



```js
let estado = true
if (estado) {
    let estado = false
}
console.log(estado)

```
Da true ya que en este ejemplo hay dos variable estado(uno en cada bloque)

bloque = {  código }

Tenemos un scope.

```js

{ variable = x }
{ variable = x }
//Son dos variables diferente ya que están existiendo en diferentes bloques

```

:::tip
TIP
En simples palabras el "scope de una variable" hace referencia al lugar donde esta va a vivir o podrá ser accesible.
:::

El scope de un var es global

El scope de un let esta limitado al bloque.

en for siempre es un let asi respeta el scope (solo existe en el for).

```js
for (let i = 0; i < 10; i++) {
}
console.log(i)

```
### const

const tiene todas las características increíbles de let, con la ventaja adicional de que las variables declaradas usando const son de solo lectura. Son un valor constante, lo que significa que una vez que se asigna una variable const, no se puede reasignar.

Error:

```js
const estado = true
estado = false
error:
for (const i = 0; i < 10; i++) {
    console.log(i)
}

```
Como el scope esta limitado al bloque, funciona:
```js
const estado = true
if (estado) {
    const estado = false
    console.log(estado)
}
console.log(estado)

```
:::tip

Algunos desarrolladores prefieren asignar todas sus variables usando const de forma predeterminada (me incluyo), a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, usan let
:::

### Array vs const
Es importante comprender que los objetos (incluidos los arreglos y las funciones) asignados a una variable mediante el uso const siguen siendo mutables. El uso de const solo evita la reasignación del identificador de variable.

Puede modificar lo que hay en el interior.

Error:

```js
const miArray = []
miArray = ["nuevoElemento"]
valido
```

Valido:
```js
const miArray = []
miArray[0] = ["nuevoElemento"]
console.log(miArray)
```

## Metodos del Array

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
## confirm()

confirm(): muestra una ventana de diálogo con un mensaje opcional y dos botones, Aceptar (true) y Cancelar (false).

Confirm devuelve un valor boolean , aceptar = true y cancelar = false.

## Funciones anónimas

En JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa una función como argumento a otra función. En su lugar, creamos funciones inline (en línea). No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar.

Funcion declarativa:
```js
// declaro la función
function numAleatorioRango(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// invoco la función
console.log(numAleatorioRango(1, 11))

```

Funcion expresada:

Es anonima ya que esta expresada en una variable.

La funcion se va a una variable

Es anónima porque la función no tiene ningún nombre

Ejemplo:

```js
const miNumero = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(miNumero(1, 11))

```
### Diferencia declarativa vs Expresada:

Una función expresada  No tiene hoisting

Si la invocas y luego la declaras, te va a tirar un error.

```js
console.log(miNumero(1, 11))
const miNumero = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

```

:::tip

La forma correcta de definir una función varía según el comportamiento que esperemos de la misma: con las funciones declaradas, tenemos la seguridad de que siempre estarán disponibles en tiempo de ejecución. Con las funciones expresadas, tendremos que éstas no son evaluadas hasta que el intérprete no alcance su posición en el código, lo cual puede generar errores en arquitecturas muy anidadas.

El hecho de que las funciones declarativas se evalúen antes que las expresiones, pueden producir comportamientos no deseados cuando forman parte de condicionales. Para estos casos, el uso de las funciones expresadas garantiza que éstas formarán parte del flujo general del programa, lo cual puede evitarnos sorpresa en determinados entornos.


:::

## Arrow functions

Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional

1. Le borras la palabra function
2. Luego de los parentesis  va la flecha (=>).
Quedando:
```js

const miNumero =  (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(miNumero(1,10));

```
### Abreviaciones:
Si se retorna en una línea , podemos quitar las llaves ({}) y la palabra return.

De esta forma el interpretre sabe que hay que retornar un valor

Ejemplo:

```js
const miNumero =  (min, max) =>  Math.floor(Math.random() * (max - min)) + min;

console.log(miNumero(1,10));

```

Lo que se retorna, lo pueden encerrar entre paréntesis:


```js
 const miNumero =  (min, max) => ( Math.floor(Math.random() * (max - min)) + min);

console.log(miNumero(1,10));

```

Si solo hay un parámetro , se puede quitar los parentesis:

```js

const miNumero =  max => ( Math.floor(Math.random() * (max - 1)) + 1);

console.log(miNumero(11));

```
Para colocar un parámetro con un valor por defecto es con el signo igual (=).

En este ejemplo el parámetro max tiene el valor 100 por defecto:

```js

const miNumero =  (min, max = 100) => ( Math.floor(Math.random() * (max - min)) + min);

console.log(miNumero(1));

```
Otros ejemplos:

```js

const miNumero =  (min = 1,  max = 100) => ( Math.floor(Math.random() * (max - min)) + min);

console.log(miNumero());

```

El minimo es 10 y el max 100:

```js
const miNumero =  (min = 1,  max = 100) => ( Math.floor(Math.random() * (max - min)) + min);

console.log(miNumero(10));

```
La palabra null/undefined para omitir el primer parámetro.

El mínimo es 1 y el máximo 50:

```js
const miNumero =  (min = 1,  max = 100) => ( Math.floor(Math.random() * (max - min)) + min);

console.log(miNumero(null , 50));

```

```js
const miNumero =  (min = 1,  max = 100) => ( Math.floor(Math.random() * (max - min)) + min);

console.log(miNumero(undefined , 50));


```

Los parametros con valores por defecto se puede aplicar a los otros tipos de funciones.

### Limitantes:
-	No tiene sus propios enlaces a this o super y no se debe usar como métodos. (No se puede acceder a this o super).
-	No tiene argumentos o palabras clave new.target.
-	No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
-	No se puede utilizar como constructor


## Arrow & forEach()

 El método forEach() ejecuta la función indicada una vez por cada elemento del array
 :::tip
 No solo recorre arrays 

 forEach puede recorrer NodeList y muchos mas

 :::

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
