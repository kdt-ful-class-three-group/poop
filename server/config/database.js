import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

console.log('🚨 DB ENV:', process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USER, process.env.DB_PASSWORD ? '(ok)' : '(없음)', process.env.DB_NAME);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT), // 꼭 숫자로 변환
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;