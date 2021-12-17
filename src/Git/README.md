# Guia de GIT
## ¿Que es GIT?
Es un software de control de versiones, su propósito es llevar registro de los cambios en archivos de computadora y coordinar el trabajo que varias personas realizan sobre archivos compartidos (También puedes trabajar solo no hay problema 😃). Existe la posibilidad de trabajar de forma remota y una opción es GitHub.
## ¿Para que usar GIT?
 - 	Permite regresar a versiones anteriores de forma sencilla y muy rápida.
- 	Facilita el trabajo colaborativo.
- 	Permite respaldar tus proyectos en la nube (ej con github).
- 	Reduce considerablemente los tiempos de deploy.
- 	Las "branches" o ramas, permiten trabajar con una base de código paralela al proyecto en sí.

[8 Razones para usar GIT](https://blog.coffeedevs.com/8-razones-para-usar-git/)
## Para usar GIT hay que saber los comandos basicos de la Consola
 [Comandos](comando)
 ## Comandos basicos de git
``` git
 add
```
Sirve para añadir los archivos a una caja para hacerle un seguimiento
``` git
 commit
```
Sirve para etiquetar la caja para reconocerla
``` git
 push
```
Sirve para enviar las cajas a la nube.
![Descripcion grafica de los comandos](https://bluuweb.github.io/desarrollo-web-bluuweb/img/caja-git.png)

![Descripcion grafica de los comandos 2](https://bluuweb.github.io/desarrollo-web-bluuweb/img/git-flujo.png)

::: tip
  Podemos abrir la caja y hacer cambios.

  La caja se va a llamar repositorio en la nube.
:::
## Que es GitHub
Es una plataforma de desarrollo colaborativo para alojar proyectos (en la nube) utilizando el sistema de control de versiones Git, Además cuenta con una herramienta muy útil que es GitHub Pages donde podemos publicar nuestros proyectos estáticos (HTML, CSS y JS)  gratis.
## Comandos 
``` git
 Git version
```
Ver la version
``` git
 Git help
```
Para ver todos los comandos
``` git
 Git init
```
Inicia un repositorio, el proyecto se transforma en un repositorio.
Se hace en la ubicacion del producto
``` git
 Git add .
```
Añade todos los archivos en una caja para hacerle un seguimiento
::: tip
  El punto (.) es para añadir todos los archivos a la caja , pero se puede especificar un/varios archivos.
:::
``` git
 Git status -s
```
Para ver el contenido de la caja creada con add.
``` git
 Git commit -m "Mensaje"
```
Para hacer un commit (etiquetar la caja)

``` git
 git log --oneline
```
Para ver los commit hecho


### Pull
``` git
Git pull 
```
Trata de traer la información que tenemos en el repositorio.
Actualiza el proyecto local con lo que contiene github.

Cuando realizamos cambios directamente en github pero no de forma local, es esencial realizar un pull, donde descargaremos los cambios realizados para seguir trabajando normalmente.
Es importante estar enlazados remotamente, puedes verificar con: git remote -v








### Checkout

``` git
 git checkout id
```
Es para revisar los commit, NO PARA HACER CAMBIOS.

Es para revisar los commit , NO PARA VIAJAR

Con este comando solo movemos el head  , no la rama entera .

Para salir te vas al ultimo con el mismo comando

Basicamente viajas en el tiempo sin modificar nada. (Perdes los commits al viajar y se eliminan los archivos).



Tambien podes salir con el comando
``` git
 git checkout master
```

### ¿ Y si hago un commit con checkout?
Le va a pedir que haga una rama y si no la hace , quedara flotando en el espacio y git lo eliminara.





# VIM
### Salir

   Para salir de VIM 
 ``` git
:q -- Salir
 :qa  -- Salir sin guardar
 :q! también sirve para salir sin guardar -- Salir sin guardar
```
# Averiguar
 pull --rebase

 rebase --continue

 reflog

fork

