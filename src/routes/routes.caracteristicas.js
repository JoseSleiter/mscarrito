const express = require('express')
const caracteristicaCrtl = require('../controllers/caracteristicas.controller')
const caracteristica = express.Router()

caracteristica
.get('/', caracteristicaCrtl.index)
.post('/', caracteristicaCrtl.store)

module.exports = caracteristica;