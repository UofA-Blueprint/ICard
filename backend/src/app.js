const express = require('express')
const mongoose = require('mongoose')
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')
const dotenv = require('dotenv')
const Student = require('./models/Student')
const User = require('./models/User')
const Vendor = require('./models/Vendor')
const bcrypt = require('bcrypt')
var cors = require('cors')

const studentsRouter = require('./routes/Students')
const vendorsRouter = require('./routes/Vendors')

const app = express()
dotenv.config()

AdminJS.registerAdapter(AdminJSMongoose)

const run = async () => {
    let connectionString;

    if (process.env.NODE_ENV === 'test') {
        connectionString = process.env.MONGO_URI_TEST
    } else {
        if (process.env.VERSION === 'production') {
            connectionString = process.env.MONGO_URI_PROD
        } else if (process.env.VERSION === 'staging') {
            connectionString = process.env.MONGO_URI_STAG
        }
    }

    const connection = await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const adminJs = new AdminJS({
        databases: [connection],
        rootPath: '/admin',
    })

    const adminJsOptions = {
        resources: [Student, Vendor]
    }

    const adminJS = new AdminJS(adminJsOptions)
    const router = AdminJSExpress.buildRouter(adminJS)

    var db = mongoose.connection // get the connection
    db.on('error', console.error.bind(console, 'connection error:'))

    app.use(adminJs.options.rootPath, router)

    app.use(cors()) // enable CORS

    app.use(express.json()) // for parsing application/json

    app.get('/test_db_conn', (req, res) => {
        // test db connection
        res.json({ status: db.readyState, database: db.name })
    })

    app.use('/api/students', studentsRouter) // student routes
    app.use('/api/vendors', vendorsRouter) // vendor routes
}

run()


module.exports = app // export the app for testing
