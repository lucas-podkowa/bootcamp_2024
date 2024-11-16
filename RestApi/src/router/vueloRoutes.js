import { Router } from "express";
const router = Router();
import { getAll, getByNumero, update, deleteOne, deleteMany, create } from '../controller/vueloController.js';
//import { vueloCreateRules, validate } from './../middleware/vueloValidator.js';
import { validateCreateVuelo, validate, validateUpdateVuelo } from './../middleware/vueloValidator2.js'


/**
 * @swagger
 * tags:
 *   name: Vuelos
 *   description: Operaciones relacionadas con la gestión de vuelos
 */

/**
 * @swagger
 * components:
 *  schemas:
 *   Vuelo:
 *    type: object
 *    properties:
 *     numero:
 *      type: string
 *      description: Número único del vuelo
 *     origen:
 *      type: string
 *      description: Origen del vuelo
 *     destino:
 *      type: string
 *      description: Destino del vuelo
 *     avion_id:
 *      type: integer
 *      description: ID del avión asignado al vuelo
 *    example:
 *     numero: "AA1234"
 *     origen: "New York"
 *     destino: "Los Angeles"
 *     avion_id: 5
 *   Avion:
 *    type: object
 *    properties:
 *     nombre:
 *      type: string
 *      description: Conjunto de palabras que definen el nombre de un avion
 *    example:
 *     nombre: "Concord"
 *   
 * 
 */



router.get('/', getAll);
router.get('/:numero', getByNumero);

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Crea un nuevo vuelo
 *     tags: [Vuelos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: "#/components/schemas/Vuelo"
 *     responses:
 *       201:
 *         description: Vuelo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 detail:
 *                   type: object
 *                   description: Detalles del vuelo creado
 *       500:
 *         description: Error en el servidor
 */
router.post('/create', validateCreateVuelo, validate, create);


/**
 * @swagger
 * /update:
 *   put:
 *     summary: Actualiza un vuelo existente
 *     tags: [Vuelos]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del vuelo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: "#/components/schemas/Avion"
 *     responses:
 *       201:
 *         description: Vuelo actualizado exitosamente
 *       404:
 *         description: Vuelo no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.put('/update', validateUpdateVuelo, validate, update);
router.delete('/delete', deleteOne);
router.delete('/destroy', deleteMany);


export default router;