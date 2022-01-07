# SubConsultas
Es posible que haya notado que incluso con una consulta completa, hay muchas preguntas que no podemos responder sobre nuestros datos sin una consulta adicional o un procesamiento previo. En estos casos, puede realizar varias consultas y procesar los datos usted mismo, o puede crear una consulta más compleja utilizando subconsultas SQL.

:::tip Ejemplo 

Supongamos que su empresa tiene una lista de todos los asociados de ventas, con datos sobre los ingresos que genera cada asociado y su salario individual. Los tiempos son ajustados y ahora desea saber cuáles de sus Asociados le están costando a la empresa más que el ingreso promedio generado por Asociado.
:::

1. Calcular los ingresos promedio que están generando todos los Asociados.
```sql
SELECT AVG(revenue_generated)
FROM sales_associates;

```
2. Luego , usando ese resultado , podemos comparar los costos de cada uno de los Asociados con ese valor. Para usarlo como una subconsulta, podemos escribirlo directamente en la cláusula  WHERE de la consulta:

```sql
SELECT *
FROM sales_associates
WHERE salary > 
   (SELECT AVG(revenue_generated)
    FROM sales_associates);

```
A medida que se ejecuta la restricción, el salario de cada Asociado se comparará con el valor consultado de la subconsulta interna.


:::tip Parentesis()

Se puede hacer una subconsulta en cualquier lugar (AVERIGUALO) 

Debido a que las subconsultas se pueden anidar, cada subconsulta debe estar completamente encerrada entre paréntesis para establecer la jerarquía adecuada. De lo contrario, las subconsultas pueden hacer referencia a cualquier tabla en la base de datos y hacer uso de las construcciones de una consulta normal (aunque algunas implementaciones no permiten que las subconsultas usen LIMIT o OFFSET).


:::

## Subconsultas correlacionadas

Un tipo de subconsulta más potente es la subconsulta correlacionada en la que la consulta interna depende de una columna o alias de la consulta externa. A diferencia de las subconsultas anteriores, cada una de estas consultas internas debe ejecutarse para cada una de las filas de la consulta externa, ya que la consulta interna depende de la fila de consulta externa actual.
:::tip Ejemplo
En lugar de la lista de Asociados de ventas anterior, imagínese si tiene una lista general de Empleados, sus departamentos (ingeniería, ventas, etc.), ingresos y salario. Esta vez, ahora está buscando en toda la empresa para encontrar empleados que se desempeñen mejor (mas salario) que el promedio en su departamento.
:::

Para cada empleado, necesitaría calcular su costo en relación con los ingresos promedio generados por todas las personas en su departamento. Para tomar el promedio del departamento, la subconsulta deberá saber en qué departamento se encuentra cada empleado:

```sql
SELECT *
FROM employees
WHERE salary > 
   (SELECT AVG(revenue_generated)
    FROM employees AS dept_employees
    WHERE dept_employees.department = employees.department);

```
:::tip 
Este tipo de consultas complejas pueden ser poderosas, pero también difíciles de leer y comprender, por lo que debe tener cuidado al usarlas. Si es posible, intente dar alias significativos a las tablas y valores temporales. Además, las subconsultas correlacionadas pueden ser difíciles de optimizar, por lo que las características de rendimiento pueden variar entre diferentes bases de datos.
:::

## Pruebas de existencia

El operador IN se usa para probar si el valor de la columna en la fila actual existía en una lista fija de valores. En consultas complejas, esto se puede ampliar utilizando subconsultas para probar si un valor de columna existe en una lista dinámica de valores.

```sql
SELECT *, …
FROM mytable
WHERE column
    IN/NOT IN (SELECT another_column
               FROM another_table);

```
:::tip
Al hacer esto, observe que la subconsulta interna debe seleccionar los valores de la columna  o los valores de una expresión para producir una lista con la que se pueda probar el valor de la columna externa. Este tipo de restricción es de gran alcance cuando las restricciones se basan en datos actuales.
:::