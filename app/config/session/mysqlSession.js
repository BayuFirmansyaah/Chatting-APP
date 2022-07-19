const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const config = {
    store: new MySQLStore({
        host: "localhost",
        user: "root",
        password: "",
        database: "express-thunder",
        clearExpired: true,
        checkExpirationInterval: 600000,
        expiration: 2628000000,
        createDatabaseTable: true,
        connectionLimit: 1,
        endConnectionOnClose: true,
        charset: 'utf8mb4_bin',
        schema: {
            tableName: 'sessions',
            columnNames: {
                session_id: 'session_id',
                expires: 'expires',
                data: 'data'
            }
        }
    }),
    secret: 'mySecretKey',
    name: '_user',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        expires: new Date(1000 * 60 * 60 * 24 * 30),
        maxAge: 2628000000
    },
}

module.exports = config;
