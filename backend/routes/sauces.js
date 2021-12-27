const express = require('express');
const router = express.Router();

const  sauceCtrl = require('../controllers/sauces');

const auth = require('../middleware/authentification')

// toutes les routes sauces "CreateReadUpdateDelete"
router.post('/', sauceCtrl.createSauces);
router.get('/',auth, sauceCtrl.getSauces);
router.get('/:id', sauceCtrl.getOneSauces);
router.put('/:id', sauceCtrl.updateSauces);
router.delete('/:id', sauceCtrl.deleteSauces);

module.exports = router;