const express = require('express');
const { truncateSync } = require('fs');
const path = require('path');
const pages = require('./pages.js')
const server = express();

server
    // utilizar body do req
    .use(express.urlencoded({ extended: truncateSync }))

    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//  ligar servidor
server.listen(5500)