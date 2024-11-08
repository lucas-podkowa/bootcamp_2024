import { Router } from "express";
const router = Router();

import { getAll, getByNumero, update, deleteOne, deleteMany, create } from '../controller/vueloController.js';
import { vueloCreateRules, validate } from './../middleware/vueloValidator.js';

router.get('/', getAll);
router.get('/:numero', getByNumero);
router.post('/create', vueloCreateRules(), validate, create);
router.put('/update', update);
router.delete('/delete', deleteOne);
router.delete('/destroy', deleteMany);

export default router;