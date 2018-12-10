const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => { // el = del limite es un valor por default
    console.log('===================='.green);
    console.log(`Tabla de base ${base} hasta ${limite}`.green);
    console.log('===================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`.red);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject(`la base ${base} o ${limite} no se un numero`);
            return;
        }

        let tabla = '';
        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base*i}\n`;
            //console.log(`${base} * ${i} = ${base*i}`);
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
            //console.log(`The file tabla-${base} has been saved!`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}