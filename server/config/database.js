import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();


const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: "poop123",
  database: "poopdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
