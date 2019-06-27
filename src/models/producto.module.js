'use strict';

const mongoose = require('mongoose');

var schema = new mongoose.Schema(
 {  
    id: {
      type: Number,
      // enum: ['CONFIRM', 'RESET'],
      index: false
    },
    nombre: {
      type: String,
      lowercase: true,
      required: true  
    },
    imagen_url: {
      type: String,
      lowercase: true,
      required: true
    },
    precio: {
      type: Number,
      lowercase: true,
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