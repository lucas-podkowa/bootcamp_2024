import multer from "multer";
import fs from 'node:fs'
import path from "node:path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');

    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

export const upSimple = upload.single("archivo");

export const upMulti = upload.array("archivos", 10);
