const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const config = {
    store: new MongoDBStore({
        uri: 'mongodb://localhost:27017',
        databaseName: 'chatty',
        collection: 'sessions'
    }),
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        expires: new Date(1000 * 60 * 60 * 24 * 30),
        maxAge: 2628000000
    }
}

module.exports = config;