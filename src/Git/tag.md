# Tag

Para hacer versiones

Se puede hacer versiones en las ramas

``` git
git tag  nombre -m "mensaje" 
```
 Crea un tag
 Ejemplo:

git tag versionAlpha -m "versión alpha"

``` git
git tag
```
Para listar los tags

``` git
git tag -d nombreTags
```
Para borrar un tag

``` git
git tag -a nombreTag f52f3da -m "version alpha"
```
Hacer una versión en un commit anterior ej: f52f3da

``` git
git show nombreTag
```
 Mostrar información del tag

 ``` git
git push --tags
```
Para Subir los tags a github.