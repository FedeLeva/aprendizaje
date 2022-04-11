# App todo
## Iniciar App 
En la carpeta raiz (que contiene los proyectos(app))
```powershell
npx create-react-app todo-app 
```
1. Accedemos a la carpeta todo-app
2. En la carpeta src borramos todo menos el index.js
3. Creamos el archivo App.jsx (componente principal)


index.js 
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

```

src/App.JSX
```js
import React from 'react'
import TodoList from './components/TodoList'

const App = () => {
    return (
        <div className="container"> 
            <h1>App</h1>
            <TodoList/>

        </div>
    )
}

export default App

```
4. Creamos la carpeta components dentro de src

Creamos TodoList.JSX

src/components/TodoList.jsx

```js
import React from 'react'

import React from 'react'
import Formulario from './Formulario'

const TodoList = () => {
  return (
    <div> 
        <Formulario/>
    </div>
  )
}

export default TodoList

```



src/components/Formulario.jsx

```js
import React from 'react'

const Formulario = () => {
  return (
    <><h3>Agregar TODO</h3></>
  )
}

export default Formulario

```

index.html 
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```
## Formulario (Controlado)
- Vamos a usar [sweetAlert2](https://sweetalert2.github.io/) Para las alertas 
```powershell
npm install sweetalert2
```
:::tip 
- El atributo for se remplaza por htmlFor en el checkbox
- El button es de tipo submit por defecto.
:::
src/components/Formulario.jsx
```js
import React, { useState } from 'react'

const Formulario = () => {
    const initialState = {
        nombre: '',
        descripcion: '',
        estado: 'pendiente' ,
        prioridad: false
    }

    const [todo , setTodo] =  useState(initialState)
    const {nombre  , descripcion , estado , prioridad} = todo;

    const  handleChange = e => {
        const {name , value , checked , type} = e.target;
        setTodo((old) => ({
             ...old ,
             [name] : type === "checkbox" ? checked : value
        }))
    }
    return (
        <>
            <h3>Agregar TODO</h3>
            <form action="">
                <input
                    type="text"
                    className="form-control mb-2"
                    name="nombre"
                    placeholder="Ingrese TODO nombre"    value={nombre}     onChange = {handleChange}/>
                   
                <textarea
                    className="form-control mb-2"
                    name="descripcion"
                    placeholder="Ingrese descripcion"
                    value={descripcion}
                    onChange = {handleChange}
                />
                <select name="estado" className="form-control mb-2" value={estado}     onChange = {handleChange}>
                    <option value="pendiente">pendiente</option>
                    <option value="completado">completado</option>
                </select>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        onChange = {handleChange}
                        name="prioridad"
                        checked={prioridad}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Dar prioridad
                    </label>
                </div>
                <button className="btn btn-primary my-2">Enviar</button>
            </form>

        </>
    )
}

export default Formulario

```
### Submit

```js
import React, { useState } from 'react'
import Swal from 'sweetalert2'
const Formulario = () => {
    const initialState = {
        nombre: '',
        descripcion: '',
        estado: 'pendiente' ,
        prioridad: false
    }

    const [todo , setTodo] =  useState(initialState)
    const {nombre  , descripcion , estado , prioridad} = todo;

    const  handleChange = e => {
        const {name , value , checked , type} = e.target;
        setTodo((old) => ({
             ...old ,
             [name] : type === "checkbox" ? checked : value
        }))
    }
    const handleSubmit = e => {
        e.preventDefault();
       //Si esta vacio
       if (!nombre.trim()) {
         
           // Dejamos el nombre en focus
           // el e.target[0] === el input con el name="nombre"; 
           // el e.target[0] === el primer hijo del formulario
           e.target[0].focus()
           // Creamos la alerta
           Swal.fire({
            title: 'Error!',
            text: 'No deje el nombre en blanco',
            icon: 'error',
        
           })
           return;
       }
// Si esta vacio
       if (!descripcion.trim()) {
// Dejamos la descripcion en focus
           // el e.target[1] === el textarea con el name="descripcion"; 
           // el e.target[1] === el segundo hijo del formulario
           e.target[1].focus()
           // Creamos la alerta
           Swal.fire({
            title: 'Error!',
            text: 'No deje la descripcion en blanco',
            icon: 'error',
        
           })
           return;
       }
       // Si pasa las dos validaciones , tiramos una alerta de exito
       Swal.fire({
        title: 'Exito!',
        text: 'Tarea agregada',
        icon: 'success',
    
       })
    }
    return (
        <>
            <h3>Agregar TODO</h3>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    name="nombre"
                    placeholder="Ingrese TODO nombre"    value={nombre}     onChange = {handleChange}/>
                   
                <textarea
                    className="form-control mb-2"
                    name="descripcion"
                    placeholder="Ingrese descripcion"
                    value={descripcion}
                    onChange = {handleChange}
                />
                <select name="estado" className="form-control mb-2" value={estado}     onChange = {handleChange}>
                    <option value="pendiente">pendiente</option>
                    <option value="completado">completado</option>
                </select>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        onChange = {handleChange}
                        name="prioridad"
                        checked={prioridad}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Dar prioridad
                    </label>
                </div>
                <button className="btn btn-primary my-2">Enviar</button>
            </form>

        </>
    )
}

export default Formulario

```

## Comunicacion entre componentes:
src/components/TodoList.jsx
```js
import React, { useState } from 'react'
import Formulario from './Formulario'

const TodoList = () => {
  const [todos , setTodos] = useState([]);
   const agregarTodo = todo => {
        setTodos((old) => [...old , todo])
   }

  return (
    <div> 
        <Formulario  agregarTodo={agregarTodo}/>
    </div>
  )
}

export default TodoList

```
src/components/Formulario.jsx
```js
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
const Formulario = ({ agregarTodo }) => {
    const initialState = {
        nombre: '',
        descripcion: '',
        estado: 'pendiente',
        prioridad: false
    }

    const [todo, setTodo] = useState(initialState)
    const { nombre, descripcion, estado, prioridad } = todo;

    const handleChange = e => {
        const { name, value, checked, type } = e.target;
        setTodo((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    const handleSubmit = e => {
        e.preventDefault();
        //Si esta vacio
        if (!nombre.trim()) {

            // Dejamos el nombre en focus
            // el e.target[0] === el input con el name="nombre"; 
            // el e.target[0] === el primer hijo del formulario
            e.target[0].focus()
            // Creamos la alerta
            Swal.fire({
                title: 'Error!',
                text: 'No deje el nombre en blanco',
                icon: 'error',

            })
            return;
        }
        // Si esta vacio
        if (!descripcion.trim()) {
            // Dejamos la descripcion en focus
            // el e.target[1] === el textarea con el name="descripcion"; 
            // el e.target[1] === el segundo hijo del formulario
            e.target[1].focus()
            // Creamos la alerta
            Swal.fire({
                title: 'Error!',
                text: 'No deje la descripcion en blanco',
                icon: 'error',

            })
            return;
        }
        // Si pasa las dos validaciones , tiramos una alerta de exito
        Swal.fire({
            title: 'Exito!',
            text: 'Tarea agregada',
            icon: 'success',

        })
        agregarTodo({
            // nombre : nombre 
            // descripcion : descripcion
            // ...
            nombre,
            descripcion,
            estado: estado === 'pendiente' ? false : true,
            prioridad,
            id: uuidv4()
        });
       setTodo(initialState);
    }

```
## Componente Todo
src/components/TodoList.jsx
```js
return (
    <div> 
        <Formulario  agregarTodo={agregarTodo}/>
        <ul className="list-group list-group-numbered mt-2">
        {
          
          todos.map( item => (
            <Todo key={item.id} todo={item}/>
          )

          )
        }
        </ul>
    </div>
  )

```
src/components/Todo.jsx
```js
import React from 'react'

const Todo = (props) => {
    const { nombre, descripcion, estado, prioridad } = props.todo;
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre} ({estado ? "Finalizado" : "Pendiente"})
                </div>
                <p>{descripcion}</p>
                <div>
                    <button className="btn btn-sm btn-danger me-1">
                        Eliminar
                    </button>
                    <button className="btn btn-sm btn-warning me-1">
                        Editar
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill">
                 {/* Si es verdadero */}
                {prioridad && "prioritario"}
            </span>
        </li>
    </>
  )
}

export default Todo

```
## Eliminar Todo
TodoList.jsx
```js
const eliminarTodo = (id) => {
       setTodos((old) => old.filter(item => item.id !== id));
   }
  return (
    <div> 
        <Formulario  agregarTodo={agregarTodo}/>
        <ul className="list-group list-group-numbered mt-2">
        {
          
          todos.map( item => (
            <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo}/>
          )

          )
        }
        </ul>
    </div>
  )

```
Todo.JSX
```js
const Todo = ({todo , eliminarTodo}) => {
    const { id , nombre, descripcion, estado, prioridad } = todo;
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre} ({estado ? "Finalizado" : "Pendiente"})
                </div>
                <p>{descripcion}</p>
                <div>
                    <button className="btn btn-sm btn-danger me-1" onClick={() => { eliminarTodo(id)}}>
                        Eliminar 
                    </button>
                    <button className="btn btn-sm btn-warning me-1">
                        Editar
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill">
                 {/* Si es verdadero */}
                {prioridad && "prioritario"}
            </span>
        </li>
    </>
  )
}

```
## Editar
TodoList.jsx
```js
 const editarTodo = (id) => {
      const editarTodos = todos.map(item => (
        // Si es igual a la id cambiamos el estado (sobreescribimos la propiedad)
        item.id === id ? {...item, estado:!item.estado} : item
      ))
      setTodos(editarTodos)
   }
  return (
    <div> 
        <Formulario  agregarTodo={agregarTodo}/>
        <ul className="list-group list-group-numbered mt-2">
        {
          
          todos.map( item => (
            <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}/>
          )

          )
        }
        </ul>
    </div>
  )

```

Todo.JSX
```js
const Todo = ({todo , eliminarTodo , editarTodo}) => {
    const { id , nombre, descripcion, estado, prioridad } = todo;
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre} ({estado ? "Finalizado" : "Pendiente"})
                </div>
                <p>{descripcion}</p>
                <div>
                    <button className="btn btn-sm btn-danger me-1" onClick={() => { eliminarTodo(id)}}>
                        Eliminar 
                    </button>
                    <button className="btn btn-sm btn-warning me-1" onClick={() => { editarTodo(id)}}>
                        Editar
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill">
                 {/* Si es verdadero */}
                {prioridad && "prioritario"}
            </span>
        </li>
    </>
  )
}

```

## Hook Personalizado

:::tip hook
- Por convención , los hook empiezan con use
- Usamos el snippet rafc
- Un hook es una función (En este ejemplo se llama useFormulario)
:::

src/hooks/useFormulario.js
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

```
Formulario.jsx
```js
import React from 'react'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
import { useFormulario } from '../hooks/useFormulario';
const Formulario = ({ agregarTodo }) => {
    const initialState = {
        nombre: 'Todo 1',
        descripcion: 'Descripcion Todo 1',
        estado: 'pendiente',
        prioridad: false
    }

    const [inputs , handleChange , reset] = useFormulario(initialState)
    const { nombre, descripcion, estado, prioridad } = inputs;


    const handleSubmit = e => {
        e.preventDefault();
        //Si esta vacio
        if (!nombre.trim()) {

            // Dejamos el nombre en focus
            // el e.target[0] === el input con el name="nombre"; 
            // el e.target[0] === el primer hijo del formulario
            e.target[0].focus()
            // Creamos la alerta
            Swal.fire({
                title: 'Error!',
                text: 'No deje el nombre en blanco',
                icon: 'error',

            })
            return;
        }
        // Si esta vacio
        if (!descripcion.trim()) {
            // Dejamos la descripcion en focus
            // el e.target[1] === el textarea con el name="descripcion"; 
            // el e.target[1] === el segundo hijo del formulario
            e.target[1].focus()
            // Creamos la alerta
            Swal.fire({
                title: 'Error!',
                text: 'No deje la descripcion en blanco',
                icon: 'error',

            })
            return;
        }
        // Si pasa las dos validaciones , tiramos una alerta de exito
        Swal.fire({
            title: 'Exito!',
            text: 'Tarea agregada',
            icon: 'success',

        })
        agregarTodo({
            // nombre : nombre 
            // descripcion : descripcion
            // ...
            nombre,
            descripcion,
            estado: estado === 'pendiente' ? false : true,
            prioridad,
            id: uuidv4()
        });
       reset();
    }
    return (
        <>
            <h3>Agregar TODO</h3>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    name="nombre"
                    placeholder="Ingrese TODO nombre" value={nombre} onChange={handleChange} />

                <textarea
                    className="form-control mb-2"
                    name="descripcion"
                    placeholder="Ingrese descripcion"
                    value={descripcion}
                    onChange={handleChange}
                />
                <select name="estado" className="form-control mb-2" value={estado} onChange={handleChange}>
                    <option value="pendiente">pendiente</option>
                    <option value="completado">completado</option>
                </select>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        onChange={handleChange}
                        name="prioridad"
                        checked={prioridad}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Dar prioridad
                    </label>
                </div>
                <button className="btn btn-primary my-2">Enviar</button>
            </form>

        </>
    )
}

export default Formulario

```
## LocalStorage con useEffect

### UseEffect
- UseEffect es un hook .
- Es una función que se ejecuta las veces que nosotros consideremos necesaria. (las veces que quieras)

#### Recibe un callback que se ejecuta cada vez que se renderiza el componente.
```js
  useEffect(() => {
    console.log("hola");
  })

```
#### Segundo parametro
- Tiene un Segundo parametro que es un array.
- Si es un array vacio , solo se ejecuta una vez la función(callback) (sin importar cuantas veces se renderize).
```js
  useEffect(() => {
    console.log("hola");
  } , [])

```
#### Se puede crear varios UseEffect
#### Array Segundo Parametro
- En el array del segundo parámetro, podemos poner elementos.
- Si algunos de los elementos sufren un cambio, se ejecuta el callback.
```js
 useEffect(() => {

  } , [todos])

```
src/components/TodoList.jsx
```js
import React, { useEffect, useState } from 'react'
import Formulario from './Formulario'
import Todo from './Todo';

const TodoList = () => {
  const [todos , setTodos] = useState([]);
  useEffect(() => {
    // Si existe
    if (localStorage.getItem('todos')) {
          setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  } , [])

  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos) )
  } , [todos])
   const agregarTodo = todo => {
        setTodos((old) => [...old , todo])
   }

   const eliminarTodo = (id) => {
       setTodos((old) => old.filter(item => item.id !== id));
   }
   const editarTodo = (id) => {
      const editarTodos = todos.map(item => (
        // Si es igual a la id cambiamos el estado (sobreescribimos la propiedad)
        item.id === id ? {...item, estado:!item.estado} : item
      ))
      setTodos(editarTodos)
   }
  return (
    <div> 
        <Formulario  agregarTodo={agregarTodo}/>
        <ul className="list-group list-group-numbered mt-2">
        {
          
          todos.map( item => (
            <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}/>
          )

          )
        }
        </ul>
    </div>
  )
}

export default TodoList
```
## Deploy
1. Usa el  script build de package.json
2. La carpeta que genera tiene un index.html que SOLO SE EJECUTA EN UN SERVIDOR , NO EN EL NAVEGADOR
3. la carpeta la ponemos en [netlify](https://www.netlify.com/) 

## Recursos
- [ant design](https://ant.design/)
- [react toastify](https://fkhadra.github.io/react-toastify/introduction)
- [react alert](https://www.npmjs.com/package/react-alert)
- [react hot toast](https://react-hot-toast.com/)
- [uuid](https://www.npmjs.com/package/uuid)