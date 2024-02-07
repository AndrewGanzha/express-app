import request from 'supertest';
import {app} from '../../src';

describe('/transports', () => {
    beforeAll(async () => {
        await request(app).delete('/__test__/data')
    })

    it ('should return 200 and empty array', async () => {
        await request(app)
            .get('/transports')
            .expect(200, [])
    })

    it ('should return 404 for not existing course', async () => {
        await request(app)
            .get('/transports/333')
            .expect(404)
    })

    it('shouldnt create transport with incorrect input data', async () => {
        await request(app)
            .post('/transports')
            .send({name: ''})
            .expect(400)

        await request(app)
            .get('/transports')
            .expect(200, [])
    })

    it('should create transport with correct input data', async () => {
        const createResponse = await request(app)
            .post('/transports')
            .send({name: 'Площадь Ленина'})
            .expect(201)

        const createdTransport = createResponse.body;
        console.log(createdTransport);

        expect(createdTransport).toEqual({
            id: expect.any(Number),
            name: 'Площадь Ленина'
        })
    })
})