//import
const mysql = require('mysql2');

require('dotenv').config();

//creating a pool connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

//exporting the pool for it to be accessible
module.exports = pool.promise();