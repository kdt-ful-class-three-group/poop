import mysql from "mysql2/promise";
// import dotenv from "dotenv";
// dotenv.config();

const pool = mysql.createPool({
  host: "192.168.100.74",
  user: "poop",
  password: "poop123",
  database: "poopdb",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
