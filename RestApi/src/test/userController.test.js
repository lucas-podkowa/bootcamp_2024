import request from "supertest";
import app from "../app.js";
import pool from './../config/db.js'

//Comienza una transacción
beforeEach(async () => {
    await pool.query('BEGIN');
});

//Revertimos la transacción después de cada test
afterEach(async () => {
    await pool.query('ROLLBACK');
});

describe('User Login', () => {

    it('Should return a token when valid credentials are provided', async () => {
        const response = await request(app)
            .post('/usuario/login')
            .send({
                mail: "mail@mail.com",
                pass: "pepito123"
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('credentials');
    })

    it('Should return 404 when invalid credentials are provided', async () => {
        const response = await request(app)
            .post('/usuario/login')
            .send({
                mail: "invalid@email.com",
                pass: "invalidPass"
            });

        expect(response.status).toBe(404);
    })

    it('Should return 403 when invalid password', async () => {
        const response = await request(app)
            .post('/usuario/login')
            .send({
                mail: "mail@mail.com",
                pass: "guaraguara"
            });

        expect(response.status).toBe(403);
    })

});