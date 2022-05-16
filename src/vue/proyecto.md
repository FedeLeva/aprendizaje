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
    //state: función flecha que retorna el estado.
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
    //state: función flecha que retorna el estado.
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
    //state: función flecha que retorna el estado.
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
:::warning 
- El v-else siempre debe estar debajo del if . 
- Si no se puede, se debe crear otro if.
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

## Inicializa Cloud Firestore

- [link](https://firebase.google.com/docs/firestore/quickstart?hl=es#initialize)

### Pasos en Firebase
1. Creamos una bd de Firestore en firebase[ver apartado de react](https://fedeleva.github.io/aprendizaje/React/proyecto.html#firestore-bd)  en modo test.
- Mientras mas uso de la bd se haga , mas dinero vas a perder (mas te van a cobrar)
2. Creamos una colección llamado urls
- Iniciar colección = Crear colección  
:::tip Campos de los documentos que se va a utilizar en los ejemplos

 - name: 'https://bluuweb.org',
 - short: 'aDgdGd',
 - user: 'pQycjKGmIKQ2wL4P1jvkAPhH4gh2'
:::
### Pasos en el proyecto 

firebaseConfig.js

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
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
const db = getFirestore(app);
export {auth , db};

```

## Creamos otra store / Leer doc 

stores/database.js

- [link](https://firebase.google.com/docs/firestore/query-data/get-data?hl=es#get_multiple_documents_from_a_collection)

- Esta vez, a diferencia de la [guía de react](https://fedeleva.github.io/aprendizaje/React/proyecto.html#getdocs), creamos una query(consulta) y se la pasamos al método getDocs (este ejecuta la consulta)

```js
import { collection, getDocs, query } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { db } from '../firebaseConfig'

export const useDatabaseStore = defineStore('database', {
    state: () => ({
        document: []
    }),
    actions: {
        async getUrls() {
            try {
                // Creamos una query 
                // query(metodo collection)
                const q = query(collection(db, "urls"));
                // Obtenemos todos los documentos
                //getDocs(query)
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => {
                    // doc.id = La id del documento
                    // doc.data() = devuelve un objeto con toda la informacion del documento (excepto la id)
                    console.log(doc.id, doc.data());
                })
            } catch (error) {
                console.log(error)
            } finally {

            }
        }
    }
})

```

Home.vue 

```js
<template>
  <div>
    <h1>Home - {{ userStore.userData.email }}</h1>
  </div>
</template>

<script setup>
import { useDatabaseStore } from '../stores/database';
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
const databaseStore = useDatabaseStore();
databaseStore.getUrls()

</script>

```
## WHERE 
- Usamos el [auth.currentUser](https://fedeleva.github.io/aprendizaje/React/proyecto.html#where) para obtener la información del usuario autenticado.

```js
 async getUrls() {
            try {
                // Creamos una query 
                // query(metodo collection , metodo where)
                const q = query(collection(db, "urls"), where(
                    "user", "==", auth.currentUser.uid
                ));
                // Obtenemos todos los documentos
                //getDocs(query)
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => {
                    // doc.id = La id del documento
                    // doc.data() = devuelve un objeto con toda la informacion del documento (excepto la id)
                    console.log(doc.id, doc.data());
                })
            } 

```
## V-for 

database.js
```js
async getUrls() {
            try {
                // Creamos una query 
                // query(metodo collection , metodo where)
                const q = query(collection(db, "urls"), where(
                    "user", "==", auth.currentUser.uid
                ));
                // Obtenemos todos los documentos
                //getDocs(query)
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => {
                    // doc.id = La id del documento
                    // doc.data() = devuelve un objeto con toda la informacion del documento (excepto la id)
                   this.document.push({ 
                       id:doc.id , 
                       ...doc.data()
                   })
                })
            } catch (error) {
                console.log(error)
            } finally {

            }
        }

```
Home.vue 
```js
<template>
  <div>
    <h1>Home</h1>
    <ul>
    <li v-for="item of databaseStore.document" :key="item.id">
       {{item.name}}
    </li>
    </ul>
  </div>
</template>

<script setup>
import { useDatabaseStore } from '../stores/database';
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
const databaseStore = useDatabaseStore();
databaseStore.getUrls()
</script>

```
:::tip Observacion 
- Recorrerá Cada objeto del array document
- sintaxis: v-for=”nombre of array”
- Por cada iterracion , nombre corresponde a un valor del array
- 1 iterracion ---  nombre = array[0] , 2 iterracion --- nombre =   array[1]
- Por cada iterracion generara una etiqueta li 
- Cada etiqueta tiene el atributo key con un valor único.
- Como react, cada ítem debe tener una key para ser identificada en el DOM.
:::

:::warning 
En este ejemplo crea etiquetas li , pero  lo que se genera depende de que componente/etiqueta tenga el v-for
:::

:::warning 
el of sirve para recorrer array

el in sirve para recorrer objeto
:::
## Loading 
database.js 
```js
state: () => ({
        document: [] , 
        loadingDoc:false
    }),
    actions: {
        async getUrls() {
            this.loadingDoc = true;
            try {
                // Creamos una query 
                // query(metodo collection , metodo where)
                const q = query(collection(db, "urls"), where(
                    "user", "==", auth.currentUser.uid
                ));
                // Obtenemos todos los documentos
                //getDocs(query)
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => {
                    // doc.id = La id del documento
                    // doc.data() = devuelve un objeto con toda la informacion del documento (excepto la id)
                   this.document.push({ 
                       id:doc.id , 
                       ...doc.data()
                   })
                })
            } catch (error) {
                console.log(error)
            } finally {
                this.loadingDoc = false;
            }
        }
    }

```
Home.vue
```js
<template>
  <div>
    <h1>Home</h1>
    <p v-if="databaseStore.loadingDoc">Loading docs...</p>
    <ul v-else>
    <li v-for="item of databaseStore.document" :key="item.id">
       {{item.name}}
    </li>
    </ul>
  </div>
</template>

```
## Reset Store 
- [Reiniciar Estado](https://pinia.vuejs.org/core-concepts/state.html#resetting-the-state)
- [Usar una tienda dentro de otra](https://pinia.vuejs.org/core-concepts/actions.html#accessing-other-stores-actions)

user.js 

:::tip Recordatorio 
El store se debe usar dentro de una función para evitar problemas.
:::

```js
  async logoutUser() {
            // Accedemos a la tienda de database
         const databaseStore = useDatabaseStore();
         databaseStore.$reset();
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
                            // Accedemos a la tienda de database
         const databaseStore = useDatabaseStore();
         databaseStore.$reset();
                    }
                    resolve(user);
                }, error => reject(error))
                unsuscribe();
            })
        }

```
:::tip Observacion 
- Accedemos a una tienda dentro de otra tienda.
- Reseteamos el estado de la tienda database.
:::

Para evitar problemas:

database.js 
```js
 async getUrls() {
            if (this.document.length !== 0) {
                return;
            }
            this.loadingDoc = true;

```

## Agregar Doc 
- [link](https://firebase.google.com/docs/firestore/manage-data/add-data?hl=es#add_a_document)
- [Lo mismo que React](https://fedeleva.github.io/aprendizaje/React/proyecto.html#add-doc)

```powershell
npm i nanoid
```
database.js
```js
  actions: {
        async getUrls() {

            this.loadingDoc = true;
            try {
                // Creamos una query 
                // query(metodo collection , metodo where)
                const q = query(collection(db, "urls"), where(
                    "user", "==", auth.currentUser.uid
                ));
                // Obtenemos todos los documentos
                //getDocs(query)
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => {
                    // doc.id = La id del documento
                    // doc.data() = devuelve un objeto con toda la informacion del documento (excepto la id)
                    this.document.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
            } catch (error) {
                console.log(error)
            } finally {
                this.loadingDoc = false;
            }
        },
        async addUrl(name) {
            try {
                const objetoDoc = {
                    name: name,
                    short: nanoid(6),
                    user: auth.currentUser.uid,
                }

                // addDoc(collection , documento)
                // el documento es el objeto que se va a insertar en la BD
                const docRef = await addDoc(collection(db, "urls"), objetoDoc)
                this.document.push({
                    // cuando se crea el objeto , te devuelve una propiedad con la id
                    ...objetoDoc, id: docRef.id
                })
            } catch (error) {
                console.log(error)
            } finally {

            }
        }
    }

```

Home.vue
```js
<template>
  <div>
    <h1>Home</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Ingrese url" v-model="url">
      <button type="submit">Agregar</button>
    </form>
    <p v-if="databaseStore.loadingDoc">Loading docs...</p>
    <ul v-else>
    <li v-for="item of databaseStore.document" :key="item.id">
       {{item.name}}
    </li>
    </ul>
  </div>
</template>

<script setup>
import { useDatabaseStore } from '../stores/database';
import {ref} from 'vue';
const databaseStore = useDatabaseStore();
databaseStore.getUrls()
const url = ref('');

const handleSubmit = () => {
  
 
  databaseStore.addUrl(url.value);
}
</script>

```

## Borrar doc / getDoc

- [Eliminar documento](https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=es#delete_documents)
- [Obtener un documento](https://firebase.google.com/docs/firestore/query-data/get-data?hl=es#get_a_document)
- [Eliminar un documento (Explicacion en react)](https://fedeleva.github.io/aprendizaje/React/proyecto.html#delete-doc)
- [Obtener un documento (Explicacion en react)](https://fedeleva.github.io/aprendizaje/React/proyecto.html#redirect-params-en-la-url-getdoc)

database.js
```js
actions: {
        async getUrls() {

            this.loadingDoc = true;
            try {
                // Creamos una query 
                // query(metodo collection , metodo where)
                const q = query(collection(db, "urls"), where(
                    "user", "==", auth.currentUser.uid
                ));
                // Obtenemos todos los documentos
                //getDocs(query)
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => {
                    // doc.id = La id del documento
                    // doc.data() = devuelve un objeto con toda la informacion del documento (excepto la id)
                    this.document.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
            } catch (error) {
                console.log(error)
            } finally {
                this.loadingDoc = false;
            }
        },
        async addUrl(name) {
            try {
                const objetoDoc = {
                    name: name,
                    short: nanoid(6),
                    user: auth.currentUser.uid,
                }

                // addDoc(collection , documento)
                // el documento es el objeto que se va a insertar en la BD
                const docRef = await addDoc(collection(db, "urls"), objetoDoc)
                this.document.push({
                    // cuando se crea el objeto , te devuelve una propiedad con la id
                    ...objetoDoc, id: docRef.id
                })
            } catch (error) {
                console.log(error)
            } finally {

            }
        },
        async deleteUrl(id) {
            try {
                // Referencia al documento
                const docRef = doc(db, "urls", id);
                const docSpan = await getDoc(docRef);
                if (!docSpan.exists()) {
                     throw new Error("No existe el doc");
                }
                if (docSpan.data().user !== auth.currentUser.uid){
                    throw new Error("No le pertenece ese documento");
                }
                //Eliminamos 
                await deleteDoc(docRef);
                this.document = this.document.filter(item =>
                    item.id !== id)
            } catch (error) {
                console.log(error)
            }
        }
    }

```

Home.vue
```js
<template>
  <div>
    <h1>Home</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Ingrese url" v-model="url">
      <button type="submit">Agregar</button>
    </form>
    <p v-if="databaseStore.loadingDoc">Loading docs...</p>
    <ul v-else>
      <li v-for="item of databaseStore.document" :key="item.id">
        {{ item.name }} <br> 
        <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

```

## Variables en Url (getDoc)
- [Obtener un documento (Explicacion en react)](https://fedeleva.github.io/aprendizaje/React/proyecto.html#redirect-params-en-la-url-getdoc)


router.js 

:::tip Variable en la Url
- Se realiza con los dos puntitos seguido del nombre de la variable (“:nombrevariable”)

Ejemplo:
/editar/:id

Si vamos a la url /editar/484465

El valor de la variable id es 484465



:::
```js
const routes = [

    { path: "/", component: Home, beforeEnter: requireAuth },
    { path: "/editar/:id", component: Editar, beforeEnter: requireAuth },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
]

```
Home.vue 
```js
<template>
  <div>
    <h1>Home</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Ingrese url" v-model="url">
      <button type="submit">Agregar</button>
    </form>
    <p v-if="databaseStore.loadingDoc">Loading docs...</p>
    <ul v-else>
      <li v-for="item of databaseStore.document" :key="item.id">
        {{ item.name }} <br> 
        <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>     
         <button @click="router.push(`/editar/${item.id}`)">Editar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useDatabaseStore } from '../stores/database';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const databaseStore = useDatabaseStore();
databaseStore.getUrls()
const url = ref('');

const handleSubmit = () => {

  databaseStore.addUrl(url.value);
}
</script>

```
database.js
- [link ](https://firebase.google.com/docs/firestore/query-data/get-data?hl=es#get_a_document)
- [Obtener un documento (Explicacion en react)](https://fedeleva.github.io/aprendizaje/React/proyecto.html#redirect-params-en-la-url-getdoc)

```js
 async leerUrl(id) {
            try {
                // Referencia al documento
                const docRef = doc(db, "urls", id);
                // Obtenemos un documento
                const docSpan = await getDoc(docRef);
                if (!docSpan.exists()) {
                    throw new Error("No existe el doc");
                }
                if (docSpan.data().user !== auth.currentUser.uid) {
                    throw new Error("No le pertenece ese documento");
                }
                return docSpan.data().name
            } catch (error) {
                console.log(error);
            } finally {

            }
        },
        async deleteUrl(id) {
            try {
                // Referencia al documento
                const docRef = doc(db, "urls", id);
                const docSpan = await getDoc(docRef);
                if (!docSpan.exists()) {
                    throw new Error("No existe el doc");
                }
                if (docSpan.data().user !== auth.currentUser.uid) {
                    throw new Error("No le pertenece ese documento");
                }
                //Eliminamos 
                await deleteDoc(docRef);
                this.document = this.document.filter(item =>
                    item.id !== id)
            } catch (error) {
                console.log(error)
            }
        }

```
## Leer variable url / onMounted 
:::tip Leer variable de la url 
- Para leer las variables de la url Utilizamos useRoute() que devuelve un objeto. 
- El objeto tiene la propiedad params que contiene otro objeto donde cada propiedad es una variable de la url con su valor correspondiente.
:::


:::tip onMounted
- Es un método de vue que recibe un callback.
- El callback se ejecutara al montarse/renderizarse el componente.
:::

:::tip Se considera montado después de
-	Se han montado todos sus componentes secundarios síncronos (no incluye componentes asíncronos ni componentes dentro de árboles).
-	Se ha creado su propio árbol DOM y se ha insertado en el contenedor principal. Tenga en cuenta que solo garantiza que el árbol DOM del componente esté en el documento si el contenedor raíz de la aplicación también está en el documento.


:::

views/Editar.vue 
```js
<template>
    <div>
        <h1>Editar</h1>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Ingrese url" v-model="url">
            <button type="submit">Editar</button>
        </form>
    </div>
</template>

<script setup>
import { onMounted , ref} from 'vue';
import { useRoute } from 'vue-router';
import { useDatabaseStore } from '../stores/database';
// Nos devuelve un objeto para tener acceso a las variables de la url.
const route = useRoute();

const databaseStore = useDatabaseStore()

const handleSubmit = () => {

}

const url = ref('');

// El callback se ejecuta al montarse el componente.
onMounted(async () => {
    // route.params.nombrevariable
     url.value = await databaseStore.leerUrl(route.params.id)
})
</script>

```

## Update doc 
- [link](https://firebase.google.com/docs/firestore/manage-data/add-data?hl=es#update-data)
- [Explicacion en React](https://fedeleva.github.io/aprendizaje/React/proyecto.html#update-doc)

database.js 
```js
  async updateUrl(id, name) {
            try {
                // Referencia al documento
                const docRef = doc(db, "urls", id);
                // Obtenemos un documento
                const docSpan = await getDoc(docRef);
                if (!docSpan.exists()) {
                    throw new Error("No existe el doc");
                }
                if (docSpan.data().user !== auth.currentUser.uid) {
                    throw new Error("No le pertenece ese documento");
                }
                //updateDoc(referencia documento , {datos a actualizar})
                await updateDoc(docRef, { name: name })

             this.document = this.document.map((item) => item.id === id ? {...item , name : name} : item)
            
             router.push("/")

            } catch (error) {
                console.log(error)
            }
        },
        async deleteUrl(id) {
            try {
                // Referencia al documento
                const docRef = doc(db, "urls", id);
                const docSpan = await getDoc(docRef);
                if (!docSpan.exists()) {
                    throw new Error("No existe el doc");
                }
                if (docSpan.data().user !== auth.currentUser.uid) {
                    throw new Error("No le pertenece ese documento");
                }
                //Eliminamos 
                await deleteDoc(docRef);
                this.document = this.document.filter(item =>
                    item.id !== id)
            } catch (error) {
                console.log(error)
            }
        }

```

Editar.vue
```js
<template>
    <div>
        <h1>Editar</h1>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Ingrese url" v-model="url">
            <button type="submit">Editar</button>
        </form>
    </div>
</template>

<script setup>
import { onMounted , ref} from 'vue';
import { useRoute } from 'vue-router';
import { useDatabaseStore } from '../stores/database';
// Nos devuelve un objeto para tener acceso a las variables de la url.
const route = useRoute();

const databaseStore = useDatabaseStore()

const handleSubmit = () => {
   databaseStore.updateUrl(route.params.id , url.value);
}

const url = ref('');

// El callback se ejecuta al montarse el componente.
onMounted(async () => {
    // route.params.nombrevariable
     url.value = await databaseStore.leerUrl(route.params.id)
})
</script>

```

## Rules 
- [Explicado en la seccion de React](https://fedeleva.github.io/aprendizaje/React/proyecto.html#regla-de-seguridad)

### Siempre comienta con : service cloud.firestore 

- Sirve para que no se confunda con Cloud Storage.
- La declaración service cloud.firestore define el alcance de las reglas a Cloud Firestore, lo que evita conflictos entre las reglas de seguridad de Cloud Firestore y las reglas de otros productos, como Cloud Storage.

### Declaracion match /databases/{database}/documents

- La declaración match /databases/{database}/documents especifica que las reglas deberían coincidir con cualquier base de datos de Cloud Firestore en el proyecto. Actualmente, cada proyecto tiene solo una base de datos llamada (default).
:::warning 
- No confundir colección con base de datos.
- En la versión gratis solo tenemos una BD.
:::

### Reglas básicas de lectura y escritura
- Las reglas básicas consisten en una declaración match que especifica la ruta de un documento y una expresión allow que describe cuándo se permite la lectura de los datos especificados (documento especificado)
- Todas las declaraciones de coincidencia deben apuntar a los documentos, no a las colecciones. Una declaración de coincidencia puede apuntar a un documento específico, como en match /coleccion/ID , o usar comodines para apuntar a cualquier documento en la ruta especificada, como en match /coleccion/{variable}.
- Cuando se evalúan las expresiones allow en la declaración de coincidencia, la variable  se convierte en el nombre del documento(ID) . 

### Resultado Final 

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /urls/{id} {
      allow read, update, delete: if request.auth != null && request.auth.uid == resource.data.user;
      allow create: if request.auth != null;
    }
  }
}

```

## Deploy 

- [Explicacion en la seccion de React](https://fedeleva.github.io/aprendizaje/React/proyecto.html#deploy)

```js
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```
:::tip ¿ejecución de scripts está deshabilitada en este sistema?
Ejecutar windows + R –> gpedit.msc. Ir a Plantillas administrativas> Componentes de Windows> Windows PowerShell> Seleccionar Activar la ejecución de scripts, click derecho, editar. Seleccionar Habilitada y Permitir todos los scripts, Aplicar.
:::

## Ant Design Vue

:::tip unplugin-vue-components
- Permite utilizar los componentes sin necesidad de importarlos (import)
- Sirve para no tener tantas importaciones.
- Podes usar componentes sin necesidad de utilizar el import.
:::


### Ant Design Of Vue
- [link](https://www.antdv.com/docs/vue/introduce)

### Instalacion de ambos 
1. Instalamos los modulos
```powershell
npm install ant-design-vue –save
npm i unplugin-vue-components

```
2. Configuramos vite para trabajar con ant-design y ant design

vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  Components({
    resolvers: [AntDesignVueResolver()],
  }),]
})

```
:::tip Observacion 
Utilizamos unplugin-vue-components en la configuración de ant-design
:::

### Listo!!

- A partir de ahora podemos usar los componentes que nos brinda andv
- [Lista de componente](https://www.antdv.com/components/overview/)
### Componente a-button

#### Props

- type  : Especifica la forma del boton 

#### Ejemplos

App.vue 
```js
<template>
  <div>
    <h1>App</h1>
      <a-button type="primary">Primary Button</a-button>

```
:::tip Observacion 
- En script setup no escribimos nada porque la importación se hace automáticamente gracias a unplugin-vue-components.
- Con la configuración que hicimos en vite , logramos que el css solo se importe cuando se use los componentes que lo utilice.
:::

## Layout  
- [layout](https://www.antdv.com/components/layout)
- El Layout es la forma de distribuir el contenido del sitio web.

### Layout con Menu


Componentes que utilizamos:


#### A-layout 
- Todo se envuelve en este componente.
- Habilita el layout
#### A-layout-header
- Representa la cabecera(header)
#### A-menu 
- Envuelve todo el menu de navegacion
##### Props:
  - v-model:selectedKeys : Sirve para para identificar que a-menu-item esta abierto (en base a la key) y indicarle al usuario que link esta viendo.
#### A-menu-item
- Representa cada enlace(link)
##### Props: 
- Key : Sirve para que el componente a-menu pueda identificarla.
#### a-layout-content 
- Representa el contenido del sitio web


App.vue 
```js
<template>

  <a-layout>
    <a-layout-header v-if="!userStore.loadingSession">
      <!-- Tiene la props dark y mode -->
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }"  v-model:selectedKeys="selectedKeys">
        <a-menu-item v-if="userStore.userData" key="home">
          <router-link to="/">Home </router-link>
        </a-menu-item>
        <a-menu-item v-if="!userStore.userData"  key="login">
          <router-link to="/login" >Login </router-link>
        </a-menu-item>
        <a-menu-item v-if="!userStore.userData"  key="register">
          <router-link to="/register">Register </router-link>
        </a-menu-item >
        <a-menu-item @click="userStore.logoutUser" v-if="userStore.userData"  key="logout">
          Logout
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <div v-if="userStore.loadingSession">
          <p>Loading...</p>
        </div>
        <router-view></router-view>
      </div>
    </a-layout-content>


  </a-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from './stores/user';
const userStore = useUserStore();
 const selectedKeys =  ref(['login'])
</script>

```

## Name del router

- En la configuración de las rutas, le podemos asignar un name a cada ruta.
- Ese name seria como el ID de cada ruta, sirve para identificarla con el router.

router.js 
```js
const routes = [
    // Le asignamos un nombre(identificador) a cada ruta
    // {name : nombre}
    { path: "/", component: Home, beforeEnter: requireAuth , 
    name: 'home'},
    { path: "/editar/:id", component: Editar, beforeEnter: requireAuth },
    { path: "/login", component: Login , name: 'login'},
    { path: "/register", component: Register , name: 'register' },
]

```
### Tener acceso al name desde la vista

App.vue 

- [link](https://stackoverflow.com/questions/63800831/how-to-access-current-route-name-reactively-in-vue-composition-api-in-typescript)
- Para acceder al name , se utiliza el useRoute 

:::tip watch
- A través del watch ([similar a useEffect](https://fedeleva.github.io/aprendizaje/React/todoApp.html#localstorage-con-useeffect)) estamos pendiente de algo.
- Watch tiene dos parámetros, una función que devuelve el dato el cual va a estar pendiente y una función.
- La función del segundo parámetro se ejecutará cada vez que el dato cambio.
- El watch es para asignar un observador de algo.
:::

App.vue 

```js
<script setup>
import { ref, watch } from 'vue';
import { useUserStore } from './stores/user';
import { useRoute } from 'vue-router';
const userStore = useUserStore();
const selectedKeys = ref([]);
// Inicializamos route
const route = useRoute();
// watch(funcion que devuelve un dato , funcion)
// vamos a estar pendiente del dato
//route.name = el nombre de la ruta
watch(() => route.name, () => {
  selectedKeys.value =  [route.name];
});

</script>

```

## Grid
- [link](https://next.antdv.com/components/grid)
- Es un sistema de 24 columnas

### Componentes:

#### a-row
- Representa una fila 

#### a-col 
- Representa una columna 

#### props: 

##### span 
- Indica la cantidad de columnas que va a ocupar (width)

##### offset 
- Es el margen horizontal

##### xs , sm 
- Es un punto de ruptura para hacerlo responsive , recibe un objeto con el span y offset.

## Formulario

- [link](https://www.antdv.com/components/form
)

### Componentes 

#### a-form 
- Representa la etiqueta form 
#### Props:
- name 
- label-col 
- wrapper 
- model 
- model
- layout 
- evento @finish (cuando cumple las validaciones)
- evento @finishFailed (cuando falle las validaciones)
- etc


#### a-form-item 
- Envuelve un componente a-input
#### Props:
- name 
- label 
- rules (validaciones)

#### a-input
- Representa un input
- Utiliza un v-model 

#### a-input-password
- Es como el anterior , pero para los password.

#### a-button 
- Tiene que contener el props html-type=”submit” para asignarle type=”submit” al button.

Login.vue 
```js
<template>
    <a-row>

        <a-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }">
            <a-form @submit.prevent="handleSubmit" name="basicLogin" autocomplete="off" layout="vertical">
                <a-form-item name="email" label="Ingrese tu correo"
                    :rules="[{ required: true, message: 'Ingresa un email' }]">
                    <!-- v-model:value activa un evento del componente -->
                    <a-input v-model:value="email"></a-input>
                </a-form-item>
                <a-form-item name="password" label="Ingrese tu password"
                    :rules="[{ required: true, message: 'Ingresa un email' }]">
                    <a-input-password v-model:value="password"></a-input-password>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser">Ingresar</a-button>
                </a-form-item>
            </a-form>
        </a-col>

    </a-row>
</template>

<script setup>
// vue
import { ref } from 'vue';
// store
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
//ref
const email = ref('usuario@tes.com');
const password = ref('123123');
const handleSubmit = async () => {
    if (!email.value || !password.value) {
        return alert('llena los campos');
    }
    await userStore.loginUser(email.value, password.value)

}
</script>

```
### Problema
:::warning 
El formulario funciona, pero en las validaciones se queda pegado cuando escribimos algo incorrecto y luego lo corregimos (se queda en rojo).
:::

- Para solucionar eso , se pone el props model al componente a-form
- el props model recibe una propiedad reactive 

:::tip 
Antdv sugiere que usemos reactive en lugar de ref para los formulario.
::: 


```js
<template>
    <a-row>

        <a-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }">
            <a-form @submit.prevent="handleSubmit" name="basicLogin" autocomplete="off" layout="vertical"
            :model="formState"
            >
                <a-form-item name="email" label="Ingrese tu correo"
                    :rules="[{ required: true, message: 'Ingresa un email' }]">
                    <!-- v-model:value activa un evento del componente -->
                    <a-input v-model:value="formState.email"></a-input>
                </a-form-item>
                <a-form-item name="password" label="Ingrese tu password"
                    :rules="[{ required: true, message: 'Ingresa una contraseña' }]">
                    <a-input-password v-model:value="formState.password"></a-input-password>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser">Ingresar</a-button>
                </a-form-item>
            </a-form>
        </a-col>

    </a-row>
</template>

<script setup>
// vue
import { reactive } from 'vue';
// store
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
// Creamos una propiedad reactiva
// reactive(objeto)
const formState = reactive({
    email: 'usuario@tes.com',
    password: '123123'
})

const handleSubmit = async () => {
    // Accedemos al valor del  email y  password del formulario
    await userStore.loginUser(formState.email, formState.password)

}
</script>

```


### Utilizamos los eventos Finish y FinishFailed del componente a-form

#### Reglas para la props rules 
- Regla min = Minimo X caracteres
- Regla whitespace = No acepta espacios en blanco(trim)
- Regla type = para que el input tenga validaciones HTML  , los valores son lo mismo que el atributo type de un input (type=”email” , type=”text” , etc).

```js

<template>
    <a-row>

        <a-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }">
            <a-form name="basicLogin" autocomplete="off" layout="vertical" :model="formState" @finish="onFinish"
                @finishFailed="onFinishFailed">
                <a-form-item name="email" label="Ingrese tu correo"
                    :rules="[{ required: true, type:'email' , whitespace: true, message: 'Ingresa un email' }]">
                    <!-- v-model:value activa un evento del componente -->
                    <a-input v-model:value="formState.email"></a-input>
                </a-form-item>
                <a-form-item name="password" label="Ingrese tu password"
                    :rules="[{ required: true, whitespace: true, min: 6, message: 'Ingresa una contraseña con minimo 6 caracteres' }]">
                    <a-input-password v-model:value="formState.password"></a-input-password>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser">Ingresar</a-button>
                </a-form-item>
            </a-form>
        </a-col>

    </a-row>
</template>

<script setup>
// vue
import { reactive } from 'vue';
// store
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
// Creamos una propiedad reactiva
// reactive(objeto)
const formState = reactive({
    email: 'usuario@tes.com',
    password: '123123'
})



const onFinish = async (values) => {
    await userStore.loginUser(formState.email, formState.password)
}
const onFinishFailed = errorInfo => {
    console.log(errorInfo);
}
</script>

```

## Registro con repassword 


Register.vue

#### Reglas para la props rules 

-  validator : Nos permite realizar una validacion Personalizada.
- validator : function(reglas , valor) {}
- la función recibe las reglas y el valor del input.

```js
<template>

    <h1>Register</h1>
    <a-row>

        <a-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }">
            <a-form name="basicRegister" autocomplete="off" layout="vertical" :model="formState" @finish="onFinish"
                @finishFailed="onFinishFailed">
                <a-form-item name="email" label="Ingrese tu correo"
                    :rules="[{ required: true, type: 'email', whitespace: true, message: 'Ingresa un email' }]">
                    <!-- v-model:value activa un evento del componente -->
                    <a-input v-model:value="formState.email"></a-input>
                </a-form-item>
                <a-form-item name="password" label="Ingrese tu password"
                    :rules="[{ required: true, whitespace: true, min: 6, message: 'Ingresa una contraseña con minimo 6 caracteres' }]">
                    <a-input-password v-model:value="formState.password"></a-input-password>
                </a-form-item>  
                  <a-form-item name="repassword" label="Repita  password"
                    :rules="[{validator : validatePass }]">
                    <a-input-password v-model:value="formState.repassword"></a-input-password>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser">Registrar </a-button>
                </a-form-item>
            </a-form>
        </a-col>

    </a-row>

</template>

<script setup>
import { reactive } from 'vue';
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
const formState = reactive({
    email: 'usuario@tes.com',
    password: '123123' ,
    repassword:''
})
const validatePass = async(reglas , valor) => {
    // Los mensajes de errores lo ponemos en el Promise.reject()
   if (valor === '') {
       // Devolvemos un promise rechazada
       return Promise.reject('Repita contraseña')
   }
   if (valor !== formState.password){
       // Devolvemos un promise rechazada
      return Promise.reject('No coinciden las contraseñas')
   }
  // Si esta todo 
  // Devolvemos un promise con la operacion sastifactoria
   return Promise.resolve();
}

const onFinish = async (values) => {
    await userStore.registerUser(formState.email, formState.password)
    alert('Verifica tu cuenta de correo');
}
const onFinishFailed = errorInfo => {
    console.log(errorInfo);
}
</script>

```

## Errores Fire Auth
- [Explicacion en la seccion de React](https://fedeleva.github.io/aprendizaje/React/proyecto.html#refactorizar)
- [link](https://firebase.google.com/docs/reference/js/auth#autherrorcodes)

### Login 

user.js 
- en el catch, error.code , retorna el mensaje(código) de error 

```js
   async loginUser(email, password) {
            this.loadingUser = true;
            try {
                // Iniciamos sesion y sacamos la informacion del usuario(la contiene la propiedad user)
                const { user } = await signInWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid };
                router.push('/')
            } catch (error) {
                console.log(error);
                return error.code;
            } finally {
                this.loadingUser = false;
            }
        }

```

Login.vue
- Según el código de error, mostramos cierto mensaje.

```js
const onFinish = async (values) => {
    const error = await userStore.loginUser(formState.email, formState.password)
  // SI no existe el error
    if (!error) {
        return;
    }
    switch (error) {
        case 'auth/user-not-found':
            alert("No existe esa cuenta");
            break;
      case 'auth/wrong-password':
             alert("Contraseña incorrecta");

            break;
        default:
            alert("Intentelo nuevamente");
            break;
    }
}

```

## Message 
- [link](https://www.antdv.com/components/message)
- En lugar de alert , vamos a usar los Message que ofrecen ant design 
- Como el Message no es un componente , hay que cargarlo manualmente (hacerle import)


:::tip Sugerencia 
- Si usa Vite, puede usar unplugin-vue-components para cargar los componentes. Sin embargo, este complemento solo puede tratar con componentes. Otros, como el mensaje, deben cargarse manualmente:


 ```js
 import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css'; 

 ```

:::


Importamos los css en main.js 

- De esta manera, todo el sitio web/programa tiene acceso a los css.

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia'
import 'ant-design-vue/es/message/style/css'; 
// use(router) = Que utilize el router
//use(createPinia()) = Que inicialice pinia
createApp(App).use(router).use(createPinia()).mount('#app')

```
Login.vue 

- Para mostrar un mensaje es: message.tipodemensaje(“mensaje”);


```js
<script setup>
import { message } from 'ant-design-vue';
// vue
import { reactive } from 'vue';
// store
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
// Creamos una propiedad reactiva
// reactive(objeto)
const formState = reactive({
    email: 'usuario@tes.com',
    password: '123123'
})



const onFinish = async (values) => {
    const error = await userStore.loginUser(formState.email, formState.password)
    // SI no existe el error
    if (!error) {
        return;
    }
    switch (error) {
        case 'auth/user-not-found':
            // Mostrar mensaje 
            // message.tipomensaje("mensaje");
            message.error("No existe el correo");
            break;
        case 'auth/wrong-password':
            message.error("Contraseña incorrecta");
            break;
        default:
            message.error("Intentelo mas tarde");
            break;
    }
}
const onFinishFailed = errorInfo => {
    console.log(errorInfo);
}
</script>

```


## Register 
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
                return error.code;
                
            } finally {
                this.loadingUser = false;
            }
        }

```

Register.vue
```js
<template>

    <h1>Register</h1>
    <a-row>

        <a-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }">
            <a-form name="basicRegister" autocomplete="off" layout="vertical" :model="formState" @finish="onFinish"
                @finishFailed="onFinishFailed">
                <a-form-item name="email" label="Ingrese tu correo"
                    :rules="[{ required: true, type: 'email', whitespace: true, message: 'Ingresa un email' }]">
                    <!-- v-model:value activa un evento del componente -->
                    <a-input v-model:value="formState.email"></a-input>
                </a-form-item>
                <a-form-item name="password" label="Ingrese tu password"
                    :rules="[{ required: true, whitespace: true, min: 6, message: 'Ingresa una contraseña con minimo 6 caracteres' }]">
                    <a-input-password v-model:value="formState.password"></a-input-password>
                </a-form-item>
                <a-form-item name="repassword" label="Repita  password" :rules="[{ validator: validatePass }]">
                    <a-input-password v-model:value="formState.repassword"></a-input-password>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser">Registrar</a-button>
                </a-form-item>
            </a-form>
        </a-col>

    </a-row>

</template>

<script setup>
import { reactive } from 'vue';
import { useUserStore } from '../stores/user';
import { message } from 'ant-design-vue';
const userStore = useUserStore();
const formState = reactive({
    email: 'usuario@tes.com',
    password: '123123',
    repassword: '123123'
})
const validatePass = async (reglas, valor) => {
    // Los mensajes de errores lo ponemos en el Promise.reject()
    if (valor === '') {
        // Devolvemos un promise rechazada
        return Promise.reject('Repita contraseña')
    }
    if (valor !== formState.password) {
        // Devolvemos un promise rechazada
        return Promise.reject('No coinciden las contraseñas')
    }
    // Si esta todo 
    // Devolvemos un promise con la operacion sastifactoria
    return Promise.resolve();
}

const onFinish = async (values) => {
    const error = await userStore.registerUser(formState.email, formState.password)
    // SI no existe el error
    if (!error) {
        // Mostrar mensaje 
        // message.tipomensaje("mensaje");
        return message.success("Revisa tu correo");
    }
    switch (error) {
        case 'auth/email-already-in-use':
            // Mostrar mensaje 
            // message.tipomensaje("mensaje");
            message.error("Correo ya en uso");
            break;
        default:
            message.error("Intentelo mas tarde");
            break;
    }
   
}
const onFinishFailed = errorInfo => {
    console.log(errorInfo);
}
</script>

```

### Animaciones de loading en los botones: 

```js
 <a-button type="primary" html-type="submit" :loading="userStore.loadingUser" :disabled="userStore.loadingUser">Ingresar</a-button>
```

```js
 <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser" :loading="userStore.loadingUser">Registrar</a-button>
```

## Componente AddForm / Renderizar componente

components/AddForm.vue

#### Reglas para la props rules  
- pattern : Sirve para  agregar una expresión regular en la validacion.
- [regla regular para urls](http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=mix)

```js
<script setup>
import { useDatabaseStore } from '../stores/database'; 
import { reactive } from 'vue';
import { message } from 'ant-design-vue';

const databaseStore = useDatabaseStore();
const formState = reactive({
    url: ''
})

const onFinish = async (value) => {
      databaseStore.addUrl(formState.url);
      message.success("URL agregada");
}
</script>

<template>

    <a-form name="addForm" autocomplete="off" layout="vertical" :model="formState" @finish="onFinish">
        <a-form-item name="url" label="Ingrese una URL" :rules="[{
            required: true,
            whitespace: true,
            message: 'Ingrese una URL válida',
            pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
        
        }]">
              <a-input v-model:value="formState.url"></a-input>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit">Agregar URL</a-button>
        </a-form-item>
    </a-form>
</template>

```

Home.vue 

- Renderizamos el componente que creamos
- Al renderizar un componente, se escribe todo en minúscula y se separa con un “-“ cada palabra (te das cuenta cuando se separan las palabras porque esta en camelCase)


```js
<template>
  <div>
    <h1>Home</h1>
     <!-- Renderizamos el componente AddForm -->
     <add-form></add-form>
    <p v-if="databaseStore.loadingDoc">Loading docs...</p>
    <ul v-else>
      <li v-for="item of databaseStore.document" :key="item.id">
        {{ item.name }} <br> 
        <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>     
         <button @click="router.push(`/editar/${item.id}`)">Editar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useDatabaseStore } from '../stores/database';
import { useRouter } from 'vue-router';
const router = useRouter();
const databaseStore = useDatabaseStore();
databaseStore.getUrls()
</script>

```

### Le añadimos un loading y un manejo de errores de Firebase 

database.js 
```js
 state: () => ({
        document: [],
        loadingDoc: false,
        loading:false
    })

```


```js
      async addUrl(name) {
            this.loading = true;
            try {
                const objetoDoc = {
                    name: name,
                    short: nanoid(6),
                    user: auth.currentUser.uid,
                }

                // addDoc(collection , documento)
                // el documento es el objeto que se va a insertar en la BD
                const docRef = await addDoc(collection(db, "urls"), objetoDoc)
                this.document.push({
                    // cuando se crea el objeto , te devuelve una propiedad con la id
                    ...objetoDoc, id: docRef.id
                })
            } catch (error) {
                console.log(error)
                return error.code
            } finally {
                this.loading = false;
            }
        }

```
AddForm.vue

```js
const onFinish = async (value) => {
      const error =await  databaseStore.addUrl(formState.url);
      // SI no existe errores
      if (!error) {
          formState.url = '';
        return message.success("URL agregada");
      }
       switch (error) {
         // Manejar errores de Firestore
        default:
            message.error("Intentelo mas tarde");
            break;
    }
}
</script>

<template>

    <a-form name="addForm" autocomplete="off" layout="vertical" :model="formState" @finish="onFinish">
        <a-form-item name="url" label="Ingrese una URL" :rules="[{
            required: true,
            whitespace: true,
            message: 'Ingrese una URL válida',
            pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
        
        }]">
              <a-input v-model:value="formState.url"></a-input>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit" :loading="databaseStore.loading" :disabled="databaseStore.loading">Agregar URL</a-button>
        </a-form-item>
    </a-form>
</template>

```
## Card 

### Componente [a-card](https://www.antdv.com/components/card)

#### props: 
- title


### componente template
- Contiene el props #extra
- Adentro insertamos los botones que van a aparecer al costado de la Card

### componente [a-space](https://www.antdv.com/components/space)
- Sirve para generar un espaciado entre los componentes y que no queden pegados.
- Se genera un  espaciado en ambos lados(horizontalmente o verticalmente)  en todos los elementos que contiene el componente.
#### props:
- direction : Para especificar en que dirección (horizontal o vertical) queres generar el espaciado. Sin especificar esta props , por defecto es horizontal.



Home.vue 
```js
<template>

    <h1>Home</h1>
    <!-- Renderizamos el componente AddForm -->
    <add-form></add-form>
    <p v-if="databaseStore.loadingDoc">Loading docs...</p>
    <a-space direction="vertical" v-else style="width:100%">
      <a-card :title="item.short"  v-for="item of databaseStore.document" :key="item.id">
        <template #extra>
          <a-space>
            <a-button type="danger" @click="databaseStore.deleteUrl(item.id)">Eliminar</a-button>
            <a-button type="primary" @click="router.push(`/editar/${item.id}`)">Editar</a-button>
          </a-space>

        </template>
        <p>{{ item.name }}</p>
      </a-card>

    </a-space>
</template>

<script setup>
import { useDatabaseStore } from '../stores/database';
import { useRouter } from 'vue-router';
const router = useRouter();
const databaseStore = useDatabaseStore();
databaseStore.getUrls()
</script>

```

## Confirmar Eliminacion / Parametro en la función del evento
### Componente [a-popfirm](https://www.antdv.com/components/popconfirm)
- Envuelve al botón/componente que realiza la acción.
- Sirve para confirmar o cancelar una acción.
#### props: 
- title  : Titulo de la “ventana” , la pregunta que le hacemos al usuario.
- ok-text  : el Texto del botón yes
- cancel-text : el Texto del botón no
- @confirm = evento al confirmar
- @cancel = evento al cancelar


database.js 
```js
      async deleteUrl(id) {
            this.loading = true;
            try {
                // Referencia al documento
                const docRef = doc(db, "urls", id);
                const docSpan = await getDoc(docRef);
                if (!docSpan.exists()) {
                    throw new Error("No existe el doc");
                }
                if (docSpan.data().user !== auth.currentUser.uid) {
                    throw new Error("No le pertenece ese documento");
                }
                //Eliminamos 
                await deleteDoc(docRef);
                this.document = this.document.filter(item =>
                    item.id !== id)
            } catch (error) {
                console.log(error)
                return error.message;
            } finally {
                this.loading = false;
            }
        }

```
Home.vue
```js
<template>

  <h1>Home</h1>
  <!-- Renderizamos el componente AddForm -->
  <add-form></add-form>
  <p v-if="databaseStore.loadingDoc">Loading docs...</p>
  <a-space direction="vertical" v-else style="width:100%">
    <a-card :title="item.short" v-for="item of databaseStore.document" :key="item.id">
      <template #extra>

        <a-space>
          <a-popconfirm title="¿Estas seguro que deseas eliminar?" ok-text="Si" cancel-text="No"
            @confirm="confirm(item.id)" @cancel="cancel">
            <a-button type="danger" :loading="databaseStore.loading" :disabled="databaseStore.loading">Eliminar</a-button>
          </a-popconfirm>

          <a-button type="primary" @click="router.push(`/editar/${item.id}`)">Editar</a-button>
        </a-space>

      </template>
      <p>{{ item.name }}</p>
    </a-card>

  </a-space>
</template>

<script setup>
import { useDatabaseStore } from '../stores/database';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
const router = useRouter();
const databaseStore = useDatabaseStore();
databaseStore.getUrls()

const confirm = async (id) => {
  const error = await databaseStore.deleteUrl(id);
  // Si no existe el error
  if (!error) {
    return message.success('Se elimino con exito');
  }
  return message.error(error);
}
const cancel = () => {
  message.error('No se elimino');
}
</script>

```

## Editar

database.js 
```js
   async updateUrl(id, name) {
            this.loading = true;
            try {
                // Referencia al documento
                const docRef = doc(db, "urls", id);
                // Obtenemos un documento
                const docSpan = await getDoc(docRef);
                if (!docSpan.exists()) {
                    throw new Error("No existe el doc");
                }
                if (docSpan.data().user !== auth.currentUser.uid) {
                    throw new Error("No le pertenece ese documento");
                }
                //updateDoc(referencia documento , {datos a actualizar})
                await updateDoc(docRef, { name: name })

             this.document = this.document.map((item) => item.id === id ? {...item , name : name} : item)
            
             router.push("/")

            } catch (error) {
                console.log(error)
                return error.message
            } finally {
                this.loading = false;
            }
        }

```

Editar.vue
```js

<template>
    <h1>Editar ID:  {{route.params.id}}</h1>
    <a-form name="editForm" autocomplete="off" layout="vertical" :model="formState" @finish="onFinish">
        <a-form-item name="url" label="Ingrese una URL" :rules="[{
            required: true,
            whitespace: true,
            message: 'Ingrese una URL válida',
            pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
        
        }]">
            <a-input v-model:value="formState.url"></a-input>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit" :loading="databaseStore.loading"
                :disabled="databaseStore.loading">Editar</a-button>
        </a-form-item>
    </a-form>
    

      
</template>

<script setup>
import { message } from 'ant-design-vue';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useDatabaseStore } from '../stores/database';
// Nos devuelve un objeto para tener acceso a las variables de la url.
const route = useRoute();

const databaseStore = useDatabaseStore()

const formState = reactive({
    url: ''
})

const onFinish = async (value) => {
const error = await databaseStore.updateUrl(route.params.id, formState.url);
if (!error) {
   return message.success("URL editada");
}
switch (error) {
         // Manejar errores de Firestore
        default:
            message.error("Intentelo mas tarde");
            break;
    }

}

// El callback se ejecuta al montarse el componente.
onMounted(async () => {
    // route.params.nombrevariable
   const error =  formState.url = await databaseStore.leerUrl(route.params.id)
      
})
</script>

```