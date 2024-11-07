import Router from "express";
const router = Router();
import { create, deleteOne, deleteMany, update, getAll, login } from '../controller/usuarioController.js';
import { validate, userRules } from '../middleware/usuarioValidator.js'

router.get('/', getAll);
router.get('/:id', getAll);
router.post('/create', userRules(), validate, create);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteOne);
router.delete('/delete_many', deleteMany);
router.post('/login', login);


export default router;