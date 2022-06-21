const request = require('supertest')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('../src/app')
dotenv.config()

// Test suite that run tests sequentially
describe('Test Suite', () => {
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
        await db.collection('auth').deleteMany({})
        await db.collection('students').deleteMany({})
        await mongoose.connection.close()
    })
    jest.setTimeout(20000) // added a timeout to avoid the test to fail as the MongoDB connection is slow

    describe('test db connection', () => {
        test('should return 1', async () => {
            // test db connection
            const response = await request(app).get('/test_db_conn')
            expect(response.statusCode).toBe(200)
            expect(response.body.status).toBe(1)
            expect(response.body.database).toBe('test')
        })
    })

    describe('test auth', () => {
        test('POST /api/auth/register -> should return status 201, message as Student Registered', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    name: 'Demo User1',
                    email: 'demouser1@ualberta.ca',
                    password: 'demo@123',
                    icard_number: '123456789',
                })
            expect(response.statusCode).toBe(201)
            expect(response.body.message).toBe('Student Registered')
        })

        test('POST /api/auth/login -> should return token with status 200', async () => {
            const response = await request(app).post('/api/auth/login').send({
                email: 'demouser1@ualberta.ca',
                password: 'demo@123',
            })
            expect(response.statusCode).toBe(200) // expect the status code to be 200
        })

        test('POST /api/auth/login -> should return error with status 400, user doesnt exist', async () => {
            const response = await request(app).post('/api/auth/login').send({
                email: 'demouser4545@ualberta.ca',
                password: 'demo@123',
            })

            expect(response.statusCode).toBe(400) // expect the status code to be 400, because the user does not exist
        })

        test('POST /api/auth/login -> should return error with status 400, wrong password', async () => {
            const response = await request(app).post('/api/auth/login').send({
                email: 'demouser1@ualberta.ca',
                password: 'demo@1234',
            })

            expect(response.statusCode).toBe(400) // expect the status code to be 400, because the password is wrong
            expect(response.body.message).toBe('Incorrect username or password') // expect the message to be 'Wrong password'
        })
    })

    describe('test student routes', () => {
        var userId = ''
        var token = ''

        test('GET /api/students/:student -> status code should be 200 and userId should match', async () => {
            // login to get the token and userId such that we can use it in the following tests
            const response = await request(app).post('/api/auth/login').send({
                email: 'demouser1@ualberta.ca',
                password: 'demo@123',
            })
            expect(response.statusCode).toBe(200)
            userId = response.body.user._id // save the userId
            token = response.body.token // save the token

            // get the student
            const response2 = await request(app)
                .get('/api/students/' + userId)
                .set('auth-token', token) // set the token in the header
            expect(response2.statusCode).toBe(200)
            expect(response2.body._id).toBe(userId)
        })

        test('POST /api/students/ -> should return status 201', async () => {
            const response = await request(app)
                .post('/api/students/')
                .set('auth-token', token) // set the token in the header
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
        })

        test('PUT /api/students/:studentId -> should return status 200 with updated student info', async () => {
            const response = await request(app)
                .put('/api/students/' + userId)
                .set('auth-token', token) // set the token in the header
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
                .set('auth-token', token) // set the token in the header
            expect(response.statusCode).toBe(200)
        })
    })
})
