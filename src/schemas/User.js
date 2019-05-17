const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    role: String,
    active: {
        type: Boolean,
        default: true,
    },
});

module.exports = User;