const express = require('express');
const router = express.Router();
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

const nosotrosController = require('../controllers/nosotrosController');
const HomeController = require('../controllers/homeController')
const ViajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController')

module.exports = function() {

    //controllers
    router.get('/', HomeController.consultasHomePage);
    
    router.get('/nosotros', nosotrosController.infoNosotros);

     
    router.get('/viajes', ViajesController.mostrarViajes);

    router.get('/viajes/:id', ViajesController.mostrarViaje);
   
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

   //cuando se llena el formulario

    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
}