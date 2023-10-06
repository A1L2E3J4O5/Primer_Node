var http = require('http');
var host = '127.0.0.1';
var puerto = '9000';

var servidor = http.createServer(function(llamado, respuesta)
{
    respuesta.writeHead(200, {'content-Type' : 'text/html'});
    respuesta.end
    ('<h1>Jesus Alejadro Ramirez ruiz</h1> <h2>AREAS DE CONOCIMIENTO TECNICO</h2> <ol> <li>HTML</li> </ol> <ol> <li>CSS</li> </ol> <ol> <li>JavaScript</li> </ol> <ol> <li>Reparacion de equipos de computo</li> </ol> <h2>HOBIES</h2> <p>Estudiar</p><p>Jugar Futbol</p>');

})

servidor.listen(puerto,host, function()
    {
        console.log('corriendo ' + host + ":" + puerto);
    }
)