# Try Catch

```java
	try {
				Sistema sis = new Sistema(Integer.parseInt(textCarnet.getText()) , textNombre.getText() , textCarrera.getText() ,
						Integer.parseInt(textIngreso.getText())); 
			
			if (dao.modificar(sis)) {
				JOptionPane.showMessageDialog(null, "Exito");
			} else {
				JOptionPane.showMessageDialog(null, "Error al modificar");
			}
				}catch(Exception e) {
					System.out.println("EXCEPCION TIRADA");
					System.out.print(e.getMessage());
					System.out.println(e.getCause());
					System.out.println(e.getStackTrace());
					
				}
```

##  Multiple excepciones
 - Generalmente va del mas especifico al mas general
```java
	try {
				Sistema sis = new Sistema(Integer.parseInt(textCarnet.getText()) , textNombre.getText() , textCarrera.getText() ,
						Integer.parseInt(textIngreso.getText())); 
			
			if (dao.modificar(sis)) {
				JOptionPane.showMessageDialog(null, "Exito");
			} else {
				JOptionPane.showMessageDialog(null, "Error al modificar");
			}
			
				}
				catch(NumberFormatException e) {
					System.out.println("Mas especifico");
				}
				catch(Exception e) {
					System.out.println("EXCEPCION TIRADA");
					System.out.print(e.getMessage());
					System.out.println(e.getCause());
					System.out.println(e.getStackTrace());
					
				}
```
## new throw and finally 
```java
try {
					throw new Exception("ERROR GENERADO POR EL DESARROLLADOR");
				} catch (Exception e) {
					System.out.println(e.getMessage());
				} finally {
					System.out.println("Se ejecuta al final \n");
				}
```

## Throws y Excepcion Propia
- Throws: Para avisar/especificar que el metodo puede lanzar una excepcion 

Excepcion Propia: 
```java
package vistas;

public class ExcepcionPropia extends Exception {

    ExcepcionPropia(String mensaje) {
    	
    	super(mensaje);
    	System.out.println("Salto mi excepcion Propia")
    }
	
	
}

```

Un metodo que lanza esa excepcion 


```java
	public void  generarError() throws ExcepcionPropia {
		throw new ExcepcionPropia("ERROR ESPECIALIZADO");
	}
```

```java
	try {
					generarError();
				} catch (ExcepcionPropia e1) {
					System.out.println(e1.getMessage());
				}
```