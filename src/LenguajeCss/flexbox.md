# Flexbox

Viene de una __caja flexible__
Requiere de un __conteiner y de items(hijos del conteiner)__

## Ejes
### Main axis : Eje X
Es la direccion horizontal

Si juntamos main-start y main-end obtenemos el main axis
### Cross axis : Eje Y
Es la direccion vertical

Si juntamos el cross-start y el cross-end tenemos el cross axis
![Ejes](https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/30183/image/axes.png) 
<img :src="$withBase('/img/main-start.png')" >
<img :src="$withBase('/img/cross-start.png')" >


## Por defecto
### Cross axis
De aribba para abajo
### Main axis
de Izquierda a derecha
### items
Los hijos se adaptan al contenedor y se posicionan uno alado del otro(main axis). Pero la altura siempre es la misma.

Se modifica el ancho de los flex-item automáticamente para que tengan la misma altura (se ajusta al contenido).

## Propiedad display
Va al contenedor para que se comporte como flexbox

```css
display:flex
```
## Propiedades del contenedor
## flex-direction
Con esta propiedad podemos cambiar la dirección del main axis

Si cambiamos el main axis, automáticamente el cross axis se cambia.

Se aplica al contenedor(afecta a los ítems).

Flex-direction cambia la dirección del main axis.

 Define la dirección de los elementos en el contenedor, y acepta los siguientes valores:

### Valores 
#### row
Los Elementos son colocados en la misma dirección del texto. (de izquierda a derecha

Valor por defecto

Es una fila, los hijos del contenedor van a comportarse como filas(de izquierda a derecha)


#### row-reverse
Elementos son colocados en la dirección opuesta al texto (de derecha a izquierda)
El main axis cambia su dirección pero de manera vertical(no cambian los ejes, sino la dirección). El main axis va a correr de derecha a izquierda.
#### column
 Elementos se colocan de arriba hacia abajo.

Es una columna, los hijos del contenedor van a comportarse como una columna. Con este valor, el main axis corre en el eje Y (de arriba para abajo)
#### column-reverse
Elementos se colocan de abajo hacia arriba.

El Main axis Va de abajo para arriba en el eje Y


:::tip
 Cuando estableces flex-direction a una fila/columna invertida, el inicio y el final también se invierten.  
 Nota que cuando es una columna, justify-content cambia a vertical y align-items a horizontal.
:::

## flex-grap
### valores
#### wrap
Respeta el ancho especifico de los flex-item y los items que sigan alado van a ir para abajo si es necesario

los elementos se envuelven alrededor de líneas adicionales. (Si no cabe en una linea, lo manda abajo)

Los flex-items se comportan como si fueran bloques.

#### wrap-reverse
Respeta el ancho especifico de los flex-item y los ítems que sigan alado van a ir para arriba si es necesario.

 Los elementos se envuelven alrededor de líneas adicionales en reversa. (Si no cabe en una linea, lo manda ariba)
 
 #### no-wrap
 Valor por defecto, no hace nada.
 
Cada elemento se ajusta en una sola línea. (Todos los elementos estan en una linea)

## flex-flow
 es la fusion de flex-direction y flex-wrap

```css
flex-flow: column wrap;
```
## justify-content
Alinea elementos horizontalmente

Sirve para alinear en el main axis

### valores
#### center
Se centran los flex-item

Alinea elementos en el centro del contenedor.

#### space-around
 Muestra elementos con la misma separación alrededor de ellos. Tienen mucha separacion.

Es igual a margin:auto, para centrar.

El margin auto dentro de los flex tambien funciona como un space-between en vertical.

Las cajas del comienzo y final no van a tener los mismos margenes a los costados que el resto.

#### space-between
Muestra elementos con la misma distancia entre ellos.

Le da un margen automatico a todas las cajas.

#### space-evenly

Da un margen especifico para que cada hijo tenga el mismo margen

#### flex-start

Alinea elementos al lado izquierdo del contenedor(comienzo del contenedor)(empieza en el main-start)

#### flex-end
flex-end: Alinea elementos al lado derecho del contenedor (final del contenedor) (empieza en el main-end)

:::tip

flex-start y flex-end pueden cambiar si el flex-direction tiene algun valor inverse
:::

## align-items y align-content

alinea elementos verticalmente 

Sirven para alinear en el cross axis

Align-items: Se utiliza cuando solo hay una línea de ítems.

align-items determina como los elementos en su conjunto están alineados dentro del contenedor.

Align-content : Cuando hay mas de una línea de items.

align-content determina el espacio entre las líneas

Puedes usar align-content para establecer como múltiples líneas están separadas una de otra

 Cuando hay solo una línea, align-content no tiene efecto.
 
Ambas propiedades usan los mismos valores.


### valores

#### flex-start
 Las líneas se posicionan en la parte superior del contenedo (comienzo)
 
 lo pone al comienzo (cross-start)
 #### flex-end
 Las líneas se posicionan en la parte inferior del contenedor.
 
 Lo pone al final (cross-end)

 #### center
 Las líneas se posicionan en el centro (verticalmente hablando) del contenedor.
 
 Se centra verticalmente
 #### space-between
 Las líneas se muestran con la misma distancia entre ellas.
 #### space-around
 Las líneas se muestran con la misma separación alrededor de ellas.
 #### stretch
 Las líneas se estiran para ajustarse al contenedor.
 
 Ocupa todo el alto.(Se estira al cross axis)
 
 #### baseline
 Muestra elementos en la línea base del contenedor
 
 Sirven para el efecto de que a medida que achicamos la pantalla, van subiendo para arriba los item-hijo.


## Propiedades para los  items
## align-self
 Es la alineacion en el cross axis,se aplica a los items que quieras
 
Tienen los mismos valores que align-items y align-content

Los valores son: flex-end , flex-start , stretch , center , baseline.

 Esta propiedad acepta los mismos valores de align-items y sus valores son usados para un elemento específico
### valores

#### flex-start
 Las líneas se posicionan en la parte superior del contenedo (comienzo)
 
 lo pone al comienzo (cross-start)
 #### flex-end
 Las líneas se posicionan en la parte inferior del contenedor.
 
 Lo pone al final (cross-end)

 #### center
 Las líneas se posicionan en el centro (verticalmente hablando) del contenedor.
 
 Se centra verticalmente
 #### space-between
 Las líneas se muestran con la misma distancia entre ellas.
 #### space-around
 Las líneas se muestran con la misma separación alrededor de ellas.
 #### stretch
 Las líneas se estiran para ajustarse al contenedor.
 
 Ocupa todo el alto.(Se estira al cross axis)
 
 #### baseline
 Muestra elementos en la línea base del contenedor
 
 Sirven para el efecto de que a medida que achicamos la pantalla, van subiendo para arriba los item-hijo.

## flex-glow
Agarra el espacio que sobra y lo reparte entre las cajas que están.

- lo podes poner en solo un  flex-item y solo ese item se va a llevar todo el espacio que sobra.
-  lo  podes poner en dos ítems específicos, el espacio que sobra se repartirán en esos dos ítems.
- En cambio si le aumentas el valor de la propiedad flex-grow a un item y al otro lo dejas en 1. Ocupara mas el item que tenga un valor mas alto.


```css
// El espacio sobrante se dividira en tres . 
// Dos se van para la clase green y uno para la clase Orange
.orange {
background:#F50;
flex-grow:1;
}
.green {
background: #050;
align-self: baseline;
flex-grow:2;
}
```

## flex-basis
Es como el width 

:::tip
Tiene mas prioridad que el width
:::
```css
flex-basis: 500px;
```

## flex-shrink

:::warning
Aunque tenga width, los item-flex no van a tener el width especifico(generalmente tiene menos, a menos que se llegue al espacio adecuado del contenedor donde entren todos los ítems con sus width especifico y ahí si todas van a tener al mismo tiempo el width que se especifico) .
Eso pasa porque estamos siendo flexible con el espacio que se saca.

:::

Con esta propiedad especificamos cuanto de espacio va a ceder cada item. (puede aplicarse en general o algún/algunos item-flex en especifico)

Mientras  el  valor sea mas grande, mas espacio va a ceder a las demás.(se achicara para que crezcan las demás)

Basicamente sirve para especificar que caja va a ceder mas espacio mientras no se alcance el width especifico.
:::warning
Se espera a que todos lleguen al width especifico para luego repartir el espacio que sobra (flex-grow).

Se empieza a repartir el espacio sobrante cuando todas las cajas alcancen el espacio asignado.
:::

```css
// ceda el doble que el resto
flex-shrink: 2;
//  Se puede hacer que ceda menos
flex-shrink: .5;
// Que no ceda espacio
flex-shrink: 0;
```

## flex

Es una fusion de  flex-grow , flex-shrink y flex-basis
:::warning
SE NECESITA AL MENOS EL VALOR DE FLEX-GROW PARA FUNCIONAR
:::

```css
// flex-grow:1 flex-shrink: 0 flex-besis: 350px
flex: 1 0 350px
// Tambien funciona:
flex: 1;
```

## order

La propiedad CSS order especifica el orden utilizado para disponer los elementos en su contenedor flexible.

Los elementos estarán dispuestos en orden ascendente(menor a mayor) según el valor de order. 

Los elementos con el mismo valor de order se dispondrán en el orden en el cual aparecen en el código fuente.

Por defecto, los elementos tienen un valor 0, pero nosotros podemos usar esta propiedad para establecerlo a un número entero positivo o negativo.

El que tenga el valor mas grande va a estar en el final del main axis.

```css
order:5;
```

## Margin
El margin dentro de una caja flexible se comporta de una forma diferente.
Por ejemplo el margin-left: auto de un item-flex manda al item a la parte derecha del contenedor.

Margin-top es margin-bottom, margin-left es margin-right , etc.


```css
// centrar verticalmente
margin-top: auto;
margin-bottom: auto;
```

```css
// centrar horizontalmente
margin-right: auto;
margin-left:auto;
```


```css
// centrar horizontalmente y verticalmente
margin-left: auto;
margin-right: auto;
margin-top: auto;
margin-bottom: auto;
// Si lo abrevio quedaria:
margin:auto;
```

## Practica 

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document </title>
<link rel="stylesheet" href="archivocss.css">
<link rel="stylesheet" href="normalize.css">
</head>
<body>
<div class="flex-container">
<form class="form">
<div class="form__section">
<input type="email" class="form__input" placeholder="Escriba su email">
</div>
<div class="form__section">
<input type="text" class="form__input" placeholder="Escriba el asunto">
</div>
<div class="form__section">
<textarea class="form__input" cols="4" rows="1" placeholder="Escriba su Mensaje"> </textarea> </div>
<div class="form__section">
<input type="submit" class="form__input">
</div>
</form>
<div class="form-img">
<div class="img-container">
<div>
<img src="https://i.ya-webdesign.com/images/black-envelope-png-icon-1.png" alt="">
</div>
</div>
</div>
</div>
</body>
</html>
```

```css
body {
background-color: #000;
}
.flex-container {
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
background: #333;
padding:50px;
border: 10px solid #000;
margin: 10px auto;
max-width:1200px;
}
.form {
flex: 1;
text-align: center;
padding-left:30px;
order:5;
}
.form-img {
flex:1;
display: flex;
padding:20px;
min-width: 300px ;
max-width:400px;
order:1;
}
.form-img img {
width: 90%;
}
.img-container {
margin:auto;
}
.form__input {
width:100%;
padding:7px;
margin: 6px 0;
border:none;
border-bottom: 3px solid #1c7;
background: transparent;
color: #fff;
}
.form textarea {
min-height: 140px;
resize:none;
}
.form-img div {
padding:10px;
}
.img-container div {
background-color: #fff;
border-radius: 50%;
text-align: center;
padding:40px;
}
.form__input:focus {
background: linear-gradient(to bottom,transparent,#222);
outline: none;
border-bottom: 3px solid #5f9;
}
.form input[type="submit"] {
background-color: #094;
padding:20px;
border-bottom: none;
}
.form input[type="submit"]:hover {
background-color: #072;
}
.form input[type="submit"] {
background: #094;
}
.form input[type="submit"]:active {
background: linear-gradient(to bottom,#072,#050);
}

```