const Sequelize = require('sequelize');
const mysql = require('mysql2/promise')
require('dotenv').config();

let sequelize;

async function init() {
  if(process.env.JAWSDB_URL){
    const connection = await mysql.createConnection(process.env.JAWSDB_URL);
    await connection.query(`CREATE DATABASE IF NOT EXISTS test;`); 
  } else {
    const connection = await mysql.createConnection({"host": 'localhost', "port": 3306, "user": process.env.DB_USER, "password": process.env.DB_PASSWORD });
    await connection.query(`CREATE DATABASE IF NOT EXISTS test;`);
  }
}
init();

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;