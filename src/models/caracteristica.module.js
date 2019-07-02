'use strict'
const Cliente = require('../models/cliente.module')
const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    producto_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Cliente,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    impacto_precio:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Caracteristica', schema)