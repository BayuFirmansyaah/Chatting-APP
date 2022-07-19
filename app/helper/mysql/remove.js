const mysql = require('mysql2');
const connection = require('../../config/mysql');

const remove = (table, field, value) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${table} WHERE ${field}='${value}' `,(err, result)=>{
            if(err){
                console.log(err);
                reject({code: 400, result: err})
            }

            resolve({code: 200, result});
        })
    })
}

module.exports = remove;