const fs = require('fs');
const path = require('path')
const model = {}

model.chatting = () => {
    const db = path.join( __dirname + '/../database/chat.json');
    let chatting = fs.readFileSync(db, 'utf-8');
    chatting = JSON.parse(chatting);
    chatting = chatting.friends;
    return chatting;
}

model.group = () => {
    const db = path.join( __dirname + '/../database/chat.json');
    let chatting = fs.readFileSync(db, 'utf-8');
    chatting = JSON.parse(chatting);
    chatting = chatting.group;
    return chatting;
}

model.call = () => {
    const db = path.join( __dirname + '/../database/chat.json');
    let chatting = fs.readFileSync(db, 'utf-8');
    chatting = JSON.parse(chatting);
    chatting = chatting.call;
    return chatting;
}

model.chatFriends = (id) => {
    const db = path.join( __dirname + '/../database/chat.json');
    let chatting = fs.readFileSync(db, 'utf-8');
    chatting = JSON.parse(chatting);
    chatting = chatting.friends;
    chatting = chatting.filter((friend) => friend.id == id);
    chatting = chatting[0];
    return chatting;
}

model.chatGroup = (id) => {
    const db = path.join( __dirname + '/../database/chat.json');
    let chatting = fs.readFileSync(db, 'utf-8');
    chatting = JSON.parse(chatting);
    chatting = chatting.group;
    chatting = chatting.filter((group) => group.id == id);
    chatting = chatting[0];
    return chatting;
}

module.exports = model;