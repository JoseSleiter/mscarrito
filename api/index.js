'use strict'

var mongoose = require('mongoose');
var app = require('./src/app');

// Database
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://f6507777b550:27017/local', { useNewUrlParser: true})
//     .then(() => {
//         console.log("La conexión a la base de datos local se ha realizado correctamente")        
        // CREAR EL SERVIDOR WEB CON NODEJS
        app.listen( app.get('port'), () => {
            console.log(`Server started on port ${app.get('port')}`);
            // console.log(mongoose.get('test'))

        });
    // })
    // .catch(err => console.log(err));