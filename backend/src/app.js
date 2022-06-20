const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
var cors = require('cors')

const studentsRouter = require('./routes/Students')
const authRouter = require('./routes/Auth')

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
    // connect to mongoDB
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

var db = mongoose.connection // get the connection
db.on('error', console.error.bind(console, 'connection error:'))

app.use(cors())

app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
    // test db connection
    res.json({ status: db.readyState })
})

app.use('/api/auth', authRouter)
app.use('/api/students', studentsRouter)

module.exports = app // export the app for testing
