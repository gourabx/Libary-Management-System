const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  //   process.env.DB_NAME,
  //   process.env.DB_USER_NAME,
  //   process.env.DB_USER_PASSWORD,
  "library",
  "root",
  "admin",
  {
    host: "localhost",
    dialect: "mysql",
    // timezone: process.env.DB_TIME_ZONE,
    logging: false,
    port: 3306,
    pool: {
      max: 15,
      min: 5,
      idle: 20000,
      evict: 15000,
      acquire: 30000,
    },
    // timezone: process.env.DB_TIME_ZONE,
  }
);

module.exports = sequelize;
