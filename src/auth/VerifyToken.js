const jwt = require('jsonwebtoken')
const ENV = require('../config/ENV')


exports.verifyToken = (token) => {
    return jwt.verify(token, ENV.JWT_SECRET)
}