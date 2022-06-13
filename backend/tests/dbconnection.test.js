const request = require('supertest')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('../src/app')
dotenv.config()

describe('test db connection', () => {
    beforeAll(async () => {
        // connect to mongoDB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    })
    afterAll(async () => {
        // disconnect from mongoDB
        await mongoose.connection.close()
    })

    test('should return 1', async () => {
        // test db connection
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
        expect(response.body.status).toBe(1)
    })
})
