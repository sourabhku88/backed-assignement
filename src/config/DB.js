const ENV = require('./ENV');
const mongoose = require('mongoose');

exports.DBconnection = async () => {
    try {
        await mongoose.connect(`${ENV.DB_URL}`);
        console.log('DB connected!');
    } catch (error) {
        console.log(`DB not connected!`);
        console.log(error);
    }
}