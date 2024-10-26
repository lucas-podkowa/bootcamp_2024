const jwt = require('jsonwebtoken');

function isAutenticate(req, res, next) {
    if (req.headers["authorization"]) {
        try {
            const token = req.headers["authorization"]
            const verified = jwt.verify(token, "ultraMegaSecretPass");
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

module.exports = isAutenticate;