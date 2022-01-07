# SQL

SQL  o Structured Query Language, es un lenguaje diseñado para permitir que los usuarios técnicos y no técnicos consulten, manipulen y transformen datos de una base de datos relacional. Y debido a su simplicidad, las bases de datos SQL brindan almacenamiento seguro y escalable para millones de sitios web y aplicaciones móviles.

:::tip
¿Sabías?
Hay muchas bases de datos SQL populares, incluidas SQLite, MySQL, Postgres, Oracle y Microsoft SQL Server. Todos ellos admiten el estándar de lenguaje SQL común, que es lo que enseñará este sitio, pero cada implementación puede diferir en las características adicionales y los tipos de almacenamiento que admite.
:::

## Bases de datos Relacionales
Una base de datos relacional representa una colección de tablas relacionadas (bidimensionales). Cada una de las tablas es similar a una hoja de cálculo de Excel, con un número fijo de columnas nombradas (los atributos o propiedades de la tabla) y cualquier número de filas de datos.

Por ejemplo, si el Departamento de Vehículos Motorizados tuviera una base de datos, es posible que encuentre una tabla que contenga todos los vehículos conocidos que conducen las personas en el estado. Esta tabla puede necesitar almacenar el nombre del modelo, el tipo, el número de ruedas y el número de puertas de cada vehículo.

En dicha base de datos, puede encontrar tablas relacionadas adicionales que contengan información como una lista de todos los conductores registrados en el estado, los tipos de licencias de conducir que se pueden otorgar o incluso infracciones de conducción para cada conductor.


 Al aprender SQL, el objetivo es aprender a responder preguntas específicas sobre estos datos

## Sintaxis

:::tip Sabias?

 SQL no requiere que escriba las palabras clave en mayúsculas, pero como convención, ayuda a las personas a distinguir las palabras clave SQL de los nombres de columnas y tablas, y hace que la consulta sea más fácil de leer.
:::

```sql

SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;

```

:::tip Sabias?
Siempre fijarse en la ID para conseguir los datos.

Si se busca información de una persona, busca la ID de la persona sin importar en que tabla esta.


:::

## Orden
### Orden de ejecución de una consulta

```sql
SELECT DISTINCT column, AGG_FUNC(column_or_expression), …
FROM mytable
    JOIN another_table
      ON mytable.column = another_table.column
    WHERE constraint_expression
    GROUP BY column
    HAVING constraint_expression
    ORDER BY column ASC/DESC
    LIMIT count OFFSET COUNT;

```
### 1. FROM y JOINs

 FROM y  JOIN se ejecutan primero para determinar el conjunto de datos que se está consultando. 

### 2. WHERE
Una vez que tenemos el conjunto de datos , las restricciones  WHERE  se aplican a las filas individuales y las filas que no satisfacen la restricción se descartan.

###  3. GROUP BY
Las filas restantes después de WHERE se agrupan en función de los valores comunes en la columna especificada en la cláusula GROUP BY. Como resultado de la agrupación, solo habrá tantas filas como valores únicos haya en esa columna. Implícitamente, esto significa que solo debería necesitar usar esto cuando tenga funciones agregadas en su consulta.

###  4. HAVING
Si la consulta tiene una cláusula GROUP BY, las restricciones de la cláusula HAVING se aplican a las filas agrupadas; descarta las filas agrupadas que no satisfacen la restricción.

###  5. SELECT
Finalmente, se calcula cualquier expresión en la parte de la consulta.

### 6.DISTINCT
De las filas restantes, las filas con valores duplicados en la columna marcada como DISTINCT se descartarán.

###  7. ORDER BY
Si la cláusula ORDER BY especifica un orden , las filas se ordenan según los datos especificados en orden ascendente o descendente

###  8. LIMIT/OFFSET
Finalmente, las filas que caen fuera del rango especificado por LIMITy OFFSET se descartan, dejando el conjunto final de filas para ser devuelto por la consulta.


:::tip 
No todas las consultas deben tener todas las partes que enumeramos anteriormente, pero una parte de por qué SQL es tan flexible es que permite a los desarrolladores y analistas de datos manipular rápidamente los datos sin tener que escribir código adicional, todo simplemente usando las cláusulas anteriores.

:::