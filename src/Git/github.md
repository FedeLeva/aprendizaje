# Subir el repositorio a GITHUB

##  LOCAL -- Hay que registrar un usuario y email en git 

 ::: danger
No colocar como nombre de usuario el correo de su cuenta de Github, podría traer problemas a futuro.
:::

``` git
git config --global user.name "mi nombre" 
```
Es para registrar  el usuario
``` git
git config --global user.email "myemail@example.com"  
```
Para registrar el correo
::: tip
  Es recomendable utilizar el correo asociado a Github
:::

Para ver usuarios y email registrados:
``` git
git config user.name
git config user.email 
```

## NUBE --  Hay que crear un repositorio en github
::: warning
  Para esto hay que crearse una cuenta en github
:::



1. Nuevo repositorio.
2. Poner el nombre del repositorio.
3. Puede ser publico o privado.
4. Saltea todo por ahora.
5. Te hace dos secuencias de comando: Una para crear un nuevo repositorio(local)  y otra para importar un repositorio existente(local). Los comandos Hacelo en la ubicación del proyecto

 6. Te debería aparecer una solicitud de credenciales si lo hiciste bien
::: tip
 
 Panel de control – Cuentas de usuario – Administrar credenciales – Quitar el de git

Hacelo si la PC ya venia  con git configurado.
:::
::: tip
 
 Podes cambiar el  nombre de la rama.


:::

::: tip
 Setting - Delete this repository para eliminarlo
:::

## Comando Push
``` git
Git push 
```
Envia a la nube(github) las cajas hechas y etiquetadas.

## Github Page
Es un hosting gratis de github para probar paginas estáticas (HTML , CSS , JAVASCRIPT).
Para hacerlo:
1. En el proyecto le das a Setting - Pages 
2.  En Sources seleccionas la rama
3. en /root deberia estar el index.html pero puede ser cambiado
4. Le das a save y te genera el link (el cual demora en cargarse)

## README.MD
Es para documentar el proyecto , usa markdown.

## Recuperar el proyecto
1. Crear una carpeta
2. Usa el comando:
``` git
Git clone link
```

``` git
Git remote -v
```
Es para ver el link remoto de donde estamos conectado.

## Archivo .gitgnore
Sirve para ignorar archivos

Hay pones los archivos a ignorar
Ej : 

.env

node_modules 
*.js

Archivo.js
