const { DataTypes } = require("sequelize");

const db = require("../../config/database");

const User = db.define(
  "users",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
    underscored: true,
    timestamp: true,
  }
);
module.exports = User;
