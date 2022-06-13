const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
    // connect to mongoDB
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

var db = mongoose.connection // get the connection
db.on('error', console.error.bind(console, 'connection error:'))

app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
    // test db connection
    res.json({ status: db.readyState })
})

module.exports = app // export the app for testing
