# Proyecto #1

## Iniciamos el proyecto con vite 
- [¿que es vite?](https://fedeleva.github.io/aprendizaje/React/proyecto.html#vite)

```powershell
npm create vite@latest my-vue-app -- --template vue
```

- Es parecido a React
- La aplicación se monta en el index.html (el div con la id app)
- El src/main.js crea la aplicación y la renderiza en el div del index.html
- Por lo tanto, lo que se renderiza es el src/App.vue 

App.vue 
- Es un componente
```js
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

## script setup
- Lo que esta adentro de esa etiqueta, se va al template.
- Se ejecutará cada vez que se cree una instancia del componente .
- Al usar script setup, cualquier enlace de nivel superior (incluidas variables, declaraciones de funciones e importaciones) declarado dentro script setup se puede usar directamente en la plantilla
```js
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

```
## Componente App
- Creamos nuestro componente App

App.vue 

- Podes usar el snippet vue  (vbase-3-setup)
- Utilizamos la etiqueta template
- Lo que contiene la etiqueta template se va a renderizar.

```js
<template>
 <h1>App</h1>
</template>

```

### Inicializar servidor
```powershell
npm run dev  
```

## vue-router
- [link](https://router.vuejs.org/installation.html#direct-download-cdn)
- [como empezar](https://router.vuejs.org/guide/)
```powershell
npm install vue-router@4
```
### 1. Creamos la carpeta views dentro de src
- Tambien se puede llamar routes
- Aca van todos los componentes que se van a renderizar en las rutas

src/views/Home.vue
```js
<template>
    <div>
       <h1>Home</h1>
    </div>
</template>

<script setup>

</script>

```
src/views/Login.vue
```js
<template>
    <div>
       <h1>Login</h1>
    </div>
</template>

<script setup>

</script>

```

src/views/Register.vue
```js

<template>
    <div>
       <h1>Register</h1>
    </div>
</template>

<script setup>

</script>

```
:::tip Observacion 
Las tres rutas son components
:::
### 2. Creamos el archivo router.js en src
- Crea el router
- Tiene las configuraciones de las rutas
- Este archivo especifica que componente debe renderizar en base a la url.
- El router lo utiliza la app (main.js)

src/router.js
```js
// createWebHistory = Para evitar el # en la url
import {createRouter , createWebHistory } from 'vue-router';

// componentes
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

 // routes = array de objetos
 // cada objeto es una ruta 
const routes = [
    // path : ruta   components: componente a renderizar en la ruta
    {path:"/" , component: Home},
    {path:"/login" , component: Login},
    {path:"/register" , component: Register},
]

// creamos el router con toda su configuracion 
// createRouter({rutas , history})
const router = createRouter({ 
    routes ,
    history : createWebHistory()
})

export default router;

```
main.js
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// use(router) = Que utilize el router
createApp(App).use(router).mount('#app')

```

:::tip Observacion 
- Con  createWebHistory: http://localhost:3000/login
- Con createWebHashHistory y sin createWebHistory:  http://localhost:3000/#/login
::::

### 3. Configuramos el componente App para que renderice las vistas

App.vue 
```js
<template>
  <div>
    <h1>App</h1>
    <!-- Es como un componente que lo genera el router que renderiza las vistas  -->
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>

```
## Navbar 
- en lugar de usar la etiqueta a , utiliza la etiqueta router-link
- el lugar de usar el atributo href , se utiliza el to.

App.vue 

```js
<template>
  <div>
    <h1>App</h1>

    <nav>
      <!-- <router-link> es el equivalente a <a></a> -->
      <!-- el to="valor" es equivalente a href="valor" -->
      <router-link to="/">Home </router-link>  |
      <router-link to="/login">Login </router-link> |
      <router-link to="/register">Register </router-link> |
      <button>Logout</button>
    </nav>

    <!-- Es como un componente que lo genera el router que renderiza las vistas  -->
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>

```
## Pinia 
- [link](https://pinia.vuejs.org/)
-	Pinia es una biblioteca de  Store para Vue, le permite compartir un estado entre componentes/páginas.
-	Aunque Pinia es lo suficientemente bueno para reemplazar a Vuex, reemplazar a Vuex no era su objetivo. Pero luego se volvió tan bueno que el equipo central de Vue.js decidió convertirlo en Vuex 5.
-	Es el equivalente a [context Api](https://fedeleva.github.io/aprendizaje/React/context.html)  de react
-	Permite compartir un estado entre componentes
-	Sirve para implementar un estado global
- [pinia vs vuex](https://blog.logrocket.com/pinia-vs-vuex/)

### Instalacion 
```powershell
npm install pinia
```

main.js

- Inicializamos pinia 
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia'
// use(router) = Que utilize el router
//use(createPinia()) = Que inicialice pinia
createApp(App).use(router).use(createPinia()).mount('#app')

```
## State  / Variables en componentes
- Creamos la Carpeta stores dentro de src
- Podemos crear varias stores dentro de esta carpeta

src/stores/user.js

- Vamos a crear una tienda.
- Todas las tiendan tienen un nombre que las identifica y un objeto con las configuraciones.
- En las configuraciones se encuentra el estado, las acciones (permite modificar el estado) y los getter (permite obtener el estado de forma computada).
- Todo lo que contiene el estado se comparte con todos los componentes.

```js
import { defineStore } from 'pinia'

//defineStore("nombre" , {configuracion})
export const useUserStore = defineStore("userStore" , {
    //state: funcion flecha que retorna la configuracion 
    state : () => ({
          userData : 'nombreusuario@tes.com'
    })
    
})

```

Home.vue

:::tip Observacion 
Para escribir variables dentro de vue(template) es con:
 ```js
  {{ variable}}
 ```

:::

```js
<template>
    <div>
       <h1>Home - {{userStore.userData}}</h1>
    </div>
</template>

<script setup>
  import { useUserStore } from '../stores/user';
  // Accedemos a la tienda
  // userStore = contiene el objeto que retornaba state
  const userStore = useUserStore();
</script>

```
## GETTER

- Los captadores son solo propiedades computadas detrás de escena, por lo que no es posible pasarles ningún parámetro (solo el State)
- Sin embargo, puede devolver una función del getter para aceptar cualquier argumento: [link](https://pinia.vuejs.org/core-concepts/getters.html#passing-arguments-to-getters)

Login.vue

- Utilizamos los getter(computed) para modificar un valor del estado.
- El valor modificado no se guardará en la Store. (no modificara el estado)
- Es un getter que puede modificar el valor devuelto. Ej. te devuelve la información en mayúscula.
- Hace un cálculo, pero no lo modifica.

```js
<template>
    <div>
       <h1>Login</h1>
       <p>{{mayuscula}}</p>
    </div>
</template>

<script setup>
  
import { computed } from 'vue';
import { useUserStore } from '../stores/user';
  // Accedemos a la tienda
  // userStore = contiene el objeto que retornaba state
  const userStore = useUserStore();
  // computed(callback que retorna el valor)
  const mayuscula = computed(() => userStore.userData.toUpperCase());
</script>

```

### Hacemos lo mismo pero desde la tienda 

:::warning
Los getter siempre deben retornar algo.
:::

user.js 
```js
import { defineStore } from 'pinia'

//defineStore("nombre" , {configuracion})
export const useUserStore = defineStore("userStore" , {
    //state: funcion flecha que retorna la configuracion 
    state : () => ({
          userData : 'nombreusuario@tes.com'
    }) ,
    // getters : {  los computed}
    getters: {
       mayuscula(state) {
          return state.userData.toUpperCase();
       }
    }
    
})

```

Login.vue 
```js
<template>
    <div>
       <h1>Login</h1>
       <p>{{mayuscula}}</p>
    </div>
</template>

<script setup>
  
import { computed } from 'vue';
import { useUserStore } from '../stores/user';
  // Accedemos a la tienda
  // userStore = contiene el objeto que retornaba state
  const userStore = useUserStore();
  // LLamamos al getter mayuscula
  const mayuscula = userStore.mayuscula;
</script>

```

## ACTIONS  / Eventos
-	Las acciones son el equivalente de los métodos en los componentes. Se pueden definir con la propiedad actions en defineStore() y son perfectos para definir la lógica empresarial
-	Son para mutar/modificar el estado.

user.js 
```js
import { defineStore } from 'pinia'

//defineStore("nombre" , {configuracion})
export const useUserStore = defineStore("userStore" , {
    //state: funcion flecha que retorna la configuracion 
    state : () => ({
          userData : 'nombreusuario@tes.com'
    }) ,
    // getters : {  los computed}
    getters: {
       mayuscula(state) {
          return state.userData.toUpperCase();
       }
    } ,
    // actions : {metodos}
    actions : {
        registerUser(name) {
            // con el this accedemos al estado
            this.userData = name
        }
    }
    
})

```
Register.vue

- Trabajamos con eventos
:::tip Evento 
- @evento=”codigo”
- Al producirse el evento , ejecuta el codigo
:::

```js
<template>
    <div>
        <h1>Register</h1>
        <button @click="userStore.registerUser('Registrado')">Ingresar</button>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
</script>

```

## Firebase 9
- [link](https://firebase.google.com/docs/web/setup?authuser=0&hl=es)
- [consola](https://console.firebase.google.com/u/0/)
- [que es?](https://fedeleva.github.io/aprendizaje/React/proyecto.html#firebase-9)

### Instalacion 
```powershell
npm install firebase
```
### Configuracion 

- Este codigo le deberia aparecer en firebase (mas o menos) ([ver el apartado de firebase en React para obtenerlo](https://fedeleva.github.io/aprendizaje/React/proyecto.html#firebase-9))

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "xxx",
    authDomain: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { db, auth };

```

### Habilitamos la autenticacion 

1. Habilitamos la autenticacion de correo electronico/contraseña  en la pagina de firebase
2. Generamos el auth que se va a implementar en todas las autenticaciones ya sea para iniciar sesion o registrarse.

firebaseConfig.js

-  Es un Archivo de configuracion que va en src 

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  projectId: "XXX",
  storageBucket: "XXX",
  messagingSenderId: "XXX",
  appId: "XXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};

```

## Formulario / preventDefault() 

Register.vue

:::tip Observacion 
@evento.prevent = evento.preventDefault().
:::

```js
<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email">
            <input type="password" placeholder="Ingrese password">
            <button type="submit">Crear usuario</button>
        </form>

    </div>
</template>

<script setup>
    const handleSubmit = () => {
        console.log("procesando");
    }
</script>

```
## ref 
- Nos permite acceder a todas las propiedades de un elemento del template.
- [Casi lo mismo que useRef de react](https://fedeleva.github.io/aprendizaje/React/proyecto.html#useref)
- Se le asigna v-model a un elemento/componente del template cuyo valor es la constante que contiene un ref (v-model = “variable const”)
- A través de v-model se le asigna la referencia a la variable.
- Esa constante tendría una referencia a ese elemento “HTML”  , por lo tanto se podría decir que es igual a  document.getElementById…. de javascript.


Register.vue
```js
<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email" v-model="email">
            <input type="password" placeholder="Ingrese password" v-model="password">
            <button type="submit">Crear usuario</button>
        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
    const handleSubmit = () => {
        console.log(email.value);
        console.log(password.value);
        
    }
</script>

```
### Valores por defecto del formulario 
```js
const email = ref('usuario@tes.com');
const password = ref('123123');

```
## Validaciones (Trim)

:::tip Observacion 
el trim (limpia los espacios) se le puede poner al v-model.
:::

```js
<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email" v-model.trim="email">
            <input type="password" placeholder="Ingrese password" v-model.trim="password">
            <button type="submit">Crear usuario</button>
        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('usuario@tes.com');
const password = ref('123123');
    const handleSubmit = () => {
         if (!email.value || !password.value){
             return alert('llena los campos');
         }
        
    }
</script>

```
## Register 
- Utilizamos el metodo [createUserWithEmailAndPassword](https://fedeleva.github.io/aprendizaje/React/proyecto.html#createuserwithemailandpassword)

stores/user.js
```js
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: 'nombreusuario@tes.com'
    }),
    actions: {
        async registerUser(email, password) {
            try {
                // Creamos el usuario
                 const usuario = await createUserWithEmailAndPassword(auth, email, password)
                 // Accedemos a la propiedad user 
                 console.log(usuario.user)
            } catch (error) {
                console.log(error)
            }
        }
    }
})

```
Register.vue
```js
<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
const email = ref('usuario@tes.com');
const password = ref('123123');
    const handleSubmit = () => {
         if (!email.value || !password.value){
             return alert('llena los campos');
         }
         userStore.registerUser(email.value, password.value)
         console.log("Te registraste");
    }
</script>

```
:::tip Observacion 
Como se puede observar, la propiedad user contiene toda la información del usuario.
:::

En base a la observacion , podemos hacer algunos cambios : 

stores/user.js

```js
    async registerUser(email, password) {
            try {
                // Creamos el usuario
                const { user } = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid }
            } catch (error) {
                console.log(error)
            }
        }

```
## useRouter (Redirrecion)

Register.vue
```js
<script setup>
// vue
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// store
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
//ref
const email = ref('usuario@tes.com');
const password = ref('123123');
// Creamos el router
const router = useRouter();
const  handleSubmit = async () => {
    if (!email.value || !password.value) {
        return alert('llena los campos');
    }
    await userStore.registerUser(email.value, password.value)
    // Redirrecionamos a la pagina raiz ('/') , al home
    router.push('/')
}
</script>

```

## Login 
- Usamos el metodo [signInWithEmailAndPassword](https://fedeleva.github.io/aprendizaje/React/proyecto.html#signinwithemailandpassword)

stores/user.js
```js
 actions: {
        async registerUser(email, password) {
            try {
                // Creamos el usuario
                const { user } = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid }
            } catch (error) {
                console.log(error)
            }
        },
        async loginUser(email, password) {
            try {
                // Iniciamos sesion y sacamos la informacion del usuario(la contiene la propiedad user)
                const { user } = await signInWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid };
            } catch (error) {
                console.log(error);
            }
        }
    }

```

Login.vue
```js
<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email" v-model.trim="email">
            <input type="password" placeholder="Ingrese password" v-model.trim="password">
            <button type="submit">Acceso</button>
        </form>

    </div>
</template>

<script setup>
// vue
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// store
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
//ref
const email = ref('usuario@tes.com');
const password = ref('123123');
// router
const router = useRouter();
const  handleSubmit = async () => {
    if (!email.value || !password.value) {
        return alert('llena los campos');
    }
    await userStore.loginUser(email.value, password.value)
    // Redirrecionamos a la pagina raiz ('/') , al home
    router.push('/')
}
</script>

```
## Logout
- Usamos el metodo [signOut](https://fedeleva.github.io/aprendizaje/React/proyecto.html#signout)

stores/user.js

```js
 actions: {
        async registerUser(email, password) {
            try {
                // Creamos el usuario
                const { user } = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid }
            } catch (error) {
                console.log(error)
            }
        },
        async loginUser(email, password) {
            try {
                // Iniciamos sesion y sacamos la informacion del usuario(la contiene la propiedad user)
                const { user } = await signInWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid };
            } catch (error) {
                console.log(error);
            }
        },
        async logoutUser() {
            try {
                await signOut(auth);
                this.userData = null;
            } catch (error) {
                console.log(error);
            }
        }
    }

```
App.vue
```js
<template>
  <div>
    <h1>App</h1>

    <nav>
      <!-- <router-link> es el equivalente a <a></a> -->
      <!-- el to="valor" es equivalente a href="valor" -->
      <router-link to="/">Home </router-link>  |
      <router-link to="/login">Login </router-link> |
      <router-link to="/register">Register </router-link> |
      <button @click="userStore.logoutUser">Logout</button>
    </nav>

    <!-- Es como un componente que lo genera el router que renderiza las vistas  -->
    <router-view></router-view>
  </div>
</template>

<script setup>
   import { useUserStore } from './stores/user';
   const userStore = useUserStore();
</script>

```

## Redirrecion con el router
- El archivo router.js que creamos también tiene los mismos métodos para redirrecionar.

user.js
```js
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import router from '../router'
export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: null
    }),
    actions: {
        async registerUser(email, password) {
            try {
                // Creamos el usuario
                const { user } = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid }
                router.push('/')
            } catch (error) {
                console.log(error)
            }
        },
        async loginUser(email, password) {
            try {
                // Iniciamos sesion y sacamos la informacion del usuario(la contiene la propiedad user)
                const { user } = await signInWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid };
                router.push('/')
            } catch (error) {
                console.log(error);
            }
        },
        async logoutUser() {
            try {
                await signOut(auth);
                this.userData = null;
                router.push('/login')
            } catch (error) {
                console.log(error);
            }
        }
    }
})

```
## Loading – “Atributos” dinamicos


user.js

```js
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import router from '../router'
export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: null,
        loadingUser: false
    }),
    actions: {
        async registerUser(email, password) {
            this.loadingUser = true;
            try {
                // Creamos el usuario
                const { user } = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid }
                router.push('/')
            } catch (error) {
                console.log(error)
            } finally {
                this.loadingUser = false;
            }
        },
        async loginUser(email, password) {
            this.loadingUser = true;
            try {
                // Iniciamos sesion y sacamos la informacion del usuario(la contiene la propiedad user)
                const { user } = await signInWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid };
                router.push('/')
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false;
            }
        },
        async logoutUser() {
            try {
                await signOut(auth);
                this.userData = null;
                router.push('/login')
            } catch (error) {
                console.log(error);
            }
        }
    }
})

```

Login.vue

:::tip Atributos dinamicos

- Para que se bloquee/desactive el botón mientras se está procesando la información del usuario usamos :disabled=”valor”
- Solo se bloqueará si el valor es true
- Usamos los dos puntos(“:”) porque es dinámico. (Esta pendiente del valor, como useState)
:::

```js
            <button type="submit" :disabled="userStore.loadingUser">Acceso</button>
```

Register.vue
```js
           <button type="submit" :disabled="userStore.loadingUser">Crear usuario</button>
```

## Ruta protegida
- La ruta protegida es el Home.

user.js 

- Usamos el metodo [onAuthStateChanged](https://fedeleva.github.io/aprendizaje/React/proyecto.html#onauthstatechanged)
- onAuthStateChanged tiene un tercer parámetro que es un callback para gestionar el error (recibe el error y lo manipula)
- onAuthStateChanged es el único que NO DEVUELVE UNA PROMESA , por lo tanto la creamos.
- [link](https://stackoverflow.com/questions/42762443/how-can-i-unsubscribe-to-onauthstatechanged)


```js
 actions: {
        async registerUser(email, password) {
            this.loadingUser = true;
            try {
                // Creamos el usuario
                const { user } = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid }
                router.push('/')
            } catch (error) {
                console.log(error)
            } finally {
                this.loadingUser = false;
            }
        },
        async loginUser(email, password) {
            this.loadingUser = true;
            try {
                // Iniciamos sesion y sacamos la informacion del usuario(la contiene la propiedad user)
                const { user } = await signInWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid };
                router.push('/')
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false;
            }
        },
        async logoutUser() {
            try {
                await signOut(auth);
                this.userData = null;
                router.push('/login')
            } catch (error) {
                console.log(error);
            }
        },
        currentUser() {
            return new Promise((resolve, reject) => {
                const unsuscribe = onAuthStateChanged(auth, (user) => {
                    if (user) {
                        this.userData = { email: user.email, uid: user.uid };
                    } else {
                        this.userData = null;
                    }
                    resolve(user);
                }, error => reject(error))
                unsuscribe();
            })
        }
    }

```


:::tip Observacion
- Como se puede observar, es una función que se ejecuta una sola vez para que deje de estar como observador.
:::

routes.js

- El método useUserStore() se debe llamar dentro de un método. (en caso contrario no se garantiza su funcionamiento)
:::tip beforeEnter
- Utilizamos beforeEnter para activar un método antes de que entre a la ruta (al componente)
- El metodo se ejecutara antes de renderizar el componente.
- sintaxis: beforeEnter:método
:::
```js

import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import { useUserStore } from './stores/user';
const requireAuth = async (to, from, next) => {
    const userStore = useUserStore();
    const user = await userStore.currentUser();
    // Si existe el usuario
    if (user) {
        // Que se renderize el component 
        next();
    } else {
        // Vaya al login
        next("/login");
    }
}

const routes = [

    { path: "/", component: Home, beforeEnter: requireAuth },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;

```
:::tip Observacion 
- La función(método)  RequireAuth es como un middleware.
- Con el método next redirecciono.
:::

## Componentes y v-if


:::tip Componentes 
Como se puede ver, los componentes se renderizan como si fueran una etiqueta html
```html
<componente></componente>
```
:::

- Utilizamos el v-if  para especificar cuando se va a renderizar un componente o etiqueta html , en este caso el componente router-link.
- v-if=”condición”
- Si la condición es true , se renderizara el componente.


App.vue
```js

<template>
  <div>
    <h1>App</h1>

    <nav>
      <!-- <router-link> es el equivalente a <a></a> -->
      <!-- el to="valor" es equivalente a href="valor" -->
      <router-link to="/" v-if="userStore.userData">Home </router-link>  |
      <router-link to="/login" v-if="!userStore.userData">Login </router-link> |
      <router-link to="/register" v-if="!userStore.userData">Register </router-link> |
      <button @click="userStore.logoutUser" v-if="userStore.userData">Logout</button>
    </nav>

    <!-- Es como un componente que lo genera el router que renderiza las vistas  -->
    <router-view></router-view>
  </div>
</template>

<script setup>
   import { useUserStore } from './stores/user';
   const userStore = useUserStore();
</script>

```
:::tip Observacion 
- Si el user(userData) existe , se renderizaran los enlaces de Home y el botón de Logout .
- Si user(userData) no existe , se renderizaran los enlaces de login y register.
:::

## Loading  y v-else 

user.js
```js
 state: () => ({
        userData: null,
        loadingUser: false,
        loadingSession:false
    }),

```

router.js
```js
const requireAuth = async (to, from, next) => {
    const userStore = useUserStore();
    userStore.loadingSession = true;
    const user = await userStore.currentUser();
    // Si existe el usuario
    if (user) {
        // Que se renderize el component 
        next();
    } else {
        // Vaya al login
        next("/login");
    }
    userStore.loadingSession = false;
}

```
App.vue

```js
<template>
  <div>
    <h1>App</h1>

    <nav v-if="!userStore.loadingSession">
      <router-link to="/" v-if="userStore.userData">Home </router-link>  |
      <router-link to="/login" v-if="!userStore.userData">Login </router-link> |
      <router-link to="/register" v-if="!userStore.userData">Register </router-link> |
      <button @click="userStore.logoutUser" v-if="userStore.userData">Logout</button>
    </nav>
    <div v-else>
      <p>Loading...</p>
    </div>

    <!-- Es como un componente que lo genera el router que renderiza las vistas  -->
    <router-view></router-view>
  </div>
</template>

```

:::tip Observacion 
- El nav se mostrara solo si loadingSession es false
- En caso contrario  (else (v-else) )  , si loadingSession es true ,  se mostrara un párrafo diciendo loading…
:::

## Verificar cuenta correo

- [link](https://firebase.google.com/docs/auth/web/manage-users?hl=es&authuser=0#send_a_user_a_verification_email)
- Utilizamos el método sendEmailVerification para verificar una cuenta por email


### En FireBase 
1. Entramos a FireBase – Autenticacion – Plantilla
- Podes modificar la plantilla del correo.
2. Le cambiamos el idioma

### En el proyecto 
user.js
```js
 async registerUser(email, password) {
            this.loadingUser = true;
            try {
                // Creamos el usuario
                await createUserWithEmailAndPassword(auth, email, password)
                // Enviamos un email de validacion
                //sendEmailVerification(currentUser)
               await sendEmailVerification(auth.currentUser)
                router.push('/login')
            } catch (error) {
                console.log(error)
            } finally {
                this.loadingUser = false;
            }
        },

```
### Mas seguridad a la ruta protegida 

- Pedimos que la cuenta sea verificada para entrar.


router.js
```js
const requireAuth = async (to, from, next) => {
    const userStore = useUserStore();
    
    userStore.loadingSession = true;
    const user = await userStore.currentUser();
    // Si existe el usuario
    if (user && user.emailVerified) {
        // Que se renderize el component 
        next();
    } else {
        // Vaya al login
        next("/login");
    }
    userStore.loadingSession = false;
}

```

:::warning 
Para seguir con el proyecto y la explicación , lo quitamos ya que trabajamos con usuarios ficticios.
:::