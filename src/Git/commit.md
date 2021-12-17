## Viajar entre commits
``` git
git reset 
```
Es el comando para viajar en el tiempo (commits).

Los podes perder según el tiempo al que vayas.


Eso sirve cuando no has subido tu commit a Github o a otro repositorio remoto.



``` git
git reset --mixed y acá pegas el numero de hash del commit
```
Por defecto , por lo tanto no hace falta especificarlo , de modo que se puede hacer asi:
``` git
Git reset idcommit 
```
Este comando te guarda los cambios del commit que estas para que no los pierdas, para después poder guardarlos de nuevo

Deja de hacer seguimiento a los archivos inexistente en ese commit. Y desaparecen los commit que todavia no se hicieron (viajar en el tiempo). 

``` git
git reset --hard y y acá pegas el numero de hash del commit
```
Este te cambia al commit que le indicaste pero te borra los cambios que tengas 

Desaparecen los archivos inexistente y desaparecen los commit que todavia no se hicieron(viajar en el tiempo

Cuando tires el comando git reflog al lado de los commit te va aparecer algo asi (bb85423), a eso me refiero con el numero de hash.

Usar con cuidado.

``` git
Git reflog
```
Muestra todos los cambios incluso si borramos los commit.

::: warning
 
 Ambos comandos git revert y git reset, deshacen commits anteriores. Pero si ya has subido tu commit a un repositorio remoto, se recomienda que no uses git reset, ya que reescribe el historial de commits. Esto puede hacer que trabajar en un repositorio con otros desarrolladores y mantener un historial consistente de commits sea muy difícil.


:::

## Errores

Si haces un git reset y luego intentas hacer un push con lo que hiciste te tira un error (failed to push some refs to).

Esto sucede porque en el tiempo que estas (commit) no contiene/no existen los mismos commits que están en la nube (github). Para comprobar esto compara los commit de github con los locales (git log –oneline).

### Solucion:

``` git
Git pull origin nombrerama
```
Restaura a la ultima version remota (github)

## Revert
Deshace los cambios realizados por un  , creando un commit completamente nuevo, todo esto sin alterar el historial de commits. 

Elimina un commit y hace otro commit.

``` git
Git revert idcommit 
```
Elimina el commit y hace un nuevo commit.

![Descripcion del revert](https://inbo.github.io/tutorials/tutorials/git_undo_commit/undo_commits_images/03.svg)