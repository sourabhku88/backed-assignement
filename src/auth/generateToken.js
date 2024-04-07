const jwt = require("jsonwebtoken");
const ENV = require("../config/ENV");


exports.generateToken = (data) => {
    return jwt.sign(data, ENV.JWT_SECRET, { expiresIn: "24h" })
}

