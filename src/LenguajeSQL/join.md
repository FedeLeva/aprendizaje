# Join

## Normalizacion

Normalización = Los datos de una entidad  se dividen en partes y se almacenan en múltiples tablas ortogonales 


### Normalización de la base de datos

La normalización de la base de datos es útil porque minimiza los datos duplicados en una sola tabla y permite que los datos de la base de datos crezcan independientemente unos de otros (es decir, los tipos de motores de automóvil pueden crecer independientemente de cada tipo de automóvil)

Como compensación, las consultas se vuelven un poco más complejas, ya que tienen que poder encontrar datos de diferentes partes de la base de datos, y pueden surgir problemas de rendimiento cuando se trabaja con muchas tablas grandes.
Para responder preguntas sobre una entidad que tiene datos que abarcan varias tablas en una base de datos normalizada, debemos aprender a escribir una consulta que pueda combinar todos esos datos y extraer exactamente la información que necesitamos.

##  Inner Join

Cada fila de una tabla debe tener una clave principal que identifique esa entidad de forma única en la base de datos. Es una clave primaria  que puede ser un entero que se incrementa automáticamente (porque ahorran espacio), pero también puede ser una cadena, valor hash, siempre que sea único.



:::tip cláusula ON
Al usar la cláusula JOIN en una consulta, podemos combinar filas de dos tablas separadas usando esta clave única. 

:::
:::tip Uniones
Se hace hacer dos join a la misma tabla pero con diferente relación. (el país de un empleado y de un cliente)
:::


```sql
SELECT column, another_table_column, …
FROM mytable
INNER JOIN another_table 
    ON mytable.id = another_table.id
WHERE condition(s)
ORDER BY column, … ASC/DESC
LIMIT num_limit OFFSET num_offset;

```

El INNER JOIN es un proceso que hace coincidir las filas de la primera tabla y las filas de la segunda tabla que tienen la misma clave (según lo definido por la restricción ON) para crear una fila por coincidencia con las columnas combinadas de ambas tablas. Después de unir las tablas, se aplican las otras cláusulas.


:::tip ¿Sabías?
Es posible que vea consultas en las que INNER JOIN se escribe simplemente como JOIN. Estos dos son equivalentes, pero continuaremos refiriéndonos a estas uniones como uniones internas porque hacen que la consulta sea más fácil de leer una vez que comience a usar otros tipos de uniones, que se presentarán en la siguiente lección.
:::


```sql
SELECT * FROM movies JOIN Boxoffice  ON (Id = Movie_id);
```
```sql
SELECT * FROM movies INNER JOIN Boxoffice  ON (Id = Movie_id) 
WHERE  International_sales > Domestic_sales;

```
```sql
SELECT * FROM movies INNER JOIN Boxoffice  ON (Id = Movie_id) 
ORDER BY Rating DESC

```

## Outer Join
:::warning
INNER JOIN  solo contiene datos que pertenecen a ambas tablas.
::: 
Si las dos tablas tienen datos asimétricos, lo que puede suceder fácilmente cuando los datos se ingresan en diferentes etapas, entonces tendríamos que usar a LEFT JOIN, RIGHT JOIN o en su lugar FULL JOIN para asegurarnos de que los datos que necesita no se queden fuera de los resultados.

```sql
SELECT column, another_column, …
FROM mytable
INNER/LEFT/RIGHT/FULL JOIN another_table 
    ON mytable.id = another_table.matching_id
WHERE condition(s)
ORDER BY column, … ASC/DESC
LIMIT num_limit OFFSET num_offset;

```
## Left / Right / Full
Al igual que INNER JOIN
estas tres nuevas uniones, deben especificar en qué columna se unirán los datos(clave principal/clave primaria).

Al unir la tabla A a la tabla B,  LEFT JOIN simplemente incluye filas de A independientemente de si se encuentra una fila coincidente en B. RIGHT JOIN es lo mismo, pero invertido, incluyendo filas en B independientemente de si se encuentra una coincidencia en A. Finalmente tenemos,  FULL JOIN en donde  las filas de ambas tablas se mantienen, independientemente de si existe una fila coincidente en la otra tabla.

:::tip
Cuando use cualquiera de estas nuevas uniones, probablemente tendrá que escribir lógica adicional para lidiar con NULLs en el resultado y las restricciones
:::

:::tip ¿Sabías?
Es posible que vea las consultas con estas uniones se escriban como LEFT OUTER JOIN, RIGHT OUTER JOIN o FULL OUTER JOIN, pero la palabra clave OUTER mantiene la compatibilidad de SQL-92 y estas consultas son simplemente equivalente a LEFT JOIN, RIGHT JOIN y FULL JOIN respectivamente.

:::

```sql
SELECT DISTINCT building_name, role 
FROM buildings 
  LEFT JOIN employees
    ON building_name = building;

```


## Valores Null

Siempre es bueno reducir la posibilidad de valores NULL en las bases de datos porque requieren una atención especial al construir consultas, restricciones (ciertas funciones se comportan de manera diferente con valores nulos) y al procesar los resultados.

Una alternativa a los valores NULL en su base de datos es tener valores predeterminados, como 0 para datos numéricos, cadenas vacías para datos de texto, etc. Pero si su base de datos necesita almacenar datos incompletos, entonces los valores NULL pueden ser apropiados si los valores predeterminados sesgarán el análisis posterior (por ejemplo, al tomar promedios de datos numéricos).

A veces, tampoco es posible evitar valores NULL, al unir dos tablas con datos asimétricos. En estos casos, puede buscar valores NULL con la cláusula WHERE mediante la restricción IS NULL o IS NOT NULL.

```sql
SELECT column, another_column, …
FROM mytable
WHERE column IS/IS NOT NULL
AND/OR another_condition
AND/OR …;
```

```sql
SELECT Name , Role FROM employees WHERE building IS  NULL;
```

```sql
SELECT DISTINCT building_name
FROM buildings 
  LEFT JOIN employees
    ON building_name = building
WHERE role IS NULL;

```

## Uniones, intersecciones y excepciones
Cuando se trabaja con varias tablas, el operador UNION y UNION ALL permite agregar los resultados de una consulta a otra asumiendo que tienen el mismo recuento de columnas, orden y tipo de datos(no verifica). Si usa UNION sin el ALL, las filas duplicadas entre las tablas se eliminarán del resultado.

```sql
SELECT column, another_column
   FROM mytable
UNION / UNION ALL / INTERSECT / EXCEPT
SELECT other_column, yet_another_column
   FROM another_table
ORDER BY column DESC
LIMIT n;
```
UNION ocurre antes de ORDER BY y LIMIT. No es común usar UNION, pero si tiene datos en diferentes tablas que no se pueden unir y procesar, puede ser una alternativa a realizar múltiples consultas en la base de datos.



De manera similar a UNION, el operador  INTERSECT se asegurará de que solo se devuelvan las filas que sean idénticas en ambos conjuntos de resultados, y el  operador EXCEPT se asegurará de que solo se devuelvan las filas del primer conjunto de resultados que no están en el segundo.

Ambos INTERSECT y EXCEPT también descartan filas duplicadas después de sus respectivas operaciones, aunque algunas bases de datos también admiten INTERSECT ALL y EXCEPT ALL permiten que los duplicados no se descarten.
