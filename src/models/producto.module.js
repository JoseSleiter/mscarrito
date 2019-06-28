'use strict';

const mongoose = require('mongoose');

var schema = new mongoose.Schema(
 {  

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

schema.virtual('id').get(function() {
  return this._id;
});

module.exports = mongoose.model('Producto', schema);