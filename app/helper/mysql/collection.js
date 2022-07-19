const mysql = require('mysql2');
const connection = require('../../config/mysql')

const collection = (table) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, result) => {
            if(err){
                console.log(err);
                reject({status: 'error', code: error.code, message: "An error occured while processing data"});
            }

            resolve({code: 200, result});
        })
    })
}

module.exports = collection;