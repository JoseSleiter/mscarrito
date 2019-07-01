const express= require('express');
const CarritoCtrl = require('../controllers/carrito.controller')
const carrito = express.Router();

carrito
.get('/carritos', CarritoCtrl.index)
.post('/carritos', CarritoCtrl.store)

module.exports = carrito;