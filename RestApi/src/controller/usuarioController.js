import model from '../model/usuario.js';
import jwt from 'jsonwebtoken';
import bc from 'bcryptjs';

const { sign } = jwt;
const { compareSync } = bc;



//app.METHOD('path', handler)
//http://localhost:8080/avion/     (GET)
//app.get('/', function(req, res)=>{});



export const getAll = async (req, res) => {

    try {
        const usaurios = await model.getAll();
        res.status(200).json(usaurios);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const create = async (req, res) => {
    const data = req.body;
    try {
        const result = await model.create(data);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
}


export const update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const avion = await model.getById(id);

    if (!avion.length > 0) {
        return res.status(404).json({ message: `Usuario con id ${id} no encontrado` });
    }

    try {
        const result = await model.update(id, data);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(`ha surgido el actualizanndo el usuario ${error.message}`);
    }
}

export const deleteOne = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await model.deleteOne(id);
        res.status(200).json({
            message: 'Usuario Eliminado con exito',
            detail: result.rows
        });
    } catch (error) {
        res.status(error.status || 500).json({ detail: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const { mail, pass } = req.body;
        const result = await model.findByMail(mail);
        const iguales = compareSync(pass, result.pass);
        if (iguales) {
            let user = {
                mail: result.mail
            }
            //firmar(dato_a_firmar, 'clave_a_utulizar_en_la_firma', {time_life}, (err, exito)=>{ manejar el resultado})
            sign(user, 'ultraMegaSecretPass', { expiresIn: '600s' }, (err, token) => {
                if (err) {
                    res.status(500).send({ message: err });
                } else {
                    res.status(200).json({ datos: user, credentials: token });
                }
            })
        } else {
            res.status(403).send({ message: 'Contraseña Incorrecta' });
        }
    } catch (error) {
        res.status(error.status || 500).send({ message: error.message });
    }
}



export const deleteMany = (usuariosToDelete) => {
}




/*
1. un usuario entra al sistema y quiere hacer lo que el sistema le permita
    1.1 el usuario admin puede hacer medio de todo
    1.2 algun usuario que no sea un admin pordra hacer menos cosas, estará restringido
    1.3 un usuario publico solo podra interatuar con funcionalidades publicas

2. para que un usuario tenga un rol debera registrarse, debera loguearse
    2.1 al registrarse, se encriptará su clave y esta estara almacenada como un hash (1 metodo de seguridad,)

3. cuando el usuario se loguea, es decir, inicia sesion el servidor generaá una credencial para que ese usuario la tenga
    3.1 cada vez que un usaurio quiera hacer una peticion debera mostrar su credencial (token)
    3.2 dicho token debera ser enviado de alguna manera (ej: cookies, param, body, headers)

*/
