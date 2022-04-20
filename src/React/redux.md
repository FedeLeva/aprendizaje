# Redux
- Es un conjunto de patrones de como debes tratar el estado de tu app.

## Conceptos
### Action
- Una acción es un objeto simple de JavaScript  con 2 propiedades
- Puede pensar en una acción como un evento que describe algo que sucedió en la aplicación .
-	Las acciones(actions) , son los eventos que ocurren en la aplicación según la entrada del usuario y desencadenan actualizaciones en el estado
#### type 
- Es una propiedad del objeto
- Debe ser una cadena que le dé a esta acción un nombre descriptivo, como "todos/todoAdded". Por lo general, escribimos ese tipo de cadena como "domain/eventName", donde la primera parte es la función o categoría a la que pertenece esta acción, y la segunda parte especifica que sucedió.

#### payload
- Es una propiedad del objeto 
- Un objeto de acción puede tener otros campos con información adicional sobre lo que sucedió. Por convención, ponemos esa información en un campo llamado payload.


Un objeto de action típico podría verse así:
```js
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}

```
### Dispatcher
- Ejecuta una acción que actualizara el State
-  Sirve para enviar acciones
- La tienda(store) Redux tiene un método llamado dispatch. La única forma de actualizar el estado es llamar a store.dispatch() y pasarle un objeto de acción . La tienda ejecutará su función de reducción y guardará el nuevo valor de estado dentro, y podemos llamar getState()para recuperar el valor actualizado:
- Puede pensar en enviar acciones como "desencadenar un evento" en la aplicación. Algo sucedió y queremos que la tienda lo sepa. Los reductores actúan como oyentes de eventos, y cuando escuchan una acción que les interesa, actualizan el estado en respuesta.
### Store
- Contiene el state(estado) de la aplicacion que a su vez puede tener varios estados
- Solo puede existir UN store por aplicación.
- El estado actual de la aplicación Redux vive en un objeto llamado store 
- La tienda se crea pasando un reductor y tiene un método llamado getStateque devuelve el valor del estado actual
###  Subscriber
- Es un manejador de eventos para el State
### Reducers
- Son funciones que gestionan los actions
- Un reductor es una función que recibe un state(estado) y un objeto action , decide cómo actualizar el estado si es necesario y devuelve el nuevo estado: (state, action) => newState
- Puede pensar en un reductor como un detector de eventos que maneja los eventos en función del tipo de acción (evento) recibido.
- Los reductores siempre deben seguir unas reglas específicas:
    -	Solo deben calcular el nuevo valor de estado en función de los argumentos State y action
    - No se les permite modificar el existente state. En su lugar, deben realizar actualizaciones inmutables , copiando los valores existentes  en State y realizando cambios en los valores copiados.
    - 	No deben hacer ninguna lógica asíncrona, calcular valores aleatorios o causar otros "efectos secundarios".

:::tip 
Mutable" significa "cambiable". Si algo es "inmutable", nunca se puede cambiar.
:::

- La lógica dentro de las funciones del reductor normalmente sigue la misma serie de pasos:
1.	Verifique si al reductor le importa esta acción
    -	Si es así, haga una copia del estado, actualice la copia con nuevos valores y devuélvala
2.	De lo contrario, devuelve el estado existente sin cambios.

### vista 
- La interfaz de usuario basada en el estado actual
### Estado
- El estado , la fuente de verdad que impulsa nuestra aplicación;
### Selectores 
- Los selectores son funciones que saben cómo extraer información específica de un valor de estado de almacenamiento. A medida que una aplicación crece, esto puede ayudar a evitar repetir la lógica, ya que diferentes partes de la aplicación necesitan leer los mismos datos


### flujo de datos unidireccional
-	El estado describe la condición de la aplicación en un momento específico
-	La interfaz de usuario se representa en función de ese estado
-	Cuando sucede algo (como que un usuario haga clic en un botón), el estado se actualiza en función de lo que ocurrió
-	La interfaz de usuario se vuelve a renderizar en función del nuevo estado
-	Sin embargo, la simplicidad puede colapsar cuando tenemos múltiples componentes que necesitan compartir y usar el mismo estado , especialmente si esos componentes están ubicados en diferentes partes de la aplicación. A veces, esto se puede resolver "elevando el estado" a los componentes principales, pero eso no siempre ayuda.
-	Una forma de resolver esto es extraer el estado compartido de los componentes y colocarlo en una ubicación centralizada fuera del árbol de componentes. Con esto, nuestro árbol de componentes se convierte en una gran "vista", y cualquier componente puede acceder al estado o desencadenar acciones, sin importar dónde se encuentren en el árbol.
-	Al definir y separar los conceptos involucrados en la administración del estado y hacer cumplir las reglas que mantienen la independencia entre las vistas y los estados, le damos a nuestro código más estructura y mantenibilidad.
-	Esta es la idea básica detrás de Redux: un único lugar centralizado para contener el estado global en su aplicación y patrones específicos a seguir al actualizar ese estado para que el código sea predecible.
 
## Sin react
- Creamos ul contador con  reducer y actions
```js
   /*El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado. */
   const contadorReduce = (state, action) => {
    const { type } = action;
    if (type === '@counter/incremented') {
        return state + 1;
    }
    if (type === '@counter/decremented') {
        return state - 1;
    }
    if (type === '@counter/reset') {
        return 0;
    }

};
const actionIncremented = {
    type: '@counter/incremented'
}
const actionDecremented = {
    type: '@counter/decremented'
}
const actionReset = {
    type: '@counter/reset'
}
    // El contador arrranca en 1 y le  suma uno
  console.log(contadorReduce(1 , actionIncremented));
 // El contador arrranca en 1 y le  resta uno
         console.log(contadorReduce(1, actionDecremented));
// el contador arranca en 5 , pero se resetea y vuelve a 0
            console.log(contadorReduce(5, actionReset));

```
- Aunque se suele utilizer con switch
```js
    /*El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado. */
    const contadorReduce = (state, action) => {
        
        switch (action.type) {
             case '@counter/incremented':
                 return state + 1; 
                 case '@counter/decremented':
                 return state - 1; 
                 case '@counter/reset':
                 return 0
 
         }
 
 
     };
     const actionIncremented = {
         type: '@counter/incremented'
     }
     const actionDecremented = {
         type: '@counter/decremented'
     }
     const actionReset = {
         type: '@counter/reset'
     }
         // El contador arrranca en 1 y le  suma uno
       console.log(contadorReduce(1 , actionIncremented));
      // El contador arrranca en 1 y le  resta uno
              console.log(contadorReduce(1, actionDecremented));
    // el contador arranca en 5 , pero se resetea y vuelve a 0
                 console.log(contadorReduce(5, actionReset));

```

##  Store 
- Es un objeto que contiene(almacena) los actions y Reducers como si fueran uno solo.
- Es un objeto que contiene los estados y las diferentes acciones que se puede realizar en el.
- El store se encarga de llamar a las acciones
- Permiten: 
    - Actualizar el estado de la app
    - Leer el estado de la app
    - Contener(Almacenar) el estado de la app.

Lo instalamos 
```powershell
npm install redux
```
package.json 
- Nos aseguramos que estamos trabajando con type:module
```js
{
  "name": "prueba-2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "redux": "^4.1.2"
  }
}

```

```js
import { createStore } from 'redux';
    /*El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado. */
    const contadorReduce = (state, action) => {
        
        switch (action.type) {
             case '@counter/incremented':
                 return state + 1; 
                 case '@counter/decremented':
                 return state - 1; 
                 case '@counter/reset':
                 return 0
 
         }
 
 
     };
     const actionIncremented = {
         type: '@counter/incremented'
     }
     const actionDecremented = {
         type: '@counter/decremented'
     }
     const actionReset = {
         type: '@counter/reset'
     }

   // Creamos un store
   // createStore(reducer)
   // la Store sabe como debe actualizar el Estado ahora
   const store = createStore(contadorReduce);
    
 
    // Le enviamos un evento a la store
     store.dispatch(actionIncremented)
    console.log(store.getState());
     

```
:::warning
Devuelve  Nam ya que nunca le especificamos el valor del estado , nunca lo inicializamos.
:::
```js
import { createStore } from 'redux';
    /*El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado. */
    const contadorReduce = (state = 0, action) => {
        
        switch (action.type) {
             case '@counter/incremented':
                 return state + 1; 
                 case '@counter/decremented':
                 return state - 1; 
                 case '@counter/reset':
                 return 0
 
         }
 
 
     };
     const actionIncremented = {
         type: '@counter/incremented'
     }
     const actionDecremented = {
         type: '@counter/decremented'
     }
     const actionReset = {
         type: '@counter/reset'
     }

   // Creamos un store
   // createStore(reducer)
   // la Store sabe como debe actualizar el Estado ahora
   const store = createStore(contadorReduce);
    
 
    // Le enviamos un evento a la store
    // Suma 1
     store.dispatch(actionIncremented)
     // Devuelve 1
     // Recuperamos el estado
    console.log(store.getState());
     // Le enviamos un evento a la store
     // Suma 1
     store.dispatch(actionIncremented)
     // Devuelve 2
    // Recuperamos el estado
    console.log(store.getState());

```

## Suscribirse
- Cada vez que detecta un cambio , ejecutara una funcion.
```js
import { createStore } from 'redux';
/*El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado. */
const contadorReduce = (state = 0, action) => {
    
    switch (action.type) {
         case '@counter/incremented':
             return state + 1; 
             case '@counter/decremented':
             return state - 1; 
             case '@counter/reset':
             return 0

     }

 };
 const actionIncremented = {
     type: '@counter/incremented'
 }
 const actionDecremented = {
     type: '@counter/decremented'
 }
 const actionReset = {
     type: '@counter/reset'
 }

// Creamos un store
// createStore(reducer)
// la Store sabe como debe actualizar el Estado ahora
const store = createStore(contadorReduce);
//subscribe(callback)
//Por cada cambio del estado , ejecuta el callback
store.subscribe(() => {
    // Recuperamos el estado
   console.log(store.getState());
})

// Le enviamos un evento a la store
// Suma 1
 store.dispatch(actionIncremented)
 // Le enviamos un evento a la store
 // Suma 1
 store.dispatch(actionIncremented)

```

## Migrando a React 

:::warning
Acordate del type:modules en el package.json
:::
```powershell
npm install redux
```
app.jsx
```js
import React from 'react'
import { createStore } from 'redux';
const App = () => {
    const actionIncremented = {
        type: '@counter/incremented'
    }
    const actionDecremented = {
        type: '@counter/decremented'
    }
    const actionReset = {
        type: '@counter/reset'
    }
    /*El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado. */
    const contadorReduce = (state = 0, action) => {
       
        switch (action.type) {
            case '@counter/incremented':
                return state + 1;
            case '@counter/decremented':
                return state - 1;
            case '@counter/reset':
                return 0
            default: 
               return state;

        }

    };

    // Creamos un store
    // createStore(reducer)
    // la Store sabe como debe actualizar el Estado ahora
    const store = createStore(contadorReduce);
    //subscribe(callback)
    //Por cada cambio del estado , ejecuta el callback

    store.subscribe(() => {
        // Recuperamos el estado
        console.log(store.getState());
    })

  

    return (
        <div>
            <h1>{store.getState()}</h1>
        </div>
    )
}

export default App

```
:::tip 
- Si desea que se renderize el DOM lo pones en el index.js y en la suscripción renderizas todo por cada cambio del Estado.
:::
## Extension
- [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)
- Te permite depurar el codigo y viajar en el tiempo 

### Configuracion 
- Al crear el store, hay que poner el siguiente valor como segundo parametro
```js
// Creamos un store
    // createStore(reducer)
    // la Store sabe como debe actualizar el Estado ahora
    const store = createStore(contadorReduce ,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

```

## Empezar con  React-redux 
- [Lo instalas a traves de npm](https://react-redux.js.org/)
- Se utiliza cuando el proyecto es mediano o grande.

### Carpetas a crear en src
#### carpeta actions
#### carpeta types
- index.js va a contener todos los tipos de accion
#### carpeta reducers
- index.js va a contener todos los reducers

reducers/index.js

```js
import {combineReducers} from 'redux';
// junta todos los reducers en uno
// recibe un objeto donde cada propiedad es un reducer
const reducer = combineReducers({})
export default reducer;

```

#### carpeta store 
- index.js 
- Todos los reducers se almacenan  como uno solo que contiene a todos en la store

store/index.js
```js
import {createStore} from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store);
})

export default store;

```

## App.jsx
- Renderizamos el componente Provider de react redux alrededor de toda nuestra app , para compartir el estado.
- El componente tiene un props cuyo valor es el Store (estado único), para compartirlo con toda la app.

:::tip Observacion
Si el archivo se llama index.js no hace falta especificar el archivo , lo toma solo si seleccionas la carpeta
:::

components/Contador.jsx
```js
import React from 'react'

const Contador = () => {
  return (
    <div>Contador</div>
  )
}

export default Contador

```
App.jsx
```js
const App = () => {
  
    
    return (
       <Provider store={store}>
        <div>
           <h1>App</h1>
           <Contador/>
        </div>
        </Provider>
    )
}

```
## Contador 
type/index.js
- Va todos los types (tipo de accion)
```js

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const DECREMENT_5 = "DECREMENT_5";

```

actions/ contadorAction.js
- Son funciones que devuelven un objeto action 
```js
import { DECREMENT, DECREMENT_5, INCREMENT } from "../types";

export const sumar = () => ({type:INCREMENT})
export const restar = () => ({type:DECREMENT})
export const restar_5 = () => ({type:DECREMENT_5 , payload:5})

```

reducers/contadorReducer.js
- Es la funcion reducer junto con el valor inicial
```js
import { DECREMENT, DECREMENT_5, INCREMENT } from "../types";

const initialState = 0;
export default function contadorReducer(state = initialState , action) {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT: 
            return state - 1 ;
        case  DECREMENT_5:
           return state - action.payload;
        default:
            return state;
    }
}

```

reducers/index.js
- Aca juntamos todos los reducers, ya que redux  acepta solo UN ESTADO.
```js
import {combineReducers} from 'redux';
import contadorReducer from './contadorReducer';
// junta todos los reducers en uno
// recibe un objeto donde cada propiedad es un reducer
// el valor de cada propiedad es un reducer
const reducer = combineReducers({ contador: contadorReducer})
export default reducer;

```
:::tip 
El reducer que creamos al juntar todo , lo lee Store
:::

## useSelector
- Es un hook de react-redux
- Es como el useState pero para redux
- useSelector es un Hook que nos permite extraer datos del store de Redux utilizando una función selectora, ésta debe ser pura ya que es potencialmente invocada múltiples veces
- Contiene un callback que recibe el estado que se almacena en la store y devuelve el estado entero o parte de ese.


Contador.jsx
```js
import React from 'react'
import { useSelector } from 'react-redux'
 
const Contador = () => {
    // state es un objeto  , con todas las propiedades  de reducers/index.js
    //el parametro state del callback es el estado(store)
    const state = useSelector(state => state)
  return (
    <div> 
        <h1>Contador</h1>
        <button>+5</button>
        <button>+1</button>
        <button>-1</button>
        {/* state.contador tiene el reducer del contador (fijarte en el index.js) */}
        <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador

```
## hook useDispatch
 - Es un hook de react-redux
 - Sirve para enviar acciones  a la Store
 - Cuando se envia una accion a la Store , el Estado se modifica

  Contador.jsx
 ```js
 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restar, restar_5, sumar } from '../actions/contadorAction';
 
const Contador = () => {
    // state es un objeto  , con todas las propiedades  de reducers/index.js
    //useSelector(funcion);
    //el parametro state del callback es el estado(store)
    const state = useSelector(state => state)
   // useDispatch()
    const dispatch = useDispatch();
  return (
    <div> 
        <h1>Contador</h1>
        <button onClick={() => dispatch(sumar())}>+1</button>
        <button onClick={() => dispatch(restar())}>-1</button>
        <button onClick={() => dispatch(restar_5())}>-5</button>
        {/* state.contador tiene el reducer del contador (fijarte en el index.js) */}
        <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador

 ```