'use strict'
const Cliente = require('../models/cliente.module')
const Direccion = require('../models/direccion.module')
const mongoose = require ('mongoose')

const schema = new mongoose.Schema({
    cliente_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Cliente,
        require: true
    },
    direccion_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Direccion,
        require: true
    },
    propina:{
        type: Number,
        default: 0,
        require: true
    }

})

module.exports = mongoose.model('Carrito', schema );