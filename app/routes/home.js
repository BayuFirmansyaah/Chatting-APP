const express = require('express');
const router = express.Router();

// controller
const home = require('../controller/home')

// home
router.get('/', home.index)
router.get('/group', home.group)
router.get('/call', home.call)
router.get('/chatting/:id', home.chatting)
router.get('/group/:id', home.groupChatting)

// auth
router.get('/login', home.login)
router.get('/register', home.register)

module.exports = router;