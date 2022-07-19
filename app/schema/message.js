const mongoose = require('mongoose');

const Message = new mongoose.model('Message',{
    message: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        require: true,
    },
    receiver: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    }
});

module.exports = Message;