(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{424:function(a,e,s){"use strict";s.r(e);var t=s(54),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"manipulacion-de-tablas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manipulacion-de-tablas"}},[a._v("#")]),a._v(" Manipulacion de tablas")]),a._v(" "),s("h2",{attrs:{id:"¿que-es-un-esquema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿que-es-un-esquema"}},[a._v("#")]),a._v(" ¿Qué es un esquema?")]),a._v(" "),s("p",[a._v("En SQL, el esquema de la base de datos es lo que describe la estructura de cada tabla y los tipos de datos que puede contener cada columna de la tabla.")]),a._v(" "),s("p",[a._v("Esta estructura fija es lo que permite que una base de datos sea eficiente y consistente a pesar de almacenar millones o incluso miles de millones de filas.")]),a._v(" "),s("h2",{attrs:{id:"insert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[a._v("#")]),a._v(" Insert")]),a._v(" "),s("p",[a._v("Al insertar datos en una base de datos, necesitamos usar la declaración INSERT, que declara en qué tabla insertar, las columnas de datos que estamos llenando y una o más filas de datos para insertar. En general, cada fila de datos que inserte debe contener valores para cada columna correspondiente en la tabla.")]),a._v(" "),s("p",[a._v("Puede insertar varias filas a la vez simplemente enumerándolas secuencialmente(separándolo con coma)")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INSERT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTO")]),a._v(" mytable\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VALUES")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value_or_expr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" another_value_or_expr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" …"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value_or_expr_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" another_value_or_expr_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" …"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n       …"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("p",[a._v("En algunos casos, si tiene datos incompletos y la tabla contiene columnas que admiten valores predeterminados, puede insertar filas solo con las columnas que tiene especificado explícitamente. (crear una fila especificando que columna llenar)")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INSERT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTO")]),a._v(" mytable\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("column")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" another_column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" …"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VALUES")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value_or_expr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" another_value_or_expr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" …"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value_or_expr_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" another_value_or_expr_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" …"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      …"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("p",[a._v("En estos casos, el número de valores debe coincidir con el número de columnas especificadas. A pesar de ser una declaración más detallada de escribir, insertar valores de esta manera tiene la ventaja de ser compatible con versiones posteriores. Por ejemplo, si agrega una nueva columna a la tabla con un valor predeterminado, INSERT no  tendrá que cambiar ninguna declaración codificada como resultado para adaptarse a ese cambio.")]),a._v(" "),s("p",[a._v("Además, puede utilizar expresiones (o funciones) matemáticas y de cadena con los valores que está insertando.")]),a._v(" "),s("p",[a._v("Esto puede resultar útil para garantizar que todos los datos insertados tengan un formato determinado.")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INSERT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTO")]),a._v(" boxoffice\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("movie_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" rating"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" sales_in_millions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VALUES")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9.9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("283742034")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INSERT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTO")]),a._v(" movies "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VALUES")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Toy Story 4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"El Directore"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2015")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("90")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INSERT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTO")]),a._v(" boxoffice "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VALUES")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("340000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("270000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[a._v("#")]),a._v(" UPDATE")]),a._v(" "),s("p",[a._v("Además de agregar nuevos datos, una tarea común es actualizar los datos existentes, lo que se puede hacer mediante una declaración UPDATE. De manera similar a la declaración INSERT, debe especificar exactamente qué tabla, columnas y filas actualizar. Además, los datos que está actualizando deben coincidir con el tipo de datos de las columnas en el esquema de la tabla.")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" mytable\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("column")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" value_or_expr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" \n    other_column "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" another_value_or_expr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" \n    …\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" condition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("p",[a._v("La declaración funciona tomando múltiples pares de columnas / valores y aplicando esos cambios a todas y cada una de las filas que satisfacen la restricción de la cláusula WHERE.")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Teniendo Cuidado")]),a._v(" "),s("p",[a._v("La mayoría de las personas que trabajan con SQL  cometen errores de actualización de datos en un momento u otro. Ya sea actualizar el conjunto incorrecto de filas en una base de datos de producción o de omitir accidentalmente la cláusula WHERE  (lo que hace que la actualización se aplique a todas las filas), debe tener mucho cuidado al construir declaraciones UPDATE.")]),a._v(" "),s("p",[a._v("Un consejo útil es escribir siempre la restricción primero y probarla en una consulta SELECT para asegurarse de que está actualizando las filas correctas y solo luego escribir los pares de columna / valor para actualizar.")])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" movies\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" director "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"John Lasseter"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" movies\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("year")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1999")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" movies\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" title "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Toy Story 3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" director "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Lee Unkrich"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("Para modificar un dato se recomienda usar la ID (WHERE ID = identificador)")])]),a._v(" "),s("h2",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[a._v("#")]),a._v(" Delete")]),a._v(" "),s("p",[a._v("Cuando necesite eliminar datos de una tabla en la base de datos, puede usar una declaración DELETE, que describe la tabla sobre la que actuar y las filas de la tabla que serán eliminadas a través de la cláusula WHERE.")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DELETE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" mytable\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" condition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("Si decide omitir la restricción WHERE, se eliminan todas las filas, lo que es una forma rápida y fácil de borrar una tabla por completo (si es intencional).")])]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Teniendo especial cuidado")]),a._v(" "),s("p",[a._v("Al igual que la declaración UPDATE, se recomienda que primero ejecute una consulta SELECT con restricciones (WHERE) para asegurarse de que está eliminando las filas correctas. Sin una copia de seguridad adecuada o una base de datos de prueba, es muy fácil eliminar datos de forma irrevocable, por lo que siempre lea sus declaraciones DELETE dos veces y ejecútelas una vez.")])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DELETE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" movies\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("year")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2005")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DELETE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" movies\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("year")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2005")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"create-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[a._v("#")]),a._v(" Create table")]),a._v(" "),s("p",[a._v("Cuando tenga nuevas entidades y relaciones para almacenar en su base de datos, puede crear una nueva tabla  utilizando la declaración CREATE TABLE.")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),a._v(" mytable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("column")]),a._v(" DataType TableConstraint "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" default_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    another_column DataType TableConstraint "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" default_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    …\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("p",[a._v("La estructura de la nueva tabla está definida por su esquema de tabla, que define una serie de columnas. Cada columna tiene un nombre, el tipo de datos permitidos en esa columna, una restricción sobre los valores que se insertan (opcional) y un valor predeterminado (opcional)")]),a._v(" "),s("p",[a._v("Si ya existe una tabla con el mismo nombre, SQL generalmente arrojará un error, por lo que para suprimir el error y omitir la creación de una tabla si existe, puede usar la cláusula IF NOT EXISTS")]),a._v(" "),s("h3",{attrs:{id:"tipos-de-datos-de-tabla"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tipos-de-datos-de-tabla"}},[a._v("#")]),a._v(" Tipos de datos de tabla")]),a._v(" "),s("p",[a._v("Las diferentes bases de datos admiten diferentes tipos de datos, pero los tipos comunes admiten números, cadenas y otras cosas diversas como fechas, valores booleanos o incluso datos binarios. A continuación, se muestran algunos ejemplos que puede utilizar en código real.")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[a._v("Tipo de dato")]),a._v(" "),s("th",{staticStyle:{"text-align":"center"}},[a._v("Descripcion")])])]),a._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("Integer  , Boolean")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("Los tipos de datos enteros pueden almacenar valores enteros como el recuento de un número o una edad. En algunas implementaciones, el valor booleano se representa simplemente como un valor entero de solo 0 o 1")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("Float , Double , Real")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("Los tipo de datos de coma flotante pueden almacenar datos numéricos más precisos , como medidas o valores fraccionarios . Se pueden usar diferentes tipos dependiendo de la precisión de coma flotante requerida para ese valor.")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("Character (num_chars) , VARCHAR(num_chars),TEXT")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("Los tipos de datos basados en texto pueden almacenar cadenas y textos en todo tipo de configuraciones regionales. La distinción entre los diversos tipos generalmente equivale a la eficiencia subyacente de la base de datos cuando se trabaja con estas columnas --- Tanto los tipos CHARACTER como VARCHAR (cáracter variable) se especifican con el número maximo de caracteres que pueden almacenar (los valores más largos pueden truncarse) , por lo que puede ser más eficiente almacenar y consultas con tablas grandes.")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("DATE , DATETIME")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("SQL también puede almacenar  fechas y horas para realizar un seguimiento de la fecha y/o hora de los  eventos . Puede resultar complicado trabajar con ellos, especialmente cuando se manipulan datos en distintas zonas horarias.")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("BLOB")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("Finalmente , SQL puede almacenar datos binarios en blobs directamente en la base de datos. Estos valores a menudo son opacos para la BD, por lo que generalmente debe almacenarlos con los metadatos correctos para volver a consultarlos.")])])])]),a._v(" "),s("h3",{attrs:{id:"restricciones-de-la-tabla"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restricciones-de-la-tabla"}},[a._v("#")]),a._v(" Restricciones de la tabla")]),a._v(" "),s("p",[a._v("No vamos a profundizar demasiado en las restricciones de la tabla en esta lección, pero cada columna puede tener restricciones que limitan los valores que se pueden insertar en esa columna. Esta no es una lista completa, pero mostrará algunas restricciones comunes que pueden resultarle útiles.")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[a._v("Restricción")]),a._v(" "),s("th",{staticStyle:{"text-align":"center"}},[a._v("Descripcion")])])]),a._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("PRIMARY KEY")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("Esto significa que los valores de esta columna son únicos y cada valor se puede utilizar para identificar una sola fila en esta tabla.")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("AUTOINCREMENT")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("Para valores enteros, esto significa que el valor se completa e incrementa automaticamente con cada inserción de fila. No es compatible con todas las bases de datos")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("UNIQUE")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("Esto significa que los valores en está columna deben ser únicos , por lo que no puede insertar una fila con el mismo valor de otra fila (valor de la columna).")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("NOT NULL")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("Esto significa que el valor insertado no puede ser NULL")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("CHECK (expression)")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("Esto le permite ejecutar una expresión mas compleja para probar si los valores insertados son válidos . Por ejemplo , puede verificar que los valores sean positivos o mayores que un tamaño especifico , o comenzar con un prefijo determinado , etc.")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("FOREIGN KEY")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v('Se trata de una comprobación de coherencia que garantiza que cada valor de esta columna se corresponda con otro valor de una columna de otra tabla. -- Por ejemplo, si hay dos tablas, una que enumera todos los Empleados por ID y otra que enumera la información de la nómina , la "FOREIGN KEY" puede garantizar que cada fila en la tabla de nómina corresponda a un empleado válido en la lista de Empleados.')])])])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" movies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTEGER")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIMARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    title "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEXT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    director "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEXT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("year")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTEGER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" \n    length_minutes "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTEGER")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Database")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    Name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEXT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    Version "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FLOAT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    Download_count "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTEGER")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"alter-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alter-table"}},[a._v("#")]),a._v(" Alter table")]),a._v(" "),s("h3",{attrs:{id:"modificacion-de-tablas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modificacion-de-tablas"}},[a._v("#")]),a._v(" Modificación de tablas")]),a._v(" "),s("p",[a._v("A medida que sus datos cambian con el tiempo, SQL le proporciona una forma de actualizar sus tablas y esquemas de base de datos correspondientes mediante el uso de la declaración ALTER TABLE para agregar, eliminar o modificar columnas y restricciones de tabla")]),a._v(" "),s("h2",{attrs:{id:"alter-table-add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alter-table-add"}},[a._v("#")]),a._v(" ALTER TABLE ADD")]),a._v(" "),s("p",[a._v("La sintaxis para agregar una nueva columna es similar a la sintaxis al crear nuevas columnas en la declaración CREATE TABLE. Debe especificar el nombre de la columna, el tipo de datos de la columna junto con las posibles restricciones de la tabla y los valores predeterminados que se aplicarán a las filas nuevas y existentes. En algunas bases de datos como MySQL, incluso puede especificar dónde insertar la nueva columna usando las cláusulas FIRST o AFTER, aunque esta no es una característica estándar.")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" mytable\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("column")]),a._v(" DataType OptionalTableConstraint \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" default_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" Movies\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLUMN")]),a._v(" Aspect_ratio "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FLOAT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.39")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" Movies\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLUMN")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Language")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEXT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"English"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"alter-table-drop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alter-table-drop"}},[a._v("#")]),a._v(" ALTER TABLE DROP")]),a._v(" "),s("p",[a._v("Eliminar columnas es tan fácil como especificar la columna que se eliminará, sin embargo, algunas bases de datos (incluida SQLite) no admiten esta función. En su lugar, es posible que deba crear una nueva tabla y migrar los datos.")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" mytable\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" column_to_be_deleted"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"alter-table-rename-to"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alter-table-rename-to"}},[a._v("#")]),a._v(" ALTER TABLE RENAME TO")]),a._v(" "),s("p",[a._v("Si necesita cambiar el nombre de la tabla, también puede hacerlo usando la  cláusula RENAME TO")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" mytable\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RENAME")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" new_table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"alter-table-otros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alter-table-otros"}},[a._v("#")]),a._v(" ALTER TABLE Otros")]),a._v(" "),s("p",[a._v("Cada implementación de base de datos admite diferentes métodos para alterar sus tablas, por lo que siempre es mejor consultar los documentos de su base de datos antes de continuar.")]),a._v(" "),s("h2",{attrs:{id:"drop-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drop-table"}},[a._v("#")]),a._v(" DROP TABLE")]),a._v(" "),s("p",[a._v("En algunos casos raros, es posible que desee eliminar una tabla completa, incluidos todos sus datos y metadatos, y para hacerlo, puede usar la declaración DROP TABLE, que difiere de la declaración  DELETE en que también elimina el esquema de la tabla de la base de datos por completo.")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),a._v(" mytable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("Al igual que la declaración CREATE TABLE, la base de datos puede arrojar un error si la tabla especificada no existe, y para suprimir ese error, puede usar la cláusula IF EXISTS\nAdemás, si tiene otra tabla que depende de las columnas de la tabla que está eliminando (por ejemplo, con una FOREIGN KEY), primero deberá actualizar todas las tablas dependientes para poder eliminar la tabla deseada.")])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" Movies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" BoxOffice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);