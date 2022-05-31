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
- Devuelve una instancia del modelo con el documento seleccionado.

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

## Generar Token en el Login/Register

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
### Generamos el token en el register
auth.controllers.js
```js
export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        // lo buscamos en la BD
        // WHERE email = valorPropiedadEmail
        let user = await User.findOne({ email: email });
        // Si existe el usuario
        if (user) {
            // Enviamos un objeto como error
            throw ({ code: 11000 })
        }

        user = new User({ email, password })

        // Guardamos en la base de datos
        await user.save();
        const { token, expiresIn } = generateToken(user.id);
        return res.status(201).json({ token , expiresIn });
    } catch (error) {
        console.log(error.code);
        // Codigo 11000 = Se duplica la key (el valor no es unico)
        if (error.code === 11000) {
            return res.status(400).json({ error: "Ya existe este usuario" });
        }
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


## Ruta protegida  #2  / Añadir una propiedad al objeto req / findById()

- Sacamos información del payload para pasarla a la ruta protegida.


RequireToken.js

```js
import jwt from 'jsonwebtoken';
export const requireToken = (req, res, next) => {
    try {
        // Accedemos al token que se envio a traves de header
        let token = req.headers?.authorization;
        // Si no existe el token
        if (!token) {
            throw new Error('No existe el token');
        }
        // Conseguimos el token
        token = token.split(" ")[1];
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        // Le añadimos una propiedad al req
        req.uid = uid;
        //El mismo objeto req se le pasa al siguiente middleware o funcion que gestione la solicitud
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: error.message });
    }
}

```

:::tip Observacion 
Le añadimos la uid(id) del usuario al requerimiento(req) desde el middleware para que luego la función que gestione la solicitud HTTP tenga acceso a la id del usuario.
:::



## findById()
- Lo contiene el modelo, no la instancia
- Utilizamos el método findById () para buscar un documento por la id. (Parecido a findOne)
- Recibe la id a buscar
- Nos devuelve una instancia del modelo que contiene el documento seleccionado.
- Ej. Ej. User.findById(123) = Select * from User WHERE id = 123;


auth.controller.js

```js
export const infoUser = async (req, res) => {
    try {
        // Buscamos un documento por la id 
//findById(id);

        const user = await User.findById(req.uid);
        return res.json({user});
    } catch (error) {
        return res.status(500).json({error: "error de server"})
    }
}

```

:::tip Observacion 
Accedemos al requirimiento uid que agrego el middleware.
:::

## Validaciones del token 

### 1 Forma
tokenManager.js
```js
export const errorsValidateToken = error => {
    switch (error) {
        case 'invalid signature':
            return "firma no válida";
        case 'jwt expired':
            return "token expirado";
        case 'invalid token':
            return "No invente token";
        default:
            return "Token no valido";
    }
}

```

RequireToken.js

```js
import { errorsValidateToken } from '../utils/tokenManager.js';



catch (error) {
      
        return res.status(401).json({ error: errorsValidateToken(error.message) });
    }

```

### 2 Forma

RequireToken.js

```js
catch (error) {
        console.log(error.message);
       const TokenVerificationError = {
           ["jwt expired"] : "JWT expirado" ,
           ["invalid token"] : "Token no valido",
           ["jwt expired"] : "Token expirado",
           ["invalid signature"] : "Firma no valida",
           ["jwt malformed"] : "Token no valido" ,
           ["No existe el token"] : "No existe el token" ,
       }
        return res.status(401).json({ 
            error: TokenVerificationError[error.message] });
    }

```

:::tip Observacion 
Le podes quitar los corchetes que funciona igual.
:::

## Modificamos la información que nos devuelve la ruta protegida y usamos el Lean

:::warning 
No mostrar la contraseña
:::


### lean()
- Al realizar una búsqueda con findById (Lo mismo pasa con findOne) nos devuelve una instancia del modelo que contiene varios métodos para manipular el documento seleccionado.
- Con lean() le quitamos todos los  métodos que corresponden a la instancia del modelo , permitiendo que la consulta sea mas rápido.
- Ej. con lean() , no contiene el metodo save()

```js
export const infoUser = async (req, res) => {
    try {
        // Buscamos un documento por la id 
        //findById(id);
        const user = await User.findById(req.uid).lean();
        return res.json({email: user.email , uid:user.id});
    } catch (error) {
        return res.status(500).json({error: "error de server"})
    }
}

```

## Simple HTML

:::warning 
- Es un ejemplo , luego se elimina del proyecto ya que una API REST no trabaja con el frontend.
:::



- En la carpeta public van los archivos estáticos (HTML , CSS , JS , imágenes , etc)
- Todo el contenido que puede ser accedido desde el navegador va en la carpeta public
- Trabajar en la carpeta public es trabajar en el frontend.
- Todo en esta carpeta lo interpreta y ejecuta el navegador.
- Todas las demás carpetas es el backend (se ejecuta en el servidor/maquina)


#### Habilitamos la carpeta public  con el middleware:

index.js 
```js
const app = express();
app.use(express.json());
app.use('/api' , authRouter)
//Temporal
app.use(express.static("public"))
```

## Solicitudes con fetch 

### Metodo fetch 
- Utilizamos el fetch para realizar una solicitud HTTP.
- Por defecto hace una solicitud en GET

### fetch(url , {configuraciones})
Parametros:

1.	 Una url, donde se va a hacer la solicitud
2.	 un objeto con configuraciones


### Configuraciones del fetch  (Propiedad y valor)
- method : POST/GET/DELETE/ETC
- headers: {         el tipo de información que acepta el servidor , datos que se envia por el header     }
- body: La informacion que se envia
- credentials : 'valor'   =  Depende del valor, incluye las cookies del navegador en la solicitud.

index.html 
```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
    </head>
    <body>
        <form id="formLogin">
            <input type="email" value="correo5@hotmail.com" id="email" />
            <input type="password" value="123456" id="password" />
            <button type="submit">Acceder</button>
        </form>

        <script>
            const formLogin = document.querySelector("#formLogin");
            const email = document.querySelector("#email");
            const password = document.querySelector("#password");

            formLogin.addEventListener("submit", async (e) => {
                e.preventDefault();
                try {
                    const res = await fetch("/api/login", {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: email.value,
                            password: password.value,
                        }),
                    });

                    console.log(res.ok, res.status);
                    const { token } = await res.json();
                    console.log(token);
                    // Redirreciono a otro sitio
                    window.location.href = "/protected.html";
                } catch (error) {
                    console.log(error);
                }
            });
        </script>
    </body>
</html>

```
:::tip Observacion 
- Si en el navegador, ingresamos a http://localhost:5000/ , se ejecutaría el index.html (lo ejecuta el navegador)

:::


protected.html 
- Seria la "ruta protegida"

:::tip Configuracion del Header -- Authorization 
```js
 headers: {
                            Authorization: "Bearer " + token,
                        }

```
- Sirve para Para enviar el token por el header como estuvimos haciendo, respetando el formato Bearer.
:::

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ruta protegida</title>
    </head>
    <body>
        <h1>Ruta protegida</h1>
        <div id="app">
            <h2>Email</h2>
            <h3>UID</h3>
        </div>
        <button id="logout">Logout</button>

        <script>
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mjg2M2NiYzU4ZjQ1MmRkZGIxYjI3M2UiLCJpYXQiOjE2NTM0MTcyNzcsImV4cCI6MTY1MzQxODE3N30.MkwHDyGsMzJ2NtIHTVBh9ibKQjGZLffxhtnsHp72jEI"
            // Cuando se cargue el DOM
            document.addEventListener("DOMContentLoaded", async (e) => {
                const app = document.querySelector("#app");
                try {
                    const resToken = await fetch("/api/protected", {
                        headers: {
                            Authorization: "Bearer " + token,
                            "Content-Type": "application/json",
                        },
                    });
                    const data = await resToken.json();
                    app.innerHTML = `
                        <h2>Email: ${data.email}</h2>
                    `;
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }

           
            });
        </script>
    </body>
</html>

```

:::tip Observacion 
- Si en el navegador, ingresamos a http://localhost:5000/protected.html , se ejecutaría el protected.html (lo ejecuta el navegador).
:::

## Formas de guardar el token 

### localStorage 

index.html 
```js
console.log(res.ok, res.status);
                    const { token } = await res.json();
                    console.log(token);
                    // Guardamos en el localStorage;
                    localStorage.setItem("token" , token);
                    // Redirreciono a otro sitio
                     window.location.href = "/protected.html";

```

protected.html
```js
  <script>
            // Obtenemos el valor del localStorage
            const token =  localStorage.getItem("token");

```

:::warning Desventajas
Menos seguridad: Se puede acceder desde el navegador.
:::

###  Cookies (Sin configuraciones)

- Las cookies es  como el localStorage , se guarda con nombre -> valor

### metodo cookie()
- Sirve para crear una cookie
- Tiene tres parametros
1.	nombre de la cookie
2.	valor de la cookie
3.	un objeto con las configuraciones (opcional)

index.js

- Habilitamos el módulo de cookieParser para trabajar con cookies.



```js

import express from 'express';
// Habilitamos las variables de entorno
import 'dotenv/config';
import './database/connectDB.js'
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';

const app = express();
app.use(express.json());
// Habilitamos las cookies para poder usarlas
app.use(cookieParser());
app.use('/api' , authRouter)

```


auth.controller.js
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
        // Guardamos una cookie  
        //cookie(nombre , valor , {configuraciones})
        res.cookie("token" , token)
        return res.json({ token , expiresIn })
    } catch (error) {
        console.log(error);

        return res.status(500).json({ error: "Error de servidor" })
    }

}

```



:::warning Desventajas
Menos seguridad: Se puede acceder desde el navegador.
:::



###  Cookies (Con configuraciones)

- Tiene mas seguridad que la anterior 

####  Configuracion (3 parametro del metodo cookie)

##### httpOnly : boolean
- true = Solo va a vivir en el HTTP, no se puede acceder desde el frontend.
##### secure : boolean
true = Va a vivir en https   false = Va a vivir en http 

auth.controller.js
```js
       res.cookie("token" , token , {
            httpOnly:true,
            
            secure: !(process.env.MODO === "developer")
        })

```


- Es mas seguro que localStorage y las cookies sin configuración.

### Obtener el valor de la cookie

RequireToken.js

```js
export const requireToken = (req, res, next) => {
    try {
        // Accedemos al token que se envio a traves de las cookies
// Obtenemos el valor de una cookie
// req.cookies.nombrecookie    
        let token = req.cookies?.token;
        // Si no existe el token
        if (!token) {
            throw new Error('No existe el token');
        }
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        // Le añadimos una propiedad al req
        req.uid = uid;
        //El mismo objeto req se le pasa al siguiente middleware o funcion que gestione la solicitud
        next();
    } catch (error) {
        console.log(error.message);
       const TokenVerificationError = {
           ["jwt expired"] : "JWT expirado" ,
           ["invalid token"] : "Token no valido",
           ["jwt expired"] : "Token expirado",
           ["invalid signature"] : "Firma no valida",
           ["jwt malformed"] : "Token no valido" ,
           ["No existe el token"] : "No existe el token" ,
       }
        return res.status(401).json({ 
            error: TokenVerificationError[error.message] });
    }
}

```

:::tip Observacion 
Con req.cookies tenemos acceso a las cookies
:::

protected.html 

### credentials
credentials :  ‘include’ =  cada solicitud debe tener una credencial (debe tener cookies) , sirve para enviar las cookies en la petición HTTP , estamos incluyendo las cookies que se encuentran en el navegador en la solicitud (petición HTTP).

```js
     const resToken = await fetch("/api/protected", {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        credentials: 'include'
                    });

```

:::warning Desventajas
Se puede acceder a la información  , si una pagina sospecha hace alguna solicitud que “incluya cookie”
:::
##  Refresh Token

-	Es un token, que refrescara(actualizara) el “token verdadero”.
-  el Refresh token se guarda en la cookie ya que da lo mismo si lo roban, total no es el “token verdadero”.


tokenManager.js

```js
export const generateRefreshToken = (uid , res) => {
    // 30 dias  en segundos
    const expiresIn = 60 * 60 * 24 * 30;
    try {
        const refreshToken = jwt.sign({ uid }, process.env.JWT_REFRESH, {expiresIn});
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODO === "developer"),
            // La expiracion de la cookie : recibe el tiempo en milisegundos
            expires: new Date(Date.now() + expiresIn * 1000)
        })

    } catch (error) {
         console.log(error);
    }
}

```
:::tip Observacion 
- Usamos la variable de entorno JWT_REFRESH que es un String oculto (como el secreto)
:::

auth.controller.js

- En el login , al momento de crear el "token verdadero" , tambien creamos el refesh token

```js
import { generateRefreshToken, generateToken } from "../utils/tokenManager.js";

 const { token, expiresIn } = generateToken(user.id);
        generateRefreshToken(user.id , res);

```

### Acceder al “token verdadero” a través del Refresh Token.

#### Explicacion 
- Le enviamos una solicitud al servidor con el Refresh Token.
- El servidor validara el token y si es válido, devolverá el “token verdadero”.
- el “token verdadero” solo vivirá en la memoria RAM del pc del cliente (es una constante)


auth.route.js
```js
import { infoUser, login, refreshToken, register } from '../Controllers/auth.controllers.js';

router.get("/refresh" , refreshToken);

```

auth.controller.js
```js
import jwt from 'jsonwebtoken';

export const refreshToken = (req, res) => {
    try {
        const refreshTokenCookie = req.cookies.refreshToken;
        // Si no existe el token
        if (!refreshTokenCookie) {
            throw new Error("No existe el token");
        }
        const { uid } = jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH);
        // Generamos el "token verdadero"
        const { token, expiresIn } = generateToken(uid);
        return res.json({ token, expiresIn })

    } catch (error) {
        console.log("error de refresh" , error.message , error);
        const TokenVerificationError = {
            ["jwt expired"]: "JWT expirado",
            ["invalid token"]: "Token no valido",
            ["jwt expired"]: "Token expirado",
            ["invalid signature"]: "Firma no valida",
            ["jwt malformed"]: "Token no valido",
            ["No existe el token"]: "No existe el token",
        }
        return res.status(401).json({
            error: TokenVerificationError[error.message]
        });
    }
}

```

RequireToken.js
```js
export const requireToken = (req, res, next) => {
    try {
        // Accedemos al token que se envio a traves del header
        let token = req.headers?.authorization;
        
        // Si no existe el token
        if (!token) {
            throw new Error('No existe el token');
        }
        token = token.split(" ")[1];
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);

```

### Ahora accedemos al “token verdadero” desde el archivo HTML

protected.html
```html
  <script>
  
        // Cuando se cargue el DOM
        document.addEventListener("DOMContentLoaded", async (e) => {

            const app = document.querySelector("#app");
            try {
                const resToken = await fetch("/api/refresh", {
                    method: "GET",
                    credentials: 'include'

                })
                const {token} = await resToken.json();
                const res = await fetch("/api/protected", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:"Bearer " + token
                    },
              
                });
                const data = await res.json();
                app.innerHTML = `
                        <h2>Email: ${data.email}</h2>
                    `;
                console.log(data);
            } catch (error) {
                console.log(error);
            }

        });
    </script>

```




#### Explicacion 
- Esto junto con la implementación de los CORS (más adelante lo vemos) proporcionaría mucha mas seguridad que los otros dos métodos (guardar en la cookie/Localstorage)
- El usuario malicioso podrá hacer solicitudes, pero no recibirá ninguna respuesta (LA API NO LE DEVOLVERA INFORMACION)
- Por lo tanto, el usuario malicioso nunca podrá acceder al token verdadero.

## Logout
auth.controller.js
```js
export const logout = (req, res) => {
    //Eliminamos una cookie 
    //clearCookie('nombrecookie')
    res.clearCookie("refreshToken");
    res.json({ok:true})
}

```
auth.route.js
```js
import { infoUser, login, logout, refreshToken, register } from '../Controllers/auth.controllers.js';


router.get("/logout" , logout);

```

protected.html
```html
  <script>
  
        // Cuando se cargue el DOM
        document.addEventListener("DOMContentLoaded", async (e) => {

            const app = document.querySelector("#app");
            try {
                const resToken = await fetch("/api/refresh", {
                    method: "GET",
                    credentials: 'include'

                })
                const {token} = await resToken.json();
                const res = await fetch("/api/protected", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:"Bearer " + token
                    },
              
                });
                const data = await res.json();
                app.innerHTML = `
                        <h2>Email: ${data.email}</h2>
                    `;
                console.log(data);
            } catch (error) {
                console.log(error);
            }

            const logout = document.querySelector("#logout");
                logout.addEventListener("click", async () => {
                    const res = await fetch("/api/logout");
                    console.log(res.ok, res.status);
                    if (res.ok) {
                        window.location.href = "/";
                    }
                });
        });
    </script>

```

## Refactorizacion

### Errores  al verificar el token

tokenManager.js
```js
export const tokenVerificationError = {
    ["jwt expired"] : "JWT expirado" ,
    ["invalid token"] : "Token no valido",
    ["jwt expired"] : "Token expirado",
    ["invalid signature"] : "Firma no valida",
    ["jwt malformed"] : "Token no valido" ,
    ["No existe el token"] : "No existe el token" ,
}

```
RequireToken.js
```js

import { tokenVerificationError } from '../utils/tokenManager.js';


catch (error) {
        console.log(  error.message);
     
        return res.status(401).json({ 
            error: tokenVerificationError[error.message] });
    }

```
### middleware requireRefreshToken


middlewares/requireRefreshToken.js

- Crea un nuevo requirimiento(req).

```js
import { tokenVerificationError } from "../utils/tokenManager.js";
import jwt from 'jsonwebtoken';
export const requireRefreshToken = (req, res, next) => {
    try {
        const refreshTokenCookie = req.cookies.refreshToken;
        // Si no existe el token
        if (!refreshTokenCookie) {
            throw new Error("No existe el token");
        }
        const { uid } = jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH);
        req.uid = uid;
        next();
    } catch (error) {
        console.log(error.message, error);
        return res.status(401).json({
            error: tokenVerificationError[error.message]
        });
    }
}

```

auth.controller.js
- Accedemos al nuevo requirimiento (req).

```js
export const refreshToken = (req, res) => {
    try {
        // Generamos el "token verdadero"
        const { token, expiresIn } = generateToken(req.uid);
        return res.json({ token, expiresIn })

    } catch (error) {
       console.log(error);
       return res.status(500).json({ error: "error de server" })
    }
}

```

auth.route.js
```js
import { requireRefreshToken } from '../middlewares/requirerefreshToken.js';

router.get("/refresh" , requireRefreshToken, refreshToken);

```


### Separamos el middleware de express-validator del auth.route.js

middleware/validatorManager.js
```js
import { validationResult } from "express-validator";
// importamos el body de express-validator que es un middleware
import {body} from 'express-validator';

export const validationResultExpress = (req, res, next) => {
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

export const bodyLoginValidator = [body('email', 'No es un email').trim().isEmail().normalizeEmail(), body('password', 'formato de password incorrecta').trim().isLength({ min: 6 }), validationResultExpress, validationResultExpress];

export const bodyRegisterValidator = [body('email', 'No es un email').trim().isEmail().normalizeEmail(), body('password', 'formato de password incorrecta').trim().isLength({ min: 6 }), body('password', 'No coinciden las contraseñas').custom((value, { req }) => {
    if (value !== req.body.repassword) {
        // No se cumple la validacion
        // Se lanza un error
        throw new Error('No coinciden las contraseñas');
    }
    // Se cumple la validacion 
    // Se retorna el valor
    return value;
}), validationResultExpress];

```

auth.routes.js
```js
import express from 'express';
import { infoUser, login, logout, refreshToken, register } from '../Controllers/auth.controllers.js';
import { requireToken } from '../middlewares/RequireToken.js';
import { requireRefreshToken } from '../middlewares/requirerefreshToken.js';
import { bodyLoginValidator, bodyRegisterValidator } from '../middlewares/validatorManager.js';
const router = express.Router();

//post("ruta" , [middlewares] , funcion que gestiona la solicitud)
router.post("/login", bodyLoginValidator, login)
router.post("/register", bodyRegisterValidator, register)
router.get("/protected", requireToken, infoUser);
router.get("/refresh", requireRefreshToken, refreshToken);
router.get("/logout", logout);
export default router;

```


## Links (URL)  / Referencia al usuario

### Modelo

model/Link.js

```js
import mongoose from "mongoose";
const { Schema } = mongoose;

const linkSchema = new Schema({
    longLink: {
        type: String,
        required: true,
        trim: true,
    },
    nanoLink: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    // Creamos una referencia a la id del usuario
    uid: {
        // Schema.Types.ObjectId  = Es  una ID de un documento de una coleccion.
        type: Schema.Types.ObjectId,
        // ref: nombre de la coleccion(nombre del modelo) al que hace referencia
        ref: "User",
        required: true,
    },
});

export const Link = mongoose.model("Link", linkSchema);

```

:::tip Explicacion como si fuera relacional
-	Se hace una referencia a la columna _id(type:Schema.Types.ObjectId) de la tabla User(ref:”User”).
- _id lo genera mongoDB de manera automática.
:::


### Router


index.js
```js
import express from 'express';
// Habilitamos las variables de entorno
import 'dotenv/config';
import './database/connectDB.js'
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import authLink from './routes/link.route.js';

const app = express();
app.use(express.json());
// Habilitamos las cookies para poder usarlas
app.use(cookieParser());
app.use('/api' , authRouter)
app.use('/api/links' , authLink)
//Temporal
app.use(express.static("public"))
// Si no existe, asigna el puerto 500
const PORT = process.env.PORT || 5000
app.listen(PORT , () => console.log('http://localhost:'+PORT));

```

routes/link.route.js


:::tip Diferencia entre el metodo put y patch
- Una petición patch, modifica una parte del “todo” Ej. Modifica una parte del documento de la colección.
- Una petición put, modifica “todo”. Ej. Modifica todo el documento de la colección.
:::

```js
import {Router} from "express";
import { getLinks } from "../Controllers/link.controller.js";
const router = Router();

// Rutas 

// PETICION GET A http://localhost:5000/api/links = Acceder a todos los links 

// PETICION GET A http://localhost:5000/api/links/:id = Acceder a un link

// PETICION POST  A http://localhost:5000/api/links = Crea un link 

//PETICION PATCH/PUT A http://localhost:5000/api/links/:id = Actualiza un link

//PETICION DELETE A http://localhost:5000/api/links/:id = Elimina un link

router.get('/' , getLinks);



export default router;

```

controllers/link.controller.js
```js
export const getLinks = (req , res) => {
    return res.json({ok : true});
}

```

## Leer / Find()

### Find()

#### Sin parametros
- Busca todos los documentos de la colección.
- modelo.find()  = Select * from nombreModelo
:::tip Recordatorio
- El nombre del modelo  es el nombre de la colección.
:::

#### Con un parámetro (Objeto)
- Sirve para filtrar (Seria como implementar un WHERE)
- modelo.find({dato:valor}); = Select * from nombreModelo WHERE dato = valor;


link.route.js
```js
import { requireToken } from "../middlewares/RequireToken.js";

router.get('/' , requireToken , getLinks);

```

link.controller.js
- Utilizamos el uid del requirimiento que lo inserta el middleware requireToken.
```js
export const getLinks = async (req , res) => {
    try {
        // select * from Link(nombre modelo) WHERE uid = req.uid
     const links =    await Link.find({uid : req.uid});
        return res.json({links});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error de servidor'});
    }
    
}
```

## Crear

link.route.js
```js
import { createLink, getLinks } from "../Controllers/link.controller.js";
router.get('/' , requireToken , getLinks);
router.post('/' , requireToken , createLink);

```

link.controller.js
- Usamos el modulo nanoid para generar un String aleatorio.

```powershell
npm i nanoid
```

-  Utilizamos el uid del requirimiento que lo inserta el middleware requireToken.
```js

import { nanoid } from "nanoid";
import { Link } from "../models/Link.js";

export const createLink = async (req,res) => {
    try {
        const {longLink} = req.body;
        //nanoid(longitud) = genera un string aleatorio
        const link = new Link({longLink , nanoLink: nanoid(6) , uid: req.uid});
        await link.save()
        return res.json({link});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error de servidor'});
    }
}

```

## Validar URL (longLink)
### Express Validator
validatorManager.js
```js
export const bodyLinkValidator = [
    body("longLink" , "Formato link incorrecto")
    .trim()
    .notEmpty() // No este vacio 
    ,validationResultExpress
]

```

link.route.js
```js
import { bodyLinkValidator } from "../middlewares/validatorManager.js";

router.get('/' , requireToken , getLinks);
// (ruta , middleware , middleware , funcion para gestionar la solicitud)
router.post('/' , requireToken , bodyLinkValidator , createLink);

```

:::tip Observacion 
- Los middlewares están en el segundo y tercer parámetro del método POST.
- Primero se ejecuta el del segundo parámetro y luego el tercero…
:::

### Axios 
- Vamos a utilizer el modulo de [axios](https://www.npmjs.com/package/axios) (cumple la misma función que fetch)

```powershell
npm i axios
```
validatorManager.js

:::tip Explicacion del codigo 
- Se hace una petición GET a la url que se pasa en el body de la petición.
- Si se obtiene una respuesta, la url es válida.
- Si no se obtiene una respuesta, pasa al catch (el axios genera un error)
:::

```js
import axios from 'axios';

export const bodyLinkValidator = [
    body("longLink" , "Formato link incorrecto")
    .trim()
    .notEmpty() // No este vacio 
    // Funcion personalizada , value es el valor de la propiedad
    .custom(async value => {




        try {

            //Si la url NO comienza con 'https://' 
           if (!value.startsWith('https://')) {
               // Le añadimos el https:// al comienzo
                   value = 'https://' + value;
           }


        // Hacemos una peticion a la url
          // axios.X(url);
          // X puede ser GET , POST , FETCH , PUT , ETC
          // Peticion GET a la url 
          await axios.get(value);
          return value;
        } catch (error) {
            throw new Error('No se encontro el link');
        }
       
    })
    ,validationResultExpress
]

```

link.controller.js
```js
export const createLink = async (req,res) => {
    try {
        let {longLink} = req.body;
           //Si la url NO comienza con 'https://' 
        if (!longLink.startsWith('https://')) {
            // Le añadimos el https:// al comienzo
            longLink = 'https://' + longLink;
        }


        //nanoid(longitud) = genera un string aleatorio
        const link = new Link({longLink , nanoLink: nanoid(6) , uid: req.uid});
        await link.save()
        return res.status(201).json({link});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error de servidor'});
    }
}

```
## Obtener una ruta
### 1 Alternativa
link.route.js
```js
import { createLink, getLink, getLinks } from "../Controllers/link.controller.js";
router.get("/:id" , requireToken , getLink);

```
link.controller.js
```js
export const getLink = async (req, res) => {
    try {
        // Obtener el valor de la variable(params) de la url
        const {id} = req.params;
        // Buscamos por la id
     const link =    await Link.findById(id);
        return res.json({link});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error de servidor'});
    }
}

```
Le añadimos algunas validaciones: 
 ```js
 export const getLink = async (req, res) => {
    try {
        // Obtener el valor de la variable(params) de la url
        const { id } = req.params;
        // Buscamos por la id
        const link = await Link.findById(id);
        // Si no existe una url
        if (!link) {
            return res.status(404).json({ error: ' No existe el link' });
        }
        // Si No corresponde a la id del usuario
        if (!link.uid.equals(req.uid)) {
            return res.status(401).json({ error: ' No le pertenece este link' });
        }
        return res.json({ link });
    } catch (error) {
        console.log(error);
        if (error.kind == "ObjectId") {
            return res.status(403).json({ error: 'Formato id incorrecto' });
        }

        return res.status(500).json({ error: 'Error de servidor' });
    }
}

 ```
 ### 2 Alternativa

-  En lugar de buscar por la id, buscamos por el nanoLink y solo devolvemos el longLink
- Le quitamos la validacion del usuario y la del token, ya que lo puede usar cualquiera.

link.router.js
```js
router.get("/:nanolink"  , getLink);
```

link.controller.js
```js
export const getLink = async (req, res) => {
    try {
        // Obtener el valor de la variable(params) de la url
        const { nanolink } = req.params;
        // Buscamos por el nanolink
        const link = await Link.findOne({nanoLink: nanolink });
        // Si no existe una url
        if (!link) {
            return res.status(404).json({ error: ' No existe el link' });
        }
        return res.json({ longLink: link.longLink });
    } catch (error) {
        console.log(error);
        if (error.kind == "ObjectId") {
            return res.status(403).json({ error: 'Formato id incorrecto' });
        }

        return res.status(500).json({ error: 'Error de servidor' });
    }
}

```

## Remove

### metodo remove()
- Pertenece a una instancia del modelo.
- Elimina el documento que contiene la instancia de la BD.
- Sirve para eliminar el documento de la BD.


link.route.js
```js
import { createLink, getLink, getLinks, removeLink } from "../Controllers/link.controller.js";

router.delete("/:id" , requireToken , removeLink);

```
link.controller.js

```js
export const removeLink = async (req, res) => {
    try {
        // Obtener el valor de la variable(params) de la url
        const {id} = req.params;
        // Buscamos por la id
     const link =    await Link.findById(id);
   // Si no existe una url
     if (!link){
        return res.status(404).json({error: ' No existe el link'});
     }
     // Si No corresponde a la id del usuario
     if (!link.uid.equals(req.uid)) {
        return res.status(401).json({error: ' No le pertenece este link'});
     }
     // Eliminamos de la BD
     link.remove();
        return res.json({link});
    } catch (error) {
        console.log(error);
        if (error.kind == "ObjectId") {
            return res.status(403).json({error: 'Formato id incorrecto'});
        }
   
        return res.status(500).json({error: 'Error de servidor'});
    }
}

```

## Validar params (variables de la url)
- Usamos express-validator.
- Se remplaza el método body() por el método param().
- De esta manera se validan/evaluan las propiedades del params.



validatorManager.js
```js

import {body , param} from 'express-validator';

export const paramsLinkValidator = [
    //Se evalua la  propiedad id de params 
    param("id")
    .trim()
    .notEmpty() // No este vacio 
    .escape() // Escapamos 
    ,validationResultExpress
]

```

link.route.js
```js
import { bodyLinkValidator, paramsLinkValidator } from "../middlewares/validatorManager.js";

router.delete("/:id" , paramsLinkValidator , requireToken , removeLink);

```

## Modificar
link.route.js
```js
import { createLink, getLink, getLinks, removeLink, updateLink } from "../Controllers/link.controller.js";

router.delete("/:id" ,  requireToken ,  paramsLinkValidator , removeLink);
router.patch("/:id" ,  requireToken ,   paramsLinkValidator ,bodyLinkValidator , updateLink);

```
link.controller.js

```js
export const updateLink = async (req, res) => {
    try {
        // Obtener el valor de la variable(param) de la url
        const { id } = req.params;
        let { longLink } = req.body;
         //Si la url NO comienza con 'https://' 
        if (!longLink.startsWith('https://')) {
            // Le añadimos el https:// al comienzo
            longLink = 'https://' + longLink;
        }


        // Buscamos por la id
        const link = await Link.findById(id);
        // Si no existe una url
        if (!link) {
            return res.status(404).json({ error: ' No existe el link' });
        }
        // Si No corresponde a la id del usuario
        if (!link.uid.equals(req.uid)) {
            return res.status(401).json({ error: ' No le pertenece este link' });
        }
        // Modificamos el valor una propiedad 
        link.longLink = longLink;
        await link.save();
        return res.json({ link });
    } catch (error) {
        console.log(error);
        if (error.kind == "ObjectId") {
            return res.status(403).json({ error: 'Formato id incorrecto' });
        }

        return res.status(500).json({ error: 'Error de servidor' });
    }
}

```

:::tip Observacion 
- Modificamos el valor de una propiedad del documento (longLink en este caso) y lo volvemos a guardar (metodo save).
- MongoDB internamente hace un update de la propiedad que se cambió (en este ejemplo modifica la propiedad longLink con el nuevo valor que ingresamos).
:::


## Redirect (Opcional)

index.js 
```js
import express from 'express';
// Habilitamos las variables de entorno
import 'dotenv/config';
import './database/connectDB.js'
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import linkRouter from './routes/link.route.js';
import redirectRouter from './routes/redirect.route.js';

const app = express();
app.use(express.json());
// Habilitamos las cookies para poder usarlas
app.use(cookieParser());
app.use('/api' , authRouter)
app.use('/api/links' , linkRouter)
app.use('/' ,  redirectRouter)


// Si no existe, asigna el puerto 500
const PORT = process.env.PORT || 5000
app.listen(PORT , () => console.log('http://localhost:'+PORT));

```

Routes/redirect.route.js
```js
import {Router} from "express";
import { redirectLink } from "../Controllers/redirect.controllers.js";

const router = Router();

router.get('/:nanoLink' , redirectLink);

export default router;

```

Controllers/redirect.controllers.js
```js
import { Link } from "../models/Link.js";
export const redirectLink = async (req, res) => {
   
    try {
        // Obtener el valor de la variable(params) de la url
        const { nanoLink } = req.params;
        // Buscamos por el nanolink
        const link = await Link.findOne({nanoLink: nanoLink });
        // Si no existe una url
        if (!link) {
            return res.status(404).json({ error: ' No existe el link' });
        }
        //redirect(url)
        //redirreciono a la url
        return res.redirect(link.longLink)
    } catch (error) {
        console.log(error);
        if (error.kind == "ObjectId") {
            return res.status(403).json({ error: 'Formato id incorrecto' });
        }

        return res.status(500).json({ error: 'Error de servidor' });
    }
}

```

## mongo sanitize
- [Como evitar inyecciones javascript en mongoDB](https://stackoverflow.com/questions/13436467/javascript-nosql-injection-prevention-in-mongodb)
- [El problema radica en que se le pueda pasar un objeto a la consulta { $ne: 1 }](https://medium.com/@losantiemi/inyecci%C3%B3n-nosql-en-aplicaciones-de-node-js-y-mongodb-3d4d699f13f4)
- Pero con Moongose nosotros hicimos un esquema, por ende, como definimos los campos como String, estos serán interpretados como tal, por ende, no se ejecutará el objeto en cuestión.

## Cors
- Sirven para interferir con la respuesta.
- La petición siempre llega al servidor, pero en base del dominio que realiza la solicitud, le devuelve o no una respuesta. (A un intruso no le devuelve una respuesta)
- Sirve para especificar que dominios pueden consumir la APP (en este caso la API REST). Seria una lista blanca de dominios.


```powershell
npm i cors
```

.env
```js
ORIGIN1=http://127.0.0.1:5000
```

index.js 
- Habilitamos y configuramos los cors. 

### Cors sin configuracion
index.js 
```js
const app = express();
// Habilitamos y configuramos los cors.
app.use(cors())

```
- En la configuración por defecto ,todos los dominios pueden consumir nuestra API 

### Configuracion de cors
- La configuración esta en un objeto que se le pasa al metodo cors()

#### Propiedad Origin 
- Especifica Los dominios que tienen acceso a la APP (en este caso la API REST)
- La propiedad origin recibe una funcion con dos parametros (origin y callback)
- Origin : function(origin,callback)
- El parámetro origin es quien está haciendo la solicitud (el  dominio que hace la petición)
- [El callback es una función ](https://fedeleva.github.io/aprendizaje/Javascript/promesas.html#callback) que como primer argumento recibe el error y en el segundo argumento la respuesta satisfactoria (funciono correctamente).

```js
import cors from "cors";
const app = express();
// Un array con todos los dominios 
const whiteList = [process.env.ORIGIN1];

// Habilitamos y configuramos los cors.
//cors({configuracion})
app.use(cors({
    origin: function(origin , callback){
        // Si el dominio esta autorizado
        if (whiteList.includes(origin)) {
            return callback(null, origin);
        }
        return callback("Error de CORS origin " + origin + "No autorizado!");
    }
    
}))

```
:::tip Observacion 
Cuando se hace una solicitud desde el mismo dominio que contiene la app, el origin es undefined
:::


### Lo dejamos configurado para dos dominios

.env 
```js
ORIGIN1=
ORIGIN2=

```

Index.js
```js
const whiteList = [process.env.ORIGIN1 , process.env.ORIGIN2];
```

## Deploy Heroku

### A tener en cuenta 

#### El puerto 
- Cada hosting tiene un Puerto en especifico.
index.js
```js
// Si no existe, asigna el puerto 500
const PORT = process.env.PORT || 5000
app.listen(PORT , () => console.log('http://localhost:'+PORT));

```

#### . gitignore 
- Los hosting descargan los modulos y configuran las variables de entorno.
```js
node_modules
.env

```

#### Script 
- El script start es el que ejecuta heroku al iniciar el proyecto.
```js
 "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  },

```

### En Heroku 
- Utilizaremos  Heroku CLI  para el deploy

Pasos:
1. Iniciamos sesion
2. Creamos una aplicación (todo por defecto)
3. Iniciamos sesion 
```powershell
Heroku login
```
4. 	Inicializamos el proyecto

- En la ubicación del proyecto:

```powershell
git init
heroku git:remote -a XXX
XXX = El nombre de la aplicacion
```
5. Hacemos el deploy haciendo el push 
```powershell
git add .
Git commit -m “mensaje”
git push heroku X
X = master/main dependiendo de que rama principal tenga.
```
6. Configuramos las variables de entorno (config -- config VARS -- Reveal config vars)
- Copiamos todas las variables de .env menos el modo.

### Cambios del proyecto 
- Heroku distingue mayuscula con minúscula , ojo con el nombre de los archivos o carpetas en las importaciones y exportaciones

index.js 
```js
import cookieParser from 'cookie-parser';
import authRouter from './Routes/auth.route.js';
import linkRouter from './Routes/link.route.js';
import redirectRouter from './Routes/redirect.route.js';

```

auth.route.js
```js
import { requireRefreshToken } from '../middlewares/requireRefreshToken.js';
```

### LISTO!

- More -- Views Logs =  Abrir la consola

## Deploy con Render
- [Es una alternativa a Heroku](https://render.com/)

:::tip Postman 
- Postman hace solicitudes sin dominio(origin)
- Postman cuando realiza alguna solicitud simula que el origin es el mismo que el de la App (Api REST) (Se comunica a si mismo).
:::

-  Como el valor de origin es undefined cuando el origin es el mismo que el de la API, modificamos los cors:

```js
// Un array con todos los dominios 
const whiteList = [process.env.ORIGIN1 , process.env.ORIGIN2 , undefined];

```

### En el sitio web
1. Iniciamos sesion 
2. Seleccionamos Web services
3. Vinculamos con un repositorio de Github
- Para esto ya debemos tener el proyecto en un repositorio.

Opciones :
- Name = Nombre del proyecto
- Environment = Con que tecnología trabajamos (Node)
- Branch = La RAMA con la que se hace el deploy.
- Build Command = El comando para construir , ponemos npm install.
- Start Command = El comando para levantar el servidor (El script start) , ponemos npm start
- Opciones ADVANCED = Te permite agregar variables de entorno , Configuramos las variables de entorno (Todas menos el modo).
:::tip 
Start es el único comando que no se requiere la palabra run 
:::

4. Por ultimo le damos a Create Web Service


### Listo!!
