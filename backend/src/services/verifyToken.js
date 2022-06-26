const jwt = require('jsonwebtoken')
require('dotenv').config()

function verifyToken(req, res, next) {
    // Verifies the auth-token passed in the request header and returns the user if valid
    const token = req.header('auth-token') // get the token from the header
    if (!token)
        // if no token, return 401
        return res
            .status(401)
            .json({ message: 'Access denied. No token provided.' })

    try {
        // try to decode the token
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        next() // if valid, call next() to continue
    } catch (err) {
        res.status(400).json({ message: 'Invalid token.' })
    }
}

function verifyApiKey(req, res, next) {
    const apiKey = req.header('api-key')
    if (!apiKey)
        return res
            .status(401)
            .json({ message: 'Access denied. No api-key provided.' })

    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({ message: 'Invalid api-key.' })
    } else {
        next()
    }
}

module.exports = {
    verifyToken: verifyToken,
    verifyApiKey: verifyApiKey,
}
