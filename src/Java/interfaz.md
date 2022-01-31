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

### input 
```java
String nuevoValor = JOptionPane.showInputDialog(null , "Ingrese el nuevo valor" );
```
:::tip
- Puede tener dos parametros (null , texto)
- Puede tener los 4 parametros (null , texto , titulo , icono)
- Puede tener solo un parametro (el mensaje)

:::