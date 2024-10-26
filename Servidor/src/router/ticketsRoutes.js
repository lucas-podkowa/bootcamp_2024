const express = require("express");
const router = express.Router();
const isAutenticated = require('./../middleware/isAutenticate');
const validaciones = require('./../middleware/validations');

const controller = require('../controller/ticketsController');


//router.METHOD('path', middleware1, middleware2, controller);

router.get('/', controller.getAll);
router.post('/create', isAutenticated, rules, validate, controller.create);
router.put('/update', isAutenticated, controller.update);
router.delete('/delete', isAutenticated, controller.deleteOne);
router.delete('/destroy', isAutenticated, controller.deleteMany);

module.exports = router;