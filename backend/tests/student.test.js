const request = require('supertest')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('../src/app')
dotenv.config()

describe('test student routes', () => {
    beforeAll(async () => {
        // connect to mongoDB
        await mongoose.connect(process.env.MONGO_URI_TEST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    })
    afterAll(async () => {
        // disconnect from mongoDB
        var db = mongoose.connection
        await db.collection('students').deleteMany({})
        await mongoose.connection.close()
    })
    jest.setTimeout(20000) // added a timeout to avoid the test to fail as the MongoDB connection is slow

    const api_key = process.env.API_KEY
    var userId = ''
    var icard_number = ''

    test('POST /api/students/ -> should return status 201', async () => {
        const response = await request(app)
            .post('/api/students/')
            .set('x-api-key', api_key) // set the token in the header
            .send({
                // send the student data
                name: 'Demo User2',
                email: 'demouser2@ualberta.ca',
                icard_number: '123456789',
                active: true,
                isaf_paying_status: false,
            })
        expect(response.statusCode).toBe(201)
        userId = response.body._id // save the new userId to use in the following tests
        icard_number = response.body.icard_number // save the new icard_number to use in the following tests
    })

    test('GET /api/students/:studentId -> status code should be 200', async () => {
        const response = await request(app)
            .get('/api/students/' + userId)
            .set('x-api-key', api_key) // set the token in the header
        expect(response.statusCode).toBe(200)
    })

    test('GET /api/students/icard/:icard_number -> status code should be 200', async () => {
        const response = await request(app)
            .get('/api/students/icard/' + icard_number)
            .set('x-api-key', api_key)
        expect(response.statusCode).toBe(200)
    })

    test('GET /api/students/all -> status code should be 200', async () => {
        const response = await request(app)
            .get('/api/students/all')
            .set('x-api-key', api_key)
        expect(response.statusCode).toBe(200)
    })

    test('PUT /api/students/:studentId -> should return status 200 with updated student info', async () => {
        const response = await request(app)
            .put('/api/students/' + userId)
            .set('x-api-key', api_key) // set the token in the header
            .send({
                // send the student data
                name: 'Demo User2',
                email: 'demouser2@ualberta.ca',
                icard_number: '123456789',
                active: true,
                isaf_paying_status: true,
            })

        expect(response.statusCode).toBe(200) // expect the status code to be 200
        expect(response.body.message).toBe('Student Updated')
    })

    test('DELETE /api/students/:studentId -> should return status 200', async () => {
        const response = await request(app)
            .delete('/api/students/' + userId)
            .set('x-api-key', api_key) // set the token in the header
        expect(response.statusCode).toBe(200)
    })
})
