import mysql from 'mysql2/promise';

const connect = async () => {
  try {
    const connection = await mysql.createConnection({
      host: '127.0.0.1',
      port: 3307,
      user: 'root',
      password: 'root',
      database: 'pooptimedb',
    });

    console.log('✅ 연결 성공!');
    const [rows] = await connection.query('SELECT 1');
    console.log('쿼리 결과:', rows);

    await connection.end();
  } catch (err) {
    console.error('❌ 연결 실패:', err);
  }
};

connect();