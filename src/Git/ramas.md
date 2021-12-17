# Ramas
## Cambiar la rama principal a main
``` git
Git Branch -m ramactual  ramanueva
```

``` git
git config --global init.defaultBranch main = Sirve para futuros proyectos.
```

-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
``` git
Git Branch 
```
Para saber en que rama estas

``` git
Git Branch nombreRama 
```
Crear una rama.

:::tip
Al hacer un commit y un push , git te da un comando para hacer un push en la RAMA nueva.

:::

``` git
Git checkout nombrerama  
```
Para cambiar de rama

``` git
git log --oneline --graph	
```
Muestra visualmente las ramas , le podes añadir el –all antes de –graph.

## Fusionar ramas
1. Ubicarse en la rama que se va a actualizar (va a recibir las modificaciones)
2. Usar el comando
``` git
Git merge nombrerama 
```
Sirve para fusionar ramas

3. Eliminar la rama que ya se fusiono con el comando:
``` git
git branch -d nombreRama 
```
Eliminar una rama

## Conflictos al fusionar ramas
Si son archivos que no existe en la main , al hacer un merge no genera conflictos.

``` git
git checkout -b nuevaRama 
```
	Crea la nuevaRama y viaja a ella.

  :::warning
Si se hace marge en dos rama que tienen modificado el mismo archivo  se genera conflictos.

ACORDATE DE REGISTRAR CON COMMIT LOS CAMBIOS.
  :::

Si dos commit modifican el mismo archivo se genera conflictos y vos tenes que elegir que se queda y que se borra.

Luego de solucionar el conflicto hacer un commit.