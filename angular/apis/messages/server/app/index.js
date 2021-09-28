const mysql = require('mysql');
const dbConfig = require('./config/db.config');

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
});

connection.connect(
    (err) => {
        if (err) {
            throw err;
        } else {
            console.log("Connected to SQL Database: ", dbConfig.database)
        }
    }
);

module.exports = connection;