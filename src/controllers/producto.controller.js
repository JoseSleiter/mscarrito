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
            // console.log(req.body)
            const {...data} = req.body
            console.log(data)
            if(data){
                Producto.create({ nombre: data.nombre , imagen_url: data.imagen_url, precio: data.precio }, function (err, saved) {
                    if (err) return res.status(500).json(err);
                    // saved!
                    res.status(202).json("Save")
                  });                
            }else{
                res.status(500).json("Response Error falta un dato")
            }            
        }catch( exception){
            res.status(501).send(exception)            
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
        let checkedItem = req.params.id;
        // if (!mongoose.Types.ObjectId.isValid(checkedItem)) {
        //     checkedItem = checkedItem.replace(/\s/g, '');
        // }
        // Item.findByIdAndRemove(checkedItem, function(err) {
        //     if (!err) {
        //       console.log("Successfully Deleted " + checkedItem);
        //     //   res.redirect("/");
        //     }
        // });
    }
}

module.exports = ProductoController;