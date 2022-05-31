# Lo Basico de Node

## ¿Qué es node?
- [Info en español](https://nodejs.org/es/about/)
- [Info en Ingles](https://nodejs.dev/learn/introduction-to-nodejs)
-	Es para ejecutar javascript en el servidor.

-	Node.js® es un entorno de ejecución para JavaScript construido con V8, motor de JavaScript de Chrome.
-	Node.js es un entorno de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript.
-	Al contrario que la mayoría del código JavaScript, no se ejecuta en un navegador
-	Ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node.js está diseñado para crear aplicaciones network escalables.
-	HTTP es un elemento destacado en Node.js. Esto hace que Node.js sea muy adecuado para la base de una librería o un framework web.
-	En términos simples node no bloquea las operaciones, no queda a la espera de por ejemplo una solicitud a la base de datos, dejando la cpu trabajando en ello, node reanudará las operaciones cuando vuelva la respuesta. Esto permite que Node.js maneje miles de conexiones simultáneas con un solo servidor sin introducir la carga de administrar la concurrencia de subprocesos, lo que podría ser una fuente importante de errores.
-	En Node.js, los nuevos estándares de ECMAScript se pueden usar sin problemas, ya que no tiene que esperar a que todos sus usuarios actualicen sus navegadores.  
-	NPM: Cuenta con más de 1 millón de paquetes, módulos o bibliotecas disponibles para su utilización.
-	Se puede hacer aplicaciones de escritorio , lineas de comandos , etc.

:::tip
V8 es el entorno de ejecución para JavaScript creado para Google Chrome. Es software libre desde 2008, está escrito en C++ y compila el código fuente JavaScript en código de máquina en lugar de interpretarlo en tiempo real.
:::

## Instalación
 
 - [Link](https://nodejs.org/es/)
 - Reiniciar computadora (recomendado)
 - Ejecutar el comando : 
 ```powershell
 node -v
 ```
 ## Probar
 - Usar la terminal integrada de Visual studio code o una consola en la ubicación del proyecto.
- En Node no funcionara addEventListener ya que se ejecuta en el navegador.
- En el ejemplo utilizamos [console.count()](https://developer.mozilla.org/es/docs/Web/API/Console/count)

app.js
```js
const frutas = ["banana", "banana", "pera", "banana"];

frutas.forEach((fruta) => {
  console.count(fruta);
});

```
```powershell
node app.js
```
:::tip 
- Se ejecuta en la consola.
- Se ejecuta en nuestra maquina/servidor.
:::

## Modulos 
-	Node tiene un sistema de módulos incorporado.
-	Un archivo Node.js puede importar la funcionalidad expuesta por otros archivos Node.js.
- Podes especificar la extensión .js o no , es opcional al poner la ruta del archivo.
frutas.js
```js
const frutas = ["banana", "banana", "pera", "banana"];

// Exportar el array frutas
module.exports = frutas;

```
app.js
```js
// Importar el array frutas
// Podes poner cualquier nombre
// Podes especificar la extensión .js o no , es opcional.
const frutero = require('./frutas');
frutero.forEach((frutero) => {
  console.count(frutero);
});

```
Otro ejemplo:
-  Solo se puede usar un module.exports por archivo.
- Pero se puede exportar varios/as objetos/funciones/constantes/etc: Para esto se recurre a un objeto ({}).
frutas.js
```js
const frutas = ["banana", "banana", "pera", "banana"];
const dinero = 1000;
// Exportar el array frutas y el const dinero
module.exports = {
    // Si el nombre de la propiedad y el valor son lo mismo , se puede omitir el valor.
    frutas : frutas ,
    dinero 
}

```
app.js
```js
// Importar el array frutas y la const dinero
// Podes especificar la extensión .js o no , es opcional.
// Utilizando destructuring: 
const {frutas,dinero} = require('./frutas');
frutas.forEach((frutas) => {
  console.count(frutas);
});
console.log(dinero);

```
:::tip Módulos 
-	Desde ahora hablaremos mucho sobre los módulos (puede que los nombre como paquete, paquetito, biblioteca, dependencia, etc).
-	Además de utilizar módulos externos con NPM, también [node cuenta con una gama de ellos incorporado](https://nodejs.org/dist/latest-v16.x/docs/api/)


:::

## package.json
-	Sirve para mantener un orden de los paquetes.
-	Contiene información de nuestro proyecto 
-	Tiene un listado de los paquetes (y sus versiones) que utiliza el proyecto 
-	Tiene información sobre nuestro proyecto, lo más relevante en estos momentos serán sus dependencias y scripts
-	npm y yarn almacena los nombres y versiones de todos los paquetes instalados.
- [guia](https://nodejs.dev/learn/the-package-json-guide)

Para crear el archivo: 
```powershell
npm init -y
```
### Archivo package.json
- name = Nombre del proyecto
- versión = versión del proyecto
- description = descripción del proyecto
- el objeto scripts sirve para añadir lineas de comando 

 Ejemplo de scripts: 
 ```js
 // “nombre del comando”: “lo que se va a ejecutar al invocarlo”
 "scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}

 ```
 :::tip script 

-	Estos scripts son aplicaciones de línea de comandos. Puede ejecutarlos llamando npm run XXXX, donde "XXXX" está el nombre del comando. Ejemplo: npm run dev
-	Puede usar el nombre que desee para un comando y los scripts pueden hacer literalmente cualquier cosa que desee.
-	Configuremos nodemon para que ejecute nuestro index.js
  ```js
  // cómo se puede ver , escribir node index.js es lo mismo que escribir npm run start
  "scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
}
  ```
  ```js
  // Al escribir npm run start por consola estaría ejecutando el app.js
  // npm run start === node app.js

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" ,
    "start" : "node app.js"
  },

  ```

 :::
 - El objeto dependencies tiene las dependencias que necesitan su proyecto.
 - El objeto devDependencies tiene las dependencias que son de desarrollo (herramientas para el desarrollador) .

 ## NPM
 - Cuando instalamos Node, instalamos [NPM](https://www.npmjs.com/)
-	Es el administrador de paquetes o dependecias estándar de Node.js.
-	Repositorio de código de un solo idioma más grande de la Tierra.
-	axios, express, jsonwebtoken, sequelize, son algunos paquetes, dependencias (códigos) que solucionan problemas, es tu elección utilizarlos (A menos que quieras reinventar la rueda).
- [yarn ](https://yarnpkg.com/) es una alternativa al cli(Interfaz de línea de comandos) de npm.

Ejemplo: 
- Para instalar un paquete hay que ubicarse en el proyecto en una consola.

Instalar un paquete de forma local:
```powershell
     npm install  nombre-paquete
```
Instalar un paquete de forma global:
```powershell
     npm install -g  nombre-paquete
```
Actualiza todos los paquete:
```powershell
npm update 
```
Actualiza un paquete especifico:
```powershell
npm update nombre-paquete
```
Desintala un paquete global 
```powershell
npm uninstall -g nombre-paquete
```
Desintala un paquete local 
```powershell
npm uninstall nombre-paquete
```
Ver un listado con las dependencias  locales
```powershell
npm list
```
Ver un listado con las dependencias globales
```powershell
npm list -g
```
Instalar una version especifica de una dependencia
- X.XX.X  = Version
```powershell
npm i nombre-paquete@X.XX.X
```


Instalar una dependencia como devDependencies
```powershell
npm i -D nobre-paquete
O
npm install --save-dev nombre-paquete


```
## Locales vs Globales
-	Existen paquetes o dependencias que se instalan en nuestro proyecto (como lo hemos trabajado hasta ahora) . 
- Para los locales se utiliza: npm install nombre-paquete y crea la carpeta node_modules
-	Pero también existe la posibilidad de hacer instalaciones de manera global (imagina que es como instalar un programa en tu pc que puede ser accedido de cualquier parte)
- Para los globales se utiliza: npm install -g nombre-paquete y se instala en la PC

Ejemplo de dependencia local:
1. Instalamos [cowsay](https://www.npmjs.com/package/cowsay) de forma local
:::tip
Todos los paquete de npm tienen una pagina donde nos dice su documentacion (como instalar , etc).
:::
:::tip Es igual 
  npm install = npm i
:::
Comando en el proyecto por consola: 
```powershell
npm i cowsay
```
 Al instalar paquetes de forma local, se crea la carpeta node_modules que contiene todos los modulos de node que gestionamos con package.json.

2. Utilizamos el paquete que instalamos

app.js
```js
// Importamos el modulo que instalamos
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Soy una vaca",
    e : "oO",
    T : "U "
}));

```
:::tip
 Si se elimina la carpeta node_modules , tenemos el package.json como respaldo con las dependencias (y sus versiones) que utiliza nuestro proyecto.
 ```js
{
  "name": "practica",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cowsay": "^1.5.0"
  }
}

```
 :::

:::warning
Nunca se comparte la carpeta node_modules , solo se comparte los archivos estáticos(JS , ETC) + package.json

:::


:::warning Situacion
Si nos pasan un proyecto con archivos estáticos(JS) y el archivo package.json

Tenemos que usar el comando de consola:
```powershell
npm i 
o
npm install
```
 El comando lee el package.json y instala las dependencias necesarias(crea la carpeta node_modules).
:::


Ejemplo de dependencia global:
1.  Instalamos  la misma dependencia de forma global
  



 Usamos el comando en cualquier ubicación (Ya que es global) para instalarlo
```powershell
npm install -g cowsay  
 o
npm i -g cowsay
```
 Se instala en nuestro equipo.

2. Para usarlo:

 Usamos la palabra reservada cowsay
```powershell
cowsay Soy una vaca 
o     
cowsay javascript
```
 Y nos aparece lo mismo.

 Para ver los modulos instalado de forma global:

 ```powershell
 npm list -g
 ``` 
Independiente de la carpeta que nos encontremos, podemos ejecutar estos comando que utilizan dependencias globales.



## NPX
- Ejecuta un código sin necesidad de instalarlo de forma global.
- Ejecuta algo que no esta instalado en nuestra computadora, pero simula lo que hubiéramos hecho de forma global.
- Posiblemente se toparán con este comando a futuro (sobretodo si trabajan con React.js), bueno esto ejecuta un paquete de npm sin necesidad de instalarlo de forma global o local.

```powershell
npx cowsay Soy una vaca
```
Ejemplo: 
1. Desinstalamos cowsay (que estaba instalado de forma global) y luego intentamos ejecutarlo, esto nos dará un error:
```powershell
npm uninstall -g cowsay
cowsay javascript
```
2. Ahora ejecute:
```powershell
npx cowsay javascript
```
## package-lock.json

-	En la versión 5, npm introdujo el archivo package-lock.json.
-	El objetivo del package-lock.json es realizar un seguimiento de la versión exacta de cada paquete que se instala.
-	package-lock.json sencillamente evita este comportamiento general de actualizar versiones  por notación ([iconos](https://nodejs.dev/learn/semantic-versioning-using-npm)) de modo que cuando alguien clona nuestro repositorio y ejecuta npm install en su equipo, npm examinará package-lock.json e instalará la versión exacta de los paquete que nosotros habíamos instalado, ignorando así los ^ y ~ de package.json.
-	Realmente npm install no ignora las versiones de package.json así como no ignora package-lock.json.  Lo que hace es verificar que package.json y package-lock.json esten en sincronía.  Esto es, si las notaciones ([iconos](https://nodejs.dev/learn/semantic-versioning-using-npm)) descritas en package.json concuerdan con las versiones fijadas en package-lock.json, npm install usará estas última completamente
-	Si se modifica el package.json manualmente , npm considera al package.json la verdad absoluta , de modo que instala dicha versión y actualiza el package-lock.json.
-	cuando ejecute npm install, será capaz de reproducir el mismo árbol que el de su compañero sin problemas asociados (la misma versión)

:::tip npm update 
- [npm 7 actualización  ](https://github.com/npm/cli/issues/708)
-	Desde npm versión 7 en adelante, al ejecutar npm update no cambiará el archivo package.json sino que package-lock.json llevará el control de la versión más reciente a utilizar.
-	Ejecute npm list para saber la versión actual o bien abra el archivo package-lock.json.


:::

## Actualizaciones de modulo
- [npm-update 1 ](https://docs.npmjs.com/cli/v7/commands/npm-update#description)
- [semantica](https://nodejs.dev/learn/semantic-versioning-using-npm)
-	~1.2.3 Actualiza las versiones parches, por ende actualizará menor > 1.3.0
-	^1.2.3 Actualiza versiones menores incluyendo parches, por ende actualizará menor > 2.0.0
- [versionlens ](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) te ayuda a visualizar los paquetes actualmente utilizados.

Ejemplo:
1. Instalamos una version especifica de [moment](https://www.npmjs.com/package/moment)

```powershell
npm i moment@2.19.1
```
package.json:
```js
 "dependencies": {
    "cowsay": "^1.5.0",
    "moment": "^2.19.1"
  }

```
2. Cambiamos el package.json:
```js
 "dependencies": {
    "cowsay": "^1.5.0",
    "moment": "~2.19.1"
  }

```
3. Actualizamos y vemos el listado de dependencias con sus versiones correspondiente.
```powershell
npm update
npm list

```
Cómo puedes ver solo se actualizó hasta la versión 2.19.4

Otro Ejemplo: 
1. Desinstalar e instalar nuevamente:
```powershell
npm uninstall moment
npm i moment@2.19.1
```
2. Cambiamos el package.json
```js
"dependencies": {
    "cowsay": "^1.5.0",
    "moment": "^2.19.1"
  }

```
3. Actualizamos y vemos el listado de dependencias 
```powershell
npm update
npm list

```
Ahora se actualizó a la versión 2.29.1 (al 3 enero 2021, puede que tu veas otra versión más reciente)

Otro Ejemplo:
1.  Volvamos a desinstalar e instalaremos sin una versión específica:
```powershell
npm uninstall moment
npm i moment
```
Se instala la última versión disponible 2.29.1 (al 3 enero 2021, puede que tu veas otra versión más reciente)

## devDependencies
-	devDependencies hace referencia a los paquetes que no se necesitan para producción.
-	están destinados a instalarse solo en una máquina de desarrollo.
-	no son necesarios para ejecutar el código en producción.

Ejemplo:

1.  Instalar el módulo nodemon como devDependencies.
```powershell
npm i -D nodemon
npm install --save-dev nodemon
```
```js
 "devDependencies": {
    "nodemon": "^2.0.15"
  }

```
:::tip
 [nodemon](https://www.npmjs.com/package/nodemon) es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios de archivo en el directorio.
:::

## Servidor HTTP
- [Link](https://nodejs.dev/learn/build-an-http-server)
-	Hypertext Transfer Protocol: El Protocolo de transferencia de hipertexto es el protocolo de comunicación que permite las transferencias de información en la World Wide Web.
-	Intercambia  información entre cliente y servidor.
-	El servidor queda a la espera de alguna solicitud HTTP ejecutada por el cliente y proporciona una respuesta.
-	Cuando visitamos un sitio web, hacemos una solicitud GET de HTTP, y el servidor nos devuelve por ejemplo un index.html con el sitio web.
-	Nosotros configuraremos estas respuestas en nuestro "servidor web o servidor http" con node.js

:::tip Iniciar proyecto
- Al iniciar el proyecto, hay que crear nuestro package.json y configurarlo.
```powershell

npm init -y  
```
- la -y es para que sea todo automatico.
- No hace falta poner la extensión.js
```js
{
  "name": "practica",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```
- instalamos nodemon:
```powershell
npm i nodemon
```
:::
- Vamos a usar el módulo http que viene integrado con Node.
:::tip Modulo
Modulo =  Un trozo de código que alguien creo y nosotros lo usamos
:::
index.js:
```js
// Importamos el modulo http que viene con Node
const http = require("http");

// puerto
// 3000 = ocupa react  8080 = ocupa vue
const port = 5000;

// Creamos un servidor
// createServer tiene como parametro un callback(requerimiento(req) , respuesta(res))
const server = http.createServer((req, res) => {

    // Por cualquier peticion(requirimiento)
    res.end("esta es la respuesta");
});

//El servidor escucha en el puerto especificado
//listen(puerto , funcion)
server.listen(port, () => {
    console.log("servidor andando 🚀");
});

```
```powershell
npm run dev
```
Al ejecutarlo:

- En el navegador: localhost:puerto
- http://localhost:5000/ en el ejemplo

Otro Ejemplo:


```js
// Modulo que viene con Node
const http = require('http');
// Creamos un servidor 
// Parametros createServer(callback(requirimiento(req),respuesta(res))
const server = http.createServer((req , res) => {

      // Respuesta del servidor
      res.end('estoy respondiendo a tu solicitud');
})

const puerto = 3000;
// El servidor escucha en un puerto
// Parametros listen(puerto , callback)
server.listen(puerto , () => {
      console.log('escuchando solicitudes');
})

```

## Verbos o métodos HTTP
- [Info](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
-	HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado.
-	Los más populares son: GET, POST, PUT, DELETE.
-	En el siguiente apartado crearemos nuestro servidor web (con express) y pondremos en práctica cada uno de estos métodos.
-	Si entramos a una URL y nos devuelve una página web es con el método GET.
- Get = Servicios que exponemos
- Post = Crear algo

## Express
- [Info](https://expressjs.com/es/)
-  Nos permite hacer nuestro servidor HTTP de una manera sencilla.
- Nos permite gestionar las solicitudes que nos hacen los - clientes.
Podemos conectarnos a BD y pintar información en un HTML.

-	Infraestructura web rápida, minimalista y flexible para Node.js
-	Con miles de métodos programado para HTTP y un middleware a su disposición, la creación de una API sólida es rápida y sencilla.
-	Express proporciona una delgada capa de características de aplicación web básicas, que no ocultan las características de Node.js que tanto ama y conoce.

### Instalacion:
```powershell
npm i express
```
Ejecutamos nodemon:
```powershell
npm run dev
```
index.js:
```js
// Importamos el modulo express que viene con Node
const express = require("express");
// Lo inicializamos
const app = express()
// puerto
const port = 5000;
 

//Una peticion get a la raiz del sitio web
// req = requirimiento(peticion)   res = respuesta
app.get('/', (req, res) => {
      res.send('visitaste la pagina de inicio(raiz)')
})

// //El servidor escucha en el puerto especificado
app.listen(port , () => console.log('Funciona'))

```

## Rutas
- [Info](https://expressjs.com/es/starter/basic-routing.html)
- 	El direccionamiento hace referencia a cómo responde una aplicación a una solicitud de cliente en un determinado punto final, que es un URI (o una vía de acceso) y un método de solicitud HTTP específico (GET, POST, etc.).

index.js:
```js
// Importamos el modulo express que viene con Node
const express = require("express");
// Lo inicializamos
const app = express()
// puerto
const port = 5000;
 

//Una peticion get a la raiz del sitio web
// req = requirimiento(peticion)   res = respuesta
app.get('/', (req, res) => {
      res.send('visitaste la pagina de inicio(raiz) http://localhost:5000/')
})
 // Otra ruta /contacto
  // Para que responda , se debe enviar una peticion get a la url
app.get('/contacto', (req, res) => {
      res.send('visitaste la pagina de contacto http://localhost:5000/contacto')
})
 // Otra ruta /contacto
// Para que responda , se debe enviar una peticion post a la url
app.post('/contacto', (req, res) => {
      res.send('visitaste la pagina de contacto http://localhost:5000/contacto a traves del post')
})

// //El servidor escucha en el puerto especificado
app.listen(port , () => console.log('Funciona'))

```
:::tip Postman
-	[postman](https://www.postman.com/)
-	Permite hacer solicitudes HTTP
-	Podemos simular todas las peticiones (POST , PUT , DELETE , ETC)
:::
:::tip GET
- El navegador solo acepta peticiones GET.
- GET = Obtener información de una URL
:::
## Archivos estáticos
- [Info](https://expressjs.com/es/starter/static-files.html)
-	Para el servicio de archivos estáticos como, por ejemplo, imágenes, archivos CSS y archivos JavaScript, utilice la función express.static  que la brinda el middleware de Express.
- express.static nos permite habilitar una carpeta que va a contener archivos estaticos
-	Pase el nombre del directorio que contiene los activos estáticos a la función express.static para empezar directamente el servicio de los archivos.
- La carpeta que contiene los archivos estaticos se suele llamar public 
- Esta "carpeta" representa el frontend.
:::tip ¿Que son los archivos estaticos?
- Son todos los archivos que lo  interpreta  y ejecuta el navegador
- Ej. HTML , CSS , JS , imagénes.
:::
- Todas las demas carpetas es el backend (se ejecuta en el servidor/maquina)
:::tip Middleware 
- En palabras simples es una acción que se ejecuta antes de nuestra función de ruta(el servidor responda a la peticion)
- El middleware  intercepta/atrapa la peticion antes que llegue al servidor.
- Cuando el cliente envía una petición, el middleware detiene la petición, lo analiza y luego le envía algo.
- Express viene con su middleware
-	La palabra use representa el middleware
:::
- express.static es para ver donde van los archivos “públicos”.
 - Los middleware se ejecutan antes de hacer la petición (que responda el servidor).

 index.js:
```js
// Importamos el modulo express que viene con Node
const express = require("express");
// Lo inicializamos
const app = express()
// puerto
const port = 5000;
 
// middleware 
app.use(express.static("public"))

//Una peticion get a la raiz del sitio web
// req = requirimiento(peticion)   res = respuesta
app.get('/', (req, res) => {
      res.send('visitaste la pagina de inicio(raiz) http://localhost:5000/')
})
 // Otra ruta
app.get('/contacto', (req, res) => {
      res.send('visitaste la pagina de contacto http://localhost:5000/contacto')
})
 // Otra ruta
// Para que responda , se debe enviar una peticion post a la url
app.post('/contacto', (req, res) => {
      res.send('visitaste la pagina de contacto http://localhost:5000/contacto a traves del post')
})

// //El servidor escucha en el puerto especificado
app.listen(port , () => console.log('Funciona'))

```
Creamos la carpeta public en la raiz del proyecto:

En dicha carpeta, creamos un index.html 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express</title>
</head>
<body>
     <h1>Mi página con express</h1>
</body>
</html>

```
## req.query
-	GET: Agrega datos de formulario a la URL en pares de nombre=valor, La longitud de una URL es limitada (alrededor de 3000 caracteres), GET es mejor para datos no seguros, como cadenas de consulta en Google.
- [Query](https://stackabuse.com/get-query-strings-and-parameters-in-express-js/)
-	En términos simples, una cadena de consulta (Query) es la parte de una URL después del signo de interrogación (?).
-	Está destinado a enviar pequeñas cantidades de información al servidor a través de la URL.
-	Esta información generalmente se usa como parámetros para consultar una base de datos, o tal vez para filtrar resultados. Realmente depende de ti para qué se usan.
-	No manipular datos delicados con un GET.

index.html de la carpeta public
```html
  <form action="/formulario" method="get">
          <input type="text" name="nombre" id="">
          <input type="text" name="apellido" id="">
          <button type="submit">Enviar</button>
      </form>

```
index.js: 
```js
app.get('/formulario' , (req,res)=> {
      //Devuelve un objeto que contiene las etiqueta nombre - value de los input
      console.log(req.query);

      res.send('formulario enviado  ' + req.query.nombre);
})

```
## req.body
index.html:
```html
<form action="/formulario" method="POST">
          <input type="text" name="nombre" id="">
          <input type="text" name="apellido" id="">
          <button type="submit">Enviar</button>
      </form>

```
- Con el método POST , los datos no viajan por la URL , viaja por el cuerpo de la petición HTTP
-	POST: Agrega datos de formulario dentro del cuerpo de la solicitud HTTP (los datos no se muestran en la URL)
- [Error req.body vacio](https://stackoverflow.com/questions/66555172/why-is-req-body-undefined-in-express)

index.js
```js
app.post('/formulario' , (req,res)=> {
     
      console.log(req.body);

      res.send('formulario enviado  ' );
})

```
-	Desde el formulario HTML se está enviando datos a través del cuerpo o body, pero por defecto express no lee este tipo de datos.
-	Por lo tanto para indicarle a express que lea y analice los req.body (datos a través del cuerpo POST o PUT), se necesita configurar un middleware apropiado para dicho trabajo.
-	El middleware leerá el cuerpo de la solicitud, lo analizará y colocará los resultados analizados en el  req.body para que esté allí cuando se llame a su controlador de solicitudes.
-	Express tiene un middleware como este incorporado para varios tipos de contenido.
- [info](https://expressjs.com/en/4x/api.html#express.json)

:::tip Algunos de los middlewares 
Algunos de los middlewares para analizar los diferentes tipos de contenido:
```js
express.json(...)    // "application/json"
express.raw(...)     // reads the body into a Buffer for you to parse yourself
express.text(...)    // "text/plain" - reads the body into a string
express.urlencoded(...) // "application/x-www-form-urlencoded"
```
:::
index.js:
```js
// Este se utiliza para analizar un formulario simple como el anterior
app.use(express.urlencoded({extended : true}));

app.post('/formulario' , (req,res)=> {
        //Devuelve un objeto que contiene las etiqueta nombre - value de los input
      console.log(req.body);

      res.send('formulario enviado  ' );
})

```
## fs
- [Tutorial](https://ourcodeworld.co/articulos/leer/297/como-crear-un-archivo-usando-el-modulo-del-sistema-de-archivos-fs-en-nodejs)
- [Opciones](https://nodejs.org/api/fs.html#filehandlewritefiledata-options)
- Es un módulo incorporado

index.html de la carpeta public:
```html
<form action="/formulario" method="POST">
          <input type="text" name="nombre" id="">
          <input type="text" name="apellido" id="">
          <button type="submit">Enviar</button>
      </form>

```
:::tip
El return en las validaciones es para evitar dos res.send() que puede generar errores
```js
const fs = require('fs');
const express = require("express");
const app = express()
const port = 5000;
 
// middleware 
app.use(express.static("public"))
// Este se utiliza para manipular un formulario simple
app.use(express.urlencoded({extended : true}));

app.post('/formulario' , (req,res)=> {
        
      
     const {nombre,apellido} = req.body;
     // Validaciones
     // Si no existe los datos
     if (!nombre || !apellido) return res.send('no existen los datos');
      res.send('formulario enviado  ' );
})

```

:::
:::tip
También se puede direccionar (como se hace en el ejemplo)
:::


error.html dentro de public:
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
    <h1>Error faltan los datos</h1>
    <a href="/">Volver</a>
</body>
</html>

```
index.js: 
```js

app.post('/formulario' , (req,res)=> {
        
      
     const {nombre,apellido} = req.body;
     // Validaciones
     // Si no existe los datos direcciono
     if (!nombre || !apellido) return res.redirect("error.html")
      res.send('formulario enviado  ' );
})


const fs = require('fs');
const express = require("express");
const app = express()
const port = 5000;
 
// middleware 
app.use(express.static("public"))
// Este se utiliza para manipular un formulario simple
app.use(express.urlencoded({extended : true}));

app.post('/formulario' , (req,res)=> {
        
      
     const {nombre,apellido} = req.body;
     // Validaciones
     // Si no existe los datos
     if (!nombre || !apellido) return res.redirect("error.html")
     //Crear un Archivo
      // writeFile(nombre-archivo y ubicacion , contenido , callback )
      // writeFile no crea carpetas
      //el archivo se crea en la carpeta archivos
     fs.writeFile(`archivos/${nombre}.txt` , apellido , (err) => {
           if (err) return   res.send('Fallo al crear el archivo  ' );
           res.send("se creo el archivo");
     })
     
})

```
## res.download
- [info](http://expressjs.com/en/api.html#res.download)
- Es para descargar algo.

index.js
```js
const fs = require('fs');
const express = require("express");
const app = express()
const port = 5000;
 
// middleware 
app.use(express.static("public"))
// Este se utiliza para manipular un formulario simple
app.use(express.urlencoded({extended : true}));

app.post('/formulario' , (req,res)=> {
        
      
     const {nombre,apellido} = req.body;
     // Validaciones
     // Si no existe los datos
     if (!nombre || !apellido) return res.redirect("error.html")
     //Crear un Archivo
      // writeFile(nombre-archivo y ubicacion , contenido , callback )
      // writeFile no crea carpetas
      //el archivo se crea en la carpeta archivos
     fs.writeFile(`archivos/${nombre}.txt` , apellido , (err) => {
           if (err) return   res.send('Fallo al crear el archivo  ' );
           // __dirname es la ubicacion de este archivo
           //download(ubicacion del archivo a descargar)
           res.download(__dirname + `/archivos/${nombre}.txt`);
     })
     
})





 
app.listen(port , () => console.log('Funciona'))

```
## res.sendFile
- Abre un archivo en especifico.
```js
// Si no encuentra una ruta configurada (No existe la ruta)
app.use((req, res, next) => {
  // res.status(404).send("Sorry cant find that!");
  res.status(404).sendFile(__dirname + "/public/404.html");
});

```
## Propiedades y Metodos
### propiedad __dirname
- __dirname es la ruta( dinámica) en donde se ejecuta el código . 
- Es la ubicación del archivo en la máquina.
### metodo path.join
He visto varios ejemplos con path.join, este nos sirve hacer uniones de rutas 
```js
app.use(express.static(path.join(__dirname, "public")));
```


## [Generador de aplicaciones con express](https://expressjs.com/es/starter/generator.html)
 - express –view=nombremotorplantilla nombreapp
 - Hay muchos motores de plantilla (pug ,ejs,etc).


## Puerto 

```js
// Busque la variable PORT en nuestro servidor (variable de entorno) y si no existe, que utilice el puerto 3000
const PORT = process.env.PORT || 3000;

```

## Middleware

:::warning 
Esto es una explicacion(teoria) , para ver ejemplos  , te recomiendo ver las practicas
:::
- El middleware seria el firewall 
- Los middlewares interceptan la peticion antes que llegue al “servidor” ,  se ejecuta antes de la funcion que gestiona la petición.
- Interceptan la solicitud antes que llegue al servidor para analizarla.
- Analizan la solicitud y si esta todo correcto , ejecuta la funcion que gestiona dicha solicitud HTTP o tambien puede ejecutar otro middleware en caso que una ruta contenga mas de un middleware.
- Si una ruta tiene mas de un middleware , vas a ver un array que los contiene.

### Los middleware  es una  funcion con tres parametros

1. req : Requirimiento 
2. res : Respuesta
3. next : Seria un metodo 
- El metodo next()  ejecuta el siguiente middleware(Puede haber varios en un array) o ejecuta la funcion que gestione la peticion (Se suele encontrar en una carpeta llamada controllers)

:::tip Observacion 
 - Para express todo es un middleware.
 - Las funciones que gestionan las solicitudes HTTP utilizan los dos primeros parametros.
:::

:::tip Middlewares de expresss

- El metodo use() de express es para ejecutar/utilizar un middleware.
- Lo que recibe es el middleware a ejecutarse

Ejemplo:

```js
const app = express()
app.use(express.static("public"))
```
:::

### Explicacion 
- Vamos a usar de  ejemplo un codigo de  la seccion de Router: 
```js
const express = require('express');
// Accedemos a todas las propiedades del Router
const router = express.Router();


router.get('/' , (req , res) => {
  
    res.render("index" , {titulo : "mi titulo gato" , descripcion : "Hola Esta es la descripcion"});
})

router.get('/servicios' , (req,res) => {
     res.render("servicios" , {tituloServicio : "Este es un mensaje de Servicio"})
})

module.exports = router;

```



- El segundo parametro del metodo get/post/delete/etc es la funcion que gestiona la solicitud HTTP. Es la que ejecuta  next() si no encuentra ningun otro middleware adelante de el.
- La funcion que contiene el segundo parametro , puede irse al tercer parametro si hay middlewares configurados en la ruta.
- el metodo get/post/delete/etc puede tener un segundo parametro (la funcion que gestiona la solicitud HTTP se desplaza al tercer parametro) para especificar los middlewares

Ejemplos :
  - Una ruta con un middleware (urlValida)
```js
router.post("/" , urlValida , agregarUrl)
```
- Una ruta con varios middlewares (Todos en un array y con un orden)


```js
// Tiene un array de middleware
router.post("/register" ,  [
    // body ("valor-atributoname" , "mensaje de error").metodo.metodo.metodo....
    // trim() = Limpia los espacios en blanco del lado izquierda y derecho
    // notEmpty()  = Para que no venga vacio d
    // escape() = Para que solo mande caracteres y ignore html
    body("userName" , "Ingrese un nombre válido").trim().notEmpty().escape(), 
    //Validamos el email  para que tenga un formato valido
    body("email" , "Ingrese un email valido").trim().isEmail().normalizeEmail() ,
    //validamos la contraseña 
    body("password" , "Contraseña de minimo 6 caracteres").trim().isLength({min:6}).escape()
    // Hacemos una validacion personalizada para que las dos contraseñas coincida
    // custom(funcion(value , {req})) 
    // el value es lo que se evalua (lo que se envia en el formulario)
    // {req} es para tener acceso al req(requirimiento)
    .custom((value , {req}) =>{
        // SI no son iguales
        
       if (value !== req.body.repassword) {
           // No cumple la validacion
           //Este seria el mensaje de error que se mandaria
           throw new Error("No coinciden las contraseñas")
       }
       // Si cumple la validacion
       return value
    })
] ,  registerUser);
```
:::tip Observacion 
- Cada elemento del array es un middleware 
- con el metodo next() ejecuto el siguiente middleware

Ej: 

si el middleware de la posicion 0 ejecuta el next() se ejecuta el middleware de la posicion 1

si el middleware de la ultima posicion del array ejecuta el next() , ejecuta la funcion que gestiona la solicitud HTTP.
:::

### Ejemplo de middleware 

```js
module.exports = (req , res , next) => {
   // Si esta autenticado
    if (req.isAuthenticated()) {
        return next();
    }
    // Si no tiene una sesion activa
    res.redirect('/auth/login');
}
```


```js
const jwt = require('jsonwebtoken')

// middleware para validar token (rutas protegidas)
const verifyToken = (req, res, next) => {
  
    const token = req.header('auth-token')
    // Si no existe el token
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {

        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        
        req.user = verified
        // Si la sesion es valida , hacemos el next()
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}

module.exports = verifyToken;
```


:::tip Observacion 
- Como se puede ver , los middleware son archivos.js que contienen una funcion que se exporta
- Esa funcion se inserta como segundo parametro en los metodos (get/post/put/etc) para que se ejecute.

:::




## Status
- Cada respuesta tiene un status
- El Status es el codigo de respuesta
-  Indica si la petición ha sido exitosa, o no, y debido a que.
- [link1](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
- [link2](https://http.cat/)

La respuesta tiene el status 400
```js
res.status(400).json({error: 'token no es válido'})
```
Por defecto , la respuesta tiene el status 200