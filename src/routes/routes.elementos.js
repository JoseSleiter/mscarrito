const express = require('express')

const elementosCtrl = require('../controllers/elementos.controller')
const elemento = express.Router()

elemento
.get('/', elementosCtrl.index)
.post('/', elementosCtrl.store) 
.get('/:id', elementosCtrl.show)

module.exports = elemento;