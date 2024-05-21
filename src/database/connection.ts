import { Sequelize } from "sequelize";

let sequelizeConnection: Sequelize = new Sequelize(
  process.env.DB_DATABASE as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DATABASE as any,
    port: 5432,
  }
);

export default sequelizeConnection;
