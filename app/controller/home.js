const controller = {}
const homeModel = require('../model/home');

controller.index = (req, res) => {
    const chat = homeModel.chatting();
    res.render('home/index',{
        title:'Chatting | Chatty',
        css : 'index',
        js: [],
        chat
    });
}

controller.group = (req, res) => {
    const chat = homeModel.group();
    res.render('home/group',{
        title:'Group | Chatty',
        css : 'index',
        js: [],
        chat
    });
}

controller.call = (req, res) => {
    const calls = homeModel.call();
    res.render('home/call',{
        title:'Call | Chatty',
        css : 'call',
        js: [],
        calls
    });
}

controller.chatting = (req, res) => {
    const id = req.params.id
    const chat = homeModel.chatFriends(id);
    res.render('home/chatting',{
        title:`${chat.name} | Chatty`,
        css : 'chatting',
        js: ['button-back','chatting'],
        chat
    });
}

controller.groupChatting = (req, res) => {
    const id = req.params.id
    const chat = homeModel.chatGroup(id);
    res.render('home/group_chatting',{
        title:`${chat.name} | Chatty`,
        css : 'chatting',
        js: ['button-back'],
        chat
    });
}

controller.login = (req, res) => {
    res.render('auth/login',{
        title:`Login | Chatty`,
        css : 'register',
        js: []
    });
}

controller.register = (req, res) => {
    res.render('auth/register',{
        title:`Register | Chatty`,
        css : 'register',
        js: []
    });
}

module.exports = controller;

