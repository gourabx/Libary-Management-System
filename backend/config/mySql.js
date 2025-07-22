const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const db = {};

db.User = require("../src/models/UsersModel");
db.product = require("../src/models/bookModel");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
module.exports = db;
