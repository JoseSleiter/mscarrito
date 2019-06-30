'use strict'
const Producto = require ('../models/producto.module')

const mongoose = require ('mongoose')
const scheme = new mongoose.Schema({
    producto_id:{
        type: [mongoose.Schema.Types.ObjectId],      
        ref: Producto,
        required: true
    },
    carrito_id:{
        type: string,
        required: true
    },
    cantidad:{
        required: true
    },
    precio:{
        required: true
    },
});