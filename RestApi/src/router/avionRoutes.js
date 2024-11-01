import Router from "express";
const router = Router();

import { create, deleteOne, deleteMany, update, getAll } from '../controller/avionController.js';


//en esta instancia definiremos nusetros validator

router.get('/', getAll);
router.post('/create', create);
router.put('/update/:id', update);
router.delete('/delete', deleteOne);
router.delete('/delete_many', deleteMany);

export default router;