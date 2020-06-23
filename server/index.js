//importar express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');

require('dotenv').config({ path:'variables.env' })





//configurar express
const app = express();

//habilitar pug
app.set('view engine', 'pug');

//añadir las vistas
app.set('views', path.join(__dirname, './views'))

//cargar carpeta statica public
app.use(express.static('public'));

//Validar el ambiente
const config = configs[app.get('env')];

//creamos la variable para el sitio
app.locals.titulo = config.nombresitio;

//mostrar la fecha actual
app.use((req, res, next) => {
    //crear una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path
    console.log(res.locals)
    return next();

})

app.use(bodyParser.urlencoded({extended: true}))
//cargar las rutas
app.use('/', routes());

//** Puerto y host para la app */

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.listen(port, host, () => {console.log('el server funciona')});