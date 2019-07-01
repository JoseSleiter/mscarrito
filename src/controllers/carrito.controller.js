'use strict'
const Carrito = require('../models/carrito.module')

class carritoController {
    static async index(req, res){
        try {
            let response = Carrito.find({}).populate('cliente_id').populate('direccion_id')

            response.then( carrito =>{
                console.log(carrito)
            }).catch( err => {
                console.log(err)

            })
        } catch (error) {
            res.status(500).send({"mensagge": "Not Bound"})
        }

    }

    // static async show(req, res){


    // }

    static async store(req, res){
        let {cliente_id, direccion_id, propina} = req.body
        try {
            Carrito.create({cliente_id, direccion_id, propina}).then( carrito =>{
                console.log(carrito)
            }).catch( err => {
                console.log(err)

            })
        } catch (error) {
            res.status(500).send({"mensagge": "Not Bound"})
        }

    }

}

module.exports = carritoController;