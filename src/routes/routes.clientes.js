const express = require ('express')
const ClienteCrtl = require('../controllers/cliente.controller')
const cliente = express.Router();

cliente
.get('/', ClienteCrtl.index )
.post('/', ClienteCrtl.store)

module.exports = cliente;