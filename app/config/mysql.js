const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Express-Thunder'
})

connection.connect((err) => {
    if(err){
        console.log("can't connect to database");
    }
    console.log('Database has been connected ❤️ ❤️ ❤️ ❤️')
})

module.exports = connection;