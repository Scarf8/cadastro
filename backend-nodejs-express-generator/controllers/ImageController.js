const Movie = require('../models/movieModel');

class ImageController{
    async create(req, res){
        const {id} = req.params
        const file = req.file

        if(file){
            const movie = await Movie.findById(id)
            const updateMovie = await movie.updateOne({image:file.filename})
            return res.status(200).json('erro ao adicionar imagem')
        }
    }
}
export default new ImageController()