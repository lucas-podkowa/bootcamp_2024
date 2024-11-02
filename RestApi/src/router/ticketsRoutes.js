import { Router } from "express";
const router = Router();

import { getAll, create, update, deleteOne, deleteMany } from '../controller/ticketsController.js';


//router.METHOD('path', middleware1, middleware2, controller);

router.get('/', getAll);
router.post('/create', create);
router.put('/update', update);
router.delete('/delete', deleteOne);
router.delete('/destroy', deleteMany);

export default router;