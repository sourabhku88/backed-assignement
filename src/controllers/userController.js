const response = require("../util/response");
const User = require("../model/usersModel");
const { generateToken } = require("../auth/generateToken");
const { uploadImage } = require("../util/uploadImage");


exports.createUser = async (req, res) => {
    try {
        const { email, name, password } = req.body;

        if (!email || !name || !password) return response.clientError(res, "Please Provide the name, email, password!");

        let user = await User.findOne({ email });
        if (user) return response.succes(res, "User Already Exist!");

        user = await User.create(req.body);
        const token = generateToken({ email, name, role: user.role, _id: user._id });

        return response.succes(res, "User created!", { token, id: user._id, email, name, role: user.role });
    } catch (error) {
        return response.server(res);
    }
}
exports.user = async (req, res) => {
    try {
        const { userId } = req.params;

        let user = await User.findById(userId, { role: 0 });

        if (!user) return response.notFound(res, "User details Not found!");

        return response.succes(res, "User Details", user);
    } catch (error) {
        return response.server(res);
    }
}

exports.getUserDetails = async (req, res) => {
    try {
        const { userId } = req.params;

        let user = await User.findById(userId, { role: 0, password: 0, updatedAt: 0 });

        if (!user) return response.notFound(res, "User details Not found!");

        if (req.user.role === "ADMIN") {
            return response.succes(res, "User Details", user);
        };

        if (user.account === "PRIVATE") {
            return response.succes(res, "User Details", { name: user.name, email: user.email, _id: user._id })
        }

        return response.succes(res, "User Details", user);
    } catch (error) {
        return response.server(res);
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        let limit = +req.query.limit || 10;
        let page = +req.query.page || 1;
        let skip = (page - 1) * limit;

        if (req.user.role === "ADMIN") {
            let user = await User.find({},{ name: 1, email: 1, phone: 1, profile_url: 1, DOB: 1 }).skip(skip).limit(limit);

            if (!user.length) return response.notFound(res, "Users Not found!"); // If the value is 0, then run this statement because 0 is a falsy value.

            return response.succes(res, "Users", user);
        };

        let user = await User.find({ account: "PUBLIC" }, { name: 1, email: 1, phone: 1, profile_url: 1, DOB: 1 }).skip(skip).limit(limit);

        if (!user.length) return response.notFound(res, "Users Not found!"); // If the value is 0, then run this statement because 0 is a falsy value.

        return response.succes(res, "Users", user);
    } catch (error) {
        return response.server(res);
    }
}


exports.UpdateUserDetails = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId);

        if (!user) return response.notFound(res, "User details Not found!");

        if (req.files && Object.keys(req.files).length !== 0) {
            const file = req.files[0];
            const result = await uploadImage(file);
            req.body.profile_url = result.secure_url;
        }

        await User.updateOne({ _id: userId }, req.body);

        return response.succes(res, "User Details Updated");

    } catch (error) {
        return response.server(res);
    }
}