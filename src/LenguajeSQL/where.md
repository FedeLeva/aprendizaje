# Where
## Consultas con restricciones

Si tuviera una tabla con cien millones de filas de datos, leer todas las filas sería ineficiente y quizás incluso imposible.

Para filtrar ciertos resultados, necesitamos usar la cláusula WHERE en la consulta. La cláusula se aplica a cada fila de datos. Si la condición se cumple, la fila se incluye, de lo contrario se descarta.

```sql
SELECT column, another_column, …
FROM mytable
WHERE condition
    AND/OR another_condition
    AND/OR …;
```

Más cláusulas complejas pueden construirse uniendo numerosos ANDo ORlógicos palabras clave (es decir. Num_wheels> = 4 y puertas de <= 2). Y a continuación se muestran algunos operadores útiles que puede usar para datos numéricos (es decir, entero o punto flotante):

| Operador      | Condicion     | Ejemplo  |
| :-------------: |:-------------:| :-----:   |
| = , != , < , <= , > , >=      | Operadores numericos estandar | col_name != 4    |
| BETWEEN ... AND ...      | El  numero esta dentro del rango de dos valores (inclusive)      |   col_name BETWEEN 1.5 AND 10.5    |
| NOT BETWEEN ... AND ... | El  numero NO esta dentro del rango de dos valores (inclusive)    |    col_name  NOT BETWEEN 1.5 AND 10.5    |
| IN (...) | El numero existe en una lista      |    col_name IN (2,4,6)    |
| NOT IN (...) | El numero NO existe en una lista      |     col_name NOT IN (2,4,6)    |

:::tip 
Además de hacer que los resultados sean más fáciles de entender, escribir cláusulas para restringir el conjunto de filas devueltas también permite que la consulta se ejecute más rápido debido a la reducción en la devolución de datos innecesarios.

:::

Ejemplos:

```sql
SELECT * FROM movies where id = 6
```
```sql

SELECT * FROM movies where Year between 2000 AND 2010

```
```sql
SELECT * FROM movies where Year NOT between 2000 AND 2010
```
```sql
SELECT * FROM movies where ID in (1,2,3,4,5)
```
##  Operadores de String
Al escribir cláusulas WHERE, SQL admite una serie de operadores útiles para hacer cosas como la comparación de cadenas y la coincidencia de patrones. A continuación, mostramos algunos operadores específicos de datos de texto comunes:


| Operador      | Condicion     | Ejemplo  |
| :-------------: |:-------------:| :-----:   |
| =      | Comparacion de cadena exacta sensible a mayuscula y minuscula (observe que el único es igual) | col_name = "abc" |
| !=  o <>    | Comparacion de desigualdad de  cadena exacta sensible a mayuscula y minuscula (observe que el único es igual) | col_name != "abc" |
| LIKE      | Comparación de cadenas exactas que no distinguen entre mayúsculas y minúsculas | col_name LIKE "ABC" |
| NOT LIKE      | Comparación de desigualdad de  cadenas exactas que no distinguen entre mayúsculas y minúsculas | col_name NOT LIKE "ABC" |
| %      | Se usa en cualquier lugar de una cadena para que coincida con una secuencia de cero o más caracteres (funciona con el LIKE o NOT LIKE) | col_name LIKE "%at%" |
| _      | Se usa en cualquier lugar de una cadena para que coincida con un solo caracter (funciona con el LIKE o NOT LIKE) | col_name LIKE "AN_" |
| IN (...)      | La cadena existe en una lista | col_name IN ("a","b" , "c") |
| NOT IN (...)      | La cadena  no existe en una lista | col_name NOT IN ("a","b" , "c") |


:::tip ¿Sabías?

Todas las cadenas deben estar entre comillas para que el analizador de consultas pueda distinguir las palabras de la cadena de las palabras clave SQL.


:::

Ejemplos:

```sql
SELECT * FROM movies WHERE Title LIKE 'Toy Story%'
```

```sql
SELECT * FROM movies WHERE Director = "John Lasseter"
```
```sql
SELECT * FROM movies WHERE Director != "John Lasseter"
```
```sql

SELECT * FROM movies WHERE Title LIKE 'WALL-%'

```