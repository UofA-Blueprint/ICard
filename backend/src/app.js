const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

var cors = require('cors')

const studentsRouter = require('./routes/Students')
const authRouter = require('./routes/Auth')

const app = express()
dotenv.config()

if (process.env.NODE_ENV === 'test') {
    // if we are in test mode, we use the test database
    mongoose.connect(process.env.MONGO_URI_TEST, {
        // connect to mongoDB
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
} else if (process.env.VERSION === 'production') {
    mongoose.connect(process.env.MONGO_URI, {
        // if we are in production mode, we use the production database
        // connect to mongoDB
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
} else if (process.env.VERSION === 'staging') {
    mongoose.connect(process.env.MONGO_URI_STAGING, {
        // if we are in staging mode, we use the staging database
        // connect to mongoDB
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

var db = mongoose.connection // get the connection
db.on('error', console.error.bind(console, 'connection error:'))

app.use(cors()) // enable CORS

app.use(express.json()) // for parsing application/json

app.get('/test_db_conn', (req, res) => {
    // test db connection
    res.json({ status: db.readyState, database: db.name })
})

app.use('/api/auth', authRouter) // auth routes
app.use('/api/students', studentsRouter) // student routes

module.exports = app // export the app for testing
