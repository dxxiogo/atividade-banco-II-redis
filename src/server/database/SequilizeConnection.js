const {Sequelize} = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize('aula-bd2', process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres'
  });

async function tryConnectionDatabase () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}



module.exports = {tryConnectionDatabase, sequelize};