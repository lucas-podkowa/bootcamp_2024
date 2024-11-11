import app from './../app'
import request from 'supertest'

describe('APP', () => {

    it('GET /  - deberia devolver un estado 200', async () => {
        const response = await request(app).get('/').send();
        //console.log(response)
        // expect(response.status).toBe(200);
        expect(response.statusCode).toBe(200);
    });

    test('GET /hola - deberia devolver un array de objetos', async () => {
        const response = await request(app).get('/hola').send();
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", 'Hola mundo');
        //        expect(Array.isArray(response.body)).toBe(true);
    })

});