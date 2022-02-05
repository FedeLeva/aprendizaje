(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{402:function(t,a,s){"use strict";s.r(a);var n=s(54),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"base-de-datos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base-de-datos"}},[t._v("#")]),t._v(" Base de datos")]),t._v(" "),s("h2",{attrs:{id:"tipos-de-objetos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tipos-de-objetos"}},[t._v("#")]),t._v(" Tipos de Objetos")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\t    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreparedStatement")]),t._v(" cPreparada"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),t._v(" conexion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResultSet")]),t._v(" resultado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Statement")]),t._v(" cSelect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"conexion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conexion"}},[t._v("#")]),t._v(" Conexion")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Crea un objeto de tipo Connection")])]),t._v(" "),s("li",[s("p",[t._v("El objeto de tipo Conection te permite crear consultas (Statement y PreparedStatement)")]),t._v(" "),s("h3",{attrs:{id:"datos-para-iniciar-sesion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datos-para-iniciar-sesion"}},[t._v("#")]),t._v(" Datos para iniciar sesion:")]),t._v(" "),s("ol",[s("li",[t._v("URL")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String  url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jdbc:mysql://localhost:3306/practica?useTimezone=true&serverTimezone=UTC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("localhost = nombre del servidor")]),t._v(" "),s("p",[t._v(":3306 = numero del puerto")]),t._v(" "),s("p",[t._v("practica = nombre de la BD")])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Usuario de la BD")]),t._v(" "),s("li",[t._v("Contraseña")])]),t._v(" "),s("h3",{attrs:{id:"establecer-una-conexion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#establecer-una-conexion"}},[t._v("#")]),t._v(" Establecer una conexion")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("conexion "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DriverManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"cerrar-sesion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cerrar-sesion"}},[t._v("#")]),t._v(" Cerrar sesion")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("  \tconexion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"consultas-preparada"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consultas-preparada"}},[t._v("#")]),t._v(" Consultas Preparada")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Utiliza esta opcion , solo si la consulta es dinamica")])]),t._v(" "),s("h3",{attrs:{id:"requisitos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requisitos"}},[t._v("#")]),t._v(" Requisitos")]),t._v(" "),s("ul",[s("li",[t._v("Un objeto de tipo PreparedStatement")]),t._v(" "),s("li",[t._v("Si la consulta es select, un objeto de tipo ResultSet")]),t._v(" "),s("li",[t._v("Un objeto de tipo Connection")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t\t conexion "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DriverManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" sql "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"insert into dispositivo (marca,modelo) values (? , ?);"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t\tcPreparada "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conexion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepareStatement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t\tcPreparada"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispositivo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMarca")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t\tcPreparada"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispositivo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getModelo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" filas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cPreparada"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Cantidad de setTipoDato = Cantidad de signos de pregunta ?")])]),t._v(" "),s("li",[s("p",[t._v("1 = primer signo de pregunta, 2 = segundo signo de pregunta , ....")])]),t._v(" "),s("li",[s("p",[t._v("El tipo de dato debe ser el mismo que el de la tabla seleccionada.")])]),t._v(" "),s("li",[s("p",[t._v("executeUpdate() ejecuta la consulta preparada y devuelve la cantidad de filas afectadas , en caso de ejecutar un executeQuery() te devolvera un ResultSet.")])])])]),t._v(" "),s("h2",{attrs:{id:"consulta-fija"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consulta-fija"}},[t._v("#")]),t._v(" Consulta fija")]),t._v(" "),s("ul",[s("li",[t._v("Se suele usar para las declaraciones select")])]),t._v(" "),s("h3",{attrs:{id:"requisitos-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requisitos-2"}},[t._v("#")]),t._v(" Requisitos")]),t._v(" "),s("ul",[s("li",[t._v("Un objeto de tipo Connection")]),t._v(" "),s("li",[t._v("un objeto de tipo Statement")]),t._v(" "),s("li",[t._v("Un objeto de tipo ResultSet si se hace un select")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \t\tconexion "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DriverManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t\tcSelect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conexion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStatement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t\tresultado "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cSelect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * FROM `pc` p join dispositivo  d on (p.id_dispositivo = d.id_dispositivo);"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resultado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" opcion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" opcionString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         opcion "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resultado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         opcion "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resultado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t  opcion "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resultado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" id_dispositivo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resultado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t  opcionString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resultado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" modelo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resultado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("executeUpdate() ejecuta la consulta  y devuelve la cantidad de filas afectadas , en caso de ejecutar un executeQuery() te devolvera un ResultSet.")]),t._v(" "),s("li",[t._v("Con el while (ObjetoResultSet.next()){} recorro las filas que seleccione con la consulta")]),t._v(" "),s("li",[t._v("En cada vuelta , el while selecciona una fila  , empezando por la primera")]),t._v(" "),s("li",[t._v("el resulSet tiene el metodo getTipodeDato() para obtener el valor de una columna de la fila ,  cuyo parametro puede ser un string con el nombre de la columna o el indice de la columna(empieza en 1)")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);