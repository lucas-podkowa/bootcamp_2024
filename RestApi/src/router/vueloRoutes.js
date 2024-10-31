import { Router } from "express";
const router = Router();

import { getAll, create, update, deleteOne, deleteMany } from '../controller/vueloController.js';

router.get('/', getAll);
router.post('/create', create);
router.put('/update', update);
router.delete('/delete', deleteOne);
router.delete('/destroy', deleteMany);

export default router;