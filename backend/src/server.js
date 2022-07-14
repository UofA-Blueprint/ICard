const app = require('./app')
require('dotenv').config()

app.listen(process.env.PORT || 8080) // start the server
