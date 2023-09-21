const readlineSync = require('readline-sync');

const nombreUsuario = readlineSync.pregunta ('puede darme su nombre');

console.log('hola'+nombreUsuario+'¡');