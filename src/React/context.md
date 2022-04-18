# Context API
- [context](https://es.reactjs.org/docs/context.html)
- [useContext](https://es.reactjs.org/docs/hooks-reference.html#usecontext)
-	Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.
-	Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido.
-	Si trabajas con diferentes vistas estas no estarán anidadas, por ende Context proporciona una solución.
-	Permite que todas las vistas tengan acceso a los datos.


### Proyecto 
Usaremos el proyecto de React Router v6(router tutorial)

:::warning 
- No hacer todo GLOBAL .
- Solo los que se nos escapan de la mano.
:::
## Redux vs Context

-	Redux proporciona un conjunto de herramientas completo para administrar el estado:
    -	Viene con un depurador que viaja en el tiempo.
    -	Proporciona una API de middleware que le brinda acceso a herramientas como redux-sagas.
    -	Sus enlaces de React evitan muchos renderizados innecesarios.
    -	Se puede utilizar con otros framework o librerias

- Como puede ver, el contexto no reemplaza a Redux. El contexto no le permitirá viajar en el tiempo con un depurador, ni  tener un middleware configurable.
- Context es una forma de transferir datos de un lugar a otro. Si desea una herramienta que lo ayude a administrar su estado, Redux es una excelente opción.
- Por lo tanto realizan operaciones distintas.
- [link](https://www.itdo.com/blog/react-context-api-puede-ser-alternativa-a-redux/)
- [link 2](https://daveceddia.com/context-api-vs-redux/)
- [link 3](https://frontarm.com/james-k-nelson/when-context-replaces-redux/)

## Problematica
src/routes/Inicio.jsx
```js
import React, { useState } from 'react'

  
const Inicio = () => {
  const [user,setUser] = useState(false);
  return (
    <div>
      <h2> { 
       user? 'conectado' : 'desconectado'
      
      }</h2>
      {
        user ? (
          <button className="btn btn-primary" onClick={()=> setUser(false) }>Acceder</button>
        ) : (   <button className="btn btn-primary" onClick={()=> setUser(true) }>Acceder</button>   )
      }
      <h1>Inicio</h1>
   
    
    </div>

  )
}

export default Inicio

```

:::tip problema
como enviar el user (useState) al src/components/Navbar.js
:::

## createContext
-	Crea un objeto Context. Cuando React renderiza un componente que se suscribe a este objeto Context, este leerá el valor de contexto actual del Provider más cercano en el árbol.
-	Cada objeto Context viene con un componente Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto.
-	El componente Provider acepta una prop value que se pasará a los componentes consumidores que son descendientes de este Provider.


src/context/UserProvider.jsx
- Estructura basica de un componente

:::tip Observacion 
- Hay que exportar un createContext()
- Esa exportación la utiliza los componentes que requieren ese dato/valor.
- Puede tener toda la lógica del usuario el componente.
:::

```js
import React, { createContext , useState } from 'react'
export const UserContext = createContext()
const UserProvider = ({children}) => {

    const [user,setUser] = useState(false);

    const signIn = () => setUser(true);
    const signOut = () => setUser(false);
  return (
     <UserContext.Provider value={{user , signIn , signOut}}>
        {children}
     </UserContext.Provider>
  );
};

export default UserProvider

```
:::tip  Diferencias
- el UserContext   es accedido desde el Inicio.jsx y dentro del NavBar.jsx
- el userProvider es el que envuelve a los componentes que van a tener acceso a  los datos.
:::

index.js

- Para tener acceso a la variable user y a las funciones signIn y signOut , usaremos el context(createContext)

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import Inicio from './routes/Inicio';
import {BrowserRouter,  Route,  Routes} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import NoEncontrada from './routes/NoEncontrada';
import Post from './components/Post';
import UserProvider from './context/UserProvider'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
     <Routes>
     
        <Route path='/' element={<App />}> 
        <Route index element={<Inicio/>}/>
        <Route path='blog' element={<Blog />}/>
        <Route path='blog/:id' element={<Post />}/>
        <Route path='contacto' element={<Contacto />}/>
         <Route path='*' element={<NoEncontrada/>}/>
        </Route>
     </Routes>
     </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

```

:::tip Explicacion 
- Todo lo que este envuelto por el UserProvider tienen acceso  a la variable user y a las funciones signIn y signOut (todo lo que este en el props value de Provider)
- Todo esto se logra gracias a children (la props de UserProvider)
- Esto quiere decir que children son todos los hijos (los que envuelve) de UserProvider.
- Todos los children tienen acceso al  props value de Provider.
:::
## useContext
- Acepta un objeto de contexto (el valor devuelto de React.createContext) y devuelve el valor del contexto actual. El valor actual del contexto es determinado por la propiedad value del MyContext.Provider ascendentemente más cercano en el árbol al componente que hace la llamada.

src/routes/Inicio.jsx

:::tip Diferencias
- Para tener acceso a las dos funciones y a la variable , hay que usar el context ( que creamos con createContext)
- El provider es para especificar quien tienen acceso a los datos.
- El context es al que llamamos para tener acceso a los datos , el context nos devuelve los datos.
:::

```js
import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

  
const Inicio = () => {
  // Tenemos acceso a la variable user y a las dos funciones
   const {user , signIn , signOut} =  useContext(UserContext)
  return (
    <div>
      <h2> { 
       user? 'conectado' : 'desconectado'
      
      }</h2>
      {
        user ? (
          <button className="btn btn-primary" onClick={signOut }>Desconectar</button>
        ) : (   <button className="btn btn-primary" onClick={signIn}>Acceder</button>   )
      }
      <h1>Inicio</h1>
   
    
    </div>

  )
}

export default Inicio

```
Navbar.jsx
```js

import React , {useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Navbar = () => {
  //Tenemos acceso a user del context
  const {user} = useContext(UserContext);
  return (
     <nav className="navbar navbar-dark bg-dark">
       
         <div className="container">  

         <Link to="/"> {user ? 'Nombre Usuario' : 'Sin conexion'} </Link>
          <NavLink className="btn btn-outline-primary" to="/">Inicio</NavLink>
          <NavLink className="btn btn-outline-primary" to="/contacto">Contacto</NavLink>
          <NavLink className="btn btn-outline-primary" to="/blog">Blog</NavLink></div>
          
     </nav>
  )
}

export default Navbar

```

:::tip Observacion 
Se puede tener acceso a todos los datos como en el Inicio.jsx o solo a uno de los datos como en el Navbar.jsx
:::

## Extra Ruta Protegida
- [explicacion](https://reactrouter.com/docs/en/v6/examples/auth)

src/routes/RutaProtegida.jsx
```js
const RutaProtegida = () => {
    return (
        <div>
            <h1>Solo usuarios registrados pueden ver esta página</h1>
        </div>
    );
};

export default RutaProtegida;

```
index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import Inicio from './routes/Inicio';
import {BrowserRouter,  Route,  Routes} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import NoEncontrada from './routes/NoEncontrada';
import Post from './components/Post';
import UserProvider from './context/UserProvider'
import RutaProtegida from './routes/RutaProtegida';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <Routes>
     
     <Route path='/' element={<App />}> 
     <Route index element={<Inicio/>}/>
     <Route path='blog' element={<Blog />}/>
     <Route path='blog/:id' element={<Post />}/>
     <Route path='contacto' element={<Contacto />}/>
     <Route path='protegida' element={<RutaProtegida />}/>
      <Route path='*' element={<NoEncontrada/>}/>
     </Route>
  </Routes>
     </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);



```
routes/Inicio.jsx
```js
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

  
const Inicio = () => {
  // Tenemos acceso a la variable user y a las dos funciones
   const {user , signIn , signOut} =  useContext(UserContext)
  return (
    <div>
      <h2> { 
       user? 'conectado' : 'desconectado'
      
      }</h2>
      {
        user ? (
          <>
          <button className="btn btn-primary" onClick={signOut }>Desconectar</button>
           <Link to="/protegida" className="btn btn btn-warning">Ruta protegida</Link>
          </>
        ) : (   <button className="btn btn-primary" onClick={signIn}>Acceder</button>   )
      }
      <h1>Inicio</h1>
   
    
    </div>

  )
}

export default Inicio

```
src/components/RequireAuth.jsx
- Es el componente que se va a renderizar alrededor de las rutas protegidas
- Envuelve las rutas protegidas.
- Contiene la lógica que evalua si existe el usuario. Si existe ,  entra a la ruta protegida , en caso contrario se va a la ruta raiz.

```js
import React , {useContext}from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider'

const RequireAuth = ({children}) => {
    const {user} = useContext(UserContext);
    if (!user) {
        // Si no existe el usuario , se va a la ruta de inicio
        return <Navigate to="/"/>
    } else {
      return children;
    }

}

export default RequireAuth

```
:::tip Observacion
el children representa las rutas hijas.
:::

index.js
- El componente RequireAuth Va a envolver a las rutas protegidas
- Dicho componente tiene la lógica para comprobar si existe el usuario y redireccionarlo en base a la validación (si entra a la ruta hija o no)
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import Inicio from './routes/Inicio';
import {BrowserRouter,  Route,  Routes} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import NoEncontrada from './routes/NoEncontrada';
import Post from './components/Post';
import UserProvider from './context/UserProvider'
import RutaProtegida from './routes/RutaProtegida';
import RequireAuth from './components/RequireAuth';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <Routes>
     
     <Route path='/' element={<App />}> 
     <Route index element={<Inicio/>}/>
     <Route path='blog' element={<Blog />}/>
     <Route path='blog/:id' element={<Post />}/>
     <Route path='contacto' element={<Contacto />}/>
     <Route path='protegida' element={
       <RequireAuth>
     <RutaProtegida />
     </RequireAuth>
     }/>
      <Route path='*' element={<NoEncontrada/>}/>
     </Route>
  </Routes>
     </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

```
:::warning 
- Las validaciones se hacen en el backend.
- En el frontend solo las validaciones básica.
:::

## Hook useLocation 
- Para que te redirrecione a la ultima url que estuviste
- Averiguar
