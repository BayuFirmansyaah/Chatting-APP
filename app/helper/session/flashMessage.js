const flashMessage = (req, data) => {
    req.session.flashMessage = data;
    req.session.save();
}

module.exports = flashMessage;