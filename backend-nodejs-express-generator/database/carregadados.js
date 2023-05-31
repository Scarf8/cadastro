require("./mongodb");
const mongoose = require("mongoose");
const cadModel = require("../models/cadModel.js");
const cadastro = require("./cad.json");

async function carregarDados() {
    try {
        await cadModel.deleteMany({});
        for (const cad of cadastro) {
            await cadModel.create(cad);
        }
        console.log("Carga de cadastros feita!");
    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
}

carregarDados();