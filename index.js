'use strict'

var mongoose = require('mongoose');
var app = require('./src/app');

// // Database
// mongoose.connect('mongodb://localhost/resthub')
// const db = mongoose.connection;


mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/curso_mean_social',  { useMongoClient: true})
    // .then(() => {
        console.log("La conexión a la base de datos curso_mean_social se ha realizado correctamente")
    
        // CREAR EL SERVIDOR WEB CON NODEJS
        app.listen( app.get('port'), () => {
            console.log(`Server started on port ${app.get('port')}`);
        });
    // })
    // .catch(err => console.log(err));