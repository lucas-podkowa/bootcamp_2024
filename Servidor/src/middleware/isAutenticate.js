import { verify } from 'jsonwebtoken';

function isAuthorized(req, res, next) {
    if (req.headers["authorization"]) {
        try {
            const token = req.headers["authorization"]
            const verified = verify(token, "ultraMegaSecretPass");
            if (verified) {
                next();
            } else {
                res.status(403).send({
                    message: "Token invalido, permiso denegado"
                });
            }

        } catch (error) {
            res.status(403).send({
                message: "Acceso Denegado"
            });
        }
    } else {
        res.status(403).send({
            message: "No posee token de autorizacion"
        });
    }
}

export default isAuthorized;