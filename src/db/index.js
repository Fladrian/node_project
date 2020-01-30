const mysql   = require('mysql');
const config = require('../config');

const {
	connectionLimit,
	host,
	user,
	password,
	database
} = config.db

const pool = mysql.createPool({
    connectionLimit : connectionLimit,
    host: host,
    user: user,
    password: password,
    database: database
});

module.exports = pool;