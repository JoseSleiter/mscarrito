const express= require('express');
const CarritoCtrl = require('../controllers/carrito.controller')
const carrito = express.Router();

carrito
.get('/', CarritoCtrl.index)
.post('/', CarritoCtrl.store)
.post('/store', CarritoCtrl.storeCarrito)
module.exports = carrito;