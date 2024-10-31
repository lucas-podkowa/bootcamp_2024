import Router from "express";
const router = Router();

import { create, deleteOne, deleteMany, update, getAll } from '../controller/avionController.js';

router.get('/', getAll);
router.post('/create', create);
router.put('/update', update);
router.delete('/delete', deleteOne);
router.delete('/destroy', deleteMany);

export default router;