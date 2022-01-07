# Distinct  / Order By / Limit / Offset

## Distinct
Aunque los datos en una base de datos pueden ser únicos, los resultados de cualquier consulta en particular pueden no serlo. Tome nuestra tabla Películas, por ejemplo, se pueden lanzar muchas películas diferentes el mismo año. En tales casos, SQL proporciona una forma conveniente de descartar filas que tienen un valor de columna duplicado mediante el uso de la DISTINCT palabra clave.
```sql
SELECT DISTINCT column, another_column, …
FROM mytable
WHERE condition(s);
```
:::tip
DISTINCT es una 
palabra clave que elimina ciegamente las filas duplicadas
:::

:::tip
La SELECT DISTINCTdeclaración se usa para devolver solo valores distintos (diferentes).
:::

## Order By 

La mayoría de los datos que contiene una BD se agregan sin ningún orden  en particular. Como resultado, puede ser difícil leer y comprender los resultados de una consulta a medida que el tamaño de una tabla aumenta a miles o incluso millones de filas.

Para ayudar con esto, SQL proporciona una forma de ordenar sus resultados por una columna dada en orden ascendente o descendente usando la cláusula ORDER BY

```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC;

```

:::tip 
Cuando ORDER BY se especifica , cada fila se ordena alfanuméricamente según el valor de la columna especificada. En algunas bases de datos, también puede especificar una intercalación para ordenar mejor los datos que contienen texto internacional.
:::
## LIMIT -- OFFSET

Otra cláusula que se usa comúnmente son las cláusulas LIMIT y OFFSET, que son una optimización útil para indicar a la base de datos el subconjunto de los resultados que le interesan.

 LIMIT reducirá el número de filas de retorno (especifica cuantas filas devolvera la consulta), y el opcional OFFSET es para especificar dónde empezar a contar los números de filas (especifica en cual fila empieza a contar el LIMIT)
```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;
```
Ejemplos:

```sql
select DISTINCT Director from Movies ORDER BY Director ASC
```

```sql
select * from Movies  order by Year DESC limit 4
```

```sql
select * from Movies  order by title ASC limit 5
```

```sql
select * from Movies  order by title ASC limit 5 OFFSET 5
```
