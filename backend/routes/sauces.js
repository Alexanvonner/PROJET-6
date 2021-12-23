const express = require('express');
const router = express.Router();

const  sauceCtrl = require('../controllers/sauces');

// toutes les routes sauces "CreateReadUpdateDelete"
router.post('/', sauceCtrl.createSauces);
router.get('/ ', sauceCtrl.getSauces);
router.get('/:id', sauceCtrl.getOneSauces);
router.put('/:id', sauceCtrl.updateSauces);
router.delete('/:id', sauceCtrl.deleteSauces);

module.exports = router;