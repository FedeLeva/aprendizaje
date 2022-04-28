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
## React hook form
- [link](https://react-hook-form.com/get-started/)
- Es un hook 
```powershell
npm install react-hook-form
```
```js
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
```
- Register : Para registrar un input
- handleSubmit  : Maneja el evento submit
- formState : Nos trae los errores
- watch : Averiguar

Register.jsx
```js
import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { UserContext } from '../context/userProvider'

const Register = () => {
  const { registerUser } = useContext(UserContext)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  //  data = los input registrados
  const onSubmit = data => console.log(data);


  return (
    <>
      <h1>Register</h1>
      {/* El hook form hace las validaciones , si esta todo bien invoca la funcion onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Registramos los inputs */}
        {/* {...register("nombredelcampo")} */}
        <input type="email" placeholder="Ingrese email"
          {...register("email")} />
        <input type="password" placeholder="Ingrese password" {...register("password")} />
        <button>Register</button>
      </form>
    </>
  )
}

export default Register

```
###  Validaciones
```js
import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { UserContext } from '../context/userProvider'

const Register = () => {
  const { registerUser } = useContext(UserContext)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  //  data = un objeto con los input registrados
  const onSubmit = data => console.log(data);


  return (
    <>
      <h1>Register</h1>
      {/* El hook hace las validaciones , si esta todo bien invoca la funcion onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Registramos los inputs */}
        {/* {...register("nombredelcampo" , {validaciones})} */}
        <input type="email" placeholder="Ingrese email"
          {...register("email", { required: true })} />

       {
        //  Si existe un error(si no cumple las validaciones) en el campo email.
         errors.email && <p>Campo obligatorio</p>
       }

        <input type="password" placeholder="Ingrese password" {...register("password")} />
        <input type="password" placeholder="Ingrese password" {...register("repassword")} />
        <button>Register</button>
      </form>
    </>
  )
}

export default Register

```
:::tip Explicacion 
- Si no se cumple la validación, se genera un error.
- Para acceder al error de un input es con  errors.nombreinput
- El nombreinput es el nombre que le asignaron al registrarlo con el register


:::

- [link](
https://react-hook-form.com/api/useform
)

### Validaciones con mensajes personalizados:

```js
import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { UserContext } from '../context/userProvider'

const Register = () => {
  const { registerUser } = useContext(UserContext)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  //  data = un objeto con los input registrados
  const onSubmit = data => console.log(data);


  return (
    <>
      <h1>Register</h1>
      {/* El hook hace las validaciones , si esta todo bien invoca la funcion onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Registramos los inputs */}
        {/* {...register("nombredelcampo" , {validaciones})} */}
        <input type="email" placeholder="Ingrese email"
          {...register("email", { required: {value:true , message:'Campo obligatorio'} })} />

       {
        //  Si existe un error(si no cumple las validaciones) en el campo email.
         // message corresponde con la propiedad message de la validacion
         errors.email && <p>{errors.email.message}</p>
       }
        {/* Validacion de minimo 6 caracteres */}
        <input type="password" placeholder="Ingrese password" {...register("password" , {minLength: {value:6 , message:"Minimo 6 caracteres"}})} />
        {
            //  Si existe un error(si no cumple las validaciones) en el campo password.
            // message corresponde con la propiedad message de la validacion
            errors.password && <p>{errors.password.message}</p>
        }
        <input type="password" placeholder="Ingrese password" {...register("repassword")} />
        <button>Register</button>
      </form>
    </>
  )
}

export default Register

```
### Expresiones regulares
```js
 <input type="email" placeholder="Ingrese email"
          {...register("email", {
            required:
              { value: true, message: 'Campo obligatorio' },
            pattern: {
               value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
               message:"Formato de email incorrecto"
            }
          })} />

```

### Validacion personalizada
- Usaremos [getValues](https://react-hook-form.com/api/useform/getvalues) para obtener los valores del input registrado en tiempo real.

:::tip Observacion 
- condición && = Verifica que sea true
- condición || = Verifica que sea false
:::
```js
import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { UserContext } from '../context/userProvider'

const Register = () => {
  const { registerUser } = useContext(UserContext)

  const { register, handleSubmit, getValues , formState: { errors } } = useForm();

  //  data = un objeto con los input registrados
  const onSubmit = data => console.log(data);


  return (
    <>
      <h1>Register</h1>
      {/* El hook hace las validaciones , si esta todo bien invoca la funcion onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Registramos los inputs */}
        {/* {...register("nombredelcampo" , {validaciones})} */}
        <input type="email" placeholder="Ingrese email"
          {...register("email", {
            required:
              { value: true, message: 'Campo obligatorio' },
            pattern: {
               value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
               message:"Formato de email incorrecto"
            }
          })} />

        {
          //  Si existe un error(si no cumple las validaciones) en el campo email.
          // message corresponde con la propiedad message de la validacion
          errors.email && <p>{errors.email.message}</p>
        }
        {/* Validacion de minimo 6 caracteres */}
        <input type="password" placeholder="Ingrese password" {...register("password", { 
          minLength: { value: 6, message: "Minimo 6 caracteres" }
          
          
          })} />
        {
          //  Si existe un error(si no cumple las validaciones) en el campo password.
          // message corresponde con la propiedad message de la validacion
          errors.password && <p>{errors.password.message}</p>
        }
        <input type="password" placeholder="Ingrese password" {...register("repassword" , {validate: {
          // equals puede llamarse como quiera , seria el nombre de la funcion que se ejecutaria para validar

          // value es igual al valor del campo

          // Para acceder al valor de un input  
          //getValue("nombrecampo") 
          //nombrecampo = el nombre con el cual se registro 
          
          equals:  value => value === getValues("password") || "No coincide la contraseña"
        }})} />
         {
          //  Si existe un error(si no cumple las validaciones) en el campo password.
          // message corresponde con la propiedad message de la validacion
          errors.repassword && <p>{errors.repassword.message}</p>
        }
        <button>Register</button>
      </form>
    </>
  )
}

export default Register

```
### Validacion espacio en blanco
- Es con trim 
- La negación de String.trim() devuelve true si contiene espacio en blancos.
```js
  if (!'        '.trim()) {
     console.log("contiene espacio en blanco");
   }

```

```js
<input type="password" placeholder="Ingrese password" {...register("password", { 
          minLength: { value: 6, message: "Minimo 6 caracteres" } ,
          validate: {
                 // v es igual al valor del campo
                 trim : v => {
                   if (!v.trim()) return "Escribe algo";
                   return true;
                 }
          }
          
          
          })} />

```

:::tip Observacion 
Si Devuelve true, significa que la validacion paso.
:::
### Validaciones firebase 
- [Codigo de errores](https://firebase.google.com/docs/auth/admin/errors)
- Usamos [setError](https://react-hook-form.com/api/useform/seterror) para crear errores manualmente.
- setError(input_registrado ,objeto con el error)

```js
import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { UserContext } from '../context/userProvider'

const Register = () => {
  const { registerUser } = useContext(UserContext)

  // useForm({valores iniciales})
  const { register, handleSubmit, getValues, formState: { errors }, setError } = useForm(
    {
      defaultValues: {
        email: 'usuario@tes.com',
        password: '123123',
        repassword: '123123'
      }
    }
  );

  //  data = un objeto con los input registrados
  const onSubmit = async (data) => {
    try {
      //Creamos un usuario
      await registerUser(data.email, data.password);
      //Redirreciono al home
      navegate("/home")
    } catch (e) {

      switch (e.code) {
        case 'auth/email-already-in-use':
          // setError(nombre_input_registrado , {error})
          // Podes ignorar la propiedad type del error para que aparezca directamente en el errors.nombre_input_registrado
          setError("email", { message: "Usuario ya registrado" });
          break;
        case "auth/invalid-email":
          setError("email", {
            message: "Formato email no válido",
          });
          break;
        default:
          console.log('Intentelo mas tarde')
          break;
      }

      console.log(e.code);
    }
  }


  return (
    <>
      <h1>Register</h1>
      {/* El hook hace las validaciones , si esta todo bien invoca la funcion onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Registramos los inputs */}
        {/* {...register("nombredelcampo" , {validaciones})} */}
        <input type="email" placeholder="Ingrese email"
          {...register("email", {
            required:
              { value: true, message: 'Campo obligatorio' },
            pattern: {
              value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: "Formato de email incorrecto"
            }
          })} />

        {
          //  Si existe un error(si no cumple las validaciones) en el campo email.
          // message corresponde con la propiedad message de la validacion
          errors.email && <p>{errors.email.message}</p>
        }
        {/* Validacion de minimo 6 caracteres */}
        <input type="password" placeholder="Ingrese password" {...register("password", {
          minLength: { value: 6, message: "Minimo 6 caracteres" },
          validate: {
            // v es igual al valor del campo
            trim: v => {
              if (!v.trim()) return "Escribe algo";
              return true;
            }
          }

        })} />
        {
          //  Si existe un error(si no cumple las validaciones) en el campo password.
          // message corresponde con la propiedad message de la validacion
          errors.password && <p>{errors.password.message}</p>
        }
        <input type="password" placeholder="Ingrese password" {...register("repassword", {
          validate: {
            // equals puede llamarse como quiera , seria el nombre de la funcion que se ejecutaria para validar

            // value es igual al valor del campo

            // Para acceder al valor de un input  
            //getValue("nombrecampo") 
            //nombrecampo = el nombre con el cual se registro 

            equals: value => value === getValues("password") || "No coincide la contraseña"
          }
        })} />
        {
          //  Si existe un error(si no cumple las validaciones) en el campo password.
          // message corresponde con la propiedad message de la validacion
          errors.repassword && <p>{errors.repassword.message}</p>
        }
        <button>Register</button>
      </form>
    </>
  )
}

export default Register

```



## Refactorizar

### Añadimos errores de firebase.
```js
import { useContext } from "react"
import { useForm } from "react-hook-form";
import { UserContext } from '../context/userProvider'

const Register = () => {
  const { registerUser } = useContext(UserContext)

  // useForm({valores iniciales})
  const { register, handleSubmit, getValues, formState: { errors }, setError } = useForm(
    {
      defaultValues: {
        email: 'usuario@tes.com',
        password: '123123',
        repassword: '123123'
      }
    }
  );

  //  data = un objeto con los input registrados
  const onSubmit = async (data) => {
    try {
      //Creamos un usuario
      await registerUser(data.email, data.password);
      //Redirreciono al home
      navegate("/home")
    } catch (e) {

      switch (e.code) {
        case 'auth/email-already-in-use':
          // setError(nombre_input_registrado , {error})
          // Podes ignorar la propiedad type del error para que aparezca directamente en el errors.nombre_input_registrado
          // Estamos creando "firebase" (errors.firebase)
          setError("firebase", { message: "Usuario ya registrado" });
          break;
        case "auth/invalid-email":
          // Estamos creando "firebase" (errors.firebase)
          setError("firebase", {
            message: "Formato email no válido",
          });
          break;
        default:
          console.log('Intentelo mas tarde')
          break;
      }

      console.log(e.code);
    }
  }


  return (
    <>
      <h1>Register</h1>
     { errors.firebase && <p>{errors.firebase.message}</p> 
}

```
### Switch 

- Creamos la Carpeta utils o lib/api
- En esta carpeta van las utilidades.

utils/erroresFirebase.js
```js
// Almacenamos todos los errores (codigo) de firebase
export const erroresFirebase = (code) => {
    switch (code) {
        case 'auth/email-already-in-use':
            return "Usuario ya registrado";
        case "auth/invalid-email":
            return "Formato email no válido"
        default:
            return 'Intentelo mas tarde'
    }
}

```

Register.jsx
```js
import { erroresFirebase } from "../utils/erroresFirebase";
  //  data = un objeto con los input registrados
  const onSubmit = async (data) => {
    try {
      //Creamos un usuario
      await registerUser(data.email, data.password);
      //Redirreciono al home
      navegate("/home")
    } catch (e) {
      setError("firebase", {
        message: erroresFirebase(e.code)
      });


    }
  }

```
### Componente error
components/FormError.jsx
```js

const FormError = ({ error }) => {
    return (
        <>
            {/* Si existe un error(si no cumple las validaciones) 
    message corresponde con la propiedad message de la validacion   
          */}
            {error && <p>{error.message}</p>}
        </>
    )
}

export default FormError

```
Register.jsx
```js
import FormError from "../components/FormError";
return (
    <>
      <h1>Register</h1>
      <FormError error={errors.firebase}/>
      {/* El hook hace las validaciones , si esta todo bien invoca la funcion onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Registramos los inputs */}
        {/* {...register("nombredelcampo" , {validaciones})} */}
        <input type="email" placeholder="Ingrese email"
          {...register("email", {
            required:
              { value: true, message: 'Campo obligatorio' },
            pattern: {
              value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: "Formato de email incorrecto"
            }
          })} />

         <FormError error={errors.email} />

        {/* Validacion de minimo 6 caracteres */}
        <input type="password" placeholder="Ingrese password" {...register("password", {
          minLength: { value: 6, message: "Minimo 6 caracteres" },
          validate: {
            // v es igual al valor del campo
            trim: v => {
              if (!v.trim()) return "Escribe algo";
              return true;
            }
          }

        })} />
         <FormError error={errors.password}/>
        <input type="password" placeholder="Ingrese password" {...register("repassword", {
          validate: {
            // equals puede llamarse como quiera , seria el nombre de la funcion que se ejecutaria para validar

            // value es igual al valor del campo

            // Para acceder al valor de un input  
            //getValue("nombrecampo") 
            //nombrecampo = el nombre con el cual se registro 

            equals: value => value === getValues("password") || "No coincide la contraseña"
          }
        })} />
         <FormError error={errors.repassword}/>

        <button>Register</button>
      </form>
    </>
  )

```
### Validaciones
utils/formValidate.js
```js
export const formValidate = () => {
    return {
        required: { value: true, message: 'Campo obligatorio' },
        patternEmail: {
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: "Formato de email incorrecto"
        },
        minLength6: { value: 6, message: "Minimo 6 caracteres" },
        // v es igual al valor del campo
        validateTrim: {

            trim: v => {
                if (!v.trim()) return "Escribe algo";
                return true;
            }
        },
       validateEquals(getValues) {
           return {
            equals: value => value === getValues("password") || "No coincide la contraseña"
           }
       }
    }
}

```
Register.jsx
```js
import { formValidate } from "../utils/formValidate";

const Register = () => {
  const { required, patternEmail } = formValidate();

 <input type="email" placeholder="Ingrese email"
          {...register("email", {
            required,
            pattern: patternEmail
          })} />

```


```js
import { useContext } from "react"
import { useForm } from "react-hook-form";
import FormError from "../components/FormError";
import { UserContext } from '../context/userProvider'
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";

const Register = () => {
  const { required, patternEmail , minLength6 , validateTrim , validateEquals } = formValidate();
  const { registerUser } = useContext(UserContext)

  // useForm({valores iniciales})
  const { register, handleSubmit, getValues, formState: { errors }, setError } = useForm(
    {
      defaultValues: {
        email: 'usuario@tes.com',
        password: '123123',
        repassword: '123123'
      }
    }
  );

  //  data = un objeto con los input registrados
  const onSubmit = async (data) => {
    try {
      //Creamos un usuario
      await registerUser(data.email, data.password);
      //Redirreciono al home
      navegate("/home")
    } catch (e) {
      setError("firebase", {
        message: erroresFirebase(e.code)
      });


    }
  }

  return (
    <>
      <h1>Register</h1>
      <FormError error={errors.firebase} />
      {/* El hook hace las validaciones , si esta todo bien invoca la funcion onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Registramos los inputs */}
        {/* {...register("nombredelcampo" , {validaciones})} */}
        <input type="email" placeholder="Ingrese email"
          {...register("email", {
            required,
            pattern: patternEmail
          })} />

         <FormError error={errors.email} />
        <input type="password" placeholder="Ingrese password" {...register("password", {
          minLength: minLength6,
          validate: validateTrim

        })} />
        <FormError error={errors.password} />
        <input type="password" placeholder="Ingrese password" {...register("repassword", {
          validate: validateEquals(getValues)
        })} />
        <FormError error={errors.repassword} />

        <button>Register</button>
      </form>
    </>
  )

}

export default Register

```
## useRef
- [link](https://es.reactjs.org/docs/hooks-reference.html#useref)
- Es un hook de React
- Nos permite acceder a todas las propiedades de un elemento(input , etc)
- Sería como el document.getElementById , ósea es la forma de seleccionar un elemento en React
- React creo el ref para optimizar lo que hace  document.getElementById

Ejemplo:

```js
import { useRef } from "react";

const ExampleRef = () => {
    const inputEl = useRef(null);

    const onButtonClick = () => {
        // `current` = input
        inputEl.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>Focus the</button>
        </>
    );
};

export default ExampleRef;

```
:::tip Observacion 
- Al comienzo, ref es null  ya que cuando se inicializa todavia no existe ningún elemento. 
- Al renderizarse el componente, el valor de ref es una referencia al input.
- Con el atributo(props) ref asignamos el valor de ref.
- Con la referencia al input, podemos manipularla (como el focus del ejemplo).
- El valor lo contiene la propiedad current del ref.
:::

## forwardRef
- [link](https://es.reactjs.org/docs/forwarding-refs.html)
-	El Reenvío de refs es una característica opcional que permite a algunos componentes tomar una ref que reciben, y pasarla (en otras palabras, “reenviarla”) a un hijo.
-	Como react no te permite mandar ref a través de props , se utiliza forwardRef  para enviar un ref  a un hijo
-	Se suele utilizar cuando el componente implementa bibliotecas (como el useForm)
-	forwardRef es un método que recibe como parámetro TODO EL COMPONENTE (todo el componente se encierra entre paréntesis)
- El componente que tiene como parámetro tiene acceso a los props y a la referencia (ref).

Ejemplo:

```js
import { forwardRef, useRef } from "react";
// Es un componente
const InputText = forwardRef((props, ref) => {
    return <input type="text" ref={ref} />;
});

const ExampleRef = () => {
    const inputEl = useRef(null);

    const onButtonClick = () => {
        // `current` apunta al elemento de entrada de texto montado
        inputEl.current.focus();
    };

    return (
        <>
            <InputText ref={inputEl} />
            <button onClick={onButtonClick}>Focus the</button>
        </>
    );
};

export default ExampleRef;

```
## forwardRef Proyecto

:::tip Explicacion 
Explicacion de lo que pasa en useForm en la linea:
```js
...register("email")

```
- Esta creando las props onChange , onBlur , ref y name (este ultimo lo hace con el valor que le pasamos entre los paréntesis).
:::

components/FormInput.jsx
```js
import React, { forwardRef } from 'react'

const FormInput = forwardRef(({type , placeholder , onChange , onBlur , name} , ref) => {
  return (
     <input type={type}  placeholder={placeholder} ref={ref} onBlur={onBlur} name={name} onChange={onChange}/>
  )
})

export default FormInput

```
Register.jsx
:::tip Recordatorio
Los props lo pasa el …register (incluyendo el ref)
:::
```js
import { useContext } from "react"
import { useForm } from "react-hook-form";
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import { UserContext } from '../context/userProvider'
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";

const Register = () => {
  const { required, patternEmail, minLength6, validateTrim, validateEquals } = formValidate();
  const { registerUser } = useContext(UserContext)

  // useForm({valores iniciales})
  const { register, handleSubmit, getValues, formState: { errors }, setError } = useForm(
    {
      defaultValues: {
        email: 'usuario@tes.com',
        password: '123123',
        repassword: '123123'
      }
    }
  );

  //  data = un objeto con los input registrados
  const onSubmit = async (data) => {
    try {
      //Creamos un usuario
      await registerUser(data.email, data.password);
      //Redirreciono al home
      navegate("/home")
    } catch (e) {
      setError("firebase", {
        message: erroresFirebase(e.code)
      });


    }
  }
  return (
    <>
      <h1>Register</h1>
      <FormError error={errors.firebase} />
      {/* El hook hace las validaciones , si esta todo bien invoca la funcion onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required,
            pattern: patternEmail
          })}
        >
        </FormInput>
        <FormError error={errors.email} />
        <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register("password", {
            minLength: minLength6,
            validate: validateTrim
          })}
        ></FormInput>
        <FormError error={errors.password} />
        <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register("repassword", {
            validate: validateEquals(getValues)
          })}
        ></FormInput>
        <FormError error={errors.repassword} />
        <button>Register</button>
      </form>
    </>
  )

}

export default Register

```

## Children
- Es una props , que representa los componentes hijos.

FormInput.jsx

```js
import React, { forwardRef } from 'react'

const FormInput = forwardRef(({type , placeholder , onChange , onBlur , name , children} , ref) => {
  return (
    <>
     <input type={type}  placeholder={placeholder} ref={ref} onBlur={onBlur} name={name} onChange={onChange}/>
    {children}

     </>
  )
})

export default FormInput

```
Register.jsx
```js
return (
    <>
      <h1>Register</h1>
      <FormError error={errors.firebase} />
      {/* El hook hace las validaciones , si esta todo bien invoca la funcion onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required,
            pattern: patternEmail
          })}
        >
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register("password", {
            minLength: minLength6,
            validate: validateTrim
          })}
        >
          <FormError error={errors.password} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register("repassword", {
            validate: validateEquals(getValues)
          })}
        >
          <FormError error={errors.repassword} />
        </FormInput>

        <button>Register</button>
      </form>
    </>
  )

```
## Login
Login.jsx
```js
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import FormError from '../components/FormError';
import FormInput from '../components/FormInput';
import { UserContext } from '../context/userProvider'
import { erroresFirebase } from '../utils/erroresFirebase';
import { formValidate } from '../utils/formValidate';

const Login = () => {

  const { loginUser } = useContext(UserContext)
  const { required, patternEmail, minLength6, validateTrim } = formValidate();
  // Creamos el navigate
  const navegate = useNavigate();
  // useForm({valores iniciales})
  const { register, handleSubmit,  formState: { errors }, setError } = useForm(
    {
      defaultValues: {
        email: 'usuario@tes.com',
        password: '123123',
      }
    }
  );
  //  data = un objeto con los input registrados
  const onSubmit = async (data) => {
    try {
      //Iniciamos sesion
      await loginUser(data.email, data.password);
      //Redirreciono al home
      navegate("/home")
    } catch (e) {
      setError("firebase", {
        message: erroresFirebase(e.code)
      });


    }
  }
  return (
    <>
      <h1>Login</h1>
      <FormError error={errors.firebase} />
        {/* El hook hace las validaciones , si esta todo bien invoca la funcion onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required,
            pattern: patternEmail
          })}
        >
          <FormError error={errors.email} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register("password", {
            minLength: minLength6,
            validate: validateTrim
          })}
        >
          <FormError error={errors.password} />
        </FormInput>
        <button>Login</button>
      </form>
    </>
  )
}

export default Login

```
utils/erroresFirebase.js
```js
// Almacenamos todos los errores (codigo) de firebase
export const erroresFirebase = (code) => {
    switch (code) {
        case 'auth/email-already-in-use':
            return "Usuario ya registrado";
        case "auth/invalid-email":
            return "Formato email no válido"
        case "auth/user-not-found":
              return "Usuario no registrado"
        case "auth/wrong-password":
            return "Contraseña incorrecta"
        default:
            return 'Intentelo mas tarde'
    }
}

```
## Problemas 

### Problema "usuario ya registrado"
- Una vez que aparece el error “usuario ya registrado” , no te permite crear un usuario en el register
- Eso pasa porque “No se limpia” los errores (setError) de firebase.
- Linea que genera el error: 
```js
setError("firebase", {
        message: erroresFirebase(e.code)
      });

```
#### Solucion
- Que los errores pertenezcan a un input registrado, para que se vayan limpiando a medida que se modifica los inputs.

utils/erroresFirebase.js

```js
// Almacenamos todos los errores (codigo) de firebase
export const erroresFirebase = (code) => {
    switch (code) {
        case 'auth/email-already-in-use':
            return {code:"email" , message : "Usuario ya registrado"};
        case "auth/invalid-email":
            return {code:"email" , message : "Formato email no válido" }
        case "auth/user-not-found":
              return {code:"email" , message :"Usuario no registrado"}
        case "auth/wrong-password":
            return {code:"password" , message :"Contraseña incorrecta"
    }
        default:
            return {code:"email" , message :'Intentelo mas tarde' }
    }
}

```
Register.jsx
```js
//  data = un objeto con los input registrados
  const onSubmit = async (data) => {
    try {
      //Creamos un usuario
      await registerUser(data.email, data.password);
      //Redirreciono al home
      navegate("/home")
    } catch (e) {
      const {code , message} = erroresFirebase(e.code);
      setError(code , {message})
    }
  }

```
Login.jsx
```js
//  data = un objeto con los input registrados
  const onSubmit = async (data) => {
    try {
      //Iniciamos sesion
      await loginUser(data.email, data.password);
      //Redirreciono al home
      navegate("/home")
    } catch (e) {
      const {code , message} = erroresFirebase(e.code);
      setError(code , {message})
    }
  }

```
### Optimizar register: 
Register.jsx
- Para que pueda comparar dos valores que no sean password.

```js
 <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register("repassword", {
            validate: validateEquals(getValues("password"))
          })}
        >
          <FormError error={errors.repassword} />
        </FormInput>

```
utils/formValidate.js
```js
 validateEquals(value) {
           return {
            equals: v => v === value || "No coincide la contraseña"
           }
       }

```
## TailwindCSS & flowbite
- [link](https://tailwindcss.com/)
- Es un framework de css
- Tiene clases dinámica
- Es como Bootstrap, pero más avanzado.




### Tailwind vs Bootstrap 
- Bootstrap tiene componentes predefinidos. Dentro de una clase hay miles de propiedades css.
- Tailwind  es mucho más personalizado , cada clase tiene una propiedad
- Velocidad == Bootstrap || Personalización == Tailwind

### Tailwind 
- Un componente es un conjunto de clases
- [Modulo que ofrece un conjunto de componentes](https://flowbite.com/)
- [Lista de clases y las propiedades que contienen](https://tailwindcomponents.com/cheatsheet/)
- [Como comenzar con react](https://flowbite.com/docs/getting-started/react/)

:::tip vite 
Vite limpia las clases de Tailwind/flowbite y solo compilara las que use el proyecto.
:::

### Instalacion de tailwind y flowbite

1. Instalamos tailwind
```powershell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```
:::tip Observacion 
La última línea creara dos archivos: postcss.config.js y Tailwind.config.js
:::
2. Configuracion de tailwind

tailwind.config.js:

```js
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
:::tip Observacion 
Se esta haciendo un seguimiento a js , jsx , ts , tsx
:::
3. Importar tailwind en el index.css

src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```
4. Instalamos flowbite
```powershell
npm install flowbite
```
5. Configuramos tailwind para trabajar con flowbite

tailwind.config.js:

```js
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}" , "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
}

```
6. Importamos el javascript de flowbite en el proyecto

main.jsx

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import UserProvider from './context/userProvider';
import 'flowbite';

```
### Empezamos con el diseño del proyecto 
- [Transformar html en jsx](https://transform.tools/html-to-jsx )
### titulo
components/Title.jsx
```js

const Title = ({text}) => {
  return (
    <h1 className="text-center my-5 text-4xl">{text}</h1>
  )
}

export default Title

```
### input
components/FormInput.jsx
```js
import React, { forwardRef } from 'react'

const FormInput = forwardRef(({type , placeholder , onChange , onBlur , name , label , children , error} , ref) => {

   const errorClassLabel = error? "block mb-2 text-sm font-medium text-red-700 dark:text-red-500" : "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300";
   const errorClassInput = error? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  return (
    <div className="mb-6">
      <label
  htmlFor="email"
  className={errorClassLabel}
>
  {label}
</label>
     <input type={type}  placeholder={placeholder} ref={ref} onBlur={onBlur} name={name} onChange={onChange}
     className={errorClassInput}
     />
    {children}
   
     </div>
  )
})

export default FormInput

```
### Boton 
components/Button.jsx
```js

const Button = ({ text }) => {
    return (
        <button
            type="submit"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
            {text}
        </button>
    )
}

export default Button

```
### Error de formulario 
components/FormError.jsx
```js

const FormError = ({ error }) => {
    return (
        <>
            {/* Si existe un error(si no cumple las validaciones) 
    message corresponde con la propiedad message de la validacion   
          */}
            {error &&  (<p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> {error.message}</p>)}
        </>
    )
}

export default FormError

```
Register.jsx
```js
import { useContext } from "react"
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import { UserContext } from '../context/userProvider'
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";

const Register = () => {
  const { required, patternEmail, minLength6, validateTrim, validateEquals } = formValidate();
  const { registerUser } = useContext(UserContext)

  // useForm({valores iniciales})
  const { register, handleSubmit, getValues, formState: { errors }, setError } = useForm(
    {
      defaultValues: {
        email: 'usuario@tes.com',
        password: '123123',
        repassword: '123123'
      }
    }
  );

  //  data = un objeto con los input registrados
  const onSubmit = async (data) => {
    try {
      //Creamos un usuario
      await registerUser(data.email, data.password);
      //Redirreciono al home
      navegate("/home")
    } catch (e) {
      const {code , message} = erroresFirebase(e.code);
      setError(code , {message})
    }
  }
  return (
    <>
      <Title text="Register"/>
      <FormError error={errors.firebase} />
      {/* El hook hace las validaciones , si esta todo bien invoca la funcion onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese email"

          {...register("email", {
            required,
            pattern: patternEmail
          })}
          label="Ingresa tu correo"
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register("password", {
            minLength: minLength6,
            validate: validateTrim
          })}
          label="Ingresa tu password"
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register("repassword", {
            validate: validateEquals(getValues("password"))
          })}
          label="Repite tu password"
          error={errors.repassword}
        >
          <FormError error={errors.repassword} />
        </FormInput>

        <Button text="Register"/>
      </form>
    </>
  )

}

export default Register

```
Login.jsx  
```js
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';
import FormError from '../components/FormError';
import FormInput from '../components/FormInput';
import Title from '../components/Title';
import { UserContext } from '../context/userProvider'
import { erroresFirebase } from '../utils/erroresFirebase';
import { formValidate } from '../utils/formValidate';

const Login = () => {

  const { loginUser } = useContext(UserContext)
  const { required, patternEmail, minLength6, validateTrim } = formValidate();
  // Creamos el navigate
  const navegate = useNavigate();
  // useForm({valores iniciales})
  const { register, handleSubmit,  formState: { errors }, setError } = useForm(
    {
      defaultValues: {
        email: 'usuario@tes.com',
        password: '123123',
      }
    }
  );
  //  data = un objeto con los input registrados
  const onSubmit = async (data) => {
    try {
      //Iniciamos sesion
      await loginUser(data.email, data.password);
      //Redirreciono al home
      navegate("/home")
    } catch (e) {
      const {code , message} = erroresFirebase(e.code);
      setError(code , {message})
    }
  }
  return (
    <>
       <Title text="Login"/>
      <FormError error={errors.firebase} />
        {/* El hook hace las validaciones , si esta todo bien invoca la funcion onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required,
            pattern: patternEmail
          })}
          label="Ingresa tu correo"
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register("password", {
            minLength: minLength6,
            validate: validateTrim
          })}
          label="Ingresa tu contraseña"
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>
        <Button text="Login"/>
      </form>
    </>
  )
}

export default Login

```
## Outlet
- Nos sirve para hacer que dos componentes compartan el mismo layout 
- Se hace con Outlet de react router
- Nos permite que varios componentes compartan el mismo layout

App.jsx
```js
return (
    <>

      <h1>App</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<LayoutContainerForm/>}>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Route>
        <Route path='/home' element={
          /* Ruta protegida (Home) */
          <RequireAuth >
            <Home />
          </RequireAuth>
        }></Route>
      </Routes >

    </>
  )

```
components/LayoutContainerForm.jsx
```js
import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutContainerForm = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default LayoutContainerForm

```
:::tip Observacion
En Outlet se va a renderizar el componente hijo (que pueden ser Register o Login)
:::

### Le aplicamos diseño 
```js
import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutContainerForm = () => {
  return (
    <>
    <div className="w-96 mx-auto mt-10">
      <Outlet/>
      </div>
    </>
  )
}

export default LayoutContainerForm

```