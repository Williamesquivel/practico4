const personas = require('../models/people.model')

const ctrlpeople = {}

//controlador para ver los datos de los alumnos
ctrlpeople.routGet = async(req, res) => {
    const datosPeople = await personas.find({ activo: true })
    res.json(datosPeople)
}

//controlador para cargar un nuevo alumno
ctrlpeople.routPost = async(req, res) => {
        const {
            nombre,
            titulos,
            DNI,
            pais,
            provincia,
            cuidad,
            codigoPostal,
            fechaNac,
            aficiones,
            experienciaLaboral,
            linkGitHub,
            telefono,
            correo,
            deporteFavorito,
            autoFavorito,
            colorFavorito
        } = req.body

        const alumnos = new personas({
            nombre,
            titulos,
            DNI,
            pais,
            provincia,
            cuidad,
            codigoPostal,
            fechaNac,
            aficiones,
            experienciaLaboral,
            linkGitHub,
            telefono,
            correo,
            deporteFavorito,
            autoFavorito,
            colorFavorito
        })
        await alumnos.save();

        res.json({ msg: "alumno cargado correctamente" })
    }
    //controler para el update de la planilla del alumno
ctrlpeople.routPut = async(req, res) => {
    const {
        nombre,
        titulos,
        DNI,
        pais,
        provincia,
        cuidad,
        codigoPostal,
        fechaNac,
        aficiones,
        experienciaLaboral,
        linkGitHub,
        telefono,
        correo,
        deporteFavorito,
        autoFavorito,
        colorFavorito
    } = req.body;
    await alumnos.findByIdAndUpdate(id, {
        nombre,
        titulos,
        DNI,
        pais,
        provincia,
        cuidad,
        codigoPostal,
        fechaNac,
        aficiones,
        experienciaLaboral,
        linkGitHub,
        telefono,
        correo,
        deporteFavorito,
        autoFavorito,
        colorFavorito
    }, { new: true });
    res.json({ msg: "datos cambiados correctamente" })

}
ctrlpeople.routDelete = async(req, res) => {
    const { id } = req.body;
    await alumnos.findByIdAndUpdate(id, { activo: false })
    res.json({
        msg: 'alumno eliminado correctamente'
    })
}


module.exports = ctrlpeople;