const express = require ('express')
const direccionCrtl = require('../controllers/direccion.controller')
const direccion = express.Router();


direccion
.get('/', direccionCrtl.index)
.post('/', direccionCrtl.store)

module.exports = direccion;