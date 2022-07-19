const validator = require('email-validator');
const account = require('../schema/account');
const flashMessage = require('../helper/session/flashMessage');
const controller = {}

controller.register = async (req, res) => {
    // get data from payload
    const {email, password, repeat_password, username }= req.body;

    // validate email
    const email_validate = validator.validate(email);
    if(email_validate == false){
        flashMessage(req, {type:"danger", message: "email not validate"})
        res.redirect('/register')
        res.end();
    }

    // validate password
     if(password !== repeat_password){
        flashMessage(req, {type:"danger", message: "password doesn't match"})
        res.redirect('/register')
        res.end();
    }

    // check email is already
    let emailReadyInUse;
    await account.findOne({email})
        .then((account) => {emailReadyInUse = account});
         
    if(emailReadyInUse.length > 0){
        flashMessage(req, {type:"danger", message: "email is already in use"})
        res.redirect('/register')
        res.end();
    }

    console.log('success');

}

controller.login = (req, res) => {

}

module.exports = controller;