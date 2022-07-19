const Message = require('../schema/message');
const model = {}

model.sendMessage = async (chat) => {
    // get message value
    const _msg = chat;
    _msg.timestamp = Date.now();

    // const result 
    let result;
    const execute = new Message(_msg);

    await execute.save()
        .then((msg) => {result = msg;})
        .catch(() => {result = {message:"",receiver:"",sender:""}})

    return result
}

module.exports = model;
