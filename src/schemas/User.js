const mongoose = require('mongoose');
const crypto = require('crypto');

const User = new mongoose.Schema({
    email: String,
    name: String,
    hashed_password: String,
    salt: String,
    role: String,
    active: {
        type: Boolean,
        default: true,
    },
});

User.methods.hashPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    return crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

User.methods.validatePassword = function(password){
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hashed_password === hash;
};
module.exports = mongoose.model('User', User);;