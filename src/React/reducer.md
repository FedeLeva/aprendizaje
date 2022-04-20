# Reducer

## useReducer
- Nos permite manejar el estado.
- Es como useState
- Es para app medianas/grandes

### Funcion reductora(reducer)
Es una función pura  que devuelve el estado de la App.
:::tip Funciones pura
- Devuelve un valor 
- Toda la lógica es capaz de resolver un solo procesamiento 
- No afecta cosas externas
- No genera efectos secundario
:::
:::warning
No podemos hacer peticiones asíncronas ni usar useEffect
:::
## Problema
### Nuevo Proyecto
App.jsx
```js
import React from 'react'
import Contador from './components/Contador'

const App = () => {
  return (
    <div>
        <h1>App</h1>
        <Contador/>
        
        </div>
  )
}

export default App

```
src/components/Contador.jsx
### useState
```js
import React, { useState } from 'react'

const Contador = () => {
    const [count , setCount] = useState(0);
    const sumar = () => setCount(count + 1);
    const restar = () => setCount(count - 1);
  return (
    <div style={{textAlign: 'center'}}>
        <h2>Contador</h2>
       <nav>
           <button onClick={sumar}>+</button>
           <button onClick={restar}> -</button>
       </nav>
       <h3>{count}</h3>
    </div>
  )
}

export default Contador

```
## useReducer
- Devuelve el estado y el dispatch(seria como el Set de useState )
### useReducer recibe tres parametros
#### 1- La funcion reductora

-	Una función reducer recibe el estado y un objeto llamado acción(action)
- Una funcion reducer retorna el estado (puede estar modificado o no)
-	La acción(action) es un objeto , sus propiedades son:
    - type : tipo de acción 
    - payload : opcional ,  es para enviar valores/datos que van a ser utilizados por la logica del reducer para  modificar el estado
```js
function reducer(state , action) {
    return state
}

```
- La función reductora va a recibir diferentes acciones.
- En un contador ejemplo: sumar y restar
- Dependiendo del tipo de acción, se ejecuta un código determinado
```js
function reducer(state , action) {
    switch (action.type) {
        case "INCREMENT":
            return {contador : state.contador + 1};
        case "DECREMENT":
            return {contador : state.contador - 1};
        default:
            return state;
    }

}

```
#### 2- Valor inicial del estado 
- Se recomienda que sea un objeto 
```js
const initialState = {contador:0};
```
#### 3- Funcion que modifica el valor inicial del estado
- Es opcional 
- Nos permite modificar el estado inicial
- Sirve para modificar o transformar el estado inicial.
- Es una funcion que recibe el estado inicial y devuelve el estado "final"

```js
const init = (initialState) => {
   return  { contador: initialState.contador +100}
}

```

## dispatch
- Sirve para enviarle un objeto action a la función reducer y que esta modifique el estado.

:::tip recordatorio
Un objeto action tiene dos propiedades:
- type: tipo de acción(action)
- payload: opcional , son los datos que podemos enviarle a la funcion reducer
:::
- En base al tipo de acción que le mandamos, la funcion reducer ejecuta un código determinado.
```js
    const sumar = () => dispatch({type:'INCREMENT'})
    const restar = () =>  dispatch({type:'DECREMENT'})

```
Contador.jsx
```js
import React, { useReducer} from 'react'
const initialState = {contador:0};
function reducer(state , action) {
    switch (action.type) {
        case "INCREMENT":
            return {contador : state.contador + 1};
        case "DECREMENT":
            return {contador : state.contador - 1};
        default:
            return state;
    }

}
const Contador = () => {
    // state se sugiere que sea un objeto
     const [state, dispatch] = useReducer(reducer, initialState)
    const sumar = () => dispatch({type:'INCREMENT'})
    const restar = () =>  dispatch({type:'DECREMENT'})
  return (
    <div style={{textAlign: 'center'}}>
        <h2>Contador</h2>
       <nav>
           <button onClick={sumar}>+</button>
           <button onClick={restar}> -</button>
       </nav>
       <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador

```
## Sugerencias

- Los tipos de acciones(type) son constante que nunca van a cambiar.
- La buena practica sugiere que los tipos de acciones(type) estén un objeto
```js
const TYPES = {
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT"
}
function reducer(state , action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return {contador : state.contador + 1};
        case TYPES.DECREMENT:
            return {contador : state.contador - 1};
        default:
            return state;
    }

}
    const sumar = () => dispatch({type:TYPES.INCREMENT})
    const restar = () =>  dispatch({type:TYPES.DECREMENT})

```
## Añadimos mas acciones 
```js
const TYPES = {
    INCREMENT:"INCREMENT",
    INCREMENT_5:"INCREMENT_5",
    DECREMENT:"DECREMENT" ,
    DECREMENT_5:"DECREMENT_5" ,
    RESET:"RESET"
}

```
### Creamos las funciones que le envían un objeto de tipo acción(action) al reducer
```js

    const sumar = () => dispatch({type:TYPES.INCREMENT})
    const restar = () =>  dispatch({type:TYPES.DECREMENT})
     const sumar5 = () =>  dispatch({type:TYPES.INCREMENT_5 , payload:5})
     const restar5 = () =>  dispatch({type:TYPES.DECREMENT_5 ,payload:5})

```
:::tip Observacion
Usamos el payload para enviarle un dato al reducer para que modifique el Estado.
:::
### Tenemos que escribir la lógica (lo que va a ejecutar) de las acciones que agregamos en el reducer.
```js
function reducer(state, action) {
    function reducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + 1 };
        case TYPES.DECREMENT:
            return { contador: state.contador - 1 };
        case TYPES.DECREMENT_5:
            return { contador: state.contador - action.payload };
        case TYPES.INCREMENT_5:
            return { contador: state.contador + action.payload };
        default:
            return state;
    }

}


```
:::tip 
En la lógica utilizamos el dato que le enviamos
:::

Contador.jsx

- Le añadimos el reset tambien 
```js
import React, { useReducer } from 'react'
const initialState = { contador: 0 };

const TYPES = {
    INCREMENT: "INCREMENT",
    INCREMENT_5: "INCREMENT_5",
    DECREMENT: "DECREMENT",
    DECREMENT_5: "DECREMENT_5",
    RESET: "RESET"
}
function reducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + 1 };
        case TYPES.DECREMENT:
            return { contador: state.contador - 1 };
        case TYPES.DECREMENT_5:
            return { contador: state.contador - action.payload };
        case TYPES.INCREMENT_5:
            return { contador: state.contador + action.payload };
        case TYPES.RESET:
             return initialState;
        default:
            return state;
    }

}
const Contador = () => {
    // state se sugiere que sea un objeto
    const [state, dispatch] = useReducer(reducer, initialState)
    const sumar = () => dispatch({ type: TYPES.INCREMENT })
    const restar = () => dispatch({ type: TYPES.DECREMENT })
    const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 })
    const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 })
    const reset = () => dispatch({type:TYPES.RESET})
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Contador</h2>
            <nav>
                <button onClick={reset}>0</button>
                <button onClick={sumar5}>+5</button>
                <button onClick={restar5}>-5</button>
                <button onClick={sumar}>+</button>
                <button onClick={restar}> -</button>
            </nav>
            <h3>{state.contador}</h3>
        </div>
    )
}

export default Contador

```
## Tercer parametro de useReducer
- Sirve para modificar o transformar el estado inicial.
- Es una funcion que recibe el estado inicial.
- Siempre devuelve el estado final 
```js
import React, { useReducer } from 'react'
const initialState = { contador: 0 };
const init = (initialState) => {
   return  { contador: initialState.contador +100}
}
const TYPES = {
    INCREMENT: "INCREMENT",
    INCREMENT_5: "INCREMENT_5",
    DECREMENT: "DECREMENT",
    DECREMENT_5: "DECREMENT_5",
    RESET: "RESET"
}
function reducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + 1 };
        case TYPES.DECREMENT:
            return { contador: state.contador - 1 };
        case TYPES.DECREMENT_5:
            return { contador: state.contador - action.payload };
        case TYPES.INCREMENT_5:
            return { contador: state.contador + action.payload };
        case TYPES.RESET:
             return initialState;
        default:
            return state;
    }

}
const Contador = () => {
    // state se sugiere que sea un objeto
    const [state, dispatch] = useReducer(reducer, initialState , init)

```
## Directorios

### carpeta actions 
- Se debe tener una carpeta para las acciones (actions)
- src/actions


src/actions/ContadorActions.js

- Tendría un objeto con los tipos de acciones.

```js
export const TYPES = {
    INCREMENT: "INCREMENT",
    INCREMENT_5: "INCREMENT_5",
    DECREMENT: "DECREMENT",
    DECREMENT_5: "DECREMENT_5",
    RESET: "RESET"
}

```
### carpeta reducers
- Se debe tener una carpeta para los reducers 
- src/reducers
- Se puede  crear una carpeta por cada reducer y adentro de cada una tener un index.js

src/reducers/contadorReducer.js

- Debe tener la función reducer, el valor inicial del estado y la función que modifica el valor inicial.
- Básicamente este archivo contiene los tres parámetros de UseReducer.

```js
import { TYPES } from "../actions/contadorActions";

export const contadorInitialState = { contador: 0 };
export const contadorInit = (initialState) => {
   return  { contador: initialState.contador +100}
}

export function contadorReducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + 1 };
        case TYPES.DECREMENT:
            return { contador: state.contador - 1 };
        case TYPES.DECREMENT_5:
            return { contador: state.contador - action.payload };
        case TYPES.INCREMENT_5:
            return { contador: state.contador + action.payload };
        case TYPES.RESET:
             return contadorInitialState;
        default:
            return state;
    }

}

```
Contador.jsx
```js
import React, { useReducer } from 'react'
import { TYPES } from '../actions/contadorActions'
import { contadorInit, contadorInitialState, contadorReducer } from '../reducers/contadorReducer'

const Contador = () => {
    const [state, dispatch] = useReducer(contadorReducer, contadorInitialState , contadorInit)
    const sumar = () => dispatch({ type: TYPES.INCREMENT })
    const restar = () => dispatch({ type: TYPES.DECREMENT })
    const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 })
    const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 })
    const reset = () => dispatch({type:TYPES.RESET})
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Contador</h2>
            <nav>
                <button onClick={reset}>0</button>
                <button onClick={sumar5}>+5</button>
                <button onClick={restar5}>-5</button>
                <button onClick={sumar}>+</button>
                <button onClick={restar}> -</button>
            </nav>
            <h3>{state.contador}</h3>
        </div>
    )
}

export default Contador

```