(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{416:function(a,s,e){"use strict";e.r(s);var t=e(54),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[a._v("#")]),a._v(" SQL")]),a._v(" "),e("p",[a._v("SQL  o Structured Query Language, es un lenguaje diseñado para permitir que los usuarios técnicos y no técnicos consulten, manipulen y transformen datos de una base de datos relacional. Y debido a su simplicidad, las bases de datos SQL brindan almacenamiento seguro y escalable para millones de sitios web y aplicaciones móviles.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("¿Sabías?\nHay muchas bases de datos SQL populares, incluidas SQLite, MySQL, Postgres, Oracle y Microsoft SQL Server. Todos ellos admiten el estándar de lenguaje SQL común, que es lo que enseñará este sitio, pero cada implementación puede diferir en las características adicionales y los tipos de almacenamiento que admite.")])]),a._v(" "),e("h2",{attrs:{id:"bases-de-datos-relacionales"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bases-de-datos-relacionales"}},[a._v("#")]),a._v(" Bases de datos Relacionales")]),a._v(" "),e("p",[a._v("Una base de datos relacional representa una colección de tablas relacionadas (bidimensionales). Cada una de las tablas es similar a una hoja de cálculo de Excel, con un número fijo de columnas nombradas (los atributos o propiedades de la tabla) y cualquier número de filas de datos.")]),a._v(" "),e("p",[a._v("Por ejemplo, si el Departamento de Vehículos Motorizados tuviera una base de datos, es posible que encuentre una tabla que contenga todos los vehículos conocidos que conducen las personas en el estado. Esta tabla puede necesitar almacenar el nombre del modelo, el tipo, el número de ruedas y el número de puertas de cada vehículo.")]),a._v(" "),e("p",[a._v("En dicha base de datos, puede encontrar tablas relacionadas adicionales que contengan información como una lista de todos los conductores registrados en el estado, los tipos de licencias de conducir que se pueden otorgar o incluso infracciones de conducción para cada conductor.")]),a._v(" "),e("p",[a._v("Al aprender SQL, el objetivo es aprender a responder preguntas específicas sobre estos datos")]),a._v(" "),e("h2",{attrs:{id:"sintaxis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sintaxis"}},[a._v("#")]),a._v(" Sintaxis")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("Sabias?")]),a._v(" "),e("p",[a._v("SQL no requiere que escriba las palabras clave en mayúsculas, pero como convención, ayuda a las personas a distinguir las palabras clave SQL de los nombres de columnas y tablas, y hace que la consulta sea más fácil de leer.")])]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("column")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" another_column"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" …\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" mytable\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" condition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ORDER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("column")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ASC")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DESC")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("LIMIT")]),a._v(" num_limit "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("OFFSET")]),a._v(" num_offset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("Sabias?")]),a._v(" "),e("p",[a._v("Siempre fijarse en la ID para conseguir los datos.")]),a._v(" "),e("p",[a._v("Si se busca información de una persona, busca la ID de la persona sin importar en que tabla esta.")])]),a._v(" "),e("h2",{attrs:{id:"orden"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#orden"}},[a._v("#")]),a._v(" Orden")]),a._v(" "),e("h3",{attrs:{id:"orden-de-ejecucion-de-una-consulta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#orden-de-ejecucion-de-una-consulta"}},[a._v("#")]),a._v(" Orden de ejecución de una consulta")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DISTINCT")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("column")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" AGG_FUNC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("column_or_expression"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" …\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" mytable\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("JOIN")]),a._v(" another_table\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" mytable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("column")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" another_table"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("column")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" constraint_expression\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GROUP")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("column")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("HAVING")]),a._v(" constraint_expression\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ORDER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("column")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ASC")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DESC")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("LIMIT")]),a._v(" count "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("OFFSET")]),a._v(" COUNT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),e("h3",{attrs:{id:"_1-from-y-joins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-from-y-joins"}},[a._v("#")]),a._v(" 1. FROM y JOINs")]),a._v(" "),e("p",[a._v("FROM y  JOIN se ejecutan primero para determinar el conjunto de datos que se está consultando.")]),a._v(" "),e("h3",{attrs:{id:"_2-where"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-where"}},[a._v("#")]),a._v(" 2. WHERE")]),a._v(" "),e("p",[a._v("Una vez que tenemos el conjunto de datos , las restricciones  WHERE  se aplican a las filas individuales y las filas que no satisfacen la restricción se descartan.")]),a._v(" "),e("h3",{attrs:{id:"_3-group-by"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-group-by"}},[a._v("#")]),a._v(" 3. GROUP BY")]),a._v(" "),e("p",[a._v("Las filas restantes después de WHERE se agrupan en función de los valores comunes en la columna especificada en la cláusula GROUP BY. Como resultado de la agrupación, solo habrá tantas filas como valores únicos haya en esa columna. Implícitamente, esto significa que solo debería necesitar usar esto cuando tenga funciones agregadas en su consulta.")]),a._v(" "),e("h3",{attrs:{id:"_4-having"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-having"}},[a._v("#")]),a._v(" 4. HAVING")]),a._v(" "),e("p",[a._v("Si la consulta tiene una cláusula GROUP BY, las restricciones de la cláusula HAVING se aplican a las filas agrupadas; descarta las filas agrupadas que no satisfacen la restricción.")]),a._v(" "),e("h3",{attrs:{id:"_5-select"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-select"}},[a._v("#")]),a._v(" 5. SELECT")]),a._v(" "),e("p",[a._v("Finalmente, se calcula cualquier expresión en la parte de la consulta.")]),a._v(" "),e("h3",{attrs:{id:"_6-distinct"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-distinct"}},[a._v("#")]),a._v(" 6.DISTINCT")]),a._v(" "),e("p",[a._v("De las filas restantes, las filas con valores duplicados en la columna marcada como DISTINCT se descartarán.")]),a._v(" "),e("h3",{attrs:{id:"_7-order-by"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-order-by"}},[a._v("#")]),a._v(" 7. ORDER BY")]),a._v(" "),e("p",[a._v("Si la cláusula ORDER BY especifica un orden , las filas se ordenan según los datos especificados en orden ascendente o descendente")]),a._v(" "),e("h3",{attrs:{id:"_8-limit-offset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-limit-offset"}},[a._v("#")]),a._v(" 8. LIMIT/OFFSET")]),a._v(" "),e("p",[a._v("Finalmente, las filas que caen fuera del rango especificado por LIMITy OFFSET se descartan, dejando el conjunto final de filas para ser devuelto por la consulta.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("No todas las consultas deben tener todas las partes que enumeramos anteriormente, pero una parte de por qué SQL es tan flexible es que permite a los desarrolladores y analistas de datos manipular rápidamente los datos sin tener que escribir código adicional, todo simplemente usando las cláusulas anteriores.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);