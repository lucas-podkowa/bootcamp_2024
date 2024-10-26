const express = require("express");
const router = express.Router();

const controller = require('./../controller/avionController');

router.get('/', controller.getAll);
router.post('/create', controller.create);
router.put('/update', controller.update);
router.delete('/delete', controller.deleteOne);
router.delete('/destroy', controller.deleteMany);

module.exports = router;