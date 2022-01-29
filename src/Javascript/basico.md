# JavaScript Basico

## Como agregamos js?

``` html
   <script>
        codigo js
    </script>
```
La etiqueta html script es para ingresar codigo javascript.

### 1- En el head

``` html
 <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        alert('jugando con JS')
    </script>
</head>

<body>
    <h1>Jugando con JS</h1>
</body>

</html>

```

:::warning
No recomendado , ensuciamos javascript y html
:::

  ### 2- Mezclado
  Es con un atributo que representa un evento (en este ejemplo "onclick" ) y una funcion javascript (en este ejemplo saludar)
```html

<body>
    <h1>Jugando con JS</h1>
    <button onclick="saludar()">Dame click</button>
    <script>
        function saludar() {
            alert('Hola soy un saludo')
        }
    </script>
</body>


```
:::warning
No hagas esto 👇👇👇, es una mala práctica contaminar tu HTML con JavaScript 🤦‍♂️.
:::

### 3- Archivo externo
Se utiliza el atributo src para especificar la ubicacion del archivo js
``` html
  <script src="ubicacion/del/archivo"></script>
```
#### Archivo Js


 La extensión es js , respetando:
* No utilizar espacios, en su lugar reemplazar con _ , - o camelCase 
* Utilizar lengua inglesa, sin ñ ni tildes
* Evitar signos extraños como @#][+{}, etc.

``` html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Jugando con JS</h1>
    <button onclick="saludar()">Dame click</button>

    <script src="js/app.js"></script>
</body>

</html>

```
## Comentarios
Es para documentar nuestro codigo , no se ejecuta


``` js
// soy un comentario

/*
  Yo también soy
  un comentario
*/

```
## Palabras reservadas

[Algunas palabras reservadas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#palabras_clave)

alert es una palabra reservada.

## Consola
Si abrimos el inspector de elementos, podrás ver una pestaña de consola.

La consola del navegador es una herramienta que nos ayuda a depurar nuestras páginas, facilitando nuestro trabajo diario.
Para escribir en la consola
```js
 console.log(“mensaje”); 
```

```js
console.log("hola esta es la consola 👌");
```

:::warning
Windows + punto = Para poner iconos.
:::

## Tipos de datos

Javascript tiene 9 tipos de datos (Lo define el ECMAScript)

CMAScript 🤷‍♂️

ECMAScript es una especificación de lenguaje de programación publicada por ECMA International. El desarrollo empezó en 1996 y estuvo basado en el popular lenguaje JavaScript propuesto como estándar por Netscape Communications Corporation. Actualmente está aceptado como el estándar.

Conclusión: determina cómo emplear el lenguaje Javascript, que permite a los fabricantes de software (navegadores) desarrollar las herramientas adecuada para interpretarlo correctamente (interpretar correctamente js).

[es6](http://kangax.github.io/compat-table/es6/)

String: se utiliza para representar datos textuales.

Number: valores numéricos.

Boolean: representa una entidad lógica y puede tener dos valores: true y false.

```js
console.log("un valor de tipo texto");	
//Numero entero
console.log(20);
//Numero decimal
console.log(1.2);
//No es un numero decimal , se interpreta como parámetros de una funcion
console.log(1, 62);
//Operación con valores numericos
console.log(1 + 1);
//Booleano
console.log(true);
console.log(false);

```

:::warning
  “String” – ‘String’   --- ‘Es un “string”’
:::

:::warning
; = Finaliza una instruccion – Puede estar o puede que no (Lo interpreta el lenguaje).
:::

## Variable
•	En programación una variable es un espacio de memoria el cual nos servirá para almacenar un tipo de dato con un valor correspondiente.

•	Imagina como una caja que guarda un tipo de dato/valor.


JavaScript tiene tres tipos de declaraciones de variables.
1.	var
2.	let
3.	const

```js
  let x = 10
let y = false
let z = x
let n = 'Juanito'
```

```js
 let x = 10;
let y = 20;
let resultado = x * y;
console.log(resultado);
```

### operador =

En JS el signo = se conoce como Operador de asignación simple
Asignación

El signo = en Javascript se conoce como asignación (permite almacenar un valor a una variable).

Se evalúa la expresión de la derecha y luego se le asigna el resultado a la variable de la izquierda.

A esto se le llama declarar la variable con un valor inicial.

```js

tipovariable nombre = valor;

```

#### reglas para el nombre de sus variables:
- No utilizar espacios, en su lugar reemplazar con _ o camelCase (opens new window)🐫
- Utilizar lengua inglesa, sin ñ ni tildes (en teoría se puede pero es una mala práctica)
- Evitar signos extraños como @#][+{}- etc.
- El primer carácter no puede ser un número var 2res = 'algo'
- Se puede utilizar el signo $ ej: var $anio = 2021; (Evitar para evitar conflictos con jquery).
- Debe ser descriptiva



## Concatenacion

Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más +, el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente. Vamos a probar un ejemplo en nuestra consola.

```js
var one = "Hello, ";
var two = "how are you?";
var joined = one + two;
console.log(joined);
```


```js

console.log("Su nombre es: " + nombreUsuario + " y su edad es: " + edad);
nombreUsuario y edad son variables
console.log(“mi nombre es: ” + nombreUsuario + edad);
	
console.log(“mi nombre es: ” + nombreUsuario +”  “ + edad);


```
### Que pasa con los numeros?

```js
var numeroUno = 100;
var numeroDos = 200;
console.log(numeroUno + numeroDos);
```

:::warning
  Aquí se ejecutará la operación aritmética, pero recuerda que si puedes concatenar un número y un string.
:::
 
```js
numero + numero = suma
String + numero = concatenación

```

## prompt

Sirven para  pedir un valor por medio de una alerta (alert).

```js
let apellido = prompt("Ingresa un apellido");
console.log(apellido);

```

```js
let numeroUno = prompt("Ingresa el primero número");
let numeroDos = prompt("Ingresa el segundo número");
let resultado = numeroUno + numeroDos;
console.log(resultado); // ¿no es el resultado esperado?

```

:::warning
  
  Los prompt devuelven un String 

  Para hacer una operacion aritmetica hay que convertirlos a valores numericos

:::

## typeof
```js
console.log(typeof numeroUno);
```
Devuelve el tipo de dato

:::warning
Las variables estan en la consola , si insertan el nombre de la variable en la consola te dice lo que es.
:::

```js
let resultado = parseInt(numeroUno) + parseInt(numeroDos);
console.log(resultado);
```
## parseInt()  
Convierte un String en un int

:::tip
Las variables traten de hacerlas lo más descriptivas posibles, este es un programa simple pero a futuro tendrás cientos de variables declaradas. Además si alguien revisa el código también se da una idea de lo que está ocurriendo.
:::


## Operadores
Existen diferentes tipos de operadores
  * Operadores Aritméticos o Algebraicos o Matemáticos.
* Operadores de Comparación / Relacionales.
* Operadores lógicos

  ### Operadores Aritmeticos
En programación y matemáticas, los operadores aritméticos son aquellos que manipulan los datos de tipo numérico, es decir, permiten la realización de operaciones matemáticas (sumas, restas, multiplicaciones, etc.).
Operaciones matemáticas con números (enteros , decimales , etc).

```js
//Adición: Suma dos números juntos.
let resultado = 1 + 1;
console.log(resultado);
//Resta: Resta el numero de la derecha del de la izquierda.
let resultado = 2 - 1
console.log(resultado);
//Multiplicación: Multiplica dos números juntos.
let resultado = 5 * 20
console.log(resultado);
//División: Divide el número de la izquierda por el de la derecha.
let resultado = 20 / 5
console.log(resultado);
//Sobrante (también llamado módulo): Retorna el restante después de dividir el número de la izquierda en porciones enteras del de la derecha.
let resultado = 8 % 3
console.log(resultado);

```


Respeta el orden de los parentensis

### Operadores relacionales
Los operadores relacionales definidos por JavaScript son idénticos a los que definen las matemáticas: mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=), igual que (===)  o (==) y distinto de (!==)  o (!=)

==   No compara el tipo de dato , 20 = “20” es true . Hago que javascript trabaje mas  , a usar la conversión.

===     Compara el tipo de dato , 20 = “20” es false

!= No compara el tipo de dato

!==  Compara el tipo de dato

```js
let resultado = 20 > 10;
console.log(resultado);
let resultado = 20 < 10;
console.log(resultado);
let resultado = 20 === 10;
console.log(resultado);
let resultado = 20 == '20';
console.log(resultado);
let resultado = 20 !== 10;
console.log(resultado);
let resultado = 10 != '10';
console.log(resultado);

```

### Operadores logicos
Los operadores lógicos se usan para combinar dos valores Booleanos y devolver un resultado verdadero, falso o nulo. Los operadores lógicos también se denominan operadores Booleanos.

*	&& -- Si los dos son verdaderos devuelve verdadero.

*	|| -- Con que uno sea verdadero devolverá verdadero.

*	! -- Negación (devuelve true si es false y viceversa)

```js
let resultado = true && true;
console.log(resultado);
let resultado = 20 > 10 && 10 < 20;
console.log(resultado);
let resultado = true && true && false;
console.log(resultado);
let resultado = true || false;
console.log(resultado);
let resultado = true || false || false;
console.log(resultado);
let resultado = !false;
console.log(resultado);

```

## Estructuras de control
En lenguajes de programación, las estructuras de control permiten modificar el flujo de ejecución de las instrucciones de un programa.

Condicionales
*	if/else (Si ocurre algo, haz esto, sino, haz lo esto otro...)

*	?:   (Equivalente a If/else , forma abreviada.)

*	switch (Estructura para casos específicos: Similar a varios If/else anidados.)

Repetitivas 

*	while
*	do... while
*	for

### if
Un if en programación se utiliza para evaluar una expresión condicional: si se cumple la condición (es verdadera), ejecutará un bloque de código , si no el otro (opcional)

```js
if( condicion ) {
    // bloque verdadero
}else {
  // bloque falso
}

```

```js
let textJavascript = prompt("Escriba 'javascript'");

if (textJavascript === "javascript") {
    console.log("Lo escribiste super bien!");
} else {
    console.log("Lo escribiste mal");
}

```
:::tip

El else{} es opcional
:::
:::tip
A veces javascript hace la conversión (de tipo de dato) de forma automática. 

Pero hay que especificar asi se ahorra trabajo.

En este ejemplo con o sin parseInt funciona 


:::

```js
let numUsuario = prompt("Ingrese numero del 1 al 10");

console.log(numUsuario + " Es: " + typeof numUsuario);

console.log(parseInt(numUsuario));

if (parseInt(numUsuario) <= 10) {
    // Sentencia true
    console.log("Genial!!");
} else {
    // Sentencia false
    console.log("Super mal!!");
}

```

### Switch

La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

Compara un valor  con un conjunto de valores(case) , si es igual a uno , se ejecuta dicho case .

el default se ejecuta cuando el valor no es igual a ningún case.

el break es para salir del switch y que deje de comparar el valor con los case que sigue.

```js
let opcionUser = prompt(`
Elija una opción:
1: Libros
2: Películas
3: Juegos
`);

switch (opcionUser) {
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("NFS");
        break;
    default:
        console.log("Opción no válida");
        break;
}

```

## \`String ${variable/codigo}`
:::tip
 Con \`Texto` (el signo se hace con alt + 96) -- Te lee el texto tal como esta (reconoce los espacios en blanco , etc). Tambien te permite concatenar con ${variable o codigo}
:::

```js
let a = 5;
let b = 10;
console.log(`Quince es ${a + b} y
no ${2 * a + b}.`);
// "Quince es 15 y
// no 20."

```

### While

Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

Se ejecuta la sentencia cada vez que la condición es verdadera.

Cuidado con generar un bucle infinito

```js
let numero = 0;
while (numero <= 10) {
    console.log(numero);
    numero++; //numero = numero + 1;
}
console.log("FIN: " + numero);

```
:::tip
numero++; es un incrementador y suele ser normal en un bucle.
:::

## Math.random(): 
La función Math.random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1).

[Mas informacion](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random)


```js
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

```

## Operador ternario
```js
let mensaje = (condición) ?  true: false;
```
Si la condición se cumple, se ejecuta lo que está en el true , de lo contrario se ejecuta lo que está en el false.

En lugar de true y false, ponemos las sentencias.

las sentencias del true o false retornan. 

```js
let mensaje = (numeroMaquina > numeroUsuario) ? ‘El numero es mayor’ : ‘El numero es menor’;
```


## Array
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

## for

Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

El primero y el segundo parámetro son obligatorio (inicializar variable , condición) , el tercero es opcional (incrementador).

Sirve para recorrer Arrays.

Se ejecuta mientras la condición es true.
La condición es el punto de escape.

```js
for (inicializar una variable(indice) ; condición ; incrementador de la variable ) {
   codigo
}

```

```js
let frutas = ["manzana", "platano", "pera"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

```
## for of

La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map, Set e iterables definidos por el usuario.

Ejecuta un bloque de código por cada elemento de un objeto iterable.

```js
for (variable of objeto iterable {
codigo  
}

```
Por cada ejecución , variable va a tener el valor de un elemento del objeto iterable (generalmente arranca por el primer elemento([0])  y va aumentando en 1 ([1] , [2] , … ).

```js
for (let fruta of frutas) {
    console.log(fruta);

}

```

:::warning
La sintaxis de for...of es específica para las colecciones, y no para todos los objetos. Esta Iterará sobre cualquiera de los elementos de una colección que tengan la propiedad [Symbol.iterator].
Vamos a tener una sección dedicada a los objetos en Javascript así que paciencia.
:::

:::tip
Para ver si un elemento es iterable

Poner en consola

variable[Symbol.iterator]

Si te aparece algo, es iterable.

Si te aparece undefined , no es iterable.


:::

![Descripcion ](https://bluuweb.github.io/desarrollo-web-bluuweb/img/vscode-6.png)

## for in

iterará sobre todas las propiedades de un objeto. Más tecnicamente, iterará sobre cualquier propiedad en el objeto que haya sido internamente definida con su propiedad [[Enumerable]] configurada como true.

Es como el for of pero muestra el índice, no el valor.

```js
for (let fruta in frutas) {
    console.log(fruta);
}

```

## function

Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.

Características:
-	El nombre de la función.
-	Una lista de parámetros de la función, entre paréntesis y separados por comas.
-	Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }

Los parámetros son opcionales
```js
// Declarar funcion
function nombrefuncion (parámetros) {
  codigo
}
 // Invocar funcion
 nombrefuncion();
```


 ```js
 function saludar() {
    console.log("Bienvenido!");
}

saludar();

 ```
Es un bloque de código que se puede reutilizar . (en ese ejemplo function saludar() {codigo})

Cada ves que llames al método se ejecuta. (en ese ejemplo saludar())

## hoisting

Una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.

Javascript mete todo en la memoria RAM , ya luego de leer todo (compilacion), empieza a ejecutar , por lo tanto se puede llamar a una funcion y luego declararla:

```js
saludar();
function saludar() {
    console.log("Bienvenido!");
}

```
[Mas info](https://developer.mozilla.org/es/docs/Glossary/Hoisting)

```js
function saludar(nombreUsuario) {
    console.log("Bienvenido! " + nombreUsuario);
}
saludar("Ignacio");

```
Funcion con parametro

```js
function saludar(nombreUsuario) {
    return "Bienvenido " + nombreUsuario;
}
console.log(saludar("Ignacio"));
```
Funcion con retorno

Puede indicar con paréntesis lo que va a retornar.

Lo que esta abajo del return no se ejecutara.

Los parametros se separan con coma

```js
function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

let numeroUno = prompt("Ingrese primer número");
let numeroDos = prompt("Ingrese segundo número");

let resultado = sumar(numeroUno, numeroDos);

console.log("El total es: " + resultado);

```
:::tip

Una característica fundamental de las funciones es que se pueden reutilizar.
:::

```js
function sumar(n1, n2) {
    return n1 + n2;
}

let resultadoUno = sumar(10, 20);
let resultadoDos = sumar(50, 60);
let resultadoTres = sumar(100, 30);

console.log("El total uno es: " + resultadoUno);
console.log("El total dos es: " + resultadoDos);
console.log("El total tres es: " + resultadoTres);


```