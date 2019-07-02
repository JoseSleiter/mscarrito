'use strict'
const Carrito = require('../models/carrito.module')

class carritoController {
    static async index(req, res){
        try {
            let response = Carrito.find({}).populate('cliente_id').populate('direccion_id')

            response.then( carritos =>{
                if(!carritos)
                return res.status(404).send({message: "No exist result"})
                res.status(200).send({data: carritos})

            }).catch( err =>{
                res.status(400).send({message: "Error en peticion", error: err})

            })
        } catch (error) {
            res.status(500).send({message: "No found"})
  
        }

    }

    // static async show(req, res){


    // }

    static async store(req, res){
        if(!Object.keys(req.body).length >= 3)
        return res.status(422).send({menssage : "No se tienen todos los datos"})
        let {cliente_id, direccion_id, propina} = req.body
        
        try {
            Carrito.create({cliente_id, direccion_id, propina}).then( carrito =>{
                console.log(carrito)
                res.status(201).send({menssage: "create", data :  carrito})
            }).catch( err => {
                console.log({message: err.message})
                res.status(422).send({message: "Error en peticion", error: err})
            })
        } catch (error) {
            res.status(500).send({"mensagge": "Not Bound"})
        }

    }

}

module.exports = carritoController;