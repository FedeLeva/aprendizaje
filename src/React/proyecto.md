#  Proyecto

## Vite
- [Sitio web](https://vitejs.dev/)
-	 Vite se define como una herramienta de frontend que te ayudará a crear proyectos (sin atarte a ningún framework concreto) y que su desarrollo y construcción final sea lo más sencilla posible.
-	Está desarrollada por Evan You, el creador de Vue.
-	Actualmente, Vite soporta tanto proyectos vanilla (sin utilizar frameworks), como proyectos utilizando Vue, React, Preact o Lit-element (tanto en versión Javascript, como Typescript).
- [guia](https://lenguajejs.com/automatizadores/vite/guia-tutorial-inicial-de-vite/)
- [template](https://github.com/vitejs/awesome-vite#templates)
- [comunidad](https://dev.to/t/vite)

```powershell
# npm 6.x
npm create vite@latest my-vue-app

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app -- --template vue

```
### Crear proyecto
Omiti el my-vue-app
```powershell
npm create vite@latest 
```
 Complete lo campos
 :::warning 
Cuidado con el antivirus, que a veces te detecta alguna dependencia como “peligrosa”
 :::
 ```powershell
 cd carpeta proyecto
npm i o npm install
npm run dev
 ```
### Estructura del archivo 
- main.jsx = index.js 
- el index.html esta en la carpeta raiz y no en public


## React Router v6
- [link](https://reactrouter.com/docs/en/v6/getting-started/installation)
- Los router se pueden trabajar con otras herramientas , pero nosotros vamos a usar React-Router 
```powershell
npm install react-router-dom@6
```

Eliminamos el logo y el App.css

App.jsx 
```js

function App() {

  return (
    <div >
      <h1>APP</h1>
    </div>
  )
}

export default App

```
:::tip Observacion
Renderizamos BrowserRouter alrededor de toda la aplicación , para que pueda usar el sistema de router
:::
main.jsx
```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Acceso al router */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)

```
### carpeta Routes
- Creamos la carpeta routes  en src  , que va a contener componentes que se van a mostrar en las rutas.
- La carpeta tambien puede llamarse views

src/routes/Home.jsx
```js

const Home = () => {
  return (
    <>
    <h1>Home</h1>
    </>
  )
}

export default Home

```
src/routes/Login.jsx
```js
import React from 'react'

const Login = () => {
  return (
    <><h1>Login</h1></>
  )
}

export default Login

```
App.jsx
```js
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Login from "./routes/Login"

function App() {

  return (
    <>
    <h1>App</h1>
    {/* Adentro de Routes , solo pueden ir las rutas , no codigo JSX como el h1 */}
    <Routes>
      {/* Adentro de routes creamos las rutas 
      Cada <Route></Route> es una ruta */}
      
        {/* path=ruta element=componente a renderizar en el path */}
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </>
  )
}

export default App

```
## Navbar
- Es un componente por lo tanto va en la carpeta components de src
:::tip 
- Todo lo que es reutilizable va en components
- Las rutas no son reutilizable.
:::
src/components/Navbar.jsx
:::tip Observacion 
Los NavLink no refrescan la pagina
:::
```js
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div>
                {/* NavLink es como la etiqueta <a></a>
                el props "to" es como el atributo "href" */}
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </>
    )
}

export default Navbar

```
### NavLink
- Al hacer click en el enlace, se le añadirá la clase active.
- Cuando el link pertenece activo (estás viendo el contenido del enlace), contiene la clase active.
- Sirve para mostrarle al usuario en que pagina(link) esta 
### Link
- No destaca/resalta la pagina en la que esta el usuario , no utiliza ni añade la clase active.

App.jsx
```js
 return (
    <>
    <h1>App</h1>
     <Navbar/>
    {/* Adentro de Routes , solo pueden ir las rutas , no codigo JSX como el h1 */}
    <Routes>

```
## Context 
Creamos la carpeta context , donde va a estar el context.

src/context/UserProvider.jsx

:::tip Observacion 
- Tiene la estructura de un componente
- El context se exporta con una exportación con nombre.
- El provider se exporta por defecto.
:::


```js
import  { createContext, useState } from 'react'

 // Creamos el contexto
 export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user , setUser] = useState(false);
  return (
    <UserContext.Provider value={{user , setUser}}>
      {/* children =    Todos los componentes hijos */}
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

```
main.jsx
```js
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <UserProvider>
    {/* Acceso al router */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
)

```
Login.jsx
```js
import React, { useContext } from 'react'
import { UserContext } from '../context/userProvider'

const Login = () => {
  // Obtenemos el valor de la props value del Provider del context
  // useContext(context)
 const {user , setUser} =  useContext(UserContext)
  return (
    <>
    <h1>Login</h1>
    <h2>
    {
      user? "En linea" : "Offline"
    }
    </h2>
    <button onClick={()=> setUser(true)}>Acceder</button>
    </>
  )
}

export default Login

```
NavBar.jsx
```js
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/userProvider"

const Navbar = () => {
     // Obtenemos el valor de la props value del Provider del context
  // useContext(context)
  const {user , setUser} = useContext(UserContext);
    return (
        <>
            <div>
                    {/* NavLink es como la etiqueta <a></a>
                el props "to" es como el atributo "href" */}
                {
                     user ?     ( <><NavLink to="/">Inicio</NavLink>
                     <button onClick={() => setUser(false)}>Logout</button> </>
                     ) :  <NavLink to="/login">Login</NavLink>
                }
            
           
               
            </div>
        </>
    )
}

export default Navbar

```

:::tip Explicacion 
- Todo lo que contiene el props value de Provider se comparte con todos los  componentes hijos de este.
- Con el useContext accedemos al props value.
- Con el provider especificamos que componentes tienen acceso al props value.
:::

## Ruta Protegida 
components/RequireAuth.jsx 
```js
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/userProvider'

const RequireAuth = ({children}) => {
    const {user} = useContext(UserContext);
    // Si no existe el usuario
    if (!user) {
        // Redirrecionamos  al login
      return  <Navigate to="/login" />
    }
 // Entramos a la ruta protegida
  return children
}

export default RequireAuth

```
Ahora envolvemos la ruta protegida con el componente RequireAuth
App.jsx 
```js
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import RequireAuth from "./components/RequireAuth"
import Home from "./routes/Home"
import Login from "./routes/Login"

function App() {

  return (
    <>
      <h1>App</h1>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/home' element={
          /* Ruta protegida (Home) */ 
          <RequireAuth >
          <Home />
          </RequireAuth>
        }>
    </Route>


      </Routes >
    </>
  )
}

export default App

```
:::tip Explicacion 
A la ruta home solo se puede acceder si user es true (o existe)
:::
## hook useNavigate
- Con el hook useNavigate podemos realizar redirecciones.

Login.jsx 
```js
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userProvider'

const Login = () => {

 const {user , setUser} =  useContext(UserContext)
 // Creamos el navigate
 const navegate = useNavigate();
   const handleClickLogin = () => {
    setUser(true);
    // Redireccionamos a la ruta "/"(raiz)
     navegate("/");
   }

  return (
    <>
    <h1>Login</h1>
    <h2>
    {
      user? "En linea" : "Offline"
    }
    </h2>
    <button onClick={handleClickLogin }>Acceder</button>
    </>
  )
}

export default Login

```
## FireBase 9 
 - Es un backend que ofrece muchos servicios: Autenticacion ,   dos tipos de BD ,  hosting , te permite trabajar con archivos , te brinda  funciones para manipular el backend , etc.
- Es gratis, pero tiene un limite de recursos a utilizar.
- Mientras mas recursos/servicios uses, más te van a cobrar.
- [Link](https://firebase.google.com/)

### En Firebase
1. Creamos una cuenta 
2. Entramos a la consola 
3. Creamos un proyecto sin habilitar Google analytics
4. En  Autenticacion -- Get Started (comenzar) habilitamos Email/Password y guardamos
- Lo mas simple es la cuenta de Google y Email/Password
5. En la pagina de inicio (Descripcion(Overview) del proyecto) , accedemos a app web y registramos una aplicacion 

Si hiciste todos los pasos correctos , te aparecera la instalacion de firebase con npm y un trozo de codigo


### En el proyecto 
1. Instalamos todos los modulos necesario para trabajar con firebase.
```powershell
npm install firebase
```
2. Copiamos el código  que nos da firebase al registrar la app
- El código es publico.
3. En src creamos un archivo llamado firebase.js y pegamos el codigo

Quedaria asi(Varia entre proyectos)
```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4c9Yfhz-IIA5HwtLMHrOTGECM8pXVNt8",
  authDomain: "react-2022-6867d.firebaseapp.com",
  projectId: "react-2022-6867d",
  storageBucket: "react-2022-6867d.appspot.com",
  messagingSenderId: "996540076090",
  appId: "1:996540076090:web:5946f2c6470b84e6952503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

```
### En Firebase
:::tip 
En el apartado de  configuración del Proyecto esta toda la guia de lo que hicimos en el proyecto
:::

1. En Autenticacion - Users creamos un usuario 

Email: usuario@tes.com contraseña: 123123

### En el proyecto 
src/index.css 
```css
body {
  margin: 0 auto;
  width:80%;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

```
## Auth
- [link](https://firebase.google.com/docs/auth/web/start?hl=es-419)
- De auth vienen todas las autenticaciones
- Tiene toda la configuración de firebase(app) para manipular la autenticación en la aplicación
- Gracias a auth, firebase sabe en que parte debe crear los usuarios.
FireBase sabe en que proyecto/aplicación debe crear el usuario
- Se crea con el metodo getAuth que recibe la app de FireBase


firebase.js
```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4c9Yfhz-IIA5HwtLMHrOTGECM8pXVNt8",
  authDomain: "react-2022-6867d.firebaseapp.com",
  projectId: "react-2022-6867d",
  storageBucket: "react-2022-6867d.appspot.com",
  messagingSenderId: "996540076090",
  appId: "1:996540076090:web:5946f2c6470b84e6952503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}

```
## createUserWithEmailAndPassword 
- El método createUserWithEmailAndPassword de firebase sirve para  crear un usuario
- Recibe el auth para saber en que aplicación/proyecto debe crear el usuario.
- Devuelve una promesa
- [link](https://firebase.google.com/docs/auth/web/start?hl=es-419)

context/UserProvider
```js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import  { createContext, useState } from 'react'
import { auth } from '../firebase';

 // Creamos el contexto
 export const UserContext = createContext();

 const registerUser = (email , password) =>
 // Creamos un usuario  con el email y el password pasado por parametro
 // Devuelve al usuario creado
 createUserWithEmailAndPassword(auth , email , password)

const UserProvider = ({children}) => {
    const [user , setUser] = useState(false);
  return (
    <UserContext.Provider value={{user , setUser , registerUser}}>
      {/* children =    Todos los componentes hijos */}
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

```
routes/Register.jsx
```js
import { useContext, useState } from "react"
import { UserContext } from '../context/userProvider'

const Register = () => {

    const [email , setEmail] = useState('usuario@tes.com');
    const [password , setPassword] = useState('123123');
    const {registerUser} =  useContext(UserContext)
  
    useContext
    const handleSubmit = async(e) => {
        e.preventDefault();
   
        try {
            //Creamos un usuario
           await registerUser(email,password);
        } catch(e) {
            console.log(e.code);
        }
    }
  return (
    <>
    <h1>Register</h1>
    <form  onSubmit={handleSubmit}>
        <input type="email"  placeholder="Ingrese email" value={email} onChange={ e => setEmail(e.target.value)}/>      <input type="password"  placeholder="Ingrese password" value={password} onChange={ e => setPassword(e.target.value)}/>
        <button>Register</button>
    </form>
    </>
  )
}

export default Register

```
:::tip Observacion 
- Los mensajes de errores están en la propiedad code de error(e).  Son códigos de respuesta.
- Si no se puede crear el usuario  ya sea porque ya existe o no pasa alguna validación de firebase , pasa al catch.
- En el catch , el error tiene la propiedad code , la cual devuelve el código de respuesta(el mensaje del error)
:::

App.jsx
```js
 return (
    <>
      <h1>App</h1>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>

```
## signInWithEmailAndPassword 
- [link](https://firebase.google.com/docs/auth/web/start?hl=es-419#sign_in_existing_users)
- El método signInWithEmailAndPassword de firebase sirve para iniciar sesion con un usuario existente
- Recibe el auth para especificar en que aplicación se esta por autenticar el usuario.
- Devuelve una promesa

context/UserProvider.jsx
```js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import  { createContext, useState } from 'react'
import { auth } from '../firebase';

 // Creamos el contexto
 export const UserContext = createContext();

 
const UserProvider = ({children}) => {
    const [user , setUser] = useState(false);
    const registerUser = (email , password) =>
      // Creamos un usuario  con el email y el password pasado por parametro
      // Devuelve al usuario creado
      createUserWithEmailAndPassword(auth , email , password)
      

      const loginUser = (email , password) =>  
        signInWithEmailAndPassword(auth,email , password)
      

      
  return (
    <UserContext.Provider value={{user , setUser , registerUser , loginUser}}>
      {/* children =    Todos los componentes hijos */}
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

```
Login.jsx
```js
import React, { useContext , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userProvider'

const Login = () => {
  const [email , setEmail] = useState('usuario@tes.com');
  const [password , setPassword] = useState('123123');
 const {loginUser} =  useContext(UserContext)
 // Creamos el navigate
 const navegate = useNavigate();
 const handleSubmit = async(e) => {
  e.preventDefault();

  try {
      //Accedemos a un usuario
     await loginUser(email,password);
  } catch(e) {
      console.log(e.code);
      
  }
}

  return (
    <>
    <h1>Login</h1>
    <form  onSubmit={handleSubmit}>
        <input type="email"  placeholder="Ingrese email" value={email} onChange={ e => setEmail(e.target.value)}/>      <input type="password"  placeholder="Ingrese password" value={password} onChange={ e => setPassword(e.target.value)}/>
        <button>Login</button>
    </form>
   </>
  )
}

export default Login

```
:::tip Observacion 
- Si el usuario existe y la contraseña coincide , inicia sesion.
En caso contrario , pasa al catch.
- En el catch, el error tiene la propiedad code que devuelve el código de respuesta (contiene el mensaje de error).
:::
## signOut 
- [link (debajo de todo)](https://firebase.google.com/docs/auth/web/password-auth?hl=es-419#sign_in_a_user_with_an_email_address_and_password)
-  El método signOut de firebase sirve para cerrar la sesion
- El método signOut recibe el auth
- Devuelve una promesa 

UserProvider.jsx
```js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import  { createContext, useState } from 'react'
import { auth } from '../firebase';

 // Creamos el contexto
 export const UserContext = createContext();

 
const UserProvider = ({children}) => {
    const [user , setUser] = useState(false);
    const registerUser = (email , password) =>
      // Creamos un usuario  con el email y el password pasado por parametro
      // Devuelve al usuario creado
      createUserWithEmailAndPassword(auth , email , password)
      

      const loginUser = (email , password) =>  
        signInWithEmailAndPassword(auth,email , password)
      
        const signOutUser = () => signOut(auth)
    

      
  return (
    <UserContext.Provider value={{user , setUser , registerUser , loginUser , signOutUser}}>
      {/* children =    Todos los componentes hijos */}
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

```
Navbar.jsx
```js
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/userProvider"

const Navbar = () => {
     // Obtenemos el valor de la props value del Provider del context
  // useContext(context)
  const {user , signOutUser} = useContext(UserContext);
  const handleClickLogOut = async() => {
      try {
          await signOutUser();
      } catch (error) {
          console.log(error.code);
      }
  }
    return (
        <>
            <div>
                    {/* NavLink es como la etiqueta <a></a>
                el props "to" es como el atributo "href" */}
                {
                     user ?     ( <><NavLink to="/">Inicio |</NavLink>
                     <button onClick={handleClickLogOut}>Logout</button> </>
                     ) : ( <>
                      <NavLink to="/login">Login |</NavLink>
                      <NavLink to="/register">Register |</NavLink>
                     </>) 
                }
            
           
               
            </div>
        </>
    )
}

export default Navbar

```
## onAuthStateChanged 
- Nos brinda datos del usuario
- [Link](https://firebase.google.com/docs/auth/web/start?hl=es-419#set_an_authentication_state_observer_and_get_user_data)
- El método onAuthStateChanged de firebase sirve para obtener datos del usuario que inicio sesion en la aplicación.
- Nos devuelve el usuario activo , el que ya hizo el login.
- Recibe el auth y un callback que contiene/recibe al usuario activo como parámetro.

UserProvider.jsx
```js
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase';

 // Creamos el contexto
 export const UserContext = createContext();

 
const UserProvider = ({children}) => {

    useEffect(() => {
          const unsuscribe = onAuthStateChanged(auth , user => {
            console.log(user);
          }) 
          return () => unsuscribe()
    } , [])

    const [user , setUser] = useState(false);
    const registerUser = (email , password) =>
      // Creamos un usuario  con el email y el password pasado por parametro
      // Devuelve al usuario creado
      createUserWithEmailAndPassword(auth , email , password)
      

      const loginUser = (email , password) =>  
        signInWithEmailAndPassword(auth,email , password)
      
        const signOutUser = () => signOut(auth)
    

      
  return (
    <UserContext.Provider value={{user , setUser , registerUser , loginUser , signOutUser}}>
      {/* children =    Todos los componentes hijos */}
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

```
:::tip Observacion 
Te devuelve la información del usuario desde la API de firebase.
:::

### Cambio 
```js
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase';

 // Creamos el contexto
 export const UserContext = createContext();

 
const UserProvider = ({children}) => {

  const [user , setUser] = useState(false);
    useEffect(() => {
          const unsuscribe = onAuthStateChanged(auth , (user) => {
            console.log(user);
            if (user) {
             
             const  {email , photoURL , displayName , uid} = user;
             setUser({email , photoURL , displayName , uid})
            } else {
              setUser(null);
            }
           
          }) 
     
          return () => unsuscribe()
    } , [])

    const registerUser = (email , password) =>
      // Creamos un usuario  con el email y el password pasado por parametro
      // Devuelve al usuario creado
      createUserWithEmailAndPassword(auth , email , password)
      

      const loginUser = (email , password) =>  
        signInWithEmailAndPassword(auth,email , password)
      
        const signOutUser = () => signOut(auth)
    

      
  return (
    <UserContext.Provider value={{user , setUser , registerUser , loginUser , signOutUser}}>
      {/* children =    Todos los componentes hijos */}
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

```

Navbar.jsx
```js
  return (
        <>
            <div>
                    {/* NavLink es como la etiqueta <a></a>
                el props "to" es como el atributo "href" */}
             
                {
                     user ?     ( <><NavLink to="/home">Inicio |</NavLink>
                         <button onClick={handleClickLogOut}>Logout</button>
                     </>
                     ) : ( <>
                      <NavLink to="/login">Login |</NavLink>
                      <NavLink to="/register">Register |</NavLink>
                     </>) 
                }
            
           
               
            </div>
        </>
    )

```
## Loading y Redirrecion 
- Como el proceso de consultar información del usuario activo demora, implementamos un loading.

App.jsx 
```js
import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import RequireAuth from "./components/RequireAuth"
import { UserContext } from "./context/userProvider"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Register from "./routes/Register"

function App() {

    const {user} = useContext(UserContext);

    if (user == false) {
      return <p>Loading....</p>
    }
  return (
    <>
   
      <h1>App</h1>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={
          /* Ruta protegida (Home) */
          <RequireAuth >
            <Home />
          </RequireAuth>
        }></Route>
      </Routes >
    
    </>
  )
}

export default App

```

- Redireccion en el login

Login.jsx
```js
// Creamos el navigate
  const navegate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //Accedemos a un usuario
      await loginUser(email, password);
      //Redirreciono al home
      navegate("/home")
    } catch (e) {
      console.log(e.code);

    }
  }

```