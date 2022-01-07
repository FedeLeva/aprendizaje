# Expresiones y funciones

## Expresiones/funciones

Se puede usar expresiones para escribir una lógica más compleja que se aplica en los valores devuelto por una consulta. Estas expresiones pueden usar funciones matemáticas y de cadena junto con aritmética básica para transformar valores cuando se ejecuta la consulta, como se muestra en este ejemplo de física.


```sql
SELECT particle_speed / 2.0 AS half_particle_speed
FROM physics_data
WHERE ABS(particle_position) * 10.0 > 500;	

```
:::tip funcion ABS()
La función ABS () devuelve el valor absoluto (positivo) de un número.

El valor absoluto de un número consiste en su valor, sin importar su signo. Cuando tomamos el valor absoluto de un número, éste es siempre positivo o cero

::: 
:::tip
Se pueden usar funciones y operaciones aritméticas en las consultas 
:::
## As
Cada base de datos tiene sus propias funciones matemáticas, de cadena y de fecha que se pueden usar en una consulta, que puede encontrar en sus propios documentos respectivos.
El uso de expresiones puede ahorrar tiempo y un posprocesamiento adicional de los datos de resultado, pero también puede hacer que la consulta sea más difícil de leer, por lo que recomendamos que cuando se usen expresiones en SELECT, también se les asigne un alias descriptivo. usando la  palabra clave AS.

```sql
SELECT col_expression AS expr_description, …
FROM mytable;

```
Además de las expresiones, las columnas regulares e incluso las tablas también pueden tener alias para facilitar su referencia en la salida y como parte de la simplificación de consultas más complejas.

```sql
SELECT column AS better_column_name, …
FROM a_long_widgets_table_name AS mywidgets
INNER JOIN widget_sales
  ON mywidgets.id = widget_sales.widget_id;
```
:::tip
Se utiliza el punto para acceder a una columna especifica de una tabla en particular.

Sirve para evitar ambiguedades cuando dos tablan tiene una columna con el mismo nombre

tabla.columna 

:::

```sql
SELECT title, (domestic_sales + international_sales) / 1000000 AS gross_sales_millions
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id;

```
```sql

SELECT title, rating * 10 AS rating_percent
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id;

```
```sql
SELECT title, year
FROM movies
WHERE year % 2 = 0;

```
## Funciones de grupo 


 SQL también admite el uso de expresiones (o funciones) agregadas que  permiten resumir información sobre un grupo de filas (ENTIDADES).

```sql
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression;

```

Sin una agrupación especificada, cada función agregada se ejecutará en todo el conjunto de filas de la consulta y devolverá un solo valor. Y al igual que las expresiones normales, asignar un alias a sus funciones agregadas garantiza que los resultados sean más fáciles de leer y procesar.

:::tip
La función se aplica a un conjunto de filas y devuelve un valor(una fila).
:::

### Aquí hay algunas funciones agregadas comunes que usaremos en nuestros ejemplos:

| Funcion      | Descripcion     | 
| :-------------: |:-------------:| 
| COUNT(*) , COUNT(Columna)             | Si no se especifica ningun nombre de columna  ,se utiliza para contar el número de filas en el grupo  . De lo contrario , cuenta el número de filas en el grupo con valores NO NULL de la columna especificada | 
| MIN(Columna)            | Encuentra el valor numérico más pequeño de la columna especificada     de todas las filas del grupo | 
| MAX(Columna)            | Encuentra el valor numérico más grande de la columna especificada     de todas las filas del grupo | 
| AVG(Columna)            | Encuentra el valor numérico promedio en la columna especificada   del grupo de filas |
| SUM(Columna)            | Devuelve la suma de todos los valores numéricos de la columna especificada del grupo de filas |

## Group By 
Además de aplicar una función agregada en todas las filas de una tabla, se  puede aplicar las funciones agregadas a grupos  de datos dentro de ese grupo (es decir, ventas de taquilla para películas de acción y comedias).

Esto generaría tantos resultados como grupos definidos por la cláusula GROUP BY.

```sql
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression
GROUP BY column;
```
:::tip Group By
La cláusula GROUP BY funciona agrupando filas que tienen el mismo valor en la columna especificada.
:::

```sql
SELECT max(Years_employed) FROM employees;
SELECT role, AVG(years_employed) as Average_years_employed
FROM employees
GROUP BY role;

```

```sql
SELECT building, SUM(years_employed) as Total_years_employed
FROM employees
GROUP BY building;

```

## Having 
si la cláusula  GROUP BY se ejecuta después de la cláusula WHERE (que filtra las filas), ¿cómo filtramos exactamente las filas agrupadas(grupo)?

Afortunadamente, SQL nos permite hacer esto agregando una  cláusula HAVING adicional que se usa específicamente con la  cláusula GROUP BY para permitirnos filtrar grupos de filas.

:::tip
WHERE = Filtra las filas

Los que pasen el WHERE, forman grupos (segun la columna especificada)

HAVING = Filtra los grupos (conjuntos de filas).

Para que el grupo no se descarte, la condición debe ser true.
:::

```sql
SELECT group_by_column, AGG_FUNC(column_expression) AS aggregate_result_alias, …
FROM mytable
WHERE condition
GROUP BY column
HAVING group_condition;

```

 HAVING se escribe de la misma forma que WHERE y se aplican a las filas agrupadas.  A menudo es necesario poder aplicar restricciones adicionales para entender rápidamente los datos.

 :::tip ¿Sabías?
Si no está utilizando la cláusula `GROUP BY`, una cláusula simple como ` WHERE` será suficiente.
 :::

 ```sql
SELECT role, COUNT(*) as Number_of_artists
FROM employees
WHERE role = "Artist";

 ```
  ```sql
  SELECT role, COUNT(*)
FROM employees
GROUP BY role;

 
 ```
  ```sql
 SELECT role, SUM(years_employed)
FROM employees
GROUP BY role
HAVING role = "Engineer";

 ```