const fs = require('fs');
const colors = require('colors');

let miArray = [];

const guardarDB = () => {
    let DB = JSON.stringify(miArray);
    fs.writeFile("./DB/DB.json", DB, function(error) {
        if (error) throw console.log(error);
    })
}

function cargarArray() {
    try {
        miArray = require('../DB/DB.json');
    } catch {
        miArray = []
    }

}

function actualizar(descripcion, estado = true) {
    cargarArray();

    let index = miArray.findIndex(function(indiceElemento) {
        return indiceElemento.descripcion === descripcion;
    })
    if (index >= 0) {
        miArray[index].estado = estado;
        guardarDB();
        console.log("Actualizado correctamente");
    } else console.log("ERROR: No es posible actualizar");

}

function borrar(descripcion) {
    cargarArray();
    let index = miArray.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {

        console.log(miArray.splice(index, 1));
        guardarDB();
        return true;
    } else console.log("ERROR: no se pudo borrar el registro");
}



const crear = (descripcion, estado = false) => {
    cargarArray();
    let porHacer = {
        descripcion,
        estado: estado
    };
    miArray.push(porHacer)
    guardarDB();
}


function mostrar() {
    cargarArray();

    for (let elemento of miArray) {
        console.log("======ElementosArray======\n".green);
        console.log("Descripcion: " + elemento.descripcion);
        console.log("Estado: " + elemento.estado);
        console.log("\n=========================\n\n\n".green);
    }
}

module.exports = {
    funcionCrear: crear,
    funcionMostrar: mostrar,
    funcionActualizar: actualizar,
    funcionBorrar: borrar
}