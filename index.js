'use strict'

var mongoose = require('mongoose');
var app = require('./src/app');
var {PORT, SERVER_HOSTNAME, DB_HOST, DB_PORT} = require('./src/config');

// // Database
// mongoose.connect('mongodb://localhost/resthub')
// const db = mongoose.connection;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + DB_HOST + ':' + DB_PORT + '/ms_carrito', { useNewUrlParser: true})
    .then(() => {
        console.log("La conexión a la base de datos se ha realizado correctamente")
        
        // CREAR EL SERVIDOR WEB CON NODEJS
        app.listen(PORT, () => {
            console.log(`Server running correctly in the url: http://${SERVER_HOSTNAME}:${PORT}`);0
        });
    }).catch(error => {
    	console.log('Error in DB connection', error);
    });