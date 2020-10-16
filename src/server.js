const express = require('express');
const path = require('path');
const pages = require('./pages.js')
const server = express();

server
    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

// rotas da aplicação
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)

//  ligar servidor
server.listen(5500)