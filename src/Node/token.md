# Token y Practica API REST
## JWT(JSON WEB TOKEN)
-	Es un token de seguridad que nosotros creamos al momento que el usuario se registra con sus credenciales(inicia sesion)
-	Este token se devuelve al cliente el cual tendrá que enviar cada vez que solicita información al servidor.
-	Se divide en 3 partes: Header, Payload y Verify Signature
:::tip
La información del usuario va en el PayLoad (NO PONER CONTRASEÑA)
:::
- Como servidor, cuando el usuario se registre, le vamos a devolver un token.
- Cada vez que el usuario quiera acceder a una ruta protegida, tendrá que enviar ese token.

- [link](https://jwt.io)
- [guia](https://openwebinars.net/blog/que-es-json-web-token-y-como-funciona/)
- [guia2](https://www.developerro.com/2019/03/12/jwt-api-authentication/)

### Ciclo de vida de un token
1. Nos logeamos (usuario y contraseña)
2. El servidor devuelve un token (JWT)
3. Cuando quiera acceder a algún recurso, va a enviar su token 

## API REST PRACTICA

Para este ejercicio práctico realizaremos una API REST, que es un estándar (reglas y especificaciones) para la transferencia de información entre cliente y servidor, utilizaremos respuestas en JSON y los típicos verbos HTTP: POST, GET, DELETE, PUT.

Algunas ventajas de hacer una API REST:

-	Podemos conectar múltiples aplicaciones a nuestro servidor, ya sea página web, aplicación móvil, aplicación para escritorio, etc.
-	Youtube por ejemplo cuenta con una api rest para poder implementar sus videos ya sea desde el sitio web o su aplicación móvil.
-	Separamos el backend del frontend
    - El frontend  se puede manejar con cualquier tecnología (vue, react , etc) y el backend con node.js/express , etc.
-	Permiten que el proyecto puede expandirse en un futuro
	

## Requisitos
- [node.js -- entorno de desarollo](https://nodejs.org/es/)
- [postman -- para simular un frontend](https://www.postman.com/downloads/)
- Configurar un cluster en mongoDB

## Pasos

### 1- Iniciar el proyecto 
```powershell
npm init -y
```
### 2- Configurar scripts

package.json:

```json
{
  "name": "api-rest-token",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "nodemon index" ,
    "start" : "node index"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

:::tip Observacion
Como se ve, vamos a utilizar un index.js
:::

### 3- Instalamos las dependencias a utilizar
:::tip  Observacion
Con un espacio en blanco separamos las dependencias para instalar varias en solo una linea
:::
```powershell
npm i  express body-parser mongoose bcrypt dotenv jsonwebtoken 
```
```powershell
npm i @hapi/joi
```
```powershell
npm i cors
```
```powershell
npm i -g nodemon
```
### 4- Creamos el .gitignore
```gitignore
node_modules
.env

```
### 5- carpetas:
 - routes
 - models

 ###  6 - index.js:

 :::tip regla API REST 
 Para que sea una API REST, las respuestas deben ser en JSON o XHTML
 :::

 ```js
 const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()
const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos

// import routes

// route middlewares
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})

 ```

 Lo probamos en postman:
 1. Le das al icono + 
 2. Seleccionas el verbo a tratar 
 :::tip POSTMAN
 Postman hace una simulación de nuestro frontend y sirve para hacer todas las peticiones HTTP  (PUT , DELETE , GET , POST , ETC) que quieras
 :::
3.  Ingresas la url donde se va a enviar una petición X (GET , POST , ETC)

Ejemplo: GET http://localhost:3001   SEND

Deberias de recibir la respuesta json.

### 7 - Creamos el archivo .env para las variables de entorno
```js
USER=
PASSWORD=
DBNAME=
TOKEN_SECRET=

```
### 8- Empezamos por las rutas
Creamos un archivo auth.js en la carpeta routes

```js
const router = require('express').Router();

router.post('/register', async (req, res) => {

    res.json({
        error: null,
        data: 'aquí va ir la data'
    })
})

module.exports = router;

```
index.js:
```js
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()
const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos

// import routes
const authRoutes = require('./routes/auth');
// route middlewares

app.use('/api/user' , authRoutes)

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})

```
Probar en POSTMAN:

POST  http://localhost:3001/api/user/register send
### 9- Configuramos la BD 
1. Creamos una cuenta de la BD mongo (Database acces)
:::tip cuenta
usuario: api-rest

contraseña: mTrKny2lLo5L8z7b


:::

2. Los datos los ponemos en el .env
3. Creamos una Collections
    - BD – Browse Collection  - create Database
:::tip collection 
nombreBD: apiCrud

nombre de colección : users
:::
4. Buscamos la Uri
    - Database – Connect – Connect your app
 :::warning
Si cambiamos el cluster(BaseData) , se cambia la uri.
 :::
 5. en el archivo .env creamos variable para el usuario , contraseña y nombre de la BD.
 .env
 ```js
USER=api-rest
PASSWORD=mTrKny2lLo5L8z7b
DBNAME=apiCrud
TOKEN_SECRET=

 ```
 index.js
 ```js
 const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()
const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
// Conexión a Base de datos
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@mascota.xcibc.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const option =   { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri,option)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))

// import routes
const authRoutes = require('./routes/auth');
// route middlewares

app.use('/api/user' , authRoutes)

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})

 ```
 ### 10- Creamos el esquema

 Creamos el archivo User.js dentro de la carpeta models
:::tip Observacion
 A diferencia de la explicación , aca añadimos el tipo de dato de las propiedades y también algunas restricciones como si es obligatorio , el mínimo de caracteres/números o el máximo y un valor por defecto.
 :::
 ```js
 const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);

 ```
 ### 11- Vamos a registrar usuarios

 auth.js:
 ```js
 const router = require('express').Router();
const User = require('../models/User');
router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name ,
        email: req.body.email ,
        password: req.body.password

    })
    try {
        const UserDB = await user.save();
        res.json({
            error: null,
            data: UserDB
        })
    } catch (error) {
        // Asignamos un codigo de status(estado) (404 , 400 300 , etc) y una respuesta json
        res.status(400).json(error);
    }
  
})

module.exports = router;

 ```
 Probamos en postman:

 POST http://localhost:3001/api/user/register

 Body  - JSON - raw – json

 ```json
 {
    "name": "juanito" ,
    "email" : "juanito@juanito.com",
    "password": "contraseñajuanita"
}

 ```

 SEND

 ### 12- Vamos a realizar validaciones con @hapi/joi

 auth.js
 ```js
 const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
// Creamos un esquema de validaciones 
// Las propiedades son las mismas que el esquema de mongoDB
const schemaRegister = Joi.object({
    // Validaciones: Son string , validar correo , caracteres maximo y minimo , son obligatorio
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})


router.post('/register', async (req, res) => {
    // Utilizamos las validaciones
// esquemadevalidacion.validate(objeto/archivo json)
// Valida el objeto/archivojson
    const validaciones =  schemaRegister.validate(req.body);
    return   res.json({
        error: null,
        data: validaciones
    })
    const user = new User({
        name: req.body.name ,
        email: req.body.email ,
        password: req.body.password

    })
    try {
        const UserDB = await user.save();
        res.json({
            error: null,
            data: UserDB
        })
    } catch (error) {
        // Asignamos un codigo de status(estado) (404 , 400 300 , etc) y una respuesta json
        res.status(400).json(error);
    }
  
})

module.exports = router;

 ```

 Probamos en postman: Una peticion post con body al register



:::tip Observacion 
- De lo que se devuelve vamos a usar la propiedad error que se genera cuando no se cumple con las validaciones.

- Hay que acceder a los detalles del error(Contiene informacion sobre que validacion fallo)
:::
Modificacion:
```js
const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
// Creamos un esquema de validaciones 
// Las propiedades son las mismas que el esquema de mongoDB
const schemaRegister = Joi.object({
    // Validaciones: Son string , validar correo , caracteres maximo y minimo , son obligatorio
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})


router.post('/register', async (req, res) => {
    // Utilizamos las validaciones
// esquemadevalidacion.validate(objeto/archivo json)
// Valida el objeto/archivojson
    const {error} =  schemaRegister.validate(req.body);
    // Si hubo algun error en las validaciones  == Si no paso las validaciones 
    if (error) {
       // Asignamos un codigo de status(estado) (404 , 400 300 , etc) y una respuesta json
       // Se sale del codigo si existe el error
      return  res.status(400).json( {error: error.details[0].message});
    }
    const user = new User({
        name: req.body.name ,
        email: req.body.email ,
        password: req.body.password

    })
    try {
        const UserDB = await user.save();
        res.json({
            error: null,
            data: UserDB
        })
    } catch (error) {
        
    }
  
})

module.exports = router;

```
Ahora vamos a validar que el email sea único:
```js
const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
// Creamos un esquema de validaciones 
// Las propiedades son las mismas que el esquema de mongoDB
const schemaRegister = Joi.object({
    // Validaciones: Son string , validar correo , caracteres maximo y minimo , son obligatorio
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})


router.post('/register', async (req, res) => {
    // Utilizamos las validaciones
// esquemadevalidacion.validate(objeto/archivo json)
// Valida el objeto/archivojson
    const {error} =  schemaRegister.validate(req.body);
    // Si hubo algun error en las validaciones  == Si no paso las validaciones 
    if (error) {
       // Asignamos un codigo de status(estado) (404 , 400 300 , etc) y una respuesta json
       // Se sale del codigo si existe el error
      return  res.status(400).json( {error: error.details[0].message});
    }
    //Validacion si el email es unico
    // Buscamos un documento cuyo email sea igual a req.body.email
    // Devuelve true(encontro el documento) o false (si no encontro el documento)
    const existeElEmail = await User.findOne({email : req.body.email})
    // Si ya existe el email
  if (existeElEmail) {
      // Importante el return para que salga del codigo
    return  res.status(400).json( {error: true , mensaje:'email ya registrado'});
  }
    const user = new User({
        name: req.body.name ,
        email: req.body.email ,
        password: req.body.password

    })
    try {
        const UserDB = await user.save();
        res.json({
            error: null,
            data: UserDB
        })
    } catch (error) {
        
    }
  
})

module.exports = router;

```

Lo probamos en postman.

### 13 - Vamos a cifrar las contraseñas (hash)

:::warning ojo
Nunca pero nunca guardar las contraseñas sin cifrar.
:::
:::tip 
Para eso utilizamos el bycript
:::

auth.js:
:::tip 
genSalt(nro) = La cantidad de saltos   == La cantidad de veces que se va a encriptar la contraseña en cadena.
:::

```js
const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const schemaRegister = Joi.object({
    
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})


router.post('/register', async (req, res) => {

    const {error} =  schemaRegister.validate(req.body);
  
    if (error) {
      return  res.status(400).json( {error: error.details[0].message});
    }

    const existeElEmail = await User.findOne({email : req.body.email})

  if (existeElEmail) {
      
    return  res.status(400).json( {error: true , mensaje:'email ya registrado'});
  }
  // Guardamos en una variable la cantidad de saltos que se va a hacer en una contraseña
  const saltos = await bcrypt.genSalt(10);
  // Encriptamos la contraseña  hash(contraseña , cant de saltos)
  // Nos devuelve la contraseña encriptada
   const password = await bcrypt.hash(req.body.password , saltos)
    const user = new User({
        name: req.body.name ,
        email: req.body.email ,
        // password : password
        password

    })
    try {
        const UserDB = await user.save();
        res.json({
            error: null,
            data: UserDB
        })
    } catch (error) {
        res.status(400).json({error})
    }
  
})

module.exports = router;

```
Probamos en postman 

### 14- Empezamos a crear el login

auth.js

:::tip Consejo 
Se recomienda poner los mensajes de los errores todos iguales para no darle pista a un futuro hacker . 

Igualmente con los código de status no darle pista al hacker.
:::

```js
const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const schemaRegister = Joi.object({
    
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})
// Esquema de validaciones del login
const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

router.post('/register', async (req, res) => {

    const {error} =  schemaRegister.validate(req.body);
  
    if (error) {
      return  res.status(400).json( {error: error.details[0].message});
    }

    const existeElEmail = await User.findOne({email : req.body.email})

  if (existeElEmail) {
      
    return  res.status(400).json( {error: true , mensaje:'email ya registrado'});
  }
 
  const saltos = await bcrypt.genSalt(10);

   const password = await bcrypt.hash(req.body.password , saltos)
    const user = new User({
        name: req.body.name ,
        email: req.body.email ,
        // password : password
        password

    })
    try {
        const UserDB = await user.save();
        res.json({
            error: null,
            data: UserDB
        })
    } catch (error) {
        res.status(400).json({error})
    }
  
})
router.post('/login', async (req, res) => {
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    // Buscamos un documento cuyo email sea  req.body.email
    // SI lo encuentra, lo devuelve en la variable user
    const user = await User.findOne({ email: req.body.email });
    // Si el usuario no existe
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });
     // Verificamos que la contraseña sea igual a la que esta en la BD
     // compare(contraseña sin cifrar , contraseña cifrada) 
    // La contraseña sin cifrar la cifra y la compara con el 2 parametro 
    // Devuelve true si son iguales
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    // Si la contraseña no son iguales / no es valida
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
    
    res.json({
        error: null,
        data: 'exito bienvenido'
    })
})
module.exports = router;

```
Probamos en postman 

POST  http://localhost:3001/api/user/login

body - raw - json

```json
{
"email" : "juanito@juanito.com",
"password": "contraseñajuanita"
}

```

:::tip Diferencia con un proyecto profesional
Generalmente las validaciones deben ir en un archivo aparte.
:::

### 15- Empezamos a trabajar con el token 
:::tip 
El desarollador se encarga de la gestion y validacion del token . EL USUARIO NO SABE NADA DEL TOKEN
:::

.env: 
```js
USER=api-rest
PASSWORD=mTrKny2lLo5L8z7b
DBNAME=apiCrud
TOKEN_SECRET=secreto

```
auth.js
```js
const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const schemaRegister = Joi.object({
    
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})
const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

router.post('/register', async (req, res) => {

    const {error} =  schemaRegister.validate(req.body);
  
    if (error) {
      return  res.status(400).json( {error: error.details[0].message});
    }

    const existeElEmail = await User.findOne({email : req.body.email})

  if (existeElEmail) {
      
    return  res.status(400).json( {error: true , mensaje:'email ya registrado'});
  }
 
  const saltos = await bcrypt.genSalt(10);

   const password = await bcrypt.hash(req.body.password , saltos)
    const user = new User({
        name: req.body.name ,
        email: req.body.email ,
        // password : password
        password

    })
    try {
        const UserDB = await user.save();
        res.json({
            error: null,
            data: UserDB
        })
    } catch (error) {
        res.status(400).json({error})
    }
  
})
router.post('/login', async (req, res) => {
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })

    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
    // Creamos el token
    // sign(un objeto que contiene el payload , string oculto)
    const token = jwt.sign({ 
        // Creamos el payload del token
        name: user.name,
        id: user._id, 
    } , 
    // Secreto
     // Texto(String) super secreto , que sea unico y dificil de adivinar
    process.env.TOKEN_SECRET)
    res.json({
        error: null,
        data: 'exito bienvenido' , 
        token: token
    })
})
module.exports = router;

```
Inicia sesion con postman 

[Proba el token en esta pagina](https://jwt.io)

:::tip Observacion
El token no tiene la firma.


Vemos que no es valido pero en el payload esta la data que pusimos (name y id)


Pero si en el bit secreto de la parte de Verify Signature, ponemos lo que pusimos como String secreto nos va a aparecer como verificado/validado.

Entonces para verificar desde el servidor , usamos el secreto/String secreto / bit secreto para ver si el token es valido(NO FUE INVENTADO).
:::

### 16- Empezamos con las rutas protegidas , creamos un middleware

:::tip explicacion 
Son rutas restringidas, que depende del token si tenes acceso o no.
:::

auth.js:
```js
const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const schemaRegister = Joi.object({
    
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})
const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

router.post('/register', async (req, res) => {

    const {error} =  schemaRegister.validate(req.body);
  
    if (error) {
      return  res.status(400).json( {error: error.details[0].message});
    }

    const existeElEmail = await User.findOne({email : req.body.email})

  if (existeElEmail) {
      
    return  res.status(400).json( {error: true , mensaje:'email ya registrado'});
  }
 
  const saltos = await bcrypt.genSalt(10);

   const password = await bcrypt.hash(req.body.password , saltos)
    const user = new User({
        name: req.body.name ,
        email: req.body.email ,
        // password : password
        password

    })
    try {
        const UserDB = await user.save();
        res.json({
            error: null,
            data: UserDB
        })
    } catch (error) {
        res.status(400).json({error})
    }
  
})
router.post('/login', async (req, res) => {
    
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })

    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })

    const token = jwt.sign({ 
        
        name: user.name,
        id: user._id, 
    } , 
   
    process.env.TOKEN_SECRET)
  // Mandamos un header como respuesta con el token
    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
})
module.exports = router;

```
en la carpeta routes creamos el archivo validate-token.js

:::tip Explicacion 
Es un archivo con el middleware para validar el token 

Verifica que el token NO FUE INVENTADO
:::


```js
const jwt = require('jsonwebtoken')

// middleware para validar token (rutas protegidas)
const verifyToken = (req, res, next) => {
    // Va a leer el header 
    const token = req.header('auth-token')
    // Si no existe el token
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        // Verifica si el token es valido utilizando el String secreto
        // verify(token , string secreto
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        // Creamos un nuevo requirimiento con la verificacion
        req.user = verified
        // Si esta todo bien , hacemos el next()
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}

module.exports = verifyToken;

```
### 17- Rutas protegidas
Creamos un archivo llamado admin.js en la carpeta routes
```js
const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        error: null,
        data: {
            title: 'mi ruta protegida',
            user: req.user
        }
    })
})

module.exports = router

```
index.js:
```js
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()
const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@mascota.xcibc.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const option =   { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri,option)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))

// import routes
const authRoutes = require('./routes/auth');
const dashboadRoutes = require('./routes/admin');
const verifyToken = require('./routes/validate-token');

// route middlewares
// Al ir al /api/admin o a cualquier ruta de dashboadRoutes , se ejecuta el middleware (validate-token) y si la validacion que realiza es correcta, va a la ruta que se solicito.
app.use('/api/admin', verifyToken, dashboadRoutes);
app.use('/api/user' , authRoutes)

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})


```
Probamos con postman:

GET http://localhost:3001/api/admin

Resultado: Acceso denegado

Pero si configuramos una nueva cabecera(header)

En postman:
1. Headers - Añadir key 

nombre: auth-token

value: el valor del token (ej. eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoianVhbml0byIsImlkIjoiNjIxZDE4ZjVmZmJhNzBiMmQ5NzA5NWM1IiwiaWF0IjoxNjQ2MDc1ODA1fQ.0JQ6BRa-QaHebLSnsXXqNbaluxtmlP2VlzgxBE4t6lE)


