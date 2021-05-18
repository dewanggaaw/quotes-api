import mysql from "mysql";
import env from "dotenv";
env.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
});

export default db;
