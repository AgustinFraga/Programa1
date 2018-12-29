const descripcion = { demand: true, alias: "d", desc: "No se encontro una descripcion" };
const argv = require('yargs')

.command("crear", "Se creara el contenido", {

    descripcion,

    estado: {
        alias: "e"
    }
})

.command("actualizar", "Actualizara el contenido", {

    descripcion,

    estado: {
        alias: "e",
        demand: true
    }
})

.command("mostrar", "muestra el contenido", {

})

.command("borrar", "Borra un registro segun descripcion", {
    descripcion
})

.help()

.argv




module.exports = {
    argvIntento: argv
}