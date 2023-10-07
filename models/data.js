require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  username: process.env.USERNAMEBD,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

exports.sequelize = sequelize;

//funcion que conecta con la bd
exports.connect = async function () {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la bd de la to do list ");
  } catch (error) {
    console.log(error);
  }
};

// funcion que permite sincronizar los cambios
exports.sync = async function () {
  try {
    await sequelize.sync({ force: true });
    console.log("Base de datos actualizada");
  } catch (error) {
    console.error(error);
  }
};
