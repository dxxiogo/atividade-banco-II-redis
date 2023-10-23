const {sequelize} = require("../database/SequilizeConnection");
const { DataTypes } = require("sequelize");

const Usuario = sequelize.define('Usuario', {
    email:{
      type: DataTypes.STRING,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      unique: true,
    }
  }, {})
  
  async function sincrozinar () {
    await Usuario.sync();
    console.log('Sicronizando...')
  }
  


module.exports = {sincrozinar, Usuario};