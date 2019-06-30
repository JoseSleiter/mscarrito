const express = require('express');
const app = express();

app.set('port', process.env.PORT || '8088');
app.set('json spaces', 2)

// middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.use('/api/' ,require('./routes/routes.productos'))
app.use('/api/', require('./routes/routes.clientes'))
app.use('/api/', require('./routes/routes.direcciones'))

module.exports = app;