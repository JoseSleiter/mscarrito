const express = require('express');
const app = express();

app.set('json spaces', 2)

// middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.use('/productos' ,require('./routes/routes.productos'))
app.use('/clientes', require('./routes/routes.clientes'))
app.use('/direcciones', require('./routes/routes.direcciones'))
app.use('/carritos', require('./routes/routes.carritos'))
app.use('/elementos', require('./routes/routes.elementos'))
app.use('/caracteristicas', require('./routes/routes.caracteristicas'))

module.exports = app;
