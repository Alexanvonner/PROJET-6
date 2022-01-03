const express = require('express');
const router = express.Router();

const  sauceCtrl = require('../controllers/sauces');

const auth = require('../middleware/authentification')
const multer = require('../middleware/multer-config');


// toutes les routes sauces "CreateReadUpdateDelete"

router.post('/',auth, multer ,sauceCtrl.createSauces); // d'abord auth et ensuite multer 
router.get('/',auth, sauceCtrl.getSauces);
router.get('/:id',auth, sauceCtrl.getOneSauces);
router.put('/:id',auth, multer ,sauceCtrl.updateSauces);// d'abord auth et ensuite multer 
router.delete('/:id',auth, sauceCtrl.deleteSauces);
router.post('/:id/like',auth, sauceCtrl.createSauces); 

module.exports = router;