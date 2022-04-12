# Consumir API
## Empezamos el proyecto 
```powershell
npx create-react-app consumir-api
cd consumir-api
```
1. Empezamos el proyecto
2. Borramos toda los archivos de la carpeta src excepto el index.js
3. Ponemos Bootstrap en el index.html
4. Creamos App.jsx

### API A UTILIZAR
- [link](https://rickandmortyapi.com/)
- [ruta](https://rickandmortyapi.com/api/)

## useEffect
- [link](https://es.reactjs.org/docs/hooks-effect.html)
-	El Hook de efecto te permite llevar a cabo efectos secundarios en componentes 
-	Peticiones de datos, suscripciones y actualizaciones del DOM en componentes de React serían ejemplos de efectos secundarios.
-	Sirven para estar pendiente de cierto elemento del  componente y que cuando cambie , ejecute algo.

:::tip 
Si estás familiarizado con el ciclo de vida de las clases de React y sus métodos, el Hook useEffect equivale a componentDidMount, componentDidUpdate y componentWillUnmount combinados.
:::
### Efectos sin saneamiento
-	En ciertas ocasiones, queremos ejecutar código adicional después de que React haya renderizado el DOM. Peticiones de red, mutaciones del DOM y registros, son ejemplos comunes de efectos que no requieren una acción de saneamiento.
-	Decimos esto porque podemos ejecutarlos y olvidarnos de ellos inmediatamente. 

App.jsx
```js
import React, { useEffect, useState } from 'react'

const App = () => {
    const [contador , setContador] = useState(0);
  // useEffect(callback)
    useEffect(() => { console.log("renderizado")});
  return (
    <div>
        <h1>App Rick and Morty</h1>
        <h3>{contador}</h3>
        <button onClick={()=> {setContador(contador+1)}}>Aumentar</button>
    </div>
  )
}

export default App

```
:::tip Observacion
 useEffect  ejecuta el callback cuando:

- se renderiza el componente por primera vez.
 -   ocurre un cambio en el componente.
:::
### ¿Qué hace useEffect?
-	Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse.
-	React recordará la función que le hemos pasado(callback) (nos referiremos a ella como nuestro “efecto”), y la llamará más tarde después de actualizar el DOM.
-	¿Se ejecuta useEffect(el callback) después de cada renderizado? ¡Sí! Por defecto se ejecuta después del primer renderizado y después de cada actualización

### Consejo: Omite efectos para optimizar el rendimiento
-	En algunos casos, sanear o aplicar el efecto después de cada renderizado (de cada actualización del componente) puede crear problemas de rendimiento.
-	Puedes indicarle a React que omita aplicar un efecto si ciertos valores no han cambiado entre renderizados. Ósea que solo aplique el efecto si un valor especifico ha cambiado
-	Para hacerlo, pasa un array como segundo argumento opcional a useEffect:

```js
	// useEffect(callback , [array])
	    useEffect(() => { console.log("renderizado")} , []);

```
:::tip Observacion
El callback solo se ejecuta en el primer renderizado
:::
### En el Array podemos poner los estados(valores) a los que estamos pendiente
```js
// useEffect(callback , [array])
    useEffect(() => { console.log(`contador  ${contador}`)} , [contador]);

```
:::tip Observacion
El callback se ejecuta cada vez que la variable de estado contador cambie.
:::
:::tip 
Pueden crear varios useEffect
:::
:::tip 
Más adelante conoceremos los [Efectos con saneamiento](https://es.reactjs.org/docs/hooks-effect.html#effects-with-cleanup) 
:::

## Formulario
src/components/Formulario.js
```js
import React from 'react'

const Formulario = () => {
  return (
    <div>Formulario</div>
  )
}

export default Formulario

```
:::tip 
los componentes empiezan en mayuscula
:::

App.jsx
```js
import React from 'react'
import Formulario from './components/Formulario';

const App = () => {
  return (
    <div>
        <h1>App Rick and Morty</h1>
         <Formulario/>
    </div>
  )
}

export default App

```
src/hooks/useFormulario.js
:::tip 
- Los hooks  sirven para varios proyectos, como en este caso
- No los borres
:::
```js
import React, { useState } from 'react'

export const useFormulario = ( initialState = {}) => {
    const [inputs , setInputs] = useState(initialState)
    const handleChange = e => {
        const { name, value, checked, type } = e.target;
        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    const reset = () => {
         setInputs(initialState);
    }
  return [inputs , handleChange , reset];
}

```
src/components/Formulario.js
```js
import React from 'react'
import { useFormulario } from '../hooks/useFormulario'

const Formulario = () => {
    const [inputs , handleChange , reset] = useFormulario({
        nombre:''
    })
    const {nombre} = inputs;
    const handleSubmit = e => {
        e.preventDefault();
        
        reset();
    }
  return (
    <form onSubmit={handleSubmit}>
       <input
          type="text"
          placeholder="Ingrese personaje"
          className="form-control mb-2"
           value={nombre}
           onChange={handleChange}
           name="nombre"
          />
          <button  className="btn btn-dark"
          type="submit"
          >Buscar</button>
    </form>
  )
}

export default Formulario

```
## Comunicacion entre Componentes
-1 Usamos [sweet alert 2](https://sweetalert2.github.io/#download) para las alertas 
```powershell
npm install sweetalert2
```
App.jsx
```js
import React, { useState } from 'react'
import Formulario from './components/Formulario';
import PintarDatos from './components/PintarDatos';

const App = () => {
    const [nombrePersonaje , setNombrePersonaje] = useState('');
  return (
    <div>
        <h1>App Rick and Morty</h1>
         <Formulario setNombrePersonaje={setNombrePersonaje}/>
         <PintarDatos nombrePersonaje={nombrePersonaje}/>
    </div>
  )
}

export default App

```
src/components/Formulario.jsx
```js
import React from 'react'
import Swal from 'sweetalert2'
import { useFormulario } from '../hooks/useFormulario'

const Formulario = ({setNombrePersonaje}) => {
    const [inputs , handleChange , reset] = useFormulario({
        nombre:''
    })
    const {nombre} = inputs;
    const handleSubmit = e => {
        e.preventDefault();
        // Si esta vacio
        if (!nombre.trim()) {
            return Swal.fire({
                title: 'Error!',
                text: 'Escriba algo por favor',
                icon: 'error',
              })
        }
        setNombrePersonaje(nombre.trim().toLowerCase());
        reset();
    }
  return (
    <form onSubmit={handleSubmit}>
       <input
          type="text"
          placeholder="Ingrese personaje"
          className="form-control mb-2"
           value={nombre}
           onChange={handleChange}
           name="nombre"
          />
          <button  className="btn btn-dark"
          type="submit"
          >Buscar</button>
    </form>
  )
}

export default Formulario

```
## Componentes
src/components/PintarDatos.jsx
```js
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Personaje from './Personaje';
const PintarDatos = ({nombrePersonaje}) => {
  const [personajes,setPersonajes] = useState([]);
   useEffect(() => {
    consumirAPI(nombrePersonaje);
   } , [nombrePersonaje])
   const consumirAPI = async(nombre) => {
      try {
          const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
          if (!res.ok) {
            return Swal.fire({
              title: 'Error!',
              text: 'Personaje no encontrado',
              icon: 'error',
            })

           
          }
          const datos = await res.json();
          setPersonajes(datos.results);
      } catch(error) {
        console.log(error);
      } finally {

      }
   }

  return (
    <div className="row mt-2">
       {
         personajes.map(item => (
            <Personaje key={item.id}  personaje={item} />
         ))
       }
    </div>
  )
}

export default PintarDatos

```
src/components/Personaje.jsx
```js
import React from 'react'

const Personaje = ({personaje}) => {
    const {name , species , image} = personaje
  return (
    <div className="col-md-4 mb-2">
        <div className="card">
            <img src={image} alt={`imagen-${name}`} className="card-img-top" />
            <h5>{name}</h5>
            <p>{species}</p>
        </div>
    </div>
  )
}

export default Personaje

```
## Spinner de carga
src/components/Loading.jsx
```js
import React from 'react'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
  )
}

export default Loading

```
src/components/PintarDatos.jsx
:::tip Observacion
- Depende del estado del componente retorna el componente de cargando o los componentes de Personajes.
:::
```js
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Loading from './Loading';
import Personaje from './Personaje';
const PintarDatos = ({nombrePersonaje}) => {
  const [personajes,setPersonajes] = useState([]);
  const [loading , setLoading] = useState(false);
   useEffect(() => {
    consumirAPI(nombrePersonaje);
   } , [nombrePersonaje])
   const consumirAPI = async(nombre) => {
     setLoading(true);
      try {
          const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
          if (!res.ok) {
            return Swal.fire({
              title: 'Error!',
              text: 'Personaje no encontrado',
              icon: 'error',
            })

           
          }
          const datos = await res.json();
          setPersonajes(datos.results);
      } catch(error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
   }
   if (loading) {
     return <Loading/>
   }

  return (
    <div className="row mt-2">
       {
         personajes.map(item => (
            <Personaje key={item.id}  personaje={item} />
         ))
       }
    </div>
  )
}

export default PintarDatos

```
## customHook opcional
```js

import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export const useFetch = (nombre) => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        obtenerCharacter(nombre);
    }, [nombre]);

    const obtenerCharacter = async (nombre) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
            );

            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `no existe ${nombre}`,
                    icon: "error",
                });
            }

            const data = await res.json();
            console.log([...data.results]);
            setPersonajes([...data.results]);
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Error de servidor`,
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return [personajes, loading];
};

```
## LocalStorage

App.jsx
```js
import React, { useEffect, useState } from 'react'
import Formulario from './components/Formulario';
import PintarDatos from './components/PintarDatos';

const App = () => {
    const [nombrePersonaje , setNombrePersonaje] = useState('');
    useEffect(() => {
          if (localStorage.getItem('nombreAPI')) {
            setNombrePersonaje(JSON.parse(localStorage.getItem('nombreAPI')))
          }
    } , [])
    useEffect(() => {
      localStorage.setItem('nombreAPI' , JSON.stringify(nombrePersonaje))
    } , [nombrePersonaje])
  return (
    <div>
        <h1>App Rick and Morty</h1>
         <Formulario setNombrePersonaje={setNombrePersonaje}/>
         <PintarDatos nombrePersonaje={nombrePersonaje}/>
    </div>
  )
}

export default App

```
