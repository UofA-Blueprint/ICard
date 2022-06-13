const express = require('express');
const app = express();
const client = require('./config/mongodb');
require('dotenv/config');

const port = process.env.PORT || 3000;

app.get('/test-db-connection', async(req, res) => {
    try {
        // Connect the client to the server
        await client.connect();

        // Establish and verify connection
        await client.db("ICard").command({ping: 1});
        res.send("Connected");
    } catch {
        res.send("Error connecting to MongoDB");
    } finally {
        // Close the connection to the server
        await client.close();
    }
})

if (process.env.NODE_ENV !== 'test') {
    app.listen(port)
}

// for testing
module.exports = app;