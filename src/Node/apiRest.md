# API REST 2022
- Separaremos lo que es backend del frontend, por ende este mismo proyecto de back nos servirá tanto para Vue o React.
### Normas a seguir 
- No se puede guardar la sesion del usuario en el servidor
- La respuesta debe ser en JSON

## Primeros pasos 
### 1. Instalamos los modulos 
```powershell
npm init -y
npm i bcryptjs cookie-parser cors dotenv express express-validator jsonwebtoken mongoose
npm i -D nodemon

```
#### Explicacion de los modulos:

1. nodemon : Para crear un servidor de desarollo 
2. express: Para levantar un servidor
3. express-validator : Para validar las solicitudes del cliente
4. mongoose: Para hacer consultas a la BD 
5. jsonwebtoken: Para generar tokens de seguridad y gestionarlo.
6. dontenv : Para trabajar con variables de entornos
7. cors: Para configurar la comunicación del frontend y backend 
8. cookie-parser: Para gestionar las cookies.
9. bycripts : Para cifrar la contraseña



### Configuramos el package.json  
- Configuramos el package.json para trabajar con los modulos (import y export)
- Tambien le añadimos los script dev y start
```json
{
  "name": "backend",
  "type":"module",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js",
    "start" : "node index.js"
  },

```

### Archivo .gitignore 
```js
node_modules
.env

```

### Carpetas a crear
-	controllers : Contiene la logica de las rutas
-	routes  : Contiene las rutas 
-	models : modelos/esquemas de la BD
-	middlewares : Para interceptar rutas.
-	helper/utils : Para reutilizar código 
-	database : Contiene la conexión a la BD


### Probemos 

index.js
```js
import express from 'express';

const app = express();

// Gestionamos una peticion get a la raiz
app.get('/' , (req , res) => {
    res.json({ok : true})
})

app.listen(5000 , () => console.log('http://localhost:5000'));

```

```powershell
npm run dev
```

## Mongoose 
- [mongodb](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)

### En mongoDB 
1. Iniciamos sesion  (si sos  nuevo , tenes que crear un cluster)
2. Creas un usuario 

### En el proyecto 
1. Pones la URI en una variable del .env 
```js
URI_MONGO=XXX
```
2. Establecemos la conexion 
database/connectDB.js
```js
import mongoose from "mongoose";

//connect(uri)
try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log('Conexion a la BD completa');
} catch(error) {
   console.log('Error de conexion a mongoDB  ' + error)
}

```
index.js 
```js
import express from 'express';
// Habilitamos las variables de entorno
import 'dotenv/config';
import './database/connectDB.js'
const app = express();

// Gestionamos una peticion get a la raiz
app.get('/' , (req , res) => {
    res.json({ok : true})
})
// Si no existe, asigna el puerto 500
const PORT = process.env.PORT || 5000
app.listen(PORT , () => console.log('http://localhost:'+PORT));

```
:::warning 
Al importar un archivo , puede pasar que sin la extensión .js no lo lea.
:::

## Schema & Models
- [Esquema](https://mongoosejs.com/docs/guide.html#definition)
-	Con Mongoose, todo se deriva de un esquema.
-	Cada esquema se asigna a una colección MongoDB y define la forma de los documentos dentro de esa colección.
-	Para usar nuestra definición de esquema, necesitamos convertirla a un modelo con el que podamos trabajar.

:::tip  Modelo

- Modelo: Contiene los métodos para leer, crear, modificar, eliminar datos de la colección.
- [Ver metodos del modelo](https://mongoosejs.com/docs/queries.html)
:::

:::tip Esquema
- Esquema: Estructura de los documentos de la colección
- Si no se respeta la estructura(esquema) a la hora de crear un documento, se genera un error.
:::


:::tip indice 
- [link](https://desarrolloweb.com/articulos/intro-indices-mysql.html#:~:text=Los%20%C3%ADndices%20en%20MySQL%20permiten,tabla%20en%20un%20momento%20dado)
- [link2](https://www.adictosaltrabajo.com/2015/09/11/introduccion-a-indices-en-mysql/)
:::

models/User.js
```js
import mongoose from 'mongoose'

// Creamos el esquema (Lo instanciamos)
// new Schema({los campos que va a tener el documento})

const userSchema =  new mongoose.Schema({
    // Cada campo contiene un objeto especificando el tipo de dato(type) , si es obligatorio(required) , etc
    email: {
            type:String ,
            required:true,
            trim:true /* Limpia los caracteres en blanco */ ,
            unique:true /* Valor unico */ ,
            lowercase:true /* Los convierte en minuscula */, 
            index:{unique:true} /* Indexar */,
    } , 
    password : {
        type:String ,
        required:true
    }
})

// Creamos el modelo y lo exportamos
 // model('nombreModelo' , esquema )
 // el nombreModelo = nombre de la coleccion que va a contener esa estructura(esquema)
export const User = mongoose.model('User' , userSchema);

```

## Routes/Controllers

Routes/auth.route.js
```js
import express from 'express';
const router = express.Router();

router.post("/login" , (req,res) => {
    res.json({ok:true})
})
router.post("/register" , (req,res) => {
    res.json({ok:true})
})

export default router;

```
index.js 
```js
import express from 'express';
// Habilitamos las variables de entorno
import 'dotenv/config';
import './database/connectDB.js'

import authRouter from './routes/auth.route.js';

const app = express();

app.use('/' , authRouter)

// Si no existe, asigna el puerto 500
const PORT = process.env.PORT || 5000
app.listen(PORT , () => console.log('http://localhost:'+PORT));

```

:::tip tipo de peticiones 
- El navegador solo trabaja con solicitudes GET.
- El formulario HTML a través del atributo method puede enviar solicitudes GET O POST
- Usamos postman para trabajar con un conjunto de solicitudes (GET , POST , PUT , DELETE , ETC)
:::

:::tip Observacion 
Se hace peticiones get a :
- http://localhost:5000/login
- http://localhost:5000/register
:::


### Actualizamos el index.js
```js
app.use('/api' , authRouter)
```

:::tip Observacion 

Se hace peticiones get a :

- http://localhost:5000/api/register
- http://localhost:5000/api/login
:::


### Separamos la logica 

Controllers/auth.controllers.js

```js
export const login = (req , res) => {
    res.json({ok:true})
}
export const register = (req , res) => {
    res.json({ok:true})
}

```
Routes/auth.route.js
```js
import express from 'express';
import { login, register } from '../Controllers/auth.controllers.js';
const router = express.Router();

router.post("/login" , login)
router.post("/register" , register)

export default router;

```

## Formas de enviar datos

- La información se envía por el body.


### Postman
- Existen diferente manera de enviar la informacion: 
1.  A traves de un query params (GET)
2. A través de form-data
3. A través de x-www-form-urlencoded (etiqueta form HTML)
4. raw – Json   (Para Enviar por json)


### Para leer la información que nos mandan en JSON a través del body configuramos un middleware.

index.js
```js
const app = express();
app.use(express.json());

```

- Entonces podemos leer la información que recibimos en el requirimiento (body).

Ejemplo:

auth.controller.js


```js
export const login = (req , res) => {
    console.log(req.body);
    res.json({ok:true})
    
}

```

## Validaciones (Express-Validator)

:::warning
- LAS VALIDACIONES EN EL BACKEND SON OBLIGATORIAS YA QUE APORTA SEGURIDAD
- LAS VALIDACIONES EN EL FRONTEND AYUDAN AL USUARIO , NO APORTAN SEGURIDAD
:::


auth.route.js 
- Especificamos las validaciones a realizar


```js
// importamos el body de express-validator que es un middleware
import {body} from 'express-validator';
const router = express.Router();

//post("ruta" , [middlewares] , funcion que gestiona la solicitud)
// Los middleware analizan la solicitud y si esta todo correcto , ejecuta la funcion que gestiona la solicitud.
//body('nombrepropiedad' , 'mensaje de error').validaciones.validaciones.validaciones
// cuando se reciba en el body la propiedad 'nombrepropiedad' , lo validara.
router.post("/login" , [body('email' , 'No es un email').isEmail().normalizeEmail()] , login)
router.post("/register" , register)

export default router;

```

auth.controller.js
- Realizamos las validaciones que especificamos y obtenemos un resultado (si paso o no)

```js
import { validationResult } from "express-validator";
export const login = (req, res) => {
    // Realizamos/Ejecutamos las validaciones de express-validator 
    //validationResult(req) -- en el req estan los datos que se van a validar
    // Devuelve el error en caso que exista
    const error = validationResult(req);

    // Si existen errores
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    console.log(req.body);
    res.json({ ok: true })

}

```

### Completamos las validaciones 

:::tip Validaciones 
- trim()  = Limpia los caracteres en blanco
- isEmail() y normalizeEmail() = Comprueba que sea un email valido
- isLenght({min:X}) = Comprueba que el valor tenga mínimo  X caracteres
- custom(funcion) = Validacion personalizada
:::

:::tip validacion personalizada
- custom(funcion) = Validacion personalizada
- La función de la validacion personalizada tiene dos parámetros, el valor y el requerimiento(req).
- En la función se realiza una validacion. En caso que no se cumpla se lanza un error, si se cumple se retorna el valor.
:::

:::tip Observacion 
Por defecto la respuesta tiene el código de estado 200
:::

auth.route.js
```js
import express from 'express';
import { login, register } from '../Controllers/auth.controllers.js';
// importamos el body de express-validator que es un middleware
import {body} from 'express-validator';
const router = express.Router();

//post("ruta" , [middlewares] , funcion que gestiona la solicitud)
// Los middleware analizan la solicitud y si esta todo correcto , ejecuta la funcion que gestiona la solicitud.
//body('nombrepropiedad' , 'mensaje de error').validaciones.validaciones.validaciones
// cuando se reciba en el body la propiedad 'nombrepropiedad' , lo validara.
router.post("/login" , [body('email' , 'No es un email').trim().isEmail().normalizeEmail() , body('password' , 'formato de password incorrecta').trim().isLength({min:6}) ] , login)
router.post("/register" , [body('email' , 'No es un email').trim().isEmail().normalizeEmail() ,body('password' , 'formato de password incorrecta').trim().isLength({min:6}) ,  body('password' , 'No coinciden las contraseñas').custom((value , {req}) => {
   if (value !== req.body.repassword) {
       // No se cumple la validacion
       // Se lanza un error
       throw new Error('No coinciden las contraseñas');
   }
   // Se cumple la validacion 
   // Se retorna el valor
   return value;
}) ] ,  register)

export default router;

```

auth.controller.js
```js
import { validationResult } from "express-validator";
export const login = (req, res) => {
    // Realizamos/Ejecutamos las validaciones de express-validator 
    //validationResult(req) -- en el req estan los datos que se van a validar
    // Devuelve el error en caso que exista
    const error = validationResult(req);

    // Si existen errores
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    console.log(req.body);
    res.json({ ok: true })

}
export const register = (req, res) => {
     // Realizamos/Ejecutamos las validaciones de express-validator 
    //validationResult(req) -- en el req estan los datos que se van a validar
    // Devuelve el error en caso que exista
    const error = validationResult(req);

    // Si existen errores
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    console.log(req.body);
    res.json({ ok: true })
}

```

## Middleware Personalizado para validar

:::tip ¿Que es un mi middleware?
- Es una función que contiene tres parámetros : req (requirimiento) , res (respuesta) y next 
- Un middleware intercepta la peticion antes que llegue al “servidor” ,  se ejecuta antes de la funcion que gestiona la petición (dicha función se encuentra en la carpeta controllers)
- Entonces el middleware analiza la peticion y si esta todo bien, ejecuta el next().

:::

:::tip next()
- next() = Ejecuta el siguiente middleware (Puede haber varios middleware en un array) o ejecuta la función que gestiona la petición (se encuentra en la carpeta controllers)
- El next ejecuta el siguiente middleware, si NO EXISTE, ejecuta la función que gestiona la petición.
:::

middlewares/validationResultExpress.js
```js
import { validationResult } from "express-validator";

export const validationResult = (req , res , next) => {
    // Realizamos/Ejecutamos las validaciones de express-validator 
    //validationResult(req) -- en el req estan los datos que se van a validar
    // Devuelve el error en caso que exista
    const error = validationResult(req);

    // Si existen errores
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    next();
}

```

auth.controller.js
```js

export const login = (req, res) => {
    res.json({ ok: true })
}
export const register = (req, res) => {
    res.json({ ok: true })
}

```


auth.route.js 
```js
import express from 'express';
import { login, register } from '../Controllers/auth.controllers.js';
// importamos el body de express-validator que es un middleware
import {body} from 'express-validator';
import { validationResultExpress } from '../middlewares/validationResultExpress.js';
const router = express.Router();

//post("ruta" , [middlewares] , funcion que gestiona la solicitud)
// Los middleware analizan la solicitud y si esta todo correcto , ejecuta la funcion que gestiona la solicitud.
//body('nombrepropiedad' , 'mensaje de error').validaciones.validaciones.validaciones
// cuando se reciba en el body la propiedad 'nombrepropiedad' , lo validara.
router.post("/login" , [body('email' , 'No es un email').trim().isEmail().normalizeEmail() , body('password' , 'formato de password incorrecta').trim().isLength({min:6}) , validationResultExpress ] , login)


router.post("/register" , [body('email' , 'No es un email').trim().isEmail().normalizeEmail() ,body('password' , 'formato de password incorrecta').trim().isLength({min:6}) ,  body('password' , 'No coinciden las contraseñas').custom((value , {req}) => {
   if (value !== req.body.repassword) {
       // No se cumple la validacion
       // Se lanza un error
       throw new Error('No coinciden las contraseñas');
   }
   // Se cumple la validacion 
   // Se retorna el valor
   return value;
}), validationResultExpress ] ,  register)

export default router;

```


## Cifrar contraseña / Schema.pre / Save

### Schema pre
- El pre sirve para ejecutar una función antes de una acción.
- Por ejemplo: Ciframos la contraseña antes de guardarla en la BD.
- Sintaxis: Esquema.pre(‘accion’ , function )
- La function se ejecutará antes de realizar la acción.
- La función no debe ser una función flecha ya que utiliza el this para acceder al esquema.
- La función tiene como parámetro el next que cumple la misma función que el del middleware. (en este caso que ejecute la ‘accion’)



### bycriptjs
- Encriptamos la contraseña a través de saltos
- Primero se encripta la contraseña y luego se realiza saltos.
- saltos = palabras aleatorias que se van incorporando a la encriptación.
- Sirve para que dos contraseñas iguales no tengan el mismo hash (contraseña encriptada)

User.js

```js
import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs';
// Creamos el esquema (Lo instanciamos)
// new Schema({los campos que va a tener el documento})

const userSchema = new mongoose.Schema({
    // Cada campo contiene un objeto especificando el tipo de dato(type) , si es obligatorio(required) , etc
    email: {
        type: String,
        required: true,
        trim: true /* Limpia los caracteres en blanco */,
        unique: true /* Valor unico */,
        lowercase: true /* Los convierte en minuscula */,
        index: { unique: true } /* Indexar */,
    },
    password: {
        type: String,
        required: true
    }
})

// Antes de guardar en la bd , se ejecutara la function
userSchema.pre("save", async function (next) {
    // user = el esquema (en este caso es un objeto con dos propiedades (email,password))
    const user = this;
  // Si la contraseña no es modificada
  // isModified('nombrecampo') = Devuelve true si el nombrecampo es modificado
   if (!user.isModified('password')) {
        return next();
   }

    try {
        // Obtenemos los saltos
        // genSalt(nro de salto)
        const salt = await bcryptjs.genSalt(10);
        // Encriptamos la contraseña
        // hash(contraseña , numero de saltos)
        // Devuelve el hash (contraseña encriptada)
               const contraseñaEncriptada = await bcryptjs.hash(user.password, salt);
        // Le asignamos la contraseña encriptada al campo password
        user.password = contraseñaEncriptada;
        next()
    } catch (error) {
        console.log(error);
        throw new Error('Fallo el hash de contraseña');
    }

})

// Creamos el modelo y lo exportamos
// model('nombreModelo' , esquema )
// el nombreModelo = nombre de la coleccion que va a contener esa estructura(esquema)
export const User = mongoose.model('User', userSchema);

```

### Guardamos los usuarios en la BD.

- La instancia del modelo (el que exportamos del User.js) contiene el método para crear documentos en la colección.
- [metodos del modelo](https://mongoosejs.com/docs/queries.html)

:::warning
- Algunos metodos (como el de crear/guardar)  lo contienen la instancia del modelo que creamos
- Para crear una instancia, se debe pasar un objeto con las mismas propiedades especificadas en el esquema que contiene el modelo.
:::

auth.controller.js
```js
import { User } from "../models/User.js"

export const login = (req, res) => {
    res.json({ ok: true })
}
export const register = async (req, res) => {
 try {
const {email , password}  = req.body;
     // Creamos una instancia del modelo
     // new nombreModelo({propiedades del documento})
     // Las propiedades del documento debe coincidir con las propiedades que se especifico en el esquema que contiene el modelo.
      const user = new User({email , password}) 
      // Guardamos en la base de datos
      await user.save();
      return res.json({ok : true});
 } catch(error) {
    

 }


    res.json({ ok: true })
}

```
:::tip Observacion 
- El modelo representa una colección . 
- Entonces el nombre del modelo === el nombre de la colección.
- Cuando usamos el metodo save , se crea la colección (en caso de no existir) y el documento.
- El documento que se guarda con el metodo save , contiene la información que se especifico al momento de instanciar el modelo.
- Entonces el objeto que se pasa al momento de instanciar el modelo es el documento a “crear”
- Por lo tanto, la instancia contiene las propiedades del esquema y los métodos para manipular la colección.
:::



:::tip Explicacion somo si fuera SQL 
```js
 const user = new User({email , password}) 
 // Guardamos en la base de datos
  await user.save();

```
- User es el nombre del modelo.
- user.save() = INSERT INTO User (email, password) VALUES (email , password)
- VALUES(email , password )  = Los valores de email y password  corresponden a los valores de las propiedades email y password  del objeto que se pasa en la instancia de la primera línea (new User).
:::

## Validaciones // findOne()

### Validaciones 
- Usamos los códigos de errores de la BD para validar que el correo sea único.

### findOne()
- Usamos el método findOne  para buscar un documento en la colección.
- Recibe un objeto con la propiedad y valor que están buscando:
:::tip Ejemplo como si fuera relacional
- modelo.findOne({apellido: “perez”);
- SQL : select * from modelo WHERE apellido = “perez”
:::
- el metodo findOne lo contiene el modelo , NO LA INSTANCIA.

auth.controller.js
```js
import { User } from "../models/User.js"

```
```js
export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        // lo buscamos en la BD
        // WHERE email = valorPropiedadEmail
        let user = await User.findOne({ email: email});
        // Si existe el usuario
        if (user) {
            // Enviamos un objeto como error
               throw ({code : 11000})
        }
         
        user = new User({ email, password })

        // Guardamos en la base de datos
        await user.save();
        return res.status(201).json({ ok: true });
    } catch (error) {
        console.log(error.code);
        // Codigo 11000 = Se duplica la key (el valor no es unico)
        if (error.code === 11000) {
            return res.status(400).json({ error: "Ya existe este usuario" });
        }
       return res.status(500).json({error : "Error de servidor"})
    }


}

```

## Login/Añadirle métodos al esquema 

### Añadirle metodos al esquema 
- El metodo añadido lo va a contener las instancias del modelo 
- Sintaxis: NombreEsquema.methods.nombreMetodo = función
- La función no debe ser de tipo flecha ya que necesitamos tener acceso al this para acceder a las propiedades del esquema.

User.js 
```js
// Esquema.methods.nombreMetodo = funcion
userSchema.methods.comparePassword = async function(candidatePassword) {
    // this.password = Accedemos a la contraseña cifrada guardada en la BD
    //compare(contraseña sin cifrar , contraseña cifrada)
    // compare() compara dos contraseñas y devuelve true si coinciden
    return await bcryptjs.compare(candidatePassword , this.password)
}

export const User = mongoose.model('User', userSchema);

```

auth.controller.js


```js
import { User } from "../models/User.js"

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // lo buscamos en la BD
        // WHERE email = valorPropiedadEmail
        let user = await User.findOne({ email: email });
        // Si NO existe el usuario
        if (!user) {
            return res.status(403).json({ error: "No existe el usuario" })
        }

        const respuestaPassword = await user.comparePassword(password);
        // Si no coinciden las contraseñas
        if (!respuestaPassword) {
            return res.status(403).json({ error: "Contraseña incorrecta" })
        }
        return res.json({ ok: true })
    } catch (error) {
        console.log(error);

        return res.status(500).json({ error: "Error de servidor" })
    }

}

```

:::tip Observacion
- Si el método findOne encuentra el documento , nos devuelve una instancia del Modelo que contiene el documento seleccionado.
- Entonces cuando invocamos el método que creamos anteriormente con la instancia, el this.password === la propiedad password del documento.
:::

## JWT
- EL Token es un “código” de acceso que le damos al Usuario.
- A través del token, verificamos que el usuario tenga acceso al recurso que solicito.
- Es el desarollador frontend el que se tiene que encargar de enviar el token al servidor(backend).
- [jwt](https://jwt.io/)

:::tip Partes del token 
- Header : Contiene el algoritmo 
- PayLoad: Contiene la data
- Verify Signature : Contiene el secreto  , se gestiona por el backend.
:::
:::tip encoded 
 - Contiene un ejemplo del token 
 - Contiene las tres partes(se distingue por los colores)
:::
:::warning 
En el Payload no debe haber información delicada. (contraseñas , etc)
:::

## Generar Token en el Login.

### Metodo sign()

```js
sign({payload} , ‘secreto’);
```
- El método sign como primer parámetro recibe el payload (es un objeto con informacion)
- El segundo parámetro  contiene el secreto (verify signature)


:::tip Recordatorio 
- En el proyecto el JWT_SECRET esta en el .env (Es un String con palabras alazar)
:::

auth.Controller.js
```js
import { User } from "../models/User.js"
import jwt from 'jsonwebtoken';
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(403).json({ error: "No existe el usuario" })
        }

        const respuestaPassword = await user.comparePassword(password);
        if (!respuestaPassword) {
            return res.status(403).json({ error: "Contraseña incorrecta" })
        }
        // Generamos el token JWT
        // sign() crea el token 
        //sign({objeto con la informacion del payload} , 'String secreto')

        // para mongosee _id === id
        const token = jwt.sign({ uid: user.id }, process.env.JWT_SECRET)
        return res.json({ token })
    } catch (error) {
        console.log(error);

        return res.status(500).json({ error: "Error de servidor" })
    }

}

```

:::tip Pasos a seguir 
1.  iniciamos sesion  Y obtenemos un token.
2. Lo pegamos en la pagina de JWT (en donde esta el ejemplo)
- Ya podemos tenemos acceso al payload
- El payload es publico
- Mientras mas información tenga el payload , mas extenso es el token.
:::

## Refresh Token

:::tip ¿El navegador donde guarda el token? 
Como el token se pierde al refrescar la pagina se suele guardar en:

- Cookies
- LocalStorage
:::

### Refresh Token 
- En este proyecto no lo vamos a guardar en ninguna de las dos opciones

- Hay cookies especiales que solo son accedidas y insertadas desde el lado del servidor.
- En esas cookies especiales vamos a guardar un Refresh token.
- Cuando el usuario refresca el navegador, vamos a utilizar el refresh  token para recibir el token nuevamente.

## JWT V2

en .env debe haber cuatros variables

```js
JWT_SECRET  = el secreto (Debe ser un String , puede ser una palabra aleatoria)
JWT_REFRESH = Debe ser un String , puede ser una palabra aleatoria
MODO=developer
URI_MONGO=XXX
```



:::tip Token Expiration 
- Para que un token expire luego de un determinado tiempo usamos expiresIn
- expiresIn es una propiedad de un objeto cuyo valor es la cantidad de tiempo (en segundos) que va a estar activo el token. 
- El objeto  se pasa como tercer parámetro al método sign
:::

utils/tokenManager.js
```js
import jwt from 'jsonwebtoken';
export const generateToken = (uid) => {
    try {
   // 15 Minutos en segundos
    const expiresIn = 60 * 15;

        // Generamos el token JWT
        // sign() crea el token 
        //sign({objeto con la informacion del payload} , 'String secreto' , {expiresIn: cantTiempo en segundos})
        // expiresIn = Para especificar  cuando va a expirar el token
        const token = jwt.sign({ uid }, process.env.JWT_SECRET , {expiresIn})
        return {token , expiresIn};
    } catch (error) {
        console.log(error);
    }
}

```

auth.controller.js
```js
import { generateToken } from "../utils/tokenManager.js"; 
```

```js
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(403).json({ error: "No existe el usuario" })
        }

        const respuestaPassword = await user.comparePassword(password);
        if (!respuestaPassword) {
            return res.status(403).json({ error: "Contraseña incorrecta" })
        }

        const {token , expiresIn} = generateToken(user.id);
        return res.json({ token , expiresIn })
    } catch (error) {
        console.log(error);

        return res.status(500).json({ error: "Error de servidor" })
    }

}

```
## Ruta protegida 

- Creamos la “ruta protegida”

auth.route.js
```js
router.get("/protected" , infoUser);
export default router;

```

auth.controller.js

```js
export const infoUser = (req, res) => {
    res.json({user: "correo@hotmail.com"});
}

```
:::tip Ruta protegida 
http://localhost:5000/api/protected
:::




### Postman 
- La información puede viajar por el body y por el header
- En authorization hay muchos formatos(Type) Ej. API Key , Oauth 1.0 , etc
- El que mas se usa es el Bearer Token.
- Bearer Token: Envía información(token) a la cabecera(header)


### Middleware 
- Vamos a crear un middleware para preguntar sobre el token.
- Si el token es válido, le damos acceso a la información de la ruta protected.


auth.route.js
- Implementamos el middleware
```js
router.get("/protected" , requireToken ,  infoUser);
```
middlewares/RequireToken.js

```js
import jwt from 'jsonwebtoken';
export const requireToken = (req , res , next) => {
    try {
        // Accedemos al token que se envio a traves de header
        const token = req.headers?.authorization;
        // Si no existe el token
        if (!token) {
            throw new Error('No existe el token');
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({error: error.message});
    }
}

```

:::tip Observacion 
- con req.headers  tenemos acceso a los headers 
:::

### verify()
- Sirve para comprobar que el token sea valido.
- Tiene dos parámetros:
1.	El token
2.	La palabra secreta/secret
- Devuelve la información decodificada (el payload). 
- Si el token no es válido, lanza un error y se va al catch.


RequireToken.js
```js
import jwt from 'jsonwebtoken';
export const requireToken = (req , res , next) => {
    try {
        // Accedemos al token que se envio a traves de header
        const token = req.headers?.authorization;
        // Si no existe el token
        if (!token) {
            throw new Error('No existe el token');
        }
        const payload = jwt.verify(token , process.env.JWT_SECRET);
        console.log(payload);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({error: error.message});
    }
}

```
:::tip Prueba 
Prueben enviando en– authorization -- Bearer Token , el token.
:::

### Quitarle el formato bearer 

- En el ejemplo anterior, ningún token es válido.
- Esto pasa porque la const token contiene el formato bearer.
- Como la const token no tiene el formato de un token, no es válido.
- Para solucionar esto, hay que conseguir el valor del token específicamente.


```js

 try {
        // Accedemos al token que se envio a traves de header
        let token = req.headers?.authorization;
        // Si no existe el token
        if (!token) {
            throw new Error('No existe el token');
        }
        // Conseguimos el token
        token = token.split(" ")[1];
        const payload = jwt.verify(token , process.env.JWT_SECRET);
        console.log(payload);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({error: error.message});
    }

```