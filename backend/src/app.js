const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const config = require('config');

var cors = require('cors');

const studentsRouter = require('./routes/Students');
const vendorsRouter = require('./routes/Vendors');
const adminRouter = require('./routes/Admin');
const authRouter = require('./routes/Auth');
const imageRouter = require('./routes/Image');

const app = express();
dotenv.config();

const run = async () => {
    if (process.env.NODE_ENV === 'test') {
        // if we are in test mode, we use the test database
        await mongoose.connect(process.env.MONGO_URI_TEST, {
            // connect to mongoDB
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } else {
        if (process.env.VERSION === 'production') {
            // if we are in production mode, we use the production database
            await mongoose.connect(process.env.MONGO_URI_PROD, {
                // connect to mongoDB
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        } else if (process.env.VERSION === 'staging') {
            // if we are in staging mode, we use the staging database
            await mongoose.connect(process.env.MONGO_URI_STAG, {
                // connect to mongoDB
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }
    }
};

if (process.env.NODE_ENV !== 'test') {
    run();
}

var db = mongoose.connection; // get the connection
db.on('error', console.error.bind(console, 'connection error:'));

const options = {
    // swagger options
    definition: {
        openapi: '3.0.0',
        info: {
            title: config.get('swagger.title'),
            version: config.get('swagger.version'),
        },
        servers: [
            {
                url: config.get('swagger.url'), // url of the server
            },
        ],
    },
    apis: ['./src/routes/Students.js', './src/routes/Vendors.js'], // path to the API docs
};

const specs = swaggerJsDoc(options); // create the swagger docs

if (process.env.VERSION === 'staging') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); // setup the swagger docs route
}

app.use(cors()); // enable CORS

app.use(express.json()); // for parsing application/json

app.get('/test', (req, res) => {
    // test db connection
    res.json({ status: db.readyState, database: db.name });
});

app.use('/admin', adminRouter); // route for admin-bro
app.use('/api/students', studentsRouter); // student routes
app.use('/api/vendors', vendorsRouter); // vendor routes
app.use('/api/auth', authRouter); // auth routes
app.use('/api/images', imageRouter); // image routes

module.exports = app; // export the app for testing
