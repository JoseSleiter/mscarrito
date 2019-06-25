const express = require('express');
const app = express();

app.set('port', process.env.PORT || '8088');
app.set('json spaces', 2)

// middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.use(require('./src/routes/routes.productos'))

app.listen( app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});