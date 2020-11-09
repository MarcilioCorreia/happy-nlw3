// importar plugin/dependência 
const express = require('express');
const path = require('path');

//iniciando o express
const server = express();
server
//utilizando arquivos estáticos
.use(express.static('public'))
// criar uma rota
.get('/', (request, response) => {
    //console.log(path.join(__dirname, 'views', 'index.html'))
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//ligar o servidor
server.listen(5500)