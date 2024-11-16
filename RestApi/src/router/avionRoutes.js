import Router from "express";
const router = Router();
import multer from "multer";

import { create, deleteOne, deleteMany, update, getAll } from '../controller/avionController.js';
import { validate, rulesList, rulesCreate, rulesUpdate } from '../middleware/avionValidator.js'
import { isAutenticated } from "./../middleware/usuarioValidator.js"
import fs from 'node:fs'
import { upSimple } from './../middleware/filesUpload.js'


router.get('/', getAll);
router.get('/:id', rulesList(), validate, getAll);
router.post('/create', rulesCreate(), validate, upSimple, create);
//router.post('/create', upSimple, create);
router.put('/update/:id', rulesUpdate(), validate, update);
router.delete('/delete/:id', isAutenticated, deleteOne);
router.delete('/delete_many', deleteMany);



const upload = multer({ dest: 'uploads/' });

router.post('/foto', upload.single('imagen'), (req, res) => {
    console.log(req.file)
    fs.renameSync(req.file.path, `./uploads/${Date.now()}-${req.file.originalname}`)


    res.send("Foto subida con éxito");
});
router.post('/fotos', upload.array('imagenes'), (req, res) => {
    console.log(req.files)
    req.files.forEach(file => {
        fs.renameSync(file.path, `./uploads/${file.originalname}`)
    });

});

export default router;