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

 
