# Base de datos 


## Tipos de Objetos 
```java
	    private PreparedStatement cPreparada;
		private Connection conexion;
		private ResultSet resultado;
		private Statement cSelect;
```

## Conexion 
 - Crea un objeto de tipo Connection 
 - El objeto de tipo Conection te permite crear consultas (Statement y PreparedStatement)
  
   ### Datos para iniciar sesion:

   1. URL
    ```js
    private String  url = "jdbc:mysql://localhost:3306/practica?useTimezone=true&serverTimezone=UTC";
    ```
    localhost = nombre del servidor 

    :3306 = numero del puerto 

    practica = nombre de la BD
     
  2. Usuario de la BD
  3. Contraseña

  

   ### Establecer una conexion 
   
  ```java
  conexion = DriverManager.getConnection(url,user,pw);
  ```
### Cerrar sesion

  ```java
    	conexion.close();
  ```
  ## Consultas Preparada

   :::warning 
   Utiliza esta opcion , solo si la consulta es dinamica 
   :::

   ### Requisitos
  - Un objeto de tipo PreparedStatement
  - Si la consulta es select, un objeto de tipo ResultSet
  - Un objeto de tipo Connection

  ```java
  	try {
			 conexion = DriverManager.getConnection(url,user,pw);
			String sql = "insert into dispositivo (marca,modelo) values (? , ?);";
			cPreparada = conexion.prepareStatement(sql);
			cPreparada.setString(1, dispositivo.getMarca().toString());
			cPreparada.setString(2, dispositivo.getModelo());
			int filas = cPreparada.executeUpdate();
       }
  ```

 :::tip
- Cantidad de setTipoDato = Cantidad de signos de pregunta ? 

 - 1 = primer signo de pregunta, 2 = segundo signo de pregunta , ....
 - El tipo de dato debe ser el mismo que el de la tabla seleccionada.

 - executeUpdate() ejecuta la consulta preparada y devuelve la cantidad de filas afectadas , en caso de ejecutar un executeQuery() te devolvera un ResultSet.




 :::

 ## Consulta fija
 - Se suele usar para las declaraciones select

 ### Requisitos 
 - Un objeto de tipo Connection 
 - un objeto de tipo Statement
 - Un objeto de tipo ResultSet si se hace un select


 ```java
 try {
			conexion = DriverManager.getConnection(url,user,pw);
			cSelect = conexion.createStatement();
			resultado = cSelect.executeQuery("SELECT * FROM `pc` p join dispositivo  d on (p.id_dispositivo = d.id_dispositivo);");
			while (resultado.next()) {
                	int opcion;
				String opcionString;
          opcion = resultado.getInt(2);
	      opcion = resultado.getInt(3);
    	  opcion = resultado.getInt(4);
          int id_dispositivo = resultado.getInt(5);
		  opcionString = resultado.getString(7);
	      String modelo = resultado.getString(8);
            }
 ```

 :::tip 
- executeUpdate() ejecuta la consulta  y devuelve la cantidad de filas afectadas , en caso de ejecutar un executeQuery() te devolvera un ResultSet.
- Con el while (ObjetoResultSet.next()){} recorro las filas que seleccione con la consulta
- En cada vuelta , el while selecciona una fila  , empezando por la primera
- el resulSet tiene el metodo getTipodeDato() para obtener el valor de una columna de la fila ,  cuyo parametro puede ser un string con el nombre de la columna o el indice de la columna(empieza en 1)
 :::

 

## MetaData
- Existen clases en el paquete java.sql que permiten acceder a la información sobre 
el diseño y la estructura de la base de datos como un todo o de un ResultSet 
obtenido a partir de una consulta concreta. 
- A este tipo de información se le llama 
metadata y las clases que nos permitirán obtenerlo son DatabaseMetaData y 
ResultSetMetaData.

### Base de datos
- Cuando se necesita conocer sobre las capacidades de una BD, se puede preguntar al objeto Connection a traves de su metadata.
- Existen muchas preguntas que se pueden hacer, entre ellas tenemos el tipo base de datos, la 
cantidad máxima de conexiones que permite la base de datos, etc.
- El fragmento de 
código que se encuentra a continuación, muestra cómo obtener esta información.

```java
public void bd() throws SQLException{ 
DatabaseMetaData dbMet = con.getMetaData(); 
if (dbMet==null) 
System.out.println("No hay información de MetaData"); 
else { 
System.out.println("Tipo de la BD: " + dbMet.getDatabaseProductName()); 
System.out.println("Versión : " + dbMet.getDatabaseProductVersion()); 
System.out.println("Cantidad máxima de conexiones activas: " + 
dbMet.getMaxConnections()); 
}
}
```
### ResultSet
- Se puede obtener información de la estructura de un conjunto de registros 
resultantes de una consulta.
- Esto puede ser muy útil para acceder a tablas de una 
base de datos de las cuales no se tenga información sobre su estructura. 
- Utilizando la clase ResultSetMetaData podremos determinar la cantidad de columnas o  campos que contiene un ResultSet, el tipo y nombre de cada campo, si el campo es 
solo lectura, etc. 
- La función siguiente muestra la estructura de una tabla que le pasemos como argumento.
```java
public void estructuraTabla(String strTbl) {
try {
Statement st = con.createStatement();
ResultSet rs = st.executeQuery("Select * from " + strTbl);
//Obtiene el metadata del ResultSet
ResultSetMetaData rsmeta = rs.getMetaData();
//Obtiene la cantidad de columnas del ResultSet
int col = rsmeta.getColumnCount();
for (int i = 1; i <= col; i++) {
System.out.println("Campo " +
//Devuelve el nombre del campo i
rsmeta.getColumnLabel(i) + "\t"
//Devuelve el tipo del campo i
+ "Tipo: " + rsmeta.getColumnTypeName(i));
}
}
catch (Exception e) {
System.out.println("Error en Metadata ");
}
}
```
:::tip
También es posible mediante la utilización de la información del 
ResultSetMetaData mostrar la información de cualquier tabla sin tener la 
estructura previamente.
:::
```java
public void verCualquierTabla(String strTbl) {
try {
Statement st = con.createStatement();
ResultSet rs = st.executeQuery("Select * from " + strTbl);
ResultSetMetaData meta = rs.getMetaData();
int col = meta.getColumnCount();
//Mientras haya registros
while (rs.next()) {
for (int i = 1; i <= col; i++) {
//Mostrar el dato del campo i
System.out.print(rs.getString(i)
+ "\t");
}
System.out.println("");
}
}catch (Exception e) {
System.out.println("Cualquier " + e.toString());
}
}
```