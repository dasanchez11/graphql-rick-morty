import dotenv from "dotenv";
dotenv.config({ path: `.env` });
export default {
    PORT,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_DATABASE,
    DB_DRIVER,
    DB_PORT,
} = { ...process.env };
//# sourceMappingURL=configs.js.map