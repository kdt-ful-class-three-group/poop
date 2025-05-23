import express from "express";
import pool from "../config/database.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM horror");
    res.json(rows);
    console.log(rows);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const {question, answer} = req.body;
    if (!question || !answer) {
      return res.status(400).json('질문 혹은 답변이 잘못되어 있습니다.');
    }
    await pool.execute('insert into horror (question, answer) values (?, ?)', [question, answer]);
    res.status(200);
    res.json('전송 성공');
  } catch (error) {
    res.status(500).json('전송 실패');
  }
})

export default router;