const { generateToken } = require('../auth/generateToken');
const User = require('../model/usersModel');
const response = require('../util/response');
const passport = require("passport");




exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return response.clientError(res, "Please Provide the email, password!");

        let user = await User.findOne({ email });
        if (!user) return response.succes(res, "User Not Exist!");

        if (user.password !== password) return response.unAuth(res, "Invalid credentials!");

        const token = generateToken({ email, name: user.name, role: user.role, _id: user._id });

        return response.succes(res, "Login!", { token, id: user._id, email, name: user.name, role: user.role });
    } catch (error) {
        return response.server(res);
    }
}

exports.googleLogin = () => {
    try {
        passport.authenticate('google', { scope: ['email', 'profile'] });
    } catch (error) {
        console.log(error)
        return null;
    }
}

exports.googleCallback = () => {
    try {
        passport.authenticate('google', {
            successRedirect: '/api/v1/', // TODO Enter Frontend Home URL
            failureRedirect: '/auth/google/failure'
        })
    } catch (error) {
        console.log(error)
        return null;
    }
}
exports.googleLoginFailure = async (req, res) => {
    try {
        return response.clientError(res, "Failed to authenticate..");
    } catch (error) {
        return response.server(res);
    }
}

exports.logout = async (req, res) => {
    try {
        req.logout();
        req.session.destroy();
        // For logout, the frontend team can simply remove the token. Then, users won't be able to access private routes.
        return response.succes(res, "User logout!");
    } catch (error) {
        return response.server(res);
    }
}
