'use strict'
const Direccion = require('../models/direccion.module')

class direccionesController{
    static async index(req, res){
        try {
            let response = Direccion.find({})
            response.then( direcciones =>{
                if(!direcciones)
                return res.status(404).send({message: "No exist result"})
                res.status(200).send({data: direcciones})

            }).catch( err =>{
                res.status(400).send({message: "Error en peticion", error: err})

            })
        } catch (error) {
            res.status(500).send({message: "No found"})
  
        }
    }

    static async store(req, res){
        const {...data} = req.body;
        try {
            let response = Direccion.create({cliente_id: data.cliente_id, latitud: data.latitud, longitud: data.longitud})
            response.then( direcciones =>{
                if(!direcciones)
                return res.status(404).send({message: "No exist result"})
                res.status(200).send({data: direcciones})

            }).catch( err =>{
                res.status(400).send({message: "Error en peticion", error: err})

            })
        } catch (error) {
            res.status(500).send({message: "No found"})
  
        }
    }
}

module.exports = direccionesController;