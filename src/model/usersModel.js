const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    account: {
        type: String,
        enum: ["PUBLIC", "PRIVATE"],
        default: 'PUBLIC'
    },
    profile_url: {
        type: String,
        default: ''
    },
    DOB: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
}, {
    timestamps: true,
    versionKey: false
});


module.exports = mongoose.model('users', usersSchema);