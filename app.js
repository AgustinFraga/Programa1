const miModulo = require('./config/yargs')
const porHacer = require('./por-hacer/por-hacer')


switch (miModulo.argvIntento._[0]) {

    case 'crear':
        porHacer.funcionCrear(miModulo.argvIntento.descripcion, miModulo.argvIntento.estado)
        break;

    case 'mostrar':
        porHacer.funcionMostrar();
        break;

    case 'actualizar':
        porHacer.funcionActualizar(miModulo.argvIntento.descripcion, miModulo.argvIntento.estado)
        break;

    case 'borrar':
        porHacer.funcionBorrar(miModulo.argvIntento.descripcion)
        break;
    default:
        console.log("Comando no reconocido");
}