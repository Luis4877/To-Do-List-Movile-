const { sequelize } = require("./data");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define(
  "Task",
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10, 300],
      },
    },
    status: {
  
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue:"INCOMPLETE",
    },
  },
  { timestamps: true }
);
