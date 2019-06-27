'use strict';

class ProductoController{
    static async index(req, res){      
        try{
            res.send({response: "Aqui"})

        }catch( exception){
            res.status(500).send(exception)            
        }

    }

    static async store(req, res){      
        try{
            console.log(req.body)
            const {data} = req.body
            if(data){
                res.json("Save")
            }else{
                res.status(500).json("Response Error falta un dato")
            }            
        }catch( exception){
            res.status(500).send(exception)            
        }
    }

    static async show(req, res){
        let productos = {nombre : "text"}
        console.log(req.params)
        const { id } = req.params
        try{
            res.send(productos)

        }catch( exception){
            res.status(500).send(exception)            
        }

    }

    static async delete(req, res) {
        
    }
}

module.exports = ProductoController;