import Router from "express";
const router = Router();
import multer from "multer";

import { create, deleteOne, deleteMany, update, getAll } from '../controller/avionController.js';
import { validate, rulesList, rulesCreate, rulesUpdate } from '../middleware/avionValidator.js'
import { isAutenticated } from "./../middleware/usuarioValidator.js"

router.get('/', getAll);
router.get('/:id', rulesList(), validate, getAll);
router.post('/create', rulesCreate(), validate, create);
router.put('/update/:id', rulesUpdate(), validate, update);
router.delete('/delete/:id', isAutenticated, deleteOne);
router.delete('/delete_many', deleteMany);


export default router;