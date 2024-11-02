import Router from "express";
const router = Router();

import { create, deleteOne, deleteMany, update, getAll } from '../controller/avionController.js';
import { validate, rulesList, rulesCreate } from '../middleware/avionValidator.js'


//en esta instancia definiremos nusetros validator

router.get('/', rulesList(), validate, getAll);
router.post('/create', rulesCreate(), validate, create);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteOne);
router.delete('/delete_many', deleteMany);


// const crear_usuario = (req, res) => {
//     console.log('ha pasado las validaciones')
// }


// router.post('/users', avionValidator(), crear_usuario);



export default router;