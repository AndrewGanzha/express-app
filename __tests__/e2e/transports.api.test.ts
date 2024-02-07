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
})