// importar plugin/dependência 
const express = require('express');
const path = require('path');
const pages = require ('./pages.js');
//iniciando o express
const server = express();
server
//utilizando arquivos estáticos
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// rotas da aplicação
.get('/', pages.index)
.get('/child_home', pages.childHome)
.get('/children_home', pages.childrenHome)
.get('/create-children_home', pages.createChildrenHome)
    //console.log(path.join(__dirname, 'views', 'index.html'))
    //return response.sendFile(path.join(__dirname, 'views', 'index.html'))
    //return response.render('index')

//ligar o servidor
server.listen(5500)