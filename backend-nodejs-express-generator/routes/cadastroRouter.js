const express = require('express');
const router = express.Router();
const cadasController = require('../controllers/CadasController');

router.get('/', cadasController.listar);
router.post('/', cadasController.salvar);
router.get('/:id', cadasController.buscarPorId);
router.put('/:id', cadasController.atualizar);
router.delete('/:id', cadasController.excluir);

module.exports = router;

