const { DataTypes } = require("sequelize");

const db = require("../../config/database");

const bookModel = db.define(
  "book",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      references: {
        model: "users",
        key: "id",
      },
    },
    book_name: {
      type: DataTypes.STRING,
    },
    book_type: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
  },
);
module.exports = bookModel;
