require("ts-node/register");
require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DRIVER,
  port: process.env.DB_PORT,
};
