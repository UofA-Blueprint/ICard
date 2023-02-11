const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT || 3000); // start the server
