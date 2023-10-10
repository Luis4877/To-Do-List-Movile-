const { sequelize } = require("./data");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("User", {
 
  username: {
    type: DataTypes.STRING(25),
    allowNull: false,
    unique: true,
  },
  correo: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: false,
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: false,
    validate: {
      len: [10, 45],
    },
  },
});
