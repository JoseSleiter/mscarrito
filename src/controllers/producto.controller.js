'use strict';
const Producto = require('../models/producto.module');
const ObjectID = require('mongodb').ObjectID;   

class ProductoController{
    /**
     * Returns all the products in the documents
     * @param {*} req datos de peticion del cliente
     * @param {*} res respuesta del servidor
     */
    static async index(req, res){      
        try{
            let response = Producto.find({})

            response.then((products) =>{                        
                res.status(200).json(products);  
            }).catch( err => {
                res.status(400).json(err)
            });

        }catch( exception){
            res.status(500).json(exception)            
        }

    }

    /**
     * Store in the document a product
     * @param {*} req datos de peticion del cliente
     * @param {*} res respuesta del servidor
     */
    static async store(req, res){  
        if( !Object.keys(req.body).length >= 3)
                return res.status(422).json({data: "Error faltan datos"})
                    
        const {...data} = req.body
        try{
        
            let response = Producto.create({  
                nombre: data.nombre, 
                imagen_url: data.imagen_url, 
                precio: data.precio 
            });                
            
            response.then(products => {                        
                // create!
                res.status(201).json({ data: products})
            }).catch( err => {
                // No create!
                res.status(400).send({message: 'Error en la peticion', err});
            });           
        }catch( exception){
            res.status(500).send(exception)            
        }
    }

    /**
     * Search one product in the documents
     * @param {*} req datos de peticion del cliente
     * @param {*} res respuesta del servidor
     */
    static async show(req, res){
        let productId = req.params.id;
        console.log(req.params)
        try{
            let response = Producto.findById({
                _id: ObjectID(productId)
            })
            response.then( product => {                
                if(!product) 
                return res.status(404).send({message: 'Not found'});

                res.status(200).send({message: 'Elemento encontrado', data: product});
                // followThisUser(req.user.sub, productId).then((value) => {
                //     return res.status(200).send({
                //         user,
                //         following: value.following,
                //         followed: value.followed
                //     });
                // });
                
            }).catch( err =>{
                res.status(400).send({message: 'Error en la peticion', err});
            });

        }catch( exception){
            res.status(500).send({                
                message: 'Error server'
            });          
        }

    }

    static async delete(req, res) {
        let {id} = req.params;
        let response = Producto.remove({ precio: id });
        
        try{
            response.then( product =>{
                if(!product.n)
                return res.status(404).send({message: 'Not found'})
    
                res.status(200).send({ message: `Eliminado producto ${id}`});
            }).catch( err =>{
                res.status(400).send({ message: 'Error en la peticion'});
    
            })      
        }catch(Exception){
            res.status(500).send({                
                message: 'Error server'
            });
        }
    }
}

module.exports = ProductoController;