import { Router } from "express";
const router = Router();
import isAutenticated from '../middleware/isAutenticate.js';

import { getAll, create, update, deleteOne, deleteMany } from '../controller/ticketsController.js';


//router.METHOD('path', middleware1, middleware2, controller);

router.get('/', getAll);
router.post('/create', isAutenticated, create);
router.put('/update', update);
router.delete('/delete', deleteOne);
router.delete('/destroy', deleteMany);

export default router;