const response = require("../util/response");
const { verifyToken } = require("./VerifyToken");


exports.authentication = (req, res, next) => {
    try {
        let token = req.headers['authorization'];
        if (!token) return response.unAuth(res, "Provide Token!");

        const decodeData = verifyToken(token);

        req.user = decodeData

        next();

    } catch (error) {
        response.server(res);
    }
}


exports.authorazation = (req, res, next) => {
    try {
        if (req.user._id !== req.params.userId) return response.unAuth(res, "Access Denied!");
        next();
    } catch (error) {
        response.server(res);
    }
}

exports.adminAuthorazation = (req, res, next) => {
    try {
        if (req.user.role !== "ADMIN") return response.unAuth(res, "Access Denied!");
        next();
    } catch (error) {
        response.server(res);
    }
}