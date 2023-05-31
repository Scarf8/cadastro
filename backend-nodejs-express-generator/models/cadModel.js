const createHttpError = require('http-errors');
const mongoose = require('mongoose');

const cadSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    datanasc: String,
    telefone: Number,
    end: String,
    cid: String,
    est: String,
    status: Boolean
});

module.exports = mongoose.model('cadastro', cadSchema);