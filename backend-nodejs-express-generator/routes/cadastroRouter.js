import ImageController from '../controllers/ImageController';
const express = require('express');
const router = express.Router();
const cadasController = require('../controllers/CadasController');


const addImage = require ('../middlewares/addImage')

router.get('/', cadasController.listar);
router.post('/', cadasController.salvar);
router.get('/:id', cadasController.buscarPorId);
router.put('/:id', cadasController.atualizar);
router.delete('/:id', cadasController.excluir);

router.post('/image/:id', addImage.single('image'), ImageController.create )

module.exports = router;

