# Guia de VUEPRESS

1. Es una forma de documentar nuestros proyectos.
2. Es para hacer paginas estáticas.
3. Se puede compartir código , establecer el layout.
4. Se puede subir a github page.
5. Trabaja con vue.js

## Generacion
:::warning
Se necesita descargar yarn
:::
1. En la carpeta del proyecto , usar el comando:
``` yarn
yarn create vuepress-site
```
Te debe aparecer varias preguntas , las podes contestar o saltear (con enter).

2. Luego tenes que acceder a la carpeta docs
3. En la carpeta docs , usa el comando:
``` yarn
yarn install
yarn dev
Control + C -- Para detener el yarn dev
```




## Markdown

Trabaja con markdown

Markdown = Es un lenguaje de hipermarcado (como HTML).

[Sintaxis](https://markdown.es/sintaxis-markdown/)

[Sintaxis de la documentacion](https://vuepress.vuejs.org/guide/markdown.html#header-anchors)

``` markdown
 # espacio texto  ---  h1
 ##  espacio texto -- h2
```
La cantidad de # representa el numero del H# (Encabezado).

``` markdown
 Paraffo 1

 Parrafo 2
```
Para hacer parrafos, pones el texto y lo vas separando por al menos un reglon de diferencia.


``` markdown
 * Espacio texto  
 - Espacio texto 
```
Haces una lista


``` markdown
1. Espacio texto
```
Haces una lista ordenada

``` markdown
![descripción](ruta de la imagen)
```
Insertas una imagen


``` html
<img :src”$withBase(‘/ruta’)”>
```
Podes usar esto tambien para insertar imagenes, por defecto esta en la carpeta public
:::warning
En vuepress/public/img van las imágenes.

:::

``` markdown
``` X
 codigo
```\
```
:::warning
 La \ borrala , no va
:::
Para poner codigo , la X representa el lenguaje (CSS , HTML , JS , ETC) .

Es para detallar codigo , la X representa la extension del codigo (HTML , CSS , js , etc)

## Configuracion
1. Borramos las carpetas que estan al pedo.
2. Tocamos el config.js que esta adentro de la carpeta vuepress .

### config.js
Esta toda la configuracion .

Es todo lo que nosotros vemos

Cada configuracion resetea el yarn dev
#### Borramos el require.
#### Borramos el repo y docsDir.

``` js
 title: Es el titulo
 description: Es la descripcion
 head : [ metas ]
 /*  Github lee esta ruta (en este ejemplo 'docs') , para que la tengamos como publica */
 dest : 'docs' 

 /* Ponemos el base , que es en enlace del repositorio */
 base:'/url/'
```
#### Configuracion recomendada (Podes modificar los nombre)
```js
 module.exports = {
  dest: 'docs' ,
  base:'/url/' ,
  title: 'Titulo',

```
#### Mas configuracion
```js
 nav : es el menu
```
#### Sidebar(Menu)

```js
   sidebar: 
    [
      '/' ,
      '/01-paginauno/'
    ]
```
Cada carpeta que creamos la ponemos en el sidebar.

En la carpeta src añadimos las carpetas

En las carpetas ponemos el README.md

El index.md lo podes dejar o no.

#### Plantilla que generalmente esta en el README.md
```js
	
---
home: true
heroImage: https://v1.vuepress.vuejs.org/hero.png
tagline: 
actionText: Quick Start →
actionLink: /guide/
features:
- title: Feature 1 Title
  details: Feature 1 Description
- title: Feature 2 Title
  details: Feature 2 Description
- title: Feature 3 Title
  details: Feature 3 Description
footer: Made by  with ❤️
---

```
Lo podes borrar

## Descargar plugin

```yarn

yarn add nombre
```
Descargar plugin

## Compilarlo
```yarn

yarn build 
```
Es para compilarlo.

## Subilo a github

1. Compilarlo
2. Creamos un repositorio en github con el mismo nombre que pusimos en base
3. Hacemos un init en el proyecto
4. Fijarse que la carpeta dist y node modules este ignorado
5. en Source de page te fijas que esta en la ruta que especificaste en el comando dest
:::tip

Las carpetas deben estar al mismo nivel que el README.md (index)
:::





