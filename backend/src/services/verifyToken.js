const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

// create OAuth client for google authentication
const client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'postmessage',
    (CLOCK_SKEW_SECS_ = 0)
);
function verifyToken(req, res, next) {
    // Verifies the auth-token passed in the request header and returns the user if valid
    const token = req.header('auth-token'); // get the token from the header
    if (!token)
        // if no token, return 401
        return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        // try to decode the token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next(); // if valid, call next() to continue
    } catch (err) {
        res.status(400).json({ message: 'Invalid token.' });
    }
}

// verifies the api token before accessing the route
function verifyApiKey(req, res, next) {
    const apiKey = req.header('x-api-key');
    if (!apiKey) return res.status(401).json({ message: 'Access denied. No api-key provided.' });

    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({ message: 'Invalid api-key.' });
    } else {
        next();
    }
}

// verifies the google token and returns the user if valid
async function checkAuthenticated(req, res, next) {
    let code = req.header('session-token'); // get the token from the header
    const { tokens } = await client.getToken(code);
    // console.log("We got this token",tokens);
    let user = {}; // create an empty user object
    async function verify() {
        const ticket = await client.verifyIdToken({
            // verify the token
            idToken: tokens.id_token,
            audience: process.env.CLIENT_ID,
        });
        const payload = ticket.getPayload(); // get the payload with the user data
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
    }
    verify()
        .then(() => {
            req.user = user; // set the user object to the request
            next(); // call next() to continue
        })
        .catch((error) => {
            console.log(error);
            res.status(401).json({ message: 'Invalid token.' });
        });
}

const validateJwtToken = async (req, res, next) => {
    const token = req.header('jwt-token');
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const verified = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = {
    verifyToken: verifyToken,
    verifyApiKey: verifyApiKey,
    checkAuthenticated: checkAuthenticated,
    validateJwtToken: validateJwtToken,
};
