const Testimonial = require('../models/Testimoniales');
exports.mostrarTestimoniales = (req, res) => {
    Testimonial.findAll()
        .then(testimoniales => res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        }))
}

exports.agregarTestimonial = (req, res) => {
    //validar que los campos esten llenos
    let {nombre, correo, mensaje} = req.body;

    let errores = [];

    if(!nombre) {
        errores.push({'mensaje' : 'Agrega tu nombre'})
    }
    if(!correo) {
        errores.push({'mensaje' : 'agrega un correo'})
    }
    if(!mensaje) {
        errores.push({'mensaje' : 'Agrega un mensaje'})
    }
    //revisar errores
    if(errores.length > 0) {
        //muestra la vista con errores
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        })
    }else {
        //almacernar en la base de datos
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error))
    }

}