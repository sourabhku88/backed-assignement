const ENV = require('../config/ENV');
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: ENV.CLOUD_NAME,
    api_key: ENV.API_KEY,
    api_secret: ENV.API_SECRET
});


exports.uploadImage = async (file) => {
    try {
        return await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: "auto" }, (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }).end(file.buffer);
        });
    } catch (error) {
        console.log(error);
    }
}