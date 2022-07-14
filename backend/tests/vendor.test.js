const request = require('supertest')
const mongoose = require('mongoose')
// const dotenv = require('dotenv')
const app = require('../src/app')
// dotenv.config()

describe('Test Vendor Routes', ()=>{
    beforeAll(async()=> {
        await mongoose.connect(process.env.MONGO_URI_TEST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    })
    afterAll(async()=> {
        var db = mongoose.connection
        await db.collection('vendors').deleteMany({})
        await mongoose.connection.close()
    })

    jest.setTimeout(20000) // added a timeout to avoid the test to fail as the MongoDB connection is slow


    test('GET /api/vendors/ -> without api-key should return 401', async()=>{
        const res = await request(app).get('/api/vendors/')
        expect(res.statusCode).toBe(401)
    })

    const api_key = process.env.API_KEY
    var vendorId = ''

    test('GET /api/vendors/ -> should return 200 with all vendors', async () => {
        const response = await request(app)
            .get('/api/vendors/')
            .set('api-key', api_key)
        expect(response.statusCode).toBe(200)
    })

    test('POST /api/vendors/ -> should return 201 with new vendor', async () => {
        const response = await request(app)
            .post('/api/vendors/')
            .set('api-key', api_key)
            .send({
                name: 'Demo Vendor',
                address: '123 Main St',
                description: 'This is a demo vendor',
                phone_number: '1234567890',
            })
        expect(response.statusCode).toBe(201)
        vendorId = response.body._id
    })

    test('PUT /api/vendors/:vendorId -> should return 200 with updated vendor', async () => {
        const response = await request(app)
            .put('/api/vendors/' + vendorId)
            .set('api-key', api_key)
            .send({
                name: 'Demo Vendor Updated',
                address: '123 Main St Updated',
                description: 'This is a demo vendor updated',
                phone_number: '1234567890',
            })
        expect(response.statusCode).toBe(200)
    })

    test('DELETE /api/vendors/:vendorId -> should return 200 with deleted vendor', async () => {
        const response = await request(app)
            .delete('/api/vendors/' + vendorId)
            .set('api-key', api_key)
        expect(response.statusCode).toBe(200)
    })
})
