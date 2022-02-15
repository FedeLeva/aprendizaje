# JAVA 

## Descargas
 ### Interfaz Grafica
[Interfaz Grafica](https://www.eclipse.org/windowbuilder/download.php) --- 
[Como instalar la interfaz grafica](https://www.youtube.com/watch?v=myi39D7xe-c)
  
  :::tip Soluciones a problemas 
   - [Resolver el problema del paquete java.awt no accesible](https://programmerclick.com/article/23851480685/)
   - [WindowBuilder was not able to show the GUI](https://stackoverflow.com/questions/69927269/windowbuilder-was-not-able-to-show-the-gui-unable-to-load-wbp-component-xml-d)
  :::


### BD
[Base de datos MYSQL -- Plataforma independiente -- ZIP](https://dev.mysql.com/downloads/connector/j/)


## Convenciones
### Clases e interfaces en Java
Los nombres de las clases deben ser sustantivos, en mayúsculas y minúsculas, con la primera letra de cada palabra interna en mayúscula y en singular.
- La primer letra del nombre de la clase va con mayúscula.
- Una clase debe llevar un nombre representativo de la entidad.
- Las clases deben nombrarse en singular y preferentemente con un sola palabra.

```java
Interface  Bicycle
Class MountainBike implements Bicyle

Interface Sport
Class Football implements Sport
```
### Atributos
- Un atributo de clase debe llevar un nombre representativo.
- Preferentemente un atributo de clase debe inicializarse.
### Métodos en Java
Los métodos deben ser verbos, en mayúsculas y minúsculas, con la primera letra de cada palabra interna (a partir de la segunda) en mayúscula.
```java
void changeGear(int newValue);
void speedUp(int increment);
void applyBrakes(int decrement);
```
### Variables
- Los nombres de las variables deben ser cortos pero significativos.
- Una variable debe llevar un nombre representativo.
- Las variables comienzan en minúscula y nomenclatura camelcase.
- No debería comenzar con un guión bajo (‘_’) o caracteres especiales, como por ejemplo, un signo de dólar ‘$’.
- indicar al observador casual la intención de su uso.
- Se deben evitar los nombres de variable de un carácter, excepto para variables temporales.
- Los nombres comunes para las variables temporales son: i, j, k, m y n para enteros; c, d y e para los caracteres.
```java
// variables para la clase MountainBike
  int speed = 0;
  int gear = 1;
```
### Variables constantes en Java
- Debería estar todo en mayúsculas con palabras separadas por guiones bajos (_).

```java
static final int MIN_WIDTH = 4;

// Algunas variables constantes utilizadas en la clase Float predefinida
public static final float POSITIVE_INFINITY = 1.0f / 0.0f;
public static final float NEGATIVE_INFINITY = -1.0f / 0.0f;
public static final float NaN = 0.0f / 0.0f;
```
### Paquetes en Java
En minusculas y como si fuera un dominio.
```java
com.sun.eng
com.apple.quicktime.v2

// java.lang packet in JDK
java.lang
```
## Relaciones
### Asociacion
- Se representa con una línea continua y una flecha para indicar la direccion(opcional)
- Relacion de dos o más clase,
- Se usa cuando tenga que requerir o utilizar alguno de los servicios del otro.
-  Usa un – tiene un , …
- No hay contenedor (padre-hijo) 
- Se suele crear una tercera clase que representa la relacion de las clases

:::tip Ejemplos
Una persona(clase) usa un automóvil(clase)

Una persona puede tener uno o varios automóviles

Una persona(clase) usa una computadora(clase)

Una persona puede usar una o varias computadoras
:::
 
### Agregacion
 - La agregación es un tipo de asociación que indica que una clase es parte de otra clase (composición débil).
 - Los componentes(objetos) pueden ser compartidos por varios  . 
 - La destrucción del compuesto(contenedor/padre) no conlleva a la destrucción de los componentes(contenido/hijo). Habitualmente se da con mayor frecuencia que la composición.
 - La agregación se representa en UML mediante un diamante de color blanco o un rombo sin pintar colocado   en el extremo en el que está la clase que representa el “todo” .
 - Sirve para unir dos o más clases , donde un objeto pertenece a otro objeto.
 - “Es parte de” , “usa”.
 - Si el contenedor desaparece, el contenido puede seguir existiendo , igual viceversa.
 - Hay un padre y un hijo
- Los atributos que representan el contenido empiezan en 0 (valor vacio).
- Usan Array o ArrayList<>

 :::tip Ejemplos 
El cliente es parte de una empresa. 

El cliente puede desaparecer, pero la empresa seguirá existiendo.

El contacto (clase) es parte de una agenda(clase)
 :::
### Composicion 
- Composición es una forma fuerte de composición donde la vida de la clase contenida(clase hija-contenido) debe coincidir con la vida de la clase contenedor(clase padre-contenedor). 
- Los componentes(objetos) no pueden ser compartidos por varios objetos compuestos.
- La eliminacion del objeto compuesto(clase padre-contenedor) conlleva a la eliminacion de los componentes(clase hija-contenido)
- El símbolo de composición es un diamante de color negro (rombo lleno) colocado en el extremo en el que está la clase que representa el “todo” (Compuesto).
- Es una dependencia fuerte entre clase.
- incluye un , contiene un , se compone de , posee
- La destrucción del contenido conlleva a  la destrucción del contenedor y viceversa
- Se instancia en el constructor
- Hay un padre y un hijo
:::tip Ejemplos
Un libro(clase) contiene varias paginas(clase)

Un auto(clase) tiene varias puerta(clase)


:::
| Agregación        | Composición          
| ------------- |:-------------:| 
|  Una clase NO es parte de la otra     | Una clase ES parte de la otra | 
|  Se inicializa vació en su constructor     | Inicializa sus datos en el constructor | 
|  Tiene un método para agregar mas elementos    | No se puede adicionar partes después de su creación | 
|  NO MUERE al morir la 'clase contenedora'    | MUERE al morir la 'clase todo' | 



## Tipos datos
  ## Basicos
  ```java
   // Numericos
		byte numeroByte = 5;
		short numeroShort = 50;
		int numeroInt = 100;
		long numeroLong = 1000444545445L;
		float numeroFloat = 100.5F;
		double numeroDouble = 100.500D;
		
		// Booleano
		boolean tipoBoolean  = true;
		
		
		// Cadena de texto
		String cadena = "Cadena";
		char tipoChar = 'c';
	
		System.out.println("Numeros");
		System.out.println(numeroByte + "\n" +  numeroShort  + "\n" + numeroInt  + "\n" + numeroFloat  + "\n" + numeroDouble);
		System.out.println("Booleano");
		System.out.println(tipoBoolean);
		System.out.println("Cadena de texto");
		System.out.println(cadena + "\n" + tipoChar);
  ```
  ### String
  <img :src="$withBase('/img/omg.png')" >

  
  ### Array 
  Crear Array con datos:
  ```java
acceso tipodato nombre[] = {datos} 

   O

  acceso tipodato[] nombre = {datos}
  ```

   
  ```java
  private String columnas[] = {"Marca" , "Modelo" , "Rango" , "A color" , "Multifuncion"};
  ```
   Crear Array con tamaño y luego asignarle valor: 
   ```java
TipoDato[] nombre = new tipoDato[tamaño];
    Luego vas asignando valor por el indice:
   ```
    
   ```java
   	Object[] impresora = new Object[5];
			impresora[0] = DispositivoTecnologicos.getListado().get(i).getMarca();
			impresora[1] = DispositivoTecnologicos.getListado().get(i).getModelo();
			impresora[2] = ((Impresora)DispositivoTecnologicos.getListado().get(i)).getTipo();
			impresora[3] = ((Impresora)DispositivoTecnologicos.getListado().get(i)).isEs_color();
			impresora[4] = ((Impresora)DispositivoTecnologicos.getListado().get(i)).isEs_multifuncion();
   ```

   ### Otros Metodos

  ### ArrayList
  ArrayList , Instancia:

   ```java
      acceso ArrayList<TipoDato> nombre = new ArrayList<>();

       o

      acceso ArrayList<TipoDato> nombre = new ArrayList<TipoDato>(0); 
   ```

```java
private ArrayList<Object[]> data = new ArrayList<>(); 
   ```
```java
  private ArrayList<Dispositivo> lista_dispositivos = new ArrayList<Dispositivo>(0);
```

### Otros metodos 
- // Declaración de un ArrayList de "String". Puede ser de cualquier otro Elemento u Objeto (float, 
Boolean, Object, Cliente, Factura, Mascota...)
```java
ArrayList<String> nombreArrayList = new ArrayList<String>();
```

- Añade el elemento al ArrayList
 ```java
  nombreArrayList.add("Elemento");
 ```

- Añade el elemento al ArrayList en la posición 'n'
 ```java
  nombreArrayList.add(n, "Elemento 2");
 ```


- Devuelve el número de elementos del ArrayList
 ```java
  nombreArrayList.size();
 ```

- Devuelve el elemento que está en la posición '2' del ArrayList
 ```java
  nombreArrayList.get(2);
 ```

- Comprueba se existe del elemento ('Elemento') que se le pasa como parámetro
```java
  nombreArrayList.contains("Elemento");
 ```

- Devuelve la posición de la primera ocurrencia ('Elemento') en el ArrayList 
```java
  nombreArrayList.indexOf("Elemento");
 ```

- Devuelve la posición de la última ocurrencia ('Elemento') en el ArrayList 
```java
  nombreArrayList.lastIndexOf("Elemento");
 ```

- Borra el elemento de la posición '5' del ArrayList 
```java
  nombreArrayList.remove(5); 
 ```

- Borra la primera ocurrencia del 'Elemento' que se le pasa como parametro. 
```java
  nombreArrayList.remove("Elemento");
 ```

- Borra todos los elementos de ArrayList 
```java
  nombreArrayList.clear();
 ```

- Devuelve True si el ArrayList está vacio. Sino Devuelve False
```java
  nombreArrayList.isEmpty(); 
 ``` 

- Copiar un ArrayList 
```java
  ArrayList arrayListCopia = (ArrayList) nombreArrayList.clone(); 
 ``` 


### Hashmap
  - nos permite representar una estructura de datos para almacenar 
pares "clave/valor"; de tal manera que para una clave solamente tenemos un valor.
- Esta estructura de datos también es conocida en otros lenguajes de programación como "Diccionarios", aunque en cada 
lenguaje esta estructura de datos tiene sus matices.
- Java ya tiene implementadas varias "clases Map". No vamos a explicar todas, pero si las tres que considero
más importantes y útiles para que veamos la diferencia como son la clase "HashMap", "TreeMap" y 
"LinkedHashMap".
- La diferencia principal de estas 3 clases es la forma o el orden en las que guardan los 
valores en el Map
- Al valor se accede por la "clave".
###  HashMap
- Los elementos que inserta en el map no tendrán un orden específico.
- No aceptan claves duplicadas ni valores nulos.
- En caso de poner clave duplicada, sobrescribe el valor de la clave.


Instanciar:
```java
   HashMap<TipoDatoClave,TipoDatoValor> nombre = new HashMap();
```

```java
HashMap<String , String> arreglo = new HashMap();
```
Añadir un elemento  
- metodo put 
- Se añade una clave y un valor
```java
arreglo.put("clave","valor");
```
Devolver un valor
- metodo get 
- Devuelve el valor de una clave 
```java
  System.out.println(arreglo.get("clave"));
```
Eliminar valores 
- metodo remove
- Elimina un elemento (clave-valor) mediante la clave
```java
 arreglo.remove("clave");
```
### TreeMap 
- El Mapa lo ordena de forma "natural". Por ejemplo, si la clave son valores enteros 
(como luego veremos), los ordena de menor a mayor.
- Tiene los mismos metodos que HashMap

Instanciar:
```java
   TreeMap<TipoDatoClave,TipoDatoValor> nombre = new TreeMap();
```
```java
 TreeMap<Integer, String> arreglo = new TreeMap();
       arreglo.put(3 , "valor 3");
       arreglo.put(2 , "valor2");
       arreglo.put(1,"valor");
       arreglo.remove(2);
       System.out.println(arreglo);
```
### LinkedHashMap
-   Inserta en el Map los elementos en el orden en el que se van insertando; es 
decir, que no tiene una ordenación de los elementos como tal, por lo que esta clase realiza las 
búsquedas de los elementos de forma más lenta que las demás clases.
- Tiene los mismos metodos que HashMap

Instanciar:
```java
   LinkedHashMap<TipoDatoClave,TipoDatoValor> nombre = new LinkedHashMap();
```
```java
 LinkedHashMap<Integer, String> arreglo = new LinkedHashMap();
       arreglo.put(3 , "valor 3");
       arreglo.put(2 , "valor2");
       arreglo.put(1,"valor 1 ");
       arreglo.remove(2);
       System.out.println(arreglo);
```
### Todos los Metodos
- Se utilizan en todos los tipos de Hashmap
- nombreMap.size(); // Devuelve el número de elementos del Map
- nombreMap.isEmpty(); // Devuelve true si no hay elementos en el Map y false si si los hay
- nombreMap.put(K clave, V valor); // Añade un elemento al Map
- nombreMap.get(K clave); // Devuelve el valor de la clave que se le pasa como parámetro o 'null' si la 
clave no existe
- nombreMap.clear(); // Borra todos los componentes del Map
- nombreMap.remove(K clave); // Borra el par clave/valor de la clave que se le pasa como parámetro
- nombreMap.containsKey(K clave); // Devuelve true si en el map hay una clave que coincide con K
- nombreMap.containsValue(V valor); // Devuelve true si en el map hay un Valor que coincide con V
- nombreMap.values(); // Devuelve una "Collection" con los valores del Map
```java
  HashMap<String , String> arreglo = new HashMap();
       arreglo.put("clave","valor");
       arreglo.put("clave2","valor2");
       //arreglo.remove("clave");
       for (String valor : arreglo.values()) {
    	   System.out.println(valor);
       }
```
- Para ver los datos por consola 
```java
 System.out.println(arreglo);
```
- Otra forma de recorrerlo
```java
	Map<Integer, String> arreglo = new HashMap();
	       arreglo.put(3 , "valor_3");
	       arreglo.put(2 , "valor_2");
	       arreglo.put(1,"valor_1 ");
	       
	       
	       Iterator it  = arreglo.keySet().iterator();
	       
	       while (it.hasNext()) {
	    	   int key = (Integer) it.next();
	    	   System.out.println("Clave : " + key  + "    valor : " + arreglo.get(key) + "\n" );
	    	   
	       }
```
- Forma de recorrer clave y valor 
```java

		Map<Integer, String> arreglo = new HashMap();
	       arreglo.put(3 , "valor_3");
	       arreglo.put(2 , "valor_2");
	       arreglo.put(1,"valor_1 ");
	       
	       
	     for (java.util.Map.Entry<Integer, String> elemento : arreglo.entrySet() ) {
	    	  int clave = elemento.getKey();
	    	  String valor = elemento.getValue();
	    	  System.out.println( clave + "  ->  " + valor);
	     }
```
- Como se ve en los ejemplos anteriores , Map es la superClase y puede ser el contenedor de todo tipo de map(HashMap , TreeMap , etc)

## Date
  ### java.util.Date
  - El método java.util.Date indica el momento actual con los milisegundos exactos desde el 1 de enero de 1970 00:00:00 GMT. 

  De String a java.util.Date:
   ```java
   SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
   	java.util.Date fecha =  simpleDateFormat.parse(textFecha.getText());
   ```
   :::tip 
   - textFecha.getText() devuelve un String 
   - El formato de la fecha del string debe coincidir con el formato introducido en el SimpleDateFormat. 
   :::
   De java.util.Date a String:

  ```java
    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
    java.util.Date fecha =  simpleDateFormat.parse(textFecha.getText());
					String fechaString = simpleDateFormat.format(fecha);

```
  :::tip 
- el metodo format convierte el date en String
  :::
  De java.sql.Date a java.util.Date
  ```java
    java.sql.Date fechaSQL = new java.sql.Date(fecha.getTime());
				   java.util.Date fechaConvertida = new java.util.Date(fechaSQL.getTime());
  ```

  :::tip
- En el constructor de util.Date , se introduce el metodo java.sql.Date.getTime();
  :::
  ### java.sql.Date
- El java.sql.Date dice sólo la fecha en el formato de SQL en el que el JDBC puede entender. La fecha SQL sólo contiene años, meses y días, no hay hora ni zona horaria presentes.
 
  Convertir el java.util.date a java.sql.Date:
  ```java
  java.util.Date fecha =  simpleDateFormat.parse(textFecha.getText());
				   java.sql.Date fechaSQL = new java.sql.Date(fecha.getTime());
  ```
:::tip
 - En el constructor de sql.Date , se introduce el metodo de util.Date.getTime()
:::
  
## Recorrer con for (ArrayList)

 ```java
for (tipoDato nombre  : ArrayList) {

    nombre va a ser igual a ArrayList.get(0) en la primera iterracion

    nombre va a ser igual a ArrayList.get(1) en la segunda iterracion
     
     ....

}

 ```

Ejemplo: 
- Recorriendo un arraylist(data), donde cada elemento es un array de tipo Object
- En cada iterracion dato tiene como valor cada elemento del arraylist
```java
for(Object[] dato : this.data) {
		System.out.println(dato[0]);
			
		}
```
## Castear 
   ### String a int 
   ```java
   Integer.parseInt(String);

   int cantidad = Integer.parseInt(scan.nextLine());
   ```
   ### Int a String
   ```java
       String string= Integer.toString(int);
   ```

   ### String a double 
   ```java
   Double.parseDouble(String);

   Double.parseDouble(promedio);
   ```

   :::tip 
   Como se ve, todas las clases (perteneciente a  los tipos de datos) tienen metodos para  convertir un String a X tipo de dato y viceversa.

   ```java
   // Convertir un String a un TipoDato
    TipoDato.parseTipoDato(String);
   //Convertir un TipoDato a un String
    TipoDato.toString(TipoDato);
   ```
   :::
## Scanner
- El uso de la clase Scanner es una de las mejores maneras de ingresar datos por teclado en Java a traves de la consola.
- Para crear un objeto de clase Scanner, normalmente pasamos el objeto predefinido System.in, 
que representa el flujo de entrada estándar. Podemos pasar un objeto de clase File si queremos 
leer la entrada de un archivo.
- Para leer valores numéricos de un determinado tipo de datos XYZ, la función que se utilizará es 
nextXYZ(). Por ejemplo, para leer un valor de tipo short, podemos usar nextShort().
- Para leer cadenas (strings), usamos nextLine().
- Para leer un solo carácter, se usa next().charAt(0). La función next()devuelve la primera 
palabra  ingresada en la entrada como cadena y la función charAt (0) devuelve el primer carácter de 
esa cadena.
  Instanciar:
   ```java
   	 Scanner scan = new Scanner(System.in);
   ```
   Pedir un String (Leyendo la linea entera , espacio incluido):
   ```java
    String string =  scan.nextLine()
  
   ```


## Abstract
[Abstract](https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=668:clases-y-metodos-abstractos-en-java-abstract-class-clases-del-api-ejemplos-codigo-y-ejercicios-cu00695b&catid=68&Itemid=188#:~:text=En%20ingl%C3%A9s%20abstract%20significa%20%E2%80%9Cresumen,como%20superclase%20a%20otras%20clases)
- Sirve para que la clase no se pueda instanciar
```java
public abstract class Dispositivo {
}
```

## Notas

- Se deben generar y emplear los constructores de instancia.
- Se deben generar y usar los métodos getter y setter antes que el uso directo de los atributos de clase.
- De corresponder, se debe representar correctamente la relación de composición o asociación con la definición del atributo y la instanciación correspondiente en el momento correspondiente.
- En las clases NO se deben setear DATOS de instancia, excepto valores iniciales por defecto ( Ejemplo: una habitación inicialmente esta DISPONIBLE, una mascota inicialmente NO esta afiliada, una película inicialmente NO esta alquilada, etc).
- En la clase PRINCIPAL solo se deben instanciar objetos con sus datos (NO lógica ni pedido de datos).
- Los métodos deben ser genéricos permitiendo hacer uso de su funcionalidad, NO hardcodeados.
- Usar ID
- Al cargar  una BD, devolver la instancia de un arraylist 
- Arrancar el get con 2  a menos que empieze con la id BD
- al instanciar desde una BD , el constructor debe contener la id.
- ArrayList add / remove / get
- 3 Constructores -- BD
- En una ASOCIACIÓN voy a tener en la base un dato OPCIONAL (puede ser NULL)
- En una COMPOSICIÓN voy a tener en la base un datos OBLIGATORIO (NOT NULL)
- Herencia: se puede representar en una única tabla, en dos tablas o en 3 tablas... cuál estrategia conviene? por qué?
- ArrayList tiene getter pero no setter.
- Que el indice de la fila de la JTable y del arraylist coincida
- La clase contenedor(padre) tiene atributos que representa las clases  contenido(hijo)
- Buscar el elemento en la misma clase donde esta instanciado el ArrayList. Ej. Si En Oficina(Clase) hay un arrayList con un listado de objetos , al buscar un objeto en especifico se busca en la Oficina.
- Recorrer un enum con el metodo values() que lo convierte en un Array y ordinal() para la posicion.
- Solo se puede invocar metodos en bloques de codigo {} pero no al inicio de la Clase (bloques de codigo{} perteneciente a metodos , constructores , etc)
- El inicio de la clase es solo para inicializar variables/atributos
## Operaciones
### Asignacion
![Asignacion](https://www.arkaitzgarro.com/java/images/cap04/operador.png)
### Operadores Aritméticos
![Aritmeticos](https://www.arkaitzgarro.com/java/images/cap04/operadores-aritmeticos-basicos.png)
### Operadores Aritmeticos abreviados
![incrementales](https://www.arkaitzgarro.com/java/images/cap04/operadores-aritmeticos-incrementales.png)
![combinados](https://www.arkaitzgarro.com/java/images/cap04/operadores-aritmeticos-combinados.png)
### Operadores de relación
![relacion](https://www.arkaitzgarro.com/java/images/cap04/operadores-de-relacion.png)
### Operadores logicos
![logicos](https://www.arkaitzgarro.com/java/images/cap04/operadores-booleanos.png)
### Operador condicional
![condicional](https://www.arkaitzgarro.com/java/images/cap04/operador-condicional.png)
### Operadores de bit
![bit](https://www.arkaitzgarro.com/java/images/cap04/operadores-de-bit.png)
### OPERADOR CONCATENACIÓN DE CADENAS
![cadenas](https://www.arkaitzgarro.com/java/images/cap04/operador-conc.png)
### Separadores
![separados](https://www.arkaitzgarro.com/java/images/cap04/separadores.png)
### Prioridad entre operadores
![prioridad](https://www.arkaitzgarro.com/java/images/cap04/prioridad.png)
## Javadoc

### Reglas
- No se documenta los setter y getter
- No se documenta las propiedadees
- Documentar clases
 ```java
 /** 
 * Clase Oficina , contiene las caracteristicas de una Oficina
 * @author feder
 *
 */
public class Oficina {
}
 ```
- Documentar constructores
```java
/** 
	 * Constructor vacio
	 */
	public Dispositivo() {
		super();
	}
	/**
	 * Constructor de la clase Dispositivo . Permite realizar instancias a partir de la propiedad marca y modelo
	 * @param marca
	 * @param modelo
	 */
	public Dispositivo(Dispositivo.marca marca, String modelo) {
		super();
		this.id_dispositivo = id++;
		this.marca = marca;
		this.modelo = modelo;
	}
```
- Documentar metodos publicos: 
```java
	/** 
	 * Busca el producto y lo envia a otra Oficina
	 * @param nroProducto
	 * @param oficina
	 */
	public void asignarProducto(int nroProducto , Oficina oficina) {
		Dispositivo dispositivo;
	  for (int i = 0; i < this.lista_dispositivos.size(); i++) {
		  if (this.lista_dispositivos.get(i).getId_dispositivo() == nroProducto) {
				if (this.lista_dispositivos.get(i) instanceof PC) {
					 dispositivo = (PC)lista_dispositivos.get(i);
				} else {
					 dispositivo = (Impresora)lista_dispositivos.get(i);
				}
				 if (dispositivo instanceof PC) {
					  oficina.getLista_dispositivos().add((PC)dispositivo);
				  } else {
					  oficina.getLista_dispositivos().add((Impresora)dispositivo);
				  }
			  
			  
			  
			  
			   this.lista_dispositivos.remove(i);
			   break;
		  } else {
			  continue;
		  }
	}
	 
	 
	
	}
```
### Generar documentacion
1. Project --- Generate javadoc
2. Seleccionar las clave y las ruta
3. Next - Finish

:::tip 
Tambien podes exportar el proyecto  como Javadoc
:::

## Exportar/Importar proyecto

### Exportar
1. Seleccionar el proyecto y click Derecho -- Exportar
2. General - Archive File 
3. Seleccionar los proyectos a exportar y carpetas
4. Que se exporte con formato zip (Save in zip format) y con una estructura de arbol de directorios (Create directory structure for files)
5. Seleccionar la carpeta donde se va a exportar(destino)
6. Le das a finish

### Importarlo
1. File -- Import 
2. General - Existing Projects into WorkSpace - next
3. Selecionas que importar , el directorio root (la carpeta en donde esta ubicado el zip) o selecionar un archivo(para seleccionar el zip)(recomendado)
4. En Projects: seleccionas los proyectos a importar.
5. Le das a finish.
