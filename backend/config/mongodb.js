const { MongoClient } = require('mongodb');
require('dotenv/config');

// Connection URI
const uri = process.env.MONGO_URI;

// Create a new MongoClient
const Client = new MongoClient(uri, { useNewUrlParser: true });

// export the client
module.exports = Client;