# Grid
Es un valor de la propiedad display
Nos permite trabajar en el Layout(maquetación) a través de grilla(grid)
## Grilla
![](https://blog.ida.cl/wp-content/uploads/sites/5/2018/06/Picture1.png)
### Grid container
Es todo el contenedor 

Cuando le damos a display:grid se comporta como bloque pero lo que cambia es la estructura, lo de adentro es lo que cambia.

### Grid item
Cada elemento que forma parte del container es un item.

Son los hijos directos del Grid container.

### Grid Cell
Es como un grid item.

Es cada celda del grid(grilla)

### Grid Tracks (column y row)

Row = fila horizontal

Column = fila vertical

Filas + columnas = grid tracks

TODO EL CONTENIDO ESTA DIVIDIDO POR GRILLAS , EN UNA CELDA DE UNA GRILLA PUEDE HABER MAS DE UN ELEMENTO

### Grid Area
Son áreas que seleccionamos y a su vez son consecutivas  (no pueden contener celdas  en diagonal ni tener cruces)

Las áreas las definimos nosotros.

Deben ocupar más de una celda.

Lo rojo es un area

![grid](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXMAAACICAMAAAAiRvvOAAABNVBMVEUezxb/QgD+//wTzgf///8AywD5/vfT8tFb2lsVzggAzgD/NQD/Thr/rKn6385h4Wlr2Wi17bKt6Kps3Wgx0itm2mEo0CL2ya7/ayv/dXJX2ldf2lj2///W8sH///eG4oX//+/c9drL88e/7r6T5o891To300/N9+37/eRO1krF9NqD3FHL9OPd9cq7893T8Kaz78Hw9cCO6cTM7q1g3HHx+tN/5bE50WQ8zRSL4pO99Ojv/exJ1Tii8d3p/fZ03F+h6ric4WHL64954H9k1htu4J1m10UAzEm87aQj2HGh4EsA017X991220O25ZJ23IeT6Kye55//VSj/d2X/aVP9zsr/hYD+p5lf34Se433/Yxz/lFn/XUT/YTr9yreM3WNe1Tz++tJ/1x3S+vzn87Jn3JTV8KPyv64KAAAF4ElEQVR4nO2de1saRxSHx50ZZEYbg7usLVmV5aYYNFgUL1g0F41JTSRN02Ibq01iv/9HKIQKy9J/8zs8z573Cxzn3eHMxTMzwmHQCMdJkUEWmrLNfeep1VyahNxqgSpysUQUOZ0dOH9kDQk2m9E0kfWiS9VmMXCeloIEk81Ymsh20SVqs/DZORx2joed42HneNg5HnaOZ5qcG2Tk6XFurOdbYNsjzrVXlkALY86N8HGRY85NZU2p9SpO+si53VBq5TFO+ng/r20CU1ysn289cetqG9fyoXP9Y6O6E+xqWOSoc9tUy1TOzV4opa2pfVj4oXPvQBt9uE7iXO611sici/KREfqndVz4UW6RwlbaJLnF+O3jQzrn/b/Aazdw8SNjqH8S5J/iIo+c2/ozn7Cf99DNXVxqiTg3lecngfMCFnno3J6G2j9cxmW1Ceeykj8Dztii83OrO+oprOn3zs3L9nnpoB0eHKEix53LSvtMWw8WPpLPjZCv2q9h33vo/OeLMAyDVPgGNkMed95T/tZ9eLkMCz9yvnPW6+frBPncaE2ZW0y5plKOo3DTh6Hzcm2l0Qnf0KyJjEc3hppKabUPLvzQuVx4965kqdb+/vNj4IZHbO0vbQ+SMdT0AuPixtf+Erm/Nk37ilCmZ18RDTvHw87xsHM87BwPO8fDzvEk2XlOE/Eooy0JenGBJnCPQc1/OEtE6DxIHuprP3d9jwTfXZqZTxq/3Nf806Q2m16am0ka88RjKDtn5wjYOR52joed42HneNg5ngnnUkrgXJ2d9/AfutkDYF1uxPnc+3lKEzhizuWpUipP4vzXD+p7UhUwYs5teFOtlmHKo85/+z2ZzuWds3kskPUtI+dzPyTTuThxlNo8Ap4niuTzpDoXolJTy8DzROy8h/QPkeeJ2PlX6TsKd9qBnfcLNYXs5mHK2bkw5cKV9taeAc9wjc1b/kjGmnTceSVQ4ewV8MhBxPn7DytLfyZCeiy3VLPuEfJfoxHnH6+vP16TukARG0MN8poDwXtcFLBzdg6BneNh53jYOR52joed45m/rxGVJCS5RrTkPiTBLSXWuVPIEFH8K6nOUzmqEya5xPZzHkORsHM87BwPO8fDzvGwczzsHA87x/M/NUUGeP86O+9L0N1C4Qx3pyU7F+blRuoGd3UrO++hL9Qt9D0Ldm5P1FV5n6aOKzmMO/c/O2Gr9Zam/jwxxOoVVeuscqie4u4oZud76omWadWAZRd2bsrqizaVAHcZODsXYq1lbCXAFaCzcyG7qSvvQL3gNdG3JH4m9/KitQt8RISd96VrrXlN9G3hfUU87BwPO8fDzvGwczzsHA87x8PO8UxBXW7imBnUnxcXiSg++C55/HfOIuuSkC0V0gsk5OolmsA9iM8TZTOaJrJedKnaLPjdFjj8Vg4edo6HneNh53jYOR52jmeanCPfwR53Do0cd26/PrwH/L//yLn2qgbY5yPOpV8VyF9b7K35TtjnBlevOHRuOxcX4THua4+cy25rNrwBSvfHa+eCYiZTVLe4mqJ75/I0/0KfAG9HHjqXr9SN7qwAP/eYc9m9slY3t4H3n98711t/79uu+gSLPHSut5Q1XrCNq7ofzy39J1v8tXPgfbnDft5UDb2Vx33tkfM1Rwv9GfgTm5i3yJ3UY4ox1G6o4Ms+iXO1L3vOcReQTzpvtpDvWYyc36WcdRf3Cxvl81PVOFoIVnCfe8K5/gy8ijuSW16p40uVx3W20bzFdILWhvpClc/7hxUVMLVEx9BtY+/UW9j3js7PhW06uPnxhHPZ3MUNJlHnG9tGvmyTODd6L2gAl6Jx516tAb3/fJhbuuq8WifJLdLrOP8Az2fGnZty/RNy82E0hsp0ffb8lmAdKrvh+SPodtNEPkdW/I/tt0itkSewI/0cGldM174iFN7LxcPO8bBzPOwcDzvHw87xTIFz7Ax1SJKdVzURuQxV5MU0VWQ9qPkPZ4kIW1SRW2Rtnh04VwyQgXMGDDvH8y//p5lDovWe0QAAAABJRU5ErkJggg==)

### Grid Line

Column line = Las lineas que son lados para definir las columnas ( lineas verticales).

Row line = las líneas que son lados para definir las filas. (lineas horizontales).

![grid](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3qKws_jI08BlX-5XdcPOYg3WI-vZd53TBw&usqp=CAU)

## Por defecto
Por defecto cuando creamos una grilla, solo se crea una columna. Y cada item es una fila.

## Grid-template-rows
grid-template-rows funciona exactamente igual que grid-template-columns.

```css
grid-template-rows: 12.5px 12.5px 12.5px 12.5px 1fr
```
Sirve para añadir filas (horizontal)

Dar por medida: (de alto)

La medida que le das es la altura

```css
/* La cantidad de medidas es la cantidad de filas */
grid-template-rows: 150px 150px 150px ;
```
## Grid-template-columns
Sirve para añadir columnas (vertical)

Dar por medida (De ancho)

La medida que le das es el ancho

```css
/* La cantidad de medidas es la cantidad de columnas */
grid-template-columns: 150px 150px 150px ;
```

:::tip
grid-template-columns  al igual que grid-template-rows no acepta solo valores porcentuales, sino también otras unidades como pixels y ems. Incluso puedes mezclar diferentes unidades a la vez.
:::
 ```css
 
grid-template-columns: 100px 3em 40%;

 ```
### Practica

has tenido un jardín formado por cinco columnas, cada una ocupando el 20% de la anchura total, y cinco filas, cada una ocupando el 20% de la altura total.

Esto ha sido establecido con las propiedades grid-template-columns: 20% 20% 20% 20% 20%; y grid-template-rows: 20% 20% 20% 20% 20%;.
 Cada propiedad tiene cinco valores que crean cinco columnas, cada una establecida al 20% de la anchura total del jardín.

## Grid-Gap: fila columna
Es el margen de las filas y las columnas (shorthand)
```css
grid-gap:10px;
```
:::warning
LOS MARGENES NO SE APLICA EN LOS BORDE DEL CONTENEDOR
:::

## Propiedades para Grid-Item
## grid-column-start
Para especificar en que columna(column line) empieza el item.
```css
/* el 3er borde vertical contando desde la izquierda de la cuadrícula. */
grid-column-start: 3; 
```
:::tip
Cuando grid-column-start se usa solo, la expansión por defecto del elemento en la cuadrícula será de exactamente una columna. 
No obstante, puedes extender el elemento varias columnas añadiendo la propiedad grid-column-end.
:::

## grid-column-end
Para especificar en que columna(column line) termina el item.
:::tip
Al emparejar grid-column-start y grid-column-end, podrías asumir que el valor final tiene que ser mayor que el valor inicial. ¡Pero no es el caso!
:::

:::tip
 puedes dar a grid-column-start y grid-column-end valores negativos. Por ejemplo, puedes establecerlos a -1 para indicar la primera línea comenzando por la derecha.
 :::

## palabra span
En lugar de definir un elemento en la cuadrícula basado en la posicion inicial y final,
 puedes definirlo basado en la longitud de columnas deseada usando la palabra clave span. Ten presente que span solo funciona con valores positivos.
 ```css
 grid-column-end: span 2;
 ```
 También puedes usar la palabra clave span con grid-column-start para establecer la anchura del elemento en relación a la posición final.
  ```css
 grid-column-start : span 3
 ```
:::tip
Se puede utilizar tanto para las columnas como las filas , comienzo o final.

:::
## Grid-column
Escribir ambos grid-column-start y grid-column-end cada vez puede resultar cansado. Afortunadamente, 
grid-column es una propiedad abreviada que acepta ambos valores a la vez, separados por una barra oblicua.
```css
/* establecerá el comienzo del elemento
 de la cuadrícula en la 2ª línea vertical de esta, y su final en la 4ª línea vertical. */
grid-column: 2 / 4; 
```
 La palabra clave span también funciona con esta propiedad abreviada así que ¡dale una oportunidad!
 ```css
 grid-column: 3 span / 5
 ```
Que el item ocupe mas espacio (de forma ancha)(column line)

Como valor tiene los numeros(column line) va a ocupar
```css
/*grid-column: numeroinicio/numerofinal*/
grid-column: 1/3;
```
:::warning
Esto generalmente genera un descontrol. Ya que no elimina la celda ocupada por un item al usarlo para crecer , se crea otra celda que va a ser ocupada por ese item.
Si ponen los dos con la mismos valores obviamente van a ir uno debajo del otro porque van a querer ocupar el mismo espacio.

:::
:::tip
Es un shorthand de grid-column-start (como valor tiene el numero de inicio) y grid-column-end (como valor tiene el numerofinal)
:::
```css

/*Abarca solo un elemento */
grid-column: 2;
/* Abarca mas de un elemento: */
grid-column: 2 / span 4;
```
:::tip
Podes usar la palabra span para especificar cuantas columnas va a ocupar
:::
```css
/*Arranca en la linea 1 y ocupa 3 columnas */
grid-column: 1/span 3;

```
## grid-row-start
Una de las cosas que diferencia las cuadrículas de CSS de flexbox es que puedes posicionar los elementos fácilmente en 2 dimensiones:
 columnas y filas. grid-row-start funciona de manera semejante a grid-column-start pero a lo largo del eje vertical.
 ```css
 grid-row-start:3;
 ```

## Grid-row
Que el item ocupe mas espacio(la altura) (row line)

Como valor tiene los numeros(row line) que va a ocupar
```css
/*grid-row: numeroinicio/numerofinal */
grid-row: 1/3;
```
:::warning
Esto generalmente genera un descontrol. Ya que no elimina la celda ocupada por un item al usarlo para crecer, se crea otra celda que va a ser ocupada por ese item.

:::
:::tip
Es un shorthand de grid-row-start (como valor tiene el numero de inicio) y grid-row-end (como valor tiene el numerofinal)
:::
```css
grid-row: 3/ span 3
```
```css

/*Abarca solo un elemento */
grid-row: 5;
/* Abarca mas de un elemento: */
grid-row:  1 / span 5;
```
:::tip
Podes usar la palabra span para especificar cuantas filas va a ocupar
:::
```css
/*Arranca en la línea 1 y ocupa 3 filas */
grid-row: 1/span 3;
```

## Grid-template
grid-template es una propiedad abreviada que combina grid-template-rows y grid-template-columns.

Por ejemplo, grid-template: 50% 50% / 200px; creará una cuadrícula con dos filas que ocuparán el 50% del alto cada una, y
 una columna que será 200 píxeles de ancho.
 
 ```css
 grid-template: 60% / 200px
grid-template: 1fr 50px / 20% 80% 
 ```



## fr
CSS Grid también introduce una nueva medida, la fracción fr. Cada unidad fr asigna una porción del espacio disponible.

 Por ejemplo, si dos elementos están establecidos a 1fr y 3fr respectivamente el espacio se divide en 4 porciones iguales; 
el primer elemento ocupa 1/4 del espacio y el segundo elemento los 3/4 restantes.

```css
grid-template-columns: 1fr 5fr
```

Cuando algunas columnas son establecidas en píxeles, porcentajes o ems, cualquier otra columna establecida con fr dividirá el espacio restante.
```css
grid-template-columns: 50px 1fr 1fr 1fr 50px
grid-template-columns: 75px 3fr 2fr

```

Es como flex-grow.

El espacio que sobra se divide y se reparten entre los que tiene esa unidad

Se suele usar mucho en la columna(ancho)

EL FR NO TIENE DIMENSIONES(MEDIDA MINIMA)


## repeat()
Especificar un puñado de columnas con la misma anchura puede ser aburrido. Afortunadamente hay una función repeat que te ayudará con eso.

 ```css
 /* previamente hemos definido cinco columnas al 20% de 
 anchura mediante grid-template-columns: 20% 20% 20% 20% 20%;. 
Esto puedes simplificarse */ 
 grid-template-columns: repeat(5, 20%);
 ```

Tanto en  grid-template-columns y grid-template-rows podemos usar la funcion repeat()
```css
grid-template-columns:repeat(8,12.5%);

```

### Parametros
1. Cantidad de columnas/filas
2. Tamaño
```css
/*grid-template-columns: 150px 150px 150px 150px ; */
grid-template-columns: repeat(4,150px);
```
```css
grid-template-columns: repeat(3,100px 100px) 1fr;
```
```css
grid-template-rows: repeat(3,150px);
```

## Grid implicito y Grid explicito 

Cuando tenemos un item fuera de la grilla que creamos , se convierte en un item del grid implicito. 

:::tip
Por defecto los ítems que forman parte del grid implicito se crean como filas. (solo pueden ser modificados con el grid-auto-rows)
:::
## Propiedades para el grid implicito (se aplica en el container)

## Grid-auto-rows
Funciona igual que el template( grid-template-rows) , solamente que es para progamar el grid implicito
:::warning
NO PUEDEN USAR EL REPEAT
:::

```css
grid-auto-rows: 200px 200px 200px;
/* Abreviando*/
grid-auto-rows: 200px;
```

:::warning
Porque no estamos definiendo la cantidad de filas a crear, estamos especificando cuanto va a medir la fila que se va a crear.
:::

## Grid-auto-columns
Funciona igual que el template( grid-template-columns) , solamente que es para progamar el grid implicito.
:::warning
NO PUEDEN USAR EL REPEAT
:::

```css
grid-auto-columns: 200px 200px 200px;
/* Abreviando*/
grid-auto-columns: 200px;
```

:::warning
Porque no estamos definiendo la cantidad de columnas a crear, estamos especificando cuanto va a medir la columna que se va a crear.
:::

## Grid-auto-flow

### Valores
#### column
El valor column es para que se empieze a comportar como columnas los ítems del grid implicito.

Ahora se puede modificar con grid-auto-column

#### row
el valor row es para que se empieze a comportar como fila los ítems del grid implicito(por defecto).

Ahora se puede modificar con grid-auto-row

#### dense
Con el valor dense, se rellena los campos que quedan vacíos. Detecta el item mas cercano que entre y te lo pone.

```css
grid-auto-flow: column;
grid-auto-flow: row;
grid-auto-flow: dense;
```

## Grid Dinamico
 Por defecto en Grid , el ancho de una celda va a ser igual a la primera palabra que va a contener.

Si ve un espacio te tira las demás palabras abajo

Es el contenido minimo.

##  Min-content
Es el contenido minimo (el tamaño mas chico)



```css
grid-template-columns: repeat(3,min-content);
```

##  Max-content
Es el máximo contenido (el tamaño mas grande)


```css
grid-template-columns: repeat(3,max-content);
``` 

## mixmax()
Para especificar lo minimo y lo máximo que va a medir la columna/fila.
### Parametros
1. Medida Minima
2. Medida maxima

```css
grid-template-columns: repeat(3,minmax(100px,300px));
``` 

```css
grid-template-columns: repeat(3,minmax(min-content,200px));
``` 

```css
grid-template-columns: repeat(3,minmax(100px,1fr));
``` 

## Auto-Fill
Es para Generar la cantidad de columnas que pueda que cumpla con esas propiedades (min del minmax).

Se puede aplicar a las filas
```css
grid-template-columns: repeat(auto-fill,minmax(100px,150px));
``` 

## Auto-fit
Cuando no tiene mas elementos(item)(estan todos en la grilla) los escala(fr)
```css
grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
``` 

## Alineacion

La alineación es dentro de cada celda , cada celda seria un flex-container.

Aca hay tres tipos de alineación:

La alineación de todos los ítems: Se aplica al grid-container

La alineación de columnas y filas : Se aplica al grid-container

La alineación partícular por elemento individual : Se aplica al item

## Propiedades del grid container
## Alinear todos los items
## Justify-items
Para alinear horizontalmente
### Valores
#### center
Cada item va a estar centrado horizontalmente de su propia celda

#### start
Cada item va a estar al comienzo de su propia celda


#### end
Cada item va a estar al final de su propia celda

#### stretch
Ocupa todo el ancho

```css
justify-items: center;
/* --------------- */
justify-items: start; 
/*Es lo mismo que */
justify-items: flex-start;
/* --------------- */
justify-items: end;
/*Es lo mismo que */
justify-items: flex-end;
/* --------------- */
justify-items: stretch;
``` 

## Align-item
Para alinear verticalmente
### Valores
#### center
Para centrar verticalmente cada item de su propia celda
#### end o flex-end
Para estar al final(verticalmente) de su propia celda
#### stretch
Ocupa todo el alto
#### start o flex-start
Para estar al comienzo(verticalmente) de su propia celda

```css
align-items: center;
align-items: flex-end;
align-items: stretch;
``` 
## Alinear columnas y filas

:::tip
Se trabaja cuando el grid no es flexible. (no ocupa todo)
:::

## Justify-Content
Es para alinear las columnas (toma efecto cuando las columnas no son flexibles, hay espacio para más columnas)


alineas horizontalmente

Tienen los mismos valores Center(medio) – start(principio), end (final)

```css
justify-content: center;
justify-content: end;
justify-content: start;
``` 
## Align-content

Es para alinear las filas (toma efecto cuando las filas no son flexibles, hay espacio para mas filas)

 alineas verticalmente

Tiene los mismos valores: center(medio) – start(principio) – end(final)

```css
align-content: center;
align-content: start;
align-content: end;
``` 
:::warning
LAS TRANSICIONES NO FUNCIONAN MUY BIEN EN GRID
:::
## Mas valores de JUSTIFY-CONTENT Y ALIGN-CONTENT
Justify-content y align-content tienen space-around , space-between y space-evenly
```css
justify-content: space-around;
justify-content: space-between;
justify-content: space-evenly;
align-content: space-evenly;
``` 
## alineación partícular

## Align-self
Trabajamos el eje vertical

Tiene los mismos valores que flexbox

Los valores son: flex-end , flex-start , stretch , center , baseline , etc.


```css
align-self: start;
``` 
## Justify-self
Trabajamos el eje horizontal

Tiene los mismos valores que flexbox (end,start,center,etc)
```css
justify-self: start;
``` 

## Place-self
Tiene como valor align-self y justify-self (shorthand)
```css
place-self: start start;
``` 
:::tip
stretch viene como valor por defecto de justify-self y align-self
:::

## Propiedad order
Igual que flexbox

El valor mas alto se va al ultimo lugar.

Si los elementos de la cuadrícula no se sitúan explícitamente con grid-area, grid-column, grid-row, etc.,
 se sitúan automáticamente de acuerdo al orden en el código fuente. Puedes sobrescribir esto usando la propiedad order,
 que es una de las ventajas de la cuadrícula frente al diseño basado en tablas.
El valor mas ALTO , va ULTIMO.

```css
order:1
order:-1
```

## Practica 

:::warning
No va a quedar totalmente responsive debido a que el fr no tiene una medida minima
:::

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<link rel="stylesheet" href="archivocss.css">
</head>
<body>
<div class="grid-container">
<img src="https://i.blogs.es/67ac5a/wallpaper-dinamicos-macos/1366_521.jpg" alt="">
<img src="https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg" alt="">
<img src="https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg" alt="">
<img src="https://i.pinimg.com/originals/f7/ae/e8/f7aee8753832af613b63e51d5f07011a.jpg" alt="">
<img src="https://isurusgaming.com/wp-content/uploads/2020/01/Wallpaper-01-1920x1080.jpg" alt="">
<img src="https://i.vimeocdn.com/video/810883315_640x360.jpg" alt="">
<img src="https://images-na.ssl-images-amazon.com/images/I/51NqbdDrbOL.png" alt="">
<img src="https://wallpapercave.com/wp/wp7864479.png" alt="">
<img src="https://www.solofondos.com/wp-content/uploads/2016/03/outrun-vaporwave-hd-wallpaper-preview.jpg" alt="">
<img src="https://cdn.wallpaperhub.app/cloudcache/1/b/5/8/e/f/1b58ef6e3d36a42e01992accf5c52d6eea244353.jpg" alt="">
</div>
</body>
</html>
```
```css
body {
background: radial-gradient(circle,#fff,#bbb);
}
.grid-container {
display: grid;
grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
grid-auto-rows: 100px;
grid-gap: 10px;
}
img {
width:100%;
height:100%;
object-fit:cover;
}
img:first-child {
grid-column:1/3;
grid-row:1/3;
}
img:nth-child(6) {
grid-column:2/4;
grid-row:3/5;
}
img:nth-child(10) {
grid-row: span 3
}

```



 ## Grid Area
Un área es un conjunto consecutivo de celdas. (se puede en diagonal).

Minimo debe tener dos celdas para un área.

## Grid-template-areas
Es para crear un área, a dicha área se le asigna un nombre

Se usa en el container
```css
 /*El área es una fila de 3 columnas. Esa área es llamada header*/
grid-template-areas: "header header header" ;
 ```
 
 ```css
 /*Se crea otra fila que contenga 3 columnas*/
 grid-template-areas: "header header header" "aside main main";
 ```
 
  ```css
 /*4 filas de 3 columnas:*/
 grid-template-areas:
"header header header"
"aside main main"
"aside main main"
"footer footer footer";
 ```
 
 ## Grid-Area
 Es para asignar el área a un elemento del grid(item)
 
Se aplica en el item
  ```css
grid-area: footer;
grid-area: header;
grid-area: aside;
grid-area:main;
 ```
 ### Lugo de crear y asignar las areas:
 
 Hay que asignar el tamaño a las filas con grid-template-rows
 
Ejemplo: Basado en el ejemplo anterior:
  ```css
grid-template-rows: 1fr 1fr 1fr 1fr;  
  ```

 ### grid-area tambien  admite cuatro valores separados por barras oblicuas: 
grid-row-start, grid-column-start, grid-row-end, seguido de grid-column-end.

```css
 grid-area: 1 / 1 / 3 / 6;
grid-area: 1/2/4/6;
/*Se puede usar span*/
grid-area:2/3/span 3 / span 3
```



  ## Practica 2
  :::warning
Eso es un ejemplo dinamico aunque lo ideal seria darle a la fila del header y al footer medidas fijas.
  :::
  ```html
  <div class="grid-container">
<div class="grid-item grid-header">Header</div>
<div class="grid-item grid-main">Main</div>
<div class="grid-item grid-aside">Aside</div>
<div class="grid-item grid-footer">Footer</div>
</div>
  ```

  ```css
  .grid-container {
background: #444;
margin:10px;
display: grid;
grid-template-areas: "header header header"
"aside main main"
"aside main main"
"aside main main"
"aside main main"
"aside main main"
"aside main main"
"footer footer footer";
grid-template-rows: repeat(auto-fill,1fr);
height:92vh;
border:5px solid #000;
}
.grid-header {
background-color: #f96 ;
grid-area: header;
}
.grid-main {
background-color: #96f;
grid-area:main;
}
.grid-aside {
background-color: #888;
grid-area: aside;
}
.grid-footer {
background-color: #9f9;
grid-area: footer;
}
  ```

  ## Nombrar a las lineas

 ```css
 grid-template-rows:
[primera-line]
200px
[segunda-line]
200px
[tercera-line]
200px
[cuarta-line];
  ```
  
 Luego para definir el tamaño de una celda
  ```css
  grid-row: primera-line / tercera-line; = 1/3
   ```
 
 Tambien se puede hacer con columnas
 
   ```css
   grid-template-columns:
[comienzo]
200px
200px
200px
[fin];
/* 1/4 */
grid-column: 1/fin; 
```


## Grid-template
Abrevia grid-row , grid-columns y tambien areas.

Sintaxis:
```css
grid-template: row / columns
grid-template: area unidad
```
Ejemplos:
```css
grid-template: 100px 100px 100px / 100px 100px 100px;

```

```css
/* La medida es de la fila */
grid-template: "a a a" 100px
"b b b" 100px
"c c c" 100px

```


## Propiedad Grid
:::danger
No usar
Es un shorthand de todas las propiedades que se aplica al container
:::