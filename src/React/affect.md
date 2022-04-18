# React Router v6
## Router v6
- [link](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
-	React Router es una biblioteca de enrutamiento del lado del servidor y del cliente con todas las funciones para React.
-	React Router se ejecuta en cualquier lugar donde se ejecute React; en la web, en el servidor con node.js y en React Native.


### En la carpeta raiz
```powershell
npx create-react-app router-tutorial
cd router-tutorial
npm i react-router-dom@6 
npm start
```
1. Limpiamos la carpeta src dejando solo el index.js
2. Creamos el App.jsx en src

## Conectar Url

- Para Conectar la aplicación a la Url del navegador:
   -    Hay que Usar BrowserRouter para conectar nuestra aplicación al Router.
   - Se importa BrowserRouter y se renderiza alrededor de toda la aplicación.

index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

```

## Navbar
```powershell
npm i bootstrap
```
Llamamos a bootstrap:

index.js:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
const root = ReactDOM.createRoot(document.getElementById('root'));

```
App.jsx
```js
import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
      <div>
      <Navbar/>
    <div className="container">
        <h1>App</h1>
    </div>
    </div>
  )
}

export default App

```
### Link 


- En lugar de usar anclas (etiqueta a) , usamos la etiqueta Link
- router dom nos ofrece la etiqueta link para crear enlaces(ancla).
- En lugar de usar el atributo(props) href , usamos el atributo to 
- href equivale a to

src/components/Navbar.jsx
```js
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav className="navbar navbar-dark bg-dark">
         <div className="container">  
          <Link className="btn btn-outline-primary" to="/">Inicio</Link>
          <Link className="btn btn-outline-primary" to="/contacto">Contacto</Link>
          <Link className="btn btn-outline-primary" to="/blog">Blog</Link></div>
       
     </nav>
  )
}

export default Navbar

```
:::warning
 Ya tenemos las rutas, pero todas renderizan el App.jsx .  Eso se debe a que todavia no configuramos las rutas.
:::
## Agregar Rutas
- Creamos la carpeta routes dentro de src
:::tip
A veces la carpeta routes se llama views
:::
- Los archivos adentro de dicha carpeta son componentes

src/routes/Blog.jsx
```js
import React from 'react'

const Blog = () => {
  return (
    <div><h1>Blog</h1></div>
  )
}

export default Blog

```
src/routes/Contacto.jsx
```js
import React from 'react'

const Contacto = () => {
  return (
    <div><h1>Contacto</h1></div>
  )
}

export default Contacto

```
src/routes/Inicio.jsx
```js
import React from 'react'

const Inicio = () => {
  return (
    <div><h1>Inicio</h1></div>
  )
}

export default Inicio

```
### Configuracion de las Rutas

:::tip Observacion 
- Adentro de BrowserRouter , renderizamos Routes
- Adentro de Routes ,  configuramos las rutas.
- Para configurar las rutas usamos Route.
:::
:::tip Route
- Necesita el atributo(props) path cuyo valor es la url.
- Necesita el atributo(props) element para especificar el elemento(componente) que se va a pintar(renderizar) en el path(url) que se especifico.
:::
:::tip Observacion
En el ejemplo, en la ruta raiz se va a renderizar el componente App
:::

```js
<React.StrictMode>
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<App />}/>
     </Routes>
 
    </BrowserRouter>
  </React.StrictMode>

```
index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import {BrowserRouter,  Route,  Routes} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contacto' element={<Contacto />}/>
     </Routes>
 
    </BrowserRouter>
  </React.StrictMode>
);

```
## Rutas anidadas
-	Es posible que haya notado al hacer clic en los enlaces que el navbar desaparece
- Cuando las rutas tienen niños, hace dos cosas:
    -	Anida las URL ( "/" + "blog" y "/" + "contacto")
    - Anidará los componentes para crear un diseño     compartido (el diseño contiene los dos componentes) cuando la ruta secundaria coincida
- Conclusion: Se renderizan los componentes de la url "/" y de la url "blog" en una url 

index.js
```js
<BrowserRouter>
     <Routes>
        <Route path='/' element={<App />}> 
        <Route path='blog' element={<Blog />}/>
        <Route path='contacto' element={<Contacto />}/>
        </Route>
     </Routes>
 
    </BrowserRouter>

```
:::warning
- En el ejemplo anterior, todas las rutas renderizan App.
- Para solucionar esto usamos el Outlet  en el componente principal(componente padre)
:::



### Outlet
- Con el Outlet especificamos en donde se va a renderizar los componentes hijos.

App.jsx
```js
return (
      <div>
      <Navbar/>
    <div className="container">
        <Outlet/>
    </div>
    </div>
  )

```
:::tip Explicacion 

Explicacion:
  Url: http://localhost:3000/blog 
 -  Se renderiza App.jsx (componente padre ya que es “/”)
 -  Dentro de la App , se renderiza el componente hijo en donde se encuentra Outlet
- Por lo tanto, el componente Blog se renderiza adentro del componente App.
- “/” = App.jsx      
- blog = Blog.jsx
- Se anidaron: “/blog” y por lo tanto se renderizan ambos componentes, pero el hijo(Blog.jsx) lo hace en el padre(App.jsx)
:::

## Ruta indice


-	Observe que tiene el atributo(prop) index en lugar de path.
-	Eso es porque la ruta del índice comparte la ruta del padre.
-	Las rutas de índices coinciden cuando coincide con la ruta principal(padre), pero no coincide con ninguna de las otras secundarias(hermanos).
-	Las rutas de índice son la ruta predeterminada para una ruta principal.
-	Las rutas de índice se representan cuando el usuario aún no ha hecho clic en uno de los elementos de una lista de navegación.
- Conclusión:  Se renderiza cuando el path es igual al del componente padre(ruta del padre) y no hay ningún path configurado para dicha ruta.

index.js
```js
 <React.StrictMode>
    <BrowserRouter>
     <Routes>
     
        <Route path='/' element={<App />}> 
        <Route index element={<Inicio/>}/>
        <Route path='blog' element={<Blog />}/>
        <Route path='contacto' element={<Contacto />}/>
        </Route>
     </Routes>
 
    </BrowserRouter>
  </React.StrictMode>

```
## Enlaces activos (NavLink)
- [link](https://reactrouter.com/docs/en/v6/getting-started/tutorial#active-links)
- Sirve para mostrar el enlace activo que está mirando el usuario
- Para lograr este efecto , solo cambiamos Link por NavLink
- Coloca la clase active al enlace que seleccionas.

Navbar.jsx
```js
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav className="navbar navbar-dark bg-dark">
         <div className="container">  
          <NavLink className="btn btn-outline-primary" to="/">Inicio</NavLink>
          <NavLink className="btn btn-outline-primary" to="/contacto">Contacto</NavLink>
          <NavLink className="btn btn-outline-primary" to="/blog">Blog</NavLink></div>
       
     </nav>
  )
}

export default Navbar

```
## 404

src/routes/NoEncontrada.jsx
```js
import React from 'react'
import { Link } from "react-router-dom";
const NoEncontrada = () => {
  return (
    <div> <h1>404</h1>
    <Link to="/" className="btn btn-outline-dark">
        Inicio
    </Link></div>
  )
}

export default NoEncontrada

```
index.js
```js
  <Routes>
     
        <Route path='/' element={<App />}> 
        <Route index element={<Inicio/>}/>
        <Route path='blog' element={<Blog />}/>
        <Route path='contacto' element={<Contacto />}/>
         <Route path='*' element={<NoEncontrada/>}/>
        </Route>
     </Routes>

```
:::tip path="*" 
- path=”*”  Significa cualquier ruta  que no coincida con las rutas secundarias(hijos).
- “*” = Cualquier ruta que no sea secundaria.
:::

## Hooks de Parametros
- [link1](https://dev.to/shaedrizwan/building-custom-hooks-in-react-to-fetch-data-4ig6)
- [link2](https://dev.to/nicomartin/the-right-way-to-fetch-data-with-react-hooks-48gc)
- [link3](https://www.npmjs.com/package/react-fetch-hook)
- [api a utilizar](https://jsonplaceholder.typicode.com/)
- [ruta de la api a consumir](https://jsonplaceholder.typicode.com/posts)

:::tip Hooks
- Los hooks devuelven variables de Estado (useState) y suelen tener mínimo un parámetro que lo hace dinamico.
- Sirven para poder reutilizar la logica.
:::
src/hooks/useFetch.js
```js
import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data , setData] = useState([]);
    const [error , setError] = useState('');
    const [loading , setLoading] = useState(false);
    useEffect(() => {
         setLoading(true);
         fetch(url)
         .then(res => res.json())
         .then(data => setData(data))
         .catch(e => setError('Error de servidor'))
         .finally(() => setLoading(false));
    } , [url])
  return {data, error , loading}
}

```
Blog.jsx
```js
import React from 'react'
import { useFetch } from '../hooks/useFetch'

const Blog = () => {
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts/');

  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error !== '') {
    return <h2>{error}</h2>
  }
  return (
    <div>
      <h1>Blog</h1>
      {
        data.map(item => (
          <h4 key={item.id}>{item.id} - {item.title}</h4>
        ))
      }
    </div>
  )
}

export default Blog

```
## Ruta dinámica
Blog.jsx
```js
import React from 'react'
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'

const Blog = () => {
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts/');

  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error !== '') {
    return <h2>{error}</h2>
  }
  return (
    <div>
      <h1>Blog</h1>
      {
        data.map(item => (
          <h4 key={item.id}>
            <Link to={`/blog/${item.id}`}> {item.id} - {item.title}</Link>
          </h4>
        ))
      }
    </div>
  )
}

export default Blog

```
src/components/Post.jsx
:::tip 
En realidad es una ruta pero por error lo pusimos en components y no en routes
:::
:::tip
Por cada ruta (estática o dinámica), se debe crear una vista/componente
:::

```js
import React from 'react'

const Post = () => {
  return (
    <div>
        <h1>POST id: aqui el id dinamico</h1>
    </div>
  )
}

export default Post

```

index.js
:::tip URL con variable
- El path contiene una variable que se asigna con los dos puntos(“:”) y el nombre
- path='blog/:nombrevariable'
- Entonces si accedemos a http://localhost:3000/blog/1, el valor de nombrevariable seria 1.
- Utilizamos la variable para leer un dato de la url.
- Esas variables son conocidas como parámetros


:::
```js
 <Routes>
     
        <Route path='/' element={<App />}> 
        <Route index element={<Inicio/>}/>
        <Route path='blog' element={<Blog />}/>
        <Route path='blog/:id' element={<Post />}/>
        <Route path='contacto' element={<Contacto />}/>
         <Route path='*' element={<NoEncontrada/>}/>
        </Route>
     </Routes>

```
## Leer los parametros desde el Componente
- A través de useParams() que devuelve un objeto con las variables(parametros)  de la url y sus valores correspondiente.


Post.jsx
```js
import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
const Post = () => {
    //Leemos la variable mandada por la url 
    // params es un objeto que contiene las variables mandada por la url con sus valores correspondiente
    const params = useParams()
    const { data, error, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if (loading) {
        return <h2>Loading...</h2>
      }
      if (error !== '') {
        return <h2>{error}</h2>
      }
  return (
    <div>
        <h1>{data.id} - {data.title}</h1>
        <p>{data.body}</p>
    </div>
  )
}

export default Post

```
## Parámetros de búsqueda
-	React Router hace que sea fácil  leer y manipular los parámetros de búsqueda (parámetros de la url para filtrar datos) con useSearchParams
-	Funciona de manera muy similar a React.useState() pero almacena y establece el estado en los parámetros de  la URL (establece el estado en la url)en lugar de en la memoria.

```js

    let [searchParams , setSearchParams] = useSearchParams()

    useEffect(() => {
       // http://localhost:3000/blog?juanito=juan
       // Leemos la variable(parámetro) juanito 
        console.log(searchParams.get("juanito"));
    } , [searchParams])

```

Blog.jsx
:::tip Observacion
- Es como useState pero maneja variables de estado en la URL ( a traves de los parametros).
- Con el método get obtenes los valores de los  parametros de la URL.
- Con el método set modificas los parametros de la URL.
:::
```js
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'

const Blog = () => {

  let [searchParams , setSearchParams] = useSearchParams();

 const handleChangue = e => {
     let filter = e.target.value;
     if (filter) {
      setSearchParams({filter})
     } else {
      setSearchParams({});
     }
 }

  
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts/');

  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error !== '') {
    return <h2>{error}</h2>
  }
  return (
    <div>
      <h1>Blog</h1>
       {/* Si existe el parametro filter , toma ese valor en el value , en caso contrario es un String vacio */}
      <input type="text" className="form-control mb-" placeholder="" value={searchParams.get('filter') || ''}
      onChange={handleChangue}/>
      {
        data.filter(item => {
          let filter = searchParams.get('filter');
          if (!filter) return true

          let title = item.title.toLowerCase();
          // Si empieza con lo que introduce el usuario en el input
          return title.startsWith(filter)

        }).map(item => (
          <h4 key={item.id}>
            <Link to={`/blog/${item.id}`}> {item.id} - {item.title}</Link>
          </h4>
        ))
      }
    </div>
  )
}

export default Blog

```
## Netlify + queryParams
- [link](https://stackoverflow.com/questions/56468161/netlify-does-not-recognize-the-url-params-when-using-react-router-dom)
- Crear archivo _redirects en public con:

/* /index.html 200

- npm run build para compilar la APP

- subirlo en sites a la carpeta build.