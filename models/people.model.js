const { model, Schema } = require('mongoose');

const PeopleSchema = new Schema({
    nombre: { type: String, required: false, default: '' },
    titulos: { type: String, required: false, default: '' },
    DNI: { type: Number, required: false, default: '' },
    pais: { type: String, required: false, default: '' },
    provincia: { type: String, required: false, default: '' },
    cuidad: { type: String, required: false, default: '' },
    codigoPostal: { type: Number, required: false, default: '' },
    fechaNac: { type: Date, required: false, default: '' },
    aficiones: { type: String, required: false, default: '' },
    experienciaLaboral: { type: String, required: false, default: '' },
    linkGitHub: { type: String, required: false, default: '' },
    telefono: { type: Number, required: false, default: '' },
    correo: { type: String, required: false, default: '' },
    deporteFavorito: { type: String, required: false, default: '' },
    autoFavorito: { type: String, required: false, default: '' },
    colorFavoritos: { type: String, required: false, default: '' },
    activo: { type: Boolean, default: true }

});

module.exports = model('people', PeopleSchema)