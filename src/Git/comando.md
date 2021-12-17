#  CMD VS  POWERSHELL
## CMD
- Mas antiguo
- Mas limitado
- Reconoce los espacios en blancos
## POWERSHELL
- Tiene mas comandos que CMD
- Es para uso avanzado
- No reconoce los espacios en blancos
- Algunos comandos que reconoce son MV , PWD , CLEAR y NI 

## Ambos
 - No distinguen  mayuscula y minuscula 
 Por ejemplo : OK == ok

 ## Comandos
``` powershell
CD
```
Sirve para moverte entre carpetas

Trucos:
- Arrastrar una carpeta a la consola para saber la ubicacion 
- En el explorador de archivo , escribis cmd en la barra de navegacion y se abrira una consola con la ubicacion.
``` powershell
CD ..
```
Retrocedes un nivel de tu ubicacion actual

::: tip
 Evita poner espacios en blanco en archivos/carpetas , en caso contrario para especificarlo usa las comillas doble("")
:::
``` powershell
DIR
```
Muestra los directorios
``` powershell
CLS
```
limpia
``` powershell
MKDIR / MD
```
Creas carpeta

Podes crear muchas carpetas en una linea , separando las carpetas con espacios
``` powershell
MOVE   ubicacion_archivo   ubicacion_destino
```
Sirve para mover los archivos a otras carpetas (cortar - pegar)
``` powershell
CTRL + C
```
Sirve para cancelar las ejecuciones
::: tip
  Podes usar ambas y configurarlas en visual studio code (En la opcion Configure Terminal Setting / Configurar valores de terminal)
:::

