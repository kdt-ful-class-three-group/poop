import express from "express";
import pool from "../config/database.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM quiz");
    res.json(rows);

  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  const { question, answer } = req.body

  //값이 없을 때
  if (!question || !answer) {
    return res.status(400).json('데이터의 구조가 잘못 되었습니다.');
  }

  try {
    await pool.execute('INSERT INTO quiz (question, answer) VALUES (?,?)', [question, answer]);
    // 성공시 응답
    res.status(201).json('전송 성공');
  }
  catch (err) {
    console.error(err)
    res.status(500).json('전송 실패');
  }
})

export default router;
