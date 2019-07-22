const express  = require('express');
const ProductoCtrl = require('../controllers/producto.controller')
const producto = express.Router();

producto
.get('/productos', ProductoCtrl.index)
.post('/productos', ProductoCtrl.store)
.get('/productos/:id', ProductoCtrl.show)
.delete('/productos/:id', ProductoCtrl.delete)

module.exports = producto;