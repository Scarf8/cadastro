const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    datanasc: Number,
    telefone: Number,
    end: String,
    cid: String,
    est: String,
    status: Boolean
});

module.exports = mongoose.model('movies', movieSchema);