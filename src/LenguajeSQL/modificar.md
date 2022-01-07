# Manipulacion de tablas
## ¿Qué es un esquema?

En SQL, el esquema de la base de datos es lo que describe la estructura de cada tabla y los tipos de datos que puede contener cada columna de la tabla.

Esta estructura fija es lo que permite que una base de datos sea eficiente y consistente a pesar de almacenar millones o incluso miles de millones de filas.

## Insert

Al insertar datos en una base de datos, necesitamos usar la declaración INSERT, que declara en qué tabla insertar, las columnas de datos que estamos llenando y una o más filas de datos para insertar. En general, cada fila de datos que inserte debe contener valores para cada columna correspondiente en la tabla. 

Puede insertar varias filas a la vez simplemente enumerándolas secuencialmente(separándolo con coma)

```sql

INSERT INTO mytable
VALUES (value_or_expr, another_value_or_expr, …),
       (value_or_expr_2, another_value_or_expr_2, …),
       …;

```
En algunos casos, si tiene datos incompletos y la tabla contiene columnas que admiten valores predeterminados, puede insertar filas solo con las columnas que tiene especificado explícitamente. (crear una fila especificando que columna llenar)

```sql
INSERT INTO mytable
(column, another_column, …)
VALUES (value_or_expr, another_value_or_expr, …),
      (value_or_expr_2, another_value_or_expr_2, …),
      …;

```
En estos casos, el número de valores debe coincidir con el número de columnas especificadas. A pesar de ser una declaración más detallada de escribir, insertar valores de esta manera tiene la ventaja de ser compatible con versiones posteriores. Por ejemplo, si agrega una nueva columna a la tabla con un valor predeterminado, INSERT no  tendrá que cambiar ninguna declaración codificada como resultado para adaptarse a ese cambio.

Además, puede utilizar expresiones (o funciones) matemáticas y de cadena con los valores que está insertando.

Esto puede resultar útil para garantizar que todos los datos insertados tengan un formato determinado.

```sql
INSERT INTO boxoffice
(movie_id, rating, sales_in_millions)
VALUES (1, 9.9, 283742034 / 1000000);

```
```sql
INSERT INTO movies VALUES (4, "Toy Story 4", "El Directore", 2015, 90);
```

```sql
INSERT INTO boxoffice VALUES (4, 8.7, 340000000, 270000000);
```
## UPDATE  
Además de agregar nuevos datos, una tarea común es actualizar los datos existentes, lo que se puede hacer mediante una declaración UPDATE. De manera similar a la declaración INSERT, debe especificar exactamente qué tabla, columnas y filas actualizar. Además, los datos que está actualizando deben coincidir con el tipo de datos de las columnas en el esquema de la tabla.

```sql
UPDATE mytable
SET column = value_or_expr, 
    other_column = another_value_or_expr, 
    …
WHERE condition;

```
La declaración funciona tomando múltiples pares de columnas / valores y aplicando esos cambios a todas y cada una de las filas que satisfacen la restricción de la cláusula WHERE.

:::warning Teniendo Cuidado
La mayoría de las personas que trabajan con SQL  cometen errores de actualización de datos en un momento u otro. Ya sea actualizar el conjunto incorrecto de filas en una base de datos de producción o de omitir accidentalmente la cláusula WHERE  (lo que hace que la actualización se aplique a todas las filas), debe tener mucho cuidado al construir declaraciones UPDATE.

Un consejo útil es escribir siempre la restricción primero y probarla en una consulta SELECT para asegurarse de que está actualizando las filas correctas y solo luego escribir los pares de columna / valor para actualizar.


:::

```sql
UPDATE movies
SET director = "John Lasseter"
WHERE id = 2;


```
```sql
UPDATE movies
SET year = 1999
WHERE id = 3;


```
```sql

UPDATE movies
SET title = "Toy Story 3", director = "Lee Unkrich"
WHERE id = 11;


```
:::tip 
Para modificar un dato se recomienda usar la ID (WHERE ID = identificador)
:::
## Delete 

Cuando necesite eliminar datos de una tabla en la base de datos, puede usar una declaración DELETE, que describe la tabla sobre la que actuar y las filas de la tabla que serán eliminadas a través de la cláusula WHERE.

```sql
DELETE FROM mytable
WHERE condition;

```
:::warning
Si decide omitir la restricción WHERE, se eliminan todas las filas, lo que es una forma rápida y fácil de borrar una tabla por completo (si es intencional).
:::

:::warning Teniendo especial cuidado
Al igual que la declaración UPDATE, se recomienda que primero ejecute una consulta SELECT con restricciones (WHERE) para asegurarse de que está eliminando las filas correctas. Sin una copia de seguridad adecuada o una base de datos de prueba, es muy fácil eliminar datos de forma irrevocable, por lo que siempre lea sus declaraciones DELETE dos veces y ejecútelas una vez.
:::

```sql
DELETE FROM movies
where year < 2005;

```

```sql

DELETE FROM movies
where year < 2005;

```

## Create table
Cuando tenga nuevas entidades y relaciones para almacenar en su base de datos, puede crear una nueva tabla  utilizando la declaración CREATE TABLE.


```sql
CREATE TABLE IF NOT EXISTS mytable (
    column DataType TableConstraint DEFAULT default_value,
    another_column DataType TableConstraint DEFAULT default_value,
    …
);

```
La estructura de la nueva tabla está definida por su esquema de tabla, que define una serie de columnas. Cada columna tiene un nombre, el tipo de datos permitidos en esa columna, una restricción sobre los valores que se insertan (opcional) y un valor predeterminado (opcional)

Si ya existe una tabla con el mismo nombre, SQL generalmente arrojará un error, por lo que para suprimir el error y omitir la creación de una tabla si existe, puede usar la cláusula IF NOT EXISTS

### Tipos de datos de tabla 
Las diferentes bases de datos admiten diferentes tipos de datos, pero los tipos comunes admiten números, cadenas y otras cosas diversas como fechas, valores booleanos o incluso datos binarios. A continuación, se muestran algunos ejemplos que puede utilizar en código real.

| Tipo de dato      | Descripcion     
| :-------------: |:-------------:| 
|    Integer  , Boolean             |    Los tipos de datos enteros pueden almacenar valores enteros como el recuento de un número o una edad. En algunas implementaciones, el valor booleano se representa simplemente como un valor entero de solo 0 o 1           |
|Float , Double , Real| Los tipo de datos de coma flotante pueden almacenar datos numéricos más precisos , como medidas o valores fraccionarios . Se pueden usar diferentes tipos dependiendo de la precisión de coma flotante requerida para ese valor.|
|Character (num_chars) , VARCHAR(num_chars),TEXT | Los tipos de datos basados en texto pueden almacenar cadenas y textos en todo tipo de configuraciones regionales. La distinción entre los diversos tipos generalmente equivale a la eficiencia subyacente de la base de datos cuando se trabaja con estas columnas --- Tanto los tipos CHARACTER como VARCHAR (cáracter variable) se especifican con el número maximo de caracteres que pueden almacenar (los valores más largos pueden truncarse) , por lo que puede ser más eficiente almacenar y consultas con tablas grandes.|
| DATE , DATETIME | SQL también puede almacenar  fechas y horas para realizar un seguimiento de la fecha y/o hora de los  eventos . Puede resultar complicado trabajar con ellos, especialmente cuando se manipulan datos en distintas zonas horarias.| 
|BLOB | Finalmente , SQL puede almacenar datos binarios en blobs directamente en la base de datos. Estos valores a menudo son opacos para la BD, por lo que generalmente debe almacenarlos con los metadatos correctos para volver a consultarlos.|

### Restricciones de la tabla

No vamos a profundizar demasiado en las restricciones de la tabla en esta lección, pero cada columna puede tener restricciones que limitan los valores que se pueden insertar en esa columna. Esta no es una lista completa, pero mostrará algunas restricciones comunes que pueden resultarle útiles.


| Restricción      | Descripcion     
| :-------------: |:-------------:| 
| PRIMARY KEY     | Esto significa que los valores de esta columna son únicos y cada valor se puede utilizar para identificar una sola fila en esta tabla. |
| AUTOINCREMENT | Para valores enteros, esto significa que el valor se completa e incrementa automaticamente con cada inserción de fila. No es compatible con todas las bases de datos |
| UNIQUE | Esto significa que los valores en está columna deben ser únicos , por lo que no puede insertar una fila con el mismo valor de otra fila (valor de la columna). |
|NOT NULL | Esto significa que el valor insertado no puede ser NULL|
| CHECK (expression) | Esto le permite ejecutar una expresión mas compleja para probar si los valores insertados son válidos . Por ejemplo , puede verificar que los valores sean positivos o mayores que un tamaño especifico , o comenzar con un prefijo determinado , etc. |
| FOREIGN KEY| Se trata de una comprobación de coherencia que garantiza que cada valor de esta columna se corresponda con otro valor de una columna de otra tabla. -- Por ejemplo, si hay dos tablas, una que enumera todos los Empleados por ID y otra que enumera la información de la nómina , la "FOREIGN KEY" puede garantizar que cada fila en la tabla de nómina corresponda a un empleado válido en la lista de Empleados.

```sql
CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    title TEXT,
    director TEXT,
    year INTEGER, 
    length_minutes INTEGER
);

```

```sql
CREATE TABLE Database (
    Name TEXT,
    Version FLOAT,
    Download_count INTEGER
);

```

## Alter table
### Modificación de tablas
A medida que sus datos cambian con el tiempo, SQL le proporciona una forma de actualizar sus tablas y esquemas de base de datos correspondientes mediante el uso de la declaración ALTER TABLE para agregar, eliminar o modificar columnas y restricciones de tabla

## ALTER TABLE ADD 
La sintaxis para agregar una nueva columna es similar a la sintaxis al crear nuevas columnas en la declaración CREATE TABLE. Debe especificar el nombre de la columna, el tipo de datos de la columna junto con las posibles restricciones de la tabla y los valores predeterminados que se aplicarán a las filas nuevas y existentes. En algunas bases de datos como MySQL, incluso puede especificar dónde insertar la nueva columna usando las cláusulas FIRST o AFTER, aunque esta no es una característica estándar.

```sql
ALTER TABLE mytable
ADD column DataType OptionalTableConstraint 
    DEFAULT default_value;

```
```sql
ALTER TABLE Movies
  ADD COLUMN Aspect_ratio FLOAT DEFAULT 2.39;

```
```sql
ALTER TABLE Movies
  ADD COLUMN Language TEXT DEFAULT "English";
```
## ALTER TABLE DROP 
Eliminar columnas es tan fácil como especificar la columna que se eliminará, sin embargo, algunas bases de datos (incluida SQLite) no admiten esta función. En su lugar, es posible que deba crear una nueva tabla y migrar los datos.
```sql
ALTER TABLE mytable
DROP column_to_be_deleted;
```
## ALTER TABLE RENAME TO

Si necesita cambiar el nombre de la tabla, también puede hacerlo usando la  cláusula RENAME TO 

```sql
ALTER TABLE mytable
RENAME TO new_table_name;

```
## ALTER TABLE Otros
Cada implementación de base de datos admite diferentes métodos para alterar sus tablas, por lo que siempre es mejor consultar los documentos de su base de datos antes de continuar.

## DROP TABLE 

En algunos casos raros, es posible que desee eliminar una tabla completa, incluidos todos sus datos y metadatos, y para hacerlo, puede usar la declaración DROP TABLE, que difiere de la declaración  DELETE en que también elimina el esquema de la tabla de la base de datos por completo.

```sql
DROP TABLE IF EXISTS mytable;
```

:::tip
Al igual que la declaración CREATE TABLE, la base de datos puede arrojar un error si la tabla especificada no existe, y para suprimir ese error, puede usar la cláusula IF EXISTS
Además, si tiene otra tabla que depende de las columnas de la tabla que está eliminando (por ejemplo, con una FOREIGN KEY), primero deberá actualizar todas las tablas dependientes para poder eliminar la tabla deseada.
:::

```sql
DROP TABLE Movies;
```

```sql
DROP TABLE BoxOffice;
```