const mongoose = require('mongoose');

const Account = new mongoose.model('Account',{
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

module.exports = Account;
