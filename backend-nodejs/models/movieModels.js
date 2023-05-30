const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    codigo: Number,
    nome: String,
    sobrenome: String,
    datanasc: Number,
    telefone: Number,
    foto: String, 
    end: String,
    cid: String,
    est: String,
    status: Boolean
});

module.exports = mongoose.model('movies', movieSchema);