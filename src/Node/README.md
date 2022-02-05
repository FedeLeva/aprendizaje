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