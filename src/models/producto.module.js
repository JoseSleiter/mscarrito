'use strict';

const mongoose = require('mongoose');

var schema = new mongoose.Schema(
 {  
    id: {
      type: Number, 
      index: true, 
      auto: true},    
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
    },
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

// Duplicate the ID field.
// schema.virtual('id').get(function(){
//   return this._id.toHexString();
// });

// schema.options.toJSON.transform = function (doc, ret, options) {
//   // remove the _id of every document before returning the result
//   ret.id = ret._id;
//   delete ret._id;
//   delete ret.__v;
// }
module.exports = mongoose.model('Producto', schema);