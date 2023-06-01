const createHttpError = require('http-errors');
const mongoose = require('mongoose');

const cadSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    dataNascimento: String,
    telefone: Number,
    endereco: String,
    cidade: String,
    image: String,
    estado: String,
    status: Boolean
});

module.exports = mongoose.model('cadastro', cadSchema);