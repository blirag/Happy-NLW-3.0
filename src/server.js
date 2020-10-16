const express = require('express');
const path = require('path');
const server = express();

server
    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, "view"))
    .set('view engine', 'hbs')

// criar rota
server.get('/', (request, response) => {
    return response.render('index')
})

//  ligar servidor
server.listen(5500)