var express = require('express');
var router = express.Router();
const patronsCtrl = require('../controllers/patrons');

//Routes
router.get('/', patronsCtrl.index);
router.get('/new', patronsCtrl.new);
router.post('/', patronsCtrl.create);
// router.get('/:id', patronsCtrl.show);
router.get('/:id/edit', patronsCtrl.editPatron);
router.put('/:id', patronsCtrl.update)
router.delete('/:id', patronsCtrl.delete);

module.exports = router;
