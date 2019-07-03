const express  = require('express');
const ProductoCtrl = require('../controllers/producto.controller')
const producto = express.Router();

producto
.get('/', ProductoCtrl.index)
.post('/', ProductoCtrl.store)
.get('/:id', ProductoCtrl.show)
.delete('/:id', ProductoCtrl.delete)

module.exports = producto;