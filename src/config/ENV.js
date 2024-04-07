require('dotenv').config()
const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    API_V: process.env.API_V,
    JWT_SECRET: process.env.JWT_SECRET,
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
}


module.exports = ENV;