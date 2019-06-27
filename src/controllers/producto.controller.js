'use strict';
const Producto = require('../models/producto.module');

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
        let userId = req.params.id;
        // const { id } = req.params
        console.log(req.params)

        try{
            Producto.findById(userId, (err, user) => {
                if(err)return res.status(500).send({message: 'Error en la petición', err});

                if(!user) return res.status(404).send({message: 'EL usuario no existe'});

                followThisUser(req.user.sub, userId).then((value) => {
                    // user.password = undefined;
                    return res.status(200).send({
                        user,
                        following: value.following,
                        followed: value.followed
                    });
                });
                
            });
            // res.send(userId)

        }catch( exception){
            res.status(500).send(exception)            
        }

    }

    static async delete(req, res) {
        
    }
}

module.exports = ProductoController;