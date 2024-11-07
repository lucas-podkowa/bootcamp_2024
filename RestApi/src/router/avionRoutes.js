import Router from "express";
const router = Router();

import { create, deleteOne, deleteMany, update, getAll } from '../controller/avionController.js';
import { validate, rulesList, rulesCreate, rulesUpdate } from '../middleware/avionValidator.js'
import { isAutenticated } from "./../middleware/usuarioValidator.js"


//en esta instancia definiremos nusetros validator

router.get('/', isAutenticated, getAll);
router.get('/:id', rulesList(), validate, getAll);

router.post('/create',rulesCreate(), validate, create);
router.put('/update/:id',isAutenticated, rulesUpdate(), validate, update);
router.delete('/delete/:id',isAutenticated ,deleteOne);
router.delete('/delete_many', deleteMany);


// const crear_usuario = (req, res) => {
//     console.log('ha pasado las validaciones')
// }


// router.post('/users', avionValidator(), crear_usuario);



export default router;