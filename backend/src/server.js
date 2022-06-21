const app = require('./app')
require('dotenv').config()
// const port = 8080

app.listen(process.env.PORT || 8080) // start the server
