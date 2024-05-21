import { Sequelize } from "sequelize";
let sequelizeConnection = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DATABASE,
    port: 5432,
});
export default sequelizeConnection;
//# sourceMappingURL=connection.js.map