const Cadastro = require('../models/cadModel');

class ImageController{
    async create(req, res){
        const {id} = req.params
        const file = req.file

        if(file){
            const cadastro = await Cadastro.findById(id)
            const updateCadastro = await cadastro.updateOne({image:file.filename})
            return res.status(200).json('erro ao adicionar imagem')
        }
    }
}

module.exports = new ImageController();