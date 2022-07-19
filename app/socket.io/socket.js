// import controller here
const chat = require('../model/chat');

const socket = (io) => {
    io.on('connection', (socket) => {
        // to get message
        socket.on('get message', async (id) => {
            const result = await chat.getAllMessage(id);
        })

        // to save message into database
        socket.on('send message', async (chat) => {
            console.log(chat);
            // insert into database
            // const result = await chat.sendMessage(chat);
            
            // send back into users
            // socket.emit('send back', result);
        })
    })
}


module.exports = socket;