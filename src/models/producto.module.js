'use strict';

const mongoose = require('mongoose');

var schema = new mongoose.Schema(
 {  
    id: {
        type: String,
        enum: ['CONFIRM', 'RESET'],
        index: true
      },
    nombre: {
        type: String,
        default: config.EMAIL_FROM
      },
    imagen_url: {
        type: String,
        required: true
      },
    precio: {
        type: Number,
        required: true
      }
    },
    {
      timestamps: {
        createdAt: 'metadata.createdAt',
        updatedAt: 'metadata.updatedAt'
      }
    }
);

module.exports = mongoose.model('Producto', schema);