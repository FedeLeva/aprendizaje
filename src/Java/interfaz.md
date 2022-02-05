# Interfaz Grafica

## Cambiar pantalla(JPanel)
 - Ubicado en un JFrame
```java
  	static void  nuevoPanel(JPanel  panelActual) {
		contentPane.removeAll();
		contentPane.add(panelActual);
		contentPane.repaint();
		contentPane.revalidate();
	}
```
En otra parte del codigo para cambiar la pantalla:
```java
CargarImpresora ventana = new CargarImpresora();
				nuevoPanel(ventana);
```
:::tip
- ventana es la instancia de un JPanel
:::

## JTable
- [Leyendo datos de un JTable ](https://medium.com/el-acordeon-del-programador/leyendo-datos-de-una-jtabla-en-java-swing-bc04263efd76)
- [Como hacer para que tu tabla no sea editable en Java por código y gráficamente](https://www.youtube.com/watch?v=sJ-4O5uOhnc)
 ### Definir nombre de columnas
 ```java
 	
	private String columnas[] = {"Marca" , "Modelo" , "Rango" , "A color" , "Multifuncion"};
	DefaultTableModel modelo = new DefaultTableModel(columnas , 0) {
    	
    	public boolean isCellEditable(int row , int column) {
    		return false;
    	}
    };
 ```
 ### Definir filas de forma dinamica

 - Se necesita un ArrayList<> de tipo Array de Objetos (cuyo tamaño es igual a la cantidad de columnas de la tabla)

 ```java
 private ArrayList<Object[]> data = new ArrayList<>();
 private JTable table;

 ```
 ```java
 	private void cargar() {
		for (int i = 0 ; i < DispositivoTecnologicos.getListado().size() ; i++) {
			if (DispositivoTecnologicos.getListado().get(i) instanceof Impresora) {
			Object[] impresora = new Object[5];
			impresora[0] = DispositivoTecnologicos.getListado().get(i).getMarca();
			impresora[1] = DispositivoTecnologicos.getListado().get(i).getModelo();
			impresora[2] = ((Impresora)DispositivoTecnologicos.getListado().get(i)).getTipo();
			impresora[3] = ((Impresora)DispositivoTecnologicos.getListado().get(i)).isEs_color();
			impresora[4] = ((Impresora)DispositivoTecnologicos.getListado().get(i)).isEs_multifuncion();
			
			data.add(impresora);
			} else {
				continue;
			}
		}
		modelo.setNumRows(0);
		for(Object[] dato : this.data) {
			this.modelo.addRow(dato);
			
		}
		table.setModel(modelo);
		
		
		
	}
 ```
   :::tip
   -  Por cada item , genero un array cuyo tamaño es  la cantidad de columnas de la tabla y lo añado al arraylist
   - El indice del array representa el indice de la columna a llenar , la posicion 0 equivale a la columna 0 , la posicion 1 a la columna 1 y asi ...
  - el metodo setNumRows(0) del modelo es para vaciar las filas 
  - el metodo setModel(Modelo) de la tabla es para añadir el modelo a la tabla
   :::

  ### Otra forma de actualizar datos de una tabla 
  - El Modelo ya fue establecido en la tabla.

  ```java
  	private void ActualizarTabla() {
		DefaultTableModel dtm = (DefaultTableModel) table.getModel();
		int cantColumnas = dtm.getRowCount();
		// Vaciar la tabla
		for(int b = (cantColumnas - 1) ; b >=0 ; b--) { 
			 dtm.removeRow(b);
		}
		// Llenar la tabla
		// Se puede usar table.setValueAT()
		int  cantAlumno = ControladoraAlumno.alumnos.size();
		if (cantAlumno > 0) {
			for (int i = 0 ; i < cantAlumno ; i++) {
				String codigo = ControladoraAlumno.alumnos.get(i).getCodigo();
				String Nombre = ControladoraAlumno.alumnos.get(i).getNombre();
				String Semestre = Integer.toString(ControladoraAlumno.alumnos.get(i).getSemestre());
				String carrera = ControladoraAlumno.alumnos.get(i).getCarrera();
				String Nota = Double.toString(ControladoraAlumno.alumnos.get(i).getPromedio());
				// Es un array el parametro ,  Object[] array = new Object[5]
				dtm.addRow(new Object[] {codigo , Nombre , Semestre , carrera , Nota});
			}
		} 
		
	}
  ```
 :::tip 
  - Las columnas de las tablas son codigo , Nombre , Semestre , carrera y Nota
  - Podes asignar los valores con [setValueAt](https://w3api.com/Java/JTable/setValueAt/) (Indice de columna y fila empieza en 0);
 :::

### metodos de table
-  getSelectedRow()  = Devuelve la fila selecionada
- getSelectedColumn() = Devuelve la columna selecionada

## Cambiar de ventana(JFrame)
   
   ```java
   	Mostrar GUIMostrar = new Mostrar();
	GUIMostrar.setVisible(true);
   ```

   :::tip
   - Se genera una instancia de un JFrame y se le asigna un setVisible(true)
   - Si se desea cerrar la ventana actual , se puede utilizar el metodo dispose();

   :::
   ```java
   dispose();
   ```
   O tambien 
   ```java
   System.exit(0);
   ```
   ## Seleccionar datos
   ### Textfield
   ```java
TextField.getText();
   ```
   Devuelve un String

###  TextField Password
  ```java
   private char[] password;
  password = textFieldContraseña.getPassword();
  ```
  Devuelve un array de char
### ComboBox
   ```java
     String marcaString =	ComboBox.getSelectedItem().toString().trim();
   ```
Devuelve un String sin espacio en blanco

### RadioButton Y CheckBox
  :::tip
   Los radio button deben ir dentro de un grupo de botones para que solo se seleccione uno
  :::
  ```java
     private ButtonGroup  botones = new ButtonGroup();
       botones.add(radioButton);	
		botones.add(radioButton);

  ```
  ```java
  if (radioButton.isSelected()) {
					
				}
  ```
   Devuelve true , si fue seleccionado
## Dialogos

 - [Opciones](https://mkyong.com/swing/java-swing-how-to-make-a-confirmation-dialog/)

 ### Mostrar mensaje
```java
JOptionPane.showMessageDialog(null, "mensaje" , "titulo" , JOptionPane.INFORMATION_MESSAGE);
```
:::tip 
- El ultimo parametro es el icono
:::
Solo mensaje:
```java
 JOptionPane.showMessageDialog(null, "Se ha registrado el alumno");
```

### Opciones




```java
	int opcion = JOptionPane.showConfirmDialog(null, "¿Estas seguro de eliminar el producto?" , "Eliminar" , JOptionPane.YES_NO_OPTION);
```
Si devuelve 0 le dio a Si , Si devuelve 1 le dio a NO

Y si habilito la opcion cancel es 2

### input 
```java
String nuevoValor = JOptionPane.showInputDialog(null , "Ingrese el nuevo valor" );
```
:::tip
- Puede tener dos parametros (null , texto)
- Puede tener los 4 parametros (null , texto , titulo , icono)
- Puede tener solo un parametro (el mensaje)

:::
 ### JoptionPane (Muchas opciones)
 - Puede tener  8 parametros (null , texto , titulo , tipo de opcion , tipo de mensaje , icono , arreglo de botones , valor seleccionado)
 - Devuelve un numero entero (indice del array de botones)
  ```java
  		String[] botones = {"Monitor","Teclado","Mouse"};
	int indice = 	JOptionPane.showOptionDialog(null, "Elige una palabra", "Elige", 0, JOptionPane.QUESTION_MESSAGE, null , botones, "Teclado");
		System.out.println(botones[indice]);
  ```
  - [mas info](https://www.youtube.com/watch?v=JLvmSkUWBrY)

  :::tip 
  - Todos los dialogos tienen los primeros 6 parametros (aunque puede variar segun el tipo de mensaje).
   - el cuarto parametro puede variar entre tipo de opcion y tipo de mensaje(icono).
   - Si el cuarto parametro es el tipo de mensaje , el dialogo solo tendria  4 parametros.
  :::
## JTextArea TABL
[Tabla JTEXTAREA](https://www.tutorialspoint.com/how-to-display-jtextarea-in-the-form-of-a-table-with-gridlayout-in-java)-

## Layout

### FlowLayout 
- Los Componentes añadidos a un Panel con FlowLayout se encadenan en forma de lista. La cadena es horizontal, de izquierda a
derecha, y se puede seleccionar el espaciado entre cada
Componente
- Hace que todos los componentes queden en fila  y quepan en la ventana
- Es utilizado en barras de herramientas 
- Los componentes se van adaptando al tamaño de la ventana.
:::tip
 Se puede modificar la alineacion y el margen
:::


### BorderLayout
- Utiliza cinco zonas para
colocar los Componentes sobre ellas: Norte, Sur, Este,
Oeste y Centro.
-  Es el layout o composición que se utilizan por defecto Frame y Dialog.
- El Norte ocupa la parte superior del panel, el Este ocupa
el lado derecho, Sur la zona inferior y Oeste el lado
izquierdo. Centro representa el resto que queda, una vez
que se hayan rellenado las otras cuatro partes.
- Divide la ventana en 5  (Norte , Sur , Este , Oeste , Centro)

:::tip 
Podes modificar el margen

:::
### GridLayout
- proporciona gran flexibilidad para situar 
Componentes. El layout se crea con un número de filas y 
columnas y los Componentes van dentro de las celdas de 
la tabla así definida.
- Define una cuadricula(tabla) de componentes 
- Los componentes se adaptan a la ventana
- Por defecto solo genera una fila
- Le da prioridad a las filas 
:::tip
Le podes modificar las columnas y filas

:::
### GridBagLayout
- Es igual que la composición de 
GridLayout, con la diferencia que los Componentes no 
necesitan tener el mismo tamaño. Es quizá el layout más 
sofisticado y versátil.
- Te permite definir  que lugar de la pantalla  va a ocupar y el tamaño de cada  componente
- Se adapta a la ventana
Al implementarlo se instancian dos objetos: 
```java
	GridBagLayout gbl_contentPane = new GridBagLayout();
	GridBagConstraints gbc_texto = new GridBagConstraints();
```
:::tip 
- GridBagConstraints :Sirve para asignar Restricciones a los elementos, para que se comporten de cierta manera en la ventana y decirle que tienen que hacer.
- Hay que especificarle a cada elemento una restriccion
:::
```java

public class Ventana extends JFrame {

	private JPanel contentPane;
	private GridBagConstraints gbc_1;
	
	


	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Ventana frame = new Ventana();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public Ventana() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 715, 555);
		contentPane = new JPanel();
		contentPane.setAlignmentX(Component.LEFT_ALIGNMENT);
		setContentPane(contentPane);
		GridBagLayout gbl_contentPane = new GridBagLayout();
		gbl_contentPane.columnWidths = new int[]{273, 0};
		contentPane.setLayout(gbl_contentPane);
		
	
		
		JTextArea area = new JTextArea();
		JScrollPane scroll = new JScrollPane(area);
		JTextField texto = new JTextField();
		JButton boton = new JButton("New button");
		boton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				area.append(texto.getText() + "\n");
				texto.setText("");
			}
		});
		
		// Elemento scroll que contiene el texarea que ocupa las 2 columnas y una fila empezando por la fila y columna 0
		GridBagConstraints gbc = new GridBagConstraints();
		gbc.insets = new Insets(0, 0, 5, 5);
		// En que columna empieza
		 gbc.gridx = 0;
		 // En que fila empieza
		 gbc.gridy = 0;
			// ancho  - la cantidad de columnas que quiero que ocupe
		 gbc.gridwidth = 2;
			// la cantidad de Filas que va a ocupar el componente , alto
		gbc.gridheight = 1;
		// Cuanto quiero que crezca
		// Si la ventana crece, cuanto crece el componente horizontalmente
		gbc.weightx = 1;
		// Si la ventana crece, cuanto crece el componente verticalmente
		gbc.weighty = 1;
		// Como quiero que crezca
		// El modo de como va a crecer el elemento (de forma vertical , horizontal , ambas , etc)
		gbc.fill = GridBagConstraints.BOTH;
		//Añadir el componente con sus restricciones
		getContentPane().add(scroll,gbc);
	   
		
		
		// Para el texto que empieza en la columna 0 y fila 1
		gbc_1 = new GridBagConstraints();
		
		   gbc_1.gridx = 0;
		   gbc_1.gridy = 1;
		   gbc_1.weightx = 1;
		   gbc_1.weighty = 1;
		   // Para que mantenga el alto y solo crezca de forma horizontal
		   gbc_1.fill = GridBagConstraints.HORIZONTAL;
		   getContentPane().add(texto,gbc_1);
		   
		   
		   // Para el boton empieza en la columna 1 y fila 1
		   gbc_1 = new GridBagConstraints();
			   gbc_1.gridx = 1;
			   gbc_1.gridy = 1;
			   gbc_1.gridwidth = 1;
			   gbc_1.weightx = 0;
			   gbc_1.weighty = 0;
			   //  No crece
			   gbc_1.fill = GridBagConstraints.NONE;
			   getContentPane().add(boton,gbc_1);
			   
			   
		   
		   
		
```
### Otro ejemplo
:::tip
Se utiliza
```java
GridBagConstraints constraints = new GridBagConstraints();
```
:::
- Debemos tratar de meter los componentes en las celdas. Cada componente debe ocupar una o más celdas. 
- Dos componentes no pueden ocupar la misma celda.
- No es necesario que las celdas de la rejilla sean todas del mismo tamaño ni es necesario que un componente ocupe una celda completa.
- Para que no se lie el código, conviene que el componente ocupe toda la celda, o bien que esté centrado en la misma.


![Algo asi ](http://www.chuidiang.org/java/layout/GridBagLayout/ventana2.jpg)
```java
package prueba;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.border.EmptyBorder;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;

public class Ventana extends JFrame {
	private JTextArea areaTexto;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Ventana frame = new Ventana();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public Ventana() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		JPanel contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		GridBagLayout gbl_contentPane = new GridBagLayout();
		contentPane.setLayout(gbl_contentPane);
		
		
		
		/* Esta llamada añade el área de texto, dejando al GridBagLayout total libertad para decidir dónde y cómo ponerlo. 
		No es lo que queremos. Necesitamos el método add() que admite un segundo parámetro. 
		Este segundo parámetro le indica al layout dónde y cómo colocar el componente. El segundo parámetro es un Object, 
		lo que quiere decir que podriamos meter cualquier cosa. Evidentemente esto no es asi, 
		debemos meter algo que el layout entienda. Cada layout entiende su propio segundo parámetro. 
		El GridBagLayout admite como segundo parámetro un GridBagConstraints. 
		JTextArea areaTexto = new JTextArea("Area texto");
		contentPane.add(areaTexto);
		*/
		
		
		
		
		/* 
		 * 
		 * GridBagConstraints en una clase en cuyos atributos se guarda información de cómo y dónde añadir el 
		 * componente. De momento vamos a contemplar sólo cuatro de estos atributos:

GridBagConstraints.gridx nos dice la posición x del componente, es decir, el número de columna en la que está el componente,
 siendo la columna 0 la primera columna de la izquierda. Si el componente ocupa varias columnas (como nuestra área de texto),
  debemos indicar la columna en la que está la esquina superior izquierda del componente.
GridBagConstraints.gridy nos dice la posición y del componente, es decir, el número de fila en la que está el componente, 
siendo la fila 0 la primera fila de la parte de arriba. Si el componente ocupa varias filas (como nuestra área de texto), debemos 
indicar la fila en la que está la esquina superior izquierda del componente.
GridBagConstraints.gridwidth nos dice cuántas celdas en horizontal debe ocupar el componente. El ancho del componente.
GridBagConstraints.gridheight nos dice cuantas celdas en vertical debe ocupar el componente. El alto del componente.
		 */
		areaTexto = new JTextArea("Area texto");
		GridBagConstraints gbc_areaTexto = new GridBagConstraints();
		gbc_areaTexto.gridx = 0; // El área de texto empieza en la columna cero.
		gbc_areaTexto.gridy = 0; // El área de texto empieza en la fila cero
		gbc_areaTexto.gridwidth = 2; // El área de texto ocupa dos columnas.
		gbc_areaTexto.gridheight = 2; // El área de texto ocupa 2 filas.
		contentPane.add (areaTexto, gbc_areaTexto);
		
		/* 
		 * En realidad gridwith y gridheight admite también determinadas constantes que hacen que el 
		 * componente se estire hasta el final del contenedor, ocupando todas las columnas o filas libres 
		 * o hasta que encuentre otro componente. No vamos a usar esas constantes (están definidas en GridBagConstraints)
		 *  y simplemente hemos puesto el número de filas y columnas (2 en ambos casos) que queremos que ocupe.
		 */
	  
		
		/* 
		 * Los siguientes elementos tienen todos un gridwidth y gridheight de 1, 
		 * puesto que ocupan una fila y columna. Las posiciones son las siguientes:
		 */
		
		JButton boton1 = new JButton ("Boton 1");
		GridBagConstraints constraints = new GridBagConstraints();
		constraints.gridx = 2;
		constraints.gridy = 0;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		contentPane.add (boton1, constraints);
		
		
		constraints = new GridBagConstraints();
		JButton boton2 = new JButton ("Boton 2");
		constraints.gridx = 2;
		constraints.gridy = 1;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		contentPane.add (boton2, constraints);
		
		constraints = new GridBagConstraints();
		JButton boton3 = new JButton ("Boton 3");
		constraints.gridx = 0;
		constraints.gridy = 2;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		contentPane.add (boton3, constraints);
		
		constraints = new GridBagConstraints();
		JButton boton4 = new JButton ("Boton 4");
		constraints.gridx = 2;
		constraints.gridy = 2;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
	    contentPane.add (boton4, constraints);
	    
		constraints = new GridBagConstraints();
	    JTextField campoTexto = new JTextField ("Campo texto");
	    constraints.gridx = 1;
	    constraints.gridy = 2;
	    constraints.gridwidth = 1;
	    constraints.gridheight = 1;
	    this.getContentPane().add (campoTexto, constraints);
	    
	    
	    /*
	     * Bueno, no se parece mucho a lo que queríamos. Se ha quedado todo en el centro de la ventana y el area de texto es bastante canija. ¿Qué ha pasado?

Estirar las filas y las columnas
  
	     */
	}

	
}
```
![Algo asi ](http://www.chuidiang.org/java/layout/GridBagLayout/ventana3.jpg)
:::warning ¿Que paso?
Lo que ha pasado es que sólo le hemos dicho al GridBagLayout dónde colocar los componentes y eso lo ha hecho bien. Cada componente está donde debe. Lo que pasa es que no le hemos dicho nada de cómo estirar las filas y columnas, así que ha hecho lo que hace por defecto: Cada fila y columna es del tamaño mínimo necesario para albergar sus componentes y están centradas dentro de la ventana. En la siguiente figura vemos como están nuestras filas y columnas:

![Asi](http://www.chuidiang.org/java/layout/GridBagLayout/ventana4.jpg)
:::
```java
package prueba;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.border.EmptyBorder;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;

public class Ventana extends JFrame {
	private JTextArea areaTexto;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Ventana frame = new Ventana();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public Ventana() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		JPanel contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		GridBagLayout gbl_contentPane = new GridBagLayout();
		contentPane.setLayout(gbl_contentPane);
		
		
		
		/* Esta llamada añade el área de texto, dejando al GridBagLayout total libertad para decidir dónde y cómo ponerlo. 
		No es lo que queremos. Necesitamos el método add() que admite un segundo parámetro. 
		Este segundo parámetro le indica al layout dónde y cómo colocar el componente. El segundo parámetro es un Object, 
		lo que quiere decir que podriamos meter cualquier cosa. Evidentemente esto no es asi, 
		debemos meter algo que el layout entienda. Cada layout entiende su propio segundo parámetro. 
		El GridBagLayout admite como segundo parámetro un GridBagConstraints. 
		JTextArea areaTexto = new JTextArea("Area texto");
		contentPane.add(areaTexto);
		*/
		
		
		
		
		/* 
		 * 
		 * GridBagConstraints en una clase en cuyos atributos se guarda información de cómo y dónde añadir el 
		 * componente. De momento vamos a contemplar sólo cuatro de estos atributos:

GridBagConstraints.gridx nos dice la posición x del componente, es decir, el número de columna en la que está el componente,
 siendo la columna 0 la primera columna de la izquierda. Si el componente ocupa varias columnas (como nuestra área de texto),
  debemos indicar la columna en la que está la esquina superior izquierda del componente.
GridBagConstraints.gridy nos dice la posición y del componente, es decir, el número de fila en la que está el componente, 
siendo la fila 0 la primera fila de la parte de arriba. Si el componente ocupa varias filas (como nuestra área de texto), debemos 
indicar la fila en la que está la esquina superior izquierda del componente.
GridBagConstraints.gridwidth nos dice cuántas celdas en horizontal debe ocupar el componente. El ancho del componente.
GridBagConstraints.gridheight nos dice cuantas celdas en vertical debe ocupar el componente. El alto del componente.
	areaTexto = new JTextArea("Area texto");
		GridBagConstraints gbc_areaTexto = new GridBagConstraints();
		gbc_areaTexto.gridx = 0; // El área de texto empieza en la columna cero.
		gbc_areaTexto.gridy = 0; // El área de texto empieza en la fila cero
		gbc_areaTexto.gridwidth = 2; // El área de texto ocupa dos columnas.
		gbc_areaTexto.gridheight = 2; // El área de texto ocupa 2 filas.
		contentPane.add (areaTexto, gbc_areaTexto);
		 */
	
		
		/* 
		 * En realidad gridwith y gridheight admite también determinadas constantes que hacen que el 
		 * componente se estire hasta el final del contenedor, ocupando todas las columnas o filas libres 
		 * o hasta que encuentre otro componente. No vamos a usar esas constantes (están definidas en GridBagConstraints)
		 *  y simplemente hemos puesto el número de filas y columnas (2 en ambos casos) que queremos que ocupe.
		 */
	  
		
		/* 
		 * Los siguientes elementos tienen todos un gridwidth y gridheight de 1, 
		 * puesto que ocupan una fila y columna. Las posiciones son las siguientes:
		 * 
		 * 	JButton boton1 = new JButton ("Boton 1");
		GridBagConstraints constraints = new GridBagConstraints();
		constraints.gridx = 2;
		constraints.gridy = 0;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		contentPane.add (boton1, constraints);
		
		
		constraints = new GridBagConstraints();
		JButton boton2 = new JButton ("Boton 2");
		constraints.gridx = 2;
		constraints.gridy = 1;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		contentPane.add (boton2, constraints);
		
		constraints = new GridBagConstraints();
		JButton boton3 = new JButton ("Boton 3");
		constraints.gridx = 0;
		constraints.gridy = 2;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		contentPane.add (boton3, constraints);
		
		constraints = new GridBagConstraints();
		JButton boton4 = new JButton ("Boton 4");
		constraints.gridx = 2;
		constraints.gridy = 2;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
	    contentPane.add (boton4, constraints);
	    
		constraints = new GridBagConstraints();
	    JTextField campoTexto = new JTextField ("Campo texto");
	    constraints.gridx = 1;
	    constraints.gridy = 2;
	    constraints.gridwidth = 1;
	    constraints.gridheight = 1;
	    this.getContentPane().add (campoTexto, constraints);
	    
		 */
		
	
	    
	    /*
	     * Bueno, no se parece mucho a lo que queríamos. Se ha quedado todo en el centro de la ventana y el area de texto es bastante canija. ¿Qué ha pasado?

Estirar las filas y las columnas
  
	     */
	    
	    /* 
	     * 
	     */
	    
	    
	    /** 
	     * Las filas son de la altura justa para contener a los botones. Las columnas también. 
	     * El área de texto que ocupa cuatro celdas se ha situado en el medio de ellas y le sobra un montón de espacio.

El siguiente paso a dar consiste en decir cómo se deben estirar las filas columnas.
 Si comparamos con la figura en las que marcamos inicialmente las filas y columnas, vemos que las dos primeras filas(alto) deben ser más anchas
 , la tercera fila ya está bien de ancho. En cuanto a las columnas(ancho), la segunda es la que debe estirarse, la primera y tercera están bien.

Para estirar filas y columnas, dentro del GridBagConstraints tenemos los campos weigthx y weigthy. El primero indica cómo estirar las columnas
(ancho).
El segundo las filas(alto). Aqui vamos a contar una forma sencilla de usar estos campos que nos servirá para la mayoría de los casos. 
En realidad podríamos sacarle bastante más jugo.

A estos campos debemos darles el valor 0.0 (que es el valor por defecto) si no queremos que la fila o columna se estire.
 Este es el caso para la primera y tercera columna, así como para la tercera fila. Debemos dar el valor 1.0 a las filas o columnas que 
 queremos que se estiren hasta completar toda la ventana. Es el caso de las dos primeras filas y de la columna del medio.

Hay dos detalles con estos campos. El primero es que widthy afecta a una fila completa, no solo a un componente. 
Por ello, cada vez que añadamos un componente a esa fila, debemos dar a widthy el mismo valor (o 0.0 o 1.0). 
Lo mismo pasa con widthx y las columnas. El segundo detalle es el que comentamos antes, sólo estamos usando una instancia de GridBagConstraints, 
asi que después de poner uno de estos campos a 1.0 y añadir un componente, debemos volver a ponerlo a 0.0 para el siguiente 
(suponiendo que sea eso lo que necesita).

El código ahora, añadiendo estos dos campos, quedaría así:
	     */
		areaTexto = new JTextArea("Area texto");
		GridBagConstraints constraints = new GridBagConstraints();
		constraints.gridx = 0; // Columna 0. No necesita estirarse, no ponemos weightx
		constraints.gridy = 0; // Fila 0. Necesita estirarse, hay que poner weighty
		constraints.gridwidth = 2;
		constraints.gridheight = 2;
		constraints.weighty = 1.0; // La fila 0 debe estirarse, le ponemos un 1.0
		this.getContentPane().add (areaTexto, constraints);
		constraints.weighty = 0.0; // Restauramos al valor por defecto, para no afectar a los siguientes componentes.
		
		constraints = new GridBagConstraints();
		JButton boton1 = new JButton ("Boton 1");
		constraints.gridx = 2; // Columna 2. No necesita estirarse, no ponemos weightx
		constraints.gridy = 0; // Fila 0. Necesita estirarse, hay que poner weighty
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		constraints.weighty = 1.0; /* La fila 0 debe estirarse, le ponemos un 1.0. Ya lo hicimos en el area de texto, pero aquí debemos ser coherentes y poner lo mismo.*/
		this.getContentPane().add (boton1, constraints);
		constraints.weighty = 0.0; // Restauramos al valor por defecto, para no afectar a los siguientes componentes.

		constraints = new GridBagConstraints();
		JButton boton2 = new JButton ("Boton 2");
		constraints.gridx = 2; // Columna 2, no necesita estirarse, no ponemos weigthx
		constraints.gridy = 1; // Fila 1, necesita estirarse, hay que poner weigthy
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		constraints.weighty = 1.0; // La fila 1 debe estirarse, le ponemos 1.0
		this.getContentPane().add (boton2, constraints);
		constraints.weighty = 0.0; // Restauramos el valor por defecto.

		
		constraints = new GridBagConstraints();
		JButton boton3 = new JButton ("Boton 3");
		constraints.gridx = 0; // Columna 0, no necesita estirarse, no ponemos weigthx
		constraints.gridy = 2; // Fila 2, no necesita estirarse, no ponemos weigthy
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		this.getContentPane().add (boton3, constraints);
       
		constraints = new GridBagConstraints();
		JButton boton4 = new JButton ("Boton 4");
		constraints.gridx = 2; // Columna 2, no necesita estirarse, no ponemos weightx
		constraints.gridy = 2; // Fila 2, no necesita estirarse, no ponemos weigthy
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		this.getContentPane().add (boton4, constraints);
         
		constraints = new GridBagConstraints();
		JTextField campoTexto = new JTextField ("Campo texto");
		constraints.gridx = 1; // Columna 1, debe estirarse, le ponemos el weigthx
		constraints.gridy = 2; // Fila 2, no necesita estirarse, no ponemos weigthy
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		constraints.weightx = 1.0; // La columna 1 debe estirarse, ponemos el 1.0 en weigthx
		this.getContentPane().add (campoTexto, constraints);
		/* Puesto que es el último componente, no restauramos el valor por defecto. Si más adelante añadimos más componentes, seguro que pagamos cara nuestra osadía.*/
	}

	
}
```
![asi](http://www.chuidiang.org/java/layout/GridBagLayout/ventana5.jpg)
:::warning ¿que paso?
¿Qué es lo que ha pasado ahora?. Como dice un viejo dicho de informática, el ordenador se empeña en hacer lo que le decimos y no lo que queremos. Le hemos dicho que estire las filas y columnas y es lo que ha hecho, pero como no le hemos dicho nada sobre los componentes, no los ha estirado en absoluto.
![asi](http://www.chuidiang.org/java/layout/GridBagLayout/ventana6.jpg)

:::
```java
/**
	 * Create the frame.
	 */
	public Ventana() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		JPanel contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		GridBagLayout gbl_contentPane = new GridBagLayout();
		contentPane.setLayout(gbl_contentPane);
		
		
		
		/* Esta llamada añade el área de texto, dejando al GridBagLayout total libertad para decidir dónde y cómo ponerlo. 
		No es lo que queremos. Necesitamos el método add() que admite un segundo parámetro. 
		Este segundo parámetro le indica al layout dónde y cómo colocar el componente. El segundo parámetro es un Object, 
		lo que quiere decir que podriamos meter cualquier cosa. Evidentemente esto no es asi, 
		debemos meter algo que el layout entienda. Cada layout entiende su propio segundo parámetro. 
		El GridBagLayout admite como segundo parámetro un GridBagConstraints. 
		JTextArea areaTexto = new JTextArea("Area texto");
		contentPane.add(areaTexto);
		*/
		
		
		
		
		/* 
		 * 
		 * GridBagConstraints en una clase en cuyos atributos se guarda información de cómo y dónde añadir el 
		 * componente. De momento vamos a contemplar sólo cuatro de estos atributos:

GridBagConstraints.gridx nos dice la posición x del componente, es decir, el número de columna en la que está el componente,
 siendo la columna 0 la primera columna de la izquierda. Si el componente ocupa varias columnas (como nuestra área de texto),
  debemos indicar la columna en la que está la esquina superior izquierda del componente.
GridBagConstraints.gridy nos dice la posición y del componente, es decir, el número de fila en la que está el componente, 
siendo la fila 0 la primera fila de la parte de arriba. Si el componente ocupa varias filas (como nuestra área de texto), debemos 
indicar la fila en la que está la esquina superior izquierda del componente.
GridBagConstraints.gridwidth nos dice cuántas celdas en horizontal debe ocupar el componente. El ancho del componente.
GridBagConstraints.gridheight nos dice cuantas celdas en vertical debe ocupar el componente. El alto del componente.
	areaTexto = new JTextArea("Area texto");
		GridBagConstraints gbc_areaTexto = new GridBagConstraints();
		gbc_areaTexto.gridx = 0; // El área de texto empieza en la columna cero.
		gbc_areaTexto.gridy = 0; // El área de texto empieza en la fila cero
		gbc_areaTexto.gridwidth = 2; // El área de texto ocupa dos columnas.
		gbc_areaTexto.gridheight = 2; // El área de texto ocupa 2 filas.
		contentPane.add (areaTexto, gbc_areaTexto);
		 */
	
		
		/* 
		 * En realidad gridwith y gridheight admite también determinadas constantes que hacen que el 
		 * componente se estire hasta el final del contenedor, ocupando todas las columnas o filas libres 
		 * o hasta que encuentre otro componente. No vamos a usar esas constantes (están definidas en GridBagConstraints)
		 *  y simplemente hemos puesto el número de filas y columnas (2 en ambos casos) que queremos que ocupe.
		 */
	  
		
		/* 
		 * Los siguientes elementos tienen todos un gridwidth y gridheight de 1, 
		 * puesto que ocupan una fila y columna. Las posiciones son las siguientes:
		 * 
		 * 	JButton boton1 = new JButton ("Boton 1");
		GridBagConstraints constraints = new GridBagConstraints();
		constraints.gridx = 2;
		constraints.gridy = 0;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		contentPane.add (boton1, constraints);
		
		
		constraints = new GridBagConstraints();
		JButton boton2 = new JButton ("Boton 2");
		constraints.gridx = 2;
		constraints.gridy = 1;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		contentPane.add (boton2, constraints);
		
		constraints = new GridBagConstraints();
		JButton boton3 = new JButton ("Boton 3");
		constraints.gridx = 0;
		constraints.gridy = 2;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		contentPane.add (boton3, constraints);
		
		constraints = new GridBagConstraints();
		JButton boton4 = new JButton ("Boton 4");
		constraints.gridx = 2;
		constraints.gridy = 2;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
	    contentPane.add (boton4, constraints);
	    
		constraints = new GridBagConstraints();
	    JTextField campoTexto = new JTextField ("Campo texto");
	    constraints.gridx = 1;
	    constraints.gridy = 2;
	    constraints.gridwidth = 1;
	    constraints.gridheight = 1;
	    this.getContentPane().add (campoTexto, constraints);
	    
		 */
		
	
	    
	    /*
	     * Bueno, no se parece mucho a lo que queríamos. Se ha quedado todo en el centro de la ventana y el area de texto es bastante canija. ¿Qué ha pasado?

Estirar las filas y las columnas
  
	     */
	    
	    /* 
	     * 
	     */
	    
	    
	    /** 
	     * Las filas son de la altura justa para contener a los botones. Las columnas también. 
	     * El área de texto que ocupa cuatro celdas se ha situado en el medio de ellas y le sobra un montón de espacio.

El siguiente paso a dar consiste en decir cómo se deben estirar las filas columnas.
 Si comparamos con la figura en las que marcamos inicialmente las filas y columnas, vemos que las dos primeras filas(alto) deben ser más anchas
 , la tercera fila ya está bien de ancho. En cuanto a las columnas(ancho), la segunda es la que debe estirarse, la primera y tercera están bien.

Para estirar filas y columnas, dentro del GridBagConstraints tenemos los campos weigthx y weigthy. El primero indica cómo estirar las columnas
(ancho).
El segundo las filas(alto). Aqui vamos a contar una forma sencilla de usar estos campos que nos servirá para la mayoría de los casos. 
En realidad podríamos sacarle bastante más jugo.

A estos campos debemos darles el valor 0.0 (que es el valor por defecto) si no queremos que la fila o columna se estire.
 Este es el caso para la primera y tercera columna, así como para la tercera fila. Debemos dar el valor 1.0 a las filas o columnas que 
 queremos que se estiren hasta completar toda la ventana. Es el caso de las dos primeras filas y de la columna del medio.

Hay dos detalles con estos campos. El primero es que widthy afecta a una fila completa, no solo a un componente. 
Por ello, cada vez que añadamos un componente a esa fila, debemos dar a widthy el mismo valor (o 0.0 o 1.0). 
Lo mismo pasa con widthx y las columnas. El segundo detalle es el que comentamos antes, sólo estamos usando una instancia de GridBagConstraints, 
asi que después de poner uno de estos campos a 1.0 y añadir un componente, debemos volver a ponerlo a 0.0 para el siguiente 
(suponiendo que sea eso lo que necesita).

El código ahora, añadiendo estos dos campos, quedaría así:
         	areaTexto = new JTextArea("Area texto");
		GridBagConstraints constraints = new GridBagConstraints();
		constraints.gridx = 0; // Columna 0. No necesita estirarse, no ponemos weightx
		constraints.gridy = 0; // Fila 0. Necesita estirarse, hay que poner weighty
		constraints.gridwidth = 2;
		constraints.gridheight = 2;
		constraints.weighty = 1.0; // La fila 0 debe estirarse, le ponemos un 1.0
		this.getContentPane().add (areaTexto, constraints);
		constraints.weighty = 0.0; // Restauramos al valor por defecto, para no afectar a los siguientes componentes.
		
		constraints = new GridBagConstraints();
		JButton boton1 = new JButton ("Boton 1");
		constraints.gridx = 2; // Columna 2. No necesita estirarse, no ponemos weightx
		constraints.gridy = 0; // Fila 0. Necesita estirarse, hay que poner weighty
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		constraints.weighty = 1.0;  La fila 0 debe estirarse, le ponemos un 1.0. Ya lo hicimos en el area de texto, pero aquí debemos ser coherentes y poner lo mismo.
		this.getContentPane().add (boton1, constraints);
		constraints.weighty = 0.0; // Restauramos al valor por defecto, para no afectar a los siguientes componentes.

		constraints = new GridBagConstraints();
		JButton boton2 = new JButton ("Boton 2");
		constraints.gridx = 2; // Columna 2, no necesita estirarse, no ponemos weigthx
		constraints.gridy = 1; // Fila 1, necesita estirarse, hay que poner weigthy
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		constraints.weighty = 1.0; // La fila 1 debe estirarse, le ponemos 1.0
		this.getContentPane().add (boton2, constraints);
		constraints.weighty = 0.0; // Restauramos el valor por defecto.

		
		constraints = new GridBagConstraints();
		JButton boton3 = new JButton ("Boton 3");
		constraints.gridx = 0; // Columna 0, no necesita estirarse, no ponemos weigthx
		constraints.gridy = 2; // Fila 2, no necesita estirarse, no ponemos weigthy
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		this.getContentPane().add (boton3, constraints);
       
		constraints = new GridBagConstraints();
		JButton boton4 = new JButton ("Boton 4");
		constraints.gridx = 2; // Columna 2, no necesita estirarse, no ponemos weightx
		constraints.gridy = 2; // Fila 2, no necesita estirarse, no ponemos weigthy
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		this.getContentPane().add (boton4, constraints);
         
		constraints = new GridBagConstraints();
		JTextField campoTexto = new JTextField ("Campo texto");
		constraints.gridx = 1; // Columna 1, debe estirarse, le ponemos el weigthx
		constraints.gridy = 2; // Fila 2, no necesita estirarse, no ponemos weigthy
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		constraints.weightx = 1.0; // La columna 1 debe estirarse, ponemos el 1.0 en weigthx
		this.getContentPane().add (campoTexto, constraints);
	     */
	
		/* Puesto que es el último componente, no restauramos el valor por defecto. Si más adelante añadimos más componentes, seguro que pagamos cara nuestra osadía.*/
	
	
	 /* 
	  * pero los componentes siguen con su tamaño original y en el centro de las celdas que tienen asignadas. 
	  * El area de texto sigue igual, en el centro de sus cuatro celdas, los botones 1 y 2 se han centrado en sus celdas y 
	  * lo mismo le pasa al campo de texto.

Lo siguiente que tenemos que hacer es decir qué componentes deben estirarse (el area de texto y el campo de texto para nuestro ejemplo). 
Para aquellos componentes que no deben estirarse, podemos indicar en qué parte de la celda queremos que se situen (caso del boton 1 y boton 2).

Para hacer que un componente se estire, tenemos el atributo fill del GridBagConstraints. Este puede tomar los siguientes valores:

GridBagConstraints.NONE para que no se estire en ningún sentido, es la opción por defecto.
GridBagConstraints.VERTICAL para que se estire sólo en vertical
GridBagConstraints.HORIZONTAL para que se estire sólo en horizontal.
GridBagConstraints.BOTH para que se estire en ambas dimensiones


Si el componente no se estira en alguna dirección, podemos decirle por medio de anchor en GridBagConstraints qué posición queremos que ocupe. Las posibilidades son

GridBagConstraints.CENTER para que el componente ocupe el centro de la celda. Es la opción por defecto
GridBagConstraints.NORTH para que se pegue a la parte superior, centrado en la misma.
GridBagConstraints.NORTHEAST para que se pegue a la esquina superior derecha.
... (qué pereza me da escribir todos los puntos cardinales ...)
GridBagConstraints.WEST para que se pegue al lado izquierdo, centrado en ese lado.
GridBagConstraints.NORTHWEST para que se pegue a la esquina superior izquierda.
Igual que antes, estamos usando una única instancia de GridBagConstraints, por lo que si al añadir un componente cambiamos una opción, debemos tenerlo en cuenta para el siguiente.

Bueno, pues básicamente nos queda decirle al area de texto de se ensanche en todos los sentidos, al campo de texto que se ensanche en horizontal y a los botones 1 y 2 que ocupen la posicion NORTH de su celda. El código sería el siguiente:
	  */
		GridBagConstraints	constraints = new GridBagConstraints();
		JTextArea cajaTexto = new JTextArea("Area texto");
		constraints.gridx = 0;
		constraints.gridy = 0;
		constraints.gridwidth = 2;
		constraints.gridheight = 2;
		// El area de texto debe estirarse en ambos sentidos. Ponemos el campo fill.
		constraints.fill = GridBagConstraints.BOTH;
		constraints.weighty = 1.0;
		this.getContentPane().add (cajaTexto, constraints);
		constraints.weighty = 0.0;
       
		constraints = new GridBagConstraints();
		JButton boton1 = new JButton ("Boton 1");
		constraints.gridx = 2;
		constraints.gridy = 0;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		constraints.weighty = 1.0;
		// El botón 1 debe ocupar la posición NORTH de su celda
		constraints.anchor = GridBagConstraints.NORTH;
		// El botón 1 no debe estirarse. Habíamos cambiado este valor en el
		// area de texto, asi que lo restauramos.
		constraints.fill = GridBagConstraints.NONE;
		this.getContentPane().add (boton1, constraints);
		// Restauramos valores por defecto
		constraints.anchor = GridBagConstraints.CENTER;
		constraints.weighty = 0.0;

		constraints = new GridBagConstraints();
		JButton boton2 = new JButton ("Boton 2");
		constraints.gridx = 2;
		constraints.gridy = 1;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		constraints.weighty = 1.0;
		// El boton 2 debe ocupar la posición NORTH de su celda.
		constraints.anchor = GridBagConstraints.NORTH;
		this.getContentPane().add (boton2, constraints);
		// Restauramos valores por defecto.
		constraints.weighty = 0.0;
		constraints.anchor = GridBagConstraints.CENTER;
      
		
		constraints = new GridBagConstraints();
		JButton boton3 = new JButton ("Boton 3");
		constraints.gridx = 0;
		constraints.gridy = 2;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		this.getContentPane().add (boton3, constraints);
        
		
		constraints = new GridBagConstraints();
		JButton boton4 = new JButton ("Boton 4");
		constraints.gridx = 2;
		constraints.gridy = 2;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		this.getContentPane().add (boton4, constraints);
       
		
		constraints = new GridBagConstraints();
		JTextField campoTexto = new JTextField ("Campo texto");
		constraints.gridx = 1;
		constraints.gridy = 2;
		constraints.gridwidth = 1;
		constraints.gridheight = 1;
		constraints.weightx = 1.0;
		// El campo de texto debe estirarse sólo en horizontal.
		constraints.fill = GridBagConstraints.HORIZONTAL;
		this.getContentPane().add (campoTexto, constraints);
	}

	
}

```
:::tip 
- Los camos weightx y weighty, como hemos visto, hace que se estiren las filas y columnas. Hemos puesto 0.0 para las que no se estiran y 1.0 para las que sí. En realidad cada fila o columna se estira en proporción al valor de este campo respecto a los demás. Por ejemplo, si a la columna 1 le ponemos weightx=1.0 y a la 2 le ponemos weightx=0.5, ambas se estirarían , pero la primera el doble que la segunda.

- Hay campos insets, ipadx e ipady que permiten fijar márgenes entre los componentes, de forma que no queden pegados entre sí.
:::
- [Link](http://www.chuidiang.org/java/layout/GridBagLayout/GridBagLayout.php)
### CardLayout
- Este es el tipo de composición que se 
utiliza cuando se necesita una zona de la ventana que 
permita colocar distintos componentes en esa misma 
zona.
- Permite ubicar componentes dentro de un mismo contenedor, y poder visualizar solamente uno a la vez.
- Es comun,  como una carta 
- Son varias JPanel en un contenedor(que puede ser un JPanel , etc) y solo se muestra uno 

Ejemplo:

 Añadir al contenedor los componentes :
```java
panelContenedor.add(panel1, "name_13829404634200");
panelContenedor.add(panel2, "name_13829414548800");
```

:::tip 
- Siempre se levanta el primer panel agregado primero (en el ejemplo anterior panel1)
- el segundo parametro es la referencia al componente(puede ser cualquier valor String)
:::
### Metodos
:::tip 
 Los metodos se hacen con el objeto CardLayout que puede ser obtenido del contenedor a traves del metodo GetLayout()
:::
- show(contenedor , componente): Para cambiar el componente que se muestra en el contenedor
```java
	JPanel panel2 = new JPanel();
		panelContenedor.add(panel2, "panel2");
		CardLayout c1 = (CardLayout) panelContenedor.getLayout();
				// Dos parametros
				 // Contenedor , la referencia al componete que queremos que se muestre en el contenedor 
				c1.show(panelContenedor, "panel2");
```
- next(contenedor) : Se muestra el  siguiente componente . Si es el ultimo , este metodo cambia  al primero .
```java
CardLayout c1 = (CardLayout) panelContenedor.getLayout();
				// Un parametro
				//  El contenedor
			   c1.next(panelContenedor);
```
- previous(contenedor) : Se muestra el componente anterior 
Si es el primero , este metodo cambia al ultimo
```java
CardLayout c1 = (CardLayout) panelContenedor.getLayout();
				// Un parametro
				//  El contenedor
			   c1.previous(panelContenedor);
```
- first(contenedor) : Se muestra el primer componente del contenedor
```java
	CardLayout c1 = (CardLayout) panelContenedor.getLayout();
				// Un parametro
				//  El contenedor
			   c1.first(panelContenedor);
```
- last(contenedor): Se muestra el ultimo componente del contenedor
```java
CardLayout c1 = (CardLayout) panelContenedor.getLayout();
				// Un parametro
				//  El contenedor
			   c1.last(panelContenedor);
```

## scrollPane
  ### Metodo 1
  ```java
  package prueba;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.border.EmptyBorder;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;
import java.awt.FlowLayout;
import javax.swing.JScrollPane;
import javax.swing.JLabel;

public class Ventana extends JFrame {
	private JTextArea areaTexto;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Ventana frame = new Ventana();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public Ventana() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		JPanel contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		
		
		JLabel label = new JLabel("<html>ehicula in. Nunc quis interdum sem. Aenean sit amet tristique nibh. Nulla facilisi. Duis justo nunc, scelerisque vel ante non, euismod semper nulla. Morbi dictum posuere elit, <br>accumsan fringilla nunc tincidunt in. Nullam dictum tellus ac lectus accumsan viverra.<br> accumsan fringilla nunc tincidunt in. Nullam dictum tellus ac lectus accumsan viverra. <br> accumsan fringilla nunc tincidunt in. Nullam dictum tellus ac lectus accumsan viverra. <br> Otro <br> otro <br> otro <br> otro</html>");
		label.setBounds(12, 123, 390, 117);
		// Se quita el add del contenido que va a contener el scroll
		//contentPane.add(label);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(45, 59, 361, 112);
		scrollPane.setViewportView(label);
		// Añadir el contenedor que tiene el scroll que a su vez contiene el label
		contentPane.add(scrollPane);
		
		
	}
}

  ```

  ### Metodo 2
  ```java
  package prueba;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.border.EmptyBorder;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;
import java.awt.FlowLayout;
import javax.swing.JScrollPane;
import javax.swing.JLabel;

public class Ventana extends JFrame {
	private JTextArea areaTexto;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Ventana frame = new Ventana();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public Ventana() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		JPanel contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		
		
		JLabel label = new JLabel("<html>ehicula in. Nunc quis interdum sem. Aenean sit amet tristique nibh. Nulla facilisi. Duis justo nunc, scelerisque vel ante non, euismod semper nulla. Morbi dictum posuere elit, <br>accumsan fringilla nunc tincidunt in. Nullam dictum tellus ac lectus accumsan viverra.<br> accumsan fringilla nunc tincidunt in. Nullam dictum tellus ac lectus accumsan viverra. <br> accumsan fringilla nunc tincidunt in. Nullam dictum tellus ac lectus accumsan viverra. <br> Otro <br> otro <br> otro <br> otro</html>");
		label.setBounds(12, 123, 390, 117);
		// Se quita el add del contenido que va a contener el scroll
		//contentPane.add(label);
		
		JScrollPane scrollPane = new JScrollPane(label);
		scrollPane.setBounds(45, 59, 361, 112);
	
		// Añadir el contenedor que tiene el scroll que a su vez contiene el label
		contentPane.add(scrollPane);
		
		
	}
}
  ```