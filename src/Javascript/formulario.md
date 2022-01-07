# Validaciones (Formulario)

## Expresiones Regulares
-	Las expresiones regulares (a menudo llamadas RegExp o RegEx) son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas.
-	Son un sistema para buscar, capturar o reemplazar texto utilizando patrones.
-	Estos patrones permiten realizar una búsqueda de texto de una forma relativamente sencilla y abstracta, de forma que abarca una gran cantidad de posibilidades que de otra forma sería imposible o muy costosa.
-	/patron/flags
- el patrón es lo que vamos a evaluar mientras que el Flag es una pequeña ayuda.
- Son para buscar patrones 
- Todos los lenguajes de progamacion tiene expresiones regulares.
- Los patrones no son String

```js
//    /Patron/
// Notacion Literal
const expresionRegular = /palabra/

// Notacion de objeto
// Esto es de javaScript
const expresionObjeto = new RegExp("palabra")

```
### Flags de una RegExp

-	i Ignora mayúsculas y minúsculas. Se suele denominar insensible a mayús/minús.
-	g Búsqueda global. Sigue buscando coincidencias en lugar de pararse al encontrar una.
-	m Multilínea. Permite a ^ y $ tratar los finales de línea \r o \n.

```js
//    /Patron/Flags
// Notacion Literal
const expresionRegular = /palabra/i

// Notacion de objeto

const expresionObjeto = new RegExp("palabra" , "i")

```
## Metodo test()

-	El método test() ejecuta la búsqueda de una ocurrencia de una expresión regular en una cadena especificada. Devuelve true o false.
- Sirve para  evaluar si en el texto hay una coincidencia del patrón (expresión regular).

```js
const expresionObjeto = new RegExp("palabra" , "i")

//Devuelve true si la cadena pasada por parametro contiene "palabra"
console.log(expresionObjeto.test("no hay palabra"));

```
## Carácteres especiales
- [ ] Rango de carácteres. Cualquiera de los caracteres del interior de los corchetes.
- 	| Establece una alternativa: lo que está a la izquierda o lo que está a la derecha.

```js
	const expresionRegular = /[ua]/i
	//Devuelve true si la cadena pasada por parametro tiene la letra u o la letra a
	console.log(expresionRegular.test("no hay palabra"));

```
```js

const expresionRegular = /palabra|pala/i
//Devuelve true si la cadena pasada por parametro contiene "palabra" o "pala"
console.log(expresionRegular.test("no hay pal"));

```
### Otros 
-	[0-9] Un dígito del 0 al 9.
-	[A-Z] Letra mayúscula de la A a la Z. Excluye ñ o letras acentuadas.
-	[a-z] Letra minúscula de la a a la z. Excluye ñ o letras acentuadas.
-	[A-Za-z0-9] Carácter alfanumérico (letra mayúscula, minúscula o dígito).

```js
	
const expresionRegular = /[A-Za-z0-9]/i
//Devuelve true si la cadena pasada por parametro contiene ...
console.log(expresionRegular.test("no hay pal"));

```
```js
// Solo numeros
const expresionRegular = /^\d+$/gi;
//Devuelve true si la cadena pasada por parametro contiene solo numeros
console.log(expresionRegular.test("5f"));

```

```js
// Solo letras
const expresionRegular = /^[a-zA-Z ]*$/;
//Devuelve true si la cadena pasada por parametro contiene solo letras
console.log(expresionRegular.test("df5"));

```
Solo letras (con tildes):
```js
/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
```
Validar Email:
```js
/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
```
## Validación Formularios
- Antes de enviar datos al servidor, es importante asegurarse de que se completan todos los controles de formulario requeridos, y en el formato correcto.
- Esto se denomina validación de formulario en el lado del cliente y ayuda a garantizar que los datos que se envían coinciden con los requisitos establecidos en los diversos controles de formulario.
:::tip 
En el lado del cliente las validaciones son vulnerables, pero son mas para ayudar al usuario.

¡la validación en el lado del cliente no debe considerarse una medida de seguridad exhaustiva! Tus aplicaciones siempre deben realizar comprobaciones de seguridad de los datos enviados por el formulario en el lado del servidor.
:::
	
### Hay dos tipos diferentes de validación por parte del cliente que encontrarás en la web:

-	La validación de formularios incorporada utiliza características de validación brindada por HTML5, Esta validación generalmente no requiere mucho JavaScript. La validación de formularios incorporada tiene un mejor rendimiento que JavaScript, pero no es tan personalizable como la validación con JavaScript. Es con atributos de HTML5. 

-	La validación con JavaScript se codifica utilizando JavaScript. Esta validación es completamente personalizable, pero debes crearlo todo (o usar una biblioteca).

## HTML5
Esto se realiza mediante el uso de atributos de validación en los elementos del formulario.
-	required:  Especifica si un campo de formulario debe completarse antes de que se pueda enviar el formulario.
-	minlength y maxlength : Especifican la longitud mínima y máxima de los datos de texto (cadenas).
-	min y max : Especifican los valores mínimo y máximo de los tipos de entrada numéricos.
-	type: Especifica si los datos deben ser un número, una dirección de correo electrónico o algún otro tipo de preajuste específico.
-	pattern : Especifica una expresión regular que define un patrón que los datos que se introduzcan deben seguir. (La expresión va sin los //)

:::warning

El elemento textarea no admite el atributo pattern.
:::



:::warning
Cada input/textarea debe contener el atributo name para luego poder identificar los datos enviados por el formulario.
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

    <div class="container">
        <h1>Formularios</h1>
    
        <form id="formulario">
            <input
                class="form-control mb-2"
                name="userName"
                placeholder="Ingrese su nombre"
                autocomplete="off"
                id="userName"
                type="text"
                required
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                title="Solo letras"
                minlength="3"
                maxlength="10"
            />
            <input
                class="form-control mb-2"
                name="userEmail"
                placeholder="Ingrese su correo"
                id="userEmail"
                autocomplete="off"
                type="email"
                required
                pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                title="Ingresa un email válido"
            />
            <button class="btn btn-primary" type="submit">Enviar</button>
        </form>
    </div>

    <script src="app.js"></script>
</body>

</html>

``` 
## Eventos

Ya aprendimos que podemos capturar eventos a través de Javascript utilizando addEventListener , hoy conoceremos algunos para procesar formularios.

### Submit

:::warning
POR ESO ES IMPORTANTE QUE EL BOTON/INPUT QUE ENVIE LOS DATOS SEA DE TYPE SUBMIT.
:::

```html
    <div class="container">
        <h1>Formularios</h1>
    
        <form id="formulario">
            <input
              class="form-control mb-2"
              placeholder="Ingrese su nombre"
              type="text"
              id="userName"
              name="userName"
            >
            <input
              class="form-control mb-2"
              placeholder="Ingrese su correo"
              type="email"
              id="userEmail"
              name="userEmail"
            >
            <button
              class="btn btn-primary">Enviar</button
              type="submit"
            >
        </form>
    </div>

```
```js
// Seleccionar el formulario (etiqueta form)
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    // El formulario no se envia (la pagina no se actualiza)
    e.preventDefault();
    console.log("funciona");
});

```
Tambien existe el atributo novalidate de la etiqueta form para no validar el  formulario.
```html
   <form id="formulario" novalidate >
```
## Capturar valores 
- Capturar los valores que introduce el usuario
- Generalmente se accede con la propiedad value del elemento que contiene la información que ingresa el usuario.

### Por ID
:::tip
Usando la propiedad value del elemento 
:::
```js
const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(userName.value);
    console.log(userEmail.value);
});

```
###  Por querySelector input
Con selectores CSS avanzados
```js
const formulario = document.querySelector("#formulario");
const userName = document.querySelector("input[name='userName']");
const userEmail = document.querySelector("input[name='userEmail']");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(userName.value);
    console.log(userEmail.value);
});

```

## Validar con JS

```html
  <form id="formulario" novalidate>
        <input
            class="form-control mb-2"
            name="userName"
            placeholder="Ingrese su nombre"
            autocomplete="off"
            id="userName"
            type="text"
            value="ignacio"
        />
        <input
            class="form-control mb-2"
            name="userEmail"
            placeholder="Ingrese su correo"
            id="userEmail"
            autocomplete="off"
            type="email"
            value="ignacio@megusta.com"
        />
        <button class="btn btn-primary" type="submit">Enviar</button>
    </form>

```
:::warning
los formateadores pueden ocasionar problema con las expresiones Regulares ya que borran caracteres.
:::

:::tip
El return devuelve algo y se sale del bloque. (deja de ejecutar la función/método/etc ).
:::
```js
const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    // Si es false ....
    if (!regUserName.test(userName.value)) {
        return console.log("Solo letras");
    }
   // Si es false
    if (!regUserEmail.test(userEmail.value)) {
        return console.log("Formato email no válido");
    }

    console.log("Formulario enviado con éxito");
});

```
## Practica

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Carrito Objeto</title>
        <link
            crossorigin="anonymous"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            rel="stylesheet"
        />
    </head>

    <body>
        <div class="container">
            <h1>Formularios</h1>

            <form id="formulario">
                <input
                    class="form-control mb-2"
                    name="userName"
                    placeholder="Ingrese su nombre"
                    autocomplete="off"
                    id="userName"
                    type="text"
                    value="ignacio"
                />

                <p class="text-danger mb-2 d-none" id="alertName"></p>

                <input
                    class="form-control mb-2"
                    name="userEmail"
                    placeholder="Ingrese su correo"
                    id="userEmail"
                    autocomplete="off"
                    type="email"
                    value="ignacio@megusta.com"
                />

                <p class="text-danger mb-2 d-none" id="alertEmail"></p>

                <button class="btn btn-primary" type="submit">Enviar</button>
            </form>
            <div
                class="alert alert-success mt-2 d-none"
                id="alertSuccess"
            ></div>
        </div>

        <script src="app.js"></script>
    </body>
</html>

```
:::tip
Para Validar no usar return , sino un array de errores.
:::

:::tip
el método trim() limpia los caracteres en blanco (espacio en blanco) , devuelve true si hay espacio en blanco.

Devuelve true si existe solo espacios.


:::
```js
const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add("d-none");
    const errores = [];

    // validar nombre
    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid");

        errores.push({
            tipo: alertName,
            msg: "Formato no válido campo nombre, solo letras",
        });
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    // validar email
    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
    pintarMensajeExito();
});

```


## FormData

-	La interfaz FormData proporciona una manera sencilla de construir un conjunto de parejas clave/valor que representan los campos de un formulario y sus valores, que pueden ser enviados fácilmente. Están destinados principalmente para el envío de los datos del formulario, pero se pueden utilizar de forma independiente con el fin de transmitir los datos tecleados.
-	FormData.get() Devuelve el primer valor asociado con una clave dada (parámetro) en un objeto FormData.
-	FormData.entries() Devuelve un iterator que permite recorrer todas las parejas clave/valor contenidas en este objeto.
-	FormData.values() Devuelve un iterator que permite recorrer todos los valores contenidos en este objeto.

:::warning
Usa el atributo name de los inputs , por lo tanto es obligatorio.
:::
```js
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    // Una instancia de FormData , el parametro es el formulario.
    const inputs = new FormData(formulario);
    console.log("Acceder a los valores a traves del atributo name con el metodo get")
    console.log(inputs.get("userName"));
    console.log(inputs.get("userEmail"));
    
    console.log("Permite recorrer todos los valores")
    for (let campo of inputs.values()) {
        console.log(campo);
    }
    console.log("Permite recorrer todas las parejas clave/valor")
    for (let campo of inputs.entries()) {
        console.log(campo);
    }
   console.log("Devuelve las parejas  clave-valor");
    for (let item of inputs) {
        console.log(item);
    }
});

```