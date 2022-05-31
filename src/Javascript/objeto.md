# Objeto

-	JavaScript está diseñado en un paradigma simple basado en objetos.
-	Un objeto es una colección de propiedades, y una propiedad es una asociación entre una clave(nombre)  y un valor. (CLAVE Y VALOR)
-	El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método.
-	Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.
-	Los objetos son similares a los arreglos (arrays), excepto que en lugar de usar índices para acceder y modificar sus datos, accedes a los datos en objetos a través de propiedades (properties).


### A tener en cuenta 
- Se puede añadir una propiedad entre comillas Ej. "propiedad" : valor
- Se puede utilizar el  punto o  los corchetes para  manipular las propiedades de un objeto.
- Con los corchetes podes usar variables , espacios en blancos , caracteres especiales , etc

## Objeto Literal

-	Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código.
-	En el código esta todas las propiedades y valores.

{}  = Objeto

Los :  (dos puntos)  sirven para asignar el valor

Para poner mas propiedades, lo separas con , (coma).

Las propiedades pueden contener cualquier tipo de dato.

```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}

console.log(gato);

```
## Acceder a los valores

1.  con el . (punto).
```js

console.log(gato.nombre);

console.log(gato.enemigos[0]);

```

2. con el [“propiedad”] (corchetes y comilla)

```js
console.log(gato["nombre"]);

 console.log(gato["enemigos"][0]);

```

## CRUD (propiedades)
### Los CRUD los podes hacer con el punto (.) o con los corchetes ([]).
:::tip
 - Con los corchetes podes usar variables , espacios en blancos , caracteres especiales , etc

objeto[variable] = "valor";
:::
### Leer (read)
Visto (Anterior).

### Crear (create)
```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}
gato.color = 'Azul'
console.log(gato);

```

### Actualizar (update)
```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}
gato.edad = 5;
console.log(gato);

```

### Eliminar (delete)
```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}
 delete gato.duerme;
console.log(gato);

```
## hasOwnProperty
A veces es útil comprobar si existe o no la propiedad de un objeto dado. Podemos utilizar el método hasOwnProperty(propname) para determinar si un objeto tiene una propiedad con ese nombre .

 Parametro  = El nombre de la propiedad a buscar

 hasOwnProperty() devuelve true o false si se encuentra la propiedad o no.

 ```js
 
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}
console.log(gato.hasOwnProperty("edad"))
console.log(gato.hasOwnProperty("salud"))

 ```


## Objetos anidados
- la propiedad otros es otro objeto
- la propiedad favoritos es otro objeto
- la propiedad comida es otro objeto

```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo"
            }
        }
    }
}
console.log(gato);

```
 
Acceder a salmon:
```js
console.log(gato.otros.favoritos.comida.fria)
```
Acceder a cobarde:
```js
console.log(gato.otros.amigos[0])
```

##  Encadenamiento opcional


 El operador de encadenamiento opcional ?. permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida.

Ignora el error si escribiste mal el nombre del objeto dentro de un objeto.

Devuelve undefined si no existe la propiedad.

```js
console.log(gato.otros?.favorito);
```
## Propiedades
Lenght es una propiedad del array .

Las propiedades no llevan paréntesis.

El array es un objeto

```js

const amigos =  ["Cobarde", "Tímido", "Pegajoso"];

console.log(amigos.length);



```
### metodos

push() es un método del array .

Como lleva paréntesis es un método.

```js
const amigos =  ["Cobarde", "Tímido", "Pegajoso"];

console.log(amigos.push());

```

## Metodos
Es una funcion dentro del objeto

```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"] , 
    // Creando el metodo
    comer: function() {
        console.log('gato comiendo');
    }
   
}
// LLamando al metodo
gato.comer();

```
### Abreviacion

En lugar de : (dos puntos) , colocar los ()(parentesis)  y {} (llaves)

La palabra function se borra

```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"] , 
    // Creando el metodo
    comer()  {
        console.log('gato comiendo');
    }
   
}
// LLamando al metodo
gato.comer();

```
El metodo puede recibir parametros:

```js
 const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"] , 
    // Creando el metodo
    comer(alimento)  {
        console.log('gato comiendo  ' + alimento);
    }
   
}
// LLamando al metodo
gato.comer("pez");

```
## Ambito (Scope)

Este código no funciona porque ${nombre} hace referencia al ámbito global (afuera de las llaves {})(afuera del objeto).
```js

const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"] , 
    // Creando el metodo
    comer(alimento)  {
        console.log(` ${nombre} esta comiendo ${alimento}`);
    }
   
}
// LLamando al metodo
gato.comer("pez");

```
Para solucionarlo hay dos manera

1. Acceder desde el objeto mismo:

```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"] , 
    // Creando el metodo
    comer(alimento)  {
        console.log(` ${gato.nombre} esta comiendo ${alimento}`);
    }
   
}
// LLamando al metodo
gato.comer("pez");

```

2. Usando el this
## This
Hace referencia al scope que se está utilizando.

Hace referencia al objeto en el cual está ubicado.

 Hace referencia al objeto contexto(scope) de JavaScript en el cual se está ejecutando el código actual.

 :::tip
   
el this se queda en el ámbito (scope / en el bloque)  (sube un nivel como máximo (un bloque ariba ))

Podes hacer una variable llamada self con el valor  this para tener acceso al objeto en sub funciones


 :::

 ```js
 const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"] , 
    // Creando el metodo
    comer(alimento)  {
        console.log(` ${this.nombre} esta comiendo ${alimento}`);
    }
   
}
// LLamando al metodo
gato.comer("pez");

 ```

## arrow function
Funciona pero No tiene this o super y no se debe usarla como métodos.

Da como undefined ya que la función flecha no tiene this.

```js

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer: (comida) => {
        return `${this.nombre} está comiendo ${comida}`;
    },
};

console.log(gato.comer("pez"));

```
Pero si puedo utilizarla (funcion flecha) en su interior:

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    listarEnemigos() {
      this.enemigos.forEach((item) => console.log(item));
    },
};

gato.listarEnemigos();

```
## Recorrer un objeto

### for in

La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas


Recorrer el nombre de todas las propiedades:

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    listarEnemigos() {
      this.enemigos.forEach((item) => console.log(item));
    },
};

for (let propiedad in gato) {
    console.log(propiedad);
}

```
Para poner los valores:
- Se utiliza los corchetes.
- No funciona con el punto.

Recorrer los valores de las propiedades:
```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    listarEnemigos() {
      this.enemigos.forEach((item) => console.log(item));
    },
};

for (let propiedad in gato) {
    console.log(gato[propiedad]);
}

```

:::tip
¿Por qué usar for...in?
•	Dado que for...in está construido para iterar propiedades de objeto, no se recomienda su uso con arreglos y opciones como Array.prototype.forEach() y existe for...of, ¿cuál podría ser el uso de for...in?

•	Es posible que se utilice de forma más práctica con fines de depuración, ya que es una forma fácil de comprobar las propiedades de un objeto (mediante la salida a la consola o de otro modo)

•	Aunque los arreglos suelen ser más prácticos para almacenar datos, en situaciones en las que se prefiere un par clave-valor para trabajar con datos (con propiedades que actúan como la "clave"), puede haber casos en los que desees comprobar si alguna de esas claves cumple un valor particular.
:::

## Object.values()

devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.

1 parametro = el objeto en cuestión

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    listarEnemigos() {
      this.enemigos.forEach((item) => console.log(item));
    },
};

console.log(Object.values(gato));

```

Si lo combinamos con forEach:
```js
Object.values(gato).forEach((item) => console.log(item)); 
```
## Existen mas metodos

[Object.entries()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

[Object.key()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

[Object.getOwnPropertyNames()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

## Destructuring Objects

La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

Almacenar valores de elementos de arreglos/propiedades de objetos en distintas variables para su posterior uso.

Funciona tanto en objeto como en array.

### Objeto
Ejemplo:

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
   
};

const nombre = gato.nombre;
console.log(nombre);

```
Pero hay una manera mejor:

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
   
};

 //creando const nombre = gato.nombre , const duerme = gato.duerme , ...
const {nombre , duerme , edad} = gato;
console.log(nombre , duerme , edad);

```
Otro ejemplo:
```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo"
            }
        }
    }
}

// const amigos = array amigos
const {amigos} = gato.otros;
console.log(amigos);

```
####  Desestructuración en otra desestructuración 
Una desestructuración del objeto otros.

Otra manera de conseguir el array amigos:
```js
// const amigos = array amigos
const {otros: {amigos}} = gato;
console.log(amigos);

```

#### Alias:
Para poner un nuevo nombre a la variable
```js
 //creando const nombreGato = gato.nombre , const duerme = gato.duerme , ...
const {nombre : nombreGato, duerme , edad} = gato;
console.log(nombreGato , duerme , edad);

```

```js
// const amigosGatos = array amigos
const {otros: {amigos : amigosGatos}} = gato;
console.log(amigosGatos);

```
#### Por defecto:
Si la propiedad no existe, podemos poner un valor por defecto.

Ejemplo:
```js
const gato = {
    //nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
   
};

const {nombre  = "sin nombre", duerme , edad} = gato;
console.log(nombre , duerme , edad);
// nombre = "sin nombre"

```

:::warning
No se puede destructurar un método que tiene el this.

Pasa lo mismo que con las funciones flecha , da undefined

:::
Destructurar un metodo con el this: (Tira undefined)
```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    mostrarEnemigos() {
        return this.enemigos.forEach((item) => console.log(item));
    },
};

const {comer} = gato
console.log(comer("pez"));

```

### Array
Aca se respetan los indices . 

No se puede desestructurar el indice 3 si todavia no se desestructuro el  1 y el 2.


```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo"
            }
        }
    }
}

const {amigos} = gato.otros;
// const amigoUno = Cobarde , const amigoDos = "Timido"
const [amigoUno,amigoDos] = amigos;
console.log(amigoDos);

```

## Getters y Setters

Son otras propiedades de los objetos

### GET
Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada. Nos permite tener acceso al valor de una propiedad

Tenga en cuenta lo siguiente al trabajar con la sintaxis get:
- Debe tener exactamente cero parametros.
- No debe haber múltiples getters para una misma propiedad.
- No se necesita los parentesis al invocar al metodo
- Se invoca como si fuera una propiedad

```js
	const gato = {
	    nombre: "Valiente",
	    duerme: true,
	    edad: 10,
	    enemigos: ["agua", "perros"],
	    // Creamos un get
	    get nombreMayuscula() {
	        return this.nombre.toUpperCase();
	    }
	   
	};
	// Llamamos al get
	console.log(gato.nombreMayuscula);

```


### SET
La sintaxis set asocia la propiedad de un objeto a una función que será llamada cuando haya un intento de asignar valor a esa propiedad. 

Nos permite modificar el valor de una propiedad

Nos permite añadir un valor a una propiedad.

Tenga en cuenta lo siguiente al trabajar con setters:
-	Debe tener exactamente un parámentro
- El metodo al invocarlo se utiliza el signo igual(=) en lugar de los parentesis
- Lo que va luego del signo igual(=) seria el parametro

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    // Creamos un get
    get nombreMayuscula() {
        return this.nombre.toUpperCase();
    },
    // Creamos un set
    set agregarEnemigo(enemigo) {
        this.enemigos.push(enemigo);
    }
   
};
// Llamamos al set
gato.agregarEnemigo = "batman";
console.log(gato);

```
## por valor vs por referencia

### por valor
Cuando asignamos valores primitivos (Boolean, Null, Undefined, Number, String y Symbol), el valor asignado es una copia del valor que estamos asignando.

 ```js
 let a = "hola";
let b = a;
console.log(b);
//Si cambiamos el valor de a, b sigue siendo "hola"
a = "chao";
console.log(b);

 ```
![por valor](https://bluuweb.github.io/desarrollo-web-bluuweb/img/valor.png)
### por referencia
Pero cuando asignamos valores NO primitivos o complejos (Object, Array y Function), JavaScript copia “la referencia”, lo que implica que no se copia el valor en sí, si no una referencia a través de la cual accedemos al valor original.

```js
let a = ["hola"];
let b = a;

a.push("chao");

console.log(b);

```
```js
const a = {
    nombre: "hola",
};

const b = a;

a.nombre = "chao";

console.log(b);


```
![por referencia](
https://bluuweb.github.io/desarrollo-web-bluuweb/img/valor-2.png
)