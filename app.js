const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const argv = require('./config/yargs.js').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado!:`, colors.green(`${archivo}`)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;


}
//let base = 'caca';
//console.log(process.argv);

// let parametro = argv[2];
// let base = parametro.split('=')[1];