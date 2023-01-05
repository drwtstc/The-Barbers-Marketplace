var express = require('express');
var router = express.Router();
const barbersCtrl = require('../controllers/barbers');

//Routes
router.get('/', barbersCtrl.index);
router.get('/new', barbersCtrl.new);
router.post('/', barbersCtrl.create);
router.get('/:id', barbersCtrl.show);
router.get('/:id/edit', barbersCtrl.editBarber);
router.put('/:id', barbersCtrl.update)
router.delete('/:id', barbersCtrl.delete);

module.exports = router;
